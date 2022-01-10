if (self.CavalryLogger) {
  CavalryLogger.start_js(["Q3BDtU7"]);
}

__d(
  "CometFeedStoryAttachmentRenderer_attachment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachmentRenderer_attachment",
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
          name: "style_list",
          storageKey: null,
        },
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "render_location",
              variableName: "renderLocation",
            },
            {
              kind: "Literal",
              name: "supported",
              value: [
                "StoryAttachmentCommunityCommerceProductRecommendationStyleRenderer",
                "StoryAttachmentNullStyleRenderer",
                "StoryAttachmentEmptyStyleRenderer",
                "StoryAttachmentFbNoteStyleRenderer",
                "StoryAttachmentQuiltStyleRenderer",
                "StoryAttachmentQuiltCardsStyleRenderer",
                "StoryAttachmentBirthdayStyleRenderer",
                "StoryAttachmentPageRecommendationStyleRenderer",
                "StoryAttachmentPageRecommendationAlbumStyleRenderer",
                "StoryAttachmentPageRecommendationTagsStyleRenderer",
                "StoryAttachmentFunFactsStyleRenderer",
                "StoryAttachmentFunFactsStackStyleRenderer",
                "StoryAttachmentPageShareStyleRenderer",
                "StoryAttachmentGametimeStyleRenderer",
                "StoryAttachmentGoodwillProductSystemCampaignStyleRenderer",
                "StoryAttachmentGoodwillSharedStyleRenderer",
                "StoryAttachmentAlbumStyleRenderer",
                "StoryAttachmentAlbumColumnStyleRenderer",
                "StoryAttachmentAlbumBannerStyleRenderer",
                "StoryAttachmentAlbumFrameStyleRenderer",
                "StoryAttachmentAlbumSaleItemStyleRenderer",
                "StoryAttachmentVolunteeringEventStyleRenderer",
                "StoryAttachmentVolunteeringEventActivityShiftStyleRenderer",
                "StoryAttachmentCrisisListingStyleRenderer",
                "StoryAttachmentCrisisMarkSafeStyleRenderer",
                "StoryAttachmentCrisisShareStyleRenderer",
                "StoryAttachmentCrisisHubShareStyleRenderer",
                "StoryAttachmentCrisisDonationStyleRenderer",
                "StoryAttachmentFundraiserDonateButtonStyleRenderer",
                "StoryAttachmentFundraiserFBSeedingGiftStyleRenderer",
                "StoryAttachmentPlaceListStyleRenderer",
                "StoryAttachmentLookingForPlayersStyleRenderer",
                "StoryAttachmentMapStyleRenderer",
                "StoryAttachmentAsset3dStyleRenderer",
                "StoryAttachmentEventStyleRenderer",
                "StoryAttachmentShopStyleRenderer",
                "StoryAttachmentGroupStyleRenderer",
                "StoryAttachmentGroupSellProductItemStyleRenderer",
                "StoryAttachmentNoteStyleRenderer",
                "StoryAttachmentKnowledgeNoteStyleRenderer",
                "StoryAttachmentKnowledgeCollectionStyleRenderer",
                "StoryAttachmentPhotoStyleRenderer",
                "StoryAttachmentPhotoSaleItemStyleRenderer",
                "StoryAttachmentPhotoReviewStyleRenderer",
                "StoryAttachmentFileUploadStyleRenderer",
                "StoryAttachmentProfileIntroCardBioStyleRenderer",
                "StoryAttachmentProfileMediaStyleRenderer",
                "StoryAttachmentAnimatedImageShareStyleRenderer",
                "StoryAttachmentImageShareStyleRenderer",
                "StoryAttachmentAnonymousAuthorInfoStyleRenderer",
                "StoryAttachmentGroupAnonymousPendingPostDisclaimerStyleRenderer",
                "StoryAttachmentC4GThreadCreationStyleRenderer",
                "StoryAttachmentC4GMessageStyleRenderer",
                "StoryAttachmentAnonymousPostContentStyleRenderer",
                "StoryAttachmentShareMediumStyleRenderer",
                "StoryAttachmentSharePortraitStyleRenderer",
                "StoryAttachmentShareSevereStyleRenderer",
                "StoryAttachmentShareStyleRenderer",
                "StoryAttachmentCommunityPromptFooterStyleRenderer",
                "StoryAttachmentVideoStyleRenderer",
                "StoryAttachmentFallbackStyleRenderer",
                "StoryAttachmentLifeEventStyleRenderer",
                "StoryAttachmentScheduledLiveVideoPostStyleRenderer",
                "StoryAttachmentLiveVideoScheduleStyleRenderer",
                "StoryAttachmentLDPAppInstanceStyleRenderer",
                "StoryAttachmentLiveVideoRehearsalStyleRenderer",
                "StoryAttachmentMultiShareStyleRenderer",
                "StoryAttachmentMediaPollStyleRenderer",
                "StoryAttachmentTextPollStyleRenderer",
                "StoryAttachmentTextPollNonInteractiveStyleRenderer",
                "StoryAttachmentVisualPollStyleRenderer",
                "StoryAttachmentListStoryStyleRenderer",
                "StoryAttachmentGamesInstantPlayStyleRenderer",
                "StoryAttachmentMeetUpEventStyleRenderer",
                "StoryAttachmentInstantGamesTournamentStyleRenderer",
                "StoryAttachmentMovieStyleRenderer",
                "StoryAttachmentAvatarStyleRenderer",
                "StoryAttachmentVoterRegistrationStyleRenderer",
                "StoryAttachmentElectionDayReminderStyleRenderer",
                "StoryAttachmentElectionInfoStyleRenderer",
                "StoryAttachmentVoteByMailStyleRenderer",
                "StoryAttachmentCensusStyleRenderer",
                "StoryAttachmentWorkShiftSwapStyleRenderer",
                "StoryAttachmentWoodhengeStyleRenderer",
                "StoryAttachment3DPhotoStyleRenderer",
                "StoryAttachment360PhotoStyleRenderer",
                "StoryAttachmentBloodDonationPartnerCTAStyleRenderer",
                "StoryAttachmentUnavailableStyleRenderer",
                "StoryAttachmentWorkLinkPreviewStyleRenderer",
                "StoryAttachmentWorkContentStyleRenderer",
                "StoryAttachmentPhotoLinkShareStyleRenderer",
                "StoryAttachmentPlayWithFriendsStyleRenderer",
                "StoryAttachmentSimpleMusicStyleRenderer",
                "StoryAttachmentQuarantinedVideoStyleRenderer",
                "WorkStoryAttachmentMajorEventStyleRenderer",
                "WorkStoryAttachmentChecklistStyleRenderer",
                "StoryAttachmentWorkVideoMeetupStyleRenderer",
                "StoryAttachmentVideoMeetupStyleRenderer",
                "StoryAttachmentVideoMeetupLinkStyleRenderer",
                "StoryAttachmentChatroomStyleRenderer",
                "StoryAttachmentSocialLearningPreviewPhotoStyleRenderer",
                "StoryAttachmentAMAStyleRenderer",
                "StoryAttachmentAMACardsStyleRenderer",
                "StoryAttachmentTournamentMatchSetStyleRenderer",
                "StoryAttachmentSocialLearningUnitCreatedStyleRenderer",
                "StoryAttachmentSocialLearningUnitCompletedStyleRenderer",
                "StoryAttachmentGroupQuizStyleRenderer",
                "StoryAttachmentBreakingNewsShareStyleRenderer",
                "StoryAttachmentRecruitingResumeReviewStyleRenderer",
                "StoryAttachmentHiringManagerConsiderationStyleRenderer",
                "StoryAttachmentProfileCommercePostStyleRenderer",
                "StoryAttachmentCommerceAttachmentStyleRenderer",
                "StoryAttachmentFluShotPledgeStyleRenderer",
                "StoryAttachmentCovidVaccineFinderStyleRenderer",
                "StoryAttachmentCovidVaccineFinderProviderStyleRenderer",
                "StoryAttachmentNeonStyleRenderer",
                "StoryAttachmentReportedGroupEventStyleRenderer",
                "StoryAttachmentGroupApplicationStyleRenderer",
                "StoryAttachmentCrowdsourcingBadgeShareStyleRenderer",
                "StoryAttachmentQAApprovedAnswerStylerRenderer",
                "StoryAttachmentInterviewMarketplaceListingStyleRenderer",
                "WorkStoryAttachmentRecruitingGroupConsiderationShareStyleRenderer",
                "WorkStoryAttachmentRecruitingGroupCandidateShareStyleRenderer",
                "StoryAttachmentGroupWelcomePostStyleRenderer",
                "StoryAttachmentSubGroupStyleRenderer",
                "StoryAttachmentSharedHubUnitsStyleRenderer",
                "StoryAttachmentMilanWorkoutStyleRenderer",
                "StoryAttachmentMomentOfGratitudeStyleRenderer",
                "StoryAttachmentDiscussionPostAttachmentStyleRenderer",
                "StoryAttachmentGroupReferralStyleRenderer",
                "StoryAttachmentFishbowlPostAttachmentStyleRenderer",
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
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCommunityCommerceProductRecommendationAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCommunityCommerceProductRecommendationStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryNullAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentNullStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryEmptyAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentEmptyStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFBNoteAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFbNoteStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryQuiltAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentQuiltStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryQuiltCardsAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentQuiltCardsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryBirthdayAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentBirthdayStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPageRecommendationAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPageRecommendationStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPageRecommendationAlbumAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPageRecommendationAlbumStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPageRecommendationTagsAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPageRecommendationTagsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFunFactsPromptAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFunFactsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFunFactsStackAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFunFactsStackStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPageShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPageShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGametimeAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGametimeStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGoodwillProductSystemCampaignAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGoodwillProductSystemCampaignStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGoodwillSharedAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGoodwillSharedStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumColumnAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumColumnStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumBannerAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumBannerStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumFrameAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumFrameStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAlbumSaleItemStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVolunteeringEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVolunteeringEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVolunteeringEventActivityShiftAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVolunteeringEventActivityShiftStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCrisisListingAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCrisisListingStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCrisisMarkSafeAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCrisisMarkSafeStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCrisisShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCrisisShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCrisisHubShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCrisisHubShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCrisisDonationAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCrisisDonationStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFundraiserDonateButtonAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFundraiserDonateButtonStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFundraiserFBSeedingGiftAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFundraiserFBSeedingGiftStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPlaceListAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPlaceListStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryLookingForPlayersAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentLookingForPlayersStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryMapAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentMapStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAsset3dStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryShopAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentShopStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupSellProductItemStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryNoteAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentNoteStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryKnowledgeNoteAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentKnowledgeNoteStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryKnowledgeCollectionAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentKnowledgeCollectionStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPhotoAttachmentStyle_styleTypeRenderer",
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
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPhotoSaleItemStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPhotoReviewPhotoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPhotoReviewStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFileUploadAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFileUploadStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryProfileIntroCardBioAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentProfileIntroCardBioStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryProfileMediaAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentProfileMediaStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAnimatedImageAttachmentStyle_styleTypeRenderer",
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
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryImageShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentImageShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAnonymousAuthorInfoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAnonymousAuthorInfoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupAnonymousPendingPostDisclaimerAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupAnonymousPendingPostDisclaimerStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryC4GThreadCreationAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentC4GThreadCreationStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryC4GMessageAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentC4GMessageStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAnonymousPostContentAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAnonymousPostContentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryShareMediumAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentShareMediumStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySharePortraitAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSharePortraitStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryShareSevereAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentShareSevereStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCommunityPromptFooterAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCommunityPromptFooterStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVideoAttachmentStyle_styleTypeRenderer",
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
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFallbackAttachmentStyle_styleTypeRenderer",
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
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryLifeEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentLifeEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryScheduledLiveVideoPostAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentScheduledLiveVideoPostStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryLiveVideoScheduleAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentLiveVideoScheduleStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryLDPAppInstanceAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentLDPAppInstanceStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryLiveVideoRehearsalAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentLiveVideoRehearsalStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryMultiShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentMultiShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryMediaPollAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentMediaPollStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryTextPollAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentTextPollStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryTextPollNonInteractiveAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentTextPollNonInteractiveStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVisualPollAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVisualPollStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryListStoryAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentListStoryStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGamesInstantPlayAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGamesInstantPlayStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryMeetUpEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentMeetUpEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryInstantGamesTournamentAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentInstantGamesTournamentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryMovieAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentMovieStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAvatarAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAvatarStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVoterRegistrationAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVoterRegistrationStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryElectionDayReminderAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentElectionDayReminderStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryElectionInfoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentElectionInfoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVoteByMailAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVoteByMailStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCensusAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCensusStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryWorkShiftSwapAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentWorkShiftSwapStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryWoodhengeAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentWoodhengeStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStory3DPhotoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachment3DPhotoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStory360PhotoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachment360PhotoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryBloodDonationPartnerCTAAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentBloodDonationPartnerCTAStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryUnavailableAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentUnavailableStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryWorkLinkPreviewAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentWorkLinkPreviewStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryWorkContentAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentWorkContentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPhotoLinkShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPhotoLinkShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryPlayWithFriendsAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentPlayWithFriendsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySimpleMusicAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSimpleMusicStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryQuarantinedVideoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentQuarantinedVideoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "WorkFeedStoryWorkMajorEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkStoryAttachmentMajorEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "WorkFeedStoryChecklistAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkStoryAttachmentChecklistStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryVideoMeetupAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentWorkVideoMeetupStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName: "GroupRoomAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVideoMeetupStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryVideoMeetupLinkAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentVideoMeetupLinkStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryChatroomAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentChatroomStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySocialLearningPreviewPhotoAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSocialLearningPreviewPhotoStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAMAAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAMAStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryAMACardsAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentAMACardsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryTournamentMatchSetAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentTournamentMatchSetStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySocialLearningUnitCreatedAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSocialLearningUnitCreatedStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySocialLearningUnitCompletedAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSocialLearningUnitCompletedStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySocialLearningQuizAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupQuizStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryBreakingNewsShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentBreakingNewsShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryRecruitingResumeReviewAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentRecruitingResumeReviewStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryHiringManagerConsiderationAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentHiringManagerConsiderationStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryProfileCommercePostAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentProfileCommercePostStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCommerceAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCommerceAttachmentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFluShotPledgeAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFluShotPledgeStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCovidVaccineFinderAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCovidVaccineFinderStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCovidVaccineFinderProviderAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCovidVaccineFinderProviderStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryNeonAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentNeonStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryReportedGroupEventAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentReportedGroupEventStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupApplicationAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupApplicationStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryCrowdsourcingBadgeShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentCrowdsourcingBadgeShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryQAApprovedAnswerAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentQAApprovedAnswerStylerRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryInterviewMarketplaceListingAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentInterviewMarketplaceListingStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryRecruitingGroupConsiderationShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkStoryAttachmentRecruitingGroupConsiderationShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "GeminiFeedStoryRecruitingGroupCandidateShareAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkStoryAttachmentRecruitingGroupCandidateShareStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupWelcomePostAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupWelcomePostStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySubGroupAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSubGroupStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStorySharedHubUnitsAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentSharedHubUnitsStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryMilanWorkoutAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentMilanWorkoutStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGratitudeMOGStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentMomentOfGratitudeStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryDiscussionPostAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentDiscussionPostAttachmentStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryGroupReferralAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentGroupReferralStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentRenderer_attachment",
                  fragmentName:
                    "CometFeedStoryFishbowlPostAttachmentStyle_styleTypeRenderer",
                  fragmentPropName: "styleTypeRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryAttachmentFishbowlPostAttachmentStyleRenderer",
              abstractKey: null,
            },
          ],
          storageKey: null,
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
  "StoryAttachmentActorContext_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoryAttachmentActorContext_story",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actors",
          plural: !0,
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
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometFeedPhotoBackgroundColorRelay_photo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometFeedPhotoBackgroundColorRelay_photo",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Literal",
                  name: "color_choice_algorithm",
                  value: "MOST_PROMINENT_COLOR",
                },
                { kind: "Literal", name: "is_computed_if_missing", value: !1 },
              ],
              kind: "ScalarField",
              name: "accent_color",
              storageKey:
                'accent_color(color_choice_algorithm:"MOST_PROMINENT_COLOR",is_computed_if_missing:false)',
            },
          ],
          type: "Photo",
          abstractKey: null,
        },
      ],
      type: "Media",
      abstractKey: "__isMedia",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStandardStoryLevelCTASupplementActionUtils_action.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "CometFeedStandardStoryLevelCTASupplementActionUtils_action",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStandardStoryLevelCallToAction_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "event_name",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_id",
          storageKey: null,
        },
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "nux_id",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStandardStoryLevelCallToAction_renderer",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "button_text",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "body_text",
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Variable", name: "scale", variableName: "scale" }],
            concreteType: "StoryCallToActionRendererImageData",
            kind: "LinkedField",
            name: "cta_image_data",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Image",
                kind: "LinkedField",
                name: "image",
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
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_rounded",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "has_attachment",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "first_appear_actions",
            plural: !0,
            selections: [
              {
                kind: "InlineDataFragmentSpread",
                name: "CometFeedStandardStoryLevelCTASupplementActionUtils_action",
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cta_name",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "uuid",
                        storageKey: null,
                      },
                    ],
                    type: "StoryLevelCallToActionRootEvent",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "challenge_tag",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cta_type",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "challenge_post_id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "metadata",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "origin",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tracking",
                        storageKey: null,
                      },
                    ],
                    type: "StoryLevelCallToActionChallengePostEvent",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "QuiltsCometStoryLevelCTALoggingUtils_tryItEvent",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          b,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "activity",
                            storageKey: null,
                          },
                        ],
                        type: "StoryLevelCallToActionQuiltTryItEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogReshareFilterEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "entry_point_name",
                            storageKey: null,
                          },
                          a,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "session_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "story_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "reaction_type",
                            storageKey: null,
                          },
                        ],
                        type: "StoryLevelCallToActionReshareFilterEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogStoryLevelCTANuxImpressionEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: c,
                        type: "StoryLevelCallToActionNuxImpressionEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogStoryLevelCTANuxDismissEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: c,
                        type: "StoryLevelCallToActionNuxDismissEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogStoryLevelCTAEventActionsLoggerImpressionEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "event",
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
                            args: null,
                            kind: "ScalarField",
                            name: "poe_story_bumper",
                            storageKey: null,
                          },
                        ],
                        type: "StoryLevelCallToActionEventsActionLoggerImpressionEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "logPfcExpressionsEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          a,
                          b,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "story_render_location",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "product",
                            storageKey: null,
                          },
                        ],
                        type: "XFBStoryLevelCallToActionPFCExpressionsEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogPrayerUpdatePostPromoBumperEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          a,
                          b,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "group_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "time_since_post_created",
                            storageKey: null,
                          },
                        ],
                        type: "XFBStoryLevelCallToActionUpdatePostPromoBumperEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogPMVBumperEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "bumper_name",
                            storageKey: null,
                          },
                          a,
                          b,
                        ],
                        type: "XFBStoryLevelCallToActionPMVBumperEvent",
                        abstractKey: null,
                      },
                    ],
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
            name: "headline_text",
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryCTAButton_buttonData",
          },
        ],
        type: "StoryCallToActionRenderer",
        abstractKey: "__isStoryCallToActionRenderer",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryCallToActionExposureHandler_exposureHandler.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryCallToActionExposureHandler_exposureHandler",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "bumper_class",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_hide",
          storageKey: null,
        },
      ],
      type: "StoryBumperExposureHandler",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryPersistentCallToActionRenderer_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryPersistentCallToActionRenderer_renderer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStandardStoryLevelCallToAction_renderer",
        },
      ],
      type: "PersistentStoryCallToActionRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryTriggeredCallToActionContainer_bumperData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryTriggeredCallToActionContainer_bumperData",
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
              concreteType: "StoryBumperExposureHandler",
              kind: "LinkedField",
              name: "exposure_handler",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedStoryCallToActionExposureHandler_exposureHandler",
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "cta_renderer",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedStoryTriggeredCallToActionRenderer_renderer",
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
  "CometFeedStoryTriggeredCallToActionRenderer_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryTriggeredCallToActionRenderer_renderer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStandardStoryLevelCallToAction_renderer",
        },
      ],
      type: "TriggeredStoryCallToActionRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "HandleStoryBumperExposureMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "bumperClass" },
          { defaultValue: null, kind: "LocalArgument", name: "wasHidden" },
        ],
        b = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "bumper_class",
                variableName: "bumperClass",
              },
              {
                kind: "Variable",
                name: "was_hidden",
                variableName: "wasHidden",
              },
            ],
            concreteType: "HandleStoryBumperExposureResponsePayload",
            kind: "LinkedField",
            name: "handle_story_bumper_exposure",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "HandleStoryBumperExposureMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "HandleStoryBumperExposureMutation",
          selections: b,
        },
        params: {
          id: "3640273336100546",
          metadata: {},
          name: "HandleStoryBumperExposureMutation",
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
  "CometFeedStoryCTAButton_buttonData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "event_name",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_id",
          storageKey: null,
        },
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "nux_id",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryCTAButton_buttonData",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "button_style",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "button_text",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "supplement_click_actions",
            plural: !0,
            selections: [
              {
                kind: "InlineDataFragmentSpread",
                name: "CometFeedStandardStoryLevelCTASupplementActionUtils_action",
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cta_name",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "uuid",
                        storageKey: null,
                      },
                    ],
                    type: "StoryLevelCallToActionRootEvent",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "challenge_tag",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cta_type",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "challenge_post_id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "metadata",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "origin",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tracking",
                        storageKey: null,
                      },
                    ],
                    type: "StoryLevelCallToActionChallengePostEvent",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "QuiltsCometStoryLevelCTALoggingUtils_tryItEvent",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          b,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "activity",
                            storageKey: null,
                          },
                        ],
                        type: "StoryLevelCallToActionQuiltTryItEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogReshareFilterEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "entry_point_name",
                            storageKey: null,
                          },
                          a,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "session_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "story_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "reaction_type",
                            storageKey: null,
                          },
                        ],
                        type: "StoryLevelCallToActionReshareFilterEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogStoryLevelCTANuxImpressionEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: c,
                        type: "StoryLevelCallToActionNuxImpressionEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogStoryLevelCTANuxDismissEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: c,
                        type: "StoryLevelCallToActionNuxDismissEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogStoryLevelCTAEventActionsLoggerImpressionEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "event",
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
                            args: null,
                            kind: "ScalarField",
                            name: "poe_story_bumper",
                            storageKey: null,
                          },
                        ],
                        type: "StoryLevelCallToActionEventsActionLoggerImpressionEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "logPfcExpressionsEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          a,
                          b,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "story_render_location",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "product",
                            storageKey: null,
                          },
                        ],
                        type: "XFBStoryLevelCallToActionPFCExpressionsEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogPrayerUpdatePostPromoBumperEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          a,
                          b,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "group_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "time_since_post_created",
                            storageKey: null,
                          },
                        ],
                        type: "XFBStoryLevelCallToActionUpdatePostPromoBumperEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useLogPMVBumperEvent_event",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "bumper_name",
                            storageKey: null,
                          },
                          a,
                          b,
                        ],
                        type: "XFBStoryLevelCallToActionPMVBumperEvent",
                        abstractKey: null,
                      },
                    ],
                  },
                ],
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "comet_action",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName:
                      "CometFeedStoryCTAReshareComposerOpenButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometReshareComposerAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName: "CometFeedStoryCTAGroupMimickButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometGroupPostMimickAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName:
                      "CometFeedStoryCTAGroupComposerOpenButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometGroupComposerAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName:
                      "CometFeedStoryCTAFeedComposerOpenButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometFeedComposerAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName: "CometFeedStoryCTALinkButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometURIAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName: "CometFeedStoryCTALinkNewTabButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometURINewTabAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName:
                      "CometFeedPromotionalBumperOpenPrayerSettingsButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometOpenPrayerSettingsDialogAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName:
                      "CometFeedPromotionalBumperOpenPrivateRepliesDialogButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometPrivateMessageAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName:
                      "CometFeedStoryCTAPrivateRepliesForTaggedBusinessUserButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometPrivateRepliesForTaggedBusinessUserAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName: "CometFeedStoryCTAJoinGroupButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometGroupJoinAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName:
                      "CometFeedStoryCTAShareToPageListButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "XFBStoryLevelCTACometShareToPageListAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName:
                      "CometFeedStoryCTAShareComposerOpenButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometShareComposerAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName:
                      "CometFeedPromoBumperOpenPrayerUpdatePostComposerButton_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometOpenUpdatePostComposerAction",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryCTAButton_buttonData",
                    fragmentName:
                      "CometFeedStoryCTAGoToEventPermalinkAction_action",
                    fragmentPropName: "action",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryLevelCTACometGoToEventPermalinkAction",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryCallToActionRenderer",
        abstractKey: "__isStoryCallToActionRenderer",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ResetReshareFilterTriggeredCTANuxMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "ResetReshareFilterCtaNuxResponsePayload",
            kind: "LinkedField",
            name: "reset_reshare_filter_cta_nux",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "ResetReshareFilterTriggeredCTANuxMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "ResetReshareFilterTriggeredCTANuxMutation",
          selections: b,
        },
        params: {
          id: "4426771377346553",
          metadata: {},
          name: "ResetReshareFilterTriggeredCTANuxMutation",
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
  "useLogReshareFilterEvent_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { kind: "InlineDataFragment", name: "useLogReshareFilterEvent_event" };
    e.exports = a;
  },
  null
);
__d(
  "useLogStoryLevelCTAEventActionsLoggerImpressionEvent_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "useLogStoryLevelCTAEventActionsLoggerImpressionEvent_event",
    };
    e.exports = a;
  },
  null
);
__d(
  "useLogStoryLevelCTANuxDismissEvent_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "useLogStoryLevelCTANuxDismissEvent_event",
    };
    e.exports = a;
  },
  null
);
__d(
  "useLogStoryLevelCTANuxImpressionEvent_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "useLogStoryLevelCTANuxImpressionEvent_event",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentsAriaExpandedProvider_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "displayCommentsContextEnableComment" },
        { kind: "RootArgument", name: "displayCommentsContextIsAdPreview" },
        {
          kind: "RootArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        { kind: "RootArgument", name: "displayCommentsContextIsStorySet" },
        { kind: "RootArgument", name: "displayCommentsFeedbackContext" },
        { kind: "RootArgument", name: "feedLocation" },
        { kind: "RootArgument", name: "feedbackSource" },
        { kind: "RootArgument", name: "focusCommentID" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentsAriaExpandedProvider_feedback",
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
          kind: "RequiredField",
          field: {
            alias: "aria_expanded_provider_display_comments",
            args: [
              {
                kind: "Variable",
                name: "feed_context_enable_comment",
                variableName: "displayCommentsContextEnableComment",
              },
              {
                kind: "Variable",
                name: "feed_context_fb_feed_location",
                variableName: "feedLocation",
              },
              {
                kind: "Variable",
                name: "feed_context_is_ad_preview",
                variableName: "displayCommentsContextIsAdPreview",
              },
              {
                kind: "Variable",
                name: "feed_context_is_aggregated_share",
                variableName: "displayCommentsContextIsAggregatedShare",
              },
              {
                kind: "Variable",
                name: "feed_context_is_story_set",
                variableName: "displayCommentsContextIsStorySet",
              },
              {
                kind: "Variable",
                name: "feedback_context",
                variableName: "displayCommentsFeedbackContext",
              },
              {
                kind: "Variable",
                name: "feedback_source",
                variableName: "feedbackSource",
              },
              {
                kind: "Variable",
                name: "focus_comment_id",
                variableName: "focusCommentID",
              },
            ],
            concreteType: "DisplayCommentsConnection",
            kind: "LinkedField",
            name: "display_comments",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_initially_expanded",
                  storageKey: null,
                },
                action: "LOG",
                path: "aria_expanded_provider_display_comments.is_initially_expanded",
              },
            ],
            storageKey: null,
          },
          action: "LOG",
          path: "aria_expanded_provider_display_comments",
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
  "useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion",
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
      type: "StoryAttachmentStyleRendererUnion",
      abstractKey: "__isStoryAttachmentStyleRendererUnion",
    };
    e.exports = a;
  },
  null
);
__d(
  "useIsSATPStory_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useIsSATPStory_story",
      selections: [
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
              name: "__typename",
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
  "CometFeedStoryAboveMessageSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAboveMessageSection_story",
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
                    "CometFeedStoryAboveMessageFunFactsRenderingStrategy",
                    "WorkFeedStoryAboveMessageMajorEventRenderingStrategy",
                    "WorkFeedStoryAboveMessageSummaryRenderingStrategy",
                    "GeminiFeedStoryAboveMessageSummaryUpsellRenderingStrategy",
                    "CometFeedStoryAboveMessageCommunityQARenderingStrategy",
                    "CometFeedStoryAboveMessageCovidAlertPendingReviewRenderingStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "above_message",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryAboveMessageSection_story",
                      fragmentName:
                        "CometFeedStoryAboveMessageFunFactsRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAboveMessageFunFactsRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryAboveMessageSection_story",
                      fragmentName:
                        "WorkFeedStoryAboveMessageMajorEventRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "WorkFeedStoryAboveMessageMajorEventRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryAboveMessageSection_story",
                      fragmentName:
                        "WorkFeedStoryAboveMessageSummaryRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "WorkFeedStoryAboveMessageSummaryRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryAboveMessageSection_story",
                      fragmentName:
                        "GeminiFeedStoryAboveMessageSummaryUpsellRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiFeedStoryAboveMessageSummaryUpsellRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryAboveMessageSection_story",
                      fragmentName:
                        "CometFeedStoryAboveMessageCommunityQARenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAboveMessageCommunityQARenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryAboveMessageSection_story",
                      fragmentName:
                        "CometFeedStoryAboveMessageCovidAlertPendingReviewRenderingStrategy_aboveMessage",
                      fragmentPropName: "aboveMessage",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAboveMessageCovidAlertPendingReviewRenderingStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'above_message(supported:["CometFeedStoryAboveMessageFunFactsRenderingStrategy","WorkFeedStoryAboveMessageMajorEventRenderingStrategy","WorkFeedStoryAboveMessageSummaryRenderingStrategy","GeminiFeedStoryAboveMessageSummaryUpsellRenderingStrategy","CometFeedStoryAboveMessageCommunityQARenderingStrategy","CometFeedStoryAboveMessageCovidAlertPendingReviewRenderingStrategy"])',
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
  "CometFeedStoryAggregatedStoriesSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAggregatedStoriesSection_story",
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
                  value: ["CometStoryAggregatedStoriesStrategy"],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "aggregated_stories",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAggregatedStoriesSection_story",
                      fragmentName:
                        "CometFeedStoryAggregatedStoriesStrategy_aggregatedStories",
                      fragmentPropName: "aggregatedStories",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAggregatedStoriesStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'aggregated_stories(supported:["CometStoryAggregatedStoriesStrategy"])',
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
  "CometFeedStoryAttachedStorySection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachedStorySection_story",
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
                    "CometStoryAttachedStoryWithFilterStrategy",
                    "CometStoryAttachedStoryStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "attached_story",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryAttachedStorySection_story",
                      fragmentName:
                        "CometFeedStoryAttachedStoryWithFilterStrategy_attachedStory",
                      fragmentPropName: "attachedStory",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachedStoryWithFilterStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryAttachedStorySection_story",
                      fragmentName:
                        "CometFeedStoryAttachedStoryStrategy_attachedStory",
                      fragmentPropName: "attachedStory",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAttachedStoryStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'attached_story(supported:["CometStoryAttachedStoryWithFilterStrategy","CometStoryAttachedStoryStrategy"])',
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
  "CometFeedStoryAttachmentDisclaimerFooterSection_attachment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachmentDisclaimerFooterSection_attachment",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_footer_disclaimer_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentDisclaimerFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy_attachmentFooterDisclaimer",
                  fragmentPropName: "attachmentFooterDisclaimer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy",
              abstractKey: null,
            },
          ],
          storageKey: null,
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
  "CometFeedStoryAttachmentFooterSection_attachment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachmentFooterSection_attachment",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometStoryAttachmentFooterVideoPageLikeStrategy",
                "CometStoryAttachmentFooterVideoProfileFollowStrategy",
                "CometStoryAttachmentFooterPlaceStrategy",
                "CometStoryAttachmentFooterFundraiserStrategy",
                "CometStoryAttachmentFooterFundraiserProfileOverlayStrategy",
                "CometStoryAttachmentFooterPodcastEpisodeListenStrategy",
                "CometStoryAttachmentFooterRecordedHuddleStrategy",
                "CometStoryAttachmentFooterGenericVideoStrategy",
                "CometStoryAttachmentFooterGenericShareStrategy",
                "CometStoryAttachmentFooterPhotoStrategy",
                "CometStoryAttachmentFooterMessagePageStrategy",
                "CometStoryAttachmentFooterMovieStrategy",
                "CometStoryAttachmentFooterOwnershipLinkStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_footer_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterVideoPageLikeStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterVideoPageLikeStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterVideoProfileFollowStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterVideoProfileFollowStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterPlaceStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterPlaceStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterFundraiserStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterFundraiserStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterFundraiserProfileOverlayStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterFundraiserProfileOverlayStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterPodcastEpisodeListenStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterPodcastEpisodeListenStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterRecordedHuddleStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterRecordedHuddleStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterGenericVideoStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterGenericVideoStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterGenericShareStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterGenericShareStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterPhotoStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterPhotoStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterMessagePageStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterMessagePageStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterMovieStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterMovieStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryAttachmentFooterSection_attachment",
                  fragmentName:
                    "CometStoryAttachmentFooterOwnershipLinkStrategy_attachmentFooter",
                  fragmentPropName: "attachmentFooter",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachmentFooterOwnershipLinkStrategy",
              abstractKey: null,
            },
          ],
          storageKey: null,
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
  "CometFeedStoryAttachmentOverlaySection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachmentOverlaySection_story",
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
                    "CometFeedStoryWarningScreenAttachmentStrategy",
                    "CometFeedStoryPayToAccessPaywallAttachmentStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "attachment_overlay",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentOverlaySection_story",
                      fragmentName:
                        "CometFeedStoryWarningScreenAttachmentStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryWarningScreenAttachmentStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryAttachmentOverlaySection_story",
                      fragmentName:
                        "CometFeedStoryPayToAccessPaywallAttachmentStrategy_attachmentOverlay",
                      fragmentPropName: "attachmentOverlay",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryPayToAccessPaywallAttachmentStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'attachment_overlay(supported:["CometFeedStoryWarningScreenAttachmentStrategy","CometFeedStoryPayToAccessPaywallAttachmentStrategy"])',
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
  "CometFeedStoryAttachmentSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachmentSection_story",
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
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "attachments",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "deduplication_key",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryAttachmentRenderer_attachment",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryAttachmentFooterSection_attachment",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryAttachmentDisclaimerFooterSection_attachment",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "SponsoredData",
          kind: "LinkedField",
          name: "sponsored_data",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "client_token",
              storageKey: null,
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
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryInfoIconSection_story",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryAttachmentOverlaySection_story",
        },
        { args: null, kind: "FragmentSpread", name: "useIsSATPStory_story" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoryAttachmentActorContext_story",
        },
        {
          alias: "wwwURL",
          args: [{ kind: "Literal", name: "site", value: "www" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"www")',
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
  "CometFeedStoryMessageContainerSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMessageContainerSection_story",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryMessageSection_story",
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
                    "CometFeedStoryNoContentMessageContainerRenderingStrategy",
                    "CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy",
                    "CometFeedStoryTranslatedMessageContainerRenderingStrategy",
                    "CometFeedStoryMessageContainerRenderingStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "message_container",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageContainerSection_story",
                      fragmentName:
                        "CometFeedStoryNoContentMessageContainerRenderingStrategy_messageContainer",
                      fragmentPropName: "messageContainer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryNoContentMessageContainerRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageContainerSection_story",
                      fragmentName:
                        "CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy_messageContainer",
                      fragmentPropName: "messageContainer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageContainerSection_story",
                      fragmentName:
                        "CometFeedStoryTranslatedMessageContainerRenderingStrategy_messageContainer",
                      fragmentPropName: "messageContainer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryTranslatedMessageContainerRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageContainerSection_story",
                      fragmentName:
                        "CometFeedStoryMessageContainerRenderingStrategy_messageContainer",
                      fragmentPropName: "messageContainer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMessageContainerRenderingStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'message_container(supported:["CometFeedStoryNoContentMessageContainerRenderingStrategy","CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy","CometFeedStoryTranslatedMessageContainerRenderingStrategy","CometFeedStoryMessageContainerRenderingStrategy"])',
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
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryMessageStickerSection_story",
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
  "CometFeedStoryMessageSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMessageSection_story",
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
                    "CometFeedStoryFormattedBackgroundMessageRenderingStrategy",
                    "CometFeedStoryLargeMessageRenderingStrategy",
                    "CometFeedStoryMessageWithQuoteRenderingStrategy",
                    "CometFeedStoryMultilingualMessageRenderingStrategy",
                    "CometFeedStoryRichMessageRenderingStrategy",
                    "CometFeedStoryCommunityQAMessageRenderingStrategy",
                    "CometFeedStoryDefaultMessageRenderingStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "message",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageSection_story",
                      fragmentName:
                        "CometFeedStoryFormattedBackgroundMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryFormattedBackgroundMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageSection_story",
                      fragmentName:
                        "CometFeedStoryLargeMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryLargeMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageSection_story",
                      fragmentName:
                        "CometFeedStoryMessageWithQuoteRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMessageWithQuoteRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageSection_story",
                      fragmentName:
                        "CometFeedStoryMultilingualMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMultilingualMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageSection_story",
                      fragmentName:
                        "CometFeedStoryRichMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryRichMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageSection_story",
                      fragmentName:
                        "CometFeedStoryCommunityQAMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryCommunityQAMessageRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageSection_story",
                      fragmentName:
                        "CometFeedStoryDefaultMessageRenderingStrategy_message",
                      fragmentPropName: "message",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryDefaultMessageRenderingStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'message(supported:["CometFeedStoryFormattedBackgroundMessageRenderingStrategy","CometFeedStoryLargeMessageRenderingStrategy","CometFeedStoryMessageWithQuoteRenderingStrategy","CometFeedStoryMultilingualMessageRenderingStrategy","CometFeedStoryRichMessageRenderingStrategy","CometFeedStoryCommunityQAMessageRenderingStrategy","CometFeedStoryDefaultMessageRenderingStrategy"])',
            },
            {
              alias: null,
              args: [
                {
                  kind: "Literal",
                  name: "supported",
                  value: ["CometFeedStoryMessageSuffixRenderingStrategy"],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "message_suffix",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryMessageSection_story__message_suffix",
                      fragmentName:
                        "CometFeedStoryMessageSuffixRenderingStrategy_messageSuffix",
                      fragmentPropName: "messageSuffix",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMessageSuffixRenderingStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'message_suffix(supported:["CometFeedStoryMessageSuffixRenderingStrategy"])',
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
  "CometFeedStoryMessageStickerSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMessageStickerSection_story",
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
                    "CometFeedStoryMessageStickerRenderingStrategy",
                    "CometFeedStoryAnimatedMessageStickerRenderingStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "message_sticker",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageStickerSection_story",
                      fragmentName:
                        "CometFeedStoryMessageStickerStrategy_messageSticker",
                      fragmentPropName: "messageSticker",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMessageStickerRenderingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMessageStickerSection_story",
                      fragmentName:
                        "CometFeedStoryAnimatedMessageStickerStrategy_messageSticker",
                      fragmentPropName: "messageSticker",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAnimatedMessageStickerRenderingStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'message_sticker(supported:["CometFeedStoryMessageStickerRenderingStrategy","CometFeedStoryAnimatedMessageStickerRenderingStrategy"])',
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
  "CometFeedStoryDefaultCallToActionStrategy_cta$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          concreteType: "StoryBumperExposureHandler",
          kind: "LinkedField",
          name: "exposure_handler",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "bumper_class",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_hide",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_id",
          storageKey: null,
        },
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "nux_id",
            storageKey: null,
          },
        ],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      d = [
        a,
        {
          kind: "TypeDiscriminator",
          abstractKey: "__isStoryLevelCallToActionSupplementAction",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "event_name",
          storageKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cta_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uuid",
              storageKey: null,
            },
          ],
          type: "StoryLevelCallToActionRootEvent",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "challenge_tag",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cta_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "challenge_post_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "metadata",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "origin",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tracking",
              storageKey: null,
            },
          ],
          type: "StoryLevelCallToActionChallengePostEvent",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            c,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "activity",
              storageKey: null,
            },
          ],
          type: "StoryLevelCallToActionQuiltTryItEvent",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "entry_point_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "session_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "story_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reaction_type",
              storageKey: null,
            },
          ],
          type: "StoryLevelCallToActionReshareFilterEvent",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: d,
          type: "StoryLevelCallToActionNuxImpressionEvent",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: d,
          type: "StoryLevelCallToActionNuxDismissEvent",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Event",
              kind: "LinkedField",
              name: "event",
              plural: !1,
              selections: [e],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "poe_story_bumper",
              storageKey: null,
            },
          ],
          type: "StoryLevelCallToActionEventsActionLoggerImpressionEvent",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            c,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "story_render_location",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "product",
              storageKey: null,
            },
          ],
          type: "XFBStoryLevelCallToActionPFCExpressionsEvent",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            c,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "group_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "time_since_post_created",
              storageKey: null,
            },
          ],
          type: "XFBStoryLevelCallToActionUpdatePostPromoBumperEvent",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "bumper_name",
              storageKey: null,
            },
            c,
          ],
          type: "XFBStoryLevelCallToActionPMVBumperEvent",
          abstractKey: null,
        },
      ];
      c = [
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "button_text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "body_text",
              storageKey: null,
            },
            {
              alias: null,
              args: [
                { kind: "Variable", name: "scale", variableName: "scale" },
              ],
              concreteType: "StoryCallToActionRendererImageData",
              kind: "LinkedField",
              name: "cta_image_data",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "image",
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
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_rounded",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_attachment",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "first_appear_actions",
              plural: !0,
              selections: d,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "headline_text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "button_style",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "supplement_click_actions",
              plural: !0,
              selections: d,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "comet_action",
              plural: !1,
              selections: [
                a,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName:
                        "CometFeedStoryCTAReshareComposerOpenButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometReshareComposerAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName: "CometFeedStoryCTAGroupMimickButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometGroupPostMimickAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName:
                        "CometFeedStoryCTAGroupComposerOpenButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometGroupComposerAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName:
                        "CometFeedStoryCTAFeedComposerOpenButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometFeedComposerAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName: "CometFeedStoryCTALinkButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometURIAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName: "CometFeedStoryCTALinkNewTabButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometURINewTabAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName:
                        "CometFeedPromotionalBumperOpenPrayerSettingsButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometOpenPrayerSettingsDialogAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName:
                        "CometFeedPromotionalBumperOpenPrivateRepliesDialogButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometPrivateMessageAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName:
                        "CometFeedStoryCTAPrivateRepliesForTaggedBusinessUserButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometPrivateRepliesForTaggedBusinessUserAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName: "CometFeedStoryCTAJoinGroupButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometGroupJoinAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName:
                        "CometFeedStoryCTAShareToPageListButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBStoryLevelCTACometShareToPageListAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName:
                        "CometFeedStoryCTAShareComposerOpenButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometShareComposerAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName:
                        "CometFeedPromoBumperOpenPrayerUpdatePostComposerButton_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometOpenUpdatePostComposerAction",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCTAButton_buttonData",
                      fragmentName:
                        "CometFeedStoryCTAGoToEventPermalinkAction_action",
                      fragmentPropName: "action",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryLevelCTACometGoToEventPermalinkAction",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "StoryCallToActionRenderer",
          abstractKey: "__isStoryCallToActionRenderer",
        },
      ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryDefaultCallToActionStrategy_cta$normalization",
        selections: [
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
                concreteType: "StoryBumperData",
                kind: "LinkedField",
                name: "bumpers",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "persistent_bumper",
                    plural: !1,
                    selections: [
                      a,
                      b,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "cta_renderer",
                        plural: !1,
                        selections: [
                          a,
                          {
                            kind: "InlineFragment",
                            selections: c,
                            type: "PersistentStoryCallToActionRenderer",
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
                    concreteType: null,
                    kind: "LinkedField",
                    name: "triggered_bumpers",
                    plural: !0,
                    selections: [
                      a,
                      b,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "cta_renderer",
                        plural: !1,
                        selections: [
                          a,
                          {
                            kind: "InlineFragment",
                            selections: c,
                            type: "TriggeredStoryCallToActionRenderer",
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
              e,
            ],
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
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
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryDefaultCallToActionStrategy_cta.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryDefaultCallToActionStrategy_cta",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
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
              concreteType: "StoryBumperData",
              kind: "LinkedField",
              name: "bumpers",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "persistent_bumper",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "StoryBumperExposureHandler",
                      kind: "LinkedField",
                      name: "exposure_handler",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometFeedStoryCallToActionExposureHandler_exposureHandler",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "cta_renderer",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometFeedStoryPersistentCallToActionRenderer_renderer",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedStoryTriggeredCallToActionContainer_bumperData",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometStoryDefaultCallToActionStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedUnitStoryStrategy_feedUnit$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        c = [
          {
            kind: "Variable",
            name: "location",
            variableName: "renderLocation",
          },
        ],
        d = {
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
            a,
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
        e = {
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
            a,
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
                  fragmentName: "CometFeedStoryInsightsFooterStrategy_insights",
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
                  fragmentName: "CometFeedStoryStonehengeFooterStrategy_story",
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
                  fragmentName: "CometFeedStoryWoodhengeFooterStrategy_story",
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
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
        g = {
          alias: null,
          args: c,
          kind: "ScalarField",
          name: "should_host_actor_link_in_watch",
          storageKey: null,
        },
        h = { kind: "TypeDiscriminator", abstractKey: "__isNFXAction" },
        i = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "icon",
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
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
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "context",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        l = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ];
      h = {
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
              b,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "group_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "author_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "feedback_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "executed_action",
                plural: !1,
                selections: [a, h, i, j, k, b],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "canUndo",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_loading",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "negativeFeedbackActionID",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subTitle",
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
                concreteType: "DeletedPostTombstoneContent",
                kind: "LinkedField",
                name: "deleted_post_tombstone",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "member_stats_text",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "tombstone_actions",
                    plural: !0,
                    selections: [
                      a,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "action_type",
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
                name: "support_action",
                plural: !1,
                selections: [
                  a,
                  h,
                  {
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "title",
                    plural: !1,
                    selections: l,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "subtitle",
                    plural: !1,
                    selections: l,
                    storageKey: null,
                  },
                  j,
                  k,
                  i,
                  b,
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedUnitStoryStrategy_feedUnit$normalization",
        selections: [
          a,
          b,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "matched_terms",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "attached_story",
            plural: !1,
            selections: [
              b,
              {
                alias: null,
                args: c,
                concreteType: "CometStorySections",
                kind: "LinkedField",
                name: "comet_sections",
                plural: !1,
                selections: [d, e],
                storageKey: null,
              },
              f,
              g,
              { kind: "ClientExtension", selections: [h] },
            ],
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
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "triggered_bumpers",
                plural: !0,
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "triggers",
                    plural: !0,
                    selections: [
                      a,
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
            storageKey: null,
          },
          {
            alias: null,
            args: c,
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
                  a,
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
                  a,
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
                  a,
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
                  a,
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
                        fragmentName:
                          "CometFeedStoryAlbumHeaderStrategy_header",
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
                        fragmentName:
                          "CometStoryPostUpsellHeaderStrategy_header",
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
                        fragmentName:
                          "CometFeedStoryStoryHeaderStrategy_header",
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
              d,
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
                  a,
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
              e,
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
                  a,
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
                  a,
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
                  a,
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
                  a,
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
          f,
          g,
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
              b,
              {
                alias: null,
                args: null,
                concreteType: "Group",
                kind: "LinkedField",
                name: "associated_group",
                plural: !1,
                selections: [b],
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
              j,
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
            kind: "ClientExtension",
            selections: [
              h,
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
                  k,
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
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryDefaultContentStrategy_content$normalization.graphql",
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
          kind: "Variable",
          name: "location",
          variableName: "renderLocation",
        },
        c = [b],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        e = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometFeedStoryAboveMessageFunFactsRenderingStrategy",
                "WorkFeedStoryAboveMessageMajorEventRenderingStrategy",
                "WorkFeedStoryAboveMessageSummaryRenderingStrategy",
                "GeminiFeedStoryAboveMessageSummaryUpsellRenderingStrategy",
                "CometFeedStoryAboveMessageCommunityQARenderingStrategy",
                "CometFeedStoryAboveMessageCovidAlertPendingReviewRenderingStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "above_message",
          plural: !1,
          selections: [
            d,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageSection_story",
                  fragmentName:
                    "CometFeedStoryAboveMessageFunFactsRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAboveMessageFunFactsRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageSection_story",
                  fragmentName:
                    "WorkFeedStoryAboveMessageMajorEventRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkFeedStoryAboveMessageMajorEventRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageSection_story",
                  fragmentName:
                    "WorkFeedStoryAboveMessageSummaryRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkFeedStoryAboveMessageSummaryRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageSection_story",
                  fragmentName:
                    "GeminiFeedStoryAboveMessageSummaryUpsellRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "GeminiFeedStoryAboveMessageSummaryUpsellRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageSection_story",
                  fragmentName:
                    "CometFeedStoryAboveMessageCommunityQARenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAboveMessageCommunityQARenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAboveMessageSection_story",
                  fragmentName:
                    "CometFeedStoryAboveMessageCovidAlertPendingReviewRenderingStrategy_aboveMessage",
                  fragmentPropName: "aboveMessage",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAboveMessageCovidAlertPendingReviewRenderingStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'above_message(supported:["CometFeedStoryAboveMessageFunFactsRenderingStrategy","WorkFeedStoryAboveMessageMajorEventRenderingStrategy","WorkFeedStoryAboveMessageSummaryRenderingStrategy","GeminiFeedStoryAboveMessageSummaryUpsellRenderingStrategy","CometFeedStoryAboveMessageCommunityQARenderingStrategy","CometFeedStoryAboveMessageCovidAlertPendingReviewRenderingStrategy"])',
        },
        f = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometStoryPoliticalIconStrategy",
                "CometStoryArticleContextIconStrategy",
                "CometStoryBrandedContentIconStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "info_icon",
          plural: !1,
          selections: [
            d,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryInfoIconSection_story",
                  fragmentName: "CometFeedStoryPoliticalIconStrategy_infoIcon",
                  fragmentPropName: "infoIcon",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryPoliticalIconStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryInfoIconSection_story",
                  fragmentName:
                    "CometFeedStoryArticleContextIconStrategy_infoIcon",
                  fragmentPropName: "infoIcon",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryArticleContextIconStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryInfoIconSection_story",
                  fragmentName:
                    "CometFeedStoryBrandedContentIconStrategy_infoIcon",
                  fragmentPropName: "infoIcon",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryBrandedContentIconStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'info_icon(supported:["CometStoryPoliticalIconStrategy","CometStoryArticleContextIconStrategy","CometStoryBrandedContentIconStrategy"])',
        },
        g = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometFeedStoryWarningScreenAttachmentStrategy",
                "CometFeedStoryPayToAccessPaywallAttachmentStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "attachment_overlay",
          plural: !1,
          selections: [
            d,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentOverlaySection_story",
                  fragmentName:
                    "CometFeedStoryWarningScreenAttachmentStrategy_story",
                  fragmentPropName: "story",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryWarningScreenAttachmentStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachmentOverlaySection_story",
                  fragmentName:
                    "CometFeedStoryPayToAccessPaywallAttachmentStrategy_attachmentOverlay",
                  fragmentPropName: "attachmentOverlay",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryPayToAccessPaywallAttachmentStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'attachment_overlay(supported:["CometFeedStoryWarningScreenAttachmentStrategy","CometFeedStoryPayToAccessPaywallAttachmentStrategy"])',
        },
        h = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometStoryAttachedStoryWithFilterStrategy",
                "CometStoryAttachedStoryStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "attached_story",
          plural: !1,
          selections: [
            d,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachedStorySection_story",
                  fragmentName:
                    "CometFeedStoryAttachedStoryWithFilterStrategy_attachedStory",
                  fragmentPropName: "attachedStory",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachedStoryWithFilterStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryAttachedStorySection_story",
                  fragmentName:
                    "CometFeedStoryAttachedStoryStrategy_attachedStory",
                  fragmentPropName: "attachedStory",
                  kind: "ModuleImport",
                },
              ],
              type: "CometStoryAttachedStoryStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'attached_story(supported:["CometStoryAttachedStoryWithFilterStrategy","CometStoryAttachedStoryStrategy"])',
        },
        i = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometFeedStoryFormattedBackgroundMessageRenderingStrategy",
                "CometFeedStoryLargeMessageRenderingStrategy",
                "CometFeedStoryMessageWithQuoteRenderingStrategy",
                "CometFeedStoryMultilingualMessageRenderingStrategy",
                "CometFeedStoryRichMessageRenderingStrategy",
                "CometFeedStoryCommunityQAMessageRenderingStrategy",
                "CometFeedStoryDefaultMessageRenderingStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: [
            d,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageSection_story",
                  fragmentName:
                    "CometFeedStoryFormattedBackgroundMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryFormattedBackgroundMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageSection_story",
                  fragmentName:
                    "CometFeedStoryLargeMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryLargeMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageSection_story",
                  fragmentName:
                    "CometFeedStoryMessageWithQuoteRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMessageWithQuoteRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageSection_story",
                  fragmentName:
                    "CometFeedStoryMultilingualMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMultilingualMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageSection_story",
                  fragmentName:
                    "CometFeedStoryRichMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryRichMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageSection_story",
                  fragmentName:
                    "CometFeedStoryCommunityQAMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryCommunityQAMessageRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageSection_story",
                  fragmentName:
                    "CometFeedStoryDefaultMessageRenderingStrategy_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryDefaultMessageRenderingStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'message(supported:["CometFeedStoryFormattedBackgroundMessageRenderingStrategy","CometFeedStoryLargeMessageRenderingStrategy","CometFeedStoryMessageWithQuoteRenderingStrategy","CometFeedStoryMultilingualMessageRenderingStrategy","CometFeedStoryRichMessageRenderingStrategy","CometFeedStoryCommunityQAMessageRenderingStrategy","CometFeedStoryDefaultMessageRenderingStrategy"])',
        },
        j = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: ["CometFeedStoryMessageSuffixRenderingStrategy"],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "message_suffix",
          plural: !1,
          selections: [
            d,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometFeedStoryMessageSection_story__message_suffix",
                  fragmentName:
                    "CometFeedStoryMessageSuffixRenderingStrategy_messageSuffix",
                  fragmentPropName: "messageSuffix",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMessageSuffixRenderingStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'message_suffix(supported:["CometFeedStoryMessageSuffixRenderingStrategy"])',
        },
        k = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometFeedStoryNoContentMessageContainerRenderingStrategy",
                "CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy",
                "CometFeedStoryTranslatedMessageContainerRenderingStrategy",
                "CometFeedStoryMessageContainerRenderingStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "message_container",
          plural: !1,
          selections: [
            d,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageContainerSection_story",
                  fragmentName:
                    "CometFeedStoryNoContentMessageContainerRenderingStrategy_messageContainer",
                  fragmentPropName: "messageContainer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryNoContentMessageContainerRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageContainerSection_story",
                  fragmentName:
                    "CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy_messageContainer",
                  fragmentPropName: "messageContainer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageContainerSection_story",
                  fragmentName:
                    "CometFeedStoryTranslatedMessageContainerRenderingStrategy_messageContainer",
                  fragmentPropName: "messageContainer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryTranslatedMessageContainerRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageContainerSection_story",
                  fragmentName:
                    "CometFeedStoryMessageContainerRenderingStrategy_messageContainer",
                  fragmentPropName: "messageContainer",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMessageContainerRenderingStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'message_container(supported:["CometFeedStoryNoContentMessageContainerRenderingStrategy","CometFeedStoryAutoTranslatedMessageContainerRenderingStrategy","CometFeedStoryTranslatedMessageContainerRenderingStrategy","CometFeedStoryMessageContainerRenderingStrategy"])',
        },
        l = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometFeedStoryMessageStickerRenderingStrategy",
                "CometFeedStoryAnimatedMessageStickerRenderingStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "message_sticker",
          plural: !1,
          selections: [
            d,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageStickerSection_story",
                  fragmentName:
                    "CometFeedStoryMessageStickerStrategy_messageSticker",
                  fragmentPropName: "messageSticker",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryMessageStickerRenderingStrategy",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedStoryMessageStickerSection_story",
                  fragmentName:
                    "CometFeedStoryAnimatedMessageStickerStrategy_messageSticker",
                  fragmentPropName: "messageSticker",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryAnimatedMessageStickerRenderingStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'message_sticker(supported:["CometFeedStoryMessageStickerRenderingStrategy","CometFeedStoryAnimatedMessageStickerRenderingStrategy"])',
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        };
      b = {
        alias: null,
        args: c,
        concreteType: "StoryAttachment",
        kind: "LinkedField",
        name: "attachments",
        plural: !0,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "deduplication_key",
            storageKey: null,
          },
          d,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "style_list",
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "render_location",
                variableName: "renderLocation",
              },
              {
                kind: "Literal",
                name: "supported",
                value: [
                  "StoryAttachmentCommunityCommerceProductRecommendationStyleRenderer",
                  "StoryAttachmentNullStyleRenderer",
                  "StoryAttachmentEmptyStyleRenderer",
                  "StoryAttachmentFbNoteStyleRenderer",
                  "StoryAttachmentQuiltStyleRenderer",
                  "StoryAttachmentQuiltCardsStyleRenderer",
                  "StoryAttachmentBirthdayStyleRenderer",
                  "StoryAttachmentPageRecommendationStyleRenderer",
                  "StoryAttachmentPageRecommendationAlbumStyleRenderer",
                  "StoryAttachmentPageRecommendationTagsStyleRenderer",
                  "StoryAttachmentFunFactsStyleRenderer",
                  "StoryAttachmentFunFactsStackStyleRenderer",
                  "StoryAttachmentPageShareStyleRenderer",
                  "StoryAttachmentGametimeStyleRenderer",
                  "StoryAttachmentGoodwillProductSystemCampaignStyleRenderer",
                  "StoryAttachmentGoodwillSharedStyleRenderer",
                  "StoryAttachmentAlbumStyleRenderer",
                  "StoryAttachmentAlbumColumnStyleRenderer",
                  "StoryAttachmentAlbumBannerStyleRenderer",
                  "StoryAttachmentAlbumFrameStyleRenderer",
                  "StoryAttachmentAlbumSaleItemStyleRenderer",
                  "StoryAttachmentVolunteeringEventStyleRenderer",
                  "StoryAttachmentVolunteeringEventActivityShiftStyleRenderer",
                  "StoryAttachmentCrisisListingStyleRenderer",
                  "StoryAttachmentCrisisMarkSafeStyleRenderer",
                  "StoryAttachmentCrisisShareStyleRenderer",
                  "StoryAttachmentCrisisHubShareStyleRenderer",
                  "StoryAttachmentCrisisDonationStyleRenderer",
                  "StoryAttachmentFundraiserDonateButtonStyleRenderer",
                  "StoryAttachmentFundraiserFBSeedingGiftStyleRenderer",
                  "StoryAttachmentPlaceListStyleRenderer",
                  "StoryAttachmentLookingForPlayersStyleRenderer",
                  "StoryAttachmentMapStyleRenderer",
                  "StoryAttachmentAsset3dStyleRenderer",
                  "StoryAttachmentEventStyleRenderer",
                  "StoryAttachmentShopStyleRenderer",
                  "StoryAttachmentGroupStyleRenderer",
                  "StoryAttachmentGroupSellProductItemStyleRenderer",
                  "StoryAttachmentNoteStyleRenderer",
                  "StoryAttachmentKnowledgeNoteStyleRenderer",
                  "StoryAttachmentKnowledgeCollectionStyleRenderer",
                  "StoryAttachmentPhotoStyleRenderer",
                  "StoryAttachmentPhotoSaleItemStyleRenderer",
                  "StoryAttachmentPhotoReviewStyleRenderer",
                  "StoryAttachmentFileUploadStyleRenderer",
                  "StoryAttachmentProfileIntroCardBioStyleRenderer",
                  "StoryAttachmentProfileMediaStyleRenderer",
                  "StoryAttachmentAnimatedImageShareStyleRenderer",
                  "StoryAttachmentImageShareStyleRenderer",
                  "StoryAttachmentAnonymousAuthorInfoStyleRenderer",
                  "StoryAttachmentGroupAnonymousPendingPostDisclaimerStyleRenderer",
                  "StoryAttachmentC4GThreadCreationStyleRenderer",
                  "StoryAttachmentC4GMessageStyleRenderer",
                  "StoryAttachmentAnonymousPostContentStyleRenderer",
                  "StoryAttachmentShareMediumStyleRenderer",
                  "StoryAttachmentSharePortraitStyleRenderer",
                  "StoryAttachmentShareSevereStyleRenderer",
                  "StoryAttachmentShareStyleRenderer",
                  "StoryAttachmentCommunityPromptFooterStyleRenderer",
                  "StoryAttachmentVideoStyleRenderer",
                  "StoryAttachmentFallbackStyleRenderer",
                  "StoryAttachmentLifeEventStyleRenderer",
                  "StoryAttachmentScheduledLiveVideoPostStyleRenderer",
                  "StoryAttachmentLiveVideoScheduleStyleRenderer",
                  "StoryAttachmentLDPAppInstanceStyleRenderer",
                  "StoryAttachmentLiveVideoRehearsalStyleRenderer",
                  "StoryAttachmentMultiShareStyleRenderer",
                  "StoryAttachmentMediaPollStyleRenderer",
                  "StoryAttachmentTextPollStyleRenderer",
                  "StoryAttachmentTextPollNonInteractiveStyleRenderer",
                  "StoryAttachmentVisualPollStyleRenderer",
                  "StoryAttachmentListStoryStyleRenderer",
                  "StoryAttachmentGamesInstantPlayStyleRenderer",
                  "StoryAttachmentMeetUpEventStyleRenderer",
                  "StoryAttachmentInstantGamesTournamentStyleRenderer",
                  "StoryAttachmentMovieStyleRenderer",
                  "StoryAttachmentAvatarStyleRenderer",
                  "StoryAttachmentVoterRegistrationStyleRenderer",
                  "StoryAttachmentElectionDayReminderStyleRenderer",
                  "StoryAttachmentElectionInfoStyleRenderer",
                  "StoryAttachmentVoteByMailStyleRenderer",
                  "StoryAttachmentCensusStyleRenderer",
                  "StoryAttachmentWorkShiftSwapStyleRenderer",
                  "StoryAttachmentWoodhengeStyleRenderer",
                  "StoryAttachment3DPhotoStyleRenderer",
                  "StoryAttachment360PhotoStyleRenderer",
                  "StoryAttachmentBloodDonationPartnerCTAStyleRenderer",
                  "StoryAttachmentUnavailableStyleRenderer",
                  "StoryAttachmentWorkLinkPreviewStyleRenderer",
                  "StoryAttachmentWorkContentStyleRenderer",
                  "StoryAttachmentPhotoLinkShareStyleRenderer",
                  "StoryAttachmentPlayWithFriendsStyleRenderer",
                  "StoryAttachmentSimpleMusicStyleRenderer",
                  "StoryAttachmentQuarantinedVideoStyleRenderer",
                  "WorkStoryAttachmentMajorEventStyleRenderer",
                  "WorkStoryAttachmentChecklistStyleRenderer",
                  "StoryAttachmentWorkVideoMeetupStyleRenderer",
                  "StoryAttachmentVideoMeetupStyleRenderer",
                  "StoryAttachmentVideoMeetupLinkStyleRenderer",
                  "StoryAttachmentChatroomStyleRenderer",
                  "StoryAttachmentSocialLearningPreviewPhotoStyleRenderer",
                  "StoryAttachmentAMAStyleRenderer",
                  "StoryAttachmentAMACardsStyleRenderer",
                  "StoryAttachmentTournamentMatchSetStyleRenderer",
                  "StoryAttachmentSocialLearningUnitCreatedStyleRenderer",
                  "StoryAttachmentSocialLearningUnitCompletedStyleRenderer",
                  "StoryAttachmentGroupQuizStyleRenderer",
                  "StoryAttachmentBreakingNewsShareStyleRenderer",
                  "StoryAttachmentRecruitingResumeReviewStyleRenderer",
                  "StoryAttachmentHiringManagerConsiderationStyleRenderer",
                  "StoryAttachmentProfileCommercePostStyleRenderer",
                  "StoryAttachmentCommerceAttachmentStyleRenderer",
                  "StoryAttachmentFluShotPledgeStyleRenderer",
                  "StoryAttachmentCovidVaccineFinderStyleRenderer",
                  "StoryAttachmentCovidVaccineFinderProviderStyleRenderer",
                  "StoryAttachmentNeonStyleRenderer",
                  "StoryAttachmentReportedGroupEventStyleRenderer",
                  "StoryAttachmentGroupApplicationStyleRenderer",
                  "StoryAttachmentCrowdsourcingBadgeShareStyleRenderer",
                  "StoryAttachmentQAApprovedAnswerStylerRenderer",
                  "StoryAttachmentInterviewMarketplaceListingStyleRenderer",
                  "WorkStoryAttachmentRecruitingGroupConsiderationShareStyleRenderer",
                  "WorkStoryAttachmentRecruitingGroupCandidateShareStyleRenderer",
                  "StoryAttachmentGroupWelcomePostStyleRenderer",
                  "StoryAttachmentSubGroupStyleRenderer",
                  "StoryAttachmentSharedHubUnitsStyleRenderer",
                  "StoryAttachmentMilanWorkoutStyleRenderer",
                  "StoryAttachmentMomentOfGratitudeStyleRenderer",
                  "StoryAttachmentDiscussionPostAttachmentStyleRenderer",
                  "StoryAttachmentGroupReferralStyleRenderer",
                  "StoryAttachmentFishbowlPostAttachmentStyleRenderer",
                ],
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "style_type_renderer",
            plural: !1,
            selections: [
              d,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCommunityCommerceProductRecommendationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCommunityCommerceProductRecommendationStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryNullAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentNullStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryEmptyAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentEmptyStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryFBNoteAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentFbNoteStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryQuiltAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentQuiltStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryQuiltCardsAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentQuiltCardsStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryBirthdayAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentBirthdayStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryPageRecommendationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentPageRecommendationStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryPageRecommendationAlbumAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentPageRecommendationAlbumStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryPageRecommendationTagsAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentPageRecommendationTagsStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryFunFactsPromptAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentFunFactsStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryFunFactsStackAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentFunFactsStackStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryPageShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentPageShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGametimeAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGametimeStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGoodwillProductSystemCampaignAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGoodwillProductSystemCampaignStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGoodwillSharedAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGoodwillSharedStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAlbumStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAlbumColumnAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAlbumColumnStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAlbumBannerAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAlbumBannerStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAlbumFrameAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAlbumFrameStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAlbumSaleItemStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryVolunteeringEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentVolunteeringEventStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryVolunteeringEventActivityShiftAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentVolunteeringEventActivityShiftStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCrisisListingAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCrisisListingStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCrisisMarkSafeAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCrisisMarkSafeStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCrisisShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCrisisShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCrisisHubShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCrisisHubShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCrisisDonationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCrisisDonationStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryFundraiserDonateButtonAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentFundraiserDonateButtonStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryFundraiserFBSeedingGiftAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentFundraiserFBSeedingGiftStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryPlaceListAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentPlaceListStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryLookingForPlayersAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentLookingForPlayersStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryMapAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentMapStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAsset3dStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentEventStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryShopAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentShopStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGroupAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGroupStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGroupSellProductItemStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryNoteAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentNoteStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "GeminiFeedStoryKnowledgeNoteAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentKnowledgeNoteStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "GeminiFeedStoryKnowledgeCollectionAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentKnowledgeCollectionStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryPhotoAttachmentStyle_styleTypeRenderer",
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
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentPhotoSaleItemStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryPhotoReviewPhotoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentPhotoReviewStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryFileUploadAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentFileUploadStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryProfileIntroCardBioAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentProfileIntroCardBioStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryProfileMediaAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentProfileMediaStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAnimatedImageAttachmentStyle_styleTypeRenderer",
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
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryImageShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentImageShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAnonymousAuthorInfoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAnonymousAuthorInfoStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGroupAnonymousPendingPostDisclaimerAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGroupAnonymousPendingPostDisclaimerStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryC4GThreadCreationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentC4GThreadCreationStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryC4GMessageAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentC4GMessageStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAnonymousPostContentAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAnonymousPostContentStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryShareMediumAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentShareMediumStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStorySharePortraitAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentSharePortraitStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryShareSevereAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentShareSevereStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCommunityPromptFooterAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCommunityPromptFooterStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryVideoAttachmentStyle_styleTypeRenderer",
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
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryFallbackAttachmentStyle_styleTypeRenderer",
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
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryLifeEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentLifeEventStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryScheduledLiveVideoPostAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentScheduledLiveVideoPostStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryLiveVideoScheduleAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentLiveVideoScheduleStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryLDPAppInstanceAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentLDPAppInstanceStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryLiveVideoRehearsalAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentLiveVideoRehearsalStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryMultiShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentMultiShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryMediaPollAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentMediaPollStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryTextPollAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentTextPollStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryTextPollNonInteractiveAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentTextPollNonInteractiveStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryVisualPollAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentVisualPollStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryListStoryAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentListStoryStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGamesInstantPlayAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGamesInstantPlayStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryMeetUpEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentMeetUpEventStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryInstantGamesTournamentAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentInstantGamesTournamentStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryMovieAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentMovieStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAvatarAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAvatarStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryVoterRegistrationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentVoterRegistrationStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryElectionDayReminderAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentElectionDayReminderStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryElectionInfoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentElectionInfoStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryVoteByMailAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentVoteByMailStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCensusAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCensusStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryWorkShiftSwapAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentWorkShiftSwapStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryWoodhengeAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentWoodhengeStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStory3DPhotoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachment3DPhotoStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStory360PhotoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachment360PhotoStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryBloodDonationPartnerCTAAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentBloodDonationPartnerCTAStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryUnavailableAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentUnavailableStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "GeminiFeedStoryWorkLinkPreviewAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentWorkLinkPreviewStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "GeminiFeedStoryWorkContentAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentWorkContentStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryPhotoLinkShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentPhotoLinkShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryPlayWithFriendsAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentPlayWithFriendsStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStorySimpleMusicAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentSimpleMusicStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryQuarantinedVideoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentQuarantinedVideoStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "WorkFeedStoryWorkMajorEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkStoryAttachmentMajorEventStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "WorkFeedStoryChecklistAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkStoryAttachmentChecklistStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "GeminiFeedStoryVideoMeetupAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentWorkVideoMeetupStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "GroupRoomAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentVideoMeetupStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryVideoMeetupLinkAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentVideoMeetupLinkStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryChatroomAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentChatroomStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStorySocialLearningPreviewPhotoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentSocialLearningPreviewPhotoStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAMAAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAMAStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryAMACardsAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentAMACardsStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryTournamentMatchSetAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentTournamentMatchSetStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStorySocialLearningUnitCreatedAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentSocialLearningUnitCreatedStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStorySocialLearningUnitCompletedAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentSocialLearningUnitCompletedStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStorySocialLearningQuizAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGroupQuizStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryBreakingNewsShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentBreakingNewsShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryRecruitingResumeReviewAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentRecruitingResumeReviewStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryHiringManagerConsiderationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentHiringManagerConsiderationStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryProfileCommercePostAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentProfileCommercePostStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCommerceAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCommerceAttachmentStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryFluShotPledgeAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentFluShotPledgeStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCovidVaccineFinderAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCovidVaccineFinderStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCovidVaccineFinderProviderAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCovidVaccineFinderProviderStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryNeonAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentNeonStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryReportedGroupEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentReportedGroupEventStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGroupApplicationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGroupApplicationStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryCrowdsourcingBadgeShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentCrowdsourcingBadgeShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "GeminiFeedStoryQAApprovedAnswerAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentQAApprovedAnswerStylerRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryInterviewMarketplaceListingAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentInterviewMarketplaceListingStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "GeminiFeedStoryRecruitingGroupConsiderationShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkStoryAttachmentRecruitingGroupConsiderationShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "GeminiFeedStoryRecruitingGroupCandidateShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkStoryAttachmentRecruitingGroupCandidateShareStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGroupWelcomePostAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGroupWelcomePostStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStorySubGroupAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentSubGroupStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStorySharedHubUnitsAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentSharedHubUnitsStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryMilanWorkoutAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentMilanWorkoutStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGratitudeMOGStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentMomentOfGratitudeStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryDiscussionPostAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentDiscussionPostAttachmentStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryGroupReferralAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentGroupReferralStyleRenderer",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName:
                      "CometFeedStoryFishbowlPostAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport",
                  },
                ],
                type: "StoryAttachmentFishbowlPostAttachmentStyleRenderer",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              b,
              {
                kind: "Literal",
                name: "supported",
                value: [
                  "CometStoryAttachmentFooterVideoPageLikeStrategy",
                  "CometStoryAttachmentFooterVideoProfileFollowStrategy",
                  "CometStoryAttachmentFooterPlaceStrategy",
                  "CometStoryAttachmentFooterFundraiserStrategy",
                  "CometStoryAttachmentFooterFundraiserProfileOverlayStrategy",
                  "CometStoryAttachmentFooterPodcastEpisodeListenStrategy",
                  "CometStoryAttachmentFooterRecordedHuddleStrategy",
                  "CometStoryAttachmentFooterGenericVideoStrategy",
                  "CometStoryAttachmentFooterGenericShareStrategy",
                  "CometStoryAttachmentFooterPhotoStrategy",
                  "CometStoryAttachmentFooterMessagePageStrategy",
                  "CometStoryAttachmentFooterMovieStrategy",
                  "CometStoryAttachmentFooterOwnershipLinkStrategy",
                ],
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "comet_footer_renderer",
            plural: !1,
            selections: [
              d,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterVideoPageLikeStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterVideoPageLikeStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterVideoProfileFollowStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterVideoProfileFollowStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterPlaceStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterPlaceStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterFundraiserStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterFundraiserStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterFundraiserProfileOverlayStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterFundraiserProfileOverlayStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterPodcastEpisodeListenStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterPodcastEpisodeListenStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterRecordedHuddleStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterRecordedHuddleStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterGenericVideoStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterGenericVideoStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterGenericShareStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterGenericShareStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterPhotoStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterPhotoStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterMessagePageStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterMessagePageStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterMovieStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterMovieStrategy",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentFooterOwnershipLinkStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentFooterOwnershipLinkStrategy",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              b,
              {
                kind: "Literal",
                name: "supported",
                value: [
                  "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy",
                ],
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "comet_footer_disclaimer_renderer",
            plural: !1,
            selections: [
              d,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedStoryAttachmentDisclaimerFooterSection_attachment",
                    fragmentName:
                      "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy_attachmentFooterDisclaimer",
                    fragmentPropName: "attachmentFooterDisclaimer",
                    kind: "ModuleImport",
                  },
                ],
                type: "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var n = {
          alias: null,
          args: null,
          concreteType: "SponsoredData",
          kind: "LinkedField",
          name: "sponsored_data",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "client_token",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          concreteType: "TextFormatMetadata",
          kind: "LinkedField",
          name: "text_format_metadata",
          plural: !1,
          selections: [d],
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actors",
          plural: !0,
          selections: [d, a],
          storageKey: null,
        },
        q = {
          alias: "wwwURL",
          args: [{ kind: "Literal", name: "site", value: "www" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"www")',
        },
        r = {
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
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryDefaultContentStrategy_content$normalization",
        selections: [
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
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: [a],
                storageKey: null,
              },
              {
                alias: null,
                args: c,
                concreteType: "CometStorySections",
                kind: "LinkedField",
                name: "comet_sections",
                plural: !1,
                selections: [
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Literal",
                        name: "supported",
                        value: ["CometStoryAggregatedStoriesStrategy"],
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "aggregated_stories",
                    plural: !1,
                    selections: [
                      d,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName:
                              "CometFeedStoryAggregatedStoriesSection_story",
                            fragmentName:
                              "CometFeedStoryAggregatedStoriesStrategy_aggregatedStories",
                            fragmentPropName: "aggregatedStories",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryAggregatedStoriesStrategy",
                        abstractKey: null,
                      },
                    ],
                    storageKey:
                      'aggregated_stories(supported:["CometStoryAggregatedStoriesStrategy"])',
                  },
                ],
                storageKey: null,
              },
              m,
              b,
              n,
              o,
              p,
              q,
              {
                alias: null,
                args: null,
                concreteType: "Story",
                kind: "LinkedField",
                name: "attached_story",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: c,
                    concreteType: "CometStorySections",
                    kind: "LinkedField",
                    name: "comet_sections",
                    plural: !1,
                    selections: [e, f, g, h, i, j, k, l],
                    storageKey: null,
                  },
                  m,
                  b,
                  n,
                  o,
                  p,
                  q,
                  a,
                  { kind: "ClientExtension", selections: [r] },
                ],
                storageKey: null,
              },
              a,
              {
                kind: "ClientExtension",
                selections: [
                  r,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "optimistic_loading_type",
                    storageKey: null,
                  },
                ],
              },
            ],
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              d,
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
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryDefaultContentStrategy_content.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryAboveMessageSection_story",
        },
        b = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryOptimisticMediaAttachmentSection_story",
        },
        c = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryAttachmentSection_story",
        },
        d = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryAttachedStorySection_story",
        },
        e = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryMessageContainerSection_story",
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryDefaultContentStrategy_content",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCometFeedStoryMatchDebugger_iCometStorySection",
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
                ],
                storageKey: null,
              },
              a,
              b,
              c,
              d,
              e,
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryAggregatedStoriesSection_story",
              },
              {
                alias: null,
                args: null,
                concreteType: "Story",
                kind: "LinkedField",
                name: "attached_story",
                plural: !1,
                selections: [a, b, c, d, e],
                storageKey: null,
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
                ],
              },
            ],
            storageKey: null,
          },
        ],
        type: "CometFeedStoryDefaultContentStrategy",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryDefaultContextLayoutStrategy_contextLayout$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "__typename",
        storageKey: null,
      };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryDefaultContextLayoutStrategy_contextLayout$normalization",
        selections: [
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
                name: "id",
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
                kind: "ScalarField",
                name: "serialized_frtp_identifiers",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_viewer_see_menu",
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
                          "CometFeedStoryActorCommunityPromptIconStrategy",
                          "CometFeedStoryActorCommunityAttributionStrategy",
                          "CometFeedStoryActorVideoStrategy",
                          "CometFeedStoryActorPhotoStrategy",
                        ],
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "actor_photo",
                    plural: !1,
                    selections: [
                      a,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName:
                              "CometFeedStoryActorPhotoSection_story",
                            fragmentName:
                              "CometFeedStoryActorCommunityPromptIconStrategy_actorPhoto",
                            fragmentPropName: "actorPhoto",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryActorCommunityPromptIconStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName:
                              "CometFeedStoryActorPhotoSection_story",
                            fragmentName:
                              "CometFeedStoryActorCommunityAttributionStrategy_actorPhoto",
                            fragmentPropName: "actorPhoto",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryActorCommunityAttributionStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName:
                              "CometFeedStoryActorPhotoSection_story",
                            fragmentName:
                              "CometFeedStoryActorVideoStrategy_actorPhoto",
                            fragmentPropName: "actorPhoto",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryActorVideoStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName:
                              "CometFeedStoryActorPhotoSection_story",
                            fragmentName:
                              "CometFeedStoryActorPhotoStrategy_actorPhoto",
                            fragmentPropName: "actorPhoto",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryActorPhotoStrategy",
                        abstractKey: null,
                      },
                    ],
                    storageKey:
                      'actor_photo(supported:["CometFeedStoryActorCommunityPromptIconStrategy","CometFeedStoryActorCommunityAttributionStrategy","CometFeedStoryActorVideoStrategy","CometFeedStoryActorPhotoStrategy"])',
                  },
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Literal",
                        name: "supported",
                        value: [
                          "CometStoryCommunityAttributionAuthorPostedStrategy",
                          "CometStoryCommunityAttributionGroupPostByStrategy",
                          "CometStoryUserSignalsStrategy",
                          "CometStoryIdentityBadgeStrategy",
                          "CometStorySponsoredLabelStrategy",
                          "CometStorySponsoredPoliticalLabelStrategy",
                          "CometStoryLocationTransparencyStrategy",
                          "CometStoryPostLevelAuthenticityStrategy",
                          "CometStoryAlertBadgeStrategy",
                          "CometStoryPageAdminAttributionStrategy",
                          "CometStoryPaidPartnershipLabelStrategy",
                          "CometFeedStoryBackdatedTimestampStrategy",
                          "CometFeedStoryScheduledTimestampStrategy",
                          "CometFeedStoryMinimizedTimestampStrategy",
                          "CometFeedStoryTimestampStrategy",
                          "GeminiStoryInternLiveEventStrategy",
                          "GeminiStoryInternQAQuestionStrategy",
                          "GeminiStoryInternTaskStrategy",
                          "CometFeedStoryLocationStrategy",
                          "CometFeedStoryApplicationLinkStrategy",
                          "CometFeedStoryPrivacySelectorStrategy",
                          "CometFeedStoryAudienceStrategy",
                          "CometStoryViewedCountStrategy",
                          "CometFeedStoryClassifierDogfoodingStrategy",
                          "CometFeedStoryPollEndtimeStrategy",
                        ],
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "metadata",
                    plural: !0,
                    selections: [
                      a,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryCommunityAttributionAuthorPostedStrategy_strategy",
                            fragmentPropName: "strategy",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryCommunityAttributionAuthorPostedStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryCommunityAttributionGroupPostByStrategy_strategy",
                            fragmentPropName: "strategy",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryCommunityAttributionGroupPostByStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryUserSignalsStrategy_strategy",
                            fragmentPropName: "strategy",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryUserSignalsStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryIdentityBadgeStrategy_identityBadge",
                            fragmentPropName: "identityBadge",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryIdentityBadgeStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStorySponsoredLabelStrategy_sponsoredLabel",
                            fragmentPropName: "sponsoredLabel",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStorySponsoredLabelStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStorySponsoredPoliticalLabelStrategy_sponsoredLabel",
                            fragmentPropName: "sponsoredLabel",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStorySponsoredPoliticalLabelStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryLocationTransparencyStrategy_locationTransparency",
                            fragmentPropName: "locationTransparency",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryLocationTransparencyStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryPostLevelAuthenticityStrategy_postLevelAuthenticity",
                            fragmentPropName: "postLevelAuthenticity",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryPostLevelAuthenticityStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryAlertBadgeStrategy_alertBadge",
                            fragmentPropName: "alertBadge",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryAlertBadgeStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryPageAdminAttributionStrategy_adminAttribution",
                            fragmentPropName: "adminAttribution",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryPageAdminAttributionStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryPaidPartnershipLabelStrategy_paidPartnershipLabel",
                            fragmentPropName: "paidPartnershipLabel",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryPaidPartnershipLabelStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryBackdatedTimestampStrategy_timestamp",
                            fragmentPropName: "timestamp",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryBackdatedTimestampStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryScheduledTimestampStrategy_timestamp",
                            fragmentPropName: "timestamp",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryScheduledTimestampStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryMinimizedTimestampStrategy_timestamp",
                            fragmentPropName: "timestamp",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryMinimizedTimestampStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryTimestampStrategy_timestamp",
                            fragmentPropName: "timestamp",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryTimestampStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "GeminiFeedStoryInternLiveEventStrategy_internLiveEvent",
                            fragmentPropName: "internLiveEvent",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "GeminiStoryInternLiveEventStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "GeminiFeedStoryInternQAQuestionStrategy_internQAQuestion",
                            fragmentPropName: "internQAQuestion",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "GeminiStoryInternQAQuestionStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "GeminiFeedStoryInternTaskStrategy_internTask",
                            fragmentPropName: "internTask",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "GeminiStoryInternTaskStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryLocationStrategy_location",
                            fragmentPropName: "location",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryLocationStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryApplicationLinkStrategy_location",
                            fragmentPropName: "location",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryApplicationLinkStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryPrivacySelectorStrategy_audience",
                            fragmentPropName: "audience",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryPrivacySelectorStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryAudienceStrategy_audience",
                            fragmentPropName: "audience",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryAudienceStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryViewedCountStrategy_viewedCount",
                            fragmentPropName: "viewedCount",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometStoryViewedCountStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryClassifierDogfoodingStrategy_classifierDogfooding",
                            fragmentPropName: "classifierDogfooding",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryClassifierDogfoodingStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryMetadataSection_story",
                            fragmentName:
                              "CometFeedStoryPollEndtimeStrategy_timestamp",
                            fragmentPropName: "timestamp",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryPollEndtimeStrategy",
                        abstractKey: null,
                      },
                    ],
                    storageKey:
                      'metadata(supported:["CometStoryCommunityAttributionAuthorPostedStrategy","CometStoryCommunityAttributionGroupPostByStrategy","CometStoryUserSignalsStrategy","CometStoryIdentityBadgeStrategy","CometStorySponsoredLabelStrategy","CometStorySponsoredPoliticalLabelStrategy","CometStoryLocationTransparencyStrategy","CometStoryPostLevelAuthenticityStrategy","CometStoryAlertBadgeStrategy","CometStoryPageAdminAttributionStrategy","CometStoryPaidPartnershipLabelStrategy","CometFeedStoryBackdatedTimestampStrategy","CometFeedStoryScheduledTimestampStrategy","CometFeedStoryMinimizedTimestampStrategy","CometFeedStoryTimestampStrategy","GeminiStoryInternLiveEventStrategy","GeminiStoryInternQAQuestionStrategy","GeminiStoryInternTaskStrategy","CometFeedStoryLocationStrategy","CometFeedStoryApplicationLinkStrategy","CometFeedStoryPrivacySelectorStrategy","CometFeedStoryAudienceStrategy","CometStoryViewedCountStrategy","CometFeedStoryClassifierDogfoodingStrategy","CometFeedStoryPollEndtimeStrategy"])',
                  },
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Literal",
                        name: "supported",
                        value: [
                          "CometFeedStoryCampusDirectedTitleStrategy",
                          "GeminiFeedStoryQATitleStrategy",
                          "CometFeedStoryCommunityAttributionTitleStrategy",
                          "CometFeedStoryCommunityViewDirectedTitleStrategy",
                          "CometFeedStoryGroupsTabDirectedTitleStrategy",
                          "CometFeedStoryDirectedTitleStrategy",
                          "CometFeedStoryViaTitleStrategy",
                          "CometFeedStoryTitleWithActorStrategy",
                          "CometFeedStoryDefaultTitleStrategy",
                        ],
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "title",
                    plural: !1,
                    selections: [
                      a,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryTitleSection_story",
                            fragmentName:
                              "CometFeedStoryCampusDirectedTitleStrategy_contextTitle",
                            fragmentPropName: "contextTitle",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryCampusDirectedTitleStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryTitleSection_story",
                            fragmentName:
                              "GeminiFeedStoryQATitleStrategy_contextTitle",
                            fragmentPropName: "contextTitle",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "GeminiFeedStoryQATitleStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryTitleSection_story",
                            fragmentName:
                              "CometFeedStoryCommunityAttributionTitleStrategy_contextTitle",
                            fragmentPropName: "contextTitle",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryCommunityAttributionTitleStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryTitleSection_story",
                            fragmentName:
                              "CometFeedStoryCommunityViewDirectedTitleStrategy_contextTitle",
                            fragmentPropName: "contextTitle",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryCommunityViewDirectedTitleStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryTitleSection_story",
                            fragmentName:
                              "CometFeedStoryGroupsTabDirectedTitleStrategy_contextTitle",
                            fragmentPropName: "contextTitle",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryGroupsTabDirectedTitleStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryTitleSection_story",
                            fragmentName:
                              "CometFeedStoryDirectedTitleStrategy_contextTitle",
                            fragmentPropName: "contextTitle",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryDirectedTitleStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryTitleSection_story",
                            fragmentName:
                              "CometFeedStoryViaTitleStrategy_contextTitle",
                            fragmentPropName: "contextTitle",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryViaTitleStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryTitleSection_story",
                            fragmentName:
                              "CometFeedStoryTitleWithActorStrategy_contextTitle",
                            fragmentPropName: "contextTitle",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryTitleWithActorStrategy",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            documentName: "CometFeedStoryTitleSection_story",
                            fragmentName:
                              "CometFeedStoryDefaultTitleStrategy_contextTitle",
                            fragmentPropName: "contextTitle",
                            kind: "ModuleImport",
                          },
                        ],
                        type: "CometFeedStoryDefaultTitleStrategy",
                        abstractKey: null,
                      },
                    ],
                    storageKey:
                      'title(supported:["CometFeedStoryCampusDirectedTitleStrategy","GeminiFeedStoryQATitleStrategy","CometFeedStoryCommunityAttributionTitleStrategy","CometFeedStoryCommunityViewDirectedTitleStrategy","CometFeedStoryGroupsTabDirectedTitleStrategy","CometFeedStoryDirectedTitleStrategy","CometFeedStoryViaTitleStrategy","CometFeedStoryTitleWithActorStrategy","CometFeedStoryDefaultTitleStrategy"])',
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
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
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
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryDefaultContextLayoutStrategy_contextLayout.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryDefaultContextLayoutStrategy_contextLayout",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
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
              name: "id",
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
              kind: "ScalarField",
              name: "serialized_frtp_identifiers",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "can_viewer_see_menu",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryActorPhotoSection_story",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryMetadataSection_story",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryTitleSection_story",
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometFeedStoryDefaultContextLayoutStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStortFeedbackUFIStrategyEnvironmentSwitchQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
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
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        g = { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        h = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        j = { defaultValue: null, kind: "LocalArgument", name: "id" },
        k = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        m = [{ kind: "Variable", name: "id", variableName: "id" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, f, g, h, i, j, k, l],
          kind: "Fragment",
          metadata: null,
          name: "CometFeedStortFeedbackUFIStrategyEnvironmentSwitchQuery",
          selections: [
            {
              alias: null,
              args: m,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment",
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
          argumentDefinitions: [a, b, c, d, e, f, g, h, i, k, l, j],
          kind: "Operation",
          name: "CometFeedStortFeedbackUFIStrategyEnvironmentSwitchQuery",
          selections: [
            {
              alias: null,
              args: m,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                n,
                o,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_text_only_story",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        {
                          fields: [
                            {
                              kind: "Variable",
                              name: "fb_feed_location",
                              variableName: "feedLocation",
                            },
                            {
                              kind: "Variable",
                              name: "focused_comment_id",
                              variableName: "focusCommentID",
                            },
                          ],
                          kind: "ObjectValue",
                          name: "feed_rendering_context",
                        },
                      ],
                      concreteType: "FeedbackContext",
                      kind: "LinkedField",
                      name: "feedback_context",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Feedback",
                          kind: "LinkedField",
                          name: "feedback_target_with_context",
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
                              selections: [n, o],
                              storageKey: null,
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
                              name: "ufi_renderer",
                              plural: !1,
                              selections: [
                                n,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName: "CometFeedUFI_feedback",
                                      fragmentName:
                                        "CometFullUFIRenderer_renderer",
                                      fragmentPropName: "renderer",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "FullUFIRenderer",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName: "CometFeedUFI_feedback",
                                      fragmentName:
                                        "CometSimplifiedUFIRenderer_renderer",
                                      fragmentPropName: "renderer",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "SimplifiedUFIRenderer",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            o,
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
                      name: "shareable_from_perspective_of_feed_ufi",
                      plural: !1,
                      selections: [
                        n,
                        {
                          kind: "TypeDiscriminator",
                          abstractKey: "__isEntity",
                        },
                        p,
                        {
                          kind: "InlineFragment",
                          selections: [o],
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
                      name: "should_show_pf_admin_reshare_nux",
                      storageKey: null,
                    },
                    p,
                    {
                      alias: null,
                      args: null,
                      concreteType: "SponsoredData",
                      kind: "LinkedField",
                      name: "sponsored_data",
                      plural: !1,
                      selections: [n],
                      storageKey: null,
                    },
                  ],
                  type: "Story",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "5896490843725793",
          metadata: {},
          name: "CometFeedStortFeedbackUFIStrategyEnvironmentSwitchQuery",
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
  "CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment.graphql",
  ["CometFeedStortFeedbackUFIStrategyEnvironmentSwitchQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "UFI2CommentsProvider_commentsKey" },
        { kind: "RootArgument", name: "displayCommentsContextEnableComment" },
        { kind: "RootArgument", name: "displayCommentsContextIsAdPreview" },
        {
          kind: "RootArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        { kind: "RootArgument", name: "displayCommentsContextIsStorySet" },
        { kind: "RootArgument", name: "displayCommentsFeedbackContext" },
        { kind: "RootArgument", name: "feedLocation" },
        { kind: "RootArgument", name: "feedbackSource" },
        { kind: "RootArgument", name: "focusCommentID" },
        { kind: "RootArgument", name: "scale" },
        { kind: "RootArgument", name: "useDefaultActor" },
      ],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: ["node"],
          operation: b(
            "CometFeedStortFeedbackUFIStrategyEnvironmentSwitchQuery.graphql"
          ),
          identifierField: "id",
        },
      },
      name: "CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedUFIContainer_story",
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
  "CometFeedStoryFeedbackUFIStrategy_feedback$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryFeedbackUFIStrategy_feedback$normalization",
        selections: [
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
                name: "is_text_only_story",
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  {
                    fields: [
                      {
                        kind: "Variable",
                        name: "fb_feed_location",
                        variableName: "feedLocation",
                      },
                      {
                        kind: "Variable",
                        name: "focused_comment_id",
                        variableName: "focusCommentID",
                      },
                    ],
                    kind: "ObjectValue",
                    name: "feed_rendering_context",
                  },
                ],
                concreteType: "FeedbackContext",
                kind: "LinkedField",
                name: "feedback_context",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Feedback",
                    kind: "LinkedField",
                    name: "feedback_target_with_context",
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
                        selections: [a, b],
                        storageKey: null,
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
                        name: "ufi_renderer",
                        plural: !1,
                        selections: [
                          a,
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                args: null,
                                documentName: "CometFeedUFI_feedback",
                                fragmentName: "CometFullUFIRenderer_renderer",
                                fragmentPropName: "renderer",
                                kind: "ModuleImport",
                              },
                            ],
                            type: "FullUFIRenderer",
                            abstractKey: null,
                          },
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                args: null,
                                documentName: "CometFeedUFI_feedback",
                                fragmentName:
                                  "CometSimplifiedUFIRenderer_renderer",
                                fragmentPropName: "renderer",
                                kind: "ModuleImport",
                              },
                            ],
                            type: "SimplifiedUFIRenderer",
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
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
                concreteType: null,
                kind: "LinkedField",
                name: "shareable_from_perspective_of_feed_ufi",
                plural: !1,
                selections: [
                  a,
                  { kind: "TypeDiscriminator", abstractKey: "__isEntity" },
                  c,
                  {
                    kind: "InlineFragment",
                    selections: [b],
                    type: "Node",
                    abstractKey: "__isNode",
                  },
                ],
                storageKey: null,
              },
              b,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "should_show_pf_admin_reshare_nux",
                storageKey: null,
              },
              c,
              {
                alias: null,
                args: null,
                concreteType: "SponsoredData",
                kind: "LinkedField",
                name: "sponsored_data",
                plural: !1,
                selections: [a],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
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
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryFeedbackUFIStrategy_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryFeedbackUFIStrategy_feedback",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
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
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment",
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometStoryFeedbackUFIStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryDefaultLayoutStrategy_layout$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometFeedStoryDefaultLayoutStrategy_layout$normalization",
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
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryDefaultLayoutStrategy_layout.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryDefaultLayoutStrategy_layout",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
        },
      ],
      type: "CometStoryDefaultLayoutStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryDefaultMessageRenderingStrategy_message$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometFeedStoryDefaultMessageRenderingStrategy_message$normalization",
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
              name: "is_text_only_story",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "message",
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "message_truncation_line_limit",
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
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryDefaultMessageRenderingStrategy_message.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryDefaultMessageRenderingStrategy_message",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
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
              name: "is_text_only_story",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "message",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedMessageTextWithEntities_textWithEntities",
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "message_truncation_line_limit",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometFeedStoryDefaultMessageRenderingStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedMessageTextWithEntities_textWithEntities.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedMessageTextWithEntities_textWithEntities",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometTextWithEntitiesRelay_textWithEntities",
        },
      ],
      type: "TextWithEntities",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryMessageContainerRenderingStrategy_messageContainer$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryMessageContainerRenderingStrategy_messageContainer$normalization",
        selections: [
          {
            kind: "InlineFragment",
            selections: [
              a,
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
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "message",
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
              },
              {
                alias: null,
                args: null,
                concreteType: "Sticker",
                kind: "LinkedField",
                name: "referenced_sticker",
                plural: !1,
                selections: [b],
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
                concreteType: "TextFormatMetadata",
                kind: "LinkedField",
                name: "text_format_metadata",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "preset_id",
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
                        value: "CometFeedStoryRichMessageRenderingStrategy",
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "message",
                    plural: !1,
                    selections: [a],
                    storageKey:
                      'message(supported:"CometFeedStoryRichMessageRenderingStrategy")',
                  },
                ],
                storageKey: null,
              },
              b,
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
  "CometFeedStoryMessageContainerRenderingStrategy_messageContainer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMessageContainerRenderingStrategy_messageContainer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
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
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "message",
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
            },
            {
              alias: null,
              args: null,
              concreteType: "Sticker",
              kind: "LinkedField",
              name: "referenced_sticker",
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
              concreteType: "TextFormatMetadata",
              kind: "LinkedField",
              name: "text_format_metadata",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "preset_id",
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
                      value: "CometFeedStoryRichMessageRenderingStrategy",
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "message",
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
                  storageKey:
                    'message(supported:"CometFeedStoryRichMessageRenderingStrategy")',
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometFeedStoryMessageContainerRenderingStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "QuiltsCometStoryLevelCTALoggingUtils_tryItEvent.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "QuiltsCometStoryLevelCTALoggingUtils_tryItEvent",
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometGroupRuleRenderer_entity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "GroupsCometGroupRuleRenderer_entity",
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
          args: [{ kind: "Literal", name: "site", value: "comet" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"comet")',
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
  "PageWhatsAppNumberCometRenderer_entity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "PageWhatsAppNumberCometRenderer_entity",
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
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "deep_link_number",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: "use_whatsapp_deeplinks_plugin",
                  args: [
                    {
                      kind: "Literal",
                      name: "qe_universe",
                      value: "page_composer_whatsapp_deeplinks",
                    },
                  ],
                  concreteType: "QECheck",
                  kind: "LinkedField",
                  name: "qe_check",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "bool_default", value: !1 },
                        {
                          kind: "Literal",
                          name: "param_name",
                          value: "show_whatsapp_deeplink_typeahead",
                        },
                      ],
                      kind: "ScalarField",
                      name: "bool",
                      storageKey:
                        'bool(bool_default:false,param_name:"show_whatsapp_deeplink_typeahead")',
                    },
                  ],
                  storageKey:
                    'qe_check(qe_universe:"page_composer_whatsapp_deeplinks")',
                },
              ],
              storageKey: null,
            },
          ],
          type: "PageWhatsAppNumber",
          abstractKey: null,
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
  "CometDefaultCommentListBody_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "useDefaultActor" }],
      kind: "Fragment",
      metadata: null,
      name: "CometDefaultCommentListBody_feedback",
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
          name: "CometUFIComposerWrapperUseComposerPluginProps_feedback",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFICommentGroup_feedback",
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
  "CometDefaultCommentListRenderer_renderer$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = { kind: "Variable", name: "scale", variableName: "scale" },
        e = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        f = [c],
        g = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "emoji_size",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_id",
          storageKey: null,
        },
        j = [b, c],
        k = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "viewer_actor",
          plural: !1,
          selections: j,
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "feedback_id",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometDefaultCommentListRenderer_renderer$normalization",
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
                args: [a],
                concreteType: null,
                kind: "LinkedField",
                name: "viewer_actor",
                plural: !1,
                selections: [
                  b,
                  { kind: "TypeDiscriminator", abstractKey: "__isActor" },
                  c,
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
                      d,
                      { kind: "Literal", name: "width", value: 32 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: e,
                    storageKey: null,
                  },
                  {
                    alias: "profile_picture_depth_1",
                    args: [
                      { kind: "Literal", name: "height", value: 24 },
                      d,
                      { kind: "Literal", name: "width", value: 24 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: e,
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
                alias: "plugins",
                args: [
                  {
                    kind: "Variable",
                    name: "feed_location",
                    variableName: "feedLocation",
                  },
                  a,
                ],
                concreteType: null,
                kind: "LinkedField",
                name: "comment_composer_plugins",
                plural: !0,
                selections: [
                  b,
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
                        selections: f,
                        storageKey: null,
                      },
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
                          c,
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
                            selections: g,
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "composer_tip",
                        storageKey: null,
                      },
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
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerProfilePlusTipPlugin_plugin",
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
                    kind: "InlineFragment",
                    selections: [
                      h,
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
                    kind: "InlineFragment",
                    selections: [
                      i,
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerGroupMentionsPlugin_plugin",
                        fragmentPropName: "plugin",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CommentComposerGroupMentionsPlugin",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      i,
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "mentions_datasource_js_constructor_args_json",
                        storageKey: null,
                      },
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
                    kind: "InlineFragment",
                    selections: [
                      k,
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerMediaUploadPlugin_plugin",
                        fragmentPropName: "plugin",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CommentComposerMediaUploadPlugin",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      h,
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
                    kind: "InlineFragment",
                    selections: [
                      l,
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
                    kind: "InlineFragment",
                    selections: [
                      l,
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Group",
                        kind: "LinkedField",
                        name: "associated_group",
                        plural: !1,
                        selections: f,
                        storageKey: null,
                      },
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerBotsComposerPlugin_plugin",
                        fragmentPropName: "plugin",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CommentComposerBotsComposerPlugin",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      l,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "owning_profile_id",
                        storageKey: null,
                      },
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerStickersPlugin_next_plugin",
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
                        fragmentName:
                          "cometUFIComposerPrefillMentionPlugin_plugin",
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "has_avatar",
                        storageKey: null,
                      },
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
                        fragmentName:
                          "cometUFIComposerStateSnapshotPlugin_plugin",
                        fragmentPropName: "plugin",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CommentComposerStateSnapshotPlugin",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      l,
                      k,
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
                    kind: "InlineFragment",
                    selections: [
                      l,
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
                    kind: "InlineFragment",
                    selections: [
                      k,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_viewer_comment_with_file",
                        storageKey: null,
                      },
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
                    kind: "InlineFragment",
                    selections: [
                      l,
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerSmartComposePlugin_plugin",
                        fragmentPropName: "plugin",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CommentComposerSmartComposePlugin",
                    abstractKey: null,
                  },
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
                            selections: j,
                            storageKey: null,
                          },
                          c,
                        ],
                        storageKey: null,
                      },
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerUnifiedInputPlugin_plugin",
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
                    kind: "InlineFragment",
                    selections: [
                      i,
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
                          c,
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
                                selections: g,
                                storageKey: null,
                              },
                              c,
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
                    kind: "InlineFragment",
                    selections: [
                      l,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "fact_type",
                        storageKey: null,
                      },
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_inline_vote_enabled",
                        storageKey: null,
                      },
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
              {
                alias: "threading_config_type",
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "threading_config",
                plural: !1,
                selections: [b],
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
                  b,
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
                  b,
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_hide_transparency_enabled_for_actor",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WorkAMAUFIAnsweringNowCommentModuleRenderer",
                kind: "LinkedField",
                name: "work_answering_now_comment_renderer",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometDefaultCommentListRenderer_renderer_work_answering_now_comment_renderer",
                    fragmentName: "CometUFIAnsweringNowComment_feedback",
                    fragmentPropName: "feedback",
                    kind: "ModuleImport",
                  },
                ],
                storageKey: null,
              },
              c,
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
  "CometDefaultCommentListRenderer_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometDefaultCommentListRenderer_renderer",
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
              name: "CometDefaultCommentListBody_feedback",
            },
            {
              alias: null,
              args: null,
              concreteType: "WorkAMAUFIAnsweringNowCommentModuleRenderer",
              kind: "LinkedField",
              name: "work_answering_now_comment_renderer",
              plural: !1,
              selections: [
                {
                  args: null,
                  documentName:
                    "CometDefaultCommentListRenderer_renderer_work_answering_now_comment_renderer",
                  fragmentName: "CometUFIAnsweringNowComment_feedback",
                  fragmentPropName: "feedback",
                  kind: "ModuleImport",
                },
              ],
              storageKey: null,
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
  "CometFeedUFIContainer_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "feedLocation" },
        { kind: "RootArgument", name: "focusCommentID" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedUFIContainer_story",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_text_only_story",
          storageKey: null,
        },
        {
          alias: null,
          args: [
            {
              fields: [
                {
                  kind: "Variable",
                  name: "fb_feed_location",
                  variableName: "feedLocation",
                },
                {
                  kind: "Variable",
                  name: "focused_comment_id",
                  variableName: "focusCommentID",
                },
              ],
              kind: "ObjectValue",
              name: "feed_rendering_context",
            },
          ],
          concreteType: "FeedbackContext",
          kind: "LinkedField",
          name: "feedback_context",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback_target_with_context",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedUFI_feedback",
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
          name: "shareable_from_perspective_of_feed_ufi",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometFeedUFI_shareable",
            },
          ],
          storageKey: null,
        },
        { args: null, kind: "FragmentSpread", name: "CometFeedUFI_story" },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedUFITopLevelCommentList_renderer$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          kind: "Variable",
          name: "feed_location",
          variableName: "feedLocation",
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        c = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = [b, d],
        f = [d],
        g = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "emoji_size",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_id",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "viewer_actor",
          plural: !1,
          selections: e,
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "feedback_id",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedUFITopLevelCommentList_renderer$normalization",
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
                name: "can_viewer_comment",
                storageKey: null,
              },
              {
                alias: null,
                args: [a],
                concreteType: null,
                kind: "LinkedField",
                name: "content_based_comment_list_renderer",
                plural: !1,
                selections: [
                  b,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometFeedUFITopLevelCommentList_renderer",
                        fragmentName:
                          "CometDefaultCommentListRenderer_renderer",
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
                        documentName:
                          "CometFeedUFITopLevelCommentList_renderer",
                        fragmentName: "CometLiveCommentListRenderer_renderer",
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
                        documentName:
                          "CometFeedUFITopLevelCommentList_renderer",
                        fragmentName:
                          "CometLiveVODCommentListRenderer_renderer",
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
              {
                alias: null,
                args: [c],
                concreteType: null,
                kind: "LinkedField",
                name: "viewer_actor",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: "plugins",
                args: [a, c],
                concreteType: null,
                kind: "LinkedField",
                name: "comment_composer_plugins",
                plural: !0,
                selections: [
                  b,
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
                        selections: f,
                        storageKey: null,
                      },
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
                          d,
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
                            selections: g,
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "composer_tip",
                        storageKey: null,
                      },
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
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerProfilePlusTipPlugin_plugin",
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
                    kind: "InlineFragment",
                    selections: [
                      h,
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
                    kind: "InlineFragment",
                    selections: [
                      i,
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerGroupMentionsPlugin_plugin",
                        fragmentPropName: "plugin",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CommentComposerGroupMentionsPlugin",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      i,
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "mentions_datasource_js_constructor_args_json",
                        storageKey: null,
                      },
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
                    kind: "InlineFragment",
                    selections: [
                      j,
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerMediaUploadPlugin_plugin",
                        fragmentPropName: "plugin",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CommentComposerMediaUploadPlugin",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      h,
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
                    kind: "InlineFragment",
                    selections: [
                      k,
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
                    kind: "InlineFragment",
                    selections: [
                      k,
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Group",
                        kind: "LinkedField",
                        name: "associated_group",
                        plural: !1,
                        selections: f,
                        storageKey: null,
                      },
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerBotsComposerPlugin_plugin",
                        fragmentPropName: "plugin",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CommentComposerBotsComposerPlugin",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      k,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "owning_profile_id",
                        storageKey: null,
                      },
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerStickersPlugin_next_plugin",
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
                        fragmentName:
                          "cometUFIComposerPrefillMentionPlugin_plugin",
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "has_avatar",
                        storageKey: null,
                      },
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
                        fragmentName:
                          "cometUFIComposerStateSnapshotPlugin_plugin",
                        fragmentPropName: "plugin",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CommentComposerStateSnapshotPlugin",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      k,
                      j,
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
                    kind: "InlineFragment",
                    selections: [
                      k,
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
                    kind: "InlineFragment",
                    selections: [
                      j,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_viewer_comment_with_file",
                        storageKey: null,
                      },
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
                    kind: "InlineFragment",
                    selections: [
                      k,
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerSmartComposePlugin_plugin",
                        fragmentPropName: "plugin",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "CommentComposerSmartComposePlugin",
                    abstractKey: null,
                  },
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
                            selections: e,
                            storageKey: null,
                          },
                          d,
                        ],
                        storageKey: null,
                      },
                      {
                        args: null,
                        documentName: "useCometUFIComposerPlugins_feedback",
                        fragmentName:
                          "cometUFIComposerUnifiedInputPlugin_plugin",
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
                    kind: "InlineFragment",
                    selections: [
                      i,
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
                          d,
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
                                selections: g,
                                storageKey: null,
                              },
                              d,
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
                    kind: "InlineFragment",
                    selections: [
                      k,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "fact_type",
                        storageKey: null,
                      },
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
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_inline_vote_enabled",
                        storageKey: null,
                      },
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
              d,
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
                  b,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometUFIComposerWrapper_feedback_commentList",
                        fragmentName:
                          "CometDefaultCommentListComposer_renderer",
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
                        documentName:
                          "CometUFIComposerWrapper_feedback_commentList",
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
                        documentName:
                          "CometUFIComposerWrapper_feedback_commentList",
                        fragmentName:
                          "CometLiveVODCommentListComposer_renderer",
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
                  b,
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
                selections: [d, b],
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
              {
                alias: "unfiltered_comment_count",
                args: [
                  {
                    kind: "Literal",
                    name: "orderby",
                    value: "ranked_unfiltered",
                  },
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_community_qa_or_qaish_post",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_for_workplace_ama_post",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WorkAMAUFIModuleRenderer",
                kind: "LinkedField",
                name: "work_ama_ufi_module_renderer",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedUFITopLevelCommentList_renderer_work_ama_ufi_module_renderer",
                    fragmentName: "CometWorkplaceLiveAMAUFIModule_data",
                    fragmentPropName: "data",
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
                name: "if_viewer_can_see_comment_reputation_system_contextual_message_nux",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedUFITopLevelCommentList_renderer_if_viewer_can_see_comment_reputation_system_contextual_message_nux",
                    fragmentName:
                      "CometUFICommentReputationSystemCommentListContextualMessage_feedback",
                    fragmentPropName: "feedback",
                    kind: "ModuleImport",
                  },
                  d,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "comment_moderation_filter_restriction_notice",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedUFITopLevelCommentList_restrictionNotice",
                    fragmentName:
                      "CometUFICommentModerationFilterSetNotice_moderationFilter",
                    fragmentPropName: "moderationFilter",
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
                name: "comment_contextual_message_comet_renderer",
                plural: !1,
                selections: [
                  b,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometCommentContextualMessage_feedback_comment_contextual_message_comet",
                        fragmentName:
                          "StandardsInCommentsCometContextualMessage_data",
                        fragmentPropName: "data",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "StandardsInCommentsCometRenderer",
                    abstractKey: null,
                  },
                ],
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
  "CometFeedUFITopLevelCommentList_renderer.graphql",
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
          { defaultValue: !0, kind: "LocalArgument", name: "canShowSeenState" },
          { kind: "RootArgument", name: "feedLocation" },
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedUFITopLevelCommentList_renderer",
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
                name: "can_viewer_comment",
                storageKey: null,
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
                name: "content_based_comment_list_renderer",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometFeedUFITopLevelCommentList_renderer",
                        fragmentName:
                          "CometDefaultCommentListRenderer_renderer",
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
                        documentName:
                          "CometFeedUFITopLevelCommentList_renderer",
                        fragmentName: "CometLiveCommentListRenderer_renderer",
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
                        documentName:
                          "CometFeedUFITopLevelCommentList_renderer",
                        fragmentName:
                          "CometLiveVODCommentListRenderer_renderer",
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
                  a,
                ],
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFIComposerWrapperUseComposerPluginProps_feedback",
              },
              a,
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFIComposerWrapper_feedback",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFITypingIndicator_feedback",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFIViewOptions_feedback",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_community_qa_or_qaish_post",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_for_workplace_ama_post",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WorkAMAUFIModuleRenderer",
                kind: "LinkedField",
                name: "work_ama_ufi_module_renderer",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedUFITopLevelCommentList_renderer_work_ama_ufi_module_renderer",
                    fragmentName: "CometWorkplaceLiveAMAUFIModule_data",
                    fragmentPropName: "data",
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
                name: "if_viewer_can_see_comment_reputation_system_contextual_message_nux",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "CometFeedUFITopLevelCommentList_renderer_if_viewer_can_see_comment_reputation_system_contextual_message_nux",
                    fragmentName:
                      "CometUFICommentReputationSystemCommentListContextualMessage_feedback",
                    fragmentPropName: "feedback",
                    kind: "ModuleImport",
                  },
                ],
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedUFITopLevelCommentList_restrictionNotice",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometCommentContextualMessage_feedback",
              },
            ],
            storageKey: null,
          },
        ],
        type: "FeedTopLevelCommentListRenderer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedUFITopLevelCommentList_restrictionNotice.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedUFITopLevelCommentList_restrictionNotice",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "comment_moderation_filter_restriction_notice",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "CometFeedUFITopLevelCommentList_restrictionNotice",
              fragmentName:
                "CometUFICommentModerationFilterSetNotice_moderationFilter",
              fragmentPropName: "moderationFilter",
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
  "CometFeedUFI_feedback.graphql",
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
      name: "CometFeedUFI_feedback",
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
          name: "ufi_renderer",
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
                  documentName: "CometFeedUFI_feedback",
                  fragmentName: "CometFullUFIRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "FullUFIRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "CometFeedUFI_feedback",
                  fragmentName: "CometSimplifiedUFIRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "SimplifiedUFIRenderer",
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
  "CometFeedUFI_shareable.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedUFI_shareable",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFullUFIRenderer_shareable",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometSimplifiedUFIRenderer_shareable",
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
  "CometFeedUFI_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedUFI_story",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFullUFIRenderer_story",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometSimplifiedUFIRenderer_story",
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
  "CometUFIBatchLikeStarCommentsCardRendererQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedLocation",
        },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackTargetID",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "orderingMode" },
        d = [
          { kind: "Variable", name: "id", variableName: "feedbackTargetID" },
        ],
        e = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "comment_ordering_mode",
              variableName: "orderingMode",
            },
            {
              kind: "Variable",
              name: "feed_location",
              variableName: "feedLocation",
            },
          ],
          concreteType: "StarsBatchLikeStarCommentsModuleRenderer",
          kind: "LinkedField",
          name: "batch_like_star_comments_renderer",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "CometUFIBatchLikeStarCommentsCardRendererQuery",
              fragmentName: "CometUFIBatchLikeStarCommentsCard_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c],
          kind: "Fragment",
          metadata: null,
          name: "CometUFIBatchLikeStarCommentsCardRendererQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: [e],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [b, a, c],
          kind: "Operation",
          name: "CometUFIBatchLikeStarCommentsCardRendererQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: [
                e,
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
        },
        params: {
          id: "4257536424280359",
          metadata: {},
          name: "CometUFIBatchLikeStarCommentsCardRendererQuery",
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
  "CometCommentContextualMessage_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometCommentContextualMessage_feedback",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "comment_contextual_message_comet_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "CometCommentContextualMessage_feedback_comment_contextual_message_comet",
                  fragmentName:
                    "StandardsInCommentsCometContextualMessage_data",
                  fragmentPropName: "data",
                  kind: "ModuleImport",
                },
              ],
              type: "StandardsInCommentsCometRenderer",
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
  "CometFullUFIRenderer_renderer$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, aa, b, c, d, e) {
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
            name: "feedback_source_integer",
            variableName: "feedbackSource",
          },
        ],
        c = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        d = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "feedLocation",
            },
            c,
          ],
          kind: "ScalarField",
          name: "can_viewer_comment",
          storageKey: null,
        },
        e = {
          kind: "Variable",
          name: "feed_context_enable_comment",
          variableName: "displayCommentsContextEnableComment",
        },
        f = {
          kind: "Variable",
          name: "feed_context_fb_feed_location",
          variableName: "feedLocation",
        },
        g = {
          kind: "Variable",
          name: "feed_context_is_ad_preview",
          variableName: "displayCommentsContextIsAdPreview",
        },
        h = {
          kind: "Variable",
          name: "feed_context_is_aggregated_share",
          variableName: "displayCommentsContextIsAggregatedShare",
        },
        i = {
          kind: "Variable",
          name: "feed_context_is_story_set",
          variableName: "displayCommentsContextIsStorySet",
        },
        j = {
          kind: "Variable",
          name: "feedback_context",
          variableName: "displayCommentsFeedbackContext",
        },
        k = {
          kind: "Variable",
          name: "feedback_source",
          variableName: "feedbackSource",
        },
        l = {
          kind: "Variable",
          name: "focus_comment_id",
          variableName: "focusCommentID",
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_initially_expanded",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscription_target_id",
          storageKey: null,
        },
        ba = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_is_ama_enabled",
          storageKey: null,
        },
        ca = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_status",
          storageKey: null,
        },
        da = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_gaming_video",
          storageKey: null,
        },
        ea = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "broadcast_is_ama_enabled_with_comments",
          storageKey: null,
        },
        fa = {
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
        };
      c = [c];
      var o = {
          alias: null,
          args: c,
          kind: "ScalarField",
          name: "comment_composer_placeholder",
          storageKey: null,
        },
        ga = {
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
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        q = [p],
        ha = {
          alias: "toplevel_comment_count",
          args: [{ kind: "Literal", name: "orderby", value: "toplevel" }],
          concreteType: "TopLevelCommentsConnection",
          kind: "LinkedField",
          name: "top_level_comments",
          plural: !1,
          selections: q,
          storageKey: 'top_level_comments(orderby:"toplevel")',
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        ia = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "threading_config",
          plural: !1,
          selections: [r],
          storageKey: null,
        },
        s = { kind: "TypeDiscriminator", abstractKey: "__isActor" },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        u = { kind: "Variable", name: "scale", variableName: "scale" },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        w = [v],
        x = {
          alias: "profile_picture_depth_0",
          args: [
            { kind: "Literal", name: "height", value: 32 },
            u,
            { kind: "Literal", name: "width", value: 32 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: w,
          storageKey: null,
        },
        ja = [
          { kind: "Literal", name: "height", value: 24 },
          u,
          { kind: "Literal", name: "width", value: 24 },
        ],
        y = {
          alias: "profile_picture_depth_1",
          args: ja,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: w,
          storageKey: null,
        },
        z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        A = {
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
        ka = {
          kind: "InlineFragment",
          selections: [z, A],
          type: "User",
          abstractKey: null,
        },
        la = {
          alias: null,
          args: c,
          concreteType: null,
          kind: "LinkedField",
          name: "viewer_actor",
          plural: !1,
          selections: [r, a, s, t, x, y, ka],
          storageKey: null,
        },
        ma = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_vc_acting_as_page_or_profile_plus",
          storageKey: null,
        },
        na = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_pin_live_comments",
          storageKey: null,
        },
        B = [a],
        oa = {
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
              selections: B,
              storageKey: null,
            },
            a,
          ],
          storageKey: null,
        },
        pa = {
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
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hide_transparency_enabled_for_actor",
          storageKey: null,
        },
        D = { kind: "Literal", name: "is_initial_fetch", value: !0 },
        qa = [
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          D,
          { kind: "Literal", name: "is_top_level", value: !0 },
        ],
        ra = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comment_order",
          storageKey: null,
        },
        sa = {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "expanded_sub_reply_parents",
          plural: !0,
          selections: B,
          storageKey: null,
        },
        ta = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_size",
          storageKey: null,
        },
        ua = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reply_comment_order",
          storageKey: null,
        },
        va = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_render_composer_preemptively",
          storageKey: null,
        },
        wa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "after_count",
          storageKey: null,
        },
        xa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "before_count",
          storageKey: null,
        },
        ya = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_fbid",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        F = [E],
        G = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        H = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        };
      G = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "author",
        plural: !1,
        selections: [
          r,
          a,
          t,
          {
            kind: "InlineFragment",
            selections: F,
            type: "Event",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: F,
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [E, G],
            type: "Page",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              E,
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
              G,
              H,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subscribe_status",
                storageKey: null,
              },
              z,
              A,
            ],
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: F,
            type: "Entity",
            abstractKey: "__isEntity",
          },
          s,
          x,
          y,
        ],
        storageKey: null,
      };
      A = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_author_weak_reference",
        storageKey: null,
      };
      F = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "created_time",
        storageKey: null,
      };
      s = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "spam_display_mode",
        storageKey: null,
      };
      x = {
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
              r,
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
      };
      y = {
        kind: "Variable",
        name: "feed_location",
        variableName: "feedLocation",
      };
      var I = [y],
        za = {
          alias: null,
          args: I,
          kind: "ScalarField",
          name: "comment_menu_tooltip",
          storageKey: null,
        },
        Aa = {
          alias: null,
          args: I,
          kind: "ScalarField",
          name: "should_show_comment_menu",
          storageKey: null,
        },
        Ba = {
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
        Ca = {
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
                r,
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
        J = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        Da = {
          alias: null,
          args: c,
          concreteType: "FeedbackReactionInfo",
          kind: "LinkedField",
          name: "viewer_feedback_reaction_info",
          plural: !1,
          selections: [J, a],
          storageKey: null,
        },
        Ea = {
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
            J,
            a,
          ],
          storageKey: null,
        };
      J = {
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
                  J,
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
                    selections: w,
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
      var Fa = {
          alias: null,
          args: null,
          concreteType: "ReactorsOfContentConnection",
          kind: "LinkedField",
          name: "reactors",
          plural: !1,
          selections: [
            p,
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
        Ga = {
          alias: null,
          args: c,
          kind: "ScalarField",
          name: "can_viewer_react",
          storageKey: null,
        },
        Ha = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show_top_reactions",
          storageKey: null,
        };
      D = [
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        D,
        { kind: "Literal", name: "is_top_level", value: !1 },
      ];
      var K = [r, a],
        Ia = {
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
        Ja = {
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
        Ka = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_banned_by_content_owner",
          storageKey: null,
        },
        La = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_ama_question",
          storageKey: null,
        };
      H = {
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
            selections: [d, a],
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
              r,
              t,
              {
                kind: "InlineFragment",
                selections: [H, z],
                type: "User",
                abstractKey: null,
              },
              a,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      z = {
        alias: null,
        args: null,
        concreteType: "EditHistoryConnection",
        kind: "LinkedField",
        name: "edit_history",
        plural: !1,
        selections: q,
        storageKey: null,
      };
      var Ma = {
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
              args: c,
              concreteType: "Page",
              kind: "LinkedField",
              name: "viewer_acts_as_page",
              plural: !1,
              selections: B,
              storageKey: null,
            },
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
                t,
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
                    a,
                  ],
                  storageKey: null,
                },
                a,
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Na = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ban_action",
          storageKey: null,
        },
        L = [{ kind: "Literal", name: "translation_type", value: "ORIGINAL" }],
        M = {
          args: null,
          fragment: aa(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
          ),
          kind: "FragmentSpread",
        },
        N = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        };
      M = {
        alias: null,
        args: L,
        concreteType: null,
        kind: "LinkedField",
        name: "preferred_body",
        plural: !1,
        selections: [
          r,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "translation_type",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [M, N],
            type: "TextWithEntities",
            abstractKey: null,
          },
          M,
        ],
        storageKey: 'preferred_body(translation_type:"ORIGINAL")',
      };
      var Oa = {
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
        Pa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "translation_available_for_viewer",
          storageKey: null,
        },
        Qa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_by_content_owner",
          storageKey: null,
        },
        Ra = {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "if_viewer_can_share",
          plural: !1,
          selections: [
            a,
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
        Sa = {
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
            a,
          ],
          storageKey: null,
        },
        Ta = {
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
            a,
          ],
          storageKey: null,
        },
        Ua = {
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
        Va = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comment_privacy_value",
          storageKey: null,
        },
        Wa = {
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
            a,
          ],
          storageKey: null,
        },
        Xa = {
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
            a,
          ],
          storageKey: null,
        };
      L = {
        alias: "body_renderer",
        args: L,
        concreteType: null,
        kind: "LinkedField",
        name: "preferred_body",
        plural: !1,
        selections: [
          r,
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
      var Ya = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_declined_by_group_admin_assistant",
          storageKey: null,
        },
        Za = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_gaming_video_comment",
          storageKey: null,
        },
        $a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp_in_video",
          storageKey: null,
        },
        ab = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "written_while_video_was_live",
          storageKey: null,
        },
        bb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_constituent_badge",
          storageKey: null,
        },
        cb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_see_subsribe_button",
          storageKey: null,
        },
        db = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_see_constituent_badge_upsell",
          storageKey: null,
        },
        eb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_token",
          storageKey: null,
        },
        fb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "question_and_answer_type",
          storageKey: null,
        },
        gb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_original_poster",
          storageKey: null,
        },
        hb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_comment_poster",
          storageKey: null,
        },
        ib = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_bot",
          storageKey: null,
        },
        jb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_non_coworker",
          storageKey: null,
        },
        kb = {
          alias: null,
          args: I,
          concreteType: null,
          kind: "LinkedField",
          name: "author_user_signals_renderer",
          plural: !1,
          selections: [
            r,
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
      y = {
        alias: null,
        args: [
          y,
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
          r,
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
            r,
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
        lb = {
          alias: null,
          args: I,
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
      I = {
        alias: null,
        args: I,
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
          {
            alias: null,
            args: [u],
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
              v,
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
      T = {
        alias: null,
        args: null,
        concreteType: "Story",
        kind: "LinkedField",
        name: "attached_story",
        plural: !1,
        selections: K,
        storageKey: null,
      };
      U = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "if_viewer_can_see_member_page_tooltip",
        plural: !1,
        selections: K,
        storageKey: null,
      };
      V = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_disabled",
        storageKey: null,
      };
      W = {
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
      X = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "comment_upper_badge_renderer",
        plural: !1,
        selections: [
          r,
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
      Y = {
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
          r,
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
      Z = {
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
              r,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "entity",
                plural: !1,
                selections: [
                  r,
                  {
                    kind: "InlineFragment",
                    selections: B,
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
      $ = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_markdown_enabled",
        storageKey: null,
      };
      u = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "reply_parent_comment",
        plural: !1,
        selections: B,
        storageKey: null,
      };
      v = {
        alias: "threading_depth",
        args: null,
        kind: "ScalarField",
        name: "depth",
        storageKey: null,
      };
      N = {
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
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "reply_comment_parent_fbid",
            storageKey: null,
          },
        ],
      };
      var mb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cursor",
          storageKey: null,
        },
        nb = {
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
        ob = {
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
        pb = ["feedback_source", "focus_comment_id", "comment_order"],
        qb = {
          kind: "Variable",
          name: "__dynamicKey",
          variableName: "UFI2CommentsProvider_commentsKey",
        },
        rb = {
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
            a,
          ],
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFullUFIRenderer_renderer$normalization",
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
                args: b,
                kind: "ScalarField",
                name: "is_eligible_for_real_time_updates",
                storageKey: null,
              },
              d,
              {
                alias: "aria_expanded_provider_display_comments",
                args: [e, f, g, h, i, j, k, l],
                concreteType: "DisplayCommentsConnection",
                kind: "LinkedField",
                name: "display_comments",
                plural: !1,
                selections: [m],
                storageKey: null,
              },
              {
                alias: null,
                args: b,
                kind: "ScalarField",
                name: "is_eligible_for_enhanced_comment_updates",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_synced_qa_post",
                storageKey: null,
              },
              n,
              {
                alias: null,
                args: null,
                concreteType: "Video",
                kind: "LinkedField",
                name: "associated_video",
                plural: !1,
                selections: [ba, a, ca, da, ea],
                storageKey: null,
              },
              fa,
              o,
              ga,
              ha,
              ia,
              la,
              ma,
              na,
              oa,
              pa,
              C,
              {
                alias: null,
                args: qa,
                concreteType: "DisplayCommentsConnection",
                kind: "LinkedField",
                name: "display_comments",
                plural: !1,
                selections: [
                  ra,
                  sa,
                  m,
                  ta,
                  ua,
                  va,
                  wa,
                  xa,
                  p,
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
                          a,
                          ya,
                          G,
                          A,
                          F,
                          s,
                          x,
                          za,
                          Aa,
                          Ba,
                          {
                            alias: null,
                            args: null,
                            concreteType: "Feedback",
                            kind: "LinkedField",
                            name: "feedback",
                            plural: !1,
                            selections: [
                              a,
                              Ca,
                              la,
                              Da,
                              Ea,
                              {
                                alias: null,
                                args: null,
                                concreteType: "Video",
                                kind: "LinkedField",
                                name: "associated_video",
                                plural: !1,
                                selections: [a, ba, ca, da, ea],
                                storageKey: null,
                              },
                              J,
                              Fa,
                              d,
                              Ga,
                              o,
                              Ha,
                              fa,
                              ga,
                              ha,
                              ia,
                              ma,
                              na,
                              oa,
                              pa,
                              C,
                              n,
                              {
                                alias: null,
                                args: D,
                                concreteType: "DisplayCommentsConnection",
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
                                          r,
                                          t,
                                          {
                                            alias:
                                              "profilePictureForReplyExpander",
                                            args: ja,
                                            concreteType: "Image",
                                            kind: "LinkedField",
                                            name: "profile_picture",
                                            plural: !1,
                                            selections: w,
                                            storageKey: null,
                                          },
                                          ka,
                                          a,
                                        ],
                                        storageKey: null,
                                      },
                                      F,
                                      a,
                                    ],
                                    storageKey: null,
                                  },
                                  ra,
                                  sa,
                                  m,
                                  ta,
                                  ua,
                                  va,
                                  wa,
                                  xa,
                                  p,
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
                                          a,
                                          ya,
                                          G,
                                          A,
                                          F,
                                          s,
                                          x,
                                          za,
                                          Aa,
                                          Ba,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: "Feedback",
                                            kind: "LinkedField",
                                            name: "feedback",
                                            plural: !1,
                                            selections: [
                                              a,
                                              Ca,
                                              {
                                                alias: null,
                                                args: c,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "viewer_actor",
                                                plural: !1,
                                                selections: K,
                                                storageKey: null,
                                              },
                                              Da,
                                              Ea,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: "Video",
                                                kind: "LinkedField",
                                                name: "associated_video",
                                                plural: !1,
                                                selections: B,
                                                storageKey: null,
                                              },
                                              J,
                                              Fa,
                                              d,
                                              Ga,
                                              o,
                                              Ha,
                                              {
                                                alias: "sub_replies_count",
                                                args: [
                                                  {
                                                    kind: "Literal",
                                                    name: "comment_order",
                                                    value: "SUB_REPLIES",
                                                  },
                                                  {
                                                    kind: "Literal",
                                                    name: "top_level_comment_order",
                                                    value: "TOPLEVEL",
                                                  },
                                                ],
                                                concreteType:
                                                  "DisplayCommentsConnection",
                                                kind: "LinkedField",
                                                name: "display_comments",
                                                plural: !1,
                                                selections: q,
                                                storageKey:
                                                  'display_comments(comment_order:"SUB_REPLIES",top_level_comment_order:"TOPLEVEL")',
                                              },
                                              C,
                                            ],
                                            storageKey: null,
                                          },
                                          Ia,
                                          Ja,
                                          Ka,
                                          La,
                                          H,
                                          z,
                                          Ma,
                                          Na,
                                          M,
                                          Oa,
                                          Pa,
                                          E,
                                          Qa,
                                          Ra,
                                          Sa,
                                          Ta,
                                          Ua,
                                          Va,
                                          Wa,
                                          Xa,
                                          L,
                                          Ya,
                                          Za,
                                          $a,
                                          ab,
                                          bb,
                                          cb,
                                          db,
                                          eb,
                                          fb,
                                          gb,
                                          hb,
                                          ib,
                                          jb,
                                          kb,
                                          y,
                                          lb,
                                          I,
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
                                            name: "is_subreply_parent_deleted",
                                            storageKey: null,
                                          },
                                          u,
                                          v,
                                          r,
                                          N,
                                        ],
                                        storageKey: null,
                                      },
                                      mb,
                                    ],
                                    storageKey: null,
                                  },
                                  nb,
                                  ob,
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: D,
                                filters: pb,
                                handle: "ufi2_comments",
                                key: "UFI2CommentsProvider_feedback_display_comments",
                                kind: "LinkedHandle",
                                name: "display_comments",
                                dynamicKey: qb,
                              },
                              rb,
                            ],
                            storageKey: null,
                          },
                          Ia,
                          Ja,
                          Ka,
                          La,
                          H,
                          z,
                          Ma,
                          Na,
                          M,
                          Oa,
                          Pa,
                          E,
                          Qa,
                          Ra,
                          Sa,
                          Ta,
                          Ua,
                          Va,
                          Wa,
                          Xa,
                          L,
                          Ya,
                          Za,
                          $a,
                          ab,
                          bb,
                          cb,
                          db,
                          eb,
                          fb,
                          gb,
                          hb,
                          ib,
                          jb,
                          kb,
                          y,
                          lb,
                          I,
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
                          u,
                          v,
                          r,
                          N,
                        ],
                        storageKey: null,
                      },
                      mb,
                    ],
                    storageKey: null,
                  },
                  nb,
                  ob,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: qa,
                filters: pb,
                handle: "ufi2_comments",
                key: "UFI2CommentsProvider_feedback_display_comments",
                kind: "LinkedHandle",
                name: "display_comments",
                dynamicKey: qb,
              },
              rb,
              {
                alias: null,
                args: [k],
                concreteType: null,
                kind: "LinkedField",
                name: "top_level_comment_list_renderer",
                plural: !1,
                selections: [
                  r,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometUFITopLevelCommentListRenderer_feedback",
                        fragmentName:
                          "CometMediaViewerUFITopLevelCommentList_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "MediaViewerTopLevelCommentListRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometUFITopLevelCommentListRenderer_feedback",
                        fragmentName:
                          "CometFeedUFITopLevelCommentList_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "FeedTopLevelCommentListRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometUFITopLevelCommentListRenderer_feedback",
                        fragmentName:
                          "CometWatchUFITopLevelCommentList_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "WatchTopLevelCommentListRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometUFITopLevelCommentListRenderer_feedback",
                        fragmentName:
                          "LiveProducerTopLevelCommentList_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "LiveProducerTopLevelCommentListRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometUFITopLevelCommentListRenderer_feedback",
                        fragmentName:
                          "KnowledgeNoteInlineAnnotationTopLevelCommentList_renderer",
                        fragmentPropName: "renderer",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "KnowledgeNoteInlineAnnotationTopLevelCommentListRenderer",
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
                      "DefaultCometUFISummaryAndActionsRenderer",
                      "LiveVideoCometUFISummaryAndActionsRenderer",
                      "UnauthenticatedUCometUFISummaryAndActionsRenderer",
                    ],
                  },
                ],
                concreteType: null,
                kind: "LinkedField",
                name: "comet_ufi_summary_and_actions_renderer",
                plural: !1,
                selections: [
                  r,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometUFISummaryAndActions_feedback",
                        fragmentName:
                          "CometUFIDefaultSummaryAndActionsRenderer_feedback",
                        fragmentPropName: "feedback",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "DefaultCometUFISummaryAndActionsRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometUFISummaryAndActions_feedback",
                        fragmentName:
                          "CometUFILiveVideoSummaryAndActionsRenderer_feedback",
                        fragmentPropName: "feedback",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "LiveVideoCometUFISummaryAndActionsRenderer",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName: "CometUFISummaryAndActions_feedback",
                        fragmentName:
                          "CometUnauthenticatedUFISummaryAndActionsRenderer_feedback",
                        fragmentPropName: "feedback",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "UnauthenticatedUCometUFISummaryAndActionsRenderer",
                    abstractKey: null,
                  },
                ],
                storageKey:
                  'comet_ufi_summary_and_actions_renderer(supported:["DefaultCometUFISummaryAndActionsRenderer","LiveVideoCometUFISummaryAndActionsRenderer","UnauthenticatedUCometUFISummaryAndActionsRenderer"])',
              },
            ],
            storageKey: null,
          },
        ],
      };
    })();
    d.exports = a;
  },
  null
);
__d(
  "CometFullUFIRenderer_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: !0, kind: "LocalArgument", name: "canShowSeenState" },
        { kind: "RootArgument", name: "feedLocation" },
        { kind: "RootArgument", name: "feedbackSource" },
        { kind: "RootArgument", name: "useDefaultActor" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometFullUFIRenderer_renderer",
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
              kind: "ScalarField",
              name: "can_viewer_comment",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometUFICommentsAriaExpandedProvider_feedback",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometUFICommentListRenderer_feedback",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometUFISummaryAndActions_feedback",
            },
          ],
          storageKey: null,
        },
      ],
      type: "FullUFIRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFullUFIRenderer_shareable.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFullUFIRenderer_shareable",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFISummaryAndActions_shareable",
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
  "CometFullUFIRenderer_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFullUFIRenderer_story",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFISummaryAndActions_story",
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
  "useGetTextDirectionAttribute",
  ["getTextDirectionAttribute", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      return h(
        function () {
          return c("getTextDirectionAttribute")(a);
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryAttachmentRenderer.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryAttachmentRenderer_attachment.graphql",
    "CometRelay",
    "RelayHooks",
    "TetraText.react",
    "gkx",
    "orEmptyArray",
    "react",
    "usePageletMatchMetadata",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useState,
      m =
        h !== void 0
          ? h
          : (h = b("CometFeedStoryAttachmentRenderer_attachment.graphql"));
    function a(a) {
      var b = d("RelayHooks").useFragment(m, a.attachment),
        e = a.adClientToken,
        f = a.adID,
        g = a.canOverlapWithPreviousAttachment;
      g = g === void 0 ? !1 : g;
      var h = a.onMatch_UNSTABLE_DO_NOT_USE,
        n = a.setHasImagePreview,
        o = a.storyUrl;
      a = a.trackingData;
      var p = b.style_type_renderer,
        q = c("orEmptyArray")(b.style_list);
      q = b.__typename;
      c("usePageletMatchMetadata")("feed_attachment", p);
      k(function () {
        if (h != null) {
          var a =
            p != null ? d("CometRelay").ModuleResource.getModuleId(p) : null;
          h((a = a) != null ? a : null);
        }
      }, []);
      b = l(!1);
      q = b[0];
      var r = b[1];
      b = j(function () {
        r(!0);
      }, []);
      return q
        ? null
        : i.jsx(c("CometFeedMatchRenderer.react"), {
            match: p,
            onUnsupported: b,
            props: {
              adClientToken: e,
              adID: f,
              canOverlapWithPreviousAttachment: g,
              setHasImagePreview: n,
              storyUrl: o,
            },
            section: "attachment",
            trackingData: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMediaLayoutAspectRatioConstraintContainer.react",
  ["CometAspectRatioContainer.react", "react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        d = a.containerAspectRatio;
      a = a.rootAspectRatio;
      if (a < d)
        throw c("unrecoverableViolation")(
          "The root aspect ratio cannot be less than the container's aspect ratio it's restricting",
          "comet_feed"
        );
      return a > d
        ? h.jsx(c("CometAspectRatioContainer.react"), {
            aspectRatio: a,
            children: h.jsx("div", {
              className: "l9j0dhe7 o8rfisnq",
              style: { width: (d / a) * 100 + "%" },
              children: b,
            }),
          })
        : b;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMediaLayoutViewportConstraintContainer.react",
  [
    "CometFeedStoryMediaLayoutConstants",
    "RecoverableViolationWithComponentStack.react",
    "qex",
    "react",
    "useCometErrorProject",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b,
        e = a.aspectRatio,
        f = a.children;
      a = a.mediaWidth;
      b =
        (b = c("qex")._("1543237")) != null
          ? b
          : d("CometFeedStoryMediaLayoutConstants")
              .MAX_HEIGHT_VIEWPORT_ADJUSTMENT;
      var g = c("useCometErrorProject")(),
        i = Number.isNaN(a),
        j = Number.isNaN(e);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            style: {
              maxWidth:
                a < d("CometFeedStoryMediaLayoutConstants").MIN_WIDTH_MAX
                  ? a + "px"
                  : "100%",
              minWidth:
                Math.min(
                  d("CometFeedStoryMediaLayoutConstants")
                    .LOWER_BOUND_MIN_HEIGHT * e,
                  d("CometFeedStoryMediaLayoutConstants").MIN_WIDTH_MAX
                ) + "px",
              width: "calc((100vh + " + b + "px) * " + e + ")",
            },
            children: f,
          }),
          (i || j) &&
            h.jsx(c("RecoverableViolationWithComponentStack.react"), {
              errorMessage:
                "An invalid mediaWidth or aspectRatio in CometFeedStoryMediaLayoutViewportConstraintContainer",
              projectName: (a = g) != null ? a : "comet_feed",
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
  "CometFeedStoryViewportMaxHeightMediaLayout.react",
  [
    "CometFeedFocusMedia.react",
    "CometFeedStoryMediaLayoutAspectRatioConstraintContainer.react",
    "CometFeedStoryMediaLayoutConstants",
    "CometFeedStoryMediaLayoutViewportConstraintContainer.react",
    "gkx",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.backgroundColor,
        e = a.children,
        f = a.mediaHeight,
        g = a.mediaWidth,
        i = a.focusX,
        j = a.focusY,
        k = a.minContainAspectRatio;
      k = k === void 0 ? 0 : k;
      a = a.minCropAspectRatio;
      a =
        a === void 0
          ? d("CometFeedStoryMediaLayoutConstants").DEFAULT_MIN_ASPECT_RATIO
          : a;
      var l = g / f;
      a = l < a ? a : l;
      var m = a < k ? k : a;
      l = (function () {
        return f > g ? f / m : g;
      })();
      return h.jsx("div", {
        className: c("stylex").dedupe(
          {
            "align-items-1": "bp9cbjyn",
            "background-color-1": "cwj9ozl2",
            "display-1": "j83agx80",
            "flex-direction-1": "cbu4d94t",
            "overflow-x-1": "ni8dbmo4",
            "overflow-y-1": "stjgntxs",
            "position-1": "l9j0dhe7",
            "width-1": "k4urcfbm",
          },
          c("gkx")("1217157") ? { "background-color-1": "r2g1fdfv" } : null
        ),
        style: { backgroundColor: b },
        children: h.jsx(
          c("CometFeedStoryMediaLayoutViewportConstraintContainer.react"),
          {
            aspectRatio: m,
            mediaWidth: l * 2,
            children: h.jsx(
              c(
                "CometFeedStoryMediaLayoutAspectRatioConstraintContainer.react"
              ),
              {
                containerAspectRatio: a,
                rootAspectRatio: m,
                children: h.jsx(c("CometFeedFocusMedia.react"), {
                  focusX: i,
                  focusY: j,
                  mediaHeight: f,
                  mediaWidth: g,
                  viewportAspectRatio: a,
                  children: e,
                }),
              }
            ),
          }
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryViewportMaxHeightPhotoAttachmentImplementation.react",
  [
    "CometFeedStoryViewportMaxHeightMediaLayout.react",
    "CometImage.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { imageCover: { objectFit: "bixrwtb6" } };
    function a(a) {
      var b = a.accentColor,
        d = a.accessibilityCaption,
        e = a.focusX,
        f = a.focusY,
        g = a.height,
        j = a.uri,
        k = a.width;
      return h.jsx(c("CometFeedStoryViewportMaxHeightMediaLayout.react"), {
        backgroundColor: b,
        focusX: e,
        focusY: f,
        mediaHeight: g,
        mediaWidth: k,
        children: function (a) {
          return h.jsx(c("CometImage.react"), {
            alt: d,
            height: g,
            src: j,
            width: k,
            xstyle: [a, i.imageCover],
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
  "CometFeedStoryPhotoAttachmentImplementation",
  ["CometFeedStoryViewportMaxHeightPhotoAttachmentImplementation.react"],
  function (a, b, c, d, e, f) {
    "use strict";
    f["default"] = b(
      "CometFeedStoryViewportMaxHeightPhotoAttachmentImplementation.react"
    );
  },
  66
);
__d(
  "StoryAttachmentActorContext",
  [
    "CometRelay",
    "StoryAttachmentActorContext_story.graphql",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext,
      k = i.createContext(void 0);
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoryAttachmentActorContext_story.graphql")),
        a.story
      );
      e = c("orEmptyArray")(e == null ? void 0 : e.actors)[0];
      return i.jsx(k.Provider, { value: e, children: a.children });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function e() {
      return j(k);
    }
    g.StoryAttachmentActorContextProvider = a;
    g.useStoryAttachmentActor = e;
  },
  98
);
__d(
  "useCometFeedPhotoBackgroundColorRelay",
  ["CometRelay", "useCometFeedPhotoBackgroundColorRelay_photo.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useCometFeedPhotoBackgroundColorRelay_photo.graphql")),
        a
      );
      return (a == null ? void 0 : a.accent_color) != null
        ? "#" + a.accent_color.slice(2)
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedChallengesCtaFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1767682");
    c = b("FalcoLoggerInternal").create("feed_challenges_cta", a);
    e.exports = c;
  },
  null
);
__d(
  "QuiltsCometStoryLevelCTALoggingUtils",
  [
    "CometRelay",
    "QuiltsCometStoryLevelCTALoggingUtils_tryItEvent.graphql",
    "recoverableViolation",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = c("requireDeferred")("QuiltTryItCtaFalcoEvent").__setRef(
        "QuiltsCometStoryLevelCTALoggingUtils"
      );
    function a(a) {
      a = d("CometRelay").readInlineData(
        h !== void 0
          ? h
          : (h = b("QuiltsCometStoryLevelCTALoggingUtils_tryItEvent.graphql")),
        a
      );
      var e = a.activity,
        f = a.post_id;
      if (e == null || f == null) {
        c("recoverableViolation")(
          "Expect activity and post ID not null in StoryLevelCallToActionQuiltTryItEvent",
          "community_collaborative"
        );
        return;
      }
      i.onReady(function (a) {
        a.log(function () {
          return { activity_type: e, post_id: f };
        });
      });
    }
    g.logTryIt = a;
  },
  98
);
__d(
  "ResetReshareFilterTriggeredCTANuxMutation",
  ["ResetReshareFilterTriggeredCTANuxMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a =
      h !== void 0
        ? h
        : (h = b("ResetReshareFilterTriggeredCTANuxMutation.graphql"));
    g.mutation = a;
  },
  98
);
__d(
  "useLogReshareFilterEvent",
  [
    "CometRelay",
    "ResetReshareFilterTriggeredCTANuxMutation",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "useLogReshareFilterEvent_event.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j = c("requireDeferred")(
        "FeedReshareMoodFilterCtaImpressionFalcoEvent"
      ).__setRef("useLogReshareFilterEvent"),
      k = c("requireDeferred")(
        "FeedReshareMoodFilterProductionFalcoEvent"
      ).__setRef("useLogReshareFilterEvent");
    function a() {
      var a = d("CometRelay").useMutation(
          d("ResetReshareFilterTriggeredCTANuxMutation").mutation
        ),
        e = a[0];
      return i(
        function (a) {
          a = d("CometRelay").readInlineData(
            h !== void 0
              ? h
              : (h = b("useLogReshareFilterEvent_event.graphql")),
            a
          );
          var f = a.entry_point_name,
            g = a.event_name,
            i = a.reaction_type,
            l = a.session_id,
            m = a.story_id;
          if (g == null || f == null || l == null || m == null) {
            c("recoverableViolation")(
              "Data was missing when trying to log to reshare filter falco event",
              "comet_feed"
            );
            return;
          }
          g === "cta_click" &&
            f === "expressive_reshares_reaction_triggered_cta" &&
            e({ variables: { input: { reaction_type: i } } });
          g === "cta_impression"
            ? j.onReady(function (a) {
                a.log(function () {
                  return {
                    entry_point_name: f,
                    is_supported_comet_revision: !0,
                    reaction_type: i,
                    session_id: l,
                    story_id: m,
                  };
                });
              })
            : k.onReady(function (a) {
                a.log(function () {
                  return {
                    entry_point_name: f,
                    event: g,
                    is_supported_comet_revision: !0,
                    reaction_type: i,
                    session_id: l,
                    story_id: m,
                  };
                });
              });
        },
        [e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useLogStoryLevelCTAEventActionsLoggerImpressionEvent",
  [
    "CometRelay",
    "react",
    "requireDeferred",
    "useLogStoryLevelCTAEventActionsLoggerImpressionEvent_event.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j = c("requireDeferred")("EventCometActionLogger").__setRef(
        "useLogStoryLevelCTAEventActionsLoggerImpressionEvent"
      );
    function a() {
      return i(function (a) {
        var c = d("CometRelay").readInlineData(
            h !== void 0
              ? h
              : (h = b(
                  "useLogStoryLevelCTAEventActionsLoggerImpressionEvent_event.graphql"
                )),
            a
          ),
          e = c == null ? void 0 : (a = c.event) == null ? void 0 : a.id;
        j.onReady(function (a) {
          a.log(
            e,
            {
              acontext: {},
              mechanism: "poe_story_bumper",
              surface: "newsfeed",
              target: "poe_story_bumper",
              type: "view",
            },
            { story_bumper_type: c == null ? void 0 : c.poe_story_bumper }
          );
        });
      }, []);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useLogStoryLevelCTANuxDismissEvent",
  [
    "CometRelay",
    "RelayHooks",
    "react",
    "requireDeferred",
    "useLogStoryLevelCTANuxDismissEvent_event.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j = c("requireDeferred")("CometDismissFBNuxMutation").__setRef(
        "useLogStoryLevelCTANuxDismissEvent"
      );
    function a() {
      var a = d("RelayHooks").useRelayEnvironment();
      return i(
        function (c) {
          c = d("CometRelay").readInlineData(
            h !== void 0
              ? h
              : (h = b("useLogStoryLevelCTANuxDismissEvent_event.graphql")),
            c
          );
          var e = c.nux_id;
          if (e == null) return;
          j.onReadyImmediately(function (b) {
            b.commit(a, e);
          });
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useLogStoryLevelCTANuxImpressionEvent",
  [
    "CometRelay",
    "RelayHooks",
    "react",
    "requireDeferred",
    "useLogStoryLevelCTANuxImpressionEvent_event.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j = c("requireDeferred")("CometLogImpressionFBNuxMutation").__setRef(
        "useLogStoryLevelCTANuxImpressionEvent"
      );
    function a() {
      var a = d("RelayHooks").useRelayEnvironment();
      return i(
        function (c) {
          c = d("CometRelay").readInlineData(
            h !== void 0
              ? h
              : (h = b("useLogStoryLevelCTANuxImpressionEvent_event.graphql")),
            c
          );
          var e = c.nux_id;
          if (e == null) return;
          j.onReadyImmediately(function (b) {
            b.commit(a, e);
          });
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStandardStoryLevelCTASupplementActionUtils",
  [
    "CometFeedStandardStoryLevelCTASupplementActionUtils_action.graphql",
    "CometRelay",
    "FeedChallengesCtaFalcoEvent",
    "QuiltsCometStoryLevelCTALoggingUtils",
    "react",
    "requireDeferred",
    "useLogReshareFilterEvent",
    "useLogStoryLevelCTAEventActionsLoggerImpressionEvent",
    "useLogStoryLevelCTANuxDismissEvent",
    "useLogStoryLevelCTANuxImpressionEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j = c("requireDeferred")("logPfcExpressionsEvent").__setRef(
        "CometFeedStandardStoryLevelCTASupplementActionUtils"
      ),
      k = c("requireDeferred")("useLogPMVBumperEvent").__setRef(
        "CometFeedStandardStoryLevelCTASupplementActionUtils"
      ),
      l = c("requireDeferred")(
        "useLogPrayerUpdatePostPromoBumperEvent"
      ).__setRef("CometFeedStandardStoryLevelCTASupplementActionUtils");
    function m(a) {
      var b = a.ctaName,
        c = a.eventName;
      a = a.uuid;
      if (c == null || b == null || a == null) return;
    }
    function n(a) {
      var b = a.challengeTag,
        d = a.ctaType,
        e = a.eventName,
        f = a.metadata,
        g = a.origin,
        h = a.postID,
        i = a.tracking;
      c("FeedChallengesCtaFalcoEvent").log(function () {
        var a;
        return {
          challenge: b,
          cta_event: e,
          extra_data: JSON.parse((a = f) != null ? a : ""),
          origin: g,
          postid: h,
          tracking: (a = i) != null ? a : "",
          type: d,
        };
      });
    }
    function a() {
      var a = c("useLogStoryLevelCTANuxImpressionEvent")(),
        e = c("useLogStoryLevelCTANuxDismissEvent")(),
        f = c("useLogReshareFilterEvent")(),
        g = c("useLogStoryLevelCTAEventActionsLoggerImpressionEvent")();
      return i(
        function (c) {
          var i = d("CometRelay").readInlineData(
            h !== void 0
              ? h
              : (h = b(
                  "CometFeedStandardStoryLevelCTASupplementActionUtils_action.graphql"
                )),
            c
          );
          c = i.__typename;
          var o = i.event_name;
          switch (c) {
            case "StoryLevelCallToActionChallengePostEvent":
              c = i.challenge_post_id;
              var p = i.challenge_tag,
                q = i.cta_type,
                r = i.metadata,
                s = i.origin,
                t = i.tracking;
              n({
                challengeTag: p,
                ctaType: q,
                eventName: o,
                metadata: r,
                origin: s,
                postID: c,
                tracking: t,
              });
              break;
            case "StoryLevelCallToActionQuiltTryItEvent":
              d("QuiltsCometStoryLevelCTALoggingUtils").logTryIt(i);
              break;
            case "StoryLevelCallToActionReshareFilterEvent":
              f(i);
              break;
            case "StoryLevelCallToActionRootEvent":
              p = i.cta_name;
              q = i.uuid;
              m({ ctaName: p, eventName: o, uuid: q });
              break;
            case "StoryLevelCallToActionNuxImpressionEvent":
              a(i);
              break;
            case "StoryLevelCallToActionNuxDismissEvent":
              e(i);
              break;
            case "XFBStoryLevelCallToActionPFCExpressionsEvent":
              j.onReady(function (a) {
                return a(i);
              });
              break;
            case "XFBStoryLevelCallToActionUpdatePostPromoBumperEvent":
              l.onReady(function (a) {
                return a(i);
              });
              break;
            case "XFBStoryLevelCallToActionPMVBumperEvent":
              k.onReady(function (a) {
                return a(i);
              });
              break;
            case "StoryLevelCallToActionEventsActionLoggerImpressionEvent":
              g(i);
              break;
            default:
              break;
          }
        },
        [e, a, f, g]
      );
    }
    g.useCTASupplementActionDispatcher = a;
  },
  98
);
__d(
  "CometFeedStoryCTAButton.react",
  [
    "CometFeedStandardStoryLevelCTASupplementActionUtils",
    "CometFeedStoryCTAButton_buttonData.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.buttonData;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryCTAButton_buttonData.graphql")),
        a
      );
      var c = d(
          "CometFeedStandardStoryLevelCTASupplementActionUtils"
        ).useCTASupplementActionDispatcher(),
        e = a.button_style,
        f = a.button_text,
        g = a.comet_action,
        j = a.supplement_click_actions;
      a = function () {
        j != null &&
          j.forEach(function (a) {
            c(a);
          });
      };
      return i.jsx(d("CometRelay").MatchContainer, {
        fallback: null,
        match: g,
        props: { buttonStyle: e, buttonText: f, dispatchSupplementActions: a },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStandardStoryLevelCallToAction.react",
  [
    "CometFeedStandardStoryLevelCTASupplementActionUtils",
    "CometFeedStandardStoryLevelCallToAction_renderer.graphql",
    "CometFeedStoryCTAButton.react",
    "CometImage.react",
    "CometRelay",
    "TetraTextPairing.react",
    "react",
    "stylex",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useRef,
      k = {
        button: { flexShrink: "pfnyh3mw" },
        content: { alignItems: "bp9cbjyn", display: "j83agx80" },
        image: { maxHeight: "nkfo77g6", maxWidth: "svxt6lnj" },
        imageRoot: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          height: "qypqp5cg",
          justifyContent: "taijpn5t",
          marginEnd: "oi9244e8",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "q676j6op",
        },
        root: {
          alignItems: "bp9cbjyn",
          borderBottom: "s1tcr66n",
          display: "j83agx80",
          justifyContent: "i1fnvgqd",
          paddingTop: "pybr56ya",
          paddingEnd: "d1544ag0",
          paddingBottom: "f10w8fjw",
          paddingStart: "tw6a2znq",
        },
        roundedImage: {
          borderTop: "p2nczzr7",
          borderEnd: "s158s3os",
          borderBottom: "mjjpoxzs",
          borderStart: "rzedwbo9",
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
        },
        topBorder: { borderTop: "l6v480f0", marginTop: "n1l5q3vz" },
      };
    function a(a) {
      a = a.renderer;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStandardStoryLevelCallToAction_renderer.graphql")),
        a
      );
      var e = j(!1),
        f = a.first_appear_actions,
        g = d(
          "CometFeedStandardStoryLevelCTASupplementActionUtils"
        ).useCTASupplementActionDispatcher(),
        l = function () {
          f != null &&
            e.current === !1 &&
            (f.forEach(function (a) {
              g(a);
            }),
            (e.current = !0));
        };
      l = c("useVisibilityObserver")({ onVisible: l });
      if (a == null) return null;
      var m = a.body_text,
        n = a.button_text,
        o = a.cta_image_data,
        p = a.has_attachment,
        q = a.headline_text;
      if (m == null || n == null) return null;
      n = o == null ? void 0 : (n = o.image) == null ? void 0 : n.uri;
      o = (o = o == null ? void 0 : o.is_rounded) != null ? o : !1;
      return i.jsxs("div", {
        className: c("stylex")(k.root, p === !1 && k.topBorder),
        ref: l,
        children: [
          i.jsxs("div", {
            className: c("stylex")(k.content),
            children: [
              n != null &&
                i.jsx("div", {
                  className: c("stylex")(k.imageRoot, o && k.roundedImage),
                  children: i.jsx(c("CometImage.react"), {
                    src: n,
                    xstyle: k.image,
                  }),
                }),
              i.jsx(c("TetraTextPairing.react"), {
                body: m,
                bodyColor: q != null ? "secondary" : "primary",
                bodyLineLimit: 2,
                headline: q,
                headlineLineLimit: 2,
                level: 3,
              }),
            ],
          }),
          i.jsx("div", {
            className: c("stylex")(k.button),
            children: i.jsx(c("CometFeedStoryCTAButton.react"), {
              buttonData: a,
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
  "HandleStoryBumperExposureMutation",
  ["CometRelay", "HandleStoryBumperExposureMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0 ? h : (h = b("HandleStoryBumperExposureMutation.graphql"));
    function a(a, b, c) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        variables: { bumperClass: b, wasHidden: c },
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryCallToActionExposureHandler.react",
  [
    "CometFeedStoryCallToActionExposureHandler_exposureHandler.graphql",
    "CometRelay",
    "HandleStoryBumperExposureMutation",
    "RelayHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d("react");
    e = d("react");
    var i = e.useEffect,
      j = e.useRef;
    function a(a) {
      var e = a.children;
      a = a.exposureHandler;
      var f = d("RelayHooks").useRelayEnvironment();
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryCallToActionExposureHandler_exposureHandler.graphql"
            )),
        a
      );
      var g = a == null ? void 0 : a.should_hide,
        k = a == null ? void 0 : a.bumper_class,
        l = j("");
      i(
        function () {
          k != null &&
            l.current !== k &&
            g != null &&
            ((l.current = k), c("HandleStoryBumperExposureMutation")(f, k, g));
        },
        [f, k, g]
      );
      return g === !0 ? null : e;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryPersistentCallToActionRenderer.react",
  [
    "CometFeedStandardStoryLevelCallToAction.react",
    "CometFeedStoryPersistentCallToActionRenderer_renderer.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.renderer;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryPersistentCallToActionRenderer_renderer.graphql"
            )),
        a
      );
      return i.jsx(c("CometFeedStandardStoryLevelCallToAction.react"), {
        renderer: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryTriggeredCallToActionRenderer.react",
  [
    "CometFeedStandardStoryLevelCallToAction.react",
    "CometFeedStoryTriggeredCallToActionRenderer_renderer.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.renderer;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryTriggeredCallToActionRenderer_renderer.graphql"
            )),
        a
      );
      return i.jsx(c("CometFeedStandardStoryLevelCallToAction.react"), {
        renderer: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryTriggeredCallToActionContainer.react",
  [
    "CometFeedStoryCallToActionExposureHandler.react",
    "CometFeedStoryCallToActionTriggerContext",
    "CometFeedStoryTriggeredCallToActionContainer_bumperData.graphql",
    "CometFeedStoryTriggeredCallToActionRenderer.react",
    "CometRelay",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext;
    function a(a) {
      a = a.bumperData;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryTriggeredCallToActionContainer_bumperData.graphql"
            )),
        a
      );
      a = c("orEmptyArray")(a == null ? void 0 : a.triggered_bumpers);
      var e = j(c("CometFeedStoryCallToActionTriggerContext")),
        f = e.triggeredBumperRegistry;
      e = e.triggeredEvent;
      if (
        f == null ||
        typeof f !== "object" ||
        e == null ||
        !Object.prototype.hasOwnProperty.call(f, e)
      )
        return null;
      var g = f[e];
      f = a.find(function (a) {
        return a.__typename === g;
      });
      e = f == null ? void 0 : f.cta_renderer;
      return e == null
        ? null
        : i.jsx(c("CometFeedStoryCallToActionExposureHandler.react"), {
            exposureHandler: f == null ? void 0 : f.exposure_handler,
            children: i.jsx(
              c("CometFeedStoryTriggeredCallToActionRenderer.react"),
              { renderer: e }
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFICommentsAriaExpandedProvider.react",
  [
    "CometFeedARIAProperties.react",
    "CometRelay",
    "CometUFICommentListenersContext",
    "CometUFICommentsAriaExpandedProvider_feedback.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useMemo,
      l = e.useState;
    function m(a) {
      var e,
        f = a.children,
        g = a.feedback;
      a = a.feedLocation;
      g = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometUFICommentsAriaExpandedProvider_feedback.graphql")),
        g
      );
      e = l(
        g == null
          ? void 0
          : (e = g.aria_expanded_provider_display_comments) == null
          ? void 0
          : e.is_initially_expanded
      );
      var m = e[0],
        n = e[1];
      e = k(function () {
        return {
          onCollapsed: function () {
            n(!1);
          },
          onExpanded: function () {
            n(!0);
          },
        };
      }, []);
      var o = e.onCollapsed;
      e = e.onExpanded;
      d("CometUFICommentListenersContext").useCometUFIOnCommentsExpanded(
        g == null ? void 0 : g.id,
        e,
        a
      );
      d("CometUFICommentListenersContext").useCometUFIOnCommentsCollapsed(
        g == null ? void 0 : g.id,
        o,
        a
      );
      var p = j(c("CometFeedARIAProperties.react"));
      e = k(
        function () {
          return p.commentCountTargetProps == null || m == null
            ? p
            : babelHelpers["extends"]({}, p, {
                commentCountTargetProps: babelHelpers["extends"](
                  {},
                  p.commentCountTargetProps,
                  { "aria-expanded": m }
                ),
              });
        },
        [m, p]
      );
      return i.jsx(c("CometFeedARIAProperties.react").Provider, {
        value: e,
        children: f,
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      a = babelHelpers["extends"]({}, a);
      return i.jsx(
        d("CometUFICommentListenersContext")
          .CometUFICommentListenersContextProvider,
        { children: i.jsx(m, babelHelpers["extends"]({}, a)) }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedAggregatedStoriesContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ hasAggregateParent: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "useCometFeedStoryAttachmentMatchDebugger",
  [
    "CometFeedStoryMatchDebuggerDispatcherContext",
    "CometRelay",
    "react",
    "useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useContext,
      j = e.useEffect;
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion.graphql"
            )),
        a
      );
      var e = a.__typename,
        f = a.is_prod_eligible,
        g = i(c("CometFeedStoryMatchDebuggerDispatcherContext"));
      j(
        function () {
          if (e != null && f === !1) {
            g.add(e);
            return function () {
              g.remove(e);
            };
          }
        },
        [g, f, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useIsSATPStory",
  ["CometRelay", "useIsSATPStory_story.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useIsSATPStory_story.graphql")),
        a
      );
      return (
        (a == null
          ? void 0
          : (a = a.text_format_metadata) == null
          ? void 0
          : a.__typename) != null
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryAboveMessageSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryAboveMessageSection_story.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryAboveMessageSection_story.graphql")),
        a.story
      );
      return i.jsx(c("CometFeedMatchRenderer.react"), {
        match:
          a == null
            ? void 0
            : (e = a.comet_sections) == null
            ? void 0
            : e.above_message,
        section: "above_message",
        trackingData: a == null ? void 0 : a.encrypted_tracking,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryAggregatedStoriesSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryAggregatedStoriesSection_story.graphql",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "react",
    "usePageletMatchMetadata",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var b;
      b =
        (b = a.story) == null
          ? void 0
          : (b = b.comet_sections) == null
          ? void 0
          : b.aggregated_stories;
      c("usePageletMatchMetadata")("aggregated_stories", b);
      return i.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 391,
        children: i.jsx(c("CometFeedMatchRenderer.react"), {
          match: b,
          props: { variables: a.variables },
          section: "aggregated_stories",
          trackingData: (b = a.story) == null ? void 0 : b.encrypted_tracking,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("CometRelay").createSuspenseFragmentContainer_DEPRECATED(a, {
      story:
        h !== void 0
          ? h
          : (h = b("CometFeedStoryAggregatedStoriesSection_story.graphql")),
    });
    g["default"] = e;
  },
  98
);
__d(
  "CometFeedStoryFeedLocationContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b;
  },
  98
);
__d(
  "CometFeedStoryAttachedStorySection.react",
  [
    "CometFeedARIAProperties.react",
    "CometFeedMatchRenderer.react",
    "CometFeedStoryAttachedStorySection_story.graphql",
    "CometFeedStoryFeedLocationContext",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = Object.freeze({});
    function a(a) {
      var e = a.feedLocation;
      a = a.story;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryAttachedStorySection_story.graphql")),
        a
      );
      return i.jsx(c("CometFeedARIAProperties.react").Provider, {
        value: j,
        children: i.jsx(c("CometFeedStoryFeedLocationContext").Provider, {
          displayName: "CometFeedStoryFeedLocationContext",
          value: e,
          children: i.jsx(c("CometFeedMatchRenderer.react"), {
            match: (e = a.comet_sections) == null ? void 0 : e.attached_story,
            section: "attached_story",
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
  "CometFeedStoryAttachmentDisclaimerFooterSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryAttachmentDisclaimerFooterSection_attachment.graphql",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.adClientToken,
        f = a.adID,
        g = a.attachment;
      a = a.trackingData;
      g = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryAttachmentDisclaimerFooterSection_attachment.graphql"
            )),
        g
      );
      g = g == null ? void 0 : g.comet_footer_disclaimer_renderer;
      return g == null
        ? null
        : i.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 265,
            children: i.jsx("div", {
              className: "stjgntxs ni8dbmo4",
              children: i.jsx(c("CometFeedMatchRenderer.react"), {
                match: g,
                props: { adClientToken: e, adID: f },
                section: "attachment_footer_disclaimer",
                trackingData: a,
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
  "CometFeedStoryAttachmentFooterSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryAttachmentFooterSection_attachment.graphql",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "react",
    "useCometUniqueID",
    "usePageletMatchMetadata",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useEffect,
      k =
        h !== void 0
          ? h
          : (h = b("CometFeedStoryAttachmentFooterSection_attachment.graphql"));
    function a(a) {
      var b = a.adClientToken,
        e = a.adID,
        f = a.attachment,
        g = a.onMatch_UNSTABLE_DO_NOT_USE;
      a = a.trackingData;
      var h = c("useCometUniqueID")();
      f = d("CometRelay").useFragment(k, f);
      var l = f == null ? void 0 : f.comet_footer_renderer;
      c("usePageletMatchMetadata")("footer", l);
      j(function () {
        if (g != null) {
          var a =
            l != null ? d("CometRelay").ModuleResource.getModuleId(l) : null;
          g((a = a) != null ? a : null);
        }
      }, []);
      return i.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 259,
        children: i.jsx("div", {
          className: "stjgntxs ni8dbmo4",
          "data-testid": void 0,
          children: i.jsx(c("CometFeedMatchRenderer.react"), {
            match: l,
            props: { adClientToken: b, adID: e, titleId: h },
            section: "attachment_footer",
            trackingData: a,
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
  "CometFeedStoryAttachmentOverlaySection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryAttachmentOverlaySection_story.graphql",
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
            : (h = b("CometFeedStoryAttachmentOverlaySection_story.graphql")),
          a.story
        );
      a = a.attachmentRenderer;
      return (f == null
        ? void 0
        : (e = f.comet_sections) == null
        ? void 0
        : e.attachment_overlay) == null
        ? a
        : i.jsx(c("CometFeedMatchRenderer.react"), {
            match:
              f == null
                ? void 0
                : (e = f.comet_sections) == null
                ? void 0
                : e.attachment_overlay,
            props: { attachmentRenderer: a },
            section: "attachment_overlay",
            trackingData: f == null ? void 0 : f.encrypted_tracking,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryAttachmentSection.react",
  [
    "CometFeedARIAProperties.react",
    "CometFeedAggregatedStoriesContext",
    "CometFeedStoryAttachmentDisclaimerFooterSection.react",
    "CometFeedStoryAttachmentFooterSection.react",
    "CometFeedStoryAttachmentOverlaySection.react",
    "CometFeedStoryAttachmentRenderer.react",
    "CometFeedStoryAttachmentSection_story.graphql",
    "CometFeedStoryFeedLocationContext",
    "CometFeedStoryInfoIconSection.react",
    "CometStoryRenderLocationContext.react",
    "CometTrackingNodeProvider.react",
    "RelayHooks",
    "StoryAttachmentActorContext",
    "cr:1621813",
    "gkx",
    "react",
    "useIsSATPStory",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useRef,
      m =
        h !== void 0
          ? h
          : (h = b("CometFeedStoryAttachmentSection_story.graphql"));
    function a(a) {
      var e = d("RelayHooks").useFragment(m, a.story),
        f = k(c("CometFeedAggregatedStoriesContext")),
        g = c("useIsSATPStory")(e),
        h = c("gkx")("1577562"),
        n = l(null),
        o = l(null),
        p = l(null),
        q = l(!1),
        r = k(c("CometStoryRenderLocationContext.react")),
        s = r !== "%future added value" ? r : null;
      r = k(c("CometFeedARIAProperties.react"));
      var t = j(
          function () {
            if (
              q.current === !1 &&
              n.current != null &&
              o.current != null &&
              p.current != null
            ) {
              var a;
              q.current = !0;
              var c =
                  (a = (a = n.current) == null ? void 0 : a.match) != null
                    ? a
                    : "null",
                d =
                  (a = (a = o.current) == null ? void 0 : a.match) != null
                    ? a
                    : "null",
                e =
                  (a = (a = p.current) == null ? void 0 : a.match) != null
                    ? a
                    : "null";
              b("cr:1621813") &&
                b("cr:1621813").log(function () {
                  return {
                    attachment_footer_match: d,
                    attachment_style_match: c,
                    info_icon_match: e,
                    render_location: s,
                  };
                });
            }
          },
          [s]
        ),
        u = j(
          function (a) {
            (n.current = { match: a }), t();
          },
          [t]
        ),
        v = j(
          function (a) {
            (o.current = { match: a }), t();
          },
          [t]
        ),
        w = j(
          function (a) {
            (p.current = { match: a }), t();
          },
          [t]
        ),
        x = e == null ? void 0 : e.attachments;
      if (x == null || x.length === 0) return null;
      var y = f.hasAggregateParent
          ? x.filter(function (a) {
              return !f.suppressedAttachments.includes(a.deduplication_key);
            })
          : x,
        z = y.length > 0 && y[0] === x[0],
        A =
          z &&
          i.jsx(c("CometFeedStoryInfoIconSection.react"), {
            onMatch_UNSTABLE_DO_NOT_USE: h ? w : void 0,
            story: e,
          });
      x = babelHelpers["extends"]({}, r.attachmentTargetProps);
      return i.jsx(
        "div",
        babelHelpers["extends"](
          { className: "l9j0dhe7", ref: r.attachmentTargetRef },
          x,
          {
            children: i.jsx(c("CometFeedStoryFeedLocationContext").Provider, {
              displayName: "CometFeedStoryFeedLocationContext",
              value: a.feedLocation,
              children: i.jsx(
                d("StoryAttachmentActorContext")
                  .StoryAttachmentActorContextProvider,
                {
                  story: e,
                  children: y.map(function (a, b) {
                    var d;
                    return i.jsxs(
                      c("CometTrackingNodeProvider.react"),
                      {
                        trackingNode: 15,
                        children: [
                          i.jsxs("div", {
                            className: "l9j0dhe7",
                            children: [
                              i.jsx(
                                c(
                                  "CometFeedStoryAttachmentOverlaySection.react"
                                ),
                                {
                                  attachmentRenderer: i.jsx("div", {
                                    children: i.jsx(
                                      c(
                                        "CometFeedStoryAttachmentRenderer.react"
                                      ),
                                      {
                                        adClientToken:
                                          e == null
                                            ? void 0
                                            : (d = e.sponsored_data) == null
                                            ? void 0
                                            : d.client_token,
                                        adID:
                                          e == null
                                            ? void 0
                                            : (d = e.sponsored_data) == null
                                            ? void 0
                                            : d.ad_id,
                                        attachment: a,
                                        canOverlapWithPreviousAttachment:
                                          b !== 0 || g,
                                        onMatch_UNSTABLE_DO_NOT_USE: h
                                          ? u
                                          : void 0,
                                        storyUrl: e.wwwURL,
                                        trackingData:
                                          e == null
                                            ? void 0
                                            : e.encrypted_tracking,
                                      }
                                    ),
                                  }),
                                  story: e,
                                }
                              ),
                              b === 0 ? A : null,
                            ],
                          }),
                          z
                            ? i.jsxs(i.Fragment, {
                                children: [
                                  i.jsx(
                                    c(
                                      "CometFeedStoryAttachmentFooterSection.react"
                                    ),
                                    {
                                      adClientToken:
                                        e == null
                                          ? void 0
                                          : (d = e.sponsored_data) == null
                                          ? void 0
                                          : d.client_token,
                                      adID:
                                        e == null
                                          ? void 0
                                          : (d = e.sponsored_data) == null
                                          ? void 0
                                          : d.ad_id,
                                      attachment: a,
                                      onMatch_UNSTABLE_DO_NOT_USE: h
                                        ? v
                                        : void 0,
                                      trackingData:
                                        e == null
                                          ? void 0
                                          : e.encrypted_tracking,
                                    }
                                  ),
                                  i.jsx(
                                    c(
                                      "CometFeedStoryAttachmentDisclaimerFooterSection.react"
                                    ),
                                    {
                                      adClientToken:
                                        e == null
                                          ? void 0
                                          : (d = e.sponsored_data) == null
                                          ? void 0
                                          : d.client_token,
                                      adID:
                                        e == null
                                          ? void 0
                                          : (d = e.sponsored_data) == null
                                          ? void 0
                                          : d.ad_id,
                                      attachment: a,
                                      trackingData:
                                        e == null
                                          ? void 0
                                          : e.encrypted_tracking,
                                    }
                                  ),
                                ],
                              })
                            : null,
                        ],
                      },
                      b
                    );
                  }),
                }
              ),
            }),
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMessageSectionContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ inFeedStoryMessage: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "CometFeedStoryMessageSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryMessageSectionContext",
    "CometFeedStoryMessageSection_story.graphql",
    "CometRelay",
    "react",
    "usePageletMatchMetadata",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = { inFeedStoryMessage: !0 };
    function a(a) {
      var e, f;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryMessageSection_story.graphql")),
        a.story
      );
      e =
        a == null
          ? void 0
          : (e = a.comet_sections) == null
          ? void 0
          : e.message;
      c("usePageletMatchMetadata")("message", e);
      f =
        a == null
          ? void 0
          : (f = a.comet_sections) == null
          ? void 0
          : f.message_suffix;
      c("usePageletMatchMetadata")("message_suffix", f);
      f =
        f != null
          ? i.jsx(c("CometFeedMatchRenderer.react"), {
              match: f,
              section: "message_suffix",
              trackingData: a == null ? void 0 : a.encrypted_tracking,
            })
          : null;
      return i.jsx(c("CometFeedStoryMessageSectionContext").Provider, {
        value: j,
        children: i.jsx(c("CometFeedMatchRenderer.react"), {
          match: e,
          props: { suffix: f },
          section: "message",
          trackingData: a == null ? void 0 : a.encrypted_tracking,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMessageStickerSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryMessageStickerSection_story.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryMessageStickerSection_story.graphql")),
        a.story
      );
      return i.jsx(c("CometFeedMatchRenderer.react"), {
        match:
          a == null
            ? void 0
            : (e = a.comet_sections) == null
            ? void 0
            : e.message_sticker,
        section: "message_sticker",
        trackingData: a == null ? void 0 : a.encrypted_tracking,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMessageContainerSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryMessageContainerSection_story.graphql",
    "CometFeedStoryMessageSection.react",
    "CometFeedStoryMessageStickerSection.react",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryMessageContainerSection_story.graphql")),
        a.story
      );
      return i.jsxs(c("CometTrackingNodeProvider.react"), {
        trackingNode: 18,
        children: [
          i.jsx(c("CometFeedStoryMessageStickerSection.react"), { story: a }),
          i.jsx(c("CometFeedMatchRenderer.react"), {
            match:
              a == null
                ? void 0
                : (e = a.comet_sections) == null
                ? void 0
                : e.message_container,
            props: {
              children: i.jsx(c("CometFeedStoryMessageSection.react"), {
                story: a,
              }),
            },
            section: "message_container",
            trackingData: a == null ? void 0 : a.encrypted_tracking,
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
  "CometFeedStoryOptimisticMediaAttachmentSectionLazy",
  ["JSResourceForInteraction", "lazyLoadComponent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("lazyLoadComponent")(
      c("JSResourceForInteraction")(
        "CometFeedStoryOptimisticMediaAttachmentSection.react"
      ).__setRef("CometFeedStoryOptimisticMediaAttachmentSectionLazy")
    );
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryDefaultCallToActionStrategy.react",
  [
    "CometFeedStoryCallToActionExposureHandler.react",
    "CometFeedStoryDefaultCallToActionStrategy_cta.graphql",
    "CometFeedStoryPersistentCallToActionRenderer.react",
    "CometFeedStoryTriggeredCallToActionContainer.react",
    "CometRelay",
    "react",
    "useCometFeedStoryMatchDebugger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryDefaultCallToActionStrategy_cta.graphql")),
        a.cta
      );
      c("useCometFeedStoryMatchDebugger")(a);
      a = (a = a.story) == null ? void 0 : a.bumpers;
      var e = a == null ? void 0 : a.persistent_bumper,
        f = e == null ? void 0 : e.cta_renderer;
      return f != null
        ? i.jsx(c("CometFeedStoryCallToActionExposureHandler.react"), {
            exposureHandler: e == null ? void 0 : e.exposure_handler,
            children: i.jsx(
              c("CometFeedStoryPersistentCallToActionRenderer.react"),
              { renderer: f }
            ),
          })
        : i.jsx(c("CometFeedStoryTriggeredCallToActionContainer.react"), {
            bumperData: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryDefaultContentStrategy.react",
  [
    "BaseHeadingContextWrapper.react",
    "CometFeedStoryAboveMessageSection.react",
    "CometFeedStoryAggregatedStoriesSection.react",
    "CometFeedStoryAttachedStorySection.react",
    "CometFeedStoryAttachmentSection.react",
    "CometFeedStoryDefaultContentStrategy_content.graphql",
    "CometFeedStoryMessageContainerSection.react",
    "CometRelay",
    "cr:1221849",
    "react",
    "unrecoverableViolation",
    "useCometFeedStoryMatchDebugger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.content;
      a = a.variables;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryDefaultContentStrategy_content.graphql")),
        f
      );
      c("useCometFeedStoryMatchDebugger")(f);
      f = f.story;
      e = f == null ? void 0 : (e = f.feedback) == null ? void 0 : e.id;
      var g = f == null ? void 0 : f.attached_story;
      e = g != null && e == null ? g : f;
      if (e == null || f == null)
        throw c("unrecoverableViolation")(
          "Story is null for CometFeedStoryDefaultContentStrategy",
          "comet_feed"
        );
      g = f.optimistic_loading_type;
      g = b("cr:1221849") && g ? i.jsx(b("cr:1221849"), { story: e }) : null;
      return i.jsx(c("BaseHeadingContextWrapper.react"), {
        children: i.jsxs("div", {
          "data-testid": void 0,
          children: [
            i.jsx(c("CometFeedStoryAboveMessageSection.react"), { story: e }),
            i.jsx(c("CometFeedStoryMessageContainerSection.react"), {
              story: e,
            }),
            g,
            i.jsx(c("CometFeedStoryAttachmentSection.react"), {
              feedLocation: a.feedLocation,
              story: e,
            }),
            i.jsx(c("CometFeedStoryAttachedStorySection.react"), {
              feedLocation: a.feedLocation,
              story: e,
            }),
            i.jsx(c("CometFeedStoryAggregatedStoriesSection.react"), {
              story: f,
              variables: a,
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
  "CometFeedStoryFormattedBackgroundTextContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext,
      i = b.createContext(Object.freeze({}));
    function a() {
      return h(i);
    }
    g.CometFeedStoryFormattedBackgroundTextContext = i;
    g.useCometFeedStoryFormattedBackgroundTextContextContext = a;
  },
  98
);
__d(
  "CometFeedStoryDefaultContextLayoutStrategy.react",
  [
    "CometFeedStoryActorPhotoSection.react",
    "CometFeedStoryDefaultContextLayoutStrategy_contextLayout.graphql",
    "CometFeedStoryMenuSection.react",
    "CometFeedStoryMetadataSection.react",
    "CometFeedStoryTitleSection.react",
    "CometRelay",
    "TetraTextPairing.react",
    "react",
    "unrecoverableViolation",
    "useCometFeedStoryMatchDebugger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "CometFeedStoryDefaultContextLayoutStrategy_contextLayout.graphql"
              )),
          a.contextLayout
        ),
        f = e.story;
      c("useCometFeedStoryMatchDebugger")(e);
      if (f == null)
        throw c("unrecoverableViolation")(
          "Cannot render a default context layout without a story",
          "comet_feed"
        );
      return i.jsxs("div", {
        className:
          "pybr56ya dati1w0a hv4rvrfc n851cfcs btwxx1t3 j83agx80 ll8tlv6m",
        children: [
          i.jsx(c("CometFeedStoryActorPhotoSection.react"), { story: f }),
          i.jsx("div", {
            className: "buofh1pr",
            children: i.jsx(c("TetraTextPairing.react"), {
              body: i.jsx(c("CometFeedStoryTitleSection.react"), {
                story: f,
                variables: a.variables,
              }),
              bodyColor: "secondary",
              level: 3,
              meta: i.jsx(c("CometFeedStoryMetadataSection.react"), {
                story: f,
              }),
            }),
          }),
          f.can_viewer_see_menu === !0
            ? i.jsx(c("CometFeedStoryMenuSection.react"), {
                feedLocation: a.feedLocation,
                id: f == null ? void 0 : f.id,
                serializedFRTPIdentifiers:
                  f == null ? void 0 : f.serialized_frtp_identifiers,
                storyDebugInfo:
                  (e = a.storyDebugInfo) != null
                    ? e
                    : f == null
                    ? void 0
                    : f.debug_info,
                variables: a.variables,
              })
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
  "CometFeedUFI.react",
  [
    "CometFeedUFI_feedback.graphql",
    "CometFeedUFI_shareable.graphql",
    "CometFeedUFI_story.graphql",
    "CometRelay",
    "CometStoryRenderLocationContext.react",
    "react",
    "recoverableViolation",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react"),
      l = d("react").useContext;
    e = c("requireDeferred")("CometUFIReactionsAnimationPreloader").__setRef(
      "CometFeedUFI.react"
    );
    e.onReady(function (a) {
      return new a().preloadAll();
    });
    function a(a, e) {
      var f,
        g = a.displayCommentsContext,
        m = a.feedback,
        n = a.feedbackSource,
        o = a.feedLocation,
        p = a.focusCommentID,
        q = a.isTextOnlyStory,
        r = a.onActorSelected,
        s = a.shareable;
      a = a.story;
      m = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometFeedUFI_feedback.graphql")),
        m
      );
      s = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometFeedUFI_shareable.graphql")),
        s
      );
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("CometFeedUFI_story.graphql")),
        a
      );
      f =
        (f = l(c("CometStoryRenderLocationContext.react"))) != null
          ? f
          : "newsstand";
      var t = m == null ? void 0 : m.ufi_renderer,
        u;
      if ((t == null ? void 0 : t.__typename) === "SimplifiedUFIRenderer")
        u = {
          feedLocation: o,
          feedbackSource: n,
          isTextOnlyStory: q,
          onActorSelected: r,
          renderer: t,
          shareable: s,
          story: a,
          storyRenderLocation: f,
        };
      else if ((t == null ? void 0 : t.__typename) === "FullUFIRenderer") {
        u = {
          displayCommentsContext: (g = g) != null ? g : {},
          feedLocation: o,
          feedbackSource: n,
          focusCommentID: p,
          isTextOnlyStory: q,
          onActorSelected: r,
          renderer: t,
          shareable: (g = s) != null ? g : null,
          story: a,
          storyRenderLocation: f,
        };
      } else {
        c("recoverableViolation")(
          "CometFeedUFI: Expected a valid UFI renderer",
          "ufi2"
        );
        return null;
      }
      return k.jsx(
        d("CometRelay").MatchContainer,
        { match: t, props: babelHelpers["extends"]({}, u, { ref: e }) },
        (n =
          m == null ? void 0 : (o = m.viewer_actor) == null ? void 0 : o.id) !=
          null
          ? n
          : "UNKNOWN"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = k.memo(k.forwardRef(a));
    g["default"] = e;
  },
  98
);
__d(
  "CometFeedUFIContainer.react",
  [
    "CometFeedUFI.react",
    "CometFeedUFIContainer_story.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.displayCommentsContext,
        g = a.feedbackSource,
        j = a.feedLocation,
        k = a.focusCommentID,
        l = a.onActorSelected;
      a = a.story;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometFeedUFIContainer_story.graphql")),
        a
      );
      e =
        a == null
          ? void 0
          : (e = a.feedback_context) == null
          ? void 0
          : e.feedback_target_with_context;
      return e == null
        ? null
        : i.jsx(c("CometFeedUFI.react"), {
            displayCommentsContext: f,
            feedLocation: (f = j) != null ? f : "NEWSFEED",
            feedback: e,
            feedbackSource: (j = g) != null ? j : 1,
            focusCommentID: (f = k) != null ? f : null,
            isTextOnlyStory: a.is_text_only_story === !0,
            onActorSelected: l,
            shareable:
              (e = a.shareable_from_perspective_of_feed_ufi) != null ? e : null,
            story: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometRelaySwitchActorContainer.react",
  [
    "Actor",
    "CometRelayEnvironmentFactory",
    "react",
    "react-relay/relay-hooks/useRefetchableFragmentNode",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "reactStartTransition",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function j(a) {
      var b = a.children,
        e = a.fragment;
      a = a.fragmentRef;
      var f = d("Actor").useActor();
      f[0];
      var g = f[1];
      f = d("relay-runtime").getFragment(e);
      c("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        f,
        "`fragment` prop passed to <CometRelaySwitchActorContainer />"
      );
      e = c("react-relay/relay-hooks/useRefetchableFragmentNode")(
        f,
        a,
        "useRefetchableFragment()"
      );
      f = e.fragmentData;
      var h = e.refetch;
      a = i(
        function (a, b, e) {
          b === void 0 && (b = {}),
            e === void 0 && (e = {}),
            c("reactStartTransition")(function () {
              g(a);
              var c = d("CometRelayEnvironmentFactory").getForActorID(a);
              h(b, babelHelpers["extends"]({}, e, { __environment: c }));
            });
        },
        [h, g]
      );
      return b({ data: f, refetchAndSetActor: a });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function a(a) {
      var b = d("Actor").useActor();
      b = b[0];
      return h.jsx(d("Actor").ActorProvider, {
        initialActorID: b,
        scope: "CometRelaySwitchActorContainer",
        children: h.jsx(j, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryFeedbackUFIStrategy.react",
  [
    "CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment.graphql",
    "CometFeedStoryFeedbackUFIStrategy_feedback.graphql",
    "CometFeedUFIContainer.react",
    "CometPlaceholder.react",
    "CometProgressIndicator.react",
    "CometRelay",
    "CometRelaySwitchActorContainer.react",
    "CometVisualCompletionAttributes",
    "react",
    "unrecoverableViolation",
    "useCometFeedStoryMatchDebugger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useMemo,
      l = e.useState;
    function a(a) {
      var e = a.feedback;
      a = a.variables;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryFeedbackUFIStrategy_feedback.graphql")),
        e
      );
      c("useCometFeedStoryMatchDebugger")(e);
      var f = a.displayCommentsContextEnableComment,
        g = a.displayCommentsContextIsAdPreview,
        m = a.displayCommentsContextIsAggregatedShare,
        n = a.displayCommentsContextIsStorySet,
        o = a.displayCommentsFeedbackContext,
        p = a.feedbackSource,
        q = a.feedLocation,
        r = a.focusCommentID,
        s = p,
        t = k(
          function () {
            return {
              enableComment: f,
              feedbackContext: o,
              isAdPreview: g,
              isAggregatedShare: m,
              isStorySet: n,
            };
          },
          [f, o, g, m, n]
        );
      a = e.story;
      p = l(0);
      var u = p[0],
        v = p[1];
      if (a == null)
        throw c("unrecoverableViolation")(
          "story cannot be null in CometFeedStoryFeedbackUFIStrategy",
          "comet_feed"
        );
      return j.jsx(
        "div",
        babelHelpers["extends"](
          {
            className: "stjgntxs ni8dbmo4 l82x9zwi uo3d90p7 h905i5nu monazrh9",
          },
          c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
          {
            children: j.jsx(c("CometPlaceholder.react"), {
              fallback: j.jsx("div", {
                className:
                  "h4z51re5 osnr6wyh rv4hoivh jktsbyx5 taijpn5t j83agx80 bp9cbjyn",
                children: j.jsx(c("CometProgressIndicator.react"), {}),
              }),
              children: j.jsx(c("CometRelaySwitchActorContainer.react"), {
                fragment:
                  i !== void 0
                    ? i
                    : (i = b(
                        "CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment.graphql"
                      )),
                fragmentRef: a,
                children: function (a) {
                  var b = a.data,
                    d = a.refetchAndSetActor;
                  return j.jsx(
                    c("CometFeedUFIContainer.react"),
                    {
                      displayCommentsContext: t,
                      feedLocation: q,
                      feedbackSource: s,
                      focusCommentID: r,
                      onActorSelected: function (a) {
                        v(function (a) {
                          return a + 1;
                        }),
                          d(a);
                      },
                      story: b,
                    },
                    u
                  );
                },
              }),
            }),
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryDefaultLayoutStrategy.react",
  [
    "CometFeedStoryDefaultLayoutStrategy_layout.graphql",
    "CometRelay",
    "react",
    "useCometFeedStoryMatchDebugger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryDefaultLayoutStrategy_layout.graphql")),
        a.layout
      );
      c("useCometFeedStoryMatchDebugger")(e);
      return i.jsxs("div", {
        "data-testid": void 0,
        children: [
          a.copyright_violation_header,
          a.header,
          a.context,
          a.content,
          a.aymt_footer,
          a.footer,
          a.call_to_action,
          a.feedback,
          a.outer_footer,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometGroupRuleRenderer",
  [
    "CometLink.react",
    "GroupsCometGroupRuleLink.react",
    "GroupsCometGroupRuleRenderer_entity.graphql",
    "react",
    "useRenderLinkedEntity",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    h !== void 0 ? h : (h = b("GroupsCometGroupRuleRenderer_entity.graphql"));
    function j(a) {
      var b = a.entity,
        e = a.entityIsWeakReference;
      a = a.node;
      e = d("useRenderLinkedEntity").useRenderWeakReferenceEntity(e);
      var f = e == null ? void 0 : e.colorProp;
      e = e == null ? void 0 : e.icon;
      return b.id != null
        ? i.jsx(c("GroupsCometGroupRuleLink.react"), {
            groupRuleID: b.id,
            children: a,
          })
        : i.jsxs(
            c("CometLink.react"),
            babelHelpers["extends"]({ href: b.url }, f, {
              children: [(b = e) != null ? b : null, a],
            })
          );
    }
    j.displayName = j.name + " [from " + f.id + "]";
    a = function (a, b, c, d, e) {
      return i.jsx(j, {
        entity: b,
        entityIsWeakReference: (c = e) != null ? c : null,
        node: a,
      });
    };
    g["default"] = a;
  },
  98
);
__d(
  "PageWhatsAppNumberCometRenderer",
  [
    "fbt",
    "ix",
    "CometFeedStoryContext",
    "CometFeedStoryFormattedBackgroundTextContext.react",
    "CometLink.react",
    "CometTextContext",
    "CometTintedIcon.react",
    "ConstUriUtils",
    "PageWhatsAppNumberCometRenderer_entity.graphql",
    "PagesCometPageContext.react",
    "fbicon",
    "qex",
    "react",
    "requireDeferred",
    "useRenderLinkedEntity",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    a = d("react");
    var l = a.useContext,
      m = a.useEffect,
      n = c("requireDeferred")("WhatsappDeeplinkClickedFalcoEvent").__setRef(
        "PageWhatsAppNumberCometRenderer"
      ),
      o = c("requireDeferred")("WhatsappDeeplinkRenderedFalcoEvent").__setRef(
        "PageWhatsAppNumberCometRenderer"
      ),
      p = "https://api.whatsapp.com/send",
      q = "\r\n",
      r = "\r\n\r\n";
    j !== void 0
      ? j
      : (j = b("PageWhatsAppNumberCometRenderer_entity.graphql"));
    var s = { icon: { marginBottom: "qzhwtbm6" } },
      t = { icon: { marginBottom: "gjjqq4r6" } };
    function u(a) {
      var b,
        e,
        f = a.entity,
        g = a.entityIsWeakReference;
      a = a.node;
      g = d("useRenderLinkedEntity").useRenderWeakReferenceEntity(g);
      g = g == null ? void 0 : g.colorProp;
      var i = l(c("CometTextContext")),
        j = i == null;
      i = (i == null ? void 0 : i.type) === "body1";
      b =
        (b =
          (b = d("CometFeedStoryContext").useCometFeedStoryContext()) == null
            ? void 0
            : b.source_url) != null
          ? b
          : "";
      var u = d(
          "CometFeedStoryFormattedBackgroundTextContext.react"
        ).useCometFeedStoryFormattedBackgroundTextContextContext(),
        x = h._("Link:"),
        y = h._("I saw this on Facebook...");
      x = x.toString().concat(q).concat(b).concat(r).concat(y.toString());
      x =
        (e = d("ConstUriUtils").getUri(p)) == null
          ? void 0
          : (e = e.addQueryParam("phone", f.deep_link_number)) == null
          ? void 0
          : (e = e.addQueryParam("text", x)) == null
          ? void 0
          : (x = e.addQueryParam("icebreaker", y)) == null
          ? void 0
          : (y = x.addQueryParam(
              "context",
              (e = d("CometFeedStoryContext").useCometFeedStoryContext()) ==
                null
                ? void 0
                : e.whatsapp_ad_context
            )) == null
          ? void 0
          : y.addQueryParam("source_url", b);
      y = Boolean(
        (e = f.page.use_whatsapp_deeplinks_plugin) == null ? void 0 : e.bool
      );
      var z = y || ((b = c("qex")._("345")) != null ? b : !0),
        A = l(d("PagesCometPageContext.react").PagesCometPageContext).pageID;
      m(
        function () {
          z &&
            o.onReady(function (a) {
              a.log(function () {
                return { page_id: A, whatsapp_number: f.deep_link_number };
              });
            });
        },
        [f.deep_link_number, A, z]
      );
      if (!z) return k.jsx(k.Fragment, { children: a });
      else {
        e = function () {
          n.onReady(function (a) {
            a.log(function () {
              return { page_id: A, whatsapp_number: f.deep_link_number };
            });
          });
        };
        return k.jsxs("span", {
          dir: "ltr",
          children: [
            k.jsx(c("CometTintedIcon.react"), {
              color: w(u == null ? void 0 : u.textColor),
              icon: v(j, i),
              xstyle: i || j ? s.icon : t.icon,
            }),
            k.jsx(
              c("CometLink.react"),
              babelHelpers["extends"](
                { href: x == null ? void 0 : x.toString() },
                g,
                { onClick: e, children: a }
              )
            ),
          ],
        });
      }
    }
    u.displayName = u.name + " [from " + f.id + "]";
    var v = function (a, b) {
        return a
          ? d("fbicon")._(i("497242"), 24)
          : b
          ? d("fbicon")._(i("497241"), 20)
          : d("fbicon")._(i("497239"), 12);
      },
      w = function (a) {
        switch (a) {
          case "rgba(255,255,255,1)":
            return "fds-white";
          case "rgba(0,0,0,1)":
            return "fds-black";
          default:
            return "fds-blue-link";
        }
      };
    e = function (a, b, c, d, e) {
      return k.jsx(u, {
        entity: b,
        entityIsWeakReference: (c = e) != null ? c : null,
        node: a,
      });
    };
    g["default"] = e;
  },
  98
);
__d(
  "SearchCometBlueHashtagExperiment",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      switch (a) {
        case "semibold_blue":
          return { color: "highlight", weight: "semibold" };
        case "blue":
          return { color: "highlight", weight: "normal" };
      }
      return null;
    }
    function a() {
      var a = c("gkx")("1570865") ? "blue" : null;
      return h(a);
    }
    function b() {
      var a = c("gkx")("1570865") ? "blue" : null;
      return h(a);
    }
    d = { entityMentionStyle: a(), hashtagStyle: b() };
    g["default"] = d;
  },
  98
);
__d(
  "CometFeedStoryMessageBodyRenderers",
  [
    "CometBoldedEntityRenderer",
    "CometHovercardEntityRenderer",
    "CometShortenedExternalUrlEntityRenderer",
    "CometTextDelightCampaignEntityRenderer",
    "CometTrackingNodeRenderer",
    "GroupsCometGroupRuleRenderer",
    "PageWhatsAppNumberCometRenderer",
    "SearchCometBlueHashtagExperiment",
    "cr:1691801",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      Event: [
        c("CometHovercardEntityRenderer"),
        c("CometBoldedEntityRenderer"),
      ],
      Group: [
        c("CometHovercardEntityRenderer"),
        c("CometBoldedEntityRenderer"),
      ],
      GroupRule: [c("GroupsCometGroupRuleRenderer")],
      Page: [c("CometHovercardEntityRenderer"), c("CometBoldedEntityRenderer")],
      User: [c("CometHovercardEntityRenderer"), c("CometBoldedEntityRenderer")],
    };
    d = {
      Event: [c("CometHovercardEntityRenderer")],
      Group: [c("CometHovercardEntityRenderer")],
      GroupRule: [c("GroupsCometGroupRuleRenderer")],
      Page: [c("CometHovercardEntityRenderer")],
      PageWhatsAppNumber: [c("PageWhatsAppNumberCometRenderer")],
      User: [c("CometHovercardEntityRenderer")],
    };
    e = c("gkx")("1224637")
      ? a
      : c("SearchCometBlueHashtagExperiment").entityMentionStyle != null &&
        c("SearchCometBlueHashtagExperiment").entityMentionStyle.weight ===
          "normal"
      ? d
      : a;
    f = babelHelpers["extends"]({}, e, {
      "*": [b("cr:1691801"), c("CometTrackingNodeRenderer")],
      ExternalUrl: [c("CometShortenedExternalUrlEntityRenderer")],
      TextDelightCampaign: [c("CometTextDelightCampaignEntityRenderer")],
    });
    g["default"] = f;
  },
  98
);
__d(
  "CometFeedStoryMessageBodyTransforms",
  ["CometEmojiTransform", "CometEmoticonTransform", "CometLineBreakTransform"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = [
      c("CometEmoticonTransform")(),
      c("CometEmojiTransform")(),
      c("CometLineBreakTransform"),
    ];
    g["default"] = a;
  },
  98
);
__d(
  "useCometFeedInlineExpandNavigationEventLogger",
  [
    "CometTrackingNodesContext",
    "encodeTrackingNode",
    "react",
    "useCometFeedNoRoutingNavigationEventLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("CometTrackingNodesContext"));
      a = [c("encodeTrackingNode")(44)].concat(a);
      a = c("useCometFeedNoRoutingNavigationEventLogger")(a);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometFeedMaximumMessageLength",
  ["useCometFeedStandardAttachedStoryNestingLevel"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 800,
      i = 267;
    function a() {
      var a = c("useCometFeedStandardAttachedStoryNestingLevel")() > 0;
      return a ? i : h;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometSeeMoreKeyCommand",
  ["cometGetKeyCommandConfig", "react", "useKeyCommands"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a, b) {
      var e = h(
        function () {
          return !a
            ? [
                d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig(
                  "newsfeed",
                  "seeMore",
                  b
                ),
              ]
            : [];
        },
        [a, b]
      );
      c("useKeyCommands")(e, !0);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedMessageTextWithEntities.react",
  [
    "CometFeedMessageTextWithEntities_textWithEntities.graphql",
    "CometFeedStoryMessageBodyRenderers",
    "CometFeedStoryMessageBodyTransforms",
    "CometFeedUnitQueryVariablesContext",
    "CometHighlightTransform",
    "CometRelay",
    "CometSearchMatchedTermsContext",
    "CometTextWithEntitiesRelay.react",
    "DateConsts",
    "react",
    "useCometFeedInlineExpandNavigationEventLogger",
    "useCometFeedMaximumMessageLength",
    "useCometSeeMoreKeyCommand",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useState,
      m = 150,
      n = 20,
      o = 0;
    function a(a) {
      var e = a.maxLines,
        f = a.suffix,
        g = a.textWithEntities,
        p = a.truncationStyle;
      a = a.withoutLineBreaks;
      a = a === void 0 ? !1 : a;
      var q = k(c("CometSearchMatchedTermsContext"));
      g = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometFeedMessageTextWithEntities_textWithEntities.graphql"
            )),
        g
      );
      q =
        q != null && q.matches.length > 0
          ? [].concat(c("CometFeedStoryMessageBodyTransforms"), [
              c("CometHighlightTransform")({ matches: q.matches }),
            ])
          : c("CometFeedStoryMessageBodyTransforms");
      var r = k(c("CometFeedUnitQueryVariablesContext")),
        s = c("useCometFeedMaximumMessageLength")();
      r =
        (r == null ? void 0 : r.feedLocation) ===
        "SERVICES_LOCAL_BUSINESS_DISCOVERY";
      var t = p === "see-more" ? n : o;
      t = e != null ? e * m - t : s;
      var u = c("useCometFeedInlineExpandNavigationEventLogger")();
      s = l(!1);
      var v = s[0],
        w = s[1];
      s = j(
        function () {
          w(function (a) {
            return !a;
          }),
            u(Date.now() / d("DateConsts").MS_PER_SEC, null, "inline_expand");
        },
        [u]
      );
      c("useCometSeeMoreKeyCommand")(v, s);
      return i.jsx(c("CometTextWithEntitiesRelay.react"), {
        expanded: v,
        maxLength: r ? m : t,
        maxLines: (v = e) != null ? v : 5,
        onToggleExpanded: s,
        preserveWhiteSpace: !0,
        renderers: c("CometFeedStoryMessageBodyRenderers"),
        suffix: f,
        textWithEntities: g,
        transforms: q,
        truncationStyle: p,
        withLineBreaks: !a,
        withParagraphs: !r,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometFeedStoryRenderLocationIsPermalink",
  ["CometFeedUnitQueryVariablesContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("CometFeedUnitQueryVariablesContext"));
      return (
        (a == null ? void 0 : a.feedLocation) === "PERMALINK" ||
        (a == null ? void 0 : a.feedLocation) === "PAGE_TIMELINE_PERMALINK" ||
        (a == null ? void 0 : a.feedLocation) === "GROUP_PERMALINK"
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useGeminiSRTFeedStoryRenderLocationIsPageTimeline",
  ["CometFeedUnitQueryVariablesContext", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("CometFeedUnitQueryVariablesContext"));
      return (
        (a == null ? void 0 : a.feedLocation) === "PAGE_TIMELINE" &&
        c("gkx")("1997635")
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryDefaultMessageRenderingStrategy.react",
  [
    "CometFeedARIAProperties.react",
    "CometFeedMessageTextWithEntities.react",
    "CometFeedStoryDefaultMessageRenderingStrategy_message.graphql",
    "CometFeedUnitQueryVariablesContext",
    "CometRelay",
    "TetraTextPairing.react",
    "react",
    "stylex",
    "unrecoverableViolation",
    "useCometFeedStoryMatchDebugger",
    "useCometFeedStoryRenderLocationIsPermalink",
    "useGeminiSRTFeedStoryRenderLocationIsPageTimeline",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext,
      k =
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryDefaultMessageRenderingStrategy_message.graphql"
            ));
    function a(a) {
      var b,
        e,
        f = d("CometRelay").useFragment(k, a.message);
      c("useCometFeedStoryMatchDebugger")(f);
      b = f == null ? void 0 : (b = f.story) == null ? void 0 : b.message;
      var g = j(c("CometFeedARIAProperties.react")),
        h = j(c("CometFeedUnitQueryVariablesContext")),
        l = c("useCometFeedStoryRenderLocationIsPermalink")(),
        m = c("useGeminiSRTFeedStoryRenderLocationIsPageTimeline")();
      if (b == null)
        throw c("unrecoverableViolation")(
          "storyMessage cannot be null in CometFeedStoryDefaultMessageRenderingStrategy",
          "comet_feed"
        );
      var n = babelHelpers["extends"]({}, g.contentTargetProps);
      e = ((e = f.story) == null ? void 0 : e.is_text_only_story) === !0;
      h =
        (h == null ? void 0 : h.feedLocation) ===
        "SERVICES_LOCAL_BUSINESS_DISCOVERY";
      return i.jsx(
        "div",
        babelHelpers["extends"](
          {
            className: c("stylex").dedupe(
              {
                "padding-top-1": "ecm0bbzt",
                "padding-end-1": "hv4rvrfc",
                "padding-bottom-1": "ihqw7lf3",
                "padding-start-1": "dati1w0a",
              },
              e ? { "padding-bottom-1": "e5nlhep0" } : null
            ),
            "data-ad-comet-preview": "message",
            "data-ad-preview": "message",
            "data-testid": void 0,
            ref: g.contentTargetRef,
          },
          n,
          {
            children: i.jsx(c("TetraTextPairing.react"), {
              body: i.jsx(c("CometFeedMessageTextWithEntities.react"), {
                maxLines:
                  (g = f.story) == null
                    ? void 0
                    : g.message_truncation_line_limit,
                suffix: a.suffix,
                textWithEntities: b,
                truncationStyle: m
                  ? "none"
                  : h
                  ? e
                    ? "none"
                    : "ellipsis-only"
                  : l
                  ? "none"
                  : "see-more",
              }),
              bodyColor: "primary",
              bodyLineLimit: h ? (e ? 14 : 2) : null,
              level: 3,
            }),
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMessageBodyLinkEntityRenderer",
  ["cr:1692683"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1692683");
  },
  98
);
__d(
  "CometFeedStoryMessageContainerRenderingStrategy.react",
  [
    "CometFeedStoryMessageContainerRenderingStrategy_messageContainer.graphql",
    "CometRelay",
    "react",
    "useCometFeedStoryMatchDebugger",
    "useGetTextDirectionAttribute",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = 250,
      k =
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryMessageContainerRenderingStrategy_messageContainer.graphql"
            ));
    function a(a) {
      var b,
        e,
        f,
        g,
        h = a.children;
      a = a.messageContainer;
      a = d("CometRelay").useFragment(k, a);
      c("useCometFeedStoryMatchDebugger")(a);
      b = (b = a.story) == null ? void 0 : b.message;
      var l = b == null ? void 0 : b.text;
      e =
        ((e = a.story) == null
          ? void 0
          : (e = e.text_format_metadata) == null
          ? void 0
          : e.preset_id) != null;
      f = c("useGetTextDirectionAttribute")((f = l) != null ? f : "");
      if (b == null) return h;
      b =
        (b = a.story) == null
          ? void 0
          : (b = b.referenced_sticker) == null
          ? void 0
          : b.id;
      g =
        ((g = a.story) == null
          ? void 0
          : (g = g.comet_sections) == null
          ? void 0
          : (g = g.message) == null
          ? void 0
          : g.__typename) != null;
      var m = !1;
      b != null && !g && (m = !0);
      a =
        (b = a.story) == null
          ? void 0
          : (g = b.attachments[0]) == null
          ? void 0
          : g.style_list;
      b = a != null ? a.includes("fun_fact_prompt") : !1;
      b && l != null && l.length < j && (m = !0);
      return i.jsx("div", {
        className:
          (m ? "oqcyycmt" : "") + (e ? " linoseic ggxiycxj hihg3u9x" : ""),
        dir: f,
        children: h,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMessageBodyLinkedEntityRenderer",
  [
    "CometLink.react",
    "CometRelay",
    "ProfileCometProfileLink.react",
    "SearchCometBlueHashtagExperiment",
    "qex",
    "react",
    "useRenderLinkedEntity",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function (a, b, e, f, g) {
      var i, j;
      e = function () {
        if (g === !0)
          return d("useRenderLinkedEntity").EntityRenderType.WEAK_REFERENCE;
        return b.__typename === "ProductItem"
          ? d("useRenderLinkedEntity").EntityRenderType.PRODUCT_ITEM
          : null;
      };
      e = e();
      e = d("useRenderLinkedEntity").useRenderLinkedEntity(e, f);
      f = e == null ? void 0 : e.colorProp;
      var k = e == null ? void 0 : e.icon;
      i = (i = e == null ? void 0 : e.prefix) != null ? i : null;
      e = e == null ? void 0 : e.weight;
      if (b.url == null) return a;
      var l;
      switch (b.__typename) {
        case "Event":
        case "Group":
        case "Page":
        case "User":
          l =
            (j = f) != null
              ? j
              : c("SearchCometBlueHashtagExperiment").entityMentionStyle;
          break;
        case "ProductItem":
          l = { color: f == null ? void 0 : f.color, weight: e };
          break;
        case "Hashtag":
        case "GroupHashtag":
          l = c("SearchCometBlueHashtagExperiment").hashtagStyle;
          break;
        default:
          break;
      }
      if (b.__typename === "User") {
        return h.jsxs(
          c("ProfileCometProfileLink.react"),
          babelHelpers["extends"]({ actor: b, ref: null }, l, {
            children: [(j = k) != null ? j : null, a],
          })
        );
      }
      if (b.__typename === "ProductItem" && c("qex")._("205") !== !0) return a;
      e = h.jsxs(
        c("CometLink.react"),
        babelHelpers["extends"]({ href: b.url }, l, {
          children: [(f = k) != null ? f : null, a],
        })
      );
      switch (b.__typename) {
        case "GroupHashtag":
          return h.jsx(d("CometRelay").MatchContainer, {
            fallback: e,
            match: b,
            props: babelHelpers["extends"]({ children: a }, l),
          });
        default:
          return h.jsxs(h.Fragment, { children: [i, e] });
      }
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometDefaultCommentListBody.react",
  [
    "CometDefaultCommentListBody_feedback.graphql",
    "CometRelay",
    "CometUFICommentGroup.react",
    "CometUFIComposerWrapper.react",
    "UFI2ViewOption",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometDefaultCommentListBody_feedback.graphql")),
          a.feedback
        ),
        f = a.commentsListRenderProps,
        g = a.editingCommentID,
        j = a.feedbackSource,
        k = a.feedLocation,
        l = a.focusCommentID,
        m = a.locallyComposedCommentIds,
        n = a.onCommitCommentCreate,
        o = a.onEditCommentError,
        p = a.onTranslateAllClick,
        q = a.realtimeCommentIds,
        r = a.renderedTranslationCommentID,
        s = a.setEditingCommentID,
        t = a.setRenderedTranslationCommentID,
        u = a.shouldRequestTranslationForAllComments,
        v = a.storyRenderLocation;
      a = f.Selectors;
      var w = f.depth,
        x = f.listState,
        y = f.viewOption,
        z = d("UFI2ViewOption").shouldDisplayInReverse(y);
      a = a.getVisibleCommentsWithHiddenCommentsCollapsed({
        depth: w,
        reverse: z,
        state: x,
      });
      var A = e == null ? void 0 : e.viewer_actor,
        B = d("CometUFIComposerWrapper.react").useComposerPluginProps(!!A, e);
      return i.jsx("ul", {
        children: a.map(function (a, b) {
          return i.jsx(
            c("CometUFICommentGroup.react"),
            {
              actor: A,
              commentsListRenderProps: f,
              composerPluginProps: B,
              editingCommentID: g,
              feedLocation: k,
              feedback: e,
              feedbackSource: j,
              focusCommentID: l,
              groupedComments: a,
              locallyComposedCommentIds: m,
              onCommitCommentCreate: n,
              onEditCommentError: o,
              onTranslateAllClick: p,
              realtimeCommentIds: q,
              renderedTranslationCommentID: r,
              setEditingCommentID: s,
              setRenderedTranslationCommentID: t,
              shouldRequestTranslationForAllComments: u,
              storyRenderLocation: v,
              viewOption: y,
            },
            b
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
  "CometDefaultCommentListRenderer.react",
  [
    "CometDefaultCommentListBody.react",
    "CometDefaultCommentListRenderer_renderer.graphql",
    "CometPlaceholder.react",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.feedLocation,
        f = a.renderer;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "feedLocation",
        "renderer",
      ]);
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometDefaultCommentListRenderer_renderer.graphql")),
        f
      );
      f = f.feedback;
      return f == null
        ? null
        : i.jsxs(i.Fragment, {
            children: [
              i.jsx(c("CometPlaceholder.react"), {
                fallback: null,
                children: i.jsx(d("CometRelay").MatchContainer, {
                  match: f.work_answering_now_comment_renderer,
                  props: {
                    feedLocation: e,
                    feedback: f,
                    feedbackSource: a.feedbackSource,
                    onReply: null,
                    setEditingCommentID: a.setEditingCommentID,
                    storyRenderLocation: a.storyRenderLocation,
                    useDefaultActor: !0,
                  },
                }),
              }),
              i.jsx(
                c("CometDefaultCommentListBody.react"),
                babelHelpers["extends"]({ feedLocation: e, feedback: f }, a)
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
  "CometCommentContextualMessage.react",
  ["CometCommentContextualMessage_feedback.graphql", "CometRelay", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.feedback;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometCommentContextualMessage_feedback.graphql")),
        a
      );
      return i.jsx(d("CometRelay").MatchContainer, {
        match: a.comment_contextual_message_comet_renderer,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometLiveAMAUFIContext.react",
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
  "CometLiveAMAUFIProvider.react",
  [
    "CometLiveAMAUFIContext.react",
    "RelayUFI2CommentsKeyContext",
    "WebPixelRatio",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = d("WebPixelRatio").get();
    function k(a) {
      var b = a.children,
        d = a.commentsKey,
        e = a.feedbackSource,
        f = a.feedLocation;
      a = i(
        function () {
          return {
            UFI2CommentsProvider_commentsKey: d,
            feedLocation: f,
            feedbackSource: e,
            scale: j,
            useDefaultActor: !1,
          };
        },
        [d, f, e]
      );
      return h.jsx(c("CometLiveAMAUFIContext.react").Provider, {
        value: a,
        children: b,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      return h.jsx(c("RelayUFI2CommentsKeyContext").Consumer, {
        children: function (b) {
          return h.jsx(k, babelHelpers["extends"]({ commentsKey: b }, a));
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIAbstractButtonWrapper.react",
  ["cr:829648"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:829648");
  },
  98
);
__d(
  "CometUFIAddCommentLink.react",
  [
    "fbt",
    "CometTrackingNodeProvider.react",
    "CometUFIAbstractButtonWrapper.react",
    "TetraText.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        link: { color: "m9osqain", ":hover": { textDecoration: "gpro0wi8" } },
        root: {
          marginTop: "kvgmc6g5",
          marginEnd: "wkznzc2l",
          marginBottom: "oygrvhab",
          marginStart: "dhix69tm",
          paddingTop: "ecm0bbzt",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "sj5x9vvc",
          paddingStart: "a8nywdso",
        },
      };
    function a(a) {
      var b = a.label;
      b = b === void 0 ? h._("Write a comment\u2026") : b;
      a = a.onClick;
      return i.jsx("div", {
        className: c("stylex")(j.root),
        "data-testid": void 0,
        children: i.jsx(c("CometTrackingNodeProvider.react"), {
          trackingNode: 26,
          children: i.jsx(c("CometUFIAbstractButtonWrapper.react"), {
            className: c("stylex")(j.link),
            "data-testid": void 0,
            href: "#",
            label: i.jsx(c("TetraText.react"), {
              color: "secondary",
              type: "bodyLink3",
              children: b,
            }),
            onClick: a,
            role: "button",
            xstyle: j.link,
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
  "CometFeedUFITopLevelCommentList.react",
  [
    "BaseHeadingContextWrapper.react",
    "CometCommentContextualMessage.react",
    "CometFeedUFITopLevelCommentList_renderer.graphql",
    "CometFeedUFITopLevelCommentList_restrictionNotice.graphql",
    "CometLiveAMAUFIProvider.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometUFIAccessibleCommentsHeading.react",
    "CometUFIAddCommentLink.react",
    "CometUFICommentPager.react",
    "CometUFICommentPaginationProgressElement.react",
    "CometUFICommentsFilterFallbackWarning.react",
    "CometUFICommentsListPlaceholder.react",
    "CometUFIComposerWrapper.react",
    "CometUFITypingIndicator.react",
    "CometUFIViewOptions.react",
    "FocusRegion.react",
    "FocusRegionType",
    "UFI2ViewOption",
    "cr:314",
    "focusScopeQueries",
    "gkx",
    "react",
    "stylex",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useState,
      m = {
        commentListBorder: {
          borderTop: "l6v480f0",
          marginTop: "kvgmc6g5",
          marginEnd: "wkznzc2l",
          marginBottom: "oygrvhab",
          marginStart: "dhix69tm",
          paddingTop: "ecm0bbzt",
        },
        commentRow: {
          paddingTop: "ecm0bbzt",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "e5nlhep0",
          paddingStart: "dati1w0a",
        },
        commentsContainer: {
          backgroundColor: "cwj9ozl2",
          marginBottom: "tvmbv18p",
        },
        composer: {
          paddingTop: "ecm0bbzt",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "e5nlhep0",
          paddingStart: "dati1w0a",
        },
        composerAlone: { paddingTop: "ecm0bbzt" },
        composerStickyTop: {
          backgroundColor: "cwj9ozl2",
          position: "lpgh02oy",
          top: "kr520xx4",
          zIndex: "tkr6xdv7",
        },
        composerTop: {
          paddingTop: "ecm0bbzt",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "e5nlhep0",
          paddingStart: "dati1w0a",
        },
        topLevelPager: {
          display: "j83agx80",
          justifyContent: "bkfpd7mw",
          paddingTop: "jb3vyjys",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "qt6c0cv9",
          paddingStart: "dati1w0a",
          position: "l9j0dhe7",
        },
      };
    function a(a) {
      var e = a.commentsListRenderProps,
        f = a.feedbackSource,
        g = a.feedLocation,
        n = a.onAddCommentClick,
        o = a.onCommitCommentCreate,
        p = a.renderer,
        q = a.storyRenderLocation;
      if (e.depth !== 0)
        throw c("unrecoverableViolation")(
          "CometUFIRoot: Expected depth to be 0",
          "ufi2"
        );
      var r = e.Selectors,
        s = e.depth,
        t = e.getFilterWarningPropsForOlderComments,
        u = e.listState,
        v = e.onCommentsListMouseEnter,
        w = e.onCommentsListMouseLeave,
        x = e.viewOption;
      p = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedUFITopLevelCommentList_renderer.graphql")),
        p
      );
      p = p.feedback;
      var y = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b(
                "CometFeedUFITopLevelCommentList_restrictionNotice.graphql"
              )),
          p
        ),
        z = l(!1),
        A = z[0],
        B = z[1];
      z = k(
        function () {
          A === !1 && B(!0);
        },
        [A]
      );
      var C = p == null ? void 0 : p.viewer_actor;
      y = y == null ? void 0 : y.comment_moderation_filter_restriction_notice;
      C = d("CometUFIComposerWrapper.react").useComposerPluginProps(!!C, p);
      var D = p == null ? void 0 : p.content_based_comment_list_renderer;
      if (p == null || D == null) return null;
      var E = r.hasPagedInDirection({
          depth: s,
          direction: "forward",
          state: u,
        }),
        F = d("UFI2ViewOption").shouldDisplayInReverse(x),
        G = r.isListLoading({ depth: s, state: u }),
        H =
          r.isPagerVisible({ depth: s, direction: "forward", state: u }) ||
          r.isPagerVisible({ depth: s, direction: "backward", state: u }),
        I = r.getVisibleCommentsCount({ depth: s, state: u }),
        J = j.jsx("div", {
          className: c("stylex")(m.commentsContainer),
          children: j.jsx(c("CometUFICommentsListPlaceholder.react"), {}),
        });
      if (I === 0 && G) return J;
      G = {
        commentsListRenderProps: e,
        composerPluginProps: C,
        feedback: p,
        onCommitCommentCreate: o,
        xstyle: [
          m.commentRow,
          m.composer,
          I === 0 && H === !1 && m.composerAlone,
          !F && (I > 0 || H) && m.composerTop,
          p.is_for_workplace_ama_post === !0 &&
            x === "MOST_VOTED" &&
            (q === "live_producer" ||
              q === "live_event" ||
              q === "video_channel") &&
            m.composerStickyTop,
        ],
      };
      C = j.jsx(
        d("CometUFIComposerWrapper.react").CometUFIComposerWrapper,
        babelHelpers["extends"]({}, G)
      );
      o = p.can_viewer_comment === !0;
      G = !F && o && (E || A);
      E = x !== "LIVE_STREAMING";
      var K = r.isListExpanded({ depth: s, state: u });
      K =
        f !== 62 &&
        f !== 92 &&
        f !== 97 &&
        q !== "live_producer" &&
        q !== "live_event" &&
        ((K && o) || I > 0 || H);
      o = x === "LIVE_STREAMING" || I > 0;
      H = y
        ? j.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: j.jsx(d("CometRelay").MatchContainer, { match: y }),
          })
        : null;
      I = p.if_viewer_can_see_comment_reputation_system_contextual_message_nux;
      I =
        I != null ? j.jsx(d("CometRelay").MatchContainer, { match: I }) : null;
      var L = p == null ? void 0 : p.is_community_qa_or_qaish_post;
      return j.jsx(d("FocusRegion.react").FocusRegion, {
        recoverFocusQuery: c("gkx")("85")
          ? null
          : d("focusScopeQueries").tabbableScopeQuery,
        recoverFocusStrategy: d("FocusRegionType").RecoverFocusStrategy.First,
        children: j.jsx(c("CometPlaceholder.react"), {
          fallback: J,
          children: j.jsx(c("BaseHeadingContextWrapper.react"), {
            children: j.jsxs("div", {
              className: c("stylex")(m.commentsContainer),
              "data-testid": void 0,
              onMouseEnter: v,
              onMouseLeave: w,
              children: [
                j.jsx(c("CometUFIAccessibleCommentsHeading.react"), {
                  commentCount:
                    p == null
                      ? void 0
                      : (J = p.comment_count) == null
                      ? void 0
                      : J.total_count,
                  i18nCommentCount: p == null ? void 0 : p.i18n_comment_count,
                }),
                K
                  ? j.jsx("div", {
                      className: c("stylex")(m.commentListBorder),
                    })
                  : null,
                !F && H,
                !F &&
                  y &&
                  j.jsx("div", { className: c("stylex")(m.commentListBorder) }),
                I,
                j.jsx(c("CometCommentContextualMessage.react"), {
                  feedback: p,
                }),
                j.jsxs("div", {
                  className: c("stylex")(m.topLevelPager),
                  children: [
                    j.jsx(d("CometUFICommentPager.react").Top, {
                      commentsListRenderProps: e,
                      isCommunityQA: L,
                    }),
                    j.jsx(c("CometUFIViewOptions.react"), {
                      commentsListRenderProps: e,
                      feedback: p,
                      onChangeComplete: z,
                    }),
                  ],
                }),
                x &&
                  b("cr:314") != null &&
                  j.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: j.jsx(b("cr:314"), {
                      feedLocation: a.feedLocation,
                      feedbackTargetID: a.feedbackTargetID,
                      orderingMode: x,
                    }),
                  }),
                !F && C,
                p.work_ama_ufi_module_renderer != null &&
                  j.jsx(c("CometLiveAMAUFIProvider.react"), {
                    feedLocation: g,
                    feedbackSource: f,
                    children: j.jsx(c("CometPlaceholder.react"), {
                      fallback: null,
                      children: j.jsx(d("CometRelay").MatchContainer, {
                        match: p.work_ama_ufi_module_renderer,
                        props: {
                          feedbackSource: f,
                          storyRenderLocation: q,
                          viewOption: x,
                        },
                      }),
                    }),
                  }),
                o
                  ? j.jsx(d("CometRelay").MatchContainer, {
                      match: D,
                      props: a,
                    })
                  : null,
                x === "RANKED_THREADED" &&
                  j.jsx(
                    c("CometUFICommentsFilterFallbackWarning.react"),
                    babelHelpers["extends"]({}, t(), { xstyle: m.commentRow })
                  ),
                j.jsxs(
                  "div",
                  {
                    className: c("stylex")(m.topLevelPager),
                    children: [
                      j.jsx(d("CometUFICommentPager.react").Bottom, {
                        commentsListRenderProps: e,
                        isCommunityQA: L,
                      }),
                      j.jsx(
                        c("CometUFICommentPaginationProgressElement.react"),
                        { commentsListRenderProps: e }
                      ),
                    ],
                  },
                  "bottomPager_" +
                    r.getVisibleCommentsCount({ depth: s, state: u })
                ),
                E && j.jsx(c("CometUFITypingIndicator.react"), { feedback: p }),
                F && C,
                F && H,
                G === !0 &&
                  j.jsx(c("CometUFIAddCommentLink.react"), { onClick: n }),
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
  "CometUFIBatchLikeStarCommentsCardRenderer.react",
  [
    "CometRelay",
    "CometUFIBatchLikeStarCommentsCardRendererQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useEffect;
    function a(a) {
      var b = a.feedbackTargetID,
        e = a.feedLocation,
        f = a.initialQueryRef,
        g = a.orderingMode;
      a = d("CometRelay").useQueryLoader(
        c("CometUFIBatchLikeStarCommentsCardRendererQuery.graphql")
      );
      var h = a[0],
        l = a[1];
      j(
        function () {
          g === "STAR_COMMENTS" &&
            l(
              { feedLocation: e, feedbackTargetID: b, orderingMode: g },
              { fetchPolicy: "network-only" }
            );
        },
        [e, b, g, l]
      );
      f = (a = f) != null ? a : h;
      return g !== "STAR_COMMENTS" || f == null
        ? null
        : i.jsx(k, { feedLocation: e, queryRef: f });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      var c = a.feedLocation;
      a = a.queryRef;
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("CometUFIBatchLikeStarCommentsCardRendererQuery.graphql")),
        a
      );
      a =
        (a = a.feedback) == null ? void 0 : a.batch_like_star_comments_renderer;
      return a == null
        ? null
        : i.jsx(d("CometRelay").MatchContainer, {
            match: a,
            props: { feedLocation: c, rendererRef: a },
          });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFullUFIRenderer.react",
  [
    "CometFullUFIRenderer_renderer.graphql",
    "CometFullUFIRenderer_shareable.graphql",
    "CometFullUFIRenderer_story.graphql",
    "CometListCellGlimmer.react",
    "CometRefineRef",
    "CometRelay",
    "CometUFICommentListRenderer.react",
    "CometUFICommentsAriaExpandedProvider.react",
    "CometUFIRealtimeRoot.react",
    "CometUFISummaryAndActions.react",
    "CometUFIVisibilityContext",
    "FBLogger",
    "cometGetKeyCommandConfig",
    "react",
    "unrecoverableViolation",
    "useKeyCommands",
    "useTriggeredStoryCTAHandler",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useMemo,
      n = e.useRef;
    function a(a, e) {
      var f = a.displayCommentsContext,
        g = a.feedLocation,
        p = a.feedbackSource,
        q = a.focusCommentID,
        r = a.isTextOnlyStory,
        s = a.onActorSelected,
        t = a.renderer,
        u = a.shareable,
        v = a.story;
      a = a.storyRenderLocation;
      t = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometFullUFIRenderer_renderer.graphql")),
        t
      );
      var w = t == null ? void 0 : t.feedback;
      if (w == null)
        throw c("unrecoverableViolation")(
          "CometFullUFIRenderer: expected a valid feedback object, got null",
          "ufi2"
        );
      t = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometFullUFIRenderer_shareable.graphql")),
        u
      );
      u = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("CometFullUFIRenderer_story.graphql")),
        v
      );
      var x = n();
      v = c("useTriggeredStoryCTAHandler")();
      var y = v[0];
      v = l(function () {
        var a = x.current;
        a != null && a.Actions.toggleList({ focusComposer: !1 });
      }, []);
      var z = l(
          function () {
            var a = x.current;
            a != null
              ? (a.Actions.expandList({
                  focusComposer: !0,
                  scrollToComposer: !0,
                }),
                y("COMMENT_BUTTON_TAP"))
              : c("FBLogger")("ufi2")
                  .addMetadata(
                    "UFI",
                    "FEEDBACK_TARGET_ID",
                    (w == null ? void 0 : w.id) || "UNKNOWN"
                  )
                  .mustfix(
                    "The 'comment' button was clicked but no comments list ref could be found. That ref is needed to make sure the comments list is open."
                  );
          },
          [w, y]
        ),
        A = m(
          function () {
            return w.can_viewer_comment === !0
              ? [
                  d(
                    "cometGetKeyCommandConfig"
                  ).getCometAndGeminiKeyCommandConfig(
                    "newsfeed",
                    "commentStory",
                    z
                  ),
                ]
              : [];
          },
          [w.can_viewer_comment, z]
        );
      c("useKeyCommands")(A, !0);
      return k.jsx(c("CometUFIRealtimeRoot.react"), {
        enabled: w.is_eligible_for_real_time_updates === !0,
        children: k.jsx(o, {
          children: k.jsxs(c("CometUFICommentsAriaExpandedProvider.react"), {
            feedLocation: g,
            feedback: w,
            children: [
              k.jsx(c("CometUFISummaryAndActions.react"), {
                feedLocation: g,
                feedback: w,
                feedbackSource: p,
                isTextOnlyStory: r,
                onActorSelected: s,
                onClickCommentsCount: v,
                onCommentClick: z,
                ref: e,
                renderLocation: a,
                shareable: (A = t) != null ? A : null,
                story: (r = u) != null ? r : null,
              }),
              k.jsx(c("CometUFICommentListRenderer.react"), {
                displayCommentsContext: f,
                fallback: k.jsx("div", {
                  className: "hbnzryc0",
                  "data-testid": void 0,
                  children: k.jsx(c("CometListCellGlimmer.react"), {
                    imageSize: 36,
                    imageStyle: "circle",
                    numberOfItems: 4,
                  }),
                }),
                feedLocation: g,
                feedback: w,
                feedbackSource: p,
                focusCommentID: q,
                listRef: c("CometRefineRef")(x),
                storyRenderLocation: a,
              }),
            ],
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function o(a) {
      a = a.children;
      var b = n(!0),
        d = c("useVisibilityObserver")({
          onHidden: l(function () {
            b.current = !1;
          }, []),
          onVisible: l(function () {
            b.current = !0;
          }, []),
        });
      return k.jsx(c("CometUFIVisibilityContext").Provider, {
        value: b,
        children: k.jsx("div", { ref: d, children: a }),
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    e = k.forwardRef(a);
    g["default"] = e;
  },
  98
);
