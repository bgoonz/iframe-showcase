if (self.CavalryLogger) {
  CavalryLogger.start_js(["Fwfc5YZ"]);
}

__d(
  "GroupsCometMentionsTypeaheadEntryWithTagSuggestion_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometMentionsTypeaheadEntryWithTagSuggestion_data",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "node",
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
              name: "id",
              storageKey: null,
            },
            {
              alias: "photo",
              args: [
                { kind: "Literal", name: "height", value: 40 },
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
              storageKey: "profile_picture(height:40,width:40)",
            },
          ],
          storageKey: null,
        },
      ],
      type: "SuggestedWithTagsEdge",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometMentionsTypeaheadEntryWithTagTaggedCoworker_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometMentionsTypeaheadEntryWithTagTaggedCoworker_data",
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
          name: "id",
          storageKey: null,
        },
        {
          alias: "photo",
          args: [
            { kind: "Literal", name: "height", value: 40 },
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
          storageKey: "profile_picture(height:40,width:40)",
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
  "GroupsCometMentionsTypeaheadEntryWithTagTaggedEntity_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometMentionsTypeaheadEntryWithTagTaggedEntity_data",
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
          name: "id",
          storageKey: null,
        },
        {
          alias: "photo",
          args: [
            { kind: "Literal", name: "height", value: 40 },
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
          storageKey: "profile_picture(height:40,width:40)",
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
  "GroupsCometMentionsTypeaheadEntryWithTag_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometMentionsTypeaheadEntryWithTag_data",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "node",
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
              name: "id",
              storageKey: null,
            },
            {
              alias: "photo",
              args: [
                { kind: "Literal", name: "height", value: 40 },
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
              storageKey: "profile_picture(height:40,width:40)",
            },
          ],
          storageKey: null,
        },
      ],
      type: "FriendsEdge",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometMentionsTypeaheadEntry_data.graphql",
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
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "mentions_subtext",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        d = {
          alias: "photo",
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
        e = [
          {
            alias: null,
            args: null,
            concreteType: "WorkForeignEntityInfo",
            kind: "LinkedField",
            name: "work_foreign_entity_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        f = [a, b, d];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: { mask: !1 },
        name: "GroupsCometMentionsTypeaheadEntry_data",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "score",
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  a,
                  b,
                  c,
                  d,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: e,
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: e,
                        type: "Group",
                        abstractKey: null,
                      },
                    ],
                    type: "Entity",
                    abstractKey: "__isEntity",
                  },
                ],
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: f,
                type: "Group",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: f,
                type: "Event",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [a, b, c, d],
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [a, d],
                type: "ContextualProfile",
                abstractKey: "__isContextualProfile",
              },
              {
                kind: "InlineFragment",
                selections: f,
                type: "GroupRule",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "CometComposerTypeaheadResultEntry",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useGroupsCometTypeaheadBootloadDataSourceQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "canViewerMessage",
        },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "firstDegreeFilters",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "groupID" },
        d = { defaultValue: null, kind: "LocalArgument", name: "isAdminsOnly" },
        e = { defaultValue: null, kind: "LocalArgument", name: "isPhotoTag" },
        f = { defaultValue: null, kind: "LocalArgument", name: "postID" },
        g = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        h = { kind: "Variable", name: "group_id", variableName: "groupID" },
        i = [
          {
            kind: "Variable",
            name: "can_viewer_message",
            variableName: "canViewerMessage",
          },
          h,
          {
            kind: "Variable",
            name: "is_admins_only",
            variableName: "isAdminsOnly",
          },
          {
            kind: "Variable",
            name: "is_photo_tag",
            variableName: "isPhotoTag",
          },
          { kind: "Variable", name: "post_id", variableName: "postID" },
          {
            kind: "Variable",
            name: "types",
            variableName: "firstDegreeFilters",
          },
        ],
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "score",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "mentions_subtext",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        o = {
          alias: "photo",
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
        p = [
          {
            alias: null,
            args: null,
            concreteType: "WorkForeignEntityInfo",
            kind: "LinkedField",
            name: "work_foreign_entity_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      p = {
        kind: "InlineFragment",
        selections: [
          l,
          m,
          n,
          o,
          {
            kind: "InlineFragment",
            selections: [
              {
                kind: "InlineFragment",
                selections: p,
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: p,
                type: "Group",
                abstractKey: null,
              },
            ],
            type: "Entity",
            abstractKey: "__isEntity",
          },
        ],
        type: "User",
        abstractKey: null,
      };
      var q = [l, m, o],
        r = {
          kind: "InlineFragment",
          selections: q,
          type: "Group",
          abstractKey: null,
        },
        s = {
          kind: "InlineFragment",
          selections: q,
          type: "Event",
          abstractKey: null,
        };
      m = {
        kind: "InlineFragment",
        selections: [l, m, n, o],
        type: "Page",
        abstractKey: null,
      };
      n = {
        kind: "InlineFragment",
        selections: [l, o],
        type: "ContextualProfile",
        abstractKey: "__isContextualProfile",
      };
      l = {
        kind: "InlineFragment",
        selections: q,
        type: "GroupRule",
        abstractKey: null,
      };
      o = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "__typename",
        storageKey: null,
      };
      q = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: [h],
            concreteType: null,
            kind: "LinkedField",
            name: "reference_type",
            plural: !1,
            selections: [o],
            storageKey: null,
          },
        ],
        type: "ActorWithCustomizableContextualProfile",
        abstractKey: "__isActorWithCustomizableContextualProfile",
      };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, f, g],
          kind: "Fragment",
          metadata: null,
          name: "useGroupsCometTypeaheadBootloadDataSourceQuery",
          selections: [
            {
              alias: null,
              args: i,
              concreteType: "CometComposerTypeaheadResultEntry",
              kind: "LinkedField",
              name: "comet_group_typeahead_bootload",
              plural: !0,
              selections: [
                j,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [k, p, r, s, m, n, l, q],
                  storageKey: null,
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
          argumentDefinitions: [g, c, a, d, e, f, b],
          kind: "Operation",
          name: "useGroupsCometTypeaheadBootloadDataSourceQuery",
          selections: [
            {
              alias: null,
              args: i,
              concreteType: "CometComposerTypeaheadResultEntry",
              kind: "LinkedField",
              name: "comet_group_typeahead_bootload",
              plural: !0,
              selections: [
                j,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [o, k, p, r, s, m, n, l, q],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "5350770418329003",
          metadata: {},
          name: "useGroupsCometTypeaheadBootloadDataSourceQuery",
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
  "useGroupsCometTypeaheadNetworkDataSourceQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "canViewerMessage",
        },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "firstDegreeFilters",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "groupID" },
        d = { defaultValue: null, kind: "LocalArgument", name: "isPhotoTag" },
        e = { defaultValue: null, kind: "LocalArgument", name: "postID" },
        f = { defaultValue: null, kind: "LocalArgument", name: "query" },
        g = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        h = { kind: "Variable", name: "group_id", variableName: "groupID" },
        i = [
          {
            kind: "Variable",
            name: "can_viewer_message",
            variableName: "canViewerMessage",
          },
          h,
          {
            kind: "Variable",
            name: "is_photo_tag",
            variableName: "isPhotoTag",
          },
          { kind: "Variable", name: "post_id", variableName: "postID" },
          { kind: "Variable", name: "query", variableName: "query" },
          {
            kind: "Variable",
            name: "types",
            variableName: "firstDegreeFilters",
          },
        ],
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "score",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "mentions_subtext",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        o = {
          alias: "photo",
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
        p = [
          {
            alias: null,
            args: null,
            concreteType: "WorkForeignEntityInfo",
            kind: "LinkedField",
            name: "work_foreign_entity_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      p = {
        kind: "InlineFragment",
        selections: [
          l,
          m,
          n,
          o,
          {
            kind: "InlineFragment",
            selections: [
              {
                kind: "InlineFragment",
                selections: p,
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: p,
                type: "Group",
                abstractKey: null,
              },
            ],
            type: "Entity",
            abstractKey: "__isEntity",
          },
        ],
        type: "User",
        abstractKey: null,
      };
      var q = [l, m, o],
        r = {
          kind: "InlineFragment",
          selections: q,
          type: "Group",
          abstractKey: null,
        },
        s = {
          kind: "InlineFragment",
          selections: q,
          type: "Event",
          abstractKey: null,
        };
      m = {
        kind: "InlineFragment",
        selections: [l, m, n, o],
        type: "Page",
        abstractKey: null,
      };
      n = {
        kind: "InlineFragment",
        selections: [l, o],
        type: "ContextualProfile",
        abstractKey: "__isContextualProfile",
      };
      l = {
        kind: "InlineFragment",
        selections: q,
        type: "GroupRule",
        abstractKey: null,
      };
      o = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "__typename",
        storageKey: null,
      };
      q = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: [h],
            concreteType: null,
            kind: "LinkedField",
            name: "reference_type",
            plural: !1,
            selections: [o],
            storageKey: null,
          },
        ],
        type: "ActorWithCustomizableContextualProfile",
        abstractKey: "__isActorWithCustomizableContextualProfile",
      };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, f, g],
          kind: "Fragment",
          metadata: null,
          name: "useGroupsCometTypeaheadNetworkDataSourceQuery",
          selections: [
            {
              alias: null,
              args: i,
              concreteType: "CometComposerTypeaheadResultEntry",
              kind: "LinkedField",
              name: "comet_group_typeahead_search",
              plural: !0,
              selections: [
                j,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [k, p, r, s, m, n, l, q],
                  storageKey: null,
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
          argumentDefinitions: [f, g, c, a, d, e, b],
          kind: "Operation",
          name: "useGroupsCometTypeaheadNetworkDataSourceQuery",
          selections: [
            {
              alias: null,
              args: i,
              concreteType: "CometComposerTypeaheadResultEntry",
              kind: "LinkedField",
              name: "comet_group_typeahead_search",
              plural: !0,
              selections: [
                j,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [o, k, p, r, s, m, n, l, q],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "5183604515048266",
          metadata: {},
          name: "useGroupsCometTypeaheadNetworkDataSourceQuery",
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
  "useGroupsCometComposerMentionsTypeaheadEntry_data.graphql",
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
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "mentions_subtext",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        d = {
          alias: "photo",
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
        e = [
          {
            alias: null,
            args: null,
            concreteType: "WorkForeignEntityInfo",
            kind: "LinkedField",
            name: "work_foreign_entity_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        f = [a, b, d];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "groupID" },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: { mask: !1 },
        name: "useGroupsCometComposerMentionsTypeaheadEntry_data",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "score",
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  a,
                  b,
                  c,
                  d,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: e,
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: e,
                        type: "Group",
                        abstractKey: null,
                      },
                    ],
                    type: "Entity",
                    abstractKey: "__isEntity",
                  },
                ],
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: f,
                type: "Group",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: f,
                type: "Event",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [a, b, c, d],
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [a, d],
                type: "ContextualProfile",
                abstractKey: "__isContextualProfile",
              },
              {
                kind: "InlineFragment",
                selections: f,
                type: "GroupRule",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Variable",
                        name: "group_id",
                        variableName: "groupID",
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "reference_type",
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
                type: "ActorWithCustomizableContextualProfile",
                abstractKey: "__isActorWithCustomizableContextualProfile",
              },
            ],
            storageKey: null,
          },
        ],
        type: "CometComposerTypeaheadResultEntry",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometMentionsTypeaheadEntry",
  [
    "GroupsCometMentionsTypeaheadEntryWithTagSuggestion_data.graphql",
    "GroupsCometMentionsTypeaheadEntryWithTagTaggedCoworker_data.graphql",
    "GroupsCometMentionsTypeaheadEntryWithTagTaggedEntity_data.graphql",
    "GroupsCometMentionsTypeaheadEntryWithTag_data.graphql",
    "GroupsCometMentionsTypeaheadEntry_data.graphql",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l;
    h !== void 0
      ? h
      : (h = b("GroupsCometMentionsTypeaheadEntry_data.graphql"));
    i !== void 0
      ? i
      : (i = b("GroupsCometMentionsTypeaheadEntryWithTag_data.graphql"));
    j !== void 0
      ? j
      : (j = b(
          "GroupsCometMentionsTypeaheadEntryWithTagSuggestion_data.graphql"
        ));
    k !== void 0
      ? k
      : (k = b(
          "GroupsCometMentionsTypeaheadEntryWithTagTaggedEntity_data.graphql"
        ));
    l !== void 0
      ? l
      : (l = b(
          "GroupsCometMentionsTypeaheadEntryWithTagTaggedCoworker_data.graphql"
        ));
    a = (function () {
      a.fromGraphql = function (b) {
        var c;
        c = b.data.node;
        if (c == null) return null;
        c = c;
        var d = c.id,
          e = c.name;
        c = c.photo;
        c = c == null ? void 0 : c.uri;
        if (e == null || d == null || c == null) return null;
        if (b.type === "MENTION_SEARCH_RESULT") {
          var f,
            g = b.data.score;
          if (g == null) return null;
          f = Boolean((f = b.data.node) == null ? void 0 : f.is_verified);
          return new a({
            data: {
              id: d,
              isVerified: f,
              mentionDecorType: "regular",
              name: e,
              photoURI: c,
              score: g,
              subtext: (f = b.data.node) == null ? void 0 : f.mentions_subtext,
            },
            type: b.type,
          });
        }
        return new a({ data: { id: d, name: e, photoURI: c }, type: b.type });
      };
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.getIsExternal = function () {
        return this.$1.type === "MENTION_SEARCH_RESULT"
          ? Boolean(this.$1.data.isExternal)
          : !1;
      };
      b.getIsVerified = function () {
        return this.$1.type === "MENTION_SEARCH_RESULT"
          ? this.$1.data.isVerified
          : !1;
      };
      b.getKey = function () {
        return this.$1.type === "METADATA" ? this.$1.data.key : this.$1.data.id;
      };
      b.getLabel = function () {
        return this.$1.type === "METADATA"
          ? this.$1.data.metadataType
          : this.$1.data.name;
      };
      b.getSubtext = function () {
        return this.$1.type === "MENTION_SEARCH_RESULT"
          ? this.$1.data.subtext
          : null;
      };
      b.getRawData = function () {
        return this.$1;
      };
      b.getPhotoURI = function () {
        if (this.$1.type === "METADATA") {
          c("recoverableViolation")(
            "getPhotoURI should not be called for Metadata entries",
            "search"
          );
          return null;
        }
        return this.$1.data.photoURI;
      };
      b.getScore = function () {
        switch (this.$1.type) {
          case "MENTION_SEARCH_RESULT":
            return this.$1.data.score;
          default:
            c("recoverableViolation")(
              "Attempting to access score when it doesnt exist",
              "comet_composer"
            );
            return 0;
        }
      };
      b.getType = function () {
        return this.$1.type;
      };
      b.getMentionDecorType = function () {
        return this.$1.type === "MENTION_SEARCH_RESULT"
          ? this.$1.data.mentionDecorType
          : null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "useGroupsCometComposerMentionsTypeaheadEntry",
  [
    "GroupsCometMentionsTypeaheadEntry",
    "useGroupsCometComposerMentionsTypeaheadEntry_data.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h !== void 0
      ? h
      : (h = b("useGroupsCometComposerMentionsTypeaheadEntry_data.graphql"));
    function a() {
      return function (a) {
        var b,
          d,
          e = a.node;
        if (e == null) return null;
        var f = e.id,
          g = e.name,
          h = e.photo;
        h = h == null ? void 0 : h.uri;
        if (g == null || f == null || h == null) return null;
        e =
          (e == null
            ? void 0
            : (e = e.reference_type) == null
            ? void 0
            : e.__typename) === "StrongEntityReference"
            ? "regular"
            : "weak";
        var i = a.score;
        if (i == null) return null;
        b = Boolean((b = a.node) == null ? void 0 : b.is_verified);
        d =
          ((d = a.node) == null
            ? void 0
            : (d = d.work_foreign_entity_info) == null
            ? void 0
            : d.type) === "FOREIGN";
        return new (c("GroupsCometMentionsTypeaheadEntry"))({
          data: {
            id: f,
            isExternal: d,
            isVerified: b,
            mentionDecorType: e,
            name: g,
            photoURI: h,
            score: i,
            subtext: (f = a.node) == null ? void 0 : f.mentions_subtext,
          },
          type: "MENTION_SEARCH_RESULT",
        });
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useGroupsCometTypeaheadBootloadDataSource",
  [
    "WebPixelRatio",
    "useCometTypeaheadCompositeBootstrapDataSource",
    "useGroupsCometComposerMentionsTypeaheadEntry",
    "useGroupsCometTypeaheadBootloadDataSourceQuery.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("useGroupsCometTypeaheadBootloadDataSourceQuery.graphql"));
    function a(a) {
      var b = a.firstDegreeFilters,
        e = a.groupID,
        f = a.limit;
      a = a.postID;
      var g = c("useGroupsCometComposerMentionsTypeaheadEntry")(),
        h = function (a) {
          a = a == null ? void 0 : a.comet_group_typeahead_bootload;
          return a == null
            ? []
            : a
                .map(function (a) {
                  if (a == null) return;
                  return g(a);
                })
                .filter(Boolean);
        };
      return c("useCometTypeaheadCompositeBootstrapDataSource")({
        gqlQuery: i,
        limit: f,
        normalize: h,
        queryVariables: {
          firstDegreeFilters: b,
          groupID: e,
          postID: a,
          scale: d("WebPixelRatio").get(),
        },
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useGroupsCometTypeaheadNetworkDataSource",
  [
    "WebPixelRatio",
    "useCometTypeaheadGraphQLDataSource",
    "useGroupsCometComposerMentionsTypeaheadEntry",
    "useGroupsCometTypeaheadNetworkDataSourceQuery.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("useGroupsCometTypeaheadNetworkDataSourceQuery.graphql"));
    function a(a) {
      var b = a.firstDegreeFilters,
        e = a.groupID,
        f = a.limit,
        g = a.postID,
        h = c("useGroupsCometComposerMentionsTypeaheadEntry")();
      a = function (a) {
        a = a == null ? void 0 : a.comet_group_typeahead_search;
        return a == null
          ? []
          : a
              .map(function (a) {
                if (a == null) return;
                return h(a);
              })
              .filter(Boolean);
      };
      return c("useCometTypeaheadGraphQLDataSource")({
        gqlQuery: i,
        limit: f,
        normalize: a,
        queryVariablesBuilderFunction: function (a) {
          a = a.query;
          return {
            firstDegreeFilters: b,
            groupID: e,
            postID: g,
            query: a,
            scale: d("WebPixelRatio").get(),
          };
        },
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useGroupsCometComposerMentionsDataSourceResolverConfig",
  [
    "GroupsCometMentionsTypeaheadEntry",
    "cometSearchMentionsPayloadDecoratorAddSeeAll",
    "cr:534",
    "createCometAtSignComposerMentionsMatchStrategy",
    "createCometMentionsNameMatchStrategy",
    "qex",
    "react",
    "useCometMentionsDataSourceResolverConfig",
    "useCometTypeaheadCompositeDataSource",
    "useGroupsCometTypeaheadBootloadDataSource",
    "useGroupsCometTypeaheadNetworkDataSource",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo,
      i =
        (e = b("cr:534")) != null
          ? e
          : c("useGroupsCometTypeaheadNetworkDataSource"),
      j = ["USER"],
      k = ["USER", "EVENT", "GROUP", "PAGE"],
      l = c("qex")._("220"),
      m = Boolean(c("qex")._("265"));
    function a(a) {
      var b = a.enableMentionsSeeMoreDecorator,
        d = a.groupID,
        e = a.limit,
        f = a.postID;
      a = a.shouldBootstrapOnLayoutEffect;
      var g = c("useCometTypeaheadCompositeDataSource")({
        bootstrapDataSource: c("useGroupsCometTypeaheadBootloadDataSource")({
          groupID: d,
          limit: Math.floor(e / 2),
          postID: f,
        }),
        cacheKey_SEARCH_ONLY: {
          groupID: d,
          type: "groups_mentions_intentful_datasource_cache_key",
        },
        limit: e,
        networkDataSource: c("useGroupsCometTypeaheadNetworkDataSource")({
          firstDegreeFilters: m ? k : void 0,
          groupID: d,
          limit: e,
          postID: f,
        }),
        payloadDecorators: b
          ? [
              c("cometSearchMentionsPayloadDecoratorAddSeeAll")({
                getSeeAllEntry: function (a) {
                  return new (c("GroupsCometMentionsTypeaheadEntry"))(a);
                },
                position: "bottom",
              }),
            ]
          : void 0,
      });
      b = c("useGroupsCometTypeaheadBootloadDataSource")({
        firstDegreeFilters: j,
        groupID: d,
        limit: Math.floor(e / 2),
        postID: f,
      });
      var n = c("useCometTypeaheadCompositeDataSource")({
          bootstrapDataSource: b,
          cacheKey_SEARCH_ONLY: {
            groupID: d,
            type: "groups_mentions_non_intentful_datasource_cache_key",
          },
          limit: e,
          networkDataSource: i({
            firstDegreeFilters: j,
            groupID: d,
            limit: e,
            postID: f,
          }),
        }),
        o = c("useCometTypeaheadCompositeDataSource")({
          bootstrapDataSource: b,
          limit: e,
        });
      d = h(
        function () {
          var a = [
            {
              dataSource: g,
              matchStrategy: c(
                "createCometAtSignComposerMentionsMatchStrategy"
              )({ minMatchLength: 1 }),
            },
            {
              dataSource: n,
              matchStrategy: c("createCometMentionsNameMatchStrategy")({
                minMatchLength: 3,
                nameCase: "capitalized",
              }),
            },
          ];
          l === !0 &&
            a.push({
              dataSource: o,
              matchStrategy: c("createCometMentionsNameMatchStrategy")({
                minMatchLength: 4,
                nameCase: "lower-case",
              }),
            });
          return a;
        },
        [g, n, o]
      );
      return c("useCometMentionsDataSourceResolverConfig")(d, a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForDraftjs",
  [
    "CometComposerMentionsTypeaheadListItemResolver.react",
    "CometMentions.react",
    "Keys",
    "MentionSpan.react",
    "WeakMentionSpan.react",
    "cometReplaceMentionedTextInEditorState",
    "createCometComposerMentionsEntity",
    "createUpgradedUFI2MentionsComposerPluginAnchorDecorator",
    "getCometComposerMentionsSearch",
    "getEntityMatcher",
    "installUFI2ComposerInputDecorators",
    "react",
    "recoverableViolation",
    "upgradedUFI2MentionsComposerPluginDraftUtils",
    "useCometMentionsLoggingProvider",
    "useGroupsCometComposerMentionsDataSourceResolverConfig",
    "usePrevious",
    "useUpgradedUFI2MentionsComposerPluginInstaller",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useImperativeHandle,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState,
      n = d("react"),
      o = {
        component: c("MentionSpan.react"),
        strategy: c("getEntityMatcher")(function (a) {
          return a.getType() === "MENTION";
        }),
      },
      p = {
        component: c("WeakMentionSpan.react"),
        strategy: c("getEntityMatcher")(function (a) {
          return a.getType() === "MENTION"
            ? !!((a = a.getData()) == null ? void 0 : a.isWeak)
            : !1;
        }),
      };
    function a() {
      return function (a) {
        var b = a.groupID;
        function e() {
          return n.forwardRef(function (a, e) {
            var f = a.inputProps,
              g = f.composerState,
              r = f.onBlur,
              s = f.onComposerStateChange,
              t = f.onFocus;
            f = a.onInstallContentBlockToTextWithEntitiesInputMessageMappers;
            c("useUpgradedUFI2MentionsComposerPluginInstaller")(f);
            a = m(!1);
            f = a[0];
            var u = a[1],
              v = l(null),
              w = l(!1);
            a = m(null);
            var x = a[0],
              y = a[1];
            a = c("useGroupsCometComposerMentionsDataSourceResolverConfig")({
              enableMentionsSeeMoreDecorator: !1,
              groupID: b,
              limit: 5,
              shouldBootstrapOnLayoutEffect: !1,
            });
            var z = a.bootstrap,
              A = a.resolver,
              B = d(
                "upgradedUFI2MentionsComposerPluginDraftUtils"
              ).getMaybeEditorState(g),
              C = c("usePrevious")(g);
            i(
              function () {
                var a = g.inputState;
                if (C == null) return;
                var b = C.inputState;
                if (
                  a.__type === "editor-state-based" &&
                  (b.__type !== "editor-state-based" ||
                    (b.__type === "editor-state-based" &&
                      b.editorState !== a.editorState))
                ) {
                  b = c("getCometComposerMentionsSearch")(a.editorState);
                  y(b);
                  u(!1);
                } else return;
              },
              [g, C]
            );
            var D = h(
                function (a) {
                  s(function (b) {
                    return babelHelpers["extends"]({}, b, { ariaInputs: a });
                  });
                },
                [s]
              ),
              E = h(
                function (a) {
                  r && r(a), D();
                },
                [r, D]
              ),
              F = h(
                function (a) {
                  z(), t && t(a);
                },
                [z, t]
              ),
              G = h(
                function (a, b) {
                  var d = v.current,
                    e = w.current;
                  if (a.keyCode === c("Keys").ESC && x != null) {
                    e && (a.preventDefault(), a.stopPropagation());
                    return "MentionsAutocomplete/cancel";
                  }
                  if (d != null && e)
                    switch (a.keyCode) {
                      case c("Keys").DOWN:
                        a.preventDefault();
                        return "MentionsAutocomplete/next-mention";
                      case c("Keys").RETURN:
                        if (d.hasSelection()) {
                          a.preventDefault();
                          return "MentionsAutocomplete/select-mention";
                        }
                        break;
                      case c("Keys").TAB:
                        if (d.hasSelection()) {
                          a.preventDefault();
                          return "MentionsAutocomplete/select-mention";
                        }
                        break;
                      case c("Keys").UP:
                        a.preventDefault();
                        return "MentionsAutocomplete/previous-mention";
                    }
                  b && b(a);
                },
                [x]
              ),
              H = h(function (a) {
                var b = v.current;
                switch (a) {
                  case "MentionsAutocomplete/cancel":
                    u(!0);
                    break;
                  case "MentionsAutocomplete/select-mention":
                    b && b.select();
                    break;
                  case "MentionsAutocomplete/previous-mention":
                    b && b.moveUp();
                    break;
                  case "MentionsAutocomplete/next-mention":
                    b && b.moveDown();
                    break;
                }
                return "not-handled";
              }, []);
            a = h(
              function (a) {
                var b = g.inputState;
                if (B == null || b.__type !== "editor-state-based") return;
                b = c("getCometComposerMentionsSearch")(B);
                if (b == null) {
                  c("recoverableViolation")(
                    "Race condition where the user selected a mention but theres no text in the editor",
                    "search"
                  );
                  return;
                }
                b = A(b);
                b = b.searchResult;
                if (b == null) {
                  c("recoverableViolation")(
                    "onPressEntry was called and no search result was found for the query",
                    "CometComposer"
                  );
                  return;
                }
                D();
                var d = c("cometReplaceMentionedTextInEditorState")(
                  a,
                  B,
                  b.replaceableString.length,
                  function (a, b) {
                    return c("createCometComposerMentionsEntity")(
                      b.getKey(),
                      !1,
                      a
                    );
                  },
                  function () {
                    return a.getLabel();
                  }
                );
                s(function (a) {
                  return q(a, d);
                });
              },
              [g, A, D, B, s]
            );
            var I = c("useCometMentionsLoggingProvider")({
                context_id: b,
                context_type: "group",
                surface: "COMMENT",
                typeahead_type: "ENTITY",
              }),
              J = l(null),
              K = k(
                function () {
                  return c(
                    "createUpgradedUFI2MentionsComposerPluginAnchorDecorator"
                  )(A, J);
                },
                [A]
              );
            j(e, function () {
              return {
                getUpgradedProps: function (a) {
                  var b = a.inputProps;
                  a = babelHelpers.objectWithoutPropertiesLoose(a, [
                    "inputProps",
                  ]);
                  return babelHelpers["extends"]({}, a, {
                    inputProps: babelHelpers["extends"]({}, b, {
                      composerState: c("installUFI2ComposerInputDecorators")(
                        b.composerState,
                        K,
                        p,
                        o
                      ),
                      handleKeyCommand: function (a) {
                        return H(a);
                      },
                      keyBindingFn: function (a) {
                        return G(a, b.keyBindingFn);
                      },
                      onBlur: E,
                      onFocus: F,
                    }),
                  });
                },
              };
            });
            e = h(function (a) {
              w.current = a;
            }, []);
            var L = h(
                function (a) {
                  if (a) return;
                  D();
                },
                [D]
              ),
              M = h(
                function (a, b) {
                  (a == null || b == null) && D(),
                    D({ "aria-activedescendant": a, "aria-controls": b });
                },
                [D]
              );
            if (f) {
              w.current = !1;
              return null;
            }
            f = J.current;
            if (f == null) {
              w.current = !1;
              return null;
            }
            var N = A(x),
              O = N.dataSource;
            N = N.searchResult;
            if (N == null || O == null) {
              w.current = !1;
              return null;
            }
            return n.jsx(c("CometMentions.react"), {
              context: f,
              dataSource: O,
              editorHasFocus: !0,
              loggingProvider: I,
              onAriaChange: M,
              onBlur: E,
              onEntriesUpdated: L,
              onFocus: F,
              onSelectedEntry: a,
              onVisibilityChange: e,
              position: "below",
              queryString: N.matchingString,
              ref: v,
              viewItemStrategyRenderer: c(
                "CometComposerMentionsTypeaheadListItemResolver.react"
              ),
            });
          });
        }
        return e;
      };
    }
    function q(a, b) {
      var d = a.inputState;
      if (d.__type === "editor-state-based") {
        b = babelHelpers["extends"]({}, a, {
          inputState: babelHelpers["extends"]({}, d, { editorState: b }),
        });
        return b;
      }
      c("recoverableViolation")(
        "Unimplemented: tried to commit a searchable entity as a mention to a UFI2ComposerState " +
          ("with an inputState of type " + d.__type + ". ") +
          'Only the "editor-state-based" type is supported at the moment',
        "search"
      );
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "createUpgradedUFI2GroupMentionsComposerPluginForDraftjs",
  ["upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForDraftjs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c(
      "upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForDraftjs"
    )();
    g["default"] = a;
  },
  98
);
__d(
  "upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForOutline",
  [
    "CometComposerMentionsTypeaheadListItemResolver.react",
    "CometMentionsForOutline.react",
    "CometOutlineEventPriority",
    "CometUFIOutlineGenericEntityNode",
    "react",
    "useCometOutlineHasFocus",
    "useGroupsCometComposerMentionsDataSourceResolverConfig",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect;
    function a() {
      return function (a) {
        var b = a.config.groupID;
        a = a.pluginProps;
        var e = a.addFocusListener,
          f = a.editor,
          g = a.setComposerState,
          k = a.addKeyBinding,
          l = c("useCometOutlineHasFocus")(e);
        a = c("useGroupsCometComposerMentionsDataSourceResolverConfig")({
          enableMentionsSeeMoreDecorator: !1,
          groupID: b,
          limit: 5,
          shouldBootstrapOnLayoutEffect: !1,
        });
        var m = a.bootstrap;
        e = a.resolver;
        b = i(
          function (a) {
            return k(
              a,
              d("CometOutlineEventPriority").CometOutlineEventPriority.CRITICAL
            );
          },
          [k]
        );
        j(
          function () {
            l && m();
          },
          [m, l]
        );
        a = i(function (a) {
          var b = a.id,
            c = a.text;
          a = a.type;
          return d(
            "CometUFIOutlineGenericEntityNode"
          ).createCometUFIOutlineGenericEntityNode({ id: b, text: c, type: a });
        }, []);
        var n = i(
          function (a, b) {
            g(function (c) {
              return babelHelpers["extends"]({}, c, {
                ariaInputs: { "aria-activedescendant": a, "aria-controls": b },
              });
            });
          },
          [g]
        );
        return h.jsx(c("CometMentionsForOutline.react"), {
          addKeyBinding: b,
          createMentionNode: a,
          dataSourceResolver: e,
          editor: f,
          hasFocus: l,
          onAriaChange: n,
          viewItemStrategyRenderer: c(
            "CometComposerMentionsTypeaheadListItemResolver.react"
          ),
        });
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createUpgradedUFI2GroupMentionsComposerPluginForOutline",
  ["upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForOutline"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c(
      "upgradedUFI2GroupMentionsComposerPluginCreatorWithTypeaheadViewForOutline"
    )();
    g["default"] = a;
  },
  98
);
