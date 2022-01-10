if (self.CavalryLogger) {
  CavalryLogger.start_js(["7+3qA9q"]);
}

__d(
  "StoriesCometPrivacySelectorDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3734141060038629",
        metadata: {},
        name: "StoriesCometPrivacySelectorDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCreateQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "satpScale" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comet_composer_video_uploader_config",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        e = { enumValues: null, nullable: !0, plural: !1, type: "String" },
        f = { enumValues: null, nullable: !0, plural: !1, type: "ID" },
        g = { enumValues: null, nullable: !0, plural: !1, type: "Float" },
        h = { enumValues: null, nullable: !0, plural: !1, type: "Image" },
        i = { enumValues: null, nullable: !0, plural: !1, type: "Url" },
        j = { enumValues: null, nullable: !0, plural: !1, type: "Color" };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "StoriesCreateQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useStoriesCreateFormSteps",
            },
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [b],
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
          name: "StoriesCreateQuery",
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
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
                          alias: null,
                          args: null,
                          concreteType: "StreetAddress",
                          kind: "LinkedField",
                          name: "address",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "single_line_full_address",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Location",
                          kind: "LinkedField",
                          name: "location",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "latitude",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "longitude",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Phone",
                          kind: "LinkedField",
                          name: "all_phones",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "PhoneNumber",
                              kind: "LinkedField",
                              name: "phone_number",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "universal_number",
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
                          name: "websites",
                          storageKey: null,
                        },
                      ],
                      type: "Page",
                      abstractKey: null,
                    },
                    c,
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
                        { kind: "Literal", name: "width", value: 60 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "profile_picture",
                      plural: !1,
                      selections: d,
                      storageKey: null,
                    },
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
                b,
              ],
              storageKey: null,
            },
            {
              if: null,
              kind: "Defer",
              label:
                "useStoriesCreateFormEditorRoot$defer$StoriesCreateFormSATP",
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Literal",
                      name: "categories",
                      value: ["TEXT_BASE"],
                    },
                  ],
                  concreteType: "Collection",
                  kind: "LinkedField",
                  name: "visual_composer_satp_collections",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextFormatMetadata",
                      kind: "LinkedField",
                      name: "presets",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "preset_id",
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
                            c,
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
                          args: [
                            {
                              kind: "Variable",
                              name: "scale",
                              variableName: "satpScale",
                            },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "portrait_background_image",
                          plural: !1,
                          selections: d,
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
                          name: "color",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "custom_thumbnail",
                          plural: !1,
                          selections: d,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "background_description",
                          storageKey: null,
                        },
                        {
                          alias: "default_thumbnail",
                          args: [
                            { kind: "Literal", name: "height", value: 32 },
                            { kind: "Literal", name: "scale", value: 1 },
                            { kind: "Literal", name: "width", value: 32 },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "background_image",
                          plural: !1,
                          selections: d,
                          storageKey:
                            "background_image(height:32,scale:1,width:32)",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "collection_name",
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
                  ],
                  storageKey:
                    'visual_composer_satp_collections(categories:["TEXT_BASE"])',
                },
              ],
            },
          ],
        },
        params: {
          id: "3700200173421611",
          metadata: {
            relayTestingSelectionTypeInfo: {
              viewer: {
                enumValues: null,
                nullable: !0,
                plural: !1,
                type: "Viewer",
              },
              "viewer.actor": {
                enumValues: null,
                nullable: !0,
                plural: !1,
                type: "Actor",
              },
              "viewer.actor.__typename": {
                enumValues: null,
                nullable: !1,
                plural: !1,
                type: "String",
              },
              "viewer.actor.address": {
                enumValues: null,
                nullable: !0,
                plural: !1,
                type: "StreetAddress",
              },
              "viewer.actor.address.single_line_full_address": e,
              "viewer.actor.all_phones": {
                enumValues: null,
                nullable: !1,
                plural: !0,
                type: "Phone",
              },
              "viewer.actor.all_phones.phone_number": {
                enumValues: null,
                nullable: !0,
                plural: !1,
                type: "PhoneNumber",
              },
              "viewer.actor.all_phones.phone_number.universal_number": e,
              "viewer.actor.id": f,
              "viewer.actor.location": {
                enumValues: null,
                nullable: !0,
                plural: !1,
                type: "Location",
              },
              "viewer.actor.location.latitude": g,
              "viewer.actor.location.longitude": g,
              "viewer.actor.name": e,
              "viewer.actor.profile_picture": h,
              "viewer.actor.profile_picture.uri": i,
              "viewer.actor.websites": {
                enumValues: null,
                nullable: !1,
                plural: !0,
                type: "Url",
              },
              "viewer.comet_composer_video_uploader_config": e,
              visual_composer_satp_collections: {
                enumValues: null,
                nullable: !1,
                plural: !0,
                type: "Collection",
              },
              "visual_composer_satp_collections.collection_name": {
                enumValues: null,
                nullable: !0,
                plural: !1,
                type: "TextWithEntities",
              },
              "visual_composer_satp_collections.collection_name.text": e,
              "visual_composer_satp_collections.presets": {
                enumValues: null,
                nullable: !1,
                plural: !0,
                type: "TextFormatMetadata",
              },
              "visual_composer_satp_collections.presets.background_color": j,
              "visual_composer_satp_collections.presets.background_description":
                e,
              "visual_composer_satp_collections.presets.background_gradient_color":
                j,
              "visual_composer_satp_collections.presets.background_gradient_direction":
                e,
              "visual_composer_satp_collections.presets.color": j,
              "visual_composer_satp_collections.presets.custom_thumbnail": h,
              "visual_composer_satp_collections.presets.custom_thumbnail.uri":
                i,
              "visual_composer_satp_collections.presets.default_thumbnail": h,
              "visual_composer_satp_collections.presets.default_thumbnail.uri":
                i,
              "visual_composer_satp_collections.presets.inspirations_custom_font_object":
                {
                  enumValues: null,
                  nullable: !0,
                  plural: !1,
                  type: "InspirationsCustomFont",
                },
              "visual_composer_satp_collections.presets.inspirations_custom_font_object.font_name":
                e,
              "visual_composer_satp_collections.presets.inspirations_custom_font_object.font_postscript_name":
                e,
              "visual_composer_satp_collections.presets.inspirations_custom_font_object.font_url":
                i,
              "visual_composer_satp_collections.presets.inspirations_custom_font_object.id":
                f,
              "visual_composer_satp_collections.presets.inspirations_custom_font_object.preferred_font_size":
                { enumValues: null, nullable: !0, plural: !1, type: "Int" },
              "visual_composer_satp_collections.presets.portrait_background_image":
                h,
              "visual_composer_satp_collections.presets.portrait_background_image.uri":
                i,
              "visual_composer_satp_collections.presets.preset_id": f,
            },
          },
          name: "StoriesCreateQuery",
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
  "StoriesCreateFormBodyWrapper_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "StoriesCreateFormBodyWrapper_data",
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
              concreteType: null,
              kind: "LinkedField",
              name: "actor",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [
                    { kind: "Variable", name: "scale", variableName: "scale" },
                    { kind: "Literal", name: "width", value: 60 },
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
                  name: "name",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesCreateFormEditorRoot.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useStoriesCreateFormEditorRoot",
      selections: [
        { args: null, kind: "FragmentSpread", name: "StoriesCreateCTALink" },
        {
          kind: "Defer",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesCreateFormSATP",
            },
          ],
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCreateFormBodyWrapper_data",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesCreateFormSteps.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useStoriesCreateFormSteps",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useStoriesCreateFormEditorRoot",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useStoriesCreateFormTypeChooser",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesCreateFormTypeChooser.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useStoriesCreateFormTypeChooser",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesCreateFormBodyWrapper_data",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesCreateSATPPreviewQuery.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "cardID" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        c = [{ kind: "Variable", name: "id", variableName: "cardID" }],
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
          name: "color",
          storageKey: null,
        },
        f = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        g = {
          args: null,
          fragment: b(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
          ),
          kind: "FragmentSpread",
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = { kind: "Variable", name: "scale", variableName: "scale" };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "StoriesCreateSATPPreviewQuery",
          selections: [
            {
              alias: "card",
              args: c,
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
                          name: "StoriesCardComposerFormat_message",
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "StoriesCardComposerFormat_story",
                    },
                  ],
                  type: "Story",
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
          name: "StoriesCreateSATPPreviewQuery",
          selections: [
            {
              alias: "card",
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                d,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "StoryBackgroundInfo",
                      kind: "LinkedField",
                      name: "story_default_background",
                      plural: !1,
                      selections: [
                        e,
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
                          selections: f,
                          storageKey: null,
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
                        g,
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
                        e,
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
                            h,
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [i],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "portrait_background_image",
                          plural: !1,
                          selections: f,
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
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "activity_description",
                      plural: !1,
                      selections: [g],
                      storageKey: null,
                    },
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
                                    {
                                      kind: "Literal",
                                      name: "height",
                                      value: 16,
                                    },
                                    i,
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 16,
                                    },
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "image",
                                  plural: !1,
                                  selections: f,
                                  storageKey: null,
                                },
                                h,
                              ],
                              storageKey: null,
                            },
                            h,
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
                        d,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "entity_id",
                          storageKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [h],
                          type: "Node",
                          abstractKey: "__isNode",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "Story",
                  abstractKey: null,
                },
                h,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4288747801219448",
          metadata: {},
          name: "StoriesCreateSATPPreviewQuery",
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
  "CometCreationResponsiveToggle.react",
  ["fbt", "ix", "TetraIcon.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.layout,
        e = a.onChangeLayout;
      return j.jsxs("div", {
        className: "tr9rh885 dhix69tm wkznzc2l taijpn5t j83agx80",
        children: [
          j.jsx("div", {
            className: "wkznzc2l",
            children: j.jsx(c("TetraIcon.react"), {
              "aria-label": h._("Switch to desktop layout"),
              "aria-pressed": b === "desktop",
              color: b === "desktop" ? "highlight" : "secondary",
              icon: d("fbicon")._(i("607956"), 20),
              onPress: function () {
                return e("desktop");
              },
              size: 48,
            }),
          }),
          j.jsx(c("TetraIcon.react"), {
            "aria-label": h._("Switch to mobile layout"),
            "aria-pressed": b === "mobile",
            color: b === "mobile" ? "highlight" : "secondary",
            icon: d("fbicon")._(i("514772"), 20),
            onPress: function () {
              return e("mobile");
            },
            size: 48,
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
  "CometCreationPreviewContainer.react",
  [
    "fbt",
    "CometCard.react",
    "CometCreationResponsiveToggle.react",
    "CometRouteRenderType",
    "CometScreenReaderText.react",
    "CometUnitHeader.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useRef,
      k = b.useState;
    function a(a) {
      var b = a.allowFocus;
      b = b === void 0 ? !1 : b;
      var e = a.children,
        f = a.defaultLayout;
      f = f === void 0 ? "desktop" : f;
      var g = a.hasResponsiveToggle;
      g = g === void 0 ? !0 : g;
      var l = a.logger,
        m = a.onChangeLayout;
      a = k(f);
      f = a[0];
      var n = a[1];
      a = d("CometRouteRenderType").useIsPushView();
      var o = j(null),
        p = j(null),
        q = function (a) {
          l && l(a + "_view_toggle"), m && m(a), n(a);
        },
        r = function (a) {
          a.key === "Tab" &&
            !a.shiftKey &&
            p.current != null &&
            p.current.focus(),
            a.stopPropagation();
        },
        s = function (a) {
          a.key === "Tab" &&
            a.shiftKey &&
            o.current != null &&
            o.current.focus(),
            a.stopPropagation();
        },
        t = function () {
          p.current != null && p.current.focus();
        },
        u = h._(
          "Note: Interactive elements such as links cannot be used in the following preview."
        ),
        v = null,
        w;
      g
        ? ((v =
            f === "desktop" ? h._("Desktop Preview") : h._("Mobile Preview")),
          (w =
            f === "desktop"
              ? h._("Preview in Desktop Layout")
              : h._("Preview in Mobile Layout")))
        : (v = w = h._("Preview"));
      return i.jsxs("div", {
        "aria-label": w,
        className: c("stylex").dedupe(
          {
            "background-color-1": "cwj9ozl2",
            "border-top-start-radius-1": "ue3kfks5",
            "border-top-end-radius-1": "pw54ja7n",
            "border-bottom-end-radius-1": "uo3d90p7",
            "border-bottom-start-radius-1": "l82x9zwi",
            "box-shadow-1": "kmp5kqmu",
            "box-sizing-1": "rq0escxv",
            "display-1": "j83agx80",
            "flex-direction-1": "cbu4d94t",
            "flex-grow-1": "buofh1pr",
            "flex-shrink-1": "g5gj957u",
            "height-1": "datstx6m",
            "margin-top-1": "bcvklqu9",
            "margin-end-1": "gupp8or6",
            "margin-bottom-1": "nzypyw8j",
            "margin-start-1": "frluczxc",
            "max-width-1": "rdhfdfv2",
            "min-height-1": "tgvbjcpo",
            "width-1": "ng3hk9f3",
          },
          f === "mobile" ? { "width-1": "om55ty98" } : null,
          a ? { "margin-top-1": "k9knd09w" } : null
        ),
        role: "region",
        children: [
          i.jsxs("div", {
            className: "taijpn5t j83agx80 bp9cbjyn",
            children: [
              i.jsx("div", {
                className: "g5gj957u buofh1pr rj1gh0hx",
                children: i.jsx(c("CometUnitHeader.react"), {
                  headline: v,
                  level: 4,
                }),
              }),
              g &&
                i.jsx(c("CometCreationResponsiveToggle.react"), {
                  layout: f,
                  onChangeLayout: q,
                }),
            ],
          }),
          !b &&
            i.jsxs(i.Fragment, {
              children: [
                i.jsx(c("CometScreenReaderText.react"), { text: u }),
                i.jsx("div", { onKeyDownCapture: r, ref: o, tabIndex: "0" }),
              ],
            }),
          i.jsx("div", {
            className:
              "stjgntxs dhix69tm sjgh65i0 wkznzc2l tr9rh885 buofh1pr rj1gh0hx j83agx80 jcgfde61 afxsp9o4 ed0hlay0 frvqaej8 mk2mc5f4 s44p3ltw ccm00jje goun2846 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 rj06g9kl qc3rp1z7 bv6zxntz t51s4qs2",
            onFocus: b ? null : t,
            onKeyDownCapture: b ? null : r,
            tabIndex: b ? -1 : 0,
            children: i.jsx(c("CometCard.react"), {
              background: "light-wash",
              expanding: !0,
              children: i.jsx("div", {
                className: "eg9m0zos ni8dbmo4 datstx6m",
                children: i.jsx("div", {
                  className: "datstx6m" + (b ? "" : " hzruof5a"),
                  children: e,
                }),
              }),
            }),
          }),
          !b && i.jsx("div", { onKeyDownCapture: s, ref: p, tabIndex: "0" }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getCometCreationLayoutBreadcrumbs",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a, b, c, d, e) {
      var f = [b != null ? { label: a, replace: !0, url: b } : { label: a }];
      b = function (a) {
        if (d[a].hideBreadcrumb !== !0) {
          var b = { label: d[a].title, onPress: void 0 };
          a !== c &&
            (b.onPress = function () {
              return e(a);
            });
          f.push(b);
        }
      };
      for (var a = 0; a <= c; a++) b(a);
      return f;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useScrollLeftRailToTopOnChange",
  ["BaseScrollableAreaContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect;
    function a(a) {
      var b = h(c("BaseScrollableAreaContext")),
        d = b[b.length - 1];
      i(
        function () {
          var a = d.getDOMNode();
          a != null && (a.scrollTop = 0);
        },
        [d, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometCreationLayout.react",
  [
    "CometContentArea.react",
    "CometCreationContext",
    "CometCreationPreviewContainer.react",
    "CometErrorBoundary.react",
    "CometLeftRailAndMainContentContainer.react",
    "CometLeftRailBreadcrumbs.react",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "emptyFunction",
    "getCometCreationLayoutBreadcrumbs",
    "react",
    "useScrollLeftRailToTopOnChange",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { isDraft: !0 };
    function a(a) {
      var b = a.actorSelector,
        d = a.breadcrumbsOverride,
        e = a.creationCategoryName,
        f = a.creationCategoryURL,
        g = a.currentFormStep;
      g = g === void 0 ? 0 : g;
      var k = a.disableProportionalHeader;
      k = k === void 0 ? !1 : k;
      var l = a.formAreaTitle,
        m = a.formSteps,
        n = a.onBreadcrumbPress;
      n = n === void 0 ? c("emptyFunction") : n;
      var o = a.previewAreaTitle,
        p = a.preview,
        q = a.previewContainerProps,
        r = a.previewErrorFallback;
      a = a.previewNullState;
      var s = m[g];
      d =
        (d = d) != null
          ? d
          : c("getCometCreationLayoutBreadcrumbs")(e, f, g, m, n);
      f =
        r != null
          ? function (a) {
              return h.jsx(c("CometContentArea.react"), {
                verticalAlign: "middle",
                children: r(a),
              });
            }
          : function () {
              return null;
            };
      m =
        b != null
          ? h.jsx("div", { className: "scb9dxdr dflh9lhu", children: b })
          : null;
      return h.jsx(c("CometLeftRailAndMainContentContainer.react"), {
        isLeftRailResponsive: !0,
        leftRailContent: h.jsx(c("CometLeftRailComponent.react"), {
          footer: s.footer,
          header: h.jsx(c("CometLeftRailHeader.react"), {
            auxiliary: s.titleAddOn,
            disableProportional: k,
            meta: h.jsx(c("CometLeftRailBreadcrumbs.react"), {
              breadcrumbs: d,
            }),
            subTitle: s.subTitle,
            subTitleType: (n = s.subTitleType) != null ? n : "body1",
            title: s.title,
          }),
          primaryNav: h.jsxs(j, {
            currentFormStep: g,
            label: e,
            children: [m, s.body],
          }),
        }),
        leftRailHeading: l,
        leftRailPrimary: !0,
        leftRailRole: "main",
        mainContent:
          p != null
            ? h.jsx(c("CometContentArea.react"), {
                hasNoRole: !0,
                children: h.jsx(c("CometCreationContext").Provider, {
                  value: i,
                  children: h.jsx(c("CometErrorBoundary.react"), {
                    fallback: f,
                    children: h.jsx(
                      c("CometCreationPreviewContainer.react"),
                      babelHelpers["extends"]({}, q, { children: p })
                    ),
                  }),
                }),
              })
            : h.jsx(c("CometContentArea.react"), {
                verticalAlign: "middle",
                children: a,
              }),
        mainContentHeading: o,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      var b = a.children,
        d = a.currentFormStep;
      a = a.label;
      c("useScrollLeftRailToTopOnChange")(d);
      return h.jsx("div", { "aria-label": a, role: "form", children: b });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCometPrivacySelectorDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "StoriesCometPrivacySelectorDialogQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            myQueryReference: {
              parameters: c(
                "StoriesCometPrivacySelectorDialogQuery$Parameters"
              ),
              variables: {},
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "StoriesCometPrivacySelectorDialog.react"
      ).__setRef("StoriesCometPrivacySelectorDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateViewStateDispatcherContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(c("emptyFunction"));
    g["default"] = b;
  },
  98
);
__d(
  "StoriesCreateDefaultState",
  ["uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return {
        composerSessionID: c("uuid")(),
        ctaLinkData: { ctaType: null, link: null, linkInputError: !1 },
        formData: { step: 0 },
        isObjectRotating: !1,
        isUploading: !1,
        mediaAttachments: null,
        overlayRef: { current: null },
        photoData: {
          bounds: { height: 0, width: 0, x: 0, y: 0 },
          displayedURI: null,
          offset: { dx: 0, dy: 0 },
          rotation: 0,
          scale: 1,
        },
        stickerData: {
          editingID: null,
          shouldShowEntrypoint: !1,
          shouldShowGrid: !1,
          stickers: [],
        },
        storyID: "add_later",
        videoData: {
          currentDuration: 0,
          duration: 0,
          initialDuration: 0,
          isPreviewable: null,
          isTrimming: !1,
          lastMutedUpdateReason: null,
          lastPlaybackUpdateReason: null,
          muted: null,
          paused: null,
          startTime: 0,
        },
      };
    }
    g.getStoriesCreateInitialState = a;
  },
  98
);
__d(
  "StoriesCreateViewStateContext",
  ["StoriesCreateDefaultState", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(
      d("StoriesCreateDefaultState").getStoriesCreateInitialState()
    );
    g["default"] = b;
  },
  98
);
__d(
  "withStoriesCreateViewStatePart",
  ["StoriesCreateViewStateContext", "react", "withSomeContext"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a, b) {
      return c("withSomeContext")(a, c("StoriesCreateViewStateContext"), b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesComposerCometHeadlessMediaUploader.react",
  [
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "StoriesCreateMediaUploaderContext",
    "StoriesCreateViewStateDispatcherContext",
    "lazyLoadComponent",
    "react",
    "withStoriesCreateViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometComposerHeadlessMediaUploaderImpl.react"
        ).__setRef("StoriesComposerCometHeadlessMediaUploader.react")
      );
    function a(a) {
      var b = a.mediaAttachments;
      a = a.mediaUploadStatuses;
      var d = i(c("StoriesCreateViewStateDispatcherContext")),
        e = i(c("StoriesCreateMediaUploaderContext"));
      e = e.uploader;
      return e == null || b == null || b[0].fileType === "VIDEO"
        ? null
        : h.jsx(c("CometPlaceholder.react"), {
            fallback: h.jsx("div", {}),
            children: h.jsx(j, {
              composerUploader: e,
              dispatch: d,
              mediaAttachments: b,
              mediaUploadStatuses: a,
              useOptimisticMediaPost: !1,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withStoriesCreateViewStatePart")(a, function (a) {
      return {
        mediaAttachments: a.mediaAttachments,
        mediaUploadStatuses: a.mediaUploadStatuses,
      };
    });
    g["default"] = b;
  },
  98
);
__d(
  "StoriesCreateMediaReducer",
  ["composerMediaAttachmentReducer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      switch (b.type) {
        case "ADD_MEDIA_ATTACHMENT_ITEMS":
        case "REMOVE_MEDIA_ATTACHMENT_ITEM":
        case "REMOVE_ALL_MEDIA_ATTACHMENT_ITEMS":
        case "MEDIA_ATTACHMENT_CLIENT_PROCESSING_COMPLETED":
        case "QUEUE_UPLOADS":
        case "MARK_UPLOADS_CLIENT_PROCESSING":
        case "MARK_UPLOADS_AS_PHOTO":
        case "MEDIA_UPLOAD_STARTED":
        case "MEDIA_UPLOAD_PROGRESS":
        case "MEDIA_UPLOAD_SUCCESSFUL":
        case "REORDER_MEDIA_ATTACHMENT_ITEM":
        case "SAVE_MEDIA_EDITS":
        case "SET_MEDIA_ATTACHMENT_CAPTION":
        case "SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW":
        case "SET_MEDIA_ATTACHMENT_ITEM_CDN_DIMENSIONS":
        case "SET_MEDIA_ATTACHMENT_ITEM_DIMENSIONS":
        case "SET_PHOTO3D_CREATION_DATA":
          b = b;
          b = c("composerMediaAttachmentReducer")(
            {
              mediaAttachments: a.mediaAttachments,
              mediaUploadStatuses: a.mediaUploadStatuses,
            },
            b
          );
          var d = b.mediaAttachments;
          b = b.mediaUploadStatuses;
          return babelHelpers["extends"]({}, a, {
            mediaAttachments: d,
            mediaUploadStatuses: b,
          });
      }
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateViewStateReducersContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { current: new Map() };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "useStoriesCreateReducer",
  ["StoriesCreateViewStateReducersContext", "useContextRef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return c("useContextRef")(a, c("StoriesCreateViewStateReducersContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateMediaSelector.react",
  [
    "fbt",
    "ix",
    "CometFileSelector.react",
    "CometImageFromIXValue.react",
    "CometPressable.react",
    "StoriesCreateConstants",
    "StoriesCreateMediaReducer",
    "StoriesCreateViewStateDispatcherContext",
    "StoriesGating",
    "TetraIcon.react",
    "cometIsMimeTypeForMedia",
    "cometPushToast",
    "fbicon",
    "fileInputAcceptValues",
    "react",
    "useFileDragEvents",
    "useStoriesCreateReducer",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useContext,
      m = 2;
    function a(a) {
      var b = a.onFilesSelect;
      c("useStoriesCreateReducer")(c("StoriesCreateMediaReducer"));
      var e = l(c("StoriesCreateViewStateDispatcherContext"));
      a = k(
        function (a) {
          if (a.length > 0) {
            var c = Array.from(a);
            for (var f = 0; f < a.length; f++) {
              var g = a[f].type;
              g =
                !(
                  d("cometIsMimeTypeForMedia").isMimeTypeForVideo(g) &&
                  d("StoriesGating").isCometStoriesVideoProductionEnabled()
                ) && !d("cometIsMimeTypeForMedia").isMimeTypeForPhoto(g);
              if (g) {
                g = d("StoriesGating").isCometStoriesVideoProductionEnabled()
                  ? h._(
                      "This file type is not supported. Please select a photo or video instead."
                    )
                  : h._(
                      "This file type is not supported. Please select a photo instead."
                    );
                d("cometPushToast").cometPushErrorToast({ message: g });
                return;
              }
            }
            e({ files: c, type: "ADD_MEDIA_ATTACHMENT_ITEMS" });
            b(
              c.map(function (a) {
                return a.type;
              })
            );
          }
        },
        [e, b]
      );
      c("useFileDragEvents")(a);
      var f = d("fileInputAcceptValues").PHOTO,
        g = h._("Create a Photo Story");
      d("StoriesGating").isCometStoriesVideoProductionEnabled() &&
        ((f = f.concat(d("fileInputAcceptValues").VIDEO)),
        (g = h._("Create a Photo or Video Story")));
      var n = d("StoriesCreateConstants").NULL_STATE_DIMENSIONS
          .SELECTION_TILE_HEIGHT,
        o = d("StoriesCreateConstants").NULL_STATE_DIMENSIONS
          .SELECTION_TILE_WIDTH;
      return j.jsx(c("CometFileSelector.react"), {
        accept: f,
        onFilesSelected: a,
        children: function (a) {
          return j.jsx(c("CometPressable.react"), {
            display: "inline",
            label: h._("Upload photo"),
            onPress: a,
            overlayRadius: 8,
            testid: void 0,
            children: j.jsxs("div", {
              className:
                "l9j0dhe7 jm1wdb64 pfnyh3mw kb5gq1qc cbu4d94t j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 bp9cbjyn",
              style: { height: n, width: o - m },
              children: [
                j.jsx("div", {
                  className: "kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 i09qtzwb",
                  style: { height: n, width: o },
                  children: j.jsx(c("CometImageFromIXValue.react"), {
                    source: i("1394933"),
                  }),
                }),
                j.jsx("div", {
                  className:
                    "eim337gk op20o8eh l9j0dhe7 taijpn5t qu8okrzs j83agx80 sz7gx65s spb7xbtv bkmhp75w emlxlaya s45kfl79 cwj9ozl2 o8rfisnq bp9cbjyn",
                  children: j.jsx(c("TetraIcon.react"), {
                    color: "primary",
                    icon: d("fbicon")._(i("481799"), 20),
                    size: 20,
                  }),
                }),
                j.jsx("div", {
                  className:
                    "k4urcfbm hq1mf54v oqcyycmt l9j0dhe7 lt9micmv gl4o1x5y taijpn5t fdgqbs4u n3ffmt46 qo0gs2wv j83agx80 ljqsnud1 rq0escxv",
                  children: g,
                }),
              ],
            }),
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
  "StoriesModuleCreateStoryWwwQPLEvent",
  ["cr:2286"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2286");
  },
  98
);
__d(
  "StoriesCreateNullStateView.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "StoriesCreateConstants",
    "StoriesCreateMediaSelector.react",
    "StoriesCreateMediaTypeEnum",
    "StoriesCreateViewStateDispatcherContext",
    "StoriesGating",
    "StoriesModuleCreateStoryWwwQPLEvent",
    "StoriesModuleStoryCreateLoadTtiWwwQPLEvent",
    "TetraIcon.react",
    "cometIsMimeTypeForMedia",
    "fbicon",
    "react",
    "withStoriesCreateViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useContext,
      l = b.useEffect;
    function a(a) {
      a = a.composerSessionID;
      var b = k(c("StoriesCreateViewStateDispatcherContext")),
        e = d("StoriesCreateConstants").NULL_STATE_DIMENSIONS
          .SELECTION_TILE_HEIGHT,
        f = d("StoriesCreateConstants").NULL_STATE_DIMENSIONS
          .SELECTION_TILE_WIDTH,
        g = d("StoriesCreateConstants").NULL_STATE_DIMENSIONS
          .SPACE_BETWEEN_SELECTOR;
      l(function () {
        c("QuickPerformanceLogger").markerEnd(
          c("StoriesModuleStoryCreateLoadTtiWwwQPLEvent"),
          2
        );
      }, []);
      l(
        function () {
          c("QPLUserFlow").start(c("StoriesModuleCreateStoryWwwQPLEvent"));
        },
        [a]
      );
      return j.jsxs("div", {
        className: "i1fnvgqd j83agx80",
        style: { width: 2 * f + g },
        children: [
          j.jsx(c("StoriesCreateMediaSelector.react"), {
            onFilesSelect: function (a) {
              var e = c("StoriesCreateMediaTypeEnum").PHOTO;
              d("StoriesGating").isCometStoriesVideoProductionEnabled() &&
                d("cometIsMimeTypeForMedia").isMimeTypeForVideo(a[0]) &&
                (e = c("StoriesCreateMediaTypeEnum").VIDEO);
              b({ formData: { mediaType: e, step: 1 }, type: "step" });
            },
          }),
          j.jsx(c("CometPressable.react"), {
            onPress: function () {
              b({
                formData: {
                  mediaType: c("StoriesCreateMediaTypeEnum").SATP,
                  step: 1,
                },
                type: "step",
              });
            },
            overlayRadius: 8,
            children: j.jsxs("div", {
              className: "cbu4d94t j83agx80 bp9cbjyn",
              "data-testid": void 0,
              style: { height: e, width: f },
              children: [
                j.jsx("div", {
                  className:
                    "k4urcfbm pmk7jnqg stjgntxs ni8dbmo4 datstx6m l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                  children: j.jsx(c("CometImage.react"), {
                    height: e,
                    src: i("1394934"),
                    width: f,
                  }),
                }),
                j.jsx("div", {
                  className:
                    "eim337gk op20o8eh l9j0dhe7 taijpn5t qu8okrzs j83agx80 sz7gx65s spb7xbtv bkmhp75w emlxlaya s45kfl79 cwj9ozl2 bp9cbjyn",
                  children: j.jsx(c("TetraIcon.react"), {
                    color: "primary",
                    icon: d("fbicon")._(i("486064"), 20),
                    size: 20,
                  }),
                }),
                j.jsx("div", {
                  className:
                    "k4urcfbm hq1mf54v oqcyycmt l9j0dhe7 lt9micmv gl4o1x5y taijpn5t n3ffmt46 qo0gs2wv j83agx80 ljqsnud1 rq0escxv",
                  children: h._("Create a Text Story"),
                }),
              ],
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withStoriesCreateViewStatePart")(a, function (a) {
      return { composerSessionID: a.composerSessionID };
    });
    g["default"] = e;
  },
  98
);
__d(
  "StoriesCreatePhotoPreviewFrame.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var c = a.children,
        d = a.frameWidth;
      a = a.rounded;
      a = a === void 0 ? !1 : a;
      return h.jsx("div", {
        className: "pmk7jnqg hzruof5a datstx6m",
        children: h.jsx("div", {
          className: "hzruof5a datstx6m",
          style: { width: d + "px" },
          children: h.jsx("div", {
            className:
              "pmk7jnqg datstx6m rq0escxv ddn55etz todgtsvd mher9iwd okr6w53f" +
              (a ? " l82x9zwi uo3d90p7 pw54ja7n ue3kfks5" : ""),
            ref: b,
            style: { width: d + "px" },
            children: c,
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
  "useStoriesCreatePreviewDimensions",
  [
    "CometAppNavigationConstants",
    "CometRouteRenderType",
    "StoriesCreateConstants",
    "useCometWindowSize",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = d("StoriesCreateConstants").PREVIEW_DIMENSIONS
          .COMET_PUSH_VIEW_HEIGHT,
        f = d("StoriesCreateConstants").PREVIEW_DIMENSIONS
          .CONTAINER_HORIZONTAL_PADDING,
        g = d("StoriesCreateConstants").PREVIEW_DIMENSIONS.CONTAINER_MAX_WIDTH,
        h = d("StoriesCreateConstants").PREVIEW_DIMENSIONS
          .CONTAINER_VERTICAL_PADDING,
        i = d("StoriesCreateConstants").PREVIEW_DIMENSIONS
          .CONTENT_HEADER_HEIGHT,
        j = d("StoriesCreateConstants").PREVIEW_DIMENSIONS
          .CONTENT_HORIZONTAL_PADDING,
        k = d("StoriesCreateConstants").PREVIEW_DIMENSIONS
          .CONTENT_VERTICAL_PADDING,
        l = d("StoriesCreateConstants").PREVIEW_DIMENSIONS.SIDE_PANE_WIDTH,
        m = d("CometRouteRenderType").useIsPushView(),
        n = c("useCometWindowSize")(),
        o = n.innerHeight;
      n = n.innerWidth;
      g = Math.min(g, n - f - j - l);
      n = o - h - k - i - a - b;
      n -= m ? e : d("CometAppNavigationConstants").HEADER_HEIGHT;
      return { containerRectHeight: n, containerRectWidth: g };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCreateMediaFrame",
  ["react", "useStoriesCreatePreviewDimensions"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.footerHeight;
      a = a.headerHeight;
      var d = i(0),
        e = d[0],
        f = d[1];
      d = i(0);
      var g = d[0],
        j = d[1];
      d = c("useStoriesCreatePreviewDimensions")(
        (d = a) != null ? d : 0,
        (a = b) != null ? a : 0
      );
      var k = d.containerRectHeight,
        l = d.containerRectWidth;
      h(
        function () {
          var a = k * 0.5625;
          j(a);
          f(Math.max(l - a, 0) / 2);
        },
        [k, l]
      );
      return {
        border: e,
        containerRectHeight: k,
        containerRectWidth: l,
        frameWidth: g,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCreatePhotoFrame",
  ["StoriesCreateConstants", "useStoriesCreateMediaFrame"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("useStoriesCreateMediaFrame")({
        footerHeight: d("StoriesCreateConstants").PHOTO_PREVIEW_DIMENSIONS
          .FOOTER_HEIGHT,
        headerHeight: d("StoriesCreateConstants").PHOTO_PREVIEW_DIMENSIONS
          .HEADER_HEIGHT,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreatePhotoPreviewPlaceholder.react",
  [
    "CollageItemFallback.react",
    "Locale",
    "StoriesCreateConstants",
    "StoriesCreatePhotoPreviewFrame.react",
    "react",
    "stylex",
    "useStoriesCreatePhotoFrame",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      var a = d("Locale").isRTL(),
        b = c("useStoriesCreatePhotoFrame")();
      b = b.frameWidth;
      var e = d("StoriesCreateConstants").PHOTO_PREVIEW_DIMENSIONS
          .FOOTER_HEIGHT,
        f = d("StoriesCreateConstants").PHOTO_PREVIEW_DIMENSIONS.HEADER_HEIGHT;
      return h.jsx("div", {
        className:
          "k4urcfbm kr520xx4 pmk7jnqg i09qtzwb l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 tqsryivl",
        children: h.jsxs("div", {
          className: c("stylex").dedupe(
            {
              "border-top-start-radius-1": "ue3kfks5",
              "border-top-end-radius-1": "pw54ja7n",
              "border-bottom-end-radius-1": "uo3d90p7",
              "border-bottom-start-radius-1": "l82x9zwi",
              "display-1": "j83agx80",
              "height-1": "alt01wi3",
              "justify-content-1": "taijpn5t",
              "overflow-x-1": "ni8dbmo4",
              "overflow-y-1": "stjgntxs",
              "position-1": "pmk7jnqg",
              "start-1": "kfkz5moi",
              "transform-0.1": "cj5g2342",
            },
            a ? { "transform-0.1": "lcn5fozr" } : null
          ),
          style: {
            height: "calc(100% - " + (e + f) + "px",
            top: f + "px",
            width: b,
          },
          children: [
            h.jsx("div", {
              className: "k4urcfbm",
              children: h.jsx(c("CollageItemFallback.react"), {
                fileType: "PHOTO",
              }),
            }),
            h.jsx(c("StoriesCreatePhotoPreviewFrame.react"), { frameWidth: b }),
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
  "StoriesCreatePreviewPlaceholder.react",
  [
    "BaseGlimmer.react",
    "StoriesCreateConstants",
    "react",
    "useStoriesCreateMediaFrame",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      var a = d("StoriesCreateConstants").SATP_PREVIEW_DIMENSIONS.FOOTER_HEIGHT,
        b = d("StoriesCreateConstants").SATP_PREVIEW_DIMENSIONS.HEADER_HEIGHT;
      a = c("useStoriesCreateMediaFrame")({ footerHeight: a, headerHeight: b });
      b = a.frameWidth;
      return h.jsx("div", {
        className:
          "k4urcfbm kr520xx4 j9ispegn pmk7jnqg taijpn5t datstx6m cbu4d94t j83agx80 tqsryivl bp9cbjyn",
        children: h.jsx("div", {
          className:
            "l9j0dhe7 stjgntxs ni8dbmo4 n1l5q3vz n851cfcs datstx6m l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
          style: { width: b + "px" },
          children: h.jsx(c("BaseGlimmer.react"), {
            className: "k4urcfbm datstx6m",
            index: 0,
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
  "StoriesCreatePreviewUtils",
  ["CometRelayEnvironmentFactory"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("CometRelayEnvironmentFactory").createLocalEnvironment();
    g.storiesCreatePreviewEnvironment = a;
  },
  98
);
__d(
  "StoriesCreatePreviewRoot.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "CometUFIVideoPlayerUtils",
    "JSResourceForInteraction",
    "StoriesCreateMediaTypeEnum",
    "StoriesCreatePhotoPreviewPlaceholder.react",
    "StoriesCreatePreviewPlaceholder.react",
    "StoriesCreatePreviewUtils",
    "lazyLoadComponent",
    "react",
    "withStoriesCreateViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "StoriesCreatePhotoPreview.react"
        ).__setRef("StoriesCreatePreviewRoot.react")
      ),
      j = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "StoriesCreateSATPPreview.react"
        ).__setRef("StoriesCreatePreviewRoot.react")
      ),
      k = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "StoriesCreateVideoPreview.react"
        ).__setRef("StoriesCreatePreviewRoot.react")
      );
    function a(a) {
      a = a.mediaType;
      if (a === c("StoriesCreateMediaTypeEnum").PHOTO)
        return h.jsx(c("CometPlaceholder.react"), {
          fallback: h.jsx(c("StoriesCreatePhotoPreviewPlaceholder.react"), {}),
          children: h.jsx(i, {}),
        });
      else if (a === c("StoriesCreateMediaTypeEnum").VIDEO)
        return h.jsx(c("CometPlaceholder.react"), {
          fallback: null,
          children: h.jsx(
            d("CometUFIVideoPlayerUtils")
              .CometUFIVideoPlayerStateAndControllerContextProvider,
            { children: h.jsx(k, {}) }
          ),
        });
      else
        return h.jsx(d("CometRelay").RelayEnvironmentProvider, {
          environment: d("StoriesCreatePreviewUtils")
            .storiesCreatePreviewEnvironment,
          children: h.jsx(c("CometPlaceholder.react"), {
            fallback: h.jsx(c("StoriesCreatePreviewPlaceholder.react"), {}),
            children: h.jsx(j, {}),
          }),
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withStoriesCreateViewStatePart")(a, function (a) {
      return { mediaType: (a = a.formData) == null ? void 0 : a.mediaType };
    });
    g["default"] = b;
  },
  98
);
__d(
  "StoriesCreateStoryReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      switch (b.type) {
        case "set_is_uploading":
          return babelHelpers["extends"]({}, a, { isUploading: b.value });
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "StoriesCreateFormReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      switch (b.type) {
        case "step":
          return babelHelpers["extends"]({}, a, { formData: b.formData });
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "StoriesCreateFormBodyPlaceholder.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", {});
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateFormBodyWrapper.react",
  [
    "fbt",
    "ix",
    "CometPlaceholder.react",
    "CometRelay",
    "StoriesCreateFormBodyPlaceholder.react",
    "StoriesCreateFormBodyWrapper_data.graphql",
    "TetraListCell.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l =
        j !== void 0 ? j : (j = b("StoriesCreateFormBodyWrapper_data.graphql"));
    function a(a) {
      var b,
        e = a.children;
      a = a.dataRef;
      a = d("CometRelay").useFragment(l, a);
      a = a == null ? void 0 : (a = a.viewer) == null ? void 0 : a.actor;
      b = a == null ? void 0 : (b = a.profile_picture) == null ? void 0 : b.uri;
      var f = h._("{name of the stories creator}", [
        h._param("name of the stories creator", a == null ? void 0 : a.name),
      ]);
      (a == null ? void 0 : a.name) == null && (f = h._("Story Poster"));
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx(c("TetraListCell.react"), {
            addOnPrimary: {
              shape: "circle",
              size: 60,
              source: { uri: (a = b) != null ? a : i("762679") },
              type: "profile-photo",
            },
            headline: f,
          }),
          k.jsx("div", { className: "jei6r52m ay7djpcl bfjqzvhc" }),
          k.jsx(c("CometPlaceholder.react"), {
            fallback: k.jsx(c("StoriesCreateFormBodyPlaceholder.react"), {}),
            children: k.jsx("div", {
              className:
                "k4urcfbm dati1w0a hv4rvrfc taijpn5t g5gj957u buofh1pr cbu4d94t rj1gh0hx j83agx80 rq0escxv",
              children: e,
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
  "StoriesCreateFormPhotoPlaceholder.react",
  ["CometListCellGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", {
        className: "jbcpqwzg aov4n071 fop5sh7t",
        children: h.jsx(c("CometListCellGlimmer.react"), {
          imageSize: 48,
          imageStyle: "circle",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateFormSATPPlaceholder.react",
  ["BaseGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        className: "rm0tqlba",
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className: "tr9rh885 se0szajb kzx2olss aot14ch1 p86d2i9g beltcj47",
            index: 0,
            theme: "dark",
          }),
          h.jsx(c("BaseGlimmer.react"), {
            className: "tr9rh885 e5d9fub0 kzx2olss aot14ch1 p86d2i9g beltcj47",
            index: 1,
            theme: "dark",
          }),
          h.jsx(c("BaseGlimmer.react"), {
            className: "tr9rh885 i7t6db18 kzx2olss aot14ch1 p86d2i9g beltcj47",
            index: 1,
            theme: "dark",
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
  "StoriesCreateSATPReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = a.satpData;
      c == null &&
        (c = {
          background: null,
          backgroundColor: null,
          backgroundGradientColor: null,
          backgroundGradientDirection: null,
          fontColor: null,
          fontID: null,
          fontName: null,
          fontUrl: null,
          inputError: !1,
          presetID: null,
          text: "",
        });
      switch (b.type) {
        case "satp_update_text":
          return babelHelpers["extends"]({}, a, {
            satpData: babelHelpers["extends"]({}, c, {
              inputError: !1,
              text: b.text,
            }),
          });
        case "satp_update_background":
          return babelHelpers["extends"]({}, a, {
            satpData: babelHelpers["extends"]({}, c, {
              background: b.background,
              backgroundColor: b.backgroundColor,
              backgroundGradientColor: b.backgroundGradientColor,
              backgroundGradientDirection: b.backgroundGradientDirection,
              fontColor: b.fontColor,
              presetID: b.presetID,
            }),
          });
        case "satp_update_font":
          return babelHelpers["extends"]({}, a, {
            satpData: babelHelpers["extends"]({}, c, {
              fontID: b.fontID,
              fontName: b.fontName,
              fontUrl: b.fontUrl,
            }),
          });
        case "satp_update_input_error":
          return babelHelpers["extends"]({}, a, {
            satpData: babelHelpers["extends"]({}, c, { inputError: !0 }),
          });
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "StoriesCreateSettingButton.react",
  [
    "fbt",
    "ix",
    "StoriesCometPrivacySelectorDialog.entrypoint",
    "TetraCircleButton.react",
    "fbicon",
    "react",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a() {
      var a = c("useCometEntryPointDialog")(
          c("StoriesCometPrivacySelectorDialog.entrypoint"),
          {}
        ),
        b = a[0];
      return j.jsx(c("TetraCircleButton.react"), {
        color: "primary",
        icon: d("fbicon")._(i("497567"), 20),
        label: h._("settings"),
        onPress: function () {
          b({ onClose: function () {} });
        },
        size: 36,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCreateFormEditorRoot",
  [
    "fbt",
    "CometPlaceholder.react",
    "CometRelay",
    "JSResourceForInteraction",
    "StoriesCreateFormBodyWrapper.react",
    "StoriesCreateFormPhotoPlaceholder.react",
    "StoriesCreateFormSATPPlaceholder.react",
    "StoriesCreateMediaTypeEnum",
    "StoriesCreateSATPReducer",
    "StoriesCreateSettingButton.react",
    "StoriesCreateViewStateContext",
    "cr:1448152",
    "lazyLoadComponent",
    "react",
    "useStoriesCreateFormEditorRoot.graphql",
    "useStoriesCreateReducer",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useContext,
      l = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("StoriesCreateFormSATP.react").__setRef(
          "useStoriesCreateFormEditorRoot"
        )
      ),
      m = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("StoriesCreateFormPhoto.react").__setRef(
          "useStoriesCreateFormEditorRoot"
        )
      ),
      n = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("StoriesCreateFormVideo.react").__setRef(
          "useStoriesCreateFormEditorRoot"
        )
      ),
      o = i !== void 0 ? i : (i = b("useStoriesCreateFormEditorRoot.graphql"));
    function a(a) {
      var e = k(c("StoriesCreateViewStateContext"));
      a = d("CometRelay").useFragment(o, a);
      c("useStoriesCreateReducer")(c("StoriesCreateSATPReducer"));
      e = e.formData;
      var f = j.jsx("div", { children: h._("TO BE IMPLEMENTED(Step two)") });
      if ((e == null ? void 0 : e.mediaType) != null)
        switch (e == null ? void 0 : e.mediaType) {
          case c("StoriesCreateMediaTypeEnum").SATP:
            f = j.jsx(c("StoriesCreateFormBodyWrapper.react"), {
              dataRef: a,
              children: j.jsx(c("CometPlaceholder.react"), {
                fallback: j.jsx(
                  c("StoriesCreateFormSATPPlaceholder.react"),
                  {}
                ),
                children: j.jsx(l, { satp: a }),
              }),
            });
            break;
          case c("StoriesCreateMediaTypeEnum").PHOTO:
            f = j.jsx(c("StoriesCreateFormBodyWrapper.react"), {
              dataRef: a,
              children: j.jsx(c("CometPlaceholder.react"), {
                fallback: j.jsx(
                  c("StoriesCreateFormPhotoPlaceholder.react"),
                  {}
                ),
                children: j.jsx(m, { dataRef: a }),
              }),
            });
            break;
          case c("StoriesCreateMediaTypeEnum").VIDEO:
            f = j.jsx(c("StoriesCreateFormBodyWrapper.react"), {
              dataRef: a,
              children: j.jsx(n, {}),
            });
        }
      return {
        body: f,
        footer: j.jsx(b("cr:1448152"), {}),
        hideBreadcrumb: !0,
        title: h._("Your Story"),
        titleAddOn: j.jsx(c("StoriesCreateSettingButton.react"), {}),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCreateFormTypeChooser",
  [
    "fbt",
    "CometRelay",
    "StoriesCreateFormBodyWrapper.react",
    "StoriesCreateSettingButton.react",
    "react",
    "useStoriesCreateFormTypeChooser.graphql",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = i !== void 0 ? i : (i = b("useStoriesCreateFormTypeChooser.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(k, a);
      return {
        body: j.jsx(c("StoriesCreateFormBodyWrapper.react"), {
          dataRef: a,
          children: j.jsx("div", {}),
        }),
        footer: j.jsx("div", {}),
        hideBreadcrumb: !0,
        title: h._("Your Story"),
        titleAddOn: j.jsx(c("StoriesCreateSettingButton.react"), {}),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCreateFormSteps",
  [
    "CometRelay",
    "StoriesCreateFormReducer",
    "useStoriesCreateFormEditorRoot",
    "useStoriesCreateFormSteps.graphql",
    "useStoriesCreateFormTypeChooser",
    "useStoriesCreateReducer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("useStoriesCreateFormSteps.graphql"));
    function a(a) {
      c("useStoriesCreateReducer")(c("StoriesCreateFormReducer"));
      a = d("CometRelay").useFragment(i, a);
      var b = c("useStoriesCreateFormTypeChooser")(a);
      a = c("useStoriesCreateFormEditorRoot")(a);
      return [b, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreate.react",
  [
    "fbt",
    "Actor",
    "CometCreationLayout.react",
    "CometRelay",
    "FBLogger",
    "NullStateMedia",
    "StoriesComposerCometHeadlessMediaUploader.react",
    "StoriesCreateMediaReducer",
    "StoriesCreateMediaUploaderContext",
    "StoriesCreateNullStateView.react",
    "StoriesCreatePreviewRoot.react",
    "StoriesCreateQuery.graphql",
    "StoriesCreateStoryReducer",
    "TetraNullState.react",
    "XCometStoriesCreateControllerRouteBuilder",
    "cometComposerLogger",
    "getComposerMediaFileUploaderWithClientSideImageResizer",
    "gkx",
    "react",
    "useRoutePassthroughProps",
    "useStoriesCreateFormSteps",
    "useStoriesCreateReducer",
    "withStoriesCreateViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useMemo,
      m = e.useState,
      n = i !== void 0 ? i : (i = b("StoriesCreateQuery.graphql"));
    function a(a) {
      var b = a.composerSessionID,
        e = a.queryReference;
      a = a.step;
      var f = d("Actor").useActor(),
        g = f[0];
      f = m({ uploader: null });
      var i = f[0],
        o = f[1];
      f = d("CometRelay").usePreloadedQuery(n, e);
      c("useStoriesCreateReducer")(c("StoriesCreateMediaReducer"));
      c("useStoriesCreateReducer")(c("StoriesCreateStoryReducer"));
      var p = c("useRoutePassthroughProps")();
      k(function () {
        var a =
          p && p.entryPoint != null && p.sourceSurface != null
            ? {
                composerEntryPointName: String(p.entryPoint),
                composerSourceSurface: String(p.sourceSurface),
                composerType: "stories",
              }
            : {
                composerEntryPointName: "add_to_story_stories_surface",
                composerSourceSurface: "newsfeed",
                composerType: "stories",
              };
        c("cometComposerLogger")({ fields: a, type: "COMPOSER_ENTRY" }, b);
      }, []);
      var q =
          f == null
            ? void 0
            : (e = f.viewer) == null
            ? void 0
            : e.comet_composer_video_uploader_config,
        r = l(
          function () {
            if (q == null) return {};
            try {
              return JSON.parse(q);
            } catch (a) {
              c("FBLogger")("fbstories").info(
                "Failed to parse JSON in video uploader config"
              );
              return {};
            }
          },
          [q]
        );
      k(
        function () {
          var a = c("getComposerMediaFileUploaderWithClientSideImageResizer")(
              g,
              r,
              b,
              !1
            ),
            d = a[0];
          a = a[1];
          d.photoUploader.setOption("handleErrorAfterUnload", !0);
          d.photoUploader.setUploadData(
            babelHelpers["extends"]({}, d.photoUploader.getUploadData(), {
              waterfallxapp: "comet_stories",
            })
          );
          o({ uploader: d });
          return c("gkx")("478") ? a : void 0;
        },
        [g, b, r]
      );
      e = c("useStoriesCreateFormSteps")(f);
      f = {
        breadcrumbsOverride: [],
        creationCategoryName: h._("Stories"),
        creationCategoryURL: c(
          "XCometStoriesCreateControllerRouteBuilder"
        ).buildURL({}),
        currentFormStep: a,
        formAreaTitle: h._("Stories Creation Form"),
        formSteps: e,
        previewAreaTitle: h._("Stories Creation Preview"),
        previewContainerProps: { allowFocus: !0, hasResponsiveToggle: !1 },
      };
      if (a === 0) {
        f = babelHelpers["extends"]({}, f, {
          previewNullState: j.jsx(c("StoriesCreateNullStateView.react"), {}),
        });
        return j.jsx(
          c("CometCreationLayout.react"),
          babelHelpers["extends"]({}, f)
        );
      } else
        f = babelHelpers["extends"]({}, f, {
          preview: j.jsx(c("StoriesCreatePreviewRoot.react"), {}),
          previewErrorFallback: function () {
            return j.jsx(c("TetraNullState.react"), {
              headline: h._("Create Stories"),
              icon: c("NullStateMedia"),
            });
          },
        });
      return j.jsxs(c("StoriesCreateMediaUploaderContext").Provider, {
        value: i,
        children: [
          j.jsx(c("StoriesComposerCometHeadlessMediaUploader.react"), {}),
          j.jsx(c("CometCreationLayout.react"), babelHelpers["extends"]({}, f)),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withStoriesCreateViewStatePart")(a, function (a) {
      return {
        composerSessionID: a.composerSessionID,
        step: ((a = a.formData) == null ? void 0 : a.step) || 0,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "StoriesCreateRootPlaceholder.react",
  [
    "fbt",
    "BaseGlimmer.react",
    "CometContentArea.react",
    "CometLeftRailAndMainContentContainer.react",
    "CometLeftRailBreadcrumbs.react",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometListCellGlimmer.react",
    "StoriesCreateConstants",
    "StoriesCreateSettingButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      var a = d("StoriesCreateConstants").NULL_STATE_DIMENSIONS
          .SELECTION_TILE_HEIGHT,
        b = d("StoriesCreateConstants").NULL_STATE_DIMENSIONS
          .SELECTION_TILE_WIDTH,
        e = d("StoriesCreateConstants").NULL_STATE_DIMENSIONS
          .SPACE_BETWEEN_SELECTOR;
      a = { height: a, width: b };
      b = i.jsxs("div", {
        className: "i1fnvgqd j83agx80",
        style: { width: 2 * b + e },
        children: [
          i.jsx("div", {
            style: a,
            children: i.jsx(c("BaseGlimmer.react"), {
              className:
                "k4urcfbm datstx6m cbu4d94t j83agx80 kzx2olss aot14ch1 p86d2i9g beltcj47 bp9cbjyn",
              index: 0,
              theme: "dark",
            }),
          }),
          i.jsx("div", {
            style: a,
            children: i.jsx(c("BaseGlimmer.react"), {
              className:
                "k4urcfbm datstx6m cbu4d94t j83agx80 kzx2olss aot14ch1 p86d2i9g beltcj47 bp9cbjyn",
              index: 1,
              theme: "dark",
            }),
          }),
        ],
      });
      e = h._("Your Story");
      return i.jsx(c("CometLeftRailAndMainContentContainer.react"), {
        leftRailContent: i.jsx(c("CometLeftRailComponent.react"), {
          header: i.jsx(c("CometLeftRailHeader.react"), {
            auxiliary: i.jsx(c("StoriesCreateSettingButton.react"), {}),
            meta: i.jsx(c("CometLeftRailBreadcrumbs.react"), {
              breadcrumbs: [{ label: h._("Stories"), onPress: void 0 }],
            }),
            title: e,
          }),
          primaryNav: i.jsxs("div", {
            children: [
              i.jsx(c("CometListCellGlimmer.react"), {
                imageSize: 60,
                imageStyle: "circle",
              }),
              i.jsx("div", { className: "jei6r52m ay7djpcl pwoa4pd7" }),
            ],
          }),
        }),
        leftRailHeading: e,
        leftRailPrimary: !0,
        mainContent: i.jsx(c("CometContentArea.react"), {
          verticalAlign: "middle",
          children: b,
        }),
        mainContentHeading: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreatePreviewUpdater",
  [
    "StoriesCreatePreviewUtils",
    "StoriesCreateSATPPreviewQuery.graphql",
    "WebPixelRatio",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return d("relay-runtime").createOperationDescriptor(
        c("StoriesCreateSATPPreviewQuery.graphql"),
        { cardID: a, scale: d("WebPixelRatio").get() }
      );
    }
    function i(a) {
      var b,
        c = "32FFFFFF";
      if (
        (a == null ? void 0 : (b = a.satpData) == null ? void 0 : b.text) !=
          null &&
        (a == null
          ? void 0
          : (b = a.satpData) == null
          ? void 0
          : b.text.length) > 0
      ) {
        c =
          (b = a == null ? void 0 : a.satpData.fontColor) != null
            ? b
            : "FFFFFFFF";
      }
      return {
        card: {
          __typename: "Story",
          activity_description: null,
          explicit_place: null,
          id: "add_later",
          inline_activities: { nodes: [] },
          message: {
            aggregated_ranges: [],
            color_ranges: [],
            delight_ranges: [],
            image_ranges: [],
            inline_style_ranges: [],
            ranges: [],
            text:
              (a == null
                ? void 0
                : (b = a.satpData) == null
                ? void 0
                : b.text) || "",
          },
          story_default_background: {
            color: "FF2B2D34",
            gradient: {
              css: "linear-gradient(135deg,rgba(43,45,52,1.00) 0%,rgba(19,19,19,1.00) 100%)",
            },
            portrait_image: null,
          },
          text_format_metadata: {
            background_color:
              (a == null
                ? void 0
                : (b = a.satpData) == null
                ? void 0
                : b.backgroundColor) || null,
            background_gradient_color:
              (a == null
                ? void 0
                : (b = a.satpData) == null
                ? void 0
                : b.backgroundGradientColor) || null,
            background_gradient_direction:
              (a == null
                ? void 0
                : (b = a.satpData) == null
                ? void 0
                : b.backgroundGradientDirection) || null,
            color: c,
            font_style: "NORMAL",
            font_weight: "BOLD",
            inspirations_custom_font_object: {
              font_postscript_name:
                (a == null
                  ? void 0
                  : (b = a.satpData) == null
                  ? void 0
                  : b.fontName) || null,
              font_url:
                (a == null
                  ? void 0
                  : (c = a.satpData) == null
                  ? void 0
                  : c.fontUrl) || null,
              id:
                (a == null
                  ? void 0
                  : (b = a.satpData) == null
                  ? void 0
                  : b.fontID) || null,
            },
            portrait_background_image: {
              uri:
                (a == null
                  ? void 0
                  : (c = a.satpData) == null
                  ? void 0
                  : c.background) || null,
            },
            text_align: "CENTER",
          },
          with_tags: { count: 0 },
        },
      };
    }
    function a(a) {
      var b = a.storyID;
      b = h(b);
      a = i(a);
      d(
        "StoriesCreatePreviewUtils"
      ).storiesCreatePreviewEnvironment.commitPayload(
        b,
        babelHelpers["extends"]({}, a)
      );
    }
    g.updateStoriesPreview = a;
  },
  98
);
__d(
  "reduceStoriesCreateViewState",
  ["StoriesCreateDefaultState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c) {
      if (c.type === "restart")
        return d("StoriesCreateDefaultState").getStoriesCreateInitialState();
      b = b;
      a = a.current.keys();
      for (
        var a = a,
          e = Array.isArray(a),
          f = 0,
          a = e
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= a.length) break;
          g = a[f++];
        } else {
          f = a.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        b = g(b, c);
      }
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCreateViewStateAndRelayUpdater",
  [
    "StoriesCreateDefaultState",
    "StoriesCreatePreviewUpdater",
    "cr:1326771",
    "react",
    "reduceStoriesCreateViewState",
    "useDebounced",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useReducer,
      j = b.useRef;
    function k(a) {
      a = a.storyID;
      a = babelHelpers["extends"](
        {},
        d("StoriesCreateDefaultState").getStoriesCreateInitialState(),
        { storyID: a }
      );
      d("StoriesCreatePreviewUpdater").updateStoriesPreview(a);
      return a;
    }
    function a() {
      var a = j(new Map()),
        b = c("useDebounced")(function (a) {
          d("StoriesCreatePreviewUpdater").updateStoriesPreview(a);
        }, 20),
        e = h(
          function (d, e) {
            e = c("reduceStoriesCreateViewState")(a, d, e);
            e !== d && b(e);
            return e;
          },
          [b]
        );
      e = i(e, { storyID: "add_later" }, k);
      var f = e[0];
      e = e[1];
      return [f, e, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateRoot.react",
  [
    "CometPlaceholder.react",
    "StoriesCreateContext",
    "StoriesCreateRootPlaceholder.react",
    "StoriesCreateViewStateContext",
    "StoriesCreateViewStateDispatcherContext",
    "StoriesCreateViewStateReducersContext",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
    "useStoriesCreateViewStateAndRelayUpdater",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("StoriesCreate.react").__setRef(
          "StoriesCreateRoot.react"
        )
      );
    function a(a) {
      a = a.queries;
      var b = c("useStoriesCreateViewStateAndRelayUpdater")(),
        d = b[0],
        e = b[1];
      b = b[2];
      return h.jsx(c("StoriesCreateViewStateReducersContext").Provider, {
        value: b,
        children: h.jsx(c("StoriesCreateViewStateContext").Provider, {
          value: d,
          children: h.jsx(
            c("StoriesCreateViewStateDispatcherContext").Provider,
            {
              value: e,
              children: h.jsx(c("StoriesCreateContext").Provider, {
                value: !0,
                children: h.jsx(c("CometPlaceholder.react"), {
                  fallback: h.jsx(c("StoriesCreateRootPlaceholder.react"), {}),
                  children: h.jsx(i, {
                    queryReference: a.storiesCreateQueryReference,
                  }),
                }),
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
  "StoriesCreateFormExitUtils",
  ["StoriesCreateConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function () {
      var a = d("StoriesCreateConstants").LEAVE_TEXT.DEFAULT;
      return { body: a.BODY, title: a.TITLE };
    };
    g.exitDialogInformation = a;
  },
  98
);
__d(
  "StoriesCreateOverlayUtils",
  ["FBStoriesCometProductionSitevarConfig", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return "a" + a;
    }
    function a(a) {
      if (
        (a.textOverlays == null || a.textOverlays.overlays.length === 0) &&
        (a.stickerData == null || a.stickerData.stickers.length === 0)
      )
        return null;
      var b = a.overlayRef;
      b = b.current;
      if (b == null) return null;
      a =
        ((a = a.textOverlays) == null
          ? void 0
          : a.overlays.map(function (a) {
              return h(a.id);
            })) || [];
      var e = b.cloneNode(!0);
      b = b.getBoundingClientRect();
      e.style.width = b.width + "px";
      e.style.height = b.height + "px";
      e.style.position = "absolute";
      e.style.top = "-16000px";
      e.style.zIndex = "-10000";
      var f = d("FBStoriesCometProductionSitevarConfig").fontOffsets;
      b = a
        .map(function (a) {
          return e.querySelector("#" + a);
        })
        .filter(Boolean);
      b.forEach(function (a) {
        a.id = h(c("uuid")());
        var b = a.style.fontFamily.replace(/\"/g, "");
        b = f[b];
        if (b == null) return;
        var d = a.style.transform,
          e = /translateX\(calc\(([^\)]+)\)\) /;
        e = d.match(e);
        var g = /translateY\(calc\(([^\)]+)\)\) /;
        g = d.match(g);
        var i = /rotate\((.+)deg\)/;
        i = d.match(i);
        i = 90 + (i != null && i.length >= 2 ? parseFloat(i[1]) : 0);
        d = d;
        if (e != null && e.length >= 2) {
          e = e[1];
          var j = b * Math.cos((i * Math.PI) / 180);
          d = d.replace(e, e + " + " + j + "em");
        }
        if (g != null && g.length >= 2) {
          e = g[1];
          j = b * Math.sin((i * Math.PI) / 180);
          d = d.replace(e, e + " + " + j + "em");
        }
        a.style.transform = d;
      });
      return e;
    }
    g.textOverlayDomID = h;
    g.cloneOverlayNode = a;
  },
  98
);
__d(
  "ctaValidator",
  ["StoriesCreateMediaTypeEnum"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d;
      if (
        ((d = a.formData) == null ? void 0 : d.mediaType) ===
          c("StoriesCreateMediaTypeEnum").SATP &&
        (((d = a.satpData) == null ? void 0 : d.text) == null ||
          a.satpData.text.trim().length === 0)
      ) {
        b({ type: "satp_update_input_error" });
        return !1;
      }
      return !0;
    }
    g["default"] = a;
  },
  98
);
__d(
  "satpValidator",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a = a.ctaLinkData;
      var c = a.ctaType;
      a = a.link;
      if (c != null && (a === "" || a == null)) {
        b({ error: !0, type: "CTA_UPDATE_LINK_INPUT_ERROR" });
        return !1;
      }
      return !0;
    }
    f["default"] = a;
  },
  66
);
__d(
  "storiesCreateFormValidationUtils",
  ["ctaValidator", "satpValidator"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
      return a.some(function (a) {
        return (a = a) != null ? a : !1;
      });
    };
    a = function (a, b, d) {
      var e = c("ctaValidator")(a, b);
      a = c("satpValidator")(a, b);
      e && a && d();
    };
    b = function (a) {
      var b,
        c = a.isUploading;
      a = a.viewState;
      b = h([
        a.ctaLinkData.linkInputError,
        ((b = a.mediaAttachments) == null
          ? void 0
          : (b = b[0]) == null
          ? void 0
          : b.fileType) === "PHOTO" &&
          ((b = a.photoData) == null ? void 0 : b.displayedURI) == null,
        (b = a.satpData) == null ? void 0 : b.inputError,
      ]);
      a =
        (a = (a = a.videoData) == null ? void 0 : a.isTrimming) != null
          ? a
          : !1;
      return b || c || a;
    };
    g.useFormHasErrors = h;
    g.validateForm = a;
    g.useFormSubmitDisabled = b;
  },
  98
);
__d(
  "useStoriesCreateFormExitConfirmation",
  ["StoriesCreateConstants", "useOnBeforeUnload"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      c("useOnBeforeUnload")(function () {
        if (a) return;
        var c = d("StoriesCreateConstants").LEAVE_TEXT.DEFAULT;
        return {
          primaryButtonLabel: c.CONFIRM,
          secondaryButtonLabel: c.CANCEL,
          title: b,
          warnMessage: e,
        };
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesCreateFormHandler",
  [
    "Actor",
    "CometRelay",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "StoriesCreateConstants",
    "StoriesCreateFormExitUtils",
    "StoriesCreateMediaUploaderContext",
    "StoriesCreateOverlayUtils",
    "StoriesCreateViewStateContext",
    "StoriesCreateViewStateDispatcherContext",
    "StoriesModuleCreateStoryWwwQPLEvent",
    "react",
    "requireDeferred",
    "storiesCreateFormValidationUtils",
    "useCometConfirmationDialog",
    "useNotificationsTrackingString",
    "usePrevious",
    "useStoriesCreateFormExitConfirmation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useEffect,
      k = c("requireDeferred")("StoriesCreateMutation").__setRef(
        "useStoriesCreateFormHandler"
      );
    function a(a, b, e, f, g, l) {
      var m = d("CometRelay").useRelayEnvironment(),
        n = i(c("StoriesCreateViewStateContext")),
        o = i(c("StoriesCreateViewStateDispatcherContext")),
        p = d("Actor").useActor(),
        q = p[0];
      p = c("usePrevious")(a);
      var r = p === !1 && a === !0 && l,
        s = c("useNotificationsTrackingString")();
      p = i(c("StoriesCreateMediaUploaderContext"));
      var t = p.uploader,
        u = h(
          function () {
            var a = d("StoriesCreateOverlayUtils").cloneOverlayNode(n);
            if (t == null) return;
            k.onReady(function (c) {
              c.createStories(
                n,
                q,
                m,
                t,
                a,
                g,
                function (a) {
                  return b(a, u);
                },
                f,
                s
              );
            });
          },
          [q, m, b, f, g, s, t, n]
        );
      l = c("useCometConfirmationDialog")();
      var v = l[0];
      p = d("storiesCreateFormValidationUtils").useFormSubmitDisabled({
        isUploading: a,
        viewState: n,
      });
      var w = d("StoriesCreateFormExitUtils").exitDialogInformation();
      j(
        function () {
          r &&
            (g != null &&
              (c("QuickPerformanceLogger").markerEnd(g, 4),
              c("QuickPerformanceLogger").markerStart(g)),
            u(),
            e());
        },
        [u, e, g, r]
      );
      c("useStoriesCreateFormExitConfirmation")(a, w.title, w.body);
      l = function () {
        d("storiesCreateFormValidationUtils").validateForm(n, o, function () {
          o({ type: "set_is_uploading", value: !0 });
        }),
          c("QPLUserFlow").endSuccess(c("StoriesModuleCreateStoryWwwQPLEvent"));
      };
      var x = d("StoriesCreateConstants").LEAVE_TEXT.DEFAULT;
      a = function () {
        v(
          {
            body: w.body,
            cancel: x.CANCEL,
            confirm: x.CONFIRM,
            title: w.title,
          },
          function () {
            o({ type: "restart" }),
              c("QPLUserFlow").endFailure(
                c("StoriesModuleCreateStoryWwwQPLEvent"),
                "User canceled"
              );
          }
        );
      };
      return { handleDiscard: a, handleSubmit: l, submitDisabled: p };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateFormFooterBase.react",
  [
    "fbt",
    "StoriesCreateConstants",
    "TetraButton.react",
    "react",
    "useStoriesCreateFormHandler",
    "withStoriesCreateViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useState;
    function a(a) {
      var b = a.isUploading,
        e = a.onError,
        f = a.onNavigate,
        g = a.onSuccess;
      a = a.qplEvent;
      var k = j(!1),
        l = k[0],
        m = k[1];
      k = c("useStoriesCreateFormHandler")(b, e, f, g, a, l);
      e = k.handleDiscard;
      var n = k.handleSubmit;
      f = k.submitDisabled;
      g = d("StoriesCreateConstants").LEAVE_TEXT.DEFAULT;
      return i.jsxs("div", {
        className:
          "tw6a2znq d1544ag0 i1fnvgqd rdkrh8wx btwxx1t3 j83agx80 kmp5kqmu cwj9ozl2 bp9cbjyn",
        children: [
          i.jsx("div", {
            className: "kkf49tns cgat1ltu qypqp5cg buofh1pr",
            children: i.jsx(c("TetraButton.react"), {
              disabled: b,
              label: g.CONFIRM,
              onPress: e,
              size: "medium",
              type: "secondary",
            }),
          }),
          i.jsx("div", {
            className: "kkf49tns cgat1ltu qypqp5cg buofh1pr",
            children: i.jsx(c("TetraButton.react"), {
              disabled: f,
              label: h._("Share to Story"),
              onPress: function () {
                n(), m(!0);
              },
              size: "medium",
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withStoriesCreateViewStatePart")(a, function (a) {
      return { isUploading: (a = a.isUploading) != null ? a : !1 };
    });
    g["default"] = b;
  },
  98
);
__d(
  "StoriesModuleStoriesCreateTtrcPhotoWwwQPLEvent",
  ["cr:7134"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:7134");
  },
  98
);
__d(
  "StoriesModuleStoriesCreateTtrcSatpWwwQPLEvent",
  ["cr:2112"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2112");
  },
  98
);
__d(
  "useStoriesCreateFormUpload",
  [
    "fbt",
    "ix",
    "CometRouteRenderType",
    "StoriesCreateMediaTypeEnum",
    "StoriesModuleStoriesCreateTtrcPhotoWwwQPLEvent",
    "StoriesModuleStoriesCreateTtrcSatpWwwQPLEvent",
    "TetraIcon.react",
    "XCometStoriesControllerRouteBuilder",
    "cometPushToast",
    "fbicon",
    "react",
    "requireDeferred",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = c("requireDeferred")("SilenceableErrorMessageUtils").__setRef(
        "useStoriesCreateFormUpload"
      );
    function a(a, b) {
      var e = c("useCometRouterDispatcher")(),
        f = d("CometRouteRenderType").useIsPushView(),
        g = function () {
          if (e == null) return;
          if (f && e.popPushView) {
            e.popPushView();
            return;
          }
          var b = { composerSessionID: a },
            d = c("XCometStoriesControllerRouteBuilder").buildURL({});
          e.go(d, { passthroughProps: b, target: "self" });
        },
        l = function (a, b) {
          k.onReady(function (e) {
            var f = e.getMetadataFromError;
            e = e.shouldHideErrorMessage;
            if (e(f(a))) return;
            d("cometPushToast").cometPushToast(
              {
                action: { label: h._("Try Again"), onPress: b },
                icon: j.jsx(c("TetraIcon.react"), {
                  color: "negative",
                  icon: d("fbicon")._(i("681772"), 24),
                }),
                message: h._("Your photo couldn't be uploaded to your story"),
              },
              1e4
            );
          });
        };
      b =
        b === c("StoriesCreateMediaTypeEnum").PHOTO
          ? c("StoriesModuleStoriesCreateTtrcPhotoWwwQPLEvent")
          : b === c("StoriesCreateMediaTypeEnum").SATP
          ? c("StoriesModuleStoriesCreateTtrcSatpWwwQPLEvent")
          : void 0;
      var m = function () {};
      return { onError: l, onNavigate: g, onSuccess: m, qplEvent: b };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesCreateFormFooter.react",
  [
    "StoriesCreateFormFooterBase.react",
    "react",
    "useStoriesCreateFormUpload",
    "withStoriesCreateViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.composerSessionID;
      a = a.mediaType;
      b = c("useStoriesCreateFormUpload")(b, a);
      a = b.onError;
      var d = b.onNavigate,
        e = b.onSuccess;
      b = b.qplEvent;
      return h.jsx(c("StoriesCreateFormFooterBase.react"), {
        onError: a,
        onNavigate: d,
        onSuccess: e,
        qplEvent: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("withStoriesCreateViewStatePart")(a, function (a) {
      return {
        composerSessionID: a.composerSessionID,
        mediaType: (a = a.formData) == null ? void 0 : a.mediaType,
      };
    });
    g["default"] = b;
  },
  98
);
__d(
  "StoriesModuleStoriesCreateTtrcSatpWwwQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(13238399);
    g["default"] = a;
  },
  98
);
__d(
  "StoriesModuleCreateStoryWwwQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(13250512);
    g["default"] = a;
  },
  98
);
__d(
  "StoriesModuleStoriesCreateTtrcPhotoWwwQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(13238398);
    g["default"] = a;
  },
  98
);
