if (self.CavalryLogger) {
  CavalryLogger.start_js(["A9/UnJ3"]);
}

__d(
  "CometUFICommentList_feedback.graphql",
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
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        c = [b];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "feedLocation" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "includeHighlightedComments",
          },
          {
            defaultValue: !0,
            kind: "LocalArgument",
            name: "includeNestedComments",
          },
          { defaultValue: !0, kind: "LocalArgument", name: "isInitialFetch" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "topLevelViewOption",
          },
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentList_feedback",
        selections: [
          {
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
          a,
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "location",
                variableName: "feedLocation",
              },
              b,
            ],
            kind: "ScalarField",
            name: "can_viewer_comment",
            storageKey: null,
          },
          {
            alias: null,
            args: c,
            kind: "ScalarField",
            name: "comment_composer_placeholder",
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
            alias: "toplevel_comment_count",
            args: [{ kind: "Literal", name: "orderby", value: "toplevel" }],
            concreteType: "TopLevelCommentsConnection",
            kind: "LinkedField",
            name: "top_level_comments",
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
            storageKey: 'top_level_comments(orderby:"toplevel")',
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
            args: c,
            concreteType: null,
            kind: "LinkedField",
            name: "viewer_actor",
            plural: !1,
            selections: [a],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_vc_acting_as_page_or_profile_plus",
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIComment_feedback",
          },
          {
            args: [
              {
                kind: "Variable",
                name: "includeHighlightedComments",
                variableName: "includeHighlightedComments",
              },
              {
                kind: "Variable",
                name: "includeNestedComments",
                variableName: "includeNestedComments",
              },
              {
                kind: "Variable",
                name: "isInitialFetch",
                variableName: "isInitialFetch",
              },
              {
                kind: "Variable",
                name: "topLevelViewOption",
                variableName: "topLevelViewOption",
              },
            ],
            kind: "FragmentSpread",
            name: "CometUFICommentsProvider_feedback",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIComposer_feedback",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFICommentEditor_feedback",
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
                name: "visibility",
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
  "CometUFICommentsProviderPaginationQuery.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, aa, b, c, d, e) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "after" },
        c = { defaultValue: null, kind: "LocalArgument", name: "before" },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        ba = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        ca = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        da = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        ea = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedLocation",
        },
        fa = { defaultValue: null, kind: "LocalArgument", name: "feedbackID" },
        ga = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        ha = { defaultValue: null, kind: "LocalArgument", name: "first" },
        ia = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        ja = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "includeHighlightedComments",
        },
        ka = {
          defaultValue: !0,
          kind: "LocalArgument",
          name: "includeNestedComments",
        },
        la = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "initialViewOption",
        },
        ma = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "isInitialFetch",
        },
        na = { defaultValue: !0, kind: "LocalArgument", name: "isPaginating" },
        oa = { defaultValue: null, kind: "LocalArgument", name: "last" },
        pa = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        qa = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "topLevelViewOption",
        },
        ra = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        sa = { defaultValue: null, kind: "LocalArgument", name: "viewOption" },
        ta = [{ kind: "Variable", name: "id", variableName: "feedbackID" }],
        ua = { kind: "Variable", name: "after", variableName: "after" },
        va = { kind: "Variable", name: "before", variableName: "before" },
        wa = { kind: "Variable", name: "first", variableName: "first" },
        xa = { kind: "Variable", name: "last", variableName: "last" },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        ya = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscription_target_id",
          storageKey: null,
        },
        g = {
          kind: "Variable",
          name: "feed_context_enable_comment",
          variableName: "displayCommentsContextEnableComment",
        },
        h = {
          kind: "Variable",
          name: "feed_context_fb_feed_location",
          variableName: "feedLocation",
        },
        i = {
          kind: "Variable",
          name: "feed_context_is_ad_preview",
          variableName: "displayCommentsContextIsAdPreview",
        },
        j = {
          kind: "Variable",
          name: "feed_context_is_aggregated_share",
          variableName: "displayCommentsContextIsAggregatedShare",
        },
        k = {
          kind: "Variable",
          name: "feed_context_is_story_set",
          variableName: "displayCommentsContextIsStorySet",
        },
        l = {
          kind: "Variable",
          name: "feedback_context",
          variableName: "displayCommentsFeedbackContext",
        },
        m = {
          kind: "Variable",
          name: "feedback_source",
          variableName: "feedbackSource",
        },
        n = {
          kind: "Variable",
          name: "focus_comment_id",
          variableName: "focusCommentID",
        },
        o = {
          kind: "Variable",
          name: "is_initial_fetch",
          variableName: "isInitialFetch",
        },
        p = {
          kind: "Variable",
          name: "top_level_comment_order",
          variableName: "topLevelViewOption",
        },
        za = [
          ua,
          va,
          {
            kind: "Variable",
            name: "comment_order",
            variableName: "viewOption",
          },
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          wa,
          n,
          {
            kind: "Variable",
            name: "initial_comment_order",
            variableName: "initialViewOption",
          },
          o,
          {
            kind: "Variable",
            name: "is_top_level",
            variableName: "includeNestedComments",
          },
          xa,
          p,
        ],
        Aa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "after_count",
          storageKey: null,
        },
        Ba = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "before_count",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        Ca = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_fbid",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
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
        Da = { kind: "TypeDiscriminator", abstractKey: "__isActor" },
        z = { kind: "Variable", name: "scale", variableName: "scale" },
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        B = [A],
        Ea = {
          alias: "profile_picture_depth_0",
          args: [
            { kind: "Literal", name: "height", value: 32 },
            z,
            { kind: "Literal", name: "width", value: 32 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: B,
          storageKey: null,
        },
        C = [
          { kind: "Literal", name: "height", value: 24 },
          z,
          { kind: "Literal", name: "width", value: 24 },
        ],
        Fa = {
          alias: "profile_picture_depth_1",
          args: C,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: B,
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
          r,
          f,
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
          Da,
          Ea,
          Fa,
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
      var D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "created_time",
          storageKey: null,
        },
        Ga = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "spam_display_mode",
          storageKey: null,
        },
        Ha = {
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
        },
        E = {
          kind: "Variable",
          name: "feed_location",
          variableName: "feedLocation",
        },
        F = [E],
        Ia = {
          alias: null,
          args: F,
          kind: "ScalarField",
          name: "comment_menu_tooltip",
          storageKey: null,
        },
        Ja = {
          alias: null,
          args: F,
          kind: "ScalarField",
          name: "should_show_comment_menu",
          storageKey: null,
        },
        Ka = {
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
        La = {
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
        G = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        H = [G],
        I = [r, f],
        Ma = {
          alias: null,
          args: H,
          concreteType: null,
          kind: "LinkedField",
          name: "viewer_actor",
          plural: !1,
          selections: I,
          storageKey: null,
        },
        J = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        Na = {
          alias: null,
          args: H,
          concreteType: "FeedbackReactionInfo",
          kind: "LinkedField",
          name: "viewer_feedback_reaction_info",
          plural: !1,
          selections: [J, f],
          storageKey: null,
        },
        Oa = {
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
            f,
          ],
          storageKey: null,
        },
        K = [f],
        Pa = {
          alias: null,
          args: null,
          concreteType: "Video",
          kind: "LinkedField",
          name: "associated_video",
          plural: !1,
          selections: K,
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
                    selections: B,
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
      var Qa = {
        alias: null,
        args: null,
        concreteType: "ReactorsOfContentConnection",
        kind: "LinkedField",
        name: "reactors",
        plural: !1,
        selections: [
          q,
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
      G = {
        alias: null,
        args: [
          { kind: "Variable", name: "location", variableName: "feedLocation" },
          G,
        ],
        kind: "ScalarField",
        name: "can_viewer_comment",
        storageKey: null,
      };
      var Ra = {
          alias: null,
          args: H,
          kind: "ScalarField",
          name: "can_viewer_react",
          storageKey: null,
        },
        Sa = {
          alias: null,
          args: H,
          kind: "ScalarField",
          name: "comment_composer_placeholder",
          storageKey: null,
        },
        Ta = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show_top_reactions",
          storageKey: null,
        },
        Ua = [q];
      y = {
        kind: "InlineFragment",
        selections: [x, y],
        type: "User",
        abstractKey: null,
      };
      var Va = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_hide_transparency_enabled_for_actor",
        storageKey: null,
      };
      g = [
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        { kind: "Literal", name: "is_top_level", value: !1 },
        p,
      ];
      h = {
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
              s,
              {
                alias: "profilePictureForReplyExpander",
                args: C,
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: B,
                storageKey: null,
              },
              y,
              f,
            ],
            storageKey: null,
          },
          D,
          f,
        ],
        storageKey: null,
      };
      i = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "comment_order",
        storageKey: null,
      };
      j = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "expanded_sub_reply_parents",
        plural: !0,
        selections: K,
        storageKey: null,
      };
      k = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_initially_expanded",
        storageKey: null,
      };
      l = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "page_size",
        storageKey: null,
      };
      m = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "reply_comment_order",
        storageKey: null,
      };
      n = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "should_render_composer_preemptively",
        storageKey: null,
      };
      o = {
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
        selections: Ua,
        storageKey:
          'display_comments(comment_order:"SUB_REPLIES",top_level_comment_order:"TOPLEVEL")',
      };
      p = {
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
      C = {
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
      B = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_author_banned_by_content_owner",
        storageKey: null,
      };
      var Wa = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_ama_question",
        storageKey: null,
      };
      w = {
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
            selections: [G, f],
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
              s,
              {
                kind: "InlineFragment",
                selections: [w, x],
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
      x = {
        alias: null,
        args: null,
        concreteType: "EditHistoryConnection",
        kind: "LinkedField",
        name: "edit_history",
        plural: !1,
        selections: Ua,
        storageKey: null,
      };
      var Xa = {
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
              args: H,
              concreteType: "Page",
              kind: "LinkedField",
              name: "viewer_acts_as_page",
              plural: !1,
              selections: K,
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
        },
        Ya = {
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
      var Za = {
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
        $a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "translation_available_for_viewer",
          storageKey: null,
        },
        ab = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hidden_by_content_owner",
          storageKey: null,
        },
        bb = {
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
        cb = {
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
        db = {
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
        eb = {
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
        fb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comment_privacy_value",
          storageKey: null,
        },
        gb = {
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
        hb = {
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
      var ib = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_declined_by_group_admin_assistant",
          storageKey: null,
        },
        jb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_gaming_video_comment",
          storageKey: null,
        },
        kb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp_in_video",
          storageKey: null,
        },
        lb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "written_while_video_was_live",
          storageKey: null,
        },
        mb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_constituent_badge",
          storageKey: null,
        },
        nb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_see_subsribe_button",
          storageKey: null,
        },
        ob = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_see_constituent_badge_upsell",
          storageKey: null,
        },
        pb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_token",
          storageKey: null,
        },
        qb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "question_and_answer_type",
          storageKey: null,
        },
        rb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_original_poster",
          storageKey: null,
        },
        sb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_comment_poster",
          storageKey: null,
        },
        tb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_bot",
          storageKey: null,
        },
        ub = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_author_non_coworker",
          storageKey: null,
        },
        vb = {
          alias: null,
          args: F,
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
      E = {
        alias: null,
        args: [
          E,
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
        wb = {
          alias: null,
          args: F,
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
      F = {
        alias: null,
        args: F,
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
            args: [z],
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
        selections: I,
        storageKey: null,
      };
      U = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "if_viewer_can_see_member_page_tooltip",
        plural: !1,
        selections: I,
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
                    selections: K,
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
      z = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_subreply_parent_deleted",
        storageKey: null,
      };
      A = {
        alias: null,
        args: null,
        concreteType: "Comment",
        kind: "LinkedField",
        name: "reply_parent_comment",
        plural: !1,
        selections: K,
        storageKey: null,
      };
      I = {
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
      var xb = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cursor",
          storageKey: null,
        },
        yb = {
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
        zb = {
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
        Ab = ["feedback_source", "focus_comment_id", "comment_order"],
        Bb = {
          kind: "Variable",
          name: "__dynamicKey",
          variableName: "UFI2CommentsProvider_commentsKey",
        };
      return {
        fragment: {
          argumentDefinitions: [
            a,
            b,
            c,
            d,
            e,
            ba,
            ca,
            da,
            ea,
            fa,
            ga,
            ha,
            ia,
            ja,
            ka,
            la,
            ma,
            na,
            oa,
            pa,
            qa,
            ra,
            sa,
          ],
          kind: "Fragment",
          metadata: null,
          name: "CometUFICommentsProviderPaginationQuery",
          selections: [
            {
              alias: null,
              args: ta,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: [
                {
                  args: [
                    ua,
                    va,
                    wa,
                    {
                      kind: "Variable",
                      name: "includeHighlightedComments",
                      variableName: "includeHighlightedComments",
                    },
                    {
                      kind: "Variable",
                      name: "includeNestedComments",
                      variableName: "includeNestedComments",
                    },
                    {
                      kind: "Variable",
                      name: "initialViewOption",
                      variableName: "initialViewOption",
                    },
                    {
                      kind: "Variable",
                      name: "isInitialFetch",
                      variableName: "isInitialFetch",
                    },
                    {
                      kind: "Variable",
                      name: "isPaginating",
                      variableName: "isPaginating",
                    },
                    xa,
                    {
                      kind: "Variable",
                      name: "topLevelViewOption",
                      variableName: "topLevelViewOption",
                    },
                    {
                      kind: "Variable",
                      name: "viewOption",
                      variableName: "viewOption",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "CometUFICommentsProvider_feedback",
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
          argumentDefinitions: [
            b,
            c,
            da,
            d,
            e,
            ba,
            ca,
            ea,
            fa,
            ga,
            ha,
            ia,
            ja,
            ka,
            la,
            ma,
            na,
            oa,
            pa,
            qa,
            ra,
            sa,
            a,
          ],
          kind: "Operation",
          name: "CometUFICommentsProviderPaginationQuery",
          selections: [
            {
              alias: null,
              args: ta,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: [
                f,
                ya,
                {
                  alias: null,
                  args: za,
                  concreteType: "DisplayCommentsConnection",
                  kind: "LinkedField",
                  name: "display_comments",
                  plural: !1,
                  selections: [
                    Aa,
                    Ba,
                    q,
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
                            Ca,
                            v,
                            u,
                            D,
                            Ga,
                            Ha,
                            Ia,
                            Ja,
                            Ka,
                            {
                              alias: null,
                              args: null,
                              concreteType: "Feedback",
                              kind: "LinkedField",
                              name: "feedback",
                              plural: !1,
                              selections: [
                                f,
                                La,
                                Ma,
                                Na,
                                Oa,
                                Pa,
                                J,
                                Qa,
                                G,
                                Ra,
                                Sa,
                                Ta,
                                {
                                  condition: "includeNestedComments",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "AskMeAnythingFeedbackMetadata",
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
                                    {
                                      alias: "comment_count",
                                      args: null,
                                      concreteType:
                                        "TopLevelCommentsConnection",
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
                                      alias: "toplevel_comment_count",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "orderby",
                                          value: "toplevel",
                                        },
                                      ],
                                      concreteType:
                                        "TopLevelCommentsConnection",
                                      kind: "LinkedField",
                                      name: "top_level_comments",
                                      plural: !1,
                                      selections: Ua,
                                      storageKey:
                                        'top_level_comments(orderby:"toplevel")',
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "threading_config",
                                      plural: !1,
                                      selections: [r],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: H,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "viewer_actor",
                                      plural: !1,
                                      selections: [Da, s, Ea, Fa, y],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_vc_acting_as_page_or_profile_plus",
                                      storageKey: null,
                                    },
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
                                      concreteType:
                                        "BroadcastPinnedCommentEvent",
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
                                          selections: K,
                                          storageKey: null,
                                        },
                                        f,
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
                                      concreteType:
                                        "WorkAMAUFIAnswerEventActionLinksCommentModuleRenderer",
                                      kind: "LinkedField",
                                      name: "work_answer_event_action_links_comment_renderer",
                                      plural: !1,
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "CometUFICommentActionLinks_feedback_work_answer_event_action_links_comment_renderer",
                                          fragmentName:
                                            "GeminiUFIAMABroadcastAnswerActionLinks_feedback",
                                          fragmentPropName: "feedback",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    Va,
                                    ya,
                                    {
                                      alias: null,
                                      args: g,
                                      concreteType: "DisplayCommentsConnection",
                                      kind: "LinkedField",
                                      name: "display_comments",
                                      plural: !1,
                                      selections: [
                                        h,
                                        i,
                                        j,
                                        k,
                                        l,
                                        m,
                                        n,
                                        Aa,
                                        Ba,
                                        q,
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
                                                Ca,
                                                v,
                                                u,
                                                D,
                                                Ga,
                                                Ha,
                                                Ia,
                                                Ja,
                                                Ka,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: "Feedback",
                                                  kind: "LinkedField",
                                                  name: "feedback",
                                                  plural: !1,
                                                  selections: [
                                                    f,
                                                    La,
                                                    Ma,
                                                    Na,
                                                    Oa,
                                                    Pa,
                                                    J,
                                                    Qa,
                                                    G,
                                                    Ra,
                                                    Sa,
                                                    Ta,
                                                    o,
                                                    Va,
                                                  ],
                                                  storageKey: null,
                                                },
                                                p,
                                                C,
                                                B,
                                                Wa,
                                                w,
                                                x,
                                                Xa,
                                                Ya,
                                                M,
                                                Za,
                                                $a,
                                                t,
                                                ab,
                                                bb,
                                                cb,
                                                db,
                                                eb,
                                                fb,
                                                gb,
                                                hb,
                                                L,
                                                ib,
                                                jb,
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
                                                E,
                                                wb,
                                                F,
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
                                                z,
                                                A,
                                                I,
                                                r,
                                                N,
                                              ],
                                              storageKey: null,
                                            },
                                            xb,
                                          ],
                                          storageKey: null,
                                        },
                                        yb,
                                        zb,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: g,
                                      filters: Ab,
                                      handle: "ufi2_comments",
                                      key: "UFI2CommentsProvider_feedback_display_comments",
                                      kind: "LinkedHandle",
                                      name: "display_comments",
                                      dynamicKey: Bb,
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
                                          name: "visibility",
                                          storageKey: null,
                                        },
                                        f,
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                },
                              ],
                              storageKey: null,
                            },
                            p,
                            C,
                            B,
                            Wa,
                            w,
                            x,
                            Xa,
                            Ya,
                            M,
                            Za,
                            $a,
                            t,
                            ab,
                            bb,
                            cb,
                            db,
                            eb,
                            fb,
                            gb,
                            hb,
                            L,
                            ib,
                            jb,
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
                            E,
                            wb,
                            F,
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
                            A,
                            I,
                            r,
                            N,
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
                                  selections: [o, Va],
                                  storageKey: null,
                                },
                                z,
                              ],
                            },
                          ],
                          storageKey: null,
                        },
                        xb,
                      ],
                      storageKey: null,
                    },
                    yb,
                    {
                      condition: "includeHighlightedComments",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [h],
                    },
                    {
                      condition: "isPaginating",
                      kind: "Condition",
                      passingValue: !1,
                      selections: [i, j, k, l, m, n, zb],
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: za,
                  filters: Ab,
                  handle: "ufi2_comments",
                  key: "UFI2CommentsProvider_feedback_display_comments",
                  kind: "LinkedHandle",
                  name: "display_comments",
                  dynamicKey: Bb,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4271838386233758",
          metadata: {},
          name: "CometUFICommentsProviderPaginationQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    d.exports = a;
  },
  null
);
__d(
  "CometUFICommentsProviderReadCommentsPageQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "after" },
        b = { defaultValue: null, kind: "LocalArgument", name: "before" },
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
        i = { defaultValue: null, kind: "LocalArgument", name: "feedbackID" },
        j = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        k = { defaultValue: null, kind: "LocalArgument", name: "first" },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        m = {
          defaultValue: !0,
          kind: "LocalArgument",
          name: "includeNestedComments",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "initialViewOption",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "isInitialFetch",
        },
        p = { defaultValue: null, kind: "LocalArgument", name: "last" },
        q = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "topLevelViewOption",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "viewOption" },
        s = [{ kind: "Variable", name: "id", variableName: "feedbackID" }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        u = {
          alias: null,
          args: [
            { kind: "Variable", name: "after", variableName: "after" },
            { kind: "Variable", name: "before", variableName: "before" },
            {
              kind: "Variable",
              name: "comment_order",
              variableName: "viewOption",
            },
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
            { kind: "Variable", name: "first", variableName: "first" },
            {
              kind: "Variable",
              name: "focus_comment_id",
              variableName: "focusCommentID",
            },
            {
              kind: "Variable",
              name: "initial_comment_order",
              variableName: "initialViewOption",
            },
            {
              kind: "Variable",
              name: "is_initial_fetch",
              variableName: "isInitialFetch",
            },
            {
              kind: "Variable",
              name: "is_top_level",
              variableName: "includeNestedComments",
            },
            { kind: "Variable", name: "last", variableName: "last" },
            {
              kind: "Variable",
              name: "top_level_comment_order",
              variableName: "topLevelViewOption",
            },
          ],
          concreteType: "DisplayCommentsConnection",
          kind: "LinkedField",
          name: "display_comments",
          plural: !1,
          selections: [
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
                  selections: [t],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
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
            r,
          ],
          kind: "Fragment",
          metadata: null,
          name: "CometUFICommentsProviderReadCommentsPageQuery",
          selections: [
            {
              alias: null,
              args: s,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: [u],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [
            a,
            b,
            g,
            c,
            d,
            e,
            f,
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
            r,
          ],
          kind: "Operation",
          name: "CometUFICommentsProviderReadCommentsPageQuery",
          selections: [
            {
              alias: null,
              args: s,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: [u, t],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3607425856026656",
          metadata: {},
          name: "CometUFICommentsProviderReadCommentsPageQuery",
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
  "CometUFICommentsProvider_displayCommentsHighlightedComments.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "CometUFICommentsProvider_displayCommentsHighlightedComments",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentsProvider_displayCommentsMetadata.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "CometUFICommentsProvider_displayCommentsMetadata",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFICommentsProvider_feedback.graphql",
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
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "UFI2CommentsProvider_commentsKey" },
          { defaultValue: !1, kind: "LocalArgument", name: "__false" },
          { defaultValue: !0, kind: "LocalArgument", name: "__true" },
          { defaultValue: null, kind: "LocalArgument", name: "after" },
          { defaultValue: null, kind: "LocalArgument", name: "before" },
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
          { defaultValue: null, kind: "LocalArgument", name: "first" },
          { kind: "RootArgument", name: "focusCommentID" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "includeHighlightedComments",
          },
          {
            defaultValue: !0,
            kind: "LocalArgument",
            name: "includeNestedComments",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "initialViewOption",
          },
          { defaultValue: !0, kind: "LocalArgument", name: "isInitialFetch" },
          { defaultValue: !1, kind: "LocalArgument", name: "isPaginating" },
          { defaultValue: null, kind: "LocalArgument", name: "last" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "topLevelViewOption",
          },
          { kind: "RootArgument", name: "useDefaultActor" },
          { defaultValue: null, kind: "LocalArgument", name: "viewOption" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            {
              count: null,
              cursor: null,
              direction: "bidirectional",
              path: ["display_comments"],
            },
          ],
        },
        name: "CometUFICommentsProvider_feedback",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "subscription_target_id",
            storageKey: null,
          },
          {
            alias: "display_comments",
            args: [
              {
                kind: "Variable",
                name: "__dynamicKey",
                variableName: "UFI2CommentsProvider_commentsKey",
              },
              {
                kind: "Variable",
                name: "comment_order",
                variableName: "viewOption",
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
            name: "__UFI2CommentsProvider_feedback_display_comments_ufi2_comments",
            plural: !1,
            selections: [
              {
                condition: "includeHighlightedComments",
                kind: "Condition",
                passingValue: !0,
                selections: [
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "CometUFICommentsProvider_displayCommentsHighlightedComments",
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
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometUFIRepliesExpander_highlightedComments",
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                  },
                ],
              },
              {
                condition: "isPaginating",
                kind: "Condition",
                passingValue: !1,
                selections: [
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "CometUFICommentsProvider_displayCommentsMetadata",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "comment_order",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "Comment",
                        kind: "LinkedField",
                        name: "expanded_sub_reply_parents",
                        plural: !0,
                        selections: b,
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_initially_expanded",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "page_size",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "reply_comment_order",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "should_render_composer_preemptively",
                        storageKey: null,
                      },
                      {
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
                    ],
                  },
                ],
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "after_count",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "before_count",
                storageKey: null,
              },
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
                        concreteType: null,
                        kind: "LinkedField",
                        name: "author",
                        plural: !1,
                        selections: [
                          c,
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
                        kind: "ScalarField",
                        name: "is_author_weak_reference",
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
                        name: "spam_display_mode",
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
                      {
                        condition: "includeNestedComments",
                        kind: "Condition",
                        passingValue: !1,
                        selections: [
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometUFIFullThreadedReplyContainer_comment",
                          },
                        ],
                      },
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
                          },
                          {
                            alias: null,
                            args: [d],
                            kind: "ScalarField",
                            name: "comment_composer_placeholder",
                            storageKey: null,
                          },
                          {
                            condition: "includeNestedComments",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [
                              {
                                args: [
                                  {
                                    kind: "Variable",
                                    name: "includeHighlightedComments",
                                    variableName: "__true",
                                  },
                                  {
                                    kind: "Variable",
                                    name: "includeNestedComments",
                                    variableName: "__false",
                                  },
                                  {
                                    kind: "Variable",
                                    name: "isInitialFetch",
                                    variableName: "isInitialFetch",
                                  },
                                  {
                                    kind: "Variable",
                                    name: "topLevelViewOption",
                                    variableName: "topLevelViewOption",
                                  },
                                ],
                                kind: "FragmentSpread",
                                name: "CometUFICommentList_feedback",
                              },
                            ],
                          },
                        ],
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
                            kind: "FragmentSpread",
                            name: "UFI2CommentQualitySurvey_inlineSurveyConfig",
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "Comment",
                        kind: "LinkedField",
                        name: "reply_parent_comment",
                        plural: !1,
                        selections: b,
                        storageKey: null,
                      },
                      {
                        alias: "threading_depth",
                        args: null,
                        kind: "ScalarField",
                        name: "depth",
                        storageKey: null,
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "UFI2CommentQualitySurvey_comment",
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
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "reply_comment_parent_fbid",
                            storageKey: null,
                          },
                        ],
                      },
                      c,
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
  "CometUFICommentListStateConfig",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 10;
    f.MIN_REPLIES_TO_SHOW_COLLAPSER = a;
  },
  66
);
__d(
  "CometUFICommentListState",
  [
    "CometUFICommentListStateConfig",
    "ErrorNormalizeUtils",
    "FBLogger",
    "UFI2ViewOption",
    "gkx",
    "qex",
    "recoverableViolation",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = a.count,
        c = a.direction,
        d = a.error,
        e = a.hasMore,
        f = a.isLoading,
        g = a.pageSize;
      a = a.totalCount;
      if (a != null && a === 0) return null;
      if (b === 0) return null;
      return !e
        ? null
        : {
            __type: "PAGER",
            count: Math.min(b, g),
            direction: c,
            status: { error: d, pending: f },
          };
    }
    function i(a) {
      var b = a.count,
        c = a.expanded;
      a = a.minCountToShowCollapser;
      if (!c) return null;
      if (a == null) return null;
      return b <= a ? null : { __type: "REPLIES_COLLAPSER", count: b };
    }
    function j(a) {
      var b = a.error,
        c = a.expanded,
        d = a.isLoading;
      a = a.totalCount;
      return c || a === 0
        ? null
        : {
            __type: "REPLIES_EXPANDER",
            count: a,
            status: { error: b, pending: d },
          };
    }
    function k(a) {
      var b = a.direction;
      a = a.page;
      if (b === "forward") {
        b = Math.max(0, a.afterCount - 1);
        return babelHelpers["extends"]({}, a, {
          afterCount: b,
          hasNext: b > 0,
        });
      }
      b = Math.max(0, a.beforeCount - 1);
      return babelHelpers["extends"]({}, a, {
        beforeCount: b,
        hasPrevious: b > 0,
      });
    }
    function l(a, b) {
      if (a === "forward") {
        a = b.afterCount + 1;
        return babelHelpers["extends"]({}, b, {
          afterCount: a,
          hasNext: a > 0,
        });
      }
      a = b.beforeCount + 1;
      return babelHelpers["extends"]({}, b, {
        beforeCount: a,
        hasPrevious: a > 0,
      });
    }
    function m(a, b, d) {
      var e = a.args.commentID,
        f = !1,
        g = !1,
        h = [].concat(b.commentPages);
      if (c("qex")._("209") === !0) {
        var i,
          k = b.commentPages.find(function (a) {
            return a.commentIDs.includes(d);
          });
        i =
          (i = k == null ? void 0 : k.state) != null
            ? i
            : b.newCommentsPage.visibleStates[d];
        if (i === "HIDDEN")
          if (k != null) {
            var m = b.commentPages.indexOf(k);
            h = h.map(function (a, b) {
              return m !== b
                ? l(m < b ? "backward" : "forward", a)
                : babelHelpers["extends"]({}, a);
            });
            k = b.commentPages.findIndex(function (a) {
              return a.state === "VISIBLE";
            });
            g = m < k;
            f = m > k;
          } else g = !0;
        else
          i == null &&
            ((g = b.pagers.backward != null && b.pagers.forward == null),
            (f = b.pagers.forward != null && b.pagers.backward == null));
      }
      k = babelHelpers["extends"]({}, b.commentsByID);
      delete k[e];
      return babelHelpers["extends"]({}, b, {
        commentPages: h,
        commentsByID: k,
        pagers: {
          backward:
            g && b.pagers.backward != null
              ? babelHelpers["extends"]({}, b.pagers.backward, {
                  count: b.pagers.backward.count + 1,
                })
              : b.pagers.backward,
          forward:
            f && b.pagers.forward != null
              ? babelHelpers["extends"]({}, b.pagers.forward, {
                  count: b.pagers.forward.count + 1,
                })
              : b.pagers.forward,
        },
        repliesExpander: j({
          error:
            (h =
              (i = b.repliesExpander) == null
                ? void 0
                : (e = i.status) == null
                ? void 0
                : e.error) != null
              ? h
              : null,
          expanded: b.expanded,
          isLoading:
            (f =
              (k = b.repliesExpander) == null
                ? void 0
                : (g = k.status) == null
                ? void 0
                : g.pending) != null
              ? f
              : !1,
          totalCount: a.args.totalCount,
        }),
      });
    }
    function n(a, b) {
      var d = o(a, b);
      if (a.__type !== "INITIAL_STATE" && b == null)
        throw c("unrecoverableViolation")(
          "Expected state not to be null",
          "ufi2"
        );
      return d;
    }
    function o(a, b) {
      if (a.__type === "INITIAL_STATE") {
        var e,
          f = a.args,
          g = f.afterCount,
          n = f.beforeCount,
          o = f.canViewerComment,
          p = f.commentIDs,
          q = f.commentsByID,
          s = f.feedbackTargetID,
          w = f.hasNext,
          x = f.hasPrevious,
          y = f.hiddenCommentIDs,
          z = f.initiallyExpanded,
          A = f.isListVisible,
          B = f.pageSize,
          C = f.shouldRenderComposerPreemptively,
          D = f.topLevelFeedbackTargetID,
          E = f.totalCount;
        f = f.viewOption;
        e = {
          backward: h({
            count: n,
            direction: "backward",
            error: null,
            hasMore: x,
            isLoading:
              (e =
                b == null
                  ? void 0
                  : (e = b.pagers) == null
                  ? void 0
                  : (e = e.backward) == null
                  ? void 0
                  : (e = e.status) == null
                  ? void 0
                  : e.pending) != null
                ? e
                : !1,
            pageSize: B,
            totalCount: E,
          }),
          forward: h({
            count: g,
            direction: "forward",
            error: null,
            hasMore: w,
            isLoading:
              (e =
                b == null
                  ? void 0
                  : (e = b.pagers) == null
                  ? void 0
                  : (e = e.forward) == null
                  ? void 0
                  : (e = e.status) == null
                  ? void 0
                  : e.pending) != null
                ? e
                : !1,
            pageSize: B,
            totalCount: E,
          }),
        };
        var ha = {};
        y.forEach(function (a) {
          ha[a] = "COLLAPSED";
        });
        y = {
          canViewerComment: o,
          commentPages:
            p.length > 0
              ? [
                  {
                    __type: "COMMENTS_PAGE",
                    afterCount: g,
                    beforeCount: n,
                    commentIDs: p,
                    hasNext: w,
                    hasPrevious: x,
                    state: "VISIBLE",
                  },
                ]
              : [],
          commentsByID: q,
          commentsHiddenByViewer: ha,
          expanded: (B = b == null ? void 0 : b.expanded) != null ? B : z,
          feedbackTargetID: s,
          hasPaged: { backward: !1, forward: !1 },
          isListVisible: A,
          locallyComposedCommentIDs: [],
          newCommentsPage: {
            __type: "NEW_COMMENTS_PAGE",
            commentIDs: [],
            visibleStates: {},
          },
          pagers: e,
          shouldComposerRenderWhenListIsExpanded: C,
          topLevelFeedbackTargetID: D,
          viewOption: f,
        };
        if (a.args.depth === 0)
          return babelHelpers["extends"]({}, y, {
            __type: "DEPTH_0",
            status: { error: null, pending: !1 },
          });
        o = a.args;
        g = o.minCountToShowCollapser;
        n = o.parentCommentID;
        w = null;
        b != null && b.__type === "DEPTH_1" && (w = b.repliesExpander);
        n == null &&
          c("recoverableViolation")(
            "No parent comment ID provided when setting initial state for nested\n          comment list",
            "ufi2"
          );
        return babelHelpers["extends"]({}, y, {
          __type: "DEPTH_1",
          parentCommentID: n,
          repliesCollapser: i({
            count: p.length,
            expanded: z,
            minCountToShowCollapser: g,
          }),
          repliesExpander: j({
            error: null,
            expanded: (x = b == null ? void 0 : b.expanded) != null ? x : z,
            isLoading:
              (s =
                (q = w) == null
                  ? void 0
                  : (B = q.status) == null
                  ? void 0
                  : B.pending) != null
                ? s
                : !1,
            totalCount: E,
          }),
        });
      }
      if (b == null)
        throw c("unrecoverableViolation")(
          "Expected state not to be null",
          "ufi2"
        );
      switch (a.__type) {
        case "COLLAPSE_LIST":
          A = a.args;
          e = A.depth;
          C = A.totalCount;
          if (b.expanded === !1) return b;
          if (b.__type === "DEPTH_0")
            return babelHelpers["extends"]({}, b, { expanded: !1 });
          D = v.getCommentsCount({ depth: e, state: b }) === 0;
          f = C > 0 && D === !0;
          f &&
            c("FBLogger")("ufi2").warn(
              "UFI2CommentsListState.updater(...): COLLAPSE_LIST: expected list not to be empty if connection is not empty"
            );
          return babelHelpers["extends"]({}, b, {
            expanded: !1,
            repliesCollapser: null,
            repliesExpander: j({
              error: b.repliesExpander ? b.repliesExpander.status.error : null,
              expanded: !1,
              isLoading: !1,
              totalCount: C,
            }),
          });
        case "DELETE_COMMENT":
          o = a.args;
          var F = o.commentID;
          y = o.depth;
          n = b.commentPages;
          p = b.locallyComposedCommentIDs;
          var G = b.newCommentsPage;
          if (n.length === 0 && G.commentIDs.length === 0) return b;
          g = G.commentIDs.filter(function (a) {
            return a !== F;
          });
          x = v.getVisibleCommentsCount({ depth: y, state: b });
          z = g.length < G.commentIDs.length;
          if (z) {
            var ia = {};
            g.forEach(function (a) {
              ia[a] = G.visibleStates[a];
            });
            w = babelHelpers["extends"]({}, G, {
              commentIDs: g,
              visibleStates: ia,
            });
            q = n.map(function (a) {
              return k({ direction: "backward", page: a });
            });
            if (b.__type === "DEPTH_0")
              return babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                commentPages: q,
                newCommentsPage: w,
              });
            if (a.args.depth === 0)
              throw c("unrecoverableViolation")(
                "CometUFICommentList.updater(...): depth should be 1 or greater",
                "ufi2"
              );
            B = a.args.minCountToShowCollapser;
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_1",
              commentPages: q,
              newCommentsPage: w,
              repliesCollapser: i({
                count: x - 1,
                expanded: b.expanded,
                minCountToShowCollapser: B,
              }),
            });
          }
          var H = null,
            I = !1;
          s = n
            .map(function (a, b) {
              if (I) return k({ direction: "backward", page: a });
              var c = a.commentIDs.filter(function (a) {
                return a !== F;
              });
              if (c.length < a.commentIDs.length) {
                I = !0;
                H = b;
                return babelHelpers["extends"]({}, a, { commentIDs: c });
              }
              return a;
            })
            .map(function (a, b) {
              return a && H != null && b < H
                ? k({ direction: "forward", page: a })
                : a;
            })
            .filter(Boolean);
          if (I === !1) {
            c("FBLogger")("ufi2").warn(
              "CometUFICommentListState.updater(...): Tried deleting a comment that isnt present"
            );
            return b;
          }
          E = p.filter(function (a) {
            return a !== F;
          });
          if (b.__type === "DEPTH_0")
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_0",
              commentPages: s,
              locallyComposedCommentIDs: E,
            });
          if (a.args.depth === 0)
            throw c("unrecoverableViolation")(
              "CometUFICommentList.updater(...): depth should be 1 or greater",
              "ufi2"
            );
          return babelHelpers["extends"]({}, b, {
            __type: "DEPTH_1",
            commentPages: s,
            locallyComposedCommentIDs: E,
            repliesCollapser: i({
              count: x - 1,
              expanded: b.expanded,
              minCountToShowCollapser: a.args.minCountToShowCollapser,
            }),
          });
        case "EXPAND_HIDDEN_COMMENTS":
          A = a.args.commentIDs;
          var ja = b.commentsHiddenByViewer,
            J = babelHelpers["extends"]({}, ja);
          A.forEach(function (a) {
            var b = ja[a];
            if (b == null) {
              c("FBLogger")("ufi2").warn(
                "CometUFICommentListState.updater(...): Tried expanding a comment that is not hidden"
              );
              return;
            }
            b === "COLLAPSED" && (J[a] = "EXPANDED");
          });
          return b.__type === "DEPTH_0"
            ? babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                commentsHiddenByViewer: J,
              })
            : babelHelpers["extends"]({}, b, {
                __type: "DEPTH_1",
                commentsHiddenByViewer: J,
              });
        case "EXPAND_LIST":
          e = a.args;
          D = e.depth;
          f = e.totalCount;
          C = b.commentPages;
          o = b.newCommentsPage;
          if (
            b.expanded === !0 &&
            b.shouldComposerRenderWhenListIsExpanded === !0
          )
            return b;
          if (D !== 0 && v.isRepliesExpanderLoading({ depth: D, state: b }))
            return b;
          if (f === 0)
            return b.__type === "DEPTH_0"
              ? babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_0",
                  expanded: !0,
                  shouldComposerRenderWhenListIsExpanded: !0,
                })
              : babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_1",
                  expanded: !0,
                  repliesCollapser: null,
                  repliesExpander: null,
                  shouldComposerRenderWhenListIsExpanded: !0,
                });
          y = v.getVisibleCommentsCount({ depth: D, state: b });
          if (y === 0) {
            z = v.getCommentsCount({ depth: D, state: b }) === 0;
            if (
              c("gkx")("1567108")
                ? o.commentIDs.length === 0 && C.length === 0
                : z
            )
              return b.__type === "DEPTH_0"
                ? babelHelpers["extends"]({}, b, {
                    __type: "DEPTH_0",
                    expanded: !0,
                    shouldComposerRenderWhenListIsExpanded: !0,
                    status: { error: null, pending: !0 },
                  })
                : babelHelpers["extends"]({}, b, {
                    __type: "DEPTH_1",
                    expanded: !1,
                    repliesCollapser: null,
                    repliesExpander: j({
                      error: null,
                      expanded: !1,
                      isLoading: !0,
                      totalCount: f,
                    }),
                  });
            g = C.length > 0 ? C[0] : null;
            q =
              g != null
                ? [babelHelpers["extends"]({}, g, { state: "VISIBLE" })].concat(
                    C.slice(1)
                  )
                : C;
            var ka = {};
            o.commentIDs.forEach(function (a) {
              ka[a] = "VISIBLE";
            });
            w = babelHelpers["extends"]({}, o, { visibleStates: ka });
            if (b.__type === "DEPTH_0")
              return babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                commentPages: q,
                expanded: !0,
                newCommentsPage: w,
                shouldComposerRenderWhenListIsExpanded: !0,
              });
            if (a.args.depth === 0)
              throw c("unrecoverableViolation")(
                "CometUFICommentList.updater(...): depth should be 1 or greater",
                "ufi2"
              );
            B = (g != null ? g.commentIDs.length : 0) + o.commentIDs.length;
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_1",
              commentPages: q,
              expanded: !0,
              newCommentsPage: w,
              repliesCollapser: i({
                count: B,
                expanded: !0,
                minCountToShowCollapser: a.args.minCountToShowCollapser,
              }),
              repliesExpander: null,
              shouldComposerRenderWhenListIsExpanded: !0,
            });
          }
          if (b.__type === "DEPTH_0")
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_0",
              expanded: !0,
              shouldComposerRenderWhenListIsExpanded: !0,
            });
          if (a.args.depth === 0)
            throw c("unrecoverableViolation")(
              "CometUFICommentList.updater(...): depth should be 1 or greater",
              "ufi2"
            );
          return babelHelpers["extends"]({}, b, {
            __type: "DEPTH_1",
            expanded: !0,
            repliesCollapser: i({
              count: y,
              expanded: !0,
              minCountToShowCollapser: a.args.minCountToShowCollapser,
            }),
            repliesExpander: null,
            shouldComposerRenderWhenListIsExpanded: !0,
          });
        case "FAIL_COMMENT_PAGINATION":
          n = a.args;
          p = n.depth;
          s = n.direction;
          E = n.error;
          if (
            s === "forward" &&
            p !== 0 &&
            b.__type === "DEPTH_1" &&
            v.isRepliesExpanderLoading({ depth: p, state: b })
          )
            return b.repliesExpander != null
              ? babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_1",
                  repliesExpander: babelHelpers["extends"](
                    {},
                    b.repliesExpander,
                    {
                      status: babelHelpers["extends"](
                        {},
                        b.repliesExpander.status,
                        { error: E, pending: !1 }
                      ),
                    }
                  ),
                })
              : b;
          x = v.isPagerLoading({ depth: p, direction: s, state: b }) === !0;
          if (x === !1) return b;
          A = b.pagers.backward;
          e = b.pagers.forward;
          D = babelHelpers["extends"]({}, b.pagers, {
            backward:
              s === "backward" && A != null
                ? babelHelpers["extends"]({}, A, {
                    status: { error: E, pending: !1 },
                  })
                : A,
            forward:
              s === "forward" && e != null
                ? babelHelpers["extends"]({}, e, {
                    status: { error: E, pending: !1 },
                  })
                : e,
          });
          if (b.__type === "DEPTH_0")
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_0",
              pagers: D,
            });
          else
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_1",
              pagers: D,
            });
        case "HIDE_COMMENTS":
          z = a.args.commentIDs;
          f = b.commentsHiddenByViewer;
          var K = babelHelpers["extends"]({}, f);
          z.forEach(function (a) {
            K[a] = "LOCALLY_HIDDEN";
          });
          return b.__type === "DEPTH_0"
            ? babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                commentsHiddenByViewer: K,
              })
            : babelHelpers["extends"]({}, b, {
                __type: "DEPTH_1",
                commentsHiddenByViewer: K,
              });
        case "RECEIVE_COMMENTS_PAGE":
          C = b.commentPages;
          g = b.locallyComposedCommentIDs;
          var L = b.newCommentsPage;
          o = b.pagers;
          q = a.args;
          var M = q.commentIDs;
          w = q.depth;
          B = q.direction;
          y = q.hiddenCommentIDs;
          n = q.pageSize;
          var N = v.isPagerLoading({ depth: w, direction: B, state: b }) === !0;
          p = w !== 0 && v.isRepliesExpanderLoading({ depth: w, state: b });
          var la = w === 0 && !N;
          x = L.commentIDs.filter(function (a) {
            return !(M.includes(a) && (!la || L.visibleStates[a] === "HIDDEN"));
          });
          A = g.filter(function (a) {
            return !M.includes(a);
          });
          var O = {};
          x.forEach(function (a) {
            O[a] = L.visibleStates[a];
          });
          s = babelHelpers["extends"]({}, L, {
            commentIDs: x,
            visibleStates: O,
          });
          var ma = new Set(
            C.reduce(function (a, b) {
              return a.concat(b.commentIDs);
            }, []).concat(la ? x : [])
          );
          E = M.filter(function (a) {
            return !ma.has(a);
          });
          e =
            b.shouldComposerRenderWhenListIsExpanded === !0 ||
            N === !0 ||
            p === !0;
          var P = babelHelpers["extends"]({}, b.commentsHiddenByViewer);
          y.forEach(function (a) {
            Object.prototype.hasOwnProperty.call(P, a) || (P[a] = "COLLAPSED");
          });
          D = ma.size;
          if (w !== 0 && a.args.direction === "forward" && D === 0) {
            f = a.args;
            z = f.afterCount;
            q = f.hasNext;
            B = {
              backward: null,
              forward: h({
                count: z,
                direction: "forward",
                error: null,
                hasMore: q,
                isLoading: !1,
                pageSize: n,
              }),
            };
            var Q = b.expanded || p ? "VISIBLE" : "HIDDEN";
            g = {
              __type: "COMMENTS_PAGE",
              afterCount: z,
              beforeCount: x.length,
              commentIDs: E,
              hasNext: q,
              hasPrevious: !1,
              state: Q,
            };
            x.forEach(function (a) {
              O[a] = Q;
            });
            s = babelHelpers["extends"]({}, L, {
              commentIDs: x,
              visibleStates: O,
            });
            if (a.args.depth === 0)
              throw c("unrecoverableViolation")(
                "CometUFICommentList.updater(...): depth should be 1 or greater",
                "ufi2"
              );
            if (b.__type !== "DEPTH_1")
              throw c("unrecoverableViolation")(
                "CometUFICommentList.updater(...): depth should be 1 or greater",
                "ufi2"
              );
            y = a.args.minCountToShowCollapser;
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_1",
              commentPages: [g],
              commentsHiddenByViewer: P,
              expanded: Q === "VISIBLE",
              locallyComposedCommentIDs: A,
              newCommentsPage: s,
              pagers: B,
              repliesCollapser: i({
                count: E.length,
                expanded: p,
                minCountToShowCollapser: y,
              }),
              repliesExpander: p ? null : b.repliesExpander,
              shouldComposerRenderWhenListIsExpanded: e,
            });
          }
          D = C[0];
          f = C[C.length - 1];
          z = v.getVisibleCommentsCount({ depth: w, state: b });
          if (a.args.direction === "backward") {
            if (N && D != null && D.state !== "VISIBLE")
              throw c("unrecoverableViolation")(
                "Expected first available page to be visible if backward pager was loading when backward comments were received",
                "ufi2"
              );
            q = a.args;
            g = q.beforeCount;
            B = q.hasPrevious;
            y = g <= x.length;
            y &&
              ((O = {}),
              s.commentIDs.forEach(function (a) {
                O[a] = N ? "VISIBLE" : "HIDDEN";
              }),
              (s = babelHelpers["extends"]({}, s, { visibleStates: O })));
            w = g - s.commentIDs.length - A.length;
            q = babelHelpers["extends"]({}, o, {
              backward: N
                ? h({
                    count: w,
                    direction: "backward",
                    error: null,
                    hasMore: B && !y,
                    isLoading: !1,
                    pageSize: n,
                  })
                : o.backward,
            });
            D = {
              __type: "COMMENTS_PAGE",
              afterCount:
                ((x = D == null ? void 0 : D.afterCount) != null ? x : 0) +
                ((x =
                  D == null
                    ? void 0
                    : (w = D.commentIDs) == null
                    ? void 0
                    : w.length) != null
                  ? x
                  : 0),
              beforeCount: g,
              commentIDs: E,
              hasNext: !0,
              hasPrevious: B,
              state: N || p ? "VISIBLE" : "HIDDEN",
            };
            if (b.__type === "DEPTH_0")
              return babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                commentPages: [D].concat(C),
                commentsHiddenByViewer: P,
                locallyComposedCommentIDs: A,
                newCommentsPage: s,
                pagers: q,
                shouldComposerRenderWhenListIsExpanded: e,
              });
            if (a.args.depth === 0)
              throw c("unrecoverableViolation")(
                "CometUFICommentList.updater(...): depth should be 1 or greater",
                "ufi2"
              );
            w = a.args.minCountToShowCollapser;
            x = p ? !0 : b.expanded;
            g =
              z +
              (D.state === "VISIBLE" ? E.length : 0) +
              (y && N ? s.commentIDs.length : 0);
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_1",
              commentPages: [D].concat(C),
              commentsHiddenByViewer: P,
              expanded: x,
              locallyComposedCommentIDs: A,
              newCommentsPage: s,
              pagers: q,
              repliesCollapser: i({
                count: g,
                expanded: x,
                minCountToShowCollapser: w,
              }),
              repliesExpander: p ? null : b.repliesExpander,
              shouldComposerRenderWhenListIsExpanded: e,
            });
          }
          if (N && f != null && f.state !== "VISIBLE")
            throw c("unrecoverableViolation")(
              "Expected last available page to be visible if forward pager was loading when forward comments were received",
              "ufi2"
            );
          B = a.args;
          y = B.afterCount;
          D = B.hasNext;
          q = babelHelpers["extends"]({}, o, {
            forward: N
              ? h({
                  count: y,
                  direction: "forward",
                  error: null,
                  hasMore: D,
                  isLoading: !1,
                  pageSize: n,
                })
              : o.forward,
          });
          B = {
            __type: "COMMENTS_PAGE",
            afterCount: y,
            beforeCount:
              C.length === 0
                ? s.commentIDs.length
                : ((g = f == null ? void 0 : f.beforeCount) != null ? g : 0) +
                  ((w =
                    f == null
                      ? void 0
                      : (x = f.commentIDs) == null
                      ? void 0
                      : x.length) != null
                    ? w
                    : 0),
            commentIDs: E,
            hasNext: D,
            hasPrevious: !0,
            state: N || p ? "VISIBLE" : "HIDDEN",
          };
          var R = 0;
          n = p
            ? C.map(function (a) {
                a.state === "HIDDEN" && (R += a.commentIDs.length);
                return babelHelpers["extends"]({}, a, { state: "VISIBLE" });
              })
            : C;
          if (b.__type === "DEPTH_0")
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_0",
              commentPages: [].concat(n, [B]),
              commentsHiddenByViewer: P,
              locallyComposedCommentIDs: A,
              newCommentsPage: s,
              pagers: q,
              shouldComposerRenderWhenListIsExpanded: e,
            });
          if (a.args.depth === 0)
            throw c("unrecoverableViolation")(
              "CometUFICommentList.updater(...): depth should be 1 or greater",
              "ufi2"
            );
          o = a.args.minCountToShowCollapser;
          y = B.state === "VISIBLE" ? z + R + E.length : z + R;
          g = p ? !0 : b.expanded;
          return babelHelpers["extends"]({}, b, {
            __type: "DEPTH_1",
            commentPages: [].concat(n, [B]),
            commentsHiddenByViewer: P,
            expanded: g,
            locallyComposedCommentIDs: A,
            newCommentsPage: s,
            pagers: q,
            repliesCollapser: i({
              count: y,
              expanded: g,
              minCountToShowCollapser: o,
            }),
            repliesExpander: p ? null : b.repliesExpander,
            shouldComposerRenderWhenListIsExpanded: e,
          });
        case "RECEIVE_NEW_COMMENT":
          f = a.args;
          var S = f.commentID;
          x = f.commentsComposedByThisUFI;
          w = f.depth;
          D = f.pageSize;
          C = f.prevTotalCount;
          E = f.totalCount;
          z = b.commentPages;
          n = b.commentsByID;
          B = b.expanded;
          A = b.locallyComposedCommentIDs;
          var T = b.newCommentsPage;
          s = b.pagers;
          q = b.viewOption;
          y = v.getCommentsCount({ depth: w, state: b }) === 0;
          g =
            Object.prototype.hasOwnProperty.call(T.visibleStates, S) ||
            z.some(function (a) {
              return a.commentIDs.includes(S);
            });
          if (g) return b;
          o =
            n[S] != null &&
            x != null &&
            n[S].client_id != null &&
            x.has(n[S].client_id);
          var U =
            !d("UFI2ViewOption").shouldDisplayInReverse(q) &&
            b.__type !== "DEPTH_0";
          p =
            b.repliesExpander != null
              ? babelHelpers["extends"]({}, b.repliesExpander, {
                  count: Math.min(b.repliesExpander.count + 1, E),
                })
              : null;
          if (z.length === 0) {
            f = babelHelpers["extends"]({}, T, {
              commentIDs: [S].concat(T.commentIDs),
              visibleStates: babelHelpers["extends"](
                {},
                T.visibleStates,
                ((e = {}),
                (e[S] =
                  B || o || (w !== 0 && y && C === 0) ? "VISIBLE" : "HIDDEN"),
                e)
              ),
            });
            g = o ? [S].concat(A) : A;
            if (b.__type === "DEPTH_0")
              return babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                locallyComposedCommentIDs: g,
                newCommentsPage: f,
              });
            if (a.args.depth === 0)
              throw c("unrecoverableViolation")(
                "CometUFICommentList.updater(...): depth should be 1 or greater",
                "ufi2"
              );
            x = a.args.minCountToShowCollapser;
            n = y && C === 0 ? !0 : B;
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_1",
              expanded: n,
              locallyComposedCommentIDs: g,
              newCommentsPage: f,
              repliesCollapser: i({
                count: f.commentIDs.length,
                expanded: B,
                minCountToShowCollapser: x,
              }),
              repliesExpander: p,
              shouldComposerRenderWhenListIsExpanded: !0,
            });
          }
          q = z[0];
          e = r(b);
          y =
            w === 0 &&
            v.hasMoreInDirection({
              depth: w,
              direction: "forward",
              state: b,
              totalCount: E,
            }) &&
            !b.commentPages.some(function (a) {
              return a.state === "VISIBLE";
            });
          if (!y && o) {
            var V = !1,
              na = babelHelpers["extends"]({}, T.visibleStates),
              oa = [],
              W = [];
            n = (U ? [].concat(z).reverse() : z).map(function (a) {
              if (!V && a.state === "VISIBLE") {
                V = !0;
                T.commentIDs.forEach(function (a) {
                  na[a] === "VISIBLE" && !u(b)
                    ? (delete na[a], W.push(a))
                    : oa.push(a);
                });
                return babelHelpers["extends"]({}, a, {
                  commentIDs: U
                    ? [].concat(a.commentIDs, W.reverse(), [S])
                    : [S].concat(W, a.commentIDs),
                });
              }
              return V
                ? babelHelpers["extends"]({}, a, {
                    afterCount: U ? a.afterCount + 1 + W.length : a.afterCount,
                    beforeCount: U
                      ? a.beforeCount
                      : a.beforeCount + 1 + W.length,
                  })
                : a;
            });
            g = babelHelpers["extends"]({}, T, {
              commentIDs: oa,
              visibleStates: na,
            });
            f = [S].concat(A);
            if (b.__type === "DEPTH_0")
              return babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                commentPages: n,
                locallyComposedCommentIDs: f,
                newCommentsPage: g,
              });
            if (a.args.depth === 0)
              throw c("unrecoverableViolation")(
                "CometUFICommentList.updater(...): depth should be 1 or greater",
                "ufi2"
              );
            x = a.args.minCountToShowCollapser;
            var X = v.getVisibleCommentsCount({ depth: w, state: b });
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_1",
              commentPages: U ? n.reverse() : n,
              locallyComposedCommentIDs: f,
              newCommentsPage: g,
              repliesCollapser: i({
                count: X + 1,
                expanded: B,
                minCountToShowCollapser: x,
              }),
              repliesExpander: p,
              shouldComposerRenderWhenListIsExpanded: !0,
            });
          } else if (y) {
            f = {
              commentPages: z.map(function (a, b) {
                return b === 0
                  ? babelHelpers["extends"]({}, a, {
                      beforeCount: a.beforeCount + 1,
                      hasPrevious: !0,
                    })
                  : a;
              }),
              locallyComposedCommentIDs: o ? [S].concat(A) : A,
              newCommentsPage: babelHelpers["extends"]({}, T, {
                commentIDs: [S].concat(T.commentIDs),
                visibleStates: babelHelpers["extends"](
                  {},
                  T.visibleStates,
                  ((n = {}), (n[S] = "VISIBLE"), n)
                ),
              }),
            };
            return b.__type === "DEPTH_0"
              ? babelHelpers["extends"]({}, b, f, { __type: "DEPTH_0" })
              : babelHelpers["extends"]({}, b, f, { __type: "DEPTH_1" });
          } else if (e && ba(b)) {
            g = z.map(function (a) {
              return babelHelpers["extends"]({}, a, {
                beforeCount: a.beforeCount + 1,
              });
            });
            x = babelHelpers["extends"]({}, T, {
              commentIDs: [S].concat(T.commentIDs),
              visibleStates: babelHelpers["extends"](
                {},
                T.visibleStates,
                ((X = {}), (X[S] = "VISIBLE"), X)
              ),
            });
            if (b.__type === "DEPTH_0")
              return babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                commentPages: g,
                newCommentsPage: x,
              });
            if (a.args.depth === 0)
              throw c("unrecoverableViolation")(
                "CometUFICommentList.updater(...): depth should be 1 or greater",
                "ufi2"
              );
            y = a.args.minCountToShowCollapser;
            o = v.getVisibleCommentsCount({ depth: w, state: b });
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_1",
              commentPages: g,
              newCommentsPage: x,
              repliesCollapser: i({
                count: o + 1,
                expanded: B,
                minCountToShowCollapser: y,
              }),
              repliesExpander: p,
              shouldComposerRenderWhenListIsExpanded: !0,
            });
          } else if (e && T.commentIDs.length === 0) {
            A =
              s.backward != null
                ? babelHelpers["extends"]({}, s, {
                    backward: babelHelpers["extends"]({}, s.backward, {
                      count: Math.min(s.backward.count + 1, D),
                    }),
                  })
                : s;
            n = q.commentIDs.length < D;
            if (n) {
              f = [
                babelHelpers["extends"]({}, q, {
                  commentIDs: [S].concat(q.commentIDs),
                }),
              ].concat(
                z.slice(1).map(function (a) {
                  return babelHelpers["extends"]({}, a, {
                    beforeCount: a.beforeCount + 1,
                  });
                })
              );
              return b.__type === "DEPTH_0"
                ? babelHelpers["extends"]({}, b, {
                    __type: "DEPTH_0",
                    commentPages: f,
                    pagers: A,
                  })
                : babelHelpers["extends"]({}, b, {
                    __type: "DEPTH_1",
                    commentPages: f,
                    pagers: A,
                    repliesExpander: p,
                  });
            }
            X = [
              {
                __type: "COMMENTS_PAGE",
                afterCount: q.afterCount + q.commentIDs.length,
                beforeCount: 0,
                commentIDs: [S],
                hasNext: !0,
                hasPrevious: !1,
                state: "HIDDEN",
              },
              babelHelpers["extends"]({}, q, {
                beforeCount: 1,
                hasPrevious: !0,
              }),
            ].concat(
              z.slice(1).map(function (a) {
                return babelHelpers["extends"]({}, a, {
                  beforeCount: a.beforeCount + 1,
                });
              })
            );
            return b.__type === "DEPTH_0"
              ? babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_0",
                  commentPages: X,
                  pagers: A,
                })
              : babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_1",
                  commentPages: X,
                  pagers: A,
                  repliesExpander: p,
                });
          } else {
            w = E <= C;
            g = w
              ? z
              : z.map(function (a) {
                  return babelHelpers["extends"]({}, a, {
                    beforeCount: a.beforeCount + 1,
                    hasPrevious: !0,
                  });
                });
            x =
              s.backward != null
                ? babelHelpers["extends"]({}, s, {
                    backward: babelHelpers["extends"]({}, s.backward, {
                      count: w
                        ? s.backward.count
                        : Math.min(s.backward.count + 1, D),
                    }),
                  })
                : s;
            B = babelHelpers["extends"]({}, T, {
              commentIDs: [S].concat(T.commentIDs),
              visibleStates: babelHelpers["extends"](
                {},
                T.visibleStates,
                ((o = {}), (o[S] = "HIDDEN"), o)
              ),
            });
            return b.__type === "DEPTH_0"
              ? babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_0",
                  commentPages: g,
                  newCommentsPage: B,
                  pagers: x,
                })
              : babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_1",
                  commentPages: g,
                  newCommentsPage: B,
                  pagers: x,
                  repliesExpander: p,
                });
          }
        case "RECEIVE_REALTIME_COMMENT":
          var Y = a.args.commentID;
          y =
            Object.prototype.hasOwnProperty.call(
              b.newCommentsPage.visibleStates,
              Y
            ) ||
            b.commentPages.some(function (a) {
              return a.commentIDs.includes(Y);
            });
          e = u(b);
          n = fa(b);
          f = ga(b);
          if (
            !d("UFI2ViewOption").shouldDisplayInReverse(b.viewOption) &&
            !e &&
            !n &&
            !f
          ) {
            if (
              d("UFI2ViewOption").expectedWasteComment(
                b.viewOption,
                b.__type === "DEPTH_0"
              )
            )
              return b;
            c("recoverableViolation")(
              "Unable to receive realtime comment for non chronological ordering mode " +
                ((q = b.viewOption) != null ? q : "(null ordering mode)"),
              "ufi2"
            );
            return b;
          }
          if (y) return b;
          X = b.commentsByID[Y];
          E =
            X == null
              ? void 0
              : (A = X.reply_parent_comment) == null
              ? void 0
              : A.id;
          if (
            (b.viewOption === "SUB_REPLIES" ||
              b.viewOption === "CHRONO_SUB_REPLIES" ||
              b.viewOption === "RANKED_SUB_REPLIES") &&
            b.__type === "DEPTH_1" &&
            E != null &&
            b.parentCommentID !== E
          )
            return m(a, b, E);
          C = v.getCommentsCount({ depth: a.args.depth, state: b }) === 0;
          z = t(b).length === 0;
          w = !a.args.hideCommentInPager && C && b.__type === "DEPTH_1";
          D = z && !b.expanded;
          s =
            a.args.hideCommentInPager ||
            (!b.expanded && !w) ||
            (!C && !ba(b)) ||
            (e && !C && !da(b));
          o = !D && s === !0 && !(z && b.pagers.forward != null) && !e;
          g = !D && s && !o;
          var pa = e;
          n = {
            canViewerComment: b.canViewerComment,
            commentPages: b.commentPages.map(function (a) {
              return pa
                ? babelHelpers["extends"]({}, a, {
                    afterCount: a.afterCount + 1,
                    hasNext: !0,
                  })
                : babelHelpers["extends"]({}, a, {
                    beforeCount: a.beforeCount + 1,
                    hasPrevious: !0,
                  });
            }),
            commentsByID: b.commentsByID,
            commentsHiddenByViewer: b.commentsHiddenByViewer,
            expanded: b.expanded || w,
            feedbackTargetID: b.feedbackTargetID,
            hasPaged: b.hasPaged,
            locallyComposedCommentIDs: b.locallyComposedCommentIDs,
            newCommentsPage: babelHelpers["extends"]({}, b.newCommentsPage, {
              commentIDs: pa
                ? [].concat(b.newCommentsPage.commentIDs, [Y])
                : [Y].concat(b.newCommentsPage.commentIDs),
              visibleStates: babelHelpers["extends"](
                {},
                b.newCommentsPage.visibleStates,
                ((B = {}), (B[Y] = s ? "HIDDEN" : "VISIBLE"), B)
              ),
            }),
            pagers: s
              ? {
                  backward: o
                    ? {
                        __type: "PAGER",
                        count:
                          ((n =
                            (x = b.pagers) == null
                              ? void 0
                              : (p = x.backward) == null
                              ? void 0
                              : p.count) != null
                            ? n
                            : 0) + 1,
                        direction: "backward",
                        status: {
                          error:
                            (y =
                              (f = b.pagers) == null
                                ? void 0
                                : (q = f.backward) == null
                                ? void 0
                                : q.status.error) != null
                              ? y
                              : null,
                          pending:
                            (E =
                              (X = b.pagers) == null
                                ? void 0
                                : (A = X.backward) == null
                                ? void 0
                                : A.status.pending) != null
                              ? E
                              : !1,
                        },
                      }
                    : b.pagers.backward,
                  forward: g
                    ? {
                        __type: "PAGER",
                        count:
                          ((D =
                            (C = b.pagers) == null
                              ? void 0
                              : (z = C.forward) == null
                              ? void 0
                              : z.count) != null
                            ? D
                            : 0) + 1,
                        direction: "forward",
                        status: {
                          error:
                            (B =
                              (e = b.pagers) == null
                                ? void 0
                                : (w = e.forward) == null
                                ? void 0
                                : w.status.error) != null
                              ? B
                              : null,
                          pending:
                            (p =
                              (o = b.pagers) == null
                                ? void 0
                                : (x = o.forward) == null
                                ? void 0
                                : x.status.pending) != null
                              ? p
                              : !1,
                        },
                      }
                    : b.pagers.forward,
                }
              : b.pagers,
            shouldComposerRenderWhenListIsExpanded:
              b.shouldComposerRenderWhenListIsExpanded,
            topLevelFeedbackTargetID: b.topLevelFeedbackTargetID,
            viewOption: b.viewOption,
          };
          if (b.__type === "DEPTH_1") {
            return babelHelpers["extends"]({}, b, n, {
              repliesCollapser: i({
                count:
                  v.getVisibleCommentsCount({ depth: a.args.depth, state: b }) +
                  (s ? 0 : 1),
                expanded: b.expanded,
                minCountToShowCollapser: d("CometUFICommentListStateConfig")
                  .MIN_REPLIES_TO_SHOW_COLLAPSER,
              }),
              repliesExpander: j({
                error:
                  (y =
                    (f = b.repliesExpander) == null
                      ? void 0
                      : (q = f.status) == null
                      ? void 0
                      : q.error) != null
                    ? y
                    : null,
                expanded: b.expanded,
                isLoading:
                  (E =
                    (X = b.repliesExpander) == null
                      ? void 0
                      : (A = X.status) == null
                      ? void 0
                      : A.pending) != null
                    ? E
                    : !1,
                totalCount: a.args.totalCount,
              }),
            });
          }
          return b.__type === "DEPTH_0" ? babelHelpers["extends"]({}, b, n) : b;
        case "RECEIVE_REFETCH_LIST":
          g = a.args.depth;
          C = b.feedbackTargetID;
          z = b.topLevelFeedbackTargetID;
          D = b.viewOption;
          if (g !== 0)
            throw c("unrecoverableViolation")(
              "Expected depth to be 0 for RECEIVE_REFETCH_LIST",
              "ufi2"
            );
          if (!v.isListLoading({ depth: g, state: b }))
            throw c("unrecoverableViolation")(
              "Expected list to be loading",
              "ufi2"
            );
          e = aa.getInitialState({
            args: babelHelpers["extends"]({}, a.args, {
              depth: 0,
              feedbackTargetID: C,
              initiallyExpanded: !0,
              topLevelFeedbackTargetID: z,
              viewOption: D,
            }),
            state: null,
          });
          if (e.__type !== "DEPTH_0")
            throw c("unrecoverableViolation")(
              "Expected depth to be 0 for RECEIVE_REFETCH_LIST",
              "ufi2"
            );
          return babelHelpers["extends"]({}, e, {
            __type: "DEPTH_0",
            expanded: b.expanded,
            status: { error: null, pending: !1 },
          });
        case "RECEIVE_REPARENTED_COMMENT":
          if (b.__type === "DEPTH_0") return b;
          w = b.commentPages;
          B = b.newCommentsPage;
          o = a.args;
          var qa = o.commentID,
            ra = o.removedID;
          if (B.commentIDs.includes(ra)) {
            x = B.commentIDs.indexOf(ra);
            p = [].concat(B.commentIDs);
            p.splice(x, 0, qa);
            s = babelHelpers["extends"]({}, B.visibleStates);
            s[qa] = "VISIBLE";
            f = babelHelpers["extends"]({}, B, {
              commentIDs: p,
              visibleStates: s,
            });
            q = w.map(function (a) {
              return l("backward", a);
            });
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_1",
              commentPages: q,
              newCommentsPage: f,
            });
          }
          var sa = !1,
            ta = -1;
          y = w
            .map(function (a, b) {
              if (sa) return l("backward", a);
              var c = a.commentIDs.indexOf(ra);
              if (c === -1) return a;
              var d = [].concat(a.commentIDs);
              d.splice(c, 0, qa);
              ta = b;
              sa = !0;
              return babelHelpers["extends"]({}, a, { commentIDs: d });
            })
            .map(function (a, b) {
              return ta === -1 || b >= ta ? a : l("forward", a);
            });
          return babelHelpers["extends"]({}, b, {
            __type: "DEPTH_1",
            commentPages: y,
          });
        case "REQUEST_COMMENTS_PAGE":
          X = a.args;
          A = X.depth;
          E = X.direction;
          n = X.pageSize;
          g = b.commentPages;
          C = b.expanded;
          z = b.newCommentsPage;
          D = b.pagers;
          if (!C)
            throw c("unrecoverableViolation")(
              "Expected list to be expanded",
              "ufi2"
            );
          if (v.isPagerLoading({ depth: A, direction: E, state: b }))
            throw c("unrecoverableViolation")(
              "Cant request page if pager is loading",
              "ufi2"
            );
          if (A === 0 && v.isListLoading({ depth: A, state: b }))
            throw c("unrecoverableViolation")(
              "Cant request page if list is loading",
              "ufi2"
            );
          if (A !== 0 && v.isRepliesExpanderLoading({ depth: A, state: b }))
            throw c("unrecoverableViolation")(
              "Cant request page if replies expander is loading",
              "ufi2"
            );
          if (E === "backward") {
            e = g.findIndex(function (a) {
              return a.state === "VISIBLE";
            });
            o = -1;
            x = r(b) && ea(b, "HIDDEN");
            if (e > -1) {
              B = g[e];
              B.hasPrevious === !1 &&
                c("FBLogger")("ufi2").mustfix(
                  "CometUFICommentList.updater(...): REQUEST_COMMENTS_PAGE - Can't request previous comments if there are no more comments available, feedbackID: %s",
                  b.topLevelFeedbackTargetID
                );
              if (B.hasPrevious !== !0)
                throw c("unrecoverableViolation")(
                  "Can't request previous comments if there are no more comments available",
                  "ufi2"
                );
              o = e - 1;
            } else e === -1 && g.length > 0 && !x && (o = 0);
            p = g[o];
            if (p && p.state === "HIDDEN") {
              s = [].concat(g);
              s[o] = babelHelpers["extends"]({}, p, { state: "VISIBLE" });
              q = babelHelpers["extends"]({}, D, {
                backward: h({
                  count: p.beforeCount,
                  direction: "backward",
                  error: null,
                  hasMore: p.hasPrevious,
                  isLoading: !1,
                  pageSize: n,
                }),
              });
              if (b.__type === "DEPTH_0")
                return babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_0",
                  commentPages: s,
                  hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                    backward: !0,
                  }),
                  pagers: q,
                  shouldComposerRenderWhenListIsExpanded: !0,
                });
              if (a.args.depth === 0)
                throw c("unrecoverableViolation")(
                  "CometUFICommentList.updater(...): depth should be 1 or greater",
                  "ufi2"
                );
              f = a.args.minCountToShowCollapser;
              w = v.getVisibleCommentsCount({ depth: A, state: b });
              return babelHelpers["extends"]({}, b, {
                __type: "DEPTH_1",
                commentPages: s,
                hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                  backward: !0,
                }),
                pagers: q,
                repliesCollapser: i({
                  count: w + p.commentIDs.length,
                  expanded: b.expanded,
                  minCountToShowCollapser: f,
                }),
                shouldComposerRenderWhenListIsExpanded: !0,
              });
            } else if (x) {
              var ua = {};
              z.commentIDs.forEach(function (a) {
                ua[a] = "VISIBLE";
              });
              y = babelHelpers["extends"]({}, z, { visibleStates: ua });
              X = babelHelpers["extends"]({}, D, { backward: null });
              if (b.__type === "DEPTH_0")
                return babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_0",
                  hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                    backward: !0,
                  }),
                  newCommentsPage: y,
                  pagers: X,
                  shouldComposerRenderWhenListIsExpanded: !0,
                });
              if (a.args.depth === 0)
                throw c("unrecoverableViolation")(
                  "CometUFICommentList.updater(...): depth should be 1 or greater",
                  "ufi2"
                );
              C = a.args.minCountToShowCollapser;
              E = v.getVisibleCommentsCount({ depth: A, state: b });
              return babelHelpers["extends"]({}, b, {
                __type: "DEPTH_1",
                hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                  backward: !0,
                }),
                newCommentsPage: y,
                pagers: X,
                repliesCollapser: i({
                  count: E + y.commentIDs.length,
                  expanded: b.expanded,
                  minCountToShowCollapser: C,
                }),
                shouldComposerRenderWhenListIsExpanded: !0,
              });
            } else {
              B = babelHelpers["extends"]({}, D, {
                backward:
                  D.backward &&
                  babelHelpers["extends"]({}, D.backward, {
                    status: { error: null, pending: !0 },
                  }),
              });
              return b.__type === "DEPTH_0"
                ? babelHelpers["extends"]({}, b, {
                    __type: "DEPTH_0",
                    hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                      backward: !0,
                    }),
                    pagers: B,
                  })
                : babelHelpers["extends"]({}, b, {
                    __type: "DEPTH_1",
                    hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                      backward: !0,
                    }),
                    pagers: B,
                  });
            }
          }
          e = []
            .concat(g)
            .reverse()
            .findIndex(function (a) {
              return a.state === "VISIBLE";
            });
          o = -1;
          if (e > -1) {
            s = g.length - 1 - e;
            q = g[s];
            if (q.hasNext !== !0)
              throw c("unrecoverableViolation")(
                "Can't request previous comments if there are no more comments available",
                "ufi2"
              );
            o = s + 1;
          } else e === -1 && g.length > 0 && (o = g.length - 1);
          w = g[o];
          if (w && w.state === "HIDDEN") {
            p = [].concat(g);
            p[o] = babelHelpers["extends"]({}, w, { state: "VISIBLE" });
            f = babelHelpers["extends"]({}, D, {
              forward: h({
                count: w.afterCount,
                direction: "forward",
                error: null,
                hasMore: w.hasNext,
                isLoading: !1,
                pageSize: n,
              }),
            });
            if (b.__type === "DEPTH_0")
              return babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                commentPages: p,
                hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                  forward: !0,
                }),
                pagers: f,
                shouldComposerRenderWhenListIsExpanded: !0,
              });
            if (a.args.depth === 0)
              throw c("unrecoverableViolation")(
                "CometUFICommentList.updater(...): depth should be 1 or greater",
                "ufi2"
              );
            x = a.args.minCountToShowCollapser;
            X = v.getVisibleCommentsCount({ depth: A, state: b });
            return babelHelpers["extends"]({}, b, {
              __type: "DEPTH_1",
              commentPages: p,
              hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                forward: !0,
              }),
              pagers: f,
              repliesCollapser: i({
                count: X + w.commentIDs.length,
                expanded: b.expanded,
                minCountToShowCollapser: x,
              }),
              shouldComposerRenderWhenListIsExpanded: !0,
            });
          } else if (
            u(b) &&
            ca(b) &&
            ea(b, "HIDDEN") &&
            b.__type === "DEPTH_0"
          ) {
            var va = {};
            z.commentIDs.forEach(function (a) {
              va[a] = "VISIBLE";
            });
            return babelHelpers["extends"]({}, b, {
              hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                forward: !0,
              }),
              newCommentsPage: babelHelpers["extends"]({}, z, {
                visibleStates: va,
              }),
              pagers: babelHelpers["extends"]({}, D, { forward: null }),
              shouldComposerRenderWhenListIsExpanded: !0,
            });
          } else {
            E = babelHelpers["extends"]({}, D, {
              forward:
                D.forward &&
                babelHelpers["extends"]({}, D.forward, {
                  status: { error: null, pending: !0 },
                }),
            });
            return b.__type === "DEPTH_0"
              ? babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_0",
                  hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                    forward: !0,
                  }),
                  pagers: E,
                })
              : babelHelpers["extends"]({}, b, {
                  __type: "DEPTH_1",
                  hasPaged: babelHelpers["extends"]({}, b.hasPaged, {
                    forward: !0,
                  }),
                  pagers: E,
                });
          }
        case "REQUEST_REFETCH_LIST":
          y = a.args.depth;
          if (y !== 0 || b.__type !== "DEPTH_0")
            throw c("unrecoverableViolation")(
              "Expected depth to be 0 for RECEIVE_REFETCH_LIST",
              "ufi2"
            );
          if (v.isListLoading({ depth: y, state: b }))
            throw c("unrecoverableViolation")(
              "Expected list to be loading",
              "ufi2"
            );
          return babelHelpers["extends"]({}, b, {
            __type: "DEPTH_0",
            commentPages: [],
            expanded: !0,
            hasPaged: { backward: !1, forward: !1 },
            locallyComposedCommentIDs: [],
            newCommentsPage: {
              __type: "NEW_COMMENTS_PAGE",
              commentIDs: [],
              visibleStates: {},
            },
            pagers: { backward: null, forward: null },
            status: { error: null, pending: !0 },
          });
        case "SET_CAN_VIEWER_COMMENT":
          C = a.args.canViewerComment;
          return b.__type === "DEPTH_0"
            ? babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                canViewerComment: C,
              })
            : babelHelpers["extends"]({}, b, {
                __type: "DEPTH_1",
                canViewerComment: C,
              });
        case "SET_COMMENTS_BY_ID":
          B = a.args.commentsByID;
          return b.__type === "DEPTH_0"
            ? babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                commentsByID: B,
              })
            : babelHelpers["extends"]({}, b, {
                __type: "DEPTH_1",
                commentsByID: B,
              });
        case "SET_SERVER_COMMENT_ID":
          q = a.args;
          var Z = q.clientCommentID,
            $ = q.serverCommentID;
          s = b.commentPages;
          e = b.locallyComposedCommentIDs;
          g = b.newCommentsPage;
          o = g.commentIDs.indexOf(Z);
          n = o !== -1;
          A = s.some(function (a) {
            return a.commentIDs.some(function (a) {
              return a === Z;
            });
          });
          if (!n && !A) return b;
          p = g.commentIDs.some(function (a) {
            return a === $;
          });
          f = s
            .filter(function (a) {
              return a.state === "HIDDEN";
            })
            .some(function (a) {
              return a.commentIDs.some(function (a) {
                return a === $;
              });
            });
          X = s
            .filter(function (a) {
              return a.state === "VISIBLE";
            })
            .some(function (a) {
              return a.commentIDs.some(function (a) {
                return a === $;
              });
            });
          w = b;
          if (f) {
            x = s.map(function (a) {
              var b = a.commentIDs.indexOf($);
              if (b === -1) return a;
              else
                return babelHelpers["extends"]({}, a, {
                  commentIDs: [].concat(
                    a.commentIDs.slice(0, b),
                    a.commentIDs.slice(b + 1)
                  ),
                });
            });
            w.__type === "DEPTH_0"
              ? (w = babelHelpers["extends"]({}, w, {
                  __type: "DEPTH_0",
                  commentPages: x,
                }))
              : (w = babelHelpers["extends"]({}, w, {
                  __type: "DEPTH_1",
                  commentPages: x,
                }));
          }
          if (p) {
            z = e.filter(function (a) {
              return a === Z;
            });
            D = g.commentIDs.filter(function (a) {
              return a !== Z;
            });
            E = babelHelpers["extends"]({}, g.visibleStates);
            delete E[Z];
            y = babelHelpers["extends"]({}, g, {
              commentIDs: D,
              visibleStates: E,
            });
            w.__type === "DEPTH_0"
              ? (w = babelHelpers["extends"]({}, w, {
                  __type: "DEPTH_0",
                  locallyComposedCommentIDs: z,
                  newCommentsPage: y,
                }))
              : (w = babelHelpers["extends"]({}, w, {
                  __type: "DEPTH_1",
                  locallyComposedCommentIDs: z,
                  newCommentsPage: y,
                }));
          }
          if (n) {
            C = babelHelpers["extends"]({}, g.visibleStates);
            if (X || p) {
              B = g.commentIDs.filter(function (a) {
                return a !== Z;
              });
              delete C[Z];
              q = babelHelpers["extends"]({}, g, {
                commentIDs: B,
                visibleStates: C,
              });
              w.__type === "DEPTH_0"
                ? (w = babelHelpers["extends"]({}, w, {
                    __type: "DEPTH_0",
                    newCommentsPage: q,
                  }))
                : (w = babelHelpers["extends"]({}, w, {
                    __type: "DEPTH_1",
                    newCommentsPage: q,
                  }));
            } else {
              o = g.commentIDs.map(function (a) {
                return a === Z ? $ : a;
              });
              C[$] = C[Z];
              delete C[Z];
              f = babelHelpers["extends"]({}, g, {
                commentIDs: o,
                visibleStates: C,
              });
              w.__type === "DEPTH_0"
                ? (w = babelHelpers["extends"]({}, w, {
                    __type: "DEPTH_0",
                    newCommentsPage: f,
                  }))
                : (w = babelHelpers["extends"]({}, w, {
                    __type: "DEPTH_1",
                    newCommentsPage: f,
                  }));
            }
          }
          if (A)
            if (X || p) {
              x = s.map(function (a) {
                var b = a.commentIDs.indexOf(Z);
                if (b === -1) return a;
                else
                  return babelHelpers["extends"]({}, a, {
                    commentIDs: [].concat(
                      a.commentIDs.slice(0, b),
                      a.commentIDs.slice(b + 1)
                    ),
                  });
              });
              w.__type === "DEPTH_0"
                ? (w = babelHelpers["extends"]({}, w, {
                    __type: "DEPTH_0",
                    commentPages: x,
                  }))
                : (w = babelHelpers["extends"]({}, w, {
                    __type: "DEPTH_1",
                    commentPages: x,
                  }));
            } else {
              D = s.map(function (a) {
                var b = a.commentIDs.indexOf(Z);
                if (b === -1) return a;
                else
                  return babelHelpers["extends"]({}, a, {
                    commentIDs: [].concat(
                      a.commentIDs.slice(0, b),
                      [$],
                      a.commentIDs.slice(b + 1)
                    ),
                  });
              });
              w.__type === "DEPTH_0"
                ? (w = babelHelpers["extends"]({}, w, {
                    __type: "DEPTH_0",
                    commentPages: D,
                  }))
                : (w = babelHelpers["extends"]({}, w, {
                    __type: "DEPTH_1",
                    commentPages: D,
                  }));
            }
          E = e.map(function (a) {
            return a === Z ? $ : a;
          });
          return w.__type === "DEPTH_0"
            ? babelHelpers["extends"]({}, w, {
                __type: "DEPTH_0",
                locallyComposedCommentIDs: E,
              })
            : babelHelpers["extends"]({}, w, {
                __type: "DEPTH_1",
                locallyComposedCommentIDs: E,
              });
        case "UNHIDE_COMMENTS":
          z = a.args.commentIDs;
          y = b.commentsHiddenByViewer;
          var wa = babelHelpers["extends"]({}, y);
          z.forEach(function (a) {
            delete wa[a];
          });
          return b.__type === "DEPTH_0"
            ? babelHelpers["extends"]({}, b, {
                __type: "DEPTH_0",
                commentsHiddenByViewer: wa,
              })
            : babelHelpers["extends"]({}, b, {
                __type: "DEPTH_1",
                commentsHiddenByViewer: wa,
              });
        case "INITIAL_STATE":
        default:
          a.__type;
          throw c("unrecoverableViolation")(
            "CometUFICommentListState: Invalid action type: " + a.__type,
            "ufi2"
          );
      }
    }
    function p(a, b) {
      try {
        var d = n(a, b);
        return d;
      } catch (f) {
        d = c("ErrorNormalizeUtils").normalizeError(f);
        d = d.message;
        var e =
          a.__type === "REQUEST_COMMENTS_PAGE" ||
          a.__type === "RECEIVE_COMMENTS_PAGE"
            ? a.args.direction
            : "Unknown";
        c("FBLogger")("ufi2")
          .catching(f)
          .addMetadata("UFI", "COMMENTS_LIST_ACTION", a.__type)
          .addMetadata("UFI", "COMMENTS_LIST_DEPTH", "" + a.args.depth)
          .addMetadata("UFI", "COMMENTS_LIST_DIRECTION", e)
          .mustfix("CometUFICommentListState.updater(...): " + d);
        c("gkx")("676930") &&
          window.__enableUFI2CommentsListLogging === !0 &&
          a.__type !== "SET_COMMENTS_BY_ID" &&
          console.groupEnd();
        if (!b) throw f;
        return b;
      }
    }
    function a(a, b) {
      return n(a, b);
    }
    function b(a, b) {
      return n(a, b);
    }
    var aa = {
      collapseList: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "COLLAPSE_LIST", args: b }, a);
      },
      deleteComment: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "DELETE_COMMENT", args: b }, a);
      },
      expandHiddenComments: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "EXPAND_HIDDEN_COMMENTS", args: b }, a);
      },
      expandList: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "EXPAND_LIST", args: b }, a);
      },
      failCommentPagination: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "FAIL_COMMENT_PAGINATION", args: b }, a);
      },
      getInitialState: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "INITIAL_STATE", args: b }, a);
      },
      hideComments: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "HIDE_COMMENTS", args: b }, a);
      },
      receiveCommentsPage: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "RECEIVE_COMMENTS_PAGE", args: b }, a);
      },
      receiveNewComment: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "RECEIVE_NEW_COMMENT", args: b }, a);
      },
      receiveRealtimeComment: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "RECEIVE_REALTIME_COMMENT", args: b }, a);
      },
      receiveRefetchList: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "RECEIVE_REFETCH_LIST", args: b }, a);
      },
      receiveReparentedComment: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "RECEIVE_REPARENTED_COMMENT", args: b }, a);
      },
      requestCommentsPage: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "REQUEST_COMMENTS_PAGE", args: b }, a);
      },
      requestRefetchList: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "REQUEST_REFETCH_LIST", args: b }, a);
      },
      setCanViewerComment: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "SET_CAN_VIEWER_COMMENT", args: b }, a);
      },
      setCommentsByID: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "SET_COMMENTS_BY_ID", args: b }, a);
      },
      setServerCommentID: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "SET_SERVER_COMMENT_ID", args: b }, a);
      },
      unhideComments: function (a) {
        var b = a.args;
        a = a.state;
        return p({ __type: "UNHIDE_COMMENTS", args: b }, a);
      },
    };
    function q(a) {
      var b = a.direction;
      a = a.state;
      b =
        b === "forward" ? [].concat(a.commentPages).reverse() : a.commentPages;
      return b.find(function (a) {
        return a.state === "VISIBLE";
      });
    }
    function r(a) {
      var b = a.commentPages,
        c = a.newCommentsPage;
      b = b[0];
      if (!b) return c.commentIDs.length > 0;
      return u(a)
        ? b.beforeCount === 0
        : b.beforeCount - c.commentIDs.length === 0;
    }
    function ba(a) {
      var b = a.commentPages[0];
      b = (b == null || b.state === "VISIBLE") && r(a);
      return b && (u(a) || s(a, "VISIBLE"));
    }
    function ca(a) {
      var b = a.commentPages,
        c = a.newCommentsPage;
      b = [].concat(b).reverse()[0];
      if (!b) return c.commentIDs.length > 0;
      return u(a)
        ? b.afterCount - c.commentIDs.length === 0
        : b.afterCount === 0;
    }
    function da(a) {
      var b = a.commentPages;
      b = [].concat(b).reverse()[0];
      b = (b == null || b.state === "VISIBLE") && ca(a);
      return b && (!u(a) || s(a, "VISIBLE"));
    }
    function ea(a, b) {
      var c = a.newCommentsPage;
      return c.commentIDs.some(function (a) {
        return c.visibleStates[a] === b;
      });
    }
    function s(a, b) {
      var c = a.newCommentsPage;
      return c.commentIDs.every(function (a) {
        return c.visibleStates[a] === b;
      });
    }
    function t(a) {
      var b = a.__type,
        c = a.commentPages,
        e = a.newCommentsPage,
        f = a.viewOption;
      c = c
        .filter(function (a) {
          return a.state === "VISIBLE";
        })
        .reduce(function (a, b) {
          return a.concat(b.commentIDs);
        }, []);
      var g = e.commentIDs.filter(function (a) {
        return e.visibleStates[a] === "VISIBLE";
      });
      if (u(a)) return [].concat(c, g);
      return b === "DEPTH_1" && !d("UFI2ViewOption").shouldDisplayInReverse(f)
        ? [].concat(c, g.reverse())
        : [].concat(g, c);
    }
    function u(a) {
      return (
        a.__type === "DEPTH_0" &&
        a.viewOption === "MOST_VOTED" &&
        c("gkx")("1445059")
      );
    }
    function fa(a) {
      return (
        a.__type === "DEPTH_0" &&
        a.viewOption === "ANSWERED" &&
        c("gkx")("1762503")
      );
    }
    function ga(a) {
      return (
        a.__type === "DEPTH_0" &&
        a.viewOption === "UNANSWERED" &&
        c("gkx")("1762503")
      );
    }
    var v = {
      canFetchInDirection: function (a) {
        var b = a.depth,
          c = a.direction,
          d = a.state;
        a = a.totalCount;
        if (a === 0) return !1;
        a = d.commentPages;
        var e = d.newCommentsPage,
          f = v.isPagerLoading({ depth: b, direction: c, state: d });
        if (f) return !1;
        f = b === 0 && v.isListLoading({ depth: b, state: d });
        if (f) return !1;
        f = b !== 0 && v.isRepliesExpanderLoading({ depth: b, state: d });
        if (f) return !1;
        if (a.length === 0 && c === "forward") return !0;
        else if (a.length === 0 && c === "backward") return !1;
        f = a[0];
        a = a[a.length - 1];
        b = v.getPagerCount({ depth: b, direction: "backward", state: d });
        b = b === e.commentIDs.length && s(d, "HIDDEN");
        return c === "backward"
          ? f.state !== "HIDDEN" && !b && f.hasPrevious
          : a.state !== "HIDDEN" && a.hasNext;
      },
      getCommentsCount: function (a) {
        a = a.state;
        var b = a.commentPages;
        a = a.newCommentsPage;
        return a.commentIDs.concat(
          b.reduce(function (a, b) {
            return a.concat(b.commentIDs);
          }, [])
        ).length;
      },
      getCountForFetch: function (a) {
        var b = a.depth,
          d = a.direction,
          e = a.pageSize;
        a = a.state;
        d = v.getPagerCount({ depth: b, direction: d, state: a });
        if (d != null) return d;
        if (b !== 0) {
          if (e == null)
            throw c("unrecoverableViolation")(
              "CometUFICommentListState.getCountForFetch(...): Expected pageSize to compute fetch count for expanding replies",
              "ufi2"
            );
          d = v.getRepliesExpanderCount({ depth: b, state: a });
          if (d != null) return Math.min(d, e);
        }
        return null;
      },
      getHiddenStateForComment: function (a) {
        var b = a.commentID;
        a = a.state;
        a = a.commentsHiddenByViewer;
        return a[b] || null;
      },
      getPagerCount: function (a) {
        var b = a.direction;
        a = a.state;
        a = a.pagers;
        if (!a) return null;
        a = a[b];
        return a != null ? a.count : null;
      },
      getPagerError: function (a) {
        var b = a.direction;
        a = a.state;
        a = a.pagers;
        if (!a) return null;
        a = a[b];
        return a != null ? a.status.error : null;
      },
      getRepliesCollapserCount: function (a) {
        var b = a.depth;
        a = a.state;
        if (b === 0 || a.__type !== "DEPTH_1") return null;
        b = a.repliesCollapser;
        return b != null ? b.count : null;
      },
      getRepliesExpanderCount: function (a) {
        var b = a.depth;
        a = a.state;
        if (b === 0 || a.__type !== "DEPTH_1") return null;
        b = a.repliesExpander;
        return b != null ? b.count : null;
      },
      getRepliesExpanderError: function (a) {
        var b = a.depth;
        a = a.state;
        if (b === 0 || a.__type !== "DEPTH_1") return null;
        b = a.repliesExpander;
        return b != null ? b.status.error : null;
      },
      getVisibleComments: function (a) {
        a = a.state;
        var b = a.commentsByID,
          e = a.locallyComposedCommentIDs,
          f = a.newCommentsPage,
          g = a.viewOption;
        a = t(a);
        var h = a
          .map(function (a) {
            var d = b[a];
            if (!d) {
              c("FBLogger")("ufi2").warn(
                "CometUFICommentListState.getVisibleComments: Could not find comment locally: %s",
                a
              );
              return null;
            }
            return d;
          })
          .filter(Boolean);
        a.length > 0 &&
          h.length === 0 &&
          c("FBLogger")("ufi2").warn(
            "CometUFICommentListState.getVisibleComments: Could not find ANY of the %s comments locally",
            a.length
          );
        return !e.length &&
          f.commentIDs.length > 0 &&
          d("UFI2ViewOption").shouldDisplayInReverse(g)
          ? h.sort(function (a, b) {
              return (
                ((b = b.created_time) != null ? b : 0) -
                ((b = a.created_time) != null ? b : 0)
              );
            })
          : h;
      },
      getVisibleCommentsCount: function (a) {
        a = a.state;
        return t(a).length;
      },
      getVisibleCommentsGroupedByCollapsedState: function (a) {
        var b = a.depth,
          c = a.reverse,
          d = a.shouldCollapseComment;
        a = a.state;
        b = v.getVisibleComments({ depth: b, state: a });
        a = c ? b.slice().reverse() : b;
        return a.reduce(function (a, b) {
          var c = d(b) ? "COLLAPSED" : "VISIBLE";
          if (a.length === 0) return [{ comments: [b], state: c }];
          var e = a[a.length - 1],
            f = e.comments[e.comments.length - 1];
          if (!f) return a;
          f = e.state;
          if (f === c) {
            e.comments.push(b);
            return a;
          }
          return [].concat(a, [{ comments: [b], state: c }]);
        }, []);
      },
      getVisibleCommentsWithHiddenCommentsCollapsed: function (a) {
        var b = a.depth,
          c = a.reverse,
          d = a.state;
        return v.getVisibleCommentsGroupedByCollapsedState({
          depth: b,
          reverse: c,
          shouldCollapseComment: function (a) {
            return (
              v.getHiddenStateForComment({
                commentID: a.id,
                depth: b,
                state: d,
              }) === "COLLAPSED"
            );
          },
          state: d,
        });
      },
      hasLastPageLeftInDirection: function (a) {
        var b = a.direction,
          c = a.pageSize,
          d = a.state;
        a = a.totalCount;
        d = q({ direction: b, state: d });
        if (!d) return b === "forward" ? a <= c : !1;
        return b === "forward" ? d.afterCount <= c : d.beforeCount <= c;
      },
      hasMoreInDirection: function (a) {
        var b = a.direction,
          c = a.state;
        a = a.totalCount;
        c = q({ direction: b, state: c });
        if (!c) return b === "forward" ? a > 0 : !1;
        return b === "forward" ? c.hasNext : c.hasPrevious;
      },
      hasPagedInDirection: function (a) {
        var b = a.direction;
        a = a.state;
        a = a.hasPaged;
        return a[b];
      },
      hasVisibleComments: function (a) {
        var b = a.depth;
        a = a.state;
        return v.getVisibleComments({ depth: b, state: a }).length > 0;
      },
      isComposerVisible: function (a) {
        a = a.state;
        return (
          a.canViewerComment &&
          a.expanded &&
          a.shouldComposerRenderWhenListIsExpanded
        );
      },
      isListExpanded: function (a) {
        a = a.state;
        return a.expanded;
      },
      isListLoading: function (a) {
        var b = a.depth;
        a = a.state;
        return b !== 0 || a.__type !== "DEPTH_0" ? !1 : a.status.pending;
      },
      isPagerLoading: function (a) {
        var b = a.direction;
        a = a.state;
        a = a.pagers;
        if (!a) return !1;
        a = a[b];
        return a != null ? a.status.pending : !1;
      },
      isPagerVisible: function (a) {
        var b = a.direction;
        a = a.state;
        a = a.pagers;
        if (!a) return !1;
        a = a[b];
        return a != null;
      },
      isRepliesCollapserVisible: function (a) {
        var b = a.depth;
        a = a.state;
        if (b === 0 || a.__type !== "DEPTH_1") return !1;
        b = a.repliesCollapser;
        return b != null;
      },
      isRepliesExpanderLoading: function (a) {
        var b = a.depth;
        a = a.state;
        if (b === 0 || a.__type !== "DEPTH_1") return !1;
        b = a.repliesExpander;
        return b != null ? b.status.pending : !1;
      },
      isRepliesExpanderVisible: function (a) {
        var b = a.depth;
        a = a.state;
        if (b === 0 || a.__type !== "DEPTH_1") return !1;
        b = a.repliesExpander;
        return b != null;
      },
      pagerHasRealtimeComments: function (a) {
        var b = a.direction;
        a = a.state;
        var c =
          Object.values(a.newCommentsPage.visibleStates).find(function (a) {
            return a === "HIDDEN";
          }) != null;
        return b === "forward" ? (a.pagers.backward == null ? c : !1) : c;
      },
    };
    g._updaterDepth0_DO_NOT_USE = a;
    g._updaterDepth1_DO_NOT_USE = b;
    g.StateUpdaters = aa;
    g.Selectors = v;
  },
  98
);
__d(
  "CometUFICommentListGetDerivedStateFromProps",
  [
    "CometUFICommentListState",
    "CometUFICommentListStateConfig",
    "UFI2UserActivityIdleTimeout",
    "UserActivity",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = a.depth,
        c = a.feedback,
        d = a.topLevelCommentFeedback;
      a = a.topLevelFeedback;
      return b > 1
        ? (d == null ? void 0 : d.can_viewer_comment) === !0 &&
            (a == null ? void 0 : a.can_viewer_comment) === !0
        : b === 0
        ? Boolean(c.can_viewer_comment)
        : a != null &&
          a.can_viewer_comment === !0 &&
          c != null &&
          c.can_viewer_comment === !0;
    }
    function a(a, e) {
      var f = e.listState;
      e = e.mirroredProps;
      if (e === a) return { listState: f, mirroredProps: e };
      var g = e.connectionGeneration,
        j = e.feedback,
        k = e.isRefetchingConnection,
        l = e.topLevelCommentFeedback,
        m = e.topLevelFeedback;
      e = e.totalCount;
      var n = a.commentIDs,
        o = a.commentsByID,
        p = a.connectionGeneration,
        q = a.connectionPageInfo,
        r = a.depth,
        s = a.feedback,
        t = a.hiddenCommentIDs,
        u = a.isRefetchingConnection,
        v = a.shouldRenderComposerPreemptively,
        w = a.topLevelCommentFeedback,
        x = a.topLevelFeedback,
        y = a.totalCount,
        z = a,
        A = q.afterCount,
        B = q.beforeCount,
        C = q.hasNext,
        D = q.hasPrevious;
      q = q.pageSize;
      var E = f;
      E = d("CometUFICommentListState").StateUpdaters.setCommentsByID({
        args: { commentsByID: o, depth: r },
        state: E,
      });
      if (
        r === 0 &&
        d("CometUFICommentListState").Selectors.isListLoading({
          depth: r,
          state: E,
        })
      ) {
        k = k === !0 && u === !1;
        k &&
          (E = d("CometUFICommentListState").StateUpdaters.receiveRefetchList({
            args: {
              afterCount: A,
              beforeCount: B,
              canViewerComment: h({
                depth: r,
                feedback: s,
                topLevelCommentFeedback: w,
                topLevelFeedback: x,
              }),
              commentIDs: n,
              commentsByID: o,
              depth: r,
              hasNext: C,
              hasPrevious: D,
              hiddenCommentIDs: t,
              pageSize: q,
              shouldRenderComposerPreemptively: v,
              totalCount: y,
            },
            state: E,
          }));
        return { listState: E, mirroredProps: z };
      }
      if (p > g) {
        E = i(z, f);
        return { listState: E, mirroredProps: z };
      }
      u = a.commentIDsUpdatedToServerIDs;
      k = a.locallyComposedCommentIds;
      A = a.newlyCreatedCommentIDs;
      B = a.newlyHiddenCommentIDs;
      n = a.newlyReparentedToDeletedCommentsMap;
      o = a.newlyUnhiddenCommentIDs;
      C = a.realtimeCommentIds;
      D = a.removedCommentIDs;
      t = h({
        depth: r,
        feedback: j,
        topLevelCommentFeedback: l,
        topLevelFeedback: m,
      });
      q = h({
        depth: r,
        feedback: s,
        topLevelCommentFeedback: w,
        topLevelFeedback: x,
      });
      u.length > 0 &&
        u.forEach(function (a) {
          var b = a.clientID;
          a = a.serverID;
          E = d("CometUFICommentListState").StateUpdaters.setServerCommentID({
            args: { clientCommentID: b, depth: r, serverCommentID: a },
            state: E,
          });
        });
      t !== q &&
        (E = d("CometUFICommentListState").StateUpdaters.setCanViewerComment({
          args: { canViewerComment: q, depth: r },
          state: E,
        }));
      B.length > 0 &&
        (E = d("CometUFICommentListState").StateUpdaters.hideComments({
          args: { commentIDs: B, depth: r },
          state: E,
        }));
      o.length > 0 &&
        (E = d("CometUFICommentListState").StateUpdaters.unhideComments({
          args: { commentIDs: o, depth: r },
          state: E,
        }));
      if (A.length > 0) {
        v = a.connectionPageInfo.pageSize;
        for (var p = A.length - 1; p >= 0; p--) {
          g = A[p];
          if (C.has(g)) {
            E = d(
              "CometUFICommentListState"
            ).StateUpdaters.receiveRealtimeComment({
              args: {
                commentID: g,
                depth: r,
                hideCommentInPager:
                  !c("UserActivity").isActive(
                    b("UFI2UserActivityIdleTimeout")
                  ) || !a.isUFIVisible.current,
                totalCount: y,
              },
              state: E,
            });
            continue;
          }
          r === 0
            ? (E = d(
                "CometUFICommentListState"
              ).StateUpdaters.receiveNewComment({
                args: {
                  commentID: g,
                  commentsComposedByThisUFI: k,
                  depth: r,
                  pageSize: v,
                  prevTotalCount: e,
                  totalCount: y,
                },
                state: E,
              }))
            : (E = d(
                "CometUFICommentListState"
              ).StateUpdaters.receiveNewComment({
                args: {
                  commentID: g,
                  commentsComposedByThisUFI: k,
                  depth: r,
                  minCountToShowCollapser: d("CometUFICommentListStateConfig")
                    .MIN_REPLIES_TO_SHOW_COLLAPSER,
                  pageSize: v,
                  prevTotalCount: e,
                  totalCount: y,
                },
                state: E,
              }));
        }
      } else
        n.size > 0 &&
          n.forEach(function (a, b) {
            E = d(
              "CometUFICommentListState"
            ).StateUpdaters.receiveReparentedComment({
              args: { commentID: b, depth: r, removedID: a },
              state: E,
            });
          }),
          D.length > 0 &&
            D.forEach(function (a) {
              r === 0
                ? (E = d(
                    "CometUFICommentListState"
                  ).StateUpdaters.deleteComment({
                    args: { commentID: a, depth: r },
                    state: E,
                  }))
                : (E = d(
                    "CometUFICommentListState"
                  ).StateUpdaters.deleteComment({
                    args: {
                      commentID: a,
                      depth: r,
                      minCountToShowCollapser: d(
                        "CometUFICommentListStateConfig"
                      ).MIN_REPLIES_TO_SHOW_COLLAPSER,
                    },
                    state: E,
                  }));
            });
      return { listState: E, mirroredProps: z };
    }
    function i(a, b) {
      var e = a.commentIDs,
        f = a.commentsByID,
        g = a.connectionPageInfo,
        i = g.afterCount,
        j = g.beforeCount,
        k = g.hasNext,
        l = g.hasPrevious;
      g = g.pageSize;
      var m = a.depth,
        n = a.feedback,
        o = a.hiddenCommentIDs,
        p = a.isInitiallyExpanded,
        q = a.shouldRenderComposerPreemptively,
        r = a.topLevelCommentFeedback,
        s = a.topLevelFeedback,
        t = a.totalCount,
        u = a.viewOption;
      r = h({
        depth: m,
        feedback: n,
        topLevelCommentFeedback: r,
        topLevelFeedback: s,
      });
      if (n.id == null)
        throw c("unrecoverableViolation")(
          "A feedback target cannot have a null id",
          "ufi2"
        );
      j = {
        afterCount: i,
        beforeCount: j,
        canViewerComment: r,
        commentIDs: e,
        commentsByID: f,
        feedbackTargetID: n.id,
        hasNext: k,
        hasPrevious: l,
        hiddenCommentIDs: o,
        initiallyExpanded: p,
        pageSize: g,
        shouldRenderComposerPreemptively: q,
        topLevelFeedbackTargetID:
          (i = s == null ? void 0 : s.id) != null ? i : n.id,
        totalCount: t,
        viewOption: u,
      };
      if (m === 0) {
        return d("CometUFICommentListState").StateUpdaters.getInitialState({
          args: babelHelpers["extends"]({}, j, { depth: 0 }),
          state: (r = b) != null ? r : null,
        });
      }
      f = (e = a.commentParent) == null ? void 0 : e.id;
      if (f == null)
        throw c("unrecoverableViolation")(
          "A nested comment list must have a parent comment ID",
          "ufi2"
        );
      return d("CometUFICommentListState").StateUpdaters.getInitialState({
        args: babelHelpers["extends"]({}, j, {
          depth: 1,
          minCountToShowCollapser: d("CometUFICommentListStateConfig")
            .MIN_REPLIES_TO_SHOW_COLLAPSER,
          parentCommentID: f,
        }),
        state: (k = b) != null ? k : null,
      });
    }
    g.getCanViewerComment = h;
    g.getDerivedStateFromProps = a;
    g.getInitialState = i;
  },
  98
);
__d(
  "CometUFICommentsProviderState",
  ["FBLogger", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, c) {
      if (b) {
        var d = a == null ? void 0 : a.client_id;
        if (d != null && b.has(d)) return !0;
      }
      if (c) {
        b = a == null ? void 0 : a.id;
        if (b != null && c.has(b)) return !0;
      }
      return (
        a != null && (a.optimistic_error != null || a.optimistic_action != null)
      );
    }
    function i(a) {
      return !a || a.spam_display_mode == null
        ? !1
        : (a == null ? void 0 : a.spam_display_mode) !== "none";
    }
    function a(a) {
      a =
        (a = a.feedback) == null
          ? void 0
          : (a = a.display_comments) == null
          ? void 0
          : a.before_count;
      return typeof a === "number" ? a : null;
    }
    function j(a) {
      return a.filter(function (a) {
        return a.startsWith("client:");
      });
    }
    function k(a) {
      var b = {};
      a = a
        ? a
            .map(function (a) {
              if (!a) {
                c("FBLogger")("ufi2").warn(
                  "CometUFICommentsProviderState.getCommentsFromEdges(...): Received null edge from comments connection."
                );
                return null;
              }
              a = a.node;
              if (!a) {
                c("FBLogger")("ufi2").warn(
                  "CometUFICommentsProviderState.getCommentsFromEdges(...): Received null comment from comments connection."
                );
                return null;
              }
              if (a.id != null) {
                var d = a.id;
                b[d] = a;
                return d;
              } else {
                c("FBLogger")("ufi2").warn(
                  "CometUFICommentsProviderState.getCommentsFromEdges(...): Received comment with null id from comments connection."
                );
                return null;
              }
            })
            .filter(Boolean)
        : [];
      if (a.length > Object.keys(b).length) {
        c("FBLogger")("ufi2").warn(
          "CometUFICommentsProviderState.getCommentsFromEdges(...): Received duplicate comments from comments connection"
        );
        var d = new Set();
        return {
          commentIDs: a.filter(function (a) {
            if (d.has(a)) return !1;
            d.add(a);
            return !0;
          }),
          commentsByID: b,
        };
      }
      return { commentIDs: a, commentsByID: b };
    }
    function l(a, b, c) {
      a = Object.keys(a);
      a = a
        .filter(function (a) {
          return !Object.prototype.hasOwnProperty.call(b, a);
        })
        .filter(function (a) {
          return !c.some(function (b) {
            return b.clientID === a;
          });
        });
      return a;
    }
    function m(a, b, c, d) {
      var e = [];
      c = a.filter(function (a) {
        return !a.startsWith("client:");
      });
      var f = function () {
        if (h) {
          if (i >= g.length) return "break";
          a = g[i++];
        } else {
          i = g.next();
          if (i.done) return "break";
          a = i.value;
        }
        var c = a,
          f = d[c],
          j = f && f.client_id != null ? f.client_id : null;
        j != null &&
          b.find(function (a) {
            return a === j;
          }) &&
          e.push({ clientID: j, serverID: c });
      };
      for (
        var g = c,
          h = Array.isArray(g),
          i = 0,
          g = h
            ? g
            : g[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        c = f();
        if (c === "break") break;
      }
      return e;
    }
    function n(a, b, d, e, f, g) {
      if (d.length <= b.length) return [];
      var i = a[d[0]];
      if (!i) {
        c("FBLogger")("ufi2").warn(
          "CometUFICommentsProviderState.getNewlyCreatedCommentIDs(...): Next most recent comment not found"
        );
        return [];
      }
      i = b.filter(function (b) {
        return h(a[b], e, f);
      });
      b = d.filter(function (b) {
        return h(a[b], e, f);
      });
      d = b.length - i.length > 0;
      if (!d) return [];
      if (i.length === 0) return b;
      var j = new Set(i);
      return b
        .filter(function (a) {
          return !j.has(a);
        })
        .filter(function (a) {
          return !g.has(a);
        });
    }
    function o(a, b) {
      return b.filter(function (b) {
        b = a[b];
        return b != null && i(b);
      });
    }
    function p(a, b, c) {
      return c.filter(function (c) {
        var d = a[c];
        c = b[c];
        return d != null && i(d) === !1 && i(c) === !0;
      });
    }
    function q(a, b, c) {
      return c.filter(function (c) {
        var d = a[c];
        c = b[c];
        return d != null && i(d) === !0 && i(c) === !1;
      });
    }
    function r(a, b, c) {
      var d = new Map();
      c.forEach(function (c, e) {
        b.includes(e) && !a.includes(e) && d.set(e, c);
      });
      return d;
    }
    function b(a, b) {
      var d = a.depth,
        e = a.locallyComposedCommentIds,
        f = a.realtimeCommentIds,
        g = a.reparentedToDeletedCommentsMap,
        h = b.commentsByID,
        i = b.commentIDs;
      a = k(a.edges);
      var s = a.commentIDs;
      a = a.commentsByID;
      var t = i.length,
        u = b.clientCommentIDs,
        v = j(s),
        w = s.length,
        x = b.selectedViewOption;
      b = b.isRefetchingConnection;
      var y = o(a, s),
        z = p(h, a, s),
        A = q(h, a, s);
      u = m(s, u, v, a);
      g = r(i, s, g);
      w = w > t;
      t = w ? n(a, i, s, e, f, g) : [];
      w = !b;
      i = w ? l(h, a, u) : [];
      e = {
        clientCommentIDs: v,
        commentIDs: s,
        commentIDsUpdatedToServerIDs: u,
        commentsByID: a,
        hiddenCommentIDs: y,
        isRefetchingConnection: b,
        newlyCreatedCommentIDs: t,
        newlyHiddenCommentIDs: z,
        newlyReparentedToDeletedCommentsMap: g,
        newlyUnhiddenCommentIDs: A,
        removedCommentIDs: i,
        selectedViewOption: x,
      };
      c("gkx")("676930") &&
        window.__enableUFI2CommentsListLogging === !0 &&
        (console.groupCollapsed(
          "%cUFI2 Relay Comments Connection Update at depth " + d + ":",
          ";background-color:#75DBCD;color:#1F2D3D;opacity:0.7;font-weight:bold;"
        ),
        console.groupEnd());
      return e;
    }
    function d(a) {
      a = a.edges;
      a = k(a);
      var b = a.commentIDs;
      a = a.commentsByID;
      var c = j(b),
        d = o(a, b);
      return {
        clientCommentIDs: c,
        commentIDs: b,
        commentIDsUpdatedToServerIDs: [],
        commentsByID: a,
        hiddenCommentIDs: d,
        isRefetchingConnection: !1,
        newlyCreatedCommentIDs: [],
        newlyHiddenCommentIDs: [],
        newlyReparentedToDeletedCommentsMap: new Map(),
        newlyUnhiddenCommentIDs: [],
        removedCommentIDs: [],
        selectedViewOption: null,
      };
    }
    g.getBeforeCount = a;
    g.getClientCommentIDs = j;
    g.getCommentsFromEdges = k;
    g.getRemovedCommentIDs = l;
    g.getCommentIDsUpdatedToServerIDs = m;
    g.getNewlyCreatedCommentIDs = n;
    g.getHiddenCommentIDs = o;
    g.getNewlyHiddenCommentIDs = p;
    g.getNewlyUnhiddenCommentIDs = q;
    g.getNewlyReparentedCommentIDs = r;
    g.getDerivedStateFromProps = b;
    g.getInitialState = d;
  },
  98
);
__d(
  "UFI2RealtimeContext",
  ["react", "warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(function () {
      c("warning")(
        !1,
        "UFI2RealtimeContext: Using default context. Put an instance of `UFI2RealtimeRoot` in the tree."
      );
      return { dispose: function () {} };
    });
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "UFI2RealtimeContainer.react",
  ["UFI2RealtimeContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect;
    function a(a) {
      var b = a.children;
      a = a.subscribe;
      var d = i(c("UFI2RealtimeContext"));
      return h.jsx(k, { factory: d, subscribe: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var k = function (a) {
        var b = a.factory,
          c = a.subscribe;
        a = a.children;
        j(
          function () {
            var a = b(new l(c));
            return function () {
              a.dispose();
            };
          },
          [b, c]
        );
        return (a = a) != null ? a : null;
      },
      l = (function () {
        function a(a) {
          this.$1 = a;
        }
        var b = a.prototype;
        b.subscribe = function () {
          this.$2 || (this.$2 = this.$1());
        };
        b.unsubscribe = function () {
          this.$2 && (this.$2.dispose(), (this.$2 = null));
        };
        return a;
      })();
    g["default"] = a;
  },
  98
);
__d(
  "UFI2RelayConnectionRenderer.react",
  [
    "invariant",
    "RelayRuntime",
    "react",
    "react-relay/ReactRelayContext",
    "react-relay/ReactRelayQueryFetcher",
    "react-relay/RelayContext",
    "react-relay/readContext",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this, b) || this;
        e.$1 = !1;
        e.$2 = !1;
        e.$6 = function (a, b) {
          if (!e.$7() || e.$1) return;
          e.$4("forward", a, b || {});
        };
        e.$8 = function (a, b) {
          if (!e.$9() || e.$2) return;
          e.$4("backward", a, b || {});
        };
        e.$7 = function () {
          var a = e.props.connection;
          a = i(a);
          return a ? a.hasNext : !1;
        };
        e.$9 = function () {
          var a = e.props.connection;
          a = i(a);
          return a ? a.hasPrevious : !1;
        };
        e.$5 = function (a, b) {
          a === "forward"
            ? ((e.$1 = !0), e.forceUpdate(b))
            : a === "backward" && ((e.$2 = !0), e.forceUpdate(b));
        };
        var f = d("react-relay/RelayContext").assertRelayContext(
          c("react-relay/readContext")(c("react-relay/ReactRelayContext"))
        );
        e.state = {
          mirroredRelayContext: f,
          prevProps: b,
          queryFetchers: {
            backward: new (c("react-relay/ReactRelayQueryFetcher"))(),
            forward: new (c("react-relay/ReactRelayQueryFetcher"))(),
          },
        };
        return e;
      }
      b.getDerivedStateFromProps = function (a, b) {
        var e = d("react-relay/RelayContext").assertRelayContext(
          c("react-relay/readContext")(c("react-relay/ReactRelayContext"))
        );
        if (
          b.prevProps.paginationQuery !== a.paginationQuery ||
          b.mirroredRelayContext.environment !== e.environment
        ) {
          b = b.queryFetchers;
          return {
            mirroredRelayContext: e,
            prevProps: a,
            queryFetchers: babelHelpers["extends"]({}, b),
          };
        }
        return null;
      };
      var e = b.prototype;
      e.componentDidUpdate = function (a, b) {
        this.state.queryFetchers !== b.queryFetchers &&
          (b.queryFetchers.backward.dispose(),
          b.queryFetchers.forward.dispose());
      };
      e.componentWillUnmount = function () {
        var a = this.state.queryFetchers;
        a.backward.dispose();
        a.forward.dispose();
      };
      e.shouldComponentUpdate = function (a, b) {
        return !0;
      };
      e.$3 = function (a, b) {
        a === "forward"
          ? ((this.$1 = !1), this.forceUpdate(b))
          : a === "backward" && ((this.$2 = !1), this.forceUpdate(b));
      };
      e.$4 = function (a, b, d) {
        var e = this,
          f = this.props,
          g = f.connection;
        f = f.paginationQuery;
        var k = this.state.queryFetchers;
        k = k[a];
        g = i(g);
        g || h(0, 1775);
        b = j(a, b, g, d);
        if (b == null) return;
        var l = babelHelpers["extends"]({}, b, {
          UFI2CommentsProvider_commentsKey: this.props.commentsKey,
        });
        g = this.state.mirroredRelayContext.environment;
        var m = d.onLoaded;
        b = c("RelayRuntime").getRequest(f);
        d = c("RelayRuntime").createOperationDescriptor(b, l);
        var n = !1;
        try {
          var o = k.fetch({
            environment: g,
            onDataChange: function (b) {
              var c = b.error,
                d = b.snapshot;
              if (n) return;
              n = !0;
              e.$3(a, function () {
                m &&
                  m({
                    data: d == null ? void 0 : d.data,
                    error: c,
                    variables: l,
                  });
              });
            },
            operation: d,
          });
          o
            ? ((n = !0),
              this.$3(a, function () {
                m && m({ data: o.data, variables: l });
              }))
            : this.$5(a);
        } catch (a) {
          m && m({ error: a, variables: l });
        }
      };
      e.render = function () {
        var a = this.props.connection;
        if (!a) return null;
        a = a.edges;
        a = {
          edges: a,
          hasNext: this.$7(),
          hasPrevious: this.$9(),
          isLoadingNext: this.$1,
          isLoadingPrevious: this.$2,
          loadNext: this.$6,
          loadPrevious: this.$8,
        };
        return this.props.children(a);
      };
      return b;
    })(a.Component);
    function i(a) {
      if (!a) return null;
      var b = c("RelayRuntime").ConnectionInterface.get(),
        d = b.PAGE_INFO,
        e = b.HAS_NEXT_PAGE,
        f = b.HAS_PREV_PAGE,
        g = b.END_CURSOR;
      b = b.START_CURSOR;
      a = a[d];
      a || h(0, 1776);
      return {
        backwardCursor: a[b],
        forwardCursor: a[g],
        hasNext: a[e],
        hasPrevious: a[f],
      };
    }
    function j(a, b, c, d) {
      switch (a) {
        case "backward":
          a = b;
          var e = c.backwardCursor;
          return typeof d.queryVariables === "function"
            ? d.queryVariables({ after: null, before: e, first: null, last: a })
            : babelHelpers["extends"]({}, d.queryVariables, {
                after: null,
                before: e,
                first: null,
                last: a,
              });
        case "forward":
          e = b;
          a = c.forwardCursor;
          return typeof d.queryVariables === "function"
            ? d.queryVariables({ after: a, before: null, first: e, last: null })
            : babelHelpers["extends"]({}, d.queryVariables, {
                after: a,
                before: null,
                first: e,
                last: null,
              });
        default:
          throw new Error(
            "UFI2RelayConnectionRenderer: direction must be one of backward or forward"
          );
      }
    }
    g["default"] = b;
  },
  98
);
__d(
  "CometUFICommentsProvider.react",
  [
    "CometRelay",
    "CometUFICommentsProviderPaginationQuery.graphql",
    "CometUFICommentsProviderReadCommentsPageQuery.graphql",
    "CometUFICommentsProviderState",
    "CometUFICommentsProvider_displayCommentsHighlightedComments.graphql",
    "CometUFICommentsProvider_displayCommentsMetadata.graphql",
    "CometUFICommentsProvider_feedback.graphql",
    "FBLogger",
    "RelayModern",
    "RelayUFI2CommentsKeyContext",
    "SiteData",
    "UFI2RealtimeContainer.react",
    "UFI2RelayConnectionRenderer.react",
    "gkx",
    "orEmptyArray",
    "react",
    "relay-runtime",
    "requireDeferred",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k,
      l,
      m = d("react"),
      n = c("requireDeferred")("CometUFICreateCommentSubscription").__setRef(
        "CometUFICommentsProvider.react"
      ),
      o = c("requireDeferred")(
        "CometUFIPegasusCreateCommentSubscription"
      ).__setRef("CometUFICommentsProvider.react"),
      p = 50,
      q = (function (e) {
        babelHelpers.inheritsLoose(a, e);
        function a(a) {
          var b;
          b = e.call(this, a) || this;
          b.state = d("CometUFICommentsProviderState").getInitialState({
            edges: b.props.edges,
            feedback: b.props.feedback,
          });
          b.commentOrdering = null;
          b.replyCommentOrdering = null;
          b.$1 = function (a) {
            var d = a.count,
              e = a.direction,
              f = a.onCommentsFetched;
            a = b.props;
            var g = a.depth,
              h = a.displayCommentsContext,
              i = a.feedback,
              j = a.feedbackSource,
              k = a.feedLocation,
              l = a.focusCommentID,
              m = a.isLoadingNext,
              n = a.isLoadingPrevious,
              o = a.loadNext,
              p = a.loadPrevious,
              q = a.topLevelViewOption;
            a = a.useDefaultActor;
            var r = b.state.selectedViewOption;
            i = i == null ? void 0 : i.id;
            if (i == null) {
              c("FBLogger")("ufi2").mustfix(
                "CometUFICommentsProvider: Cant fetch without a feedback id"
              );
              return;
            }
            if (e === "forward" && m) return;
            if (e === "backward" && n) return;
            n = {
              displayCommentsContextEnableComment:
                h == null ? void 0 : h.enableComment,
              displayCommentsContextIsAdPreview:
                h == null ? void 0 : h.isAdPreview,
              displayCommentsContextIsAggregatedShare:
                h == null ? void 0 : h.isAggregatedShare,
              displayCommentsContextIsStorySet:
                h == null ? void 0 : h.isStorySet,
              displayCommentsFeedbackContext:
                h == null ? void 0 : h.feedbackContext,
              feedLocation: k,
              feedbackID: i,
              feedbackSource: j,
              focusCommentID: l,
              includeHighlightedComments: !1,
              includeNestedComments: g === 0,
              initialViewOption: b.commentOrdering,
              isComet: !0,
              isInitialFetch: !1,
              isPaginating: !0,
              scale: c("SiteData").pr,
              topLevelViewOption: (m = r) != null ? m : q,
              useDefaultActor: a,
              viewOption: r,
            };
            if (e === "backward")
              p(d, {
                onLoaded: function (a) {
                  var c = a.error;
                  a = a.variables;
                  return b.$2({
                    direction: e,
                    error: c,
                    onCommentsFetched: f,
                    variables: a,
                  });
                },
                queryVariables: n,
              });
            else if (e === "forward")
              o(d, {
                onLoaded: function (a) {
                  var c = a.error;
                  a = a.variables;
                  return b.$2({
                    direction: e,
                    error: c,
                    onCommentsFetched: f,
                    variables: a,
                  });
                },
                queryVariables: n,
              });
            else
              throw c("unrecoverableViolation")(
                "CometUFICommentsProvider: Invalid direction",
                "ufi2"
              );
          };
          b.$3 = function (a) {
            var d = b.state.commentsByID[a];
            if (d == null) {
              c("FBLogger")("ufi2").warn(
                "CometUFICommentsProvider: Could not find requested comment locally: %s",
                a
              );
              return null;
            }
            return d;
          };
          b.$5 = function (a) {
            var d = a.onComplete,
              e = a.queryVariables;
            a = b.props;
            var f = a.depth,
              g = a.displayCommentsContext,
              h = a.feedback,
              i = a.feedbackSource,
              j = a.feedLocation,
              k = a.focusCommentID,
              l = a.relay,
              m = a.topLevelViewOption,
              n = a.useDefaultActor,
              o = b.state.selectedViewOption,
              p = h == null ? void 0 : h.id;
            if (p == null) {
              c("FBLogger")("ufi2").mustfix(
                "CometUFICommentsProvider: Cant refetch without a feedback id"
              );
              return;
            }
            b.setState({ isRefetchingConnection: !0 }, function () {
              l.refetch(
                function (a) {
                  return babelHelpers["extends"](
                    {},
                    a,
                    {
                      displayCommentsContextEnableComment:
                        g == null ? void 0 : g.enableComment,
                      displayCommentsContextIsAdPreview:
                        g == null ? void 0 : g.isAdPreview,
                      displayCommentsContextIsAggregatedShare:
                        g == null ? void 0 : g.isAggregatedShare,
                      displayCommentsContextIsStorySet:
                        g == null ? void 0 : g.isStorySet,
                      displayCommentsFeedbackContext:
                        g == null ? void 0 : g.feedbackContext,
                      feedLocation: j,
                      feedbackID: p,
                      feedbackSource: i,
                      focusCommentID: k,
                      includeHighlightedComments:
                        f > 0 &&
                        ((e == null ? void 0 : e.isPaginating) == null ||
                          (e == null ? void 0 : e.isPaginating) === !1),
                      includeNestedComments: !0,
                      isComet: !0,
                      isInitialFetch: !1,
                      scale: c("SiteData").pr,
                      topLevelViewOption: (a = o) != null ? a : m,
                      useDefaultActor: n,
                      viewOption: o,
                    },
                    e
                  );
                },
                null,
                function (a) {
                  return b.$4(a || null, d);
                }
              );
            });
          };
          b.$6 = function (a) {
            var c = a.onComplete;
            a = a.viewOption;
            b.setState({ selectedViewOption: a }, function () {
              b.$5({ onComplete: c, queryVariables: { isPaginating: !1 } });
            });
          };
          b.$7 = function () {
            var a = b.props,
              d = a.commentsKey,
              e = a.depth,
              f = a.feedback,
              g = a.feedbackSource,
              h = a.feedLocation,
              i = a.focusCommentID,
              j = a.onRealtimeCommentReceived,
              k = a.relay,
              l = a.useDefaultActor,
              m = b.replyCommentOrdering;
            if (c("gkx")("1352852") && (g === 1 || g === 69)) return null;
            var p = f == null ? void 0 : f.id;
            a = f == null ? void 0 : f.subscription_target_id;
            if (e === 1 || p == null || a == null) return null;
            var q = !1,
              r = {
                dispose: function () {
                  q = !0;
                },
              };
            !0 === c("gkx")("1703994")
              ? o
                  .load()
                  .then(function (a) {
                    if (q) return;
                    r.dispose = a.subscribe({
                      commentsKey: d,
                      environment: k.environment,
                      feedLocation: h,
                      feedbackSource: g,
                      focusCommentID: i,
                      isComet: !0,
                      onNext: function (a) {
                        j &&
                          j(
                            a == null
                              ? void 0
                              : (a = a.pegasus_comment_create_subscribe) == null
                              ? void 0
                              : a.feedback_comment_edge
                          );
                      },
                      topLevelFeedbackTargetID: p,
                      useDefaultActor: l,
                    }).dispose;
                  })
                  ["catch"](function (a) {
                    return c("FBLogger")("ufi2")
                      .catching(a)
                      .mustfix(
                        "Error subscribing to CometUFIPegasusCreateCommentSubscription,               this is probably because the arguments didn't line up with what               we're expected or someone has been tinkering with its               implementation"
                      );
                  })
              : n
                  .load()
                  .then(function (a) {
                    if (q) return;
                    r.dispose = a.subscribe({
                      commentsKey: d,
                      environment: k.environment,
                      feedLocation: h,
                      feedbackSource: g,
                      focusCommentID: i,
                      isComet: !0,
                      onNext: function (a) {
                        j &&
                          j(
                            a == null
                              ? void 0
                              : (a = a.comment_create_subscribe) == null
                              ? void 0
                              : a.feedback_comment_edge
                          );
                      },
                      replyCommentOrdering: m,
                      topLevelFeedbackTargetID: p,
                      useDefaultActor: l,
                    }).dispose;
                  })
                  ["catch"](function (a) {
                    return c("FBLogger")("ufi2")
                      .catching(a)
                      .mustfix(
                        "Error subscribing to CometUFICreateCommentSubscription, this is probably because the arguments didn't line up with what we're expected or someone has been tinkering with its implementation"
                      );
                  });
            return r;
          };
          return b;
        }
        var f = a.prototype;
        f.$2 = function (a) {
          var b = a.direction,
            e = a.error,
            f = a.onCommentsFetched;
          a = a.variables;
          if (e) {
            f && f({ commentIDs: [], direction: b, error: e });
            return;
          }
          e = this.props.relay.environment;
          var g = d("relay-runtime").getRequest(s);
          g = d("relay-runtime").createOperationDescriptor(g, a);
          a = e.lookup(g.fragment).data;
          a = c("orEmptyArray")(
            a == null
              ? void 0
              : (e = a.feedback) == null
              ? void 0
              : (g = e.display_comments) == null
              ? void 0
              : g.edges
          );
          e = a
            .map(function (a) {
              return a == null ? void 0 : (a = a.node) == null ? void 0 : a.id;
            })
            .filter(Boolean);
          f && f({ commentIDs: e || [], direction: b, error: null });
        };
        f.$4 = function (a, b) {
          this.setState({ isRefetchingConnection: !1 }, function () {
            b && b(a);
          });
        };
        f.render = function () {
          var a,
            e,
            f,
            g = this.props,
            j = g.children,
            k = g.depth,
            l = g.feedback,
            n = g.hasNext,
            o = g.hasPrevious,
            q = g.isLoadingNext,
            r = g.isLoadingPrevious,
            s = g.reparentedToDeletedCommentsMap;
          g = g.topLevelViewOption;
          var t = this.state,
            u = t.commentIDs,
            v = t.commentIDsUpdatedToServerIDs,
            w = t.commentsByID,
            x = t.hiddenCommentIDs,
            y = t.isRefetchingConnection,
            z = t.newlyCreatedCommentIDs,
            A = t.newlyHiddenCommentIDs,
            B = t.newlyReparentedToDeletedCommentsMap,
            C = t.newlyUnhiddenCommentIDs,
            D = t.removedCommentIDs;
          t = t.selectedViewOption;
          var E = d("CometRelay").readInlineData(
            h !== void 0
              ? h
              : (h = b(
                  "CometUFICommentsProvider_displayCommentsMetadata.graphql"
                )),
            l == null ? void 0 : l.display_comments
          );
          a = (a = E == null ? void 0 : E.page_size) != null ? a : p;
          e =
            (e = E == null ? void 0 : E.ufi2_connection_generation) != null
              ? e
              : 0;
          f = {
            afterCount:
              (f =
                l == null
                  ? void 0
                  : (f = l.display_comments) == null
                  ? void 0
                  : f.after_count) != null
                ? f
                : 0,
            beforeCount:
              (f =
                l == null
                  ? void 0
                  : (f = l.display_comments) == null
                  ? void 0
                  : f.before_count) != null
                ? f
                : 0,
            hasNext: n,
            hasPrevious: o,
            pageSize: a,
          };
          n = null;
          try {
            o = d("CometRelay").readInlineData(
              i !== void 0
                ? i
                : (i = b(
                    "CometUFICommentsProvider_displayCommentsHighlightedComments.graphql"
                  )),
              l == null ? void 0 : l.display_comments
            );
            n = c("orEmptyArray")(o == null ? void 0 : o.highlighted_comments);
          } catch (a) {}
          var F = {};
          c("orEmptyArray")(
            E == null ? void 0 : E.expanded_sub_reply_parents
          ).forEach(function (a) {
            a = a == null ? void 0 : a.id;
            a != null && (F[a] = !0);
          });
          a = (E == null ? void 0 : E.is_initially_expanded) === !0;
          o =
            (l =
              l == null
                ? void 0
                : (o = l.display_comments) == null
                ? void 0
                : o.count) != null
              ? l
              : 0;
          l = (E == null ? void 0 : E.comment_order) || t;
          t =
            (t = E == null ? void 0 : E.reply_comment_order) != null ? t : null;
          this.commentOrdering = l;
          this.replyCommentOrdering = t;
          return m.jsx(c("UFI2RealtimeContainer.react"), {
            subscribe: this.$7,
            children: j({
              commentIDs: u,
              commentIDsUpdatedToServerIDs: v,
              commentsByID: w,
              connectionGeneration: e,
              connectionPageInfo: f,
              expandedSubReplyParents: F,
              fetchComments: this.$1,
              getComment: this.$3,
              hiddenCommentIDs: x,
              highlightedComments: n,
              isFetchingNextComments: q,
              isFetchingPreviousComments: r,
              isInitiallyExpanded: a,
              isRefetchingConnection: y,
              newlyCreatedCommentIDs: z,
              newlyHiddenCommentIDs: A,
              newlyReparentedToDeletedCommentsMap: B,
              newlyUnhiddenCommentIDs: C,
              refetchConnection: this.$5,
              removedCommentIDs: D,
              reparentedToDeletedCommentsMap: s,
              replyViewOption: t,
              setViewOption: this.$6,
              shouldRenderComposerPreemptively:
                (j =
                  E == null ? void 0 : E.should_render_composer_preemptively) !=
                null
                  ? j
                  : k === 0,
              topLevelViewOption: (u = g) != null ? u : null,
              totalCount: o,
              viewOption: l,
            }),
          });
        };
        return a;
      })(m.PureComponent);
    q.displayName = "CometUFICommentsProviderInternal";
    q.getDerivedStateFromProps = d(
      "CometUFICommentsProviderState"
    ).getDerivedStateFromProps;
    function a(a) {
      var b,
        d = (b = a.feedback) == null ? void 0 : b.display_comments;
      if (d == null) {
        return (b = a.fallback) != null ? b : null;
      }
      return m.jsx(c("RelayUFI2CommentsKeyContext").Consumer, {
        children: function (b) {
          if (b == null && c("gkx")("1510195"))
            throw c("unrecoverableViolation")(
              "CometUFICommentsProvider expected RelayUFI2CommentsKeyContext to be set",
              "ufi2"
            );
          return m.jsx(c("UFI2RelayConnectionRenderer.react"), {
            commentsKey: b,
            connection: d,
            paginationQuery: r,
            children: function (c) {
              return m.jsx(
                q,
                babelHelpers["extends"]({ commentsKey: b, depth: 0 }, a, c)
              );
            },
          });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var r =
        j !== void 0
          ? j
          : (j = b("CometUFICommentsProviderPaginationQuery.graphql")),
      s =
        k !== void 0
          ? k
          : (k = b("CometUFICommentsProviderReadCommentsPageQuery.graphql"));
    e = d("RelayModern").createRefetchContainer(
      a,
      {
        feedback:
          l !== void 0
            ? l
            : (l = b("CometUFICommentsProvider_feedback.graphql")),
      },
      r
    );
    g["default"] = e;
  },
  98
);
__d(
  "CometUFIVisibilityContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ current: !0 });
    g["default"] = b;
  },
  98
);
__d(
  "CometUFICommentList.react",
  [
    "fbt",
    "CometRelay",
    "CometUFIActionsContext",
    "CometUFICommentListGetDerivedStateFromProps",
    "CometUFICommentListState",
    "CometUFICommentListStateConfig",
    "CometUFICommentList_feedback.graphql",
    "CometUFICommentListenersContext",
    "CometUFICommentsProvider.react",
    "CometUFIReparentedCommentIDsContext.react",
    "CometUFIVisibilityContext",
    "FBLogger",
    "QE2Logger",
    "SearchableEntry",
    "SubscriptionsHandler",
    "debounce",
    "emptyFunction",
    "gkx",
    "qex",
    "react",
    "recoverableViolation",
    "scrollIntoView",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useContext,
      l = { behavior: "smooth", verticalAlign: "center" };
    function m(a, b) {
      var e;
      e = ((e = a.associated_group) == null ? void 0 : e.visibility) === "OPEN";
      e &&
        c("gkx")("1840625") &&
        d("QE2Logger").logExposureForUser(
          "public_communities_privacy_comprehension_2020"
        );
      return (e = a.comment_composer_placeholder) != null
        ? e
        : b > 0
        ? h._("Write a reply\u2026")
        : h._("Write a comment\u2026");
    }
    var n = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a) {
        var e;
        e = b.call(this, a) || this;
        e.state = {
          listState: d(
            "CometUFICommentListGetDerivedStateFromProps"
          ).getInitialState(e.props, void 0),
          mirroredProps: e.props,
        };
        e.$2 = null;
        e.$5 = null;
        e.$6 = new Map();
        e.$7 = null;
        e.$8 = new Map();
        e.$4 = new Map();
        e.$9 = {};
        e.$10 = !1;
        e.$11 = !1;
        e.$12 = !1;
        e.$13 = !1;
        e.$14 = {};
        e.$3 = new (c("SubscriptionsHandler"))();
        e.$17 = function (a, b) {
          e.$4.set(a, b);
        };
        e.$18 = function () {
          var a = e.props.feedback.id;
          a != null && e.props.commentListenerContext.isInitialized
            ? e.props.commentListenerContext
                .getEmitter(a, e.props.feedLocation)
                .emit("comments_collapse", a)
            : a == null &&
              e.props.commentListenerContext.isInitialized &&
              c("recoverableViolation")(
                "Feedback ID Required to emit events for CometUFICommentList",
                "ufi2"
              );
          a = e.props;
          var b = a.depth,
            f = a.totalCount;
          e.$19(function (a) {
            return d("CometUFICommentListState").StateUpdaters.collapseList({
              args: { depth: b, totalCount: f },
              state: a,
            });
          });
        };
        e.$20 = function (a) {
          var b = a.focusComposer,
            f = a.preventFetch,
            g = a.scrollToComposer;
          a = e.props.feedback.id;
          a != null && e.props.commentListenerContext.isInitialized
            ? e.props.commentListenerContext
                .getEmitter(a, e.props.feedLocation)
                .emit("comments_expand", a)
            : a == null &&
              e.props.commentListenerContext.isInitialized &&
              c("recoverableViolation")(
                "Feedback ID Required to emit events for CometUFICommentList",
                "ufi2"
              );
          a = e.props;
          var h = a.connectionPageInfo.pageSize,
            i = a.depth,
            j = a.fetchComments,
            k = a.refetchConnection,
            l = a.totalCount;
          a = e.state.listState;
          f !== !0 &&
            d("CometUFICommentListState").Selectors.isListExpanded({
              depth: i,
              state: a,
            }) &&
            d("CometUFICommentListState").Selectors.getVisibleCommentsCount({
              depth: i,
              state: a,
            }) === 0 &&
            l > 0 &&
            (a.pagers.forward || a.pagers.backward) &&
            ((f = c("qex")._("1568103")) != null ? f : !1) &&
            (a.pagers.forward ? e.$21 : e.$22)({
              onCommentsRendered: function () {
                return e.$20({
                  focusComposer: b,
                  preventFetch: !0,
                  scrollToComposer: g,
                });
              },
            });
          b && (e.$10 = !0);
          g === !0 && (e.$11 = !0);
          e.$15();
          var m = !1;
          e.$19(
            function (a) {
              var b =
                (i === 0 &&
                  d("CometUFICommentListState").Selectors.isListLoading({
                    depth: i,
                    state: a,
                  })) ||
                (i !== 0 &&
                  d(
                    "CometUFICommentListState"
                  ).Selectors.isRepliesExpanderLoading({ depth: i, state: a }));
              if (b) return null;
              b =
                i === 0
                  ? d("CometUFICommentListState").StateUpdaters.expandList({
                      args: { depth: i, totalCount: l },
                      state: a,
                    })
                  : d("CometUFICommentListState").StateUpdaters.expandList({
                      args: {
                        depth: i,
                        minCountToShowCollapser: d(
                          "CometUFICommentListStateConfig"
                        ).MIN_REPLIES_TO_SHOW_COLLAPSER,
                        totalCount: l,
                      },
                      state: a,
                    });
              if (i === 0) {
                a = d("CometUFICommentListState").Selectors.isListLoading({
                  depth: i,
                  state: b,
                });
                m = a;
                return b;
              }
              a = d(
                "CometUFICommentListState"
              ).Selectors.isRepliesExpanderLoading({ depth: i, state: b });
              m = a;
              return b;
            },
            function (a) {
              if (!m) return;
              if (i === 0) {
                k({});
                return;
              }
              a = d("CometUFICommentListState").Selectors.getCountForFetch({
                depth: i,
                direction: "forward",
                pageSize: h,
                state: a,
              });
              if (a == null) return;
              j({ count: a, direction: "forward", onCommentsFetched: e.$23 });
            }
          );
        };
        e.$24 = function (a) {
          var b = e.props.depth;
          e.$19(function (c) {
            return d(
              "CometUFICommentListState"
            ).StateUpdaters.expandHiddenComments({
              args: { commentIDs: a, depth: b },
              state: c,
            });
          });
        };
        e.$25 = function (a) {
          var b = e.props,
            c = b.connectionPageInfo.pageSize,
            f = b.depth,
            g = b.fetchComments;
          b = b.totalCount;
          var h = e.state.listState;
          if (
            !d("CometUFICommentListState").Selectors.canFetchInDirection({
              depth: f,
              direction: a,
              state: h,
              totalCount: b,
            })
          )
            return;
          b = d("CometUFICommentListState").Selectors.getCountForFetch({
            depth: f,
            direction: a,
            pageSize: c,
            state: h,
          });
          if (b == null) return;
          g({ count: b, direction: a, onCommentsFetched: e.$23 });
        };
        e.$26 = function () {
          var a = e.props,
            b = a.depth,
            d = a.feedback,
            f = a.feedbackSource,
            g = a.feedLocation,
            h = a.focusCommentID;
          a = a.useDefaultActor;
          if (d.id == null)
            throw c("unrecoverableViolation")(
              "CometUFICommentList: Expected feedback to have an id",
              "ufi2"
            );
          return {
            feedLocation: g,
            feedback: d,
            feedbackSource: f,
            feedbackTargetID: d.id,
            focusCommentID: h,
            placeholder: m(d, b),
            useDefaultActor: a,
          };
        };
        e.$27 = function (a) {
          var b = e.props,
            c = b.depth,
            d = b.feedback,
            f = b.feedbackSource,
            g = b.topLevelFeedback;
          b = b.useDefaultActor;
          g = g == null ? void 0 : g.id;
          a = {
            addConstantHighlightCallbacks: e.$28,
            comment: a,
            depth: c,
            feedback: d,
            feedbackSource: f,
            onReplyToComment: e.handleReplyToComment,
            removeConstantHighlightCallback: e.$29,
            useDefaultActor: b,
          };
          return g == null
            ? a
            : babelHelpers["extends"]({}, a, { topLevelFeedbackID: g });
        };
        e.$31 = function () {
          var a = e.props,
            b = a.commentParent,
            c = a.depth,
            d = a.feedback,
            f = a.feedbackSource,
            g = a.feedLocation,
            h = a.focusCommentID,
            i = a.topLevelFeedback;
          a = a.useDefaultActor;
          i = i == null ? void 0 : i.id;
          b = {
            ariaLabel: e.$30(),
            commentParent: b,
            componentRef: c === 0 ? e.$32 : e.$33,
            feedLocation: g,
            feedback: d,
            feedbackSource: f,
            focusCommentID: h,
            onBlur: e.$34,
            onFocus: e.$35,
            placeholder: m(d, c),
            useDefaultActor: a,
          };
          return i == null
            ? b
            : babelHelpers["extends"]({}, b, { topLevelFeedbackID: i });
        };
        e.$37 = function () {
          return e.$36("forward");
        };
        e.$38 = function () {
          return e.$36("backward");
        };
        e.$39 = function () {
          var a = e.props,
            b = a.depth,
            c = a.environment;
          a = a.totalCount;
          var f = e.state.listState;
          return {
            Selectors: d("CometUFICommentListState").Selectors,
            depth: b,
            environment: c,
            expandHiddenComments: e.$24,
            listState: f,
            totalCount: a,
          };
        };
        e.$40 = function (a) {
          var b = e.props,
            d = b.depth,
            f = b.displayCommentsContext,
            g = b.feedback,
            h = b.feedbackSource,
            i = b.feedLocation,
            j = b.focusCommentID,
            k = b.getComment,
            l = b.locallyComposedCommentIds,
            m = b.realtimeCommentIds,
            n = b.topLevelCommentFeedback,
            o = b.topLevelFeedback,
            p = b.topLevelViewOption,
            q = b.useDefaultActor;
          b = b.viewOption;
          var r = k(a);
          k = r && r.feedback;
          var s = function (b) {
              (e.$9[a] = b), e.$41();
            },
            t = function (b) {
              e.$14[a] = b;
            };
          if (k == null)
            throw c("unrecoverableViolation")(
              "CometUFICommentList: Expected comment to have a `feedback` in order to render a replies list.",
              "ufi2"
            );
          n = d === 0 ? k : n;
          if (n == null)
            throw c("unrecoverableViolation")(
              "CometUFICommentList: Expected nested list to have been provided a toplevel comment feedback.",
              "ufi2"
            );
          g = d === 0 ? g : o;
          if (g == null)
            throw c("unrecoverableViolation")(
              "CometUFICommentList: Expected nested list to have been provided a toplevel feedback.",
              "ufi2"
            );
          return {
            commentParent: r,
            depth: d + 1,
            displayCommentsContext: f,
            feedLocation: i,
            feedback: k,
            feedbackSource: h,
            focusCommentID: j,
            listRef: s,
            locallyComposedCommentIds: l,
            onComposerBlurCallback: e.$42,
            onComposerFocusCallback: e.$43,
            onListRendered: function (a) {
              var b = r != null ? e.$4.get(r.id) : null;
              b && b(a);
            },
            realtimeCommentIds: m,
            subRepliesExpanderRef: t,
            topLevelCommentFeedback: n,
            topLevelFeedback: g,
            topLevelViewOption: (o = p) != null ? o : b,
            useDefaultActor: q,
          };
        };
        e.$47 = function () {
          return e.$44("forward");
        };
        e.$48 = function () {
          return e.$44("backward");
        };
        e.$49 = function () {
          var a = e.props,
            b = a.connectionPageInfo.pageSize,
            c = a.depth,
            f = a.environment;
          a = a.totalCount;
          var g = e.state.listState;
          return {
            Selectors: d("CometUFICommentListState").Selectors,
            depth: c,
            environment: f,
            listState: g,
            pageSize: b,
            totalCount: a,
          };
        };
        e.$50 = function () {
          var a = e.props,
            b = a.depth,
            f = a.environment;
          a = a.totalCount;
          var g = e.state.listState;
          if (b === 0)
            throw c("unrecoverableViolation")(
              "CometUFICommentList: Expected a replies list to get replies collapser props",
              "ufi2"
            );
          return {
            Selectors: d("CometUFICommentListState").Selectors,
            collapseList: e.$18,
            depth: b,
            environment: f,
            listState: g,
            totalCount: a,
          };
        };
        e.$51 = function () {
          var a = e.props,
            b = a.depth,
            f = a.environment,
            g = a.highlightedComments,
            h = a.totalCount;
          a = a.viewOption;
          var i = e.state.listState;
          if (b === 0)
            throw c("unrecoverableViolation")(
              "CometUFICommentList: Expected a replies list to get replies expander props",
              "ufi2"
            );
          return {
            Selectors: d("CometUFICommentListState").Selectors,
            depth: b,
            environment: f,
            expandList: e.$20,
            highlightedComments: g,
            listState: i,
            onMouseEnter: function () {
              return e.$45("forward");
            },
            totalCount: h,
            viewOption: a,
          };
        };
        e.$52 = function (a) {
          var b = e.props.expandedSubReplyParents;
          return b[a] === !0;
        };
        e.$23 = function (a) {
          var b = a.commentIDs,
            f = a.direction,
            g = a.error;
          if (g) {
            e.$19(function (a) {
              return d(
                "CometUFICommentListState"
              ).StateUpdaters.failCommentPagination({
                args: { depth: e.props.depth, direction: f, error: g },
                state: a,
              });
            });
            return;
          }
          a = e.props;
          var h = a.connectionPageInfo,
            i = a.depth,
            j = a.feedback,
            k = a.hiddenCommentIDs,
            l = a.totalCount,
            m = h.afterCount,
            n = h.beforeCount,
            o = h.hasNext,
            p = h.hasPrevious,
            q = h.pageSize,
            r = j.id;
          if (r == null)
            throw c("unrecoverableViolation")(
              "CometUFICommentList: Expected feedback to have an id",
              "ufi2"
            );
          var s = !1;
          e.$19(
            function (a) {
              s = !0;
              if (i === 0)
                if (f === "backward")
                  return d(
                    "CometUFICommentListState"
                  ).StateUpdaters.receiveCommentsPage({
                    args: {
                      beforeCount: n,
                      commentIDs: b,
                      depth: i,
                      direction: f,
                      feedbackTargetID: r,
                      hasPrevious: p,
                      hiddenCommentIDs: k,
                      pageSize: q,
                      totalCount: l,
                    },
                    state: a,
                  });
                else
                  return d(
                    "CometUFICommentListState"
                  ).StateUpdaters.receiveCommentsPage({
                    args: {
                      afterCount: m,
                      commentIDs: b,
                      depth: i,
                      direction: f,
                      feedbackTargetID: r,
                      hasNext: o,
                      hiddenCommentIDs: k,
                      pageSize: q,
                      totalCount: l,
                    },
                    state: a,
                  });
              else if (f === "backward")
                return d(
                  "CometUFICommentListState"
                ).StateUpdaters.receiveCommentsPage({
                  args: {
                    beforeCount: n,
                    commentIDs: b,
                    depth: i,
                    direction: f,
                    feedbackTargetID: r,
                    hasPrevious: p,
                    hiddenCommentIDs: k,
                    minCountToShowCollapser: d("CometUFICommentListStateConfig")
                      .MIN_REPLIES_TO_SHOW_COLLAPSER,
                    pageSize: q,
                    totalCount: l,
                  },
                  state: a,
                });
              else
                return d(
                  "CometUFICommentListState"
                ).StateUpdaters.receiveCommentsPage({
                  args: {
                    afterCount: m,
                    commentIDs: b,
                    depth: i,
                    direction: f,
                    feedbackTargetID: r,
                    hasNext: o,
                    hiddenCommentIDs: k,
                    minCountToShowCollapser: d("CometUFICommentListStateConfig")
                      .MIN_REPLIES_TO_SHOW_COLLAPSER,
                    pageSize: q,
                    totalCount: l,
                  },
                  state: a,
                });
            },
            function (a) {
              s && e.$53(f);
            }
          );
        };
        e.$54 = (function (a) {
          var b,
            d = function () {
              if (b == null) {
                var d, e;
                d = (d = c("qex")._("1496343")) != null ? d : !0;
                e = (e = c("qex")._("1496344")) != null ? e : 1e3;
                b = c("debounce")(
                  d
                    ? function () {
                        a.$25("forward");
                      }
                    : c("emptyFunction"),
                  e,
                  a,
                  !0
                );
                a.$3.addSubscriptions(b);
              }
              b();
            };
          d.reset = function () {
            b && b.reset();
          };
          return d;
        })(babelHelpers.assertThisInitialized(e));
        e.$55 = function () {
          e.$54.reset();
        };
        e.$28 = function (a, b) {
          e.$6.set(a, b);
        };
        e.$29 = function (a) {
          e.$6["delete"](a);
        };
        e.$42 = function (a) {
          a = e.$6.get(a);
          a && a(!1);
        };
        e.$43 = function (a) {
          a = e.$6.get(a);
          a && a(!0);
        };
        e.$34 = function () {
          var a = e.props,
            b = a.commentParent;
          a = a.onComposerBlurCallback;
          b && a && a(b.id);
        };
        e.$35 = function () {
          var a = e.props,
            b = a.commentParent,
            f = a.depth;
          a = a.onComposerFocusCallback;
          var g = e.state.listState;
          d("CometUFICommentListState").Selectors.getVisibleCommentsCount({
            depth: f,
            state: g,
          }) === 0 &&
            (g.pagers.forward || g.pagers.backward) &&
            ((f = c("qex")._("1568104")) != null ? f : !1) &&
            (g.pagers.forward ? e.$21 : e.$22)({
              onCommentsRendered: function () {
                (e.$10 = !0), (e.$11 = !0), e.$15();
              },
            });
          b && a && a(b.id);
        };
        e.$32 = function (a) {
          (e.$5 = a), e.$15();
        };
        e.$33 = function (a) {
          var b;
          (((b = e.props.commentParent) == null ? void 0 : b.legacy_fbid) ===
            e.props.focusCommentID ||
            e.props.commentIDs.some(function (a) {
              a = e.props.getComment(a);
              return (
                (a == null ? void 0 : a.legacy_fbid) === e.props.focusCommentID
              );
            })) &&
            (e.$10 = !0);
          e.$32(a);
          if (a && e.$7) {
            b = e.$7;
            e.$7 = null;
            e.$56(b, a);
          }
          a && e.$13 && (e.$57(e.$1), (e.$1 = void 0), (e.$13 = !1));
          a && e.$12 && (e.$58(), (e.$12 = !1));
        };
        e.$45 = (function (a) {
          var b,
            d = function (d) {
              if (b == null) {
                var f, g;
                f = (f = c("qex")._("1496345")) != null ? f : !0;
                g = (g = c("qex")._("1496346")) != null ? g : 0;
                b = c("debounce")(f ? e.$25 : c("emptyFunction"), g, a, !0);
                a.$3.addSubscriptions(b);
              }
              b(d);
            };
          d.reset = function () {
            b && b.reset();
          };
          return d;
        })(babelHelpers.assertThisInitialized(e));
        e.handleReplyToComment = function (a) {
          var b,
            f = e.props,
            g = f.depth,
            h = f.feedback,
            i = f.topLevelCommentFeedback;
          f = f.topLevelFeedback;
          if (
            d(
              "CometUFICommentListGetDerivedStateFromProps"
            ).getCanViewerComment({
              depth: g,
              feedback: h,
              topLevelCommentFeedback: i,
              topLevelFeedback: f,
            }) === !1
          )
            return;
          var j = a.authorId,
            k = a.authorIsWeakReference,
            l = a.authorName,
            m = a.authorType,
            n = a.authorUrl,
            o = a.commentComposerPlaceholderText,
            p = a.commentId;
          b = j === ((b = h.viewer_actor) == null ? void 0 : b.id);
          if (g > 0) {
            var q = e.$9[p];
            if (q != null) {
              q.handleReplyToComment(a);
              return;
            }
            q = e.$14[p];
            if (q != null) {
              q.handleReplyToComment(a);
              return;
            }
            e.$7 = null;
            if (!b) {
              q = e.$5;
              j = {
                authorId: j,
                authorIsWeakReference: k,
                authorName: l,
                authorType: m,
                authorUrl: n,
              };
              q ? e.$56(j, q) : (e.$7 = j);
            }
          }
          if (g === 0) {
            m =
              (l =
                (k = h.ask_me_anything_feedback_metadata) == null
                  ? void 0
                  : k.is_viewer_host) != null
                ? l
                : !1;
            n = !b && !m && c("gkx")("1746423");
            q = e.$9[p];
            q != null &&
              (q.$57(void 0), q.$58(), n && q.handleReplyToComment(a));
          } else e.$57({ commentComposerPlaceholderText: o, id: p }), e.$58();
          if (
            g === 0 &&
            ((j = h.threading_config) == null ? void 0 : j.__typename) ===
              "NoThreadingFeedbackConfig"
          ) {
            e.$10 = !0;
            e.$11 = !0;
            e.$15();
            return;
          }
          k = d(
            "CometUFICommentListGetDerivedStateFromProps"
          ).getCanViewerComment({
            depth: g,
            feedback: h,
            topLevelCommentFeedback: i,
            topLevelFeedback: f,
          });
          l = e.$9[p] != null;
          if (l) {
            b =
              g > 1
                ? (i == null ? void 0 : i.can_viewer_comment) === !0
                : h.can_viewer_comment === !0;
            if (b) {
              m = p;
              e.$59.push({ commentID: m, scrollToComposer: k });
              e.$41();
            } else {
              n = e.$5;
              n && n.focus();
            }
          } else e.$20({ focusComposer: k, scrollToComposer: k });
        };
        e.$60 = function (a) {
          a = e.$9[a.id];
          return a != null
            ? d("CometUFICommentListState").Selectors.isComposerVisible({
                depth: a.props.depth,
                state: a.state.listState,
              })
            : !1;
        };
        e.$61 = function (a) {
          a = e.$9[a.id];
          return a != null ? a.props.totalCount : 0;
        };
        e.$59 = [];
        e.$21 = function (a) {
          a = a ? a.onCommentsRendered : void 0;
          e.$62("forward", a);
        };
        e.$22 = function (a) {
          a = a ? a.onCommentsRendered : void 0;
          e.$62("backward", a);
        };
        e.$63 = function (a) {
          var b = a.onComplete,
            c = a.viewOption;
          a = e.props;
          var f = a.depth,
            g = a.setViewOption;
          if (f !== 0) {
            b && b(null);
            return;
          }
          var h = !1;
          e.$19(
            function (a) {
              if (
                d("CometUFICommentListState").Selectors.isListLoading({
                  depth: f,
                  state: a,
                })
              )
                return null;
              h = !0;
              return d(
                "CometUFICommentListState"
              ).StateUpdaters.requestRefetchList({
                args: { depth: f },
                state: a,
              });
            },
            function (a) {
              h ? g({ onComplete: b, viewOption: c }) : b && b(null);
            }
          );
        };
        e.$64 = function (a) {
          a = a.focusComposer;
          var b = e.props,
            f = b.depth;
          b = b.totalCount;
          var g = e.state.listState;
          if (
            !d("CometUFICommentListState").Selectors.isListExpanded({
              depth: f,
              state: g,
            })
          ) {
            e.$20({ focusComposer: a, scrollToComposer: !1 });
            return;
          }
          b > 0 &&
          d("CometUFICommentListState").Selectors.getVisibleCommentsCount({
            depth: 0,
            state: g,
          }) === 0
            ? g.pagers.forward
              ? e.$21()
              : g.pagers.backward && e.$22()
            : c("gkx")("1936457")
            ? e.$21()
            : e.$18();
        };
        e.Actions = {
          collapseList: e.$18,
          expandList: e.$20,
          loadNewerComments: e.$22,
          loadOlderComments: e.$21,
          setViewOption: e.$63,
          toggleList: e.$64,
        };
        a = e.props.feedback.id;
        var f = e.props.feedLocation;
        if (a != null)
          e.$2 = e.props.ufiActionsContext.registerUFIActions(a, {
            expandList: e.Actions.expandList,
          });
        else {
          c("recoverableViolation")(
            "CometUFICommentList: Feedback target ID is null in feed location: " +
              ((a = f) != null ? a : "unknown") +
              ". UFI actions cannot be registered.",
            "ufi2"
          );
        }
        return e;
      }
      var e = a.prototype;
      e.componentWillUnmount = function () {
        this.$3.release(),
          this.$4.clear(),
          this.$2 != null && this.$2.dispose();
      };
      e.$15 = function () {
        var a = this.$10,
          b = this.$11;
        if (!a) {
          this.$10 = !1;
          this.$11 = !1;
          return;
        } else {
          a = this.props.depth;
          var e = this.state.listState;
          e =
            a === 0 &&
            !d("CometUFICommentListState").Selectors.isListLoading({
              depth: a,
              state: e,
            });
          a = a !== 0;
          var f = this.$5;
          if (f != null && (e || a)) {
            this.$10 = !1;
            this.$11 = !1;
            e = f.getElementToScrollTo();
            if (b !== !0) {
              f.focus();
              return;
            }
            if (e == null) return;
            if (e instanceof Text) {
              c("FBLogger")("ufi2").mustfix(
                "The composer is a Text node! I don't know what happened but this is UNACCEPTABLE, we found this out because we were trying to scroll to this component. You can look into and possibly fix this issue by asserting the composerRef on CometUFICommentList is being set correctly"
              );
              f.focus();
              return;
            }
            c("scrollIntoView")(
              e,
              babelHelpers["extends"]({}, l, {
                onScrollComplete: function () {
                  return f.focus();
                },
              })
            );
          }
        }
      };
      e.$16 = function (a, b) {
        var c = this.$8.get(a) || [];
        c.push(b);
        this.$8.set(a, c);
      };
      e.$30 = function () {
        var a;
        a =
          (a = this.props.commentParent) == null
            ? void 0
            : (a = a.author) == null
            ? void 0
            : a.name;
        return typeof a === "string"
          ? h._("Reply to {parent-name}", [h._param("parent-name", a)])
          : h._("Write a comment");
      };
      e.$36 = function (a) {
        var b = this.props,
          c = b.depth,
          e = b.environment,
          f = b.feedback,
          g = b.totalCount;
        b = b.viewOption;
        var h = this.state.listState,
          i = f.is_vc_acting_as_page_or_profile_plus;
        return {
          Selectors: d("CometUFICommentListState").Selectors,
          depth: c,
          direction: a,
          environment: e,
          isPageOrProfilePlus: i,
          listState: h,
          totalCount: g,
          unfilteredTotalCount:
            (a = (c = f.toplevel_comment_count) == null ? void 0 : c.count) !=
            null
              ? a
              : g,
          viewOption: b,
        };
      };
      e.$44 = function (a) {
        var b = this,
          c = this.props,
          e = c.connectionPageInfo.pageSize,
          f = c.depth,
          g = c.feedback,
          h = c.totalCount;
        c = c.viewOption;
        var i = this.state.listState,
          j = a === "forward" ? this.$21 : this.$22;
        return {
          Selectors: d("CometUFICommentListState").Selectors,
          depth: f,
          direction: a,
          listState: i,
          loadMoreComments: j,
          onMouseEnter: function () {
            return b.$45(a);
          },
          onMouseLeave: function () {
            return b.$46();
          },
          pageSize: e,
          summaryTotalNumComments:
            (i = (f = g.comment_count) == null ? void 0 : f.total_count) != null
              ? i
              : 0,
          totalCount: h,
          viewOption: c,
        };
      };
      e.$46 = function () {
        this.$45.reset();
      };
      e.$57 = function (a) {
        var b = this.$5;
        b != null
          ? b.execCommand({
              __type: "SetReplyAssociation",
              commentAssociatedWithReply: a,
            })
          : ((this.$1 = a), (this.$13 = !0));
      };
      e.$58 = function () {
        var a = this.$5;
        a != null
          ? a.execCommand({ __type: "SetReplyClicked" })
          : (this.$12 = !0);
      };
      e.$41 = function () {
        var a = this;
        this.$59 = this.$59.filter(function (b) {
          var c = b.commentID;
          b = b.scrollToComposer;
          c = a.$9[c];
          if (c != null) {
            c.$20({ focusComposer: !0, scrollToComposer: b });
            return !1;
          }
          return !0;
        });
      };
      e.$62 = function (a, b) {
        var e = this,
          f = this.props.feedback.id,
          g = b
            ? function () {
                b(),
                  f != null && e.props.commentListenerContext.isInitialized
                    ? e.props.commentListenerContext
                        .getEmitter(f, e.props.feedLocation)
                        .emit("comments_pagination", f)
                    : f == null &&
                      e.props.commentListenerContext.isInitialized &&
                      c("recoverableViolation")(
                        "Feedback ID Required to emit events for CometUFICommentList",
                        "ufi2"
                      );
              }
            : function () {},
          h = this.props,
          i = h.connectionPageInfo.pageSize,
          j = h.depth,
          k = h.fetchComments,
          l = !1;
        this.$19(
          function (b) {
            var c =
              d("CometUFICommentListState").Selectors.isPagerLoading({
                depth: j,
                direction: a,
                state: b,
              }) ||
              (j === 0 &&
                d("CometUFICommentListState").Selectors.isListLoading({
                  depth: j,
                  state: b,
                })) ||
              (j !== 0 &&
                d(
                  "CometUFICommentListState"
                ).Selectors.isRepliesExpanderLoading({ depth: j, state: b }));
            if (c) return null;
            c =
              j === 0
                ? d(
                    "CometUFICommentListState"
                  ).StateUpdaters.requestCommentsPage({
                    args: { depth: 0, direction: a, pageSize: i },
                    state: b,
                  })
                : d(
                    "CometUFICommentListState"
                  ).StateUpdaters.requestCommentsPage({
                    args: {
                      depth: j,
                      direction: a,
                      minCountToShowCollapser: d(
                        "CometUFICommentListStateConfig"
                      ).MIN_REPLIES_TO_SHOW_COLLAPSER,
                      pageSize: i,
                    },
                    state: b,
                  });
            l = d("CometUFICommentListState").Selectors.isPagerLoading({
              depth: j,
              direction: a,
              state: c,
            });
            if (l) {
              b = d("CometUFICommentListState").Selectors.getCountForFetch({
                depth: j,
                direction: a,
                pageSize: i,
                state: c,
              });
              b != null &&
                (g != null && e.$16(a, g),
                k({ count: b, direction: a, onCommentsFetched: e.$23 }));
            }
            return c;
          },
          function (a) {
            l || (g && g());
          }
        );
      };
      e.$56 = function (a, b) {
        var d = a.authorId,
          e = a.authorIsWeakReference,
          f = a.authorName,
          g = a.authorType;
        a = a.authorUrl;
        var h = g;
        c("gkx")("1858969") || (h = g === "User" ? "user" : "non_user");
        b.execCommand({
          __type: "PrefillMention",
          mentionableEntity: new (c("SearchableEntry"))({
            auxiliaryData: {
              authorativePerson: void 0,
              connectedPage: void 0,
              disableAutosuggest: void 0,
              indexRank: void 0,
              renderType: e ? "non_member" : "member",
              verified: void 0,
              workForeignEntity: void 0,
              workUser: void 0,
            },
            title: f,
            type: h,
            uniqueID: d,
            uri: a,
          }),
        });
      };
      e.$53 = function (a) {
        var b = this.$8.get(a) || [];
        for (
          var b = b,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          e();
        }
        this.$8["delete"](a);
      };
      e.$19 = function (a, b) {
        var c = this;
        this.setState(
          function (b) {
            b = a(b.listState);
            return !b ? null : { listState: b };
          },
          function () {
            return b && b(c.state.listState);
          }
        );
      };
      e.render = function () {
        var a = this.props,
          b = a.children,
          c = a.commentParent,
          e = a.depth,
          f = a.environment,
          g = a.getComment,
          h = a.isInitiallyExpanded,
          i = a.onListRendered,
          j = a.replyViewOption,
          k = a.totalCount;
        a = a.viewOption;
        var l = this.state.listState;
        f = {
          Actions: this.Actions,
          Selectors: d("CometUFICommentListState").Selectors,
          addRepliesListRenderedCallback: this.$17,
          environment: f,
          getComment: g,
          getCommentEditorProps: this.$26,
          getCommentProps: this.$27,
          getComposerProps: this.$31,
          getFilterWarningPropsForNewerComments: this.$38,
          getFilterWarningPropsForOlderComments: this.$37,
          getHiddenCommentsPlaceholderProps: this.$39,
          getNestedCommentsListProps: this.$40,
          getPagerPropsForNewerComments: this.$48,
          getPagerPropsForOlderComments: this.$47,
          getPaginationProgressProps: this.$49,
          getTotalRepliesCountForComment: this.$61,
          isInitiallyExpanded: h,
          isReplyComposerVisibleForComment: this.$60,
          listState: l,
          onCommentsListMouseEnter: this.$54,
          onCommentsListMouseLeave: this.$55,
          replyViewOption: j,
          totalCount: k,
          viewOption: a,
        };
        g =
          e === 0
            ? babelHelpers["extends"]({}, f, { depth: 0 })
            : babelHelpers["extends"]({}, f, {
                commentParent: c,
                depth: e,
                getRepliesCollapserProps: this.$50,
                getRepliesExpanderProps: this.$51,
                getShouldInitiallyExpandSubRepliesForComment: this.$52,
              });
        i &&
          i({
            composerVisible: d(
              "CometUFICommentListState"
            ).Selectors.isComposerVisible({ depth: e, state: l }),
            totalCount: k,
          });
        return b(g);
      };
      return a;
    })(j.PureComponent);
    n.displayName = "CometUFICommentListInternal";
    n.getDerivedStateFromProps = d(
      "CometUFICommentListGetDerivedStateFromProps"
    ).getDerivedStateFromProps;
    function a(a) {
      var e = a.children,
        f = a.commentParent,
        g = a.depth,
        h = g === void 0 ? 0 : g,
        l = a.displayCommentsContext;
      g = a.fallback;
      var m = a.feedback,
        o = a.feedbackSource,
        p = a.feedLocation,
        q = a.focusCommentID,
        r = a.listRef,
        s = a.locallyComposedCommentIds,
        t = a.onComposerBlurCallback,
        u = a.onComposerFocusCallback,
        v = a.onListRendered,
        w = a.onRealtimeCommentReceived,
        x = a.realtimeCommentIds,
        y = a.replyRecipientCommentID;
      a.subRepliesExpanderRef;
      var z = a.topLevelCommentFeedback,
        A = a.topLevelFeedback,
        B = a.topLevelViewOption,
        C = a.useDefaultActor;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "commentParent",
        "depth",
        "displayCommentsContext",
        "fallback",
        "feedback",
        "feedbackSource",
        "feedLocation",
        "focusCommentID",
        "listRef",
        "locallyComposedCommentIds",
        "onComposerBlurCallback",
        "onComposerFocusCallback",
        "onListRendered",
        "onRealtimeCommentReceived",
        "realtimeCommentIds",
        "replyRecipientCommentID",
        "subRepliesExpanderRef",
        "topLevelCommentFeedback",
        "topLevelFeedback",
        "topLevelViewOption",
        "useDefaultActor",
      ]);
      var D = d("CometRelay").useRelayEnvironment(),
        E = k(c("CometUFIVisibilityContext")),
        F = k(d("CometUFIActionsContext").CometUFIActionsContext),
        G = k(
          d("CometUFICommentListenersContext").CometUFICommentListenersContext
        ),
        H = k(
          d("CometUFIReparentedCommentIDsContext.react")
            .CometUFIReparentedCommentIDsContext
        ),
        I = H.reparentedToDeletedCommentsMap,
        J = d("CometRelay").useFragment(
          i !== void 0 ? i : (i = b("CometUFICommentList_feedback.graphql")),
          m
        );
      if (h > 0 && A == null) {
        c("recoverableViolation")(
          "CometUFICommentList: topLevelFeedback is required to render a replies list",
          "ufi2"
        );
        return null;
      }
      if (h > 1 && z == null) {
        c("recoverableViolation")(
          "CometUFICommentList: topLevelCommentFeedback is required to render a sub replies list",
          "ufi2"
        );
        return null;
      }
      return j.jsx(
        c("CometUFICommentsProvider.react"),
        babelHelpers["extends"](
          {
            depth: h,
            displayCommentsContext: l,
            fallback: g,
            feedLocation: p,
            feedback: J,
            feedbackSource: o,
            focusCommentID: q,
            locallyComposedCommentIds: s,
            onRealtimeCommentReceived: w,
            realtimeCommentIds: x,
            reparentedToDeletedCommentsMap: I,
            topLevelFeedback: A,
            topLevelViewOption: B,
            useDefaultActor: C,
          },
          a,
          {
            children: function (a) {
              return j.createElement(
                n,
                babelHelpers["extends"]({}, a, {
                  children: e,
                  commentListenerContext: G,
                  commentParent: f,
                  depth: h,
                  displayCommentsContext: l,
                  environment: D,
                  feedLocation: p,
                  feedback: J,
                  feedbackSource: o,
                  focusCommentID: q,
                  isUFIVisible: E,
                  key: [o, q, (a = J.id) != null ? a : ""].join("_"),
                  locallyComposedCommentIds: s,
                  onComposerBlurCallback: t,
                  onComposerFocusCallback: u,
                  onListRendered: v,
                  realtimeCommentIds: x,
                  ref: r,
                  reparentedToDeletedCommentsMap: I,
                  replyRecipientCommentID: y,
                  topLevelCommentFeedback: z,
                  topLevelFeedback: A,
                  ufiActionsContext: F,
                  useDefaultActor: C,
                })
              );
            },
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
