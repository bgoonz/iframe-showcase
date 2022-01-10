if (self.CavalryLogger) {
  CavalryLogger.start_js(["IHcagZz"]);
}

__d(
  "CometComposerActorProfilePicture_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometComposerActorProfilePicture_profile",
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
          args: [
            { kind: "Literal", name: "height", value: 40 },
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
          type: "User",
          abstractKey: null,
        },
      ],
      type: "Profile",
      abstractKey: "__isProfile",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometComposerMinutiaeBar_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "scale" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometComposerMinutiaeBar_profile",
      selections: [
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
          name: "CometComposerActorProfilePicture_profile",
        },
      ],
      type: "Profile",
      abstractKey: "__isProfile",
    };
    e.exports = a;
  },
  null
);
__d(
  "ComposerStoryCreateMutation.graphql",
  ["CometFeedUnit_feedUnit$normalization.graphql"],
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
        j = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "gridMediaWidth",
        },
        k = { defaultValue: null, kind: "LocalArgument", name: "hashtag" },
        l = { defaultValue: null, kind: "LocalArgument", name: "input" },
        m = { defaultValue: null, kind: "LocalArgument", name: "isFeed" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "isFunFactPost",
        },
        o = { defaultValue: null, kind: "LocalArgument", name: "isFundraiser" },
        p = { defaultValue: null, kind: "LocalArgument", name: "isGroup" },
        q = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "isPageNewsFeed",
        },
        ba = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "isProfileReviews",
        },
        ca = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "isSocialLearning",
        },
        da = { defaultValue: null, kind: "LocalArgument", name: "isTimeline" },
        ea = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "prefetchRecentMediaPhotos",
        },
        fa = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "privacySelectorRenderLocation",
        },
        ga = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        ha = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ia = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useCometPhotoViewerPlaceholderFrag",
        },
        ja = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        ka = [{ kind: "Variable", name: "data", variableName: "input" }],
        la = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "story_id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_id",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        ma = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_story_hideable_id",
          storageKey: null,
        },
        na = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_marked_as_spam_by_admin_assistant",
          storageKey: null,
        },
        u = [s],
        v = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        w = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: v,
          storageKey: null,
        },
        oa = {
          alias: null,
          args: null,
          concreteType: "LearningCourseModule",
          kind: "LinkedField",
          name: "module",
          plural: !1,
          selections: u,
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        y = [x],
        z = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "thumbnail",
          plural: !1,
          selections: y,
          storageKey: null,
        },
        pa = {
          alias: null,
          args: null,
          concreteType: "SocialLearningPost",
          kind: "LinkedField",
          name: "social_learning_post",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "content_type",
              storageKey: null,
            },
            {
              alias: "contentTypeText",
              args: [
                {
                  kind: "Literal",
                  name: "string_enum",
                  value: "POST_CONTENT_TYPE",
                },
              ],
              kind: "ScalarField",
              name: "social_learning_string",
              storageKey:
                'social_learning_string(string_enum:"POST_CONTENT_TYPE")',
            },
            z,
          ],
          storageKey: null,
        },
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        qa = [A],
        ra = {
          alias: "docs_and_files",
          args: null,
          concreteType: "GroupFilesAndDocsConnection",
          kind: "LinkedField",
          name: "group_docs_and_files",
          plural: !1,
          selections: qa,
          storageKey: null,
        },
        sa = { kind: "Variable", name: "hashtag", variableName: "hashtag" },
        B = {
          kind: "Variable",
          name: "group_hashtag_name",
          variableName: "hashtag",
        },
        ta = [
          {
            kind: "Literal",
            name: "supported",
            value: [
              "CommunityParticipationQuestionsComposerPageRenderer",
              "ComposerEndPageGroupRoomLobbyRenderer",
            ],
          },
        ],
        ua = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName:
                "groupsCometComposerDecoratePushPageOnComplete_story",
              fragmentName:
                "GroupsCometParticipationQuestionsDialogPageRenderer_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          type: "CommunityParticipationQuestionsComposerPageRenderer",
          abstractKey: null,
        },
        va = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName:
                "groupsCometComposerDecoratePushPageOnComplete_story",
              fragmentName: "GroupRoomComposerEndPageLobbyRenderer_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          type: "ComposerEndPageGroupRoomLobbyRenderer",
          abstractKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cursor",
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        wa = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cache_id",
              storageKey: null,
            },
          ],
          type: "Cacheable",
          abstractKey: "__isCacheable",
        },
        E = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "title",
          plural: !1,
          selections: v,
          storageKey: null,
        },
        F = {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedUnit_feedUnit",
        },
        xa = [{ kind: "Literal", name: "if_style", value: "album" }],
        ya = [
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
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "GroupsCometMediaPhotosTabGridItem_photo",
                  },
                ],
                type: "Photo",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        za = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creation_time",
          storageKey: null,
        },
        Aa = {
          alias: null,
          args: null,
          concreteType: "BackdatedTime",
          kind: "LinkedField",
          name: "backdated_time",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "time",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Ba = [F],
        Ca = [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "node",
            plural: !1,
            selections: Ba,
            storageKey: null,
          },
        ],
        Da = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logging_token",
          storageKey: null,
        },
        G = [D, s],
        Ea = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "default_actor",
          plural: !1,
          selections: G,
          storageKey: null,
        },
        Fa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_id",
          storageKey: null,
        },
        Ga = {
          alias: "deleteUnitButtonText",
          args: [
            {
              kind: "Literal",
              name: "string_enum",
              value: "DELETE_UNIT_BUTTON",
            },
          ],
          kind: "ScalarField",
          name: "social_learning_string",
          storageKey:
            'social_learning_string(string_enum:"DELETE_UNIT_BUTTON")',
        },
        H = {
          args: null,
          fragment: aa("CometFeedUnit_feedUnit$normalization.graphql"),
          kind: "FragmentSpread",
        },
        Ha = {
          kind: "InlineFragment",
          selections: [H],
          type: "FeedUnit",
          abstractKey: "__isFeedUnit",
        },
        I = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        Ia = { kind: "Literal", name: "first", value: 3 };
      z = {
        alias: null,
        args: null,
        concreteType: "LearningCourseUnitModulesEdge",
        kind: "LinkedField",
        name: "edges",
        plural: !0,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "LearningCourseModule",
            kind: "LinkedField",
            name: "node",
            plural: !1,
            selections: [
              {
                alias: "contentType",
                args: null,
                kind: "ScalarField",
                name: "content_type",
                storageKey: null,
              },
              s,
              {
                alias: "isCompleted",
                args: null,
                kind: "ScalarField",
                name: "has_viewer_completed",
                storageKey: null,
              },
              I,
              {
                alias: "contentTypeText",
                args: [
                  {
                    kind: "Literal",
                    name: "string_enum",
                    value: "MODULE_CONTENT_TYPE",
                  },
                ],
                kind: "ScalarField",
                name: "social_learning_string",
                storageKey:
                  'social_learning_string(string_enum:"MODULE_CONTENT_TYPE")',
              },
              z,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var Ja = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_address",
          storageKey: null,
        },
        J = { kind: "Variable", name: "scale", variableName: "scale" },
        K = { kind: "Literal", name: "allows_guests", value: !1 },
        Ka = [K, { kind: "Literal", name: "first", value: 10 }, B],
        L = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "group_comet_jvc_list_cell_renderer",
          plural: !1,
          selections: [
            D,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupRoomListCellContainer_link",
                  fragmentName: "GroupRoomListCell_link",
                  fragmentPropName: "link",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupsCometJVCListCell",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupRoomListCellContainer_link",
                  fragmentName: "GroupRoomEventListCell_link",
                  fragmentPropName: "link",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupsCometEventJVCListCell",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        M = {
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
        La = ["allows_guests", "group_hashtag_name"],
        Ma = [K, { kind: "Literal", name: "first", value: 5 }, B],
        N = { kind: "TypeDiscriminator", abstractKey: "__isFeedUnit" },
        O = {
          kind: "InlineFragment",
          selections: u,
          type: "Node",
          abstractKey: "__isNode",
        },
        P = {
          kind: "InlineFragment",
          selections: u,
          type: "CommunityChatFeedObject",
          abstractKey: null,
        },
        Q = {
          kind: "InlineFragment",
          selections: u,
          type: "CommunityTabNewJoinFeedUnit",
          abstractKey: null,
        },
        R = {
          kind: "InlineFragment",
          selections: u,
          type: "CommunityTabTrendingPOGFeedUnit",
          abstractKey: null,
        },
        S = {
          kind: "InlineFragment",
          selections: u,
          type: "XFBGroupsTabSuggestedGroupSetFeedUnit",
          abstractKey: null,
        },
        T = {
          kind: "InlineFragment",
          selections: u,
          type: "XFBGroupsTabSuggestedGroupSetsFeedUnit",
          abstractKey: null,
        },
        Na = [
          {
            alias: null,
            args: null,
            concreteType: "QuickPromotionFeedUnitItem",
            kind: "LinkedField",
            name: "quick_promotion_items",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "QuickPromotion",
                kind: "LinkedField",
                name: "quick_promotion",
                plural: !1,
                selections: u,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        U = [
          {
            kind: "Variable",
            name: "location",
            variableName: "renderLocation",
          },
        ],
        Oa = {
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
            D,
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
        Pa = {
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
            D,
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
        V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
        Qa = {
          alias: null,
          args: U,
          kind: "ScalarField",
          name: "should_host_actor_link_in_watch",
          storageKey: null,
        },
        W = { kind: "TypeDiscriminator", abstractKey: "__isNFXAction" },
        X = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        Y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        };
      x = {
        alias: null,
        args: null,
        concreteType: "Image",
        kind: "LinkedField",
        name: "icon",
        plural: !1,
        selections: [
          X,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "scale",
            storageKey: null,
          },
          x,
          Y,
        ],
        storageKey: null,
      };
      var Z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "context",
          storageKey: null,
        },
        $ = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        };
      W = {
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
              s,
              Fa,
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
                selections: [D, W, x, Z, $, s],
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
                      D,
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
                  D,
                  W,
                  E,
                  {
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "subtitle",
                    plural: !1,
                    selections: v,
                    storageKey: null,
                  },
                  Z,
                  $,
                  x,
                  s,
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      x = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "accessibility_caption",
        storageKey: null,
      };
      X = [X, Y];
      Y = [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "owner",
          plural: !1,
          selections: [
            D,
            s,
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "uri_token",
                  storageKey: null,
                },
              ],
              type: "Page",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      var Ra = {
          kind: "InlineFragment",
          selections: u,
          type: "GenericAttachmentMedia",
          abstractKey: null,
        },
        Sa = {
          kind: "InlineFragment",
          selections: u,
          type: "MontageImage",
          abstractKey: null,
        },
        Ta = {
          kind: "InlineFragment",
          selections: u,
          type: "MontageVideo",
          abstractKey: null,
        };
      X = [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "media",
          plural: !1,
          selections: [
            D,
            {
              kind: "InlineFragment",
              selections: [
                x,
                s,
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "height", value: 420 },
                    J,
                    { kind: "Literal", name: "width", value: 420 },
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
                  args: null,
                  concreteType: "Feedback",
                  kind: "LinkedField",
                  name: "feedback",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Feedback",
                      kind: "LinkedField",
                      name: "if_viewer_can_see_reactions_in_groups_photo_grid",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          documentName:
                            "GroupsCometMediaPhotosTabGridItem_photo",
                          fragmentName:
                            "GroupsCometMediaPhotosTabGridItemReactions_feedback",
                          fragmentPropName: "feedback",
                          kind: "ModuleImport",
                        },
                        s,
                      ],
                      storageKey: null,
                    },
                    s,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "immersive_photo_encodings",
                  plural: !0,
                  selections: [
                    D,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "projection_type",
                      storageKey: null,
                    },
                    s,
                  ],
                  storageKey: null,
                },
                {
                  condition: "useCometPhotoViewerPlaceholderFrag",
                  kind: "Condition",
                  passingValue: !1,
                  selections: [
                    {
                      alias: "viewer_image_orig",
                      args: [J],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: X,
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "useCometPhotoViewerPlaceholderFrag",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: "viewer_image",
                      args: [
                        {
                          kind: "Literal",
                          name: "context",
                          value: "comet_media_viewer",
                        },
                        { kind: "Literal", name: "height", value: 1e6 },
                        J,
                        { kind: "Literal", name: "width", value: 1e6 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: X,
                      storageKey: null,
                    },
                  ],
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
                      kind: "InlineFragment",
                      selections: Y,
                      type: "Photo",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: Y,
                      type: "Video",
                      abstractKey: null,
                    },
                  ],
                  type: "Media",
                  abstractKey: "__isMedia",
                },
              ],
              type: "Photo",
              abstractKey: null,
            },
            O,
            Ra,
            Sa,
            Ta,
          ],
          storageKey: null,
        },
      ];
      Y = {
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
          D,
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName:
                  "ProfileCometTimelineGridStoryAttachment_story__aggregated_stories",
                fragmentName:
                  "ProfileCometTimelineGridStoryAggregatedStoryRenderer_aggregatedStories",
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
      };
      var Ua = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometFeedStoryFormattedBackgroundMessageRenderingStrategy",
                "CometFeedStoryDefaultMessageRenderingStrategy",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: [
            D,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "ProfileCometTimelineGridStoryAttachment_story__message",
                  fragmentName:
                    "ProfileCometTimelineGridStoryFormattedBackgroundMessageRenderer_message",
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
                  documentName:
                    "ProfileCometTimelineGridStoryAttachment_story__message",
                  fragmentName:
                    "ProfileCometTimelineGridStoryDefaultMessageRenderer_message",
                  fragmentPropName: "message",
                  kind: "ModuleImport",
                },
              ],
              type: "CometFeedStoryDefaultMessageRenderingStrategy",
              abstractKey: null,
            },
          ],
          storageKey:
            'message(supported:["CometFeedStoryFormattedBackgroundMessageRenderingStrategy","CometFeedStoryDefaultMessageRenderingStrategy"])',
        },
        Va = {
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
                  kind: "Variable",
                  name: "render_location",
                  variableName: "renderLocation",
                },
                {
                  kind: "Literal",
                  name: "supported",
                  value: [
                    "StoryAttachmentAlbumStyleRenderer",
                    "StoryAttachmentPhotoStyleRenderer",
                    "StoryAttachmentVideoStyleRenderer",
                    "StoryAttachmentLifeEventStyleRenderer",
                    "StoryAttachmentProfileIntroCardBioStyleRenderer",
                    "StoryAttachmentMapStyleRenderer",
                    "StoryAttachmentShareStyleRenderer",
                    "StoryAttachmentFunFactsStyleRenderer",
                    "StoryAttachment3DPhotoStyleRenderer",
                    "StoryAttachment360PhotoStyleRenderer",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "style_type_renderer",
              plural: !1,
              selections: [
                D,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "ProfileCometTimelineGridStoryAttachment_story",
                      fragmentName:
                        "ProfileCometTimelineGridStoryAlbumAttachmentStyle_styleTypeRenderer",
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
                      documentName:
                        "ProfileCometTimelineGridStoryAttachment_story",
                      fragmentName:
                        "ProfileCometTimelineGridStoryPhotoAttachmentStyle_styleTypeRenderer",
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
                        "ProfileCometTimelineGridStoryAttachment_story",
                      fragmentName:
                        "ProfileCometTimelineGridStoryVideoAttachmentStyle_styleTypeRenderer",
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
                        "ProfileCometTimelineGridStoryAttachment_story",
                      fragmentName:
                        "ProfileCometTimelineGridStoryLifeEventAttachmentStyle_styleTypeRenderer",
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
                      documentName:
                        "ProfileCometTimelineGridStoryAttachment_story",
                      fragmentName:
                        "ProfileCometTimelineGridStoryProfileIntroCardBioAttachmentStyle_styleTypeRenderer",
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
                      documentName:
                        "ProfileCometTimelineGridStoryAttachment_story",
                      fragmentName:
                        "ProfileCometTimelineGridStoryMapAttachmentStyle_styleTypeRenderer",
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
                      documentName:
                        "ProfileCometTimelineGridStoryAttachment_story",
                      fragmentName:
                        "ProfileCometTimelineGridStoryShareAttachmentStyle_styleTypeRenderer",
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
                      documentName:
                        "ProfileCometTimelineGridStoryAttachment_story",
                      fragmentName:
                        "ProfileCometTimelineGridStoryFunFactsPromptAttachmentStyle_styleTypeRenderer",
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
                      documentName:
                        "ProfileCometTimelineGridStoryAttachment_story",
                      fragmentName:
                        "ProfileCometTimelineGridStory3DPhotoAttachmentStyle_styleTypeRenderer",
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
                      documentName:
                        "ProfileCometTimelineGridStoryAttachment_story",
                      fragmentName:
                        "ProfileCometTimelineGridStory360PhotoAttachmentStyle_styleTypeRenderer",
                      fragmentPropName: "styleTypeRenderer",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "StoryAttachment360PhotoStyleRenderer",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        Wa = [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "node",
            plural: !1,
            selections: [D, N, H, O, P, Q, R, S, T],
            storageKey: null,
          },
        ],
        Xa = [{ kind: "Literal", name: "first", value: 8 }],
        Ya = [J, { kind: "Literal", name: "width", value: 500 }],
        Za = [
          {
            alias: null,
            args: null,
            concreteType: "FunFactPrompt",
            kind: "LinkedField",
            name: "fun_fact_prompt",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "fun_fact_prompt_title",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "emoji",
                storageKey: null,
              },
              s,
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            ba,
            ca,
            da,
            ea,
            fa,
            ga,
            ha,
            ia,
            ja,
          ],
          kind: "Fragment",
          metadata: null,
          name: "ComposerStoryCreateMutation",
          selections: [
            {
              alias: null,
              args: ka,
              concreteType: "StoryCreateResponsePayload",
              kind: "LinkedField",
              name: "story_create",
              plural: !1,
              selections: [
                la,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "story",
                  plural: !1,
                  selections: [
                    s,
                    t,
                    ma,
                    na,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "default_actor",
                      plural: !1,
                      selections: u,
                      storageKey: null,
                    },
                    {
                      condition: "isSocialLearning",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        w,
                        r,
                        {
                          alias: null,
                          args: null,
                          concreteType: "SocialLearningInfoUnitModule",
                          kind: "LinkedField",
                          name: "social_learning_info_unit_module",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "LearningCourseInfo",
                              kind: "LinkedField",
                              name: "info",
                              plural: !1,
                              selections: [
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "GroupsCometSocialLearningUnitCourseProgress_courseInfo",
                                },
                              ],
                              storageKey: null,
                            },
                            oa,
                            {
                              alias: null,
                              args: null,
                              concreteType: "LearningCourseUnit",
                              kind: "LinkedField",
                              name: "unit",
                              plural: !1,
                              selections: [
                                s,
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "GroupsCometSocialLearningLeftRailUnit_unit",
                                },
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "GroupsCometSocialLearningUnitList_unit",
                                },
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "GroupsCometSocialLearningUnit_unit",
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        pa,
                      ],
                    },
                    {
                      condition: "isGroup",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "to",
                          plural: !1,
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "GroupsCometOnboardingRHCCard_group",
                            },
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "GroupsGeminiFeedReminders_group",
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                s,
                                ra,
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "useGroupsCometMallTabs_group",
                                },
                                {
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "count",
                                      value: 10,
                                    },
                                    sa,
                                  ],
                                  kind: "FragmentSpread",
                                  name: "GroupRoomTab_group",
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Group",
                                  kind: "LinkedField",
                                  name: "if_viewer_can_see_rooms_and_chats_with_hashtag",
                                  plural: !1,
                                  selections: [
                                    {
                                      args: [sa],
                                      kind: "FragmentSpread",
                                      name: "GroupsCometRoomsAndChatsRoomsUnitContent_group",
                                    },
                                    {
                                      args: [B],
                                      kind: "FragmentSpread",
                                      name: "GroupsCometRoomsWithHashtagRHCCardContent_group",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Group",
                                  kind: "LinkedField",
                                  name: "if_viewer_can_see_pending_forum_post_experience",
                                  plural: !1,
                                  selections: [
                                    {
                                      args: null,
                                      kind: "FragmentSpread",
                                      name: "GroupsCometFeedPendingPostsSection_group",
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: "Group",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                    {
                      kind: "InlineDataFragmentSpread",
                      name: "groupsCometComposerDecoratePushPageOnComplete_story",
                      selections: [
                        {
                          alias: null,
                          args: ta,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "composer_end_page_renderer",
                          plural: !1,
                          selections: [ua, va],
                          storageKey:
                            'composer_end_page_renderer(supported:["CommunityParticipationQuestionsComposerPageRenderer","ComposerEndPageGroupRoomLobbyRenderer"])',
                        },
                      ],
                    },
                  ],
                  storageKey: null,
                },
                {
                  condition: "isFeed",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "NewsFeedEdge",
                      kind: "LinkedField",
                      name: "feed_story_edge",
                      plural: !1,
                      selections: [
                        C,
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometNewsFeedUnit_edge",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isGroup",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "GroupFeedEdge",
                      kind: "LinkedField",
                      name: "group_feed_story_edge",
                      plural: !1,
                      selections: [
                        C,
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            D,
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "CometFeedUnitStoryStrategy_feedUnit",
                            },
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "CometFeedUnitContainerSection_feedUnit",
                            },
                            wa,
                            {
                              kind: "InlineFragment",
                              selections: [
                                E,
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "GroupsCometSectionHeader_groupsSectionHeaderUnit",
                                },
                              ],
                              type: "GroupsSectionHeaderUnit",
                              abstractKey: null,
                            },
                            F,
                            {
                              kind: "InlineFragment",
                              selections: [
                                s,
                                {
                                  alias: "album_attachments",
                                  args: xa,
                                  concreteType: "StoryAttachment",
                                  kind: "LinkedField",
                                  name: "attachments",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "SubattachmentsConnection",
                                      kind: "LinkedField",
                                      name: "all_subattachments",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "SubattachmentsEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "StoryAttachment",
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: ya,
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: 'attachments(if_style:"album")',
                                },
                                {
                                  alias: "photo_attachments",
                                  args: null,
                                  concreteType: "StoryAttachment",
                                  kind: "LinkedField",
                                  name: "attachments",
                                  plural: !0,
                                  selections: ya,
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
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isTimeline",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "TimelineFeedUnitsEdge",
                      kind: "LinkedField",
                      name: "timeline_feed_units_edge",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            F,
                            {
                              kind: "InlineFragment",
                              selections: u,
                              type: "Story",
                              abstractKey: null,
                            },
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "ProfileCometTimelineGridStory_story",
                            },
                            {
                              kind: "InlineDataFragmentSpread",
                              name: "groupTimelineStories_story",
                              selections: [
                                {
                                  kind: "InlineFragment",
                                  selections: [s, za, Aa],
                                  type: "Story",
                                  abstractKey: null,
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
                },
                {
                  condition: "isFundraiser",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "FundraiserWithPresenceToFeedPostsEdge",
                      kind: "LinkedField",
                      name: "fundraiser_feed_story_edge",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Story",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: Ba,
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isPageNewsFeed",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "PagesNewsFeedEdge",
                      kind: "LinkedField",
                      name: "pages_news_feed_edge",
                      plural: !1,
                      selections: Ca,
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isProfileReviews",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "TimelineFeedUnitsEdge",
                      kind: "LinkedField",
                      name: "profile_review_edge",
                      plural: !1,
                      selections: Ca,
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isFunFactPost",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "user",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "ProfileCometAppCollectionFunFactsRendererSection_user",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                },
                Da,
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
            l,
            f,
            b,
            c,
            d,
            e,
            g,
            h,
            i,
            j,
            ha,
            fa,
            ga,
            ja,
            m,
            o,
            n,
            p,
            da,
            ca,
            q,
            ba,
            ea,
            a,
            ia,
            k,
          ],
          kind: "Operation",
          name: "ComposerStoryCreateMutation",
          selections: [
            {
              alias: null,
              args: ka,
              concreteType: "StoryCreateResponsePayload",
              kind: "LinkedField",
              name: "story_create",
              plural: !1,
              selections: [
                la,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "story",
                  plural: !1,
                  selections: [
                    s,
                    t,
                    ma,
                    na,
                    Ea,
                    {
                      alias: null,
                      args: ta,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "composer_end_page_renderer",
                      plural: !1,
                      selections: [D, ua, va],
                      storageKey:
                        'composer_end_page_renderer(supported:["CommunityParticipationQuestionsComposerPageRenderer","ComposerEndPageGroupRoomLobbyRenderer"])',
                    },
                    {
                      condition: "isSocialLearning",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        w,
                        r,
                        {
                          alias: null,
                          args: null,
                          concreteType: "SocialLearningInfoUnitModule",
                          kind: "LinkedField",
                          name: "social_learning_info_unit_module",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "LearningCourseInfo",
                              kind: "LinkedField",
                              name: "info",
                              plural: !1,
                              selections: [
                                {
                                  alias: "completedRequiredUnits",
                                  args: null,
                                  kind: "ScalarField",
                                  name: "completed_required_units_count",
                                  storageKey: null,
                                },
                                {
                                  alias: "totalRequiredUnits",
                                  args: null,
                                  kind: "ScalarField",
                                  name: "required_units_count",
                                  storageKey: null,
                                },
                                {
                                  alias: "unitProgressText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "UNIT_PROGRESS",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"UNIT_PROGRESS")',
                                },
                                s,
                              ],
                              storageKey: null,
                            },
                            oa,
                            {
                              alias: null,
                              args: null,
                              concreteType: "LearningCourseUnit",
                              kind: "LinkedField",
                              name: "unit",
                              plural: !1,
                              selections: [
                                s,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_synchronizing",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_optional",
                                  storageKey: null,
                                },
                                {
                                  alias: "makeUnitOptionalText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "MAKE_UNIT_OPTIONAL",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"MAKE_UNIT_OPTIONAL")',
                                },
                                {
                                  alias: "makeUnitOptionalToastText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "MAKE_UNIT_OPTIONAL_TOAST",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"MAKE_UNIT_OPTIONAL_TOAST")',
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "LearningCourseInfo",
                                  kind: "LinkedField",
                                  name: "learning_course_info",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: "reorderPostsDialogTitleText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "REORDER_POSTS_DIALOG_TITLE",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"REORDER_POSTS_DIALOG_TITLE")',
                                    },
                                    {
                                      alias: "reorderPostsDialogMenuItemText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "REORDER_POSTS_MENU_ITEM",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"REORDER_POSTS_MENU_ITEM")',
                                    },
                                    s,
                                    Fa,
                                    Ga,
                                    {
                                      alias: "deleteSyncedUnitErrorText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "DELETE_SYNCED_UNIT_ERROR",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"DELETE_SYNCED_UNIT_ERROR")',
                                    },
                                    {
                                      alias: "editUnitMenuItemText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "EDIT_UNIT_MENU_ITEM",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"EDIT_UNIT_MENU_ITEM")',
                                    },
                                    {
                                      alias: "unitHeaderExpandedTitleText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "UNIT_HEADER_EXPANDED_TITLE",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"UNIT_HEADER_EXPANDED_TITLE")',
                                    },
                                    {
                                      alias:
                                        "unitHeaderExpandedDescriptionText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value:
                                            "UNIT_HEADER_EXPANDED_DESCRIPTION",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"UNIT_HEADER_EXPANDED_DESCRIPTION")',
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: "modules",
                                  args: null,
                                  concreteType:
                                    "LearningCourseUnitModulesConnection",
                                  kind: "LinkedField",
                                  name: "learning_course_unit_modules",
                                  plural: !1,
                                  selections: [
                                    A,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "LearningCourseUnitModulesEdge",
                                      kind: "LinkedField",
                                      name: "edges",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "LearningCourseModule",
                                          kind: "LinkedField",
                                          name: "node",
                                          plural: !1,
                                          selections: [
                                            s,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "TextWithEntities",
                                              kind: "LinkedField",
                                              name: "name_with_sync_source_attribution",
                                              plural: !1,
                                              selections: v,
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
                                                Ha,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "Story",
                                                  kind: "LinkedField",
                                                  name: "attached_story",
                                                  plural: !1,
                                                  selections: [t, s],
                                                  storageKey: null,
                                                },
                                                s,
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
                                  alias: "learningCourseInfo",
                                  args: null,
                                  concreteType: "LearningCourseInfo",
                                  kind: "LinkedField",
                                  name: "learning_course_info",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: "deleteUnitHeaderText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "DELETE_UNIT_HEADER",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"DELETE_UNIT_HEADER")',
                                    },
                                    {
                                      alias: "deleteUnitBodyText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "DELETE_UNIT_BODY",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"DELETE_UNIT_BODY")',
                                    },
                                    Ga,
                                    s,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "delete_synced_headline",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "delete_synced_text",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "description",
                                  storageKey: null,
                                },
                                I,
                                {
                                  alias: "unitSavedToastText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "UNIT_SAVED_TOAST",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"UNIT_SAVED_TOAST")',
                                },
                                {
                                  alias: "unitTitleText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "UNIT_TITLE_SHOW_OPTIONAL",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"UNIT_TITLE_SHOW_OPTIONAL")',
                                },
                                {
                                  alias: "giveUnitFeedbackPopoverText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "GIVE_UNIT_FEEDBACK_POPOVER",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"GIVE_UNIT_FEEDBACK_POPOVER")',
                                },
                                {
                                  alias: "modulePreviews",
                                  args: [Ia],
                                  concreteType:
                                    "LearningCourseUnitModulesConnection",
                                  kind: "LinkedField",
                                  name: "learning_course_unit_modules",
                                  plural: !1,
                                  selections: [A, z],
                                  storageKey:
                                    "learning_course_unit_modules(first:3)",
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "unpublished_content_type",
                                  storageKey: null,
                                },
                                {
                                  alias: "emptyUnitMessageText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "EMPTY_UNIT_MESSAGE",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"EMPTY_UNIT_MESSAGE")',
                                },
                                {
                                  alias: "emptyUnitSecondaryMessageText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "EMPTY_UNIT_SECONDARY_MESSAGE",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"EMPTY_UNIT_SECONDARY_MESSAGE")',
                                },
                                {
                                  alias: "learningCourseUnitModules",
                                  args: null,
                                  concreteType:
                                    "LearningCourseUnitModulesConnection",
                                  kind: "LinkedField",
                                  name: "learning_course_unit_modules",
                                  plural: !1,
                                  selections: [z],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "LearningCourseUnitModulesConnection",
                                  kind: "LinkedField",
                                  name: "learning_course_unit_modules",
                                  plural: !1,
                                  selections: qa,
                                  storageKey: null,
                                },
                                {
                                  alias: "completedRequiredPostsCount",
                                  args: null,
                                  kind: "ScalarField",
                                  name: "completed_required_modules_count",
                                  storageKey: null,
                                },
                                {
                                  alias: "requiredPostsCount",
                                  args: null,
                                  kind: "ScalarField",
                                  name: "required_modules_count",
                                  storageKey: null,
                                },
                                {
                                  alias: "showCompletion",
                                  args: null,
                                  kind: "ScalarField",
                                  name: "show_completion",
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
                                          selections: G,
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
                                            D,
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometFeedUFI_feedback",
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
                                                  documentName:
                                                    "CometFeedUFI_feedback",
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
                                        s,
                                      ],
                                      storageKey: null,
                                    },
                                    s,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "has_recommended_posts",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        pa,
                      ],
                    },
                    {
                      condition: "isGroup",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "to",
                          plural: !1,
                          selections: [
                            D,
                            s,
                            {
                              kind: "InlineFragment",
                              selections: [
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
                                        D,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "TextWithEntities",
                                          kind: "LinkedField",
                                          name: "description",
                                          plural: !1,
                                          selections: v,
                                          storageKey: null,
                                        },
                                        E,
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
                                      selections: [D, E],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "wizard_title",
                                      plural: !1,
                                      selections: v,
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "wizard_subtitle",
                                      plural: !1,
                                      selections: v,
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
                                        D,
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
                                  selections: G,
                                  storageKey: null,
                                },
                                Ea,
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "first",
                                      value: 1,
                                    },
                                  ],
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
                                  selections: G,
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "work_group_reminder_list_renderer",
                                  plural: !0,
                                  selections: [
                                    D,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "GroupsGeminiFeedReminders_group",
                                          fragmentName:
                                            "GroupsGeminiScheduledPostsReminderRenderer_reminderRenderer",
                                          fragmentPropName: "reminderRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometGroupScheduledPostsRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "GroupsGeminiFeedReminders_group",
                                          fragmentName:
                                            "GroupsGeminiPendingMembersReminderRenderer_reminderRenderer",
                                          fragmentPropName: "reminderRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometGroupPendingMembersReminderRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "GroupsGeminiFeedReminders_group",
                                          fragmentName:
                                            "GroupsGeminiPendingPostsReminderRenderer_reminderRenderer",
                                          fragmentPropName: "reminderRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometGroupPendingPostsReminderRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "GroupsGeminiFeedReminders_group",
                                          fragmentName:
                                            "GroupsGeminiDraftPostsReminderRenderer_reminderRenderer",
                                          fragmentPropName: "reminderRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometGroupDraftPostsReminderRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "GroupsGeminiFeedReminders_group",
                                          fragmentName:
                                            "GroupsGeminiDraftedForYouReminderRenderer_reminderRenderer",
                                          fragmentPropName: "reminderRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometGroupWorkDraftedForYouPostsReminderRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "GroupsGeminiFeedReminders_group",
                                          fragmentName:
                                            "GroupsGeminiDraftedForOthersReminderRenderer_reminderRenderer",
                                          fragmentPropName: "reminderRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometGroupWorkDraftedForOthersPostsReminderRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "GroupsGeminiFeedReminders_group",
                                          fragmentName:
                                            "GroupsGeminiDeclinedPostsReminderRenderer_reminderRenderer",
                                          fragmentPropName: "reminderRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometGroupDeclinedPostsReminderRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "GroupsGeminiFeedReminders_group",
                                          fragmentName:
                                            "GroupsGeminiRemovedPostsReminderRenderer_reminderRenderer",
                                          fragmentPropName: "reminderRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometGroupRemovedPostsReminderRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "GroupsGeminiFeedReminders_group",
                                          fragmentName:
                                            "GroupsGeminiPendingShiftCoversReminderRenderer_reminderRenderer",
                                          fragmentPropName: "reminderRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "XFBCometGroupShiftCoverRequestsReminderRenderer",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                ra,
                                Ja,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "GroupContentViewsConnection",
                                  kind: "LinkedField",
                                  name: "group_content_views",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "GroupContentViewsEdge",
                                      kind: "LinkedField",
                                      name: "edges",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "GroupContentView",
                                          kind: "LinkedField",
                                          name: "node",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "content_view_title",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "content_view_type",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "content_view_uri",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "is_default_selected_content_view",
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
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "SuggestedGroupRoom",
                                  kind: "LinkedField",
                                  name: "suggested_group_room",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "room_name",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "meta_text",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "suggestion_type",
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
                                      name: "height",
                                      value: 160,
                                    },
                                    J,
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 160,
                                    },
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "profile_picture",
                                  plural: !1,
                                  selections: y,
                                  storageKey: null,
                                },
                                I,
                                {
                                  alias: null,
                                  args: Ka,
                                  concreteType:
                                    "GroupJoinableVideoChatsConnection",
                                  kind: "LinkedField",
                                  name: "joinable_video_chats",
                                  plural: !1,
                                  selections: [
                                    {
                                      if: null,
                                      kind: "Stream",
                                      label:
                                        "GroupRoomTab_group$stream$GroupRoomTab_joinable_video_chats",
                                      metadata: null,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "GroupJoinableVideoChatsEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "MessengerCallInviteLink",
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: [
                                                s,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_invited",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "can_viewer_see_join_button_for_group_surface",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "group_room_type",
                                                  storageKey: null,
                                                },
                                                L,
                                                D,
                                              ],
                                              storageKey: null,
                                            },
                                            C,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      useCustomizedBatch: null,
                                    },
                                    {
                                      if: null,
                                      kind: "Defer",
                                      label:
                                        "GroupRoomTab_group$defer$GroupRoomTab_joinable_video_chats$page_info",
                                      selections: [M],
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: Ka,
                                  filters: La,
                                  handle: "connection",
                                  key: "GroupRoomTab_joinable_video_chats",
                                  kind: "LinkedHandle",
                                  name: "joinable_video_chats",
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Group",
                                  kind: "LinkedField",
                                  name: "if_viewer_can_see_rooms_and_chats_with_hashtag",
                                  plural: !1,
                                  selections: [
                                    s,
                                    {
                                      alias: "video_chats",
                                      args: [K, Ia, B],
                                      concreteType:
                                        "GroupJoinableVideoChatsConnection",
                                      kind: "LinkedField",
                                      name: "joinable_video_chats",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "GroupJoinableVideoChatsEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "MessengerCallInviteLink",
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: [s, L],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    Ja,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Group",
                                      kind: "LinkedField",
                                      name: "if_viewer_can_see_rooms_and_chats_tab",
                                      plural: !1,
                                      selections: G,
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Group",
                                      kind: "LinkedField",
                                      name: "if_viewer_can_create_open_group_video_room",
                                      plural: !1,
                                      selections: G,
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Group",
                                      kind: "LinkedField",
                                      name: "if_viewer_can_create_private_group_video_room",
                                      plural: !1,
                                      selections: G,
                                      storageKey: null,
                                    },
                                    {
                                      alias: "rooms",
                                      args: Ma,
                                      concreteType:
                                        "GroupJoinableVideoChatsConnection",
                                      kind: "LinkedField",
                                      name: "joinable_video_chats",
                                      plural: !1,
                                      selections: [
                                        A,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "GroupJoinableVideoChatsEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "MessengerCallInviteLink",
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: [s, L, D],
                                              storageKey: null,
                                            },
                                            C,
                                          ],
                                          storageKey: null,
                                        },
                                        M,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: "rooms",
                                      args: Ma,
                                      filters: La,
                                      handle: "connection",
                                      key: "GroupsCometRoomsWithHashtagRHCCard_rooms",
                                      kind: "LinkedHandle",
                                      name: "joinable_video_chats",
                                    },
                                    I,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Group",
                                  kind: "LinkedField",
                                  name: "if_viewer_can_see_pending_forum_post_experience",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Group",
                                      kind: "LinkedField",
                                      name: "if_viewer_can_see_pending_forum_post_experience",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "CometGroupForumPendingParticipationPostCardRenderer",
                                          kind: "LinkedField",
                                          name: "comet_pending_post_cards",
                                          plural: !1,
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "GroupsCometFeedPendingPostsSection_group",
                                              fragmentName:
                                                "GroupsCometForumPendingParticipationPostCardRenderer_cardRenderer",
                                              fragmentPropName: "cardRenderer",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        s,
                                      ],
                                      storageKey: null,
                                    },
                                    s,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: "Group",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  storageKey: null,
                },
                Da,
                {
                  condition: "isFeed",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "NewsFeedEdge",
                      kind: "LinkedField",
                      name: "feed_story_edge",
                      plural: !1,
                      selections: [
                        C,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "category",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            D,
                            N,
                            H,
                            O,
                            P,
                            Q,
                            R,
                            S,
                            T,
                            {
                              kind: "InlineFragment",
                              selections: Na,
                              type: "QuickPromotionFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: Na,
                              type: "QuickPromotionNativeTemplateFeedUnit",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "FeedBackendData",
                          kind: "LinkedField",
                          name: "feed_backend_data",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "qid",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "original_qid",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "vsid",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "vspos",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "should_recent_vpv_fetch_tracking_data",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "deduplication_key",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isGroup",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "GroupFeedEdge",
                      kind: "LinkedField",
                      name: "group_feed_story_edge",
                      plural: !1,
                      selections: [
                        C,
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            D,
                            N,
                            {
                              kind: "InlineFragment",
                              selections: [
                                s,
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
                                    s,
                                    {
                                      alias: null,
                                      args: U,
                                      concreteType: "CometStorySections",
                                      kind: "LinkedField",
                                      name: "comet_sections",
                                      plural: !1,
                                      selections: [Oa, Pa],
                                      storageKey: null,
                                    },
                                    V,
                                    Qa,
                                    {
                                      kind: "ClientExtension",
                                      selections: [W],
                                    },
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
                                        D,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "triggers",
                                          plural: !0,
                                          selections: [
                                            D,
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
                                  args: U,
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
                                        D,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometFeedStory_story",
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
                                              documentName:
                                                "CometFeedStory_story",
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
                                        D,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometFeedStory_story__layout",
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
                                              documentName:
                                                "CometFeedStory_story__layout",
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
                                              documentName:
                                                "CometFeedStory_story__layout",
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
                                          value: [
                                            "CometFeedStoryCopyrightViolationHeaderStrategy",
                                          ],
                                        },
                                      ],
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "copyright_violation_header",
                                      plural: !1,
                                      selections: [
                                        D,
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
                                        D,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                              documentName:
                                                "CometFeedStoryHeaderSection_story",
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
                                    Oa,
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
                                        D,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometFeedStoryAYMTFooterSection_story",
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
                                              documentName:
                                                "CometFeedStoryAYMTFooterSection_story",
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
                                              documentName:
                                                "CometFeedStoryAYMTFooterSection_story",
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
                                              documentName:
                                                "CometFeedStoryAYMTFooterSection_story",
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
                                    Pa,
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
                                        D,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                              documentName:
                                                "CometFeedStoryFeedbackSection_story",
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
                                        D,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometFeedStoryOuterFooterSection_story",
                                              fragmentName:
                                                "CometFeedStoryMisinformationRelatedArticleStrategy_misinfoRelatedArticles",
                                              fragmentPropName:
                                                "misinfoRelatedArticles",
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
                                              documentName:
                                                "CometFeedStoryOuterFooterSection_story",
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
                                              documentName:
                                                "CometFeedStoryOuterFooterSection_story",
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
                                              documentName:
                                                "CometFeedStoryOuterFooterSection_story",
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
                                              documentName:
                                                "CometFeedStoryOuterFooterSection_story",
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
                                              documentName:
                                                "CometFeedStoryOuterFooterSection_story",
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
                                              documentName:
                                                "CometFeedStoryOuterFooterSection_story",
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
                                              documentName:
                                                "CometFeedStoryOuterFooterSection_story",
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
                                          value: [
                                            "CometStoryDefaultCallToActionStrategy",
                                          ],
                                        },
                                      ],
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "call_to_action",
                                      plural: !1,
                                      selections: [
                                        D,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometFeedStoryCallToActionSection_story",
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
                                          value: [
                                            "CometStoryInformTreatmentPostCoverStrategy",
                                          ],
                                        },
                                      ],
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "post_inform_treatment",
                                      plural: !1,
                                      selections: [
                                        D,
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
                                V,
                                Qa,
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
                                    s,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Group",
                                      kind: "LinkedField",
                                      name: "associated_group",
                                      plural: !1,
                                      selections: u,
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
                                    Z,
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
                                  alias: "album_attachments",
                                  args: xa,
                                  concreteType: "StoryAttachment",
                                  kind: "LinkedField",
                                  name: "attachments",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "SubattachmentsConnection",
                                      kind: "LinkedField",
                                      name: "all_subattachments",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "SubattachmentsEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "StoryAttachment",
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: X,
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: 'attachments(if_style:"album")',
                                },
                                {
                                  alias: "photo_attachments",
                                  args: null,
                                  concreteType: "StoryAttachment",
                                  kind: "LinkedField",
                                  name: "attachments",
                                  plural: !0,
                                  selections: X,
                                  storageKey: null,
                                },
                                {
                                  kind: "ClientExtension",
                                  selections: [
                                    W,
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
                                      concreteType:
                                        "OptimisticMediaAttachmentData",
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
                                        $,
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
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometFeedUnitStoryStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "Story",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometFeedUnitGoodwillMemoryStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GoodwillCometStory",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometPYMKQPFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "PaginatedPeopleYouMayKnowFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometFriendRequestsFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "FriendRequestsFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometFeedUnitQuickPromotionStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "QuickPromotionNativeTemplateFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "GroupsCometGYSJFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GroupsYouShouldJoinFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometGroupsSuggestionFeedUnitStrategy_unit",
                                  fragmentPropName: "unit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "GroupsSuggestionUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometPYMIQPFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "PaginatedGroupsPeopleYouMayInviteFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometPYMAQPFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "PagesYouMayAdvertiseFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "GeminiPYSFQPFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "PeopleYouShouldFollowAtWorkFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometSPFFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "SuggestedPublicEntitiesToFollowFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CoronavirusCommunityHelpFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CoronavirusCommunityHelpFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometMarketplaceShowcaseFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "ShowcaseMarketplaceFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometEndOfFeedUpsellStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "EndOfFeedUpsellFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometInterestBasedGYSJFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "InterestBasedGYSJFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedUnitContainerSection_feedUnit",
                                  fragmentName:
                                    "CometInterestBasedIFRFeedUnitStrategy_feedUnit",
                                  fragmentPropName: "feedUnit",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "InterestBasedIFRFeedUnit",
                              abstractKey: null,
                            },
                            wa,
                            {
                              kind: "InlineFragment",
                              selections: [
                                E,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Group",
                                  kind: "LinkedField",
                                  name: "target_group",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "can_viewer_see_sorting_switcher",
                                      storageKey: null,
                                    },
                                    s,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "StoryHeader",
                                  kind: "LinkedField",
                                  name: "story_header",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "style_infos",
                                      plural: !0,
                                      selections: [
                                        D,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "GroupFeedSortingSwitcher",
                                              kind: "LinkedField",
                                              name: "viewer_available_sorting_switchers",
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "option_description",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "option_name",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "sorting_setting",
                                                  storageKey: null,
                                                },
                                                D,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          type: "GroupsSectionHeaderStyleInfo",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: "GroupsSectionHeaderUnit",
                              abstractKey: null,
                            },
                            H,
                            O,
                            P,
                            Q,
                            R,
                            S,
                            T,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isTimeline",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "TimelineFeedUnitsEdge",
                      kind: "LinkedField",
                      name: "timeline_feed_units_edge",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            D,
                            N,
                            H,
                            {
                              kind: "InlineFragment",
                              selections: [
                                s,
                                {
                                  alias: null,
                                  args: U,
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
                                        D,
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
                                            "CometFeedStoryPrivacySelectorStrategy",
                                            "CometFeedStoryAudienceStrategy",
                                          ],
                                        },
                                      ],
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "audience",
                                      plural: !1,
                                      selections: [
                                        D,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometFeedStoryAudienceSection_story",
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
                                              documentName:
                                                "CometFeedStoryAudienceSection_story",
                                              fragmentName:
                                                "CometFeedStoryAudienceStrategy_audience",
                                              fragmentPropName: "audience",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "CometFeedStoryAudienceStrategy",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey:
                                        'audience(supported:["CometFeedStoryPrivacySelectorStrategy","CometFeedStoryAudienceStrategy"])',
                                    },
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "supported",
                                          value: [
                                            "CometFeedStoryBackdatedTimestampStrategy",
                                            "CometFeedStoryScheduledTimestampStrategy",
                                            "CometFeedStoryMinimizedTimestampStrategy",
                                            "CometFeedStoryTimestampStrategy",
                                          ],
                                        },
                                      ],
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "timestamp",
                                      plural: !1,
                                      selections: [
                                        D,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometFeedStoryTimestampSection_story",
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
                                              documentName:
                                                "CometFeedStoryTimestampSection_story",
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
                                              documentName:
                                                "CometFeedStoryTimestampSection_story",
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
                                              documentName:
                                                "CometFeedStoryTimestampSection_story",
                                              fragmentName:
                                                "CometFeedStoryTimestampStrategy_timestamp",
                                              fragmentPropName: "timestamp",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "CometFeedStoryTimestampStrategy",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey:
                                        'timestamp(supported:["CometFeedStoryBackdatedTimestampStrategy","CometFeedStoryScheduledTimestampStrategy","CometFeedStoryMinimizedTimestampStrategy","CometFeedStoryTimestampStrategy"])',
                                    },
                                    Y,
                                    Ua,
                                  ],
                                  storageKey: null,
                                },
                                V,
                                w,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "summary",
                                  plural: !1,
                                  selections: v,
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "site",
                                      value: "www",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "url",
                                  storageKey: 'url(site:"www")',
                                },
                                E,
                                Va,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Story",
                                  kind: "LinkedField",
                                  name: "attached_story",
                                  plural: !1,
                                  selections: [
                                    Va,
                                    {
                                      alias: null,
                                      args: U,
                                      concreteType: "CometStorySections",
                                      kind: "LinkedField",
                                      name: "comet_sections",
                                      plural: !1,
                                      selections: [Y, Ua],
                                      storageKey: null,
                                    },
                                    s,
                                  ],
                                  storageKey: null,
                                },
                                za,
                                Aa,
                              ],
                              type: "Story",
                              abstractKey: null,
                            },
                            O,
                            P,
                            Q,
                            R,
                            S,
                            T,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isFundraiser",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "FundraiserWithPresenceToFeedPostsEdge",
                      kind: "LinkedField",
                      name: "fundraiser_feed_story_edge",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Story",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [Ha, s],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isPageNewsFeed",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "PagesNewsFeedEdge",
                      kind: "LinkedField",
                      name: "pages_news_feed_edge",
                      plural: !1,
                      selections: Wa,
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isProfileReviews",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "TimelineFeedUnitsEdge",
                      kind: "LinkedField",
                      name: "profile_review_edge",
                      plural: !1,
                      selections: Wa,
                      storageKey: null,
                    },
                  ],
                },
                {
                  condition: "isFunFactPost",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "user",
                      plural: !1,
                      selections: [
                        {
                          alias: "pageAnswers",
                          args: Xa,
                          concreteType: "UserToFunFactAnswersConnection",
                          kind: "LinkedField",
                          name: "fun_fact_answers",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "UserToFunFactAnswersEdge",
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
                                    w,
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
                                          name: "avatar_story_text_format_id",
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
                                        {
                                          alias: null,
                                          args: Ya,
                                          concreteType: "Image",
                                          kind: "LinkedField",
                                          name: "background_image",
                                          plural: !1,
                                          selections: y,
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "color",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "font_weight",
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
                                          args: Ya,
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
                                          name: "text_align",
                                          storageKey: null,
                                        },
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
                                          name: "style_infos",
                                          plural: !0,
                                          selections: [
                                            D,
                                            {
                                              kind: "InlineFragment",
                                              selections: Za,
                                              type: "AskedFunFactPromptAttachmentStyleInfo",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: Za,
                                              type: "FunFactPromptAttachmentStyleInfo",
                                              abstractKey: null,
                                            },
                                            O,
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryAttachment",
                                          kind: "LinkedField",
                                          name: "subattachments",
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
                                                D,
                                                {
                                                  alias: null,
                                                  args: [
                                                    {
                                                      kind: "Literal",
                                                      name: "height",
                                                      value: 150,
                                                    },
                                                    J,
                                                    {
                                                      kind: "Literal",
                                                      name: "width",
                                                      value: 150,
                                                    },
                                                  ],
                                                  concreteType: "Image",
                                                  kind: "LinkedField",
                                                  name: "image",
                                                  plural: !1,
                                                  selections: y,
                                                  storageKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [x],
                                                  type: "Photo",
                                                  abstractKey: null,
                                                },
                                                O,
                                                Ra,
                                                Sa,
                                                Ta,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    t,
                                    s,
                                    D,
                                  ],
                                  storageKey: null,
                                },
                                C,
                              ],
                              storageKey: null,
                            },
                            M,
                          ],
                          storageKey: "fun_fact_answers(first:8)",
                        },
                        {
                          alias: "pageAnswers",
                          args: Xa,
                          filters: null,
                          handle: "connection",
                          key: "ProfileCometAppCollectionFunFactsRendererItems_pageAnswers",
                          kind: "LinkedHandle",
                          name: "fun_fact_answers",
                        },
                        s,
                      ],
                      storageKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4136710066412419",
          metadata: {},
          name: "ComposerStoryCreateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    d.exports = a;
  },
  null
);
__d(
  "ComposerStoryEditMutation.graphql",
  ["CometFeedUnit_feedUnit$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        h = { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        j = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        k = { defaultValue: null, kind: "LocalArgument", name: "input" },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "isGroupViewerContent",
        },
        m = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "isSocialLearning",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "privacySelectorRenderLocation",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        p = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        q = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        r = [{ kind: "Variable", name: "data", variableName: "input" }],
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "hidden_results",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "poll_answers_state",
              storageKey: null,
            },
          ],
          type: "Question",
          abstractKey: null,
        },
        u = [s],
        v = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "post_content_state",
              storageKey: null,
            },
          ],
          type: "GroupPostStoryFeedback",
          abstractKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_id",
          storageKey: null,
        },
        x = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        y = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: x,
          storageKey: null,
        },
        z = {
          alias: null,
          args: null,
          concreteType: "LearningCourseModule",
          kind: "LinkedField",
          name: "module",
          plural: !1,
          selections: u,
          storageKey: null,
        },
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "thumbnail",
          plural: !1,
          selections: [A],
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          concreteType: "SocialLearningPost",
          kind: "LinkedField",
          name: "social_learning_post",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "content_type",
              storageKey: null,
            },
            {
              alias: "contentTypeText",
              args: [
                {
                  kind: "Literal",
                  name: "string_enum",
                  value: "POST_CONTENT_TYPE",
                },
              ],
              kind: "ScalarField",
              name: "social_learning_string",
              storageKey:
                'social_learning_string(string_enum:"POST_CONTENT_TYPE")',
            },
            B,
          ],
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        E = [
          {
            kind: "Variable",
            name: "location",
            variableName: "renderLocation",
          },
        ],
        F = {
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
            D,
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
        G = {
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
            D,
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
        H = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
        I = {
          alias: null,
          args: E,
          kind: "ScalarField",
          name: "should_host_actor_link_in_watch",
          storageKey: null,
        },
        J = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_id",
          storageKey: null,
        },
        K = { kind: "TypeDiscriminator", abstractKey: "__isNFXAction" };
      A = {
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
          A,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "width",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "context",
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        };
      K = {
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
              s,
              J,
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
                selections: [D, K, A, L, M, s],
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
                      D,
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
                  D,
                  K,
                  {
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "title",
                    plural: !1,
                    selections: x,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "subtitle",
                    plural: !1,
                    selections: x,
                    storageKey: null,
                  },
                  L,
                  M,
                  A,
                  s,
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      A = [D, s];
      var N = {
          alias: "deleteUnitButtonText",
          args: [
            {
              kind: "Literal",
              name: "string_enum",
              value: "DELETE_UNIT_BUTTON",
            },
          ],
          kind: "ScalarField",
          name: "social_learning_string",
          storageKey:
            'social_learning_string(string_enum:"DELETE_UNIT_BUTTON")',
        },
        O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        P = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      B = {
        alias: null,
        args: null,
        concreteType: "LearningCourseUnitModulesEdge",
        kind: "LinkedField",
        name: "edges",
        plural: !0,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "LearningCourseModule",
            kind: "LinkedField",
            name: "node",
            plural: !1,
            selections: [
              {
                alias: "contentType",
                args: null,
                kind: "ScalarField",
                name: "content_type",
                storageKey: null,
              },
              s,
              {
                alias: "isCompleted",
                args: null,
                kind: "ScalarField",
                name: "has_viewer_completed",
                storageKey: null,
              },
              P,
              {
                alias: "contentTypeText",
                args: [
                  {
                    kind: "Literal",
                    name: "string_enum",
                    value: "MODULE_CONTENT_TYPE",
                  },
                ],
                kind: "ScalarField",
                name: "social_learning_string",
                storageKey:
                  'social_learning_string(string_enum:"MODULE_CONTENT_TYPE")',
              },
              B,
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q],
          kind: "Fragment",
          metadata: null,
          name: "ComposerStoryEditMutation",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: "StoryEditResponsePayload",
              kind: "LinkedField",
              name: "story_edit",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "story",
                  plural: !1,
                  selections: [
                    s,
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometFeedUnitStoryStrategy_feedUnit",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometFeedUnitContainerSection_feedUnit",
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
                          name: "target",
                          plural: !1,
                          selections: [t],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      condition: "isGroupViewerContent",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "to",
                          plural: !1,
                          selections: [
                            {
                              kind: "InlineFragment",
                              selections: u,
                              type: "Group",
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
                          name: "story_feedback",
                          plural: !1,
                          selections: [v],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  storageKey: null,
                },
                {
                  condition: "isSocialLearning",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "story",
                      plural: !1,
                      selections: [
                        w,
                        y,
                        {
                          alias: null,
                          args: null,
                          concreteType: "SocialLearningInfoUnitModule",
                          kind: "LinkedField",
                          name: "social_learning_info_unit_module",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "LearningCourseInfo",
                              kind: "LinkedField",
                              name: "info",
                              plural: !1,
                              selections: [
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "GroupsCometSocialLearningUnitCourseProgress_courseInfo",
                                },
                              ],
                              storageKey: null,
                            },
                            z,
                            {
                              alias: null,
                              args: null,
                              concreteType: "LearningCourseUnit",
                              kind: "LinkedField",
                              name: "unit",
                              plural: !1,
                              selections: [
                                s,
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "GroupsCometSocialLearningLeftRailUnit_unit",
                                },
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "GroupsCometSocialLearningUnitList_unit",
                                },
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "GroupsCometSocialLearningUnit_unit",
                                },
                              ],
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
          argumentDefinitions: [k, g, c, d, e, f, h, i, j, p, n, o, q, a, l, m],
          kind: "Operation",
          name: "ComposerStoryEditMutation",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: "StoryEditResponsePayload",
              kind: "LinkedField",
              name: "story_edit",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "story",
                  plural: !1,
                  selections: [
                    s,
                    D,
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
                        s,
                        {
                          alias: null,
                          args: E,
                          concreteType: "CometStorySections",
                          kind: "LinkedField",
                          name: "comet_sections",
                          plural: !1,
                          selections: [F, G],
                          storageKey: null,
                        },
                        H,
                        I,
                        { kind: "ClientExtension", selections: [K] },
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
                            D,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "triggers",
                              plural: !0,
                              selections: [
                                D,
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
                      args: E,
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
                            D,
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
                            D,
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
                              value: [
                                "CometFeedStoryCopyrightViolationHeaderStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "copyright_violation_header",
                          plural: !1,
                          selections: [
                            D,
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
                            D,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                                  documentName:
                                    "CometFeedStoryHeaderSection_story",
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
                        F,
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
                            D,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryAYMTFooterSection_story",
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
                                  documentName:
                                    "CometFeedStoryAYMTFooterSection_story",
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
                                  documentName:
                                    "CometFeedStoryAYMTFooterSection_story",
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
                                  documentName:
                                    "CometFeedStoryAYMTFooterSection_story",
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
                        G,
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
                            D,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                                  documentName:
                                    "CometFeedStoryFeedbackSection_story",
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
                            D,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
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
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
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
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
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
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
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
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
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
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
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
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
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
                                  documentName:
                                    "CometFeedStoryOuterFooterSection_story",
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
                            D,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometFeedStoryCallToActionSection_story",
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
                              value: [
                                "CometStoryInformTreatmentPostCoverStrategy",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "post_inform_treatment",
                          plural: !1,
                          selections: [
                            D,
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
                    H,
                    I,
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
                        s,
                        {
                          alias: null,
                          args: null,
                          concreteType: "Group",
                          kind: "LinkedField",
                          name: "associated_group",
                          plural: !1,
                          selections: u,
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
                        L,
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
                          name: "target",
                          plural: !1,
                          selections: [D, t, s],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      kind: "ClientExtension",
                      selections: [
                        K,
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
                            M,
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
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometFeedUnitStoryStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "Story",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometFeedUnitGoodwillMemoryStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GoodwillCometStory",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometPYMKQPFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "PaginatedPeopleYouMayKnowFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometFriendRequestsFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "FriendRequestsFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometFeedUnitQuickPromotionStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "QuickPromotionNativeTemplateFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "GroupsCometGYSJFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GroupsYouShouldJoinFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometGroupsSuggestionFeedUnitStrategy_unit",
                              fragmentPropName: "unit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "GroupsSuggestionUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometPYMIQPFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "PaginatedGroupsPeopleYouMayInviteFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometPYMAQPFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "PagesYouMayAdvertiseFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "GeminiPYSFQPFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "PeopleYouShouldFollowAtWorkFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName: "CometSPFFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "SuggestedPublicEntitiesToFollowFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CoronavirusCommunityHelpFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "CoronavirusCommunityHelpFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometMarketplaceShowcaseFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ShowcaseMarketplaceFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometEndOfFeedUpsellStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "EndOfFeedUpsellFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometInterestBasedGYSJFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "InterestBasedGYSJFeedUnit",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedUnitContainerSection_feedUnit",
                              fragmentName:
                                "CometInterestBasedIFRFeedUnitStrategy_feedUnit",
                              fragmentPropName: "feedUnit",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "InterestBasedIFRFeedUnit",
                          abstractKey: null,
                        },
                      ],
                      type: "FeedUnit",
                      abstractKey: "__isFeedUnit",
                    },
                    {
                      condition: "isGroupViewerContent",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "to",
                          plural: !1,
                          selections: A,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "story_feedback",
                          plural: !1,
                          selections: [D, v],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  storageKey: null,
                },
                {
                  condition: "isSocialLearning",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "story",
                      plural: !1,
                      selections: [
                        w,
                        y,
                        {
                          alias: null,
                          args: null,
                          concreteType: "SocialLearningInfoUnitModule",
                          kind: "LinkedField",
                          name: "social_learning_info_unit_module",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "LearningCourseInfo",
                              kind: "LinkedField",
                              name: "info",
                              plural: !1,
                              selections: [
                                {
                                  alias: "completedRequiredUnits",
                                  args: null,
                                  kind: "ScalarField",
                                  name: "completed_required_units_count",
                                  storageKey: null,
                                },
                                {
                                  alias: "totalRequiredUnits",
                                  args: null,
                                  kind: "ScalarField",
                                  name: "required_units_count",
                                  storageKey: null,
                                },
                                {
                                  alias: "unitProgressText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "UNIT_PROGRESS",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"UNIT_PROGRESS")',
                                },
                                s,
                              ],
                              storageKey: null,
                            },
                            z,
                            {
                              alias: null,
                              args: null,
                              concreteType: "LearningCourseUnit",
                              kind: "LinkedField",
                              name: "unit",
                              plural: !1,
                              selections: [
                                s,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_synchronizing",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_optional",
                                  storageKey: null,
                                },
                                {
                                  alias: "makeUnitOptionalText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "MAKE_UNIT_OPTIONAL",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"MAKE_UNIT_OPTIONAL")',
                                },
                                {
                                  alias: "makeUnitOptionalToastText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "MAKE_UNIT_OPTIONAL_TOAST",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"MAKE_UNIT_OPTIONAL_TOAST")',
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "LearningCourseInfo",
                                  kind: "LinkedField",
                                  name: "learning_course_info",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: "reorderPostsDialogTitleText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "REORDER_POSTS_DIALOG_TITLE",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"REORDER_POSTS_DIALOG_TITLE")',
                                    },
                                    {
                                      alias: "reorderPostsDialogMenuItemText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "REORDER_POSTS_MENU_ITEM",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"REORDER_POSTS_MENU_ITEM")',
                                    },
                                    s,
                                    J,
                                    N,
                                    {
                                      alias: "deleteSyncedUnitErrorText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "DELETE_SYNCED_UNIT_ERROR",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"DELETE_SYNCED_UNIT_ERROR")',
                                    },
                                    {
                                      alias: "editUnitMenuItemText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "EDIT_UNIT_MENU_ITEM",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"EDIT_UNIT_MENU_ITEM")',
                                    },
                                    {
                                      alias: "unitHeaderExpandedTitleText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "UNIT_HEADER_EXPANDED_TITLE",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"UNIT_HEADER_EXPANDED_TITLE")',
                                    },
                                    {
                                      alias:
                                        "unitHeaderExpandedDescriptionText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value:
                                            "UNIT_HEADER_EXPANDED_DESCRIPTION",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"UNIT_HEADER_EXPANDED_DESCRIPTION")',
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: "modules",
                                  args: null,
                                  concreteType:
                                    "LearningCourseUnitModulesConnection",
                                  kind: "LinkedField",
                                  name: "learning_course_unit_modules",
                                  plural: !1,
                                  selections: [
                                    O,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "LearningCourseUnitModulesEdge",
                                      kind: "LinkedField",
                                      name: "edges",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "LearningCourseModule",
                                          kind: "LinkedField",
                                          name: "node",
                                          plural: !1,
                                          selections: [
                                            s,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "TextWithEntities",
                                              kind: "LinkedField",
                                              name: "name_with_sync_source_attribution",
                                              plural: !1,
                                              selections: x,
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
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      args: null,
                                                      fragment: b(
                                                        "CometFeedUnit_feedUnit$normalization.graphql"
                                                      ),
                                                      kind: "FragmentSpread",
                                                    },
                                                  ],
                                                  type: "FeedUnit",
                                                  abstractKey: "__isFeedUnit",
                                                },
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
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "url",
                                                      storageKey: null,
                                                    },
                                                    s,
                                                  ],
                                                  storageKey: null,
                                                },
                                                s,
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
                                  alias: "learningCourseInfo",
                                  args: null,
                                  concreteType: "LearningCourseInfo",
                                  kind: "LinkedField",
                                  name: "learning_course_info",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: "deleteUnitHeaderText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "DELETE_UNIT_HEADER",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"DELETE_UNIT_HEADER")',
                                    },
                                    {
                                      alias: "deleteUnitBodyText",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "string_enum",
                                          value: "DELETE_UNIT_BODY",
                                        },
                                      ],
                                      kind: "ScalarField",
                                      name: "social_learning_string",
                                      storageKey:
                                        'social_learning_string(string_enum:"DELETE_UNIT_BODY")',
                                    },
                                    N,
                                    s,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "delete_synced_headline",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "delete_synced_text",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "description",
                                  storageKey: null,
                                },
                                P,
                                {
                                  alias: "unitSavedToastText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "UNIT_SAVED_TOAST",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"UNIT_SAVED_TOAST")',
                                },
                                {
                                  alias: "unitTitleText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "UNIT_TITLE_SHOW_OPTIONAL",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"UNIT_TITLE_SHOW_OPTIONAL")',
                                },
                                {
                                  alias: "giveUnitFeedbackPopoverText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "GIVE_UNIT_FEEDBACK_POPOVER",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"GIVE_UNIT_FEEDBACK_POPOVER")',
                                },
                                {
                                  alias: "modulePreviews",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "first",
                                      value: 3,
                                    },
                                  ],
                                  concreteType:
                                    "LearningCourseUnitModulesConnection",
                                  kind: "LinkedField",
                                  name: "learning_course_unit_modules",
                                  plural: !1,
                                  selections: [O, B],
                                  storageKey:
                                    "learning_course_unit_modules(first:3)",
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "unpublished_content_type",
                                  storageKey: null,
                                },
                                {
                                  alias: "emptyUnitMessageText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "EMPTY_UNIT_MESSAGE",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"EMPTY_UNIT_MESSAGE")',
                                },
                                {
                                  alias: "emptyUnitSecondaryMessageText",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "string_enum",
                                      value: "EMPTY_UNIT_SECONDARY_MESSAGE",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "social_learning_string",
                                  storageKey:
                                    'social_learning_string(string_enum:"EMPTY_UNIT_SECONDARY_MESSAGE")',
                                },
                                {
                                  alias: "learningCourseUnitModules",
                                  args: null,
                                  concreteType:
                                    "LearningCourseUnitModulesConnection",
                                  kind: "LinkedField",
                                  name: "learning_course_unit_modules",
                                  plural: !1,
                                  selections: [B],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "LearningCourseUnitModulesConnection",
                                  kind: "LinkedField",
                                  name: "learning_course_unit_modules",
                                  plural: !1,
                                  selections: [O],
                                  storageKey: null,
                                },
                                {
                                  alias: "completedRequiredPostsCount",
                                  args: null,
                                  kind: "ScalarField",
                                  name: "completed_required_modules_count",
                                  storageKey: null,
                                },
                                {
                                  alias: "requiredPostsCount",
                                  args: null,
                                  kind: "ScalarField",
                                  name: "required_modules_count",
                                  storageKey: null,
                                },
                                {
                                  alias: "showCompletion",
                                  args: null,
                                  kind: "ScalarField",
                                  name: "show_completion",
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
                                          selections: A,
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
                                            D,
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometFeedUFI_feedback",
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
                                                  documentName:
                                                    "CometFeedUFI_feedback",
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
                                        s,
                                      ],
                                      storageKey: null,
                                    },
                                    s,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "has_recommended_posts",
                                  storageKey: null,
                                },
                              ],
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
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4260992890622861",
          metadata: {},
          name: "ComposerStoryEditMutation",
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
  "CometComposerPrivacyScope_scope.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "privacySelectorRenderLocation" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometComposerPrivacyScope_scope",
      selections: [
        {
          args: [
            {
              kind: "Variable",
              name: "renderLocation",
              variableName: "privacySelectorRenderLocation",
            },
            { kind: "Literal", name: "tags", value: [] },
          ],
          kind: "FragmentSpread",
          name: "CometPrivacySelectorForScope_scope",
        },
      ],
      type: "PrivacyScope",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometComposerFormattedTextArea_formattedTextPreset.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometComposerFormattedTextArea_formattedTextPreset",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "FeedComposerCometFormattedTextBackgroundRoot_data",
        },
      ],
      type: "TextFormatMetadata",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "FeedComposerCometFormattedTextBackgroundRoot_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "FeedComposerCometFormattedTextBackgroundRoot_data",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 500 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "background_image",
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
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "avatar_story_text_format_id",
          storageKey: null,
        },
      ],
      type: "TextFormatMetadata",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometStatusAreaTextData_formattedTextPreset.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometStatusAreaTextData_formattedTextPreset",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "color",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "InspirationsCustomFont",
          kind: "LinkedField",
          name: "inspirations_custom_font_object",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "font_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "preferred_font_size",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "avatar_story_text_format_id",
          storageKey: null,
        },
      ],
      type: "TextFormatMetadata",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometComposerSwatchPickerMenuUsingRelayEntrypointQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3946804712041150",
        metadata: {},
        name: "CometComposerSwatchPickerMenuUsingRelayEntrypointQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "FeedComposerCometStatusAreaClickHandler_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "FeedComposerCometStatusAreaClickHandler_viewer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "GeminiComposerRichTextPopovers_viewer",
        },
        {
          alias: "emoji_button",
          args: null,
          concreteType: "Viewer",
          kind: "LinkedField",
          name: "if_viewer_can_see_work_composer_floating_emoji_button",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "FeedComposerCometStatusAreaClickHandler_viewer",
              fragmentName:
                "FeedComposerCometStatusAreaClickHandler_viewerPlaceholder",
              fragmentPropName: "viewerPlaceholder",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: "hashtag_button",
          args: null,
          concreteType: "Viewer",
          kind: "LinkedField",
          name: "if_viewer_can_see_work_composer_floating_hashtag_button",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "FeedComposerCometStatusAreaClickHandler_viewer_hashtagButton",
              fragmentName:
                "FeedComposerCometStatusAreaClickHandler_viewerPlaceholder",
              fragmentPropName: "viewerPlaceholder",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
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
  "FeedComposerCometStatusAreaClickHandler_viewerPlaceholder.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "FeedComposerCometStatusAreaClickHandler_viewerPlaceholder",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
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
  "FeedComposerCometToolbar_composer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "FeedComposerCometToolbar_composer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useSproutsFromRelay_composer",
        },
      ],
      type: "FeedCometComposer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometComposerLifeEventCategoryListQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3423307831103704",
        metadata: {},
        name: "CometComposerLifeEventCategoryListQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometComposerLifeEventSubcategoryListQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3954041381349320",
        metadata: {},
        name: "CometComposerLifeEventSubcategoryListQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "FeedComposerSocialSentenceActivityObjectQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        b = [{ kind: "Variable", name: "id", variableName: "id" }],
        c = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
          ],
          type: "Profile",
          abstractKey: "__isProfile",
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FeedComposerSocialSentenceActivityObjectQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [c],
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
          name: "FeedComposerSocialSentenceActivityObjectQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
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
          id: "3943125312468338",
          metadata: {},
          name: "FeedComposerSocialSentenceActivityObjectQuery",
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
  "FeedComposerSocialSentenceTaggedUsersQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "ids" }],
        b = [{ kind: "Variable", name: "ids", variableName: "ids" }],
        c = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
          ],
          type: "Profile",
          abstractKey: "__isProfile",
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FeedComposerSocialSentenceTaggedUsersQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [c],
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
          name: "FeedComposerSocialSentenceTaggedUsersQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
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
          id: "4187037971328772",
          metadata: {},
          name: "FeedComposerSocialSentenceTaggedUsersQuery",
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
  "FeedComposerSocialSentenceWithActivityQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "activityLegacyID",
          },
        ],
        b = [
          {
            kind: "Variable",
            name: "legacy_api_id",
            variableName: "activityLegacyID",
          },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "omit_linking_verb",
          storageKey: null,
        },
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "template_string",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ActivityTemplateToken",
            kind: "LinkedField",
            name: "template_tokens",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "token_position",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "token_type",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        e = {
          alias: "previewTemplate",
          args: null,
          concreteType: "TaggableActivityPreviewTemplate",
          kind: "LinkedField",
          name: "preview_template",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        f = { kind: "Literal", name: "with_place", value: "SPECIFIC" },
        g = {
          alias: "previewTemplateWithPlace",
          args: [f],
          concreteType: "TaggableActivityPreviewTemplate",
          kind: "LinkedField",
          name: "preview_template",
          plural: !1,
          selections: d,
          storageKey: 'preview_template(with_place:"SPECIFIC")',
        },
        h = { kind: "Literal", name: "with_people", value: "SINGLE" },
        i = {
          alias: "previewTemplateWithPerson",
          args: [h],
          concreteType: "TaggableActivityPreviewTemplate",
          kind: "LinkedField",
          name: "preview_template",
          plural: !1,
          selections: d,
          storageKey: 'preview_template(with_people:"SINGLE")',
        },
        j = { kind: "Literal", name: "with_people", value: "MULTIPLE" },
        k = {
          alias: "previewTemplateWithPeople",
          args: [j],
          concreteType: "TaggableActivityPreviewTemplate",
          kind: "LinkedField",
          name: "preview_template",
          plural: !1,
          selections: d,
          storageKey: 'preview_template(with_people:"MULTIPLE")',
        };
      h = {
        alias: "previewTemplateWithPlaceAndPerson",
        args: [h, f],
        concreteType: "TaggableActivityPreviewTemplate",
        kind: "LinkedField",
        name: "preview_template",
        plural: !1,
        selections: d,
        storageKey:
          'preview_template(with_people:"SINGLE",with_place:"SPECIFIC")',
      };
      j = {
        alias: "previewTemplateWithPlaceAndPeople",
        args: [j, f],
        concreteType: "TaggableActivityPreviewTemplate",
        kind: "LinkedField",
        name: "preview_template",
        plural: !1,
        selections: d,
        storageKey:
          'preview_template(with_people:"MULTIPLE",with_place:"SPECIFIC")',
      };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FeedComposerSocialSentenceWithActivityQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "TaggableActivity",
              kind: "LinkedField",
              name: "taggable_activity",
              plural: !1,
              selections: [c, e, g, i, k, h, j],
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
          name: "FeedComposerSocialSentenceWithActivityQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "TaggableActivity",
              kind: "LinkedField",
              name: "taggable_activity",
              plural: !1,
              selections: [
                c,
                e,
                g,
                i,
                k,
                h,
                j,
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
          id: "3698478000281462",
          metadata: {},
          name: "FeedComposerSocialSentenceWithActivityQuery",
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
  "FeedComposerSocialSentenceWithDraftForQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "userID" }],
        b = [{ kind: "Variable", name: "id", variableName: "userID" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FeedComposerSocialSentenceWithDraftForQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [c],
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
          name: "FeedComposerSocialSentenceWithDraftForQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                c,
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
          id: "3104152796331321",
          metadata: {},
          name: "FeedComposerSocialSentenceWithDraftForQuery",
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
  "FeedComposerSocialSentenceWithTaggedSponsorQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "sponsorID" },
        ],
        b = [{ kind: "Variable", name: "id", variableName: "sponsorID" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FeedComposerSocialSentenceWithTaggedSponsorQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "profile",
              plural: !1,
              selections: [c],
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
          name: "FeedComposerSocialSentenceWithTaggedSponsorQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "profile",
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
          id: "2389886771114076",
          metadata: {},
          name: "FeedComposerSocialSentenceWithTaggedSponsorQuery",
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
  "useSproutsFromRelay_composer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useSproutsFromRelay_composer",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "CometComposerPromotedSprout",
                "CometComposerUploadMediaSprout",
                "CometComposerMagicUploadsSprout",
                "CometComposerAnimatedImageSprout",
                "CometComposerWithTaggingSprout",
                "CometComposerProductTagSprout",
                "CometComposerMultilingualSprout",
                "CometComposerLocationTaggingSprout",
                "CometComposerMinutiaeSprout",
                "FeedCometComposerLiveProducerSprout",
                "CometComposerFundraiserForStorySprout",
                "FeedCometComposerBrandedContentSprout",
                "FeedCometComposerWoodhengeSupportSprout",
                "CometComposerVideoMeetupSprout",
                "CometComposerQuiltSprout",
                "CometComposerAMASprout",
                "FeedCometComposerGetMessagesSprout",
                "CometComposerLifeEventSprout",
                "CometComposerLocalAlertSprout",
                "CometComposerVotingAlertSprout",
                "FeedCometComposerGetWhatsAppMessagesSprout",
                "CometComposerCommunityHelpDriveSprout",
                "CometComposerFbNoteSprout",
                "CometComposerDiscussionPostSprout",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "sprouts",
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
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerPromotedSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerPromotedSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerUploadMediaSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerUploadMediaSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerMagicUploadsSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerMagicUploadsSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerAnimatedImageSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerAnimatedImageSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerWithTaggingSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerWithTaggingSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerProductTagSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerProductTagSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerMultilingualSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerMultilingualSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "ComposerLocationTaggingSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerLocationTaggingSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "ComposerTabbedMinutiaeSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerMinutiaeSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName:
                    "FeedLiveProducerCometComposerLiveSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "FeedCometComposerLiveProducerSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "FundraiserForStorySprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerFundraiserForStorySprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "FeedCometComposerBrandedContentSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "FeedCometComposerBrandedContentSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName:
                    "FeedCometComposerWoodhengeSupportSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "FeedCometComposerWoodhengeSupportSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerRoomsSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerVideoMeetupSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerQuiltSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerQuiltSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "FeedCometComposerAMASprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerAMASprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "FeedCometComposerGetMessagesSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "FeedCometComposerGetMessagesSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerLifeEventSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerLifeEventSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerLocalAlertSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerLocalAlertSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerVotingAlertSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerVotingAlertSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName:
                    "FeedCometComposerGetWhatsAppMessagesSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "FeedCometComposerGetWhatsAppMessagesSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "CometComposerCommunityHelpDriveSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerCommunityHelpDriveSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "FeedCometComposerFbNoteSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerFbNoteSprout",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "useSproutsFromRelay_composer",
                  fragmentName: "FeedCometComposerDiscussionPostSprout_sprout",
                  fragmentPropName: "sprout",
                  kind: "ModuleImport",
                },
              ],
              type: "CometComposerDiscussionPostSprout",
              abstractKey: null,
            },
          ],
          storageKey:
            'sprouts(supported:["CometComposerPromotedSprout","CometComposerUploadMediaSprout","CometComposerMagicUploadsSprout","CometComposerAnimatedImageSprout","CometComposerWithTaggingSprout","CometComposerProductTagSprout","CometComposerMultilingualSprout","CometComposerLocationTaggingSprout","CometComposerMinutiaeSprout","FeedCometComposerLiveProducerSprout","CometComposerFundraiserForStorySprout","FeedCometComposerBrandedContentSprout","FeedCometComposerWoodhengeSupportSprout","CometComposerVideoMeetupSprout","CometComposerQuiltSprout","CometComposerAMASprout","FeedCometComposerGetMessagesSprout","CometComposerLifeEventSprout","CometComposerLocalAlertSprout","CometComposerVotingAlertSprout","FeedCometComposerGetWhatsAppMessagesSprout","CometComposerCommunityHelpDriveSprout","CometComposerFbNoteSprout","CometComposerDiscussionPostSprout"])',
        },
      ],
      type: "FeedCometComposer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "LWICometComposerUtils_MarkPostEligibleForAutoboostMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "is_adding_posts",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        c = { defaultValue: null, kind: "LocalArgument", name: "post_ids" },
        d = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "is_adding_posts",
                variableName: "is_adding_posts",
              },
              { kind: "Variable", name: "page_id", variableName: "page_id" },
              { kind: "Variable", name: "post_ids", variableName: "post_ids" },
            ],
            concreteType: "AdsLWIAutoBoostSettingsWrapper",
            kind: "LinkedField",
            name: "update_eligible_auto_boost_posts",
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
        ];
      return {
        fragment: {
          argumentDefinitions: [a, b, c],
          kind: "Fragment",
          metadata: null,
          name: "LWICometComposerUtils_MarkPostEligibleForAutoboostMutation",
          selections: d,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [b, c, a],
          kind: "Operation",
          name: "LWICometComposerUtils_MarkPostEligibleForAutoboostMutation",
          selections: d,
        },
        params: {
          id: "2846466962115778",
          metadata: {},
          name: "LWICometComposerUtils_MarkPostEligibleForAutoboostMutation",
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
  "refetchCometPrivacySelectorNonAutosavePickerQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "localPrivacyRow",
          },
          { defaultValue: null, kind: "LocalArgument", name: "privacyWriteID" },
          { defaultValue: null, kind: "LocalArgument", name: "renderLocation" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "tags" },
        ],
        b = [{ kind: "Variable", name: "id", variableName: "privacyWriteID" }],
        c = {
          kind: "Variable",
          name: "render_location",
          variableName: "renderLocation",
        },
        d = { kind: "Variable", name: "tags", variableName: "tags" },
        e = [
          c,
          {
            kind: "Variable",
            name: "selected_override",
            variableName: "localPrivacyRow",
          },
          d,
        ],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "allow",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "base_state",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "deny",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          concreteType: "PrivacyRowInputTargetingFields",
          kind: "LinkedField",
          name: "privacy_targeting",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "targeted_publishing_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "targeted_publishing_fields",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tag_expansion_state",
          storageKey: null,
        },
        k = [f, g, h, i, j],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          concreteType: "PrivacyOption",
          kind: "LinkedField",
          name: "selected_option",
          plural: !1,
          selections: [l, m],
          storageKey: null,
        };
      d = [
        {
          kind: "Variable",
          name: "localPrivacyRow",
          variableName: "localPrivacyRow",
        },
        {
          kind: "Variable",
          name: "renderLocation",
          variableName: "renderLocation",
        },
        d,
      ];
      var o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          concreteType: "PrivacyRowInput",
          kind: "LinkedField",
          name: "selected_row_override",
          plural: !1,
          selections: k,
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_save_on_select",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_edit",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_selected",
          storageKey: null,
        },
        t = { kind: "Variable", name: "scale", variableName: "scale" },
        u = [
          { kind: "Literal", name: "icon_purpose", value: "OPTION_LIST" },
          c,
          t,
        ],
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "scale",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        z = {
          alias: null,
          args: u,
          concreteType: "Image",
          kind: "LinkedField",
          name: "icon_image",
          plural: !1,
          selections: [
            v,
            w,
            x,
            y,
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
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "current_tag_expansion",
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "explanation",
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "explanation_with_tag_expansion",
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "info_type",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          concreteType: "PrivacyRowInput",
          kind: "LinkedField",
          name: "privacy_row_input",
          plural: !1,
          selections: k,
          storageKey: null,
        };
      v = [v, w, x, y];
      w = [o, l];
      x = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "description",
        storageKey: null,
      };
      y = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "privacy_write_id",
        storageKey: null,
      };
      var F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "show_tag_expansion_options",
          storageKey: null,
        },
        G = {
          alias: null,
          args: [t],
          concreteType: "Image",
          kind: "LinkedField",
          name: "icon_image",
          plural: !1,
          selections: v,
          storageKey: null,
        },
        H = {
          alias: null,
          args: null,
          concreteType: "PrivacyOption",
          kind: "LinkedField",
          name: "selected_option",
          plural: !1,
          selections: [A, l],
          storageKey: null,
        },
        I = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "extended_description",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "refetchCometPrivacySelectorNonAutosavePickerQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: e,
                      concreteType: "PrivacyScope",
                      kind: "LinkedField",
                      name: "privacy_scope_for_location",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "PrivacyRowInput",
                          kind: "LinkedField",
                          name: "selected_row_override",
                          plural: !1,
                          selections: [
                            {
                              kind: "InlineDataFragmentSpread",
                              name: "PrivacyRowInput_inline",
                              selections: k,
                            },
                          ],
                          storageKey: null,
                        },
                        n,
                      ],
                      storageKey: null,
                    },
                    {
                      args: d,
                      kind: "FragmentSpread",
                      name: "CometPrivacySelectorPickerContainer_renderer",
                    },
                    {
                      args: d,
                      kind: "FragmentSpread",
                      name: "CometPrivacySelectorEditable_renderer",
                    },
                  ],
                  type: "PrivacyScopeEditableRenderer",
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "refetchCometPrivacySelectorNonAutosavePickerQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                o,
                l,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: e,
                      concreteType: "PrivacyScope",
                      kind: "LinkedField",
                      name: "privacy_scope_for_location",
                      plural: !1,
                      selections: [
                        p,
                        n,
                        q,
                        r,
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: ["PrivacySelectorSimpleHeaderRenderer"],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "header_renderer",
                          plural: !1,
                          selections: [
                            o,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometPrivacySelectorPicker_scope",
                                  fragmentName:
                                    "CometPrivacySelectorPickerHeader_header",
                                  fragmentPropName: "header",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "PrivacySelectorSimpleHeaderRenderer",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'header_renderer(supported:["PrivacySelectorSimpleHeaderRenderer"])',
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "PrivacyOption",
                          kind: "LinkedField",
                          name: "options",
                          plural: !0,
                          selections: [
                            l,
                            s,
                            {
                              alias: null,
                              args: [
                                {
                                  kind: "Literal",
                                  name: "supported",
                                  value: [
                                    "PrivacyOptionBasicOptionRenderer",
                                    "PrivacyOptionFullCustomOptionRenderer",
                                    "PrivacyOptionSavedCustomOptionRenderer",
                                    "PrivacyOptionLockedProfileDisabledOptionRenderer",
                                    "PrivacyOptionRestrictedAudienceOptionRenderer",
                                  ],
                                },
                              ],
                              concreteType: null,
                              kind: "LinkedField",
                              name: "renderer",
                              plural: !1,
                              selections: [
                                o,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "PrivacyOption",
                                      kind: "LinkedField",
                                      name: "option",
                                      plural: !1,
                                      selections: [z, A, B, C, l, D, m, E],
                                      storageKey: null,
                                    },
                                  ],
                                  type: "PrivacyOptionBasicOptionRenderer",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "PrivacyOption",
                                      kind: "LinkedField",
                                      name: "option",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: u,
                                          concreteType: "Image",
                                          kind: "LinkedField",
                                          name: "icon_image",
                                          plural: !1,
                                          selections: v,
                                          storageKey: null,
                                        },
                                        A,
                                        B,
                                        C,
                                        l,
                                        m,
                                        E,
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  type: "PrivacyOptionFullCustomOptionRenderer",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "saved_custom_type",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "PrivacyOption",
                                      kind: "LinkedField",
                                      name: "option",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "included_members",
                                          plural: !0,
                                          selections: w,
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "excluded_members",
                                          plural: !0,
                                          selections: w,
                                          storageKey: null,
                                        },
                                        l,
                                        z,
                                        A,
                                        B,
                                        C,
                                        D,
                                        m,
                                        E,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "dialog_title",
                                      storageKey: null,
                                    },
                                  ],
                                  type: "PrivacyOptionSavedCustomOptionRenderer",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "PrivacyOption",
                                      kind: "LinkedField",
                                      name: "option",
                                      plural: !1,
                                      selections: [z, A, B, C, D, m, E, l],
                                      storageKey: null,
                                    },
                                  ],
                                  type: "PrivacyOptionLockedProfileDisabledOptionRenderer",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "PrivacyOption",
                                      kind: "LinkedField",
                                      name: "option",
                                      plural: !1,
                                      selections: [l, E],
                                      storageKey: null,
                                    },
                                  ],
                                  type: "PrivacyOptionRestrictedAudienceOptionRenderer",
                                  abstractKey: null,
                                },
                              ],
                              storageKey:
                                'renderer(supported:["PrivacyOptionBasicOptionRenderer","PrivacyOptionFullCustomOptionRenderer","PrivacyOptionSavedCustomOptionRenderer","PrivacyOptionLockedProfileDisabledOptionRenderer","PrivacyOptionRestrictedAudienceOptionRenderer"])',
                            },
                            x,
                            {
                              alias: "trigger_icon_image",
                              args: [
                                {
                                  kind: "Literal",
                                  name: "icon_purpose",
                                  value: "TRIGGER",
                                },
                                c,
                                t,
                              ],
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "icon_image",
                              plural: !1,
                              selections: v,
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        y,
                        F,
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "PrivacySelectorDefaultPrivacyFooterRenderer",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "footer_renderer",
                          plural: !1,
                          selections: [
                            o,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometPrivacySelectorPickerFooter_scope",
                                  fragmentName:
                                    "CometDefaultPrivacySelectorPickerFooter_footer",
                                  fragmentPropName: "footer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "PrivacySelectorDefaultPrivacyFooterRenderer",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'footer_renderer(supported:["PrivacySelectorDefaultPrivacyFooterRenderer"])',
                        },
                      ],
                      storageKey: null,
                    },
                    E,
                    {
                      alias: "scope",
                      args: e,
                      concreteType: "PrivacyScope",
                      kind: "LinkedField",
                      name: "privacy_scope_for_location",
                      plural: !1,
                      selections: [r, y],
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: "scope",
                          args: e,
                          concreteType: "PrivacyScope",
                          kind: "LinkedField",
                          name: "privacy_scope_for_location",
                          plural: !1,
                          selections: [
                            p,
                            {
                              alias: null,
                              args: null,
                              concreteType: "PrivacyOption",
                              kind: "LinkedField",
                              name: "selected_option",
                              plural: !1,
                              selections: [E, l],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [
                            c,
                            {
                              kind: "Literal",
                              name: "supported",
                              value: [
                                "PrivacyScopeCometButtonEntryPointRenderer",
                                "PrivacyScopeCometComposerButtonEntryPointRenderer",
                                "PrivacyScopeCometIconEntryPointRenderer",
                                "PrivacyScopeCometLabelEntryPointRenderer",
                                "PrivacyScopeCometToggleEntryPointRenderer",
                              ],
                            },
                          ],
                          concreteType: null,
                          kind: "LinkedField",
                          name: "entry_point_renderer",
                          plural: !1,
                          selections: [
                            o,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "source",
                                  plural: !1,
                                  selections: [
                                    o,
                                    {
                                      alias: "scope",
                                      args: e,
                                      concreteType: "PrivacyScope",
                                      kind: "LinkedField",
                                      name: "privacy_scope_for_location",
                                      plural: !1,
                                      selections: [m, G, H, F, r, x, I],
                                      storageKey: null,
                                    },
                                    l,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: "PrivacyScopeCometButtonEntryPointRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "source",
                                  plural: !1,
                                  selections: [
                                    o,
                                    {
                                      alias: "scope",
                                      args: e,
                                      concreteType: "PrivacyScope",
                                      kind: "LinkedField",
                                      name: "privacy_scope_for_location",
                                      plural: !1,
                                      selections: [r, x, I, m, G, H, F],
                                      storageKey: null,
                                    },
                                    l,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: "PrivacyScopeCometComposerButtonEntryPointRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "source",
                                  plural: !1,
                                  selections: [
                                    o,
                                    {
                                      alias: "scope",
                                      args: e,
                                      concreteType: "PrivacyScope",
                                      kind: "LinkedField",
                                      name: "privacy_scope_for_location",
                                      plural: !1,
                                      selections: [m, G, r, x, I],
                                      storageKey: null,
                                    },
                                    l,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: "PrivacyScopeCometIconEntryPointRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "source",
                                  plural: !1,
                                  selections: [
                                    o,
                                    {
                                      alias: "scope",
                                      args: e,
                                      concreteType: "PrivacyScope",
                                      kind: "LinkedField",
                                      name: "privacy_scope_for_location",
                                      plural: !1,
                                      selections: [
                                        m,
                                        G,
                                        r,
                                        x,
                                        I,
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "display_label",
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    l,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: "PrivacyScopeCometLabelEntryPointRenderer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "source",
                                  plural: !1,
                                  selections: [
                                    o,
                                    {
                                      alias: "scope",
                                      args: e,
                                      concreteType: "PrivacyScope",
                                      kind: "LinkedField",
                                      name: "privacy_scope_for_location",
                                      plural: !1,
                                      selections: [
                                        r,
                                        x,
                                        I,
                                        m,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "PrivacyOption",
                                          kind: "LinkedField",
                                          name: "options",
                                          plural: !0,
                                          selections: [
                                            l,
                                            s,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "PrivacyRowInput",
                                              kind: "LinkedField",
                                              name: "privacy_row_input",
                                              plural: !1,
                                              selections: [g, f, h, i, j],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        y,
                                        q,
                                      ],
                                      storageKey: null,
                                    },
                                    l,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: "PrivacyScopeCometToggleEntryPointRenderer",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      type: "PrivacySelectorRenderer",
                      abstractKey: "__isPrivacySelectorRenderer",
                    },
                  ],
                  type: "PrivacyScopeEditableRenderer",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3851781558260642",
          metadata: {},
          name: "refetchCometPrivacySelectorNonAutosavePickerQuery",
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
  "AmaCreateAttachmentFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743077");
    c = b("FalcoLoggerInternal").create("ama_create_attachment", a);
    e.exports = c;
  },
  null
);
__d(
  "AmaHitMaxCharacterLimitFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743079");
    c = b("FalcoLoggerInternal").create("ama_hit_max_character_limit", a);
    e.exports = c;
  },
  null
);
__d(
  "AmaRemoveAttachmentFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743080");
    c = b("FalcoLoggerInternal").create("ama_remove_attachment", a);
    e.exports = c;
  },
  null
);
__d(
  "cometComposerAMACreationLogger",
  [
    "AmaCreateAttachmentFalcoEvent",
    "AmaHitMaxCharacterLimitFalcoEvent",
    "AmaRemoveAttachmentFalcoEvent",
    "TCometComposerTarget",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c) {
      switch (a.type) {
        case "AMA_CREATE_ATTACHMENT":
          h(a.fields, b, c);
          break;
        case "AMA_REMOVE_ATTACHMENT":
          i(a.fields, b, c);
          break;
        case "AMA_HIT_MAX_CHARACTER_LIMIT":
          j(a.fields, b, c);
          break;
        default:
          break;
      }
    }
    function h(a, b, d) {
      c("AmaCreateAttachmentFalcoEvent").log(function () {
        return k(a, b, d);
      });
    }
    function i(a, b, d) {
      c("AmaRemoveAttachmentFalcoEvent").log(function () {
        return k(a, b, d);
      });
    }
    function j(a, b, d) {
      c("AmaHitMaxCharacterLimitFalcoEvent").log(function () {
        return k(a, b, d);
      });
    }
    function k(a, b, c) {
      return babelHelpers["extends"]({}, a, {
        creation_session_id: b,
        target_id: (a = c.target) == null ? void 0 : a.id,
        target_type: l((b = c.target) == null ? void 0 : b.type),
      });
    }
    function l(a) {
      if (a == null) return null;
      switch (a) {
        case d("TCometComposerTarget").ComposerTargetType.Group:
          return "group";
        case d("TCometComposerTarget").ComposerTargetType.Page:
          return "undirected_page";
        case d("TCometComposerTarget").ComposerTargetType.Feed:
        case d("TCometComposerTarget").ComposerTargetType.Profile:
          return "undirected_user";
        case d("TCometComposerTarget").ComposerTargetType.Event:
        case d("TCometComposerTarget").ComposerTargetType.Unknown:
          return "unknown";
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometComposerPushAskMeAnythingPage",
  [
    "CometComposerPushPageContext",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "react",
    "recoverableViolation",
    "useCometComposerPushPage",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "AMACometCreationContainer.react"
        ).__setRef("useCometComposerPushAskMeAnythingPage")
      );
    function a(a) {
      var b = c("useCometComposerPushPage")();
      if (b == null) {
        c("recoverableViolation")(
          "There was an error while attempting to fetch the push page.",
          "covid19_ama"
        );
        return null;
      }
      return function () {
        b != null &&
          b(
            "",
            function (d) {
              d = d.onReturn;
              return h.jsx(c("CometComposerPushPageContext").Provider, {
                value: b,
                children: h.jsx(i, { metadata: a, onCreate: d }),
              });
            },
            { hasCustomHeader: !0 }
          );
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useComposerMaybePushAskMeAnythingViewOnOpen",
  ["react", "useCometComposerPushAskMeAnythingPage", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = c("useCometComposerPushAskMeAnythingPage")(),
        d = c("useStable")(function () {
          return b;
        }),
        e = i(!1);
      h(
        function () {
          d != null && a && !e.current && ((e.current = !0), d());
        },
        [d, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometProductTaggingAfterPostDialogUtils",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e, f) {
      if (!b || a == null) return !1;
      if (!e) return !1;
      if (d === !0) return !1;
      e =
        (a = b.mediaAttachments) == null
          ? void 0
          : a.find(function (a) {
              return a.fileType === "PHOTO";
            });
      if (!e) return !1;
      a =
        (d = b.mediaAttachments) == null
          ? void 0
          : d.find(function (a) {
              return (
                a.fileType === "PHOTO" &&
                a.data.tags !== void 0 &&
                a.data.tags !== null
              );
            });
      if (a) return !1;
      switch (f) {
        case "page":
          return !0;
        case "feed":
        case "profile":
          return c("gkx")("1900745");
        default:
          return !1;
      }
    }
    g.shouldShowApuxDialog = a;
  },
  98
);
__d(
  "useAfterPostForProductTagging",
  [
    "CometProductTaggingAfterPostDialogUtils",
    "JSResourceForInteraction",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
      "CometProductTaggingAfterPostDialog.react"
    ).__setRef("useAfterPostForProductTagging");
    function a(a, b, e) {
      var f = c("useCometLazyDialog")(h),
        g = f[0];
      return function (c, f) {
        return window.requestAnimationFrame(function () {
          d("CometProductTaggingAfterPostDialogUtils").shouldShowApuxDialog(
            c,
            f,
            b,
            a,
            e
          ) &&
            g({
              composerType: e,
              onClose: function () {},
              storyID: c,
              viewState: f,
            });
        });
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProductTagTypeaheadContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { approvedOnly: !1 };
    c = a.createContext(b);
    g.defaultContext = b;
    g.ProductTagTypeaheadContext = c;
  },
  98
);
__d(
  "TCometFeedComposerFeatureDefinition",
  ["gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a, b) {
      if (c("gkx")("2093")) {
        a = a.reduce(function (a, c) {
          var d;
          switch (c.featureType) {
            case "ATTACHMENT":
              c.attachmentType ===
                ((d = b.attachmentArea) == null
                  ? void 0
                  : d.activeAttachmentType) &&
                a.push(c.creationDataTransformerModule.load());
              break;
            default:
              break;
          }
          return a;
        }, []);
        return a;
      } else return [];
    }
    function b(a, b) {
      return a.find(function (a) {
        return a.featureType === "ATTACHMENT" && a.attachmentType === b;
      });
    }
    g.genCreationDataTransformersFromFeatureDefinitions = a;
    g.getActiveAttachmentFeatureDefinition = b;
  },
  98
);
__d(
  "CometComposerActorProfilePicture.react",
  [
    "fbt",
    "ix",
    "CometComposerActorProfilePicture_profile.graphql",
    "CometImageIcon_DEPRECATED.react",
    "CometLink.react",
    "CometRelay",
    "CometRouteURL",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = i("762679");
    function a(a) {
      var e;
      a = a.profile$key;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometComposerActorProfilePicture_profile.graphql")),
        a
      );
      var f = d("CometRouteURL").useRouteURLPath(),
        g = (a == null ? void 0 : a.url) != null ? new URL(a.url).pathname : "";
      e =
        (e =
          a == null
            ? void 0
            : (e = a.profile_picture) == null
            ? void 0
            : e.uri) != null
          ? e
          : l;
      return (a == null ? void 0 : a.url) != null && f !== g
        ? k.jsx(c("CometLink.react"), {
            href: a.url,
            label: h._("{userName}'s Timeline", [
              h._param("userName", a == null ? void 0 : a.name),
            ]),
            children: k.jsx(c("CometImageIcon_DEPRECATED.react"), {
              size: 40,
              src: e,
              style: "circle",
            }),
          })
        : k.jsx(c("CometImageIcon_DEPRECATED.react"), {
            size: 40,
            src: e,
            style: "circle",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerFooterAddOnFilterer.react",
  ["react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.children;
      a = h.Children.toArray(a);
      a.length > 1 &&
        c("recoverableViolation")(
          "Conditions to render multiple footer add-ons were met!",
          "comet_composer"
        );
      return h.jsx(h.Fragment, { children: a.length === 0 ? null : a[0] });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerFooterAddOn.react",
  [
    "CometComposerFooterAddOnFilterer.react",
    "cr:1384013",
    "react",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var d = a.localAlert;
      a = a.sessionID;
      return h.jsx(c("CometComposerFooterAddOnFilterer.react"), {
        children:
          b("cr:1384013") != null &&
          d &&
          h.jsx(b("cr:1384013"), { localAlert: d, sessionID: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      return { localAlert: a.localAlert };
    });
    g["default"] = e;
  },
  98
);
__d(
  "CometComposerMinutiaeBarLayout.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs("div", {
        className:
          "a8nywdso ihqw7lf3 rz4wbd8a discj3wi dhix69tm wkznzc2l j83agx80 bp9cbjyn",
        children: [
          h.jsx("div", { className: "g9en0fbe", children: a.profilePicture }),
          h.jsxs("div", {
            className: "cbu4d94t j83agx80",
            children: [
              a.body,
              a.meta != null &&
                h.jsx("div", { className: "dbvibxzo", children: a.meta }),
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
  "CometComposerMinutiaeBarMeta.react",
  [
    "CometBCHSTStrings",
    "CometMiddot.react",
    "TetraText.react",
    "isStringNullOrEmpty",
    "react",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.brandedContent;
      a = a.privacySelector;
      b =
        !c("isStringNullOrEmpty")(b == null ? void 0 : b.sponsorID) &&
        (b == null ? void 0 : b.sponsorRelationship) ===
          "PAID_RELATIONSHIP_WITH";
      return h.jsxs("div", {
        className: "j83agx80 bp9cbjyn",
        children: [
          b &&
            h.jsxs(c("TetraText.react"), {
              type: "meta1",
              children: [
                d("CometBCHSTStrings").tagging.paidPartnershipLabel,
                h.jsx(c("CometMiddot.react"), {
                  className: "kkf49tns oi9244e8",
                }),
              ],
            }),
          a,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      return { brandedContent: a.brandedContent };
    });
    g["default"] = b;
  },
  98
);
__d(
  "FeedComposerSocialSentenceLocation.react",
  [
    "fbt",
    "CometLink.react",
    "JSResourceForInteraction",
    "TetraText.react",
    "lazyLoadComponent",
    "react",
    "recoverableViolation",
    "useCometComposerPushPage",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo,
      k = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "ComposerLocationListContainer.react"
        ).__setRef("FeedComposerSocialSentenceLocation.react")
      );
    function a(a) {
      a = a.name;
      var b = c("useCometComposerPushPage")(),
        d = j(
          function () {
            return b == null
              ? null
              : function () {
                  b(h._("Where are you?"), function (a) {
                    a = a.onReturn;
                    return i.jsx(k, { onClose: a, withPopover: !1 });
                  });
                };
          },
          [b]
        );
      if (a == null) {
        c("recoverableViolation")(
          "Attempting to render null location in social sentence",
          "comet_composer"
        );
        return null;
      }
      if (d != null)
        return i.jsx(c("CometLink.react"), {
          href: "#",
          onClick: d,
          children: i.jsx(c("TetraText.react"), {
            color: "primary",
            type: "headlineEmphasized4",
            children: a,
          }),
        });
      else
        c("recoverableViolation")(
          "push page should not be null",
          "comet_composer"
        );
      return i.jsx(c("TetraText.react"), {
        color: "primary",
        type: "headlineEmphasized4",
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      return { name: (a = a.locationMinutiae) == null ? void 0 : a.name };
    });
    g["default"] = b;
  },
  98
);
__d(
  "composerWithTagStateChecker",
  ["orEmptyArray", "withTagIDsTrackerConversionUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      b = c("orEmptyArray")(
        d("withTagIDsTrackerConversionUtils").convertWithTagIDsTrackerToArray(
          b == null ? void 0 : b.withTagIDsTracker
        )
      );
      a = c("orEmptyArray")(
        d("withTagIDsTrackerConversionUtils").convertWithTagIDsTrackerToArray(
          a == null ? void 0 : a.withTagIDsTracker
        )
      );
      if (b.length !== a.length) return !0;
      var e = [].concat(b).sort();
      a = [].concat(a).sort();
      for (var f = 0; f < b.length; f++) if (e[f] !== a[f]) return !0;
      return !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerSocialSentenceTaggedUsers.react",
  [
    "fbt",
    "CometComposerViewStateAlteredContext",
    "CometLink.react",
    "CometRelay",
    "FeedComposerSocialSentenceTaggedUsersQuery.graphql",
    "JSResourceForInteraction",
    "TetraText.react",
    "composerWithTagStateChecker",
    "gkx",
    "intlList",
    "lazyLoadComponent",
    "react",
    "recoverableViolation",
    "useCometComposerPushPage",
    "useContextRef",
    "useFeedComposerCometWithTagDataSource",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useMemo,
      l = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometComposerFriendListContainer.react"
        ).__setRef("FeedComposerSocialSentenceTaggedUsers.react")
      ),
      m = 3;
    function a(a) {
      a = a.ids;
      c("useContextRef")(
        c("composerWithTagStateChecker"),
        c("CometComposerViewStateAlteredContext")
      );
      var e = c("useCometComposerPushPage")(),
        f = c("useFeedComposerCometWithTagDataSource")({ limit: 20 }),
        g = k(
          function () {
            return e == null
              ? null
              : function () {
                  e(
                    c("gkx")("1224637")
                      ? h._("Tag People")
                      : h._("Tag Friends"),
                    function (a) {
                      a = a.onReturn;
                      return j.jsx(l, {
                        dataSource: f,
                        onClose: a,
                        withPopover: !1,
                      });
                    }
                  );
                };
          },
          [e, f]
        );
      a = d("CometRelay").useLazyLoadQuery(
        i !== void 0
          ? i
          : (i = b("FeedComposerSocialSentenceTaggedUsersQuery.graphql")),
        { ids: a }
      );
      if (g != null) {
        var n = a.nodes.length;
        if (n <= m)
          return c("intlList")(
            a.nodes.map(function (a) {
              return j.jsx(c("CometLink.react"), {
                href: "#",
                onClick: g,
                children: j.jsx(c("TetraText.react"), {
                  color: "primary",
                  type: "headlineEmphasized4",
                  children: a.name,
                }),
              });
            })
          );
        else {
          n = n - m;
          return c("intlList")(
            a.nodes
              .slice(0, 3)
              .map(function (a) {
                return j.jsx(c("CometLink.react"), {
                  href: "#",
                  onClick: g,
                  children: j.jsx(c("TetraText.react"), {
                    color: "primary",
                    type: "headlineEmphasized4",
                    children: a.name,
                  }),
                });
              })
              .concat([
                j.jsx(c("CometLink.react"), {
                  href: "#",
                  onClick: g,
                  children: j.jsx(c("TetraText.react"), {
                    color: "primary",
                    type: "headlineEmphasized4",
                    children: h._({ "*": "{number} others", _1: "1 other" }, [
                      h._plural(n, "number"),
                    ]),
                  }),
                }),
              ])
          );
        }
      } else
        c("recoverableViolation")(
          "push page should not be null",
          "comet_composer"
        );
      return c("intlList")(
        a.nodes.map(function (a) {
          return j.jsx("span", { children: a.name });
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerGeminiSocialSentenceForAMA.react",
  [
    "fbt",
    "ix",
    "FeedComposerSocialSentenceLocation.react",
    "FeedComposerSocialSentenceTaggedUsers.react",
    "IconSource",
    "TetraIcon.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = j.jsx(c("TetraIcon.react"), {
        icon: new (c("IconSource"))("FB", i("1342088"), 20),
      });
    function l(a) {
      var b = a.location,
        d = a.taggedUserIDs;
      a = a.userName;
      if (d != null && b == null)
        return h._(
          "{post author} is {icon} hosting a Q&A with {tagged people (e.g. 'with Bob Foo and Alice Bar')}",
          [
            h._param("post author", a),
            h._param("icon", k),
            h._param(
              "tagged people (e.g. 'with Bob Foo and Alice Bar')",
              j.jsx(c("FeedComposerSocialSentenceTaggedUsers.react"), {
                ids: d,
              })
            ),
          ]
        );
      else if (d == null && b != null && b.isGeohub)
        return h._(
          "{post author} is {icon} hosting a Q&A in {location (e.g. 'in London')}",
          [
            h._param("post author", a),
            h._param("icon", k),
            h._param(
              "location (e.g. 'in London')",
              j.jsx(c("FeedComposerSocialSentenceLocation.react"), {})
            ),
          ]
        );
      else if (d == null && b != null && !b.isGeohub)
        return h._(
          "{post author} is {icon} hosting a Q&A at {location (e.g. 'at Facebook London')}",
          [
            h._param("post author", a),
            h._param("icon", k),
            h._param(
              "location (e.g. 'at Facebook London')",
              j.jsx(c("FeedComposerSocialSentenceLocation.react"), {})
            ),
          ]
        );
      else if (d != null && b != null && b.isGeohub)
        return h._(
          "{post author} is {icon} hosting a Q&A with {tagged people (e.g. 'with Bob Foo and Alice Bar')} in {location (e.g. 'in London')}",
          [
            h._param("post author", a),
            h._param("icon", k),
            h._param(
              "tagged people (e.g. 'with Bob Foo and Alice Bar')",
              j.jsx(c("FeedComposerSocialSentenceTaggedUsers.react"), {
                ids: d,
              })
            ),
            h._param(
              "location (e.g. 'in London')",
              j.jsx(c("FeedComposerSocialSentenceLocation.react"), {})
            ),
          ]
        );
      else if (d != null && b != null && !b.isGeohub)
        return h._(
          "{post author} is {icon} hosting a Q&A with {tagged people (e.g. 'with Bob Foo and Alice Bar')} at {location (e.g. 'at Facebook London')}",
          [
            h._param("post author", a),
            h._param("icon", k),
            h._param(
              "tagged people (e.g. 'with Bob Foo and Alice Bar')",
              j.jsx(c("FeedComposerSocialSentenceTaggedUsers.react"), {
                ids: d,
              })
            ),
            h._param(
              "location (e.g. 'at Facebook London')",
              j.jsx(c("FeedComposerSocialSentenceLocation.react"), {})
            ),
          ]
        );
      else
        return h._("{post author} is {icon} hosting a Q&A", [
          h._param("post author", a),
          h._param("icon", k),
        ]);
    }
    function a(a) {
      var b = a.location,
        d = a.taggedUserIDs;
      a = a.userName;
      return j.jsx(c("TetraText.react"), {
        type: "headline4",
        children: l({
          location: b,
          taggedUserIDs:
            ((b = d == null ? void 0 : d.length) != null ? b : 0) > 0
              ? d
              : null,
          userName: j.jsx(c("TetraText.react"), {
            type: "headlineEmphasized4",
            children: a,
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
  "FeedComposerGeminiSocialSentenceForQA.react",
  ["fbt", "ix", "IconSource", "TetraIcon.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = j.jsx(c("TetraIcon.react"), {
        icon: new (c("IconSource"))("FB", i("1952538"), 16),
      });
    function l(a) {
      a = a.userName;
      return h._("{post author} is {icon} asking a question", [
        h._param("post author", a),
        h._param("icon", k),
      ]);
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      a = a.userName;
      return j.jsx(c("TetraText.react"), {
        type: "headline4",
        children: l({
          userName: j.jsx(c("TetraText.react"), {
            type: "headlineEmphasized4",
            children: a,
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
  "FeedComposerSocialSentenceActivityObject.react",
  [
    "CometLink.react",
    "CometRelay",
    "FeedComposerSocialSentenceActivityObjectQuery.graphql",
    "TetraText.react",
    "react",
    "recoverableViolation",
    "useCometComposerPushMinutiaePage",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.id;
      var e = c("useCometComposerPushMinutiaePage")();
      a = d("CometRelay").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b("FeedComposerSocialSentenceActivityObjectQuery.graphql")),
        { id: a }
      );
      a = (a = a.node) == null ? void 0 : a.name;
      if (e != null)
        return i.jsx(c("CometLink.react"), {
          href: "#",
          onClick: e,
          children: i.jsx(c("TetraText.react"), {
            color: "primary",
            type: "headlineEmphasized4",
            children: a,
          }),
        });
      else
        c("recoverableViolation")(
          "push page context should not be null",
          "comet_composer"
        );
      return a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerSocialSentenceIcon.react",
  ["CometImage.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.hasOmittedLinkingVerb;
      a = a.iconURI;
      return h.jsx("span", {
        className: "gwewmpg2 l9j0dhe7 cgat1ltu" + (b ? " kkf49tns" : ""),
        children: h.jsx(c("CometImage.react"), {
          height: 16,
          src: a,
          width: 16,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerSocialSentenceWithActivity.react",
  [
    "fbt",
    "CometRelay",
    "FeedComposerSocialSentenceActivityObject.react",
    "FeedComposerSocialSentenceIcon.react",
    "FeedComposerSocialSentenceLocation.react",
    "FeedComposerSocialSentenceTaggedUsers.react",
    "FeedComposerSocialSentenceWithActivityQuery.graphql",
    "TetraText.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function k(a, b) {
      var d = b.activityObjectID,
        e = b.hasLocation,
        f = b.hasOmittedLinkingVerb,
        g = b.iconURI,
        h = b.taggedUsers;
      b = a == null ? void 0 : a.template_string;
      a = a == null ? void 0 : a.template_tokens;
      var i = 0,
        k = [];
      if (a != null && b != null) {
        var l = b.toLowerCase();
        k = a.reduce(function (a, b) {
          var k = b.token_position;
          b = b.token_type;
          if (k != null && b != null) {
            a.push(l.substring(i, k));
            switch (b) {
              case "ICON":
                a.push(
                  g != null
                    ? j.jsx(
                        c("FeedComposerSocialSentenceIcon.react"),
                        { hasOmittedLinkingVerb: f, iconURI: g },
                        b
                      )
                    : null
                );
                break;
              case "OBJECT":
                a.push(
                  j.jsx(
                    c("FeedComposerSocialSentenceActivityObject.react"),
                    { id: d },
                    b
                  )
                );
                break;
              case "PLACE":
                a.push(
                  e
                    ? j.jsx(
                        c("FeedComposerSocialSentenceLocation.react"),
                        {},
                        b
                      )
                    : null
                );
                break;
              case "PERSON":
              case "PEOPLE":
                a.push(
                  h != null
                    ? j.jsx(
                        c("FeedComposerSocialSentenceTaggedUsers.react"),
                        { ids: h },
                        b
                      )
                    : null
                );
                break;
            }
            i = k;
          }
          return a;
        }, k);
        k.push(l.substring(i));
      }
      return k;
    }
    function a(a) {
      var e,
        f = a.activityLegacyID,
        g = a.activityObjectID,
        l = a.iconURI,
        m = a.locationID,
        n = a.taggedUsers;
      a = a.userName;
      f = { activityLegacyID: f };
      f = d("CometRelay").useLazyLoadQuery(
        i !== void 0
          ? i
          : (i = b("FeedComposerSocialSentenceWithActivityQuery.graphql")),
        f
      );
      e =
        (e =
          (e = f.taggable_activity) == null ? void 0 : e.omit_linking_verb) !=
        null
          ? e
          : !1;
      m = m != null;
      var o = n != null && n.length === 1,
        p = n != null && n.length > 1,
        q = null;
      if (!m && !o && !p) {
        var r;
        q = (r = f.taggable_activity) == null ? void 0 : r.previewTemplate;
      } else if (!m && !o && p) {
        q =
          (r = f.taggable_activity) == null
            ? void 0
            : r.previewTemplateWithPeople;
      } else if (!m && o && !p) {
        q =
          (r = f.taggable_activity) == null
            ? void 0
            : r.previewTemplateWithPerson;
      } else if (m && !o && !p) {
        q =
          (r = f.taggable_activity) == null
            ? void 0
            : r.previewTemplateWithPlace;
      } else if (m && !o && p) {
        q =
          (r = f.taggable_activity) == null
            ? void 0
            : r.previewTemplateWithPlaceAndPeople;
      } else if (m && o && !p) {
        q =
          (r = f.taggable_activity) == null
            ? void 0
            : r.previewTemplateWithPlaceAndPerson;
      }
      o = h._("{userName}{activityInPresentTense}", [
        h._param(
          "userName",
          j.jsx(c("TetraText.react"), {
            type: "headlineEmphasized4",
            children: a,
          })
        ),
        h._param(
          "activityInPresentTense",
          j.jsx(j.Fragment, {
            children: k(q, {
              activityObjectID: g,
              hasLocation: m,
              hasOmittedLinkingVerb: e,
              iconURI: l,
              taggedUsers: n,
            }),
          })
        ),
      ]);
      e ||
        (o = h._("{userName} is {activityInPresentTense}", [
          h._param(
            "userName",
            j.jsx(c("TetraText.react"), {
              type: "headlineEmphasized4",
              children: a,
            })
          ),
          h._param(
            "activityInPresentTense",
            j.jsx(j.Fragment, {
              children: k(q, {
                activityObjectID: g,
                hasLocation: m,
                hasOmittedLinkingVerb: e,
                iconURI: l,
                taggedUsers: n,
              }),
            })
          ),
        ]));
      return j.jsx("div", {
        children: j.jsx(c("TetraTextPairing.react"), {
          headline: o,
          level: 4,
          reduceEmphasis: !0,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerSocialSentenceWithDraftFor.react",
  [
    "fbt",
    "CometRelay",
    "FeedComposerSocialSentenceTaggedUsers.react",
    "FeedComposerSocialSentenceWithDraftForQuery.graphql",
    "TetraText.react",
    "react",
    "useNullthrowsViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.drafteeName,
        f = a.drafterID;
      a = a.taggedUsers;
      f = d("CometRelay").useLazyLoadQuery(
        i !== void 0
          ? i
          : (i = b("FeedComposerSocialSentenceWithDraftForQuery.graphql")),
        { userID: f }
      );
      f = c("useNullthrowsViolation")((f = f.user) == null ? void 0 : f.name);
      a != null && a.length > 0
        ? (a = h._(
            "{drafterName} is drafting for {drafteeName} who is with {listOfTaggedPeople}",
            [
              h._param(
                "drafterName",
                j.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized4",
                  children: f,
                })
              ),
              h._param(
                "drafteeName",
                j.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized4",
                  children: e,
                })
              ),
              h._param(
                "listOfTaggedPeople",
                j.jsx(c("FeedComposerSocialSentenceTaggedUsers.react"), {
                  ids: a,
                })
              ),
            ]
          ))
        : (a = h._("{drafterName} is drafting for {drafteeName}", [
            h._param(
              "drafterName",
              j.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: f,
              })
            ),
            h._param(
              "drafteeName",
              j.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: e,
              })
            ),
          ]));
      return j.jsx(c("TetraText.react"), {
        color: "secondary",
        type: "body3",
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerBrandedContentPopoverResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "CometComposerBrandedContentPopover.react"
    ).__setRef("CometComposerBrandedContentPopoverResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometComposerBrandedContentStrings",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("Tag Sponsor");
    g.popoverTitle = a;
  },
  98
);
__d(
  "FeedComposerSocialSentenceWithTaggedSponsor.react",
  [
    "fbt",
    "CometComposerBrandedContentPopoverResource",
    "CometComposerBrandedContentStrings",
    "CometLink.react",
    "CometRelay",
    "FeedComposerSocialSentenceLocation.react",
    "FeedComposerSocialSentenceWithTaggedSponsorQuery.graphql",
    "TetraText.react",
    "TetraTextPairing.react",
    "lazyLoadComponent",
    "react",
    "recoverableViolation",
    "useCometComposerPushPage",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useMemo,
      l = c("lazyLoadComponent")(
        c("CometComposerBrandedContentPopoverResource")
      );
    function a(a) {
      var e = a.placeID,
        f = a.sponsorID,
        g = a.sponsorRelationship;
      a = a.userName;
      var m = c("useCometComposerPushPage")();
      g = g === "SUPPORT";
      e = e != null;
      var n = k(
        function () {
          return m == null
            ? null
            : function () {
                m(
                  d("CometComposerBrandedContentStrings").popoverTitle,
                  function (a) {
                    a = a.onReturn;
                    return j.jsx(l, {
                      onClose: a,
                      pushPage: m,
                      withPopover: !1,
                    });
                  },
                  { hasCustomHeader: !0 }
                );
              };
        },
        [m]
      );
      f = d("CometRelay").useLazyLoadQuery(
        i !== void 0
          ? i
          : (i = b("FeedComposerSocialSentenceWithTaggedSponsorQuery.graphql")),
        { sponsorID: f }
      );
      var o = null;
      if (n != null) {
        o = j.jsx(c("CometLink.react"), {
          href: "#",
          onClick: n,
          children: j.jsx(c("TetraText.react"), {
            color: "primary",
            type: "headlineEmphasized4",
            children: (n = f.profile) == null ? void 0 : n.name,
          }),
        });
      } else {
        c("recoverableViolation")(
          "push page should not be null",
          "comet_composer"
        );
        o = (n = f.profile) == null ? void 0 : n.name;
      }
      if (!g && !e)
        return j.jsx(c("TetraTextPairing.react"), {
          headline: h._("{userName} with {taggedSponsor}", [
            h._param(
              "userName",
              j.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: a,
              })
            ),
            h._param(
              "taggedSponsor",
              j.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: o,
              })
            ),
          ]),
          level: 4,
          reduceEmphasis: !0,
        });
      else if (g && !e)
        return j.jsx(c("TetraTextPairing.react"), {
          headline: h._("{userName} in support of {taggedSponsor}", [
            h._param(
              "userName",
              j.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: a,
              })
            ),
            h._param(
              "taggedSponsor",
              j.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: o,
              })
            ),
          ]),
          level: 4,
          reduceEmphasis: !0,
        });
      else if (!g && e)
        return j.jsx(c("TetraTextPairing.react"), {
          headline: h._("{userName} with {taggedSponsor} at {location}", [
            h._param(
              "userName",
              j.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: a,
              })
            ),
            h._param(
              "taggedSponsor",
              j.jsx(c("TetraText.react"), {
                type: "headlineEmphasized4",
                children: o,
              })
            ),
            h._param(
              "location",
              j.jsx(c("FeedComposerSocialSentenceLocation.react"), {})
            ),
          ]),
          level: 4,
          reduceEmphasis: !0,
        });
      else if (g && e)
        return j.jsx(c("TetraTextPairing.react"), {
          headline: h._(
            "{userName} in support of {taggedSponsor} at {location}",
            [
              h._param(
                "userName",
                j.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized4",
                  children: a,
                })
              ),
              h._param(
                "taggedSponsor",
                j.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized4",
                  children: o,
                })
              ),
              h._param(
                "location",
                j.jsx(c("FeedComposerSocialSentenceLocation.react"), {})
              ),
            ]
          ),
          level: 4,
          reduceEmphasis: !0,
        });
      else return "";
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "composerActivityStateChecker",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c;
      a = a == null ? void 0 : a.activityMinutiae;
      b = b == null ? void 0 : b.activityMinutiae;
      ((c = b) == null ? void 0 : c.activityID) != null &&
        ((c = b) == null ? void 0 : c.objectID) == null &&
        (b = null);
      return (
        (a == null ? void 0 : a.objectID) !==
          ((c = b) == null ? void 0 : c.objectID) ||
        (a == null ? void 0 : a.activityID) !==
          ((c = b) == null ? void 0 : c.activityID)
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "composerWithTagViewStateReducer",
  ["addTagsToWithTagsIDsTracker"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      b = b.withTagID;
      b = c("addTagsToWithTagsIDsTracker")(
        "WithTagTool",
        [b],
        (b = a.withTagIDsTracker) != null ? b : new Map()
      );
      return babelHelpers["extends"]({}, a, { withTagIDsTracker: b });
    }
    function i(a, b, c) {
      var d = b.get(a);
      if (d != null) {
        d = {
          isDisplayedInSocialSentence: !1,
          withTagSourceIDs: d.withTagSourceIDs.filter(function (a) {
            return a !== c;
          }),
        };
        d.withTagSourceIDs.length > 0 ? b.set(a, d) : b["delete"](a);
      }
      return b;
    }
    function j(a, b) {
      var c = new Map(a.withTagIDsTracker);
      b = b.withTagID;
      b = i(b, c, "WithTagTool");
      return babelHelpers["extends"]({}, a, { withTagIDsTracker: b });
    }
    function k(a) {
      return babelHelpers["extends"]({}, a, { withTagIDsTracker: void 0 });
    }
    function a(a, b) {
      switch (b.type) {
        case "ADD_WITH_TAG_ID":
          return h(a, b);
        case "REMOVE_WITH_TAG_ID":
          return j(a, b);
        case "REMOVE_ALL_WITH_TAGS":
          return k(a);
      }
      return a;
    }
    g.removeSourceID = i;
    g.composerWithTagViewStateReducer = a;
  },
  98
);
__d(
  "FeedComposerCometSocialSentence.react",
  [
    "fbt",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "FeedComposerGeminiSocialSentenceForAMA.react",
    "FeedComposerGeminiSocialSentenceForQA.react",
    "FeedComposerSocialSentenceLocation.react",
    "FeedComposerSocialSentenceTaggedUsers.react",
    "FeedComposerSocialSentenceWithActivity.react",
    "FeedComposerSocialSentenceWithDraftFor.react",
    "FeedComposerSocialSentenceWithTaggedSponsor.react",
    "JSResourceForInteraction",
    "TetraText.react",
    "TetraTextPairing.react",
    "composerActivityStateChecker",
    "composerActivityViewStateReducer",
    "composerAttachmentAreaChecker",
    "composerAttachmentAreaReducer",
    "composerLocationTaggingViewStateReducer",
    "composerWithTagStateChecker",
    "composerWithTagViewStateReducer",
    "isStringNullOrEmpty",
    "lazyLoadComponent",
    "react",
    "useComposerViewStateReducer",
    "withComposerViewStatePart",
    "withTagIDsTrackerConversionUtils",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "FeedComposerSocialSentenceWithLocalAlert.react"
        ).__setRef("FeedComposerCometSocialSentence.react")
      );
    function a(a) {
      var b = a.activityMinutiae,
        e = a.brandedContentData,
        f = a.isQA,
        g = a.isReshareWithFilter,
        k = a.isWorkAMA,
        l = a.localAlert,
        m = a.locationMinutiae,
        n = a.shouldHideReshareFilterMinutiae,
        o = a.taggedUsers,
        p = a.userName;
      a = a.workDraftFor;
      c("useComposerViewStateReducer")(
        c("composerLocationTaggingViewStateReducer")
      );
      c("useComposerViewStateReducer")(
        d("composerAttachmentAreaReducer").composerAttachmentAreaReducer,
        c("composerAttachmentAreaChecker")
      );
      c("useComposerViewStateReducer")(
        c("composerActivityViewStateReducer"),
        c("composerActivityStateChecker")
      );
      c("useComposerViewStateReducer")(
        d("composerWithTagViewStateReducer").composerWithTagViewStateReducer,
        c("composerWithTagStateChecker")
      );
      if (p == null) return null;
      var q = o != null && o.length > 0,
        r = b != null,
        s = b == null ? void 0 : b.activityLegacyID,
        t = b == null ? void 0 : b.objectID;
      b = b == null ? void 0 : b.iconURI;
      var u = l != null,
        v = m != null,
        w = m == null ? void 0 : m.placeID,
        x = e == null ? void 0 : e.sponsorID;
      e = e == null ? void 0 : e.sponsorRelationship;
      var y = !c("isStringNullOrEmpty")(x);
      a = a == null ? void 0 : a.originalActorID;
      var z = null;
      a != null
        ? (z = i.jsx(c("FeedComposerSocialSentenceWithDraftFor.react"), {
            drafteeName: p,
            drafterID: a,
            taggedUsers: o,
          }))
        : k
        ? (z = i.jsx(c("FeedComposerGeminiSocialSentenceForAMA.react"), {
            location: m,
            taggedUserIDs: o,
            userName: p,
          }))
        : f
        ? (z = i.jsx(c("FeedComposerGeminiSocialSentenceForQA.react"), {
            userName: p,
          }))
        : r && s != null && t != null && (!n || !g)
        ? (z = i.jsx(c("FeedComposerSocialSentenceWithActivity.react"), {
            activityLegacyID: s,
            activityObjectID: t,
            iconURI: b,
            locationID: m == null ? void 0 : m.placeID,
            taggedUsers: o,
            userName: p,
          }))
        : !q && !v && !y && !u
        ? (z = i.jsx(c("TetraText.react"), {
            type: "headlineEmphasized4",
            children: p,
          }))
        : l != null
        ? (z = i.jsx(c("CometPlaceholder.react"), {
            fallback: i.jsx(c("TetraTextPairing.react"), {
              headline: h._("{userName} is posting a local alert", [
                h._param(
                  "userName",
                  i.jsx(c("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: p,
                  })
                ),
              ]),
              level: 4,
              reduceEmphasis: !0,
            }),
            children: i.jsx(j, { localAlert: l, userName: p }),
          }))
        : !q && !y && v
        ? (z = i.jsx(c("TetraTextPairing.react"), {
            headline: (m == null ? void 0 : m.isGeohub)
              ? h._("{userName} is in {location}", [
                  h._param(
                    "userName",
                    i.jsx(c("TetraText.react"), {
                      type: "headlineEmphasized4",
                      children: p,
                    })
                  ),
                  h._param(
                    "location",
                    i.jsx(c("FeedComposerSocialSentenceLocation.react"), {})
                  ),
                ])
              : h._("{userName} is at {location}", [
                  h._param(
                    "userName",
                    i.jsx(c("TetraText.react"), {
                      type: "headlineEmphasized4",
                      children: p,
                    })
                  ),
                  h._param(
                    "location",
                    i.jsx(c("FeedComposerSocialSentenceLocation.react"), {})
                  ),
                ]),
            level: 4,
            reduceEmphasis: !0,
          }))
        : q && !v && o != null
        ? (z = i.jsx(c("TetraTextPairing.react"), {
            headline: h._("{userName} is with {listOfTaggedPeople}", [
              h._param(
                "userName",
                i.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized4",
                  children: p,
                })
              ),
              h._param(
                "listOfTaggedPeople",
                i.jsx(c("FeedComposerSocialSentenceTaggedUsers.react"), {
                  ids: o,
                })
              ),
            ]),
            level: 4,
            reduceEmphasis: !0,
          }))
        : q && v && o != null
        ? (z = i.jsx(c("TetraTextPairing.react"), {
            headline: (m == null ? void 0 : m.isGeohub)
              ? h._("{userName} is with {listOfTaggedPeople} in {location}", [
                  h._param(
                    "userName",
                    i.jsx(c("TetraText.react"), {
                      type: "headlineEmphasized4",
                      children: p,
                    })
                  ),
                  h._param(
                    "listOfTaggedPeople",
                    i.jsx(c("FeedComposerSocialSentenceTaggedUsers.react"), {
                      ids: o,
                    })
                  ),
                  h._param(
                    "location",
                    i.jsx(c("FeedComposerSocialSentenceLocation.react"), {})
                  ),
                ])
              : h._("{userName} is with {listOfTaggedPeople} at {location}", [
                  h._param(
                    "userName",
                    i.jsx(c("TetraText.react"), {
                      type: "headlineEmphasized4",
                      children: p,
                    })
                  ),
                  h._param(
                    "listOfTaggedPeople",
                    i.jsx(c("FeedComposerSocialSentenceTaggedUsers.react"), {
                      ids: o,
                    })
                  ),
                  h._param(
                    "location",
                    i.jsx(c("FeedComposerSocialSentenceLocation.react"), {})
                  ),
                ]),
            level: 4,
            reduceEmphasis: !0,
          }))
        : y &&
          !c("isStringNullOrEmpty")(x) &&
          (z = i.jsx(c("FeedComposerSocialSentenceWithTaggedSponsor.react"), {
            placeID: w,
            sponsorID: x,
            sponsorRelationship: e,
            userName: p,
          }));
      return i.jsx(c("CometErrorBoundary.react"), {
        fallback: function (a) {
          return i.jsx(c("TetraText.react"), {
            type: "headlineEmphasized4",
            children: p,
          });
        },
        children: i.jsx(c("CometPlaceholder.react"), {
          fallback: i.jsx(c("TetraText.react"), {
            type: "headlineEmphasized4",
            children: p,
          }),
          children: z,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      var b;
      return {
        activityMinutiae: a.activityMinutiae,
        brandedContentData: a.brandedContent,
        isQA: ((b = a.workQAMetadata) == null ? void 0 : b.isQA) === !0,
        isReshareWithFilter: a.reshareFilterMetadata != null,
        isWorkAMA: ((b = a.workAMAMetadata) == null ? void 0 : b.isAMA) === !0,
        localAlert: a.localAlert,
        locationMinutiae: a.locationMinutiae,
        shouldHideReshareFilterMinutiae:
          ((b = a.reshareFilterMetadata) == null ? void 0 : b.is_used) === !1,
        taggedUsers: d(
          "withTagIDsTrackerConversionUtils"
        ).convertWithTagIDsTrackerToArray(a.withTagIDsTracker),
        workDraftFor: a.workDraftFor,
      };
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometComposerMinutiaeBar.react",
  [
    "CometComposerActorProfilePicture.react",
    "CometComposerMinutiaeBarLayout.react",
    "CometComposerMinutiaeBarMeta.react",
    "CometComposerMinutiaeBar_profile.graphql",
    "CometRelay",
    "FeedComposerCometSocialSentence.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.privacySelector;
      a = a.profile$key;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometComposerMinutiaeBar_profile.graphql")),
        a
      );
      return i.jsx(c("CometComposerMinutiaeBarLayout.react"), {
        body: i.jsx(c("FeedComposerCometSocialSentence.react"), {
          userName: a.name,
        }),
        meta: i.jsx(c("CometComposerMinutiaeBarMeta.react"), {
          privacySelector: e,
        }),
        profilePicture: i.jsx(c("CometComposerActorProfilePicture.react"), {
          profile$key: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerSavingIndicatorMask.react",
  ["fbt", "CometProgressIndicator.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      return i.jsxs("div", {
        className:
          "kavbgo14 kr520xx4 j9ispegn pmk7jnqg taijpn5t cbu4d94t n7fi1qx3 j83agx80 i09qtzwb l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 ms7hmo2b bp9cbjyn",
        children: [
          i.jsx("div", {
            "aria-atomic": "true",
            "aria-live": "assertive",
            className: "ozuftl9m n851cfcs tvfksri0 n1l5q3vz",
            children: i.jsx(c("TetraText.react"), {
              type: "body1",
              children: (a = a.body) != null ? a : h._("Posting"),
            }),
          }),
          i.jsx(c("CometProgressIndicator.react"), {}),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerToolbar.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.children;
      return h.jsx("div", {
        className:
          "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 dhix69tm wkznzc2l i1fnvgqd j83agx80 rq0escxv ibutc8p7 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 tr4kgdav eip75gnj ccnbzhu1 dwg5866k cwj9ozl2 bp9cbjyn",
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerCometSproutButtonContainer.react",
  ["CometErrorBoundary.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("CometErrorBoundary.react"), { children: a.children });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getOrderedSproutsForLogging",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return Array.from(a.keys()).sort(function (b, c) {
        b = a.get(b);
        c = a.get(c);
        if (b && c) return b.index - c.index;
        else return 0;
      });
    }
    f["default"] = a;
  },
  66
);
__d(
  "getSproutsVisibilitiesForLogging",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = {};
      a.forEach(function (a) {
        b[a.name] = a.visible;
      });
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "useCometComposerInlineSproutsLogging",
  [
    "debounce",
    "getOrderedSproutsForLogging",
    "getSproutsVisibilitiesForLogging",
    "react",
    "useCometComposerLoggerDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useMemo,
      j = b.useState;
    function a(a) {
      var b = a.actionType,
        d = a.maxLoggingCount,
        e = d === void 0 ? null : d,
        f = a.sproutsCount,
        g = a.sproutsState;
      d = j(0);
      var k = d[0],
        l = d[1];
      a = j(new Map());
      var m = a[0],
        n = c("debounce")(function () {
          var a = e === null || k < e;
          if (a) {
            a = c("getSproutsVisibilitiesForLogging")(m);
            var d = c("getOrderedSproutsForLogging")(m);
            o({
              fields: {
                composer_type: null,
                ordered_sprouts: d,
                sprout_surface: "UNDIRECTED_FEED_COMPOSER",
                sprouts_visibilities: a,
                state: g,
                total_sprouts_count: f.toString(),
              },
              type: b,
            });
            l(k + 1);
          }
        }, 200),
        o = c("useCometComposerLoggerDispatcher")(),
        p = h(
          function (a) {
            var b = { index: m.size, name: a, visible: !1 };
            m.set(a, b);
          },
          [m]
        ),
        q = h(
          function (a) {
            var b = m.get(a);
            b && (b.visible || ((b.visible = !0), m.set(a, b), n()));
          },
          [n, m]
        );
      d = i(
        function () {
          return { onRender: p, onVisible: q };
        },
        [p, q]
      );
      return { loggingHandlers: d };
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerFullSproutsList.react",
  [
    "CometComposerPromotionContext",
    "CometComposerSproutVisibilitiesContext",
    "ComposerSproutDisplayTypeContext",
    "FeedComposerCometSproutButtonContainer.react",
    "gkx",
    "react",
    "useCometComposerInlineSproutsLogging",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.composerDialogWidth,
        e = a.popPage,
        f = i(c("CometComposerPromotionContext"));
      a = j(
        function () {
          return {
            popPage: e,
            renderButtonCollapsed: !1,
            showLabelAsTooltip: !1,
            type: "push_view",
          };
        },
        [e]
      );
      var g = c("useCometComposerInlineSproutsLogging")({
        actionType: "INLINE_SPROUTS_STATE_CHANGED",
        sproutsCount: (b == null ? void 0 : b.length) || 0,
        sproutsState: "full_screen",
      });
      g = g.loggingHandlers;
      return h.jsx(c("ComposerSproutDisplayTypeContext").Provider, {
        value: a,
        children: h.jsx(c("CometComposerSproutVisibilitiesContext").Provider, {
          value: g,
          children: h.jsx("div", {
            className:
              "kkf49tns tvmbv18p cgat1ltu aahdfvyu lhclo0ds j83agx80" +
              (c("gkx")("1224637") ? " qlnuvsl8" : ""),
            "data-testid": void 0,
            style: { width: d },
            children: h.Children.map(b, function (a, b) {
              return h.jsx(
                "div",
                {
                  className:
                    (f == null ? void 0 : f.listContainsPromotion) === !0 &&
                    b === 0
                      ? "k4urcfbm"
                      : "ecm0bbzt e5nlhep0 hkbzh7o3",
                  children: h.jsx(
                    c("FeedComposerCometSproutButtonContainer.react"),
                    { children: a }
                  ),
                },
                a.key
              );
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      return {
        composerDialogWidth:
          (a = a.composerSizeAndStyleMetadata) == null
            ? void 0
            : a.composerDialogWidth,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "CometComposerRemoveAttachmentButton.react",
  ["fbt", "ix", "TetraCircleButton.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.buttonType;
      a = a.removeAttachment;
      return j.jsx(c("TetraCircleButton.react"), {
        color: "secondary",
        icon: d("fbicon")._(i("478233"), 20),
        label: h._("Remove post attachment"),
        onPress: a,
        size: 36,
        testid: void 0,
        type: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometComposerAttachmentAreaConfig",
  ["CometComposerViewStateContext", "qex", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext,
      i = c("qex")._("1138950"),
      j = {
        amaRoot: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          marginTop: "bcvklqu9",
          marginEnd: "oi9244e8",
          marginBottom: "bi6gxh9e",
          marginStart: "h676nmdw",
          overflowX: "hihg3u9x",
          overflowY: "ggxiycxj",
          position: "l9j0dhe7",
        },
        mediaBorder: {
          borderTop: "dwg5866k",
          borderEnd: "ccnbzhu1",
          borderBottom: "eip75gnj",
          borderStart: "tr4kgdav",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
        },
        mediaCollageRoot: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          marginTop: "bcvklqu9",
          marginEnd: "oi9244e8",
          marginBottom: "bi6gxh9e",
          marginStart: "h676nmdw",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
        },
        mediaRoot: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          height: "f0whzcxx",
          justifyContent: "taijpn5t",
          marginTop: "bcvklqu9",
          marginEnd: "oi9244e8",
          marginBottom: "bi6gxh9e",
          marginStart: "h676nmdw",
          paddingBottom: "ae35evdt",
          position: "l9j0dhe7",
        },
        root: {
          alignItems: "bp9cbjyn",
          borderTop: "dwg5866k",
          borderEnd: "ccnbzhu1",
          borderBottom: "eip75gnj",
          borderStart: "tr4kgdav",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          marginTop: "bcvklqu9",
          marginEnd: "oi9244e8",
          marginBottom: "bi6gxh9e",
          marginStart: "h676nmdw",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
        },
        shareWithFilterRoot: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          justifyContent: "taijpn5t",
          marginTop: "bcvklqu9",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
        },
        videoMeetupRoot: {
          marginTop: "aov4n071",
          marginEnd: "oi9244e8",
          marginBottom: "oygrvhab",
          marginStart: "h676nmdw",
          paddingBottom: "ae35evdt",
          position: "l9j0dhe7",
        },
        workMultiAttachmentsRoot: {
          marginTop: "aov4n071",
          marginEnd: "oi9244e8",
          marginBottom: "oygrvhab",
          marginStart: "h676nmdw",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
      };
    function a() {
      var a,
        b = h(c("CometComposerViewStateContext"));
      a = (a = b.attachmentArea) == null ? void 0 : a.activeAttachmentType;
      var d = b.amaMetadata != null || b.quiltsMetadata != null;
      b = (b = b.photoLayout) != null ? b : "classic";
      var e = j.root;
      switch (a) {
        case "MEDIA":
          e = [
            i === !0 ? j.mediaCollageRoot : j.mediaRoot,
            b === "classic" && j.mediaBorder,
          ];
          break;
        case "VIDEO_MEETUP":
          e = j.videoMeetupRoot;
          break;
        case "WORK_MULTI_ATTACHMENTS":
          e = j.workMultiAttachmentsRoot;
          break;
        case "AMA":
        case "QUILT":
          e = j.amaRoot;
          break;
        case "VIEW_ONLY_FEED_ATTACHMENT":
          d && (e = j.amaRoot);
          break;
        case "SHARE_WITH_FILTER":
          e = j.shareWithFilterRoot;
          break;
      }
      return { rootStyles: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerAttachmentArea.react",
  [
    "CometComposerGenericAttachmentPendingPreview.react",
    "CometComposerRemoveAttachmentButton.react",
    "CometErrorBoundary.react",
    "CometFeedStoryRenderLocationContext",
    "CometPlaceholder.react",
    "promiseDone",
    "qex",
    "react",
    "requireDeferred",
    "stylex",
    "useCometComposerAttachmentAreaConfig",
    "useComposerViewStateDispatcher",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback,
      j = c("requireDeferred")("ComposerTelemetryFalcoEvent").__setRef(
        "CometComposerAttachmentArea.react"
      ),
      k = c("qex")._("1138950"),
      l = { storyRenderLocation: "composer_preview" },
      m = {
        amaRemoveButton: { end: "oqnctjl6", transform: "p6rql5qu" },
        collagePlaceholder: { height: "mdso800d" },
        collageRemoveButton: { end: "oqnctjl6", top: "fcg2cn6m" },
        mediaAreaRemoveButton: { end: "dfi94l0s", top: "c4lwxdfx" },
        notMediaAreaRemoveButton: { end: "lthxh50u", top: "bk00n993" },
        removeButton: { position: "pmk7jnqg", transform: "jk2qo03r" },
        roomsRemoveButton: {
          end: "hhcrnkbu",
          position: "pmk7jnqg",
          top: "tmxdrx1h",
          transform: "lo7qbyfk",
        },
      };
    function a(a) {
      var b = a.activeAttachmentType,
        d = a.children,
        e = a.creationSessionID,
        f = a.isEditing,
        g = a.isMediaAttachmentsRequired,
        n = a.onRemove;
      f = ((a = f) != null ? a : !1) && b === "MEDIA";
      a =
        !f &&
        g !== !0 &&
        b !== "VIEW_ONLY_FEED_ATTACHMENT" &&
        b !== "WORK_MULTI_ATTACHMENTS";
      f = b === "AMA" || b === "QUILT";
      var o = c("useComposerViewStateDispatcher")();
      g = i(
        function () {
          if (b == null) return;
          j.onReady(function (a) {
            return a.log(function () {
              var a;
              return {
                call_site: "CometComposerAttachmentArea",
                creation_session_id: (a = e) != null ? a : "",
                debug_info: "REMOVE_ATTACHMENT_TYPE/" + b,
                event: "attachments_changed",
              };
            });
          });
          if (n) {
            c("promiseDone")(
              n(o).then(function (a) {
                a && o({ attachmentType: b, type: "REMOVE_ATTACHMENT_TYPE" });
              })
            );
            return;
          }
          o({ attachmentType: b, type: "REMOVE_ATTACHMENT_TYPE" });
        },
        [b, n, o, e]
      );
      var p = c("useCometComposerAttachmentAreaConfig")();
      p = p.rootStyles;
      if (b != null) {
        d = d(b);
        if (d != null)
          return h.jsx("div", {
            className: c("stylex")(p),
            children: h.jsx(c("CometFeedStoryRenderLocationContext").Provider, {
              value: l,
              children: h.jsxs(c("CometPlaceholder.react"), {
                fallback: h.jsx(
                  c("CometComposerGenericAttachmentPendingPreview.react"),
                  {
                    xstyle:
                      b === "MEDIA" && k === !0 ? m.collagePlaceholder : null,
                  }
                ),
                children: [
                  h.jsx(c("CometErrorBoundary.react"), {
                    onError: g,
                    children: d,
                  }),
                  b !== "SHARE" && b !== "SHARE_WITH_FILTER"
                    ? h.jsx("div", {
                        className: c("stylex")(
                          m.removeButton,
                          b === "MEDIA"
                            ? k === !0
                              ? m.collageRemoveButton
                              : m.mediaAreaRemoveButton
                            : m.notMediaAreaRemoveButton,
                          b === "VIDEO_MEETUP" && m.roomsRemoveButton,
                          f && m.amaRemoveButton
                        ),
                        children:
                          a &&
                          h.jsx(
                            c("CometComposerRemoveAttachmentButton.react"),
                            {
                              buttonType:
                                b === "FILE" ||
                                b === "POLL" ||
                                b === "VIDEO_MEETUP"
                                  ? void 0
                                  : "overlay",
                              removeAttachment: g,
                            }
                          ),
                      })
                    : null,
                ],
              }),
            }),
          });
      }
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      var b;
      return {
        activeAttachmentType:
          (b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType,
        creationSessionID: a.creationSessionID,
        isMediaAttachmentsRequired: a.isMediaAttachmentsRequired,
        onRemove: (b = a.attachmentArea) == null ? void 0 : b.onRemove,
      };
    });
    g["default"] = b;
  },
  98
);
__d(
  "useHandleSideloadedMedia",
  [
    "fbt",
    "CometComposerAttachmentPluginTypes",
    "cometIsMimeTypeForMedia",
    "composerAttachmentAreaChecker",
    "composerAttachmentAreaReducer",
    "composerMediaAttachmentReducer",
    "react",
    "useComposerPluginIneligibility",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useCallback;
    function a(a) {
      a === void 0 && (a = !1);
      c("useComposerViewStateReducer")(
        d("composerAttachmentAreaReducer").composerAttachmentAreaReducer,
        c("composerAttachmentAreaChecker")
      );
      c("useComposerViewStateReducer")(c("composerMediaAttachmentReducer"));
      var b = c("useComposerViewStateDispatcher")(),
        e = c("useComposerPluginIneligibility")(),
        f = e.has(c("CometComposerAttachmentPluginTypes").MEDIA);
      return i(
        function (c) {
          if (!f) {
            c = Array.from(c)
              .filter(function (b) {
                return (
                  d("cometIsMimeTypeForMedia").isMimeTypeForPhoto(b.type) ||
                  (d("cometIsMimeTypeForMedia").isMimeTypeForVideo(b.type) &&
                    !a)
                );
              })
              .map(function (a) {
                return a instanceof File
                  ? a
                  : new File([a], h._("Pasted file").toString());
              });
            c.length > 0 &&
              (b({ attachmentType: "MEDIA", type: "ACTIVATE_ATTACHMENT_TYPE" }),
              b({ files: c, type: "ADD_MEDIA_ATTACHMENT_ITEMS" }));
          }
        },
        [f, a, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerMediaDropTarget.react",
  [
    "fbt",
    "TetraText.react",
    "react",
    "useFileDragEvents",
    "useHandleSideloadedMedia",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useRef;
    function a(a) {
      var b = a.children;
      a = a.disableVideo;
      a = a === void 0 ? !1 : a;
      var d = c("useHandleSideloadedMedia")(a),
        e = j(function (a) {
          switch (a) {
            case "text/plain":
            case "text/html":
            case "text/uri-list":
              return !0;
            default:
              return !1;
          }
        }, []);
      a = j(
        function (a) {
          a = ((a = a.dataTransfer) == null ? void 0 : a.items) || [];
          return (
            a.length > 0 &&
            !Array.from(a).find(function (a) {
              return e(a.type);
            })
          );
        },
        [e]
      );
      var f = c("useFileDragEvents")(
          function (a) {
            return !1;
          },
          document.documentElement,
          a
        ),
        g = k(null);
      c("useFileDragEvents")(
        function (a) {
          d(Array.from(a));
        },
        g.current,
        a
      );
      return i.jsxs("div", {
        className: "k4urcfbm l9j0dhe7 datstx6m rq0escxv",
        ref: g,
        children: [
          b,
          f
            ? i.jsx("div", {
                className:
                  "kr520xx4 j9ispegn pmk7jnqg taijpn5t n7fi1qx3 j83agx80 i09qtzwb rnr61an3 bp9cbjyn",
                children: i.jsx("div", {
                  className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                  children: i.jsx(c("TetraText.react"), {
                    type: "body1",
                    children: h._("Drop Photos or Videos"),
                  }),
                }),
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
  "CometComposerWarnStatusTextLength.react",
  [
    "CometComposerInlineErrorRenderer.react",
    "getPlainTextFromDeferredDraftEditorState",
    "react",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 63206,
      j = 100;
    function a(a) {
      var b = a.characterLimit,
        d = a.editorState;
      a = a.xstyle;
      if (d == null) return null;
      b = (b = b) != null ? b : i;
      d = c("getPlainTextFromDeferredDraftEditorState")(d).length;
      return d + j + 1 > b
        ? h.jsx(c("CometComposerInlineErrorRenderer.react"), {
            error: b - d,
            xstyle: a,
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      return { characterLimit: a.characterLimit, editorState: a.editorState };
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometMediaEditorPageResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")("CometMediaEditorPage.react").__setRef(
      "CometMediaEditorPageResource"
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "cometComposerMediaUploadErrorUtil",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 3,
      h = "NO_ADDITIONAL_ERROR_MESSAGES_FOUND";
    function i(a) {
      return (a || []).reduce(
        function (a, b) {
          if (b.state === "FAILED") {
            b = b.error;
            b == null
              ? (a.NO_ADDITIONAL_ERROR_MESSAGES_FOUND += 1)
              : (a[b] = isNaN(a[b]) ? 1 : a[b] + 1);
          }
          return a;
        },
        { NO_ADDITIONAL_ERROR_MESSAGES_FOUND: 0 }
      );
    }
    function a(a) {
      var b = Object.keys(a);
      return b.length === 1
        ? a[b[0]]
        : b.reduce(function (b, c) {
            return c !== h && a[c] > b ? a[c] : b;
          }, 0);
    }
    function b(a) {
      if (a == null) return null;
      var b = i(a),
        c,
        d = Object.keys(b);
      d =
        d.length === 1
          ? b[d[0]]
          : d.reduce(function (a, d) {
              if (a === h) return a;
              if (b[d] > a) {
                c = d;
                return b[d];
              }
              return a;
            }, 0);
      var e = [];
      a.some(function (a) {
        if (
          (a == null ? void 0 : a.state) === "FAILED" &&
          (String(a == null ? void 0 : a.error) === c ||
            (c == null && (a == null ? void 0 : a.error) == null))
        ) {
          e.push((a = a.file) == null ? void 0 : a.name);
        }
        return e.length === g ? !0 : !1;
      });
      return { additionalErrorMessage: c, count: d, fileNames: e };
    }
    f.getGroupedErrors = i;
    f.getMostCommonErrorCount = a;
    f.getMostCommonError = b;
  },
  66
);
__d(
  "cometComposerValidateMediaLimit",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 80;
    function a(a) {
      var b = a.mediaAttachments;
      if (b == null) return null;
      a = (a = a == null ? void 0 : a.mediaAttachmentsLimit) != null ? a : i;
      return b.length > a
        ? h._("You can only add {maxselect} photos to a post.", [
            h._param("maxselect", a),
          ])
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometComposerValidateMediaUploadStarted",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b;
      b =
        ((b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType) !==
          "MEDIA" ||
        (a.mediaAttachments != null && a.mediaAttachments.length > 0);
      a = (a.mediaAttachments || []).some(function (a) {
        return a.state === "NEW";
      });
      return !b || a
        ? h._("You cannot post while media upload is queuing")
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerPushPageMinWidthSync.react",
  ["react", "withComposerViewStatePart"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.composerDialogWidth;
      return h.jsx("div", { style: { minWidth: a }, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      return {
        composerDialogWidth:
          (a = a.composerSizeAndStyleMetadata) == null
            ? void 0
            : a.composerDialogWidth,
      };
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometComposerSATPContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      emojiPickerIsHidden: !1,
      satpContainerIsResponsive: !1,
      satpExploreIsDisabled: !1,
      satpFontSize: 30,
      satpMaxNewLines: 3,
      satpRemovalIsDisabled: !1,
      satpTextVerticalAlignment: "top",
    });
    g["default"] = b;
  },
  98
);
__d(
  "decorateMultiStepContainerPushPage",
  [
    "CometComposerHeader.react",
    "CometComposerPushPageGlimmer.react",
    "CometComposerPushPageMinWidthSync.react",
    "CometHideLayerOnEscape.react",
    "CometPlaceholder.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return a == null
        ? null
        : function (b, d, e) {
            var f = function (a) {
              var f = a.onReturn;
              return h.jsx(c("CometHideLayerOnEscape.react"), {
                onHide: f,
                children: h.jsxs(c("CometComposerPushPageMinWidthSync.react"), {
                  children: [
                    (e == null ? void 0 : e.hasCustomHeader) === !0
                      ? null
                      : h.jsx(c("CometComposerHeader.react"), {
                          onBack: function () {
                            f();
                            var a = e == null ? void 0 : e.onBack;
                            a && a();
                          },
                          onClose: e == null ? void 0 : e.onClose,
                          testid: void 0,
                          title: b,
                          withBackButton:
                            (a = e == null ? void 0 : e.withBackButton) != null
                              ? a
                              : !0,
                          withCloseButton:
                            (a = e == null ? void 0 : e.withCloseButton) != null
                              ? a
                              : !1,
                        }),
                    h.jsx(
                      c("CometPlaceholder.react"),
                      {
                        fallback: h.jsx(
                          c("CometComposerPushPageGlimmer.react"),
                          {
                            withPopover: !1,
                            xstyle: e == null ? void 0 : e.xstyle,
                          }
                        ),
                        children: h.jsx(d, { onReturn: f }),
                      },
                      1
                    ),
                  ],
                }),
              });
            };
            return a(f);
          };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometComposerSATPConfig",
  ["CometComposerSATPContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometComposerSATPContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerClientErrorMessage.react",
  [
    "CometComposerWarnStatusTextLength.react",
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "react",
    "useComposerValidationErrors",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometComposerClientErrorMessageRenderer.react"
        ).__setRef("CometComposerClientErrorMessage.react")
      );
    function a(a) {
      var b;
      a = a.xstyle;
      var d = c("useComposerValidationErrors")();
      b = Object.keys((b = d) != null ? b : {});
      if (b.length === 0) {
        var e = h.jsx(c("CometComposerWarnStatusTextLength.react"), {
          xstyle: a,
        });
        return e;
      }
      e = b[0];
      b = d[e];
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: h.jsx(i, { error: b, errorType: e, xstyle: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getDeferredDraftEditorStateHasFocus",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a == null
        ? !1
        : a.__type === "editor-state-based"
        ? a.draftEditorState.getSelection().getHasFocus()
        : a.hasFocus;
    }
    f["default"] = a;
  },
  66
);
__d(
  "UnpublishedContentTypeApiEnum",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      SCHEDULED: "SCHEDULED",
      SCHEDULED_RECURRING: "SCHEDULED_RECURRING",
      DRAFT: "DRAFT",
      ADS_POST: "ADS_POST",
      INLINE_CREATED: "INLINE_CREATED",
      PREVIEW: "PREVIEW",
      VALIDATION: "VALIDATION",
      PUBLISHED: "PUBLISHED",
      REVIEWABLE_BRANDED_CONTENT: "REVIEWABLE_BRANDED_CONTENT",
    });
    f["default"] = a;
  },
  66
);
__d(
  "ComposerStoryMutationLogging",
  [
    "UnpublishedContentTypeApiEnum",
    "cometComposerLogger",
    "getJSEnumSafe",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      if (d.isComposerPostLogged === !0) return;
      b = {
        composerEntryPointName: b.composer_entry_point,
        composerSourceSurface: b.composer_source_surface,
        composerType: b.composer_type,
        isNewsFeedSelected: !0,
        payload: d == null ? void 0 : d.payload,
        unpublishedContentType:
          b.unpublished_content_data &&
          c("getJSEnumSafe")(
            c("UnpublishedContentTypeApiEnum"),
            b.unpublished_content_data.unpublished_content_type
          ),
      };
      c("cometComposerLogger")({ fields: b, type: "COMPOSER_POST" }, a);
      d.isComposerPostLogged = !0;
    }
    function b(a) {
      a =
        (a =
          a == null
            ? void 0
            : (a = a.variables) == null
            ? void 0
            : a.creationSessionID) != null
          ? a
          : "";
      a === "" &&
        c("recoverableViolation")(
          "Expected to provide a creationSessionID here",
          "comet_composer"
        );
      return a;
    }
    g.logComposerPostAction = a;
    g.getCreationSessionId = b;
  },
  98
);
__d(
  "isGroupStoryRenderLocation",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new Set([
      "group_activity_log",
      "group_admin_to_member_feedback",
      "group_alerted_queue",
      "group_bio",
      "group_flagged_queue",
      "group_grid_island",
      "group_hoisted",
      "group_immersive",
      "group_mall",
      "group_pending_queue",
      "group_permalink",
      "group_report_queue",
      "group_units",
      "group",
      "groups_gsym_see_more",
      "groups_landing",
      "groups_my_posts",
      "groups_saved_posts",
      "groups_tab",
      "snaptu_groups_feed",
      "profile_community",
    ]);
    function a(a) {
      return g.has(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "ComposerStoryCreateMutation",
  [
    "CometRelay",
    "ComposerStoryCreateMutation.graphql",
    "ComposerStoryMutationLogging",
    "OptimisticLoadingTypeEnum",
    "UnpublishedContentTypeApiEnum",
    "WebPixelRatio",
    "cometComposerLogger",
    "cometUniqueID",
    "cr:1607069",
    "getIsOptimisticPreviewEnabled",
    "getJSEnumSafe",
    "gkx",
    "isGroupStoryRenderLocation",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("ComposerStoryCreateMutation.graphql"));
    function j(a, b) {
      a = a == null ? void 0 : a.variables;
      var e = a == null ? void 0 : a.renderLocation,
        f = a == null ? void 0 : a.feedLocation;
      return {
        UFI2CommentsProvider_commentsKey:
          a == null ? void 0 : a.UFI2CommentsProvider_commentsKey,
        displayCommentsContextEnableComment:
          a == null ? void 0 : a.displayCommentsContextEnableComment,
        displayCommentsContextIsAdPreview:
          a == null ? void 0 : a.displayCommentsContextIsAdPreview,
        displayCommentsContextIsAggregatedShare:
          a == null ? void 0 : a.displayCommentsContextIsAggregatedShare,
        displayCommentsContextIsStorySet:
          a == null ? void 0 : a.displayCommentsContextIsStorySet,
        feedLocation: a == null ? void 0 : a.feedLocation,
        feedbackSource: a == null ? void 0 : a.feedbackSource,
        gridMediaWidth: a == null ? void 0 : a.gridMediaWidth,
        hashtag: a == null ? void 0 : a.hashtag,
        input: b,
        isFeed: e === "homepage_stream",
        isFunFactPost: b.fun_fact_prompt_id != null,
        isFundraiser: e === "fundraiser_page",
        isGroup: e != null && c("isGroupStoryRenderLocation")(e),
        isPageNewsFeed: e === "pages_feed",
        isProfileReviews: f === "PAGE_SURFACE_RECOMMENDATIONS",
        isSocialLearning: e === "group_units",
        isTimeline: e === "timeline",
        prefetchRecentMediaPhotos: c("gkx")("1996812"),
        privacySelectorRenderLocation: "COMET_STREAM",
        renderLocation: e,
        scale: d("WebPixelRatio").get(),
        useCometPhotoViewerPlaceholderFrag: c("gkx")("686"),
      };
    }
    function a(a, e, f, g) {
      var h,
        k = d("ComposerStoryMutationLogging").getCreationSessionId(f),
        l = j(f, e);
      d("ComposerStoryMutationLogging").logComposerPostAction(k, e, g);
      c("cometComposerLogger")(
        {
          fields: { destination: "feed" },
          type: "COMPOSER_POST_MUTATION_START",
        },
        k
      );
      var m = c("cometUniqueID")(),
        n = d("CometRelay").commitMutation(a, {
          mutation: i,
          onCompleted: function (d) {
            var h;
            c("cometComposerLogger")(
              {
                fields: {
                  composerType: e.composer_type,
                  loggingIds:
                    (h = d.story_create) == null ? void 0 : h.logging_token,
                  payload: g == null ? void 0 : g.payload,
                  retryCount: g == null ? void 0 : g.retryCount,
                  unpublishedContentType: c("getJSEnumSafe")(
                    c("UnpublishedContentTypeApiEnum"),
                    (h = e.unpublished_content_data) == null
                      ? void 0
                      : h.unpublished_content_type
                  ),
                },
                type: "COMPOSER_POST_SUCCESS",
              },
              k
            );
            if (d.story_create != null && b("cr:1607069") != null) {
              var i = (h = d.story_create.story) == null ? void 0 : h.id;
              if (i != null) {
                var j = (h = c("qex")._("1607071")) != null ? h : "do_nothing";
                j !== "do_nothing" &&
                  a.commitUpdate(function (a) {
                    b("cr:1607069")(
                      i,
                      a,
                      j === "dock_expanded" ? "EXPANDED" : "MINIMIZED"
                    );
                  });
              }
            }
            f && f.onCompleted && f.onCompleted(d, l);
            c("cometComposerLogger")(
              {
                fields: { destination: "feed" },
                type: "COMPOSER_POST_SERVER_CONTENT_RENDERED",
              },
              k
            );
          },
          onError: function (a) {
            var b;
            c("cometComposerLogger")(
              {
                fields: {
                  composerType: e.composer_type,
                  errorDescription:
                    typeof a.description === "string"
                      ? a.description
                      : (b = a.description) == null
                      ? void 0
                      : b.toString(),
                  errorInfo: a.message,
                  payload: g == null ? void 0 : g.payload,
                  retryCount: g == null ? void 0 : g.retryCount,
                  unpublishedContentType: c("getJSEnumSafe")(
                    c("UnpublishedContentTypeApiEnum"),
                    (b = e.unpublished_content_data) == null
                      ? void 0
                      : b.unpublished_content_type
                  ),
                },
                type: "COMPOSER_POST_FAILURE",
              },
              k
            );
            f && f.onError && f.onError(a);
          },
          optimisticResponse:
            (h = f && f.optimisticResponse) != null ? h : void 0,
          optimisticUpdater: function (a) {
            f && f.optimisticUpdater && f.optimisticUpdater(a, m);
          },
          updater: function (a) {
            var b;
            b = c("getIsOptimisticPreviewEnabled")({
              transformedMediaData: (b = e.attachments) != null ? b : [],
            });
            b &&
              c("cometComposerLogger")(
                {
                  fields: {
                    composerType: e.composer_type,
                    publishFlowOptimisticStep:
                      "TRIGGER_REPLACE_OPTIMISTIC_POST",
                  },
                  type: "COMPOSER_PUBLISH_FLOW_OPTIMISTIC_PROCESS",
                },
                k
              );
            b = a.getRootField("story_create");
            b = b && b.getLinkedRecord("feed_story_edge");
            b = b && b.getLinkedRecord("node");
            b &&
              (b.setValue(
                c("OptimisticLoadingTypeEnum").SHOW_ANIMATION,
                "optimistic_loading_type"
              ),
              b.setValue(k, "creation_session_id"));
            f && f.updater && f.updater(a, m);
          },
          variables: babelHelpers["extends"]({ input: e }, l),
        });
      return {
        dispose: function () {
          n && n.dispose(), (n = null);
        },
      };
    }
    function e(a, b, e, f) {
      var g = j(e, b);
      d("ComposerStoryMutationLogging").logComposerPostAction(
        d("ComposerStoryMutationLogging").getCreationSessionId(e),
        b,
        f
      );
      var h = c("cometUniqueID")(),
        k = d("CometRelay").applyOptimisticMutation(a, {
          mutation: i,
          optimisticResponse: e && e.optimisticResponse,
          optimisticUpdater: function (a) {
            e && e.optimisticUpdater && e.optimisticUpdater(a, h);
          },
          variables: babelHelpers["extends"]({ input: b }, g),
        });
      return {
        dispose: function () {
          k && k.dispose(), (k = null);
        },
      };
    }
    g.commit = a;
    g.commitOptimistic = e;
  },
  98
);
__d(
  "ComposerStoryEditMutation",
  [
    "CometRelay",
    "ComposerStoryEditMutation.graphql",
    "ComposerStoryMutationLogging",
    "WebPixelRatio",
    "cometComposerLogger",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("ComposerStoryEditMutation.graphql"));
    function a(a, b, e, f) {
      var g,
        h = e == null ? void 0 : e.variables,
        j =
          h != null
            ? {
                feedLocation:
                  (g = h == null ? void 0 : h.feedLocation) != null
                    ? g
                    : "NEWSFEED",
                renderLocation:
                  (g = h == null ? void 0 : h.renderLocation) != null
                    ? g
                    : "homepage_stream",
              }
            : null;
      g =
        (e == null
          ? void 0
          : (g = e.variables) == null
          ? void 0
          : g.isGroupViewerContent) || !1;
      var k = d("ComposerStoryMutationLogging").getCreationSessionId(e);
      g = babelHelpers["extends"](
        {
          displayCommentsContextEnableComment: null,
          displayCommentsContextIsAdPreview: null,
          displayCommentsContextIsAggregatedShare: null,
          displayCommentsContextIsStorySet: null,
          displayCommentsFeedbackContext: null,
          feedbackSource: 1,
          isGroupViewerContent: g,
          isSocialLearning:
            (h == null ? void 0 : h.renderLocation) === "group_units",
          privacySelectorRenderLocation: "COMET_STREAM",
          scale: d("WebPixelRatio").get(),
        },
        j
      );
      f &&
        c("gkx")("759") &&
        d("ComposerStoryMutationLogging").logComposerPostAction(k, b, f);
      c("cometComposerLogger")(
        {
          fields: { destination: "feed" },
          type: "COMPOSER_POST_MUTATION_START",
        },
        k
      );
      h = function (a) {
        c("cometComposerLogger")(
          {
            fields: {
              composerType: b.composer_type,
              payload: f == null ? void 0 : f.payload,
              retryCount: f == null ? void 0 : f.retryCount,
            },
            type: "COMPOSER_POST_SUCCESS",
          },
          k
        ),
          e == null
            ? void 0
            : e.onCompleted == null
            ? void 0
            : e.onCompleted(a),
          c("cometComposerLogger")(
            {
              fields: { destination: "feed" },
              type: "COMPOSER_POST_SERVER_CONTENT_RENDERED",
            },
            k
          );
      };
      var l = function (a) {
          var d;
          c("cometComposerLogger")(
            {
              fields: {
                composerType: b.composer_type,
                errorDescription:
                  typeof a.description === "string"
                    ? a.description
                    : (d = a.description) == null
                    ? void 0
                    : d.toString(),
                errorInfo: a.message,
                payload: f == null ? void 0 : f.payload,
                retryCount: f == null ? void 0 : f.retryCount,
              },
              type: "COMPOSER_POST_FAILURE",
            },
            k
          );
          e == null ? void 0 : e.onError == null ? void 0 : e.onError(a);
        },
        m = function (a, c) {
          var d = a.get(b.story_id);
          if (d != null) {
            d = d.getLinkedRecords("nfx_action_menu_items", {
              feed_location: j == null ? void 0 : j.feedLocation,
            });
            if (d != null)
              for (
                var d = d,
                  f = Array.isArray(d),
                  g = 0,
                  d = f
                    ? d
                    : d[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                ;

              ) {
                var h;
                if (f) {
                  if (g >= d.length) break;
                  h = d[g++];
                } else {
                  g = d.next();
                  if (g.done) break;
                  h = g.value;
                }
                h = h;
                h && h.invalidateRecord();
              }
          }
          h = e == null ? void 0 : e.updater;
          h != null && h(a, c);
        },
        n = d("CometRelay").commitMutation(a, {
          mutation: i,
          onCompleted: h,
          onError: l,
          updater: m,
          variables: babelHelpers["extends"](
            {
              input: babelHelpers["extends"]({}, b, {
                editable_post_feature_capabilities: [
                  "CONTAINED_LINK",
                  "CONTAINED_MEDIA",
                  "POLL",
                ],
              }),
            },
            g
          ),
        });
      return {
        dispose: function () {
          n && n.dispose(), (n = null);
        },
      };
    }
    g.commit = a;
  },
  98
);
__d(
  "FeedComposerCometAnimatedImageAttachmentAreaResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "FeedComposerCometAnimatedImageAttachmentArea.react"
    ).__setRef("FeedComposerCometAnimatedImageAttachmentAreaResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "getDeferredComposerLogger",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function (b, c, d) {
        a.loadImmediately(function (a) {
          a(b, c, d);
        });
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "generateOptimisticResponse",
  [
    "CometRelay",
    "JSResourceForInteraction",
    "OptimisticLoadingTypeEnum",
    "ServerTime",
    "cometComposerLogger",
    "cometUniqueID",
    "getIsOptimisticPreviewEnabled",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
        "CometFeedUnitStoryStrategy.react"
      ).__setRef("generateOptimisticResponse"),
      i = c("JSResourceForInteraction")(
        "CometFeedUnitStoryStrategy_feedUnit$normalization.graphql"
      ).__setRef("generateOptimisticResponse"),
      j = c("JSResourceForInteraction")(
        "CometFeedStoryActorPhotoStrategy.react"
      ).__setRef("generateOptimisticResponse"),
      k = c("JSResourceForInteraction")(
        "CometFeedStoryActorPhotoStrategy_actorPhoto$normalization.graphql"
      ).__setRef("generateOptimisticResponse"),
      l = c("JSResourceForInteraction")(
        "CometFeedStoryDefaultContentStrategy.react"
      ).__setRef("generateOptimisticResponse"),
      m = c("JSResourceForInteraction")(
        "CometFeedStoryDefaultContentStrategy_content$normalization.graphql"
      ).__setRef("generateOptimisticResponse"),
      n = c("JSResourceForInteraction")(
        "CometFeedStoryLargeMessageRenderingStrategy_message$normalization.graphql"
      ).__setRef("generateOptimisticResponse"),
      o = c("JSResourceForInteraction")(
        "CometFeedStoryLargeMessageRenderingStrategy.react"
      ).__setRef("generateOptimisticResponse"),
      p = c("JSResourceForInteraction")(
        "CometFeedStoryMessageContainerRenderingStrategy_messageContainer$normalization.graphql"
      ).__setRef("generateOptimisticResponse"),
      q = c("JSResourceForInteraction")(
        "CometFeedStoryMessageContainerRenderingStrategy.react"
      ).__setRef("generateOptimisticResponse"),
      r = c("JSResourceForInteraction")(
        "CometFeedStoryDefaultLayoutStrategy_layout$normalization.graphql"
      ).__setRef("generateOptimisticResponse"),
      s = c("JSResourceForInteraction")(
        "CometFeedStoryDefaultLayoutStrategy.react"
      ).__setRef("generateOptimisticResponse"),
      t = c("JSResourceForInteraction")(
        "CometFeedStoryTimestampStrategy_timestamp$normalization.graphql"
      ).__setRef("generateOptimisticResponse"),
      u = c("JSResourceForInteraction")(
        "CometFeedStoryTimestampStrategy.react"
      ).__setRef("generateOptimisticResponse"),
      v = c("JSResourceForInteraction")(
        "CometFeedStoryTitleWithActorStrategy_contextTitle$normalization.graphql"
      ).__setRef("generateOptimisticResponse"),
      w = c("JSResourceForInteraction")(
        "CometFeedStoryTitleWithActorStrategy.react"
      ).__setRef("generateOptimisticResponse"),
      x = c("JSResourceForInteraction")(
        "CometFeedStoryDefaultContextLayoutStrategy_contextLayout$normalization.graphql"
      ).__setRef("generateOptimisticResponse"),
      y = c("JSResourceForInteraction")(
        "CometFeedStoryDefaultContextLayoutStrategy.react"
      ).__setRef("generateOptimisticResponse"),
      z = c("qex")._("1221850") === !0;
    function a(a, b, e, f) {
      var g,
        j = b == null ? void 0 : (g = b.message) == null ? void 0 : g.text,
        k =
          b == null ? void 0 : (g = b.attachments) == null ? void 0 : g.length;
      b = k != null && k !== 0;
      g = c("cometUniqueID")();
      var l = c("cometUniqueID")(),
        m = e.mediaAttachments,
        n =
          m != null
            ? m
                .map(function (a) {
                  if (a.file == null) return null;
                  if (
                    a.fileType !== "FILE" &&
                    a.fileType !== "UNKNOWN" &&
                    a.state !== "CLIENT_PROCESSING" &&
                    a.state !== "CLIENT_PROCESSING_COMPLETE"
                  ) {
                    var b = URL.createObjectURL(a.file);
                    return {
                      entID: a.state === "UPLOADED" ? a.entID : void 0,
                      objectURL: b,
                      type: a.fileType,
                      useCDNPreview: a.useCDNPreview,
                    };
                  }
                  return null;
                })
                .filter(Boolean)
            : null;
      m = function () {
        if (n != null && z)
          return c("OptimisticLoadingTypeEnum").SHOW_POST_PREVIEW;
        else if (k != null && k !== 0)
          return c("OptimisticLoadingTypeEnum").SHOW_PROGRESS_BAR;
        else if (j != null && j !== "")
          return c("OptimisticLoadingTypeEnum").SHOW_POST_PREVIEW;
        else return c("OptimisticLoadingTypeEnum").SHOW_LOADER;
      };
      m = m();
      e = c("getIsOptimisticPreviewEnabled")({
        viewStateMediaData:
          (e = e == null ? void 0 : e.mediaAttachments) != null ? e : [],
      });
      if (e) {
        c("cometComposerLogger")(
          {
            fields: {
              publishFlowOptimisticStep: "CREATE_OPTIMISTIC_RESPONSE",
              typeOfOptimisticPost: m,
            },
            type: "COMPOSER_PUBLISH_FLOW_OPTIMISTIC_PROCESS",
          },
          f
        );
        return {
          story_create: {
            feed_story_edge: {
              category: null,
              cursor: null,
              deduplication_key: null,
              feed_backend_data: null,
              node: d("CometRelay").createPayloadFor3DField(
                "CometFeedUnitContainerSection_feedUnit",
                i,
                h,
                {
                  __isFeedUnit: !0,
                  __isNode: !0,
                  __isTrackableFeedUnit: "Story",
                  __typename: "Story",
                  attached_story: null,
                  call_to_action: null,
                  click_tracking_linkshim_cb: null,
                  client_view_config: null,
                  comet_sections: {
                    aymt_footer: null,
                    call_to_action: null,
                    content: A(l, g, j, b),
                    context_layout: D(a, g),
                    copyright_violation_header: null,
                    feedback: null,
                    footer: null,
                    header: null,
                    layout: H(),
                    outer_footer: null,
                  },
                  creation_session_id: f,
                  debug_info: null,
                  encrypted_click_tracking: null,
                  encrypted_tracking: null,
                  feedback: { associated_group: { id: null }, id: l },
                  id: g,
                  matched_terms: [],
                  optimistic_loading_type: m,
                  optimistic_media_attachments: n,
                  should_host_actor_link_in_watch: null,
                  sponsored_data: null,
                  trackingdata: { id: null },
                  viewability_config: [],
                }
              ),
            },
            fundraiser_feed_story_edge: void 0,
            group_feed_story_edge: void 0,
            logging_token: null,
            story: {
              attachments: [],
              default_actor: null,
              gemini_group_draft_summary: void 0,
              id: g,
              legacy_story_hideable_id: null,
              social_learning_info_unit_module: void 0,
              to: void 0,
            },
            story_id: null,
            timeline_feed_units_edge: void 0,
            user: void 0,
          },
        };
      }
      return null;
    }
    function A(a, b, c, e) {
      return d("CometRelay").createPayloadFor3DField(
        "CometFeedStory_story",
        m,
        l,
        {
          __isICometStorySection: !0,
          __typename: "CometFeedStoryDefaultContentStrategy",
          is_prod_eligible: !0,
          story: {
            actors: [],
            attached_story: null,
            attachments: [],
            comet_sections: {
              above_message: null,
              aggregated_stories: null,
              attached_story: null,
              attachment_overlay: null,
              info_icon: null,
              message: B(b, c, e),
              message_container: C(b, c),
              message_sticker: null,
              message_suffix: null,
            },
            encrypted_tracking: null,
            feedback: { id: a },
            id: b,
            sponsored_data: null,
            text_format_metadata: null,
          },
        }
      );
    }
    function B(a, b, c) {
      return d("CometRelay").createPayloadFor3DField(
        "CometFeedStoryMessageSection_story",
        n,
        o,
        {
          __isICometStorySection: !0,
          __typename: "CometFeedStoryLargeMessageRenderingStrategy",
          is_prod_eligible: !0,
          story: {
            id: a,
            is_text_only_story: c,
            message: {
              aggregated_ranges: [],
              color_ranges: [],
              delight_ranges: [],
              image_ranges: [],
              inline_style_ranges: [],
              ranges: [],
              text: b,
            },
          },
        }
      );
    }
    function C(a, b) {
      return d("CometRelay").createPayloadFor3DField(
        "CometFeedStoryMessageContainerSection_story",
        p,
        q,
        {
          __isICometStorySection: !0,
          __typename: "CometFeedStoryMessageContainerRenderingStrategy",
          is_prod_eligible: !0,
          story: {
            attachments: [],
            comet_sections: { message: null },
            id: a,
            message: { text: b },
            referenced_sticker: null,
            text_format_metadata: null,
          },
        }
      );
    }
    function D(a, b) {
      return d("CometRelay").createPayloadFor3DField(
        "CometFeedStoryContextSection_story",
        x,
        y,
        {
          __isICometStorySection: !0,
          __typename: "CometFeedStoryDefaultContextLayoutStrategy",
          is_prod_eligible: !0,
          story: {
            actors: [],
            can_viewer_see_menu: !0,
            comet_sections: {
              action_link: null,
              actor_photo: E(b),
              alert_badge: null,
              audience: null,
              badge_action_link: null,
              classifier_dogfooding: null,
              identity_badge: null,
              location: null,
              location_transparency: null,
              page_admin_attribution: null,
              paid_partnership_label: null,
              sponsored_label: null,
              timestamp: F(b),
              title: G(a, b),
              viewed_count: null,
              work_intern_qa_question: null,
              work_intern_task: null,
            },
            debug_info: null,
            encrypted_tracking: null,
            id: b,
            serialized_frtp_identifiers: null,
          },
        }
      );
    }
    function E(a) {
      return d("CometRelay").createPayloadFor3DField(
        "CometFeedStoryActorPhotoSection_story",
        k,
        j,
        {
          __isICometStorySection: !0,
          __typename: "CometFeedStoryActorPhotoStrategy",
          is_prod_eligible: !0,
          story: { actors: [], id: a },
        }
      );
    }
    function F(a) {
      return d("CometRelay").createPayloadFor3DField(
        "CometFeedStoryTimestampSection_story",
        t,
        u,
        {
          __isICometStorySection: !0,
          __typename: "CometFeedStoryTimestampStrategy",
          is_prod_eligible: !0,
          story: {
            creation_time: Math.round(d("ServerTime").getMillis() / 1e3),
            ghl_label: null,
            id: a,
            url: null,
          },
        }
      );
    }
    function G(a, b) {
      return d("CometRelay").createPayloadFor3DField(
        "CometFeedStoryTitleSection_story",
        v,
        w,
        {
          __isICometStorySection: !0,
          __typename: "CometFeedStoryTitleWithActorStrategy",
          is_prod_eligible: !0,
          story: {
            actors: [{ __typename: "User", id: a, name: void 0, url: void 0 }],
            comet_sections: void 0,
            encrypted_tracking: null,
            id: b,
            title: null,
          },
        }
      );
    }
    function H() {
      return d("CometRelay").createPayloadFor3DField(
        "CometFeedStory_story__layout",
        r,
        s,
        {
          __isICometStorySection: !0,
          __typename: "CometStoryDefaultLayoutStrategy",
          is_prod_eligible: !0,
        }
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "transformersArrayHelpers",
  ["killswitch"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a.map(function (a) {
        if (typeof a === "function") return a;
        else return a.creationDataTransformer;
      });
    }
    function b(a) {
      return a.map(function (a) {
        if (typeof a === "function")
          return function (b, c, d, e) {
            return a(c, d, e);
          };
        else if (c("killswitch")("WWW_EDIT_COMPOSER_SEND_ONLY_UPDATES"))
          return function (b, c, d, e) {
            return a.creationDataTransformer(c, d, e);
          };
        else return a.mutationDataTransformer;
      });
    }
    g.transformersArrayToCreationDataTransformers = a;
    g.transformersArrayToMutationDataTransformers = b;
  },
  98
);
__d(
  "useComposerSubmitExecute",
  [
    "CometRelay",
    "NetworkStatus",
    "Promise",
    "TCometFeedComposerFeatureDefinition",
    "cometUniqueID",
    "generateOptimisticResponse",
    "promiseDone",
    "react",
    "requireDeferred",
    "transformComposerViewStateToCreationData",
    "transformersArrayHelpers",
    "useNotificationsTrackingString",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useRef,
      i = c("requireDeferred")("ComposerStoryCreateMutation").__setRef(
        "useComposerSubmitExecute"
      ),
      j = 2;
    function k(a) {
      return (
        a.name === "NetworkTimeoutError" || a.name === "NetworkTransportError"
      );
    }
    function l(a) {
      var b;
      c("NetworkStatus").isOnline()
        ? a()
        : (b = c("NetworkStatus").onChange(function (c) {
            c = c.online;
            c && (b.remove(), a());
          }));
    }
    function a(a) {
      var e = a.actorID,
        f = a.creationSessionID,
        g = c("cometUniqueID")(),
        m = {
          composer_entry_point: a.composerEntryPoint,
          composer_source_surface: a.composerSourceSurface,
          composer_type: a.composerType,
          idempotence_token: a.creationSessionID + "_" + a.requestType,
          source: "WWW",
        },
        n = c("useNotificationsTrackingString")(),
        o = d("CometRelay").useRelayEnvironment(),
        p = h(0),
        q = function h(q) {
          var r = q.loggingData,
            s = q.mutationConfig,
            t = q.onBeforeCommit,
            u = q.onCompleted,
            v = q.onError,
            w = q.shouldRunRetries,
            x = q.transformers,
            y = q.updateStoreOptimistically,
            z = q.useCommitOptimistic,
            A = q.useUpdater,
            B = A === void 0 ? !1 : A,
            C = q.viewState,
            D = null;
          if (a.composerType === "goodwill_campaign") {
            q =
              ((A = C.linkAttachment) == null ? void 0 : A.storyId) != null
                ? "THROWBACK_POST"
                : "NOT_THROWBACK_POST";
            A = C.goodwillCometMetadata;
            D = { goodwill_comet_metadata: A, is_throwback_post: q };
          }
          var E = function (a) {
              w && k(a) && p.current < j
                ? (p.current++,
                  l(function () {
                    h({
                      loggingData: r,
                      mutationConfig: s,
                      onBeforeCommit: t,
                      onCompleted: u,
                      onError: v,
                      shouldRunRetries: w,
                      transformers: x,
                      updateStoreOptimistically: y,
                      useCommitOptimistic: z,
                      useUpdater: B,
                      viewState: C,
                    });
                  }))
                : v && v(a);
            },
            F = { disposable: null };
          c("promiseDone")(
            b("Promise")
              .all(
                d(
                  "TCometFeedComposerFeatureDefinition"
                ).genCreationDataTransformersFromFeatureDefinitions(
                  a.featureDefinitions || [],
                  C
                )
              )
              .then(function (b) {
                b = x.concat(b);
                c("transformComposerViewStateToCreationData")(
                  C,
                  s,
                  d(
                    "transformersArrayHelpers"
                  ).transformersArrayToCreationDataTransformers(b),
                  babelHelpers["extends"]({}, m, D),
                  function (b) {
                    (r.retryCount = p.current.toString()),
                      (b.logging = { composer_session_id: f }),
                      (b.tracking = b.tracking ? b.tracking.concat(n) : [n]),
                      i.onReady(function (d) {
                        var h = d.commit;
                        d = d.commitOptimistic;
                        d = z === !0 ? d : h;
                        t && t();
                        F.disposable = d(
                          o,
                          b,
                          {
                            onCompleted: function (a) {
                              return u && u(a);
                            },
                            onError: E,
                            optimisticResponse:
                              y === !0
                                ? c("generateOptimisticResponse")(e, b, C, f)
                                : void 0,
                            optimisticUpdater: function (b) {
                              return y === !0
                                ? a.optimisticUpdater &&
                                    a.optimisticUpdater(b, g)
                                : void 0;
                            },
                            updater: function (b) {
                              B && a.updater(b, g);
                            },
                            variables: a.variables,
                          },
                          r
                        );
                      });
                  }
                );
              })
          );
          return F;
        };
      return q;
    }
    g["default"] = a;
  },
  98
);
__d(
  "feedEditStoryLiveInsertUpdater",
  ["OptimisticLoadingTypeEnum"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d = b.getRootField("story_edit");
      d = d && d.getLinkedRecord("story");
      if (!d) {
        d = b.get(a);
        if (!d) return;
        d.setValue(
          c("OptimisticLoadingTypeEnum").PENDING,
          "optimistic_loading_type"
        );
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "transformComposerViewStateToMutationData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d, e) {
      function f(d, g) {
        var h = c[g];
        if (h != null) {
          var i = function (a) {
            f(a, g + 1);
          };
          h(a, b, d, i);
        } else e(d);
      }
      f(d, 0);
    }
    f["default"] = a;
  },
  66
);
__d(
  "useEditComposerSubmit",
  [
    "CometRelay",
    "feedEditStoryLiveInsertUpdater",
    "requireDeferred",
    "transformComposerViewStateToMutationData",
    "transformersArrayHelpers",
    "useNotificationsTrackingString",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("ComposerStoryEditMutation").__setRef(
      "useEditComposerSubmit"
    );
    function a(a, b, e) {
      var f = c("useNotificationsTrackingString")(),
        g = d("CometRelay").useRelayEnvironment();
      return function (i, j, k) {
        c("transformComposerViewStateToMutationData")(
          i,
          j,
          d(
            "transformersArrayHelpers"
          ).transformersArrayToMutationDataTransformers(a.transformers),
          { story_id: k },
          function (d) {
            (d.tracking = d.tracking ? d.tracking.concat(f) : [f]),
              h.onReady(function (f) {
                f = f.commit;
                f(g, d, {
                  onCompleted: b(j),
                  onError: e(j),
                  updater: function (a) {
                    c("feedEditStoryLiveInsertUpdater")(k, a);
                  },
                  variables: {
                    creationSessionID: j.creationSessionID,
                    feedLocation: a.variables.feedLocation,
                    renderLocation: a.variables.renderLocation,
                  },
                });
              });
          }
        );
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useComposerSubmitV2",
  [
    "fbt",
    "VideoUploadComposerSurface",
    "VideoUploadSurface",
    "getComposerLoggingPayload",
    "ifRequireable",
    "qex",
    "react",
    "transformersArrayHelpers",
    "useComposerSubmitExecute",
    "useEditComposerSubmit",
    "useTriggerAccessibilityAlert",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useCallback,
      j = c("qex")._("1221850") === !0;
    function a(a) {
      var b = a.actorID,
        e = c("useTriggerAccessibilityAlert")(),
        f = i(
          function (b, c, e, f) {
            return function (g) {
              d("VideoUploadComposerSurface").onSubmitPostError(
                b.creationSessionID,
                d("VideoUploadSurface").VideoUploadSurfaceIDs.FEED
              ),
                a.onError(g, b),
                c && c.disposable && c.disposable.dispose(),
                e && f && e.errorObserver.unsubscribe(f);
            };
          },
          [a]
        ),
        g = i(
          function (a, b) {
            b && b.disposable && b.disposable.dispose();
            d("VideoUploadComposerSurface").onSubmitPostCompleted(
              a.creationSessionID,
              d("VideoUploadSurface").VideoUploadSurfaceIDs.FEED
            );
            b =
              (b = a.audience) == null
                ? void 0
                : (a = b.privacy) == null
                ? void 0
                : a.base_state;
            b === null || b === void 0
              ? e(h._("Your Post is successfully shared"))
              : e(
                  h._("Your Post is successfully shared with{audience}", [
                    h._param("audience", b),
                  ])
                );
          },
          [e]
        ),
        k = i(
          function (b) {
            g(b);
            return function (c) {
              a.onCompleted(c, b);
            };
          },
          [g, a]
        ),
        l = c("useEditComposerSubmit")(a, k, f),
        m = c("useComposerSubmitExecute")(a),
        n = i(
          function (e, i) {
            var n = e.storyID;
            if (n != null) l(a.unalteredBeginningViewState, e, n);
            else {
              var o = null;
              n = a.optimisticTransformers;
              var p = null;
              c("ifRequireable")("ComposerMediaFileUploader", function (a) {
                (p = a.getInstance(b)),
                  d("VideoUploadComposerSurface").onSubmitPost(
                    e.creationSessionID,
                    d("VideoUploadSurface").VideoUploadSurfaceIDs.FEED
                  );
              });
              var q = function (b) {
                  var c = new Error();
                  b.error != null &&
                    (c.description = h
                      ._(
                        "Something went wrong. Please try again. You may want to check your connection and file sizes."
                      )
                      .toString());
                  a && a.onError(c, e);
                  o && o.disposable && o.disposable.dispose();
                },
                r = {
                  payload: d(
                    "getComposerLoggingPayload"
                  ).getFeedComposerLoggingPayload(e),
                };
              if (j && n) {
                var s = function () {
                  p && p.errorObserver.subscribe(q);
                };
                o = m({
                  loggingData: r,
                  mutationConfig: i,
                  onBeforeCommit: s,
                  shouldRunRetries: !1,
                  transformers: d(
                    "transformersArrayHelpers"
                  ).transformersArrayToCreationDataTransformers(n),
                  updateStoreOptimistically: !0,
                  useCommitOptimistic: !0,
                  viewState: e,
                });
              }
              if (j) {
                s = function (b) {
                  b && a.mutationDataValidator && a.mutationDataValidator(b);
                };
                m({
                  loggingData: r,
                  mutationConfig: i,
                  onBeforeCommit: s,
                  onCompleted: function (b) {
                    g(e, o), a && a.onCompleted(b, e);
                  },
                  onError: f(e, o, p, q),
                  shouldRunRetries: !0,
                  transformers: d(
                    "transformersArrayHelpers"
                  ).transformersArrayToCreationDataTransformers(a.transformers),
                  useUpdater: !0,
                  viewState: e,
                });
              } else
                m({
                  loggingData: r,
                  mutationConfig: i,
                  onCompleted: k(e),
                  onError: f(e),
                  shouldRunRetries: !0,
                  transformers: d(
                    "transformersArrayHelpers"
                  ).transformersArrayToCreationDataTransformers(a.transformers),
                  updateStoreOptimistically: !0,
                  useUpdater: !0,
                  viewState: e,
                });
            }
          },
          [l, a, b, m, f, g, k]
        );
      return n;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useFeedComposerFeaturesNoop",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return { current: [] };
    }
    f["default"] = a;
  },
  66
);
__d(
  "useHandleErrorBySettingState",
  ["CometRelayErrorHandling", "SilenceableErrorMessageUtils", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;
    function a() {
      var a = h(),
        b = a[0],
        c = a[1];
      return [
        b,
        function (a) {
          var b = d("SilenceableErrorMessageUtils").getMetadataFromError(a);
          c(b);
          d("CometRelayErrorHandling").markErrorAsHandled(a);
        },
      ];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerLifeEventCategoryList.entrypoint",
  [
    "CometComposerLifeEventCategoryListQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            CometComposerLifeEventCategoryListQueryRef: {
              parameters: c(
                "CometComposerLifeEventCategoryListQuery$Parameters"
              ),
              variables: { scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometComposerLifeEventCategoryList.react"
      ).__setRef("CometComposerLifeEventCategoryList.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerLifeEventSubcategoryList.entrypoint",
  [
    "CometComposerLifeEventSubcategoryListQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            CometComposerLifeEventSubcategoryListQueryRef: {
              parameters: c(
                "CometComposerLifeEventSubcategoryListQuery$Parameters"
              ),
              variables: { scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometComposerLifeEventSubcategoryList.react"
      ).__setRef("CometComposerLifeEventSubcategoryList.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometLifeEventMigrationContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ isInCometComposer: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "ProfileCometLifeEventsComposerState",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      var a = new Date();
      return {
        date: {
          day: a.getDate(),
          month: a.getMonth() + 1,
          year: a.getFullYear(),
        },
        defaultTitle: "",
        description: "",
        feedQueryVariables: null,
        initialState: null,
        isDateEditable: !0,
        isMediaExpanded: !1,
        isTitleDirty: !1,
        loadingDefaultMedia: !0,
        privacy: null,
        selectedCategoryID: null,
        selectedDefaultMedia: null,
        selectedIcon: null,
        selectedSubcategoryID: null,
        showEntityMedia: !1,
        skipSubcategoryStep: !1,
        step: "CATEGORY",
        storyID: null,
        surface: null,
        taggedEmployer: { id: "", name: "" },
        taggedLocation: null,
        taggedMetadataLocation: { id: "", name: "" },
        taggedPartner: { id: "", name: "" },
        taggedSchool: { id: "", name: "" },
        taggedSchoolType: "COLLEGE",
        taggedUsers: [],
        title: "",
        uploadedMedia: [],
      };
    }
    f.getInitialState = a;
  },
  66
);
__d(
  "ProfileCometLifeEventsComposerContext",
  ["ProfileCometLifeEventsComposerState", "emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      dispatch: c("emptyFunction"),
      state: d("ProfileCometLifeEventsComposerState").getInitialState(),
    });
    g["default"] = b;
  },
  98
);
__d(
  "useLifeEventsComposerDispatcher",
  [
    "ProfileCometLifeEventMigrationContext",
    "ProfileCometLifeEventsComposerContext",
    "react",
    "useComposerViewStateDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("ProfileCometLifeEventsComposerContext"));
      a = a.dispatch;
      var b = c("useComposerViewStateDispatcher")(),
        d = h(c("ProfileCometLifeEventMigrationContext"));
      d = d.isInCometComposer;
      return d ? b : a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerLifeEventsFormDoneButton.react",
  [
    "fbt",
    "TetraButton.react",
    "getInvalidMLEField",
    "react",
    "useComposerViewStateDispatcher",
    "useLifeEventsComposerDispatcher",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.majorLifeEvent,
        d = a.onReturn,
        e = c("useComposerViewStateDispatcher")(),
        f = c("useLifeEventsComposerDispatcher")();
      a = c("getInvalidMLEField")(b, !0) !== null;
      return i.jsx("div", {
        className: "qnrpqo6b ae35evdt jxrgncrl fdg1wqfs",
        children: i.jsx(c("TetraButton.react"), {
          disabled: a,
          label: h._("Done"),
          onPress: function () {
            d({ index: 0 }),
              e({
                attachmentType: "LIFE_EVENT",
                type: "ACTIVATE_ATTACHMENT_TYPE",
              }),
              f({ type: "COPY_ALL_METADATA_TO_ATTACHMENT" });
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      return { majorLifeEvent: a.majorLifeEvent };
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometComposerMajorLifeEventAttachmentFormResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "CometComposerMajorLifeEventAttachmentForm.react"
    ).__setRef("CometComposerMajorLifeEventAttachmentFormResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ProfileCometLifeEventEditMediaContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ mediaEditable: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "useCometComposerPushMLEPage",
  [
    "fbt",
    "$InternalEnum",
    "CometComposerLifeEventCategoryList.entrypoint",
    "CometComposerLifeEventSubcategoryList.entrypoint",
    "CometComposerLifeEventsFormDoneButton.react",
    "CometComposerMajorLifeEventAttachmentFormResource",
    "CometComposerPushPageContext",
    "CometComposerPushPageGlimmer.react",
    "CometPlaceholder.react",
    "ProfileCometLifeEventEditMediaContext",
    "ProfileCometLifeEventMigrationContext",
    "lazyLoadComponent",
    "react",
    "react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react",
    "useCometComposerPushPage",
    "useCometRelayEntrypointContextualEnvironmentProvider",
    "useLifeEventsComposerDispatcher",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback,
      k = c("lazyLoadComponent")(
        c("CometComposerMajorLifeEventAttachmentFormResource")
      ),
      l = b("$InternalEnum").Mirrored([
        "CATEGORY",
        "SUBCATEGORY",
        "ATTACHMENT_FORM",
      ]);
    function a(a, b, d) {
      var e = c("useCometComposerPushPage")(),
        f = c("useCometRelayEntrypointContextualEnvironmentProvider")(),
        g = c("useLifeEventsComposerDispatcher")();
      return j(
        function () {
          var j = { isInCometComposer: !0 },
            m = { mediaEditable: !0 },
            n = d != null ? d : h._("Create Life Event"),
            o = b
              ? b
              : {
                  onBack: function () {
                    return g({ type: "CLEAR_FORM_FIELDS" });
                  },
                };
          if (e != null)
            switch (a) {
              case l.CATEGORY:
                e(n, function (a) {
                  a = a.onReturn;
                  return i.jsx(c("CometPlaceholder.react"), {
                    fallback: i.jsx(c("CometComposerPushPageGlimmer.react"), {
                      withPopover: !1,
                    }),
                    children: i.jsx(
                      c("CometComposerPushPageContext").Provider,
                      {
                        value: e,
                        children: i.jsx(
                          c("ProfileCometLifeEventMigrationContext").Provider,
                          {
                            value: j,
                            children: i.jsx(
                              c(
                                "react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"
                              ),
                              {
                                entryPoint: c(
                                  "CometComposerLifeEventCategoryList.entrypoint"
                                ),
                                entryPointParams: {},
                                environmentProvider: f,
                                props: { onBackToComposer: a },
                              }
                            ),
                          }
                        ),
                      }
                    ),
                  });
                });
                break;
              case l.SUBCATEGORY:
                e(n, function (a) {
                  var b = a.onReturn;
                  return i.jsx(c("CometPlaceholder.react"), {
                    fallback: i.jsx(c("CometComposerPushPageGlimmer.react"), {
                      withPopover: !1,
                    }),
                    children: i.jsx(
                      c("CometComposerPushPageContext").Provider,
                      {
                        value: e,
                        children: i.jsx(
                          c("ProfileCometLifeEventMigrationContext").Provider,
                          {
                            value: j,
                            children: i.jsx(
                              c(
                                "react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"
                              ),
                              {
                                entryPoint: c(
                                  "CometComposerLifeEventSubcategoryList.entrypoint"
                                ),
                                entryPointParams: {},
                                environmentProvider: f,
                                props: {
                                  onBackToComposer: function () {
                                    return b({ index: 0 });
                                  },
                                },
                              }
                            ),
                          }
                        ),
                      }
                    ),
                  });
                });
                break;
              case l.ATTACHMENT_FORM:
                g({ type: "SAVE_CURRENT_STATE" });
                e(
                  n,
                  function (a) {
                    a = a.onReturn;
                    return i.jsx(c("CometPlaceholder.react"), {
                      fallback: i.jsx(c("CometComposerPushPageGlimmer.react"), {
                        withPopover: !1,
                      }),
                      children: i.jsx(
                        c("CometComposerPushPageContext").Provider,
                        {
                          value: e,
                          children: i.jsx(
                            c("ProfileCometLifeEventMigrationContext").Provider,
                            {
                              value: j,
                              children: i.jsxs(
                                c("ProfileCometLifeEventEditMediaContext")
                                  .Provider,
                                {
                                  value: m,
                                  children: [
                                    i.jsx(k, {}),
                                    i.jsx(
                                      c(
                                        "CometComposerLifeEventsFormDoneButton.react"
                                      ),
                                      { onReturn: a }
                                    ),
                                  ],
                                }
                              ),
                            }
                          ),
                        }
                      ),
                    });
                  },
                  o
                );
                break;
            }
        },
        [d, b, e, g, a, f]
      );
    }
    g.MleStep = l;
    g.useCometComposerPushMLEPage = a;
  },
  98
);
__d(
  "useComposerMaybePushMLEViewOnOpen",
  ["react", "useCometComposerPushMLEPage", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a) {
      var b = d("useCometComposerPushMLEPage").useCometComposerPushMLEPage(
          d("useCometComposerPushMLEPage").MleStep.CATEGORY
        ),
        e = c("useStable")(function () {
          return b;
        });
      h(
        function () {
          e != null && a && e();
        },
        [e, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerPreAttachmentAreaFeedTransform",
  ["composerPreAttachmentAreaReducer", "promiseDone"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      var f;
      f =
        (f = a.preAttachmentArea) == null ? void 0 : f.activePreAttachmentType;
      f = f
        ? d("composerPreAttachmentAreaReducer")
            .transformerResourceForPreAttachmentType[f]
        : null;
      f
        ? c("promiseDone")(
            f.load().then(function (c) {
              return c(a, babelHelpers["extends"]({}, b), e);
            })
          )
        : e(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "arePrivacyDataEqual",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = ["allow", "deny"];
    function a(a, b) {
      if (a == null && b == null) return !0;
      else if (a == null || b == null) return !1;
      if (a.base_state !== b.base_state) return !1;
      for (
        var c = g,
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var h = a[f] || [],
          i = b[f] || [];
        if (h.length !== i.length) return !1;
        if (h.length > 0) {
          f = (function () {
            var a = new Set(i);
            if (
              !h.every(function (b) {
                return a.has(b);
              })
            )
              return { v: !1 };
          })();
          if (typeof f === "object") return f.v;
        }
      }
      return !0;
    }
    f["default"] = a;
  },
  66
);
__d(
  "composerPrivacyAudienceChecker",
  ["arePrivacyDataEqual"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return !c("arePrivacyDataEqual")(
        a == null ? void 0 : (a = a.audience) == null ? void 0 : a.privacy,
        b == null ? void 0 : (a = b.audience) == null ? void 0 : a.privacy
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useComposerPrivacyAudienceReducer",
  ["composerPrivacyAudienceChecker", "useComposerViewStateReducer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      c("useComposerViewStateReducer")(
        h,
        a === !0 ? c("composerPrivacyAudienceChecker") : void 0
      );
    }
    function h(a, b) {
      return "update_audience" === b.type
        ? babelHelpers["extends"]({}, a, { audience: b.audience })
        : a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useComposerPrivacyChangeHandlers",
  [
    "CometComposerViewStateContext",
    "coercePrivacyData",
    "react",
    "requireDeferred",
    "useComposerViewStateDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = c("requireDeferred")("ComposerTelemetryFalcoEvent").__setRef(
        "useComposerPrivacyChangeHandlers"
      );
    function a() {
      var a,
        b = c("useComposerViewStateDispatcher")(),
        d = i(c("CometComposerViewStateContext"));
      a = h(
        function (a) {
          a.type === "init" || a.type === "success"
            ? (j.onReady(function (b) {
                return b.log(function () {
                  var b;
                  return {
                    call_site: "useComposerPrivacyChangeHandlers",
                    creation_session_id:
                      (b = d.creationSessionID) != null ? b : "",
                    debug_info:
                      "viewState privacy info:" +
                      ((b =
                        (b = d.audience) == null
                          ? void 0
                          : (b = b.privacy) == null
                          ? void 0
                          : b.base_state) != null
                        ? b
                        : "null") +
                      " |private row input:" +
                      ((b =
                        (b = a.privacyRowInput) == null
                          ? void 0
                          : b.base_state) != null
                        ? b
                        : "null"),
                    event: "onPrivacyChange." + a.type,
                  };
                });
              }),
              k(b, a.privacyRowInput))
            : a.type === "error"
            ? k(b, null)
            : a.type;
        },
        [
          b,
          (a = d.audience) == null
            ? void 0
            : (a = a.privacy) == null
            ? void 0
            : a.base_state,
          d.creationSessionID,
        ]
      );
      var e = h(
        function (a) {
          k(b, a);
        },
        [b]
      );
      return { onPrivacyChange: a, onPrivacyChangeStart: e };
    }
    function k(a, b) {
      a({
        audience: { privacy: c("coercePrivacyData")(b) },
        type: "update_audience",
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useComposerPrivacyTags",
  ["FBLogger", "react", "useDebounced"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useMemo,
      j = b.useState,
      k = 500;
    function a(a, b) {
      var d = j(null),
        e = d[0],
        f = d[1],
        g = c("useDebounced")(l, k);
      h(
        function () {
          g(a, f, e);
        },
        [g, a, f, e]
      );
      return i(
        function () {
          if (e == null && b == null) return null;
          var a = new Set();
          if (e != null)
            for (
              var c = e,
                d = Array.isArray(c),
                f = 0,
                c = d
                  ? c
                  : c[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var g;
              if (d) {
                if (f >= c.length) break;
                g = c[f++];
              } else {
                f = c.next();
                if (f.done) break;
                g = f.value;
              }
              g = g;
              a.add(g);
            }
          if (b != null)
            for (
              var g = b,
                f = Array.isArray(g),
                d = 0,
                g = f
                  ? g
                  : g[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              if (f) {
                if (d >= g.length) break;
                c = g[d++];
              } else {
                d = g.next();
                if (d.done) break;
                c = d.value;
              }
              c = c;
              a.add(c);
            }
          return Array.from(a);
        },
        [e, b]
      );
    }
    function l(a, b, d) {
      if (a == null || a.__type !== "editor-state-based") return;
      var e = new Set(),
        f = a.draftEditorState.getCurrentContent();
      f.getBlockMap().forEach(function (a) {
        a.findEntityRanges(
          function () {
            return !0;
          },
          function (b) {
            b = a.getEntityAt(b);
            if (b == null) return;
            b = f.getEntity(b);
            if (b.getType() !== "MENTION") return;
            b = b.getData();
            b = b.id;
            if (b == null) return;
            if (/^[0-9]+$/.test(b) === !1) {
              c("FBLogger")("comet_composer").mustfix(
                "Entity with type MENTION had an unexpected non-FBID id: %s",
                b
              );
              return;
            }
            e.add(b);
          }
        );
      });
      a =
        d != null &&
        e.size === d.size &&
        Array.from(e).every(function (a) {
          return d.has(a);
        });
      a || b(e);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerPrivacyScope.react",
  [
    "CometComposerPrivacyScope_scope.graphql",
    "CometPrivacySelectorForScope.react",
    "CometRelay",
    "PrivacyRowInput",
    "react",
    "useCometComposerPushPage",
    "useComposerPrivacyAudienceReducer",
    "useComposerPrivacyChangeHandlers",
    "useComposerPrivacyTags",
    "withComposerViewStatePart",
    "withTagIDsTrackerConversionUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo,
      k = Object.freeze([]);
    function a(a) {
      var e = a.editorState,
        f = a.onPrivacyChange,
        g = a.onPrivacyChangeStart,
        l = a.plugins,
        m = a.privacyData,
        n = a.privacySelectorRenderLocation;
      a.privacyWriteID;
      var o = a.scope,
        p = a.shouldRestorePrivacyFromDraftState,
        q = a.title;
      a = a.withTagIDs;
      o = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometComposerPrivacyScope_scope.graphql")),
        o
      );
      c("useComposerPrivacyAudienceReducer")(n === "COMET_STORY_EDIT_COMPOSER");
      var r = c("useComposerPrivacyChangeHandlers")(),
        s = r.onPrivacyChange;
      r = r.onPrivacyChangeStart;
      e = c("useComposerPrivacyTags")(e, a);
      var t = c("useCometComposerPushPage")();
      a = j(
        function () {
          return t == null
            ? void 0
            : function (a, b) {
                t(String(b == null ? void 0 : b.title), function (b) {
                  b = b.onReturn;
                  return i.jsx(a, { onReturn: b, setTitle: function () {} });
                });
              };
        },
        [t]
      );
      var u = j(
        function () {
          return p === !0
            ? d("PrivacyRowInput").coerceFromPrivacyData(m)
            : null;
        },
        [m, p]
      );
      return i.jsx(c("CometPrivacySelectorForScope.react"), {
        localPrivacyRow: u,
        onPrivacyChange: (u = f) != null ? u : s,
        onPrivacyChangeStart: (f = g) != null ? f : r,
        plugins: l,
        pushPage: a,
        renderLocation: (u = n) != null ? u : "COMET_COMPOSER",
        scope: o,
        tags: (s = e) != null ? s : k,
        title: q,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      var b;
      return {
        editorState: (b = a.editorState) != null ? b : null,
        privacyData:
          (b = (b = a.audience) == null ? void 0 : b.privacy) != null
            ? b
            : null,
        privacyWriteID: (b = a.privacyWriteID) != null ? b : null,
        storyID: (b = a.storyID) != null ? b : null,
        withTagIDs: d(
          "withTagIDsTrackerConversionUtils"
        ).convertWithTagIDsTrackerToArray(a.withTagIDsTracker),
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "useCometComposerDelightsDecorator",
  ["CometTextDelightSpan.react", "getEntityMatcher", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("useStable")(function () {
        return {
          component: c("CometTextDelightSpan.react"),
          priority: 0,
          props: {},
          strategy: c("getEntityMatcher")(function (a) {
            return a.getType() === "DELIGHT";
          }),
        };
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerDelightsPlugin.react",
  [
    "CometTextDelightMatcher",
    "maybeBackspaceDelight",
    "react",
    "useCometComposerDecorator",
    "useCometComposerDelightsDecorator",
    "useCometComposerHandler",
    "useComposerViewStateDispatcher",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useMemo,
      i = b.useRef,
      j = function (a) {
        return {
          handleKeyCommand: function (b, d) {
            if (b === "backspace") {
              b = c("maybeBackspaceDelight")(d);
              if (b != null) {
                a({ draftEditorState: b, type: "update_draft_editor_state" });
                return "handled";
              }
            }
            return "not-handled";
          },
          priority: 0,
        };
      };
    function k(a, b, d) {
      a = c("CometTextDelightMatcher").applyTextDelightEntity(b, a);
      a !== b && d({ draftEditorState: a, type: "update_draft_editor_state" });
    }
    function a(a) {
      a = a.editorState;
      c("useCometComposerDecorator")(c("useCometComposerDelightsDecorator")());
      var b = c("useComposerViewStateDispatcher")(),
        d = h(
          function () {
            return j(b);
          },
          [b]
        );
      c("useCometComposerHandler")(d);
      d = i(null);
      var e = d.current;
      e != null && a != null && k(e, a, b);
      d.current = a;
      return null;
    }
    e = c("withComposerViewStatePart")(a, function (a) {
      a = a == null ? void 0 : a.editorState;
      a =
        a != null && a.__type === "editor-state-based"
          ? a.draftEditorState
          : null;
      return { editorState: a };
    });
    g["default"] = e;
  },
  98
);
__d(
  "cometComposerDelightsBlockStrategy",
  ["UnicodeUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c, e) {
      var f = a.getEntityAt(c);
      if (f == null) return null;
      b = b.getEntity(f);
      if (b.getType() === "DELIGHT") {
        f = a.getText().slice(c, e);
        a = b.getData();
        e = a.campaignID;
        b = a.disabled;
        if (b) return null;
        if (/^\d+$/.test(e))
          return {
            message: {
              ranges: [
                {
                  entity: { id: e },
                  length: d("UnicodeUtils").strlen(f),
                  offset: c,
                },
              ],
              text: f,
            },
          };
      }
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerMessageFeedTransform",
  [
    "cometComposerDelightsBlockStrategy",
    "cometComposerMentionsBlockToEntity",
    "getPlainTextFromDeferredDraftEditorState",
    "transformDraftEditorStateToTextWithEntities",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      a = a.editorState;
      if (a == null) d(babelHelpers["extends"]({}, b));
      else if (a.__type === "plain-text")
        d(
          babelHelpers["extends"]({}, b, {
            message: { text: c("getPlainTextFromDeferredDraftEditorState")(a) },
          })
        );
      else if (a.__type === "editor-state-based") {
        a = a.draftEditorState;
        a = c("transformDraftEditorStateToTextWithEntities")(a, [
          c("cometComposerDelightsBlockStrategy"),
          c("cometComposerMentionsBlockToEntity"),
        ]);
        d(babelHelpers["extends"]({}, b, { message: a }));
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "breakingNewsReducer",
  ["composerAttachmentAreaReducer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var c = a.breakingNews;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["breakingNews"]);
      var e = c == null ? void 0 : c.breakingNewsEditStartTime;
      switch (b.type) {
        case "ADD_BREAKING_NEWS":
          var f = b.breakingNewsDuration;
          return babelHelpers["extends"]({}, a, {
            breakingNews: {
              breakingNewsChanged: !0,
              breakingNewsDuration: f,
              breakingNewsEditStartTime: e,
              breakingNewsIsSettingUpEdit: !1,
            },
          });
        case "REMOVE_BREAKING_NEWS":
          return babelHelpers["extends"]({}, a, {
            breakingNews: {
              breakingNewsChanged: !0,
              breakingNewsDuration: void 0,
              breakingNewsEditStartTime: e,
              breakingNewsIsSettingUpEdit: !1,
            },
          });
        case "REMOVE_ATTACHMENT_TYPE":
          return d(
            "composerAttachmentAreaReducer"
          ).removeActiveAttachmentViewStateData(a, b, {
            attachmentType: "LINK",
            field: "breakingNews",
          });
        case "REMOVE_LINK_URL":
          return babelHelpers["extends"]({}, a, { breakingNews: void 0 });
        case "ADD_LINK_URL":
          if ((c == null ? void 0 : c.breakingNewsIsSettingUpEdit) === !0)
            return babelHelpers["extends"]({}, a, {
              breakingNews: {
                breakingNewsChanged: !0,
                breakingNewsDuration:
                  c == null ? void 0 : c.breakingNewsDuration,
                breakingNewsEditStartTime: e,
                breakingNewsIsSettingUpEdit: !1,
              },
            });
          else return babelHelpers["extends"]({}, a, { breakingNews: void 0 });
      }
      return babelHelpers["extends"]({ breakingNews: c }, a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerLinkAttachmentChecker",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return (
        (a == null
          ? void 0
          : (a = a.linkAttachment) == null
          ? void 0
          : a.url) !==
        (b == null ? void 0 : (a = b.linkAttachment) == null ? void 0 : a.url)
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "useCometComposerLinkScrape",
  ["Promise", "react", "useComposerViewStateDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var d = c("useComposerViewStateDispatcher")();
      return h(
        function () {
          d({ type: "ADD_LINK_URL", url: a }),
            d({
              attachmentType: "LINK",
              onRemove: function (a) {
                return new (b("Promise"))(function (b) {
                  a({ onRemovedLast: b, type: "REMOVE_LINK_URL" });
                });
              },
              type: "ACTIVATE_ATTACHMENT_TYPE",
            });
        },
        [d, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerLinksPlugin.react",
  [
    "breakingNewsReducer",
    "composerLinkAttachmentChecker",
    "composerLinkAttachmentReducer",
    "cr:2003939",
    "getEntityMatcher",
    "getImplicitURLMatches",
    "gkx",
    "react",
    "useCometComposerDecorator",
    "useCometComposerLinkScrape",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useEffect,
      j = e.useRef,
      k = function (a) {
        var d = a.children;
        a = a.href;
        var e = j(!0),
          f = c("useCometComposerLinkScrape")(a);
        i(
          function () {
            c("gkx")("1702706") && e.current ? (e.current = !1) : f();
          },
          [f]
        );
        return b("cr:2003939") != null
          ? h.jsx(b("cr:2003939"), { href: a, children: d })
          : h.jsx("span", { className: "py34i1dx", children: d });
      };
    f = function (a) {
      var b = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
      var c = a.contentState;
      a = a.entityKey;
      c = a != null ? c.getEntity(a) : null;
      a = c != null ? c.getData() : null;
      a = (c = a == null ? void 0 : a.url) != null ? c : "";
      return h.jsx(k, { href: a, children: b });
    };
    d = function (a) {
      var b = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
      a = a.decoratedText;
      a =
        a.startsWith("http://") || a.startsWith("https://")
          ? a
          : "https://" + a;
      return h.jsx(k, { href: a, children: b });
    };
    var l = {
        component: h.memo(d),
        priority: 0,
        props: {},
        strategy: c("getImplicitURLMatches"),
      },
      m = {
        component: h.memo(f),
        priority: 0,
        props: {},
        strategy: c("getEntityMatcher")(function (a) {
          return a.getType() === "LINK";
        }),
      };
    function a(a) {
      c("useComposerViewStateReducer")(
        c("composerLinkAttachmentReducer"),
        c("composerLinkAttachmentChecker")
      );
      c("useComposerViewStateReducer")(c("breakingNewsReducer"));
      c("useCometComposerDecorator")(l);
      c("useCometComposerDecorator")(m);
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometComposerFormattedBackground",
  ["ColorUtils", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b, c;
      b =
        (b =
          a == null
            ? void 0
            : (b = a.custom_thumbnail) == null
            ? void 0
            : b.uri) != null
          ? b
          : null;
      c =
        (c =
          a == null
            ? void 0
            : (c = a.background_image) == null
            ? void 0
            : c.uri) != null
          ? c
          : null;
      var d = a == null ? void 0 : a.background_color,
        e = a == null ? void 0 : a.background_gradient_color;
      a = a == null ? void 0 : a.background_gradient_direction;
      ({});
      b !== null
        ? (b = { backgroundImage: "url(" + b + ")" })
        : c === null
        ? (b = i(d, e, a))
        : (b = { backgroundImage: "url(" + c + ")" });
      return b;
    }
    function h(a) {
      switch (a) {
        case "BL_TR":
        case "TR_BL":
          return "45deg";
        case "BOTTOM_TOP":
        case "TOP_BOTTOM":
          return "to bottom";
        case "BR_TL":
        case "TL_BR":
          return "135deg";
        case "LEFT_RIGHT":
        case "RIGHT_LEFT":
          return "to right";
        default:
          return null;
      }
    }
    function i(a, b, e) {
      a = d("ColorUtils").hexARGBToCSSRGBA(a);
      if (a == null) return null;
      if (b == null || e == null) return { backgroundColor: a };
      b = d("ColorUtils").hexARGBToCSSRGBA(b);
      if (b == null) return { backgroundColor: a };
      e = h(e);
      if (e === null) {
        c("recoverableViolation")(
          "gradient direction is either null or not a known direction value",
          "comet_composer"
        );
        return { backgroundImage: "linear-gradient(" + a + ", " + b + ")" };
      }
      return {
        backgroundImage: "linear-gradient(" + e + ", " + a + ", " + b + ")",
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerCometFormattedTextBackground.react",
  [
    "CometRelay",
    "FeedComposerCometFormattedTextBackgroundRoot_data.graphql",
    "cometComposerFormattedBackground",
    "react",
    "stylex",
    "useCometComposerSATPConfig",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    750 / 1080;
    500 / 500;
    var j = {
      aspectRatioBoxInside: {
        height: "datstx6m",
        position: "pmk7jnqg",
        start: "j9ispegn",
        top: "kr520xx4",
        width: "k4urcfbm",
      },
      avatarBackgroundImageContainer: {
        backgroundSize: "j0d6stlx",
        height: "do00u71z",
        paddingTop: "eurfyrpn",
      },
      backgroundImageContainer: {
        backgroundSize: "j0d6stlx",
        height: "do00u71z",
        paddingTop: "p9gh0hlc",
      },
      responsiveBackgroundContainer: {
        backgroundPosition: "mufzhxvi",
        backgroundSize: "r4lidvzm",
        display: "j83agx80",
        flexWrap: "lhclo0ds",
        height: "datstx6m",
        width: "k4urcfbm",
      },
    };
    function a(a) {
      var e = a.data;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "FeedComposerCometFormattedTextBackgroundRoot_data.graphql"
            )),
        e
      );
      var f = c("useCometComposerSATPConfig")();
      f = f.satpContainerIsResponsive;
      var g = (e == null ? void 0 : e.avatar_story_text_format_id) != null;
      e = {
        background_color: e == null ? void 0 : e.background_color,
        background_gradient_color:
          e == null ? void 0 : e.background_gradient_color,
        background_gradient_direction:
          e == null ? void 0 : e.background_gradient_direction,
        background_image: {
          uri:
            e == null
              ? void 0
              : (e = e.background_image) == null
              ? void 0
              : e.uri,
        },
      };
      e = c("cometComposerFormattedBackground")(e);
      var k = j.backgroundImageContainer,
        l = j.aspectRatioBoxInside;
      g
        ? ((k = j.avatarBackgroundImageContainer), (l = j.aspectRatioBoxInside))
        : f &&
          ((k = j.responsiveBackgroundContainer),
          (l = j.responsiveBackgroundContainer));
      return i.jsx("div", {
        className: c("stylex")(k, a.xstyle),
        style: e,
        children: i.jsx("div", {
          className: c("stylex")(l),
          children: a.children,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerFormattedTextArea.react",
  [
    "BaseGlimmer.react",
    "CometComposerFormattedTextArea_formattedTextPreset.graphql",
    "CometPlaceholder.react",
    "CometRelay",
    "FeedComposerCometFormattedTextBackground.react",
    "react",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var b = a.children;
      a = a.formattedTextPreset;
      a = j(a);
      return a != null
        ? i.jsx(c("CometPlaceholder.react"), {
            fallback: i.jsx(k, { children: b }),
            children: i.jsx(
              c("FeedComposerCometFormattedTextBackground.react"),
              { data: a, children: b }
            ),
          })
        : b;
    }
    function j(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometComposerFormattedTextArea_formattedTextPreset.graphql"
            )),
        a
      );
      return a;
    }
    function k(a) {
      a = a.children;
      return i.jsx(c("BaseGlimmer.react"), {
        className: "k4urcfbm datstx6m j83agx80 bp9cbjyn",
        index: 1,
        children: a,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      return {
        formattedTextPreset:
          (a = a.formattedText) == null ? void 0 : a.currentFormattedTextPreset,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "CometFormattedBackgroundAlterationStateChecker",
  ["getPlainTextFromDeferredDraftEditorState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d;
      d =
        (b == null
          ? void 0
          : (d = b.formattedText) == null
          ? void 0
          : d.currentFormattedTextPreset) !==
          (a == null
            ? void 0
            : (d = a.formattedText) == null
            ? void 0
            : d.currentFormattedTextPreset) &&
        !(
          (a == null
            ? void 0
            : (d = a.formattedText) == null
            ? void 0
            : d.currentFormattedTextPreset) == null &&
          (b == null
            ? void 0
            : (a = b.formattedText) == null
            ? void 0
            : a.currentFormattedTextPreset) == null
        );
      return d &&
        (b == null
          ? void 0
          : (a = b.formattedText) == null
          ? void 0
          : a.currentFormattedTextPreset) != null
        ? ((b == null ? void 0 : b.editorState) != null
            ? c("getPlainTextFromDeferredDraftEditorState")(
                b == null ? void 0 : b.editorState
              )
            : "") !== ""
        : d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometComposerFormattedTextReducers",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c;
      switch (b.type) {
        case "FORMATTED_TEXT_DISABLED":
          return babelHelpers["extends"]({}, a, {
            attachmentArea: { activeAttachmentType: void 0 },
            formattedText: {
              currentFormattedTextPreset: null,
              previousFormattedTextPreset:
                a == null
                  ? void 0
                  : (c = a.formattedText) == null
                  ? void 0
                  : c.currentFormattedTextPreset,
              satpBarIsExpanded:
                (c = a.formattedText) == null ? void 0 : c.satpBarIsExpanded,
            },
            formattingType: void 0,
          });
        case "FORMATTED_TEXT_PRESET_RESET":
          return babelHelpers["extends"]({}, a, {
            attachmentArea: { activeAttachmentType: "FORMATTED_TEXT" },
            formattedText: {
              currentFormattedTextPreset:
                a == null
                  ? void 0
                  : (c = a.formattedText) == null
                  ? void 0
                  : c.previousFormattedTextPreset,
              previousFormattedTextPreset: null,
              satpBarIsExpanded:
                (c = a.formattedText) == null ? void 0 : c.satpBarIsExpanded,
            },
            formattingType: "SATP",
          });
        case "FORMATTED_TEXT_PRESET_TOGGLE":
          return babelHelpers["extends"]({}, a, {
            attachmentArea: {
              activeAttachmentType:
                b.formattedTextPreset == null ? void 0 : "FORMATTED_TEXT",
            },
            formattedText: {
              currentFormattedTextPreset: b.formattedTextPreset,
              previousFormattedTextPreset:
                (c = a.formattedText) == null
                  ? void 0
                  : c.previousFormattedTextPreset,
              satpBarIsExpanded:
                (c = a.formattedText) == null ? void 0 : c.satpBarIsExpanded,
            },
            formattingType: b.formattedTextPreset == null ? void 0 : "SATP",
          });
        case "SATP_BAR_EXPANDED_TOGGLE":
          return babelHelpers["extends"]({}, a, {
            formattedText: {
              currentFormattedTextPreset:
                (c = a.formattedText) == null
                  ? void 0
                  : c.currentFormattedTextPreset,
              previousFormattedTextPreset:
                (b = a.formattedText) == null
                  ? void 0
                  : b.previousFormattedTextPreset,
              satpBarIsExpanded: !(a == null
                ? void 0
                : (c = a.formattedText) == null
                ? void 0
                : c.satpBarIsExpanded),
            },
          });
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "cometFormattedTextIneligibilityCheck",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      var d;
      b === void 0 && (b = 130);
      c === void 0 && (c = 3);
      return (
        ((d = (d = a.match(/\n/g)) == null ? void 0 : d.length) != null
          ? d
          : 0) >= c || a.length > b
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "useCometSATPIneligibility",
  ["react", "useComposerViewStateDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a, b, d) {
      var e = c("useComposerViewStateDispatcher")();
      h(
        function () {
          b && a != null
            ? e({ type: "FORMATTED_TEXT_DISABLED" })
            : !b &&
              d != null &&
              a == null &&
              e({ type: "FORMATTED_TEXT_PRESET_RESET" });
        },
        [e, b, d, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerCometFormattedTextArea.react",
  [
    "CometComposerAttachmentPluginTypes",
    "CometComposerFormattedTextArea.react",
    "CometFormattedBackgroundAlterationStateChecker",
    "cometComposerFormattedTextReducers",
    "cometFormattedTextIneligibilityCheck",
    "getPlainTextFromDeferredDraftEditorState",
    "react",
    "useCometComposerSATPConfig",
    "useCometSATPIneligibility",
    "useComposerPluginIneligibility",
    "useComposerViewStateReducer",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        d = a.formattedTextPreset,
        e = a.isDisabled;
      a = a.previousFormattedTextPreset;
      c("useComposerViewStateReducer")(
        c("cometComposerFormattedTextReducers"),
        c("CometFormattedBackgroundAlterationStateChecker")
      );
      c("useCometSATPIneligibility")(d, e, a);
      return h.jsx(c("CometComposerFormattedTextArea.react"), { children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      var b = a.editorState,
        d = c("useComposerPluginIneligibility")(),
        e = c("useCometComposerSATPConfig")(),
        f = e.satpMaxNewLines;
      e = e.satpTextCharLimit;
      b =
        b != null &&
        (c("cometFormattedTextIneligibilityCheck")(
          c("getPlainTextFromDeferredDraftEditorState")(b),
          e,
          f
        ) ||
          d.has(c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT));
      return {
        formattedTextPreset:
          (e = a.formattedText) == null ? void 0 : e.currentFormattedTextPreset,
        isDisabled: b,
        previousFormattedTextPreset:
          (f = a.formattedText) == null
            ? void 0
            : f.previousFormattedTextPreset,
      };
    });
    g["default"] = b;
  },
  98
);
__d(
  "useCometStatusAreaTextData",
  [
    "CometRelay",
    "useCometComposerSATPConfig",
    "useCometStatusAreaTextData_formattedTextPreset.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var e,
        f,
        g = c("useCometComposerSATPConfig")(),
        i = g.satpFontSize;
      g = g.satpLineHeightInPx;
      var j = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("useCometStatusAreaTextData_formattedTextPreset.graphql")),
          a
        ),
        k = j == null ? void 0 : j.inspirations_custom_font_object;
      e = (e = k == null ? void 0 : k.font_name) != null ? e : "";
      f = (f = j == null ? void 0 : j.color) != null ? f : "00000000";
      i =
        (k =
          (k = k == null ? void 0 : k.preferred_font_size) != null ? k : i) !=
        null
          ? k
          : 30;
      k = (j == null ? void 0 : j.avatar_story_text_format_id) != null;
      j =
        a != null
          ? {
              color: "#" + f.substring(2) + f.substring(0, 2),
              fontFamily: e,
              fontSize: i,
              fontWeight: 700,
              lineHeight: g,
              marginBottom: k ? 150 : void 0,
            }
          : {};
      if (a != null)
        return { formattedTextStyling: j, textAlignment: "center" };
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerCometStatusFormattedTextPlaceholder.react",
  [
    "getPlainTextFromDeferredDraftEditorState",
    "react",
    "stylex",
    "useCometComposerSATPConfig",
    "useCometStatusAreaTextData",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b;
      b =
        (b = c("useCometStatusAreaTextData")(a.formattedTextPreset)) == null
          ? void 0
          : b.formattedTextStyling;
      var d = c("useCometComposerSATPConfig")();
      d = d.satpContainerIsResponsive;
      return a.showPlaceholder
        ? h.jsx("div", {
            className: c("stylex").dedupe(
              {
                "position-1": "pmk7jnqg",
                "top-1": "kr520xx4",
                "width-1": "mq6i96l2",
              },
              d ? { "width-1": "dmwoc352" } : null
            ),
            children: h.jsx("div", {
              className:
                "k4urcfbm oqcyycmt kgtf8isp taijpn5t j83agx80 bp9cbjyn",
              style: b,
              children: a.text,
            }),
          })
        : null;
    }
    b = c("withComposerViewStatePart")(a, function (a) {
      a =
        a.editorState != null
          ? c("getPlainTextFromDeferredDraftEditorState")(a.editorState)
          : "";
      return { showPlaceholder: a == null || a.length === 0 };
    });
    g["default"] = b;
  },
  98
);
__d(
  "getFeedComposerCometStatusAreaRelayPlaceholderText",
  ["fbt", "gkx"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = c("gkx")("1224637");
    function a(a, b) {
      if (a)
        if (i) return h._("What are you working on?");
        else
          return b != null
            ? h._("What's on your mind, {short name}?", [
                h._param("short name", b),
              ])
            : h._("What's on your mind?");
      return b != null
        ? h._("Write something to {short name}...", [h._param("short name", b)])
        : h._("Write something...");
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerCometFormattedTextStatusArea.react",
  [
    "fbt",
    "FeedComposerCometStatusArea.react",
    "FeedComposerCometStatusFormattedTextPlaceholder.react",
    "cr:10958",
    "getFeedComposerCometStatusAreaRelayPlaceholderText",
    "gkx",
    "react",
    "useCometStatusAreaTextData",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("gkx")("1217157");
    function a(a, d) {
      var e,
        f = c("useCometStatusAreaTextData")(a.formattedTextPreset);
      e =
        (e = a.placeholderText) != null
          ? e
          : c("getFeedComposerCometStatusAreaRelayPlaceholderText")(
              a.isViewerFeed,
              a.userShortName
            );
      var g;
      j &&
        b("cr:10958") != null &&
        (g = i.jsx(b("cr:10958"), {
          body: h._("Get creative here..."),
          header: h._("Untitled"),
        }));
      a.formattedTextPreset != null &&
        ((g = i.jsx(
          c("FeedComposerCometStatusFormattedTextPlaceholder.react"),
          { formattedTextPreset: a.formattedTextPreset, text: e }
        )),
        (e = ""));
      return i.jsxs("div", {
        className: "taijpn5t j83agx80",
        ref: a.statusContainerRef,
        children: [
          g,
          i.jsx(
            c("FeedComposerCometStatusArea.react"),
            babelHelpers["extends"](
              {
                alwaysShrinkText: a.alwaysShrinkText,
                autoFocus: a.autoFocus,
                draftEditorRendering: a.draftEditorRendering,
                formatPastedText: a.formatPastedText,
                isViewerFeed: a.isViewerFeed,
                onClose: a.onClose,
                placeholderText: e,
                ref: d,
                stripPastedStyles: a.stripPastedStyles,
                testid: void 0,
                userShortName: a.userShortName,
              },
              f
            )
          ),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "cometComposerMultilingualIsActive",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = (a = a.multilingualData) == null ? void 0 : a.otherDialects;
      return a == null ? !1 : Object.keys(a).length > 0;
    }
    f["default"] = a;
  },
  66
);
__d(
  "cometComposerFormattedTextEligibilityChecker",
  [
    "CometComposerAttachmentPluginTypes",
    "cometComposerMultilingualIsActive",
    "cometFormattedTextIneligibilityCheck",
    "getPlainTextFromDeferredDraftEditorState",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (c("cometComposerMultilingualIsActive")(a))
        return new Set([
          c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,
        ]);
      if (a.editorState != null) {
        if (a.formattingType === "RICHTEXT")
          return c("gkx")("1953096")
            ? new Set()
            : new Set([c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT]);
        if (a.formattingType === "MARKDOWN")
          return new Set([
            c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,
          ]);
        var b = c("getPlainTextFromDeferredDraftEditorState")(a.editorState);
        if (c("cometFormattedTextIneligibilityCheck")(b))
          return new Set([
            c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,
          ]);
        a = (b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType;
        if (a === c("CometComposerAttachmentPluginTypes").LINK)
          return new Set([
            c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,
          ]);
      }
      return new Set();
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerFormattedTextTransform",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      if (a.formattingType !== "SATP") {
        a.formattedText !== null
          ? c(babelHelpers["extends"]({}, b, { text_format_preset_id: "0" }))
          : c(b);
        return;
      }
      c(
        babelHelpers["extends"]({}, b, {
          text_format_preset_id:
            (a =
              (c = a.formattedText) == null
                ? void 0
                : (b = c.currentFormattedTextPreset) == null
                ? void 0
                : b.preset_id) != null
              ? a
              : "0",
        })
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "useCometSATPDraftEditorRenderingProps",
  ["cr:1984289", "emptyFunction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d = (a = b("cr:1984289")) != null ? a : c("emptyFunction").thatReturnsNull;
    e = d;
    g["default"] = e;
  },
  98
);
__d(
  "CometComposerSwatchPickerMenu.entrypoint",
  [
    "CometComposerSwatchPickerMenuUsingRelayEntrypointQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = a.customSwatchCategory;
        a = a.rankedTextFormatPresetsCollection;
        return {
          queries: {
            swatchPickerMenuQueryReference: {
              parameters: c(
                "CometComposerSwatchPickerMenuUsingRelayEntrypointQuery$Parameters"
              ),
              variables: {
                containsCustomSwatchCategory: b != null,
                customSwatchCategories: b != null ? [b] : void 0,
                rankedTextFormatPresetsCollection: a,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometComposerSwatchPickerMenuUsingRelayEntrypoint.react"
      ).__setRef("CometComposerSwatchPickerMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerSwatchPickerMenuGlimmer.react",
  ["BaseGlimmer.react", "CometFlexibleRow.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 20;
    function a() {
      var a = [];
      for (var b = 0; b < i; b++)
        a.push(
          h.jsx(
            c("BaseGlimmer.react"),
            {
              className:
                "bsnbvmp4 tvmbv18p k7cz35w2 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
              index: b,
            },
            b
          )
        );
      return h.jsx("div", {
        className: "k4urcfbm scb9dxdr dflh9lhu stjgntxs ni8dbmo4",
        children: h.jsx(c("CometFlexibleRow.react"), {
          columnMaxWidth: 34,
          columnMinWidth: 32,
          justify: "center",
          maxItems: a.length,
          minItems: 0,
          children: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerSwatchPickerUsingRelayEntrypoint.react",
  [
    "fbt",
    "ix",
    "CometComposerAttachmentPluginTypes",
    "CometComposerSATPContext",
    "CometComposerSwatchPickerMenu.entrypoint",
    "CometComposerSwatchPickerMenuGlimmer.react",
    "CometImage.react",
    "CometPlaceholder.react",
    "CometPressable.react",
    "CometRelay",
    "TetraIcon.react",
    "cometComposerFormattedTextReducers",
    "cometFormattedTextIneligibilityCheck",
    "fbicon",
    "getPlainTextFromDeferredDraftEditorState",
    "react",
    "useCometRelayEntrypointContextualEnvironmentProvider",
    "useComposerPluginIneligibility",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useContext,
      m = b.useEffect;
    function a(a) {
      var b = a.customSwatchCategory,
        e = a.formattedTextPreset,
        f = a.isDisabled,
        g = a.onClickSwatch,
        l = a.rankedTextFormatPresetsCollection;
      a = a.satpBarIsExpanded;
      var n = !!a;
      c("useComposerViewStateReducer")(c("cometComposerFormattedTextReducers"));
      var o = c("useComposerViewStateDispatcher")();
      a = k(
        function (a) {
          g && g(),
            o({ formattedTextPreset: a, type: "FORMATTED_TEXT_PRESET_TOGGLE" });
        },
        [o, g]
      );
      var p = c("useCometRelayEntrypointContextualEnvironmentProvider")(),
        q = d("CometRelay").useEntryPointLoader(
          p,
          c("CometComposerSwatchPickerMenu.entrypoint")
        ),
        r = q[0],
        s = q[1];
      m(
        function () {
          n &&
            !r &&
            s({
              customSwatchCategory: b,
              rankedTextFormatPresetsCollection: l,
            });
        },
        [b, p, n, r, s, l]
      );
      q = k(
        function () {
          o({ type: "SATP_BAR_EXPANDED_TOGGLE" });
        },
        [o]
      );
      p = n ? h._("Hide Background Options") : h._("Show Background Options");
      p = j.jsxs("div", {
        className: "k4urcfbm j83agx80 rq0escxv gs1a9yip",
        children: [
          j.jsx(c("CometPressable.react"), {
            "aria-label": p,
            onPress: q,
            overlayDisabled: !0,
            children: n
              ? j.jsx("div", {
                  className:
                    "bsnbvmp4 taijpn5t k7cz35w2 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 g6srhlxm bp9cbjyn" +
                    (e != null ? " c87oxz0k" : ""),
                  children: j.jsx(c("TetraIcon.react"), {
                    icon: d("fbicon")._(i("492485"), 16),
                  }),
                })
              : j.jsx("span", {
                  className: "hop8lmos rl04r1d5",
                  "data-testid": void 0,
                  children: j.jsx(c("CometImage.react"), {
                    height: 38,
                    src: "/images/composer/SATP_Aa_square-2x.png",
                  }),
                }),
          }),
          n &&
            r &&
            j.jsx(c("CometPlaceholder.react"), {
              fallback: j.jsx(
                c("CometComposerSwatchPickerMenuGlimmer.react"),
                {}
              ),
              children: j.jsx(d("CometRelay").EntryPointContainer, {
                entryPointReference: r,
                props: { onSwatchSelected: a },
              }),
            }),
        ],
      });
      return !f ? p : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      var b = a.editorState,
        d = c("useComposerPluginIneligibility")(),
        e = l(c("CometComposerSATPContext")),
        f = e.satpMaxNewLines;
      e = e.satpTextCharLimit;
      b =
        b != null &&
        (c("cometFormattedTextIneligibilityCheck")(
          c("getPlainTextFromDeferredDraftEditorState")(b),
          e,
          f
        ) ||
          d.has(c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT));
      return {
        formattedTextPreset:
          (e = a.formattedText) == null ? void 0 : e.currentFormattedTextPreset,
        isDisabled: b,
        satpBarIsExpanded:
          (f = a.formattedText) == null ? void 0 : f.satpBarIsExpanded,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "cometComposerTaggerEligibilityChecker",
  [
    "CometComposerTaggerPluginTypes",
    "cr:1500338",
    "withTagIDsTrackerConversionUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b;
      if (((b = a.brandedContent) == null ? void 0 : b.sponsorID) != null)
        return new Set([
          c("CometComposerTaggerPluginTypes").TAG,
          a.brandedContent.sponsorRelationship === "SUPPORT"
            ? c("CometComposerTaggerPluginTypes").BRANDED_CONTENT
            : c("CometComposerTaggerPluginTypes").BC_SUPPORT,
        ]);
      b = d("withTagIDsTrackerConversionUtils").convertWithTagIDsTrackerToArray(
        a.withTagIDsTracker
      );
      if (
        b.length > 0 &&
        (a.taggedProductIDs == null || a.taggedProductIDs.length === 0)
      )
        return new Set([
          c("CometComposerTaggerPluginTypes").BRANDED_CONTENT,
          c("CometComposerTaggerPluginTypes").BC_SUPPORT,
        ]);
      if (a.activityMinutiae != null)
        return new Set([c("CometComposerTaggerPluginTypes").LOCAL_ALERT]);
      if (a.localAlert != null)
        return new Set([c("CometComposerTaggerPluginTypes").MINUTIAE]);
      if (a.isGetMessagesPost != null)
        return new Set([
          c("CometComposerTaggerPluginTypes").PRODUCT_TAG,
          c("CometComposerTaggerPluginTypes").VIDEO_PRODUCT_TAG,
        ]);
      if (a.taggedProductIDs != null)
        return new Set([
          c("CometComposerTaggerPluginTypes").GET_MESSAGES,
          c("CometComposerTaggerPluginTypes").GET_WHATSAPP_MESSAGES,
        ]);
      return a.mediaAttachments != null && a.mediaAttachments.length > 1
        ? new Set([c("CometComposerTaggerPluginTypes").CALL_NOW])
        : new Set();
    }
    function a(a) {
      var c = h(a);
      a = b("cr:1500338") !== null ? b("cr:1500338")(a) : new Set();
      return new Set([].concat(Array.from(c), Array.from(a)));
    }
    g["default"] = a;
  },
  98
);
__d(
  "ComposerPhoto3dAttachmentAreaResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "ComposerPhoto3dAttachmentArea.react"
    ).__setRef("ComposerPhoto3dAttachmentAreaResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "cometComposerValidatePhoto3dAttachment",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      a = a.photo3dAttachment;
      if (a == null) return null;
      if (a.error !== void 0)
        return h._("An occurred while creating your 3D Photo");
      a = a.renderData;
      return a === void 0
        ? h._("Please wait while we are creating your 3D Photo")
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "FundraiserForStoryAttachmentAreaResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "FundraiserForStoryAttachmentArea.react"
    ).__setRef("FundraiserForStoryAttachmentAreaResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "fundraiserForStoryTransform",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      a.nonprofit == null
        ? c(b)
        : c(
            babelHelpers["extends"]({}, b, {
              attachments: [
                {
                  fundraiser_for_story: { charity_id: a.nonprofit.nonprofitID },
                },
              ],
            })
          );
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometComposerEllipsisSproutButton.react",
  [
    "fbt",
    "ix",
    "CometComposerPromotionContext",
    "CometComposerPushPageContext",
    "CometComposerSproutButton.react",
    "FeedComposerCometSproutButtonContainer.react",
    "FeedComposerFullSproutsList.react",
    "react",
    "useCometComposerPushPage",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a(a) {
      var b = a.sprouts,
        d = c("useCometComposerPushPage")(),
        e = k(c("CometComposerPromotionContext"));
      return j.jsx(c("FeedComposerCometSproutButtonContainer.react"), {
        children: j.jsx(c("CometComposerSproutButton.react"), {
          activeColor: "var(--fds-spectrum-slate-tint-70)",
          disabledIcon: i("479259"),
          icon: i("496429"),
          label: h._("More"),
          loggingName: "ellipsis_sprout",
          onClick: function () {
            d != null &&
              d(h._("Add to Your Post"), function (a) {
                a = a.onReturn;
                return j.jsx(c("CometComposerPushPageContext").Provider, {
                  value: d,
                  children: j.jsx(c("CometComposerPromotionContext").Provider, {
                    value: e,
                    children: j.jsx(c("FeedComposerFullSproutsList.react"), {
                      popPage: a,
                      children: b,
                    }),
                  }),
                });
              });
          },
          pluginName: "ELLIPSIS",
          sproutName: "ELLIPSIS",
          testid: void 0,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerSproutList.react",
  [
    "CometComposerEllipsisSproutButton.react",
    "CometComposerSproutVisibilitiesContext",
    "CometTooltipGroup.react",
    "FeedComposerCometSproutButtonContainer.react",
    "react",
    "useCometComposerInlineSproutsLogging",
    "useCometComposerPushPage",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.numInlineSprouts,
        d = a.sprouts;
      a = a.wideContainer;
      a = a === void 0 ? !1 : a;
      var e = c("useCometComposerInlineSproutsLogging")({
        actionType: "INLINE_SPROUTS_INITIAL_STATE",
        maxLoggingCount: 1,
        sproutsCount: d.length,
        sproutsState: "collapsed",
      });
      e = e.loggingHandlers;
      var f = c("useCometComposerPushPage")() != null,
        g = d.length > b,
        i = d;
      !f ? (i = d.slice(0, b)) : g && (i = d.slice(0, b - 1));
      return h.jsx("div", {
        className: "j83agx80" + (a ? " k4urcfbm i1fnvgqd" : ""),
        children: h.jsx(c("CometComposerSproutVisibilitiesContext").Provider, {
          value: e,
          children: h.jsxs(c("CometTooltipGroup.react"), {
            children: [
              i.map(function (a) {
                return h.jsx(
                  "div",
                  {
                    className: "dwxx2s2f dicw6rsg kady6ibp rs0gx3tq",
                    children: h.jsx(
                      c("FeedComposerCometSproutButtonContainer.react"),
                      { children: a }
                    ),
                  },
                  a.key
                );
              }),
              g && f
                ? h.jsx("div", {
                    className: "dwxx2s2f dicw6rsg kady6ibp rs0gx3tq",
                    children: h.jsx(
                      c("CometComposerEllipsisSproutButton.react"),
                      { sprouts: d }
                    ),
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
  "CometComposerPushedPageOnLoad",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ASK_FOR_RECOMMENDATIONS: "ask_for_recommendations",
      ASK_ME_ANYTHING: "ask_me_anything",
      COMMUNITY_QA: "community_qa",
      CONNECT_WHATSAPP: "connect_whatsapp",
      FEELING: "feeling",
      GET_MESSAGES: "get_messages",
      GET_WHATSAPP_MESSAGES: "get_whatsapp_messages",
      LOCAL_ALERT_TAGGER: "local_alert_tagger",
      LOCATION_TAGGER: "location_tagger",
      LOOKING_FOR_PLAYERS: "looking_for_players",
      MLE: "mle",
      PRAYER: "prayer",
      PRODUCT_TAGGER: "product_tagger",
      QUILTS_COMPOSER: "quilts_composer",
      SHARE_CANDIDATE: "share_candidate",
      SHIFT_COVER: "shift_cover",
      SHIFT_MANAGEMENT_COVER: "shift_management_cover",
      VIDEO_MEETUP: "video_meetup",
      VOTING_ALERT_TAGGER: "voting_alert_tagger",
      WITH_TAGGER: "with_tagger",
    });
    f["default"] = a;
  },
  66
);
__d(
  "CometComposerSproutListMatcher.react",
  [
    "CometComposerPushedPageOnLoad",
    "CometComposerSproutList.react",
    "CometRelay",
    "CometRouteParams",
    "castToEnum",
    "orEmptyArray",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.numInlineSprouts,
        d = a.sproutProps,
        e = a.sprouts;
      a = a.wideContainer;
      return h.jsx(c("CometComposerSproutList.react"), {
        numInlineSprouts: b,
        sprouts: i(e, d),
        wideContainer: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      var a = d("CometRouteParams").useRouteParams();
      a = a.composer_push_page;
      return c("castToEnum")(a, c("CometComposerPushedPageOnLoad"));
    }
    function i(a, b, e) {
      a == null &&
        c("recoverableViolation")(
          "Server failed to provide a valid sprouts object for the composer.",
          "comet_composer"
        );
      e = e === !0 ? j(a, b) : { promotedSprout: null, unprocessedSprouts: a };
      a = e.promotedSprout;
      e = e.unprocessedSprouts;
      return [a]
        .concat(
          c("orEmptyArray")(e).map(function (a, c) {
            return h.jsx(
              d("CometRelay").MatchContainer,
              { match: a, props: b },
              c
            );
          })
        )
        .filter(Boolean);
    }
    function j(a, b) {
      if (a == null) return { unprocessedSprouts: a };
      var c = a.slice(0, 2),
        e = c[0];
      c = c[1];
      c = h.jsx(d("CometRelay").MatchContainer, { match: c, props: b }, -1);
      b = h.jsx(
        d("CometRelay").MatchContainer,
        { match: e, props: { children: c } },
        -1
      );
      return { promotedSprout: b, unprocessedSprouts: a.slice(2) };
    }
    a.useMatcher = i;
    g.CometComposerSproutListMatcher = a;
    g.useGetSproutToPushTo = b;
  },
  98
);
__d(
  "useGeminiComposerRichTextNodeRefs",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    var h = a.useMemo,
      i = a.useRef;
    b = function () {
      var a = i(null),
        b = i(null),
        c = i(null),
        d = i(null);
      return h(function () {
        return { context: a, popover: b, root: c, insertionToolbar: d };
      }, []);
    };
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "FeedComposerCometStatusAreaClickHandler.react",
  [
    "BaseGlimmer.react",
    "CometComposerAttachmentPluginTypes",
    "CometComposerStylingConstants",
    "CometComposerSwatchPickerUsingRelayEntrypoint.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "FeedComposerCometStatusAreaClickHandler_viewer.graphql",
    "FeedComposerCometStatusAreaClickHandler_viewerPlaceholder.graphql",
    "cr:10963",
    "cr:1694603",
    "cr:1694604",
    "cr:264",
    "getDeferredDraftEditorStateHasFocus",
    "gkx",
    "react",
    "stylex",
    "useCometComposerPushPage",
    "useCometComposerSATPConfig",
    "useComposerPluginIneligibility",
    "useGeminiComposerRichTextNodeRefs",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react"),
      l = d("react").useCallback,
      m = (j = b("cr:1694604")) != null ? j : a;
    function a(a) {
      a = a.children;
      return a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var n = {
      insertionButtons: {
        bottom: "i09qtzwb",
        end: "qpd6qd77",
        position: "pmk7jnqg",
      },
      pressableArea: {
        cursor: "o6r2urh6",
        flexGrow: "buofh1pr",
        height: "datstx6m",
        position: "l9j0dhe7",
        width: "k4urcfbm",
      },
      pressableAreaWithFooterAttachment: { minHeight: "ss3p3tc4" },
      pressableAreaWithFormattingAndInsertionButtons: { minHeight: "m79xd9q8" },
      pressableAreaWithResponsiveSATP: {
        alignItems: "ll8tlv6m",
        minHeight: "qqep6wtg",
        width: "k4urcfbm",
      },
      pressableAreaWithResponsiveSATPCentered: {
        alignItems: "bp9cbjyn",
        minHeight: "qqep6wtg",
        width: "k4urcfbm",
      },
      pressableAreaWithSATP: { alignItems: "bp9cbjyn", display: "j83agx80" },
      root: {
        boxSizing: "rq0escxv",
        flexGrow: "buofh1pr",
        height: "df2bnetk",
        paddingEnd: "hv4rvrfc",
        paddingStart: "dati1w0a",
        position: "l9j0dhe7",
        width: "k4urcfbm",
        zIndex: "du4w35lb",
      },
      rootWithEmojiButtonVariableWidth: { paddingEnd: "ftjopcgk" },
      rootWithFormattingMenuVariableWidth: { paddingEnd: "f287bsym" },
      rootWithSwatchPicker: { paddingBottom: "gbhij3x4" },
      swatchPickerGlimmer: {
        borderTopStartRadius: "ue3kfks5",
        borderTopEndRadius: "pw54ja7n",
        borderBottomEndRadius: "uo3d90p7",
        borderBottomStartRadius: "l82x9zwi",
        height: "k7cz35w2",
        width: "bsnbvmp4",
      },
      toolbar: {
        bottom: "i09qtzwb",
        boxSizing: "rq0escxv",
        paddingEnd: "d1544ag0",
        paddingStart: "dati1w0a",
        position: "pmk7jnqg",
        start: "j9ispegn",
      },
      toolbarVariableWidthWithNoTopics: { end: "rm21btxo" },
      toolbarVariableWidthWithTopics: { end: "esma6hys" },
      toolbarWithSATP: { paddingBottom: "f10w8fjw" },
    };
    h !== void 0
      ? h
      : (h = b(
          "FeedComposerCometStatusAreaClickHandler_viewerPlaceholder.graphql"
        ));
    function e(a) {
      var e = a.children,
        f = a.composerDialogWidth,
        g = a.hasFocus,
        h = a.hasFooterAttachment;
      h = h === void 0 ? !1 : h;
      var j = a.hasFormattedText,
        q = a.isSwatchPickerDisabled,
        r = a.isWorkAMAPost,
        s = a.showSwatchPicker;
      s = s === void 0 ? !0 : s;
      var t = a.statusAreaRef;
      a = a.viewer$key;
      var u = c("useCometComposerSATPConfig")(),
        v = u.customSATPCategory,
        w = u.satpContainerIsResponsive;
      u = u.satpTextVerticalAlignment;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("FeedComposerCometStatusAreaClickHandler_viewer.graphql")),
        a
      );
      var x = p(),
        y = l(
          function () {
            var a = t.current;
            if (a == null) return;
            if (g) return;
            a.focusEnd();
          },
          [g, t]
        ),
        z = r || c("gkx")("1953096");
      z = c("gkx")("1217157") ? s && z : s;
      z = z
        ? k.jsx(c("CometComposerSwatchPickerUsingRelayEntrypoint.react"), {
            customSwatchCategory: v,
            onClickSwatch: y,
            rankedTextFormatPresetsCollection:
              r === !0 ? "ASK_ME_ANYTHING" : void 0,
          })
        : null;
      v = c("useGeminiComposerRichTextNodeRefs")();
      r =
        b("cr:264") != null || (a == null ? void 0 : a.hashtag_button) != null;
      var A = b("cr:1694603") !== null && !j,
        B = r || x;
      f =
        j && f != null
          ? f / d("CometComposerStylingConstants").SATP_ASPECT_RATIO
          : null;
      return k.jsxs("div", {
        className: c("stylex")(
          n.pressableArea,
          A && B && n.pressableAreaWithFormattingAndInsertionButtons,
          j && n.pressableAreaWithSATP,
          j &&
            w &&
            (u === "center"
              ? n.pressableAreaWithResponsiveSATPCentered
              : n.pressableAreaWithResponsiveSATP),
          s && h && n.pressableAreaWithFooterAttachment
        ),
        onClick: y,
        role: "presentation",
        style: { minHeight: f },
        children: [
          k.jsx(m, {
            refs: v,
            children: k.jsx("div", {
              className: c("stylex")(
                n.root,
                x && q && n.rootWithEmojiButtonVariableWidth,
                A && n.rootWithFormattingMenuVariableWidth,
                z != null && n.rootWithSwatchPicker
              ),
              children: e,
            }),
          }),
          z != null
            ? k.jsx("div", {
                className: c("stylex")(
                  n.toolbar,
                  r
                    ? n.toolbarVariableWidthWithTopics
                    : n.toolbarVariableWidthWithNoTopics,
                  j && n.toolbarWithSATP
                ),
                children: k.jsx(c("CometPlaceholder.react"), {
                  fallback: k.jsx(c("BaseGlimmer.react"), {
                    className: c("stylex")(n.swatchPickerGlimmer),
                    index: 1,
                  }),
                  children: z,
                }),
              })
            : null,
          b("cr:1694603") != null &&
            k.jsx(b("cr:1694603"), { refs: v, viewer$key: a }),
          k.jsx(o, { ref: v.insertionToolbar, viewer: a }),
        ],
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    var o = k.forwardRef(function (a, e) {
        a = a.viewer;
        var f = p();
        return k.jsxs(c("CometRow.react"), {
          paddingHorizontal: 0,
          paddingVertical: 0,
          ref: e,
          spacing: 0,
          xstyle: n.insertionButtons,
          children: [
            b("cr:10963") && f
              ? k.jsx(c("CometRowItem.react"), {
                  children: k.jsx(b("cr:10963"), {}),
                })
              : (a == null ? void 0 : a.emoji_button) != null && f
              ? k.jsx(c("CometRowItem.react"), {
                  children: k.jsx(d("CometRelay").MatchContainer, {
                    match: a.emoji_button,
                  }),
                })
              : null,
            b("cr:264") != null
              ? k.jsx(c("CometRowItem.react"), {
                  children: k.jsx(b("cr:264"), {}),
                })
              : (a == null ? void 0 : a.hashtag_button) != null &&
                k.jsx(c("CometRowItem.react"), {
                  children: k.jsx(d("CometRelay").MatchContainer, {
                    match: a.hashtag_button,
                  }),
                }),
          ],
        });
      }),
      p = function () {
        var a = c("useCometComposerSATPConfig")();
        a = a.emojiPickerIsHidden;
        var b = c("useCometComposerPushPage")();
        return b != null && !a;
      };
    j = c("withComposerViewStatePart")(e, function (a) {
      var b,
        d = c("useComposerPluginIneligibility")();
      d = d.has(c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT);
      return {
        composerDialogWidth:
          (b = a.composerSizeAndStyleMetadata) == null
            ? void 0
            : b.composerDialogWidth,
        hasFocus: c("getDeferredDraftEditorStateHasFocus")(a.editorState),
        hasFormattedText:
          ((b = a.formattedText) == null
            ? void 0
            : b.currentFormattedTextPreset) != null,
        isSwatchPickerDisabled: d,
        isWorkAMAPost:
          ((b = a.workAMAMetadata) == null ? void 0 : b.isAMA) === !0,
      };
    });
    g["default"] = j;
  },
  98
);
__d(
  "useCometComposerMaybePushLocationPageOnOpen",
  ["react", "useCometComposerPushLocationPage"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = c("useCometComposerPushLocationPage")(),
        d = i(!1);
      h(
        function () {
          a && !d.current && ((d.current = !0), b());
        },
        [b, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useComposerMaybePushMinutaeViewOnOpen",
  ["react", "useCometComposerPushMinutiaePage", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a) {
      var b = c("useCometComposerPushMinutiaePage")(),
        d = c("useStable")(function () {
          return b;
        });
      h(
        function () {
          d != null && a && d();
        },
        [d, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProductTagComposerIconClickNullStateFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744199");
    c = b("FalcoLoggerInternal").create(
      "product_tag_composer_icon_click_null_state",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ProductTagComposerIconClickPhotoRedirectFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744200");
    c = b("FalcoLoggerInternal").create(
      "product_tag_composer_icon_click_photo_redirect",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "useCometComposerPushProductTagPage",
  [
    "fbt",
    "CometMediaEditorPageResource",
    "CometTransientDialogProvider.react",
    "GroupCometComposerContext",
    "JSResourceForInteraction",
    "ProductTagComposerIconClickNullStateFalcoEvent",
    "ProductTagComposerIconClickPhotoRedirectFalcoEvent",
    "ProductTagTypeaheadContext",
    "lazyLoadComponent",
    "react",
    "useCometComposerPushPage",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useContext,
      k = c("lazyLoadComponent")(c("CometMediaEditorPageResource")),
      l = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometPhotoEditorNoPhotoPage.react"
        ).__setRef("useCometComposerPushProductTagPage")
      );
    function a(a, e, f, g, m, n) {
      var o = j(c("GroupCometComposerContext")),
        p = j(d("ProductTagTypeaheadContext").ProductTagTypeaheadContext),
        q = c("useCometComposerPushPage")();
      if (q == null) return null;
      var r = function (a) {
          n != null && n(), a();
        },
        s = h._("Photo Detail"),
        t = function () {
          q != null &&
            q(
              s,
              function (a) {
                var b = a.onReturn;
                return i.jsx(c("GroupCometComposerContext").Provider, {
                  value: o,
                  children: i.jsx(
                    d("ProductTagTypeaheadContext").ProductTagTypeaheadContext
                      .Provider,
                    {
                      value: p,
                      children: i.jsx(c("CometTransientDialogProvider.react"), {
                        children: i.jsx(k, {
                          index: 0,
                          initialTool: "PRODUCT_TAG",
                          isDialog: !0,
                          onBack: function () {
                            return r(b);
                          },
                        }),
                      }),
                    }
                  ),
                });
              },
              { hasCustomHeader: !0 }
            );
        },
        u = function () {
          q != null &&
            q(
              s,
              function (a) {
                var b = a.onReturn;
                return i.jsx(k, {
                  index: 0,
                  initialTool: "VIDEO_PRODUCT_TAG",
                  isDialog: !0,
                  isOnVideoLiteComposer: !0,
                  onBack: function () {
                    return r(b);
                  },
                });
              },
              { hasCustomHeader: !0 }
            );
        },
        v = function () {
          q != null &&
            e != null &&
            q(
              s,
              function (a) {
                var b = a.onReturn;
                return i.jsx(l, {
                  onBack: b,
                  onRedirectBack: function () {
                    return r(b);
                  },
                  pageID: e,
                  pushPhotoEditorPageWithPhotos: t,
                  pushVideoEditorPageWithVideo: u,
                });
              },
              { hasCustomHeader: !0 }
            );
        };
      return function () {
        g
          ? m
            ? u()
            : (t(),
              b("ProductTagComposerIconClickPhotoRedirectFalcoEvent").log(
                function () {
                  var b;
                  return {
                    creation_session_id: a,
                    creator_id: (b = e) != null ? b : "",
                    entity_type: "product_item",
                    media_type: "photo",
                    platform: "comet",
                    referral_source: f ? "post_editor" : "composer",
                  };
                }
              ))
          : (v(),
            b("ProductTagComposerIconClickNullStateFalcoEvent").log(
              function () {
                var a;
                return {
                  creator_id: (a = e) != null ? a : "",
                  platform: "comet",
                  referral_source: f ? "post_editor" : "composer",
                };
              }
            ));
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useComposerMaybePushQuiltsViewOnOpen",
  ["react", "useCometComposerPushQuiltsPage"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = c("useCometComposerPushQuiltsPage")(),
        d = i(!1);
      h(
        function () {
          a && !d.current && ((d.current = !0), b());
        },
        [b, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSproutPromotionsUtil",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return (
        a != null &&
        (a == null ? void 0 : a.length) > 0 &&
        a[0] != null &&
        a[0].__typename === "CometComposerPromotedSprout"
      );
    }
    f.getHasPromotion = a;
  },
  66
);
__d(
  "useSproutsFromRelay",
  [
    "CometComposerSproutListMatcher.react",
    "CometRelay",
    "CometSproutPromotionsUtil",
    "react",
    "useSproutsFromRelay_composer.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d("react");
    function a(a, c, e, f) {
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useSproutsFromRelay_composer.graphql")),
        a
      );
      var g = d("CometSproutPromotionsUtil").getHasPromotion(a.sprouts);
      a = d(
        "CometComposerSproutListMatcher.react"
      ).CometComposerSproutListMatcher.useMatcher(
        a.sprouts,
        { composerType: c, onCloseComposer: e, pushedPageOnLoad: f },
        g
      );
      return { hasPromotion: g, sprouts: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedComposerCometToolbar.react",
  [
    "fbt",
    "Actor",
    "CometComposerPromotionContext",
    "CometComposerPushPageContext",
    "CometComposerSproutList.react",
    "CometComposerToolbar.react",
    "CometPressable.react",
    "CometRelay",
    "FeedComposerCometToolbar_composer.graphql",
    "FeedComposerFullSproutsList.react",
    "TetraText.react",
    "blueVideoComposerReducer",
    "composerAttachmentAreaChecker",
    "composerAttachmentAreaReducer",
    "qex",
    "react",
    "useCometComposerMaybePushLocationPageOnOpen",
    "useCometComposerPushPage",
    "useComposerMaybePushAskMeAnythingViewOnOpen",
    "useComposerMaybePushMLEViewOnOpen",
    "useComposerMaybePushMinutaeViewOnOpen",
    "useComposerMaybePushProductTagViewOnOpen",
    "useComposerMaybePushQuiltsViewOnOpen",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "useSproutsFromRelay",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useMemo,
      m = 6;
    function a(a) {
      var e = a.composer,
        f = a.composerType,
        g = a.creationSessionID,
        n = a.hasMediaAttachment,
        o = a.isSelfProfile,
        p = o === void 0 ? !0 : o,
        q = a.onClose;
      o = a.pushedPageOnLoad;
      c("useComposerViewStateReducer")(
        d("composerAttachmentAreaReducer").composerAttachmentAreaReducer,
        c("composerAttachmentAreaChecker")
      );
      c("useComposerViewStateReducer")(c("blueVideoComposerReducer"));
      var r = c("useComposerViewStateDispatcher")();
      k(
        function () {
          r({
            closeCometComposer: q,
            isActorAdmin: p,
            type: "blue_video_composer_init_data",
          });
        },
        [r, p, q]
      );
      a = d("Actor").useActor();
      a = a[0];
      c("useCometComposerMaybePushLocationPageOnOpen")(o === "location_tagger");
      c("useComposerMaybePushMLEViewOnOpen")(o === "mle");
      c("useComposerMaybePushMinutaeViewOnOpen")(o === "feeling");
      c("useComposerMaybePushAskMeAnythingViewOnOpen")(o === "ask_me_anything");
      c("useComposerMaybePushQuiltsViewOnOpen")(o === "quilts_composer");
      c("useComposerMaybePushProductTagViewOnOpen")(
        f === "edit",
        a,
        n,
        o === "product_tagger",
        g
      );
      var s = c("useCometComposerPushPage")();
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("FeedComposerCometToolbar_composer.graphql")),
        e
      );
      n = c("useSproutsFromRelay")(a, f, q, o);
      var t = n.hasPromotion,
        u = n.sprouts,
        v = l(
          function () {
            return { listContainsPromotion: t };
          },
          [t]
        );
      if (
        c("qex")._("322") === !0 &&
        ((g = u == null ? void 0 : u.length) != null ? g : 0) === 0
      )
        return null;
      var w =
        c("qex")._("322") === !0
          ? h._("More options")
          : h._("Add to Your Post");
      e = j.jsx(c("TetraText.react"), {
        type: "headlineEmphasized4",
        children: w,
      });
      s != null
        ? (a = j.jsx(c("CometPressable.react"), {
            label: w,
            onPress: function () {
              s(w, function (a) {
                a = a.onReturn;
                return j.jsx(c("CometComposerPushPageContext").Provider, {
                  value: s,
                  children: j.jsx(c("CometComposerPromotionContext").Provider, {
                    value: v,
                    children: j.jsx(c("FeedComposerFullSproutsList.react"), {
                      popPage: a,
                      children: u,
                    }),
                  }),
                });
              });
            },
            overlayDisabled: !0,
            children: e,
          }))
        : (a = e);
      return j.jsxs(c("CometComposerToolbar.react"), {
        children: [
          j.jsx("div", {
            className: "scb9dxdr qt6c0cv9 dflh9lhu jb3vyjys",
            children: a,
          }),
          j.jsx("div", {
            children: j.jsx(c("CometComposerPromotionContext").Provider, {
              value: v,
              children: j.jsx(c("CometComposerSproutList.react"), {
                numInlineSprouts: m,
                sprouts: u,
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
  "CometComposerAMAAttachmentAreaResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "CometComposerAMAAttachmentArea.react"
    ).__setRef("CometComposerAMAAttachmentAreaResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ComposerDefaultPrivacyUtils",
  ["gkx", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("gkx")("1217157") === !1 && c("qex")._("1824531") === !0;
    b = c("qex")._("1923032") === !0;
    g.isDefaultPrivacyEnabled = a;
    g.isDefaultPrivacyAutoOptInEnabled = b;
  },
  98
);
__d(
  "ComposerEmojiTrigger.react",
  ["cr:2028537"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2028537");
  },
  98
);
__d(
  "ComposerEmojiPopoverButton.react",
  [
    "fbt",
    "ix",
    "CometComposerSproutButton.react",
    "CometComposerTaggerPluginTypes",
    "ComposerEmojiTrigger.react",
    "react",
    "stylex",
    "useCometStatusAreaTextData",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useState;
    function a(a) {
      var b = a.formattedTextPreset;
      a = k(!1);
      var d = a[0],
        e = a[1];
      a = k(!1);
      var f = a[0],
        g = a[1];
      a =
        (a = c("useCometStatusAreaTextData")(b)) == null
          ? void 0
          : a.formattedTextStyling;
      var l = !1;
      a = a == null ? void 0 : a.color;
      if (a != null)
        try {
          var m = parseInt(a.substring(1, 3), 16),
            n = parseInt(a.substring(3, 5), 16);
          a = parseInt(a.substring(5, 7), 16);
          m = Math.min(m, n, a);
          l = m > 128;
        } catch (a) {
          l = !1;
        }
      return j.jsx(c("ComposerEmojiTrigger.react"), {
        setClicked: e,
        setHovered: g,
        children: function (a, k, m, n, o, p) {
          m = function (a) {
            n && n(a), g(!0);
          };
          p = function () {
            o && o(), g(!1);
          };
          var q = function () {
            e(!0), k();
          };
          return j.jsx("div", {
            className: c("stylex").dedupe(
              { "opacity-1": "kgtf8isp" },
              d || f ? { "opacity-1": "pedkr2u6" } : null,
              b != null ? { "padding-bottom-1": "f10w8fjw" } : null
            ),
            children: j.jsx(c("CometComposerSproutButton.react"), {
              activeColor: "var(--fds-gray-70)",
              disabledIcon: l ? i("792304") : i("615750"),
              icon: l ? i("792304") : i("615750"),
              isActive: !1,
              label: h._("Emoji"),
              loggingName: "minutiae_sprout",
              onClick: q,
              onHoverIn: m,
              onHoverOut: p,
              overlayDisabled: !0,
              pluginName: c("CometComposerTaggerPluginTypes").MINUTIAE,
              ref: a,
              sproutName: "MINUTIAE",
            }),
          });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      return {
        formattedTextPreset:
          (a = a.formattedText) == null ? void 0 : a.currentFormattedTextPreset,
      };
    });
    g["default"] = b;
  },
  98
);
__d(
  "ComposerEmojiTriggerImpl.react",
  [
    "CometErrorBoundary.react",
    "CometLazyPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "JSResourceForInteraction",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("JSResourceForInteraction")("ComposerEmojiPopover.react").__setRef(
        "ComposerEmojiTriggerImpl.react"
      ),
      j = { popoverFallback: { minWidth: "p01isnhg" } };
    function a(a) {
      var b = a.align;
      b = b === void 0 ? "middle" : b;
      var d = a.children,
        e = a.position;
      e = e === void 0 ? "above" : e;
      var f = a.setClicked,
        g = a.setHovered;
      a = a.visibleOnLoad;
      a = a === void 0 ? !1 : a;
      return h.jsx(c("CometErrorBoundary.react"), {
        children: h.jsx(c("CometLazyPopoverTrigger.react"), {
          align: b,
          fallback: h.jsx(c("CometPopoverLoadingState.react"), {
            withArrow: !0,
            xstyle: j.popoverFallback,
          }),
          popoverProps: { setClicked: f, setHovered: g },
          popoverResource: i,
          position: e,
          preloadTrigger: "button",
          tracePolicy: "comet.emojipicker",
          visibleOnLoad: a,
          children: d,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ComposerLinkAttachmentAreaResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "ComposerLinkAttachmentArea.react"
    ).__setRef("ComposerLinkAttachmentAreaResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ComposerLocationAttachmentAreaResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "ComposerLocationAttachmentArea.react"
    ).__setRef("ComposerLocationAttachmentAreaResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "composerLocationMinutiaeTransformData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a == null
        ? { explicit_place_id: "0" }
        : {
            explicit_place_id: a.placeID,
            place_attachment_setting:
              b === "SHOW_ATTACHMENT" ? "SHOW_ATTACHMENT" : "HIDE_ATTACHMENT",
          };
    }
    f["default"] = a;
  },
  66
);
__d(
  "composerLocationMinutiaeCreationDataTransform",
  ["composerLocationMinutiaeTransformData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      d(
        babelHelpers["extends"](
          {},
          b,
          c("composerLocationMinutiaeTransformData")(
            a.locationMinutiae,
            b.place_attachment_setting
          )
        )
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerMajorLifeEventAttachmentAreaRendererResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "CometComposerMajorLifeEventAttachmentAreaRenderer.react"
    ).__setRef("CometComposerMajorLifeEventAttachmentAreaRendererResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "cometComposerMajorLifeEventsEligibilityChecker",
  ["ProfileCometLifeEventsComposerTaggingUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b;
      b = (b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType;
      var c = new Set();
      if (b === "MAJOR_LIFE_EVENT") {
        b = (b = a.majorLifeEvent) == null ? void 0 : b.selectedCategoryID;
        a = (a = a.majorLifeEvent) == null ? void 0 : a.selectedSubcategoryID;
        (b === "WORK" ||
          b === "EDUCATION" ||
          d(
            "ProfileCometLifeEventsComposerTaggingUtils"
          ).shouldShowPartnerField(b, a, !0)) &&
          c.add("TAG");
        d(
          "ProfileCometLifeEventsComposerTaggingUtils"
        ).shouldShowMetadataLocationField(b, a) && c.add("LOCATION");
      }
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerValidateLifeEventPost",
  ["fbt", "getInvalidMLEField"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b;
      if (
        ((b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType) !==
        "LIFE_EVENT"
      )
        return null;
      b = c("getInvalidMLEField")(a.majorLifeEvent, !0);
      return b === "media"
        ? h._("You can't post while media is uploading")
        : b != null
        ? h._(
            "Please fill in missing information to continue. Enter the {field} field for your post.",
            [h._param("field", b)]
          )
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerWithTagTransform",
  ["withTagIDsTrackerConversionUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c) {
      c(
        babelHelpers["extends"]({}, b, {
          with_tags_ids: d(
            "withTagIDsTrackerConversionUtils"
          ).convertWithTagIDsTrackerToArray(a.withTagIDsTracker),
        })
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerCovidAlertsOnboardingStrings",
  ["fbt", "ix", "CometLink.react", "TetraText.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a() {
      return h._("Introducing COVID-19 announcements");
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      return h._(
        "COVID-19 announcements are for urgent posts about vaccines or other COVID-19 info that everyone in your area should get notified about."
      );
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function e() {
      return [
        {
          body: h._(
            "Describe the situation and what's important for people to know."
          ),
          headline: h._("1. Create a Post"),
          icon: d("fbicon")._(i("729676"), 20),
        },
        {
          body: h._("Select announcement details, like location and duration."),
          headline: h._("2. Add a COVID-19 announcement to your post"),
          icon: d("fbicon")._(i("502062"), 20),
        },
        {
          body: h._(
            "Once the announcement is approved, people will get a notification."
          ),
          headline: h._("3. People get notified"),
          icon: d("fbicon")._(i("508241"), 20),
        },
      ];
    }
    function k() {
      return [
        h._("1. About COVID-19 vaccines or other urgent COVID-19 info"),
        h._("2. Actionable and need-to-know"),
        h._("3. Broadly applicable to anyone in the local area"),
        h._("4. Urgent and time-sensitive"),
      ];
    }
    function l(a) {
      return h._(
        "Use COVID-19 announcements responsibly and only for urgent updates. We recommend only posting one announcement a day. Announcements that don\u2019t follow guidelines, including posts that mention elections or politics, or that link to news articles, may not be approved. {learn_more_link}",
        [
          h._param(
            "learn_more_link",
            j.jsxs(j.Fragment, {
              children: [
                j.jsx("br", {}),
                j.jsx(c("CometLink.react"), {
                  href: a,
                  target: "_blank",
                  children: j.jsx(c("TetraText.react"), {
                    color: "blueLink",
                    type: "bodyLink3",
                    children: h._("See Guidelines"),
                  }),
                }),
              ],
            })
          ),
        ]
      );
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m() {
      return h._("COVID-19 announcements need to be:");
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n() {
      return h._("Tips to get you started");
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o() {
      return [
        h._("You can control who comments on your posts. {learn_more_link}", [
          h._param(
            "learn_more_link",
            j.jsx(c("CometLink.react"), {
              href: "/help/369765040737128",
              target: "_blank",
              children: j.jsx(c("TetraText.react"), {
                color: "blueLink",
                type: "bodyLink3",
                children: h._("Learn more"),
              }),
            })
          ),
        ]),
        h._(
          "After an announcement is approved, all people in the selected area will receive a notification about it."
        ),
        h._(
          "Only Page admins can mark a post as an announcement, and it needs to be done on a computer."
        ),
      ];
    }
    function p() {
      return h._("Turn On COVID-19 announcements");
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function q() {
      return h._(
        "When you turn on COVID-19 announcements, you'll start the process to verify that you are authorized to post as your Page."
      );
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function r() {
      return h._(
        "Verifying your Page's information will ensure you won't lose access to useful features like COVID-19 announcements or posting as your Page when you need it."
      );
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function s() {
      return h._(
        "In the meantime, you\u2019ll be able to try out this feature to post an announcement immediately."
      );
    }
    s.displayName = s.name + " [from " + f.id + "]";
    function t() {
      return h._("Turn On Announcements");
    }
    t.displayName = t.name + " [from " + f.id + "]";
    function u() {
      return h._(
        "There was a problem enabling COVID-19 Announcements for this Page."
      );
    }
    u.displayName = u.name + " [from " + f.id + "]";
    function v() {
      return h._("You now have access to COVID-19 announcements");
    }
    v.displayName = v.name + " [from " + f.id + "]";
    function w() {
      return h._(
        "A confirmation has been sent to the email associated with your account."
      );
    }
    w.displayName = w.name + " [from " + f.id + "]";
    function x() {
      return h._("Post an Announcement");
    }
    x.displayName = x.name + " [from " + f.id + "]";
    var y = "/business/help/1216760698758691",
      z = "/business/help/789564361699778?id=1549080658590154",
      A = "IND";
    function B(a) {
      return a === A ? z : y;
    }
    g.covidAlertsIntroHeader = a;
    g.covidAlertsIntroBody = b;
    g.covidAlertsIntroSteps = e;
    g.covidAlertGuidelines = k;
    g.covidAlertDisclaimer = l;
    g.covidAlertGuidelinesHeader = m;
    g.covidAlertTipsHeader = n;
    g.covidAlertTipsItems = o;
    g.covidAlertsTurnOnTitle = p;
    g.covidAlertsTurnOnSubtitle = q;
    g.covidAlertsPPABody = r;
    g.covidAlertsTurnOnNowBody = s;
    g.covidAlertsTurnOnLabel = t;
    g.covidAlertsTurnOnError = u;
    g.covidAlertsConfirmStepTitle = v;
    g.covidAlertsConfirmStepSubtitle = w;
    g.covidAlertsPostAnnouncement = x;
    g.US_GUIDELINES_URL = y;
    g.INDIA_GUIDELINES_URL = z;
    g.INDIA_COUNTRY_ISO3 = A;
    g.getCovidAlertsGuidelinesURL = B;
  },
  98
);
__d(
  "CometComposerLocalAlertStrings",
  [
    "fbt",
    "CometComposerCovidAlertsOnboardingStrings",
    "CometLink.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j() {
      return "/business/help/626587208260920";
    }
    function a() {
      return h._("Choose an alert type that best describes the situation.");
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      switch (a) {
        case "default":
          return h._("local alert");
        case "weather":
          return h._("weather alert");
        case "transit":
          return h._("transit alert");
        case "public_safety":
          return h._("public safety alert");
        case "missing_person":
          return h._("missing person alert");
        case "service_interruption":
          return h._("service interruption alert");
        case "voting":
          return h._("voting alert");
        case "covid":
          return h._("COVID-19 announcement");
        default:
          return "";
      }
    }
    function e(a) {
      switch (a) {
        case "default":
          return h._("Local Alert (Default)");
        case "weather":
          return h._("Weather Alert");
        case "transit":
          return h._("Transit Alert");
        case "public_safety":
          return h._("Public Safety Alert");
        case "missing_person":
          return h._("Missing Person Alert");
        case "service_interruption":
          return h._("Service Interruption Alert");
        default:
          return "";
      }
    }
    function k() {
      return h._("Alert Type");
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l() {
      return h._("Alert Type:");
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m() {
      return h._("Cancel");
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      switch (a) {
        case "voting":
          return h._(
            "Select how long you want your voting alert to be in effect. Your post will only be marked as an alert for the set amount of time, but the post will stay published after the alert period has ended."
          );
        default:
          return h._(
            "Select how long you want your alert to be in effect. Your post will only be marked as a local alert for the set amount of time, but the post itself will stay published after the alert period has ended."
          );
      }
    }
    function o() {
      return h._("Alert Duration");
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p() {
      return h._("Alert Duration:");
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function q(a) {
      switch (a) {
        case "voting":
          return h._(
            "We'll review your post before marking it as a voting alert. Once it's approved, affected people will be notified. {learn_more_link}",
            [
              h._param(
                "learn_more_link",
                i.jsx(c("CometLink.react"), {
                  href: j(),
                  target: "_blank",
                  children: i.jsx(c("TetraText.react"), {
                    color: "blueLink",
                    type: "bodyLink2",
                    children: h._("Learn More"),
                  }),
                })
              ),
            ]
          );
        default:
          return h._(
            "Posting a local alert will notify nearby Page followers, people who follow other relevant local Pages, and people who have turned on local updates. {learn_more_link}",
            [
              h._param(
                "learn_more_link",
                i.jsx(c("CometLink.react"), {
                  href: "/help/publisher/1064049677089136",
                  target: "_blank",
                  children: i.jsxs(c("TetraText.react"), {
                    color: "blueLink",
                    type: "bodyLink2",
                    children: [h._("Learn More"), "."],
                  }),
                })
              ),
            ]
          );
      }
    }
    function r(a, b) {
      return h._(
        {
          "*": "It may take up to {number} hours to review this announcement. Once approved, we'll send a notification to everyone in the locations selected. {learn_more_link}",
          _1: "It may take up to 1 hour to review this announcement. Once approved, we'll send a notification to everyone in the locations selected. {learn_more_link}",
        },
        [
          h._plural(a, "number"),
          h._param(
            "learn_more_link",
            i.jsx(c("CometLink.react"), {
              href: b,
              target: "_blank",
              children: i.jsx(c("TetraText.react"), {
                color: "blueLink",
                type: "bodyLink3",
                children: h._("See Guidelines"),
              }),
            })
          ),
        ]
      );
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function s(a, b) {
      switch (a) {
        case "voting":
          return h._("Before Posting a Voting Alert");
        default:
          return b === "covid"
            ? h._("Adding a COVID-19 announcement to your post")
            : h._("Before Posting a Local Alert");
      }
    }
    function t(a) {
      switch (a) {
        case "voting":
          return h._("Create Voting Alert");
        default:
          return h._("Create Local Alert");
      }
    }
    function u() {
      return h._("Save");
    }
    u.displayName = u.name + " [from " + f.id + "]";
    function v(a, b, c, e, f, g) {
      switch (b) {
        case "region":
          if (a === "region")
            if (f)
              return h._("The state of {location}", [h._param("location", c)]);
            else return h._("All of {location}", [h._param("location", c)]);
          break;
        case "county":
          if (a === "county")
            return h._("All of {location}", [h._param("location", c)]);
          else if (a === "region")
            switch (e) {
              case "parish":
                return h._("One or more parishes in {location}", [
                  h._param("location", c),
                ]);
              case "county":
                return h._("One or more counties in {location}", [
                  h._param("location", c),
                ]);
              case "district":
                return h._("One or more districts in {location}", [
                  h._param("location", c),
                ]);
            }
          break;
        case "city":
          if (a === "region" || a === "county")
            if (
              f ||
              g ===
                d("CometComposerCovidAlertsOnboardingStrings")
                  .INDIA_COUNTRY_ISO3
            )
              return h._("One or more cities in {location}", [
                h._param("location", c),
              ]);
            else
              return h._("One or more local areas in {location}", [
                h._param("location", c),
              ]);
          else if (a === "city")
            return h._("All of {location}", [h._param("location", c)]);
          break;
        case "area":
          return h._("Specific area of {location}", [h._param("location", c)]);
      }
      return null;
    }
    function w() {
      return h._("Send Alert to People In:");
    }
    w.displayName = w.name + " [from " + f.id + "]";
    function x(a, b, c, e, f) {
      switch (b) {
        case "city":
          if (a === "region" || a === "county")
            if (
              e ||
              f ===
                d("CometComposerCovidAlertsOnboardingStrings")
                  .INDIA_COUNTRY_ISO3
            )
              return h._("Affected Cities");
            else return h._("Affected Local Areas");
          else if (a === "city")
            if (
              e ||
              f ===
                d("CometComposerCovidAlertsOnboardingStrings")
                  .INDIA_COUNTRY_ISO3
            )
              return h._("Affected City");
            else return h._("Affected Local Area");
          break;
        case "county":
          if (a === "region")
            switch (c) {
              case "parish":
                return h._("Affected Parishes");
              case "county":
                return h._("Affected Counties");
              case "district":
                return h._("Affected Districts");
            }
          break;
      }
      return null;
    }
    function y(a, b, c, e, f) {
      switch (b) {
        case "city":
          if (a === "region" || a === "county")
            if (
              e ||
              f ===
                d("CometComposerCovidAlertsOnboardingStrings")
                  .INDIA_COUNTRY_ISO3
            )
              return h._("Enter the affected cities");
            else return h._("Enter the affected local areas");
          else if (a === "city")
            if (
              e ||
              f ===
                d("CometComposerCovidAlertsOnboardingStrings")
                  .INDIA_COUNTRY_ISO3
            )
              return h._("Enter the affected city");
            else return h._("Enter the affected local area");
          break;
        case "county":
          if (a === "region")
            switch (c) {
              case "parish":
                return h._("Enter the affected parishes");
              case "county":
                return h._("Enter the affected counties");
              case "district":
                return h._("Enter the affected districts");
            }
          break;
      }
      return null;
    }
    function z(a) {
      a = Math.floor(a / 60);
      var b = Math.floor(a / 60);
      a %= 60;
      if (b > 0 && a > 0)
        return h._(
          {
            "*": {
              "*": "{hour} hours {min} minutes",
              _1: "{hour} hours 1 minute",
            },
            _1: { "*": "1 hour {min} minutes", _1: "1 hour 1 minute" },
          },
          [h._plural(b, "hour"), h._plural(a, "min")]
        );
      else if (b > 0)
        return h._({ "*": "{number} hours", _1: "1 hour" }, [
          h._plural(b, "number"),
        ]);
      return h._({ "*": "{number} minutes", _1: "1 minute" }, [
        h._plural(a, "number"),
      ]);
    }
    z.displayName = z.name + " [from " + f.id + "]";
    function A(a) {
      switch (a) {
        case "voting":
          return h._("Voting Alerts");
        default:
          return h._("Local Alerts");
      }
    }
    function B() {
      return h._("Send Alerts to All Affected People");
    }
    function C() {
      return h._(
        "Remember, voting alerts must be be shown to all voters affected by the alert. Any alert sent to only a portion of people in a relevant area may result in removal of the alert. {see_guidelines_link}",
        [
          h._param(
            "see_guidelines_link",
            i.jsx(c("CometLink.react"), {
              href: j(),
              target: "_blank",
              children: i.jsx(c("TetraText.react"), {
                color: "blueLink",
                type: "bodyLink4",
                children: h._("See Guidelines"),
              }),
            })
          ),
        ]
      );
    }
    C.displayName = C.name + " [from " + f.id + "]";
    function D() {
      return h._("Select an alert type");
    }
    D.displayName = D.name + " [from " + f.id + "]";
    function E() {
      return h._(
        "To help the right people see your post, choose a type of alert. {learn_more_link}",
        [
          h._param(
            "learn_more_link",
            i.jsxs(i.Fragment, {
              children: [
                i.jsx("br", {}),
                i.jsx(c("CometLink.react"), {
                  href: "/business/help/1064049677089136?id=1549080658590154",
                  target: "_blank",
                  children: i.jsx(c("TetraText.react"), {
                    color: "blueLink",
                    type: "bodyLink3",
                    children: h._("Learn More"),
                  }),
                }),
              ],
            })
          ),
        ]
      );
    }
    E.displayName = E.name + " [from " + f.id + "]";
    function F() {
      return h._("COVID-19 announcement");
    }
    F.displayName = F.name + " [from " + f.id + "]";
    function G() {
      return h._(
        "For urgent posts about vaccines or other COVID-19 info that everyone in your area should get notified about."
      );
    }
    G.displayName = G.name + " [from " + f.id + "]";
    function H() {
      return h._("All other alerts");
    }
    H.displayName = H.name + " [from " + f.id + "]";
    function I() {
      return h._(
        "For urgent posts about public safety, weather or other local info."
      );
    }
    I.displayName = I.name + " [from " + f.id + "]";
    g.votingAlertsHelpPage = j;
    g.composerAlertTypeBody = a;
    g.composerAlertTypeInlineName = b;
    g.composerAlertTypeName = e;
    g.composerAlertTypePlaceholderLabel = k;
    g.composerAlertTypeTitle = l;
    g.composerCancelButtonTitle = m;
    g.composerDurationBody = n;
    g.composerDurationPlaceholderLabel = o;
    g.composerDurationTitle = p;
    g.composerHeaderBody = q;
    g.getCovidAlertsHeaderBody = r;
    g.composerHeaderTitle = s;
    g.composerNavigationHeaderTitle = t;
    g.composerSaveButtonTitle = u;
    g.composerScopeTargetingLabel = v;
    g.composerScopeTitle = w;
    g.composerTypeaheadLabel = x;
    g.composerTypeaheadPlaceholder = y;
    g.getFBTForSeconds = z;
    g.getComposerHeader = A;
    g.getVotingTargetingWarningHeader = B;
    g.getVotingTargetingWarningBody = C;
    g.getCovidAlertSelectorHeaderTitle = D;
    g.getCovidAlertSelectorHeaderBody = E;
    g.getCovidAlertOptionHeadline = F;
    g.getCovidAlertOptionBody = G;
    g.getCovidAlertOtherAlertsOptionHeadline = H;
    g.getCovidAlertOtherAlertsOptionBody = I;
  },
  98
);
__d(
  "useCometComposerPushCovidAlertPage",
  [
    "CometComposerLocalAlertStrings",
    "CometComposerPushPageContext",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "react",
    "useCometComposerPushPage",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometComposerCovidAlertContainer.react"
        ).__setRef("useCometComposerPushCovidAlertPage")
      );
    function a(a, b) {
      var e = c("useCometComposerPushPage")();
      return function () {
        e != null &&
          a != null &&
          e(
            d("CometComposerLocalAlertStrings").getComposerHeader("covid"),
            function (d) {
              d = d.onReturn;
              return h.jsx(c("CometComposerPushPageContext").Provider, {
                value: e,
                children: h.jsx(i, {
                  entryPoint: "sprout",
                  onReturn: d,
                  pageId: a,
                  sessionID: b,
                }),
              });
            },
            { hasCustomHeader: !0 }
          );
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "getProductVariantForAlertType",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (a) {
        case "voting":
          return "voting";
        case "covid":
          return "covid";
        default:
          return "default";
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "useCometComposerPushLocalAlertPage",
  [
    "CometComposerLocalAlertStrings",
    "CometComposerPushPageContext",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "react",
    "useCometComposerPushPage",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometComposerLocalAlertContainer.react"
        ).__setRef("useCometComposerPushLocalAlertPage")
      );
    function a(a, b, e) {
      var f = c("useCometComposerPushPage")();
      return function () {
        f != null &&
          a != null &&
          f(
            d("CometComposerLocalAlertStrings").getComposerHeader(e),
            function (d) {
              d = d.onReturn;
              return h.jsx(c("CometComposerPushPageContext").Provider, {
                value: f,
                children: h.jsx(i, {
                  entryPoint: "sprout",
                  onReturn: d,
                  pageId: a,
                  productVariant: e,
                  sessionID: b,
                }),
              });
            },
            { hasCustomHeader: !0 }
          );
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "LWICometComposerUtils",
  [
    "CometRelay",
    "FBLogger",
    "LWICometComposerUtils_MarkPostEligibleForAutoboostMutation.graphql",
    "XCometLWIPostCreationControllerRouteBuilder",
    "recoverableViolation",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              "LWICometComposerUtils_MarkPostEligibleForAutoboostMutation.graphql"
            ));
    function a(a, b, d, e, f) {
      e === void 0 && (e = !1),
        typeof d === "string" && d !== ""
          ? a != null
            ? c("setTimeout")(function () {
                a.go(
                  c("XCometLWIPostCreationControllerRouteBuilder").buildURL({
                    entry_point: f,
                    page_id: b,
                    target_id: d,
                  }),
                  { passthroughProps: { isEncodingVideoPost: e } }
                );
              }, 100)
            : c("recoverableViolation")(
                "routerDispatcher is null when boosting from composer.",
                "pages_lwi"
              )
          : c("recoverableViolation")(
              "Invalid postID when boosting from composer: " + String(d),
              "pages_lwi"
            );
    }
    function e(a, b, e) {
      d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function () {},
        onError: function (a) {
          c("FBLogger")("pages_lwi").mustfix(
            "Error (%s) when committing add eligible post mutation",
            a.toString()
          );
        },
        variables: { is_adding_posts: !0, page_id: b, post_ids: [e] },
      });
    }
    g.boostFromComposer = a;
    g.markPostEligibleForAutoBoost = e;
  },
  98
);
__d(
  "BrandedContentComposerInterceptReason",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      AFFILIATE_LINK: "affiliate_link",
      CREATOR_NOT_WHITELISTED: "creator_not_whitelisted",
      SELF_DISCLOSURE_KEYWORD_BASED: "self_disclosure",
      SELF_DISCLOSURE_MODEL_DETECTED: "self_disclosure_model_detected",
      BC_DETECTED_WITH_BRAND: "bc_detected_with_brand",
      KEYWORD_BASED_BRAND_PREFILL: "keyword_based_brand_prefill",
      MODEL_DETECTED_BRAND_PREFILL: "model_detected_brand_prefill",
      I18N_MODEL_DETECTED: "i18n_model_detected",
      I18N_MODEL_BRAND_PREFILL: "i18n_model_brand_prefill",
    });
    f["default"] = a;
  },
  66
);
__d(
  "composerBrandedContentTransform",
  [
    "BrandedContentComposerInterceptReason",
    "ISOCountryCode",
    "castToEnum",
    "enumUtils",
    "filterNulls",
    "orEmptyArray",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      var f;
      f = (f = a.targetedPrivacyData) == null ? void 0 : f.geo_locations;
      var g = c("filterNulls")(
        c("orEmptyArray")(f == null ? void 0 : f.countries).map(function (a) {
          return c("castToEnum")(a, c("ISOCountryCode"), void 0);
        })
      );
      f = c("filterNulls")(
        c("orEmptyArray")(f == null ? void 0 : f.cities)
          .map(function (a) {
            return Number(a.region_id);
          })
          .concat(
            c("orEmptyArray")(f == null ? void 0 : f.regions).map(function (a) {
              return Number(a.key);
            })
          )
      );
      g = {
        countries: g,
        min_age: (g = a.targetedPrivacyData) == null ? void 0 : g.age_min,
        region_ids: f,
      };
      f =
        (f = a.brandedContent) == null ? void 0 : f.enforcementInterceptReason;
      f =
        f != null
          ? d("enumUtils").enumValueToKey(
              f,
              c("BrandedContentComposerInterceptReason")
            )
          : null;
      if (a.brandedContent != null) {
        var h,
          i =
            a.brandedContent.sponsorCanBoost === !0
              ? "ALL_SHARED"
              : "NOT_SHARED";
        h =
          (h = a.brandedContent.sponsorRelationship) != null
            ? h
            : "PAID_RELATIONSHIP_WITH";
        g = babelHelpers["extends"]({}, b, {
          branded_content_data: {
            composer_intercept_event:
              a.brandedContent.enforcementInterceptEvent,
            composer_intercept_reason: f,
            event_location: a.brandedContent.eventLocation,
            funnel_session_id: a.brandedContent.funnelSessionID,
            geo_age_gates: [g],
            tagging_data: {
              bcmp_campaign_agreement_id:
                a.brandedContent.bcmpCampaignAgreementID,
              can_sponsor_add_cta:
                (f = a.brandedContent.sponsorCanAddCTA) != null ? f : !1,
              shared_to_sponsor_status: i,
              sponsor_page_id: a.brandedContent.sponsorID,
              sponsor_relationship: h,
            },
          },
          direct_share_status: i,
          sponsor_id: a.brandedContent.sponsorID,
          sponsor_relationship: h,
        });
        a.brandedContent.isReviewable === !0 &&
          (g = babelHelpers["extends"]({}, g, {
            unpublished_content_data: {
              unpublished_content_type: "REVIEWABLE_BRANDED_CONTENT",
            },
          }));
        e(g);
      } else e(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerGetMessagesTransform",
  ["mediaAttachmentAreaTransform"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      return a.isGetMessagesPost === !0
        ? a.mediaAttachments != null
          ? c("mediaAttachmentAreaTransform")(
              a,
              babelHelpers["extends"]({}, b, {
                call_to_action_data: babelHelpers["extends"](
                  {},
                  b.call_to_action_data,
                  { is_cta_share_post: !0, type: "MESSAGE_PAGE" }
                ),
              }),
              d
            )
          : d(
              babelHelpers["extends"]({}, b, {
                call_to_action_data: babelHelpers["extends"](
                  {},
                  b.call_to_action_data,
                  { is_cta_share_post: !0, type: "MESSAGE_PAGE" }
                ),
              })
            )
        : d(babelHelpers["extends"]({}, b));
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerValidateGetMessagesMustContainMedia",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b = a.mediaAttachments || [];
      return a.isGetMessagesPost === !0 && b.length === 0
        ? h._("You cannot create a Send Message post without attaching media")
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometComposerLocalAlertAttachmentFooter.react",
  [
    "fbt",
    "CometComposerLocalAlertStrings",
    "CometPressable.react",
    "TetraText.react",
    "getProductVariantForAlertType",
    "intlList",
    "react",
    "useCometComposerPushCovidAlertPage",
    "useCometComposerPushLocalAlertPage",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.localAlert,
        e = c("getProductVariantForAlertType")(b.alertType);
      e = c("useCometComposerPushLocalAlertPage")(b.pageID, a.sessionID, e);
      a = c("useCometComposerPushCovidAlertPage")(b.pageID, a.sessionID);
      var f = b.expirationTime / 3600,
        g = c("intlList")(
          b.geoAreas.map(function (a) {
            return a.getRawData().title;
          })
        );
      return i.jsx("div", {
        className: "pybr56ya dhix69tm wkznzc2l",
        children: i.jsx(c("TetraText.react"), {
          align: "center",
          color: "secondary",
          type: "body4",
          children: h._(
            {
              "*": "Posting a {alert type} for {expiration_time} hours in {locations}. {edit_link}",
              _1: "Posting a {alert type} for {expiration_time} hour in {locations}. {edit_link}",
            },
            [
              h._param(
                "alert type",
                d("CometComposerLocalAlertStrings").composerAlertTypeInlineName(
                  b.alertType
                )
              ),
              h._param("expiration_time", f),
              h._plural(f),
              h._param("locations", g),
              h._param(
                "edit_link",
                i.jsx(c("CometPressable.react"), {
                  onPress: b.countryCode === "IND" ? a : e,
                  children: i.jsx(c("TetraText.react"), {
                    color: "blueLink",
                    type: "bodyLink4",
                    children: h._("Edit Alert"),
                  }),
                })
              ),
            ]
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
  "LocalAlertType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      COVID: "covid",
      DEFAULT: "default",
      MISSING_PERSON: "missing_person",
      PUBLIC_SAFETY: "public_safety",
      SERVICE_INTERRUPTION: "service_interruption",
      TRANSIT: "transit",
      VOTING: "voting",
      WEATHER: "weather",
    });
    f["default"] = a;
  },
  66
);
__d(
  "LocalAlertsDistanceUnitEnum",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ KM: "km", MILE: "mile" });
    f["default"] = a;
  },
  66
);
__d(
  "composerLocalAlertTransform",
  ["LocalAlertType", "LocalAlertsDistanceUnitEnum", "firstKeyWithValue"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = a.localAlert;
      if (a == null) return null;
      var b = c("firstKeyWithValue")(c("LocalAlertType"), a.alertType);
      if (b == null) return null;
      var d = a.customArea,
        e = c("firstKeyWithValue")(
          c("LocalAlertsDistanceUnitEnum"),
          d == null ? void 0 : d.distance_unit
        );
      return d != null && e != null
        ? {
            alert_type: b,
            custom_area: {
              distance_unit: e,
              lat: d.lat,
              lng: d.lng,
              radius: d.radius,
            },
            expiration_time: a.expirationTime,
            geo_areas: a.geoAreas.map(function (a) {
              return a.getRawData().locationID;
            }),
          }
        : {
            alert_type: b,
            expiration_time: a.expirationTime,
            geo_areas: a.geoAreas.map(function (a) {
              return a.getRawData().locationID;
            }),
          };
    }
    function a(a, b, c) {
      a = h(a);
      a == null
        ? c(b)
        : c(babelHelpers["extends"]({}, b, { local_alert_data: a }));
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerGetWhatsAppMessagesTransform",
  ["mediaAttachmentAreaTransform"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      if (a.isGetWhatsAppMessagePost === !0) {
        var e = babelHelpers["extends"]({}, b, {
          call_to_action_data: babelHelpers["extends"](
            {},
            b.call_to_action_data,
            { is_cta_share_post: !0, type: "WHATSAPP_MESSAGE" }
          ),
        });
        return a.mediaAttachments != null
          ? c("mediaAttachmentAreaTransform")(a, e, d)
          : d(e);
      }
      return d(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "composerValidateGetWhatsAppMessagesMustContainMedia",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b = a.mediaAttachments || [];
      return a.isGetWhatsAppMessagePost === !0 && b.length === 0
        ? h._(
            "You cannot create a Send WhatsApp Message post without attaching media"
          )
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "refetchCometPrivacySelectorNonAutosavePicker",
  [
    "CometRelay",
    "PrivacyRowInput",
    "WebPixelRatio",
    "refetchCometPrivacySelectorNonAutosavePickerQuery.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var c = a.dispatch,
        e = a.environment,
        f = a.onComplete,
        g = a.privacyWriteID,
        i = a.rawLocalPrivacyRow,
        j = a.renderLocation,
        k = a.tags;
      d("CometRelay")
        .fetchQuery(
          e,
          h !== void 0
            ? h
            : (h = b(
                "refetchCometPrivacySelectorNonAutosavePickerQuery.graphql"
              )),
          {
            localPrivacyRow: i,
            privacyWriteID: g,
            renderLocation: j,
            scale: d("WebPixelRatio").get(),
            tags: k,
          }
        )
        .subscribe({
          next: function (a) {
            a = (a = a.node) == null ? void 0 : a.privacy_scope_for_location;
            var b = a == null ? void 0 : a.selected_row_override;
            b = d("PrivacyRowInput").getPrivacyRowInput(b);
            var h = (b = b) != null ? b : i;
            d("CometRelay").commitLocalUpdate(e, function (a) {
              a = a.get(g);
              if (a == null) return;
              var b = a.getLinkedRecord("privacy_scope_for_location", {
                render_location: j,
                selected_override: i,
                tags: k,
              });
              if (b == null) return;
              a.setLinkedRecord(b, "privacy_scope_for_location", {
                render_location: j,
                selected_override: h,
                tags: k,
              });
            });
            c({ localPrivacyRow: h, type: "setLocalPrivacyRow" });
            f == null
              ? void 0
              : f(
                  a == null
                    ? void 0
                    : (b = a.selected_option) == null
                    ? void 0
                    : b.id,
                  h,
                  a == null
                    ? void 0
                    : (b = a.selected_option) == null
                    ? void 0
                    : b.label
                );
          },
        });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometPrivacySelectorChangePrivacy",
  [
    "fbt",
    "CometPrivacySelectorSavePrivacyMutation",
    "CometRelay",
    "PrivacyMutationToken",
    "WebPixelRatio",
    "orEmptyArray",
    "react",
    "refetchCometPrivacySelectorNonAutosavePicker",
    "useCometAlertDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useCallback;
    function a(a) {
      var b = a.dispatch,
        e = a.onPrivacyChange,
        f = a.onPrivacyChangeStart,
        g = a.privacyWriteID,
        j = a.renderLocation,
        k = a.shouldSaveOnSelect,
        l = a.storyRenderLocation,
        m = a.tags,
        n = d("PrivacyMutationToken").usePrivacyMutationToken();
      a = c("useCometAlertDialog")();
      var o = a[0],
        p = d("CometRelay").useRelayEnvironment();
      a = i(
        function (a, i) {
          var q;
          if (i == null || g == null) return;
          f && f(i);
          q = {
            input: {
              privacy_mutation_token: n,
              privacy_row_input: {
                allow: c("orEmptyArray")(i.allow),
                base_state: i.base_state,
                deny: c("orEmptyArray")(i.deny),
                privacy_targeting: i.privacy_targeting,
                tag_expansion_state:
                  (q = i.tag_expansion_state) != null ? q : "UNSPECIFIED",
              },
              privacy_write_id: g,
              render_location: j,
            },
            privacySelectorRenderLocation: j,
            scale: d("WebPixelRatio").get(),
            storyRenderLocation: l,
            tags: m,
          };
          a = { privacyWriteID: g, selectedOptionID: a };
          k
            ? d(
                "CometPrivacySelectorSavePrivacyMutation"
              ).commitPrivacySaveMutation(q, {
                environment: p,
                onCompleted: function () {
                  b({ localPrivacyRow: null, type: "setLocalPrivacyRow" }),
                    e && e({ privacyRowInput: i, type: "success" });
                },
                onError: function (a) {
                  var b;
                  b = (b = a.summary) != null ? b : h._("Error");
                  a =
                    (a = a.description) != null
                      ? a
                      : h._("Sorry, something went wrong.");
                  o({ body: a, title: b }, function () {});
                  e && e({ type: "error" });
                },
                updaterVariables: a,
              })
            : (d(
                "CometPrivacySelectorSavePrivacyMutation"
              ).commitLocalPrivacyChange({
                environment: p,
                mutationVariables: q,
                updaterVariables: a,
              }),
              c("refetchCometPrivacySelectorNonAutosavePicker")({
                dispatch: b,
                environment: p,
                onComplete: function (a, b, c) {
                  e == null
                    ? void 0
                    : e({
                        __newLocalPrivacyRow: b,
                        label: c,
                        privacyRowInput: b,
                        type: "success",
                      });
                },
                privacyWriteID: g,
                rawLocalPrivacyRow: i,
                renderLocation: j,
                tags: m,
              }));
        },
        [b, p, e, f, n, g, j, k, o, l, m]
      );
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "QuiltsCometComposerAttachmentAreaResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "QuiltsCometComposerAttachmentArea.react"
    ).__setRef("QuiltsCometComposerAttachmentAreaResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "AddCollaborativePostInitialContributionCaptionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1742890");
    c = b("FalcoLoggerInternal").create(
      "add_collaborative_post_initial_contribution_caption",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "AddInitialContributionMediaFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1742891");
    c = b("FalcoLoggerInternal").create("add_initial_contribution_media", a);
    e.exports = c;
  },
  null
);
__d(
  "CapComposerAddCaptionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("602");
    c = b("FalcoLoggerInternal").create("cap_composer_add_caption", a);
    e.exports = c;
  },
  null
);
__d(
  "CapComposerAddMediaFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("603");
    c = b("FalcoLoggerInternal").create("cap_composer_add_media", a);
    e.exports = c;
  },
  null
);
__d(
  "CapComposerTapResponseCardFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("601");
    c = b("FalcoLoggerInternal").create("cap_composer_tap_response_card", a);
    e.exports = c;
  },
  null
);
__d(
  "ClickCollaborativePostSentenceFragmentFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743360");
    c = b("FalcoLoggerInternal").create(
      "click_collaborative_post_sentence_fragment",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ClickDoneInCollaborativePostCreationFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743361");
    c = b("FalcoLoggerInternal").create(
      "click_done_in_collaborative_post_creation",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ComposerCollaborativePostAddPromptTextFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743445");
    c = b("FalcoLoggerInternal").create(
      "composer_collaborative_post_add_prompt_text",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ComposerCollaborativePostChangeBackgroundColorFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743446");
    c = b("FalcoLoggerInternal").create(
      "composer_collaborative_post_change_background_color",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ComposerCollaborativePostClickNextFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743447");
    c = b("FalcoLoggerInternal").create(
      "composer_collaborative_post_click_next",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ComposerCollaborativePostTapResponseCardFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743448");
    c = b("FalcoLoggerInternal").create(
      "composer_collaborative_post_tap_response_card",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "EditCollaborativePostAttachmentFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743584");
    c = b("FalcoLoggerInternal").create(
      "edit_collaborative_post_attachment",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ExitCollaborativePostCreationFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743604");
    c = b("FalcoLoggerInternal").create("exit_collaborative_post_creation", a);
    e.exports = c;
  },
  null
);
__d(
  "PromptTextExceedsCharLimitFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744238");
    c = b("FalcoLoggerInternal").create("prompt_text_exceeds_char_limit", a);
    e.exports = c;
  },
  null
);
__d(
  "QuiltReplyFormatType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      TEXT_ONLY: 1,
      PHOTO_AND_DESCRIPTION: 2,
      GIF: 3,
      VIDEO: 4,
    });
    f["default"] = a;
  },
  66
);
__d(
  "QuiltReplyFormatTypeUtils.facebook",
  ["$InternalEnumUtils", "QuiltReplyFormatType"],
  function (a, b, c, d, e, f, g) {
    a = d("$InternalEnumUtils").createToJSEnum(c("QuiltReplyFormatType"));
    b = d("$InternalEnumUtils").createFromJSEnum(c("QuiltReplyFormatType"));
    g.toJSEnum = a;
    g.fromJSEnum = b;
  },
  98
);
__d(
  "RemoveCollaborativePostAttachmentFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744258");
    c = b("FalcoLoggerInternal").create(
      "remove_collaborative_post_attachment",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "RemoveCollaborativePostInitialContributionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744259");
    c = b("FalcoLoggerInternal").create(
      "remove_collaborative_post_initial_contribution",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "ViewCollaborativePostSentenceFragmentSheetFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744475");
    c = b("FalcoLoggerInternal").create(
      "view_collaborative_post_sentence_fragment_sheet",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "cometComposerQuiltsCreationLogger",
  [
    "AddCollaborativePostInitialContributionCaptionFalcoEvent",
    "AddInitialContributionMediaFalcoEvent",
    "CapComposerAddCaptionFalcoEvent",
    "CapComposerAddMediaFalcoEvent",
    "CapComposerTapResponseCardFalcoEvent",
    "ClickCollaborativePostSentenceFragmentFalcoEvent",
    "ClickDoneInCollaborativePostCreationFalcoEvent",
    "ComposerCollaborativePostAddPromptTextFalcoEvent",
    "ComposerCollaborativePostChangeBackgroundColorFalcoEvent",
    "ComposerCollaborativePostClickNextFalcoEvent",
    "ComposerCollaborativePostTapResponseCardFalcoEvent",
    "EditCollaborativePostAttachmentFalcoEvent",
    "ExitCollaborativePostCreationFalcoEvent",
    "PromptTextExceedsCharLimitFalcoEvent",
    "QuiltReplyFormatTypeUtils.facebook",
    "RemoveCollaborativePostAttachmentFalcoEvent",
    "RemoveCollaborativePostInitialContributionFalcoEvent",
    "TCometComposerTarget",
    "ViewCollaborativePostSentenceFragmentSheetFalcoEvent",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "sprout";
    function a(a, b, d) {
      switch (a.type) {
        case "QUILTS_EDIT_ATTACHMENT":
          i(a.fields, b, d);
          break;
        case "QUILTS_ADD_PROMPT_TEXT":
          j(a.fields, b, d);
          break;
        case "QUILTS_CHANGE_BACKGROUND_COLOR":
          c("ComposerCollaborativePostChangeBackgroundColorFalcoEvent").log(
            function () {
              return n(a.fields, b, d);
            }
          );
          break;
        case "QUILTS_PROMPT_PRESS_NEXT":
          c("ComposerCollaborativePostClickNextFalcoEvent").log(function () {
            return n(a.fields, b, d);
          });
          break;
        case "QUILTS_CONTRIBUTION_PRESS_MEDIA_UPLOAD":
          a.fields.is_contribution_composer === !0
            ? c("CapComposerTapResponseCardFalcoEvent").log(function () {
                return m(a.fields, b, d);
              })
            : c("ComposerCollaborativePostTapResponseCardFalcoEvent").log(
                function () {
                  return m(a.fields, b, d);
                }
              );
          break;
        case "QUILTS_ADD_INITIAL_CONTRIBUTION":
          a.fields.is_contribution_composer === !0
            ? c("CapComposerAddMediaFalcoEvent").log(function () {
                return m(a.fields, b, d);
              })
            : c("AddInitialContributionMediaFalcoEvent").log(function () {
                return m(a.fields, b, d);
              });
          break;
        case "QUILTS_REMOVE_INITIAL_CONTRIBUTION":
          c("RemoveCollaborativePostInitialContributionFalcoEvent").log(
            function () {
              return m(a.fields, b, d);
            }
          );
          break;
        case "QUILTS_ADD_CONTRIBUTION_CAPTION":
          a.fields.is_contribution_composer === !0
            ? c("CapComposerAddCaptionFalcoEvent").log(function () {
                return m(a.fields, b, d);
              })
            : c("AddCollaborativePostInitialContributionCaptionFalcoEvent").log(
                function () {
                  return m(a.fields, b, d);
                }
              );
          break;
        case "QUILTS_CREATION_PRESS_DONE":
          k(a.fields, b, d);
          break;
        case "QUILTS_REMOVE_ATTACHMENT":
          c("RemoveCollaborativePostAttachmentFalcoEvent").log(function () {
            return n(a.fields, b, d);
          });
          break;
        case "QUILTS_EXIT_CREATION_FLOW":
          c("ExitCollaborativePostCreationFalcoEvent").log(function () {
            return n(a.fields, b, d);
          });
          break;
        case "QUILTS_PROMPT_EXCEEDS_LIMIT":
          c("PromptTextExceedsCharLimitFalcoEvent").log(function () {
            return n(a.fields, b, d);
          });
          break;
        case "QUILTS_VIEW_SENTENCE_FRAGMENTS":
          c("ViewCollaborativePostSentenceFragmentSheetFalcoEvent").log(
            function () {
              return n(a.fields, b, d);
            }
          );
          break;
        case "QUILTS_CLICK_SENTENCE_FRAGMENT":
          l(a.fields, b, d);
          break;
        default:
          break;
      }
    }
    function i(a, b, d) {
      c("EditCollaborativePostAttachmentFalcoEvent").log(function () {
        var c = n(a, b, d);
        return babelHelpers["extends"]({}, c, {
          source: (c = a.source) != null ? c : h,
        });
      });
    }
    function j(a, b, d) {
      c("ComposerCollaborativePostAddPromptTextFalcoEvent").log(function () {
        return n(a, b, d);
      });
    }
    function k(a, b, d) {
      c("ClickDoneInCollaborativePostCreationFalcoEvent").log(function () {
        var c = n(a, b, d);
        return babelHelpers["extends"]({}, c, {
          creation_card: "response_card",
        });
      });
    }
    function l(a, b, d) {
      a.sentence_fragment == null &&
        c("recoverableViolation")(
          "Sentence fragment null value provided to logger on sentence fragment click",
          "community_collaborative"
        ),
        c("ClickCollaborativePostSentenceFragmentFalcoEvent").log(function () {
          var c = n(a, b, d);
          return babelHelpers["extends"]({}, c, {
            sentence_fragment: (c = a.sentence_fragment) != null ? c : "",
          });
        });
    }
    function m(a, b, c) {
      b = n(a, b, c);
      return babelHelpers["extends"]({}, b, {
        contribution_format:
          (c = d("QuiltReplyFormatTypeUtils.facebook").toJSEnum(
            a.contribution_format
          )) != null
            ? c
            : 2,
      });
    }
    function n(a, b, c) {
      return {
        creation_session_id: b,
        edit_session_id: a.edit_session_id,
        target_id:
          (a = (b = c.target) == null ? void 0 : b.id) != null ? a : "",
        target_type: o((b = c.target) == null ? void 0 : b.type),
      };
    }
    function o(a) {
      if (a != null)
        switch (a) {
          case d("TCometComposerTarget").ComposerTargetType.Group:
            return "group";
          case d("TCometComposerTarget").ComposerTargetType.Feed:
          case d("TCometComposerTarget").ComposerTargetType.Profile:
            return "undirected_user";
          case d("TCometComposerTarget").ComposerTargetType.Page:
            return "undirected_page";
          case d("TCometComposerTarget").ComposerTargetType.Event:
          case d("TCometComposerTarget").ComposerTargetType.Unknown:
            return null;
        }
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "socialLearningModuleForStoryReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      switch (b.type) {
        case "create_social_learning_module":
          var c = b.moduleName;
          b = b.unitID;
          return babelHelpers["extends"]({}, a, {
            socialLearningModule: { isDirty: !0, moduleName: c, unitID: b },
          });
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "socialLearningModuleTitleChecker",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a =
        (a =
          a == null
            ? void 0
            : (a = a.socialLearningModule) == null
            ? void 0
            : a.moduleName) != null
          ? a
          : "";
      b =
        (b = (b = b.socialLearningModule) == null ? void 0 : b.moduleName) !=
        null
          ? b
          : "";
      return a.trim() !== b.trim();
    }
    f["default"] = a;
  },
  66
);
__d(
  "SocialLearningComposerModuleTitleInput.react",
  [
    "fbt",
    "CometCharacterCount.react",
    "CometPlaintextEditor.react",
    "react",
    "socialLearningModuleForStoryReducer",
    "socialLearningModuleTitleChecker",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useState;
    function a(a) {
      var b;
      a = a.socialLearningModule;
      var d = a == null ? void 0 : a.unitID;
      b = (b = a == null ? void 0 : a.moduleName) != null ? b : "";
      var e = 70,
        f = k(!1),
        g = f[0],
        l = f[1];
      f = k({
        __type: "plain-text",
        hasFocus: !0,
        isComposing: !0,
        isPendingSelection: !1,
        selectionOffsets: null,
        text: b,
      });
      b = f[0];
      var m = f[1];
      c("useComposerViewStateReducer")(
        c("socialLearningModuleForStoryReducer"),
        c("socialLearningModuleTitleChecker")
      );
      var n = c("useComposerViewStateDispatcher")(),
        o = j(
          function (a) {
            g &&
              n({
                moduleName: a,
                type: "create_social_learning_module",
                unitID: d,
              });
          },
          [n, g, d]
        );
      return a == null
        ? null
        : i.jsxs("div", {
            className:
              "k4urcfbm dati1w0a ihqw7lf3 hv4rvrfc discj3wi sjgh65i0 o0t2es00 oo9gr5id rq0escxv linmgsc8",
            id: "social_learning_composer_module_title",
            children: [
              i.jsx(c("CometPlaintextEditor.react"), {
                editorState: b,
                onInput: function () {
                  l(!0);
                },
                onInputRefUpdate: function (a) {
                  a != null && a.focus();
                },
                onStateChange: function (a) {
                  a.text.length <= e && (m(a), o(a.text));
                },
                placeholder: h._("Give your post a title"),
                testid: void 0,
              }),
              i.jsx(c("CometCharacterCount.react"), {
                count: b.text.length,
                maxCount: e,
              }),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      return { socialLearningModule: a.socialLearningModule };
    });
    g["default"] = e;
  },
  98
);
__d(
  "socialLearningModuleForStoryTransform",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      var d = a.isEligibleForDraftPost;
      a = a.socialLearningModule;
      if (a == null) {
        c(b);
        return;
      }
      var e = a == null ? void 0 : a.unitID,
        f = babelHelpers["extends"]({}, b);
      d === !0 &&
        (f = babelHelpers["extends"]({}, b, {
          unpublished_content_data: {
            scheduled_publish_time: null,
            unpublished_content_type: "DRAFT",
          },
        }));
      e == null
        ? c(f)
        : c(
            babelHelpers["extends"]({}, f, {
              social_learning_unit: { module_name: a.moduleName, unit_id: e },
            })
          );
    }
    f["default"] = a;
  },
  66
);
__d(
  "socialLearningModuleTitleValidator",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      a = a.socialLearningModule;
      if (!a || a.isDirty !== !0) return null;
      a = a.moduleName;
      if (a.trim().length === 0)
        return h._("Please enter a title for this post.");
      return a.length > 70 ? h._("Your title is too long") : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "InlineSproutsInitialStateFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("194");
    c = b("FalcoLoggerInternal").create("inline_sprouts_initial_state", a);
    e.exports = c;
  },
  null
);
__d(
  "InlineSproutsStateChangedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("252");
    c = b("FalcoLoggerInternal").create("inline_sprouts_state_changed", a);
    e.exports = c;
  },
  null
);
__d(
  "cometComposerInlineSproutsLogger",
  [
    "InlineSproutsInitialStateFalcoEvent",
    "InlineSproutsStateChangedFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      switch (a.type) {
        case "INLINE_SPROUTS_INITIAL_STATE":
          h(a.fields, b);
          break;
        case "INLINE_SPROUTS_STATE_CHANGED":
          i(a.fields, b);
          break;
        default:
          break;
      }
    }
    function h(a, b) {
      c("InlineSproutsInitialStateFalcoEvent").log(function () {
        return j(a, b);
      });
    }
    function i(a, b) {
      c("InlineSproutsStateChangedFalcoEvent").log(function () {
        return j(a, b);
      });
    }
    function j(a, b) {
      return babelHelpers["extends"]({}, a, { creation_session_id: b });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoEditorUploadProgress.react",
  [
    "ix",
    "CometImage.react",
    "gkx",
    "react",
    "stylex",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = function (a) {
        if (!a || !a.length) return null;
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
          if (d.fileType === "VIDEO") return d;
        }
        return null;
      },
      k = function (a) {
        if (!a) return 0;
        var b = a.percentComplete;
        b = b === void 0 ? 0 : b;
        a = a.state;
        return a === "UPLOADED" ? 100 : Math.floor(b * 1e3) / 10;
      },
      l = {
        greenBG: { backgroundColor: "jllm4f4h" },
        iconContainer: { verticalAlign: "hh99gf74" },
        percentText: {
          color: "m9osqain",
          fontWeight: "n3ffmt46",
          paddingStart: "h4z51re5",
          paddingTop: "jb3vyjys",
          position: "pmk7jnqg",
          width: "k4urcfbm",
        },
        progressBar: {
          backgroundColor: "r2g1fdfv",
          borderTopStartRadius: "orhb3f3m",
          borderTopEndRadius: "czkt41v7",
          borderBottomEndRadius: "fmqxjp7s",
          borderBottomStartRadius: "emzo65vh",
          position: "pmk7jnqg",
        },
        progressBarContainer: {
          backgroundColor: "b3i9ofy5",
          borderTopStartRadius: "orhb3f3m",
          borderTopEndRadius: "czkt41v7",
          borderBottomEndRadius: "fmqxjp7s",
          borderBottomStartRadius: "emzo65vh",
          lineHeight: "k61om9en",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "pmk7jnqg",
          start: "ax37mqq2",
          top: "rk01pc8j",
          transform: "ke6wolob",
          width: "gjzvkazv",
        },
        whiteFG: { color: "ljqsnud1" },
      },
      m = function (a) {
        return a < 100
          ? i.jsx(c("CometImage.react"), { src: h("360748") })
          : i.jsx(c("CometImage.react"), { src: h("710277") });
      },
      n = function (a) {
        return !a ? !1 : c("gkx")("1584413");
      };
    function a(a) {
      var b = a.mediaAttachments;
      a = a.shouldOpenVideoSpecificComposer;
      if (!a) return null;
      a = j(b);
      if (!n(a)) return null;
      b = k(a);
      a = m(b);
      return i.jsxs("div", {
        className: c("stylex")(l.progressBarContainer),
        children: [
          i.jsx("div", {
            className: c("stylex")(
              l.progressBar,
              b === 100 ? l.greenBG : void 0
            ),
            style: { width: b + "%" },
            children: "\xa0",
          }),
          i.jsxs("div", {
            className: c("stylex")(
              l.percentText,
              b === 100 ? l.whiteFG : void 0
            ),
            children: [
              " ",
              i.jsx("span", {
                className: c("stylex")(l.iconContainer),
                children: a,
              }),
              " ",
              b + "%",
            ],
          }),
          "\xa0",
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withComposerViewStatePart")(a, function (a) {
      return {
        mediaAttachments: a.mediaAttachments,
        shouldOpenVideoSpecificComposer:
          (a =
            (a = a.videoComposerData) == null
              ? void 0
              : a.shouldOpenVideoSpecificComposer) != null
            ? a
            : !1,
      };
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometComposerWoodhengeSupportAttachmentAreaResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "CometComposerWoodhengeSupportAttachmentArea.react"
    ).__setRef("CometComposerWoodhengeSupportAttachmentAreaResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "composerWoodhengeSupportTransform",
  ["Banzai"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "logger:WoodhengeClientLoggerConfig";
    function a(a, b, d) {
      if (a.woodhengeCTAAdded !== !0) d(b);
      else {
        var e;
        c("Banzai").post(h, {
          creator_page_id:
            (e = a.fanFundingPromotionMetadata) == null ? void 0 : e.page_id,
          name: "funding_feed_composer_cta_attach",
        });
        d(
          babelHelpers["extends"]({}, b, {
            fan_funding_promotion_metadata: a.fanFundingPromotionMetadata,
          })
        );
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "GeminiComposerMarkdownTransform",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      var d;
      if (
        ((d = a.editorState) == null ? void 0 : d.__type) !==
          "editor-state-based" ||
        a.formattingType !== "MARKDOWN"
      ) {
        c(b);
        return;
      }
      c(babelHelpers["extends"]({}, b, { formatting: "MARKDOWN" }));
    }
    f["default"] = a;
  },
  66
);
__d(
  "ComposerTelemetryFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("101");
    c = b("FalcoLoggerInternal").create("composer_telemetry", a);
    e.exports = c;
  },
  null
);
