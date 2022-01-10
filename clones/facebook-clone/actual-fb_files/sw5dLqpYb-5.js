if (self.CavalryLogger) {
  CavalryLogger.start_js(["N5TGQ5W"]);
}

__d(
  "CometUFIFullThreadedRepliesListRenderer_renderer$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFIFullThreadedRepliesListRenderer_renderer$normalization",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "FullThreadingFeedbackConfig",
          kind: "LinkedField",
          name: "full_threading_config",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_auto_expand_shorter_threads",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "auto_expand_shorter_thread_for_children_less_than",
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
                  kind: "ScalarField",
                  name: "is_hide_transparency_enabled_for_actor",
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
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIFullThreadedRepliesListRenderer_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIFullThreadedRepliesListRenderer_renderer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "FullThreadingFeedbackConfig",
          kind: "LinkedField",
          name: "full_threading_config",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_auto_expand_shorter_threads",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "auto_expand_shorter_thread_for_children_less_than",
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
                  kind: "ScalarField",
                  name: "is_hide_transparency_enabled_for_actor",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "FullThreadedRepliesListRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIFullThreadedReplyContainer_comment.graphql",
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
        name: "CometUFIFullThreadedReplyContainer_comment",
        selections: [
          a,
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
                storageKey:
                  'display_comments(comment_order:"SUB_REPLIES",top_level_comment_order:"TOPLEVEL")',
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_hide_transparency_enabled_for_actor",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_subreply_parent_deleted",
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
            concreteType: null,
            kind: "LinkedField",
            name: "author",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFIReparentedReplyNotice_actor",
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
  "CometUFIFullThreadedSubRepliesListDataProviderQuery.graphql",
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
          name: "feedbackTargetID",
        },
        j = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        k = { defaultValue: !1, kind: "LocalArgument", name: "isInitialFetch" },
        l = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        m = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "topLevelViewOption",
        },
        n = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        o = [
          { kind: "Variable", name: "id", variableName: "feedbackTargetID" },
        ],
        p = {
          kind: "Variable",
          name: "use_default_actor",
          variableName: "useDefaultActor",
        },
        q = [p],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        s = { kind: "TypeDiscriminator", abstractKey: "__isActor" },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        v = { kind: "Variable", name: "scale", variableName: "scale" },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        x = [w],
        y = {
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
        z = {
          alias: "profile_picture_depth_1",
          args: [
            { kind: "Literal", name: "height", value: 24 },
            v,
            { kind: "Literal", name: "width", value: 24 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: x,
          storageKey: null,
        },
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        },
        B = {
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
        C = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "feedLocation",
            },
            p,
          ],
          kind: "ScalarField",
          name: "can_viewer_comment",
          storageKey: null,
        },
        D = {
          alias: null,
          args: q,
          kind: "ScalarField",
          name: "comment_composer_placeholder",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        F = [E],
        G = [t],
        H = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_hide_transparency_enabled_for_actor",
          storageKey: null,
        },
        I = [
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
          {
            kind: "Variable",
            name: "is_initial_fetch",
            variableName: "isInitialFetch",
          },
          { kind: "Literal", name: "is_top_level", value: !1 },
          {
            kind: "Variable",
            name: "top_level_comment_order",
            variableName: "topLevelViewOption",
          },
        ],
        J = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        K = [J],
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        N = {
          kind: "Variable",
          name: "feed_location",
          variableName: "feedLocation",
        },
        O = [N],
        P = [r, t],
        Q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        R = [{ kind: "Literal", name: "translation_type", value: "ORIGINAL" }],
        S = {
          args: null,
          fragment: aa(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
          ),
          kind: "FragmentSpread",
        },
        T = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        U = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_title",
          storageKey: null,
        },
        V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset",
          storageKey: null,
        },
        W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_v2",
          storageKey: null,
        },
        X = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_asset_dark_mode_v2",
          storageKey: null,
        },
        ba = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_description",
          storageKey: null,
        },
        ca = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_enabled",
          storageKey: null,
        },
        da = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_manageable",
          storageKey: null,
        },
        ea = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "serialized",
          storageKey: null,
        },
        fa = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "identity_badge_type",
          storageKey: null,
        },
        ga = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_enabled",
          storageKey: null,
        },
        ha = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_uri",
          storageKey: null,
        },
        ia = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "information_button_text",
          storageKey: null,
        },
        ja = {
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
        ka = [T],
        la = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "emoji_size",
          storageKey: null,
        },
        Y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_id",
          storageKey: null,
        },
        Z = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "viewer_actor",
          plural: !1,
          selections: P,
          storageKey: null,
        },
        $ = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "feedback_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, f, g, h, i, j, k, l, m, n],
          kind: "Fragment",
          metadata: null,
          name: "CometUFIFullThreadedSubRepliesListDataProviderQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometUFIFullThreadedSubRepliesListRenderer_feedback",
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
          argumentDefinitions: [f, b, c, d, e, g, i, h, j, l, k, m, n, a],
          kind: "Operation",
          name: "CometUFIFullThreadedSubRepliesListDataProviderQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "Feedback",
              kind: "LinkedField",
              name: "feedback",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: q,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "viewer_actor",
                  plural: !1,
                  selections: [
                    r,
                    s,
                    t,
                    u,
                    y,
                    z,
                    {
                      kind: "InlineFragment",
                      selections: [A, B],
                      type: "User",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
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
                t,
                C,
                D,
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
                  args: [
                    { kind: "Literal", name: "orderby", value: "toplevel" },
                  ],
                  concreteType: "TopLevelCommentsConnection",
                  kind: "LinkedField",
                  name: "top_level_comments",
                  plural: !1,
                  selections: F,
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
                    r,
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
                      selections: G,
                      storageKey: null,
                    },
                    t,
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
                    t,
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
                H,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "subscription_target_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: I,
                  concreteType: "DisplayCommentsConnection",
                  kind: "LinkedField",
                  name: "display_comments",
                  plural: !1,
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
                      selections: G,
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
                    E,
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
                            t,
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
                                r,
                                t,
                                u,
                                {
                                  kind: "InlineFragment",
                                  selections: K,
                                  type: "Event",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: K,
                                  type: "Group",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [J, L],
                                  type: "Page",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    J,
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
                                    L,
                                    M,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "subscribe_status",
                                      storageKey: null,
                                    },
                                    A,
                                    B,
                                  ],
                                  type: "User",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: K,
                                  type: "Entity",
                                  abstractKey: "__isEntity",
                                },
                                s,
                                y,
                                z,
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
                            {
                              alias: null,
                              args: O,
                              kind: "ScalarField",
                              name: "comment_menu_tooltip",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: O,
                              kind: "ScalarField",
                              name: "should_show_comment_menu",
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
                                t,
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
                                        r,
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
                                  args: q,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "viewer_actor",
                                  plural: !1,
                                  selections: P,
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: q,
                                  concreteType: "FeedbackReactionInfo",
                                  kind: "LinkedField",
                                  name: "viewer_feedback_reaction_info",
                                  plural: !1,
                                  selections: [Q, t],
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
                                    Q,
                                    t,
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
                                  selections: G,
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
                                            Q,
                                            t,
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
                                    E,
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
                                C,
                                {
                                  alias: null,
                                  args: q,
                                  kind: "ScalarField",
                                  name: "can_viewer_react",
                                  storageKey: null,
                                },
                                D,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "should_show_top_reactions",
                                  storageKey: null,
                                },
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
                                  concreteType: "DisplayCommentsConnection",
                                  kind: "LinkedField",
                                  name: "display_comments",
                                  plural: !1,
                                  selections: F,
                                  storageKey:
                                    'display_comments(comment_order:"SUB_REPLIES",top_level_comment_order:"TOPLEVEL")',
                                },
                                H,
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
                              concreteType:
                                "QAUFIActionLinksCommentModuleRenderer",
                              kind: "LinkedField",
                              name: "qa_action_links_comment_renderer",
                              plural: !1,
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometUFICommentActionLinks_comment__qa_action_links_comment_renderer",
                                  fragmentName:
                                    "GeminiUFIQAActionLinks_comment",
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
                              name: "is_author_banned_by_content_owner",
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
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Feedback",
                                  kind: "LinkedField",
                                  name: "feedback",
                                  plural: !1,
                                  selections: [C, t],
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
                                    u,
                                    {
                                      kind: "InlineFragment",
                                      selections: [M, A],
                                      type: "User",
                                      abstractKey: null,
                                    },
                                    t,
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
                              selections: F,
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
                                  args: q,
                                  concreteType: "Page",
                                  kind: "LinkedField",
                                  name: "viewer_acts_as_page",
                                  plural: !1,
                                  selections: G,
                                  storageKey: null,
                                },
                                t,
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
                                    u,
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
                                        t,
                                      ],
                                      storageKey: null,
                                    },
                                    t,
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
                              args: R,
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
                                  selections: [S, T],
                                  type: "TextWithEntities",
                                  abstractKey: null,
                                },
                                S,
                              ],
                              storageKey:
                                'preferred_body(translation_type:"ORIGINAL")',
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
                            J,
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
                                t,
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
                                  fragmentName:
                                    "CometUFIVoteCommentActionLink_comment",
                                  fragmentPropName: "comment",
                                  kind: "ModuleImport",
                                },
                                t,
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
                                t,
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
                                  documentName:
                                    "CometUFICommentActorLink_comment",
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
                                t,
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
                                t,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: "body_renderer",
                              args: R,
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
                                      documentName:
                                        "CometUFICommentBody_comment",
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
                                      documentName:
                                        "CometUFICommentBody_comment",
                                      fragmentName:
                                        "CometUFICommentBodyComposedTextWithEntities_composedTextWithEntities",
                                      fragmentPropName:
                                        "composedTextWithEntities",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "FBMarkdownCommentBody",
                                  abstractKey: null,
                                },
                              ],
                              storageKey:
                                'preferred_body(translation_type:"ORIGINAL")',
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
                              args: O,
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
                                N,
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
                              args: O,
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
                                T,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "text_gradient",
                                  storageKey: null,
                                },
                                U,
                                V,
                                W,
                                X,
                                ba,
                                ca,
                                da,
                                ea,
                                fa,
                                ga,
                                ha,
                                ia,
                                ja,
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
                              args: O,
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
                              selections: [
                                U,
                                V,
                                W,
                                X,
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
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "Story",
                              kind: "LinkedField",
                              name: "attached_story",
                              plural: !1,
                              selections: P,
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "Comment",
                              kind: "LinkedField",
                              name: "if_viewer_can_see_member_page_tooltip",
                              plural: !1,
                              selections: P,
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
                                r,
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
                                r,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "CometUFIComment_comment_elevated_comment_data",
                                      fragmentName:
                                        "GFIStarsElevatedCommentContent_starsElevatedCommentData",
                                      fragmentPropName:
                                        "starsElevatedCommentData",
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
                              alias: null,
                              args: null,
                              concreteType: "TextWithEntities",
                              kind: "LinkedField",
                              name: "body",
                              plural: !1,
                              selections: [
                                T,
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
                                          selections: G,
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
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_markdown_enabled",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_subreply_parent_deleted",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "Comment",
                              kind: "LinkedField",
                              name: "reply_parent_comment",
                              plural: !1,
                              selections: G,
                              storageKey: null,
                            },
                            {
                              alias: "threading_depth",
                              args: null,
                              kind: "ScalarField",
                              name: "depth",
                              storageKey: null,
                            },
                            r,
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
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "reply_comment_parent_fbid",
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
                  storageKey: null,
                },
                {
                  alias: null,
                  args: I,
                  filters: [
                    "feedback_source",
                    "focus_comment_id",
                    "comment_order",
                  ],
                  handle: "ufi2_comments",
                  key: "UFI2CommentsProvider_feedback_display_comments",
                  kind: "LinkedHandle",
                  name: "display_comments",
                  dynamicKey: {
                    kind: "Variable",
                    name: "__dynamicKey",
                    variableName: "UFI2CommentsProvider_commentsKey",
                  },
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
                    t,
                  ],
                  storageKey: null,
                },
                {
                  alias: "plugins",
                  args: [N, p],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comment_composer_plugins",
                  plural: !0,
                  selections: [
                    r,
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
                          selections: G,
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
                            t,
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
                              selections: ka,
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
                        la,
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
                        Y,
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
                        Y,
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
                        Z,
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
                        la,
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
                        $,
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
                        $,
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
                          selections: G,
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
                        $,
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
                        $,
                        Z,
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
                        $,
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
                        Z,
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
                          fragmentName:
                            "cometUFIComposerFileUploadPlugin_plugin",
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
                        $,
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
                              selections: P,
                              storageKey: null,
                            },
                            t,
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
                        Y,
                        {
                          args: null,
                          documentName: "useCometUFIComposerPlugins_feedback",
                          fragmentName:
                            "cometUFIComposerGroupRulesPlugin_plugin",
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
                            t,
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
                                  selections: ka,
                                  storageKey: null,
                                },
                                t,
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
                        $,
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
                  selections: [r],
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
                    r,
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
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "5950095145061555",
          metadata: {},
          name: "CometUFIFullThreadedSubRepliesListDataProviderQuery",
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
  "CometUFIFullThreadedSubRepliesListRenderer_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "isInitialFetch" },
        { kind: "RootArgument", name: "topLevelViewOption" },
        { kind: "RootArgument", name: "useDefaultActor" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIFullThreadedSubRepliesListRenderer_feedback",
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
          args: [
            { kind: "Literal", name: "includeNestedComments", value: !1 },
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
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometUFIComposerWrapperUseComposerPluginProps_feedback",
        },
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
  "CometUFIFullThreadedTopLevelCommentContainer_config$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFIFullThreadedTopLevelCommentContainer_config$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "curved_lines_enabled",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "threaded_lines_enabled",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIFullThreadedTopLevelCommentContainer_config.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIFullThreadedTopLevelCommentContainer_config",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "curved_lines_enabled",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "threaded_lines_enabled",
          storageKey: null,
        },
      ],
      type: "FullThreadingFeedbackConfig",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFIReparentedReplyNotice_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIReparentedReplyNotice_actor",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
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
  "CometUFIFullThreadedSubRepliesListDataProvider.react",
  [
    "CometRelay",
    "CometUFIFullThreadedSubRepliesListDataProviderQuery.graphql",
    "WebPixelRatio",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d("react");
    function a(a) {
      var c = a.children,
        e = a.commentsKey,
        f = a.feedbackSource,
        g = a.feedbackTargetID,
        i = a.feedLocation,
        j = a.focusCommentID;
      a = a.topLevelViewOption;
      e = {
        UFI2CommentsProvider_commentsKey: e,
        displayCommentsContextEnableComment: null,
        displayCommentsContextIsAdPreview: null,
        displayCommentsContextIsAggregatedShare: null,
        displayCommentsContextIsStorySet: null,
        displayCommentsFeedbackContext: null,
        feedLocation: i,
        feedbackSource: f,
        feedbackTargetID: g,
        focusCommentID: j,
        isInitialFetch: !0,
        scale: d("WebPixelRatio").get(),
        topLevelViewOption: a,
        useDefaultActor: !1,
      };
      i = d("CometRelay").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b(
              "CometUFIFullThreadedSubRepliesListDataProviderQuery.graphql"
            )),
        e
      );
      return c(i);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIThreadedComponentDecorator.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        d = a.depth,
        e = a.hasChildren,
        f = a.isLast,
        g = a.isParentLast;
      a = a.type;
      return h.jsxs("div", {
        className: c("stylex").dedupe(
          {
            "overflow-x-1": "ni8dbmo4",
            "overflow-y-1": "stjgntxs",
            "position-1": "l9j0dhe7",
          },
          d === 1 ? { "padding-start-1": "d0szoon8" } : null,
          d === 2 ? { "padding-start-1": "dox67ykf" } : null,
          a === "hidden-placeholder" ? { "text-align-1": "oqcyycmt" } : null,
          a === "label"
            ? { "overflow-x-1": "hihg3u9x", "overflow-y-1": "ggxiycxj" }
            : null
        ),
        children: [
          d > 0 &&
            a !== "label" &&
            a !== "hidden-placeholder" &&
            h.jsx("div", {
              className: c("stylex").dedupe(
                {
                  "border-bottom-start-radius-1": "ns4ygwem",
                  "border-bottom-style-0.4": "s44p3ltw",
                  "border-bottom-width-0.4": "tpcyxxvw",
                  "border-top-color-0.4": "qr6iehes",
                  "border-end-color-0.4": "pw8ppx28",
                  "border-bottom-color-0.4": "k973klho",
                  "border-start-color-0.4": "kywkl1fr",
                  "border-start-style-0.4": "mk2mc5f4",
                  "border-start-width-0.4": "k0bpgpbk",
                  "position-1": "pmk7jnqg",
                },
                d === 1
                  ? { "start-1": "mmi0k12o", "width-1": "b73ngqbp" }
                  : null,
                d === 2
                  ? { "start-1": "sc6m8p17", "width-1": "pgctjfs5" }
                  : null,
                a === "comment" ? { "height-1": "kmzbrmfl" } : null,
                a === "comment" && d === 1 ? { "height-1": "jnigpg78" } : null,
                a === "pager" ? { "height-1": "me31hnl3" } : null
              ),
            }),
          d > 0 &&
            !(d === 1 && f) &&
            (d !== 2 || g === !1) &&
            h.jsx("div", {
              className: "dsl5tyj5 pmk7jnqg datstx6m b3i9ofy5 mmi0k12o",
            }),
          d > 1 &&
            !(d === 2 && f) &&
            h.jsx("div", {
              className: "dsl5tyj5 pmk7jnqg datstx6m b3i9ofy5 sc6m8p17",
            }),
          e === !0 &&
            h.jsx("div", {
              className: c("stylex").dedupe(
                d > 0 ? { "start-1": "sc6m8p17", "top-1": "nix0ko69" } : {},
                d === 0 ? { "start-1": "mmi0k12o", "top-1": "qslakw2r" } : null,
                {
                  "background-color-1": "b3i9ofy5",
                  "height-1": "datstx6m",
                  "position-1": "pmk7jnqg",
                  "width-1": "dsl5tyj5",
                }
              ),
            }),
          b,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIFullThreadedSubRepliesListRenderer.react",
  [
    "CometRelay",
    "CometUFICommentInGroup.react",
    "CometUFICommentList.react",
    "CometUFICommentsPager.react",
    "CometUFIComposer.react",
    "CometUFIComposerWrapper.react",
    "CometUFIFullThreadedSubRepliesListRenderer_feedback.graphql",
    "CometUFIHiddenCommentsPlaceholder.react",
    "CometUFIThreadedComponentDecorator.react",
    "UFI2ViewOption",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        composerNested: {
          paddingTop: "ecm0bbzt",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "sj5x9vvc",
          paddingStart: "scb9dxdr",
        },
      };
    function a(a) {
      var e = a.editingCommentID,
        f = a.feedback,
        g = a.feedbackSource,
        k = a.feedLocation,
        l = a.isParentLast,
        m = a.locallyComposedCommentIds,
        n = a.nestedCommentListProps,
        o = a.onCommitCommentCreate,
        p = a.onEditCommentError,
        q = a.onListRendered,
        r = a.onTranslateAllClick,
        s = a.realtimeCommentIds,
        t = a.renderedTranslationCommentID,
        u = a.setEditingCommentID,
        v = a.setRenderedTranslationCommentID,
        w = a.shouldRequestTranslationForAllComments,
        x = a.storyRenderLocation,
        y = a.topLevelViewOption,
        z = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "CometUFIFullThreadedSubRepliesListRenderer_feedback.graphql"
              )),
          f
        ),
        A = z == null ? void 0 : z.viewer_actor,
        B = d("CometUFIComposerWrapper.react").useComposerPluginProps(!!A, z),
        C =
          (z == null ? void 0 : z.is_hide_transparency_enabled_for_actor) ===
          !0;
      return i.jsx(
        c("CometUFICommentList.react"),
        babelHelpers["extends"]({}, n, {
          feedback: z,
          topLevelViewOption: y,
          children: function (a) {
            var b = a.Selectors,
              f = a.depth,
              h = a.getComposerProps,
              D = a.getPagerPropsForNewerComments,
              E = a.getPagerPropsForOlderComments,
              F = a.listState,
              G = a.viewOption,
              H = d("UFI2ViewOption").shouldDisplayInReverse(G),
              I = b.getVisibleCommentsWithHiddenCommentsCollapsed({
                depth: f,
                reverse: H,
                state: F,
              }),
              J =
                A != null &&
                b.isComposerVisible({ depth: f, state: F }) &&
                y !== "ADMIN_HIDDEN";
            H = [H ? E() : D(), H ? D() : E()].map(function (a, d) {
              var e = a.direction;
              return !b.isPagerVisible({ depth: f, direction: e, state: F })
                ? null
                : i.jsx(c("CometUFIThreadedComponentDecorator.react"), {
                    depth: f,
                    hasChildren: !1,
                    isLast: d === 1 && !J,
                    isParentLast: l,
                    type: "pager",
                    children: i.jsx(
                      c("CometUFICommentsPager.react"),
                      babelHelpers["extends"]({}, a)
                    ),
                  });
            });
            D = H[0];
            var K = H[1];
            E = I.map(function (b, d) {
              var h = a.getHiddenCommentsPlaceholderProps;
              if (b.state === "COLLAPSED" && y !== "ADMIN_HIDDEN")
                return C
                  ? null
                  : i.jsx(
                      "li",
                      {
                        children: i.jsx(
                          c("CometUFIThreadedComponentDecorator.react"),
                          {
                            depth: f,
                            hasChildren: !1,
                            isLast: d === I.length - 1 && !J,
                            isParentLast: l,
                            type: "hidden-placeholder",
                            children: i.jsx(
                              c("CometUFIHiddenCommentsPlaceholder.react"),
                              babelHelpers["extends"]({}, h(), {
                                commentIDs: b.comments.map(function (a) {
                                  return a.id;
                                }),
                              })
                            ),
                          }
                        ),
                      },
                      "hidden-placeholder-" + d
                    );
              return b.state !== "VISIBLE" && y !== "ADMIN_HIDDEN"
                ? null
                : b.comments.map(function (h, j) {
                    return i.jsx(
                      "li",
                      {
                        "data-testid": void 0,
                        children: i.jsx(
                          c("CometUFIThreadedComponentDecorator.react"),
                          {
                            depth: f,
                            hasChildren: !1,
                            isLast:
                              d === I.length - 1 &&
                              j === b.comments.length - 1 &&
                              K == null &&
                              !J,
                            isParentLast: l,
                            type: "comment",
                            children: i.jsx(c("CometUFICommentInGroup.react"), {
                              actor: A,
                              comment: h,
                              commentsListRenderProps: a,
                              composerPluginProps: B,
                              editingCommentID: e,
                              feedLocation: k,
                              feedback: z,
                              feedbackSource: g,
                              focusCommentID: n.focusCommentID,
                              isFirstRow: f === 0 && j === 0,
                              locallyComposedCommentIds: m,
                              onCommitCommentCreate: o,
                              onEditCommentError: p,
                              onTranslateAllClick: r,
                              realtimeCommentIds: s,
                              renderedTranslationCommentID: t,
                              setEditingCommentID: u,
                              setRenderedTranslationCommentID: v,
                              shouldRequestTranslationForAllComments: w,
                              storyRenderLocation: x,
                              topLevelViewOption: y,
                              viewOption: G,
                            }),
                          }
                        ),
                      },
                      h.client_id != null && h.client_id !== ""
                        ? h.client_id
                        : h.id
                    );
                  });
            });
            q(
              D != null ||
                K != null ||
                J ||
                E.find(function (a) {
                  return a != null;
                }) != null
            );
            return i.jsxs("div", {
              children: [
                D,
                i.jsx("ul", { children: E }),
                K,
                J &&
                  A != null &&
                  i.jsx(c("CometUFIThreadedComponentDecorator.react"), {
                    depth: f,
                    hasChildren: !1,
                    isLast: !0,
                    isParentLast: l,
                    type: "comment",
                    children: i.jsx(
                      c("CometUFIComposer.react"),
                      babelHelpers["extends"]({}, B, h(), {
                        actor: A,
                        commentAction: "ADD",
                        commentID: null,
                        depth: f,
                        onCommit: o,
                        xstyle: j.composerNested,
                      })
                    ),
                  }),
              ],
            });
          },
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIFullThreadedSubRepliesExpander.react",
  [
    "fbt",
    "ix",
    "CometPlaceholder.react",
    "CometProgressRingIndeterminate.react",
    "CometUFICommentsPagerBase.react",
    "CometUFIFullThreadedSubRepliesListDataProvider.react",
    "CometUFIFullThreadedSubRepliesListRenderer.react",
    "CometUFIThreadedComponentDecorator.react",
    "NumberFormat",
    "RelayUFI2CommentsKeyContext",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { isExpanded: !1 }),
          (c.$1 = null),
          (c.$2 = null),
          (c.$3 = function (a) {
            var b = c.props.nestedCommentListProps.listRef;
            typeof b === "function" && b(a);
            c.$2 != null &&
              a != null &&
              (a.handleReplyToComment(c.$2), (c.$2 = null));
          }),
          (c.expandList = function () {
            c.setState({ isExpanded: !0 });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.handleReplyToComment = function (a) {
        (this.$2 = a), this.expandList();
      };
      e.render = function () {
        var a = this,
          b = this.props,
          e = b.editingCommentID,
          f = b.feedbackSource,
          g = b.feedbackTargetID,
          k = b.feedLocation,
          l = b.focusCommentID,
          m = b.isInitiallyExpanded,
          n = b.isParentLast,
          o = b.locallyComposedCommentIds,
          p = b.nestedCommentListProps,
          q = b.nestedCommentsCount,
          r = b.onCommitCommentCreate,
          s = b.onEditCommentError,
          t = b.onListRendered,
          u = b.onTranslateAllClick,
          v = b.realtimeCommentIds,
          w = b.renderedTranslationCommentID,
          x = b.setEditingCommentID,
          y = b.setRenderedTranslationCommentID,
          z = b.shouldRequestTranslationForAllComments,
          A = b.storyRenderLocation,
          B = b.topLevelViewOption;
        b = this.state.isExpanded || m;
        this.$1 == null && (this.$1 = q);
        var C = h._({ "*": { "*": "{count} Replies", _1: "{count} Reply" } }, [
          h._param("count", d("NumberFormat").formatInteger(q), [0, q]),
          h._plural(q),
        ]);
        m = function (b) {
          var e;
          q === 0
            ? (t(b),
              (e = b
                ? j.jsx("div", {
                    className:
                      "h4z51re5 osnr6wyh rv4hoivh jktsbyx5 m7zwrmfr rq0escxv",
                    children: j.jsx(c("CometProgressRingIndeterminate.react"), {
                      color: "disabled",
                      size: 16,
                    }),
                  })
                : j.jsx("span", {})))
            : (t(!0),
              (e = j.jsx(c("CometUFICommentsPagerBase.react"), {
                depth: 2,
                freshIndicatorVisible: a.$1 != null && q > a.$1,
                icon: d("fbicon")._(i("1602003"), 16),
                isLoading: b,
                onPress: a.expandList,
                children: C,
              })));
          return j.jsx(c("CometUFIThreadedComponentDecorator.react"), {
            depth: 2,
            hasChildren: !1,
            isLast: !0,
            isParentLast: n,
            type: q > 0 ? "pager" : "comment",
            children: e,
          });
        };
        return b
          ? j.jsx(c("CometPlaceholder.react"), {
              fallback: m(!0),
              children: j.jsx(c("RelayUFI2CommentsKeyContext").Consumer, {
                children: function (b) {
                  return j.jsx(
                    c("CometUFIFullThreadedSubRepliesListDataProvider.react"),
                    babelHelpers["extends"](
                      {
                        commentsKey: b,
                        feedLocation: k,
                        feedbackSource: f,
                        feedbackTargetID: g,
                        focusCommentID: l,
                        topLevelViewOption: B,
                      },
                      {
                        children: function (b) {
                          b = b.feedback;
                          return b == null
                            ? null
                            : j.jsx(
                                c(
                                  "CometUFIFullThreadedSubRepliesListRenderer.react"
                                ),
                                {
                                  editingCommentID: e,
                                  feedLocation: k,
                                  feedback: b,
                                  feedbackSource: f,
                                  isParentLast: n,
                                  locallyComposedCommentIds: o,
                                  nestedCommentListProps: babelHelpers[
                                    "extends"
                                  ]({}, p, { listRef: a.$3 }),
                                  onCommitCommentCreate: r,
                                  onEditCommentError: s,
                                  onListRendered: t,
                                  onTranslateAllClick: u,
                                  realtimeCommentIds: v,
                                  renderedTranslationCommentID: w,
                                  setEditingCommentID: x,
                                  setRenderedTranslationCommentID: y,
                                  shouldRequestTranslationForAllComments: z,
                                  storyRenderLocation: A,
                                  topLevelViewOption: B,
                                }
                              );
                        },
                      }
                    )
                  );
                },
              }),
            })
          : m(!1);
      };
      return b;
    })(j.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIReparentedReplyNotice.react",
  [
    "fbt",
    "CometRelay",
    "CometUFIReparentedReplyNotice_actor.graphql",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = a.actor;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometUFIReparentedReplyNotice_actor.graphql")),
        a
      );
      a = a.name;
      if (a == null) {
        c("recoverableViolation")(
          "Cannot display notice on reparented reply without valid comment author name",
          "ufi2"
        );
        return null;
      }
      return j.jsx("div", {
        className: "ipjc6fyt id2edr1m scwd0bx6 pipptul6",
        children: h._("The comment {name} is replying to has been deleted.", [
          h._param("name", a),
        ]),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUFIFullThreadedReplyContainer.react",
  [
    "CometRelay",
    "CometUFIFullThreadedReplyContainer_comment.graphql",
    "CometUFIFullThreadedSubRepliesExpander.react",
    "CometUFIReparentedReplyNotice.react",
    "CometUFIThreadedComponentDecorator.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useState;
    function a(a) {
      var e,
        f,
        g,
        l = a.children,
        m = a.comment,
        n = a.depth,
        o = a.editingCommentID,
        p = a.expandIfChildrenLessThan,
        q = a.feedbackSource,
        r = a.feedLocation,
        s = a.focusCommentID,
        t = a.isInitiallyExpanded,
        u = a.isLast,
        v = a.locallyComposedCommentIds,
        w = a.nestedCommentListProps,
        x = a.onCommitCommentCreate,
        y = a.onEditCommentError,
        z = a.onTranslateAllClick,
        A = a.realtimeCommentIds,
        B = a.renderedTranslationCommentID,
        C = a.setEditingCommentID,
        D = a.setRenderedTranslationCommentID,
        E = a.shouldRequestTranslationForAllComments,
        F = a.storyRenderLocation;
      a = a.topLevelViewOption;
      m = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometUFIFullThreadedReplyContainer_comment.graphql")),
        m
      );
      e = (e = m.feedback) == null ? void 0 : e.id;
      f =
        (f =
          (f = m.feedback) == null
            ? void 0
            : (f = f.sub_replies_count) == null
            ? void 0
            : f.count) != null
          ? f
          : 0;
      var G = w.subRepliesExpanderRef;
      w = babelHelpers.objectWithoutPropertiesLoose(w, [
        "subRepliesExpanderRef",
      ]);
      var H = k(f > 0),
        I = H[0],
        J = H[1];
      H = j(
        function (a) {
          return J(a);
        },
        [J]
      );
      g =
        ((g = m.feedback) == null
          ? void 0
          : g.is_hide_transparency_enabled_for_actor) === !0 &&
        m.spam_display_mode != null &&
        m.spam_display_mode !== "none";
      return i.jsxs(i.Fragment, {
        children: [
          m.is_subreply_parent_deleted === !0 &&
            m.author != null &&
            i.jsx(
              c("CometUFIThreadedComponentDecorator.react"),
              {
                depth: n,
                hasChildren: !1,
                isLast: !1,
                type: "label",
                children: i.jsx(c("CometUFIReparentedReplyNotice.react"), {
                  actor: m.author,
                }),
              },
              "reparented_notice"
            ),
          i.jsx(
            c("CometUFIThreadedComponentDecorator.react"),
            {
              depth: n,
              hasChildren: !g && I,
              isLast: u,
              type: "comment",
              children: l,
            },
            "wrapped_reply"
          ),
          e != null &&
            !g &&
            i.jsx(c("CometUFIFullThreadedSubRepliesExpander.react"), {
              editingCommentID: o,
              feedLocation: r,
              feedbackSource: q,
              feedbackTargetID: e,
              focusCommentID: s,
              isInitiallyExpanded: t || (p > 0 && f > 0 && f < p),
              isParentLast: u,
              locallyComposedCommentIds: v,
              nestedCommentListProps: w,
              nestedCommentsCount: f,
              onCommitCommentCreate: x,
              onEditCommentError: y,
              onListRendered: H,
              onTranslateAllClick: z,
              realtimeCommentIds: A,
              ref: G,
              renderedTranslationCommentID: B,
              setEditingCommentID: C,
              setRenderedTranslationCommentID: D,
              shouldRequestTranslationForAllComments: E,
              storyRenderLocation: F,
              topLevelViewOption: a,
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
  "CometUFIFullThreadedRepliesListRenderer.react",
  [
    "CometRelay",
    "CometUFICommentInGroup.react",
    "CometUFICommentsFilterFallbackWarning.react",
    "CometUFICommentsPager.react",
    "CometUFIComposer.react",
    "CometUFIFullThreadedRepliesListRenderer_renderer.graphql",
    "CometUFIFullThreadedReplyContainer.react",
    "CometUFIHiddenCommentsPlaceholder.react",
    "CometUFIRepliesCollapser.react",
    "CometUFIRepliesExpander.react",
    "CometUFIThreadedComponentDecorator.react",
    "UFI2ViewOption",
    "react",
    "stylex",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useState,
      k = {
        composerNested: {
          paddingTop: "ecm0bbzt",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "sj5x9vvc",
          paddingStart: "scb9dxdr",
        },
        filterWarning: {
          paddingTop: "cxgpxx05",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "sj5x9vvc",
          paddingStart: "tw6a2znq",
        },
        root: {
          marginTop: "kvgmc6g5",
          paddingTop: "jb3vyjys",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "qt6c0cv9",
          paddingStart: "a8nywdso",
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
      if (v.depth === 0)
        throw c("unrecoverableViolation")(
          "CometUFIFullThreadedRepliesListRenderer: Must be rendered at depth 1",
          "multithreading"
        );
      a = j([]);
      var B = a[0];
      a = a[1];
      B.includes(g) || a([].concat(B, [g]));
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometUFIFullThreadedRepliesListRenderer_renderer.graphql")),
        u
      );
      u =
        (u =
          (u = a.full_threading_config) == null
            ? void 0
            : u.should_auto_expand_shorter_threads) != null
          ? u
          : !1;
      var C = u
          ? (u =
              (u = a.full_threading_config) == null
                ? void 0
                : u.auto_expand_shorter_thread_for_children_less_than) != null
            ? u
            : 0
          : 0,
        D =
          (a == null
            ? void 0
            : (u = a.full_threading_config) == null
            ? void 0
            : (a = u.feedback) == null
            ? void 0
            : a.is_hide_transparency_enabled_for_actor) === !0,
        E = v.Selectors,
        F = v.depth;
      u = v.getComposerProps;
      a = v.getFilterWarningPropsForNewerComments;
      var G = v.getFilterWarningPropsForOlderComments,
        H = v.getHiddenCommentsPlaceholderProps,
        I = v.getNestedCommentsListProps,
        J = v.getPagerPropsForNewerComments,
        K = v.getPagerPropsForOlderComments,
        L = v.getRepliesCollapserProps,
        M = v.getRepliesExpanderProps,
        N = v.getShouldInitiallyExpandSubRepliesForComment,
        O = v.listState,
        P = d("UFI2ViewOption").shouldDisplayInReverse(A),
        Q = E.getVisibleCommentsWithHiddenCommentsCollapsed({
          depth: F,
          reverse: P,
          state: O,
        }),
        R =
          e != null &&
          E.isComposerVisible({ depth: F, state: O }) &&
          A !== "ADMIN_HIDDEN",
        S = E.isListExpanded({ depth: F, state: O }),
        T = E.isRepliesExpanderLoading({ depth: F, state: O }),
        U = E.getVisibleCommentsCount({ depth: F, state: O }),
        V = P ? K() : J();
      J = P ? J() : K();
      K = [V, J].map(function (a) {
        return E.isPagerVisible({ depth: F, direction: a.direction, state: O });
      });
      var W = K[0],
        X = K[1];
      K = [V, J].map(function (a, b) {
        return (b === 0 && !W) || (b === 1 && !X)
          ? null
          : i.jsx(c("CometUFIThreadedComponentDecorator.react"), {
              depth: F,
              hasChildren: !1,
              isLast: !R && (b === 1 || (U === 0 && !X)),
              type: "pager",
              children: i.jsx(
                c("CometUFICommentsPager.react"),
                babelHelpers["extends"]({}, a)
              ),
            });
      });
      V = K[0];
      var Y = K[1];
      J = P ? G() : a();
      K = P ? a() : G();
      var Z = A === "RANKED_THREADED" || A === "ADMIN_HIDDEN";
      P = [J, K].map(function (a, b) {
        return (
          Z &&
          i.jsx(c("CometUFIThreadedComponentDecorator.react"), {
            depth: F,
            hasChildren: !1,
            isLast: b === 1 && !R,
            type: "label",
            children: i.jsx(
              c("CometUFICommentsFilterFallbackWarning.react"),
              babelHelpers["extends"]({}, a, {
                viewOption: A,
                xstyle: k.filterWarning,
              })
            ),
          })
        );
      });
      a = P[0];
      G = P[1];
      if (!S || T)
        return i.jsx(c("CometUFIThreadedComponentDecorator.react"), {
          depth: F,
          hasChildren: !1,
          isLast: !0,
          type: "pager",
          children: i.jsx(
            c("CometUFIRepliesExpander.react"),
            babelHelpers["extends"]({}, M())
          ),
        });
      J = a != null && A !== "ADMIN_HIDDEN" && Y != null;
      return i.jsxs("div", {
        className: c("stylex")(k.root),
        children: [
          i.jsx(c("CometUFIThreadedComponentDecorator.react"), {
            depth: F,
            hasChildren: !1,
            isLast: !1,
            type: "pager",
            children: i.jsx(
              c("CometUFIRepliesCollapser.react"),
              babelHelpers["extends"]({}, L())
            ),
          }),
          (K = V) != null ? K : J && a,
          U > 0
            ? i.jsx("ul", {
                children: Q.map(function (a, b) {
                  if (a.state === "COLLAPSED" && A !== "ADMIN_HIDDEN")
                    return D
                      ? null
                      : i.jsx(
                          "li",
                          {
                            children: i.jsx(
                              c("CometUFIThreadedComponentDecorator.react"),
                              {
                                depth: F,
                                hasChildren: !1,
                                isLast: b === Q.length - 1 && !R,
                                type: "hidden-placeholder",
                                children: i.jsx(
                                  c("CometUFIHiddenCommentsPlaceholder.react"),
                                  babelHelpers["extends"]({}, H(), {
                                    commentIDs: a.comments.map(function (a) {
                                      return a.id;
                                    }),
                                  })
                                ),
                              }
                            ),
                          },
                          "hidden-placeholder-" + b
                        );
                  return a.state !== "VISIBLE" && A !== "ADMIN_HIDDEN"
                    ? null
                    : a.comments.map(function (d, h) {
                        var j = N(d.id) || B.includes(d.id);
                        return i.jsx(
                          "li",
                          {
                            "data-testid": void 0,
                            children: i.jsx(
                              c("CometUFIFullThreadedReplyContainer.react"),
                              {
                                comment: d,
                                depth: F,
                                editingCommentID: g,
                                expandIfChildrenLessThan: C,
                                feedLocation: m,
                                feedbackSource: l,
                                focusCommentID: n,
                                isInitiallyExpanded: j,
                                isLast:
                                  b === Q.length - 1 &&
                                  h === a.comments.length - 1 &&
                                  !R &&
                                  Y == null,
                                locallyComposedCommentIds: o,
                                nestedCommentListProps: I(d.id),
                                onCommitCommentCreate: p,
                                onEditCommentError: q,
                                onTranslateAllClick: r,
                                realtimeCommentIds: s,
                                renderedTranslationCommentID: t,
                                setEditingCommentID: w,
                                setRenderedTranslationCommentID: x,
                                shouldRequestTranslationForAllComments: y,
                                storyRenderLocation: z,
                                topLevelViewOption: A,
                                children: i.jsx(
                                  c("CometUFICommentInGroup.react"),
                                  {
                                    actor: e,
                                    comment: d,
                                    commentsListRenderProps: v,
                                    composerPluginProps: f,
                                    editingCommentID: g,
                                    feedLocation: m,
                                    feedback: null,
                                    feedbackSource: l,
                                    focusCommentID: n,
                                    isFirstRow: F === 0 && h === 0,
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
                                  }
                                ),
                              }
                            ),
                          },
                          d.client_id != null && d.client_id !== ""
                            ? d.client_id
                            : d.id
                        );
                      });
                }),
              })
            : null,
          (P = Y) != null ? P : G,
          R &&
            e != null &&
            i.jsx(c("CometUFIThreadedComponentDecorator.react"), {
              depth: F,
              hasChildren: !1,
              isLast: !0,
              type: "comment",
              children: i.jsx(
                c("CometUFIComposer.react"),
                babelHelpers["extends"]({}, f, u(), {
                  actor: e,
                  commentAction: "ADD",
                  commentID: null,
                  depth: F,
                  onCommit: p,
                  xstyle: k.composerNested,
                })
              ),
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
  "CometUFIFullThreadedTopLevelCommentContainer.react",
  [
    "CometRelay",
    "CometUFIFullThreadedTopLevelCommentContainer_config.graphql",
    "CometUFIThreadedComponentDecorator.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useEffect,
      k = e.useState;
    function a(a) {
      var e = a.children,
        f = a.comment,
        g = a.config,
        l = a.getTotalRepliesCountForComment,
        m = a.isReplyComposerVisibleForComment,
        n = a.onRepliesListRendered,
        o = a.replyComposerVisible;
      a = a.totalRepliesCount;
      g = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometUFIFullThreadedTopLevelCommentContainer_config.graphql"
            )),
        g
      );
      var p = g.threaded_lines_enabled === !0 && g.curved_lines_enabled === !0;
      g = k(o || a > 0);
      o = g[0];
      var q = g[1];
      j(
        function () {
          if (!p) return;
          n(function (a) {
            var b = a.composerVisible;
            a = a.totalCount;
            q(b || a > 0);
          });
          q(m(f) || l(f) > 0);
          return function () {
            n(null);
          };
        },
        [f, p, n, q]
      );
      return i.jsx(c("CometUFIThreadedComponentDecorator.react"), {
        depth: 0,
        hasChildren: o,
        isLast: !1,
        type: "comment",
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
