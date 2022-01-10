if (self.CavalryLogger) {
  CavalryLogger.start_js(["wp0F2Vy"]);
}

__d(
  "CometBookmarkListItemWrapper_bookmark.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Variable", name: "scale", variableName: "scale" },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "CometBookmarkListItemWrapper_bookmark",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "bookmarked_node",
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
            kind: "ScalarField",
            name: "additonal_profile_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_additonal_profile",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "with_core_app_access",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_news_feed",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "section",
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
            name: "has_user_hidden",
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Literal",
                name: "bookmark_render_location",
                value: "COMET_LEFT_NAV",
              },
              { kind: "Literal", name: "site", value: "comet" },
            ],
            kind: "ScalarField",
            name: "url",
            storageKey:
              'url(bookmark_render_location:"COMET_LEFT_NAV",site:"comet")',
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "tracking",
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "icon_size", value: "DP36" }, a],
            concreteType: "Image",
            kind: "LinkedField",
            name: "bookmark_icon_image",
            plural: !1,
            selections: [b],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              { kind: "Literal", name: "height", value: 36 },
              { kind: "Literal", name: "icon_style", value: "CASPIAN" },
              a,
              { kind: "Literal", name: "width", value: 36 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: [
              b,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_silhouette",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Bookmark",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFolderBookmarkListItem_bookmark.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          kind: "Literal",
          name: "bookmark_render_location",
          value: "COMET_LEFT_NAV",
        },
      ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "skipFetchingUnreadCount" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometFolderBookmarkListItem_bookmark",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometBookmarkListItemWrapper_bookmark",
          },
          {
            condition: "skipFetchingUnreadCount",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: null,
                args: a,
                kind: "ScalarField",
                name: "unread_count",
                storageKey:
                  'unread_count(bookmark_render_location:"COMET_LEFT_NAV")',
              },
            ],
          },
          {
            alias: null,
            args: a,
            kind: "ScalarField",
            name: "unread_count_string",
            storageKey:
              'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")',
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "context_sentence",
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
        ],
        type: "Bookmark",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometClassicHomeLeftRailContainerQuery.graphql",
  [
    "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "numExploreBookmarks",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shortcutBookmarksSections",
        },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldNotRenderCommunitiesSection",
        },
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skipFetchingUnreadCount",
        },
        g = [
          "FOLDER",
          "USER",
          "USER_TOOL",
          "GAME_TOOL",
          "FACEBOOK_APP",
          "APP_TOOL",
          "PLATFORM_APP",
          "EVENT",
          "GROUP_TOOL",
          "GROUP",
          "WORK_GROUPS_TEAM",
          "WORK_GROUPS_SOCIAL",
          "WORK_GROUPS_FEEDBACK",
          "WORK_GROUPS_ANNOUNCEMENT",
          "WORK_GROUPS_MULTI_COMPANY",
          "PAGE",
          "PAGE_TOOL",
          "LIST_TOOL",
          "FRIEND_LIST",
          "INTEREST_LIST",
          "NEO_USER",
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = { kind: "Literal", name: "first", value: 1 },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        l = { kind: "Literal", name: "height", value: 36 },
        m = { kind: "Variable", name: "scale", variableName: "scale" },
        n = { kind: "Literal", name: "width", value: 36 },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        p = [o],
        q = { kind: "Literal", name: "environment", value: "COMET" },
        r = { kind: "Literal", name: "query_source", value: "BOOKMARKS_LIST" },
        s = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "bookmarked_node",
          plural: !1,
          selections: [h, j],
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "additonal_profile_id",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_additonal_profile",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "with_core_app_access",
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_news_feed",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "section",
          storageKey: null,
        },
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_user_hidden",
          storageKey: null,
        },
        z = {
          kind: "Literal",
          name: "bookmark_render_location",
          value: "COMET_LEFT_NAV",
        },
        A = {
          alias: null,
          args: [z, { kind: "Literal", name: "site", value: "comet" }],
          kind: "ScalarField",
          name: "url",
          storageKey:
            'url(bookmark_render_location:"COMET_LEFT_NAV",site:"comet")',
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tracking",
          storageKey: null,
        },
        C = {
          alias: null,
          args: [{ kind: "Literal", name: "icon_size", value: "DP36" }, m],
          concreteType: "Image",
          kind: "LinkedField",
          name: "bookmark_icon_image",
          plural: !1,
          selections: p,
          storageKey: null,
        };
      o = {
        alias: null,
        args: [
          l,
          { kind: "Literal", name: "icon_style", value: "CASPIAN" },
          m,
          n,
        ],
        concreteType: "Image",
        kind: "LinkedField",
        name: "image",
        plural: !1,
        selections: [
          o,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_silhouette",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      z = [z];
      var D = {
        condition: "skipFetchingUnreadCount",
        kind: "Condition",
        passingValue: !1,
        selections: [
          {
            alias: null,
            args: z,
            kind: "ScalarField",
            name: "unread_count",
            storageKey:
              'unread_count(bookmark_render_location:"COMET_LEFT_NAV")',
          },
        ],
      };
      z = {
        alias: null,
        args: z,
        kind: "ScalarField",
        name: "unread_count_string",
        storageKey:
          'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")',
      };
      var E = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "context_sentence",
          plural: !1,
          selections: [
            {
              args: null,
              fragment: b(
                "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
              ),
              kind: "FragmentSpread",
            },
          ],
          storageKey: null,
        },
        F = { kind: "Literal", name: "first", value: 5 },
        G = [
          q,
          F,
          r,
          {
            kind: "Variable",
            name: "sections",
            variableName: "shortcutBookmarksSections",
          },
        ],
        H = {
          alias: null,
          args: null,
          concreteType: "FolderBookmarksEdge",
          kind: "LinkedField",
          name: "edges",
          plural: !0,
          selections: [h],
          storageKey: null,
        },
        I = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "count",
            storageKey: null,
          },
          H,
        ],
        J = [
          {
            alias: null,
            args: null,
            concreteType: "FolderBookmarksEdge",
            kind: "LinkedField",
            name: "edges",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Bookmark",
                kind: "LinkedField",
                name: "node",
                plural: !1,
                selections: [s, t, u, v, w, x, k, y, A, B, C, o, D, z, E, j, h],
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
        K = ["query_source", "sections", "environment"];
      F = [q, F, r, { kind: "Literal", name: "sections", value: ["GROUP"] }];
      var L = [
        q,
        {
          kind: "Variable",
          name: "first",
          variableName: "numExploreBookmarks",
        },
        r,
        { kind: "Literal", name: "sections", value: g },
      ];
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f],
          kind: "Fragment",
          metadata: null,
          name: "CometClassicHomeLeftRailContainerQuery",
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
                  args: [
                    {
                      kind: "Literal",
                      name: "exploreBookmarksSections",
                      value: g,
                    },
                    {
                      kind: "Variable",
                      name: "shortcutBookmarksSections",
                      variableName: "shortcutBookmarksSections",
                    },
                    {
                      kind: "Variable",
                      name: "shouldNotRenderCommunitiesSection",
                      variableName: "shouldNotRenderCommunitiesSection",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "CometHomeLeftRailWithBlueRanking_viewer",
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
          argumentDefinitions: [c, a, e, d, f],
          kind: "Operation",
          name: "CometClassicHomeLeftRailContainerQuery",
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
                    h,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_switching_to_additional_profile",
                          storageKey: null,
                        },
                        {
                          alias: "first_profile",
                          args: [i],
                          concreteType:
                            "UserProfileSwitcherEligibleProfilesConnection",
                          kind: "LinkedField",
                          name: "profile_switcher_eligible_profiles",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ProfileSwitcherEligibleProfile",
                              kind: "LinkedField",
                              name: "nodes",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "User",
                                  kind: "LinkedField",
                                  name: "profile",
                                  plural: !1,
                                  selections: [
                                    j,
                                    k,
                                    {
                                      alias: null,
                                      args: [l, m, n],
                                      concreteType: "Image",
                                      kind: "LinkedField",
                                      name: "profile_picture",
                                      plural: !1,
                                      selections: p,
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
                            "profile_switcher_eligible_profiles(first:1)",
                        },
                      ],
                      type: "User",
                      abstractKey: null,
                    },
                    j,
                  ],
                  storageKey: null,
                },
                {
                  alias: "comet_classic_identity",
                  args: [
                    { kind: "Literal", name: "folder", value: "IDENTITY" },
                  ],
                  concreteType: "FolderBookmark",
                  kind: "LinkedField",
                  name: "bookmark_folder",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: [
                        q,
                        i,
                        r,
                        { kind: "Literal", name: "sections", value: ["USER"] },
                      ],
                      concreteType: "FolderBookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "FolderBookmarksEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Bookmark",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                s,
                                t,
                                u,
                                v,
                                w,
                                x,
                                k,
                                y,
                                A,
                                B,
                                C,
                                o,
                                D,
                                z,
                                E,
                                j,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'bookmarks(environment:"COMET",first:1,query_source:"BOOKMARKS_LIST",sections:["USER"])',
                    },
                    j,
                  ],
                  storageKey: 'bookmark_folder(folder:"IDENTITY")',
                },
                {
                  alias: "shortcut_bookmarks",
                  args: [
                    { kind: "Literal", name: "folder", value: "FAVORITES" },
                  ],
                  concreteType: "FolderBookmark",
                  kind: "LinkedField",
                  name: "bookmark_folder",
                  plural: !1,
                  selections: [
                    {
                      alias: "shortcut_bookmark",
                      args: G,
                      concreteType: "FolderBookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: I,
                      storageKey: null,
                    },
                    j,
                    {
                      alias: null,
                      args: G,
                      concreteType: "FolderBookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: J,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: G,
                      filters: K,
                      handle: "connection",
                      key: "CometHomeLeftRailWithBlueRankingRefetchSection_bookmarks",
                      kind: "LinkedHandle",
                      name: "bookmarks",
                    },
                  ],
                  storageKey: 'bookmark_folder(folder:"FAVORITES")',
                },
                {
                  condition: "shouldNotRenderCommunitiesSection",
                  kind: "Condition",
                  passingValue: !1,
                  selections: [
                    {
                      alias: "community_bookmarks",
                      args: [
                        { kind: "Literal", name: "folder", value: "GROUPS" },
                      ],
                      concreteType: "FolderBookmark",
                      kind: "LinkedField",
                      name: "bookmark_folder",
                      plural: !1,
                      selections: [
                        {
                          alias: "community_bookmark",
                          args: F,
                          concreteType: "FolderBookmarksConnection",
                          kind: "LinkedField",
                          name: "bookmarks",
                          plural: !1,
                          selections: I,
                          storageKey:
                            'bookmarks(environment:"COMET",first:5,query_source:"BOOKMARKS_LIST",sections:["GROUP"])',
                        },
                        j,
                        {
                          alias: null,
                          args: F,
                          concreteType: "FolderBookmarksConnection",
                          kind: "LinkedField",
                          name: "bookmarks",
                          plural: !1,
                          selections: J,
                          storageKey:
                            'bookmarks(environment:"COMET",first:5,query_source:"BOOKMARKS_LIST",sections:["GROUP"])',
                        },
                        {
                          alias: null,
                          args: F,
                          filters: K,
                          handle: "connection",
                          key: "CometHomeLeftRailWithBlueRankingRefetchSection_bookmarks",
                          kind: "LinkedHandle",
                          name: "bookmarks",
                        },
                      ],
                      storageKey: 'bookmark_folder(folder:"GROUPS")',
                    },
                  ],
                },
                {
                  alias: "explore_bookmarks",
                  args: [{ kind: "Literal", name: "folder", value: "PRODUCT" }],
                  concreteType: "FolderBookmark",
                  kind: "LinkedField",
                  name: "bookmark_folder",
                  plural: !1,
                  selections: [
                    {
                      alias: "explore_bookmark",
                      args: L,
                      concreteType: "FolderBookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: [H],
                      storageKey: null,
                    },
                    j,
                    {
                      alias: null,
                      args: L,
                      concreteType: "FolderBookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: J,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: L,
                      filters: K,
                      handle: "connection",
                      key: "CometHomeLeftRailWithBlueRankingRefetchSection_bookmarks",
                      kind: "LinkedHandle",
                      name: "bookmarks",
                    },
                  ],
                  storageKey: 'bookmark_folder(folder:"PRODUCT")',
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4149972511789743",
          metadata: {},
          name: "CometClassicHomeLeftRailContainerQuery",
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
  "CometHomeLeftRailWithBlueRankingRefetchSectionRefetchQuery.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        c = { defaultValue: 4, kind: "LocalArgument", name: "first" },
        d = { defaultValue: null, kind: "LocalArgument", name: "id" },
        e = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        f = { defaultValue: null, kind: "LocalArgument", name: "sections" },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skipFetchingUnreadCount",
        },
        h = [{ kind: "Variable", name: "id", variableName: "id" }],
        i = { kind: "Variable", name: "first", variableName: "first" },
        j = { kind: "Variable", name: "sections", variableName: "sections" },
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
          { kind: "Literal", name: "environment", value: "COMET" },
          i,
          { kind: "Literal", name: "query_source", value: "BOOKMARKS_LIST" },
          j,
        ],
        n = {
          kind: "Literal",
          name: "bookmark_render_location",
          value: "COMET_LEFT_NAV",
        },
        o = { kind: "Variable", name: "scale", variableName: "scale" },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        q = [n];
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g],
          kind: "Fragment",
          metadata: null,
          name: "CometHomeLeftRailWithBlueRankingRefetchSectionRefetchQuery",
          selections: [
            {
              alias: null,
              args: h,
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
                    i,
                    j,
                  ],
                  kind: "FragmentSpread",
                  name: "CometHomeLeftRailWithBlueRankingRefetchSection_folderBookmark",
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
          argumentDefinitions: [a, c, e, f, g, d],
          kind: "Operation",
          name: "CometHomeLeftRailWithBlueRankingRefetchSectionRefetchQuery",
          selections: [
            {
              alias: null,
              args: h,
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
                      concreteType: "FolderBookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "FolderBookmarksEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Bookmark",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "bookmarked_node",
                                  plural: !1,
                                  selections: [k, l],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "additonal_profile_id",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_additonal_profile",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "with_core_app_access",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_news_feed",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "section",
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
                                  name: "has_user_hidden",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    n,
                                    {
                                      kind: "Literal",
                                      name: "site",
                                      value: "comet",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "url",
                                  storageKey:
                                    'url(bookmark_render_location:"COMET_LEFT_NAV",site:"comet")',
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "tracking",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "icon_size",
                                      value: "DP36",
                                    },
                                    o,
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "bookmark_icon_image",
                                  plural: !1,
                                  selections: [p],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "height",
                                      value: 36,
                                    },
                                    {
                                      kind: "Literal",
                                      name: "icon_style",
                                      value: "CASPIAN",
                                    },
                                    o,
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 36,
                                    },
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "image",
                                  plural: !1,
                                  selections: [
                                    p,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_silhouette",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  condition: "skipFetchingUnreadCount",
                                  kind: "Condition",
                                  passingValue: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: q,
                                      kind: "ScalarField",
                                      name: "unread_count",
                                      storageKey:
                                        'unread_count(bookmark_render_location:"COMET_LEFT_NAV")',
                                    },
                                  ],
                                },
                                {
                                  alias: null,
                                  args: q,
                                  kind: "ScalarField",
                                  name: "unread_count_string",
                                  storageKey:
                                    'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")',
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "context_sentence",
                                  plural: !1,
                                  selections: [
                                    {
                                      args: null,
                                      fragment: b(
                                        "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
                                      ),
                                      kind: "FragmentSpread",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                l,
                                k,
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
                      filters: ["query_source", "sections", "environment"],
                      handle: "connection",
                      key: "CometHomeLeftRailWithBlueRankingRefetchSection_bookmarks",
                      kind: "LinkedHandle",
                      name: "bookmarks",
                    },
                  ],
                  type: "FolderBookmark",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "6220182257999748",
          metadata: {},
          name: "CometHomeLeftRailWithBlueRankingRefetchSectionRefetchQuery",
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
  "CometHomeLeftRailWithBlueRankingRefetchSection_folderBookmark.graphql",
  ["CometHomeLeftRailWithBlueRankingRefetchSectionRefetchQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["bookmarks"],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { defaultValue: 4, kind: "LocalArgument", name: "first" },
          { kind: "RootArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "sections" },
          { kind: "RootArgument", name: "skipFetchingUnreadCount" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: "first", cursor: "cursor", direction: "forward", path: a },
          ],
          refetch: {
            connection: {
              forward: { count: "first", cursor: "cursor" },
              backward: null,
              path: a,
            },
            fragmentPathInResult: ["node"],
            operation: b(
              "CometHomeLeftRailWithBlueRankingRefetchSectionRefetchQuery.graphql"
            ),
            identifierField: "id",
          },
        },
        name: "CometHomeLeftRailWithBlueRankingRefetchSection_folderBookmark",
        selections: [
          c,
          {
            alias: "bookmarks",
            args: [
              { kind: "Literal", name: "environment", value: "COMET" },
              {
                kind: "Literal",
                name: "query_source",
                value: "BOOKMARKS_LIST",
              },
              { kind: "Variable", name: "sections", variableName: "sections" },
            ],
            concreteType: "FolderBookmarksConnection",
            kind: "LinkedField",
            name: "__CometHomeLeftRailWithBlueRankingRefetchSection_bookmarks_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "FolderBookmarksEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Bookmark",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometFolderBookmarkListItem_bookmark",
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
                        name: "has_user_hidden",
                        storageKey: null,
                      },
                      c,
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
        ],
        type: "FolderBookmark",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometHomeLeftRailWithBlueRankingRefetchSection_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometHomeLeftRailWithBlueRankingRefetchSection_user",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_switching_to_additional_profile",
          storageKey: null,
        },
        {
          alias: "first_profile",
          args: [{ kind: "Literal", name: "first", value: 1 }],
          concreteType: "UserProfileSwitcherEligibleProfilesConnection",
          kind: "LinkedField",
          name: "profile_switcher_eligible_profiles",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ProfileSwitcherEligibleProfile",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "profile",
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
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "height", value: 36 },
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
                        { kind: "Literal", name: "width", value: 36 },
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
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: "profile_switcher_eligible_profiles(first:1)",
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
  "CometHomeLeftRailWithBlueRanking_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Literal", name: "environment", value: "COMET" },
        b = { kind: "Literal", name: "query_source", value: "BOOKMARKS_LIST" },
        c = { kind: "Literal", name: "first", value: 5 },
        d = {
          kind: "Variable",
          name: "sections",
          variableName: "shortcutBookmarksSections",
        },
        e = {
          alias: null,
          args: null,
          concreteType: "FolderBookmarksEdge",
          kind: "LinkedField",
          name: "edges",
          plural: !0,
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
        f = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "count",
            storageKey: null,
          },
          e,
        ],
        g = { kind: "Literal", name: "sections", value: ["GROUP"] },
        h = {
          kind: "Variable",
          name: "first",
          variableName: "numExploreBookmarks",
        },
        i = {
          kind: "Variable",
          name: "sections",
          variableName: "exploreBookmarksSections",
        };
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "exploreBookmarksSections",
          },
          { defaultValue: 8, kind: "LocalArgument", name: "first" },
          { kind: "RootArgument", name: "numExploreBookmarks" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "shortcutBookmarksSections",
          },
          {
            defaultValue: !0,
            kind: "LocalArgument",
            name: "shouldNotRenderCommunitiesSection",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometHomeLeftRailWithBlueRanking_viewer",
        selections: [
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "actor",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometHomeLeftRailWithBlueRankingRefetchSection_user",
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "actor",
          },
          {
            alias: "comet_classic_identity",
            args: [{ kind: "Literal", name: "folder", value: "IDENTITY" }],
            concreteType: "FolderBookmark",
            kind: "LinkedField",
            name: "bookmark_folder",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  a,
                  { kind: "Literal", name: "first", value: 1 },
                  b,
                  { kind: "Literal", name: "sections", value: ["USER"] },
                ],
                concreteType: "FolderBookmarksConnection",
                kind: "LinkedField",
                name: "bookmarks",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "FolderBookmarksEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Bookmark",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometFolderBookmarkListItem_bookmark",
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "has_user_hidden",
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
                storageKey:
                  'bookmarks(environment:"COMET",first:1,query_source:"BOOKMARKS_LIST",sections:["USER"])',
              },
            ],
            storageKey: 'bookmark_folder(folder:"IDENTITY")',
          },
          {
            alias: "shortcut_bookmarks",
            args: [{ kind: "Literal", name: "folder", value: "FAVORITES" }],
            concreteType: "FolderBookmark",
            kind: "LinkedField",
            name: "bookmark_folder",
            plural: !1,
            selections: [
              {
                alias: "shortcut_bookmark",
                args: [a, c, b, d],
                concreteType: "FolderBookmarksConnection",
                kind: "LinkedField",
                name: "bookmarks",
                plural: !1,
                selections: f,
                storageKey: null,
              },
              {
                args: [c, d],
                kind: "FragmentSpread",
                name: "CometHomeLeftRailWithBlueRankingRefetchSection_folderBookmark",
              },
            ],
            storageKey: 'bookmark_folder(folder:"FAVORITES")',
          },
          {
            condition: "shouldNotRenderCommunitiesSection",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: "community_bookmarks",
                args: [{ kind: "Literal", name: "folder", value: "GROUPS" }],
                concreteType: "FolderBookmark",
                kind: "LinkedField",
                name: "bookmark_folder",
                plural: !1,
                selections: [
                  {
                    alias: "community_bookmark",
                    args: [a, c, b, g],
                    concreteType: "FolderBookmarksConnection",
                    kind: "LinkedField",
                    name: "bookmarks",
                    plural: !1,
                    selections: f,
                    storageKey:
                      'bookmarks(environment:"COMET",first:5,query_source:"BOOKMARKS_LIST",sections:["GROUP"])',
                  },
                  {
                    args: [c, g],
                    kind: "FragmentSpread",
                    name: "CometHomeLeftRailWithBlueRankingRefetchSection_folderBookmark",
                  },
                ],
                storageKey: 'bookmark_folder(folder:"GROUPS")',
              },
            ],
          },
          {
            alias: "explore_bookmarks",
            args: [{ kind: "Literal", name: "folder", value: "PRODUCT" }],
            concreteType: "FolderBookmark",
            kind: "LinkedField",
            name: "bookmark_folder",
            plural: !1,
            selections: [
              {
                alias: "explore_bookmark",
                args: [a, h, b, i],
                concreteType: "FolderBookmarksConnection",
                kind: "LinkedField",
                name: "bookmarks",
                plural: !1,
                selections: [e],
                storageKey: null,
              },
              {
                args: [h, i],
                kind: "FragmentSpread",
                name: "CometHomeLeftRailWithBlueRankingRefetchSection_folderBookmark",
              },
            ],
            storageKey: 'bookmark_folder(folder:"PRODUCT")',
          },
        ],
        type: "Viewer",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometEditShortcutsDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3002159649907536",
        metadata: {},
        name: "CometEditShortcutsDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "SPFCometConnectionsDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5396815977060032",
        metadata: {},
        name: "SPFCometConnectionsDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometIsReloadingCurrentRoute",
  ["CometRouterLoadingContextInternals_DO_NOT_USE", "getTopMostRoute", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useState;
    function a(a) {
      var b = j(!1),
        d = b[0],
        e = b[1],
        f = h(c("CometRouterLoadingContextInternals_DO_NOT_USE"));
      i(
        function () {
          var b = f(function (b, d) {
            e(
              b.loading === !0 &&
                (b == null ? void 0 : b.nextState) != null &&
                c("getTopMostRoute")(b.nextState).tracePolicy === a &&
                c("getTopMostRoute")(d).tracePolicy === a
            );
          });
          return function () {
            b();
          };
        },
        [f, a]
      );
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometBookmarkListItem.react",
  [
    "ImageIconSource",
    "TetraAccessoryListCell.react",
    "mergeRefs",
    "react",
    "requireDeferred",
    "useBookmarkFalcoFullViewLogger",
    "useMinifiedProductAttribution",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = c("requireDeferred")("WebBookmarkClickFalcoEvent").__setRef(
        "CometBookmarkListItem.react"
      );
    a = function (a, b) {
      var d = a.addOnPrimary,
        e = a.addOnSecondary,
        f = a.bookmarkImage;
      f = f === void 0 ? null : f;
      var g = a.bookmarkSection,
        k = a.bookmarkStyle,
        l = a.iconImage,
        m = a.id,
        n = a.index,
        o = a.linkProps,
        p = a.meta,
        q = a.metaColor,
        r = a.metaLineLimit,
        s = a.name,
        t = a.onHoverIn,
        u = a.onHoverOut,
        v = a.onPress,
        w = a.selected,
        x = a.testid;
      x = x === void 0 ? "" : x;
      var y = a.totalShortcutCount;
      x = a.tracking;
      var z = x === void 0 ? null : x,
        A = c("useMinifiedProductAttribution")();
      a = function (a) {
        v && v(a),
          j.onReady(function (a) {
            var b = n == null ? void 0 : n.toString(),
              c = y == null ? void 0 : y.toString();
            a.log(function () {
              return {
                interface_override: "comet_www",
                item_rank: b,
                pa: A,
                shortcut_count: c,
                surface: "comet_lhc",
                tracking_data: z,
              };
            });
          });
      };
      var B = c("useBookmarkFalcoFullViewLogger")(z, n, y, "comet_lhc");
      x = i(
        function () {
          return c("mergeRefs")(b, B);
        },
        [B, b]
      );
      d = d;
      f != null
        ? (d = {
            shape: "circle",
            size: 36,
            source: { uri: f },
            type: "profile-photo",
          })
        : l != null &&
          (d = { icon: new (c("ImageIconSource"))(l, 36, 36), type: "icon" });
      if (d == null) return null;
      f = g != null ? g + "_" : "";
      return h.jsx(
        "li",
        {
          className: k,
          "data-testid": void 0,
          ref: x,
          children: h.jsx(c("TetraAccessoryListCell.react"), {
            addOnPrimary: d,
            addOnSecondary: e,
            headline: s,
            headlineLineLimit: 2,
            level: 4,
            linkProps: o,
            meta: p,
            metaColor: q,
            metaLineLimit: r,
            onHoverIn: t,
            onHoverOut: u,
            onPress: a,
            selected: w,
            testid: void 0,
          }),
        },
        m
      );
    };
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometBookmarkListItemWrapper.react",
  [
    "fbt",
    "Actor",
    "CometBookmarkListItem.react",
    "CometBookmarkListItemWrapper_bookmark.graphql",
    "CometBookmarksAddOnUtils",
    "CometInteractionTracingModuleProfileSwitchingTtiQPLEvent",
    "CometRelay",
    "ProfileCometContext",
    "ProfilePlusAdminActivitiesFalcoEvent",
    "XCometProfileControllerRouteBuilder",
    "qex",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "useCometInteractionTracing",
    "useCometProfileSwitchWithLogoutMutation",
    "useCurrentRoute",
    "useProfileCometErrorDialog_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useContext,
      l = c("requireDeferred")("logCometBookmarkListItemPressed").__setRef(
        "CometBookmarkListItemWrapper.react"
      );
    function a(a, e) {
      var f = a.addOnSecondary,
        g = a.bookmark,
        m = a.bookmarkSection,
        n = a.bookmarkStyle,
        o = a.hasBadgeCount,
        p = a.index,
        q = a.meta,
        r = a.metaColor,
        s = a.metaLineLimit,
        t = a.onExpand;
      a = a.totalShortcutCount;
      g = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometBookmarkListItemWrapper_bookmark.graphql")),
        g
      );
      var u = k(c("ProfileCometContext")),
        v = u.viewerID;
      u = c("useProfileCometErrorDialog_DEPRECATED")(
        h._("Failed to switch profiles")
      );
      var w = u[0],
        x = c("useCometInteractionTracing")(
          c("CometInteractionTracingModuleProfileSwitchingTtiQPLEvent"),
          "responsive",
          "INTERACTION"
        );
      u = g.additonal_profile_id;
      var y = g.bookmark_icon_image,
        z = g.has_user_hidden,
        A = g.image,
        B = g.is_additonal_profile,
        C = g.is_news_feed,
        D = g.name,
        E = g.section,
        F = g.tracking,
        G = g.url,
        H = g.with_core_app_access,
        I = (u = u) != null ? u : "";
      u = c("XCometProfileControllerRouteBuilder").buildURL({
        id: I,
        show_switched_toast: !0,
      });
      var J = c("useCometProfileSwitchWithLogoutMutation")(I, u, function (a) {
        w(a);
      });
      u = d("Actor").useActor();
      u = u[0];
      var K = c("useCurrentRoute")();
      K = K == null ? void 0 : K.tabKey;
      if (z === !0) return null;
      z = d("CometBookmarksAddOnUtils").getBookmarkAddOnPrimary(
        y == null ? void 0 : y.uri,
        A == null ? void 0 : A.uri,
        A == null ? void 0 : A.is_silhouette,
        E
      );
      if (z == null || D == null || (G == null && f == null)) return null;
      y = C === !0 && K === "home";
      A = null;
      f = null;
      if (F != null)
        try {
          C = JSON.parse(F);
          A = C == null ? void 0 : C.bmid;
          f = C == null ? void 0 : C.bookmark_type;
        } catch (a) {
          c("recoverableViolation")(
            'Unable to parse bookmark tracking field "' + F + '", ' + a,
            "comet_infra"
          );
        }
      var L =
          g == null ? void 0 : (K = g.bookmarked_node) == null ? void 0 : K.id,
        M = function () {
          c("ProfilePlusAdminActivitiesFalcoEvent").log(function () {
            return {
              additional_profile_id: I,
              event: "click",
              event_target: "direct_switching_profile_shortcuts",
              surface: "pages_shortcuts",
            };
          });
        };
      g = (C = c("qex")._("567")) != null ? C : !1;
      K =
        B === !0 && H === !0 && u !== I && g
          ? {
              onPress: function () {
                M(),
                  x(function (a) {
                    a.addMetadata(
                      "origin",
                      "direct_switching_profile_shortcuts"
                    ),
                      a.addMetadata("landing_surface", "profile"),
                      a.addMetadata("originating_user_id", v),
                      J();
                  });
              },
            }
          : {
              linkProps: {
                passthroughProps: { ref: "bookmark" },
                productAttribution: {
                  bookmark_id: A,
                  bookmark_type_name: f,
                  tap_point: "tap_bookmark",
                },
                url: G,
              },
              onPress:
                G == null
                  ? t
                  : function () {
                      l.onReadyImmediately(function (a) {
                        return a(E, G, L, o);
                      });
                    },
            };
      return j.jsx(
        c("CometBookmarkListItem.react"),
        babelHelpers["extends"](
          {
            addOnPrimary: z,
            bookmarkSection: m,
            bookmarkStyle: n,
            index: p,
            meta: q,
            metaColor: r,
            metaLineLimit: s,
            name: D,
            ref: e,
            selected: y,
            testid: void 0,
            totalShortcutCount: a,
            tracking: F,
          },
          K
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = j.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometFolderBookmarkListItem.react",
  [
    "ix",
    "CometBadge.react",
    "CometBookmarkListItemWrapper.react",
    "CometFolderBookmarkListItem_bookmark.graphql",
    "CometRelay",
    "CometTextWithBadge.react",
    "CometTextWithEntitiesRelay.react",
    "emptyFunction",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useRef;
    function a(a) {
      var e,
        f = a.badgeStyle,
        g = a.bookmark,
        m = a.bookmarkSection,
        n = a.bookmarkStyle,
        o = a.index,
        p = a.pushBookmarkRef;
      a = a.totalShortcutCount;
      g = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometFolderBookmarkListItem_bookmark.graphql")),
        g
      );
      var q = l(null);
      k(
        function () {
          q.current != null && p != null && p(q.current);
        },
        [p]
      );
      var r = void 0,
        s = void 0,
        t = void 0,
        u = 1;
      e = (e = g.unread_count) != null ? e : 0;
      var v = g.unread_count_string,
        w = g == null ? void 0 : g.context_sentence,
        x;
      w != null
        ? ((t = "secondary"),
          (s = j.jsx(c("CometTextWithEntitiesRelay.react"), {
            textWithEntities: w,
          })),
          (u = 2))
        : (v != null || e > 0) &&
          (f === "dot"
            ? ((r = {
                color: "negative",
                icon: d("fbicon")._(h("1147507"), 8),
                type: "icon",
              }),
              (x = !0))
            : f === "string" &&
              v != null &&
              ((t = "highlight"),
              (s = j.jsx(c("CometTextWithBadge.react"), {
                badgeBefore: j.jsx(c("CometBadge.react"), {
                  isProfileBadge: !0,
                  size: 7,
                }),
                children: v,
              })),
              (x = !0)));
      return j.jsx(c("CometBookmarkListItemWrapper.react"), {
        addOnSecondary: r,
        bookmark: g,
        bookmarkSection: m,
        bookmarkStyle: n,
        hasBadgeCount: x === !0 ? v != null || e > 0 : !1,
        index: o,
        meta: s,
        metaColor: t,
        metaLineLimit: u,
        onExpand: c("emptyFunction"),
        ref: q,
        totalShortcutCount: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SPFCometConnectionsDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "SPFCometConnectionsDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.followLocation;
        return {
          queries: {
            queryReference: {
              parameters: b("SPFCometConnectionsDialogQuery$Parameters"),
              variables: {
                follow_location: a,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "SPFCometConnectionsDialog.react"
      ).__setRef("SPFCometConnectionsDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedEndOfFeedMessage.react",
  [
    "fbt",
    "CometCard.react",
    "CometEntryPointDialogTrigger.react",
    "CometVisualCompletionAttributes",
    "GraphQLGender",
    "NullStateGeneral",
    "SPFCometConnectionsDialog.entrypoint",
    "TetraButton.react",
    "TetraNullState.react",
    "XCometFriendingControllerRouteBuilder",
    "gkx",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("gkx")("678680"),
      k = "ADDITIONAL_PROFILE_END_OF_NEWSFEED_UNIT";
    function a(a) {
      var b = a.canHaveFriends;
      b = b === void 0 ? !0 : b;
      var d = a.friendsCount,
        e = a.isError,
        f = a.isTailLoadError,
        g = a.onReload,
        l = a.unstable_fbOnlyMessage;
      a = a.viewerName;
      var m = h._("Something Went Wrong"),
        n =
          g != null
            ? h._(
                "This may be because of a technical error that we're working to get fixed. Try reloading this page."
              )
            : h._(
                "This may be because of a technical error that we're working to get fixed."
              ),
        o = c("NullStateGeneral");
      f =
        g != null
          ? i.jsx(c("TetraButton.react"), {
              label: f === !0 ? h._("Try again") : h._("Reload Page"),
              onPress: g,
            })
          : void 0;
      !e &&
        c("gkx")("960072") &&
        d != null &&
        d < 60 &&
        ((m = h._("No More Posts")),
        (n = h._("Add more friends to see more posts in your News Feed.")),
        (o = null),
        (f = i.jsx(c("TetraButton.react"), {
          label: h._("Find Friends"),
          linkProps: {
            passthroughProps: { ref: "EMPTY_FEED" },
            url: c("XCometFriendingControllerRouteBuilder").buildURL({}),
          },
        })));
      if (!e && !b) {
        a == null &&
          c("recoverableViolation")(
            "viewer name cannot be null",
            "profile_plus"
          );
        m = h._("Follow More Public Figures and Others");
        n = h._(
          {
            "*": "You\u2019ll see more useful content here by following public figures and others that are relevant to {actor}.",
          },
          [
            h._name(
              "actor",
              (g = a) != null ? g : null,
              new (c("GraphQLGender"))("NEUTER").toIntlVariationsEnum()
            ),
          ]
        );
        o = null;
        f = i.jsx(c("CometEntryPointDialogTrigger.react"), {
          dialogEntryPoint: c("SPFCometConnectionsDialog.entrypoint"),
          otherProps: { followLocation: k, title: h._("Suggested for You") },
          preloadParams: { followLocation: k },
          children: function (a) {
            return i.jsx(c("TetraButton.react"), {
              label: h._("See Suggestions"),
              onPress: a,
            });
          },
        });
      }
      return i.jsx(
        "div",
        babelHelpers["extends"](
          { className: "sjgh65i0", role: "article" },
          c("CometVisualCompletionAttributes").IGNORE_LATE_MUTATION,
          {
            children: i.jsxs(c("CometCard.react"), {
              background: "white",
              dropShadow: 1,
              children: [
                i.jsx(c("TetraNullState.react"), {
                  action: f,
                  body: n,
                  headline: m,
                  icon: o,
                }),
                l != null && j
                  ? i.jsx("div", {
                      className: "gm7ombtx jbae33se gpl4oick bjjx79mm",
                      children: l,
                    })
                  : null,
              ],
            }),
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useGhlTestUBT",
  ["ghlTestUBT", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    function a() {
      var a = i(!1),
        b = a[0],
        d = a[1];
      h(function () {
        c("ghlTestUBT")(d);
      }, []);
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometBookmarksHeader.react",
  ["fbt", "CometUnitHeader.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.canEdit,
        d = a.editHovered,
        e = a.onActionPress;
      a = a.sectionHeader;
      return i.jsx(c("CometUnitHeader.react"), {
        action: b === !0 ? h._("Edit") : null,
        actionAccessibilityLabel: h._("Edit Shortcuts"),
        actionHidden: !d,
        headline: a,
        headlineColor: "secondary",
        level: 3,
        onActionPress: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometClassicHomeRailSeparator.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", {
        className: "dhix69tm oygrvhab wkznzc2l aov4n071 s1tcr66n",
        role: "separator",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometEditShortcutsDialog.entrypoint",
  [
    "CometEditShortcutsDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            myQueryReference: {
              parameters: c("CometEditShortcutsDialogQuery$Parameters"),
              variables: { scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometEditShortcutsDialog.react"
      ).__setRef("CometEditShortcutsDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeLeftRailBookmarkRefetchListCell.react",
  ["fbt", "ix", "TetraListCell.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.isLoadingNext;
      b = b === void 0 ? !1 : b;
      var e = a.onPress,
        f = a.testid;
      f = a.type;
      var g;
      a = "";
      switch (f) {
        case "more":
          g = b
            ? { type: "contained-progress-ring-indeterminate" }
            : {
                icon: d("fbicon")._(i("492454"), 20),
                size: 36,
                type: "contained-icon",
              };
          a = h._("See More");
          break;
        case "less":
          (g = {
            icon: d("fbicon")._(i("505565"), 20),
            size: 36,
            type: "contained-icon",
          }),
            (a = h._("See Less"));
      }
      return j.jsx(c("TetraListCell.react"), {
        addOnPrimary: g,
        headline: a,
        headlineLineLimit: 1,
        level: 4,
        onPress: e,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeLeftRailProfilePlusShortcutsListItem.react",
  [
    "fbt",
    "Actor",
    "CometInteractionTracingModuleProfileSwitchingTtiQPLEvent",
    "ProfilePlusAdminActivitiesFalcoEvent",
    "TetraAccessoryListCell.react",
    "XCometProfileControllerRouteBuilder",
    "react",
    "useCometInteractionTracing",
    "useCometProfileSwitchWithLogoutMutation",
    "useProfileCometErrorDialog_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.profileID,
        e = a.profileImage;
      a = a.profileName;
      var f = d("Actor").useActor(),
        g = f[0],
        j = c("useCometInteractionTracing")(
          c("CometInteractionTracingModuleProfileSwitchingTtiQPLEvent"),
          "responsive",
          "INTERACTION"
        );
      f = c("useProfileCometErrorDialog_DEPRECATED")(
        h._("Failed to switch profiles")
      );
      var k = f[0];
      f = c("XCometProfileControllerRouteBuilder").buildURL({
        id: b,
        show_switched_toast: !0,
      });
      var l = c("useCometProfileSwitchWithLogoutMutation")(b, f, function (a) {
        k(a);
      });
      return i.jsx(
        c("TetraAccessoryListCell.react"),
        {
          addOnPrimary: {
            shape: "circle",
            size: 36,
            source: { uri: e },
            type: "profile-photo",
          },
          headline: a,
          headlineLineLimit: 2,
          level: 4,
          metaLineLimit: 1,
          onPress: function () {
            c("ProfilePlusAdminActivitiesFalcoEvent").log(function () {
              return {
                additional_profile_id: b,
                event: "click",
                event_target: "direct_switching_primary_profile_shortcut",
                surface: "pages_shortcuts",
              };
            }),
              j(function (a) {
                a.addMetadata(
                  "origin",
                  "direct_switching_primary_profile_shortcut"
                ),
                  a.addMetadata("landing_surface", "newsfeed"),
                  a.addMetadata("originating_user_id", g),
                  l();
              });
          },
        },
        b
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeLeftRailWithBlueRankingRefetchSection.react",
  [
    "CometBookmarksHeader.react",
    "CometClassicHomeRailSeparator.react",
    "CometEditShortcutsDialog.entrypoint",
    "CometEntryPointDialogTrigger.react",
    "CometFolderBookmarkListItem.react",
    "CometHomeLeftRailBookmarkRefetchListCell.react",
    "CometHomeLeftRailProfilePlusShortcutsListItem.react",
    "CometHomeLeftRailWithBlueRankingRefetchSection_folderBookmark.graphql",
    "CometHomeLeftRailWithBlueRankingRefetchSection_user.graphql",
    "CometListCellGlimmer.react",
    "CometRelay",
    "FocusManager",
    "qex",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useEffect,
      m = e.useRef,
      n = e.useState,
      o =
        h !== void 0
          ? h
          : (h = b(
              "CometHomeLeftRailWithBlueRankingRefetchSection_user.graphql"
            )),
      p = { header: { paddingBottom: "sj5x9vvc" } };
    function q(a, b, d, e, f, g) {
      var h = a.node;
      if (!h) return null;
      if (
        (a == null
          ? void 0
          : (a = a.node) == null
          ? void 0
          : a.has_user_hidden) === !0
      )
        return null;
      a = h.id;
      var i = [];
      e = j.jsx(
        c("CometFolderBookmarkListItem.react"),
        {
          badgeStyle: e,
          bookmark: h,
          bookmarkSection: d,
          bookmarkStyle: c("stylex")(i),
          index: b,
          pushBookmarkRef: f,
          totalShortcutCount: g,
        },
        a
      );
      return e;
    }
    q.displayName = q.name + " [from " + f.id + "]";
    var r = 1e3;
    function a(a) {
      var e,
        f = a.badgeStyle,
        g = a.folderBookmark,
        h = a.initialCount;
      h = h === void 0 ? 4 : h;
      var s = a.section,
        t = a.sectionHeader,
        u = a.totalShortcutCount,
        v = a.user$key;
      a = a.withSeparator;
      a = a === void 0 ? !0 : a;
      var w = n(!1),
        x = w[0],
        y = w[1];
      w = n(!1);
      var z = w[0],
        A = w[1];
      w = n(!1);
      var B = w[0];
      w = w[1];
      g = d("CometRelay").usePaginationFragment(
        i !== void 0
          ? i
          : (i = b(
              "CometHomeLeftRailWithBlueRankingRefetchSection_folderBookmark.graphql"
            )),
        g
      );
      var C = g.data,
        D = g.hasNext,
        E = g.isLoadingNext,
        F = g.loadNext;
      g = d("CometRelay").useFragment(o, v);
      v = g == null ? void 0 : g.is_switching_to_additional_profile;
      g = (
        g == null
          ? void 0
          : (e = g.first_profile) == null
          ? void 0
          : e.nodes.length
      )
        ? g == null
          ? void 0
          : (e = g.first_profile) == null
          ? void 0
          : e.nodes[0].profile
        : null;
      var G = s === "shortcuts" || s === "communities";
      e = C == null ? void 0 : C.id;
      var H = m(null),
        I = m(null);
      l(
        function () {
          var a = H.current;
          x && a != null && d("FocusManager").focusElement(a);
        },
        [x]
      );
      var J = m([]),
        K = k(
          function (a) {
            J.current.push(a);
          },
          [J]
        );
      if (e == null) return null;
      var L = [];
      C =
        (C == null ? void 0 : (C = C.bookmarks) == null ? void 0 : C.edges) ||
        [];
      if (x && s === "explore") {
        var M;
        M = C.slice(0, (M = I.current) != null ? M : h);
        I = C.slice((I = I.current) != null ? I : h);
        I.sort(function (a, b) {
          var c;
          if (
            (a == null ? void 0 : (c = a.node) == null ? void 0 : c.name) ==
              null &&
            (b == null ? void 0 : (c = b.node) == null ? void 0 : c.name) ==
              null
          )
            return 0;
          if (
            (a == null ? void 0 : (c = a.node) == null ? void 0 : c.name) ==
            null
          )
            return 1;
          return (b == null
            ? void 0
            : (c = b.node) == null
            ? void 0
            : c.name) == null
            ? -1
            : a == null
            ? void 0
            : (c = a.node) == null
            ? void 0
            : c.name.localeCompare(
                b == null ? void 0 : (a = b.node) == null ? void 0 : a.name
              );
        });
        C = M.concat(I);
      }
      var N = x ? C.length : Math.min(h, C.length);
      if (B)
        L.push(
          j.jsx(
            c("CometListCellGlimmer.react"),
            { imageSize: 36, imageStyle: "roundedRect", numberOfItems: N },
            e + "_glimmer"
          )
        );
      else {
        M = [];
        if (t !== null && v === !0 && g !== null && c("qex")._("567") === !0) {
          v = (I = g == null ? void 0 : g.id) != null ? I : "";
          I =
            (I =
              g == null
                ? void 0
                : (I = g.profile_picture) == null
                ? void 0
                : I.uri) != null
              ? I
              : "";
          g = (g = g == null ? void 0 : g.name) != null ? g : "";
          L.push(
            j.jsx(
              c("CometHomeLeftRailProfilePlusShortcutsListItem.react"),
              { profileID: v, profileImage: I, profileName: g },
              v + "_underlying_profile"
            )
          );
        }
        for (var I = 0; I < N; I++) {
          v = q(C[I], I, s, f, K, (g = u) != null ? g : void 0);
          v && M.push(v);
        }
        M.length && L.push(j.jsx("ul", { children: M }, "list"));
      }
      if (L.length > 0) {
        if (t != null) {
          g = j.jsx(c("CometEntryPointDialogTrigger.react"), {
            dialogEntryPoint: c("CometEditShortcutsDialog.entrypoint"),
            otherProps: { numberShortcuts: x ? r : h, setIsRefetching: w },
            preloadParams: {},
            children: function (a) {
              return j.jsx(c("CometBookmarksHeader.react"), {
                canEdit: G,
                editHovered: z,
                onActionPress: a,
                sectionHeader: t,
              });
            },
          });
          L.unshift(
            j.jsx(
              "div",
              { className: c("stylex")(p.header), children: g },
              e + "_header"
            )
          );
        }
        if (!B)
          if (x)
            L.push(
              j.jsx(
                c("CometHomeLeftRailBookmarkRefetchListCell.react"),
                {
                  onPress: function () {
                    return y(!1);
                  },
                  type: "less",
                },
                e + "_see_less"
              )
            );
          else if (
            (E || D || N < C.length) &&
            (s !== "shortcuts" || (u != null && u > 5))
          ) {
            v = G ? null : { testid: "bookmark_seemore_explore" };
            L.push(
              j.createElement(
                c("CometHomeLeftRailBookmarkRefetchListCell.react"),
                babelHelpers["extends"]({}, v, {
                  isLoadingNext: E,
                  key: e + "_see_more",
                  onPress: function () {
                    D
                      ? F(r - N, {
                          onComplete: function () {
                            return y(!0);
                          },
                        })
                      : y(!0);
                    var a = 0,
                      b = J.current;
                    for (a; a < b.length; a++)
                      if (window.getComputedStyle(b[a]).display === "none") {
                        H.current = b[a].querySelector("a");
                        break;
                      }
                  },
                  type: "more",
                })
              )
            );
          }
        a &&
          L.push(
            j.jsx(c("CometClassicHomeRailSeparator.react"), {}, e + "_divider")
          );
      }
      return j.jsx("div", {
        onMouseEnter: function () {
          return G && A(!0);
        },
        onMouseLeave: function () {
          return G && A(!1);
        },
        children: L,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeLeftRailWithBlueRanking.react",
  [
    "fbt",
    "CometFolderBookmarkListItem.react",
    "CometHomeLeftRailWithBlueRankingRefetchSection.react",
    "CometHomeLeftRailWithBlueRanking_viewer.graphql",
    "CometLegalFooter.react",
    "CometListCellGlimmer.react",
    "CometPlaceholder.react",
    "CometProductAttributionContextProvider.react",
    "CometRelay",
    "CometVisualCompletionAttributes",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = 9;
    function l(a, b, c, d) {
      var e,
        f,
        g = a + b;
      if (b === 0 || a === 0)
        (e = e === 0 ? 0 : Math.min(b, 5)),
          (f = f === 0 ? 0 : Math.min(a, 5)),
          (c = c != null ? Math.max(c - (f + e), d) : d);
      else if (g < 4) (c = k - g), (e = b), (f = a);
      else {
        e = Math.min(b, 2);
        f = Math.min(a, 2);
        d = e + f;
        e < b && (d += 1);
        f < a && (d += 1);
        c = k - d;
      }
      return { communityCount: e, exploreCount: c, shortcutCount: f };
    }
    function m(a, b, c) {
      a = (a = a) != null ? a : 5;
      b = b != null ? Math.max(b - a, c) : c;
      return { exploreCount: b, shortcutCount: a };
    }
    function a(a) {
      var e, f;
      a = a.viewer;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometHomeLeftRailWithBlueRanking_viewer.graphql")),
        a
      );
      var g = a == null ? void 0 : a.actor;
      e =
        a == null
          ? void 0
          : (e = a.comet_classic_identity) == null
          ? void 0
          : (e = e.bookmarks) == null
          ? void 0
          : e.edges;
      var k =
        a == null
          ? void 0
          : (f = a.shortcut_bookmarks) == null
          ? void 0
          : (f = f.shortcut_bookmark) == null
          ? void 0
          : f.count;
      f =
        e == null
          ? []
          : e
              .map(function (a) {
                a = a.node;
                if (!a || a.has_user_hidden === !0) return null;
                var b = a.id;
                return j.jsx(
                  c("CometFolderBookmarkListItem.react"),
                  {
                    badgeStyle: "dot",
                    bookmark: a,
                    index: 0,
                    totalShortcutCount: (a = k) != null ? a : void 0,
                  },
                  b
                );
              })
              .filter(Boolean);
      e = f.length ? j.jsx("ul", { children: f }) : null;
      f = null;
      var n = null,
        o = null,
        p = a == null ? void 0 : a.shortcut_bookmarks,
        q = a == null ? void 0 : a.community_bookmarks,
        r = a == null ? void 0 : a.explore_bookmarks,
        s = 0,
        t = 0,
        u = 0,
        v = c("gkx")("2029639") ? 5 : 4;
      if (q != null) {
        var w;
        w = l(
          (w =
            p == null
              ? void 0
              : (w = p.shortcut_bookmark) == null
              ? void 0
              : w.edges.length) != null
            ? w
            : 2,
          (w =
            q == null
              ? void 0
              : (w = q.community_bookmark) == null
              ? void 0
              : w.edges.length) != null
            ? w
            : 2,
          r == null
            ? void 0
            : (w = r.explore_bookmark) == null
            ? void 0
            : w.edges.length,
          v
        );
      } else {
        var x;
        w = m(
          p == null
            ? void 0
            : (x = p.shortcut_bookmark) == null
            ? void 0
            : x.edges.length,
          r == null
            ? void 0
            : (x = r.explore_bookmark) == null
            ? void 0
            : x.edges.length,
          v
        );
      }
      s = w.exploreCount;
      u = (x = w.communityCount) != null ? x : 0;
      t = w.shortcutCount;
      p != null &&
        ((f = j.jsx(c("CometPlaceholder.react"), {
          fallback: j.jsx(
            c("CometListCellGlimmer.react"),
            { imageSize: 36, imageStyle: "roundedRect", numberOfItems: 4 },
            "shortcut_glimmer"
          ),
          children: j.jsx(
            c("CometHomeLeftRailWithBlueRankingRefetchSection.react"),
            {
              badgeStyle: "string",
              folderBookmark: p,
              initialCount: t,
              section: "shortcuts",
              sectionHeader: h._("Your Shortcuts"),
              totalShortcutCount: k,
              user$key: g,
              withSeparator: !1,
            }
          ),
        })),
        r != null &&
          (n = j.jsx(c("CometPlaceholder.react"), {
            fallback: j.jsx(
              c("CometListCellGlimmer.react"),
              { imageSize: 36, imageStyle: "roundedRect", numberOfItems: 4 },
              "shortcut_glimmer"
            ),
            children: j.jsx(
              c("CometHomeLeftRailWithBlueRankingRefetchSection.react"),
              {
                badgeStyle: "string",
                folderBookmark: r,
                initialCount: s,
                section: "explore",
                totalShortcutCount: k,
                withSeparator: t !== 0 || u !== 0,
              }
            ),
          })));
      if (q != null) {
        w =
          a == null
            ? void 0
            : (v = a.community_bookmarks) == null
            ? void 0
            : (x = v.community_bookmark) == null
            ? void 0
            : x.count;
        o = j.jsx(c("CometPlaceholder.react"), {
          fallback: j.jsx(
            c("CometListCellGlimmer.react"),
            { imageSize: 36, imageStyle: "roundedRect", numberOfItems: 4 },
            "shortcut_glimmer"
          ),
          children: j.jsx(
            c("CometHomeLeftRailWithBlueRankingRefetchSection.react"),
            {
              badgeStyle: "string",
              folderBookmark: q,
              initialCount: u,
              section: "communities",
              sectionHeader: h._("Communities"),
              totalShortcutCount: w,
              user$key: g,
              withSeparator: t !== 0,
            }
          ),
        });
      }
      return j.jsxs(
        "div",
        babelHelpers["extends"](
          { className: "sn7ne77z buofh1pr cbu4d94t j83agx80" },
          c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
          {
            children: [
              j.jsx(c("CometProductAttributionContextProvider.react"), {
                value: "bookmarks",
                children: j.jsxs("div", {
                  className: "buofh1pr",
                  "data-testid": void 0,
                  children: [
                    e,
                    n,
                    o &&
                      j.jsx(c("CometProductAttributionContextProvider.react"), {
                        value: "communities",
                        children: o,
                      }),
                    f &&
                      j.jsx(c("CometProductAttributionContextProvider.react"), {
                        value: "shortcuts",
                        children: f,
                      }),
                  ],
                }),
              }),
              j.jsx("div", {
                className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi pfnyh3mw",
                children: j.jsx(c("CometLegalFooter.react"), {}),
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometClassicHomeLeftRailContainer.react",
  [
    "CometClassicHomeLeftRailContainerQuery.graphql",
    "CometDensityAwarenessContext",
    "CometHomeLeftRailWithBlueRanking.react",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.leftRailContainerQueryReference;
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("CometClassicHomeLeftRailContainerQuery.graphql")),
        a
      );
      a = a.viewer;
      return i.jsx(c("CometDensityAwarenessContext").Provider, {
        value: !0,
        children: i.jsx(c("CometHomeLeftRailWithBlueRanking.react"), {
          viewer: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeContentAnimationContainer.react",
  [
    "CometFeedGlimmer.react",
    "clearTimeout",
    "cr:683059",
    "react",
    "scrollTo",
    "setTimeout",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useEffect,
      j = e.useRef,
      k = e.useState,
      l = 500,
      m = 1500;
    function a(a) {
      var d = a.children,
        e = a.isPending,
        f = j(null);
      a = k(!1);
      var g = a[0],
        n = a[1];
      a = k(!1);
      var o = a[0],
        p = a[1];
      i(
        function () {
          var a = f.current;
          e &&
            a != null &&
            (p(!0),
            c("setTimeout")(function () {
              var a = Math.max(window.innerHeight, m);
              window.scrollY > a && c("scrollTo")({ top: a });
              c("scrollTo")({ behavior: "smooth", top: 0 });
              b("cr:683059") &&
                (b("cr:683059").setInitialScrollY(0),
                b("cr:683059").addAnnotation("ScrollToTop", 1));
            }, l));
        },
        [e]
      );
      i(
        function () {
          if (e !== !1 || o === !1) return;
          n(!0);
          var a = c("setTimeout")(function () {
            n(!1), p(!1);
          }, l);
          return function () {
            return c("clearTimeout")(a);
          };
        },
        [e, o]
      );
      return h.jsxs(h.Fragment, {
        children: [
          o === !0
            ? h.jsx("div", {
                className: c("stylex").dedupe(
                  {
                    "animation-duration-1": "fb9fmey5",
                    "animation-name-1": "d5opvc6r",
                    "opacity-1": "pedkr2u6",
                    "pointer-events-1": "hzruof5a",
                    "transition-duration-1": "tn0ko95a",
                    "transition-property-1": "pnx7fd3z",
                    "width-1": "k4urcfbm",
                  },
                  g ? { "opacity-1": "b5wmifdl" } : null
                ),
                children: h.jsx(c("CometFeedGlimmer.react"), {}),
              })
            : null,
          h.jsx("div", {
            className: c("stylex").dedupe(
              {
                "opacity-1": "pedkr2u6",
                "transition-duration-1": "tn0ko95a",
                "transition-property-1": "pnx7fd3z",
              },
              g ? { "opacity-1": "b5wmifdl" } : null,
              o === !0
                ? { "opacity-1": "b5wmifdl", "pointer-events-1": "hzruof5a" }
                : null
            ),
            ref: f,
            children: d,
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
  "CometHomeContentArea.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "BaseView.react",
    "CometScrollView.react",
    "gkx",
    "react",
    "useGhlTestUBT",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        content: {
          flexBasis: "pmt1y7k9",
          paddingEnd: "f7vcsfb0",
          paddingStart: "fjf4s8hc",
          "@media (max-width: 899px)": {
            paddingEnd: "b6rwyo50",
            paddingStart: "oyrvap6t",
          },
        },
        rightRail: {
          flexBasis: "o387gat7",
          flexShrink: "qbu88020",
          maxHeight: "pad24vr5",
          maxWidth: "rirtxc74",
          minHeight: "dp1hu0rb",
          minWidth: "fer614ym",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "lpgh02oy",
          top: "be9z9djy",
          "@media (max-width: 899px)": { display: "hlyrhctz" },
        },
        rightRailInner: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          maxHeight: "qowsmv63",
          minHeight: "dp1hu0rb",
        },
      };
    function a(a) {
      var b = a.children;
      a = a.rightRail;
      var d = c("useGhlTestUBT")();
      d = babelHelpers["extends"](
        {},
        d && c("gkx")("1851199") ? null : { role: "complementary" }
      );
      b = h.jsx(c("BaseRow.react"), {
        align: "center",
        expanding: !0,
        role: "main",
        xstyle: i.content,
        children: h.jsx(c("BaseRowItem.react"), { children: b }),
      });
      d = h.jsx(
        c("BaseView.react"),
        babelHelpers["extends"]({}, d, {
          xstyle: i.rightRail,
          children: h.jsx(c("BaseView.react"), {
            xstyle: i.rightRailInner,
            children: h.jsx(c("CometScrollView.react"), {
              showsHorizontalScrollIndicator: !1,
              showsVerticalScrollIndicator: !0,
              children: a,
            }),
          }),
        })
      );
      return h.jsxs(h.Fragment, { children: [b, d] });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeRightRail.react",
  [
    "CometDensityAwarenessContext",
    "CometErrorBoundary.react",
    "CometHero.react",
    "CometPagelet.react",
    "CometPlaceholder.react",
    "GHLSurfaceContainerContext",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef,
      j = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometHomeContactAndGroupContainer.react"
        ).__setRef("CometHomeRightRail.react")
      ),
      k = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometRightSideHeaderCards.react"
        ).__setRef("CometHomeRightRail.react")
      );
    function a(a) {
      var b = i(null);
      return h.jsx(c("GHLSurfaceContainerContext").Provider, {
        value: b,
        children: h.jsx(c("CometDensityAwarenessContext").Provider, {
          value: !0,
          children: h.jsx(d("CometPagelet.react").SuspenseList, {
            className: "cxgpxx05",
            name: "RightRail",
            ref: b,
            revealOrder: "forwards",
            children: [
              h.jsx(k, {
                rightSideHeaderCardsQueryReference:
                  a.rightSideHeaderCardsQueryReference,
              }),
              h.jsxs(h.Fragment, {
                children: [
                  h.jsx(c("CometHero.react"), {
                    description: "RightRailContacts",
                  }),
                  h.jsx(c("CometErrorBoundary.react"), {
                    children: h.jsx(j, {
                      homeContactGroupsQueryReference:
                        a.homeContactGroupsQueryReference,
                      homeContactsQueryReference: a.homeContactsQueryReference,
                    }),
                  }),
                ],
              }),
            ].map(function (a, b) {
              return h.jsx(
                c("CometPlaceholder.react"),
                { fallback: null, name: "RightRail", children: a },
                b
              );
            }),
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
  "CometHomeContent.react",
  [
    "CometBackupPlaceholder.react",
    "CometErrorBoundary.react",
    "CometFeedEndOfFeedMessage.react",
    "CometFeedGlimmer.react",
    "CometFeedUnitDebugInfoState",
    "CometFeedWidthStyles",
    "CometHero.react",
    "CometHomeContentAnimationContainer.react",
    "CometHomeContentArea.react",
    "CometHomeRightRail.react",
    "CometModernHomeFeedQuery$Parameters",
    "CometNewsFeedVPVDStore",
    "CometOnRefresh.react",
    "CometPagelet.react",
    "CometPlaceholder.react",
    "CometProfiler.react",
    "CometProgressivelyEnhancedComponent.react",
    "CometRouteParams",
    "CometSSRMultipassBoundary.react",
    "FeedInlineComposerGlimmer.react",
    "cr:1373242",
    "cr:243",
    "cr:298",
    "cr:299",
    "deferredLoadComponent",
    "getCometFeedVariablesForSk",
    "gkx",
    "react",
    "requireDeferred",
    "requireDeferredForDisplay",
    "stylex",
    "useCometIsReloadingCurrentRoute",
    "useCometRouteTracePolicy",
    "useRefetchablePreloadedQuery",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useEffect,
      k = e.useRef,
      l = e.useTransition,
      m = "CometHomeRightRail",
      n = "CometStoriesTray",
      o = "CometMegaphone",
      p = "CometHomeComposer",
      q = "CometHomeFeed",
      r = "VideoChatHomeContainerComet",
      s = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometFeedInlineComposer.react"
        ).__setRef("CometHomeContent.react")
      ),
      t = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("CometMegaphoneRoot.react").__setRef(
          "CometHomeContent.react"
        )
      ),
      u = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("CometModernHomeFeed.react").__setRef(
          "CometHomeContent.react"
        )
      ),
      v = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "StoriesTrayRectangularRoot.react"
        ).__setRef("CometHomeContent.react")
      ),
      w = c("deferredLoadComponent")(
        c("requireDeferred")(
          "CometHomeContentMoreContentButton.react"
        ).__setRef("CometHomeContent.react")
      ),
      x = d("CometFeedWidthStyles").getFeedWidthStyles(),
      y = {
        composer: { marginBottom: "sjgh65i0" },
        composerAndFeedContainer: {
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          justifyContent: "taijpn5t",
        },
        composerAndFeedWrapper: { maxWidth: "d2edcug0", width: "oh7imozk" },
        container: { marginTop: "tr9rh885", width: "k4urcfbm" },
        megaphone: {
          marginTop: "kvgmc6g5",
          marginEnd: "ad2k81qe",
          marginBottom: "oygrvhab",
          marginStart: "f9o22wc5",
          width: "oh7imozk",
          "@media (min-height: 700px)": {
            minWidth: "ox1siiyg",
            width: "mz2297xg",
          },
        },
        storiesTray: { maxWidth: "d2edcug0" },
        storiesTrayContainer: {
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          justifyContent: "taijpn5t",
        },
      };
    function z() {
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            className: c("stylex")(y.composer),
            children: h.jsx(c("FeedInlineComposerGlimmer.react"), {}),
          }),
          h.jsx(c("CometFeedGlimmer.react"), {}),
        ],
      });
    }
    function a(a) {
      var e = a.queries;
      a = a.routeProps;
      var f = l(),
        g = f[0],
        A = f[1];
      f = c("useCometRouteTracePolicy")();
      f = c("useCometIsReloadingCurrentRoute")(f);
      var B = h.jsx(c("CometSSRMultipassBoundary.react"), {
          id: "rhc",
          useCometPlaceholder: !0,
          children: h.jsx(c("CometProfiler.react"), {
            id: m,
            children: h.jsx(c("CometHomeRightRail.react"), {
              homeContactGroupsQueryReference:
                e.homeContactGroupsQueryReference,
              homeContactsQueryReference: e.homeContactsQueryReference,
              rightSideHeaderCardsQueryReference:
                e.rightSideHeaderCardsQueryReference,
            }),
          }),
        }),
        C = c("useStable")(function () {
          return d("CometNewsFeedVPVDStore").createStore();
        }),
        D = k(!1),
        E = d("CometRouteParams").useRouteParams(),
        F = (E = E.sk) != null ? E : void 0,
        G = a.feedStyle;
      E = F === "favorites" && c("gkx")("1386487") && b("cr:299") != null;
      a = c("useRefetchablePreloadedQuery")(
        c("CometModernHomeFeedQuery$Parameters"),
        e.feedQueryReference
      );
      var H = a[0],
        I = a[1];
      a = a[2];
      var J = i(
          function () {
            if (D.current === !0) return;
            D.current = !0;
            d("CometFeedUnitDebugInfoState").clearFeedUnitInfo("newsfeed");
            A(function () {
              return H(
                c("getCometFeedVariablesForSk")(
                  G,
                  String(F),
                  !0,
                  C.readRecentVPVDs()
                )
              );
            });
          },
          [G, C, H, F, A]
        ),
        K = g || f;
      j(
        function () {
          D.current = K;
        },
        [K]
      );
      d("CometOnRefresh.react").useOnRefresh(J);
      g = E
        ? null
        : h.jsx("div", {
            className: c("stylex")(y.storiesTrayContainer),
            children: h.jsx(c("CometSSRMultipassBoundary.react"), {
              id: "stories",
              children: h.jsx(c("CometProfiler.react"), {
                id: n,
                children: h.jsx(d("CometPagelet.react").BackupPlaceholder, {
                  className: c("stylex")(y.storiesTray, x.storiesTray),
                  fallback: null,
                  name: "Stories",
                  children: h.jsx(v, {
                    storiesTrayQueryReference: e.storiesTrayQueryReference,
                  }),
                }),
              }),
            }),
          });
      f = h.jsx(c("CometProfiler.react"), {
        id: q,
        children: h.jsx(c("CometHomeContentAnimationContainer.react"), {
          isPending: K,
          children: h.jsx(c("CometSSRMultipassBoundary.react"), {
            fallback: h.jsx(c("CometFeedGlimmer.react"), {}),
            id: "feed",
            useCometPlaceholder: !0,
            children: h.jsxs(c("CometErrorBoundary.react"), {
              fallback: function () {
                return h.jsx(c("CometFeedEndOfFeedMessage.react"), {
                  isError: !0,
                  onReload: J,
                });
              },
              children: [
                h.jsx(c("CometHero.react"), { description: "Feed" }),
                h.jsx(u, {
                  cacheBreaker: a,
                  feedQueryReference: I,
                  isLoading: K,
                  onReload: J,
                }),
              ],
            }),
          }),
        }),
      });
      a =
        b("cr:1373242") != null &&
        !E &&
        h.jsx(c("CometProfiler.react"), {
          id: r,
          children: h.jsx("div", {
            className: c("stylex")(y.composer),
            children: h.jsx(c("CometBackupPlaceholder.react"), {
              fallback: null,
              children: h.jsx(c("CometErrorBoundary.react"), {
                context: { project: "rooms_main" },
                children:
                  e.joinableVideoChatsQueryReference != null
                    ? h.jsx(b("cr:1373242"), {
                        joinableVideoChatsQueryReference:
                          e.joinableVideoChatsQueryReference,
                      })
                    : null,
              }),
            }),
          }),
        });
      I = E
        ? null
        : h.jsx(c("CometProfiler.react"), {
            id: o,
            children: h.jsx("div", {
              className: c("stylex")(y.megaphone, x.megaphone),
              children: h.jsx(c("CometErrorBoundary.react"), {
                children: h.jsx(c("CometBackupPlaceholder.react"), {
                  fallback: null,
                  children: h.jsx(t, {
                    megaphoneQueryReference: e.megaphoneQueryReference,
                  }),
                }),
              }),
            }),
          });
      e = E
        ? null
        : h.jsx(c("CometProfiler.react"), {
            id: p,
            children: h.jsx("div", {
              className: c("stylex")(y.composer),
              children: h.jsx(c("CometBackupPlaceholder.react"), {
                fallback: null,
                children: h.jsx(c("CometErrorBoundary.react"), {
                  children: h.jsx(s, {
                    feedInlineComposerQueryReference:
                      e.feedInlineComposerQueryReference,
                  }),
                }),
              }),
            }),
          });
      g = h.jsxs(d("CometNewsFeedVPVDStore").StoreProvider, {
        value: C,
        children: [
          b("cr:243") && h.jsx(b("cr:243"), {}),
          h.jsxs("div", {
            className: c("stylex")(y.container),
            children: [
              h.jsx(c("CometProgressivelyEnhancedComponent.react"), {
                fallback: null,
                name: "MoreContentButton",
                children: h.jsx(w, { isLoading: K }),
              }),
              h.jsxs(c("CometPlaceholder.react"), {
                fallback: null,
                name: "StoriesTray",
                children: [
                  g,
                  E && b("cr:299")
                    ? h.jsx(b("cr:299"), {})
                    : b("cr:298")
                    ? h.jsx(b("cr:298"), {})
                    : null,
                  h.jsx("div", {
                    className: c("stylex")(y.composerAndFeedContainer),
                    children: h.jsx("div", {
                      className: c("stylex")(
                        y.composerAndFeedWrapper,
                        x.composerAndFeedWrapper
                      ),
                      children: h.jsxs(c("CometPlaceholder.react"), {
                        fallback: h.jsx(z, {}),
                        name: "ComposerAndMegaphone",
                        children: [
                          h.jsxs(c("CometSSRMultipassBoundary.react"), {
                            id: "composer",
                            children: [
                              h.jsx(c("CometHero.react"), {
                                description: "ComposerAndMegaphone",
                              }),
                              I,
                              e,
                              a,
                            ],
                          }),
                          f,
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
      return h.jsx(c("CometHomeContentArea.react"), {
        rightRail: B,
        children: g,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeLayout.react",
  [
    "BaseHeadingContext",
    "BaseRow.react",
    "BaseView.react",
    "CometLeftRailHeader.react",
    "CometProfiler.react",
    "CometSSRMultipassBoundary.react",
    "CometScreenReaderHeading.react",
    "CometScrollView.react",
    "FocusRegion.react",
    "focusScopeQueries",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        container: {
          maxWidth: "ho3ac9xt",
          minHeight: "dp1hu0rb",
          "@media (max-width: 1920px)": { maxWidth: "msh19ytf" },
        },
        leftRail: {
          flexBasis: "o387gat7",
          flexShrink: "qbu88020",
          maxHeight: "pad24vr5",
          maxWidth: "rirtxc74",
          minHeight: "dp1hu0rb",
          minWidth: "fer614ym",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          overflowAnchor: "rek2kq2y",
          position: "lpgh02oy",
          top: "be9z9djy",
          "@media (max-width: 1099px)": { display: "bx45vsiw" },
        },
        leftRailInner: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          maxHeight: "qowsmv63",
          minHeight: "dp1hu0rb",
        },
        root: { minHeight: "dp1hu0rb", minWidth: "p01isnhg" },
      },
      k = "CometHomeLeftRail";
    function a(a) {
      var b = a.children,
        e = a.contentAreaHeading,
        f = a.leftRailAuxiliary,
        g = a.leftRailContent,
        l = a.leftRailHeading;
      a = a.pageHeading;
      var m = i(c("BaseHeadingContext"));
      l = h.jsx(c("CometScreenReaderHeading.react"), { children: l });
      e = h.jsx(c("CometScreenReaderHeading.react"), {
        isPrimaryHeading: !0,
        children: e,
      });
      f =
        a != null
          ? h.jsx(c("CometLeftRailHeader.react"), { auxiliary: f, title: a })
          : null;
      return h.jsx(c("BaseRow.react"), {
        align: "center",
        xstyle: j.root,
        children: h.jsxs(c("BaseRow.react"), {
          expanding: !0,
          verticalAlign: "top",
          xstyle: j.container,
          children: [
            h.jsx(c("CometSSRMultipassBoundary.react"), {
              id: "left_rail",
              children: h.jsx(c("CometProfiler.react"), {
                id: k,
                children: h.jsx(d("FocusRegion.react").FocusRegion, {
                  recoverFocusQuery: d("focusScopeQueries").focusableScopeQuery,
                  children: h.jsx(c("BaseView.react"), {
                    "aria-label": a,
                    role: "navigation",
                    xstyle: j.leftRail,
                    children: h.jsx(c("BaseView.react"), {
                      xstyle: j.leftRailInner,
                      children: h.jsxs(c("CometScrollView.react"), {
                        showsHorizontalScrollIndicator: !1,
                        children: [
                          f,
                          h.jsxs(c("BaseHeadingContext").Provider, {
                            value: m + 1,
                            children: [
                              l,
                              h.jsx(c("BaseHeadingContext").Provider, {
                                value: m + 2,
                                children: g,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
            h.jsxs(c("BaseHeadingContext").Provider, {
              value: m + 1,
              children: [
                e,
                h.jsx(c("BaseHeadingContext").Provider, {
                  value: m + 2,
                  children: b,
                }),
              ],
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
  "CometHomeRootLayout.react",
  [
    "fbt",
    "CometClassicHomeLeftRailContainer.react",
    "CometHero.react",
    "CometHomeLayout.react",
    "CometListCellGlimmer.react",
    "CometPagelet.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.children;
      a = a.leftRailContainerQueryReference;
      a = i.jsxs(d("CometPagelet.react").Placeholder, {
        className: "l9j0dhe7 tr9rh885 buofh1pr cbu4d94t j83agx80",
        fallback: i.jsx("div", {
          className: "tr9rh885",
          children: i.jsx(c("CometListCellGlimmer.react"), {
            imageSize: 36,
            imageStyle: "roundedRect",
            numberOfItems: 8,
          }),
        }),
        name: "LeftRail",
        children: [
          i.jsx(c("CometHero.react"), { description: "LeftRail" }),
          i.jsx(c("CometClassicHomeLeftRailContainer.react"), {
            leftRailContainerQueryReference: a,
          }),
        ],
      });
      return i.jsx(c("CometHomeLayout.react"), {
        contentAreaHeading: h._("Home"),
        leftRailContent: a,
        leftRailHeading: h._("Facebook Menu"),
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useInvalidateCometNewsFeedRelayConnectionOnUnmount",
  [
    "CometRelay",
    "FBLogger",
    "react",
    "recoverableViolation",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = c("requireDeferred")("CometNewsFeedConnectionHandler").__setRef(
        "useInvalidateCometNewsFeedRelayConnectionOnUnmount"
      );
    function a() {
      var a = d("CometRelay").useRelayEnvironment();
      h(
        function () {
          return function () {
            i.onReady(function (b) {
              d("CometRelay").commitLocalUpdate(a, function (a) {
                var d = a.get("client:root:viewer");
                if (d == null) {
                  c("recoverableViolation")(
                    "Expected to have a viewer when unmounting home",
                    "comet_infra"
                  );
                  return;
                }
                a = b.unstable_getAllConnectionsWithKey(
                  a,
                  d,
                  "CometNewsFeed_viewer_news_feed"
                );
                if (a == null || a.length < 1) {
                  c("FBLogger")("comet_infra").warn(
                    "Unable to fetch news feed connection(s) from relay"
                  );
                  return;
                }
                a.forEach(function (a) {
                  a.invalidateRecord();
                });
              });
            });
          };
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeRoot.react",
  [
    "CometHomeContent.react",
    "CometHomeRootLayout.react",
    "react",
    "useInvalidateCometNewsFeedRelayConnectionOnUnmount",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.props,
        d = b.children;
      b = b.routeProps;
      a = a.queries;
      c("useInvalidateCometNewsFeedRelayConnectionOnUnmount")();
      return h.jsx(c("CometHomeRootLayout.react"), {
        leftRailContainerQueryReference: a.leftRailContainerQueryReference,
        children:
          (d = d) != null
            ? d
            : h.jsx(c("CometHomeContent.react"), { queries: a, routeProps: b }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "VideoChatHomeContainerCometDeferred.react",
  ["deferredLoadComponent", "react", "requireDeferredForDisplay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("deferredLoadComponent")(
      c("requireDeferredForDisplay")(
        "VideoChatHomeContainerComet.react"
      ).__setRef("VideoChatHomeContainerCometDeferred.react")
    );
    g["default"] = a;
  },
  98
);
