if (self.CavalryLogger) {
  CavalryLogger.start_js(["Nd9y9/4"]);
}

__d(
  "CometPageCTAViewShopRenderer_renderer$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometPageCTAViewShopRenderer_renderer$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cta_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "label",
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
          kind: "ScalarField",
          name: "icon",
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
          name: "web_destination_type",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometPageCTAViewShopRenderer_renderer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometPageCTAViewShopRenderer_renderer",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cta_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "label",
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
          kind: "ScalarField",
          name: "icon",
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
          name: "web_destination_type",
          storageKey: null,
        },
      ],
      type: "CometPageCTAViewShopRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useStoriesViewerBucketsPaginationQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "bucketsCount",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        c = { defaultValue: !1, kind: "LocalArgument", name: "hideSelfBucket" },
        d = { defaultValue: null, kind: "LocalArgument", name: "id" },
        e = { defaultValue: null, kind: "LocalArgument", name: "pinnedIDs" },
        f = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        g = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "showExtendedViewerOverlay",
        },
        h = { defaultValue: !0, kind: "LocalArgument", name: "showNavPane" },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "storiesTrayType",
        },
        j = [{ kind: "Variable", name: "id", variableName: "id" }],
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        m = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "bucketsCount" },
          {
            kind: "Variable",
            name: "front_pin_buckets",
            variableName: "pinnedIDs",
          },
          {
            kind: "Variable",
            name: "hide_self_bucket",
            variableName: "hideSelfBucket",
          },
          {
            kind: "Variable",
            name: "set_stories_tray_type",
            variableName: "storiesTrayType",
          },
        ],
        n = {
          kind: "InlineFragment",
          selections: [l],
          type: "Node",
          abstractKey: "__isNode",
        },
        o = {
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
              name: "story_card_type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        p = {
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
              name: "is_seen_by_viewer",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        q = [
          { kind: "Variable", name: "scale", variableName: "scale" },
          { kind: "Literal", name: "width", value: 40 },
        ],
        r = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        s = {
          alias: "owner",
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "story_bucket_owner",
          plural: !1,
          selections: [
            k,
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: q,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "profile_picture",
                  plural: !1,
                  selections: r,
                  storageKey: null,
                },
              ],
              type: "Profile",
              abstractKey: "__isProfile",
            },
            n,
          ],
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_bucket_live",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        v = [u],
        w = {
          kind: "InlineFragment",
          selections: v,
          type: "User",
          abstractKey: null,
        },
        x = {
          kind: "InlineFragment",
          selections: v,
          type: "Group",
          abstractKey: null,
        },
        y = {
          kind: "InlineFragment",
          selections: v,
          type: "Page",
          abstractKey: null,
        };
      v = {
        kind: "InlineFragment",
        selections: v,
        type: "Event",
        abstractKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e, f, g, h, i],
          kind: "Fragment",
          metadata: null,
          name: "useStoriesViewerBucketsPaginationQuery",
          selections: [
            {
              alias: null,
              args: j,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: [
                    {
                      kind: "Variable",
                      name: "bucketsCount",
                      variableName: "bucketsCount",
                    },
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                    {
                      kind: "Variable",
                      name: "hideSelfBucket",
                      variableName: "hideSelfBucket",
                    },
                    {
                      kind: "Variable",
                      name: "pinnedIDs",
                      variableName: "pinnedIDs",
                    },
                    {
                      kind: "Variable",
                      name: "showExtendedViewerOverlay",
                      variableName: "showExtendedViewerOverlay",
                    },
                    {
                      kind: "Variable",
                      name: "showNavPane",
                      variableName: "showNavPane",
                    },
                    {
                      kind: "Variable",
                      name: "storiesTrayType",
                      variableName: "storiesTrayType",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "useStoriesViewerBuckets_user",
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
          argumentDefinitions: [a, b, c, e, f, g, h, i, d],
          kind: "Operation",
          name: "useStoriesViewerBucketsPaginationQuery",
          selections: [
            {
              alias: null,
              args: j,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                k,
                l,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: m,
                      concreteType: "UserToUnifiedStoryBucketsConnection",
                      kind: "LinkedField",
                      name: "unified_stories_buckets",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "UserToUnifiedStoryBucketsEdge",
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
                                k,
                                {
                                  kind: "TypeDiscriminator",
                                  abstractKey: "__isStoryBucket",
                                },
                                l,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "UnifiedStoryBucketToUnifiedStoriesConnection",
                                  kind: "LinkedField",
                                  name: "unified_stories",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "UnifiedStoryBucketToUnifiedStoriesEdge",
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
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "expiration_time",
                                              storageKey: null,
                                            },
                                            l,
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
                                  name: "story_bucket_owner",
                                  plural: !1,
                                  selections: [
                                    k,
                                    n,
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
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "story_bucket_type",
                                  storageKey: null,
                                },
                                {
                                  condition: "showExtendedViewerOverlay",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "UnifiedStoryBucketToUnifiedStoriesConnection",
                                      kind: "LinkedField",
                                      name: "unified_stories",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "UnifiedStoryBucketToUnifiedStoriesEdge",
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
                                              selections: [o, p],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    s,
                                    t,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "story_bucket_owner",
                                      plural: !1,
                                      selections: [w, x, y, v],
                                      storageKey: null,
                                    },
                                  ],
                                },
                                {
                                  condition: "showNavPane",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "story_bucket_owner",
                                              plural: !1,
                                              selections: [
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    u,
                                                    {
                                                      alias:
                                                        "placeholder_picture",
                                                      args: q,
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "profile_picture",
                                                      plural: !1,
                                                      selections: r,
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: "Profile",
                                                  abstractKey: "__isProfile",
                                                },
                                                w,
                                                x,
                                                y,
                                                v,
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "UnifiedStoryBucketToUnifiedStoriesConnection",
                                              kind: "LinkedField",
                                              name: "unified_stories",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "UnifiedStoryBucketToUnifiedStoriesEdge",
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
                                                        o,
                                                        p,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "creation_time",
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
                                            s,
                                            t,
                                          ],
                                          type: "StoryBucket",
                                          abstractKey: "__isStoryBucket",
                                        },
                                      ],
                                      type: "Node",
                                      abstractKey: "__isNode",
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
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: m,
                      filters: [
                        "front_pin_buckets",
                        "hide_self_bucket",
                        "set_stories_tray_type",
                      ],
                      handle: "connection",
                      key: "useStoriesViewerBuckets_unified_stories_buckets",
                      kind: "LinkedHandle",
                      name: "unified_stories_buckets",
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4031162807007190",
          metadata: {},
          name: "useStoriesViewerBucketsPaginationQuery",
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
  "useStoriesViewerBuckets_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useStoriesViewerBuckets_bucket",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useStoriesViewerNodes_buckets",
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
  "useStoriesViewerBuckets_user.graphql",
  ["useStoriesViewerBucketsPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["unified_stories_buckets"];
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "bucketsCount" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { defaultValue: !1, kind: "LocalArgument", name: "hideSelfBucket" },
          { defaultValue: null, kind: "LocalArgument", name: "pinnedIDs" },
          { kind: "RootArgument", name: "scale" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "showExtendedViewerOverlay",
          },
          { defaultValue: !0, kind: "LocalArgument", name: "showNavPane" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "storiesTrayType",
          },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            {
              count: "bucketsCount",
              cursor: "cursor",
              direction: "forward",
              path: a,
            },
          ],
          refetch: {
            connection: {
              forward: { count: "bucketsCount", cursor: "cursor" },
              backward: null,
              path: a,
            },
            fragmentPathInResult: ["node"],
            operation: b("useStoriesViewerBucketsPaginationQuery.graphql"),
            identifierField: "id",
          },
        },
        name: "useStoriesViewerBuckets_user",
        selections: [
          {
            alias: "unified_stories_buckets",
            args: [
              {
                kind: "Variable",
                name: "front_pin_buckets",
                variableName: "pinnedIDs",
              },
              {
                kind: "Variable",
                name: "hide_self_bucket",
                variableName: "hideSelfBucket",
              },
              {
                kind: "Variable",
                name: "set_stories_tray_type",
                variableName: "storiesTrayType",
              },
            ],
            concreteType: "UserToUnifiedStoryBucketsConnection",
            kind: "LinkedField",
            name: "__useStoriesViewerBuckets_unified_stories_buckets_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "UserToUnifiedStoryBucketsEdge",
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
                      {
                        args: [
                          {
                            kind: "Variable",
                            name: "showExtendedViewerOverlay",
                            variableName: "showExtendedViewerOverlay",
                          },
                          {
                            kind: "Variable",
                            name: "showNavPane",
                            variableName: "showNavPane",
                          },
                        ],
                        kind: "FragmentSpread",
                        name: "useStoriesViewerNodes_buckets",
                      },
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
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
        ],
        type: "User",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useStoriesViewerNodes_buckets.graphql",
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
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "showExtendedViewerOverlay",
          },
          { defaultValue: !0, kind: "LocalArgument", name: "showNavPane" },
        ],
        kind: "Fragment",
        metadata: { plural: !0 },
        name: "useStoriesViewerNodes_buckets",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesIsBucketEmpty_buckets",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesRemoveEmptyBuckets_buckets",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useStoriesSuspenseNavListSelectors_buckets",
          },
          {
            condition: "showExtendedViewerOverlay",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "StoriesExtendedViewerOverlay_buckets",
              },
            ],
          },
          {
            condition: "showNavPane",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "StoriesSuspenseCircularNavigationPane_buckets",
              },
            ],
          },
          a,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
            selections: [
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
                    name: "viewer_profile_permissions",
                    storageKey: null,
                  },
                ],
                type: "Page",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
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
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesNavListItemInfoContainer_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "StoriesNavListItemInfoContainer_bucket",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
            kind: "LinkedField",
            name: "unified_stories",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
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
                        concreteType: "StoryCardSeenState",
                        kind: "LinkedField",
                        name: "story_card_seen_state",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_seen_by_viewer",
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
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "story_bucket_owner",
            plural: !1,
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
                type: "Group",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: a,
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: a,
                type: "Event",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseCircularNavigationPane_buckets.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "StoriesSuspenseCircularNavigationPane_buckets",
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
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "story_bucket_owner",
              plural: !1,
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
                    {
                      alias: "placeholder_picture",
                      args: [
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
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
                  ],
                  type: "Profile",
                  abstractKey: "__isProfile",
                },
              ],
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesSuspenseNavListItem_bucket",
            },
          ],
          type: "StoryBucket",
          abstractKey: "__isStoryBucket",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesSuspenseNavListYourStory_userBucket",
        },
      ],
      type: "Node",
      abstractKey: "__isNode",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseNavListItem_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseNavListItem_bucket",
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
          name: "StoriesNavListItemPog_bucket",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "StoriesNavListItemInfoContainer_bucket",
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
  "StoriesSuspenseNavListYourStoryRefetchQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "id" },
        b = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        c = [{ kind: "Variable", name: "id", variableName: "id" }],
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
          name: "id",
          storageKey: null,
        },
        f = {
          kind: "InlineFragment",
          selections: [e],
          type: "Node",
          abstractKey: "__isNode",
        },
        g = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "StoriesSuspenseNavListYourStoryRefetchQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "StoriesSuspenseNavListYourStory_userBucket",
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
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "StoriesSuspenseNavListYourStoryRefetchQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                d,
                { kind: "TypeDiscriminator", abstractKey: "__isNode" },
                e,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "UnifiedStoryBucketToUnifiedStoriesConnection",
                      kind: "LinkedField",
                      name: "unified_stories",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "UnifiedStoryBucketToUnifiedStoriesEdge",
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
                                      name: "story_card_type",
                                      storageKey: null,
                                    },
                                  ],
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
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_seen_by_viewer",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                e,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "creation_time",
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
                      alias: "owner",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "story_bucket_owner",
                      plural: !1,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: [
                                {
                                  kind: "Variable",
                                  name: "scale",
                                  variableName: "scale",
                                },
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
                          ],
                          type: "Profile",
                          abstractKey: "__isProfile",
                        },
                        f,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_bucket_live",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "story_bucket_owner",
                      plural: !1,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: g,
                          type: "User",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: g,
                          type: "Group",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: g,
                          type: "Page",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: g,
                          type: "Event",
                          abstractKey: null,
                        },
                        f,
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "StoryBucket",
                  abstractKey: "__isStoryBucket",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "2590268521096854",
          metadata: {},
          name: "StoriesSuspenseNavListYourStoryRefetchQuery",
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
  "StoriesSuspenseNavListYourStory_userBucket.graphql",
  ["StoriesSuspenseNavListYourStoryRefetchQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: ["node"],
          operation: b("StoriesSuspenseNavListYourStoryRefetchQuery.graphql"),
          identifierField: "id",
        },
      },
      name: "StoriesSuspenseNavListYourStory_userBucket",
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
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesNavListItemPog_bucket",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "StoriesNavListItemInfoContainer_bucket",
            },
          ],
          type: "StoryBucket",
          abstractKey: "__isStoryBucket",
        },
      ],
      type: "Node",
      abstractKey: "__isNode",
    };
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseNavigationPane_bucket.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseNavigationPane_bucket",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useStoriesViewerBuckets_bucket",
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
  "StoriesSuspenseNavigationPane_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "bucketsCount" },
        { defaultValue: null, kind: "LocalArgument", name: "pinnedIDs" },
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "showExtendedViewerOverlay",
        },
        { defaultValue: null, kind: "LocalArgument", name: "showNavPane" },
        { defaultValue: null, kind: "LocalArgument", name: "storiesTrayType" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "StoriesSuspenseNavigationPane_user",
      selections: [
        {
          args: [
            {
              kind: "Variable",
              name: "bucketsCount",
              variableName: "bucketsCount",
            },
            { kind: "Variable", name: "pinnedIDs", variableName: "pinnedIDs" },
            {
              kind: "Variable",
              name: "showExtendedViewerOverlay",
              variableName: "showExtendedViewerOverlay",
            },
            {
              kind: "Variable",
              name: "showNavPane",
              variableName: "showNavPane",
            },
            {
              kind: "Variable",
              name: "storiesTrayType",
              variableName: "storiesTrayType",
            },
          ],
          kind: "FragmentSpread",
          name: "useStoriesViewerBuckets_user",
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
  "CometPageCTAViewShopRenderer.react",
  [
    "CometPageCTAViewShopRenderer_renderer.graphql",
    "CometRelay",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d("react");
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("CometPageCTAViewShopRenderer_renderer.graphql")),
          a.renderer
        ),
        g = f == null ? void 0 : f.url;
      if (g == null)
        throw c("unrecoverableViolation")(
          "The URL for a View Shop CTA can NOT be null.",
          "connected_commerce_biz_creator"
        );
      e = f == null ? void 0 : (e = f.label) == null ? void 0 : e.text;
      if (e == null)
        throw c("unrecoverableViolation")(
          "The label for a View Shop CTA can NOT be null.",
          "connected_commerce_biz_creator"
        );
      var i =
        (f == null ? void 0 : f.web_destination_type) === "MINI_SHOP"
          ? {}
          : { target: "_blank" };
      return a.renderCometPageCTAButton(
        babelHelpers["extends"](
          {
            actionType: "legacy_cta_view_shop",
            ctaID: f == null ? void 0 : f.cta_id,
            href: g,
            icon: f == null ? void 0 : f.icon,
            label: e,
            pageID: a.pageID,
          },
          i
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesViewerNodes",
  [
    "CometRelay",
    "FBLogger",
    "QuickPerformanceLogger",
    "StoriesActorContext",
    "StoriesBehaviorHelpers",
    "StoriesEnums",
    "StoriesGating",
    "StoriesLoggerSession",
    "StoriesLoggingConstants",
    "StoriesModuleStoryViewerBucketTransitionTtiWwwQPLEvent",
    "cr:899180",
    "react",
    "useStoriesIsBucketEmpty",
    "useStoriesRemoveEmptyBuckets",
    "useStoriesSuspenseNavListSelectors",
    "useStoriesSuspenseNavListTransitionRequestListener",
    "useStoriesViewerBucketPrefetcher",
    "useStoriesViewerNodes_buckets.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.startTransition,
      j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useMemo,
      n = e.useRef,
      o = e.useState,
      p = h !== void 0 ? h : (h = b("useStoriesViewerNodes_buckets.graphql"));
    function a(a, e, f, g, h, q, r, s) {
      var t = d("CometRelay").useFragment(p, e),
        u = d("CometRelay").useFragment(p, a),
        v = d("CometRelay").useFragment(p, s);
      e = k(c("StoriesActorContext"));
      var w = e.actorID,
        x = c("useStoriesIsBucketEmpty")(u),
        y = c("useStoriesIsBucketEmpty")(t);
      c("useStoriesRemoveEmptyBuckets")(u);
      c("useStoriesRemoveEmptyBuckets")(t);
      a = m(
        function () {
          if (!d("StoriesGating").shouldUseExtendedViewer())
            return {
              isExtendedViewInitialBucketInNodeData: !0,
              pinnedNode: t == null ? void 0 : t[0],
            };
          var a = t == null ? void 0 : t[0],
            b = function (b) {
              var c;
              return (
                (b == null
                  ? void 0
                  : (c = b.story_bucket_owner) == null
                  ? void 0
                  : c.id) === w ||
                ((b == null ? void 0 : b.id) !==
                  ((c = a) == null ? void 0 : c.id) &&
                  !x(b == null ? void 0 : b.id))
              );
            };
          b = u ? u.filter(b) : [];
          b =
            b.findIndex(function (a) {
              return (a == null ? void 0 : a.id) === g;
            }) !== -1;
          b || (a = v == null ? void 0 : v[0]);
          return { isExtendedViewInitialBucketInNodeData: b, pinnedNode: a };
        },
        [g, w, x, u, t, v]
      );
      var z = a.isExtendedViewInitialBucketInNodeData,
        A = a.pinnedNode;
      s = function () {
        var a = function (a) {
            var b;
            return (
              (a == null
                ? void 0
                : (b = a.story_bucket_owner) == null
                ? void 0
                : b.id) === w ||
              ((a == null ? void 0 : a.id) !== (A == null ? void 0 : A.id) &&
                !x(a == null ? void 0 : a.id))
            );
          },
          b = u == null ? void 0 : u[0];
        if (u == null || u.length === 0) return [];
        else if (A == null || (y(A.id) && z)) return u.filter(a);
        else {
          var c;
          c =
            (b == null
              ? void 0
              : (c = b.story_bucket_owner) == null
              ? void 0
              : c.id) === w;
          if (c && b != null)
            if (b.id === A.id) return u.filter(a);
            else return [b].concat(A).concat(u.slice(1).filter(a));
          else return [A].concat(u.filter(a));
        }
      };
      var B = s();
      e = o(function () {
        var a = B.findIndex(function (a) {
            return (a == null ? void 0 : a.id) === g;
          }),
          b = d("StoriesLoggerSession").getOpenViewerSource();
        a === -1 &&
          g !== "" &&
          g != null &&
          b === c("StoriesLoggingConstants").ACTION_SOURCE.TRAY &&
          c("FBLogger")("fbstories").warn(
            "Initial bucket ID [%s] was found at index -1, [%s]",
            g,
            B.length
          );
        return a;
      });
      var C = e[0];
      a = e[1];
      s = m(
        function () {
          return B.map(function (a) {
            return a == null ? void 0 : a.id;
          })
            .filter(Boolean)
            .filter(function (a) {
              return a != null;
            });
        },
        [B]
      );
      c("useStoriesViewerBucketPrefetcher")(s, C);
      var D = n(null),
        E = n(null),
        F = n(null),
        G = n(!0);
      e = function () {
        G.current = !1;
      };
      s = c("useStoriesSuspenseNavListSelectors")(B);
      var H = s.getBucketCount,
        I = s.getBucketID,
        J = s.getIsSecondBucket,
        K = s.isFirstBucket,
        L = s.isFriendListEmpty,
        M = s.isLastBucket,
        N = s.isUserBucketEmpty;
      s = s.userBucketIndex;
      var O = H(f),
        P = j(
          function (a) {
            i(function () {
              h();
            });
          },
          [h, i]
        );
      H = d("CometRelay").useRelayEnvironment();
      l(
        function () {
          var a = I(C),
            e = a !== F.current;
          if (C !== D.current || O !== E.current) {
            var h;
            e &&
              (c("QuickPerformanceLogger").markerEnd(
                c("StoriesModuleStoryViewerBucketTransitionTtiWwwQPLEvent"),
                4
              ),
              c("QuickPerformanceLogger").markerStart(
                c("StoriesModuleStoryViewerBucketTransitionTtiWwwQPLEvent")
              ),
              b("cr:899180") && b("cr:899180").updateURL(a, ""));
            M(C, f) && f && P();
            e = B == null ? void 0 : B[C];
            h =
              e == null
                ? void 0
                : (h = e.story_bucket_owner) == null
                ? void 0
                : h.viewer_profile_permissions;
            h = h != null && h.includes("EDIT_PROFILE");
            var i = d("StoriesBehaviorHelpers").canSeeViewerSheet(
                e == null ? void 0 : e.story_bucket_type,
                e == null
                  ? void 0
                  : (e = e.story_bucket_owner) == null
                  ? void 0
                  : e.id,
                h,
                w
              ),
              j = J(C, g),
              k = null,
              l = null;
            d("StoriesGating").shouldUseExtendedViewer() &&
              j &&
              ((k = B.slice(C, C + 3)), (l = Math.max(0, B.length - 1 - C)));
            e = function () {
              q({
                bucketID: I(C),
                bucketIndex: C,
                canSeeViewerSheet: i,
                canShowStoryOverlay: G.current,
                isEndOfTray: M(C, f) && !f,
                isFirstBucket: K(C),
                isFriendListEmpty: L,
                isLastBucket: M(C, f),
                isSecondBucket: j,
                nextBuckets: k,
                nextBucketsCount: l,
              });
            };
            e();
            C !== D.current &&
              r(
                D.current != null && C > D.current
                  ? d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET
                  : d("StoriesEnums").NAV_DIRECTIONS.PREV_BUCKET
              );
          }
          D.current = C;
          E.current = O;
          F.current = a;
        },
        [w, B, O, C, I, f, g, K, J, M, L, N, P, q, r, H]
      );
      c("useStoriesSuspenseNavListTransitionRequestListener")(
        C,
        a,
        M(C, f),
        s === 0 ? 1 : 0
      );
      return {
        bucketIndex: C,
        disableExtendedViewerOverlay: e,
        isFriendListEmpty: L,
        isUserBucketEmpty: N,
        loadMore: P,
        nodes: B,
        prevBucketIndex: D,
        setBucketIndex: a,
        userBucketIndex: s,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesViewerBuckets",
  [
    "CometRelay",
    "FBLogger",
    "StoriesQueryArgumentsContext",
    "react",
    "useStoriesViewerBuckets_bucket.graphql",
    "useStoriesViewerBuckets_user.graphql",
    "useStoriesViewerNodes",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useMemo,
      m = h !== void 0 ? h : (h = b("useStoriesViewerBuckets_user.graphql"));
    function a(a, e, f, g, h) {
      var n;
      a = d("CometRelay").usePaginationFragment(m, a);
      var o = a.data,
        p = a.hasNext,
        q = a.isLoadingNext,
        r = a.loadNext;
      a = a.refetch;
      h = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("useStoriesViewerBuckets_bucket.graphql")),
        h
      );
      var s = k(c("StoriesQueryArgumentsContext")),
        t = s.pageBucketsCount;
      s = j(
        function () {
          function a(a) {
            a &&
              c("FBLogger")("fbstories").warn(
                "Pagination fetch failed: %s",
                a.toString()
              );
          }
          r(t, { onComplete: a });
        },
        [r, t]
      );
      n = l(
        function () {
          var a;
          return (
            (o == null
              ? void 0
              : (a = o.unified_stories_buckets) == null
              ? void 0
              : a.edges) || []
          );
        },
        [
          o == null
            ? void 0
            : (n = o.unified_stories_buckets) == null
            ? void 0
            : n.edges,
        ]
      );
      n = (
        n.map(function (a) {
          return a == null ? void 0 : a.node;
        }) || []
      ).filter(Boolean);
      h = h != null ? [h] : [];
      n = c("useStoriesViewerNodes")(n, null, p, e, s, f, g, h);
      e = n.bucketIndex;
      s = n.disableExtendedViewerOverlay;
      f = n.isFriendListEmpty;
      g = n.isUserBucketEmpty;
      h = n.loadMore;
      var u = n.nodes,
        v = n.prevBucketIndex,
        w = n.setBucketIndex;
      n = n.userBucketIndex;
      return {
        bucketIndex: e,
        disableExtendedViewerOverlay: s,
        hasNext: p,
        isFriendListEmpty: f,
        isLoadingNext: q,
        isUserBucketEmpty: g,
        loadMore: h,
        nodes: u,
        prevBucketIndex: v,
        refetch: a,
        setBucketIndex: w,
        userBucketIndex: n,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesNavListItemInfo.react",
  [
    "fbt",
    "CometNumber.react",
    "CometScreenReaderText.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = function (a) {
        var b = a.lastUpdateTime;
        a = a.unseenCount;
        var d = null;
        a != null && a !== 0 && b != null
          ? (d = i.jsxs(i.Fragment, {
              children: [
                i.jsx(c("TetraText.react"), {
                  color: "highlight",
                  type: "body3",
                  children: h._({ "*": "{Unseen count} new" }, [
                    h._param(
                      "Unseen count",
                      i.jsx(c("CometNumber.react"), { decimals: 0, number: a }),
                      [0, a]
                    ),
                  ]),
                }),
                i.jsx("span", { children: " \xb7 " }),
                b,
              ],
            }))
          : a === 0 && (d = b);
        return i.jsx("div", {
          className: "a8nywdso e5nlhep0 rz4wbd8a ecm0bbzt",
          children: i.jsx(c("TetraText.react"), {
            color: "secondary",
            type: "body3",
            children: d,
          }),
        });
      };
    function a(a) {
      var b = a.lastUpdateTime,
        d = a.name;
      a = a.unseenCount;
      return i.jsxs("div", {
        className: "stjgntxs ni8dbmo4 hhnejfq7",
        children: [
          d != null &&
            i.jsxs("div", {
              className:
                "k4urcfbm sf5mxxl7 hzawbc8m a8nywdso e5nlhep0 rz4wbd8a ecm0bbzt q9uorilb",
              dir: "auto",
              children: [
                i.jsx(c("CometScreenReaderText.react"), {
                  text: h._("{user's name}'s story", [
                    h._param("user's name", d),
                  ]),
                }),
                i.jsx("div", {
                  "aria-hidden": !0,
                  children: i.jsx(c("TetraText.react"), {
                    numberOfLines: 2,
                    type: "bodyLink3",
                    children: d,
                  }),
                }),
              ],
            }),
          i.jsx(j, { lastUpdateTime: b, unseenCount: a }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesNavListItemInfoContainer.react",
  [
    "CometPlaceholder.react",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "StoriesGating",
    "StoriesNavListItemInfo.react",
    "StoriesNavListItemInfoContainer_bucket.graphql",
    "StoriesTestUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.bucket;
      f = f === void 0 ? null : f;
      a = a.index;
      a = a === void 0 ? 0 : a;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesNavListItemInfoContainer_bucket.graphql")),
        f
      );
      var g = function (a) {
        var b = { lastUpdateTimestamp: -1, unseenCount: 0 };
        return a.reduce(function (a, b) {
          var c = b == null ? void 0 : b.creation_time;
          c != null && c > a.lastUpdateTimestamp && (a.lastUpdateTimestamp = c);
          (b == null
            ? void 0
            : (c = b.story_card_seen_state) == null
            ? void 0
            : c.is_seen_by_viewer) === !1 && (a.unseenCount += 1);
          return a;
        }, b);
      };
      e =
        f == null ? void 0 : (e = f.unified_stories) == null ? void 0 : e.edges;
      e =
        e == null
          ? []
          : e.map(function (a) {
              return a.node;
            });
      f = d("StoriesGating").isTest()
        ? c("StoriesTestUtils").getNavListName(a)
        : f == null
        ? void 0
        : (a = f.story_bucket_owner) == null
        ? void 0
        : a.name;
      a = g(e);
      g = a.lastUpdateTimestamp;
      e = a.unseenCount;
      a =
        g > 0
          ? i.jsx(c("CometPlaceholder.react"), {
              fallback: null,
              children: i.jsx(c("CometRelativeTimestamp.react"), {
                date: new Date(g * 1e3),
                format: "minimized",
              }),
            })
          : null;
      return i.jsx(c("StoriesNavListItemInfo.react"), {
        lastUpdateTime: a,
        name: f,
        unseenCount: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesNavListAddStoryLabel.react",
  ["fbt", "StoriesGating", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsxs("div", {
        className: "abiwlrkh stjgntxs ni8dbmo4 ozuftl9m hhnejfq7",
        children: [
          i.jsx("div", {
            className:
              "ssixshrq k4urcfbm g0qnabr5 sf5mxxl7 abiwlrkh ltmttdrg hzawbc8m a8nywdso e5nlhep0 rz4wbd8a ecm0bbzt stjgntxs ni8dbmo4 nq83t56h gy2v8mqq q9uorilb",
            dir: "auto",
            children: i.jsx(c("TetraText.react"), {
              type: "bodyLink3",
              children: h._("Create a Story"),
            }),
          }),
          i.jsx("div", {
            className:
              "hzawbc8m a8nywdso e5nlhep0 rz4wbd8a ecm0bbzt nq83t56h rs0gx3tq",
            children: i.jsx(c("TetraText.react"), {
              type: "meta3",
              children: d("StoriesGating").getCreationDescription(),
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
  "StoriesNavListAddStoryPlusIcon.react",
  ["ix", "CometImage.react", "react", "stylex"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.isSelected;
      a = a === void 0 ? !1 : a;
      return i.jsx("div", {
        className: c("stylex").dedupe(
          {
            "align-items-1": "bp9cbjyn",
            "background-color-1": "b3i9ofy5",
            "border-top-0.3": "gcieejh5",
            "border-end-0.3": "bn081pho",
            "border-bottom-0.3": "humdl8nn",
            "border-start-0.3": "izx4hr6d",
            "border-top-start-radius-1": "s45kfl79",
            "border-top-end-radius-1": "emlxlaya",
            "border-bottom-end-radius-1": "bkmhp75w",
            "border-bottom-start-radius-1": "spb7xbtv",
            "display-1": "j83agx80",
            "flex-shrink-1": "pfnyh3mw",
            "height-1": "cb02d2ww",
            "justify-content-1": "taijpn5t",
            "width-1": "ljni7pan",
          },
          a
            ? {
                "background-color-1": "oo1teu6h",
                "background-color-8": "i75qjh01",
              }
            : null
        ),
        children: i.jsx(c("CometImage.react"), { src: h("647597") }),
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesNavListAddToStoryPanel.react",
  [
    "CometPressable.react",
    "StoriesNavListAddStoryLabel.react",
    "StoriesNavListAddStoryPlusIcon.react",
    "XCometStoriesCreateControllerRouteBuilder",
    "gkx",
    "react",
    "useOpenComposer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("gkx")("708253");
    function a() {
      var a = c("useOpenComposer")(),
        b = h.jsxs("div", {
          className:
            "hzawbc8m tw6a2znq sj5x9vvc d1544ag0 cxgpxx05 kkf49tns dicw6rsg cgat1ltu rs0gx3tq jifvfom9 ihxqhq3m j83agx80 nhd2j8a9 kzx2olss aot14ch1 p86d2i9g beltcj47 r7d6kgcz e9989ue4 esr5mh6w qu0x051f bp9cbjyn",
          children: [
            h.jsx(c("StoriesNavListAddStoryPlusIcon.react"), {}),
            h.jsx(c("StoriesNavListAddStoryLabel.react"), {}),
          ],
        });
      if (i) {
        var d = {
            entryPoint: "add_to_story_self_story",
            sourceSurface: "stories",
          },
          e = c("XCometStoriesCreateControllerRouteBuilder").buildURL({});
        return h.jsx(c("CometPressable.react"), {
          display: "inline",
          linkProps: { passthroughProps: d, url: e },
          overlayDisabled: !0,
          children: b,
        });
      }
      return h.jsx(c("CometPressable.react"), {
        display: "inline",
        onPress: a,
        overlayDisabled: !0,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesNavListArchiveHeaderButton.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "ProfileTabConst",
    "StoriesActorContext",
    "StoriesArchiveModuleArchiveGridTtiWwwQPLEvent",
    "TetraText.react",
    "XCometProfileControllerRouteBuilder",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext,
      l = c("requireDeferred")("FBStoriesQPLUtils").__setRef(
        "StoriesNavListArchiveHeaderButton.react"
      );
    function a(a) {
      var b = k(c("StoriesActorContext"));
      b = b.actorID;
      if (b == null) return null;
      b = c("XCometProfileControllerRouteBuilder").buildURL({
        id: b,
        sk: c("ProfileTabConst").STORIES_ARCHIVE,
      });
      return j.jsx(c("CometPressable.react"), {
        display: "inline",
        linkProps: { target: "_blank", url: b.toString() },
        onPress: function () {
          l.onReady(function (a) {
            a.start({
              navigationStart: !1,
              qplMarker: c("StoriesArchiveModuleArchiveGridTtiWwwQPLEvent"),
            });
          });
        },
        overlayDisabled: !0,
        children: j.jsxs("div", {
          className:
            "qnrpqo6b qt6c0cv9 jxrgncrl jb3vyjys taijpn5t btwxx1t3 j83agx80 bp9cbjyn",
          children: [
            a.showIcon === !0 &&
              j.jsxs(j.Fragment, {
                children: [
                  j.jsx(c("CometImage.react"), { src: i("689699") }),
                  "\xa0",
                ],
              }),
            j.jsx(c("TetraText.react"), {
              color: "highlight",
              type: "body3",
              children: h._("Archive"),
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
  "StoriesNavListHideButton.react",
  [
    "fbt",
    "ix",
    "CometTooltip.react",
    "Locale",
    "TetraCircleButton.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.isOpen;
      a = a.onClick;
      var e = d("Locale").isRTL();
      e = b
        ? e
          ? d("fbicon")._(i("557039"), 20)
          : d("fbicon")._(i("557024"), 20)
        : e
        ? d("fbicon")._(i("557050"), 20)
        : d("fbicon")._(i("557028"), 20);
      b = b ? h._("Hide menu") : h._("Show menu");
      return j.jsx("div", {
        className: "i0u1bx94",
        children: j.jsx(c("CometTooltip.react"), {
          position: "below",
          tooltip: b,
          children: j.jsx(c("TetraCircleButton.react"), {
            color: "primary",
            icon: e,
            label: b,
            onPress: a,
            size: 40,
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
  "StoriesNavListSettingsHeaderButtonComet.react",
  [
    "fbt",
    "CometLazyDialogTrigger.react",
    "CometPressable.react",
    "JSResourceForInteraction",
    "StoriesPauseReasons",
    "TetraText.react",
    "react",
    "storiesViewerSuspenseEmitter",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("JSResourceForInteraction")(
        "StoriesWebSettingsDialog.react"
      ).__setRef("StoriesNavListSettingsHeaderButtonComet.react");
    function a(a) {
      return i.jsx(c("CometLazyDialogTrigger.react"), {
        dialogProps: {
          onBeforeDialogClose: a.onBeforeDialogClose,
          setPause: c("storiesViewerSuspenseEmitter").requestPause,
        },
        dialogResource: j,
        onShow: function () {
          return c("storiesViewerSuspenseEmitter").requestPause(
            !0,
            d("StoriesPauseReasons").SETTINGS_DIALOG
          );
        },
        children: function (a, b) {
          return i.jsx(c("CometPressable.react"), {
            display: "inline",
            onPress: a,
            overlayDisabled: !0,
            ref: b,
            children: i.jsx("div", {
              className:
                "qnrpqo6b qt6c0cv9 jxrgncrl jb3vyjys i1fnvgqd j83agx80 bp9cbjyn",
              children: i.jsx(c("TetraText.react"), {
                color: "highlight",
                type: "body3",
                children: h._("Settings"),
              }),
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
  "StoriesNavListHeaderButtons.react",
  [
    "CometMiddot.react",
    "Promise",
    "StoriesActorContext",
    "StoriesNavListArchiveHeaderButton.react",
    "StoriesNavListHideButton.react",
    "StoriesNavListSettingsHeaderButtonComet.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var d = a.hideNavbar,
        e = a.refreshNavList;
      a = function (a) {
        return a && e !== void 0 ? e() : b("Promise").resolve();
      };
      var f = i(c("StoriesActorContext"));
      f = f.actorID;
      a = h.jsx(c("StoriesNavListSettingsHeaderButtonComet.react"), {
        onBeforeDialogClose: a,
      });
      f =
        f != null
          ? h.jsxs(h.Fragment, {
              children: [
                h.jsx(c("StoriesNavListArchiveHeaderButton.react"), {}),
                h.jsx(c("CometMiddot.react"), { className: "m9osqain" }),
              ],
            })
          : null;
      d = h.jsx(c("StoriesNavListHideButton.react"), {
        isOpen: !0,
        onClick: d,
      });
      return h.jsxs("div", {
        className: "j83agx80 bp9cbjyn",
        children: [f, a, d],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSuspenseResharingHandler",
  ["react", "storiesViewerSuspenseEmitter"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    function a() {
      var a = i(!1),
        b = a[0],
        d = a[1];
      h(
        function () {
          var a = function (a) {
            d(a);
          };
          return c("storiesViewerSuspenseEmitter").listenToReshareRequest(
            function () {
              return a.apply(void 0, arguments);
            }
          );
        },
        [d]
      );
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseNavListItem.react",
  [
    "CometLegacyClickableListItemBase.react",
    "CometRelay",
    "StoriesNavListItemInfoContainer.react",
    "StoriesNavListItemPog.react",
    "StoriesSuspenseNavListItem_bucket.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useRef;
    function a(a) {
      var e = a.bucket,
        f = a.index,
        g = a.onClick;
      a = a.selected;
      e = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("StoriesSuspenseNavListItem_bucket.graphql")),
        e
      );
      var k = j();
      return !e
        ? null
        : i.jsx("div", {
            "data-id": e.id,
            "data-testid": void 0,
            ref: function (a) {
              return (k.current = a);
            },
            title: "",
            children: i.jsx(c("CometLegacyClickableListItemBase.react"), {
              addon: i.jsx(c("StoriesNavListItemPog.react"), { bucket: e }),
              disabled: !1,
              onClick: function () {
                return g(f);
              },
              right: null,
              selected: a,
              testid: void 0,
              children: i.jsx(c("StoriesNavListItemInfoContainer.react"), {
                bucket: e,
                index: f,
              }),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "StoriesSuspenseNavListYourStory.react",
  [
    "fbt",
    "CometLegacyClickableListItemBase.react",
    "CometPressable.react",
    "CometRelay",
    "StoriesGating",
    "StoriesNavListAddStoryPlusIcon.react",
    "StoriesNavListAddToStoryPanel.react",
    "StoriesNavListItemInfoContainer.react",
    "StoriesNavListItemPog.react",
    "StoriesSuspenseNavListYourStory_userBucket.graphql",
    "WebPixelRatio",
    "XCometStoriesCreateControllerRouteBuilder",
    "react",
    "useOpenComposer",
    "useStoriesIsUploading",
    "useStoriesSuspenseRefetchOnPost",
    "useStoriesSuspenseResharingHandler",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l =
        i !== void 0
          ? i
          : (i = b("StoriesSuspenseNavListYourStory_userBucket.graphql"));
    function a(a) {
      var b = d("CometRelay").useRefetchableFragment(l, a.userBucket),
        e = b[0],
        f = b[1],
        g = e == null ? void 0 : e.id;
      b = k(
        function () {
          g != null &&
            f(
              { id: g, scale: d("WebPixelRatio").get() },
              { fetchPolicy: "network-only" }
            );
        },
        [g, f]
      );
      b = c("useStoriesIsUploading")(b);
      var h = c("useStoriesSuspenseRefetchOnPost")(g, f);
      b = d("StoriesGating").isComet() ? b : h;
      h = c("useStoriesSuspenseResharingHandler")();
      var i = function (b) {
          var c = b.type === "press";
          c || (b.preventDefault(), b.stopPropagation());
          a.onClick(a.index);
        },
        n = a.userBucket == null;
      if (n) return j.jsx(c("StoriesNavListAddToStoryPanel.react"), {});
      else {
        n = a.selected;
        b = b || h;
        h = d("StoriesGating").isTest();
        return !a.isUserBucketEmpty || b
          ? j.jsx("div", {
              "data-id": h ? (e == null ? void 0 : e.id) : null,
              "data-testid": void 0,
              children: j.jsx(c("CometLegacyClickableListItemBase.react"), {
                addon: j.jsx(c("StoriesNavListItemPog.react"), {
                  bucket: e,
                  isUploading: b,
                }),
                disabled: !1,
                onClick: i,
                right: j.jsx(m, { isSelected: n }),
                selected: n,
                testid: void 0,
                children: j.jsx(c("StoriesNavListItemInfoContainer.react"), {
                  bucket: e,
                }),
              }),
            })
          : j.jsx(c("StoriesNavListAddToStoryPanel.react"), {});
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var m = function (a) {
      var b = c("useOpenComposer")(),
        e = {
          display: "inline",
          label: h._("Add to Story"),
          overlayDisabled: !0,
        };
      if (d("StoriesGating").isComet()) {
        var f = {
            entryPoint: "add_to_story_end_card",
            sourceSurface: "stories",
          },
          g = c("XCometStoriesCreateControllerRouteBuilder").buildURL({});
        e = babelHelpers["extends"]({}, e, {
          linkProps: { passthroughProps: f, url: g },
        });
      } else e = babelHelpers["extends"]({}, e, { onPress: b });
      return j.jsx(
        c("CometPressable.react"),
        babelHelpers["extends"]({}, e, {
          children: j.jsx(c("StoriesNavListAddStoryPlusIcon.react"), {
            isSelected: a.isSelected,
          }),
        })
      );
    };
    e = j.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "StoriesSuspenseNavListYourStoryPlaceholder.react",
  [
    "CometLegacyClickableListItemBase.react",
    "CometPlaceholder.react",
    "CometRelativeTimestamp.react",
    "StoriesLegacyProfilePhoto.react",
    "StoriesNavListItemInfo.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.profilePicUri,
        d = a.userName;
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: h.jsx(i, { profilePicUri: b, userName: d }),
        children: a.children,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var i = function (a) {
      var b = a.profilePicUri;
      a = a.userName;
      return b != null
        ? h.jsx(c("CometLegacyClickableListItemBase.react"), {
            addon: h.jsx(c("StoriesLegacyProfilePhoto.react"), {
              ringColor: "blue-spinning",
              size: 60,
              src: b,
            }),
            disabled: !1,
            onClick: function () {},
            right: null,
            selected: !1,
            children: h.jsx(c("StoriesNavListItemInfo.react"), {
              lastUpdateTime: h.jsx(c("CometRelativeTimestamp.react"), {
                date: new Date(),
                format: "minimized",
              }),
              name: a,
              unseenCount: 0,
            }),
          })
        : null;
    };
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseCircularNavigationPane.react",
  [
    "fbt",
    "CometHero.react",
    "CometRelay",
    "CometUnit.react",
    "CometUnitHeader.react",
    "StoriesGating",
    "StoriesSuspenseCircularNavigationPane_buckets.graphql",
    "StoriesSuspenseNavListItem.react",
    "StoriesSuspenseNavListYourStory.react",
    "StoriesSuspenseNavListYourStoryPlaceholder.react",
    "react",
    "useStoriesSuspenseProcessRoute",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e,
        f,
        g = a.bucketIndex,
        k = a.buckets,
        l = a.isFriendListEmpty,
        m = a.isUserBucketEmpty,
        n = a.onItemClicked,
        o = a.userBucketIndex;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesSuspenseCircularNavigationPane_buckets.graphql")),
        k
      );
      k = a == null ? void 0 : a[o];
      a =
        (a == null
          ? void 0
          : a.reduce(function (a, b, d) {
              if (d === o) return a;
              a.push(
                j.jsx(
                  c("StoriesSuspenseNavListItem.react"),
                  { bucket: b, index: d, onClick: n, selected: g === d },
                  b == null ? void 0 : b.id
                )
              );
              return a;
            }, [])) || [];
      e =
        k == null
          ? void 0
          : (e = k.story_bucket_owner) == null
          ? void 0
          : e.name;
      f =
        k == null
          ? void 0
          : (f = k.story_bucket_owner) == null
          ? void 0
          : (f = f.placeholder_picture) == null
          ? void 0
          : f.uri;
      m = j.jsx(c("CometUnit.react"), {
        header: j.jsx(c("CometUnitHeader.react"), {
          hasTopDivider: !1,
          headline: h._("Your Story"),
          level: 3,
        }),
        children: j.jsxs(
          c("StoriesSuspenseNavListYourStoryPlaceholder.react"),
          {
            profilePicUri: f,
            userName: e,
            children: [
              j.jsx(c("CometHero.react"), { description: "Your Story" }),
              j.jsx(c("StoriesSuspenseNavListYourStory.react"), {
                index: o,
                isUserBucketEmpty: m,
                onClick: n,
                profilePicUri: f,
                selected: g === o,
                userBucket: k,
                userName: e,
              }),
            ],
          }
        ),
      });
      f = c("useStoriesSuspenseProcessRoute")();
      k = f.storiesTrayType;
      e = {
        description:
          "When friends, groups, and pages post stories their stories will show up here.",
        title: h._("All Stories"),
      };
      f = {
        description:
          "Stories from celebrities and pages you might like will show up here.",
        title: h._("Suggested Stories"),
      };
      k =
        d("StoriesGating").shouldShowSuggestedStories() &&
        k === "SUGGESTED_STORIES"
          ? f
          : e;
      f = l
        ? j.jsx("div", {
            className: "dhix69tm oygrvhab wkznzc2l tr9rh885 jq4qci2q m9osqain",
            "data-testid": void 0,
            children: h._("{empty_bucket_description}", [
              h._param("empty_bucket_description", k.description),
            ]),
          })
        : j.jsx(c("CometUnit.react"), {
            header: j.jsx(c("CometUnitHeader.react"), {
              hasTopDivider: !1,
              headline: k.title,
              level: 3,
            }),
            children: a,
          });
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx("div", { className: "hy1o8qpp", children: m }),
          j.jsx("div", { className: "sxpk6l6v", children: f }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseCircularNavigationPanePlaceholder.react",
  [
    "fbt",
    "CometUnit.react",
    "CometUnitHeader.react",
    "StoriesCometListItemGlimmer.react",
    "StoriesGating",
    "react",
    "useStoriesSuspenseProcessRoute",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      var a = c("useStoriesSuspenseProcessRoute")();
      a = a.storiesTrayType;
      var b = h._("All Stories"),
        e = h._("Suggested Stories");
      a =
        d("StoriesGating").shouldShowSuggestedStories() &&
        a === "SUGGESTED_STORIES"
          ? e
          : b;
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("CometUnit.react"), {
            header: i.jsx(c("CometUnitHeader.react"), {
              hasTopDivider: !1,
              headline: h._("Stories"),
              level: 1,
            }),
          }),
          i.jsx("div", {
            className: "dlu2gh78",
            children: i.jsx(c("CometUnit.react"), {
              header: i.jsx(c("CometUnitHeader.react"), {
                hasTopDivider: !1,
                headline: h._("Your Story"),
                level: 3,
              }),
              children: i.jsx(c("StoriesCometListItemGlimmer.react"), {
                numberOfItems: 1,
              }),
            }),
          }),
          i.jsx("div", {
            className: "dlu2gh78",
            children: i.jsx(c("CometUnit.react"), {
              header: i.jsx(c("CometUnitHeader.react"), {
                hasTopDivider: !1,
                headline: a,
                level: 3,
              }),
              children: i.jsx(c("StoriesCometListItemGlimmer.react"), {
                isFriends: !0,
                numberOfItems: 6,
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
  "StoriesSuspenseNavigationPanePaginationPlaceholder.react",
  ["StoriesCometListItemGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("StoriesCometListItemGlimmer.react"), {
        isFriends: !0,
        numberOfItems: 2,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseNavigationPaneWrapper.react",
  [
    "fbt",
    "CometInfiniteScrollTrigger.react",
    "StoriesNavListHeaderButtons.react",
    "StoriesSuspenseNavigationPanePaginationPlaceholder.react",
    "cr:1060",
    "cr:544",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var d = a.children,
        e = a.hasNext,
        f = a.hideNavbar,
        g = a.isLoadingNext,
        j = a.loadMore;
      a = a.refreshNavList;
      return i.jsx("div", {
        "data-testid": void 0,
        children: i.jsxs("div", {
          className: "eg9m0zos d76ob5m9",
          children: [
            i.jsxs("div", {
              className:
                "pxsmfnpt dhix69tm n851cfcs wkznzc2l n1l5q3vz i1fnvgqd j83agx80 oo9gr5id a6y00v3l",
              children: [
                i.jsx("div", {
                  className: "n3ffmt46 ou4ep6bq",
                  children: h._("Stories"),
                }),
                i.jsx(c("StoriesNavListHeaderButtons.react"), {
                  hideNavbar: f,
                  refreshNavList: a,
                }),
              ],
            }),
            b("cr:544") != null &&
              i.jsx("div", {
                className: "gy6hb44f sej5wr8e",
                children: i.jsx(b("cr:544"), {}),
              }),
            b("cr:1060") != null &&
              i.jsx("div", {
                className: "gy6hb44f sej5wr8e",
                children: i.jsx(b("cr:1060"), {}),
              }),
            d,
            i.jsx(c("CometInfiniteScrollTrigger.react"), {
              hasMore: e,
              isLoading: g,
              onLoadMore: j,
              children: i.jsx("div", {
                className: "sxpk6l6v",
                children: i.jsx(
                  c("StoriesSuspenseNavigationPanePaginationPlaceholder.react"),
                  {}
                ),
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
  "StoriesSuspenseNavigationPane.react",
  [
    "CometRelay",
    "Promise",
    "StoriesActorContext",
    "StoriesQueryArgumentsContext",
    "StoriesSuspenseBucketDataContext",
    "StoriesSuspenseCircularNavigationPane.react",
    "StoriesSuspenseNavigationPaneWrapper.react",
    "StoriesSuspenseNavigationPane_bucket.graphql",
    "StoriesSuspenseNavigationPane_user.graphql",
    "WebPixelRatio",
    "react",
    "storiesViewerSuspenseEmitter",
    "useStoriesViewerBuckets",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext;
    function a(a) {
      var e = a.extendedViewerBucket;
      e = e === void 0 ? null : e;
      var f = a.hideNavbar,
        g = a.initialBucketID;
      a = a.user;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("StoriesSuspenseNavigationPane_user.graphql")),
        a
      );
      e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("StoriesSuspenseNavigationPane_bucket.graphql")),
        e
      );
      var m = l(c("StoriesActorContext")),
        n = m.actorID;
      m = l(c("StoriesSuspenseBucketDataContext"));
      var o = m.setBucketData;
      m = m.setNavigationDirection;
      var p = l(c("StoriesQueryArgumentsContext")),
        q = p.initialBucketsCount;
      p = c("useStoriesViewerBuckets")(a, g, o, m, e);
      a = p.bucketIndex;
      var r = p.disableExtendedViewerOverlay;
      o = p.hasNext;
      m = p.isFriendListEmpty;
      e = p.isLoadingNext;
      var s = p.isUserBucketEmpty,
        t = p.loadMore,
        u = p.nodes,
        v = p.prevBucketIndex,
        w = p.refetch,
        x = p.setBucketIndex;
      p = p.userBucketIndex;
      var y = function () {
          return new (b("Promise"))(function (a) {
            if (n != null && w != null) {
              var b;
              w(
                {
                  bucketsCount: q,
                  id: n,
                  pinnedIDs: [(b = g) != null ? b : ""],
                  scale: d("WebPixelRatio").get(),
                },
                {
                  fetchPolicy: "network-only",
                  onComplete: function () {
                    a(), x(-1);
                  },
                }
              );
            }
          });
        },
        z = k(
          function (a) {
            a !== v.current &&
              c("storiesViewerSuspenseEmitter").navListItemTransition(),
              x(a),
              r();
          },
          [v, x, r]
        );
      a = j.jsx(c("StoriesSuspenseCircularNavigationPane.react"), {
        bucketIndex: a,
        buckets: u,
        isFriendListEmpty: m,
        isUserBucketEmpty: s,
        onItemClicked: z,
        userBucketIndex: p,
      });
      return j.jsx(c("StoriesSuspenseNavigationPaneWrapper.react"), {
        hasNext: o,
        hideNavbar: f,
        isLoadingNext: e,
        isUserBucketEmpty: s,
        loadMore: t,
        refreshNavList: y,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseNavigationPaneHelpers",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return 9;
    }
    function b() {
      return 9;
    }
    f.getInitialBucketsCount = a;
    f.getPageBucketsCount = b;
  },
  66
);
__d(
  "StoriesSuspenseNavigationPanePauseContainer",
  [
    "StoriesPauseReasons",
    "StoriesSuspensePauseContext",
    "react",
    "storiesViewerSuspenseEmitter",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      a = a.children;
      var b = !1,
        e = i(
          function () {
            return {
              isPaused: b,
              setPause: c("storiesViewerSuspenseEmitter").requestPause,
            };
          },
          [b]
        );
      return h.jsx("div", {
        className: "k4urcfbm datstx6m",
        onMouseEnter: function () {
          c("storiesViewerSuspenseEmitter").requestPause(
            !0,
            d("StoriesPauseReasons").HOVER_ON_PAUSE_OVERLAY
          );
        },
        onMouseLeave: function () {
          c("storiesViewerSuspenseEmitter").requestPause(
            !1,
            d("StoriesPauseReasons").HOVER_ON_PAUSE_OVERLAY
          );
        },
        children: h.jsx(c("StoriesSuspensePauseContext").Provider, {
          value: e,
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
  "StoriesSuspenseNavigationPanePlaceholder.react",
  ["StoriesSuspenseCircularNavigationPanePlaceholder.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("StoriesSuspenseCircularNavigationPanePlaceholder.react"),
        {}
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
