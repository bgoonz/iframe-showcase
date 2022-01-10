if (self.CavalryLogger) {
  CavalryLogger.start_js(["9fxNnpH"]);
}

__d(
  "SearchCometInfoBoxAdditionalDetails_additionalDetails.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxAdditionalDetails_additionalDetails",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "InfoboxAdditionalDetails",
          kind: "LinkedField",
          name: "additional_details",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "label",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "InfoboxAttributeValue",
              kind: "LinkedField",
              name: "values",
              plural: !0,
              selections: [
                {
                  alias: "isLink",
                  args: null,
                  kind: "ScalarField",
                  name: "is_link",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "kgid",
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
          ],
          storageKey: null,
        },
      ],
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxAlbumTrackList_albumInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxAlbumTrackList_albumInfo",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "InfoboxTrackInfo",
          kind: "LinkedField",
          name: "tracks",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "InfoboxAttributeValue",
              kind: "LinkedField",
              name: "entity",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "kgid",
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
      type: "InfoboxAlbumInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxContentAttribution_infoBoxEntityAttributes.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxContentAttribution_infoBoxEntityAttributes",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "InfoboxMetadata",
          kind: "LinkedField",
          name: "metadata",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
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
        {
          alias: null,
          args: null,
          concreteType: "InfoboxForeignKey",
          kind: "LinkedField",
          name: "foreign_keys",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "key",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "provider",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "SearchCometInfoBoxImageAttribution_infoBoxEntityAttributes",
        },
      ],
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxDebug_infoBoxEntityAttributes.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxDebug_infoBoxEntityAttributes",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_user_employee",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "InfoboxMetadata",
          kind: "LinkedField",
          name: "metadata",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "primary_entity_fbid",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "primary_entity_kgid",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxDisambiguate_alternate.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxDisambiguate_alternate",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "InfoboxAlternateEntity",
          kind: "LinkedField",
          name: "alternate_entity_details",
          plural: !1,
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
              args: null,
              kind: "ScalarField",
              name: "kgid",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "domain",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "InfoboxMetadata",
          kind: "LinkedField",
          name: "metadata",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
            },
          ],
          storageKey: null,
        },
      ],
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxEntityAdditionalDetails_entityAdditionalDetails.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxEntityAdditionalDetails_entityAdditionalDetails",
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
          concreteType: "InfoboxDateDetails",
          kind: "LinkedField",
          name: "key_dates",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "label",
              storageKey: null,
            },
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
          concreteType: "InfoboxMetadata",
          kind: "LinkedField",
          name: "metadata",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "weight",
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
          concreteType: "InfoboxPlaceInfo",
          kind: "LinkedField",
          name: "place_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "area",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "capital",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "currency",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "InfoBoxPlaceEntInformation",
              kind: "LinkedField",
              name: "ent_data",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "population",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "InfoboxAttributeValue",
              kind: "LinkedField",
              name: "head_of_govt",
              plural: !1,
              selections: [
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
            {
              alias: null,
              args: null,
              concreteType: "InfoBoxRelatedEntitiesDetails",
              kind: "LinkedField",
              name: "related_places",
              plural: !0,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxRelatedEntities_relatedEntitiesDetails",
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
          concreteType: "InfoboxTrackInfo",
          kind: "LinkedField",
          name: "track_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "lyrics",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "InfoboxAlbumInfo",
          kind: "LinkedField",
          name: "album_info",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "SearchCometInfoBoxAlbumTrackList_albumInfo",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "SearchCometInfoBoxAdditionalDetails_additionalDetails",
        },
      ],
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxEntityDetails_entityDetails.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxEntityDetails_entityDetails",
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
          args: null,
          kind: "ScalarField",
          name: "summary",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
      ],
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxFeedback_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxFeedback_feedback",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "InfoboxMetadata",
          kind: "LinkedField",
          name: "metadata",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
            },
          ],
          storageKey: null,
        },
      ],
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxGridImage_image.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxGridImage_image",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
      ],
      type: "InfoboxImageInformation",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxHighlightedAttribute_highlightedAttributeDetails.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxHighlightedAttribute_highlightedAttributeDetails",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "InfoboxHighlightedAttribute",
          kind: "LinkedField",
          name: "highlighted_attribute",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "label",
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
          concreteType: "InfoboxSourceEntity",
          kind: "LinkedField",
          name: "source_entity_details",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "kgid",
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
              args: null,
              kind: "ScalarField",
              name: "relation",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "info_qna_answer_text",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "InfoboxMetadata",
          kind: "LinkedField",
          name: "metadata",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
            },
          ],
          storageKey: null,
        },
      ],
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxImageAttribution_infoBoxEntityAttributes.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "author_name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "file_name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "license_name",
            storageKey: null,
          },
        ],
        b = [
          {
            alias: null,
            args: null,
            concreteType: "InfoboxImageInformation",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: a,
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "SearchCometInfoBoxImageAttribution_infoBoxEntityAttributes",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "InfoboxImageInformation",
            kind: "LinkedField",
            name: "image_uris",
            plural: !0,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "InfoBoxRelatedEntitiesDetails",
            kind: "LinkedField",
            name: "movie_details",
            plural: !0,
            selections: b,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "InfoBoxRelatedEntitiesDetails",
            kind: "LinkedField",
            name: "top_people_uris",
            plural: !0,
            selections: b,
            storageKey: null,
          },
        ],
        type: "InfoBoxEntityAttributes",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxImageContainer_imageContainer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxImageContainer_imageContainer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "InfoboxImageInformation",
          kind: "LinkedField",
          name: "image_uris",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "handle",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "SearchCometInfoBoxGridImage_image",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "InfoboxMetadata",
          kind: "LinkedField",
          name: "metadata",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
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
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxKPEntryPoint_pageuri.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxKPEntryPoint_pageuri",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "fb_page_uri",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "InfoboxMetadata",
          kind: "LinkedField",
          name: "metadata",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
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
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxLinks_links.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxLinks_links",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "InfoboxForeignKey",
          kind: "LinkedField",
          name: "foreign_keys",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "key",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "provider",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "InfoboxMetadata",
          kind: "LinkedField",
          name: "metadata",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
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
      type: "InfoBoxEntityAttributes",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "bqf" },
        b = { defaultValue: null, kind: "LocalArgument", name: "id" },
        c = { defaultValue: null, kind: "LocalArgument", name: "session_id" },
        d = { defaultValue: null, kind: "LocalArgument", name: "surface" },
        e = [
          { kind: "Variable", name: "bqf", variableName: "bqf" },
          { kind: "Variable", name: "id", variableName: "id" },
          { kind: "Variable", name: "session_id", variableName: "session_id" },
          { kind: "Variable", name: "surface", variableName: "surface" },
        ],
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
          concreteType: "InfoboxCoronavirusStats",
          kind: "LinkedField",
          name: "coronavirus_stats",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "SearchCometInfoBoxQuery",
              fragmentName:
                "SearchCometInfoBoxCoronavirusStats_infoboxCoronavirusStats",
              fragmentPropName: "infoboxCoronavirusStats",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "domain",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        j = [i],
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "info_qna_answer_text",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "author_name",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "file_name",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "license_name",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "kgid",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        r = [
          {
            alias: null,
            args: null,
            concreteType: "InfoboxImageInformation",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: [l, m, n, o],
            storageKey: null,
          },
          p,
          f,
          q,
        ],
        s = [
          p,
          f,
          {
            alias: null,
            args: null,
            concreteType: "InfoboxImageInformation",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: [o],
            storageKey: null,
          },
          q,
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d],
          kind: "Fragment",
          metadata: null,
          name: "SearchCometInfoBoxQuery",
          selections: [
            {
              alias: null,
              args: e,
              concreteType: "InfoBoxEntityAttributes",
              kind: "LinkedField",
              name: "infobox_entity_attributes",
              plural: !1,
              selections: [
                f,
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxContentAttribution_infoBoxEntityAttributes",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxDebug_infoBoxEntityAttributes",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxDisambiguate_alternate",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxEntityAdditionalDetails_entityAdditionalDetails",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxEntityDetails_entityDetails",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxFeedback_feedback",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxImageContainer_imageContainer",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxLinks_links",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxKPEntryPoint_pageuri",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxRelatedEntitiesContainer_relatedEntitiesDetails",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometInfoBoxHighlightedAttribute_highlightedAttributeDetails",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxMetadata",
                  kind: "LinkedField",
                  name: "metadata",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxPlaceInfo",
                  kind: "LinkedField",
                  name: "place_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "InfoBoxPlaceEntInformation",
                      kind: "LinkedField",
                      name: "ent_data",
                      plural: !1,
                      selections: [g],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                h,
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxHighlightedAttribute",
                  kind: "LinkedField",
                  name: "highlighted_attribute",
                  plural: !1,
                  selections: j,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxSourceEntity",
                  kind: "LinkedField",
                  name: "source_entity_details",
                  plural: !1,
                  selections: j,
                  storageKey: null,
                },
                k,
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [d, a, b, c],
          kind: "Operation",
          name: "SearchCometInfoBoxQuery",
          selections: [
            {
              alias: null,
              args: e,
              concreteType: "InfoBoxEntityAttributes",
              kind: "LinkedField",
              name: "infobox_entity_attributes",
              plural: !1,
              selections: [
                f,
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxMetadata",
                  kind: "LinkedField",
                  name: "metadata",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "primary_entity_fbid",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "primary_entity_kgid",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "primary_entity_subtype",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "primary_entity_type",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "search_session_id",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxForeignKey",
                  kind: "LinkedField",
                  name: "foreign_keys",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "key",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "provider",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxImageInformation",
                  kind: "LinkedField",
                  name: "image_uris",
                  plural: !0,
                  selections: [
                    l,
                    m,
                    n,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "handle",
                      storageKey: null,
                    },
                    o,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoBoxRelatedEntitiesDetails",
                  kind: "LinkedField",
                  name: "movie_details",
                  plural: !0,
                  selections: r,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoBoxRelatedEntitiesDetails",
                  kind: "LinkedField",
                  name: "top_people_uris",
                  plural: !0,
                  selections: r,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_user_employee",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxAlternateEntity",
                  kind: "LinkedField",
                  name: "alternate_entity_details",
                  plural: !1,
                  selections: [f, p, h],
                  storageKey: null,
                },
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
                  concreteType: "InfoboxDateDetails",
                  kind: "LinkedField",
                  name: "key_dates",
                  plural: !0,
                  selections: [
                    q,
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
                  kind: "ScalarField",
                  name: "weight",
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
                  concreteType: "InfoboxPlaceInfo",
                  kind: "LinkedField",
                  name: "place_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "area",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "capital",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "currency",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "InfoBoxPlaceEntInformation",
                      kind: "LinkedField",
                      name: "ent_data",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "population",
                          storageKey: null,
                        },
                        g,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "InfoboxAttributeValue",
                      kind: "LinkedField",
                      name: "head_of_govt",
                      plural: !1,
                      selections: [f],
                      storageKey: null,
                    },
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
                    {
                      alias: null,
                      args: null,
                      concreteType: "InfoBoxRelatedEntitiesDetails",
                      kind: "LinkedField",
                      name: "related_places",
                      plural: !0,
                      selections: s,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxTrackInfo",
                  kind: "LinkedField",
                  name: "track_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "lyrics",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxAlbumInfo",
                  kind: "LinkedField",
                  name: "album_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "InfoboxTrackInfo",
                      kind: "LinkedField",
                      name: "tracks",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "InfoboxAttributeValue",
                          kind: "LinkedField",
                          name: "entity",
                          plural: !1,
                          selections: [p, f],
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
                  concreteType: "InfoboxAdditionalDetails",
                  kind: "LinkedField",
                  name: "additional_details",
                  plural: !0,
                  selections: [
                    q,
                    {
                      alias: null,
                      args: null,
                      concreteType: "InfoboxAttributeValue",
                      kind: "LinkedField",
                      name: "values",
                      plural: !0,
                      selections: [
                        {
                          alias: "isLink",
                          args: null,
                          kind: "ScalarField",
                          name: "is_link",
                          storageKey: null,
                        },
                        p,
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
                  name: "summary",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "fb_page_uri",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoBoxRelatedEntitiesDetails",
                  kind: "LinkedField",
                  name: "media_details",
                  plural: !0,
                  selections: s,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoBoxRelatedEntitiesDetails",
                  kind: "LinkedField",
                  name: "members",
                  plural: !0,
                  selections: s,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoBoxRelatedEntitiesDetails",
                  kind: "LinkedField",
                  name: "tvshow_details",
                  plural: !0,
                  selections: s,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxHighlightedAttribute",
                  kind: "LinkedField",
                  name: "highlighted_attribute",
                  plural: !1,
                  selections: [q, t, i],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InfoboxSourceEntity",
                  kind: "LinkedField",
                  name: "source_entity_details",
                  plural: !1,
                  selections: [
                    p,
                    f,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "relation",
                      storageKey: null,
                    },
                    i,
                  ],
                  storageKey: null,
                },
                k,
                h,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "5272001469538950",
          metadata: {},
          name: "SearchCometInfoBoxQuery",
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
  "SearchCometInfoBoxRelatedEntitiesContainer_relatedEntitiesDetails.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          args: null,
          kind: "FragmentSpread",
          name: "SearchCometInfoBoxRelatedEntities_relatedEntitiesDetails",
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "SearchCometInfoBoxRelatedEntitiesContainer_relatedEntitiesDetails",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "InfoBoxRelatedEntitiesDetails",
            kind: "LinkedField",
            name: "media_details",
            plural: !0,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "InfoBoxRelatedEntitiesDetails",
            kind: "LinkedField",
            name: "members",
            plural: !0,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "InfoboxMetadata",
            kind: "LinkedField",
            name: "metadata",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "InfoBoxRelatedEntitiesDetails",
            kind: "LinkedField",
            name: "movie_details",
            plural: !0,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "InfoBoxRelatedEntitiesDetails",
            kind: "LinkedField",
            name: "top_people_uris",
            plural: !0,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "InfoBoxRelatedEntitiesDetails",
            kind: "LinkedField",
            name: "tvshow_details",
            plural: !0,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "type",
            storageKey: null,
          },
        ],
        type: "InfoBoxEntityAttributes",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxRelatedEntities_relatedEntitiesDetails.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "SearchCometInfoBoxRelatedEntities_relatedEntitiesDetails",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "kgid",
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
          args: null,
          kind: "FragmentSpread",
          name: "SearchCometInfoBoxRelatedEntity_relatedEntity",
        },
      ],
      type: "InfoBoxRelatedEntitiesDetails",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxRelatedEntityImage_image.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxRelatedEntityImage_image",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
      ],
      type: "InfoboxImageInformation",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxRelatedEntity_relatedEntity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometInfoBoxRelatedEntity_relatedEntity",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "InfoboxImageInformation",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "SearchCometInfoBoxRelatedEntityImage_image",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
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
          args: null,
          kind: "ScalarField",
          name: "kgid",
          storageKey: null,
        },
      ],
      type: "InfoBoxRelatedEntitiesDetails",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "primary_entity_fbid",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "primary_entity_kgid",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "primary_entity_subtype",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "primary_entity_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "search_session_id",
          storageKey: null,
        },
      ],
      type: "InfoboxMetadata",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometResultsBootstrapEntityModuleResultCTAQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        b = [{ kind: "Variable", name: "id", variableName: "id" }];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "SearchCometResultsBootstrapEntityModuleResultCTAQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "search_cta_model",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "SearchCometResultsCTA_ctaModel",
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
          name: "SearchCometResultsBootstrapEntityModuleResultCTAQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "search_cta_model",
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
                  kind: "TypeDiscriminator",
                  abstractKey: "__isSearchCTAModel",
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "SearchCometResultsCTA_ctaModel",
                      fragmentName: "SearchCometResultsAppCTA_ctaModel",
                      fragmentPropName: "ctaModel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "SearchAppCTAModel",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "SearchCometResultsCTA_ctaModel",
                      fragmentName: "SearchCometResultsEventCTA_ctaModel",
                      fragmentPropName: "ctaModel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "SearchEventCTAModel",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "SearchCometResultsCTA_ctaModel",
                      fragmentName: "SearchCometResultsGroupCTA_ctaModel",
                      fragmentPropName: "ctaModel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "SearchGroupCTAModel",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "SearchCometResultsCTA_ctaModel",
                      fragmentName: "SearchCometResultsPageCTA_ctaModel",
                      fragmentPropName: "ctaModel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "SearchPageCTAModel",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "SearchCometResultsCTA_ctaModel",
                      fragmentName: "SearchCometResultsUserCTA_ctaModel",
                      fragmentPropName: "ctaModel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "SearchUserCTAModel",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "SearchCometResultsCTA_ctaModel",
                      fragmentName: "SearchCometResultsGameCTA_ctaModel",
                      fragmentPropName: "ctaModel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "SearchGameCTAModel",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "SearchCometResultsCTA_ctaModel",
                      fragmentName:
                        "SearchCometResultsInstantApplicationCTA_ctaModel",
                      fragmentPropName: "ctaModel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "SearchInstantApplicationCTAModel",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "5887496644656428",
          metadata: {},
          name: "SearchCometResultsBootstrapEntityModuleResultCTAQuery",
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
  "SearchResultsLoggingModuleUnitDataFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744355");
    c = b("FalcoLoggerInternal").create(
      "search_results_logging_module_unit_data",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "useSearchCometResultsBootstrapEntityModuleUnitDataLogger",
  ["SearchResultsLoggingModuleUnitDataFalcoEvent", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a) {
      var b = a.bootstrapItemIDs,
        d = a.isHighConfidenceResult,
        e = a.loggingUnitID,
        f = a.modulePosition,
        g = a.resultsModuleRole,
        i = a.sessionID;
      h(
        function () {
          if (b == null) return;
          c("SearchResultsLoggingModuleUnitDataFalcoEvent").logImmediately(
            function () {
              var a = {
                bootstrap_item_count: b.length,
                bootstrap_item_ids: b,
                is_high_confidence_result: d,
                logging_unit_id: e,
                module_position: f,
                results_module_role: g,
                session_id: i,
              };
              return a;
            }
          );
        },
        [b, d, e, f, g, i]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchResultsLoggingResultUnitDataFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744356");
    c = b("FalcoLoggerInternal").create(
      "search_results_logging_result_unit_data",
      a
    );
    e.exports = c;
  },
  null
);
__d(
  "useSearchCometResultsUnitDataLogger",
  ["SearchResultsLoggingResultUnitDataFalcoEvent", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a) {
      var b = a.bootstrapItemIDs,
        d = a.isHighConfidenceResult,
        e = a.loggingUnitID,
        f = a.resultsModuleRole,
        g = a.sessionID,
        i = a.tappedResultEntityID;
      h(
        function () {
          c("SearchResultsLoggingResultUnitDataFalcoEvent").logImmediately(
            function () {
              var a = {
                is_high_confidence_result: d,
                logging_unit_id: e,
                results_module_role: f,
                session_id: g,
                tapped_result_entity_id: i,
              };
              b != null &&
                ((a.bootstrap_item_count = b.length),
                (a.bootstrap_item_ids = Array.from(b)));
              return a;
            }
          );
        },
        [b, d, e, f, g, i]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "InfoboxUserInteractionsTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:InfoboxUserInteractionsLoggerConfig"
    );
  },
  null
);
__d(
  "InfoBoxLoggingUtils",
  [
    "CometRelay",
    "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata.graphql",
    "InfoboxUserInteractionsTypedLoggerLite",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, b, d) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: a,
        event_type: "entity_detail_show_more_click",
        primary_entity_kgid: b == null ? void 0 : b.primaryEntityKgid,
        primary_entity_subtype: b == null ? void 0 : b.primaryEntitySubtype,
        primary_entity_type: b == null ? void 0 : b.primaryEntityType,
        search_session_id: b == null ? void 0 : b.searchSessionId,
        surface: d,
      });
    }
    function e(a, b, d) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: a,
        event_type: "entity_detail_value_click",
        primary_entity_kgid: b == null ? void 0 : b.primaryEntityKgid,
        primary_entity_subtype: b == null ? void 0 : b.primaryEntitySubtype,
        primary_entity_type: b == null ? void 0 : b.primaryEntityType,
        search_session_id: b == null ? void 0 : b.searchSessionId,
        surface: d,
      });
    }
    function f(a, b, d) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: a,
        event_type: "image_carousel_click",
        primary_entity_kgid: b == null ? void 0 : b.primaryEntityKgid,
        primary_entity_subtype: b == null ? void 0 : b.primaryEntitySubtype,
        primary_entity_type: b == null ? void 0 : b.primaryEntityType,
        search_session_id: b == null ? void 0 : b.searchSessionId,
        surface: d,
      });
    }
    function i(a, b, d) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: a,
        event_type: "image_carousel_impression",
        primary_entity_kgid: b == null ? void 0 : b.primaryEntityKgid,
        primary_entity_subtype: b == null ? void 0 : b.primaryEntitySubtype,
        primary_entity_type: b == null ? void 0 : b.primaryEntityType,
        search_session_id: b == null ? void 0 : b.searchSessionId,
        surface: d,
      });
    }
    function j(a, b, d) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: a,
        event_type: "related_entity_carousel_interaction",
        primary_entity_kgid: b == null ? void 0 : b.primaryEntityKgid,
        primary_entity_subtype: b == null ? void 0 : b.primaryEntitySubtype,
        primary_entity_type: b == null ? void 0 : b.primaryEntityType,
        search_session_id: b == null ? void 0 : b.searchSessionId,
        surface: d,
      });
    }
    function k(a, b, d) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: a,
        event_type: "photos_tab_image_click",
        primary_entity_kgid: b == null ? void 0 : b.primaryEntityKgid,
        primary_entity_subtype: b == null ? void 0 : b.primaryEntitySubtype,
        primary_entity_type: b == null ? void 0 : b.primaryEntityType,
        search_session_id: b == null ? void 0 : b.searchSessionId,
        surface: d,
      });
    }
    function l(a, b, d) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: a,
        event_type: "photos_tab_image_impression",
        primary_entity_kgid: b == null ? void 0 : b.primaryEntityKgid,
        primary_entity_subtype: b == null ? void 0 : b.primaryEntitySubtype,
        primary_entity_type: b == null ? void 0 : b.primaryEntityType,
        search_session_id: b == null ? void 0 : b.searchSessionId,
        surface: d,
      });
    }
    function m(a, b, d, e) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: b,
        event_subtype: a,
        event_type: "user_feedback",
        primary_entity_kgid: d == null ? void 0 : d.primaryEntityKgid,
        primary_entity_subtype: d == null ? void 0 : d.primaryEntitySubtype,
        primary_entity_type: d == null ? void 0 : d.primaryEntityType,
        search_session_id: d == null ? void 0 : d.searchSessionId,
        surface: e,
      });
    }
    function n(a, b, d, e, f) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: d,
        event_type: "related_entity_click",
        primary_entity_kgid: e == null ? void 0 : e.primaryEntityKgid,
        primary_entity_subtype: e == null ? void 0 : e.primaryEntitySubtype,
        primary_entity_type: e == null ? void 0 : e.primaryEntityType,
        related_entity_kgid: a != null ? a.toString() : null,
        related_entity_type: b,
        search_session_id: e == null ? void 0 : e.searchSessionId,
        surface: f,
      });
    }
    function o(a, b, d, e) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: a,
        event_subtype: b,
        event_type: "foreign_key_click",
        primary_entity_kgid: d == null ? void 0 : d.primaryEntityKgid,
        primary_entity_subtype: d == null ? void 0 : d.primaryEntitySubtype,
        primary_entity_type: d == null ? void 0 : d.primaryEntityType,
        search_session_id: d == null ? void 0 : d.searchSessionId,
        surface: e,
      });
    }
    function p(a, b, d) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: a,
        event_type: "knowledge_page_impression",
        primary_entity_kgid: b == null ? void 0 : b.primaryEntityKgid,
        primary_entity_subtype: b == null ? void 0 : b.primaryEntitySubtype,
        primary_entity_type: b == null ? void 0 : b.primaryEntityType,
        search_session_id: b == null ? void 0 : b.searchSessionId,
        surface: d,
      });
    }
    function q(a, b, d) {
      c("InfoboxUserInteractionsTypedLoggerLite").log({
        event_rendered_data: a,
        event_type: "knowledge_page_click",
        primary_entity_kgid: b == null ? void 0 : b.primaryEntityKgid,
        primary_entity_subtype: b == null ? void 0 : b.primaryEntitySubtype,
        primary_entity_type: b == null ? void 0 : b.primaryEntityType,
        search_session_id: b == null ? void 0 : b.searchSessionId,
        surface: d,
      });
    }
    function r(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "InfoBoxLoggingUtils_infoboxEntityAttributesMetadata.graphql"
            )),
        a
      );
      return {
        primaryEntityFbid: a == null ? void 0 : a.primary_entity_fbid,
        primaryEntityKgid: a == null ? void 0 : a.primary_entity_kgid,
        primaryEntitySubtype: a == null ? void 0 : a.primary_entity_subtype,
        primaryEntityType: a == null ? void 0 : a.primary_entity_type,
        searchSessionId: a == null ? void 0 : a.search_session_id,
      };
    }
    g.logEntityDetailSeeMoreEvent = a;
    g.logEntityDetailValueClickEvent = e;
    g.logImageCarouselClickEvent = f;
    g.logImageCarouselImpression = i;
    g.logRelatedEntitiesCarouselImpression = j;
    g.logPhotosTabImageClickEvent = k;
    g.logPhotosTabImageImpression = l;
    g.logUserFeedbackEvent = m;
    g.logRelatedEntityClickEvent = n;
    g.logForeignKeyClickEvent = o;
    g.logKnowledgePageImpression = p;
    g.logKnowledgePageClickEvent = q;
    g.useFormattedMetadata = r;
  },
  98
);
__d(
  "KPWhitelistedDomains",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ PERSON: "person", MOVIE: "movie", TVSHOW: "tvshow" });
    f["default"] = a;
  },
  66
);
__d(
  "InfoBoxConstants",
  ["fbt", "ix"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = "Something Else";
    b = [
      {
        checked: !1,
        displayText: h._("Content is Inaccurate"),
        name: "Content is Inaccurate",
      },
      {
        checked: !1,
        displayText: h._("Content is Irrelevant"),
        name: "Content Is Irrelevant",
      },
      {
        checked: !1,
        displayText: h._("Contains Nudity"),
        name: "Contains Nudity",
      },
      {
        checked: !1,
        displayText: h._("Contains Hate Speech"),
        name: "Contains Hate Speech",
      },
      { checked: !1, displayText: h._("Gross Content"), name: "Gross Content" },
      { checked: !1, displayText: h._("Something Else"), name: a },
    ];
    c = "place.country";
    d = "Thanks for your feedback!";
    e = 4;
    f = 4;
    h = {
      birth: "Date of Birth",
      "contains-track:track": "Track",
      death: "Date of Death",
      "former-spouse:person": "Ex-Spouse",
      "from:director-of:person": "Director",
      "from:performer-of:artist": "Performer",
      "from:primary-performer-of:artist": "Performer",
      "married-to:person": "Spouse",
    };
    var j = {
        entityDetails: "entityDetails",
        entityName: "entityName",
        image: "image",
        relatedEntites: "relatedEntites",
      },
      k = "https://creativecommons.org/licenses/by-sa/3.0/",
      l = "https://en.wikipedia.org/wiki/",
      m = "https://www.instagram.com/";
    i = {
      next: { false: i("831369"), true: i("831392") },
      previous: { false: i("1089455"), true: i("831336") },
    };
    g.SOMETHING_ELSE_FEEDBACK_ITEM = a;
    g.FEEDBACK_CHECKLIST_ITEMS = b;
    g.COUNTRY_DOMAIN = c;
    g.FEEDBACK_SUBMITTED_MESSAGE = d;
    g.NUMBER_PRIMARY_IMAGES_FOR_CAROUSEL = e;
    g.NUMBER_RELATED_ENTITIES_TO_SHOW = f;
    g.HIGHLIGHTED_ATTRIBUTE_LABELS = h;
    g.PUBLIC_FEEDBACK_SECTIONS = j;
    g.CC_LICENSE_HREF = k;
    g.WIKINAME_HREF = l;
    g.INSTAGRAM_HREF = m;
    g.IMAGE_PREVIEW_ACTIVE_CHEVRON_MAP = i;
  },
  98
);
__d(
  "SearchCometInfoBoxImageAttribution.react",
  [
    "fbt",
    "CometRelay",
    "CometTextLink.react",
    "SearchCometInfoBoxImageAttribution_infoBoxEntityAttributes.graphql",
    "filterNulls",
    "intlList",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useState;
    function a(a) {
      a = a.infoboxEntityAttributes;
      var e = l(!1),
        f = e[0],
        g = e[1];
      e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "SearchCometInfoBoxImageAttribution_infoBoxEntityAttributes.graphql"
            )),
        a
      );
      a = e.image_uris;
      var m = e.movie_details;
      e = e.top_people_uris;
      var n = k(function () {
          return g(!0);
        }, []),
        o = k(function () {
          return g(!1);
        }, []);
      a = a
        .concat(
          c("filterNulls")(
            m.map(function (a) {
              a = a.image;
              return a;
            })
          )
        )
        .concat(
          c("filterNulls")(
            e.map(function (a) {
              a = a.image;
              return a;
            })
          )
        );
      m = new Map();
      for (
        var e = a,
          a = Array.isArray(e),
          p = 0,
          e = a
            ? e
            : e[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var q;
        if (a) {
          if (p >= e.length) break;
          q = e[p++];
        } else {
          p = e.next();
          if (p.done) break;
          q = p.value;
        }
        q = q;
        var r = q.file_name,
          s = q.license_name;
        if (s == null || s === "" || r == null || r === "") continue;
        var t = m.get(s);
        t != null ? t.add(q) : m.set(s, new Set([q]));
      }
      t = [];
      for (
        var s = m,
          q = Array.isArray(s),
          p = 0,
          s = q
            ? s
            : s[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        if (q) {
          if (p >= s.length) break;
          a = s[p++];
        } else {
          p = s.next();
          if (p.done) break;
          a = p.value;
        }
        e = a;
        m = e[0];
        a = e[1];
        e = [];
        for (
          var a = a,
            u = Array.isArray(a),
            v = 0,
            a = u
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var w;
          if (u) {
            if (v >= a.length) break;
            w = a[v++];
          } else {
            v = a.next();
            if (v.done) break;
            w = v.value;
          }
          w = w;
          var x = w.author_name,
            r = w.file_name;
          if (r == null) continue;
          x != null && x !== ""
            ? e.push(
                j.jsx(
                  "span",
                  {
                    children: h._(
                      "{File name of licensed image} by {Name of license holder}",
                      [
                        h._param(
                          "File name of licensed image",
                          j.jsx(c("CometTextLink.react"), {
                            href:
                              "https://commons.wikimedia.org/wiki/File:" + r,
                            type: "bodyLink3",
                            children: r,
                          })
                        ),
                        h._param("Name of license holder", x),
                      ]
                    ),
                  },
                  "image-attribution-" + r
                )
              )
            : e.push(j.jsx("span", { children: r }, "image-attribution-" + r));
        }
        t.push(
          j.jsxs(
            "span",
            {
              children: [
                h._(
                  "{List of licensed image filenames and authors} licensed under {Name of an image license, e.g. CC-BY-2.0}.",
                  [
                    h._param(
                      "List of licensed image filenames and authors",
                      c("intlList")(e, "AND", "COMMA")
                    ),
                    h._param(
                      "Name of an image license, e.g. CC-BY-2.0",
                      m.toUpperCase()
                    ),
                  ]
                ),
                " ",
              ],
            },
            "image-attribution-license-group-" + m
          )
        );
      }
      return t.length === 0
        ? null
        : j.jsx(j.Fragment, {
            children: f
              ? j.jsxs(j.Fragment, {
                  children: [
                    t,
                    " ",
                    j.jsx(c("CometTextLink.react"), {
                      onClick: o,
                      type: "bodyLink3",
                      children: h._("See less"),
                    }),
                  ],
                })
              : j.jsx(c("CometTextLink.react"), {
                  onClick: n,
                  type: "bodyLink3",
                  children: h._("See more"),
                }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxContentAttribution.react",
  [
    "fbt",
    "CometRelay",
    "CometTextLink.react",
    "InfoBoxConstants",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxContentAttribution_infoBoxEntityAttributes.graphql",
    "SearchCometInfoBoxImageAttribution.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = a.infoboxEntityAttributes;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "SearchCometInfoBoxContentAttribution_infoBoxEntityAttributes.graphql"
            )),
        a
      );
      var e = a.foreign_keys,
        f = a.metadata,
        g = a.name,
        k = d("InfoBoxLoggingUtils").useFormattedMetadata(f);
      if (g == null) return null;
      e =
        e == null
          ? void 0
          : (f = e.find(function (a) {
              a = a.provider;
              return a === "wikipedia";
            })) == null
          ? void 0
          : f.key;
      e = (f = e) != null ? f : g;
      f = e.split(" ").join("_");
      f = d("InfoBoxConstants").WIKINAME_HREF + f;
      return j.jsx("div", {
        className: "discj3wi",
        children: j.jsx(c("TetraTextPairing.react"), {
          body: j.jsxs(j.Fragment, {
            children: [
              j.jsx("svg", {
                className: "hmalg0qr l9j0dhe7",
                height: "12px",
                version: "1.1",
                viewBox: "0 0 26 17",
                width: "19px",
                children: j.jsx("g", {
                  fill: "none",
                  fillRule: "evenodd",
                  id: "New-Components",
                  stroke: "none",
                  strokeWidth: "1",
                  children: j.jsx("g", {
                    fill: "var(--primary-icon)",
                    id: "Wikipedia's_W",
                    children: j.jsx("path", {
                      d: "M25.9657895,0.275964912 C25.9657895,0.369473684 25.9361404,0.453859649 25.8791228,0.531403509 C25.8198246,0.606666667 25.7582456,0.645438596 25.6875439,0.645438596 C25.1196491,0.700175439 24.6521053,0.882631579 24.2917544,1.19508772 C23.9291228,1.50526316 23.5573684,2.10052632 23.1719298,2.97631579 L17.2877193,16.2363158 C17.2489474,16.3594737 17.1417544,16.4210526 16.9638596,16.4210526 C16.8247368,16.4210526 16.7175439,16.3594737 16.64,16.2363158 L13.3398246,9.33491228 L9.54473684,16.2363158 C9.46719298,16.3594737 9.36,16.4210526 9.22087719,16.4210526 C9.05210526,16.4210526 8.94035088,16.3594737 8.88561404,16.2363158 L3.10403509,2.97631579 C2.74368421,2.15298246 2.36280702,1.57824561 1.96140351,1.25210526 C1.5622807,0.925964912 1.00350877,0.722982456 0.289649123,0.645438596 C0.228070175,0.645438596 0.16877193,0.613508772 0.116315789,0.547368421 C0.0615789474,0.483508772 0.0342105263,0.408245614 0.0342105263,0.323859649 C0.0342105263,0.107192982 0.0957894737,0 0.218947368,0 C0.734385965,0 1.27263158,0.0228070175 1.83596491,0.0684210526 C2.35824561,0.116315789 2.85087719,0.139122807 3.31157895,0.139122807 C3.78140351,0.139122807 4.33561404,0.116315789 4.97421053,0.0684210526 C5.64245614,0.0228070175 6.2354386,0 6.75087719,0 C6.87403509,0 6.93561404,0.107192982 6.93561404,0.323859649 C6.93561404,0.538245614 6.89684211,0.645438596 6.82157895,0.645438596 C6.30614035,0.684210526 5.90017544,0.816491228 5.60368421,1.0377193 C5.30719298,1.26122807 5.15894737,1.55315789 5.15894737,1.91578947 C5.15894737,2.10052632 5.22052632,2.33087719 5.34368421,2.60684211 L10.1217544,13.3968421 L12.8335088,8.27438596 L10.3064912,2.97631579 C9.85263158,2.03210526 9.47859649,1.42087719 9.18666667,1.14719298 C8.89473684,0.875789474 8.4522807,0.707017544 7.85929825,0.645438596 C7.8045614,0.645438596 7.75438596,0.613508772 7.70421053,0.547368421 C7.65403509,0.483508772 7.62894737,0.408245614 7.62894737,0.323859649 C7.62894737,0.107192982 7.68140351,0 7.79087719,0 C8.30631579,0 8.77842105,0.0228070175 9.20947368,0.0684210526 C9.6245614,0.116315789 10.0670175,0.139122807 10.5368421,0.139122807 C10.9975439,0.139122807 11.485614,0.116315789 12.0010526,0.0684210526 C12.5324561,0.0228070175 13.0547368,0 13.5701754,0 C13.6933333,0 13.7549123,0.107192982 13.7549123,0.323859649 C13.7549123,0.538245614 13.7184211,0.645438596 13.6408772,0.645438596 C12.61,0.716140351 12.0945614,1.00807018 12.0945614,1.52350877 C12.0945614,1.75385965 12.2131579,2.11192982 12.4526316,2.5954386 L14.124386,5.98912281 L15.7870175,2.88508772 C16.0173684,2.44719298 16.1336842,2.0777193 16.1336842,1.77666667 C16.1336842,1.06964912 15.6182456,0.693333333 14.5873684,0.645438596 C14.4938596,0.645438596 14.4482456,0.538245614 14.4482456,0.323859649 C14.4482456,0.246315789 14.4710526,0.173333333 14.5166667,0.104912281 C14.5645614,0.0342105263 14.6101754,0 14.6557895,0 C15.0252632,0 15.4791228,0.0228070175 16.0173684,0.0684210526 C16.532807,0.116315789 16.9570175,0.139122807 17.2877193,0.139122807 C17.5249123,0.139122807 17.8761404,0.118596491 18.3368421,0.0798245614 C18.9207018,0.0273684211 19.4110526,0 19.8033333,0 C19.8945614,0 19.9401754,0.0912280702 19.9401754,0.275964912 C19.9401754,0.522280702 19.8557895,0.645438596 19.6870175,0.645438596 C19.087193,0.707017544 18.6036842,0.873508772 18.2387719,1.14263158 C17.8738596,1.41175439 17.4177193,2.02298246 16.8726316,2.97631579 L14.6557895,7.07473684 L17.657193,13.1892982 L22.0885965,2.88508772 C22.2414035,2.50877193 22.3189474,2.16210526 22.3189474,1.84736842 C22.3189474,1.09245614 21.8035088,0.693333333 20.7726316,0.645438596 C20.6791228,0.645438596 20.6335088,0.538245614 20.6335088,0.323859649 C20.6335088,0.107192982 20.7019298,0 20.8410526,0 C21.2173684,0 21.664386,0.0228070175 22.1798246,0.0684210526 C22.6564912,0.116315789 23.0578947,0.139122807 23.3794737,0.139122807 C23.7192982,0.139122807 24.1115789,0.116315789 24.5563158,0.0684210526 C25.0192982,0.0228070175 25.434386,0 25.8038596,0 C25.9110526,0 25.9657895,0.0912280702 25.9657895,0.275964912 Z",
                      fill: "var(--primary-icon)",
                      id: "Path",
                    }),
                  }),
                }),
              }),
              " ",
              j.jsxs(c("TetraText.react"), {
                type: "body3",
                children: [
                  h._(
                    "Content from the Wikipedia article {wikipedia name link} licensed under {Link to creative commons website}.",
                    [
                      h._param(
                        "wikipedia name link",
                        j.jsx(c("CometTextLink.react"), {
                          href: f,
                          onClick: function () {
                            d("InfoBoxLoggingUtils").logForeignKeyClickEvent(
                              g,
                              "wikipedia",
                              k,
                              "infobox"
                            );
                          },
                          type: "bodyLink3",
                          children: e,
                        })
                      ),
                      h._param(
                        "Link to creative commons website",
                        j.jsx(c("CometTextLink.react"), {
                          href: d("InfoBoxConstants").CC_LICENSE_HREF,
                          type: "bodyLink3",
                          children: h._("CC-BY-SA"),
                        })
                      ),
                    ]
                  ),
                  " ",
                  j.jsx(c("SearchCometInfoBoxImageAttribution.react"), {
                    infoboxEntityAttributes: a,
                  }),
                ],
              }),
            ],
          }),
          level: 3,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useReducer,
      j = {
        hasSubmittedFeedback: !1,
        inSectionSelectionMode: !1,
        selectedAttribute: null,
        selectedComponent: null,
        showFeedbackModal: !1,
      },
      k = h.createContext(j),
      l = h.createContext(),
      m = function (a, b) {
        switch (b.type) {
          case "ON_FEEDBACK_CLOSE":
            return {
              hasSubmittedFeedback: a.hasSubmittedFeedback,
              inSectionSelectionMode: !1,
              selectedAttribute: null,
              selectedComponent: null,
              showFeedbackModal: !1,
            };
          case "HANDLE_GENERAL_FEEDBACK":
            return {
              hasSubmittedFeedback: !1,
              inSectionSelectionMode: !1,
              selectedAttribute: null,
              selectedComponent: null,
              showFeedbackModal: !0,
            };
          case "HANDLE_INITIATE_FEEDBACK":
          case "HANDLE_NEGATIVE_FEEDBACK":
            return {
              hasSubmittedFeedback: !1,
              inSectionSelectionMode: !0,
              selectedAttribute: null,
              selectedComponent: null,
              showFeedbackModal: !1,
            };
          case "HANDLE_POSITIVE_FEEDBACK":
            return {
              hasSubmittedFeedback: !0,
              inSectionSelectionMode: !1,
              selectedAttribute: null,
              selectedComponent: null,
              showFeedbackModal: !1,
            };
          case "SET_SUBMITTED_FEEDBACK":
            return {
              hasSubmittedFeedback: !0,
              inSectionSelectionMode: !1,
              selectedAttribute: null,
              selectedComponent: null,
              showFeedbackModal: !1,
            };
          case "HANDLE_SECTION_SELECTION":
            return {
              hasSubmittedFeedback: !1,
              inSectionSelectionMode: !1,
              selectedAttribute: b.payload.selectedAttribute,
              selectedComponent: b.payload.selectedComponent,
              showFeedbackModal: !0,
            };
          case "SET_GLOBAL_STATE":
            return b.payload;
          default:
            return j;
        }
      };
    a = function (a) {
      a = a.children;
      var b = i(m, j),
        c = b[0];
      b = b[1];
      return h.jsx(k.Provider, {
        value: c,
        children: h.jsx(l.Provider, { value: b, children: a }),
      });
    };
    b = k.Consumer;
    g.SearchCometInfoBoxContext = k;
    g.SearchCometInfoBoxDispatchContext = l;
    g.SearchCometInfoBoxContextProvider = a;
    g.SearchCometInfoBoxContextConsumer = b;
  },
  98
);
__d(
  "SearchCometInfoBoxCoronavirusStatsGlimmer.react",
  ["BaseGlimmer.react", "CometLegacyListItemBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        className: "discj3wi tr9rh885 rq0escxv l6v480f0",
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className:
              "t6lsiwyf n851cfcs jnigpg78 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
            index: 0,
          }),
          h.jsx(c("BaseGlimmer.react"), {
            className: "sjgh65i0 dqmwjwen l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
            index: 1,
          }),
          h.jsxs(c("CometLegacyListItemBase.react"), {
            addon: h.jsx(c("BaseGlimmer.react"), {
              className:
                "ljni7pan cb02d2ww be9qi1ea alrr0afh kip1xq3a p0p8w163",
              index: 2,
            }),
            children: [
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "tvmbv18p gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 df91hpq7",
                index: 2,
              }),
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "tvmbv18p gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 k6hq67h2",
                index: 2,
              }),
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "tvmbv18p gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 pnicyljo",
                index: 2,
              }),
            ],
          }),
          h.jsx(c("BaseGlimmer.react"), {
            className:
              "k4urcfbm tr9rh885 tv7at329 kzx2olss aot14ch1 p86d2i9g beltcj47",
            index: 3,
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
  "SearchCometInfoBoxDebug.react",
  [
    "CometRelay",
    "SearchCometInfoBoxDebug_infoBoxEntityAttributes.graphql",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e, f;
      a = a.infoboxEntityAttributes;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometInfoBoxDebug_infoBoxEntityAttributes.graphql")),
        a
      );
      if (a == null) return null;
      e = (e = a.metadata) == null ? void 0 : e.primary_entity_fbid;
      f = (f = a.metadata) == null ? void 0 : f.primary_entity_kgid;
      return Boolean(a.is_user_employee) && e != null && f != null
        ? i.jsx("div", {
            className: "aov4n071",
            children: i.jsx(c("TetraText.react"), {
              type: "meta4",
              children: "[FB-Only]: Entity KGFBID: " + e + " KGID: " + f,
            }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxDisambiguate.react",
  [
    "fbt",
    "CometRelay",
    "CometTextLink.react",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxDisambiguate_alternate.graphql",
    "TetraText.react",
    "gkx",
    "react",
    "useSearchCometGlobalSERPRouteUrlBuilder",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = a.infoboxEntityAttributes;
      var e = c("useSearchCometGlobalSERPRouteUrlBuilder")();
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("SearchCometInfoBoxDisambiguate_alternate.graphql")),
        a
      );
      var f = a.alternate_entity_details;
      a = a.metadata;
      var g = c("gkx")("1362288"),
        k = d("InfoBoxLoggingUtils").useFormattedMetadata(a);
      if (!g || f == null) return null;
      a = f.domain;
      var l = f.kgid,
        m = f.name;
      g = e({
        entryPointAction: "RELATED_SEARCHES",
        kgid: l,
        query: m != null ? m : "",
      });
      return j.jsx("div", {
        className: "ihqw7lf3 e9vueds3",
        children: j.jsxs(c("TetraText.react"), {
          type: "body3",
          children: [
            h._("Did you mean?"),
            " ",
            j.jsxs(c("CometTextLink.react"), {
              href: g,
              onClick: function () {
                return d("InfoBoxLoggingUtils").logRelatedEntityClickEvent(
                  l,
                  "disambiguation",
                  m,
                  k,
                  "infobox"
                );
              },
              type: "bodyLink3",
              children: [m, " (", a, ")"],
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
  "SearchCometInfoBoxClickableRowItem.react",
  [
    "CometLink.react",
    "InfoBoxLoggingUtils",
    "SearchCometResultsQueryContext",
    "TetraText.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.delimiter,
        e = a.kgid,
        f = a.label,
        g = a.metadata,
        j = a.value;
      a = a.xstyle;
      var k = d(
        "SearchCometResultsQueryContext"
      ).useSearchCometResultsQueryContext();
      k = k.urlBuilder;
      var l = i(
        function () {
          d("InfoBoxLoggingUtils").logEntityDetailValueClickEvent(
            JSON.stringify({ attributeData: { name: f, value: j } }, null, 1),
            g,
            "infobox"
          );
        },
        [j, f, g]
      );
      k = k({ entryPointAction: "RELATED_SEARCHES", kgid: e, query: j });
      return h.jsx("div", {
        className: c("stylex")(a),
        children: h.jsx(c("CometLink.react"), {
          href: k,
          onClick: l,
          children: h.jsx(
            c("TetraText.react"),
            { type: "bodyLink3", children: j + ((e = b) != null ? e : "") },
            f
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
  "SearchCometInfoBoxConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { TVShow: "TV Show" };
    b = "headline4";
    f.FORMATTED_DOMAIN_LABELS = a;
    f.ENTITY_DETAIL_ROW_LABEL_STYLE = b;
  },
  66
);
__d(
  "SearchCometInfoBoxFeedbackSection.react",
  ["CometPressable.react", "SearchCometInfoBoxContext", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = {
      entityDetails: "entityDetails",
      entityName: "entityName",
      image: "image",
      relatedEntites: "relatedEntites",
    };
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = {
        block: { display: "q9uorilb" },
        blockClickEvents: { pointerEvents: "hzruof5a" },
        border: {
          borderTop: "rg76wyzq",
          borderEnd: "jm7nytfl",
          borderBottom: "j1vyfwqu",
          borderStart: "o9q50ak6",
          outline: "lkasxqj7",
        },
        containerSelected: { cursor: "nhd2j8a9" },
        imageWrapper: { opacity: "kgtf8isp" },
        inline: { display: "nc684nl6" },
        withImageOverlay: { backgroundColor: "s1i5eluu" },
        withoutImageOverlay: { backgroundColor: "oo1teu6h" },
        wrapper: { height: "datstx6m", width: "k4urcfbm" },
      };
    function a(a) {
      var b = a.attributeData,
        e = a.block;
      e = e === void 0 ? !1 : e;
      var f = a.children;
      a = a.isImage;
      a = a === void 0 ? !1 : a;
      var g = j(d("SearchCometInfoBoxContext").SearchCometInfoBoxContext),
        l = g.inSectionSelectionMode,
        m = j(d("SearchCometInfoBoxContext").SearchCometInfoBoxDispatchContext);
      g = i(
        function () {
          l &&
            m != null &&
            m({
              payload: {
                hasSubmittedFeedback: !1,
                inSectionSelectionMode: !1,
                selectedAttribute: b,
                selectedComponent: f,
                showFeedbackModal: !0,
              },
              type: "HANDLE_SECTION_SELECTION",
            });
        },
        [b, f, l, m]
      );
      return l
        ? h.jsx(c("CometPressable.react"), {
            label: a ? "Image" : "",
            onPress: g,
            xstyle: a && k.wrapper,
            children: h.jsx("div", {
              className: c("stylex")(
                k.border,
                k.containerSelected,
                ((g = e) != null ? g : !1) ? k.block : k.inline,
                a ? k.withImageOverlay : k.withoutImageOverlay,
                k.wrapper
              ),
              children: h.jsx("div", {
                className: c("stylex")(
                  k.blockClickEvents,
                  k.inline,
                  a && k.imageWrapper
                ),
                children: f,
              }),
            }),
          })
        : h.jsx("div", {
            className: c("stylex")(
              ((g = e) != null ? g : !1) ? k.block : k.inline,
              k.wrapper
            ),
            children: f,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.PUBLIC_FEEDBACK_SECTIONS = b;
    g.SearchCometInfoBoxFeedbackSection = a;
  },
  98
);
__d(
  "SearchCometInfoBoxSeeMoreToggle.react",
  ["CometTextWithEntities.react", "InfoBoxLoggingUtils", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.loggingLocation,
        e = a.maxLength,
        f = a.maxLines,
        g = a.metadata,
        j = a.text;
      a = i(
        function () {
          d("InfoBoxLoggingUtils").logEntityDetailSeeMoreEvent(
            JSON.stringify({ attributeData: { name: b, value: j } }, null, 1),
            g,
            "infobox"
          );
        },
        [b, g, j]
      );
      return h.jsx(c("CometTextWithEntities.react"), {
        maxLength: e,
        maxLines: f,
        onToggleExpanded: a,
        text: j,
        truncationStyle: "see-more-and-less",
        withParagraphs: !0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxStaticRowItem.react",
  [
    "SearchCometInfoBoxSeeMoreToggle.react",
    "TetraText.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 6,
      j = 300;
    function a(a) {
      var b = a.delimiter,
        d = a.label,
        e = a.metadata,
        f = a.value;
      a = a.xstyle;
      return h.jsx("div", {
        className: c("stylex")(a),
        children: h.jsx(
          c("TetraText.react"),
          {
            type: "body3",
            children: h.jsx(c("SearchCometInfoBoxSeeMoreToggle.react"), {
              loggingLocation: "entityDetailRow",
              maxLength: j,
              maxLines: i,
              metadata: e,
              text: f + ((a = b) != null ? a : ""),
            }),
          },
          d
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxEntityDetailRow.react",
  [
    "SearchCometInfoBoxClickableRowItem.react",
    "SearchCometInfoBoxConstants",
    "SearchCometInfoBoxFeedbackSection.react",
    "SearchCometInfoBoxStaticRowItem.react",
    "TetraText.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        inline: {
          display: "q9uorilb",
          marginBottom: "bi6gxh9e",
          verticalAlign: "j1lvzwm4",
          whiteSpace: "ii04i59q",
        },
        label: { paddingBottom: "f10w8fjw" },
        row: { paddingBottom: "f10w8fjw" },
      };
    function a(a) {
      var b,
        e = a.label,
        f = a.metadata;
      a = a.values;
      var g = h.jsx("div", {
          className: c("stylex")(i.label),
          children: h.jsx(c("TetraText.react"), {
            type: d("SearchCometInfoBoxConstants")
              .ENTITY_DETAIL_ROW_LABEL_STYLE,
            children: e,
          }),
        }),
        j = a.filter(function (a) {
          return a.value != null;
        }),
        k = j.map(function (a, b) {
          var d = a.isLink,
            g = a.kgid;
          a = a.value;
          if (a == null) return null;
          var k = b !== j.length - 1 ? ", " : null;
          if (d === !0 && a != null)
            return h.jsx(
              c("SearchCometInfoBoxClickableRowItem.react"),
              {
                delimiter: k,
                kgid: g,
                label: e,
                metadata: f,
                value: a,
                xstyle: i.inline,
              },
              b
            );
          else
            return h.jsx(
              c("SearchCometInfoBoxStaticRowItem.react"),
              {
                delimiter: k,
                label: e,
                metadata: f,
                value: a,
                xstyle: i.inline,
              },
              b
            );
        }, []);
      return h.jsx(
        d("SearchCometInfoBoxFeedbackSection.react")
          .SearchCometInfoBoxFeedbackSection,
        {
          attributeData: {
            name: (b = e == null ? void 0 : e.toString()) != null ? b : "",
            value:
              a == null
                ? void 0
                : a
                    .map(function (a) {
                      return a.value;
                    })
                    .join(", "),
          },
          block: !0,
          children: h.jsxs("div", {
            className: c("stylex")(i.row),
            children: [g, k],
          }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxAdditionalDetails.react",
  [
    "fbt",
    "CometRelay",
    "SearchCometInfoBoxAdditionalDetails_additionalDetails.graphql",
    "SearchCometInfoBoxEntityDetailRow.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.entityAdditionalDetails,
        f = a.metadata;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "SearchCometInfoBoxAdditionalDetails_additionalDetails.graphql"
            )),
        e
      );
      if (a == null) return null;
      e = a.additional_details;
      return j.jsx("div", {
        children: e.map(function (a, b) {
          var d = a.label;
          a = a.values;
          d = h._("{Attribute name}", [h._param("Attribute name", d)]);
          a = a.map(function (a) {
            return { isLink: a.isLink, kgid: a.kgid, value: a.value };
          });
          return j.jsx(
            c("SearchCometInfoBoxEntityDetailRow.react"),
            { label: d, metadata: f, values: a },
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
  "SearchCometInfoBoxAlbumTrackList.react",
  [
    "fbt",
    "CometRelay",
    "SearchCometInfoBoxAlbumTrackList_albumInfo.graphql",
    "SearchCometInfoBoxEntityDetailRow.react",
    "SearchCometInfoBoxFeedbackSection.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.albumInfo;
      a = a.metadata;
      e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("SearchCometInfoBoxAlbumTrackList_albumInfo.graphql")),
        e
      );
      e = e || {};
      e = e.tracks;
      if (!e || !e.length) return null;
      var f = h._("{Track list label}:", [
          h._param("Track list label", "Tracks"),
        ]),
        g = e.map(function (a) {
          var b;
          return {
            isLink: !0,
            kgid: a == null ? void 0 : (b = a.entity) == null ? void 0 : b.kgid,
            value:
              a == null ? void 0 : (b = a.entity) == null ? void 0 : b.name,
          };
        });
      return j.jsx(
        d("SearchCometInfoBoxFeedbackSection.react")
          .SearchCometInfoBoxFeedbackSection,
        {
          attributeData: {
            name: "Track list",
            value:
              e == null
                ? void 0
                : e
                    .map(function (a) {
                      return a == null
                        ? void 0
                        : (a = a.entity) == null
                        ? void 0
                        : a.name;
                    })
                    .join(", "),
          },
          block: !0,
          children: j.jsx(c("SearchCometInfoBoxEntityDetailRow.react"), {
            label: f,
            metadata: a,
            values: g,
          }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "InfoBoxFormatUtils",
  ["InfoBoxConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 39.3701,
      i = 3.2808,
      j = 2.2046;
    function k(a) {
      if (a == null) return null;
      a = a.split("/");
      if (a.length !== 3) return null;
      var b = parseInt(a[0], 10),
        c = parseInt(a[1], 10) - 1;
      a = parseInt(a[2], 10);
      c = new Date(b, c, a);
      c.setFullYear(b);
      return c;
    }
    function a(a) {
      if (a == null) return null;
      a = Number(a);
      var b = Math.floor(a * i);
      a = Math.round((a - b / i) * h);
      if (a === 12) return b + 1 + "'0\"";
      else return b + "'" + a + '"';
    }
    function b(a) {
      if (a == null) return null;
      a = Number(a);
      a = Math.round(a * j);
      return a + " lbs";
    }
    function c(a) {
      a = k(a);
      if (a == null) return null;
      var b = {};
      b.year = "numeric";
      a.getFullYear() < 1e3
        ? (b.era = "short")
        : ((b.day = "numeric"), (b.month = "long"));
      a = a.toLocaleString("en-us", b);
      return a;
    }
    function e(a, b) {
      b === void 0 && (b = !0);
      b = b ? " /" : "";
      if (d("InfoBoxConstants").HIGHLIGHTED_ATTRIBUTE_LABELS[a] != null)
        return b + " " + d("InfoBoxConstants").HIGHLIGHTED_ATTRIBUTE_LABELS[a];
      else {
        a = a[0].toUpperCase() + a.slice(1);
        return b + " " + a;
      }
    }
    g.parseDate = k;
    g.formatHeight = a;
    g.formatWeight = b;
    g.formatEventDateDetails = c;
    g.formatHighlightedLabel = e;
  },
  98
);
__d(
  "SearchCometInfoBoxPersonDetails.react",
  [
    "fbt",
    "InfoBoxFormatUtils",
    "SearchCometInfoBoxEntityDetailRow.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.height,
        e = a.keyDates,
        f = a.metadata;
      a = a.weight;
      var g = {};
      b != null &&
        (g.height = {
          isLink: !1,
          value: d("InfoBoxFormatUtils").formatHeight(b),
        });
      a != null && (g.weight = { isLink: !1, value: a });
      e =
        e == null
          ? void 0
          : e.map(function (a, b) {
              return a.label != null
                ? i.jsx(
                    c("SearchCometInfoBoxEntityDetailRow.react"),
                    {
                      label: h._("{Date label}", [
                        h._param("Date label", a.label),
                      ]),
                      metadata: f,
                      values: [{ isLink: !1, value: a.text }],
                    },
                    b
                  )
                : null;
            });
      b =
        b != null
          ? i.jsx(
              c("SearchCometInfoBoxEntityDetailRow.react"),
              { label: h._("Height"), metadata: f, values: [g.height] },
              "Height"
            )
          : null;
      a =
        a != null
          ? i.jsx(
              c("SearchCometInfoBoxEntityDetailRow.react"),
              { label: h._("Weight"), metadata: f, values: [g.weight] },
              "Weight"
            )
          : null;
      return i.jsxs(i.Fragment, { children: [e, b, a] });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxRelatedEntityImage.react",
  [
    "CometImage.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometUnstyledButton_DEPRECATED.react",
    "SearchCometInfoBoxRelatedEntityImage_image.graphql",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        background: {
          backgroundColor: "pwoa4pd7",
          height: "datstx6m",
          width: "k4urcfbm",
        },
        image: {
          boxSizing: "rq0escxv",
          height: "datstx6m",
          objectFit: "bixrwtb6",
          objectPosition: "mbe6kgzb",
          width: "k4urcfbm",
        },
        imageShare: {
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
        },
      };
    function a(a) {
      var e = a.href;
      a = a.imageInformation;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometInfoBoxRelatedEntityImage_image.graphql")),
        a
      );
      a = a.uri;
      return a == null
        ? null
        : i.jsx(c("CometUnstyledButton_DEPRECATED.react"), {
            "aria-hidden": !0,
            expanded: !0,
            href: e,
            xstyle: j.imageShare,
            children: i.jsx(c("CometPlaceholder.react"), {
              fallback: i.jsx("div", { className: c("stylex")(j.background) }),
              children: i.jsx(c("CometImage.react"), {
                src: a,
                xstyle: [j.imageShare, j.image],
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
  "SearchCometInfoBoxRelatedEntity.react",
  [
    "CometLink.react",
    "CometRelay",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxRelatedEntityImage.react",
    "SearchCometInfoBoxRelatedEntity_relatedEntity.graphql",
    "TetraText.react",
    "react",
    "useSearchCometGlobalSERPRouteUrlBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.metadata,
        f = a.relatedEntity,
        g = a.type;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometInfoBoxRelatedEntity_relatedEntity.graphql")),
        f
      );
      f = a.image;
      var j = a.kgid,
        k = a.label,
        l = a.name;
      a = c("useSearchCometGlobalSERPRouteUrlBuilder")();
      a = a({
        entryPointAction: "RELATED_SEARCHES",
        kgid: j,
        query: l != null ? l : "",
      });
      if (f == null) return null;
      k =
        k != null
          ? i.jsx("div", {
              className: "hzawbc8m jadejhlu",
              children: i.jsx(c("TetraText.react"), {
                type: "body3",
                children: k,
              }),
            })
          : null;
      g === "Artist" && (k = null);
      return i.jsxs("div", {
        className: "oqcyycmt datstx6m cbu4d94t rq0escxv",
        children: [
          i.jsxs("div", {
            className:
              "l9j0dhe7 stjgntxs ni8dbmo4 p5pk11vy epve5r9d l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
            children: [
              i.jsx("div", { className: "k4urcfbm qz19yd0m" }),
              i.jsx(c("SearchCometInfoBoxRelatedEntityImage.react"), {
                href: a,
                imageInformation: f,
              }),
            ],
          }),
          i.jsx(c("CometLink.react"), {
            href: a,
            onClick: function () {
              return d("InfoBoxLoggingUtils").logRelatedEntityClickEvent(
                j,
                g,
                l,
                e,
                "infobox"
              );
            },
            children: i.jsx("div", {
              className: "hzawbc8m jadejhlu gy2v8mqq jagab5yi",
              children: i.jsx(c("TetraText.react"), {
                numberOfLines: 3,
                type: "bodyLink3",
                children: l,
              }),
            }),
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
  "SearchCometInfoBoxRelatedEntities.react",
  [
    "fbt",
    "CometCard.react",
    "CometLegacyHScroll.react",
    "CometLegacyHScrollChild.react",
    "CometLink.react",
    "CometRelay",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxConstants",
    "SearchCometInfoBoxFeedbackSection.react",
    "SearchCometInfoBoxRelatedEntities_relatedEntitiesDetails.graphql",
    "SearchCometInfoBoxRelatedEntity.react",
    "TetraText.react",
    "react",
    "useSearchCometGlobalSERPRouteUrlBuilder",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.label;
      e = e === void 0 ? null : e;
      var f = a.metadata,
        g = a.relatedEntities,
        l = a.textOnly;
      l = l === void 0 ? !1 : l;
      var m = a.type,
        n = c("useSearchCometGlobalSERPRouteUrlBuilder")(),
        o = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b(
                "SearchCometInfoBoxRelatedEntities_relatedEntitiesDetails.graphql"
              )),
          g
        );
      if (o == null || !k(o, m)) return null;
      var p = [];
      a = o.map(function (a) {
        return j.jsx("div", {
          children: j.jsx(c("SearchCometInfoBoxRelatedEntity.react"), {
            metadata: f,
            relatedEntity: a,
            type: m,
          }),
        });
      });
      g =
        l &&
        j.jsx("div", {
          className: "d2edcug0 lhclo0ds j83agx80 jm1wdb64",
          children: o.map(function (a, b) {
            p.push(a);
            var d = a.kgid;
            a = a.name;
            d =
              typeof a === "string"
                ? n({ entryPointAction: "RELATED_SEARCHES", kgid: d, query: a })
                : null;
            return j.jsx(
              "span",
              {
                className: "n8tt0mok f10w8fjw",
                children: j.jsxs(c("TetraText.react"), {
                  type: "body3",
                  children: [
                    j.jsx(c("CometLink.react"), { href: d, children: a }),
                    b !== o.length - 1 ? "," : null,
                    " ",
                  ],
                }),
              },
              b
            );
          }),
        });
      a =
        !l &&
        j.jsx("div", {
          className: "lq239pai b5q2rw42 bi6gxh9e",
          children: j.jsx(c("CometLegacyHScroll.react"), {
            accessibilityLabel: h._("Scroll to view more related entities."),
            horizontalSpacing: 5,
            onIndexChange: function (a) {
              d("InfoBoxLoggingUtils").logRelatedEntitiesCarouselImpression(
                "Additional recommended entity requested in the carousel (index " +
                  a +
                  ")",
                f,
                "infobox"
              );
            },
            peekMasking: !0,
            scrollType: "arrows",
            snapPosition: "center",
            children: a.map(function (a, b) {
              return j.jsx(
                c("CometLegacyHScrollChild.react"),
                {
                  width: 128,
                  children: j.jsx("div", {
                    className: "k5ud4834 df2bnetk j83agx80",
                    children: j.jsx(c("CometCard.react"), {
                      background: "transparent",
                      children: a,
                    }),
                  }),
                },
                b
              );
            }),
          }),
        });
      l = j.jsx("div", { className: "l9j0dhe7", children: l ? g : a });
      return j.jsx(
        d("SearchCometInfoBoxFeedbackSection.react")
          .SearchCometInfoBoxFeedbackSection,
        {
          attributeData: {
            name: d("SearchCometInfoBoxFeedbackSection.react")
              .PUBLIC_FEEDBACK_SECTIONS.relatedEntites,
            value: JSON.stringify(p, null, 1),
          },
          block: !0,
          children: j.jsxs("div", {
            children: [
              e != null &&
                o.length > 0 &&
                j.jsx("div", {
                  className: "f10w8fjw",
                  children: j.jsx(c("TetraText.react"), {
                    type: d("SearchCometInfoBoxConstants")
                      .ENTITY_DETAIL_ROW_LABEL_STYLE,
                    children: e,
                  }),
                }),
              l,
            ],
          }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a, b) {
      return b === null || a.length === 0 ? !1 : !0;
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxEntityAdditionalDetails.react",
  [
    "fbt",
    "BaseGlimmer.react",
    "CometPlaceholder.react",
    "CometRelay",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxAdditionalDetails.react",
    "SearchCometInfoBoxAlbumTrackList.react",
    "SearchCometInfoBoxEntityAdditionalDetails_entityAdditionalDetails.graphql",
    "SearchCometInfoBoxEntityDetailRow.react",
    "SearchCometInfoBoxPersonDetails.react",
    "SearchCometInfoBoxRelatedEntities.react",
    "SearchCometInfoBoxSeeMoreToggle.react",
    "TetraText.react",
    "deferredLoadComponent",
    "intlSummarizeNumber",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = c("deferredLoadComponent")(
        c("requireDeferred")("SearchCometInfoBoxEntityMap.react").__setRef(
          "SearchCometInfoBoxEntityAdditionalDetails.react"
        )
      ),
      k = d("react"),
      l = 4,
      m = 200;
    function a(a) {
      a = a.infoboxEntityAttributes;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "SearchCometInfoBoxEntityAdditionalDetails_entityAdditionalDetails.graphql"
            )),
        a
      );
      var e = a.album_info,
        f = a.height,
        g = a.key_dates,
        n = a.metadata,
        o = a.place_info,
        p = a.track_info,
        q = a.type,
        r = a.weight;
      p = p == null ? void 0 : p.lyrics;
      var s = d("InfoBoxLoggingUtils").useFormattedMetadata(n);
      n = k.jsx(c("SearchCometInfoBoxAdditionalDetails.react"), {
        entityAdditionalDetails: a,
        metadata: s,
      });
      a = null;
      ["NotablePersonActor", "NotablePersonGeneric", "Track"].includes(q)
        ? (a = k.jsx(c("SearchCometInfoBoxPersonDetails.react"), {
            height: f,
            keyDates: g,
            metadata: s,
            weight: r,
          }))
        : ["Movie", "TVShow", "Album"].includes(q) &&
          (a =
            g == null
              ? void 0
              : g.map(function (a, b) {
                  return a.label != null
                    ? k.jsx(
                        c("SearchCometInfoBoxEntityDetailRow.react"),
                        {
                          label: h._("{Date label}", [
                            h._param("Date label", a.label),
                          ]),
                          metadata: s,
                          values: [{ isLink: !1, value: a.text }],
                        },
                        b
                      )
                    : null;
                }));
      f = null;
      q === "Track" &&
        p != null &&
        (f = k.jsxs("div", {
          className: "f10w8fjw",
          children: [
            k.jsx("div", {
              className: "rw50dwjs g0qnabr5 p8fzw8mz f10w8fjw",
              children: k.jsx(c("TetraText.react"), {
                type: "body3",
                children: h._("Lyrics"),
              }),
            }),
            k.jsx("div", {
              className: "ii04i59q",
              children: k.jsx(c("TetraText.react"), {
                type: "body3",
                children: k.jsx(c("SearchCometInfoBoxSeeMoreToggle.react"), {
                  loggingLocation: "trackSeeMoreLyrics",
                  maxLength: m,
                  maxLines: l,
                  metadata: s,
                  text: p,
                }),
              }),
            }),
          ],
        }));
      r = null;
      if (q === "Place" || q === "Poi") {
        g = k.jsx(c("BaseGlimmer.react"), {
          className:
            "k4urcfbm sjgh65i0 d23ldmr1 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
          index: 0,
        });
        r = k.jsxs("div", {
          children: [
            (o == null ? void 0 : o.longitude) != null && o.latitude != null
              ? k.jsx(c("CometPlaceholder.react"), {
                  fallback: g,
                  children: k.jsx(j, {
                    area: o == null ? void 0 : o.area,
                    latitude: o == null ? void 0 : o.latitude,
                    longitude: o == null ? void 0 : o.longitude,
                  }),
                })
              : null,
            (o == null ? void 0 : o.capital) != null
              ? k.jsx(c("SearchCometInfoBoxEntityDetailRow.react"), {
                  label: h._("Capital City"),
                  metadata: s,
                  values: [{ isLink: !1, value: o.capital }],
                })
              : null,
            (o == null ? void 0 : o.ent_data) != null &&
            o.ent_data.population != null
              ? k.jsx(c("SearchCometInfoBoxEntityDetailRow.react"), {
                  label: h._("Population"),
                  metadata: s,
                  values: [
                    {
                      isLink: !1,
                      value: c("intlSummarizeNumber")(o.ent_data.population, 2),
                    },
                  ],
                })
              : null,
            (o == null ? void 0 : o.currency) != null
              ? k.jsx(c("SearchCometInfoBoxEntityDetailRow.react"), {
                  label: h._("Currency"),
                  metadata: s,
                  values: [{ isLink: !1, value: o.currency }],
                })
              : null,
            (o == null
              ? void 0
              : (p = o.head_of_govt) == null
              ? void 0
              : p.name) != null
              ? k.jsx(c("SearchCometInfoBoxEntityDetailRow.react"), {
                  label: h._("Head of Government"),
                  metadata: s,
                  values: [
                    {
                      isLink: !0,
                      value:
                        o == null
                          ? void 0
                          : (g = o.head_of_govt) == null
                          ? void 0
                          : g.name,
                    },
                  ],
                })
              : null,
            (o == null ? void 0 : o.related_places) != null
              ? k.jsx("div", {
                  className: "k4urcfbm r0294ipz oygrvhab",
                  children: k.jsx(
                    c("SearchCometInfoBoxRelatedEntities.react"),
                    {
                      label: h._("Land/Maritime Borders"),
                      metadata: s,
                      relatedEntities: o.related_places,
                      textOnly: !0,
                      type: q,
                    }
                  ),
                })
              : null,
          ],
        });
      }
      p =
        q === "Album"
          ? k.jsx(c("SearchCometInfoBoxAlbumTrackList.react"), {
              albumInfo: e,
              metadata: s,
            })
          : null;
      return k.jsxs("div", {
        className: "k4urcfbm lybp2mrg",
        children: [a, r, n, f, p],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "InfoBoxFeedbackUtils",
  ["InfoBoxConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (a[d("InfoBoxConstants").SOMETHING_ELSE_FEEDBACK_ITEM] && b.length > 0)
        return !1;
      else
        for (var c in a)
          if (c !== d("InfoBoxConstants").SOMETHING_ELSE_FEEDBACK_ITEM && a[c])
            return !1;
      return !0;
    }
    g.isSubmitDisabled = a;
  },
  98
);
__d(
  "SearchCometInfoBoxFeedbackDialog.react",
  [
    "fbt",
    "CometCardedDialog.react",
    "CometRow.react",
    "CometRowItem.react",
    "CometTextArea.react",
    "InfoBoxConstants",
    "InfoBoxFeedbackUtils",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxContext",
    "TetraButton.react",
    "TetraListCell.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useContext,
      l = b.useState;
    function a(a) {
      var b = a.formattedMetadata;
      a = a.source;
      var e = k(
          d("SearchCometInfoBoxContext").SearchCometInfoBoxDispatchContext
        ),
        f = k(d("SearchCometInfoBoxContext").SearchCometInfoBoxContext),
        g = k(d("SearchCometInfoBoxContext").SearchCometInfoBoxContext),
        m = g.selectedAttribute;
      g = g.selectedComponent;
      var n = j(
          function () {
            e != null &&
              e({
                payload: {
                  hasSubmittedFeedback: !1,
                  inSectionSelectionMode: !1,
                  selectedAttribute: null,
                  selectedComponent: null,
                  showFeedbackModal: !1,
                },
                type: "ON_FEEDBACK_CLOSE",
              });
          },
          [e]
        ),
        o = l(""),
        p = o[0],
        q = o[1];
      o = l(
        d("InfoBoxConstants").FEEDBACK_CHECKLIST_ITEMS.reduce(function (a, b) {
          a[b.name] = b.checked;
          return a;
        }, {})
      );
      var r = o[0],
        s = o[1],
        t = j(
          function (a) {
            var b;
            s(babelHelpers["extends"]({}, r, ((b = {}), (b[a] = !r[a]), b)));
          },
          [r]
        );
      o = j(
        function (a) {
          q(a.target.value);
        },
        [q]
      );
      var u = j(
          function () {
            n();
            var a = [],
              c = Object.entries(r);
            for (var f = 0; f < c.length; f++) {
              var g = c[f],
                h = g[0];
              g = g[1];
              Boolean(g) && a.push(h);
            }
            g = m
              ? {
                  attributeData: { name: m.name, value: m.value },
                  categories: a,
                  feedback: p,
                }
              : { categories: a, feedback: p };
            d("InfoBoxLoggingUtils").logUserFeedbackEvent(
              "NEGATIVE_FEEDBACK_PUBLIC",
              JSON.stringify(g, null, 1),
              b,
              "infobox"
            );
            e != null &&
              e({
                payload: {
                  hasSubmittedFeedback: !0,
                  inSectionSelectionMode: !1,
                  selectedAttribute: null,
                  selectedComponent: null,
                  showFeedbackModal: !1,
                },
                type: "SET_SUBMITTED_FEEDBACK",
              });
          },
          [p, r, b, n, e, m]
        ),
        v = d("InfoBoxConstants").FEEDBACK_CHECKLIST_ITEMS.map(function (a, b) {
          var d = a.displayText,
            e = a.name;
          return i.jsx(
            c("TetraListCell.react"),
            {
              addOnSecondary: { on: r[e], type: "checkbox" },
              addOnSecondaryVerticalAlign: "center",
              body: d,
              bodyColor: "primary",
              onPress: function () {
                return t(e);
              },
            },
            b
          );
        });
      a =
        a === "infobox"
          ? h._("Give Feedback On This Infobox")
          : h._("Give Feedback On This Page");
      m != null && (a = h._("What is wrong with this?"));
      return !f.showFeedbackModal
        ? null
        : i.jsx("div", {
            className: "k4urcfbm kr520xx4 j9ispegn poy2od1o datstx6m ms7hmo2b",
            children: i.jsx("div", {
              className: "rj96ttb8 sbs95uss r4m1dukp cbu4d94t j83agx80",
              children: i.jsxs(c("CometCardedDialog.react"), {
                onClose: n,
                title: a,
                withCloseButton: !0,
                children: [
                  i.jsxs("div", {
                    className: "pybr56ya jkryuccx cbu4d94t j83agx80",
                    children: [
                      m != null
                        ? null
                        : i.jsx("div", {
                            className:
                              "h676nmdw oygrvhab oi9244e8 kvgmc6g5 e7l3qomo",
                            children: v,
                          }),
                      i.jsx("div", {
                        className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
                        children: g,
                      }),
                      i.jsx("div", {
                        className:
                          "h676nmdw oygrvhab oi9244e8 kvgmc6g5 eweu447c",
                        children: i.jsx(c("CometRow.react"), {
                          columns: 1,
                          spacingHorizontal: 16,
                          spacingVertical: 8,
                          children: i.jsx(c("CometRowItem.react"), {
                            children: i.jsx(c("CometTextArea.react"), {
                              label: "Public Feedback Text Area",
                              labelIsHidden: !0,
                              onChange: o,
                              placeholder: h._(
                                "Please provide any additional information here."
                              ),
                              required: !0,
                              rows: 4,
                              value: p,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className:
                      "bkfpd7mw i9lpt57q j83agx80 hcukyx3x n851cfcs cxmmr5t8 n1l5q3vz",
                    children: [
                      i.jsx("div", {
                        className: "oi9244e8",
                        children: i.jsx(c("TetraButton.react"), {
                          label: h._("Cancel"),
                          onPress: n,
                          reduceEmphasis: !0,
                          type: "secondary",
                        }),
                      }),
                      i.jsx("div", {
                        className: "fbdzf5xl bfp4nrmu tv7at329",
                        children: i.jsx(c("TetraButton.react"), {
                          disabled:
                            m != null
                              ? !1
                              : d("InfoBoxFeedbackUtils").isSubmitDisabled(
                                  r,
                                  p
                                ),
                          label: h._("Submit"),
                          onPress: u,
                        }),
                      }),
                    ],
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
  "SearchCometInfoBoxFeedbackPrompt.react",
  ["fbt", "CometLink.react", "TetraButton.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.handleGeneralFeedback;
      a = a.onCancel;
      return i.jsx("div", {
        className: "tr9rh885 sjgh65i0 j83agx80 bp9cbjyn taijpn5t tv7at329",
        children: i.jsxs("div", {
          className: "k4urcfbm kwzhilbh j83agx80",
          children: [
            i.jsx("div", {
              className: "buofh1pr j83agx80 bp9cbjyn",
              children: i.jsxs(c("TetraText.react"), {
                type: "body3",
                children: [
                  h._("Select the section with errors, or"),
                  " ",
                  h._("{Clickable link to give general feedback}", [
                    h._param(
                      "Clickable link to give general feedback",
                      i.jsx(c("CometLink.react"), {
                        onClick: b,
                        children: h._("click here for general feedback."),
                      })
                    ),
                  ]),
                ],
              }),
            }),
            i.jsx("div", {
              className: "rzc85ebv",
              children: i.jsx(c("TetraButton.react"), {
                label: h._("Cancel"),
                onPress: a,
                reduceEmphasis: !0,
                type: "primary",
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
  "SearchCometInfoBoxFeedbackSubmitted.react",
  ["fbt", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx("div", {
        className: "sjgh65i0 j83agx80 bp9cbjyn taijpn5t tv7at329",
        children: i.jsx("div", {
          className: "buofh1pr j83agx80 bp9cbjyn",
          children: i.jsx(c("TetraText.react"), {
            type: "body3",
            children: h._("Thanks for your feedback!"),
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
  "SearchCometInfoBoxFeedbackV3.react",
  [
    "SearchCometInfoBoxContext",
    "SearchCometInfoBoxFeedbackPrompt.react",
    "SearchCometInfoBoxFeedbackSubmitted.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext;
    function a() {
      var a = j(d("SearchCometInfoBoxContext").SearchCometInfoBoxContext);
      a = a.hasSubmittedFeedback;
      var b = j(
          d("SearchCometInfoBoxContext").SearchCometInfoBoxDispatchContext
        ),
        e = i(
          function () {
            b &&
              b({
                payload: {
                  hasSubmittedFeedback: !1,
                  inSectionSelectionMode: !1,
                  selectedAttribute: null,
                  selectedComponent: null,
                  showFeedbackModal: !1,
                },
                type: "ON_FEEDBACK_CLOSE",
              });
          },
          [b]
        ),
        f = i(
          function () {
            b &&
              b({
                payload: {
                  hasSubmittedFeedback: !1,
                  inSectionSelectionMode: !1,
                  selectedAttribute: null,
                  selectedComponent: null,
                  showFeedbackModal: !0,
                },
                type: "HANDLE_GENERAL_FEEDBACK",
              });
          },
          [b]
        );
      return a
        ? h.jsx(c("SearchCometInfoBoxFeedbackSubmitted.react"), {})
        : h.jsx(c("SearchCometInfoBoxFeedbackPrompt.react"), {
            handleGeneralFeedback: f,
            onCancel: e,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxFeedbackV3Container.react",
  [
    "SearchCometInfoBoxContext",
    "SearchCometInfoBoxFeedbackDialog.react",
    "SearchCometInfoBoxFeedbackV3.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      a = a.metadata;
      var b = i(d("SearchCometInfoBoxContext").SearchCometInfoBoxContext),
        e = b.inSectionSelectionMode;
      b = b.showFeedbackModal;
      return h.jsxs("div", {
        children: [
          e ? h.jsx(c("SearchCometInfoBoxFeedbackV3.react"), {}) : null,
          b
            ? h.jsx(c("SearchCometInfoBoxFeedbackDialog.react"), {
                formattedMetadata: a,
                source: "infobox",
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
  "SearchCometInfoBoxEntityDetails.react",
  [
    "CometRelay",
    "SearchCometInfoBoxConstants",
    "SearchCometInfoBoxEntityDetails_entityDetails.graphql",
    "SearchCometInfoBoxFeedbackSection.react",
    "SearchCometInfoBoxFeedbackV3Container.react",
    "SearchCometInfoBoxSeeMoreToggle.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "cr:1788094",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = 4,
      k = 200;
    function a(a) {
      var e = a.hasCovidData,
        f = a.infoboxEntityAttributes;
      a = a.metadata;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometInfoBoxEntityDetails_entityDetails.graphql")),
        f
      );
      f = f || {};
      var g = f.name,
        l = f.summary;
      f = f.type;
      if (g == null) return null;
      function m(a) {
        return a == null ||
          a.indexOf("Person") !== -1 ||
          a.indexOf("Place") !== -1 ||
          a.indexOf("Poi") !== -1 ||
          a === "Misc"
          ? null
          : d("SearchCometInfoBoxConstants").FORMATTED_DOMAIN_LABELS[
              String(a)
            ] || a;
      }
      var n = b("cr:1788094") != null && e === !1;
      m = m(f);
      return i.jsxs("div", {
        className: "sjgh65i0",
        children: [
          i.jsxs("div", {
            className: "k4urcfbm btwxx1t3 j83agx80",
            children: [
              i.jsx("div", {
                className: "k4urcfbm rs0gx3tq w0hvl6rk",
                children: i.jsx(c("TetraTextPairing.react"), {
                  headline: g,
                  level: 3,
                  meta: m,
                }),
              }),
              b("cr:1788094") && !e && i.jsx(b("cr:1788094"), { metadata: a }),
            ],
          }),
          n &&
            i.jsx(c("SearchCometInfoBoxFeedbackV3Container.react"), {
              metadata: a,
            }),
          l != null
            ? i.jsx("div", {
                className: "n1l5q3vz",
                children: i.jsx(
                  d("SearchCometInfoBoxFeedbackSection.react")
                    .SearchCometInfoBoxFeedbackSection,
                  {
                    attributeData: {
                      name: d("SearchCometInfoBoxFeedbackSection.react")
                        .PUBLIC_FEEDBACK_SECTIONS.entityDetails,
                      value: l,
                    },
                    block: !0,
                    children: i.jsx(c("TetraText.react"), {
                      type: "body3",
                      children: i.jsx(
                        c("SearchCometInfoBoxSeeMoreToggle.react"),
                        {
                          loggingLocation: "entityDetailSummary",
                          maxLength: k,
                          maxLines: j,
                          metadata: a,
                          text: l,
                        }
                      ),
                    }),
                  }
                ),
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
  "SearchCometInfoBoxFeedback.react",
  [
    "fbt",
    "InfoBoxLoggingUtils",
    "RelayHooks",
    "SearchCometInfoBoxContext",
    "SearchCometInfoBoxFeedbackPrompt.react",
    "SearchCometInfoBoxFeedbackSubmitted.react",
    "SearchCometInfoBoxFeedback_feedback.graphql",
    "TetraButton.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext;
    function a(a) {
      a = a.infoboxEntityAttributes;
      a = d("RelayHooks").useFragment(
        i !== void 0
          ? i
          : (i = b("SearchCometInfoBoxFeedback_feedback.graphql")),
        a
      );
      var e = d("InfoBoxLoggingUtils").useFormattedMetadata(
        a == null ? void 0 : a.metadata
      );
      a = l(d("SearchCometInfoBoxContext").SearchCometInfoBoxContext);
      var f = a.hasSubmittedFeedback;
      a = a.inSectionSelectionMode;
      var g = l(
          d("SearchCometInfoBoxContext").SearchCometInfoBoxDispatchContext
        ),
        m = k(
          function (a, b) {
            d("InfoBoxLoggingUtils").logUserFeedbackEvent(
              "INITIATE_FEEDBACK",
              "",
              b,
              "infobox"
            ),
              a
                ? (d("InfoBoxLoggingUtils").logUserFeedbackEvent(
                    "POSITIVE_FEEDBACK_PUBLIC",
                    "",
                    b,
                    "infobox"
                  ),
                  g != null &&
                    g({
                      payload: {
                        hasSubmittedFeedback: !0,
                        inSectionSelectionMode: !1,
                        selectedAttribute: null,
                        selectedComponent: null,
                        showFeedbackModal: !1,
                      },
                      type: "HANDLE_POSITIVE_FEEDBACK",
                    }))
                : g != null &&
                  g({
                    payload: {
                      hasSubmittedFeedback: !0,
                      inSectionSelectionMode: !0,
                      selectedAttribute: null,
                      selectedComponent: null,
                      showFeedbackModal: !1,
                    },
                    type: "HANDLE_NEGATIVE_FEEDBACK",
                  });
          },
          [g]
        ),
        n = k(
          function () {
            g != null &&
              g({
                payload: {
                  hasSubmittedFeedback: !1,
                  inSectionSelectionMode: !1,
                  selectedAttribute: null,
                  selectedComponent: null,
                  showFeedbackModal: !1,
                },
                type: "ON_FEEDBACK_CLOSE",
              });
          },
          [g]
        ),
        o = k(
          function () {
            g != null &&
              g({
                payload: {
                  hasSubmittedFeedback: !1,
                  inSectionSelectionMode: !1,
                  selectedAttribute: null,
                  selectedComponent: null,
                  showFeedbackModal: !0,
                },
                type: "HANDLE_GENERAL_FEEDBACK",
              });
          },
          [g]
        );
      if (f) return j.jsx(c("SearchCometInfoBoxFeedbackSubmitted.react"), {});
      return a
        ? j.jsx(c("SearchCometInfoBoxFeedbackPrompt.react"), {
            handleGeneralFeedback: o,
            onCancel: n,
          })
        : j.jsx("div", {
            children: j.jsxs("div", {
              className: "discj3wi sjgh65i0 j83agx80 bp9cbjyn",
              children: [
                j.jsx("div", {
                  className: "buofh1pr j83agx80 bp9cbjyn",
                  children: j.jsx(c("TetraText.react"), {
                    type: "body3",
                    children: h._("Is this information accurate?"),
                  }),
                }),
                j.jsx("div", {
                  className: "hcukyx3x",
                  children: j.jsx(c("TetraButton.react"), {
                    label: h._("Yes"),
                    onPress: function () {
                      return m(!0, e);
                    },
                    reduceEmphasis: !0,
                    tooltip: h._("This is accurate"),
                    type: "secondary",
                  }),
                }),
                j.jsx("div", {
                  className: "h676nmdw",
                  children: j.jsx(c("TetraButton.react"), {
                    label: h._("No"),
                    onPress: function () {
                      g != null &&
                        g({
                          payload: {
                            hasSubmittedFeedback: !1,
                            inSectionSelectionMode: !0,
                            selectedAttribute: null,
                            selectedComponent: null,
                            showFeedbackModal: !1,
                          },
                          type: "HANDLE_NEGATIVE_FEEDBACK",
                        }),
                        m(!1, e);
                    },
                    reduceEmphasis: !0,
                    tooltip: h._("Something is inaccurate"),
                    type: "secondary",
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
  "SearchCometInfoBoxHighlightedAttribute.react",
  [
    "CometLink.react",
    "CometRelay",
    "InfoBoxFormatUtils",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxHighlightedAttribute_highlightedAttributeDetails.graphql",
    "SearchCometResultsQueryContext",
    "TetraText.react",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.entityDetails,
        f = a.name;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "SearchCometInfoBoxHighlightedAttribute_highlightedAttributeDetails.graphql"
            )),
        e
      );
      e = a.highlighted_attribute;
      var g = a.info_qna_answer_text,
        j = a.source_entity_details,
        k = d("InfoBoxLoggingUtils").useFormattedMetadata(
          a == null ? void 0 : a.metadata
        );
      a = d(
        "SearchCometResultsQueryContext"
      ).useSearchCometResultsQueryContext();
      a = a.urlBuilder;
      var l = c("gkx")("1999279");
      if (g != null && l)
        return i.jsxs("div", {
          className: "sjgh65i0",
          children: [
            i.jsx("div", {
              className: "sjgh65i0",
              children: i.jsx(c("TetraText.react"), {
                type: "body3",
                children: g,
              }),
            }),
            i.jsx("div", { className: "l6v480f0" }),
          ],
        });
      g = (l = j) != null ? l : {};
      var m = g.kgid;
      j = g.name;
      l = g.relation;
      if (f != null && l != null) {
        g = a({ entryPointAction: "RELATED_SEARCHES", kgid: m, query: f });
        return i.jsxs("div", {
          className: "sjgh65i0",
          children: [
            i.jsx("div", {
              className: "sjgh65i0",
              children: i.jsxs(c("TetraText.react"), {
                type: "body3",
                children: [
                  i.jsx(c("CometLink.react"), {
                    href: g,
                    onClick: function () {
                      return d(
                        "InfoBoxLoggingUtils"
                      ).logRelatedEntityClickEvent(
                        m,
                        "person",
                        f,
                        k,
                        "infobox"
                      );
                    },
                    children: j,
                  }),
                  i.jsx(c("TetraText.react"), {
                    type: "headline4",
                    children: d("InfoBoxFormatUtils").formatHighlightedLabel(l),
                  }),
                ],
              }),
            }),
            i.jsx("div", { className: "l6v480f0" }),
          ],
        });
      }
      if (e == null) return null;
      a = e.label;
      g = e.value;
      var n;
      j =
        a != null
          ? d("InfoBoxFormatUtils").formatHighlightedLabel(a, !1)
          : null;
      switch (a) {
        case "height":
          n = d("InfoBoxFormatUtils").formatHeight(g);
          break;
        case "weight":
          n = d("InfoBoxFormatUtils").formatWeight(g);
          break;
        case "birth":
        case "death":
          n = d("InfoBoxFormatUtils").formatEventDateDetails(g);
          break;
        default:
          n = g;
      }
      return i.jsxs("div", {
        className: "sjgh65i0",
        children: [
          i.jsx("div", {
            className: "sjgh65i0",
            children: i.jsxs(c("TetraText.react"), {
              type: "headline4",
              children: [
                j,
                ": ",
                i.jsx(c("TetraText.react"), { type: "body3", children: n }),
              ],
            }),
          }),
          i.jsx("div", { className: "l6v480f0" }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometSearchInfoBoxImageViewerControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/search/infobox/",
      Object.freeze({ index: "0" }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometInfoBoxGridImage.react",
  [
    "CometImage.react",
    "CometPlaceholder.react",
    "CometPressable.react",
    "CometRelay",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxGridImage_image.graphql",
    "XCometSearchInfoBoxImageViewerControllerRouteBuilder",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        background: {
          backgroundColor: "pwoa4pd7",
          height: "datstx6m",
          width: "k4urcfbm",
        },
        root: { height: "datstx6m", width: "k4urcfbm" },
      };
    function a(a) {
      var e,
        f = a.imageInformation,
        g = a.index,
        k = a.metadata,
        l = a.name,
        m = a.sessionID;
      a = a.xstyle;
      f = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("SearchCometInfoBoxGridImage_image.graphql")),
        f
      );
      f = f.uri;
      e = (e = k == null ? void 0 : k.primaryEntityKgid) != null ? e : "";
      if (f == null) return null;
      m = { __sid__: m, id: e, index: g.toString() };
      e = c("XCometSearchInfoBoxImageViewerControllerRouteBuilder").buildURL(m);
      return i.jsx(c("CometPressable.react"), {
        "aria-hidden": !0,
        display: "block",
        linkProps: { url: e },
        onPress: function () {
          d("InfoBoxLoggingUtils").logImageCarouselClickEvent(l, k, "infobox");
        },
        overlayDisabled: !0,
        xstyle: j.root,
        children: i.jsx(c("CometPlaceholder.react"), {
          fallback: i.jsx("div", { className: c("stylex")(j.background) }),
          children: i.jsx(c("CometImage.react"), { src: f, xstyle: a }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxPhotoCollage.react",
  [
    "SearchCometInfoBoxFeedbackSection.react",
    "SearchCometInfoBoxGridImage.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        divider: { marginStart: "ggphbty4" },
        imageContainer: {
          boxSizing: "rq0escxv",
          display: "j83agx80",
          height: "d23ldmr1",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "k4urcfbm",
        },
        primaryImage: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "h905i5nu",
          borderBottomEndRadius: "jinzq4gt",
          borderBottomStartRadius: "l82x9zwi",
          height: "datstx6m",
          objectFit: "bixrwtb6",
          objectPosition: "rez0dp69",
          position: "pmk7jnqg",
          width: "k4urcfbm",
        },
        primaryImageContainer: {
          boxSizing: "rq0escxv",
          display: "j83agx80",
          height: "datstx6m",
          minWidth: "ptc67a42",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
        secondaryBottomEndImage: {
          borderTopStartRadius: "monazrh9",
          borderTopEndRadius: "h905i5nu",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "mrjvor2e",
          marginTop: "qjjbsfad",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
        },
        secondaryBottomImage: {
          display: "j83agx80",
          height: "datstx6m",
          position: "l9j0dhe7",
          width: "n99xedck",
        },
        secondaryBottomImageShare: {
          boxSizing: "rq0escxv",
          height: "datstx6m",
          objectFit: "bixrwtb6",
          objectPosition: "rez0dp69",
          position: "pmk7jnqg",
          width: "k4urcfbm",
        },
        secondaryBottomImages: {
          display: "j83agx80",
          height: "me31hnl3",
          width: "k4urcfbm",
        },
        secondaryBottomStartImage: { marginTop: "qjjbsfad" },
        secondaryImageContainer: {
          boxSizing: "rq0escxv",
          height: "datstx6m",
          verticalAlign: "j1lvzwm4",
          width: "k4urcfbm",
        },
        secondaryTopImage: {
          borderTopStartRadius: "monazrh9",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "jinzq4gt",
          borderBottomStartRadius: "mrjvor2e",
          boxSizing: "rq0escxv",
          height: "datstx6m",
          objectFit: "bixrwtb6",
          objectPosition: "e8n1fpso",
          position: "pmk7jnqg",
          width: "k4urcfbm",
        },
        secondaryTopImages: { height: "stzi37y9", width: "k4urcfbm" },
      };
    function a(a) {
      var b,
        e = a.images,
        f = a.metadata,
        g = a.name;
      a = a.sessionID;
      var j = e[0],
        k = e[1],
        l = e[2];
      e = e[3];
      return h.jsxs("div", {
        className: c("stylex")(i.imageContainer),
        children: [
          h.jsx("div", {
            className: c("stylex")(i.primaryImageContainer),
            children: h.jsx(
              d("SearchCometInfoBoxFeedbackSection.react")
                .SearchCometInfoBoxFeedbackSection,
              {
                attributeData: {
                  name: d("SearchCometInfoBoxFeedbackSection.react")
                    .PUBLIC_FEEDBACK_SECTIONS.image,
                  value: (b = j.handle) != null ? b : "N/A",
                },
                isImage: !0,
                children: h.jsx(c("SearchCometInfoBoxGridImage.react"), {
                  imageInformation: j,
                  index: 0,
                  metadata: f,
                  name: g,
                  sessionID: a,
                  xstyle: i.primaryImage,
                }),
              }
            ),
          }),
          h.jsx("div", { className: c("stylex")(i.divider) }),
          h.jsxs("div", {
            className: c("stylex")(i.secondaryImageContainer),
            children: [
              h.jsx("div", {
                className: c("stylex")(i.secondaryTopImages),
                children: h.jsx(
                  d("SearchCometInfoBoxFeedbackSection.react")
                    .SearchCometInfoBoxFeedbackSection,
                  {
                    attributeData: {
                      name: d("SearchCometInfoBoxFeedbackSection.react")
                        .PUBLIC_FEEDBACK_SECTIONS.image,
                      value: (b = k.handle) != null ? b : "N/A",
                    },
                    isImage: !0,
                    children: h.jsx(c("SearchCometInfoBoxGridImage.react"), {
                      imageInformation: k,
                      index: 1,
                      metadata: f,
                      name: g,
                      sessionID: a,
                      xstyle: i.secondaryTopImage,
                    }),
                  }
                ),
              }),
              h.jsxs("div", {
                className: c("stylex")(i.secondaryBottomImages),
                children: [
                  h.jsx("div", {
                    className: c("stylex")(
                      i.secondaryBottomImage,
                      i.secondaryBottomStartImage
                    ),
                    children: h.jsx(
                      d("SearchCometInfoBoxFeedbackSection.react")
                        .SearchCometInfoBoxFeedbackSection,
                      {
                        attributeData: {
                          name: d("SearchCometInfoBoxFeedbackSection.react")
                            .PUBLIC_FEEDBACK_SECTIONS.image,
                          value: (j = l.handle) != null ? j : "N/A",
                        },
                        isImage: !0,
                        children: h.jsx(
                          c("SearchCometInfoBoxGridImage.react"),
                          {
                            imageInformation: l,
                            index: 2,
                            metadata: f,
                            name: g,
                            sessionID: a,
                            xstyle: i.secondaryBottomImageShare,
                          }
                        ),
                      }
                    ),
                  }),
                  h.jsx("div", { className: c("stylex")(i.divider) }),
                  h.jsx("div", {
                    className: c("stylex")(
                      i.secondaryBottomImage,
                      i.secondaryBottomEndImage
                    ),
                    children: h.jsx(
                      d("SearchCometInfoBoxFeedbackSection.react")
                        .SearchCometInfoBoxFeedbackSection,
                      {
                        attributeData: {
                          name: d("SearchCometInfoBoxFeedbackSection.react")
                            .PUBLIC_FEEDBACK_SECTIONS.image,
                          value: (b = e.handle) != null ? b : "N/A",
                        },
                        isImage: !0,
                        children: h.jsx(
                          c("SearchCometInfoBoxGridImage.react"),
                          {
                            imageInformation: e,
                            index: 3,
                            metadata: f,
                            name: g,
                            sessionID: a,
                            xstyle: i.secondaryBottomImageShare,
                          }
                        ),
                      }
                    ),
                  }),
                ],
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
  "SearchCometInfoBoxImageContainer.react",
  [
    "CometRelay",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxFeedbackSection.react",
    "SearchCometInfoBoxGridImage.react",
    "SearchCometInfoBoxImageContainer_imageContainer.graphql",
    "SearchCometInfoBoxPhotoCollage.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = 4,
      k = {
        imageContainer: { marginBottom: "sjgh65i0" },
        singleImage: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "otmpkxaj",
          objectFit: "bixrwtb6",
          objectPosition: "f5013776",
          width: "k4urcfbm",
        },
        singleImageContainer: {
          boxSizing: "rq0escxv",
          height: "datstx6m",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          width: "k4urcfbm",
        },
      };
    function a(a) {
      var e,
        f = a.infoboxEntityAttributes;
      a = a.sessionID;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometInfoBoxImageContainer_imageContainer.graphql")),
        f
      );
      var g = f.image_uris,
        l = f.name;
      f = d("InfoBoxLoggingUtils").useFormattedMetadata(
        f == null ? void 0 : f.metadata
      );
      if (g.length === 0) return null;
      e =
        g.length >= j
          ? i.jsx(c("SearchCometInfoBoxPhotoCollage.react"), {
              images: g,
              metadata: f,
              name: l,
              sessionID: a,
            })
          : g.length
          ? i.jsx("div", {
              className: c("stylex")(k.singleImageContainer),
              children: i.jsx(
                d("SearchCometInfoBoxFeedbackSection.react")
                  .SearchCometInfoBoxFeedbackSection,
                {
                  attributeData: {
                    name: d("SearchCometInfoBoxFeedbackSection.react")
                      .PUBLIC_FEEDBACK_SECTIONS.image,
                    value: (e = g[0].handle) != null ? e : "N/A",
                  },
                  block: !0,
                  children: i.jsx(c("SearchCometInfoBoxGridImage.react"), {
                    imageInformation: g[0],
                    index: 0,
                    metadata: f,
                    name: l,
                    sessionID: a,
                    xstyle: k.singleImage,
                  }),
                }
              ),
            })
          : null;
      return i.jsx("div", {
        className: c("stylex")(k.imageContainer),
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxKPEntryPoint.react",
  [
    "fbt",
    "CometRelay",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxKPEntryPoint_pageuri.graphql",
    "TetraButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = a.infoboxEntityAttributes;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("SearchCometInfoBoxKPEntryPoint_pageuri.graphql")),
        a
      );
      var e = a.fb_page_uri,
        f = a.metadata,
        g = a.name,
        k = d("InfoBoxLoggingUtils").useFormattedMetadata(f);
      return e == null
        ? null
        : j.jsx("div", {
            className: "sjgh65i0",
            children: j.jsx(c("TetraButton.react"), {
              label: h._("More Info"),
              linkProps: { url: e },
              onPress: function () {
                return d("InfoBoxLoggingUtils").logKnowledgePageClickEvent(
                  g,
                  k,
                  "infobox"
                );
              },
              size: "medium",
              type: "secondary",
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometInfoBoxLinks.react",
  [
    "fbt",
    "ix",
    "BaseRow.react",
    "BaseRowItem.react",
    "CometRelay",
    "InfoBoxConstants",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxLinks_links.graphql",
    "TetraButton.react",
    "TetraText.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = "https://www.facebook.com/",
      m = {
        links: { paddingTop: "discj3wi" },
        root: { paddingBottom: "ihqw7lf3" },
        row: { marginEnd: "dlv3wnog", marginStart: "rl04r1d5" },
        rowItem: { paddingEnd: "ph5uu5jm", paddingStart: "b3onmgus" },
      };
    function a(a) {
      a = a.infoboxEntityAttributes;
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("SearchCometInfoBoxLinks_links.graphql")),
        a
      );
      var e = a.foreign_keys,
        f = a.name,
        g = d("InfoBoxLoggingUtils").useFormattedMetadata(
          a == null ? void 0 : a.metadata
        );
      if (e == null) return null;
      var n = [];
      e.forEach(function (a) {
        var b = a.key;
        a = a.provider;
        if (b != null && b !== "" && a != null)
          switch (a) {
            case "facebook":
              n.push(
                k.jsx(
                  c("BaseRowItem.react"),
                  {
                    expanding: !0,
                    xstyle: m.rowItem,
                    children: k.jsx(c("TetraButton.react"), {
                      icon: d("fbicon")._(i("869050"), 16),
                      label: h._("Facebook"),
                      linkProps: { url: l + b },
                      onPress: function () {
                        return d("InfoBoxLoggingUtils").logForeignKeyClickEvent(
                          f,
                          "facebook",
                          g,
                          "infobox"
                        );
                      },
                      type: "secondary",
                    }),
                  },
                  a + b
                )
              );
              break;
            case "instagram":
              n.push(
                k.jsx(
                  c("BaseRowItem.react"),
                  {
                    expanding: !0,
                    xstyle: m.rowItem,
                    children: k.jsx(c("TetraButton.react"), {
                      icon: d("fbicon")._(i("680443"), 16),
                      label: h._("Instagram"),
                      linkProps: {
                        target: "_blank",
                        url: d("InfoBoxConstants").INSTAGRAM_HREF + b,
                      },
                      onPress: function () {
                        return d("InfoBoxLoggingUtils").logForeignKeyClickEvent(
                          f,
                          "instagram",
                          g,
                          "infobox"
                        );
                      },
                      type: "secondary",
                    }),
                  },
                  a + b
                )
              );
              break;
          }
      });
      if (n.length === 0) return null;
      n.length % 2 === 1 &&
        n.push(
          k.jsx(
            c("BaseRowItem.react"),
            { xstyle: m.rowItem, children: "\xa0" },
            "row-blank-item"
          )
        );
      return k.jsxs("div", {
        className: c("stylex")(m.root),
        children: [
          k.jsx(c("TetraText.react"), {
            type: "headline3",
            children: h._("Profiles:"),
          }),
          k.jsx("div", {
            className: c("stylex")(m.links),
            children: k.jsx(c("BaseRow.react"), {
              align: "justify",
              columns: 2,
              direction: "forward",
              wrap: "none",
              xstyle: m.row,
              children: n,
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
  "SearchCometInfoBoxRelatedEntitiesContainer.react",
  [
    "fbt",
    "CometRelay",
    "InfoBoxLoggingUtils",
    "SearchCometInfoBoxRelatedEntities.react",
    "SearchCometInfoBoxRelatedEntitiesContainer_relatedEntitiesDetails.graphql",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      a = a.infoboxEntityAttributes;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "SearchCometInfoBoxRelatedEntitiesContainer_relatedEntitiesDetails.graphql"
            )),
        a
      );
      a = a || {};
      var e = a.media_details,
        f = a.members,
        g = a.metadata,
        k = a.movie_details,
        l = a.top_people_uris,
        m = a.tvshow_details;
      a = a.type;
      g = d("InfoBoxLoggingUtils").useFormattedMetadata(g);
      var n = k.length > 0 || (l.length > 0 && a !== "Movie"),
        o = null,
        p = !1;
      a === "Artist"
        ? ((o = h._("Discography:")), (p = !0))
        : a === "Album"
        ? ((o = h._("Related Albums:")), (p = !0))
        : a === "Movie" && (o = h._("Related Media:"));
      var q = null;
      a === "Artist"
        ? (q = h._("Members:"))
        : a === "Movie" && (q = h._("Performers:"));
      return j.jsxs("div", {
        className: "tr9rh885 sjgh65i0 rq0escxv",
        children: [
          n
            ? j.jsx("div", {
                className: "n851cfcs",
                children: j.jsx(c("TetraText.react"), {
                  type: "headline3",
                  children: h._("See also:"),
                }),
              })
            : null,
          j.jsx("div", {
            className: "k4urcfbm",
            children: j.jsx(c("SearchCometInfoBoxRelatedEntities.react"), {
              label: q,
              metadata: g,
              relatedEntities: f,
              type: a,
            }),
          }),
          a === "Movie"
            ? null
            : j.jsx("div", {
                className: "k4urcfbm",
                children: j.jsx(c("SearchCometInfoBoxRelatedEntities.react"), {
                  metadata: g,
                  relatedEntities: l,
                  type: a,
                }),
              }),
          j.jsx("div", {
            className: "k4urcfbm n851cfcs",
            children: j.jsx(c("SearchCometInfoBoxRelatedEntities.react"), {
              metadata: g,
              relatedEntities: k,
              type: a,
            }),
          }),
          j.jsx("div", {
            className: "k4urcfbm n851cfcs",
            children: j.jsx(c("SearchCometInfoBoxRelatedEntities.react"), {
              label: o,
              metadata: g,
              relatedEntities: e,
              textOnly: p,
              type: a,
            }),
          }),
          j.jsx("div", {
            className: "k4urcfbm n851cfcs",
            children: j.jsx(c("SearchCometInfoBoxRelatedEntities.react"), {
              metadata: g,
              relatedEntities: m,
              type: a,
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
  "SearchCometInfoBox.react",
  [
    "CometCard.react",
    "CometPlaceholder.react",
    "CometRelay",
    "InfoBoxLoggingUtils",
    "InteractionTracingMetrics",
    "KPWhitelistedDomains",
    "SearchCometInfoBoxContentAttribution.react",
    "SearchCometInfoBoxContext",
    "SearchCometInfoBoxCoronavirusStatsGlimmer.react",
    "SearchCometInfoBoxDebug.react",
    "SearchCometInfoBoxDisambiguate.react",
    "SearchCometInfoBoxEntityAdditionalDetails.react",
    "SearchCometInfoBoxEntityDetails.react",
    "SearchCometInfoBoxFeedback.react",
    "SearchCometInfoBoxFeedbackDialog.react",
    "SearchCometInfoBoxHighlightedAttribute.react",
    "SearchCometInfoBoxImageContainer.react",
    "SearchCometInfoBoxKPEntryPoint.react",
    "SearchCometInfoBoxLinks.react",
    "SearchCometInfoBoxQuery.graphql",
    "SearchCometInfoBoxRelatedEntitiesContainer.react",
    "SearchCometResultsQueryContext",
    "qex",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.infoBoxQueryReference;
      a = a.sessionID;
      var g = d(
        "SearchCometResultsQueryContext"
      ).useSearchCometResultsQueryContext();
      g = g.query;
      f = d("CometRelay").usePreloadedQuery(
        h !== void 0 ? h : (h = b("SearchCometInfoBoxQuery.graphql")),
        f
      );
      f = f.infobox_entity_attributes;
      c("InteractionTracingMetrics")
        .currentInteractionLogger()
        .addMetadata("comet_search_results_has_info_box", 1);
      var j = d("InfoBoxLoggingUtils").useFormattedMetadata(
        f == null ? void 0 : f.metadata
      );
      if (g == null)
        throw c("unrecoverableViolation")(
          "Query required for independent related searches",
          "search"
        );
      if (f == null) return null;
      g =
        f == null ? void 0 : (g = f.domain) == null ? void 0 : g.toUpperCase();
      e =
        (e = f.place_info) == null
          ? void 0
          : (e = e.ent_data) == null
          ? void 0
          : e.coronavirus_stats;
      var k = f.highlighted_attribute,
        l = f.info_qna_answer_text,
        m = f.name,
        n = f.source_entity_details,
        o = e != null,
        p = c("qex")._("1742047");
      return i.jsx(c("CometCard.react"), {
        background: "white",
        dropShadow: 1,
        children: i.jsx(
          d("SearchCometInfoBoxContext").SearchCometInfoBoxContextProvider,
          {
            children: i.jsxs("div", {
              className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
              "data-testid": void 0,
              children: [
                i.jsx(c("SearchCometInfoBoxDisambiguate.react"), {
                  infoboxEntityAttributes: f,
                }),
                m != null && (k != null || n != null || l != null)
                  ? i.jsx(c("SearchCometInfoBoxHighlightedAttribute.react"), {
                      entityDetails: f,
                      name: m,
                    })
                  : null,
                i.jsx(c("SearchCometInfoBoxImageContainer.react"), {
                  infoboxEntityAttributes: f,
                  sessionID: a,
                }),
                i.jsx(c("SearchCometInfoBoxEntityDetails.react"), {
                  hasCovidData: o,
                  infoboxEntityAttributes: f,
                  metadata: j,
                }),
                i.jsx(c("SearchCometInfoBoxEntityAdditionalDetails.react"), {
                  infoboxEntityAttributes: f,
                }),
                Object.prototype.hasOwnProperty.call(
                  c("KPWhitelistedDomains"),
                  g
                )
                  ? i.jsx(c("SearchCometInfoBoxKPEntryPoint.react"), {
                      infoboxEntityAttributes: f,
                    })
                  : null,
                i.jsx(c("SearchCometInfoBoxLinks.react"), {
                  infoboxEntityAttributes: f,
                }),
                i.jsx(c("SearchCometInfoBoxRelatedEntitiesContainer.react"), {
                  infoboxEntityAttributes: f,
                }),
                p === !1 &&
                  !o &&
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", { className: "l6v480f0" }),
                      i.jsx(c("SearchCometInfoBoxFeedback.react"), {
                        infoboxEntityAttributes: f,
                      }),
                      i.jsx(c("SearchCometInfoBoxFeedbackDialog.react"), {
                        formattedMetadata: j,
                        source: "infobox",
                      }),
                    ],
                  }),
                i.jsx("div", { className: "l6v480f0" }),
                i.jsx(c("SearchCometInfoBoxContentAttribution.react"), {
                  infoboxEntityAttributes: f,
                }),
                o &&
                  i.jsx(c("CometPlaceholder.react"), {
                    fallback: i.jsx(
                      c("SearchCometInfoBoxCoronavirusStatsGlimmer.react"),
                      {}
                    ),
                    children: i.jsx(d("CometRelay").MatchContainer, {
                      match: e,
                    }),
                  }),
                i.jsx(c("SearchCometInfoBoxDebug.react"), {
                  infoboxEntityAttributes: f,
                }),
              ],
            }),
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
  "SearchCometInfoBoxPhotoCollageGlimmer.react",
  ["BaseGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        className:
          "stjgntxs ni8dbmo4 d23ldmr1 btwxx1t3 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
        children: [
          h.jsx("div", {
            className: "fv0vnmcu buofh1pr",
            children: h.jsx(c("BaseGlimmer.react"), {
              className: "datstx6m",
              index: 0,
            }),
          }),
          h.jsxs("div", {
            className: "buofh1pr cbu4d94t j83agx80",
            children: [
              h.jsx("div", {
                className: "w0hvl6rk buofh1pr",
                children: h.jsx(c("BaseGlimmer.react"), {
                  className: "datstx6m",
                  index: 0,
                }),
              }),
              h.jsxs("div", {
                className: "buofh1pr btwxx1t3 j83agx80",
                children: [
                  h.jsx("div", {
                    className: "fv0vnmcu buofh1pr",
                    children: h.jsx(c("BaseGlimmer.react"), {
                      className: "datstx6m",
                      index: 0,
                    }),
                  }),
                  h.jsx("div", {
                    className: "buofh1pr cbu4d94t j83agx80",
                    children: h.jsx(c("BaseGlimmer.react"), {
                      className: "datstx6m",
                      index: 0,
                    }),
                  }),
                ],
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
  "SearchCometInfoBoxGlimmer.react",
  [
    "BaseGlimmer.react",
    "CometCard.react",
    "SearchCometInfoBoxPhotoCollageGlimmer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx(c("CometCard.react"), {
        background: "white",
        dropShadow: 1,
        children: h.jsxs("div", {
          className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
          children: [
            h.jsx(c("SearchCometInfoBoxPhotoCollageGlimmer.react"), {}),
            h.jsx(c("BaseGlimmer.react"), {
              className:
                "fwkrndq2 sjgh65i0 tr9rh885 jnigpg78 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
              index: 1,
            }),
            h.jsx(c("BaseGlimmer.react"), {
              className:
                "k4urcfbm hjkfelp1 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
              index: 2,
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
  "SearchCometGlobalSearchTopTabEmptyResultsCard.react",
  [
    "fbt",
    "CometSearchEventEmitterContext",
    "SearchCometResultsEmptyResultsCard.react",
    "TetraButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useContext;
    function a() {
      var a = k(c("CometSearchEventEmitterContext")),
        b = a.publishGlobalTypeaheadFocus;
      a = j(
        function () {
          b();
        },
        [b]
      );
      return i.jsx(c("SearchCometResultsEmptyResultsCard.react"), {
        action: i.jsx(c("TetraButton.react"), {
          label: h._("Try Another Search"),
          onPress: a,
        }),
        body: h._(
          "Try different keywords or make sure everything is spelled correctly"
        ),
        headline: h._("We Didn't Find Anything"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometGlobalSearchTopTabRoot.react",
  [
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRouteParams",
    "SearchCometGlobalSearchRootBase.react",
    "SearchCometGlobalSearchRootLayout.react",
    "SearchCometGlobalSearchTopTabEmptyResultsCard.react",
    "SearchCometInfoBoxGlimmer.react",
    "SearchCometResultsColumnResultsLayoutStrategy.react",
    "SearchCometResultsColumnRootLayoutStrategy.react",
    "SearchCometResultsDefaultEmptyResultsCard.react",
    "deferredLoadComponent",
    "getSearchCometResultsQuery",
    "gkx",
    "react",
    "requireDeferredForDisplay",
    "unrecoverableViolation",
    "useSearchCometHasBootstrapEntityModule",
    "useSearchCometResultsClientSERPUnitIDForSessionID",
    "useSearchCometResultsResultsLoadedLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("SearchCometInfoBox.react").__setRef(
          "SearchCometGlobalSearchTopTabRoot.react"
        )
      ),
      i = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "SearchCometResultsBootstrapEntityModuleDeferred.react"
        ).__setRef("SearchCometGlobalSearchTopTabRoot.react")
      ),
      j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useMemo;
    function a(a) {
      var b,
        e = a.props.routeProps;
      a = a.queries;
      var f = a.infoBoxQuery,
        g = k(
          function (a) {
            var b = a.resultContent;
            a = a.sessionID;
            var d = f
              ? j.jsx(c("CometErrorBoundary.react"), {
                  children: j.jsx(c("CometPlaceholder.react"), {
                    fallback: j.jsx(c("SearchCometInfoBoxGlimmer.react"), {}),
                    children: j.jsx(h, {
                      infoBoxQueryReference: f,
                      sessionID: a,
                    }),
                  }),
                })
              : null;
            return j.jsx(
              c("SearchCometResultsColumnRootLayoutStrategy.react"),
              {
                emptyResultsCard: c("gkx")("1214686")
                  ? j.jsx(
                      c("SearchCometGlobalSearchTopTabEmptyResultsCard.react"),
                      {}
                    )
                  : j.jsx(
                      c("SearchCometResultsDefaultEmptyResultsCard.react"),
                      {}
                    ),
                layoutProps: {
                  beforeResultContent: j.jsx(i, { sessionID: a }),
                  rightRail: d,
                  singleColumnWidth: "wide",
                },
                resultContent: b,
              },
              a
            );
          },
          [f]
        ),
        m = a.searchQuery,
        n = (b = m.variables.args.context) == null ? void 0 : b.bsid;
      if (n == null)
        throw c("unrecoverableViolation")(
          "Search result page session id is missing from timespent metadata",
          "search"
        );
      var o = c("useSearchCometHasBootstrapEntityModule")(),
        p = c("useSearchCometResultsClientSERPUnitIDForSessionID")(n);
      b = d("CometRouteParams").useRouteParams();
      var q = c("getSearchCometResultsQuery")(e, b),
        r = e.logging_meta_data;
      b = l(
        function () {
          var a;
          return {
            entryPointScope: r.entry_point_scope,
            filterType: r.filter_type,
            loggingUnitID: o ? p : null,
            query: q,
            sessionID: n,
            typeaheadSessionID:
              (a = m.variables.args.context) == null ? void 0 : a.tsid,
          };
        },
        [
          p,
          r.filter_type,
          o,
          r.entry_point_scope,
          q,
          (b = m.variables.args.context) == null ? void 0 : b.tsid,
          n,
        ]
      );
      c("useSearchCometResultsResultsLoadedLogger")(b);
      return j.jsx(c("SearchCometGlobalSearchRootBase.react"), {
        preloadedQueries: a,
        resultsLayoutStrategy: c(
          "SearchCometResultsColumnResultsLayoutStrategy.react"
        ),
        rootLayout: c("SearchCometGlobalSearchRootLayout.react"),
        rootLayoutStrategyFactory: g,
        routeProps: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsBootstrapEntityModuleResultCTA.react",
  [
    "CometRelay",
    "SearchCometResultsBootstrapEntityModuleResultCTAQuery.graphql",
    "SearchCometResultsCTA.react",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.id;
      var e = d("CometRelay").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b(
              "SearchCometResultsBootstrapEntityModuleResultCTAQuery.graphql"
            )),
        { id: a },
        { fetchPolicy: "store-or-network" }
      );
      e = e.search_cta_model;
      if (e == null) {
        c("recoverableViolation")(
          "No CTA found for profile with id " + a,
          "search"
        );
        return null;
      }
      return i.jsx(c("SearchCometResultsCTA.react"), { ctaModel: e });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsBootstrapEntityModuleResult.react",
  [
    "CometLegacyListItemBase.react",
    "CometPlaceholder.react",
    "SearchCometResultsBootstrapEntityModuleResultCTA.react",
    "SearchCometResultsCTAButtonGlimmer.react",
    "SearchCometResultsEntityResultName.react",
    "SearchCometResultsEntityResultNameWithSnippets.react",
    "SearchCometResultsLoggedProfileProvider.react",
    "SearchCometResultsLoggedResultProvider.react",
    "SearchCometResultsLogger",
    "TetraProfilePhoto.react",
    "TetraText.react",
    "cr:1780683",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
    "unrecoverableViolation",
    "useSearchCometResultsUnitDataLogger",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("ActorHovercard.react").__setRef(
          "SearchCometResultsBootstrapEntityModuleResult.react"
        )
      ),
      k = 60;
    function a(a) {
      var d = a.bootstrapItemIDs,
        e = a.isHighConfidenceResult,
        f = a.result,
        g = a.resultsModuleRole,
        l = a.sessionID;
      a = a.type;
      var m = a === void 0 ? "default" : a;
      a = f.getRawData();
      if (a == null)
        throw c("unrecoverableViolation")(
          "Raw data required for BEM result",
          "search"
        );
      var n = a.id,
        o = a.isVerified,
        p = a.name,
        q = a.profilePictureURI,
        r = a.resultType,
        s = a.snippet,
        t = a.url;
      if (n == null || r == null || p == null || q == null || t == null)
        throw c("unrecoverableViolation")(
          "Fields missing for BEM result",
          "search"
        );
      a = i(function () {
        return "www_bem_res:" + c("uuid")();
      }, []);
      c("useSearchCometResultsUnitDataLogger")({
        bootstrapItemIDs: d,
        isHighConfidenceResult: e,
        loggingUnitID: a,
        resultsModuleRole: g,
        sessionID: l,
        tappedResultEntityID: n,
      });
      var u = Boolean(o) ? { verificationBadge: "BLUE_VERIFIED" } : null,
        v = function (a, b) {
          return h.jsx(c("TetraProfilePhoto.react"), {
            "aria-hidden": !0,
            linkProps: { url: t },
            onPress: b,
            ref: a,
            role: "presentation",
            size: k,
            source: { uri: q },
          });
        },
        w = function (a) {
          return h.jsx(
            c("SearchCometResultsEntityResultName.react"),
            babelHelpers["extends"]({ name: f.getLabel(), ref: a, url: t }, u)
          );
        };
      return h.jsxs("div", {
        className: "l9j0dhe7",
        role: "article",
        children: [
          h.jsx(c("SearchCometResultsLoggedResultProvider.react"), {
            loggingUnitID: a,
            sessionID: l,
            tappedResultID: n,
            children: h.jsx(
              c("SearchCometResultsLoggedProfileProvider.react"),
              {
                id: n,
                name: p,
                type: r,
                typeaheadProfilePictureURI: q,
                url: t,
                children: h.jsx(c("SearchCometResultsLogger"), {
                  children: function (a) {
                    var b = a.logResultClick;
                    return h.jsx(c("CometLegacyListItemBase.react"), {
                      addon: h.jsx(c("CometPlaceholder.react"), {
                        fallback: v(null),
                        children: h.jsx(j, {
                          actorID: n,
                          children: function (a) {
                            return v(a, b);
                          },
                        }),
                      }),
                      right: h.jsx(c("CometPlaceholder.react"), {
                        fallback: h.jsx(
                          c("SearchCometResultsCTAButtonGlimmer.react"),
                          {}
                        ),
                        children: h.jsx(
                          c(
                            "SearchCometResultsBootstrapEntityModuleResultCTA.react"
                          ),
                          { id: n }
                        ),
                      }),
                      children: h.jsx(
                        c(
                          "SearchCometResultsEntityResultNameWithSnippets.react"
                        ),
                        {
                          name: h.jsx(c("CometPlaceholder.react"), {
                            fallback: w(null),
                            children: h.jsx(j, {
                              actorID: n,
                              display: "inline",
                              children: function (a) {
                                return w(a);
                              },
                            }),
                          }),
                          snippets: h.jsx(c("TetraText.react"), {
                            numberOfLines: 1,
                            type: "meta3",
                            children: s,
                          }),
                          type: m,
                        }
                      ),
                    });
                  },
                }),
              }
            ),
          }),
          b("cr:1780683") != null ? h.jsx(b("cr:1780683"), {}) : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsBootstrapBlendedEntityModule.react",
  [
    "SearchCometResultsBootstrapEntityModuleResult.react",
    "SearchCometResultsCard.react",
    "SearchCometResultsLoggedModuleProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.bootstrapItemIDs,
        d = a.isHighConfidenceResult,
        e = a.loggingUnitID,
        f = a.results,
        g = a.resultsModuleRole,
        i = a.sessionID;
      return h.jsx(c("SearchCometResultsLoggedModuleProvider.react"), {
        loggingUnitID: e,
        sessionID: i,
        children: f.map(function (a, e) {
          return h.jsx(
            c("SearchCometResultsCard.react"),
            {
              content: h.jsx(
                c("SearchCometResultsBootstrapEntityModuleResult.react"),
                {
                  bootstrapItemIDs: b,
                  isHighConfidenceResult: d,
                  result: a,
                  resultsModuleRole: g,
                  sessionID: i,
                }
              ),
            },
            e
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
  "SearchCometResultsBootstrapHCMEntityModule.react",
  [
    "BaseHeadingContextWrapper.react",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometSuspenseList.react",
    "SearchCometResultsBootstrapEntityModuleResult.react",
    "SearchCometResultsCard.react",
    "SearchCometResultsLoggedModuleProvider.react",
    "SearchCometResultsResultContext",
    "cr:1895690",
    "react",
    "useSearchCometSerpTtbrTracker",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var e = a.bootstrapItemIDs,
        f = a.isHighConfidenceResult,
        g = a.loggingUnitID,
        i = a.result,
        j = a.resultsModuleRole;
      a = a.sessionID;
      var k = d(
        "SearchCometResultsResultContext"
      ).useSearchResultsResultState();
      k = k.results;
      var l = c("useSearchCometSerpTtbrTracker")("HCM", a),
        m = [];
      for (
        var k = k,
          n = Array.isArray(k),
          o = 0,
          k = n
            ? k
            : k[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var p;
        if (n) {
          if (o >= k.length) break;
          p = k[o++];
        } else {
          o = k.next();
          if (o.done) break;
          p = o.value;
        }
        p = p;
        var q = p.has_relay_child_rendering_strategy;
        if (Boolean(q)) m.push(p);
        else break;
      }
      q = m.map(function (a, e) {
        var f = a.logging_unit_id,
          g = a.relay_rendering_strategy;
        return g == null
          ? null
          : h.jsx(
              c("CometPlaceholder.react"),
              {
                fallback: null,
                children: h.jsx(c("CometErrorBoundary.react"), {
                  children: h.jsxs("div", {
                    className: "sjgh65i0",
                    role: "article",
                    children: [
                      b("cr:1895690") != null
                        ? h.jsx(b("cr:1895690"), { result: a, style: "inline" })
                        : null,
                      h.jsx(d("CometRelay").MatchContainer, { match: g }),
                    ],
                  }),
                }),
              },
              (a = f) != null ? a : e
            );
      });
      return h.jsx("div", {
        ref: l,
        children: h.jsx(c("SearchCometResultsCard.react"), {
          content: h.jsxs(h.Fragment, {
            children: [
              h.jsx(c("SearchCometResultsLoggedModuleProvider.react"), {
                loggingUnitID: g,
                sessionID: a,
                children: h.jsx("div", {
                  className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
                  children: h.jsx(
                    c("SearchCometResultsBootstrapEntityModuleResult.react"),
                    {
                      bootstrapItemIDs: e,
                      isHighConfidenceResult: f,
                      result: i,
                      resultsModuleRole: j,
                      sessionID: a,
                      type: "emphasized",
                    }
                  ),
                }),
              }),
              h.jsx(c("BaseHeadingContextWrapper.react"), {
                children: h.jsx(c("CometSuspenseList.react"), {
                  revealOrder: "forwards",
                  children: q,
                }),
              }),
            ],
          }),
          padding: "none",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsBootstrapUserEntityModule.react",
  [
    "fbt",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRelay",
    "SearchCometResultsBootstrapEntityModuleResult.react",
    "SearchCometResultsCard.react",
    "SearchCometResultsLoggedModuleProvider.react",
    "SearchCometResultsMergeableBootstrapEntityModuleRenderingStrategies",
    "SearchCometResultsResultContext",
    "cr:1895690",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useEffect,
      k = e.useMemo,
      l = e.useRef;
    function a(a) {
      var e = a.bootstrapItemIDs,
        f = a.isHighConfidenceResult,
        g = a.loggingUnitID,
        m = a.results,
        n = a.resultsModuleRole,
        o = a.sessionID;
      a = d("SearchCometResultsResultContext").useSearchResultsResultState();
      a = a.results;
      var p = d(
          "SearchCometResultsResultContext"
        ).useSearchResultsResultDispatcher(),
        q = l(new Map()),
        r = a[0];
      a = (a = r) != null ? a : {};
      var s = a.relay_rendering_strategy;
      a = (a = s) != null ? a : {};
      a = a.__typename;
      var t =
          r != null &&
          a != null &&
          c(
            "SearchCometResultsMergeableBootstrapEntityModuleRenderingStrategies"
          ).has(a)
            ? r
            : null,
        u = k(
          function () {
            return t != null
              ? i.jsx(c("CometPlaceholder.react"), {
                  fallback: i.jsx("div", { className: "gy6hb44f" }),
                  children: i.jsxs(c("CometErrorBoundary.react"), {
                    fallback: function () {
                      return i.jsx("div", { className: "gy6hb44f" });
                    },
                    children: [
                      b("cr:1895690") != null
                        ? i.jsx(b("cr:1895690"), { result: t })
                        : null,
                      i.jsx(d("CometRelay").MatchContainer, {
                        match: s,
                        props: { index: 0, sessionID: o },
                      }),
                    ],
                  }),
                })
              : null;
          },
          [t, s, o]
        );
      a = k(
        function () {
          return m.map(function (a, b) {
            var d = b === 0;
            d = c("stylex").dedupe(
              {
                "border-top-0.3": "l6v480f0",
                "padding-bottom-1": "f10w8fjw",
                "padding-top-1": "pybr56ya",
              },
              d
                ? { "border-top-0.3": "qu0x051f", "padding-top-1": "jb3vyjys" }
                : null,
              u == null && b === m.length - 1
                ? { "padding-bottom-1": "qt6c0cv9" }
                : null
            );
            return i.jsx(
              "div",
              {
                className: d,
                children: i.jsx(
                  c("SearchCometResultsBootstrapEntityModuleResult.react"),
                  {
                    bootstrapItemIDs: e,
                    isHighConfidenceResult: f,
                    result: a,
                    resultsModuleRole: n,
                    sessionID: o,
                  }
                ),
              },
              a.getKey()
            );
          });
        },
        [e, f, u, m, n, o]
      );
      var v = k(
        function () {
          if (r != null) {
            var a,
              b = i.createRef();
            q.current.set(0, {
              loggingUnitID: g,
              ref: b,
              role: ((a = r.node) == null ? void 0 : a.role) || "UNKNOWN",
            });
            return b;
          }
          return null;
        },
        [r, g]
      );
      j(
        function () {
          v != null &&
            p({
              isChildResults: !1,
              resultRefsByIndex: q,
              sessionID: o,
              type: "UPDATE_RESULT_REFS_BY_INDEX",
            });
        },
        [v, p, o]
      );
      return i.jsx("div", {
        ref: v,
        children: i.jsx(c("SearchCometResultsCard.react"), {
          content: i.jsxs(i.Fragment, {
            children: [
              i.jsx(c("SearchCometResultsLoggedModuleProvider.react"), {
                loggingUnitID: g,
                sessionID: o,
                children: a,
              }),
              u,
            ],
          }),
          title: h._("People"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsBootstrapEntityModule.react",
  [
    "CometRouteParams",
    "InteractionTracingMetrics",
    "SearchCometResultsBootstrapBlendedEntityModule.react",
    "SearchCometResultsBootstrapHCMEntityModule.react",
    "SearchCometResultsBootstrapUserEntityModule.react",
    "SearchCometResultsQueryContext",
    "react",
    "unrecoverableViolation",
    "useCometDisplayTimingTracker",
    "useSearchCometGlobalTypeaheadEntityBootstrap",
    "useSearchCometHasBootstrapEntityModule",
    "useSearchCometResultsBootstrapEntityModuleUnitDataLogger",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useMemo;
    function a(a) {
      a = a.sessionID;
      var b = d("CometRouteParams").useRouteParams();
      b = b.__hcr__;
      var e = d(
          "SearchCometResultsQueryContext"
        ).useSearchCometResultsQueryContext(),
        f = e.query,
        g = c("useSearchCometHasBootstrapEntityModule")();
      e = c("useCometDisplayTimingTracker")("SearchBootstrapEntityModule");
      if (f == null)
        throw c("unrecoverableViolation")("query required for BEM", "search");
      var k = c("useSearchCometGlobalTypeaheadEntityBootstrap")(),
        l = k.getParamsForQuery;
      k = j(
        function () {
          var a;
          return !g ? {} : (a = l(f)) != null ? a : {};
        },
        [l, g, f]
      );
      var m = k.highConfidenceResult,
        n = k.moduleRole,
        o = k.results;
      k = m != null || b != null;
      m = j(function () {
        return "www_bem:" + c("uuid")();
      }, []);
      var p = j(
        function () {
          return o != null
            ? o
                .map(function (a) {
                  return a.getRawData().id;
                })
                .filter(Boolean)
            : null;
        },
        [o]
      );
      c("useSearchCometResultsBootstrapEntityModuleUnitDataLogger")({
        bootstrapItemIDs: p,
        isHighConfidenceResult: k,
        loggingUnitID: m,
        modulePosition: 0,
        resultsModuleRole: n,
        sessionID: a,
      });
      b = o != null && o.length > 0;
      i(
        function () {
          c("InteractionTracingMetrics")
            .currentInteractionLogger()
            .addMetadata(
              "comet_search_results_bootstrap_results",
              p != null ? p.length : 0
            );
        },
        [p, a]
      );
      if (!b) return null;
      b = o[0];
      if (b == null) return null;
      var q = b.getRawData();
      if (q == null) return null;
      k
        ? (q = h.jsx(c("SearchCometResultsBootstrapHCMEntityModule.react"), {
            bootstrapItemIDs: p,
            isHighConfidenceResult: k,
            loggingUnitID: m,
            result: b,
            resultsModuleRole: n,
            sessionID: a,
          }))
        : n === "ENTITY_USER"
        ? (q = h.jsx(c("SearchCometResultsBootstrapUserEntityModule.react"), {
            bootstrapItemIDs: p,
            isHighConfidenceResult: k,
            loggingUnitID: m,
            results: o,
            resultsModuleRole: n,
            sessionID: a,
          }))
        : (q = h.jsx(
            c("SearchCometResultsBootstrapBlendedEntityModule.react"),
            {
              bootstrapItemIDs: p,
              isHighConfidenceResult: k,
              loggingUnitID: m,
              results: o,
              resultsModuleRole: n,
              sessionID: a,
            }
          ));
      return h.jsx("div", { ref: e, children: q });
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsBootstrapEntityModuleDeferred.react",
  ["cr:1780681", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.sessionID;
      return b("cr:1780681") != null
        ? h.jsx(b("cr:1780681"), { sessionID: a })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
