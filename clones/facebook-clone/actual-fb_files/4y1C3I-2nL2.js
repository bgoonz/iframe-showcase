if (self.CavalryLogger) {
  CavalryLogger.start_js(["aMjcHzi"]);
}

__d(
  "ProfileCometFeaturedHighlightsEditCollectionDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3782258291893775",
        metadata: {},
        name: "ProfileCometFeaturedHighlightsEditCollectionDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardSingleAuthorHeader_attribution.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardSingleAuthorHeader_attribution",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "shareable_attribution",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "EntityAtRange",
              kind: "LinkedField",
              name: "ranges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "entity",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "url",
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
      type: "StoryCardStoryInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardSingleAuthorHeader_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
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
          name: "is_verified",
          storageKey: null,
        },
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "StoriesCardSingleAuthorHeader_owner",
        selections: [
          {
            kind: "InlineFragment",
            selections: a,
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: a,
            type: "Page",
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
  "StoriesCardMediaLoadingBackground_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardMediaLoadingBackground_story",
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
              args: null,
              kind: "FragmentSpread",
              name: "StoriesCardSATPGradientBackground_textFormatMetadata",
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
          ],
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
              concreteType: "FBStoryPortalInfo",
              kind: "LinkedField",
              name: "background_color_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "FBStoryColorInfo",
                  kind: "LinkedField",
                  name: "color_info",
                  plural: !0,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesCardDominantColorBackground_colorInfo",
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
          concreteType: "StoryBackgroundInfo",
          kind: "LinkedField",
          name: "story_default_background",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesCardDefaultBackground_background",
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
  "StoriesCardDefaultBackground_background.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardDefaultBackground_background",
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
          concreteType: "GradientData",
          kind: "LinkedField",
          name: "gradient",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "css",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "portrait_image",
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
      ],
      type: "StoryBackgroundInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardDominantColorBackground_colorInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardDominantColorBackground_colorInfo",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "dominant_color",
          storageKey: null,
        },
      ],
      type: "FBStoryColorInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardActivityDescriptionIcon_iconInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardActivityDescriptionIcon_iconInfo",
      selections: [
        {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 1 }],
          concreteType: "InlineActivitiesConnection",
          kind: "LinkedField",
          name: "inline_activities",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "InlineActivity",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "TaggableActivityIcon",
                  kind: "LinkedField",
                  name: "taggable_activity_icon",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "height", value: 16 },
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
                        { kind: "Literal", name: "width", value: 16 },
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
                          name: "uri",
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
          storageKey: "inline_activities(first:1)",
        },
        {
          alias: null,
          args: null,
          concreteType: "WithTagsConnection",
          kind: "LinkedField",
          name: "with_tags",
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
          name: "explicit_place",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "entity_id",
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
  "StoriesCardActivityDescription_activityDescription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardActivityDescription_activityDescription",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "activity_description",
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
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardActivityDescriptionIcon_iconInfo",
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
  "StoriesCardPhotoMediaBackground_background.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "blur" },
        { kind: "RootArgument", name: "scale" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardPhotoMediaBackground_background",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryBackdrop",
          kind: "LinkedField",
          name: "backdrop",
          plural: !1,
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
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: "imageBlurred",
                      args: [
                        {
                          kind: "Variable",
                          name: "blur",
                          variableName: "blur",
                        },
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
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
                          name: "uri",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "Photo",
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
          concreteType: "StoryBackgroundInfo",
          kind: "LinkedField",
          name: "story_default_background",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesCardDefaultBackground_background",
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
  "StoriesCardPhotoMedia_photo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardPhotoMedia_photo",
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
          name: "accessibility_caption",
          storageKey: null,
        },
      ],
      type: "Photo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardPhotoMedia_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardPhotoMedia_story",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardPhotoMediaBackground_background",
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
  "StoriesCardComposerFormat_defaultBackground.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardComposerFormat_defaultBackground",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardDefaultBackground_background",
        },
      ],
      type: "StoryBackgroundInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardComposerFormat_message.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardComposerFormat_message",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
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
  "StoriesCardComposerFormat_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardComposerFormat_story",
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
  "StoriesCardComposerFormat_textFormatMetaData.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardComposerFormat_textFormatMetaData",
      selections: [
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
          name: "font_style",
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
              name: "font_postscript_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "font_url",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardSATPBackground_textFormatMetadata",
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
  "StoriesCardLongText_message.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardLongText_message",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
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
  "StoriesCardLongText_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardLongText_story",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardActivityDescription_activityDescription",
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
  "StoriesCardSATPBackground_textFormatMetadata.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardSATPBackground_textFormatMetadata",
      selections: [
        {
          alias: null,
          args: [{ kind: "Variable", name: "scale", variableName: "scale" }],
          concreteType: "Image",
          kind: "LinkedField",
          name: "portrait_background_image",
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
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardSATPGradientBackground_textFormatMetadata",
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
  "StoriesCardSATPGradientBackground_textFormatMetadata.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardSATPGradientBackground_textFormatMetadata",
      selections: [
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
      ],
      type: "TextFormatMetadata",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardCometVideoMediaWrapper_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardCometVideoMediaWrapper_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardCometVideoWithLiveMedia_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardCometVideoMedia_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardCometVideoMedia_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardCometVideoMedia_video",
      selections: [
        { args: null, kind: "FragmentSpread", name: "VideoPlayerRelay_video" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerWithLiveVideoIndicator_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCardVideoMedia_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCardVideoMedia_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardVideoMediaBlueWrapper_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardCometVideoMediaWrapper_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesContextualReplyBar_suggestions.graphql",
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
      metadata: { plural: !0 },
      name: "StoriesContextualReplyBar_suggestions",
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
          name: "StoriesSuggestedStickerReply_suggestions",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuggestedTextReply_suggestions",
        },
      ],
      type: "ConversationGuideSuggestion",
      abstractKey: "__isConversationGuideSuggestion",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuggestedTextReplyPill_text.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuggestedTextReplyPill_text",
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
  "StoriesSuggestedTextReply_suggestions.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "StoriesSuggestedTextReply_suggestions",
      selections: [
        {
          kind: "InlineFragment",
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
              name: "text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "text_with_entities",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "StoriesSuggestedTextReplyPill_text",
                },
              ],
              storageKey: null,
            },
          ],
          type: "TextSuggestion",
          abstractKey: null,
        },
      ],
      type: "ConversationGuideSuggestion",
      abstractKey: "__isConversationGuideSuggestion",
    };
    e.exports = a;
  },
  null
);
__d(
  "storiesUpdateStorySeenReceiptsLastSeenTimeMutationMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "count",
            storageKey: null,
          },
        ];
      b = [
        {
          alias: null,
          args: [{ kind: "Variable", name: "data", variableName: "input" }],
          concreteType: "StorySeenReceiptsLastSeenTimeUpdateResponsePayload",
          kind: "LinkedField",
          name: "story_seen_receipts_last_seen_time_update",
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
                  concreteType: "StoryCardSeenState",
                  kind: "LinkedField",
                  name: "story_card_seen_state",
                  plural: !1,
                  selections: [
                    {
                      alias: "newConnectionViewerCount",
                      args: [
                        { kind: "Literal", name: "type", value: "CONTACTS" },
                      ],
                      concreteType: "ApproximateCount",
                      kind: "LinkedField",
                      name: "seen_receipt_unseen_count",
                      plural: !1,
                      selections: b,
                      storageKey: 'seen_receipt_unseen_count(type:"CONTACTS")',
                    },
                    {
                      alias: "newFriendViewerCount",
                      args: [
                        { kind: "Literal", name: "type", value: "FRIENDS" },
                      ],
                      concreteType: "ApproximateCount",
                      kind: "LinkedField",
                      name: "seen_receipt_unseen_count",
                      plural: !1,
                      selections: b,
                      storageKey: 'seen_receipt_unseen_count(type:"FRIENDS")',
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "seen_receipts_last_seen_time",
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
      ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "storiesUpdateStorySeenReceiptsLastSeenTimeMutationMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "storiesUpdateStorySeenReceiptsLastSeenTimeMutationMutation",
          selections: b,
        },
        params: {
          id: "5324740347598386",
          metadata: {},
          name: "storiesUpdateStorySeenReceiptsLastSeenTimeMutationMutation",
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
  "StoriesViewerSheetInteractiveStickerOverlayMap_overlays.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetInteractiveStickerOverlayMap_overlays",
      selections: [
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
                  alias: null,
                  args: null,
                  concreteType: "StoryCardReactionSticker",
                  kind: "LinkedField",
                  name: "reaction_sticker",
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
                      concreteType: "InspirationsStickerImageAsset",
                      kind: "LinkedField",
                      name: "sticker_asset",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "image_asset_url",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              type: "StoryOverlayReactionSticker",
              abstractKey: null,
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
  "StoriesPollVoterListItem_voterInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesPollVoterListItem_voterInfo",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesViewerInfo_viewerInfo",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesViewerPog_viewerPog",
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesPollVoterList_voterList.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesPollVoterList_voterList",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryCardPollOption",
          kind: "LinkedField",
          name: "poll_options",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "StoryCardPollOptionToVotersConnection",
              kind: "LinkedField",
              name: "voters",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesPollVoterListItem_voterInfo",
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
      type: "StoryCardPoll",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesPollVotes_pollVotes.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesPollVotes_pollVotes",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useStoriesPollStickersHelper_pollVotes",
        },
      ],
      type: "StoryCardPoll",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesViewerSheetPollResult_overlayPoll.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetPollResult_overlayPoll",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryCardPoll",
          kind: "LinkedField",
          name: "poll",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesPollVotes_pollVotes",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesPollVoterList_voterList",
            },
          ],
          storageKey: null,
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
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesPollStickersHelper_pollVotes.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useStoriesPollStickersHelper_pollVotes",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryCardPollOption",
          kind: "LinkedField",
          name: "poll_options",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "vote_count",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reshare_vote_count",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryCardPoll",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesViewerSheetViewerFeedback_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetViewerFeedback_feedback",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryCardFeedbackReactionStickerReaction",
          kind: "LinkedField",
          name: "reaction_sticker_reactions",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reaction_sticker_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "MessengerMontageMessageReaction",
          kind: "LinkedField",
          name: "lightweight_reactions",
          plural: !0,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesLightweightViewerReactions_reactions",
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryCardFeedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesViewerInfo_viewerInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerInfo_viewerInfo",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesViewerLastActiveStatus_status.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerLastActiveStatus_status",
      selections: [
        {
          alias: "lastActiveStatus",
          args: null,
          concreteType: "LastActiveMessagesStatus",
          kind: "LinkedField",
          name: "last_active_messages_status",
          plural: !1,
          selections: [
            {
              alias: "isActive",
              args: null,
              kind: "ScalarField",
              name: "is_currently_active",
              storageKey: null,
            },
            {
              alias: "lastActiveTime",
              args: null,
              kind: "ScalarField",
              name: "time",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesViewerPog_viewerPog.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerPog_viewerPog",
      selections: [
        {
          alias: null,
          args: null,
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
          alias: "lastActiveStatus",
          args: null,
          concreteType: "LastActiveMessagesStatus",
          kind: "LinkedField",
          name: "last_active_messages_status",
          plural: !1,
          selections: [
            {
              alias: "isActive",
              args: null,
              kind: "ScalarField",
              name: "is_currently_active",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesViewerSheetViewerListContentQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        b = { defaultValue: null, kind: "LocalArgument", name: "id" },
        c = { defaultValue: 5, kind: "LocalArgument", name: "viewerCount" },
        d = [{ kind: "Variable", name: "id", variableName: "id" }],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        g = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "viewerCount" },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, b, c],
          kind: "Fragment",
          metadata: null,
          name: "StoriesViewerSheetViewerListContentQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: [
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                    {
                      kind: "Variable",
                      name: "viewerCount",
                      variableName: "viewerCount",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "StoriesViewerSheetViewerListContent_viewerList",
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
          argumentDefinitions: [a, c, b],
          kind: "Operation",
          name: "StoriesViewerSheetViewerListContentQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                e,
                f,
                {
                  kind: "InlineFragment",
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
                          alias: "viewerList_viewers",
                          args: g,
                          concreteType: "StoryCardToStoryViewersConnection",
                          kind: "LinkedField",
                          name: "story_viewers",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "StoryCardToStoryViewersEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    e,
                                    f,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "name",
                                          storageKey: null,
                                        },
                                        {
                                          alias: "lastActiveStatus",
                                          args: null,
                                          concreteType:
                                            "LastActiveMessagesStatus",
                                          kind: "LinkedField",
                                          name: "last_active_messages_status",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: "isActive",
                                              args: null,
                                              kind: "ScalarField",
                                              name: "is_currently_active",
                                              storageKey: null,
                                            },
                                            {
                                              alias: "lastActiveTime",
                                              args: null,
                                              kind: "ScalarField",
                                              name: "time",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
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
                                  concreteType: "StoryCardFeedback",
                                  kind: "LinkedField",
                                  name: "feedback",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "StoryCardFeedbackReactionStickerReaction",
                                      kind: "LinkedField",
                                      name: "reaction_sticker_reactions",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "reaction_sticker_id",
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "MessengerMontageMessageReaction",
                                      kind: "LinkedField",
                                      name: "lightweight_reactions",
                                      plural: !0,
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
                                                  concreteType:
                                                    "MessengerMontageMessageAction",
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
                                        f,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "UnifiedStoryReply",
                                      kind: "LinkedField",
                                      name: "story_replies",
                                      plural: !0,
                                      selections: [e, f],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "seen_time",
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
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: "viewerList_viewers",
                          args: g,
                          filters: null,
                          handle: "connection",
                          key: "StoriesViewerSheetViewerListContent_viewerList_viewers",
                          kind: "LinkedHandle",
                          name: "story_viewers",
                        },
                      ],
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
          id: "3934951263269875",
          metadata: {},
          name: "StoriesViewerSheetViewerListContentQuery",
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
  "StoriesViewerSheetViewerListContent_overlays.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetViewerListContent_overlays",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesViewerSheetInteractiveStickerOverlayMap_overlays",
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
  "StoriesViewerSheetViewerListContent_seenState.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetViewerListContent_seenState",
      selections: [
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
              name: "seen_receipts_last_seen_time",
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
  "StoriesViewerSheetViewerListContent_viewerList.graphql",
  ["StoriesViewerSheetViewerListContentQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["story_card_info", "viewerList_viewers"],
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { defaultValue: 5, kind: "LocalArgument", name: "viewerCount" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            {
              count: "viewerCount",
              cursor: "cursor",
              direction: "forward",
              path: a,
            },
          ],
          refetch: {
            connection: {
              forward: { count: "viewerCount", cursor: "cursor" },
              backward: null,
              path: a,
            },
            fragmentPathInResult: ["node"],
            operation: b("StoriesViewerSheetViewerListContentQuery.graphql"),
            identifierField: "id",
          },
        },
        name: "StoriesViewerSheetViewerListContent_viewerList",
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
                alias: "viewerList_viewers",
                args: null,
                concreteType: "StoryCardToStoryViewersConnection",
                kind: "LinkedField",
                name: "__StoriesViewerSheetViewerListContent_viewerList_viewers_connection",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "StoryCardToStoryViewersEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "StoriesViewerSheetViewerListItem_viewerDetail",
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "seen_time",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cursor",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: "StoryCardFeedback",
                        kind: "LinkedField",
                        name: "feedback",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "MessengerMontageMessageReaction",
                            kind: "LinkedField",
                            name: "lightweight_reactions",
                            plural: !0,
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
                                    kind: "ScalarField",
                                    name: "count",
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
                            concreteType: "UnifiedStoryReply",
                            kind: "LinkedField",
                            name: "story_replies",
                            plural: !0,
                            selections: c,
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
                        name: "node",
                        plural: !1,
                        selections: c,
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
            kind: "ScalarField",
            name: "id",
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
  "StoriesViewerSheetViewerListHeader_cardSeenState.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ kind: "Literal", name: "type", value: "FRIENDS" }],
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "count",
            storageKey: null,
          },
        ],
        c = [{ kind: "Literal", name: "type", value: "CONTACTS" }];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "StoriesViewerSheetViewerListHeader_cardSeenState",
        selections: [
          {
            alias: "viewerCount",
            args: null,
            concreteType: "StoryCardSeenState",
            kind: "LinkedField",
            name: "story_card_seen_state",
            plural: !1,
            selections: [
              {
                alias: "friendViewerCount",
                args: a,
                concreteType: "ApproximateCount",
                kind: "LinkedField",
                name: "seen_count",
                plural: !1,
                selections: b,
                storageKey: 'seen_count(type:"FRIENDS")',
              },
              {
                alias: "connectionViewerCount",
                args: c,
                concreteType: "ApproximateCount",
                kind: "LinkedField",
                name: "seen_count",
                plural: !1,
                selections: b,
                storageKey: 'seen_count(type:"CONTACTS")',
              },
              {
                alias: "followerViewerCount",
                args: [{ kind: "Literal", name: "type", value: "FOLLOWERS" }],
                concreteType: "ApproximateCount",
                kind: "LinkedField",
                name: "seen_count",
                plural: !1,
                selections: b,
                storageKey: 'seen_count(type:"FOLLOWERS")',
              },
              {
                alias: "newFriendViewerCount",
                args: a,
                concreteType: "ApproximateCount",
                kind: "LinkedField",
                name: "seen_receipt_unseen_count",
                plural: !1,
                selections: b,
                storageKey: 'seen_receipt_unseen_count(type:"FRIENDS")',
              },
              {
                alias: "newConnectionViewerCount",
                args: c,
                concreteType: "ApproximateCount",
                kind: "LinkedField",
                name: "seen_receipt_unseen_count",
                plural: !1,
                selections: b,
                storageKey: 'seen_receipt_unseen_count(type:"CONTACTS")',
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
  "StoriesViewerSheetViewerListItem_viewerDetail.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesViewerSheetViewerListItem_viewerDetail",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
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
              args: null,
              kind: "FragmentSpread",
              name: "StoriesViewerInfo_viewerInfo",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesViewerLastActiveStatus_status",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesViewerPog_viewerPog",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "StoryCardFeedback",
          kind: "LinkedField",
          name: "feedback",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesViewerSheetViewerFeedback_feedback",
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryCardToStoryViewersEdge",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseBucket_animations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseBucket_animations",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseCard_animations",
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
  "StoriesSuspenseBucket_card.graphql",
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
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
        name: "StoriesSuspenseBucket_card",
        selections: [
          a,
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
                  b,
                  {
                    kind: "InlineFragment",
                    selections: [a],
                    type: "Node",
                    abstractKey: "__isNode",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: [
                          {
                            kind: "Literal",
                            name: "framework",
                            value: "WARNING_SCREENS",
                          },
                          { kind: "Literal", name: "location", value: "story" },
                        ],
                        concreteType: "CIXScreen",
                        kind: "LinkedField",
                        name: "cix_screen",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "view_model",
                            plural: !1,
                            selections: [
                              b,
                              {
                                args: null,
                                kind: "FragmentSpread",
                                name: "StoriesRecoverWarningScreenButton_data",
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey:
                          'cix_screen(framework:"WARNING_SCREENS",location:"story")',
                      },
                    ],
                    type: "CanRenderCIXScreen",
                    abstractKey: "__isCanRenderCIXScreen",
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
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
            name: "StoriesSuspenseCard_card",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesSuspenseCardOptionMenuTrigger_card",
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
  "StoriesSuspenseBucket_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseBucket_owner",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseCard_owner",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseCardOptionMenuTrigger_owner",
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
  "StoriesSuspenseCardMediaContent_media.graphql",
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
          { kind: "RootArgument", name: "blur" },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "StoriesSuspenseCardMediaContent_media",
        selections: [
          a,
          {
            alias: "link_attachment",
            args: [{ kind: "Literal", name: "if_style", value: "share" }],
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "attachments",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "url",
                storageKey: null,
              },
            ],
            storageKey: 'attachments(if_style:"share")',
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
                    alias: "blurredImage",
                    args: [
                      { kind: "Variable", name: "blur", variableName: "blur" },
                      { kind: "Literal", name: "height", value: 350 },
                      {
                        kind: "Variable",
                        name: "scale",
                        variableName: "scale",
                      },
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
                    name: "__typename",
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [a],
                    type: "Node",
                    abstractKey: "__isNode",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "StoriesCardPhotoMedia_photo",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "StoriesCardVideoMedia_video",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: [
                          {
                            kind: "Literal",
                            name: "framework",
                            value: "WARNING_SCREENS",
                          },
                          { kind: "Literal", name: "location", value: "story" },
                        ],
                        concreteType: "CIXScreen",
                        kind: "LinkedField",
                        name: "cix_screen",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "view_model",
                            plural: !1,
                            selections: [
                              {
                                args: null,
                                kind: "FragmentSpread",
                                name: "StoriesSuspenseCardMediaWarningScreen_data",
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey:
                          'cix_screen(framework:"WARNING_SCREENS",location:"story")',
                      },
                    ],
                    type: "CanRenderCIXScreen",
                    abstractKey: "__isCanRenderCIXScreen",
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
            concreteType: "TextFormatMetadata",
            kind: "LinkedField",
            name: "text_format_metadata",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "StoriesCardComposerFormat_textFormatMetaData",
              },
            ],
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
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "StoriesCardComposerFormat_message",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "StoryBackgroundInfo",
            kind: "LinkedField",
            name: "story_default_background",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "StoriesCardComposerFormat_defaultBackground",
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesCardComposerFormat_story",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "StoriesCardPhotoMedia_story",
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
  "StoriesSuspenseCardMediaWarningScreen_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseCardMediaWarningScreen_data",
      selections: [
        {
          args: null,
          documentName: "StoriesSuspenseCardMediaWarningScreen_data",
          fragmentName: "CometWarningScreenOverlay_data",
          fragmentPropName: "data",
          kind: "ModuleImport",
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
  "StoriesSuspenseCardMedia_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseCardMedia_media",
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
          concreteType: "StoryCardStoryInfo",
          kind: "LinkedField",
          name: "story_card_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "story_play_duration",
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
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseCardMediaContent_media",
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
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCardMediaLoadingBackground_story",
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
  "StoriesBehaviorHelpContextProvider_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesBehaviorHelpContextProvider_bucket",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "story_bucket_type",
          storageKey: null,
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
  "StoriesBehaviorHelpContextProvider_owner.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesBehaviorHelpContextProvider_owner",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
          ],
          type: "Node",
          abstractKey: "__isNode",
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "viewer_profile_permissions",
              storageKey: null,
            },
          ],
          type: "Page",
          abstractKey: null,
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
  "StoriesSuspenseViewerSheetSelfStoryContent_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseViewerSheetSelfStoryContent_bucket",
      selections: [
        {
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
          type: "StoryHighlightContainer",
          abstractKey: null,
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
  "StoriesSuspenseViewerSheetSelfStoryContent_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseViewerSheetSelfStoryContent_card",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseViewerSheetViewerList_card",
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
              args: null,
              kind: "FragmentSpread",
              name: "StoriesViewerSheetPollResult_overlayPoll",
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
  "StoriesSuspenseViewerSheetViewerList_card.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseViewerSheetViewerList_card",
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
          name: "StoriesViewerSheetViewerListHeader_cardSeenState",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesViewerSheetViewerListContent_viewerList",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesViewerSheetViewerListContent_seenState",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesViewerSheetViewerListContent_overlays",
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
  "useViewerSheetPreviewImageURIList_previewURIs.graphql",
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
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: { plural: !0 },
        name: "useViewerSheetPreviewImageURIList_previewURIs",
        selections: [
          a,
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
                    type: "Node",
                    abstractKey: "__isNode",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "accessibility_caption",
                        storageKey: null,
                      },
                    ],
                    type: "Photo",
                    abstractKey: null,
                  },
                  {
                    alias: "previewImage",
                    args: [
                      {
                        kind: "Variable",
                        name: "scale",
                        variableName: "scale",
                      },
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
                        args: [
                          {
                            kind: "Literal",
                            name: "framework",
                            value: "WARNING_SCREENS",
                          },
                          { kind: "Literal", name: "location", value: "story" },
                        ],
                        concreteType: "CIXScreen",
                        kind: "LinkedField",
                        name: "cix_screen",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "view_model",
                            plural: !1,
                            selections: [
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    args: null,
                                    documentName:
                                      "useViewerSheetPreviewImageURIList_previewURIs",
                                    fragmentName:
                                      "CometWarningScreenOverlay_data",
                                    fragmentPropName: "data",
                                    kind: "ModuleImport",
                                  },
                                ],
                                type: "OverlayWarningScreenViewModel",
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey:
                          'cix_screen(framework:"WARNING_SCREENS",location:"story")',
                      },
                    ],
                    type: "CanRenderCIXScreen",
                    abstractKey: "__isCanRenderCIXScreen",
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
  "CometToastBridge.react",
  [
    "BaseToastAnimationInternal.react",
    "BaseToasterView.react",
    "react",
    "useToasterStateManager",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState;
    function a(a) {
      a = a.maxVisible;
      a = a === void 0 ? 1 : a;
      var b = c("useToasterStateManager")(),
        d = j(function () {
          return b.getEmptyState();
        }),
        e = d[0],
        f = d[1];
      i(
        function () {
          var a = b.registerView(f);
          return function () {
            a.remove();
          };
        },
        [b]
      );
      return h.jsx("div", {
        className: "l9j0dhe7",
        children: h.jsx(c("BaseToasterView.react"), {
          maxVisible: a,
          toasterState: e,
          children: function (a, b, d, e) {
            return h.jsx(
              c("BaseToastAnimationInternal.react"),
              { expired: d, id: b, position: e, children: a },
              b
            );
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometFeaturedHighlightsEditCollectionDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometFeaturedHighlightsEditCollectionDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.collectionID;
        return {
          queries: {
            queryReference: {
              parameters: c(
                "ProfileCometFeaturedHighlightsEditCollectionDialogQuery$Parameters"
              ),
              variables: { collectionID: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "ProfileCometFeaturedHighlightsEditCollectionDialog.react"
      ).__setRef(
        "ProfileCometFeaturedHighlightsEditCollectionDialog.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometFeaturedHighlightsEditCollectionButton.react",
  [
    "CometEntryPointDialogTrigger.react",
    "CometTransientDialogProvider.react",
    "ProfileCometFeaturedHighlightsEditCollectionDialog.entrypoint",
    "ProfileCometFeaturedHighlightsStrings",
    "TetraButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.collectionID;
      a = a.profileID;
      return h.jsx(c("CometTransientDialogProvider.react"), {
        children: h.jsx(c("CometEntryPointDialogTrigger.react"), {
          dialogEntryPoint: c(
            "ProfileCometFeaturedHighlightsEditCollectionDialog.entrypoint"
          ),
          otherProps: { profileID: a },
          preloadParams: { collectionID: b },
          preloadTrigger: "button",
          children: function (a, b, e, f) {
            return h.jsx(c("TetraButton.react"), {
              label: d("ProfileCometFeaturedHighlightsStrings")
                .EDIT_FEATURED_COLLECTION,
              onHoverIn: b,
              onHoverOut: e,
              onPress: a,
              onPressIn: f,
              type: "secondary",
            });
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      NO_VIEWERSHEET: "NO_VIEWERSHEET",
      PAGE_STORY_VIEWERSHEET: "PAGE_STORY_VIEWERSHEET",
      SELF_STORY_VIEWERSHEET: "SELF_STORY_VIEWERSHEET",
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "StoriesBehaviorHelpers",
  ["StoriesEnums", "StoriesViewerSheetTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return h(a, b);
    }
    function b(a, b, d, e) {
      return i(a, b, d, e) !== c("StoriesViewerSheetTypes").NO_VIEWERSHEET;
    }
    function h(a, b) {
      return b === a;
    }
    function i(a, b, e, f) {
      if (a === d("StoriesEnums").STORY_CARD_TYPES.PAGE_STORY)
        if (e === !0)
          return c("StoriesViewerSheetTypes").PAGE_STORY_VIEWERSHEET;
        else return c("StoriesViewerSheetTypes").NO_VIEWERSHEET;
      return h(b, f)
        ? a === d("StoriesEnums").STORY_CARD_TYPES.PROFILE_PLUS_STORY ||
          a ===
            d("StoriesEnums").STORY_CARD_TYPES.ADMINED_ADDITIONAL_PROFILE_STORY
          ? c("StoriesViewerSheetTypes").PAGE_STORY_VIEWERSHEET
          : c("StoriesViewerSheetTypes").SELF_STORY_VIEWERSHEET
        : c("StoriesViewerSheetTypes").NO_VIEWERSHEET;
    }
    g.canAddToStory = a;
    g.canSeeViewerSheet = b;
    g.isSelfStory = h;
    g.whichViewerSheet = i;
  },
  98
);
__d(
  "StoriesSetBucketHelper",
  ["StoriesGating", "WebPixelRatio"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return {
        bucketID: a,
        bucketIndex: -1,
        canSeeViewerSheet: !1,
        canShowStoryOverlay: !0,
        hasSelfBucket: !1,
        isEndOfTray: !1,
        isFirstBucket: !0,
        isLastBucket: !0,
        isSecondBucket: !1,
        nextBuckets: null,
        nextBucketsCount: 0,
      };
    }
    function b(a, b, c, e, f) {
      c.bucketID != null &&
        c.bucketID !== "" &&
        c.bucketID !== e.bucketID &&
        b(!0),
        f != null &&
          c.bucketID !== e.bucketID &&
          f({
            blur: d("WebPixelRatio").get() * 10,
            bucketID: e.bucketID,
            initialBucketID: e.bucketID,
            initialLoad: !1,
            scale: d("WebPixelRatio").get(),
            shouldEnableLiveInStories:
              d("StoriesGating").shouldEnableLiveInStories(),
            shouldEnableLiveInStoriesDropdown:
              d("StoriesGating").shouldEnableLiveInStoriesDropdown(),
            showSuggestedStickerReplies:
              d("StoriesGating").shouldShowSuggestedStickerReplies(),
          }),
        a(e);
    }
    g.defaultBucketData = a;
    g.updateBucketData = b;
  },
  98
);
__d(
  "StoriesCometLeftRailLayout.react",
  [
    "CometRouteRenderType",
    "CometSection.react",
    "MWChatOnMediaVisibilityOverrideContext",
    "gkx",
    "react",
    "stylex",
    "useMWIsCurrentRouteMediaViewerExperiment",
    "useShouldShowMessagingEntrypointOnCurrentRoute",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("gkx")("708253");
    function a(a) {
      var b = a.children,
        e = a.hasRightRail,
        f = a.hideLeftRail;
      a = a.leftRail;
      var g = d("CometRouteRenderType").useIsHosted(),
        j = d("CometRouteRenderType").useIsPushView(),
        k = c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT"),
        l = c("useMWIsCurrentRouteMediaViewerExperiment")();
      l = d(
        "MWChatOnMediaVisibilityOverrideContext"
      ).useMWChatOnMediaVisibilityOverride(l);
      k = k && l;
      l = g || !!f;
      g = h.jsx("div", {
        className:
          "o36gj0jk datstx6m hybvsw6c" +
          (e ? " ltb2cvov f0t0fhil" : "") +
          (e && k ? " ac6d9p2t" : "") +
          (l ? " mkhogb32" : ""),
        children: h.jsx(c("CometSection.react"), {
          className: c("stylex").dedupe(
            {
              "background-color-1": "hybvsw6c",
              "bottom-1": "i09qtzwb",
              "font-size-1": "e9vueds3",
              "height-1": "idiwt2bm",
              "overflow-y-1": "eg9m0zos",
              "position-1": "poy2od1o",
              "top-1": "be9z9djy",
              "width-1": "iyyx5f41",
            },
            i ? null : { "top-1": "t38bcc6f" }
          ),
          role: "navigation",
          children: a,
        }),
      });
      return h.jsxs("div", {
        className: "k4urcfbm j83agx80",
        children: [
          g,
          i && j
            ? h.jsx("div", {
                className:
                  "kr520xx4 j9ispegn pmk7jnqg hzruof5a byvelhso n7fi1qx3 bfjqzvhc",
              })
            : null,
          h.jsx("div", { className: "l9j0dhe7 buofh1pr", children: b }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCometListItemGlimmer.react",
  [
    "BaseGlimmer.react",
    "BaseLoadingStateElement.react",
    "Random",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.itemSizes = Array(c.props.numberOfItems)
            .fill()
            .map(function () {
              return Math.floor(d("Random").random() * 4);
            })),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.render = function () {
        var a = this,
          b = this.itemSizes;
        return h.jsx(c("BaseLoadingStateElement.react"), {
          children: b.map(function (b, d) {
            return h.jsxs(
              "div",
              {
                className:
                  "tw6a2znq sj5x9vvc d1544ag0 cxgpxx05 kkf49tns dicw6rsg cgat1ltu rs0gx3tq jifvfom9 j83agx80" +
                  (a.props.isFriends ? " cb02d2ww" : ""),
                children: [
                  h.jsx(c("BaseGlimmer.react"), {
                    className: c("stylex").dedupe(
                      {
                        "border-top-start-radius-1": "s45kfl79",
                        "border-top-end-radius-1": "emlxlaya",
                        "border-bottom-end-radius-1": "bkmhp75w",
                        "border-bottom-start-radius-1": "spb7xbtv",
                        "height-1": "cb02d2ww",
                        "width-1": "ljni7pan",
                      },
                      a.props.isViewerSheet !== !0
                        ? { "height-1": "tv7at329", "width-1": "thwo4zme" }
                        : null
                    ),
                    index: d,
                  }),
                  h.jsx("div", {
                    className:
                      "h676nmdw dicw6rsg oi9244e8 rs0gx3tq buofh1pr j83agx80 bp9cbjyn",
                    children: h.jsxs("div", {
                      className: "buofh1pr",
                      children: [
                        h.jsx(c("BaseGlimmer.react"), {
                          className: c("stylex").dedupe(
                            {
                              "border-top-start-radius-1": "fni8adji",
                              "border-top-end-radius-1": "hgaippwi",
                              "border-bottom-end-radius-1": "fykbt5ly",
                              "border-bottom-start-radius-1": "ns4ygwem",
                              "height-1": "jnigpg78",
                              "margin-bottom-1": "dicw6rsg",
                            },
                            b === 0 ? { "width-1": "n99xedck" } : null,
                            b === 1 ? { "width-1": "jico2p30" } : null,
                            b === 2 ? { "width-1": "ptrm0iwj" } : null,
                            b === 3 ? { "width-1": "k4urcfbm" } : null
                          ),
                          index: d,
                        }),
                        h.jsx(c("BaseGlimmer.react"), {
                          className:
                            "emzexkp1 aov4n071 ed3p1gfi ns4ygwem fykbt5ly hgaippwi fni8adji",
                          index: d,
                        }),
                      ],
                    }),
                  }),
                ],
              },
              d
            );
          }),
        });
      };
      return b;
    })(h.PureComponent);
    a.defaultProps = { isFriends: !1, numberOfItems: 1 };
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardHeaderGlimmer.react",
  ["BaseGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.isBackgroundBucket;
      a = a == null || a === !1;
      return h.jsxs("div", {
        className: "jifvfom9 j83agx80",
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className: "q676j6op qypqp5cg spb7xbtv bkmhp75w emlxlaya s45kfl79",
            index: 0,
            theme: "light",
          }),
          a &&
            h.jsx("div", {
              className:
                "h676nmdw dicw6rsg oi9244e8 rs0gx3tq buofh1pr j83agx80 bp9cbjyn",
              children: h.jsxs("div", {
                className: "buofh1pr",
                children: [
                  h.jsx(c("BaseGlimmer.react"), {
                    className:
                      "ptrm0iwj dicw6rsg i4qgphn6 ns4ygwem fykbt5ly hgaippwi fni8adji",
                    index: 0,
                    theme: "light",
                  }),
                  h.jsx(c("BaseGlimmer.react"), {
                    className:
                      "emzexkp1 aov4n071 cyypbtt7 ns4ygwem fykbt5ly hgaippwi fni8adji",
                    index: 0,
                    theme: "light",
                  }),
                ],
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
  "StoriesBucketLoadingView.react",
  ["StoriesCardHeaderGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.isBackgroundBucket;
      return h.jsx("div", {
        className:
          "k4urcfbm l9j0dhe7 jifvfom9 datstx6m cbu4d94t j83agx80 ppue9xd8 ll8tlv6m",
        children: h.jsx("div", {
          className: "eq70wtua en0ipb6w ozuftl9m",
          children: h.jsx(c("StoriesCardHeaderGlimmer.react"), {
            isBackgroundBucket: a,
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
  "useStoriesViewerClose",
  [
    "CometRouteRenderType",
    "MessengerEnvironment",
    "StoriesLoggerSession",
    "StoriesLoggingConstants",
    "cr:869845",
    "gkx",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("708253");
    function a() {
      var a = d("CometRouteRenderType").useIsPushView(),
        e = c("useCometRouterDispatcher")();
      return function (f) {
        var g = d("StoriesLoggerSession").getOpenViewerSource();
        d("StoriesLoggerSession").setCloseGesture(f);
        b("cr:869845")
          ? c("MessengerEnvironment").messengerui
            ? b("cr:869845").getInstance().closeDialogMessenger()
            : g === c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE
            ? b("cr:869845").getInstance().closeArchiveDialogAndRefresh()
            : b("cr:869845").getInstance().navigateToEntryPoint()
          : h &&
            f === c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.AUTO_EXIT &&
            (!a && e && e.goBack
              ? e.goBack()
              : a && e && e.popPushView && e.popPushView());
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCloseButton.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "IconSource",
    "StoriesLoggingConstants",
    "StoriesSuspensePauseContext",
    "TetraIcon.react",
    "cr:1032347",
    "gkx",
    "react",
    "useStoriesViewerClose",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext,
      l = c("gkx")("708253");
    function a(a) {
      a = a.dark;
      a = a === void 0 ? !1 : a;
      var d = c("useStoriesViewerClose")(),
        e = k(c("StoriesSuspensePauseContext"));
      e = e.setPause;
      if (l) return null;
      var f = function (a) {
        d(c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.CLOSE_BUTTON_EXIT);
      };
      a = a
        ? new (c("IconSource"))("FB", i("1351092"), 24)
        : new (c("IconSource"))("FB", i("1495001"), 24);
      return j.jsxs("div", {
        className:
          "i2p6rm4e heur4gxb art1omkt kmdw4o4n kr520xx4 pmk7jnqg qwwmc0zo n7fi1qx3 j83agx80",
        "data-testid": void 0,
        children: [
          b("cr:1032347") && j.jsx(b("cr:1032347"), { setPause: e }),
          j.jsx(c("CometPressable.react"), {
            "aria-label": h._("Close"),
            display: "inline",
            onPress: f,
            overlayDisabled: !0,
            children: j.jsx("div", {
              className:
                "gu00c43d sjgh65i0 wkznzc2l tr9rh885 j83agx80 nhd2j8a9",
              children: j.jsx(c("TetraIcon.react"), { icon: a, size: 24 }),
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
  "StoriesUnselected.react",
  ["StoriesCloseButton.react", "cr:278", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        className:
          "k4urcfbm ni8dbmo4 q10oee1b taijpn5t datstx6m cbu4d94t j83agx80 qsy8amke bp9cbjyn",
        children: [
          h.jsx(c("StoriesCloseButton.react"), { dark: !0 }),
          h.jsx(b("cr:278"), {}),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerOpenAnimationContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      duration: 0,
      getAnimated: function () {
        return !1;
      },
      setAnimated: c("emptyFunction"),
      transform: "",
      transformOrigin: "",
    };
    e = a.createContext(b);
    g["default"] = e;
  },
  98
);
__d(
  "useStoriesAnimatedElement",
  ["react", "useLayoutEffect_SAFE_FOR_SSR"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;
    function b(b) {
      var d = h("Appear"),
        e = d[0],
        f = d[1];
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          var c = a.requestAnimationFrame(function () {
              f("AppearActive");
            }),
            d = a.setTimeout(function () {
              f("AppearDone");
            }, b);
          return function () {
            a.clearTimeout(d), a.cancelAnimationFrame(c);
          };
        },
        [f, b]
      );
      return [e];
    }
    g["default"] = b;
  },
  98
);
__d(
  "StoriesSuspenseCarouselBucketDataContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      anyNullStateOverlayExist: !1,
      setAnyNullStateOverlayExist: function (a) {},
      setShouldRefetch: function (a) {},
      setSideBucketAvailable: function (a) {},
      shouldRefetch: !1,
      sideBucketAvailable: !1,
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "useStoriesViewerBaseDimensions",
  [
    "CometAppNavigationConstants",
    "CometRouteRenderType",
    "StoriesGating",
    "StoriesSuspenseCarouselBucketDataContext",
    "gkx",
    "react",
    "useCometWindowSize",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useState,
      j = 12 * 2,
      k = 44 + 12,
      l = 43,
      m = 0.5625,
      n = 900,
      o = 20,
      p = 280,
      q = 140,
      r = c("gkx")("708253");
    function a(a) {
      var b = d("CometRouteRenderType").useIsPushView(),
        e = c("useCometWindowSize")(),
        f = e.innerHeight;
      e = e.innerWidth;
      var g = i(p),
        s = g[0];
      g = g[1];
      var t = h(c("StoriesSuspenseCarouselBucketDataContext"));
      t = t.sideBucketAvailable;
      var u = e > n,
        v = 0,
        w = !1;
      a != null ? (w = a) : (w = t);
      v = f - (j + k);
      !r
        ? (v -= l)
        : r && !b && (v -= d("CometAppNavigationConstants").HEADER_HEIGHT);
      a = Math.round(v * m);
      t = v * 0.45;
      f = e - (a + 2 * 0.45 * a + 2 * s);
      b = !w || (w && !u);
      d("StoriesGating").shouldShowViewerV3() &&
        !b &&
        f <= o &&
        (s === p
          ? g(q)
          : (t = Math.min(t, Math.round((e - 2 * s - o - v * m) / 2 / m))));
      f > p + o && s === q && g(p);
      return {
        gap: s,
        hasSideBucketSpace: u,
        height: v,
        sideHeight: t,
        sideWidth: Math.round(t * m),
        width: Math.round(v * m),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesViewerDimensions",
  [
    "StoriesViewerOpenAnimationContext",
    "react",
    "useStoriesAnimatedElement",
    "useStoriesViewerBaseDimensions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a(a) {
      a = babelHelpers["extends"]({}, c("useStoriesViewerBaseDimensions")(a));
      var b = h(c("StoriesViewerOpenAnimationContext")),
        d = b.duration,
        e = b.getAnimated,
        f = b.setAnimated,
        g = b.transform;
      b = b.transformOrigin;
      d = c("useStoriesAnimatedElement")(d);
      d = d[0];
      if (!e())
        if (d === "Appear")
          return babelHelpers["extends"]({}, a, {
            transform: g,
            transformOrigin: b,
          });
        else f(!0);
      return babelHelpers["extends"]({}, a, {
        transform: "",
        transformOrigin: b,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCometPlaceholderWithNav.react",
  [
    "fbt",
    "CometUnitHeader.react",
    "StoriesBucketLoadingView.react",
    "StoriesCometLeftRailLayout.react",
    "StoriesCometListItemGlimmer.react",
    "StoriesEnums",
    "StoriesUnselected.react",
    "react",
    "stylex",
    "useStoriesViewerDimensions",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.isNullState;
      b = b === void 0 ? !1 : b;
      a = a.isPermalink;
      a = a === void 0 ? !1 : a;
      var e = c("useStoriesViewerDimensions")(),
        f = d("StoriesEnums").BACKGROUND_STYLE.DEFAULT;
      b = b
        ? i.jsx(c("StoriesUnselected.react"), {})
        : i.jsx("div", {
            className:
              "dzlist6r msbwk0y7 flx89l3n ms05siws l9j0dhe7 stjgntxs ni8dbmo4 puxov6c6 r893ighp ozuftl9m n851cfcs tvfksri0 n1l5q3vz btwxx1t3 j83agx80 kzx2olss aot14ch1 p86d2i9g beltcj47",
            style: e,
            children: i.jsx(c("StoriesBucketLoadingView.react"), {}),
          });
      return i.jsx(c("StoriesCometLeftRailLayout.react"), {
        hasRightRail: !1,
        isPermalink: a,
        leftRail: i.jsxs(i.Fragment, {
          children: [
            i.jsx(c("CometUnitHeader.react"), {
              headline: h._("Stories"),
              headlineColor: "primary",
              isSemanticHeading: !0,
              level: 1,
              paddingTop: 20,
            }),
            i.jsx(c("CometUnitHeader.react"), {
              headline: h._("Your Story"),
              headlineColor: "secondary",
              level: 3,
              paddingTop: 16,
            }),
            i.jsx(c("StoriesCometListItemGlimmer.react"), { numberOfItems: 1 }),
            i.jsx(c("CometUnitHeader.react"), {
              headline: h._("All Stories"),
              headlineColor: "secondary",
              level: 3,
              paddingTop: 8,
            }),
            i.jsx(c("StoriesCometListItemGlimmer.react"), {
              isFriends: !0,
              numberOfItems: 6,
            }),
          ],
        }),
        children: i.jsx("div", {
          className: c("stylex").dedupe(
            {
              "background-color-1": "tqsryivl",
              "display-1": "j83agx80",
              "height-1": "datstx6m",
              "justify-content-1": "taijpn5t",
              "width-1": "k4urcfbm",
            },
            f === d("StoriesEnums").BACKGROUND_STYLE.BLACK
              ? { "background-color-1": "tqsryivl" }
              : null
          ),
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCometPlaceholder.react",
  [
    "StoriesBucketLoadingView.react",
    "StoriesCometPlaceholderWithNav.react",
    "StoriesEnums",
    "react",
    "stylex",
    "useStoriesViewerDimensions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.isNullState;
      b = b === void 0 ? !1 : b;
      var e = a.isPermalink;
      e = e === void 0 ? !1 : e;
      a = a.leftRail;
      a = a === void 0 ? !0 : a;
      var f = c("useStoriesViewerDimensions")(),
        g = d("StoriesEnums").BACKGROUND_STYLE.DEFAULT,
        i = !0;
      if (a && i)
        return h.jsx(c("StoriesCometPlaceholderWithNav.react"), {
          isNullState: b,
          isPermalink: e,
          leftRail: a,
        });
      i = h.jsx("div", {
        className:
          "dzlist6r msbwk0y7 flx89l3n ms05siws l9j0dhe7 stjgntxs ni8dbmo4 puxov6c6 r893ighp ozuftl9m n851cfcs tvfksri0 n1l5q3vz btwxx1t3 j83agx80 kzx2olss aot14ch1 p86d2i9g beltcj47",
        style: f,
        children: h.jsx(c("StoriesBucketLoadingView.react"), {}),
      });
      return h.jsx("div", {
        className: c("stylex").dedupe(
          {
            "background-color-1": "tqsryivl",
            "display-1": "j83agx80",
            "height-1": "datstx6m",
            "justify-content-1": "taijpn5t",
            "width-1": "k4urcfbm",
          },
          g === d("StoriesEnums").BACKGROUND_STYLE.BLACK
            ? { "background-color-1": "tqsryivl" }
            : null
        ),
        children: i,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesNullStateImage.react",
  ["fbt", "NullStateMedia", "TetraNullState.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx(c("TetraNullState.react"), {
        headline: h._("Select a story to open."),
        icon: c("NullStateMedia"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardSingleAuthorHeader.react",
  [
    "ix",
    "CometImage.react",
    "CometLink.react",
    "CometPressable.react",
    "CometProfileVerificationBadge.react",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "CometTextWithBadge.react",
    "Locale",
    "StoriesCardSingleAuthorHeader_attribution.graphql",
    "StoriesCardSingleAuthorHeader_owner.graphql",
    "StoriesGating",
    "StoriesLoggerSession",
    "StoriesLoggingConstants",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "formatDate",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react"),
      l = {
        container: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          minWidth: "ryqw613g",
          position: "pmk7jnqg",
          start: "rnx8an3s",
          top: "o8bxvmiv",
        },
        creationTime: {
          color: "qrtewk5h",
          marginStart: "kkf49tns",
          textShadow: "e72ntyah",
        },
        ownerInfoContainer: {
          marginTop: "kvgmc6g5",
          marginEnd: "cxmmr5t8",
          marginBottom: "oygrvhab",
          marginStart: "hcukyx3x",
          paddingStart: "tw6a2znq",
          width: "k4urcfbm",
        },
        ownerInfoWithAttributionContainer: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          width: "k4urcfbm",
        },
        ownerInfoWithTime: {
          alignItems: "a6y00v3l",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
        },
        ownerName: {
          color: "qrtewk5h",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          marginTop: "kvgmc6g5",
          marginEnd: "cxmmr5t8",
          marginBottom: "oygrvhab",
          marginStart: "hcukyx3x",
          textShadow: "e72ntyah",
          whiteSpace: "l3itjdph",
        },
        ownerNameContainer: { maxWidth: "p1zh8zwq" },
        ownerNamePressable: { maxWidth: "d2edcug0" },
        ownerPic: {
          borderTop: "q9iuea42",
          borderEnd: "qs4al1v0",
          borderBottom: "eprw1yos",
          borderStart: "a4d05b8z",
          borderTopStartRadius: "sibfvsnu",
          borderTopEndRadius: "px9q9ucb",
          borderBottomEndRadius: "j2ut9x2k",
          borderBottomStartRadius: "p4hiznlx",
          display: "a8c37x1j",
          height: "qypqp5cg",
          objectFit: "bixrwtb6",
          width: "q676j6op",
        },
        shareableAttribution: {
          alignItems: "bp9cbjyn",
          color: "qrtewk5h",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          marginTop: "aov4n071",
          paddingStart: "tw6a2znq",
          textShadow: "e72ntyah",
          width: "k4urcfbm",
        },
      },
      m = function (a) {
        return a
          ? d("fbicon")._(h("492482"), 12)
          : d("fbicon")._(h("492530"), 12);
      };
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("StoriesCardSingleAuthorHeader_owner.graphql")),
          a.owner
        ),
        g = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("StoriesCardSingleAuthorHeader_attribution.graphql")),
          a.cardInfo
        );
      if (f == null) return null;
      var h = f.name;
      e = (e = f.profile_picture) == null ? void 0 : e.uri;
      var n = f.url,
        o = a.creationTime,
        p = f.id;
      g = g == null ? void 0 : g.shareable_attribution;
      var q = g == null ? void 0 : g.text;
      g =
        g == null
          ? void 0
          : (g = g.ranges[0]) == null
          ? void 0
          : (g = g.entity) == null
          ? void 0
          : g.url;
      var r = d("Locale").isRTL(),
        s = null;
      q != null &&
        (g == null
          ? (s = k.jsx("div", {
              className: c("stylex")(l.shareableAttribution),
              children: k.jsx(c("TetraText.react"), {
                color: "white",
                numberOfLines: 1,
                type: "meta4",
                children: q,
              }),
            }))
          : (s = k.jsxs("div", {
              className: c("stylex")(l.shareableAttribution),
              children: [
                k.jsx(c("CometLink.react"), {
                  href: g,
                  target: "_blank",
                  children: k.jsx(c("TetraText.react"), {
                    color: "white",
                    numberOfLines: 1,
                    type: "meta4",
                    children: q,
                  }),
                }),
                k.jsx(c("TetraIcon.react"), { color: "white", icon: m(r) }),
              ],
            })));
      g = null;
      o != null &&
        (d("StoriesLoggerSession").getOpenViewerSource() ===
        c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE
          ? (g = c("formatDate")(new Date(o * 1e3), "M j", { utc: !0 }))
          : (g = k.jsx(c("CometRelativeTimestamp.react"), {
              date: new Date(o * 1e3),
              format: "minimized",
            })));
      q =
        p != null &&
        d("StoriesGating").shouldShowVerificationBadge() &&
        f.is_verified === !0 &&
        k.jsx(c("CometProfileVerificationBadge.react"), {
          isInverted: !0,
          profileID: p,
        });
      r =
        h != null &&
        k.jsx("div", {
          className: c("stylex")(l.ownerNameContainer),
          children: k.jsx("div", {
            className: c("stylex")(l.ownerName),
            children: k.jsx(c("CometPressable.react"), {
              display: "block",
              linkProps: { url: n },
              onPress: a.onOwnerClick,
              overlayDisabled: !0,
              xstyle: l.ownerNamePressable,
              children: k.jsx(c("TetraText.react"), {
                color: "white",
                numberOfLines: 1,
                type: "bodyLink3",
                children: q
                  ? k.jsx(c("CometTextWithBadge.react"), {
                      badgeAfter: q,
                      children: h,
                    })
                  : h,
              }),
            }),
          }),
        });
      o = k.jsxs("div", {
        className: c("stylex")(l.ownerInfoContainer, l.ownerInfoWithTime),
        children: [
          r,
          k.jsx("div", {
            className: c("stylex")(l.creationTime),
            children: k.jsx(c("TetraText.react"), {
              color: "white",
              numberOfLines: 1,
              type: "meta3",
              children: g,
            }),
          }),
        ],
      });
      return k.jsxs("div", {
        className: c("stylex")(l.container),
        "data-testid": void 0,
        children: [
          k.jsx(c("CometLink.react"), {
            href: n,
            onClick: a.onOwnerClick,
            children:
              e != null &&
              k.jsx(c("CometImage.react"), {
                alt: (f = h) != null ? f : "",
                height: 40,
                src: e,
                width: 40,
                xstyle: l.ownerPic,
              }),
          }),
          k.jsxs("div", {
            className: c("stylex")(l.ownerInfoWithAttributionContainer),
            children: [o, s],
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
  "StoriesCardDefaultBackground.react",
  [
    "ColorUtils",
    "CometImage.react",
    "CometRelay",
    "StoriesCardDefaultBackground_background.graphql",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useEffect,
      k = {
        backgroundContainer: {
          backgroundSize: "r4lidvzm",
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        backgroundImage: { height: "datstx6m", width: "k4urcfbm" },
      };
    function a(a) {
      var e = a.background,
        f = a.onLoad;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesCardDefaultBackground_background.graphql")),
        e
      );
      var g =
        a == null ? void 0 : (e = a.portrait_image) == null ? void 0 : e.uri;
      e = a == null ? void 0 : (e = a.gradient) == null ? void 0 : e.css;
      a = a == null ? void 0 : a.color;
      a = a != null ? d("ColorUtils").hexARGBToCSSRGBA(a) : "";
      j(
        function () {
          g == null && f != null && f();
        },
        [g, f]
      );
      if (g != null) {
        var l = "url('" + g + "')";
        return i.jsx("div", {
          className: c("stylex")(k.backgroundContainer),
          style: { backgroundColor: a },
          children: i.jsx(c("CometImage.react"), {
            onLoad: f,
            src: l,
            xstyle: k.backgroundImage,
          }),
        });
      } else
        return i.jsx("div", {
          className: c("stylex")(k.backgroundContainer),
          style: { background: e, backgroundColor: a },
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardDominantColorBackground.react",
  [
    "CometRelay",
    "StoriesCardDominantColorBackground_colorInfo.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesCardDominantColorBackground_colorInfo.graphql")),
        a.colorInfo
      );
      a = a == null ? void 0 : a.dominant_color;
      a = a != null ? a : "000000";
      return i.jsx("div", {
        style: { backgroundColor: "#" + a, height: "100%", width: "100%" },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardSATPGradientBackground.react",
  [
    "ColorUtils",
    "CometRelay",
    "StoriesCardSATPGradientBackground_textFormatMetadata.graphql",
    "StoriesEnums",
    "StoriesGradientBackground.react",
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
            : (h = b(
                "StoriesCardSATPGradientBackground_textFormatMetadata.graphql"
              )),
          a.textFormatMetadata
        ),
        f = e == null ? void 0 : e.background_color,
        g = e == null ? void 0 : e.background_gradient_color;
      e = e == null ? void 0 : e.background_gradient_direction;
      e = e;
      var j = f,
        k = g;
      (e === null ||
        e === d("StoriesEnums").GRADIENT_DIRECTION.BOTTOM_TOP ||
        e === d("StoriesEnums").GRADIENT_DIRECTION.BR_TL ||
        e === d("StoriesEnums").GRADIENT_DIRECTION.TR_BL ||
        e === d("StoriesEnums").GRADIENT_DIRECTION.RIGHT_LEFT) &&
        ((j = g), (k = f));
      g = k;
      f = j;
      g = d("ColorUtils").hexARGBToCSSRGBA(k);
      f = d("ColorUtils").hexARGBToCSSRGBA(j);
      return i.jsx(c("StoriesGradientBackground.react"), {
        direction: e,
        from: f,
        onLoad: a.onLoad,
        to: g,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardMediaLoadingBackground.react",
  [
    "CometLoadingAnimation.react",
    "CometRelay",
    "StoriesCardDefaultBackground.react",
    "StoriesCardDominantColorBackground.react",
    "StoriesCardMediaLoadingBackground_story.graphql",
    "StoriesCardSATPGradientBackground.react",
    "clearTimeout",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useEffect,
      k = e.useState,
      l = 2e3,
      m = 100;
    function n(a, b) {
      j(
        function () {
          var d = c("setTimeout")(function () {
            return a(!0);
          }, b);
          return function () {
            c("clearTimeout")(d);
          };
        },
        [a, b]
      );
    }
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesCardMediaLoadingBackground_story.graphql")),
        a.story
      );
      var e = k(!1),
        f = e[0];
      e = e[1];
      var g = k(!1),
        j = g[0];
      g = g[1];
      n(e, l);
      n(g, m);
      if (!a || !j) return null;
      e = a == null ? void 0 : a.text_format_metadata;
      j =
        a == null
          ? void 0
          : (g = a.story_card_info) == null
          ? void 0
          : (j = g.background_color_info) == null
          ? void 0
          : (g = j.color_info) == null
          ? void 0
          : g[0];
      g = a == null ? void 0 : a.story_default_background;
      a = null;
      e != null &&
      (e == null ? void 0 : e.background_color) != null &&
      (e == null ? void 0 : e.background_gradient_color) != null &&
      (e == null ? void 0 : e.background_gradient_direction) != null
        ? (a = i.jsx(c("StoriesCardSATPGradientBackground.react"), {
            textFormatMetadata: e,
          }))
        : j != null
        ? (a = i.jsx(c("StoriesCardDominantColorBackground.react"), {
            colorInfo: j,
          }))
        : g != null &&
          (a = i.jsx(c("StoriesCardDefaultBackground.react"), {
            background: g,
          }));
      return i.jsxs("div", {
        className:
          "k4urcfbm kr520xx4 j9ispegn pmk7jnqg hzruof5a taijpn5t datstx6m j83agx80 bp9cbjyn",
        children: [
          a,
          f &&
            i.jsx("div", {
              style: { position: "absolute" },
              children: i.jsx(c("CometLoadingAnimation.react"), { size: 36 }),
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
  "StoriesComposerUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "rgba(0,0,0,255)";
    b = 4.5;
    c = 1.34;
    d = 22;
    f.BLACK_COLOR = a;
    f.CHARACTER_WIDTH = b;
    f.DEFAULT_LINE_HEIGHT_RATIO = c;
    f.FONT_SIZE = d;
  },
  66
);
__d(
  "StoriesCardActivityDescriptionIcon.react",
  [
    "ix",
    "CometImage.react",
    "CometRelay",
    "StoriesCardActivityDescriptionIcon_iconInfo.graphql",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = {
        fbIcon: { display: "pq6dq46d", marginEnd: "oi9244e8" },
        minutiaeIcon: {
          flexShrink: "pfnyh3mw",
          height: "gl3lb2sf",
          marginEnd: "cgat1ltu",
          width: "hhz5lgdu",
        },
      };
    function a(a) {
      var e, f;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesCardActivityDescriptionIcon_iconInfo.graphql")),
        a.iconInfo
      );
      e =
        a == null
          ? void 0
          : (e = a.inline_activities) == null
          ? void 0
          : (e = e.nodes[0]) == null
          ? void 0
          : (e = e.taggable_activity_icon) == null
          ? void 0
          : (e = e.image) == null
          ? void 0
          : e.uri;
      f =
        (a == null
          ? void 0
          : (f = a.explicit_place) == null
          ? void 0
          : f.entity_id) != null;
      a = a == null ? void 0 : (a = a.with_tags) == null ? void 0 : a.count;
      a = a != null && a > 0;
      if (e != null)
        return j.jsx(c("CometImage.react"), {
          height: 16,
          src: e,
          width: 16,
          xstyle: k.minutiaeIcon,
        });
      if (f && !a)
        return j.jsx("span", {
          className: c("stylex")(k.fbIcon),
          children: j.jsx(c("CometImage.react"), { src: h("492197") }),
        });
      return !f && a
        ? j.jsx("span", {
            className: c("stylex")(k.fbIcon),
            children: j.jsx(c("CometImage.react"), { src: h("492168") }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardActivityDescription.react",
  [
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometLinkedEntityRenderer",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "StoriesCardActivityDescriptionIcon.react",
    "StoriesCardActivityDescription_activityDescription.graphql",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = [
        c("CometEmoticonTransform")({ size: 32 }),
        c("CometEmojiTransform")({ size: 32 }),
      ],
      k = {
        absolutePositioned: {
          bottom: "lfi1tu6t",
          position: "pmk7jnqg",
          start: "rnx8an3s",
        },
        centerAligned: { display: "j83agx80", justifyContent: "taijpn5t" },
        defaultWhiteTextColor: { color: "qrtewk5h" },
        link: { ":hover": { opacity: "quwhnjym" } },
        text: { display: "j83agx80", fontSize: "jagab5yi" },
      },
      l = function (a) {
        return function (b) {
          return i.jsx("span", {
            className: c("stylex")(k.link),
            style: { color: a },
            children: b,
          });
        };
      },
      m = function (a) {
        return [l(a), c("CometLinkedEntityRenderer")];
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "StoriesCardActivityDescription_activityDescription.graphql"
              )),
          a.activityDescription
        ),
        f = a.fontColor != null ? a.fontColor : "var(--primary-text-on-media)",
        g = e == null ? void 0 : e.activity_description;
      return g == null
        ? null
        : i.jsxs("div", {
            className: c("stylex")(
              k.text,
              a.isAbsolutePositioned && k.absolutePositioned,
              a.isCenterAligned && k.centerAligned,
              a.defaultWhiteTextColor && k.defaultWhiteTextColor
            ),
            children: [
              i.jsx(c("StoriesCardActivityDescriptionIcon.react"), {
                iconInfo: e,
              }),
              i.jsx(c("CometTextWithEntitiesRelay.react"), {
                renderers: {
                  Event: m(f),
                  ExternalUrl: m(f),
                  Group: m(f),
                  Hashtag: m(f),
                  Page: m(f),
                  User: m(f),
                },
                textWithEntities: g,
                transforms: j,
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
  "StoriesCardPhotoMediaBackground.react",
  [
    "CometBlurredBackgroundImage.react",
    "CometRelay",
    "StoriesCardDefaultBackground.react",
    "StoriesCardPhotoMediaBackground_background.graphql",
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
          : (h = b("StoriesCardPhotoMediaBackground_background.graphql")),
        a.background
      );
      e =
        a == null
          ? void 0
          : (e = a.backdrop) == null
          ? void 0
          : (e = e.media) == null
          ? void 0
          : (e = e.imageBlurred) == null
          ? void 0
          : e.uri;
      return e != null
        ? i.jsx(c("CometBlurredBackgroundImage.react"), {
            draggable: !1,
            src: e,
          })
        : i.jsx(c("StoriesCardDefaultBackground.react"), {
            background: a == null ? void 0 : a.story_default_background,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardPhotoMedia.react",
  [
    "CometImage.react",
    "CometRelay",
    "StoriesCardPhotoMediaBackground.react",
    "StoriesCardPhotoMedia_photo.graphql",
    "StoriesCardPhotoMedia_story.graphql",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useRef,
      m = {
        image: {
          backgroundColor: "g5ia77u1",
          borderTopEndRadius: "arfg74bv",
          borderTopStartRadius: "n00je7tq",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "rk01pc8j",
          transform: "ke6wolob",
          width: "k4urcfbm",
          zIndex: "du4w35lb",
        },
        mediaContainer: {
          alignItems: "bp9cbjyn",
          borderTopEndRadius: "arfg74bv",
          borderTopStartRadius: "n00je7tq",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
          justifyContent: "taijpn5t",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
          start: "j9ispegn",
          top: "kr520xx4",
          width: "k4urcfbm",
        },
      };
    function a(a) {
      var e,
        f = a.onImageLoad,
        g = a.photo;
      a = a.story;
      var n = l(null),
        o = l(!1);
      g = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesCardPhotoMedia_photo.graphql")),
        g
      );
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesCardPhotoMedia_story.graphql")),
        a
      );
      var p = function () {
        o.current || (f(), (o.current = !0));
      };
      k(function () {
        var a = n.current;
        a instanceof HTMLImageElement && a.complete && p();
      });
      e = g == null ? void 0 : (e = g.image) == null ? void 0 : e.uri;
      g = g == null ? void 0 : g.accessibility_caption;
      return e == null
        ? null
        : j.jsxs("div", {
            className: c("stylex")(m.mediaContainer),
            "data-testid": void 0,
            children: [
              j.jsx(c("StoriesCardPhotoMediaBackground.react"), {
                background: a,
              }),
              j.jsx(c("CometImage.react"), {
                alt: g != null ? g : "",
                draggable: !1,
                onLoad: p,
                ref: n,
                src: e,
                testid: void 0,
                xstyle: m.image,
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
  "StoriesCardLongTextTruncationButton.react",
  [
    "fbt",
    "ix",
    "CometLink.react",
    "StoriesComposerUtils",
    "TetraIcon.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        button: {
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          fontSize: "b0k1zwb0",
          marginTop: "swg4t2nn",
          pointerEvents: "oqq733wu",
        },
        icon: { marginStart: "h676nmdw" },
      };
    function a(a) {
      var b = a.isExpanded ? h._("See Less") : h._("See More"),
        e = a.isCaption
          ? null
          : j.jsx("div", {
              className: c("stylex")(k.icon),
              children: j.jsx(c("TetraIcon.react"), {
                color:
                  a.fontColor === d("StoriesComposerUtils").BLACK_COLOR
                    ? "secondary"
                    : "white",
                icon: a.isExpanded
                  ? d("fbicon")._(i("541301"), 20)
                  : d("fbicon")._(i("541286"), 20),
              }),
            });
      return j.jsxs(c("CometLink.react"), {
        href: "#",
        onClick: a.isExpanded ? a.toggleCollapse : a.toggleExpand,
        style: { color: a.fontColor },
        xstyle: k.button,
        children: [b, e],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardLongText.react",
  [
    "CometLineBreakTransform",
    "CometLineClamp.react",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "StoriesCardActivityDescription.react",
    "StoriesCardLongTextTruncationButton.react",
    "StoriesCardLongText_message.graphql",
    "StoriesCardLongText_story.graphql",
    "StoriesComposerUtils",
    "StoriesCreateConstants",
    "StoriesCreateContext",
    "StoriesPauseReasons",
    "getVendorPrefixedName",
    "react",
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
      m = e.useRef,
      n = e.useState,
      o = c("getVendorPrefixedName")("lineClamp"),
      p = [c("CometLineBreakTransform")];
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("StoriesCardLongText_message.graphql")),
          a.message
        ),
        f = d("CometRelay").useFragment(
          i !== void 0 ? i : (i = b("StoriesCardLongText_story.graphql")),
          a.story
        ),
        g = k(c("StoriesCreateContext")),
        q = m(null),
        r = m(null),
        s = n(!1),
        t = s[0],
        u = s[1];
      s = n(!1);
      var v = s[0],
        w = s[1];
      s = n(100);
      var x = s[0],
        y = s[1];
      s = n(0);
      var z = s[0],
        A = s[1];
      l(function () {
        var b = function () {
          if (
            q.current != null &&
            q.current.scrollHeight != null &&
            q.current.scrollWidth != null
          ) {
            var b = z !== q.current.scrollWidth;
            o
              ? u(
                  q.current.scrollHeight > a.lines * a.lineHeight ||
                    (!b && t && !g)
                )
              : (y(
                  (q.current.scrollWidth * a.lines) /
                    d("StoriesComposerUtils").CHARACTER_WIDTH
                ),
                u(
                  (e != null && e.text != null && e.text.length > x) ||
                    (!b && t)
                ));
            A(q.current.scrollWidth);
          }
        };
        b();
        if (!o) {
          window.addEventListener("resize", b);
          return function () {
            window.removeEventListener("resize", b);
          };
        }
      });
      s = function (b) {
        w(!0),
          a.setPause(!0, d("StoriesPauseReasons").CLICK_SEE_MORE_LONG_TEXT);
      };
      var B = function (b) {
          r.current && (r.current.scrollTop = 0),
            w(!1),
            a.setPause(!1, d("StoriesPauseReasons").CLICK_SEE_MORE_LONG_TEXT);
        },
        C = function (a) {
          return j.jsx(c("CometTextWithEntitiesRelay.react"), {
            maxLength: x,
            textWithEntities: a,
            transforms: p,
            truncationStyle: t && !v && !o ? "ellipsis-only" : "none",
          });
        },
        D = null,
        E = null;
      B = j.jsx(c("StoriesCardLongTextTruncationButton.react"), {
        fontColor: a.fontColor,
        isCaption: a.isCaption,
        isExpanded: v,
        toggleCollapse: B,
        toggleExpand: s,
      });
      g === !0 &&
      ((e == null ? void 0 : e.text) == null ||
        (e == null ? void 0 : (s = e.text) == null ? void 0 : s.length) === 0)
        ? ((D = d("StoriesCreateConstants").SATP_PLACEHOLDER), t && u(!1))
        : (g &&
            (E = j.jsx("div", {
              className: c("stylex").dedupe(
                t && v
                  ? {
                      "display-1": "j83agx80",
                      "flex-direction-1": "cbu4d94t",
                      "overflow-y-1": "emxnvquj",
                    }
                  : {},
                t ? null : { "opacity-1": "pedkr2u6" },
                a.isCenterAligned ? { "text-align-1": "oqcyycmt" } : null,
                t && !v
                  ? {
                      "display-1": "j83agx80",
                      "flex-direction-1": "cbu4d94t",
                      "opacity-1": "pedkr2u6",
                      "overflow-x-1": "ni8dbmo4",
                      "overflow-y-1": "stjgntxs",
                    }
                  : null,
                {
                  "position-1": "pmk7jnqg",
                  "visibility-1": "kr9hpln1",
                  "word-break-1": "qv66sw1b",
                }
              ),
              ref: function (a) {
                return (q.current = a);
              },
              children: e != null ? C(e) : null,
            })),
          (D = j.jsxs("div", {
            className: c("stylex").dedupe(
              t && v
                ? {
                    "display-1": "j83agx80",
                    "flex-direction-1": "cbu4d94t",
                    "overflow-y-1": "emxnvquj",
                  }
                : {},
              t ? null : { "opacity-1": "pedkr2u6" },
              a.isCenterAligned ? { "text-align-1": "oqcyycmt" } : null,
              t && !v
                ? {
                    "display-1": "j83agx80",
                    "flex-direction-1": "cbu4d94t",
                    "opacity-1": "pedkr2u6",
                    "overflow-x-1": "ni8dbmo4",
                    "overflow-y-1": "stjgntxs",
                  }
                : null
            ),
            ref: function (a) {
              g || (q.current = a);
            },
            children: [
              e != null
                ? !!o && t && !v
                  ? j.jsx(c("CometLineClamp.react"), {
                      lines: a.lines,
                      children: C(e),
                    })
                  : C(e)
                : null,
              t && !g ? B : null,
            ],
          })));
      return j.jsx("div", {
        className:
          (v && a.isCaption ? "r3o8wwc2" : "") +
          " oqq733wu d2edcug0 buofh1pr j83agx80",
        children: j.jsxs("div", {
          className: c("stylex").dedupe(
            a.isCaption
              ? {
                  "font-size-1": "jagab5yi",
                  "justify-content-1": "bkfpd7mw",
                  "padding-bottom-1": "osnr6wyh",
                  "padding-end-1": "gl4o1x5y",
                  "padding-start-1": "tw6a2znq",
                }
              : {},
            a.isCaption
              ? null
              : {
                  "flex-grow-1": "buofh1pr",
                  "height-1": "datstx6m",
                  "justify-content-1": "taijpn5t",
                  "margin-top-1": "km676qkl",
                  "margin-end-1": "ad2k81qe",
                  "margin-bottom-1": "myj7ivm5",
                  "margin-start-1": "f9o22wc5",
                  "overflow-x-1": "ni8dbmo4",
                  "overflow-y-1": "stjgntxs",
                  "overflow-wrap-1": "jm1wdb64",
                  "white-space-1": "ii04i59q",
                  "width-1": "k4urcfbm",
                  "word-break-1": "ssixshrq",
                  "word-wrap-1": "c1et5uql",
                },
            {
              "display-1": "j83agx80",
              "flex-direction-1": "cbu4d94t",
              "overflow-x-1": "ni8dbmo4",
              "position-1": "l9j0dhe7",
              "word-wrap-1": "c1et5uql",
            }
          ),
          ref: function (a) {
            return (r.current = a);
          },
          style: a.isCaption ? { color: a.fontColor } : null,
          children: [
            D,
            t && g ? B : null,
            g && E,
            a.story != null
              ? j.jsx("div", {
                  className: "fdg1wqfs pfnyh3mw",
                  children: j.jsx(c("StoriesCardActivityDescription.react"), {
                    activityDescription: f,
                    defaultWhiteTextColor: !0,
                    isAbsolutePositioned: !1,
                    isCenterAligned: a.isCenterAligned,
                  }),
                })
              : null,
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
  "StoriesCardSATPBackground.react",
  [
    "CometImage.react",
    "CometRelay",
    "StoriesCardSATPBackground_textFormatMetadata.graphql",
    "StoriesCardSATPGradientBackground.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useEffect,
      k = {
        backgroundContainer: {
          backgroundSize: "r4lidvzm",
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
        backgroundImage: { height: "datstx6m", width: "k4urcfbm" },
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesCardSATPBackground_textFormatMetadata.graphql")),
        a.textFormatMetadata
      );
      j(function () {
        var b = f();
        !g() && b == null && a.onLoad();
      });
      var f = function () {
          var a;
          return e == null
            ? void 0
            : (a = e.portrait_background_image) == null
            ? void 0
            : a.uri;
        },
        g = function () {
          var a = e == null ? void 0 : e.background_color,
            b = e == null ? void 0 : e.background_gradient_color;
          return e != null && a != null && b != null;
        },
        l = f(),
        m = null;
      l != null
        ? (m = i.jsx(c("CometImage.react"), {
            onLoad: a.onLoad,
            src: l,
            xstyle: k.backgroundImage,
          }))
        : g() &&
          (m = i.jsx(c("StoriesCardSATPGradientBackground.react"), {
            onLoad: a.onLoad,
            textFormatMetadata: e,
          }));
      return i.jsx("div", {
        className: c("stylex")(k.backgroundContainer),
        children: m,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardComposerFormat.react",
  [
    "cssVar",
    "ColorUtils",
    "CometRelay",
    "StoriesCardComposerFormat_defaultBackground.graphql",
    "StoriesCardComposerFormat_message.graphql",
    "StoriesCardComposerFormat_story.graphql",
    "StoriesCardComposerFormat_textFormatMetaData.graphql",
    "StoriesCardDefaultBackground.react",
    "StoriesCardLongText.react",
    "StoriesCardSATPBackground.react",
    "promiseDone",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l,
      m = d("react");
    e = d("react");
    var n = e.useEffect,
      o = e.useRef;
    function p(a) {
      var b = {};
      if (!a) {
        b.color = "var(--primary-text-on-media)";
        return b;
      }
      a.text_align != null && (b.textAlign = a.text_align);
      a.font_style != null && (b.fontStyle = a.font_style);
      a.font_weight != null && (b.fontWeight = a.font_weight);
      a.color != null && (b.color = d("ColorUtils").hexARGBToCSSRGBA(a.color));
      return b;
    }
    var q = 22,
      r = 1.34;
    function a(a) {
      var e = o(null),
        f = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("StoriesCardComposerFormat_defaultBackground.graphql")),
          a.defaultBackground
        ),
        g = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("StoriesCardComposerFormat_message.graphql")),
          a.message
        ),
        h = d("CometRelay").useFragment(
          k !== void 0 ? k : (k = b("StoriesCardComposerFormat_story.graphql")),
          a.story
        ),
        s = d("CometRelay").useFragment(
          l !== void 0
            ? l
            : (l = b("StoriesCardComposerFormat_textFormatMetaData.graphql")),
          a.textFormatMetaData
        );
      n(
        function () {
          if (e.current != null) {
            var a, b;
            a =
              s == null
                ? void 0
                : (a = s.inspirations_custom_font_object) == null
                ? void 0
                : a.font_url;
            var d =
              s == null
                ? void 0
                : (b = s.inspirations_custom_font_object) == null
                ? void 0
                : b.font_postscript_name;
            b =
              typeof document.fonts === "object" &&
              typeof FontFace === "function";
            if (a != null && d != null && b) {
              b = new FontFace(d, "url(" + a + ")");
              c("promiseDone")(
                b.load(),
                function (a) {
                  window.document.fonts.add(a);
                  a = d + ", Helvetica, Arial, sans-serif";
                  e.current &&
                    ((e.current.style.fontFamily = a),
                    (e.current.style.visibility = "visible"));
                },
                function (a) {
                  e.current && (e.current.style.visibility = "visible");
                }
              );
            } else e.current.style.visibility = "visible";
          }
        },
        [s]
      );
      var t = function () {
          var b = a.textFormatMetaData;
          if (b != null)
            return m.jsx(c("StoriesCardSATPBackground.react"), {
              onLoad: a.onImageLoad,
              textFormatMetadata: s,
            });
          else if (a.defaultBackground != null)
            return m.jsx(c("StoriesCardDefaultBackground.react"), {
              background: f,
              onLoad: a.onImageLoad,
            });
          else return null;
        },
        u = function () {
          var a = g == null ? void 0 : g.text;
          if (a == null) return !1;
          if (a.length > 360) return !1;
          return a.split(/\r\n|\r|\n/).length > 5 ? !1 : !0;
        },
        v = p(s);
      return m.jsxs(m.Fragment, {
        children: [
          t(),
          m.jsx("div", {
            className: c("stylex").dedupe(
              {
                "display-1": "j83agx80",
                "flex-grow-1": "buofh1pr",
                "font-size-1": "iix1gpk6",
                "height-1": "os6ic53g",
                "justify-content-1": "taijpn5t",
                "padding-top-1": "b2wla6dc",
                "padding-end-1": "kj0jemqk",
                "padding-bottom-1": "ofv0k9yr",
                "padding-start-1": "d8o5xnl0",
                "position-1": "l9j0dhe7",
                "user-select-1": "abiwlrkh",
                "width-1": "czywrmwm",
              },
              a.disableVerticalPadding
                ? {
                    "height-1": "datstx6m",
                    "padding-top-1": "jb3vyjys",
                    "padding-end-1": "kj0jemqk",
                    "padding-bottom-1": "qt6c0cv9",
                    "padding-start-1": "d8o5xnl0",
                  }
                : null
            ),
            ref: e,
            style: v,
            children: m.jsx(c("StoriesCardLongText.react"), {
              fontColor: v.color,
              isCaption: !1,
              isCenterAligned: u(),
              lineHeight: q * r,
              lines: 7,
              message: g,
              setPause: a.setPause,
              story: h,
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
  "StoriesCardTimerSourceCometVideo",
  ["cometUniqueID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e3;
    a = (function () {
      function a(a) {
        (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = ""),
          (this.$4 = c("cometUniqueID")()),
          (this.$1 = a);
      }
      var b = a.prototype;
      b.isFrozen = function () {
        if (this.$1) {
          var a = this.$1.getCurrentState();
          return a.stalling;
        }
        return !1;
      };
      b.setDuration = function (a) {
        this.$2 = a;
      };
      b.getDuration = function () {
        return this.$2 * h;
      };
      b.setTimeElapsed = function (a) {
        this.$3 = a * h;
      };
      b.getNewTimeElapsed = function (a) {
        return this.$3;
      };
      b.getID = function () {
        return this.$4;
      };
      b.play = function () {
        this.$1.play("user_initiated");
      };
      b.pause = function () {
        this.$1.pause("user_initiated");
      };
      b.resetSourceOnStop = function () {
        return !1;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCardCometVideoThrottledTimerSource",
  [
    "StoriesCardTimerSourceCometVideo",
    "StoriesSuspensePauseContext",
    "VideoPlayerHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useState,
      k = 15;
    function a(a, b) {
      var e = h(c("StoriesSuspensePauseContext")),
        f = e.isPaused;
      e = j(null);
      var g = e[0],
        l = e[1],
        m = d("VideoPlayerHooks").useController(),
        n = d("VideoPlayerHooks").useCurrentTimeThrottled(200),
        o = d("VideoPlayerHooks").useDuration(),
        p = d("VideoPlayerHooks").useLiveTimeElapsedThrottled(),
        q = d("VideoPlayerHooks").useIsVideoBroadcast();
      i(
        function () {
          if (g === null) {
            var d = new (c("StoriesCardTimerSourceCometVideo"))(m);
            l(d);
            a(d);
            f && d.pause();
            b();
          }
        },
        [m, f, a, b, g]
      );
      i(
        function () {
          if (g == null) return;
          var a = q ? k : o;
          g.setDuration(a);
        },
        [o, q, g]
      );
      i(
        function () {
          var a;
          if (g == null) return;
          a = (a = p) != null ? a : n;
          g.setTimeElapsed(a);
        },
        [n, g, p]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCardVideoMediaMuted",
  ["VideoPlayerHooks", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a) {
      var b = d("VideoPlayerHooks").useController(),
        c = d("VideoPlayerHooks").usePlaying(),
        e = d("VideoPlayerHooks").useMuted();
      h(
        function () {
          c && e !== a && b.setMuted(a, "user_initiated");
        },
        [a, c, b, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardCometVideoMedia.react",
  [
    "CometRelay",
    "StoriesCardCometVideoMedia_video.graphql",
    "VideoPlayerRelay.react",
    "VideoPlayerSurface.react",
    "VideoPlayerWithLiveVideoIndicator.react",
    "react",
    "useStoriesCardCometVideoThrottledTimerSource",
    "useStoriesCardVideoMediaMuted",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function j(a) {
      var b = a.isMuted,
        d = a.onTimerSourceUpdate,
        e = a.onVideoLoaded;
      a = a.video;
      c("useStoriesCardCometVideoThrottledTimerSource")(d, e);
      c("useStoriesCardVideoMediaMuted")(b);
      return i.jsx(c("VideoPlayerSurface.react"), {
        children: i.jsx(c("VideoPlayerWithLiveVideoIndicator.react"), {
          hasCometNavOverlay: !1,
          shouldExpand: !0,
          video: a,
        }),
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function a(a) {
      var e = a.disableAutoplay;
      e = e === void 0 ? !1 : e;
      var f = a.isMuted,
        g = a.onTimerSourceUpdate,
        k = a.onVideoLoaded;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesCardCometVideoMedia_video.graphql")),
        a.video
      );
      e = e ? "do_not_autoplay" : "respect_user_settings";
      return i.jsx("div", {
        className:
          "k4urcfbm taijpn5t datstx6m cbu4d94t j83agx80 d6rk862h bp9cbjyn",
        children: i.jsx(c("VideoPlayerRelay.react"), {
          canAutoplay: e,
          initialForceHD: !0,
          loopCount: 0,
          portalingEnabled: !1,
          subOrigin: "camera_post",
          video: a,
          children: i.jsx(j, {
            isMuted: f,
            onTimerSourceUpdate: g,
            onVideoLoaded: k,
            video: a,
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
  "StoriesCardCometVideoMediaWrapper.react",
  [
    "CometRelay",
    "StoriesCardCometVideoMediaWrapper_video.graphql",
    "cr:10033",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var c = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesCardCometVideoMediaWrapper_video.graphql")),
        a.video
      );
      return i.jsx(b("cr:10033"), babelHelpers["extends"]({}, a, { video: c }));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardVideoMedia.react",
  ["CometRelay", "StoriesCardVideoMedia_video.graphql", "cr:10034", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var c = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesCardVideoMedia_video.graphql")),
        a.video
      );
      return i.jsx(b("cr:10034"), babelHelpers["extends"]({}, a, { video: c }));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardTimer",
  ["gkx", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 100;
    a = (function () {
      function a(a, b) {
        var d = this;
        this.$1 = 0;
        this.$4 = "";
        this.$6 = 0;
        this.$8 = function () {
          var a = d.$5;
          if (a == null || d.$7 == null) return;
          d.$6 = a.getNewTimeElapsed(d.$6);
          d.$1 = a.getDuration();
          a = Math.min(100 * (d.$6 / d.$1), 100);
          d.$3 && d.$3(a);
          if (a === 100) d.$9(), d.$2 && d.$2();
          else {
            a = d.$1 - d.$6;
            a = Math.min(a, h);
            d.$7 = c("setTimeout")(d.$8, a);
          }
        };
        this.$2 = a;
        this.$3 = b;
      }
      var b = a.prototype;
      b.isFrozen = function () {
        return null;
      };
      b.getDuration = function () {
        return this.$1;
      };
      b.getID = function () {
        return this.$4;
      };
      b.setSource = function (a) {
        this.stop(), (this.$5 = a);
      };
      b.pause = function () {
        this.$5 && this.$5.pause(), this.$9();
      };
      b.play = function () {
        this.$5 && this.$5.play();
        if (c("gkx")("709647")) {
          this.$3 && this.$3(100);
          return;
        }
        this.$7 = c("setTimeout")(this.$8, 0);
      };
      b.stop = function () {
        (this.$6 = 0),
          this.$9(),
          this.$5 && this.$5.resetSourceOnStop() && (this.$5 = null);
      };
      b.cleanup = function () {
        this.stop(), (this.$5 = null), (this.$2 = null), (this.$3 = null);
      };
      b.$9 = function () {
        if (this.$7 == null) return;
        window.clearTimeout(this.$7);
        this.$7 = null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCardTimerSourceAutoProgression",
  ["StoriesGating", "cometUniqueID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = 0),
          (this.$2 = c("cometUniqueID")()),
          (this.$3 = 6e3),
          a != null && (this.$3 = a);
      }
      var b = a.prototype;
      b.isFrozen = function () {
        return null;
      };
      b.getDuration = function () {
        return d("StoriesGating").shouldUseMLPhotoDuration() ? this.$3 : 6e3;
      };
      b.getNewTimeElapsed = function (a) {
        var b = Date.now(),
          c = b - this.$1;
        this.$1 = b;
        return a + c;
      };
      b.getID = function () {
        return this.$2;
      };
      b.play = function () {
        this.$1 === 0 && (this.$1 = Date.now());
      };
      b.pause = function () {
        this.$1 = 0;
      };
      b.resetSourceOnStop = function () {
        return !1;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "StoriesProgressBar.react",
  ["cr:1774926", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(b("cr:1774926"), babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesProgressBarOld.react",
  [
    "CometVisualCompletionAttributes",
    "StoriesCardTimer",
    "StoriesCardTimerSourceCometVideo",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 0.1,
      j = 0.3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.state = {
            currentCardProgress: 0,
            prevCardCount: -1,
            prevCardIndex: -1,
          }),
          (d.$1 = new (c("StoriesCardTimer"))(
            function () {},
            function () {}
          )),
          (d.$2 = function (a) {
            d.setState({ currentCardProgress: a });
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      b.getDerivedStateFromProps = function (a, b) {
        return a.currentCardIndex !== b.prevCardIndex ||
          a.cardCount !== b.prevCardCount
          ? {
              currentCardProgress: 0,
              prevCardCount: a.cardCount,
              prevCardIndex: a.currentCardIndex,
            }
          : null;
      };
      var d = b.prototype;
      d.componentDidMount = function () {
        var a = this;
        this.$1 = new (c("StoriesCardTimer"))(function () {
          a.props.onDone();
        }, this.$2);
        this.props.cardTimerSource != null &&
          (this.$1.setSource(this.props.cardTimerSource),
          this.props.isPaused || this.$1.play());
      };
      d.componentDidUpdate = function (a) {
        (a.currentCardIndex !== this.props.currentCardIndex ||
          a.cardCount > this.props.cardCount) &&
          this.$1.stop(),
          a.cardTimerSource !== this.props.cardTimerSource &&
            (this.$1.setSource(this.props.cardTimerSource),
            this.props.isPaused || this.$1.play()),
          a.isPaused !== this.props.isPaused &&
            (this.props.isPaused ? this.$1.pause() : this.$1.play());
      };
      d.componentWillUnmount = function () {
        this.setState({ currentCardProgress: 0 }), this.$1.cleanup();
      };
      d.render = function () {
        var a = this.props,
          b = a.cardCount;
        a = a.currentCardIndex;
        var d = [];
        for (var e = 0; e < b; e++) {
          var f = 0;
          e < a
            ? (f = 100)
            : e > a
            ? (f = 0)
            : (f = this.state.currentCardProgress);
          var g =
            this.props.cardTimerSource instanceof
            c("StoriesCardTimerSourceCometVideo");
          d.push(
            h.jsx(
              k,
              {
                animationDuration: g ? j : i,
                isLastSegment: e === b - 1,
                percentDone: f,
              },
              e
            )
          );
        }
        return h.jsx("div", {
          className:
            "kv0qyzoi kr520xx4 pmk7jnqg ozuftl9m n851cfcs tvfksri0 n1l5q3vz mw227v9j j83agx80",
          children: d,
        });
      };
      return b;
    })(h.PureComponent);
    var k = function (a) {
      var b = a.animationDuration,
        d = a.isLastSegment;
      a = a.percentDone;
      b = { transitionDuration: b + "s", width: a + "%" };
      return h.jsx("div", {
        className:
          "l9j0dhe7 datstx6m hhnejfq7 q9uorilb p4hiznlx j2ut9x2k px9q9ucb sibfvsnu ouam3tkm" +
          (d ? "" : " cgat1ltu"),
        children: h.jsx(
          "div",
          babelHelpers["extends"](
            {
              className: c("stylex").dedupe(
                {
                  "background-color-1": "m96f97by",
                  "border-top-start-radius-1": "sibfvsnu",
                  "border-top-end-radius-1": "px9q9ucb",
                  "border-bottom-end-radius-1": "j2ut9x2k",
                  "border-bottom-start-radius-1": "p4hiznlx",
                  "height-1": "datstx6m",
                  "transition-duration-1": "mb8dcdod",
                  "transition-property-1": "sk63wpmh",
                  "transition-timing-function-1": "sgqwj88q",
                  "width-1": "ttbfdpzt",
                  "will-change-1": "l3d94uoy",
                },
                a === 0 ? { "transition-duration-1": "pgooz5cc" } : null
              ),
            },
            c("CometVisualCompletionAttributes").IGNORE,
            { style: b }
          )
        ),
      });
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "StoriesResizeToView.react",
  ["fbt", "ix", "TetraIcon.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a() {
      return j.jsx("div", {
        children: j.jsx("div", {
          className:
            "k4urcfbm ni8dbmo4 taijpn5t sq4ovgn3 cbu4d94t j83agx80 tqsryivl bp9cbjyn",
          children: j.jsxs("div", {
            className: "o0t2es00 ljqsnud1",
            style: { verticalAlign: "middle" },
            children: [
              j.jsx(c("TetraIcon.react"), {
                color: "white",
                icon: d("fbicon")._(i("580264"), 24),
                size: 24,
              }),
              j.jsx("span", {
                className: "h4z51re5",
                children: h._("Expand your browser window to see this story"),
              }),
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
  "addTransitionEndListener",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = document.createElement("div"),
        d = {
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          WebkitTransition: "webkitTransitionEnd",
          transition: "transitionend",
        },
        e = function () {
          b();
        },
        f = function (b) {
          if (b in c.style) {
            a.addEventListener(d[b], e, !1);
            return {
              v: function () {
                a && a.removeEventListener(d[b], e, !1);
              },
            };
          }
        };
      for (var g in d) {
        var h = f(g);
        if (typeof h === "object") return h.v;
      }
      return function () {};
    }
    f["default"] = a;
  },
  66
);
__d(
  "StoriesViewerOpenAnimationContextProvider.react",
  [
    "StoriesViewerOpenAnimationContext",
    "react",
    "useStoriesViewerBaseDimensions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
      j = b.useRef,
      k = 114,
      l = 203,
      m = 200,
      n = 320,
      o = 10,
      p = 42;
    function a(a) {
      var b = a.children;
      a = a.tilePosition;
      var d = j(!1),
        e = c("useStoriesViewerBaseDimensions")(),
        f = (k / e.width).toFixed(10),
        g = (l / e.height).toFixed(10);
      e =
        a != null
          ? "calc(" +
            a.left +
            "px - (100vw - (" +
            e.width +
            "px + " +
            2 * o +
            "px) + " +
            n +
            "px) / 2)"
          : "center";
      a = a != null ? "calc(" + a.top + "px - " + (o + p) + "px)" : "center";
      var q = "scale3d(" + f + ", " + g + ", 1)",
        r = e + " " + a;
      f = i(
        function () {
          return {
            duration: m,
            getAnimated: function () {
              return d.current;
            },
            setAnimated: function (a) {
              d.current = a;
            },
            transform: q,
            transformOrigin: r,
          };
        },
        [q, r]
      );
      return h.jsx(c("StoriesViewerOpenAnimationContext").Provider, {
        value: f,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesBucketError.react",
  [
    "fbt",
    "FBLogger",
    "NullStateGeneral",
    "StoriesCloseButton.react",
    "TetraNullState.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useEffect;
    (function () {});
    function a(a) {
      j(function () {
        var b;
        b = (b = a.bucketID) != null ? b : "unknown";
        c("FBLogger")("fbstories")
          .catching(a.error)
          .warn(
            "Issue displaying story bucket: " + b + " with card ID: " + a.cardID
          );
      });
      var b = h._("Can't Show Story"),
        d = h._("Please try again.");
      return i.jsxs("div", {
        className:
          "k4urcfbm ni8dbmo4 q10oee1b taijpn5t datstx6m cbu4d94t j83agx80 g6srhlxm bp9cbjyn",
        children: [
          i.jsx(c("StoriesCloseButton.react"), { dark: !0 }),
          i.jsx("div", {
            className: "oh7imozk",
            children: i.jsx(c("TetraNullState.react"), {
              body: d,
              headline: b,
              icon: c("NullStateGeneral"),
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
  "StoriesRootError.react",
  [
    "fbt",
    "FBLogger",
    "NullStateGeneral",
    "QPLUserFlow",
    "StoriesCloseButton.react",
    "StoriesLoggingConstants",
    "StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent",
    "TetraButton.react",
    "TetraNullState.react",
    "react",
    "useStoriesViewerClose",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useEffect;
    function a(a) {
      j(
        function () {
          c("FBLogger")("fbstories")
            .catching(a.error)
            .warn("Issue displaying story viewer");
        },
        [a.error]
      );
      var b = c("useStoriesViewerClose")();
      c("QPLUserFlow").endFailure(
        c("StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent"),
        a.error.message
      );
      var d = function () {
          return b(
            c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.BACK_BUTTON_EXIT
          );
        },
        e = h._("Something Went Wrong"),
        f = h._("Please try again."),
        g = h._("Go back to home page");
      return i.jsxs("div", {
        className:
          "k4urcfbm ni8dbmo4 taijpn5t mqzoxkkh cbu4d94t j83agx80 g6srhlxm bp9cbjyn",
        children: [
          i.jsx(c("StoriesCloseButton.react"), { dark: !0 }),
          i.jsx("div", {
            className: "oh7imozk",
            children: i.jsx(c("TetraNullState.react"), {
              action: i.jsx(c("TetraButton.react"), { label: g, onPress: d() }),
              body: f,
              headline: e,
              icon: c("NullStateGeneral"),
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
  "EmojiInputDecorator",
  ["EmojiRenderer", "immutable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = ".",
      i = "emoji";
    a = (function () {
      function a(a, b, c) {
        (this.__installedDecorators = { emojiDecorator: !0 }),
          (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          b &&
            Object.assign(this.__installedDecorators, b.__installedDecorators);
      }
      var b = a.prototype;
      b.getDecorations = function (a, b) {
        var e = this.$2
            ? this.$2.getDecorations(a, b).toArray()
            : Array(a.getText().length).fill(null),
          f = 0;
        d("EmojiRenderer")
          .parse(a.getText())
          .forEach(function (a) {
            var b = a.offset;
            a = b + a.length;
            var c = !0;
            for (var d = b; d < a; d++)
              if (e[d] != null) {
                c = !1;
                break;
              }
            if (c) {
              for (var d = b; d < a; d++) e[d] = i + h + f;
              f++;
            }
          });
        return c("immutable").List(e);
      };
      b.getComponentForKey = function (a) {
        return !this.$2 || a.split(h)[0] === i
          ? this.$1
          : this.$2.getComponentForKey(a);
      };
      b.getPropsForKey = function (a) {
        return !this.$2 || a.split(h)[0] === i
          ? this.$3
          : this.$2.getPropsForKey(a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuggestedTextReplyPill.react",
  [
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometPressable.react",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "StoriesSuggestedTextReplyPill_text.graphql",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        container: {
          backgroundColor: "cubx1xtm",
          borderTopStartRadius: "e72ty7fz",
          borderTopEndRadius: "qlfml3jp",
          borderBottomEndRadius: "inkptoze",
          borderBottomStartRadius: "qmr60zad",
          height: "tv7at329",
          justifyContent: "taijpn5t",
          marginBottom: "n851cfcs",
        },
        text: {
          alignSelf: "o8rfisnq",
          color: "ljqsnud1",
          fontFamily: "bl3uatpe",
          fontSize: "jq4qci2q",
          fontWeight: "lrazzd5p",
        },
      };
    function a(a) {
      var e = a.id,
        f = a.onPress,
        g = a.text,
        k = a.textWidth;
      a = a.textWithEntity;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesSuggestedTextReplyPill_text.graphql")),
        a
      );
      var l = [c("CometEmoticonTransform")(), c("CometEmojiTransform")()];
      return i.jsx(c("CometPressable.react"), {
        onPress: function () {
          return f(e, g);
        },
        style: { width: "calc(" + k + "px + 30px)" },
        xstyle: j.container,
        children: i.jsx("div", {
          className: c("stylex")(j.text),
          children: i.jsx(c("CometTextWithEntitiesRelay.react"), {
            textWithEntities: a,
            transforms: l,
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
  "StoriesSuspensePauseOnHoverContainer.react",
  ["StoriesPauseReasons", "StoriesSuspensePauseContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      a = a.children;
      var b = i(c("StoriesSuspensePauseContext")),
        e = b.setPause;
      return h.jsx("div", {
        className: "k4urcfbm datstx6m",
        onMouseEnter: function () {
          e(!0, d("StoriesPauseReasons").HOVER_ON_PAUSE_OVERLAY);
        },
        onMouseLeave: function () {
          e(!1, d("StoriesPauseReasons").HOVER_ON_PAUSE_OVERLAY);
        },
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuggestedTextReply.react",
  [
    "CometRelay",
    "DeferredDraftEditor.react",
    "EditorState",
    "EmojiInputDecorator",
    "EmojiSpan.react",
    "SelectionState",
    "StoriesFeedbackEditorStateContext",
    "StoriesGating",
    "StoriesLoggerContext",
    "StoriesLoggingConstants",
    "StoriesSuggestedTextReplyPill.react",
    "StoriesSuggestedTextReply_suggestions.graphql",
    "StoriesSuspensePauseOnHoverContainer.react",
    "getPlainTextFromDeferredDraftEditorState",
    "react",
    "useStoriesViewerBaseDimensions",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useMemo,
      n = e.useRef,
      o = 10,
      p = 30;
    function a(a) {
      var e = a.guideSuggestionsData,
        f = a.mediaType,
        g = a.setHasText,
        q = n(!1);
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesSuggestedTextReply_suggestions.graphql")),
        e
      );
      e = k(c("StoriesFeedbackEditorStateContext"));
      var r = e.contextualReplyRef,
        s = e.editorState,
        t = e.onFocus,
        u = e.setContextualReplyTapped,
        v = e.setEditorState,
        w = e.setMostRecentTappedID;
      e = k(c("StoriesLoggerContext"));
      var x = e.logger,
        y =
          a == null
            ? void 0
            : a
                .map(function (a) {
                  if (
                    a.id != null &&
                    a.text != null &&
                    a.text_with_entities != null
                  ) {
                    var b = a.id,
                      c = a.text;
                    a = a.text_with_entities;
                    return { id: b, text: c, textWithEntity: a };
                  }
                  return null;
                })
                .filter(Boolean);
      l(
        function () {
          var a;
          ((a = y == null ? void 0 : y.length) != null ? a : 0) !== 0 && g(!0);
        },
        [y, g]
      );
      var z = j(
          function (a, b) {
            var d = c("getPlainTextFromDeferredDraftEditorState")(s).trim();
            d = d.length === 0 ? b : d + " " + b;
            b = new (c("EmojiInputDecorator"))(c("EmojiSpan.react"), null, {
              size: 16,
            });
            b = c("EditorState").createWithText(d, b);
            var e = b.getSelection();
            e = new (c("SelectionState"))({
              anchorKey: e.getAnchorKey(),
              anchorOffset: d.length,
              focusKey: e.getFocusKey(),
              focusOffset: d.length,
              hasFocus: !0,
              isBackward: !1,
            });
            v({
              __type: c("DeferredDraftEditor.react").EDITOR_STATE,
              draftEditorState: c("EditorState").forceSelection(b, e),
            });
            t();
            u(!0);
            w(a);
          },
          [s, t, v, u, w]
        ),
        A = c("useStoriesViewerBaseDimensions")().width - p,
        B = 7.5;
      e = m(
        function () {
          var a = A,
            b = [],
            d = [],
            e = [];
          if (y == null)
            return { pills: b, smartReplyIDList: d, smartReplyTextList: e };
          var f = 0;
          while (f < y.length && y[f].text.length * B + p <= a) {
            var g = y[f].text,
              h = g.length * B,
              j = y[f].id;
            b.push(
              i.jsx(
                "div",
                {
                  className: "qnrpqo6b jxrgncrl",
                  children: i.jsx(
                    c("StoriesSuspensePauseOnHoverContainer.react"),
                    {
                      children: i.jsx(
                        c("StoriesSuggestedTextReplyPill.react"),
                        {
                          id: j,
                          onPress: z,
                          text: g,
                          textWidth: h,
                          textWithEntity: y[f].textWithEntity,
                        }
                      ),
                    }
                  ),
                },
                y[f].id
              )
            );
            d.push(j);
            e.push(g);
            a = a - h - p - o;
            f += 1;
          }
          return { pills: b, smartReplyIDList: d, smartReplyTextList: e };
        },
        [y, A, z]
      );
      a = e.pills;
      var C = e.smartReplyIDList,
        D = e.smartReplyTextList;
      e = c("useVisibilityObserver")({
        onVisible: function () {
          q.current === !1 &&
            (x.smartReplyImpressionLog(
              C,
              D,
              c("StoriesLoggingConstants").STORY_REPLY_TYPE.TEXT_SUGGESTION
            ),
            (q.current = !0));
        },
      });
      if (a.length === 0) return null;
      return f === "Video" &&
        !d("StoriesGating").shouldShowSuggestedTextRepliesForVideo()
        ? null
        : i.jsx("div", {
            ref: e,
            children: i.jsx("div", {
              className: "k4urcfbm taijpn5t btwxx1t3 j83agx80",
              ref: r,
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
  "StoriesContextualReplyBar.react",
  [
    "CometRelay",
    "StoriesContextualReplyBar_suggestions.graphql",
    "StoriesSuggestedTextReply.react",
    "cr:1947522",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.cardID,
        f = a.guideSuggestionsData,
        g = a.mediaType,
        j = a.ownerName,
        k = a.setHasSticker;
      a = a.setHasText;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesContextualReplyBar_suggestions.graphql")),
        f
      );
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("StoriesSuggestedTextReply.react"), {
            guideSuggestionsData: f,
            mediaType: g,
            setHasText: a,
          }),
          b("cr:1947522") != null &&
            i.jsx(b("cr:1947522"), {
              cardID: e,
              guideSuggestionsData: f,
              ownerName: j,
              setHasSticker: k,
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
  "StoriesTrayLoggerSessionContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { trackingStrings: new Map() };
    c = a.createContext(b);
    e = c;
    g["default"] = e;
  },
  98
);
__d(
  "StoriesTrayLoggerSessionProvider",
  ["StoriesTrayLoggerSessionContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = a.children,
        d = a.trackingStrings;
      a = i(
        function () {
          return { trackingStrings: d };
        },
        [d]
      );
      return h.jsx(c("StoriesTrayLoggerSessionContext").Provider, {
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
  "storiesUpdateStorySeenReceiptsLastSeenTimeMutation",
  [
    "CometRelay",
    "storiesUpdateStorySeenReceiptsLastSeenTimeMutationMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b(
              "storiesUpdateStorySeenReceiptsLastSeenTimeMutationMutation.graphql"
            ));
    function a(a, b) {
      var c = function (a) {
          a = a.get(b);
          if (a == null) return;
          a = a.getLinkedRecord("story_card_seen_state");
          var c =
              a == null
                ? void 0
                : a.getLinkedRecord("seen_receipt_unseen_count", {
                    type: "CONTACTS",
                  }),
            d =
              a == null
                ? void 0
                : a.getLinkedRecord("seen_receipt_unseen_count", {
                    type: "FRIENDS",
                  });
          c == null ? void 0 : c.setValue(0, "count");
          d == null ? void 0 : d.setValue(0, "count");
          a == null
            ? void 0
            : a.setValue(
                Math.floor(Date.now() / 1e3),
                "seen_receipts_last_seen_time"
              );
        },
        e = function (a, c) {
          var d, e;
          a = a.get(b);
          if (a == null) return;
          a = a.getLinkedRecord("story_card_seen_state");
          var f =
              a == null
                ? void 0
                : a.getLinkedRecord("seen_receipt_unseen_count", {
                    type: "CONTACTS",
                  }),
            g =
              a == null
                ? void 0
                : a.getLinkedRecord("seen_receipt_unseen_count", {
                    type: "FRIENDS",
                  });
          d =
            (d = c.story_seen_receipts_last_seen_time_update) == null
              ? void 0
              : (d = d.story) == null
              ? void 0
              : (d = d.story_card_seen_state) == null
              ? void 0
              : (d = d.newConnectionViewerCount) == null
              ? void 0
              : d.count;
          e =
            (e = c.story_seen_receipts_last_seen_time_update) == null
              ? void 0
              : (e = e.story) == null
              ? void 0
              : (e = e.story_card_seen_state) == null
              ? void 0
              : (e = e.newFriendViewerCount) == null
              ? void 0
              : e.count;
          c =
            (c = c.story_seen_receipts_last_seen_time_update) == null
              ? void 0
              : (c = c.story) == null
              ? void 0
              : (c = c.story_card_seen_state) == null
              ? void 0
              : c.seen_receipts_last_seen_time;
          d != null && (f == null ? void 0 : f.setValue(d, "count"));
          e != null && (g == null ? void 0 : g.setValue(e, "count"));
          c != null &&
            (a == null
              ? void 0
              : a.setValue(c, "seen_receipts_last_seen_time"));
        };
      d("CometRelay").commitMutation(a, {
        mutation: i,
        optimisticUpdater: c,
        updater: e,
        variables: { input: { story_id: b } },
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSuspenseProcessRoute",
  [
    "CometRouteParams",
    "FBUnifiedStoriesTrayType",
    "useRoutePassthroughProps",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a,
        b = d("CometRouteParams").useRouteParams(),
        e = c("useRoutePassthroughProps")() || {},
        f = typeof b.bucket_id === "string" ? b.bucket_id : "",
        g = typeof b.card_id === "string" ? b.card_id : "",
        h = typeof b.current_card_id === "string" ? b.current_card_id : null;
      g = (h = (h = h) != null ? h : g) != null ? h : "";
      h = "";
      typeof b.source === "string"
        ? (h = b.source)
        : typeof e.source === "string" && (h = e.source);
      a =
        typeof e.storiesTrayType === "string"
          ? (a = c("FBUnifiedStoriesTrayType").cast(e.storiesTrayType)) != null
            ? a
            : "TOP_OF_FEED_TRAY"
          : "TOP_OF_FEED_TRAY";
      var i = typeof e.traySessionID === "string" ? e.traySessionID : "",
        j = typeof e.trackingString === "string" ? e.trackingString : "",
        k = c("uuid")();
      b = !!b.view_single;
      var l = typeof e.bucketType === "string" ? e.bucketType : "",
        m = typeof e.bucketLength === "number" ? e.bucketLength : 0;
      e = typeof e.hasSelfBucket === "boolean" ? e.hasSelfBucket : !1;
      return {
        bucketID: f,
        bucketLength: m,
        bucketType: l,
        cardID: g,
        hasSelfBucket: e,
        source: h,
        storiesTrayType: a,
        trackingString: j,
        traySessionID: i,
        viewSingle: b,
        viewerSessionID: k,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesNavigationTapTarget.react",
  [
    "ix",
    "CometPressable.react",
    "CometPressableOverlay.react",
    "StoriesGating",
    "StoriesLoggingConstants",
    "TetraIcon.react",
    "fbicon",
    "react",
    "stylex",
    "useCurrentDisplayMode",
    "useStoriesSuspenseProcessRoute",
    "useStoriesViewerDimensions",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useRef,
      k = b.useState,
      l = {
        buttonContainer: {
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          opacity: "l8rlqa9s",
          position: "pmk7jnqg",
          top: "rk01pc8j",
          transform: "ke6wolob",
          transitionDuration: "ms05siws",
          transitionProperty: "pnx7fd3z",
          transitionTimingFunction: "msbwk0y7",
          willChange: "ejg0drik",
        },
        buttonContainerDarkMode: { opacity: "pedkr2u6" },
        buttonContainerHoverLeft: {
          opacity: "pedkr2u6",
          transform: "ghqu56s8",
        },
        buttonContainerHoverRight: {
          opacity: "pedkr2u6",
          transform: "yiec5hid",
        },
        disabled: { opacity: "b5wmifdl", pointerEvents: "hzruof5a" },
        root: { cursor: "nhd2j8a9", position: "l9j0dhe7" },
        tapTargetOverlay: { height: "datstx6m", width: "k4urcfbm" },
      },
      m = {
        root: {
          alignItems: "bp9cbjyn",
          backgroundColor: "cwj9ozl2",
          borderTopColor: "t51s4qs2",
          borderEndColor: "bv6zxntz",
          borderBottomColor: "qc3rp1z7",
          borderStartColor: "rj06g9kl",
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          borderTopStyle: "goun2846",
          borderEndStyle: "ccm00jje",
          borderBottomStyle: "s44p3ltw",
          borderStartStyle: "mk2mc5f4",
          borderTopWidth: "frvqaej8",
          borderEndWidth: "ed0hlay0",
          borderBottomWidth: "afxsp9o4",
          borderStartWidth: "jcgfde61",
          boxSizing: "rq0escxv",
          color: "m9osqain",
          display: "j83agx80",
          height: "m7zwrmfr",
          justifyContent: "taijpn5t",
          paddingTop: "jb3vyjys",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "qt6c0cv9",
          paddingStart: "a8nywdso",
          position: "l9j0dhe7",
          width: "tmrshh9y",
        },
      },
      n = !1,
      o = !1;
    function p(a) {
      var b = k(function () {
          return a ? o : n;
        }),
        c = b[0],
        d = b[1];
      a && o !== c && d(o);
      !a && n !== c && d(n);
      b = function (b) {
        a ? (o = b) : (n = b), d(b);
      };
      return [c, b];
    }
    var q = function (a) {
      var b = a.isRightButton
        ? d("fbicon")._(h("492539"), 24)
        : d("fbicon")._(h("492491"), 24);
      return i.jsx(c("CometPressable.react"), {
        "aria-label": a.label,
        display: "inline",
        onPress: a.onClick,
        overlayDisabled: !0,
        testid: void 0,
        xstyle: m.root,
        children: i.jsx(c("TetraIcon.react"), {
          color: "secondary",
          icon: b,
          size: 24,
        }),
      });
    };
    function a(a) {
      var b = a.disabled,
        e = a.isRightButton,
        f = a.label,
        g = a.loadMore;
      a = a.onClick;
      var h = c("useStoriesSuspenseProcessRoute")();
      h = h.source;
      var k = j(!0),
        m = p(e),
        n = m[0],
        o = m[1];
      m = c("useCurrentDisplayMode")();
      m = m === "dark";
      var r = c("useStoriesViewerDimensions")(),
        s = r.gap;
      r = r.height;
      h =
        h === c("StoriesLoggingConstants").ACTION_SOURCE.TRAY &&
        d("StoriesGating").shouldShowViewerV3();
      return i.jsx("div", {
        className: c("stylex")(
          l.root,
          b && !d("StoriesGating").isTest() && l.disabled
        ),
        onMouseEnter: function () {
          o(!0);
        },
        onMouseLeave: function () {
          o(!1);
        },
        style: { height: h ? r + "px" : "100%", width: h ? s + "px" : "50%" },
        children: i.jsx(c("CometPressable.react"), {
          focusable: !1,
          onHoverIn: function () {
            k.current && ((k.current = !1), g && g());
          },
          onPress: a,
          overlayDisabled: !0,
          xstyle: l.tapTargetOverlay,
          children: i.jsxs("div", {
            className: c("stylex")(
              l.buttonContainer,
              n && !e && l.buttonContainerHoverLeft,
              n && e && l.buttonContainerHoverRight,
              m && l.buttonContainerDarkMode
            ),
            style: {
              left: e ? 0 : null,
              marginLeft: e ? "40px" : "0px",
              marginRight: e ? "0px" : "40px",
              right: e ? null : 0,
            },
            children: [
              i.jsx(q, {
                disabled: b,
                hovered: n,
                isRightButton: e,
                label: f,
                onClick: a,
              }),
              i.jsx(c("CometPressableOverlay.react"), { hovered: n && m }),
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
  "StoriesNavigationButton.react",
  [
    "fbt",
    "Locale",
    "StoriesEnums",
    "StoriesNavigationTapTarget.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = function (a) {
            a.type !== "press" && (a.preventDefault(), a.stopPropagation()),
              c.props.onClick();
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.$2 = function () {
        switch (this.props.direction) {
          case d("StoriesEnums").NAV_DIRECTIONS.NEXT_CARD:
            return h._("Next Card Button");
          case d("StoriesEnums").NAV_DIRECTIONS.PREV_CARD:
            return h._("Previous Card Button");
          case d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET:
            return h._("Next Bucket Button");
          case d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET:
            return h._("Previous Bucket Button");
          default:
            return h._("Button");
        }
      };
      e.render = function () {
        var a = this.props.direction;
        a =
          (!d("Locale").isRTL() &&
            (a === d("StoriesEnums").NAV_DIRECTIONS.NEXT_CARD ||
              a === d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET)) ||
          (d("Locale").isRTL() &&
            (a === d("StoriesEnums").NAV_DIRECTIONS.PREV_CARD ||
              a === d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET));
        return i.jsx(c("StoriesNavigationTapTarget.react"), {
          disabled: this.props.disabled,
          isRightButton: a,
          label: this.$2(),
          loadMore: this.props.loadMore,
          onClick: this.$1,
        });
      };
      return b;
    })(i.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "useCometWindowFitNavPaneAndViewerSheet",
  [
    "MWChatOnMediaVisibilityOverrideContext",
    "useCometWindowSize",
    "useMWIsCurrentRouteMediaViewerExperiment",
    "useShouldShowMessagingEntrypointOnCurrentRoute",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = c("useMWIsCurrentRouteMediaViewerExperiment")();
      a = d(
        "MWChatOnMediaVisibilityOverrideContext"
      ).useMWChatOnMediaVisibilityOverride(a);
      var b = c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT");
      return c("useCometWindowSize")().innerWidth >= 900 + (b && a ? 80 : 0);
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCometRoute",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "comet.stories.viewer";
    function a(a) {
      return (a == null ? void 0 : a.tracePolicy) === g;
    }
    f.isValid = a;
  },
  66
);
__d(
  "useStoriesCometPageTransitionListener",
  ["StoriesCometRoute", "useOnBeforeUnload"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      c("useOnBeforeUnload")(function (b) {
        d("StoriesCometRoute").isValid(b) || a();
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesTransitionPageListener",
  ["cr:1073243"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1073243");
  },
  98
);
__d(
  "XReactSproutComposerCometAddToStoryDialogControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/react_composer/comet_add_to_story/dialog/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useStoriesOpenComposerBase",
  [
    "fbt",
    "BaseToasterStateManager",
    "StoriesSuspensePauseContext",
    "cometPushToast",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useRef;
    function a() {
      var a = null,
        b = k(null),
        e = i(c("StoriesSuspensePauseContext")),
        f = e.setPause;
      function g() {
        f.apply(void 0, arguments);
      }
      j(
        function () {
          return function () {
            a && a();
          };
        },
        [a]
      );
      var l = function (a) {
          g(!0, a);
        },
        m = function (a) {
          g(!1, a);
        };
      e = function (e, f, g) {
        var i = e.type === "press";
        i || (e.preventDefault(), e.stopPropagation());
        l(f);
        if (g)
          a = g(
            function () {
              return m(f);
            },
            function () {
              return l(f);
            }
          );
        else {
          i = c("BaseToasterStateManager").getInstance();
          b.current != null && (i.expire(b.current), (b.current = null));
          b.current = d("cometPushToast").cometPushSimpleToast(
            h._("Stories creation is not available on Facebook Beta yet.")
          );
        }
      };
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useOpenComposer",
  [
    "StoriesPauseReasons",
    "XReactSproutComposerCometAddToStoryDialogControllerRouteBuilder",
    "cr:728805",
    "useStoriesOpenComposerBase",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = c("useStoriesOpenComposerBase")(),
        e;
      if (b("cr:728805")) {
        var f = c(
          "XReactSproutComposerCometAddToStoryDialogControllerRouteBuilder"
        ).buildURL({});
        e = function (a, c) {
          return b("cr:728805")({ composerURI: f, onClose: a, onOpen: c });
        };
      }
      return function (b) {
        return a(b, d("StoriesPauseReasons").CLICK_ADD_STORY, e);
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesShowEpdBlockToast",
  ["fbt", "cometPushToast", "useToasterStateManager"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a() {
      var a = c("useToasterStateManager")(),
        b = h._("Messages can't be sent right now.");
      return function () {
        d("cometPushToast").cometPushErrorToast({ message: b }, void 0, a);
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetBigNumbersItem.react",
  ["intlSummarizeNumber", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.label;
      a = a.value;
      return h.jsxs("div", {
        className: "taijpn5t buofh1pr cbu4d94t rj1gh0hx j83agx80 bp9cbjyn",
        children: [
          h.jsx("div", {
            className: "qbyxvseo om2kly8a m9hp224e",
            children: a != null ? c("intlSummarizeNumber")(a) : "-",
          }),
          h.jsx("div", {
            className: "oqcyycmt j5wam9gi e9vueds3 m9osqain",
            children: b,
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
  "StoriesViewerSheetBigNumbers.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        className:
          "ozuftl9m sjgh65i0 tvfksri0 tr9rh885 kwzhilbh j83agx80 ll8tlv6m",
        children: a.children,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetHeader.react",
  ["fbt", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.children != null ? a.children : h._("Story Details");
      return i.jsx("div", {
        className:
          "jb3vyjys ozuftl9m oygrvhab tvfksri0 kvgmc6g5 g1cxx5fr n3ffmt46 a5q79mjw j83agx80 m9hp224e aovydwv3",
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetInteractiveStickerOverlayMap.react",
  [
    "CometRelay",
    "StoriesEnums",
    "StoriesViewerSheetInteractiveStickerOverlayMap_overlays.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d("react");
    var i = d("react").useMemo;
    function a(a) {
      var c = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "StoriesViewerSheetInteractiveStickerOverlayMap_overlays.graphql"
            )),
        a.overlays
      );
      a = a.children;
      var e = i(
        function () {
          return c == null
            ? void 0
            : c.story_overlays.reduce(function (a, b) {
                if (
                  b.__typename !==
                  d("StoriesEnums").STORY_OVERLAY_TYPES.INTERACTIVE_STICKER
                )
                  return a;
                b = b.reaction_sticker;
                var c = b == null ? void 0 : b.id;
                b =
                  b == null
                    ? void 0
                    : (b = b.sticker_asset) == null
                    ? void 0
                    : b.image_asset_url;
                if (c == null || b == null) return a;
                a[c] = b;
                return a;
              }, {});
        },
        [c]
      );
      return e == null ? null : a(e);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetListItem.react",
  ["CometLegacyListItemBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.addon,
        d = a.children,
        e = a.isButton;
      e = e === void 0 ? !1 : e;
      a = a.right;
      return h.jsx(c("CometLegacyListItemBase.react"), {
        addon: b,
        className:
          "k4urcfbm hzawbc8m scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 kkf49tns oygrvhab cgat1ltu kvgmc6g5 ihxqhq3m" +
          (e
            ? " pdl3lqly gfay22hk b7h9ocf4 sa0u98s2 ms05siws nhd2j8a9 kzx2olss aot14ch1 p86d2i9g beltcj47 r7d6kgcz e9989ue4 esr5mh6w qu0x051f"
            : ""),
        right: a,
        children: d,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetPollResultHeader.react",
  ["fbt", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx("div", {
        className:
          "ozuftl9m oygrvhab tvfksri0 tr9rh885 g1cxx5fr n3ffmt46 a5q79mjw j83agx80 m9hp224e aovydwv3",
        children: h._("Responses"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetSection.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.showSectionLine;
      a = a === void 0 ? !0 : a;
      return h.jsxs(h.Fragment, {
        children: [
          b,
          a &&
            h.jsx("div", {
              className:
                "ozuftl9m oygrvhab tvfksri0 kvgmc6g5 ay7djpcl pwoa4pd7",
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
  "StoriesViewerInfo.react",
  [
    "CometRelay",
    "StoriesViewerInfo_viewerInfo.graphql",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.isNewViewer;
      e = e === void 0 ? !1 : e;
      var f = a.subtitle;
      f = f === void 0 ? null : f;
      a = a.viewerInfo;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesViewerInfo_viewerInfo.graphql")),
        a
      );
      a = a.name;
      return i.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          i.jsxs("div", {
            className: "tvmbv18p j83agx80 bp9cbjyn",
            children: [
              a != null &&
                i.jsx(c("TetraText.react"), {
                  color: "primary",
                  numberOfLines: 1,
                  type: "bodyLink3",
                  children: a,
                }),
              e &&
                i.jsx("span", {
                  className:
                    "c9rrlmt1 h676nmdw t6na6p9t pfnyh3mw p4hiznlx j2ut9x2k px9q9ucb sibfvsnu is6700om",
                }),
            ],
          }),
          f != null
            ? i.jsx("div", {
                className: "j5wam9gi e9vueds3 m9osqain",
                children: f,
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
  "StoriesViewerPog.react",
  [
    "CometImageIcon_DEPRECATED.react",
    "CometRelay",
    "StoriesViewerPog_viewerPog.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesViewerPog_viewerPog.graphql")),
        a.viewerPog
      );
      var e = a.lastActiveStatus;
      a = a.profile_picture;
      a = (a = a == null ? void 0 : a.uri) != null ? a : "";
      e = (e = e == null ? void 0 : e.isActive) != null ? e : !1;
      return i.jsxs("div", {
        className: "l9j0dhe7",
        children: [
          i.jsx(c("CometImageIcon_DEPRECATED.react"), {
            size: 36,
            src: a,
            style: "circle",
          }),
          e &&
            i.jsx("span", {
              className:
                "c9rrlmt1 pmk7jnqg t6na6p9t n7fi1qx3 i09qtzwb p4hiznlx j2ut9x2k px9q9ucb sibfvsnu m8of71z0 qx7ju95k n8v90iwk iruzoqzv jllm4f4h",
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
  "StoriesPollVoterListItem.react",
  [
    "fbt",
    "CometRelay",
    "StoriesPollVoterListItem_voterInfo.graphql",
    "StoriesViewerInfo.react",
    "StoriesViewerPog.react",
    "StoriesViewerSheetListItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesPollVoterListItem_voterInfo.graphql")),
        a.voterInfo
      );
      a = a.pollOption;
      var f = j.jsx(c("StoriesViewerPog.react"), { viewerPog: e });
      a = h._("{Poll option value}", [h._param("Poll option value", a)]);
      return j.jsx(c("StoriesViewerSheetListItem.react"), {
        addon: f,
        right: null,
        children: j.jsx(c("StoriesViewerInfo.react"), {
          subtitle: a,
          viewerInfo: e,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesPollVoterList.react",
  [
    "CometColumnItem.react",
    "CometRelay",
    "StoriesPollVoterListItem.react",
    "StoriesPollVoterList_voterList.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesPollVoterList_voterList.graphql")),
        a.voterList
      );
      a = a.poll_options;
      a = a.reduce(function (a, b) {
        var c = b.text;
        b = b.voters;
        if (c == null || b == null) return a;
        b.nodes.forEach(function (b) {
          return a.push({ pollOption: c, voterInfo: b });
        });
        return a;
      }, []);
      return a.length === 0
        ? null
        : i.jsx("div", {
            className: "oud54xpy",
            children: i.jsx(c("CometColumnItem.react"), {
              children: a.map(function (a, b) {
                return i.jsx(
                  c("StoriesPollVoterListItem.react"),
                  { pollOption: a.pollOption, voterInfo: a.voterInfo },
                  b
                );
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
  "useStoriesPollStickersHelper",
  ["CometRelay", "useStoriesPollStickersHelper_pollVotes.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i(a) {
      var b = [];
      a.poll_options.forEach(function (a) {
        var c;
        (a == null ? void 0 : a.reshare_vote_count) !== null &&
          (a.reshare_vote_count || 0);
        c = (a == null ? void 0 : a.vote_count) || 0;
        b.push({ text: a == null ? void 0 : a.text, votesCount: c });
      });
      return b;
    }
    function a(a) {
      var c = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useStoriesPollStickersHelper_pollVotes.graphql")),
        a
      );
      return {
        getOptions: function () {
          return i(c);
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesPollVotes.react",
  [
    "fbt",
    "CometRelay",
    "StoriesPollVotes_pollVotes.graphql",
    "StoriesViewerSheetBigNumbers.react",
    "StoriesViewerSheetBigNumbersItem.react",
    "StoriesViewerSheetPollResultHeader.react",
    "react",
    "useStoriesPollStickersHelper",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesPollVotes_pollVotes.graphql")),
        a.pollVotes
      );
      a = c("useStoriesPollStickersHelper")(a);
      a = a.getOptions;
      a = a();
      var e = a.reduce(function (a, b) {
        return a + b.votesCount;
      }, 0);
      return e === 0
        ? null
        : j.jsxs("div", {
            children: [
              j.jsx(c("StoriesViewerSheetPollResultHeader.react"), {}),
              j.jsx(c("StoriesViewerSheetBigNumbers.react"), {
                children: a.map(function (a, b) {
                  return j.jsx(
                    c("StoriesViewerSheetBigNumbersItem.react"),
                    {
                      label: h._("VOTED FOR {Poll option value}", [
                        h._param("Poll option value", a.text),
                      ]),
                      value: a.votesCount,
                    },
                    b
                  );
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
  "StoriesViewerSheetPollResult.react",
  [
    "CometRelay",
    "StoriesPollVoterList.react",
    "StoriesPollVotes.react",
    "StoriesViewerSheetPollResult_overlayPoll.graphql",
    "StoriesViewerSheetSection.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.overlayPoll;
      a = a.showVoterList;
      a = a === void 0 ? !0 : a;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesViewerSheetPollResult_overlayPoll.graphql")),
        e
      );
      var f = e == null ? void 0 : e.poll;
      e = e == null ? void 0 : e.style;
      if (f == null || e == null) return null;
      e = function () {
        return i.jsx(c("StoriesPollVotes.react"), { pollVotes: f });
      };
      return i.jsxs(c("StoriesViewerSheetSection.react"), {
        children: [
          e(),
          a === !0 && i.jsx(c("StoriesPollVoterList.react"), { voterList: f }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetPreviewAddStory.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "StoriesGating",
    "TetraIcon.react",
    "XCometStoriesCreateControllerRouteBuilder",
    "fbicon",
    "react",
    "useOpenComposer",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = c("useOpenComposer")(),
        e = a.height;
      a = a.width;
      var f = {
        display: "inline",
        label: h._("Create a Story"),
        overlayDisabled: !0,
      };
      if (d("StoriesGating").isComet()) {
        var g = c("XCometStoriesCreateControllerRouteBuilder").buildURL({}),
          k = {
            entryPoint: "add_to_story_viewer_sheet",
            sourceSurface: "stories",
          };
        f = babelHelpers["extends"]({}, f, {
          linkProps: { passthroughProps: k, url: g },
        });
      } else f = babelHelpers["extends"]({}, f, { onPress: b });
      return j.jsx(
        c("CometPressable.react"),
        babelHelpers["extends"]({}, f, {
          children: j.jsxs("div", {
            className:
              "taijpn5t cbu4d94t j83agx80 nhd2j8a9 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 qsy8amke bp9cbjyn",
            style: { height: e, width: a },
            children: [
              j.jsx("div", {
                className:
                  "oeao4gh3 taijpn5t e5d9fub0 j83agx80 p4hiznlx j2ut9x2k px9q9ucb sibfvsnu cwj9ozl2 bp9cbjyn",
                children: j.jsx(c("TetraIcon.react"), {
                  color: "highlight",
                  icon: d("fbicon")._(i("483770"), 24),
                  size: 24,
                }),
              }),
              j.jsx("div", {
                className: "ku2m03ct j5wam9gi e9vueds3 m9osqain",
                children: h._("Create Story"),
              }),
            ],
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetStoryPreview.react",
  [
    "fbt",
    "CometImageCover.react",
    "CometPressable.react",
    "CometRelay",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = function (a) {
            var b = a.type === "press";
            b || (a.preventDefault(), a.stopPropagation());
            c.props.onClick && c.props.onClick(c.props.isActive, c.props.index);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.render = function () {
        var a = this.props,
          b = a.activeScale,
          e = a.caption,
          f = a.isActive;
        a = a.warningScreen;
        var g = this.props,
          j = g.height;
        g = g.width;
        f && ((j *= b), (g *= b));
        b = this.props.previewImageURI;
        return i.jsx(c("CometPressable.react"), {
          "aria-label": h._("self story card"),
          display: "inline",
          onPress: this.$1,
          overlayDisabled: !0,
          children: i.jsx("div", {
            className: c("stylex").dedupe(
              {
                "border-top-start-radius-1": "jk6sbkaj",
                "border-top-end-radius-1": "kdgqqoy6",
                "border-bottom-end-radius-1": "ihh4hy1g",
                "border-bottom-start-radius-1": "qttc61fc",
                "box-shadow-1": "jsl0ic47",
                "cursor-1": "nhd2j8a9",
                "display-1": "j83agx80",
                "flex-0.1": "g3eujd1d",
                "opacity-1": "qwwmc0zo",
                "overflow-x-1": "ni8dbmo4",
                "overflow-y-1": "stjgntxs",
                "transform-0.1": "fh5enmmv",
                "transition-duration-1": "kmdw4o4n",
                "transition-property-1": "pnx7fd3z",
                "transition-timing-function-1": "heur4gxb",
                "user-select-1": "abiwlrkh",
              },
              f ? { "box-shadow-1": "jsl0ic47", "opacity-1": "pedkr2u6" } : null
            ),
            style: { height: j, width: g },
            children:
              a != null
                ? i.jsx(d("CometRelay").MatchContainer, {
                    match: a,
                    props: {
                      alwaysShowCoverComponent: !0,
                      alwaysShowDetails: !1,
                      alwaysUseSmallLayout: !0,
                      contentID: this.props.contentID,
                      data: a,
                      mediaUri: b,
                      storyID: this.props.storyID,
                      surface: "story_viewer",
                      url: null,
                    },
                  })
                : i.jsx(c("CometImageCover.react"), { alt: e, src: b }),
          }),
        });
      };
      return b;
    })(i.PureComponent);
    a.defaultProps = { isActive: !1, onClick: null };
    g["default"] = a;
  },
  98
);
__d(
  "StoriesLightweightReactionIcon.react",
  ["CometEmoji.react", "CometReactionIcon.react", "StoriesEnums", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.$1 = function (a) {
        switch (a) {
          case d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.ANGER:
            return 8;
          case d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.HAHA:
            return 4;
          case d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.LIKE:
            return 1;
          case d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.LOVE:
            return 2;
          case d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.SORRY:
            return 7;
          case d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.WOW:
            return 3;
          case d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.SUPPORT:
            return 16;
          default:
            return null;
        }
      };
      e.render = function () {
        var a = this.props.emojiUnicode,
          b = this.$1(a);
        return b == null
          ? h.jsx(c("CometEmoji.react"), { emoji: [a], size: 18 })
          : h.jsx(c("CometReactionIcon.react"), { reactionType: b, size: 18 });
      };
      return b;
    })(h.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetViewerFeedback.react",
  [
    "CometImage.react",
    "CometRelay",
    "StoriesConstants",
    "StoriesLightweightViewerReactions.react",
    "StoriesViewerSheetViewerFeedback_feedback.graphql",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        interactiveSticker: { marginStart: "kkf49tns" },
        reactions: { display: "j83agx80", marginStart: "kkf49tns" },
        root: { display: "j83agx80" },
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("StoriesViewerSheetViewerFeedback_feedback.graphql")),
          a.feedback
        ),
        f = a.interactiveStickerUrlMap;
      if (e == null) return null;
      a = e.lightweight_reactions;
      e = e.reaction_sticker_reactions;
      e = e.reduce(function (a, b) {
        b = b.reaction_sticker_id;
        if (b == null || f[b] == null) return a;
        a.push(b);
        return a;
      }, []);
      a = a == null ? void 0 : a[0];
      var g =
        d("StoriesConstants").ViewerSheetViewerList.MAX_REACTIONS_PER_VIEWER -
        e.length;
      g <= 0 &&
        ((g = 1),
        e.slice(
          0,
          d("StoriesConstants").ViewerSheetViewerList.MAX_REACTIONS_PER_VIEWER
        ));
      return i.jsxs("div", {
        className: c("stylex")(j.root),
        children: [
          e.length > 0 &&
            i.jsx("div", {
              className: c("stylex")(j.reactions),
              children: e.map(function (a, b) {
                return i.jsx(k, { stickerUrl: f[a] }, b);
              }),
            }),
          i.jsx("div", {
            className: c("stylex")(j.reactions),
            children: i.jsx(c("StoriesLightweightViewerReactions.react"), {
              maxReactions: g,
              reactions: a,
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var k = function (a) {
      return i.jsx(c("CometImage.react"), {
        height: 18,
        src: a.stickerUrl,
        width: 18,
        xstyle: j.interactiveSticker,
      });
    };
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerLastActiveStatus.react",
  [
    "fbt",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "StoriesViewerLastActiveStatus_status.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesViewerLastActiveStatus_status.graphql")),
        a.status
      );
      a = a.lastActiveStatus;
      e = (e = a == null ? void 0 : a.isActive) != null ? e : !1;
      a = (a = a == null ? void 0 : a.lastActiveTime) != null ? a : 0;
      if (!e && a <= 0) return null;
      return e
        ? h._("Active now")
        : h._("Active {Viewer's last active time} ago", [
            h._param(
              "Viewer's last active time",
              j.jsx(c("CometRelativeTimestamp.react"), {
                date: new Date(a * 1e3),
                format: "minimized",
              })
            ),
          ]);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetViewerListItem.react",
  [
    "fbt",
    "CometPressable.react",
    "CometRelay",
    "StoriesGating",
    "StoriesViewerInfo.react",
    "StoriesViewerLastActiveStatus.react",
    "StoriesViewerPog.react",
    "StoriesViewerSheetListItem.react",
    "StoriesViewerSheetViewerFeedback.react",
    "StoriesViewerSheetViewerListItem_viewerDetail.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("StoriesViewerSheetViewerListItem_viewerDetail.graphql")),
          a.viewerDetail
        ),
        f = function (b) {
          var c = b.type === "press";
          c || (b.preventDefault(), b.stopPropagation());
          b = (c = e.node) == null ? void 0 : c.id;
          b != null && a.onClick != null && a.onClick(b);
        },
        g = a.hasReactions,
        h = a.hasReplies,
        l = a.interactiveStickerUrlMap,
        m = a.isNewViewer,
        n = e.node;
      if (n == null) return null;
      var o = j.jsx(c("StoriesViewerPog.react"), { viewerPog: n });
      l = j.jsx(c("StoriesViewerSheetViewerFeedback.react"), {
        feedback: e.feedback,
        interactiveStickerUrlMap: l,
      });
      if (d("StoriesGating").shouldEnableAnonymousViews() && !g && !h)
        return null;
      g = null;
      h
        ? (g = j.jsx(k, {}))
        : (g = j.jsx(c("StoriesViewerLastActiveStatus.react"), { status: n }));
      return j.jsx(c("CometPressable.react"), {
        display: "block",
        onPress: f,
        overlayDisabled: !0,
        children: j.jsx(c("StoriesViewerSheetListItem.react"), {
          addon: o,
          isButton: !0,
          right: l,
          children: j.jsx(c("StoriesViewerInfo.react"), {
            isNewViewer: m,
            subtitle: g,
            viewerInfo: n,
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var k = function () {
      return j.jsx("div", { children: h._("Replied in Messenger") });
    };
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetViewerListContent.react",
  [
    "fbt",
    "ix",
    "CometColumnItem.react",
    "CometInfiniteScrollTrigger.react",
    "CometListCellGlimmer.react",
    "CometRelay",
    "ProfileCometFeaturedHighlightsStrings",
    "StoriesBehaviorHelpContext",
    "StoriesConstants",
    "StoriesEnums",
    "StoriesGating",
    "StoriesPauseReasons",
    "StoriesViewerSheetInteractiveStickerOverlayMap.react",
    "StoriesViewerSheetViewerListContent_overlays.graphql",
    "StoriesViewerSheetViewerListContent_seenState.graphql",
    "StoriesViewerSheetViewerListContent_viewerList.graphql",
    "StoriesViewerSheetViewerListItem.react",
    "TetraIcon.react",
    "cometPushToast",
    "cr:10024",
    "cr:793537",
    "fbicon",
    "orEmptyArray",
    "react",
    "useMWChatOpenTabForUser",
    "useShouldShowMessagingEntrypointOnCurrentRoute",
    "useStoriesShowEpdBlockToast",
    "useToasterStateManager",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l,
      m = d("react");
    e = d("react");
    var n = e.useContext,
      o = e.useEffect,
      p = e.useMemo,
      q = e.useRef,
      r = 1;
    function a(a) {
      var e,
        f = d("CometRelay").usePaginationFragment(
          j !== void 0
            ? j
            : (j = b("StoriesViewerSheetViewerListContent_viewerList.graphql")),
          a.viewerList
        ),
        g = f.data,
        s = f.hasNext,
        t = f.isLoadingNext,
        u = f.loadNext;
      f = d("CometRelay").useFragment(
        k !== void 0
          ? k
          : (k = b("StoriesViewerSheetViewerListContent_seenState.graphql")),
        a.seenState
      );
      var v = d("CometRelay").useFragment(
          l !== void 0
            ? l
            : (l = b("StoriesViewerSheetViewerListContent_overlays.graphql")),
          a.overlays
        ),
        w = q(null),
        x = c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT"),
        y = c("useMWChatOpenTabForUser")(
          "stories_viewed_by_list",
          "storyViewerSheetRow"
        ),
        z = y[0];
      y[1];
      var A = c("useStoriesShowEpdBlockToast")(),
        B = function () {
          w.current && w.current();
        };
      o(function () {
        return B;
      }, []);
      var C = c("useToasterStateManager")();
      function D(a, b) {
        d("cometPushToast").cometPushToast({ icon: b, message: a }, 2750, C);
      }
      var E = function (e) {
        if (!d("StoriesGating").allowedByEPDClientFeatureBlock()) {
          A();
          return;
        }
        a.setPause(!0, d("StoriesPauseReasons").MESSAGE_VIEWER);
        if (b("cr:793537"))
          B(),
            (w.current = b("cr:793537")(e, function () {
              a.setPause(!1, d("StoriesPauseReasons").MESSAGE_VIEWER);
            }));
        else if (x) z(e);
        else {
          e = h._("Messaging viewer is not currently supported.");
          var f = m.jsx(c("TetraIcon.react"), {
            color: "white",
            icon: d("fbicon")._(i("491585"), 24),
            size: 24,
          });
          D(e, f);
        }
      };
      y =
        n(c("StoriesBehaviorHelpContext")).getBucketType() ===
        d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY;
      var F = null;
      y
        ? (F = d(
            "ProfileCometFeaturedHighlightsStrings"
          ).ZERO_VIEWER_COUNT_TEXT)
        : d("StoriesGating").shouldEnableAnonymousViews()
        ? (F = h._(
            "We have updated Story views so that they remain anonymous and won't appear here. You will still see any messages or reactions recevied."
          ))
        : (F = h._("As people view your story, you'll see details here."));
      y = function () {
        return m.jsx("div", {
          className:
            "ozuftl9m oygrvhab tvfksri0 tr9rh885 a3bd9o3v jq4qci2q m9osqain",
          children: F,
        });
      };
      e = (e = g == null ? void 0 : g.story_card_info) != null ? e : null;
      f = f == null ? void 0 : f.story_card_seen_state;
      var G = c("orEmptyArray")(
          e == null
            ? void 0
            : (e = e.viewerList_viewers) == null
            ? void 0
            : e.edges
        ),
        H = f == null ? void 0 : f.seen_receipts_last_seen_time,
        I = p(
          function () {
            return G.reduce(function (a, b) {
              var c,
                d = b == null ? void 0 : b.cursor;
              if (d == null) return a;
              c =
                (c =
                  b == null
                    ? void 0
                    : (c = b.feedback) == null
                    ? void 0
                    : c.story_replies) != null
                  ? c
                  : !1;
              c = c && c.length > 0;
              b =
                (b =
                  b == null
                    ? void 0
                    : (b = b.feedback) == null
                    ? void 0
                    : b.lightweight_reactions.filter(function (a) {
                        var b;
                        return (
                          (a == null
                            ? void 0
                            : (b = a.messaging_actions) == null
                            ? void 0
                            : b.count) != null &&
                          (a == null
                            ? void 0
                            : (b = a.messaging_actions) == null
                            ? void 0
                            : b.count) > 0
                        );
                      })) != null
                  ? b
                  : [];
              b = b.length > 0;
              return babelHelpers["extends"](
                {},
                a,
                ((a = {}), (a[d] = { hasReactions: b, hasReplies: c }), a)
              );
            }, {});
          },
          [G]
        );
      e = p(
        function () {
          return Object.keys(I).some(function (a) {
            return I[a].hasReactions || I[a].hasReplies;
          });
        },
        [I]
      );
      if (g == null || G.length === 0) return m.jsx(y, {});
      if (
        !e &&
        b("cr:10024") != null &&
        d("StoriesGating").shouldEnableAnonymousViews()
      )
        return m.jsx(b("cr:10024"), { showFallback: !0 });
      f = m.jsx(c("StoriesViewerSheetInteractiveStickerOverlayMap.react"), {
        overlays: v,
        children: function (a) {
          return m.jsxs(c("CometColumnItem.react"), {
            paddingTop: 4,
            paddingVertical: 4,
            children: [
              G.map(function (b, d) {
                var e = b.cursor,
                  f = b.seen_time;
                e = e != null ? I[e] : { hasReactions: !1, hasReplies: !1 };
                var g = e.hasReactions;
                e = e.hasReplies;
                f = H != null && f != null && f >= H;
                return m.jsx(
                  c("StoriesViewerSheetViewerListItem.react"),
                  {
                    hasReactions: g,
                    hasReplies: e,
                    interactiveStickerUrlMap: a,
                    isNewViewer: f,
                    onClick: E,
                    viewerDetail: b,
                  },
                  d
                );
              }),
              m.jsx(
                c("CometInfiniteScrollTrigger.react"),
                {
                  hasMore: s,
                  isLoading: t,
                  onLoadMore: function () {
                    u(
                      d("StoriesConstants").ViewerSheetViewerList
                        .COUNT_PER_PAGINATION_FETCH
                    );
                  },
                  children: m.jsx(c("CometListCellGlimmer.react"), {
                    imageSize: 36,
                    imageStyle: "circle",
                    numberOfItems: 3,
                  }),
                },
                r++
              ),
            ],
          });
        },
      });
      return d("StoriesGating").shouldEnableAnonymousViews() &&
        !t &&
        !s &&
        b("cr:10024") != null
        ? m.jsxs(m.Fragment, {
            children: [m.jsx(b("cr:10024"), { showFallback: !1 }), f],
          })
        : f;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetViewerListHeader.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "StoriesGating",
    "StoriesViewerSheetViewerListHeader_cardSeenState.graphql",
    "TetraIcon.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = {
        heading: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexBasis: "rj1gh0hx",
          flexGrow: "buofh1pr",
          flexShrink: "g5gj957u",
          justifyContent: "i1fnvgqd",
        },
        main: { alignItems: "bp9cbjyn", display: "j83agx80" },
        noMargin: { marginStart: "hcukyx3x" },
        root: {
          alignItems: "aovydwv3",
          color: "m9hp224e",
          display: "j83agx80",
          marginTop: "tr9rh885",
          marginEnd: "tvfksri0",
          marginBottom: "oygrvhab",
          marginStart: "ozuftl9m",
        },
        totalNewViewerCount: {
          color: "q66pz984",
          fontSize: "jq4qci2q",
          lineHeight: "a3bd9o3v",
        },
        totalViewerCount: {
          fontSize: "a5q79mjw",
          fontWeight: "n3ffmt46",
          lineHeight: "g1cxx5fr",
          marginStart: "gtad4xkn",
        },
      };
    function a(a) {
      var e,
        f,
        g,
        h = a.cardSeenState,
        o = a.showIcon;
      o = o === void 0 ? !0 : o;
      var p = a.showNewCount;
      p = p === void 0 ? !0 : p;
      a = a.xstyle;
      h = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("StoriesViewerSheetViewerListHeader_cardSeenState.graphql")),
        h
      );
      h = h == null ? void 0 : h.viewerCount;
      e =
        (e =
          h == null
            ? void 0
            : (e = h.friendViewerCount) == null
            ? void 0
            : e.count) != null
          ? e
          : 0;
      f =
        (f =
          h == null
            ? void 0
            : (f = h.connectionViewerCount) == null
            ? void 0
            : f.count) != null
          ? f
          : 0;
      g =
        (g =
          h == null
            ? void 0
            : (g = h.followerViewerCount) == null
            ? void 0
            : g.count) != null
          ? g
          : 0;
      e = e + f + g;
      f =
        (g =
          h == null
            ? void 0
            : (f = h.newFriendViewerCount) == null
            ? void 0
            : f.count) != null
          ? g
          : 0;
      g =
        (h =
          h == null
            ? void 0
            : (g = h.newConnectionViewerCount) == null
            ? void 0
            : g.count) != null
          ? h
          : 0;
      h = f + g;
      f = d("StoriesGating").shouldEnableAnonymousViews() && e === 0;
      return k.jsx("div", {
        className: c("stylex")(l.root, a),
        children: k.jsxs("div", {
          className: c("stylex")(l.heading),
          children: [
            k.jsxs("div", {
              className: c("stylex")(l.main),
              children: [
                o &&
                  !f &&
                  k.jsx(c("TetraIcon.react"), {
                    color: "secondary",
                    icon: d("fbicon")._(i("491229"), 24),
                    size: 20,
                  }),
                k.jsx("span", {
                  className: c("stylex")(l.totalViewerCount, f && l.noMargin),
                  children: k.jsx(m, { viewerCount: e }),
                }),
              ],
            }),
            h > 0 &&
              p &&
              k.jsx("span", {
                className: c("stylex")(l.totalNewViewerCount),
                children: k.jsx(n, { newViewerCount: h }),
              }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var m = function (a) {
        if (
          a.viewerCount === 0 &&
          d("StoriesGating").shouldEnableAnonymousViews()
        )
          return h._("No Feedback Yet");
        else if (a.viewerCount === 0) return h._("No Viewers Yet");
        return h._({ "*": "{number} viewers", _1: "1 viewer" }, [
          h._plural(a.viewerCount, "number"),
        ]);
      },
      n = function (a) {
        return h._("{Number of total new viewers of the story} New", [
          h._param(
            "Number of total new viewers of the story",
            a.newViewerCount
          ),
        ]);
      };
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseCardMediaWarningScreen.react",
  [
    "CometRelay",
    "CometWarningScreenContext",
    "StoriesSuspenseCardMediaWarningScreen_data.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useEffect;
    function a(a) {
      var c = a.blurredImageURI,
        e = a.data,
        f = a.onWarningScreenMounted;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesSuspenseCardMediaWarningScreen_data.graphql")),
        e
      );
      var g = d("CometWarningScreenContext").useIsContentVisible();
      j(
        function () {
          g != null && (f == null ? void 0 : f({ isContentVisible: g }));
        },
        [f, g]
      );
      return i.jsx("div", {
        className: "du4w35lb",
        children: i.jsx(d("CometRelay").MatchContainer, {
          match: a,
          props: {
            allowReCoveringContent: !1,
            alwaysShowDetails: !0,
            alwaysUseSmallLayout: !1,
            data: a,
            mediaUri: c,
            surface: "story_viewer",
            url: null,
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseCardMediaContent.react",
  [
    "CometHeroInteractionIDContext",
    "CometRelay",
    "CometWarningScreenContext",
    "InteractionTracingMetrics",
    "StoriesCardComposerFormat.react",
    "StoriesCardPhotoMedia.react",
    "StoriesCardVideoMedia.react",
    "StoriesEnums",
    "StoriesSuspenseCardMediaContent_media.graphql",
    "StoriesSuspenseCardMediaWarningScreen.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect,
      l = new Set(Object.values(d("StoriesEnums").STORY_MEDIA_TYPES)),
      m =
        h !== void 0
          ? h
          : (h = b("StoriesSuspenseCardMediaContent_media.graphql"));
    function a(a) {
      var b,
        e,
        f,
        g,
        h = a.isMuted,
        n = a.isPaused,
        o = a.isStoryOverlayActive,
        p = a.media,
        q = a.onImageLoad,
        r = a.onSeen,
        s = a.onTimerSourceUpdate,
        t = a.onVideoLoaded,
        u = a.onWarningScreenMounted;
      a = a.setPause;
      p = d("CometRelay").useFragment(m, p);
      b =
        p == null
          ? void 0
          : (b = p.attachments) == null
          ? void 0
          : b.filter(function (a) {
              return l.has(
                a == null
                  ? void 0
                  : (a = a.media) == null
                  ? void 0
                  : a.__typename
              );
            });
      b = b == null ? void 0 : (b = b[0]) == null ? void 0 : b.media;
      var v = b == null ? void 0 : b.__typename,
        w = b == null ? void 0 : b.id;
      e =
        b == null ? void 0 : (e = b.cix_screen) == null ? void 0 : e.view_model;
      f =
        ((p == null ? void 0 : p.link_attachment) &&
          (p == null
            ? void 0
            : (f = p.link_attachment) == null
            ? void 0
            : (f = f[0]) == null
            ? void 0
            : f.url)) != null;
      g =
        (p == null ? void 0 : (g = p.message) == null ? void 0 : g.text) !=
        null;
      var x = j(c("CometHeroInteractionIDContext"));
      k(
        function () {
          var a;
          if (x == null) return;
          c("InteractionTracingMetrics").addMetadata(
            x,
            "story_media_type",
            (a = v) != null ? a : "UNKNOWN_MEDIA_TYPE"
          );
        },
        [x, v]
      );
      g = g;
      var y = null;
      p &&
        b &&
        (g && !f
          ? (y = i.jsx(c("StoriesCardComposerFormat.react"), {
              defaultBackground: p.story_default_background,
              disableVerticalPadding: !1,
              message: p.message,
              onImageLoad: q,
              setPause: a,
              story: p,
              textFormatMetaData: p.text_format_metadata,
            }))
          : v === d("StoriesEnums").STORY_MEDIA_TYPES.PHOTO
          ? (y = i.jsx(c("StoriesCardPhotoMedia.react"), {
              onImageLoad: q,
              photo: b,
              story: p,
            }))
          : v === d("StoriesEnums").STORY_MEDIA_TYPES.VIDEO &&
            (y = i.jsx(c("StoriesCardVideoMedia.react"), {
              disableAutoplay: o || n,
              isMuted: h,
              isPaused: n,
              onTimerSourceUpdate: s,
              onVideoLoaded: t,
              setPause: a,
              video: b,
            })));
      var z =
        (g = d("CometWarningScreenContext").useIsContentVisible()) != null
          ? g
          : !1;
      h =
        (q =
          b == null ? void 0 : (f = b.blurredImage) == null ? void 0 : f.uri) !=
        null
          ? q
          : null;
      k(
        function () {
          z && !o && r();
        },
        [r, z, o]
      );
      return i.jsxs(i.Fragment, {
        children: [
          z && y,
          e != null &&
            i.jsx(c("StoriesSuspenseCardMediaWarningScreen.react"), {
              blurredImageURI: h,
              contentID: w,
              data: e,
              onWarningScreenMounted: u,
              storyID: p == null ? void 0 : p.id,
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "StoriesSuspenseContuxContext",
  ["StoriesConstants", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      cardIndex: d("StoriesConstants").CARD.DEFAULT_SUSPENSE_CARD_INDEX,
      isFirstCard: !1,
      isLastCard: !1,
      isStoryOverlayActive: !1,
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "StoriesSuspenseCardMedia.react",
  [
    "fbt",
    "CometErrorBoundary.react",
    "CometRelay",
    "QPLUserFlow",
    "StoriesCardMediaLoadingBackground.react",
    "StoriesCardTimerSourceAutoProgression",
    "StoriesLoggerContext",
    "StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent",
    "StoriesSuspenseCardMediaContent.react",
    "StoriesSuspenseCardMedia_media.graphql",
    "StoriesSuspenseContuxContext",
    "StoriesSuspensePauseContext",
    "react",
    "storiesViewerSuspenseEmitter",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m = e.useEffect,
      n = e.useRef,
      o = e.useState;
    function p() {
      c("QPLUserFlow").endSuccess(
        c("StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent")
      );
    }
    var q = function () {
        c("QPLUserFlow").endFailure(
          c("StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent"),
          "media failed to load"
        );
      },
      r = function () {
        return h._("Error Rendering Media");
      },
      s = i !== void 0 ? i : (i = b("StoriesSuspenseCardMedia_media.graphql"));
    function a(a) {
      var b,
        e,
        f,
        g = a.isMuted,
        h = a.media,
        i = a.onSeen,
        t = a.onTimerSourceUpdate,
        u = d("CometRelay").useFragment(s, h);
      a = l(c("StoriesLoggerContext"));
      var v = a.logger;
      h = l(c("StoriesSuspensePauseContext"));
      a = h.isPaused;
      h = h.setPause;
      var w = l(c("StoriesSuspenseContuxContext"));
      w = w.isStoryOverlayActive;
      var x = o(!1),
        y = x[0],
        z = x[1],
        A = n(!1),
        B =
          u == null
            ? void 0
            : (x = u.attachments) == null
            ? void 0
            : (x = x[0]) == null
            ? void 0
            : x.media,
        C = c("usePrevious")(B),
        D = n(null),
        E = u == null ? void 0 : u.id,
        F = n(null);
      x = k(
        function () {
          F.current !== E &&
            E != null &&
            (i == null ? void 0 : i(), (F.current = E));
        },
        [i, E]
      );
      var G = k(
          function () {
            c("storiesViewerSuspenseEmitter").bucketLoaded(),
              (u == null ? void 0 : u.id) != null &&
                D.current !== (u == null ? void 0 : u.id) &&
                v != null &&
                B != null &&
                (v.storyMediaViewLog(u == null ? void 0 : u.id),
                (D.current = u == null ? void 0 : u.id));
          },
          [u, B, v]
        ),
        H = k(
          function (a) {
            t && t(a), z(!0);
          },
          [t]
        );
      b = k(
        function () {
          var a;
          c("QPLUserFlow").addPoint(
            c("StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent"),
            "image loaded"
          );
          G();
          p();
          H(
            new (c("StoriesCardTimerSourceAutoProgression"))(
              ((a =
                u == null
                  ? void 0
                  : (a = u.story_card_info) == null
                  ? void 0
                  : a.story_play_duration) != null
                ? a
                : 6) * 1e3
            )
          );
        },
        [
          H,
          u == null
            ? void 0
            : (b = u.story_card_info) == null
            ? void 0
            : b.story_play_duration,
          G,
        ]
      );
      var I = k(
        function () {
          c("QPLUserFlow").addPoint(
            c("StoriesModuleStoryOpenViewerFromTrayWwwQPLEvent"),
            "video loaded"
          ),
            G(),
            p();
        },
        [G]
      );
      e = k(
        function (a) {
          if (!a.isContentVisible) {
            c("storiesViewerSuspenseEmitter").bucketLoaded();
            H(
              new (c("StoriesCardTimerSourceAutoProgression"))(
                ((a =
                  u == null
                    ? void 0
                    : (a = u.story_card_info) == null
                    ? void 0
                    : a.story_play_duration) != null
                  ? a
                  : 6) * 1e3
              )
            );
          }
        },
        [
          H,
          u == null
            ? void 0
            : (e = u.story_card_info) == null
            ? void 0
            : e.story_play_duration,
        ]
      );
      f =
        (u == null ? void 0 : (f = u.message) == null ? void 0 : f.text) !=
        null;
      m(
        function () {
          C !== B &&
            A.current === !1 &&
            v != null &&
            B != null &&
            (v.openMediaLog(u == null ? void 0 : u.id), (A.current = !0));
        },
        [u, B, v, C]
      );
      f = f;
      y = !y && !f;
      return j.jsxs(c("CometErrorBoundary.react"), {
        fallback: r,
        onError: q,
        children: [
          j.jsx(c("StoriesSuspenseCardMediaContent.react"), {
            isMuted: g,
            isPaused: a,
            isStoryOverlayActive: w,
            media: u,
            onImageLoad: b,
            onSeen: x,
            onTimerSourceUpdate: H,
            onVideoLoaded: I,
            onWarningScreenMounted: e,
            setPause: h,
          }),
          y &&
            j.jsx(c("StoriesCardMediaLoadingBackground.react"), { story: u }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = j.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "StoriesSuspenseBucket.react",
  [
    "CometHero.react",
    "CometRelay",
    "CometWarningScreenContext",
    "StoriesBehaviorHelpContext",
    "StoriesEnums",
    "StoriesMuteButton.react",
    "StoriesPauseButton.react",
    "StoriesPauseReasons",
    "StoriesRecoverWarningScreenButton.react",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseBucket_animations.graphql",
    "StoriesSuspenseBucket_card.graphql",
    "StoriesSuspenseBucket_owner.graphql",
    "StoriesSuspenseCard.react",
    "StoriesSuspenseCardOptionMenuTrigger.react",
    "StoriesSuspenseContuxContext",
    "StoriesSuspensePauseContext",
    "StoriesViewerMenu.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useContext,
      m = e.useEffect,
      n = e.useState,
      o = null;
    function a(a) {
      var e,
        f = a.animations,
        g = a.card,
        p = a.isSelfStory,
        q = a.onCardSeen,
        r = a.onTimerSourceUpdate,
        s = a.owner,
        t = a.ownerName;
      a = a.refetchNodes;
      g = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesSuspenseBucket_card.graphql")),
        g
      );
      s = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("StoriesSuspenseBucket_owner.graphql")),
        s
      );
      f = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("StoriesSuspenseBucket_animations.graphql")),
        f
      );
      e = n((e = o) != null ? e : !1);
      var u = e[0],
        v = e[1];
      e = l(c("StoriesSuspensePauseContext"));
      var w = e.isPaused,
        x = e.setPause;
      e = l(c("StoriesSuspenseContuxContext"));
      e = e.cardIndex;
      var y = l(c("StoriesSuspenseBucketDataContext"));
      y = y.bucketData;
      y = y.bucketID;
      var z = l(c("StoriesBehaviorHelpContext")).getBucketType(),
        A = g == null ? void 0 : g.id;
      z =
        p && z === d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY
          ? null
          : k.jsx(c("StoriesSuspenseCardOptionMenuTrigger.react"), {
              bucketID: y,
              card: g,
              owner: s,
              refetchNodes: a,
              setPause: x,
            });
      a =
        g == null
          ? void 0
          : (a = g.attachments) == null
          ? void 0
          : (a = a[0]) == null
          ? void 0
          : (a = a.media) == null
          ? void 0
          : (a = a.cix_screen) == null
          ? void 0
          : a.view_model;
      var B = (a == null ? void 0 : a.__typename) != null;
      m(
        function () {
          A != null && x(!1, d("StoriesPauseReasons").CARD_CHANGE);
        },
        [A, x]
      );
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx(c("CometHero.react"), { description: "StoriesCard" }),
          k.jsx(
            d("CometWarningScreenContext").CometWarningScreenContextProvider,
            {
              identifier: e,
              overlayExists: B,
              children: k.jsxs("div", {
                className: "k4urcfbm datstx6m",
                children: [
                  k.jsx(c("StoriesSuspenseCard.react"), {
                    animations: f,
                    card: g,
                    isMuted: u,
                    isSelfStory: p,
                    onMuteChanged: function (a) {
                      v(a), (o = a);
                    },
                    onSeen: q,
                    onTimerSourceUpdate: r,
                    owner: s,
                    ownerName: t,
                  }),
                  k.jsxs(c("StoriesViewerMenu.react"), {
                    children: [
                      k.jsx(c("StoriesRecoverWarningScreenButton.react"), {
                        loggingData: a,
                        storyID: A,
                      }),
                      k.jsx(
                        c("StoriesPauseButton.react"),
                        { isPaused: w, setPause: x },
                        y
                      ),
                      k.jsx(c("StoriesMuteButton.react"), {
                        isMuted: u,
                        onMuteChanged: function (a) {
                          v(a), (o = a);
                        },
                      }),
                      z,
                    ],
                  }),
                ],
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
  "StoriesSuspenseCardSwap.react",
  ["addTransitionEndListener", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useLayoutEffect,
      k = b.useRef,
      l = b.useState,
      m = 300;
    function a(a) {
      var b = a.bucketID,
        d = a.direction,
        e = a.duration,
        f = a.onTransitionBegin,
        g = a.onTransitionEnd;
      a = a.slide;
      var n = l(!1),
        o = n[0],
        p = n[1],
        q = k(null),
        r = k(null),
        s = k(null),
        t = k(null),
        u = k(null),
        v = s.current !== b && s.current !== null,
        w = !o && v,
        x = e != null ? e : m;
      i(
        function () {
          s.current = b;
        },
        [b]
      );
      j(function () {
        w &&
          (r.current !== null && window.cancelAnimationFrame(r.current),
          t.current !== null && t.current(),
          u.current !== null && window.clearTimeout(u.current),
          (r.current = window.requestAnimationFrame(function () {
            var a = q.current;
            if (a === null) return;
            p(!0);
            v && f();
            var b = function () {
              u.current !== null &&
                (window.clearTimeout(u.current), (u.current = null)),
                t.current !== null && (t.current(), (t.current = null)),
                p(!1),
                g();
            };
            t.current = c("addTransitionEndListener")(a, b);
            u.current = window.setTimeout(b, x + 100);
          })));
      });
      n = w
        ? d === "next"
          ? "p1z4y1cs k4urcfbm kr520xx4 j9ispegn pmk7jnqg ggxiycxj hihg3u9x datstx6m n7fi1qx3 i09qtzwb gdny1k8l b5wmifdl"
          : "p1z4y1cs k4urcfbm kr520xx4 j9ispegn pmk7jnqg ggxiycxj hihg3u9x datstx6m n7fi1qx3 i09qtzwb nyllqdpa b5wmifdl"
        : "p1z4y1cs k4urcfbm kr520xx4 j9ispegn pmk7jnqg ggxiycxj hihg3u9x datstx6m n7fi1qx3 i09qtzwb agkhgkm8 pedkr2u6";
      e = o
        ? {
            transition: [
              "opacity " + x + "ms  ease",
              "transform " + x + "ms  ease",
            ].join(", "),
          }
        : { transition: "none" };
      d = h.jsx("div", {
        className: n,
        ref: function (a) {
          return (q.current = a);
        },
        style: e,
        children: a,
      });
      return h.jsx("div", {
        className: "k4urcfbm l9j0dhe7 ggxiycxj hihg3u9x datstx6m",
        children: d,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseKeyboardContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      addSubscriber: function () {
        return function () {};
      },
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "useStoriesSuspensePlaceholderKeyHandler",
  [
    "CometKeys",
    "StoriesEnums",
    "StoriesLoggingConstants",
    "StoriesSuspenseKeyboardContext",
    "react",
    "storiesViewerSuspenseEmitter",
    "useStoriesViewerClose",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useEffect,
      k = b.useRef;
    function a() {
      var a = k(null),
        b = i(c("StoriesSuspenseKeyboardContext")),
        e = b.addSubscriber,
        f = c("useStoriesViewerClose")(),
        g = h(
          function (a) {
            switch (a.key) {
              case c("CometKeys").LEFT:
              case c("CometKeys").UP:
                c("storiesViewerSuspenseEmitter").requestBucketTransition(
                  d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET
                );
                break;
              case c("CometKeys").RIGHT:
              case c("CometKeys").DOWN:
                c("storiesViewerSuspenseEmitter").requestBucketTransition(
                  d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET
                );
                break;
              case c("CometKeys").ESCAPE:
                f(
                  c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.KEYBOARD_EXIT
                );
                break;
            }
          },
          [f]
        );
      j(
        function () {
          var b = function () {
            a.current && a.current();
          };
          b();
          a.current = e(g);
          return b;
        },
        [e, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseNavigationButtonsPlaceholder.react",
  [
    "StoriesEnums",
    "StoriesNavigationButton.react",
    "StoriesSuspenseBucketDataContext",
    "react",
    "storiesViewerSuspenseEmitter",
    "useStoriesSuspensePlaceholderKeyHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      a = a.children;
      c("useStoriesSuspensePlaceholderKeyHandler")();
      var b = i(c("StoriesSuspenseBucketDataContext"));
      b = b.bucketData;
      var e = b.bucketIndex,
        f = b.isFirstBucket;
      b = b.isLastBucket;
      return h.jsxs("div", {
        className: "taijpn5t datstx6m btwxx1t3 j83agx80 bp9cbjyn",
        children: [
          h.jsx(
            c("StoriesNavigationButton.react"),
            {
              direction: d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET,
              disabled: f || e === -1,
              onClick: function () {
                window.requestAnimationFrame(function () {
                  c("storiesViewerSuspenseEmitter").requestBucketTransition(
                    d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET
                  );
                });
              },
            },
            "prev"
          ),
          a,
          h.jsx(
            c("StoriesNavigationButton.react"),
            {
              direction: d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET,
              disabled: b || e === -1,
              onClick: function () {
                window.requestAnimationFrame(function () {
                  c("storiesViewerSuspenseEmitter").requestBucketTransition(
                    d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET
                  );
                });
              },
            },
            "next"
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
  "StoriesSuspenseViewerSheetPlaceholder.react",
  [
    "BaseGlimmer.react",
    "StoriesCometListItemGlimmer.react",
    "StoriesLoggingConstants",
    "StoriesViewerSheetSection.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a) {
      var b = a.openSource,
        d = a.toggleViewerSheet;
      i(
        function () {
          b === c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE
            ? d(!0)
            : d(!1);
        },
        [b, d]
      );
      a = [].concat(Array.from(Array(3).keys())).map(function (a) {
        return h.jsx(
          c("BaseGlimmer.react"),
          { className: "tuwtu1qs tvfksri0 ijttq3ge", index: a },
          a
        );
      });
      return h.jsxs("div", {
        className: "k4urcfbm datstx6m g5ijobay",
        children: [
          h.jsxs(c("StoriesViewerSheetSection.react"), {
            showSectionLine: !0,
            children: [
              h.jsx("div", {
                className: "tw6a2znq qt6c0cv9 d1544ag0 t15fza0o",
                children: h.jsx(c("BaseGlimmer.react"), {
                  className: "gjzvkazv jnigpg78",
                  index: 0,
                }),
              }),
              h.jsx("div", {
                className:
                  "tw6a2znq jbae33se d1544ag0 bjjx79mm j83agx80 bp9cbjyn",
                children: a,
              }),
            ],
          }),
          h.jsxs(c("StoriesViewerSheetSection.react"), {
            showSectionLine: !1,
            children: [
              h.jsx("div", {
                className: "tw6a2znq qt6c0cv9 d1544ag0 t15fza0o",
                children: h.jsx(c("BaseGlimmer.react"), {
                  className: "gjzvkazv jnigpg78",
                  index: 0,
                }),
              }),
              h.jsx(c("StoriesCometListItemGlimmer.react"), {
                isViewerSheet: !0,
                numberOfItems: 6,
              }),
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
  "useStoriesViewerSheetAnimation",
  ["Locale", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useMemo,
      i = b.useState,
      j = d("Locale").isRTL();
    function k(a, b) {
      var d = c("stylex").dedupe(
          a && j ? { "transform-0.1": "q6kczzvv" } : {},
          a && j && b ? { "transform-0.1": "top4u54p" } : null,
          a && !j ? { "transform-0.1": "jjsq51tz" } : null,
          a && !j && b ? { "transform-0.1": "s3hq9im5" } : null,
          a === !1 ? { "transform-0.1": "qiw3t3sk" } : null,
          {
            "display-1": "j83agx80",
            "height-1": "datstx6m",
            "width-1": "k4urcfbm",
          },
          {
            "transition-delay-1": "i1mrkscp",
            "transition-duration-1": "dpja2al7",
            "transition-property-1": "flx89l3n",
            "transition-timing-function-1": "msbwk0y7",
            "will-change-1": "ejg0drik",
          }
        ),
        e = c("stylex").dedupe(
          {
            "transition-delay-1": "i1mrkscp",
            "transition-duration-1": "dpja2al7",
            "transition-property-1": "flx89l3n",
            "transition-timing-function-1": "msbwk0y7",
            "will-change-1": "ejg0drik",
          },
          a && j ? { "transform-0.1": "q6kczzvv" } : null,
          a && j && b ? { "transform-0.1": "top4u54p" } : null,
          a && !j ? { "transform-0.1": "jjsq51tz" } : null,
          a && !j && b ? { "transform-0.1": "s3hq9im5" } : null,
          a === !1 ? { "transform-0.1": "qiw3t3sk" } : null
        );
      a = c("stylex").dedupe(
        {
          "height-1": "datstx6m",
          "position-1": "pmk7jnqg",
          "top-1": "kr520xx4",
          "transform-0.1": "qiw3t3sk",
          "transition-delay-1": "i1mrkscp",
          "transition-duration-1": "dpja2al7",
          "transition-property-1": "flx89l3n",
          "transition-timing-function-1": "msbwk0y7",
          "width-1": "o36gj0jk",
          "will-change-1": "ejg0drik",
        },
        b ? { "width-1": "a5uo0l2v" } : null,
        a && j ? { "transform-0.1": "q6kczzvv" } : null,
        a && j && b ? { "transform-0.1": "top4u54p" } : null,
        a && !j ? { "transform-0.1": "jjsq51tz" } : null,
        a && !j && b ? { "transform-0.1": "s3hq9im5" } : null,
        { "end-1": "s2y2oui8" },
        b ? { "end-1": "qbt31g5b" } : null,
        a === !1 ? { "transform-0.1": "qiw3t3sk" } : null
      );
      b = c("stylex").dedupe(
        { "height-1": "datstx6m", "width-1": "o36gj0jk" },
        b ? { "width-1": "a5uo0l2v" } : null
      );
      return {
        closeButtonStyle: e,
        contentPaneStyle: d,
        placeholderStyle: b,
        viewerSheetStyle: a,
      };
    }
    function a(a, b, c) {
      a === void 0 && (a = !1);
      b === void 0 && (b = !0);
      c === void 0 && (c = !1);
      a = i(a);
      var d = a[0],
        e = a[1];
      return h(
        function () {
          return babelHelpers["extends"]({}, k(d && b, c), {
            setDisplaySideRail: function (a) {
              a !== d && e(a);
            },
          });
        },
        [b, d, c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseContentPanePlaceholder.react",
  [
    "StoriesBucketLoadingView.react",
    "StoriesCloseButton.react",
    "StoriesLoggerSession",
    "StoriesLoggingConstants",
    "StoriesSuspenseNavigationButtonsPlaceholder.react",
    "StoriesSuspenseViewerSheetPlaceholder.react",
    "react",
    "useStoriesViewerDimensions",
    "useStoriesViewerSheetAnimation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.isNullState;
      a = a === void 0 ? !1 : a;
      var b = c("useStoriesViewerDimensions")(),
        e =
          d("StoriesLoggerSession").getOpenViewerSource() ===
          c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE,
        f = e;
      f = c("useStoriesViewerSheetAnimation")(f);
      var g = f.contentPaneStyle,
        i = f.placeholderStyle,
        j = f.setDisplaySideRail,
        k = f.viewerSheetInlineStyle;
      f = f.viewerSheetStyle;
      var l = null;
      b = h.jsxs("div", {
        className:
          "k4urcfbm kr520xx4 j9ispegn pmk7jnqg taijpn5t datstx6m j83agx80 bp9cbjyn",
        children: [
          h.jsx(c("StoriesSuspenseNavigationButtonsPlaceholder.react"), {
            children: h.jsx("div", {
              className: "l9j0dhe7 datstx6m cbu4d94t j83agx80 bp9cbjyn",
              children: h.jsx("div", {
                className:
                  "dzlist6r msbwk0y7 pnx7fd3z ms05siws l9j0dhe7 stjgntxs ni8dbmo4 puxov6c6 r893ighp n1l5q3vz n851cfcs btwxx1t3 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 g5ia77u1",
                style: b,
                children: h.jsx(c("StoriesBucketLoadingView.react"), {}),
              }),
            }),
          }),
          h.jsx(c("StoriesCloseButton.react"), {}),
        ],
      });
      e
        ? (l = h.jsxs("div", {
            className: g,
            children: [
              b,
              h.jsx("div", {
                className: f,
                style: k,
                children: h.jsx("div", {
                  className: i,
                  children: h.jsx(
                    c("StoriesSuspenseViewerSheetPlaceholder.react"),
                    {
                      openSource: c("StoriesLoggingConstants").ACTION_SOURCE
                        .ARCHIVE,
                      toggleViewerSheet: j,
                    }
                  ),
                }),
              }),
            ],
          }))
        : (l = b);
      return a
        ? null
        : h.jsxs("div", {
            children: [
              h.jsx("div", {
                className: "k4urcfbm pmk7jnqg datstx6m tqsryivl",
              }),
              h.jsx("div", {
                className:
                  "kr520xx4 j9ispegn pmk7jnqg stjgntxs ni8dbmo4 taijpn5t n7fi1qx3 j83agx80 i09qtzwb bp9cbjyn",
                children: l,
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
  "StoriesSuspenseContentSlidingTransition.react",
  [
    "CometPlaceholder.react",
    "MWChatOnMediaVisibilityOverrideContext",
    "StoriesCloseButton.react",
    "StoriesLoggerSession",
    "StoriesLoggingConstants",
    "StoriesSuspenseViewerSheetPlaceholder.react",
    "react",
    "useCometWindowFitNavPaneAndViewerSheet",
    "useMWIsCurrentRouteMediaViewerExperiment",
    "useShouldShowMessagingEntrypointOnCurrentRoute",
    "useStoriesViewerSheetAnimation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.children;
      a = a.viewerSheet;
      var e = c("useCometWindowFitNavPaneAndViewerSheet")(),
        f = c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT"),
        g = c("useMWIsCurrentRouteMediaViewerExperiment")();
      g = d(
        "MWChatOnMediaVisibilityOverrideContext"
      ).useMWChatOnMediaVisibilityOverride(g);
      f = f && g;
      g =
        d("StoriesLoggerSession").getOpenViewerSource() ===
        c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE;
      g = g;
      g = c("useStoriesViewerSheetAnimation")(g, e, f);
      e = g.closeButtonStyle;
      f = g.contentPaneStyle;
      var j = g.placeholderStyle,
        k = g.setDisplaySideRail,
        l = g.viewerSheetInlineStyle;
      g = g.viewerSheetStyle;
      var m = i(
        function () {
          return h.jsx("div", {
            className: j,
            children: h.jsx(c("StoriesSuspenseViewerSheetPlaceholder.react"), {
              toggleViewerSheet: k,
            }),
          });
        },
        [j, k]
      );
      return h.jsxs("div", {
        className: f,
        children: [
          b,
          h.jsx("div", {
            className: e,
            children: h.jsx(c("StoriesCloseButton.react"), {}),
          }),
          h.jsx("div", {
            className: g,
            style: l,
            children: h.jsx(c("CometPlaceholder.react"), {
              fallback: h.jsx(m, {}),
              children: a(k),
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
  "useStoriesSuspenseKeyHandler",
  [
    "CometKeys",
    "StoriesEnums",
    "StoriesLoggingConstants",
    "StoriesPauseReasons",
    "StoriesSuspenseContuxActionsContext",
    "StoriesSuspenseKeyboardContext",
    "StoriesSuspensePauseContext",
    "react",
    "useStoriesViewerClose",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useEffect,
      k = b.useRef;
    function a() {
      var a = k(null),
        b = i(c("StoriesSuspenseKeyboardContext")),
        e = b.addSubscriber;
      b = i(c("StoriesSuspenseContuxActionsContext"));
      var f = b.performBucketNavigation,
        g = b.performCardNavigation;
      b = i(c("StoriesSuspensePauseContext"));
      var l = b.isPaused,
        m = b.setPause,
        n = c("useStoriesViewerClose")(),
        o = h(
          function (a) {
            switch (a.key) {
              case c("CometKeys").LEFT:
              case c("CometKeys").UP:
                a.shift === !0
                  ? f(d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET)
                  : g(
                      d("StoriesEnums").NAV_DIRECTIONS.PREV_CARD,
                      c("StoriesLoggingConstants").NAVIGATION_GESTURE
                        .TAP_BACKWARD
                    );
                break;
              case c("CometKeys").RIGHT:
              case c("CometKeys").DOWN:
                a.shift === !0
                  ? f(d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET)
                  : g(
                      d("StoriesEnums").NAV_DIRECTIONS.NEXT_CARD,
                      c("StoriesLoggingConstants").NAVIGATION_GESTURE
                        .TAP_FORWARD
                    );
                break;
              case c("CometKeys").SPACE:
                m(!l, d("StoriesPauseReasons").KEYBOARD);
                break;
              case c("CometKeys").ESCAPE:
                m(!0, d("StoriesPauseReasons").VISIBILITY_CHANGE);
                n(
                  c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.KEYBOARD_EXIT
                );
                break;
            }
          },
          [n, l, f, g, m]
        );
      j(
        function () {
          var b = function () {
            a.current && a.current();
          };
          b();
          a.current = e(o);
          return b;
        },
        [e, o]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseNavigationButtons.react",
  [
    "StoriesEnums",
    "StoriesLoggingConstants",
    "StoriesNavigationButton.react",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseContuxActionsContext",
    "StoriesSuspenseContuxContext",
    "react",
    "useStoriesSuspenseKeyHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      a = a.children;
      var b = i(c("StoriesSuspenseContuxContext")),
        e = b.isFirstCard,
        f = b.isLastCard;
      b = b.isStoryOverlayActive;
      c("useStoriesSuspenseKeyHandler")();
      var g = i(c("StoriesSuspenseBucketDataContext"));
      g = g.bucketData;
      var j = g.isFirstBucket;
      g = g.isLastBucket;
      var k = i(c("StoriesSuspenseContuxActionsContext")),
        l = k.performCardNavigation;
      k = h.jsx(
        c("StoriesNavigationButton.react"),
        {
          direction: e
            ? d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET
            : d("StoriesEnums").NAV_DIRECTIONS.PREV_CARD,
          disabled: (j && e) || b,
          onClick: function () {
            window.requestAnimationFrame(function () {
              l(
                d("StoriesEnums").NAV_DIRECTIONS.PREV_CARD,
                c("StoriesLoggingConstants").NAVIGATION_GESTURE.TAP_BACKWARD
              );
            });
          },
        },
        "prev"
      );
      j = h.jsx(
        c("StoriesNavigationButton.react"),
        {
          direction: f
            ? d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET
            : d("StoriesEnums").NAV_DIRECTIONS.NEXT_CARD,
          disabled: (g && f) || b,
          onClick: function () {
            window.requestAnimationFrame(function () {
              l(
                d("StoriesEnums").NAV_DIRECTIONS.NEXT_CARD,
                c("StoriesLoggingConstants").NAVIGATION_GESTURE.TAP_FORWARD
              );
            });
          },
        },
        "next"
      );
      return h.jsxs("div", {
        className: "k4urcfbm taijpn5t datstx6m btwxx1t3 j83agx80 bp9cbjyn",
        children: [k, a, j],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseViewerKeyboardListener.react",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "StoriesSuspenseKeyboardContext",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useMemo,
      m = b.useRef,
      n = {
        wrapper: {
          display: "j83agx80",
          flexBasis: "rj1gh0hx",
          flexGrow: "buofh1pr",
          flexShrink: "g5gj957u",
          outline: "lzcic4wl",
        },
      },
      o = h._("View previous story"),
      p = h._("View previous person's story"),
      q = h._("View next story"),
      r = h._("View next person's story"),
      s = h._("Pause story"),
      t = h._("Close story");
    function a(a) {
      a = a.children;
      var b = m([]),
        d = l(function () {
          var a = function (a) {
            return {
              command: a,
              handler: function () {
                b.current.forEach(function (b) {
                  return b(a);
                });
              },
            };
          };
          return [
            babelHelpers["extends"]({}, a({ key: c("CometKeys").LEFT }), {
              description: o,
            }),
            babelHelpers["extends"](
              {},
              a({ key: c("CometKeys").LEFT, shift: !0 }),
              { description: p }
            ),
            babelHelpers["extends"]({}, a({ key: c("CometKeys").UP }), {
              description: o,
            }),
            babelHelpers["extends"](
              {},
              a({ key: c("CometKeys").UP, shift: !0 }),
              { description: p }
            ),
            babelHelpers["extends"]({}, a({ key: c("CometKeys").RIGHT }), {
              description: q,
            }),
            babelHelpers["extends"](
              {},
              a({ key: c("CometKeys").RIGHT, shift: !0 }),
              { description: r }
            ),
            babelHelpers["extends"]({}, a({ key: c("CometKeys").DOWN }), {
              description: q,
            }),
            babelHelpers["extends"](
              {},
              a({ key: c("CometKeys").DOWN, shift: !0 }),
              { description: r }
            ),
            babelHelpers["extends"]({}, a({ key: c("CometKeys").SPACE }), {
              description: s,
            }),
            babelHelpers["extends"]({}, a({ key: c("CometKeys").ESCAPE }), {
              description: t,
              isHiddenCommand: !0,
              shouldStopPropagation: !1,
            }),
          ];
        }, []),
        e = m(null);
      k(function () {
        window.setTimeout(function () {
          e.current && e.current.focus();
        });
      }, []);
      var f = j(
        function (a) {
          var c = b.current;
          c.push(a);
          return function () {
            var b = c.indexOf(a);
            b > -1 && c.splice(b, 1);
          };
        },
        [b]
      );
      return i.jsx(c("CometComponentWithKeyCommands.react"), {
        commandConfigs: d,
        xstyle: n.wrapper,
        children: i.jsx(c("StoriesSuspenseKeyboardContext").Provider, {
          value: { addSubscriber: f },
          children: i.jsx("div", {
            className: c("stylex")(n.wrapper),
            "data-testid": void 0,
            ref: e,
            tabIndex: -1,
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
  "StoriesSuspenseBucketTransitioningContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      isBucketTransitionInProgress: !1,
      setIsBucketTransitionInProgress: function () {},
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "useBucketChanged",
  ["react", "usePrevious"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      var b = c("usePrevious")(a),
        d = h(
          function () {
            return b !== a && a != null && a !== "";
          },
          [a, b]
        ),
        e = h(
          function () {
            return b !== a && a != null && a !== "" && b != null && b !== "";
          },
          [a, b]
        );
      return { bucketChanged: d, bucketChangedFromAnotherBucket: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSuspenseCards",
  ["orEmptyArray", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a, b) {
      return h(
        function () {
          function d() {
            return h().length;
          }
          function e() {
            return h()[Math.max(Math.min(b, d() - 1), 0)];
          }
          function f() {
            return h()[b + 1];
          }
          function g() {
            return h()[0];
          }
          function h() {
            return c("orEmptyArray")(a);
          }
          return {
            getCardAtCurrentIndex: e,
            getCount: d,
            getFirstCard: g,
            getNextCard: f,
          };
        },
        [b, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesBehaviorHelpContextProvider.react",
  [
    "CometRelay",
    "StoriesActorContext",
    "StoriesBehaviorHelpContext",
    "StoriesBehaviorHelpContextProvider_bucket.graphql",
    "StoriesBehaviorHelpContextProvider_owner.graphql",
    "StoriesBehaviorHelpers",
    "StoriesEnums",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useContext,
      l = e.useMemo;
    function a(a) {
      var e = a.bucketRef,
        f = a.children;
      a = a.ownerRef;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesBehaviorHelpContextProvider_owner.graphql")),
        a
      );
      e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesBehaviorHelpContextProvider_bucket.graphql")),
        e
      );
      var g = e == null ? void 0 : e.story_bucket_type,
        m = a == null ? void 0 : a.id;
      e = a == null ? void 0 : a.viewer_profile_permissions;
      var n = e != null && e.includes("EDIT_PROFILE");
      a = k(c("StoriesActorContext"));
      var o = a.actorID;
      e = l(
        function () {
          return {
            canAddToStory: function () {
              return (
                g !== d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY &&
                d("StoriesBehaviorHelpers").canAddToStory(m, o)
              );
            },
            canSeeViewerSheet: function () {
              return d("StoriesBehaviorHelpers").canSeeViewerSheet(g, m, n, o);
            },
            getBucketType: function () {
              return g || "STORY";
            },
            isSelfStory: function () {
              return d("StoriesBehaviorHelpers").isSelfStory(m, o);
            },
            whichViewerSheet: function () {
              return d("StoriesBehaviorHelpers").whichViewerSheet(g, m, n, o);
            },
          };
        },
        [o, g, m, n]
      );
      return j.jsx(c("StoriesBehaviorHelpContext").Provider, {
        value: e,
        children: f,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesViewerSheetContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { canAddToStory: !1, storiesPreviewUriList: [] };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "StoriesCometViewerV3Placeholder.react",
  [
    "StoriesBucketLoadingView.react",
    "StoriesEnums",
    "react",
    "stylex",
    "useStoriesSuspenseProcessRoute",
    "useStoriesViewerDimensions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    400 * 0.6;
    function a(a) {
      a = a.isCenterPane;
      var b = c("useStoriesSuspenseProcessRoute")(),
        e = b.bucketLength,
        f = b.bucketType;
      b = b.hasSelfBucket;
      var g =
        (b === !0 &&
          (e > 2 ||
            (e === 2 &&
              f ===
                d("StoriesEnums").STORIES_BUCKETS_INDEXER_TYPES.OWNED_SELF))) ||
        (b !== !0 && e > 2);
      f =
        f !== d("StoriesEnums").STORIES_BUCKETS_INDEXER_TYPES.OWNED_SELF &&
        b === !0 &&
        e >= 2;
      b = c("useStoriesViewerDimensions")(f || g);
      e = b.gap;
      var i = b.hasSideBucketSpace,
        j = b.height,
        k = b.sideHeight,
        l = b.sideWidth;
      b = b.width;
      j = h.jsx("div", {
        className:
          "dzlist6r msbwk0y7 flx89l3n ms05siws l9j0dhe7 stjgntxs ni8dbmo4 btwxx1t3 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 puxov6c6 r893ighp oqk3gwch",
        style: {
          height: j,
          marginLeft: i ? e + "px" : 0,
          marginRight: i ? e + "px" : 0,
          width: b,
        },
        children: h.jsx(c("StoriesBucketLoadingView.react"), {}),
      });
      if (a === !0) return j;
      e = { height: k, width: l };
      b = d("StoriesEnums").BACKGROUND_STYLE.DEFAULT;
      return h.jsxs("div", {
        className: c("stylex").dedupe(
          {
            "align-items-1": "bp9cbjyn",
            "background-color-1": "tqsryivl",
            "display-1": "j83agx80",
            "flex-direction-1": "btwxx1t3",
            "height-1": "datstx6m",
            "justify-content-1": "taijpn5t",
            "width-1": "k4urcfbm",
          },
          b === d("StoriesEnums").BACKGROUND_STYLE.BLACK
            ? { "background-color-1": "tqsryivl" }
            : null
        ),
        children: [
          i &&
            h.jsx("div", {
              className:
                "dzlist6r msbwk0y7 flx89l3n ms05siws l9j0dhe7 stjgntxs ni8dbmo4 btwxx1t3 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 qwwmc0zo r3dnv1gl qrcwvkkj",
              style: e,
              children:
                f &&
                h.jsx(c("StoriesBucketLoadingView.react"), {
                  isBackgroundBucket: !0,
                }),
            }),
          j,
          i &&
            h.jsx("div", {
              className:
                "dzlist6r msbwk0y7 flx89l3n ms05siws l9j0dhe7 stjgntxs ni8dbmo4 btwxx1t3 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 qwwmc0zo r3dnv1gl qrcwvkkj",
              style: e,
              children:
                g &&
                h.jsx(c("StoriesBucketLoadingView.react"), {
                  isBackgroundBucket: !0,
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
  "StoriesCometSuspenseRootWrapper.react",
  [
    "CometPlaceholder.react",
    "CometRouteParams",
    "CometRouteRenderType",
    "StoriesCometPlaceholder.react",
    "StoriesCometViewerV3Placeholder.react",
    "StoriesGating",
    "StoriesResizeToView.react",
    "StoriesTrayLoggerSessionProvider",
    "StoriesUtils",
    "StoriesViewerOpenAnimationContextProvider.react",
    "react",
    "stylex",
    "useCometWindowSize",
    "useRoutePassthroughProps",
    "useToggleChatTabsOnMountUnmount",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.trackingString;
      c("useToggleChatTabsOnMountUnmount")();
      var e = d("CometRouteRenderType").useIsHosted(),
        f = d("CometRouteParams").useRouteParams(),
        g = c("useRoutePassthroughProps")() || {};
      f = typeof f.bucket_id === "string" ? f.bucket_id : "";
      g =
        typeof (g == null ? void 0 : g.getTilePosition) === "function"
          ? g.getTilePosition()
          : void 0;
      var i = f === "",
        j = c("useCometWindowSize")();
      return d("StoriesUtils").shouldResizeToViewStories(j.innerHeight) &&
        !d("StoriesGating").shouldShowViewerV3()
        ? h.jsx(c("StoriesResizeToView.react"), {})
        : h.jsx("div", {
            className: c("stylex").dedupe(
              e
                ? {
                    "display-1": "j83agx80",
                    "flex-basis-1": "rj1gh0hx",
                    "flex-grow-1": "buofh1pr",
                    "flex-shrink-1": "g5gj957u",
                    "position-1": "l9j0dhe7",
                  }
                : {},
              e
                ? null
                : {
                    "bottom-1": "i09qtzwb",
                    "display-1": "j83agx80",
                    "end-1": "n7fi1qx3",
                    "position-1": "pmk7jnqg",
                    "start-1": "j9ispegn",
                    "top-1": "kr520xx4",
                  }
            ),
            children: h.jsx(c("CometPlaceholder.react"), {
              fallback: d("StoriesGating").shouldShowViewerV3()
                ? h.jsx(c("StoriesCometViewerV3Placeholder.react"), {})
                : h.jsx(c("StoriesCometPlaceholder.react"), { isNullState: i }),
              children: h.jsx(
                c("StoriesViewerOpenAnimationContextProvider.react"),
                {
                  tilePosition: g,
                  children: h.jsx(c("StoriesTrayLoggerSessionProvider"), {
                    trackingStrings: new Map([[f, a]]),
                    children: b,
                  }),
                }
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
  "StoriesCometSuspenseRoot.react",
  [
    "StoriesCometSuspenseRootWrapper.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
    "useStoriesSuspenseProcessRoute",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "StoriesViewerSuspenseWithEntryPoint.react"
        ).__setRef("StoriesCometSuspenseRoot.react")
      );
    function a(a) {
      a = a.queries;
      var b = c("useStoriesSuspenseProcessRoute")(),
        d = b.bucketID,
        e = b.cardID,
        f = b.source,
        g = b.trackingString,
        j = b.traySessionID,
        k = b.viewerSessionID;
      b = b.viewSingle;
      return h.jsx(c("StoriesCometSuspenseRootWrapper.react"), {
        trackingString: g,
        children: h.jsx(i, {
          bucketID: d,
          cardID: e,
          openSource: f,
          queries: a,
          traySessionID: j,
          viewSingle: b,
          viewerSessionID: k,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseViewerSheetPreviewTray.react",
  [
    "StoriesActorContext",
    "StoriesBehaviorHelpContext",
    "StoriesEnums",
    "StoriesLoggingConstants",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseContuxActionsContext",
    "StoriesSuspenseContuxContext",
    "StoriesViewerSheetContext",
    "StoriesViewerSheetPreviewAddStory.react",
    "StoriesViewerSheetSection.react",
    "StoriesViewerSheetStoryPreview.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = 132,
      k = 99,
      l = 1.15152,
      m = 12,
      n = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "ProfileCometFeaturedHighlightsEditCollectionButton.react"
        ).__setRef("StoriesSuspenseViewerSheetPreviewTray.react")
      );
    function a() {
      var a = i(c("StoriesActorContext"));
      a = a.actorID;
      var b = i(c("StoriesSuspenseContuxActionsContext")),
        e = b.cardIndexChanged;
      b = i(c("StoriesSuspenseContuxContext"));
      var f = b.cardIndex;
      b = i(c("StoriesViewerSheetContext"));
      var g = b.canAddToStory;
      b = b.storiesPreviewUriList;
      var o = i(c("StoriesBehaviorHelpContext")).getBucketType(),
        p = i(c("StoriesSuspenseBucketDataContext"));
      p = p.bucketData.bucketID;
      var q = function (a, b) {
          if (a) return;
          e(b, c("StoriesLoggingConstants").NAVIGATION_GESTURE.VIEWER_SHEET);
        },
        r = f > 1 ? -(f - 1) * (k + m) : 0;
      return h.jsxs(c("StoriesViewerSheetSection.react"), {
        children: [
          h.jsxs("div", {
            className:
              "ejg0drik heur4gxb flx89l3n dpja2al7 l9j0dhe7 tw6a2znq jbae33se d1544ag0 bjjx79mm py5xhhw8 j83agx80 bp9cbjyn",
            style: { transform: "translateX(" + r + "px)" },
            children: [
              b.map(function (a, b) {
                var d = a.caption,
                  e = a.contentID,
                  g = a.storyID,
                  i = a.uri;
                a = a.warningScreen;
                if (i == null) return null;
                var m = b === f;
                return h.jsx(
                  "div",
                  {
                    className: "tvfksri0",
                    children: h.jsx(c("StoriesViewerSheetStoryPreview.react"), {
                      activeScale: l,
                      caption: d,
                      contentID: e,
                      height: j,
                      index: b,
                      isActive: m,
                      onClick: q,
                      previewImageURI: i,
                      storyID: g,
                      warningScreen: a,
                      width: k,
                    }),
                  },
                  b
                );
              }),
              g &&
                h.jsx("div", {
                  className: "tvfksri0",
                  children: h.jsx(
                    c("StoriesViewerSheetPreviewAddStory.react"),
                    { height: j, width: k }
                  ),
                }),
            ],
          }),
          o === d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY &&
          a != null
            ? h.jsx("div", {
                className: "jb3vyjys tw6a2znq d1544ag0 f10w8fjw",
                children: h.jsx(n, { collectionID: p, profileID: a }),
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
  "StoriesSuspenseViewerSheetViewerList.react",
  [
    "CometRelay",
    "StoriesBehaviorHelpContext",
    "StoriesEnums",
    "StoriesSuspensePauseContext",
    "StoriesSuspenseViewerSheetViewerList_card.graphql",
    "StoriesViewerSheetSection.react",
    "StoriesViewerSheetViewerListContent.react",
    "StoriesViewerSheetViewerListHeader.react",
    "react",
    "storiesUpdateStorySeenReceiptsLastSeenTimeMutation",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect;
    function a(a) {
      a = a.card;
      var e = d("CometRelay").useRelayEnvironment(),
        f = j(c("StoriesSuspensePauseContext"));
      f = f.setPause;
      var g = j(c("StoriesBehaviorHelpContext")).getBucketType();
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesSuspenseViewerSheetViewerList_card.graphql")),
        a
      );
      var l = a == null ? void 0 : a.id,
        m = c("usePrevious")(l);
      k(
        function () {
          m !== l &&
            l !== "" &&
            m !== "" &&
            m != null &&
            g !== d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY &&
            c("storiesUpdateStorySeenReceiptsLastSeenTimeMutation")(e, m);
          return function () {
            l !== "" &&
              l != null &&
              g !== d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY &&
              c("storiesUpdateStorySeenReceiptsLastSeenTimeMutation")(e, l);
          };
        },
        [g, l, e, m]
      );
      return l == null
        ? null
        : i.jsxs(c("StoriesViewerSheetSection.react"), {
            showSectionLine: !1,
            children: [
              i.jsx(c("StoriesViewerSheetViewerListHeader.react"), {
                cardSeenState: a,
              }),
              i.jsx(c("StoriesViewerSheetViewerListContent.react"), {
                cardID: l,
                overlays: a,
                seenState: a,
                setPause: f,
                viewerList: a,
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
  "StoriesSuspenseViewerSheetSelfStoryContent.react",
  [
    "CometRelay",
    "StoriesEnums",
    "StoriesSuspenseViewerSheetPreviewTray.react",
    "StoriesSuspenseViewerSheetSelfStoryContent_bucket.graphql",
    "StoriesSuspenseViewerSheetSelfStoryContent_card.graphql",
    "StoriesSuspenseViewerSheetViewerList.react",
    "StoriesViewerSheetHeader.react",
    "StoriesViewerSheetPollResult.react",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    function a(a) {
      var e = a.bucket;
      a = a.card;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "StoriesSuspenseViewerSheetSelfStoryContent_bucket.graphql"
            )),
        e
      );
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesSuspenseViewerSheetSelfStoryContent_card.graphql")),
        a
      );
      var f = c("orEmptyArray")(a == null ? void 0 : a.story_overlays);
      f = f.find(function (a) {
        return (
          a.__typename === d("StoriesEnums").STORY_OVERLAY_TYPES.POLL_STICKER
        );
      });
      return j.jsxs("div", {
        className: "e9vueds3",
        children: [
          j.jsx(c("StoriesViewerSheetHeader.react"), {
            children: e == null ? void 0 : e.name,
          }),
          j.jsx(c("StoriesSuspenseViewerSheetPreviewTray.react"), {}),
          j.jsx(c("StoriesViewerSheetPollResult.react"), { overlayPoll: f }),
          j.jsx(c("StoriesSuspenseViewerSheetViewerList.react"), { card: a }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useViewerSheetPreviewImageURIList",
  [
    "CometRelay",
    "StoriesEnums",
    "react",
    "useViewerSheetPreviewImageURIList_previewURIs.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useMemo;
    function a(a) {
      var c = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useViewerSheetPreviewImageURIList_previewURIs.graphql")),
        a
      );
      return i(
        function () {
          var a = [];
          if (c != null) {
            var b = new Set(Object.values(d("StoriesEnums").STORY_MEDIA_TYPES));
            c.forEach(function (c) {
              var d, e, f, g;
              if (c == null) return;
              d =
                (d = c.attachments) == null
                  ? void 0
                  : d.filter(function (a) {
                      return b.has(
                        (a = a.media) == null ? void 0 : a.__typename
                      );
                    });
              e =
                (e =
                  d == null
                    ? void 0
                    : (e = d[0]) == null
                    ? void 0
                    : (e = e.media) == null
                    ? void 0
                    : e.accessibility_caption) != null
                  ? e
                  : "";
              f =
                d == null
                  ? void 0
                  : (f = d[0]) == null
                  ? void 0
                  : (f = f.media) == null
                  ? void 0
                  : f.id;
              c = c.id;
              g =
                (g =
                  d == null
                    ? void 0
                    : (g = d[0]) == null
                    ? void 0
                    : (g = g.media) == null
                    ? void 0
                    : (g = g.previewImage) == null
                    ? void 0
                    : g.uri) != null
                  ? g
                  : "";
              d =
                d == null
                  ? void 0
                  : (d = d[0]) == null
                  ? void 0
                  : (d = d.media) == null
                  ? void 0
                  : (d = d.cix_screen) == null
                  ? void 0
                  : d.view_model;
              a.push({
                caption: e,
                contentID: f,
                storyID: c,
                uri: g,
                warningScreen: d,
              });
            });
          }
          return a;
        },
        [c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "DeleteMediaAttemptedFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743549");
    c = b("FalcoLoggerInternal").create("delete_media_attempted", a);
    e.exports = c;
  },
  null
);
__d(
  "OpenMediaFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744082");
    c = b("FalcoLoggerInternal").create("open_media", a);
    e.exports = c;
  },
  null
);
__d(
  "OpenSeenSummaryFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744083");
    c = b("FalcoLoggerInternal").create("open_seen_summary", a);
    e.exports = c;
  },
  null
);
__d(
  "FBStoriesBanzaiConstants",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      IMPRESSION: "xtrackable:clientview_batch",
      TIMESPENT: "xtrackable:duration",
    });
    f["default"] = a;
  },
  66
);
__d(
  "StoriesModuleStoryViewerThreadTransitionTtiWwwQPLEvent",
  ["cr:4504"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:4504");
  },
  98
);
__d(
  "StoriesModuleStoryViewerThreadTransitionTtiWwwQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(13238356);
    g["default"] = a;
  },
  98
);
