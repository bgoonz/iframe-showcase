if (self.CavalryLogger) {
  CavalryLogger.start_js(["t2GkU2d"]);
}

__d(
  "StoriesCardActionLinks_actionLinks.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardActionLinks_actionLinks",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "action_links",
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
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "title",
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
  "StoriesCardFooter_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
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
            name: "StoriesCardMediaCaption_message",
          },
        ],
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "showSuggestedStickerReplies",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "StoriesCardFooter_card",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesCardActionLinks_actionLinks",
          },
          {
            alias: null,
            args: null,
            concreteType: "StoryCardStoryInfo",
            kind: "LinkedField",
            name: "story_card_info",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "StoriesCardReactionSent_cardInfo",
              },
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "caller_id", value: "web_stories" },
                ],
                concreteType: null,
                kind: "LinkedField",
                name: "guide_suggestions",
                plural: !0,
                selections: [
                  {
                    args: [
                      {
                        kind: "Variable",
                        name: "showSuggestedStickerReplies",
                        variableName: "showSuggestedStickerReplies",
                      },
                    ],
                    kind: "FragmentSpread",
                    name: "StoriesContextualReplyBar_suggestions",
                  },
                ],
                storageKey: 'guide_suggestions(caller_id:"web_stories")',
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesCardMediaCaption_story",
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
                name: "media",
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
                    selections: [a],
                    type: "Photo",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      a,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "broadcast_status",
                        storageKey: null,
                      },
                    ],
                    type: "Video",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Story",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardFooter_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardFooter_owner",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardReactionSent_owner",
        },
      ],
      type: "CameraPostBucketOwnerUnion",
      abstractKey: "__isCameraPostBucketOwnerUnion",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardReactionSent_cardInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardReactionSent_cardInfo",
      selections: [
        {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 10 }],
          concreteType: "StoryCardReactionsConnection",
          kind: "LinkedField",
          name: "story_card_reactions",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "StoryCardReactionsEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerMontageMessageReaction",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "messaging_actor",
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
                      concreteType:
                        "MessengerMontageMessageActionsOfReactionConnection",
                      kind: "LinkedField",
                      name: "messaging_actions",
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesLightweightViewerReactions_reactions",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: "story_card_reactions(first:10)",
        },
      ],
      type: "StoryCardStoryInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardReactionSent_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        b = [a];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "StoriesCardReactionSent_owner",
        selections: [
          {
            kind: "InlineFragment",
            selections: b,
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: b,
            type: "Page",
            abstractKey: null,
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
              a,
            ],
            type: "User",
            abstractKey: null,
          },
        ],
        type: "CameraPostBucketOwnerUnion",
        abstractKey: "__isCameraPostBucketOwnerUnion",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardHeader_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "shouldEnableLiveInStories" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardHeader_card",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creation_time",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "StoryCardStoryInfo",
          kind: "LinkedField",
          name: "story_card_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "DirectMessageThreadBucket",
              kind: "LinkedField",
              name: "bucket",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "camera_post_type",
                  storageKey: null,
                },
                {
                  condition: "shouldEnableLiveInStories",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesCardSingleAuthorHeaderWrapper_bucket",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesCardPageStoryHeader_bucket",
                    },
                  ],
                },
              ],
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesCardSingleAuthorHeaderWrapper_attribution",
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
  "StoriesCardHeader_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardHeader_owner",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardSingleAuthorHeaderWrapper_owner",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardPageStoryHeader_owner",
        },
      ],
      type: "CameraPostBucketOwnerUnion",
      abstractKey: "__isCameraPostBucketOwnerUnion",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardPageStoryHeader_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardPageStoryHeader_bucket",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardSingleAuthorHeaderWrapper_bucket",
        },
      ],
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardPageStoryHeader_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardPageStoryHeader_owner",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardSingleAuthorHeaderWrapper_owner",
        },
      ],
      type: "CameraPostBucketOwnerUnion",
      abstractKey: "__isCameraPostBucketOwnerUnion",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardSingleAuthorHeaderWrapper_attribution.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardSingleAuthorHeaderWrapper_attribution",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardSingleAuthorHeaderLive_attribution",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardSingleAuthorHeader_attribution",
        },
      ],
      type: "StoryCardStoryInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardSingleAuthorHeaderWrapper_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardSingleAuthorHeaderWrapper_bucket",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardSingleAuthorHeaderLive_bucket",
        },
      ],
      type: "StoryBucket",
      abstractKey: "__isStoryBucket",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardSingleAuthorHeaderWrapper_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardSingleAuthorHeaderWrapper_owner",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardSingleAuthorHeaderLive_owner",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardSingleAuthorHeader_owner",
        },
      ],
      type: "CameraPostBucketOwnerUnion",
      abstractKey: "__isCameraPostBucketOwnerUnion",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardMediaCaption_message.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardMediaCaption_message",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardLongText_message",
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
  "StoriesCardMediaCaption_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardMediaCaption_story",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardLongText_story",
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
  "StoriesCardOverlayExternalSong_overlay.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardOverlayExternalSong_overlay",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "StoryOverlayRectangle",
          kind: "LinkedField",
          name: "link_bounds",
          plural: !1,
          selections: [
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
      ],
      type: "StoryOverlayExternalSong",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardReactionPlaybackLayout_animations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardReactionPlaybackLayout_animations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesLWRPlayback_animations",
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
  "StoriesCardReactionPlaybackLayout_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardReactionPlaybackLayout_card",
      selections: [
        { args: null, kind: "FragmentSpread", name: "StoriesLWRPlayback_card" },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesLWRPlayback_animations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesLWRPlayback_animations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useStoriesLWR_animations",
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
  "StoriesLWRPlayback_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesLWRPlayback_card",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryCardStoryInfo",
          kind: "LinkedField",
          name: "story_card_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [{ kind: "Literal", name: "first", value: 10 }],
              concreteType: "StoryCardReactionsConnection",
              kind: "LinkedField",
              name: "story_card_reactions",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "StoryCardReactionsEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "MessengerMontageMessageReaction",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "MessengerMontageMessageActionsOfReactionConnection",
                          kind: "LinkedField",
                          name: "messaging_actions",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "MessengerMontageMessageActionsOfReactionEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "MessengerMontageMessageAction",
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "reaction",
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
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: "story_card_reactions(first:10)",
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
  "StoriesRecoverWarningScreenButton_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesRecoverWarningScreenButton_data",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "content_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "render_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "top_objectionable_category",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "inform_session_id",
          storageKey: null,
        },
      ],
      type: "OverlayWarningScreenViewModel",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesLightweightViewerReactions_reactions.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesLightweightViewerReactions_reactions",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "MessengerMontageMessageActionsOfReactionConnection",
          kind: "LinkedField",
          name: "messaging_actions",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessengerMontageMessageActionsOfReactionEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerMontageMessageAction",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "reaction",
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
      type: "MessengerMontageMessageReaction",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseCardOptionMenuTrigger_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseCardOptionMenuTrigger_card",
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
          name: "StoriesSuspenseCardOptionMenu_card",
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
  "StoriesSuspenseCardOptionMenuTrigger_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseCardOptionMenuTrigger_owner",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseCardOptionMenu_owner",
        },
      ],
      type: "CameraPostBucketOwnerUnion",
      abstractKey: "__isCameraPostBucketOwnerUnion",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseCardOverlays_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseCardOverlays_card",
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
              name: "media",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "height", value: 1920 },
                    { kind: "Variable", name: "scale", variableName: "scale" },
                    { kind: "Literal", name: "width", value: 1080 },
                  ],
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "image",
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
                      name: "width",
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
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "story_overlays",
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
                  documentName: "StoriesSuspenseCardOverlays_card",
                  fragmentName: "StoriesCardOverlayResharedPost_overlay",
                  fragmentPropName: "overlay",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryOverlayResharedPost",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "StoriesSuspenseCardOverlays_card",
                  fragmentName: "StoriesCardOverlayResharedContent_overlay",
                  fragmentPropName: "overlay",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryOverlayResharedContent",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "StoriesSuspenseCardOverlays_card",
                  fragmentName: "StoriesReactionSticker_overlay",
                  fragmentPropName: "overlay",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryOverlayReactionSticker",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "StoriesSuspenseCardOverlays_card",
                  fragmentName: "StoriesPollSticker_overlay",
                  fragmentPropName: "overlay",
                  kind: "ModuleImport",
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "style",
                  storageKey: null,
                },
              ],
              type: "StoryOverlayPollSticker",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "StoriesSuspenseCardOverlays_card",
                  fragmentName: "StoriesLinkSticker_link",
                  fragmentPropName: "link",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryOverlayLinkSticker",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "StoriesSuspenseCardOverlays_card",
                  fragmentName: "StoriesTagSticker_overlay",
                  fragmentPropName: "overlay",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryOverlayTagSticker",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "StoriesSuspenseCardOverlays_card",
                  fragmentName: "StoriesLiveSticker_overlay",
                  fragmentPropName: "overlay",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryOverlayLiveVideo",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "StoriesSuspenseCardOverlays_card",
                  fragmentName: "StoriesProductSticker_overlay",
                  fragmentPropName: "overlay",
                  kind: "ModuleImport",
                },
              ],
              type: "StoryOverlayProductSticker",
              abstractKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesCardOverlayExternalSong_overlay",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesPollSticker_story",
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
  "StoriesSuspenseCardOverlays_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseCardOverlays_owner",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesPollSticker_owner",
        },
      ],
      type: "CameraPostBucketOwnerUnion",
      abstractKey: "__isCameraPostBucketOwnerUnion",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseCard_animations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseCard_animations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardReactionPlaybackLayout_animations",
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
  "StoriesSuspenseCard_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "showSuggestedStickerReplies",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseCard_card",
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
          name: "organic_tracking",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "organic_tracking_linkshim_cb",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseCardMedia_media",
        },
        { args: null, kind: "FragmentSpread", name: "StoriesCardHeader_card" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseCardOverlays_card",
        },
        {
          args: [
            {
              kind: "Variable",
              name: "showSuggestedStickerReplies",
              variableName: "showSuggestedStickerReplies",
            },
          ],
          kind: "FragmentSpread",
          name: "StoriesCardFooter_card",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardReactionPlaybackLayout_card",
        },
        {
          alias: null,
          args: null,
          concreteType: "CopyrightBannerInfo",
          kind: "LinkedField",
          name: "copyright_banner_info",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "StoriesSuspenseCard_card",
              fragmentName: "CometCopyrightStoriesBanner_copyrightBannerInfo",
              fragmentPropName: "copyrightBannerInfo",
              kind: "ModuleImport",
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
  "StoriesSuspenseCard_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseCard_owner",
      selections: [
        { args: null, kind: "FragmentSpread", name: "StoriesCardHeader_owner" },
        { args: null, kind: "FragmentSpread", name: "StoriesCardFooter_owner" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseCardOverlays_owner",
        },
      ],
      type: "CameraPostBucketOwnerUnion",
      abstractKey: "__isCameraPostBucketOwnerUnion",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometButtonCommandStopper.react",
  ["CometComponentWithKeyCommands.react", "CometKeys", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = [
        {
          command: { key: c("CometKeys").SPACE },
          description: a.label,
          handler: function () {},
        },
        {
          command: { key: c("CometKeys").ENTER },
          description: a.label,
          handler: function () {},
        },
      ];
      return h.jsx(c("CometComponentWithKeyCommands.react"), {
        commandConfigs: b,
        debugName: "Button",
        children: a.children,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesArchiveBucketDataContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      archiveBucketData: {
        lowerBoundTime: "",
        nextDay: "",
        previousDay: "",
        storyArchiveID: "story_archive_ID",
        upperBoundTime: "",
      },
      initialBucketID: "",
      setArchiveBucketData: c("emptyFunction"),
    };
    e = a.createContext(b);
    g["default"] = e;
  },
  98
);
__d(
  "StoriesArchiveConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { CONNECTION_NAME: "StoriesArchiveContentPaneRoot_archived_cards" };
    b = {
      INITIAL_NEXTDAY: "initial_next_day",
      INITIAL_PREVIOUSDAY: "initial_previous_day",
    };
    f.ARCHIVE = a;
    f.BucketData = b;
  },
  66
);
__d(
  "StoriesCardActionLinks.react",
  [
    "CometRelay",
    "StoriesCTAButton.react",
    "StoriesCardActionLinks_actionLinks.graphql",
    "StoriesLoggerContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect;
    function a(a) {
      var e = a.actionLinks,
        f = a.setFooterHasContent;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesCardActionLinks_actionLinks.graphql")),
        e
      );
      var g =
        (a == null ? void 0 : (e = a.action_links) == null ? void 0 : e[0]) !=
        null;
      e =
        a == null
          ? void 0
          : (e = a.action_links) == null
          ? void 0
          : (e = e[0]) == null
          ? void 0
          : e.url;
      a =
        a == null
          ? void 0
          : (a = a.action_links) == null
          ? void 0
          : (a = a[0]) == null
          ? void 0
          : a.title;
      var l = j(c("StoriesLoggerContext")),
        m = l.logger;
      k(
        function () {
          g && f(!0);
        },
        [g, f]
      );
      return !g || e == null || a == null
        ? null
        : i.jsx("div", {
            className:
              "mrt03zmi ozuftl9m sej5wr8e tvfksri0 kvgmc6g5 taijpn5t j83agx80",
            children: i.jsx(c("StoriesCTAButton.react"), {
              link: e,
              onClick: function () {
                return m.openLinkLog();
              },
              title: a,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardMediaCaption.react",
  [
    "CometRelay",
    "StoriesCardLongText.react",
    "StoriesCardMediaCaption_message.graphql",
    "StoriesCardMediaCaption_story.graphql",
    "StoriesComposerUtils",
    "StoriesSuspensePauseContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useContext,
      l = e.useEffect;
    function a(a) {
      var e = a.message,
        f = a.setFooterHasContent;
      a = a.story;
      var g = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("StoriesCardMediaCaption_message.graphql")),
          e
        ),
        m = d("CometRelay").useFragment(
          i !== void 0 ? i : (i = b("StoriesCardMediaCaption_story.graphql")),
          a
        ),
        n = k(c("StoriesSuspensePauseContext")),
        o = n.setPause;
      n = function (a, b) {
        o(a, b);
      };
      var p = a != null || e != null;
      l(
        function () {
          p && f(!0);
        },
        [p, f]
      );
      return p
        ? j.jsx(c("StoriesCardLongText.react"), {
            fontColor: "white",
            isCaption: !0,
            isCenterAligned: !1,
            lineHeight:
              d("StoriesComposerUtils").FONT_SIZE *
              d("StoriesComposerUtils").DEFAULT_LINE_HEIGHT_RATIO,
            lines: 7,
            message: g,
            setPause: n,
            story: m,
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesLightweightViewerReactions.react",
  [
    "CometRelay",
    "StoriesLightweightReactionIcon.react",
    "StoriesLightweightViewerReactions_reactions.graphql",
    "orEmptyArray",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.maxReactions;
      a = a.reactions;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesLightweightViewerReactions_reactions.graphql")),
        a
      );
      if (e == null || e <= 0) return null;
      a = c("orEmptyArray")(
        a == null
          ? void 0
          : (a = a.messaging_actions) == null
          ? void 0
          : a.edges
      );
      a = a
        .reduce(function (a, b) {
          b = b == null ? void 0 : (b = b.node) == null ? void 0 : b.reaction;
          if (b === "" || b == null) return a;
          a.push(b);
          return a;
        }, [])
        .slice(-e);
      return a.length === 0
        ? null
        : i.jsx("div", {
            className: "j83agx80",
            children: a.map(function (a, b) {
              return i.jsx(
                "div",
                {
                  className: c("stylex").dedupe(
                    {
                      "align-items-1": "bp9cbjyn",
                      "display-1": "j83agx80",
                      "margin-start-1": "kkf49tns",
                    },
                    b === 0 ? { "margin-start-1": "hcukyx3x" } : null
                  ),
                  children: i.jsx(c("StoriesLightweightReactionIcon.react"), {
                    emojiUnicode: a,
                  }),
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
  "StoriesCardReactionSent.react",
  [
    "fbt",
    "CometRelay",
    "StoriesActorContext",
    "StoriesCardReactionSent_cardInfo.graphql",
    "StoriesCardReactionSent_owner.graphql",
    "StoriesConstants",
    "StoriesLightweightViewerReactions.react",
    "react",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useContext,
      m = e.useEffect,
      n = e.useRef;
    function o(a) {
      var b = a.name;
      return b == null || a.count == null || a.count <= 0
        ? null
        : k.jsx("div", {
            className:
              "g0qnabr5 ltmttdrg hzawbc8m rnx8an3s l9j0dhe7 d1544ag0 stjgntxs ni8dbmo4 h2rfc5pd jq4qci2q qrtewk5h",
            children: h._("Sent to {Story's owner's name}", [
              h._param("Story's owner's name", b),
            ]),
          });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    var p = function (a, b) {
      var c;
      a =
        a == null
          ? void 0
          : (a = a.story_card_reactions) == null
          ? void 0
          : (a = a.edges) == null
          ? void 0
          : (a = a[0]) == null
          ? void 0
          : a.node;
      c = a == null ? void 0 : (c = a.messaging_actor) == null ? void 0 : c.id;
      a =
        (a == null
          ? void 0
          : (a = a.messaging_actions) == null
          ? void 0
          : a.count) || 0;
      return c === b && a > 0;
    };
    function a(a) {
      var e = l(c("StoriesActorContext"));
      e = e.actorID;
      var f = a.cardInfo,
        g = a.owner,
        h = a.setFooterHasContent,
        q = a.setFooterShouldSlide;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesCardReactionSent_cardInfo.graphql")),
        f
      );
      f = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("StoriesCardReactionSent_owner.graphql")),
        g
      );
      var r = n(!1),
        s = p(a, e),
        t = !!c("usePrevious")(s);
      m(
        function () {
          !r.current && s && h(!0), (r.current = !0);
        },
        [s, h]
      );
      m(
        function () {
          !t && s && (h(!0), q(!0));
        },
        [t, s, h, q]
      );
      if (!s) return null;
      g = f == null ? void 0 : f.name;
      e = f == null ? void 0 : f.short_name;
      a =
        a == null
          ? void 0
          : (f = a.story_card_reactions) == null
          ? void 0
          : (a = f.edges) == null
          ? void 0
          : (f = a[0]) == null
          ? void 0
          : f.node;
      f =
        (a == null
          ? void 0
          : (f = a.messaging_actions) == null
          ? void 0
          : f.count) || 0;
      return k.jsxs("div", {
        className:
          "dbpd2lw6 ozuftl9m n851cfcs tvfksri0 kvgmc6g5 j83agx80 rq0escxv",
        children: [
          k.jsx(c("StoriesLightweightViewerReactions.react"), {
            maxReactions:
              d("StoriesConstants").ViewerSheetViewerList
                .MAX_REACTIONS_PER_VIEWER,
            reactions: a,
          }),
          k.jsx(o, { count: f, name: e != null ? e : g }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesFeedbackEditorStateContext",
  ["DeferredDraftEditor.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      contextualReplyRef: { current: null },
      contextualReplyShown: !1,
      contextualReplyTapped: !1,
      editorState: c("DeferredDraftEditor.react").createEmptyComposerState(),
      inputFocused: !1,
      mostRecentTappedID: null,
      onEmojiSelect: function (a) {},
      onFocus: function () {},
      onTextInputFocused: function (a) {},
      resetEditorState: function () {},
      setContextualReplyShown: function (a) {},
      setContextualReplyTapped: function (a) {},
      setEditorState: function (a) {},
      setInputFocused: function (a) {},
      setMostRecentTappedID: function (a) {},
      setShowLWR: function (a) {},
      showLWR: !1,
      textInputFocused: { current: !1 },
    };
    e = a.createContext(b);
    g["default"] = e;
  },
  98
);
__d(
  "StoriesCardFooter.react",
  [
    "CometRelay",
    "StoriesCardActionLinks.react",
    "StoriesCardFooter_card.graphql",
    "StoriesCardFooter_owner.graphql",
    "StoriesCardMediaCaption.react",
    "StoriesCardReactionSent.react",
    "StoriesFeedbackEditorStateContext",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useContext,
      l = e.useEffect,
      m = e.useState,
      n = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "StoriesContextualReplyBar.react"
        ).__setRef("StoriesCardFooter.react")
      );
    function a(a) {
      var e,
        f = a.card,
        g = a.cardID,
        o = a.isSelfStory,
        p = a.owner;
      a = a.ownerName;
      var q = k(c("StoriesFeedbackEditorStateContext")),
        r = q.setContextualReplyShown;
      q = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesCardFooter_card.graphql")),
        f
      );
      f = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesCardFooter_owner.graphql")),
        p
      );
      p = m(!1);
      var s = p[0];
      p = p[1];
      var t = m(!1),
        u = t[0];
      t = t[1];
      var v = m(!1),
        w = v[0];
      v = v[1];
      var x = m(!1),
        y = x[0];
      x = x[1];
      e =
        q == null
          ? void 0
          : (e = q.attachments) == null
          ? void 0
          : (e = e[0]) == null
          ? void 0
          : (e = e.media) == null
          ? void 0
          : e.__typename;
      var z = !o && (w || y);
      w = s && !z;
      y = w || z;
      s =
        (q == null
          ? void 0
          : (s = q.attachments) == null
          ? void 0
          : (s = s[0]) == null
          ? void 0
          : (s = s.media) == null
          ? void 0
          : s.__typename) === "Video" &&
        (q == null
          ? void 0
          : (s = q.attachments) == null
          ? void 0
          : (s = s[0]) == null
          ? void 0
          : (s = s.media) == null
          ? void 0
          : s.broadcast_status);
      s = s === "LIVE" || s === "VOD_READY";
      l(
        function () {
          r(z);
        },
        [r, z]
      );
      return j.jsxs("div", {
        className: c("stylex").dedupe(
          {
            "bottom-1": "i09qtzwb",
            "display-1": "j83agx80",
            "flex-direction-1": "cbu4d94t",
            "flex-wrap-1": "owycx6da",
            "justify-content-1": "bkfpd7mw",
            "pointer-events-1": "hzruof5a",
            "position-1": "pmk7jnqg",
            "start-1": "j9ispegn",
            "transform-0.1": "kudmk4ip",
            "transition-0.1": "qdd6qp5p",
            "width-1": "k4urcfbm",
          },
          y ? { "transform-0.1": "agkhgkm8" } : null,
          (w ? u : !1)
            ? {
                "transition-duration-1": "qgmjvhk0",
                "transition-property-1": "flx89l3n",
              }
            : null
        ),
        children: [
          j.jsx("div", {
            className:
              "j9ispegn pmk7jnqg d23ldmr1 n7fi1qx3 i09qtzwb cuhyrqpx" +
              (y ? "" : " mkhogb32"),
          }),
          j.jsxs("div", {
            className: "l9j0dhe7" + (z ? " mkhogb32" : ""),
            children: [
              ((w = q.attachments) == null
                ? void 0
                : (u = w[0]) == null
                ? void 0
                : (y = u.media) == null
                ? void 0
                : y.message) && !s
                ? j.jsx(c("StoriesCardMediaCaption.react"), {
                    message:
                      (w = q.attachments) == null
                        ? void 0
                        : (u = w[0]) == null
                        ? void 0
                        : (y = u.media) == null
                        ? void 0
                        : y.message,
                    setFooterHasContent: p,
                    story: q,
                  })
                : null,
              j.jsx(c("StoriesCardReactionSent.react"), {
                cardInfo: q.story_card_info,
                owner: f,
                setFooterHasContent: p,
                setFooterShouldSlide: t,
              }),
              j.jsx(c("StoriesCardActionLinks.react"), {
                actionLinks: q,
                setFooterHasContent: p,
              }),
            ],
          }),
          !o &&
            j.jsx("div", {
              className: "oqq733wu",
              children: j.jsx(n, {
                cardID: g,
                guideSuggestionsData:
                  (s = q.story_card_info) == null
                    ? void 0
                    : s.guide_suggestions,
                mediaType: e,
                ownerName: a,
                setHasSticker: x,
                setHasText: v,
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
  "StoriesCardSingleAuthorHeaderWrapper.react",
  [
    "CometRelay",
    "StoriesCardSingleAuthorHeaderWrapper_attribution.graphql",
    "StoriesCardSingleAuthorHeaderWrapper_bucket.graphql",
    "StoriesCardSingleAuthorHeaderWrapper_owner.graphql",
    "cr:145",
    "cr:388",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react");
    function a(a) {
      var c = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("StoriesCardSingleAuthorHeaderWrapper_owner.graphql")),
          a.owner
        ),
        e = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("StoriesCardSingleAuthorHeaderWrapper_bucket.graphql")),
          a.bucket
        ),
        f = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b(
                "StoriesCardSingleAuthorHeaderWrapper_attribution.graphql"
              )),
          a.cardInfo
        );
      if (e == null)
        return (
          b("cr:388") &&
          k.jsx(b("cr:388"), {
            cardInfo: f,
            creationTime: a.creationTime,
            onOwnerClick: a.onOwnerClick,
            owner: c,
          })
        );
      else
        return (
          b("cr:145") &&
          k.jsx(
            b("cr:145"),
            babelHelpers["extends"]({}, a, { bucket: e, cardInfo: f, owner: c })
          )
        );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardPageStoryHeader.react",
  [
    "CometRelay",
    "StoriesCardPageStoryHeader_bucket.graphql",
    "StoriesCardPageStoryHeader_owner.graphql",
    "StoriesCardSingleAuthorHeaderWrapper.react",
    "StoriesLoggerContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useContext;
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("StoriesCardPageStoryHeader_owner.graphql")),
          a.owner
        ),
        f = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("StoriesCardPageStoryHeader_bucket.graphql")),
          a.bucket
        ),
        g = k(c("StoriesLoggerContext")),
        l = g.logger;
      return j.jsx(c("StoriesCardSingleAuthorHeaderWrapper.react"), {
        bucket: (g = f) != null ? g : null,
        cardInfo: a.cardInfo,
        creationTime: a.creationTime,
        onOwnerClick: function () {
          return l.visitPageLog();
        },
        owner: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardHeader.react",
  [
    "CometRelay",
    "StoriesCardHeader_card.graphql",
    "StoriesCardHeader_owner.graphql",
    "StoriesCardPageStoryHeader.react",
    "StoriesCardSingleAuthorHeaderWrapper.react",
    "StoriesEnums",
    "StoriesGating",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    function a(a) {
      var e,
        f = a.card;
      a = a.owner;
      f = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesCardHeader_card.graphql")),
        f
      );
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesCardHeader_owner.graphql")),
        a
      );
      if (!a) return null;
      var g = f == null ? void 0 : f.creation_time;
      e =
        f == null
          ? void 0
          : (e = f.story_card_info) == null
          ? void 0
          : (e = e.bucket) == null
          ? void 0
          : e.camera_post_type;
      e = e === d("StoriesEnums").STORY_CARD_TYPES.PAGE_STORY;
      var k = null;
      if (e) {
        k = j.jsx(c("StoriesCardPageStoryHeader.react"), {
          bucket: d("StoriesGating").shouldEnableLiveInStories()
            ? f == null
              ? void 0
              : (e = f.story_card_info) == null
              ? void 0
              : e.bucket
            : null,
          cardInfo: f == null ? void 0 : f.story_card_info,
          creationTime: g,
          owner: a,
        });
      } else {
        k = j.jsx(c("StoriesCardSingleAuthorHeaderWrapper.react"), {
          bucket: d("StoriesGating").shouldEnableLiveInStories()
            ? f == null
              ? void 0
              : (e = f.story_card_info) == null
              ? void 0
              : e.bucket
            : null,
          cardInfo: f == null ? void 0 : f.story_card_info,
          creationTime: g,
          owner: a,
        });
      }
      return j.jsxs("div", {
        children: [
          j.jsx("div", {
            className:
              "k996pnph kr520xx4 j9ispegn pmk7jnqg hzruof5a d23ldmr1 tut9u0nx",
          }),
          k,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardOverlayExternalSong.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "Locale",
    "StoriesCardOverlayExternalSong_overlay.graphql",
    "StoriesPauseReasons",
    "TetraButton.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a(a) {
      var e,
        f = a.overlay,
        g = a.setPause;
      a = function (a) {
        g(!0, d("StoriesPauseReasons").HOVER_ON_SONG_STICKER);
      };
      var l = function (a) {
        g(!1, d("StoriesPauseReasons").HOVER_ON_SONG_STICKER);
      };
      f = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("StoriesCardOverlayExternalSong_overlay.graphql")),
        f
      );
      e =
        ((e = (e = f.link_bounds) == null ? void 0 : e.y) != null ? e : 0) *
        100;
      f = f.url;
      var m = null;
      f != null &&
        f.includes("spotify") &&
        (m = k.jsx(c("TetraButton.react"), {
          icon: d("fbicon")._(i("1104209"), 16),
          label: h._("Play on Spotify >"),
          linkProps: { target: "_blank", url: f },
          type: "secondary",
        }));
      return k.jsx("div", {
        className: c("stylex").dedupe(
          {
            "pointer-events-1": "mrt03zmi",
            "position-1": "pmk7jnqg",
            "start-1": "kfkz5moi",
            "transform-0.1": "cj5g2342",
          },
          d("Locale").isRTL() ? { "transform-0.1": "lcn5fozr" } : null
        ),
        onMouseEnter: a,
        onMouseLeave: l,
        style: { top: e + "%" },
        children: m,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesOverlayPositions",
  ["useStoriesViewerBaseDimensions"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d = c("useStoriesViewerBaseDimensions")(),
        e = d.height;
      d = d.width;
      if (a == null || b == null) return null;
      a = a / b;
      b = function (a, b) {
        var c = 0.5;
        return Math.round((a - b) * c);
      };
      a = d * a;
      var f = d;
      return {
        mediaHeight: a,
        mediaLeft: b(d, f),
        mediaTop: b(e, a),
        mediaWidth: d,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesLWRPlayback.react",
  [
    "CometRelay",
    "StoriesLWRKeyframe.react",
    "StoriesLWRPlayback_animations.graphql",
    "StoriesLWRPlayback_card.graphql",
    "emptyFunction",
    "orEmptyArray",
    "react",
    "useStoriesLWR.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react"),
      l = k.useEffect,
      m = k.useRef,
      n = {
        "\u2764\ufe0f": [2],
        "\ud83d\udc4d": [1],
        "\ud83d\udc9c": [16],
        "\ud83d\ude06": [4],
        "\ud83d\ude21": [8],
        "\ud83d\ude22": [7],
        "\ud83d\ude2e": [3],
      },
      o = 3e3,
      p = o / 4;
    function q(a, b) {
      return r((a + 1) / (b + 1)) * (o - p) + p;
    }
    function r(a) {
      return Math.pow(a, 3);
    }
    function e(e) {
      var f = e.animations;
      e = e.card;
      var g = c("emptyFunction"),
        k = m(null);
      f = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesLWRPlayback_animations.graphql")),
        f
      );
      var o = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesLWRPlayback_card.graphql")),
        e
      );
      e = c("useStoriesLWR.react")({ animations: f, setPause: g });
      f = e[0];
      var p = e[1],
        r = m(!1);
      l(
        function () {
          var b;
          if (r.current) return;
          b = c("orEmptyArray")(
            o == null
              ? void 0
              : (b = o.story_card_info) == null
              ? void 0
              : (b = b.story_card_reactions) == null
              ? void 0
              : b.edges
          );
          var d = [];
          b != null &&
            b.length !== 0 &&
            (d = b
              .reduce(function (a, b) {
                b =
                  b == null
                    ? void 0
                    : (b = b.node) == null
                    ? void 0
                    : (b = b.messaging_actions) == null
                    ? void 0
                    : b.edges;
                return b != null ? a.concat(b) : a;
              }, [])
              .reduce(function (a, b) {
                b =
                  b == null
                    ? void 0
                    : (b = b.node) == null
                    ? void 0
                    : b.reaction;
                b != null && a.push(b);
                return a;
              }, []));
          if (d.length <= 0) return;
          b = 10;
          d = d.reverse().slice(0, b);
          var e = [];
          if (d != null && d.length > 0) {
            var f = [];
            for (var b = 0; b < d.length; b++) f.push(q(b, d.length));
            b = function b(c) {
              if (c < d.length && d[c] != null) {
                b(c - 1);
                var g = window.setTimeout(function () {
                  a.requestAnimationFrame(function () {
                    p(n[d[c]]);
                  });
                }, f[c]);
                e.push(g);
              }
            };
            b(d.length - 1);
          }
          r.current = !0;
          return function () {
            e.forEach(function (a) {
              window.clearTimeout(a);
            });
          };
        },
        [p, o, r]
      );
      return j.jsx("div", {
        className: "k4urcfbm l9j0dhe7 rwvkw9s7 i09qtzwb",
        ref: k,
        children: f.map(function (a) {
          return j.jsx(
            c("StoriesLWRKeyframe.react"),
            {
              containerWidth:
                k != null && k.current != null ? k.current.clientWidth : null,
              kf: a,
            },
            a.key
          );
        }),
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g["default"] = e;
  },
  98
);
__d(
  "StorieslwrPlaybackContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = null;
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "StoriesCardReactionPlaybackLayout.react",
  [
    "CometRelay",
    "ReactDOMComet",
    "StoriesCardReactionPlaybackLayout_animations.graphql",
    "StoriesCardReactionPlaybackLayout_card.graphql",
    "StoriesLWRPlayback.react",
    "StorieslwrPlaybackContext",
    "react",
    "useStoriesViewerBaseDimensions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useContext,
      l = e.useEffect,
      m = e.useState;
    function a(a) {
      var e = a.animations;
      a = a.card;
      var f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("StoriesCardReactionPlaybackLayout_animations.graphql")),
          e
        ),
        g = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("StoriesCardReactionPlaybackLayout_card.graphql")),
          a
        );
      e = c("useStoriesViewerBaseDimensions")();
      var n = k(c("StorieslwrPlaybackContext")),
        o = e.height,
        p = e.width;
      a = m(null);
      e = a[0];
      var q = a[1];
      l(
        function () {
          if (g == null) return;
          var a = { top: o + "px", width: p + "px" };
          a = j.jsx("div", {
            className: "l9j0dhe7",
            style: a,
            children: j.jsx(c("StoriesLWRPlayback.react"), {
              animations: f,
              card: g,
            }),
          });
          var b = n == null ? void 0 : n.current;
          b != null && q(d("ReactDOMComet").createPortal(a, b));
        },
        [f, g, n, o, p]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoryCardImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744406");
    c = b("FalcoLoggerInternal").create("story_card_impression", a);
    e.exports = c;
  },
  null
);
__d(
  "useStoriesCardImpressionLogging",
  [
    "FBStoriesBanzaiConstants",
    "StoriesLoggerContext",
    "StoriesLoggingConstants",
    "StoryCardImpressionFalcoEvent",
    "react",
    "usePartialViewImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = new Map();
    function a() {
      var a = i(c("StoriesLoggerContext")),
        b = a.logger;
      a = h(
        function () {
          var a = b.getImpressionData(
            c("FBStoriesBanzaiConstants") == null
              ? void 0
              : c("FBStoriesBanzaiConstants").IMPRESSION
          );
          if (a == null) return;
          var d = Date.now(),
            e = a.card_id,
            f = j.get(e);
          if (
            f != null &&
            d - f < c("StoriesLoggingConstants").IMPRESSION_DEDUPLICATION_TIME
          )
            return;
          j.set(e, d);
          c("StoryCardImpressionFalcoEvent").log(function () {
            return {
              card_id: a.card_id,
              media_id: a.media_id,
              media_index: a.media_index,
              media_type: a.media_type,
              organic_tracking: a.organic_tracking,
              story_owner: a.story_owner,
              story_owner_type: a.story_owner_type,
              thread_id: a.thread_id,
              tray_session_id: a.tray_session_id,
              viewer_session_id: a.viewer_session_id,
            };
          });
        },
        [b]
      );
      return c("usePartialViewImpression")({ onImpressionStart: a });
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoryCardTimespentFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744407");
    c = b("FalcoLoggerInternal").create("story_card_timespent", a);
    e.exports = c;
  },
  null
);
__d(
  "useStoriesCardTimespentLogging",
  [
    "FBStoriesBanzaiConstants",
    "StoriesLoggerContext",
    "StoriesLoggingConstants",
    "StoryCardTimespentFalcoEvent",
    "react",
    "useVPVDImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a() {
      var a = i(c("StoriesLoggerContext")),
        b = a.logger;
      a = h(
        function (a) {
          var d = a.visibleDuration,
            e = b.getImpressionData(
              c("FBStoriesBanzaiConstants") == null
                ? void 0
                : c("FBStoriesBanzaiConstants").TIMESPENT
            );
          if (e == null) return;
          c("StoryCardTimespentFalcoEvent").log(function () {
            return {
              card_id: e.card_id,
              media_id: e.media_id,
              media_index: e.media_index,
              media_type: e.media_type,
              source: e.source,
              story_owner: e.story_owner,
              story_owner_type: e.story_owner_type,
              thread_id: e.thread_id,
              timespent: d,
              timespent_unit: "ms",
              tray_session_id: e.tray_session_id,
              viewer_session_id: e.viewer_session_id,
            };
          });
        },
        [b]
      );
      return c("useVPVDImpression")({
        isLite: !0,
        minVisibleTimeMs: c("StoriesLoggingConstants").TIMESPENT_MINIMUM_TIME,
        onVPVDEnd: a,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCardLogging",
  [
    "mergeRefs",
    "react",
    "useStoriesCardImpressionLogging",
    "useStoriesCardTimespentLogging",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a() {
      var a = c("useStoriesCardImpressionLogging")(),
        b = c("useStoriesCardTimespentLogging")(),
        d = b[0];
      b[1];
      b = h(
        function () {
          return c("mergeRefs")(a, d);
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
  "StoriesViewerMenuButton.react",
  ["CometButtonCommandStopper.react", "CometPressable.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = function (b) {
          var c = b.type === "press";
          c || b.preventDefault();
          var d = a.onClick;
          d != null && (!c && b.type !== "keydown" && b.stopPropagation(), d());
        },
        e = a.icon,
        f = a.label,
        g = a.testid;
      return h.jsx(c("CometButtonCommandStopper.react"), {
        label: f,
        children: h.jsx(c("CometPressable.react"), {
          display: "inline",
          label: f,
          onPress: d,
          overlayDisabled: !0,
          ref: b,
          children: h.jsx("div", {
            className: "h676nmdw oygrvhab oi9244e8 kvgmc6g5 nhd2j8a9",
            "data-testid": void 0,
            children: e,
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
  "StoriesMuteButton.react",
  [
    "fbt",
    "ix",
    "StoriesViewerMenuButton.react",
    "TetraIcon.react",
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
          (c.$1 = function () {
            c.props.onMuteChanged(!c.props.isMuted);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.$2 = function () {
        return this.props.isMuted
          ? j.jsx(c("TetraIcon.react"), {
              color: "white",
              icon: d("fbicon")._(i("564397"), 24),
              size: 24,
            })
          : j.jsx(c("TetraIcon.react"), {
              color: "white",
              icon: d("fbicon")._(i("564391"), 24),
              size: 24,
            });
      };
      e.$3 = function () {
        return this.props.isMuted ? h._("Unmute") : h._("Mute");
      };
      e.render = function () {
        var a = this.$2(),
          b = this.$3();
        return j.jsx(c("StoriesViewerMenuButton.react"), {
          icon: a,
          label: b,
          onClick: this.$1,
        });
      };
      return b;
    })(j.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "StoriesPauseButton.react",
  [
    "fbt",
    "ix",
    "StoriesPauseReasons",
    "StoriesViewerMenuButton.react",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.isPaused,
        e = a.setPause,
        f = j.jsx(c("TetraIcon.react"), {
          color: "white",
          icon: d("fbicon")._(i("484864"), 24),
          size: 24,
        }),
        g = j.jsx(c("TetraIcon.react"), {
          color: "white",
          icon: d("fbicon")._(i("497676"), 24),
          size: 24,
        });
      a = function () {
        e(!b, d("StoriesPauseReasons").CLICK_PAUSE_ICON);
      };
      var k = function () {
          return b ? f : g;
        },
        l = function () {
          return b ? h._("Play") : h._("Pause");
        };
      k = k();
      return j.jsx(c("StoriesViewerMenuButton.react"), {
        icon: k,
        label: l(),
        onClick: a,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesRecoverWarningScreenButton.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "CometStoryRenderLocationContext.react",
    "CometWarningScreenClientLogger",
    "CometWarningScreenContext",
    "StoriesRecoverWarningScreenButton_data.graphql",
    "StoriesViewerMenuButton.react",
    "TetraIcon.react",
    "WarningScreenRenderType",
    "fbicon",
    "getJSEnumSafe",
    "react",
    "useCometUFIVideoPlayerStateAndController",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useContext;
    function a(a) {
      var e = a.loggingData,
        f = a.storyID,
        g = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("StoriesRecoverWarningScreenButton_data.graphql")),
          e
        );
      a = d("CometWarningScreenContext").useHasOverlay();
      e =
        (e = d("CometWarningScreenContext").useIsContentVisible()) != null
          ? e
          : !1;
      var m = c("useCometUFIVideoPlayerStateAndController")(),
        n = d("CometWarningScreenContext").useShowOverlay(),
        o = l(c("CometStoryRenderLocationContext.react")),
        p = c("getJSEnumSafe")(
          c("WarningScreenRenderType"),
          g == null ? void 0 : g.render_type
        );
      return !a || !e
        ? null
        : k.jsx(c("StoriesViewerMenuButton.react"), {
            icon: k.jsx(c("TetraIcon.react"), {
              color: "white",
              icon: d("fbicon")._(i("511436"), 24),
              size: 24,
            }),
            label: h._("Show overlay"),
            onClick: function () {
              m && m.controller.pause("warning_screen_cover"),
                n(!0),
                d("CometWarningScreenClientLogger").logInformTreatmentEvent({
                  action: "HIDE_CONTENT",
                  contentIDRaw: g == null ? void 0 : g.content_id,
                  event: "action",
                  objectionableCategory:
                    g == null ? void 0 : g.top_objectionable_category,
                  product: "warning_screens",
                  renderType: p,
                  session_id: g == null ? void 0 : g.inform_session_id,
                  storyID: f,
                  storyRenderLocation: o,
                  surface: "story_viewer",
                });
            },
            testid: void 0,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerMenu.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        return h.jsx("div", {
          className: "miomc0xe pmk7jnqg cgat1ltu n7fi1qx3 j83agx80",
          children: this.props.children,
        });
      };
      return b;
    })(h.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardImpressionAndTSLogger.react",
  ["StoriesLoggerContext", "cr:1075037", "cr:956987", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var d = a.cardID;
      a = a.children;
      var e = i(c("StoriesLoggerContext"));
      e = e.logger;
      var f = b("cr:1075037")();
      e = e.getImpressionConfig();
      return h.jsxs(
        "div",
        babelHelpers["extends"]({}, e, {
          className: "k4urcfbm l9j0dhe7 taijpn5t datstx6m j83agx80 bp9cbjyn",
          "data-id": d,
          "data-testid": void 0,
          ref: f,
          children: [
            d != null && b("cr:956987") && h.jsx(b("cr:956987"), { cardID: d }),
            a,
          ],
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseCardOverlays.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "CometWarningScreenContext",
    "StoriesCardOverlayExternalSong.react",
    "StoriesEnums",
    "StoriesGating",
    "StoriesLoggerContext",
    "StoriesSuspenseCardModalContext",
    "StoriesSuspenseCardOverlays_card.graphql",
    "StoriesSuspenseCardOverlays_owner.graphql",
    "StoriesSuspensePauseContext",
    "gkx",
    "react",
    "useStoriesOverlayPositions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useContext;
    function a(a) {
      var e = a.card,
        f = a.isMuted,
        g = a.onMuteChanged;
      a = a.owner;
      var l = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("StoriesSuspenseCardOverlays_card.graphql")),
          e
        ),
        m = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("StoriesSuspenseCardOverlays_owner.graphql")),
          a
        );
      a =
        l == null
          ? void 0
          : (e = l.attachments) == null
          ? void 0
          : (a = e[0]) == null
          ? void 0
          : (e = a.media) == null
          ? void 0
          : e.image;
      e = a == null ? void 0 : a.height;
      var n = a == null ? void 0 : a.width,
        o = k(c("StoriesLoggerContext")),
        p = o.logger;
      o = k(c("StoriesSuspensePauseContext"));
      var q = o.isPaused,
        r = o.setPause;
      o = k(c("StoriesSuspenseCardModalContext"));
      var s = o.setOpenModal;
      o = c("useStoriesOverlayPositions")(e, n);
      e = d("CometWarningScreenContext").useHasOverlay();
      n = d("CometWarningScreenContext").useIsOverlayShown();
      if (e && n) return null;
      n =
        l == null ? void 0 : (e = l.story_overlays) == null ? void 0 : e.length;
      var t = l == null ? void 0 : l.id;
      if (l == null || t == null || n == null || n === 0) return null;
      if (a == null || o == null) return null;
      var u = o.mediaHeight;
      e = o.mediaLeft;
      n = o.mediaTop;
      var v = o.mediaWidth;
      a = { height: u + "px", left: e + "px", top: n + "px", width: v + "px" };
      return j.jsx("div", {
        className: "k4urcfbm kr520xx4 j9ispegn pmk7jnqg hzruof5a datstx6m",
        children: j.jsx("div", {
          className: "pmk7jnqg",
          style: a,
          children: l.story_overlays.map(function (a, b) {
            switch (a.__typename) {
              case d("StoriesEnums").STORY_OVERLAY_TYPES.RESHARED_POST:
                return c("gkx")("821827")
                  ? j.jsx(
                      c("CometPlaceholder.react"),
                      {
                        fallback: j.jsx("div", {}),
                        children: j.jsx(d("CometRelay").MatchContainer, {
                          match: a,
                          props: {
                            cardID: t,
                            containerHeight: u,
                            containerWidth: v,
                            key: "story_overlay_" + b,
                            overlay: a,
                            setPause: r,
                          },
                        }),
                      },
                      "story_overlay_" + b
                    )
                  : null;
              case d("StoriesEnums").STORY_OVERLAY_TYPES.RESHARED_CONTENT:
                return d("StoriesGating").isReshareConsumptionEnabled()
                  ? j.jsx(
                      c("CometPlaceholder.react"),
                      {
                        fallback: j.jsx("div", {}),
                        children: j.jsx(d("CometRelay").MatchContainer, {
                          match: a,
                          props: {
                            cardID: t,
                            containerHeight: u,
                            containerWidth: v,
                            isMuted: f,
                            isPaused: q,
                            key: "story_overlay_" + b,
                            onMuteChanged: g,
                            overlay: a,
                            setOpenModal: s,
                            setPause: r,
                          },
                        }),
                      },
                      "story_overlay_" + b
                    )
                  : null;
              case d("StoriesEnums").STORY_OVERLAY_TYPES.INTERACTIVE_STICKER:
                return j.jsx(
                  c("CometPlaceholder.react"),
                  {
                    fallback: j.jsx("div", {}),
                    children: j.jsx(d("CometRelay").MatchContainer, {
                      match: a,
                      props: {
                        cardID: t,
                        containerHeight: u,
                        containerWidth: v,
                        key: "story_overlay_" + b,
                        logger: p,
                        overlay: a,
                        owner: m,
                        setPause: r,
                        story: l,
                      },
                    }),
                  },
                  "story_overlay_" + b
                );
              case d("StoriesEnums").STORY_OVERLAY_TYPES.POLL_STICKER:
                var e = a.style;
                if (
                  e === d("StoriesEnums").POLL_STICKER.IG_TWO_OPTION_COMBINED ||
                  e === d("StoriesEnums").POLL_STICKER.TWO_OPTION_COMBINED
                )
                  return j.jsx(
                    c("CometPlaceholder.react"),
                    {
                      fallback: j.jsx("div", {}),
                      children: j.jsx(d("CometRelay").MatchContainer, {
                        match: a,
                        props: {
                          cardID: t,
                          containerHeight: u,
                          containerWidth: v,
                          key: "story_overlay_" + b,
                          overlay: a,
                          owner: m,
                          setPause: r,
                          story: l,
                        },
                      }),
                    },
                    "story_overlay_" + b
                  );
                else return null;
              case d("StoriesEnums").STORY_OVERLAY_TYPES.LINK_STICKER:
                return j.jsx(
                  c("CometPlaceholder.react"),
                  {
                    fallback: j.jsx("div", {}),
                    children: j.jsx(
                      d("CometRelay").MatchContainer,
                      {
                        match: a,
                        props: {
                          containerHeight: u,
                          containerWidth: v,
                          key: "story_overlay_" + b,
                          overlay: a,
                          setPause: r,
                        },
                      },
                      b
                    ),
                  },
                  "story_overlay_" + b
                );
              case d("StoriesEnums").STORY_OVERLAY_TYPES.LIVE_VIDEO:
                return d("StoriesGating").shouldEnableLiveInStories()
                  ? j.jsx(
                      c("CometPlaceholder.react"),
                      {
                        fallback: j.jsx("div", {}),
                        children: j.jsx(d("CometRelay").MatchContainer, {
                          match: a,
                          props: { key: "story_overlay_" + b, overlay: a },
                        }),
                      },
                      "story_overlay_" + b
                    )
                  : null;
              case d("StoriesEnums").STORY_OVERLAY_TYPES.TAG_STICKER:
                return j.jsx(
                  c("CometPlaceholder.react"),
                  {
                    fallback: j.jsx("div", {}),
                    children: j.jsx(d("CometRelay").MatchContainer, {
                      match: a,
                      props: {
                        containerHeight: u,
                        containerWidth: v,
                        key: "story_overlay_" + b,
                        overlay: a,
                        setPause: r,
                      },
                    }),
                  },
                  "story_overlay_" + b
                );
              case d("StoriesEnums").STORY_OVERLAY_TYPES.EXTERNAL_SONG:
                return j.jsx(
                  c("StoriesCardOverlayExternalSong.react"),
                  { overlay: a, setPause: r },
                  "story_overlay_" + b
                );
              case d("StoriesEnums").STORY_OVERLAY_TYPES.PRODUCT_STICKER:
                return j.jsx(
                  c("CometPlaceholder.react"),
                  {
                    fallback: j.jsx("div", {}),
                    children: j.jsx(d("CometRelay").MatchContainer, {
                      match: a,
                      props: {
                        cardID: t,
                        containerHeight: u,
                        containerWidth: v,
                        key: "story_overlay_" + b,
                        overlay: a,
                        setPause: r,
                      },
                    }),
                  },
                  "story_overlay_" + b
                );
              default:
                return null;
            }
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
  "StoriesSuspenseCard.react",
  [
    "CometFeedStoryClickLoggerImpl.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometTrackingCodeProvider.react",
    "StoriesCardFooter.react",
    "StoriesCardHeader.react",
    "StoriesCardImpressionAndTSLogger.react",
    "StoriesCardReactionPlaybackLayout.react",
    "StoriesSuspenseCardMedia.react",
    "StoriesSuspenseCardOverlays.react",
    "StoriesSuspenseCard_animations.graphql",
    "StoriesSuspenseCard_card.graphql",
    "StoriesSuspenseCard_owner.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react"),
      l = d("react").useMemo;
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("StoriesSuspenseCard_animations.graphql")),
          a.animations
        ),
        f = d("CometRelay").useFragment(
          i !== void 0 ? i : (i = b("StoriesSuspenseCard_card.graphql")),
          a.card
        ),
        g = d("CometRelay").useFragment(
          j !== void 0 ? j : (j = b("StoriesSuspenseCard_owner.graphql")),
          a.owner
        ),
        m = a.isSelfStory;
      m = m === void 0 ? !1 : m;
      var n = a.onSeen,
        o = f == null ? void 0 : f.id,
        p = l(
          function () {
            var a;
            return {
              click_tracking_linkshim_cb:
                (a = f == null ? void 0 : f.organic_tracking_linkshim_cb) !=
                null
                  ? a
                  : "",
              encrypted_click_tracking:
                (a = f == null ? void 0 : f.organic_tracking) != null ? a : "",
              encrypted_tracking:
                (a = f == null ? void 0 : f.organic_tracking) != null ? a : "",
            };
          },
          [
            f == null ? void 0 : f.organic_tracking,
            f == null ? void 0 : f.organic_tracking_linkshim_cb,
          ]
        );
      return f === null || f === void 0
        ? null
        : k.jsx(
            c("StoriesCardImpressionAndTSLogger.react"),
            {
              cardID: o,
              children: k.jsx(c("CometTrackingCodeProvider.react"), {
                trackingCode: p,
                children: k.jsxs(c("CometFeedStoryClickLoggerImpl.react"), {
                  children: [
                    k.jsx(c("StoriesSuspenseCardMedia.react"), {
                      isMuted: a.isMuted,
                      media: f,
                      onSeen: n,
                      onTimerSourceUpdate: a.onTimerSourceUpdate,
                    }),
                    k.jsx(c("StoriesSuspenseCardOverlays.react"), {
                      card: f,
                      isMuted: a.isMuted,
                      onMuteChanged: a.onMuteChanged,
                      owner: g,
                    }),
                    k.jsx(c("StoriesCardHeader.react"), { card: f, owner: g }),
                    k.jsx(c("StoriesCardFooter.react"), {
                      card: f,
                      cardID: f.id,
                      isSelfStory: m,
                      owner: g,
                      ownerName: a.ownerName,
                    }),
                    k.jsx(c("CometPlaceholder.react"), {
                      fallback: null,
                      children: k.jsx(d("CometRelay").MatchContainer, {
                        match: f.copyright_banner_info,
                        props: {
                          isSelfStory: m,
                          mediaIds: f.id != null ? [f.id] : [],
                        },
                      }),
                    }),
                    m &&
                      k.jsx(c("StoriesCardReactionPlaybackLayout.react"), {
                        animations: e,
                        card: f,
                      }),
                  ],
                }),
              }),
            },
            o
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseCardOptionMenuTrigger.react",
  [
    "fbt",
    "ix",
    "CometDeferredPopoverTrigger.react",
    "CometRelay",
    "StoriesPauseReasons",
    "StoriesSuspenseCardOptionMenuTrigger_card.graphql",
    "StoriesSuspenseCardOptionMenuTrigger_owner.graphql",
    "StoriesViewerMenuButton.react",
    "TetraIcon.react",
    "fbicon",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l = d("react"),
      m = c("requireDeferred")("StoriesSuspenseCardOptionMenu.react").__setRef(
        "StoriesSuspenseCardOptionMenuTrigger.react"
      );
    function a(a) {
      var e = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("StoriesSuspenseCardOptionMenuTrigger_card.graphql")),
          a.card
        ),
        f = d("CometRelay").useFragment(
          k !== void 0
            ? k
            : (k = b("StoriesSuspenseCardOptionMenuTrigger_owner.graphql")),
          a.owner
        ),
        g = function (b) {
          a.setPause(!0, d("StoriesPauseReasons").CONFIRMATION_DIALOG);
        },
        n = function () {
          a.setPause(!1, d("StoriesPauseReasons").CONFIRMATION_DIALOG);
        },
        o = function (b) {
          a.setPause(b, d("StoriesPauseReasons").MENU);
        },
        p = l.jsx(c("TetraIcon.react"), {
          color: "white",
          icon: d("fbicon")._(i("484388"), 24),
        }),
        q = e == null ? void 0 : e.id;
      return l.jsx(
        "div",
        {
          children: l.jsx(c("CometDeferredPopoverTrigger.react"), {
            align: "end",
            onVisibilityChange: o,
            popoverProps: {
              bucketID: a.bucketID,
              card: e,
              onClose: function () {},
              onHideOptionConfirmationDialog: n,
              onShowOptionConfirmationDialog: g,
              owner: f,
              refetchNodes: a.refetchNodes,
              setPause: a.setPause,
            },
            popoverResource: m,
            position: "below",
            children: function (a, b) {
              return l.jsx(c("StoriesViewerMenuButton.react"), {
                icon: p,
                label: h._("Menu Button"),
                onClick: b,
                ref: a,
                testid: void 0,
              });
            },
          }),
        },
        q
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseBucketDataContext",
  ["StoriesEnums", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      bucketData: {
        bucketID: "",
        bucketIndex: -1,
        canSeeViewerSheet: !1,
        canShowStoryOverlay: !1,
        hasSelfBucket: !1,
        isEndOfTray: !1,
        isFirstBucket: !1,
        isLastBucket: !1,
        isSecondBucket: !1,
        nextBuckets: [],
        nextBucketsCount: 0,
      },
      bucketNavDirection: d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET,
      setBucketData: function (a) {},
      setNavigationDirection: function () {},
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "StoriesSuspenseContuxActionsContext",
  ["FBLogger", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      cardIndexChanged: function (a) {
        return c("FBLogger")("fbstories").warn(
          "setCardIndex is using default, should override"
        );
      },
      handleCardDeletion: function () {
        return c("FBLogger")("fbstories").warn(
          "handleCardDeletion is using default, should override"
        );
      },
      performBucketNavigation: function (a, b, d) {
        return c("FBLogger")("fbstories").warn(
          "performBucketNavigation is using default, should override"
        );
      },
      performCardNavigation: function (a) {
        return c("FBLogger")("fbstories").warn(
          "performCardNavigation is using default, should override"
        );
      },
    };
    e = a.createContext(b);
    g["default"] = e;
  },
  98
);
__d(
  "StoriesBehaviorHelpContext",
  ["react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      canAddToStory: function () {
        throw c("unrecoverableViolation")(
          "[StoriesBehaviorHelpContext] canAddToStory needs implementation",
          "fb_stories_web"
        );
      },
      canSeeViewerSheet: function () {
        throw c("unrecoverableViolation")(
          "[StoriesBehaviorHelpContext]  canSeeViewerSheet needs implementation",
          "fb_stories_web"
        );
      },
      getBucketType: function () {
        throw c("unrecoverableViolation")(
          "[StoriesBehaviorHelpContext]  getBucketType needs implementation",
          "fb_stories_web"
        );
      },
      isSelfStory: function () {
        throw c("unrecoverableViolation")(
          "[StoriesBehaviorHelpContext]  isSelfStory needs implementation",
          "fb_stories_web"
        );
      },
      whichViewerSheet: function () {
        throw c("unrecoverableViolation")(
          "[StoriesBehaviorHelpContext]  whichViewerSheet needs implementation",
          "fb_stories_web"
        );
      },
    };
    e = a.createContext(b);
    g["default"] = e;
  },
  98
);
__d(
  "StoriesArchiveModuleArchiveGridTtiWwwQPLEvent",
  ["cr:8651"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:8651");
  },
  98
);
__d(
  "StoriesArchiveModuleArchiveGridTtiWwwQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(22347782);
    g["default"] = a;
  },
  98
);
