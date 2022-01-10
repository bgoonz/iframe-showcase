if (self.CavalryLogger) {
  CavalryLogger.start_js(["tW73muX"]);
}

__d(
  "CometUserFollowMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = [{ kind: "Literal", name: "action_type", value: "FOLLOW" }],
        e = {
          args: null,
          kind: "FragmentSpread",
          name: "ProfileActionMutationUtils_action",
        },
        f = [
          { kind: "Literal", name: "action_type", value: "FOLLOWING_STATUS" },
        ],
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_active",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscribe_status",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "secondary_subscribe_status",
          storageKey: null,
        },
        j = { kind: "TypeDiscriminator", abstractKey: "__isProfileAction" },
        k = {
          alias: null,
          args: [
            { kind: "Literal", name: "icon_color", value: "fds-black" },
            { kind: "Literal", name: "icon_size", value: "16" },
            { kind: "Literal", name: "icon_variant", value: "filled" },
            { kind: "Variable", name: "scale", variableName: "scale" },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "icon_image",
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
        },
        n = {
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
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUserFollowMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "ActorSubscribeResponsePayload",
              kind: "LinkedField",
              name: "actor_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "subscribee",
                  plural: !1,
                  selections: [
                    c,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: d,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: [e],
                          storageKey: 'profile_action(action_type:"FOLLOW")',
                        },
                        {
                          alias: "following_status",
                          args: f,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: [e, g],
                          storageKey:
                            'profile_action(action_type:"FOLLOWING_STATUS")',
                        },
                        h,
                        i,
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
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUserFollowMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "ActorSubscribeResponsePayload",
              kind: "LinkedField",
              name: "actor_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "subscribee",
                  plural: !1,
                  selections: [
                    c,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: d,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: [c, j, k, l, m, n],
                          storageKey: 'profile_action(action_type:"FOLLOW")',
                        },
                        {
                          alias: "following_status",
                          args: f,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: [c, j, k, l, m, n, g],
                          storageKey:
                            'profile_action(action_type:"FOLLOWING_STATUS")',
                        },
                        h,
                        i,
                      ],
                      type: "User",
                      abstractKey: null,
                    },
                    l,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4451435638222552",
          metadata: {},
          name: "CometUserFollowMutation",
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
  "CometUserUnfollowMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "action_render_location",
          },
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
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
        },
        e = [
          { kind: "Literal", name: "action_type", value: "FOLLOW" },
          {
            kind: "Variable",
            name: "render_location",
            variableName: "action_render_location",
          },
        ],
        f = [
          {
            args: null,
            kind: "FragmentSpread",
            name: "ProfileActionMutationUtils_action",
          },
        ],
        g = [
          { kind: "Literal", name: "action_type", value: "FOLLOWING_STATUS" },
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscribe_status",
          storageKey: null,
        },
        i = [
          c,
          { kind: "TypeDiscriminator", abstractKey: "__isProfileAction" },
          {
            alias: null,
            args: [
              { kind: "Literal", name: "icon_color", value: "fds-black" },
              { kind: "Literal", name: "icon_size", value: "16" },
              { kind: "Literal", name: "icon_variant", value: "filled" },
              { kind: "Variable", name: "scale", variableName: "scale" },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon_image",
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
          d,
          {
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
          },
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
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUserUnfollowMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "ActorUnsubscribeResponsePayload",
              kind: "LinkedField",
              name: "actor_unsubscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "unsubscribee",
                  plural: !1,
                  selections: [
                    c,
                    d,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: e,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: f,
                          storageKey: null,
                        },
                        {
                          alias: "following_status",
                          args: g,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: f,
                          storageKey:
                            'profile_action(action_type:"FOLLOWING_STATUS")',
                        },
                        h,
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
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUserUnfollowMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "ActorUnsubscribeResponsePayload",
              kind: "LinkedField",
              name: "actor_unsubscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "unsubscribee",
                  plural: !1,
                  selections: [
                    c,
                    d,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: e,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: i,
                          storageKey: null,
                        },
                        {
                          alias: "following_status",
                          args: g,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: i,
                          storageKey:
                            'profile_action(action_type:"FOLLOWING_STATUS")',
                        },
                        h,
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
          ],
        },
        params: {
          id: "5309692819104954",
          metadata: {},
          name: "CometUserUnfollowMutation",
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
  "CometUFIFeedbackReactSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "useDefaultActor",
          },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = [c],
        e = [
          {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
            selections: [
              c,
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometUFIFeedbackReactMutation_feedback",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "UFI2ReactionsCount_feedback",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "UFI2TopReactions_feedback",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "liker",
            plural: !1,
            selections: d,
            storageKey: null,
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
                selections: d,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        h = {
          alias: "i18n_reaction_count",
          args: null,
          kind: "ScalarField",
          name: "reaction_count_reduced",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        j = [
          {
            kind: "Variable",
            name: "use_default_actor",
            variableName: "useDefaultActor",
          },
        ],
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      d = [
        {
          alias: null,
          args: null,
          concreteType: "Feedback",
          kind: "LinkedField",
          name: "feedback",
          plural: !1,
          selections: [
            c,
            {
              alias: null,
              args: null,
              concreteType: "Video",
              kind: "LinkedField",
              name: "associated_video",
              plural: !1,
              selections: d,
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
                        g,
                        c,
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
                      ],
                      storageKey: null,
                    },
                    h,
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
                i,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_empty",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: j,
              concreteType: "FeedbackReactionInfo",
              kind: "LinkedField",
              name: "viewer_feedback_reaction_info",
              plural: !1,
              selections: [g, c, f],
              storageKey: null,
            },
            h,
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
                  selections: [f, k, c],
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
              selections: [i],
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
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: j,
              concreteType: null,
              kind: "LinkedField",
              name: "viewer_actor",
              plural: !1,
              selections: [f, c, k],
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
          name: "liker",
          plural: !1,
          selections: [
            f,
            { kind: "TypeDiscriminator", abstractKey: "__isActor" },
            c,
          ],
          storageKey: null,
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
              selections: [f, c],
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
          name: "CometUFIFeedbackReactSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "feedback_like_subscribe",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: e,
                  type: "FeedbackLikeResponsePayload",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: e,
                  type: "FeedbackUnlikeResponsePayload",
                  abstractKey: null,
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFIFeedbackReactSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "feedback_like_subscribe",
              plural: !1,
              selections: [
                f,
                {
                  kind: "InlineFragment",
                  selections: d,
                  type: "FeedbackLikeResponsePayload",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: d,
                  type: "FeedbackUnlikeResponsePayload",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3416052685165398",
          metadata: { subscriptionName: "feedback_like_subscribe" },
          name: "CometUFIFeedbackReactSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometUFIFeedbackReactSubscription_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIFeedbackReactSubscription_feedback",
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
          name: "CometUFIFeedbackReactMutation_feedback",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "UFI2ReactionsCount_feedback",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "UFI2TopReactions_feedback",
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
  "CometUFIFeedbackReactSubscription_liker.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIFeedbackReactSubscription_liker",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
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
  "CometUFIFeedbackReactSubscription_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIFeedbackReactSubscription_viewer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actor",
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
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUFITypingSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = [
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
                name: "UFI2TypingIndicatorImpl_feedback",
              },
            ],
            storageKey: null,
          },
        ],
        d = [
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
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUFITypingSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "feedback_typing_subscribe",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: c,
                  type: "FeedbackStartTypingResponsePayload",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: c,
                  type: "FeedbackStopTypingResponsePayload",
                  abstractKey: null,
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometUFITypingSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "feedback_typing_subscribe",
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
                  selections: d,
                  type: "FeedbackStartTypingResponsePayload",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: d,
                  type: "FeedbackStopTypingResponsePayload",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "2548564581912271",
          metadata: { subscriptionName: "feedback_typing_subscribe" },
          name: "CometUFITypingSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometComposerMagicUploadsAttachmentAreaResource",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("JSResourceForInteraction")(
      "CometComposerMagicUploadsAttachmentArea.react"
    ).__setRef("CometComposerMagicUploadsAttachmentAreaResource");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ComposerBaseTypeaheadLayoutContextualStrategy.react",
  ["CometTypeaheadLayoutInlineStrategy.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.xstyles;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["xstyles"]);
      var e = d == null ? void 0 : d.viewXStyle_DO_NOT_USE;
      d = babelHelpers["extends"]({}, d, { viewXStyle_DO_NOT_USE: [e] });
      return h.jsx(
        c("CometTypeaheadLayoutInlineStrategy.react"),
        babelHelpers["extends"]({}, a, { ref: b, xstyles: d })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "ComposerPushViewTypeaheadLayoutContextualStrategy.react",
  ["CometTypeaheadLayoutInlineStrategy.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(
        c("CometTypeaheadLayoutInlineStrategy.react"),
        babelHelpers["extends"]({}, a, { ref: b })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "FeedInlineComposerMagicUploadsSprout.react",
  [
    "fbt",
    "ix",
    "CometComposerMagicUploadsAttachmentAreaResource",
    "CometFeedInlineComposerSprout.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.onHoverIn,
        d = a.onHoverOut,
        e = a.onPressIn,
        f = a.showComposerDialog;
      a = a.triggerRef;
      var g = function () {
        c("CometComposerMagicUploadsAttachmentAreaResource").load(),
          f({ additionalMediaAttachmentItems: [] });
      };
      return j.jsx(c("CometFeedInlineComposerSprout.react"), {
        imageSrc: i("1260669"),
        label: h._("Photo/Video"),
        onHoverIn: b,
        onHoverOut: d,
        onPress: g,
        onPressIn: e,
        triggerRef: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUserFollowMutation",
  [
    "CometRelay",
    "CometUserFollowMutation.graphql",
    "ProfileActionFollowingMutationUtils",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometUserFollowMutation.graphql"));
    function j(a, b) {
      var c;
      return {
        actor_subscribe: {
          subscribee: {
            __typename: "User",
            following_status: babelHelpers["extends"](
              {},
              d(
                "ProfileActionFollowingMutationUtils"
              ).getOptimisticFollowingActionForSubscriptionStatus(
                (c = a) != null ? c : "REGULAR_FOLLOW",
                b
              ),
              { is_active: !1 }
            ),
            id: b,
            profile_action: babelHelpers["extends"](
              {},
              d(
                "ProfileActionFollowingMutationUtils"
              ).getOptimisticFollowActionForSubscriptionStatus(
                (c = a) != null ? c : "REGULAR_FOLLOW",
                b
              )
            ),
            secondary_subscribe_status: a,
            subscribe_status: "IS_SUBSCRIBED",
          },
        },
      };
    }
    function a(a, b) {
      var c = b.onError,
        e = b.onSuccess,
        f = b.secondarySubscribeStatus,
        g = b.subscribeLocation;
      b = b.userID;
      d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: e,
        onError: c,
        optimisticResponse: j(f, b),
        variables: {
          input: {
            secondary_subscribe_status: f,
            subscribe_location: g,
            subscribee_id: b,
          },
          scale: d("WebPixelRatio").get(),
        },
      });
    }
    function c(a, b) {
      var c = b.onError,
        e = b.onSuccess,
        f = b.secondarySubscribeStatus,
        g = b.subscribeLocation;
      b = b.userID;
      d("CometRelay").enqueueMutation(a, {
        mutation: i,
        onCompleted: e,
        onError: c,
        optimisticResponse: j(f, b),
        variables: {
          input: {
            secondary_subscribe_status: f,
            subscribe_location: g,
            subscribee_id: b,
          },
          scale: d("WebPixelRatio").get(),
        },
      });
    }
    g.commit = a;
    g.enqueue = c;
  },
  98
);
__d(
  "CometUserUnfollowMutation",
  [
    "CometRelay",
    "CometUserUnfollowMutation.graphql",
    "ProfileActionFollowingMutationUtils",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometUserUnfollowMutation.graphql"));
    function j(a) {
      return {
        actor_unsubscribe: {
          unsubscribee: {
            __typename: "User",
            following_status: d(
              "ProfileActionFollowingMutationUtils"
            ).getOptimisticFollowingActionForSubscriptionStatus("UNFOLLOW", a),
            id: a,
            profile_action: d(
              "ProfileActionFollowingMutationUtils"
            ).getOptimisticFollowActionForSubscriptionStatus("UNFOLLOW", a),
            subscribe_status: "CAN_SUBSCRIBE",
          },
        },
      };
    }
    function a(a, b) {
      var c = b.actionRenderLocation,
        e = b.onError,
        f = b.onSuccess,
        g = b.subscribeLocation;
      b = b.userID;
      d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: f,
        onError: e,
        optimisticResponse: j(b),
        variables: {
          action_render_location: c,
          input: { subscribe_location: g, unsubscribee_id: b },
          scale: d("WebPixelRatio").get(),
        },
      });
    }
    function c(a, b) {
      var c = b.actionRenderLocation,
        e = b.onError,
        f = b.onSuccess,
        g = b.subscribeLocation;
      b = b.userID;
      d("CometRelay").enqueueMutation(a, {
        mutation: i,
        onCompleted: f,
        onError: e,
        optimisticResponse: j(b),
        variables: {
          action_render_location: c,
          input: { subscribe_location: g, unsubscribee_id: b },
          scale: d("WebPixelRatio").get(),
        },
      });
    }
    g.commit = a;
    g.enqueue = c;
  },
  98
);
__d(
  "CometUFIFeedbackReactSubscription",
  [
    "CometRelay",
    "CometUFIFeedbackReactSubscription.graphql",
    "CometUFIFeedbackReactSubscription_feedback.graphql",
    "CometUFIFeedbackReactSubscription_liker.graphql",
    "CometUFIFeedbackReactSubscription_viewer.graphql",
    "emptyFunction",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k;
    h !== void 0
      ? h
      : (h = b("CometUFIFeedbackReactSubscription_feedback.graphql"));
    i !== void 0
      ? i
      : (i = b("CometUFIFeedbackReactSubscription_liker.graphql"));
    j !== void 0
      ? j
      : (j = b("CometUFIFeedbackReactSubscription_viewer.graphql"));
    var l =
      k !== void 0 ? k : (k = b("CometUFIFeedbackReactSubscription.graphql"));
    function a(a, b, e) {
      return c("gkx")("1352845")
        ? { dispose: c("emptyFunction") }
        : d("CometRelay").requestSubscription(a, {
            subscription: l,
            updater: function (a, b) {
              var c, d;
              c =
                (c = b.feedback_like_subscribe) == null
                  ? void 0
                  : (c = c.liker) == null
                  ? void 0
                  : c.id;
              d =
                (d = b.feedback_like_subscribe) == null
                  ? void 0
                  : (d = d.viewer) == null
                  ? void 0
                  : (d = d.actor) == null
                  ? void 0
                  : d.id;
              if (c !== d) {
                b =
                  (c = b.feedback_like_subscribe) == null
                    ? void 0
                    : (d = c.feedback) == null
                    ? void 0
                    : d.id;
                if (b !== void 0 && b !== null) {
                  c = a.get(b);
                  c && c.setValue(!0, "is_unseen");
                }
              }
            },
            variables: { input: b, useDefaultActor: e },
          });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "CometUFITypingSubscription",
  ["CometRelay", "CometUFITypingSubscription.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometUFITypingSubscription.graphql"));
    function a(a, b, c) {
      return d("CometRelay").requestSubscription(a, {
        onNext: c && c.onNext,
        subscription: i,
        variables: { input: { feedback_id: b } },
      });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "CometUFIViewOptionsSelectorMenu.react",
  ["CometMenu.react", "CometMenuItem.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.onChange;
      a = a.viewOptions;
      a = a.filter(Boolean);
      return h.jsx(c("CometMenu.react"), {
        withArrow: !0,
        children: a.map(function (a) {
          return h.jsx(
            c("CometMenuItem.react"),
            {
              onClick: function () {
                a.value != null && b(a.value);
              },
              primaryText: a.title || "",
              secondaryText: a.description,
            },
            a.value
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
  "CometFeedStoryMenuActionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743378");
    c = b("FalcoLoggerInternal").create("comet_feed_story_menu_action", a);
    e.exports = c;
  },
  null
);
__d(
  "DiscoveryHubClickUnitFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743575");
    c = b("FalcoLoggerInternal").create("discovery_hub_click_unit", a);
    e.exports = c;
  },
  null
);
__d(
  "CovidHealthAuthoritySource",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({
      CDC: "cdc.gov",
      GAVI_THE_VACCINE_ALLIANCE: "GAVI, the Vaccine Alliance",
      WORLD_HEALTH_ORGANIZATION: "World Health Organization",
      WORLD_HEALTH_ORGANIZATION_AFRICAN_REGION:
        "World Health Organization African Region",
      WORLD_HEALTH_ORGANIZATION_EUROPEAN_REGION:
        "World Health Organization European Region",
    });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "GoodwillAssistedCreationConfigName",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      DIY: "diy",
      FATHERS_DAY: "fathers_day",
      FRIEND_BIRTHDAY: "friend_birthday",
      FRIENDVERSARY: "friendversary",
      MOTHERS_DAY: "mothers_day",
      SIBLINGS_DAY: "siblings_day",
      VALENTINES_DAY: "valentines_day",
    });
    f["default"] = a;
  },
  66
);
__d(
  "XCometDiscoveryHubUnitControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/hubs/{hub}/{unit_id}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
