if (self.CavalryLogger) {
  CavalryLogger.start_js(["7cCH7ur"]);
}

__d(
  "FriendingCometMutualFriendsSocialContext_user.graphql",
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
          { defaultValue: 16, kind: "LocalArgument", name: "iconSize" },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "FriendingCometMutualFriendsSocialContext_user",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "social_context_top_mutual_friends",
            plural: !0,
            selections: [
              a,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                alias: null,
                args: [{ kind: "Literal", name: "site", value: "comet" }],
                kind: "ScalarField",
                name: "url",
                storageKey: 'url(site:"comet")',
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "height",
                    variableName: "iconSize",
                  },
                  { kind: "Variable", name: "scale", variableName: "scale" },
                  { kind: "Variable", name: "width", variableName: "iconSize" },
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
        type: "User",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "FriendingCometFriendRequestCancelMutation.graphql",
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
          name: "id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        e = [
          { kind: "Literal", name: "action_type", value: "FRIEND" },
          {
            kind: "Literal",
            name: "render_location",
            value: "WWW_COMET_PROFILE",
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometFriendRequestCancelMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "FriendRequestCancelResponsePayload",
              kind: "LinkedField",
              name: "friend_request_cancel",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "cancelled_friend_requestee",
                  plural: !1,
                  selections: [
                    c,
                    d,
                    {
                      alias: null,
                      args: e,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "ProfileActionMutationUtils_action",
                        },
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
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
          name: "FriendingCometFriendRequestCancelMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "FriendRequestCancelResponsePayload",
              kind: "LinkedField",
              name: "friend_request_cancel",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "cancelled_friend_requestee",
                  plural: !1,
                  selections: [
                    c,
                    d,
                    {
                      alias: null,
                      args: e,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
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
                          abstractKey: "__isProfileAction",
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "icon_color",
                              value: "fds-black",
                            },
                            { kind: "Literal", name: "icon_size", value: "16" },
                            {
                              kind: "Literal",
                              name: "icon_variant",
                              value: "filled",
                            },
                            {
                              kind: "Variable",
                              name: "scale",
                              variableName: "scale",
                            },
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
                        c,
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
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
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
          id: "4387092571315002",
          metadata: {},
          name: "FriendingCometFriendRequestCancelMutation",
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
  "FriendingCometFriendRequestConfirmMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "input" },
        b = { defaultValue: null, kind: "LocalArgument", name: "refresh_num" },
        c = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        d = [{ kind: "Variable", name: "data", variableName: "input" }],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        g = [
          { kind: "Literal", name: "action_type", value: "FRIEND" },
          {
            kind: "Literal",
            name: "render_location",
            value: "WWW_COMET_PROFILE",
          },
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_active",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        j = { kind: "Literal", name: "environment", value: "COMET" },
        k = [e];
      return {
        fragment: {
          argumentDefinitions: [a, b, c],
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometFriendRequestConfirmMutation",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "FriendRequestAcceptResponsePayload",
              kind: "LinkedField",
              name: "friend_request_accept",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "friend_requester",
                  plural: !1,
                  selections: [
                    e,
                    f,
                    {
                      alias: null,
                      args: g,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "ProfileActionMutationUtils_action",
                        },
                        h,
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
                    },
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometRightSideHeaderCards_viewerSideFeed",
                    },
                    {
                      args: [
                        {
                          kind: "Literal",
                          name: "bookmarkID",
                          value: "2356318349",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "useTopTabBadgeCount_viewer",
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
          argumentDefinitions: [a, c, b],
          kind: "Operation",
          name: "FriendingCometFriendRequestConfirmMutation",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "FriendRequestAcceptResponsePayload",
              kind: "LinkedField",
              name: "friend_request_accept",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "friend_requester",
                  plural: !1,
                  selections: [
                    e,
                    f,
                    {
                      alias: null,
                      args: g,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        i,
                        {
                          kind: "TypeDiscriminator",
                          abstractKey: "__isProfileAction",
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "icon_color",
                              value: "fds-black",
                            },
                            { kind: "Literal", name: "icon_size", value: "16" },
                            {
                              kind: "Literal",
                              name: "icon_variant",
                              value: "filled",
                            },
                            {
                              kind: "Variable",
                              name: "scale",
                              variableName: "scale",
                            },
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
                        e,
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
                        h,
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
                    },
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
                      args: [
                        j,
                        { kind: "Literal", name: "query_ego_units", value: !1 },
                        {
                          kind: "Variable",
                          name: "refresh_num",
                          variableName: "refresh_num",
                        },
                      ],
                      concreteType: "SideFeedConnection",
                      kind: "LinkedField",
                      name: "side_feed",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            i,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "PagesCometHomeAdminContainer_pagesPanel",
                                  fragmentPropName: "pagesPanel",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "PagesSideFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "FriendingCometHomeInlineRHCContainer_friendsPanel",
                                  fragmentPropName: "friendsPanel",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "FriendingRequestsSideFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "CometHomeRemindersContainer_reminderPanel",
                                  fragmentPropName: "reminderPanel",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "RemindersSideFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "CometHomeRightSideWidgetContainer_widgetContainer",
                                  fragmentPropName: "widgetContainer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometHomeSideFeedWidgetContainer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "CometHomeRightSideWidgetContainerWithSeeMore_widgetContainer",
                                  fragmentPropName: "widgetContainer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometHomeSideFeedWidgetContainerWithSeeMore",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: k,
                              type: "Node",
                              abstractKey: "__isNode",
                            },
                            {
                              kind: "InlineFragment",
                              selections: k,
                              type: "AdsSideFeedUnitItem",
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
                      args: [
                        {
                          items: [
                            {
                              kind: "Literal",
                              name: "bookmark_ids.0",
                              value: "2356318349",
                            },
                          ],
                          kind: "ListValue",
                          name: "bookmark_ids",
                        },
                        j,
                        {
                          kind: "Literal",
                          name: "folder_id",
                          value: "PRODUCT",
                        },
                        {
                          kind: "Literal",
                          name: "sections",
                          value: ["FACEBOOK_APP"],
                        },
                      ],
                      concreteType: "BookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "BookmarksEdge",
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
                                  selections: [i, e],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "bookmark_render_location",
                                      value: "COMET_TOP_TAB",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "unread_count",
                                  storageKey:
                                    'unread_count(bookmark_render_location:"COMET_TOP_TAB")',
                                },
                                e,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'bookmarks(bookmark_ids:["2356318349"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])',
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
          id: "4505308822835788",
          metadata: {},
          name: "FriendingCometFriendRequestConfirmMutation",
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
  "FriendingCometFriendRequestDeleteMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "input" },
        b = { defaultValue: null, kind: "LocalArgument", name: "refresh_num" },
        c = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        d = [{ kind: "Variable", name: "data", variableName: "input" }],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        g = [
          { kind: "Literal", name: "action_type", value: "FRIEND" },
          {
            kind: "Literal",
            name: "render_location",
            value: "WWW_COMET_PROFILE",
          },
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = { kind: "Literal", name: "environment", value: "COMET" },
        j = [e];
      return {
        fragment: {
          argumentDefinitions: [a, b, c],
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometFriendRequestDeleteMutation",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "FriendRequestDeleteResponsePayload",
              kind: "LinkedField",
              name: "friend_request_delete",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "friend_requester",
                  plural: !1,
                  selections: [
                    e,
                    f,
                    {
                      alias: null,
                      args: g,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "ProfileActionMutationUtils_action",
                        },
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
                    },
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometRightSideHeaderCards_viewerSideFeed",
                    },
                    {
                      args: [
                        {
                          kind: "Literal",
                          name: "bookmarkID",
                          value: "2356318349",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "useTopTabBadgeCount_viewer",
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
          argumentDefinitions: [a, c, b],
          kind: "Operation",
          name: "FriendingCometFriendRequestDeleteMutation",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "FriendRequestDeleteResponsePayload",
              kind: "LinkedField",
              name: "friend_request_delete",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "friend_requester",
                  plural: !1,
                  selections: [
                    e,
                    f,
                    {
                      alias: null,
                      args: g,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        h,
                        {
                          kind: "TypeDiscriminator",
                          abstractKey: "__isProfileAction",
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "icon_color",
                              value: "fds-black",
                            },
                            { kind: "Literal", name: "icon_size", value: "16" },
                            {
                              kind: "Literal",
                              name: "icon_variant",
                              value: "filled",
                            },
                            {
                              kind: "Variable",
                              name: "scale",
                              variableName: "scale",
                            },
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
                        e,
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
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
                    },
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
                      args: [
                        i,
                        { kind: "Literal", name: "query_ego_units", value: !1 },
                        {
                          kind: "Variable",
                          name: "refresh_num",
                          variableName: "refresh_num",
                        },
                      ],
                      concreteType: "SideFeedConnection",
                      kind: "LinkedField",
                      name: "side_feed",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            h,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "PagesCometHomeAdminContainer_pagesPanel",
                                  fragmentPropName: "pagesPanel",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "PagesSideFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "FriendingCometHomeInlineRHCContainer_friendsPanel",
                                  fragmentPropName: "friendsPanel",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "FriendingRequestsSideFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "CometHomeRemindersContainer_reminderPanel",
                                  fragmentPropName: "reminderPanel",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "RemindersSideFeedUnit",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "CometHomeRightSideWidgetContainer_widgetContainer",
                                  fragmentPropName: "widgetContainer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometHomeSideFeedWidgetContainer",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  args: null,
                                  documentName:
                                    "CometRightSideHeaderCards_viewerSideFeed",
                                  fragmentName:
                                    "CometHomeRightSideWidgetContainerWithSeeMore_widgetContainer",
                                  fragmentPropName: "widgetContainer",
                                  kind: "ModuleImport",
                                },
                              ],
                              type: "CometHomeSideFeedWidgetContainerWithSeeMore",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: j,
                              type: "Node",
                              abstractKey: "__isNode",
                            },
                            {
                              kind: "InlineFragment",
                              selections: j,
                              type: "AdsSideFeedUnitItem",
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
                      args: [
                        {
                          items: [
                            {
                              kind: "Literal",
                              name: "bookmark_ids.0",
                              value: "2356318349",
                            },
                          ],
                          kind: "ListValue",
                          name: "bookmark_ids",
                        },
                        i,
                        {
                          kind: "Literal",
                          name: "folder_id",
                          value: "PRODUCT",
                        },
                        {
                          kind: "Literal",
                          name: "sections",
                          value: ["FACEBOOK_APP"],
                        },
                      ],
                      concreteType: "BookmarksConnection",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "BookmarksEdge",
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
                                  selections: [h, e],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "bookmark_render_location",
                                      value: "COMET_TOP_TAB",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "unread_count",
                                  storageKey:
                                    'unread_count(bookmark_render_location:"COMET_TOP_TAB")',
                                },
                                e,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'bookmarks(bookmark_ids:["2356318349"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])',
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
          id: "4335158636547678",
          metadata: {},
          name: "FriendingCometFriendRequestDeleteMutation",
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
  "FriendingCometPYMKBlacklistSuggestionMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "PymkSuggestionBlacklistResponsePayload",
            kind: "LinkedField",
            name: "pymk_suggestion_blacklist",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "blacklisted_user",
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
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometPYMKBlacklistSuggestionMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "FriendingCometPYMKBlacklistSuggestionMutation",
          selections: b,
        },
        params: {
          id: "2882558265094181",
          metadata: {},
          name: "FriendingCometPYMKBlacklistSuggestionMutation",
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
  "CometProfileListDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6776771269015648",
        metadata: {},
        name: "CometProfileListDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometProfileListDialog.entrypoint",
  [
    "CometProfileListDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.listType;
        a = a.sourceID;
        return {
          queries: {
            cometMutualFriendsQueryReference: {
              parameters: b("CometProfileListDialogQuery$Parameters"),
              variables: {
                listType: c,
                scale: d("WebPixelRatio").get(),
                sourceID: a,
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometProfileListDialog.react"
      ).__setRef("CometProfileListDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometMutualFriendsText.react",
  [
    "CometLazyTooltip.react",
    "CometPressable.react",
    "CometProfileListDialog.entrypoint",
    "JSResourceForInteraction",
    "TetraText.react",
    "react",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("JSResourceForInteraction")(
        "FriendingCometMutualFriendsSocialContextTooltipContent.react"
      ).__setRef("FriendingCometMutualFriendsText.react"),
      j = {
        socialContextText: {
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          textOverflow: "ltmttdrg",
        },
      };
    function a(a) {
      var b = a.textType,
        d = a.truncateContextText,
        e = c("useCometEntryPointDialog")(
          c("CometProfileListDialog.entrypoint"),
          { listType: "MUTUAL_FRIENDS", sourceID: a.id },
          "button"
        ),
        f = e[0],
        g = e[1],
        k = e[2],
        l = e[3];
      e = e[4];
      return h.jsx(c("CometLazyTooltip.react"), {
        align: "start",
        delayContentMs: 0,
        delayTooltipMs: 100,
        tooltipProps: { userID: a.id },
        tooltipResource: i,
        children: h.jsx(c("CometPressable.react"), {
          "aria-labelledby": a.socialContextText,
          display: "inline",
          onHoverIn: k,
          onHoverOut: l,
          onPress: function () {
            return f({
              actionsByPriorityMapping: {
                User: [
                  {
                    hookConfig: {
                      messengerWebEntryPoint: "mutual_friends_dialog",
                      messengerWebLsEntryPoint: "mutualFriendsDialog",
                    },
                    type: "message",
                  },
                ],
              },
            });
          },
          onPressIn: e,
          overlayDisabled: !0,
          ref: g,
          xstyle: j.socialContextText,
          children: h.jsx(c("TetraText.react"), {
            color: "secondary",
            numberOfLines: d === !0 ? 1 : null,
            type: b,
            children: a.socialContextText,
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
  "FriendingCometMutualFriendsSocialContext.react",
  [
    "CometRelay",
    "FriendingCometMutualFriendsSocialContext_user.graphql",
    "FriendingCometMutualFriendsText.react",
    "TetraOverlappingFacepileUnstyled.react",
    "actorHovercardContainer",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        facepile: { paddingEnd: "ph5uu5jm" },
        root: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          paddingTop: "ggysqto6",
          width: "k4urcfbm",
        },
      },
      k = {
        16: { minHeight: "frgo5egb" },
        24: { minHeight: "dumg13m2" },
        32: { minHeight: "jklb3kyz" },
        40: { minHeight: "kbf60n1y" },
        48: { minHeight: "ek66kcfh" },
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("FriendingCometMutualFriendsSocialContext_user.graphql")),
          a.user
        ),
        f = a.iconSize,
        g = a.socialContextText,
        l = e.id;
      e = e.social_context_top_mutual_friends;
      var m = a.shouldShowFacepile;
      m = m === void 0 ? !0 : m;
      if (l == null) return null;
      var n = [];
      m &&
        (n = e
          .map(function (a) {
            var b = a.id,
              d = a.name,
              e = a.url;
            a = (a = a.profile_picture) == null ? void 0 : a.uri;
            return b != null && d != null && e != null && a != null
              ? {
                  alt: d,
                  containerComponent: c("actorHovercardContainer")(b),
                  linkProps: { url: e },
                  source: { uri: a },
                }
              : null;
          })
          .filter(Boolean));
      m = n.length > 0;
      return g !== ""
        ? i.jsx("div", {
            className: c("stylex")(j.root, k[f]),
            children: m
              ? i.jsx("div", {
                  className: c("stylex")(j.facepile),
                  children: i.jsx(c("TetraOverlappingFacepileUnstyled.react"), {
                    isTextInline: !0,
                    items: n,
                    size: f,
                    text: i.jsx(c("FriendingCometMutualFriendsText.react"), {
                      id: l,
                      shouldAlignToFacepile: m,
                      socialContextText: g,
                      textType: a.textType,
                      truncateContextText: a.truncateContextText,
                    }),
                  }),
                })
              : i.jsx(c("FriendingCometMutualFriendsText.react"), {
                  id: l,
                  shouldAlignToFacepile: m,
                  socialContextText: g,
                  textType: a.textType,
                  truncateContextText: a.truncateContextText,
                }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "FriendingCometFriendRequestCancelMutation",
  [
    "CometRelay",
    "FriendingCometFriendRequestCancelMutation.graphql",
    "ProfileActionFriendingMutationUtils",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("FriendingCometFriendRequestCancelMutation.graphql"));
    function a(a, b, c, e) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onError: e,
        optimisticResponse: {
          friend_request_cancel: {
            cancelled_friend_requestee: {
              friendship_status: "CAN_REQUEST",
              id: b,
              profile_action: d(
                "ProfileActionFriendingMutationUtils"
              ).getOptimisticActionForFriendshipStatus("CAN_REQUEST", b),
            },
          },
        },
        variables: {
          input: { cancelled_friend_requestee_id: b, source: c },
          scale: d("WebPixelRatio").get(),
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "ProfileCometBannerUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [
        "ProfilePlusAdminNotice",
        "ProfileAppealBanner",
        "ProfileBanner",
        "ProfileEscapeHatch",
        "ProfilePYMKBanner",
      ],
      h = [
        "ProfilePendingFriendBanner",
        "ProfilePlusDelegateCommunityPendingParticipantBanner",
      ];
    a = function (a) {
      var b = a.getLinkedRecord("comet_profile_banner", {
        render_location: "TIMELINE_TAB_TOP",
        supported: g,
      });
      (b == null ? void 0 : b.getType()) === "ProfileEscapeHatch" &&
        (b == null ? void 0 : b.getValue("type")) ===
          "PENDING_FRIEND_REQUEST" &&
        a.setValue(null, "comet_profile_banner", {
          render_location: "TIMELINE_TAB_TOP",
          supported: g,
        });
      b = a.getLinkedRecord("comet_profile_banner", {
        render_location: "PROFILE_HEADER",
        supported: h,
      });
      (b == null ? void 0 : b.getType()) === "ProfilePendingFriendBanner" &&
        a.setValue(null, "comet_profile_banner", {
          render_location: "PROFILE_HEADER",
          supported: h,
        });
    };
    f.removeProfilePendingFriendRequestBanner = a;
  },
  66
);
__d(
  "FriendingCometFriendRequestsOptimisticUpdaters",
  [
    "ProfileActionFriendingMutationUtils",
    "ProfileActionMutationUtils",
    "ProfileCometBannerUtils",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a, b, c) {
      var e = a.get(c);
      if (e == null) return;
      e.setValue(b, "friendship_status");
      e.setValue(c, "id");
      a = a.get(d("ProfileActionMutationUtils").getProfileActionID(c, 1));
      if (a == null) return;
      var f = a.getOrCreateLinkedRecord("icon_image", "Image", {
          icon_color: "fds-black",
          icon_size: "16",
          icon_variant: "filled",
          scale: d("WebPixelRatio").get(),
        }),
        g = a.getOrCreateLinkedRecord("title", "TextWithEntities");
      if (f == null || g == null) return;
      c = d(
        "ProfileActionFriendingMutationUtils"
      ).getOptimisticActionForFriendshipStatus(b, c);
      b === "ARE_FRIENDS" && a.setValue(!1, "is_active");
      a.setValue(c.__typename, "__typename");
      a.setValue(c.is_optimistic_update, "is_optimistic_update");
      f.setValue(c.icon_image.height, "height");
      f.setValue(c.icon_image.scale, "scale");
      f.setValue(c.icon_image.width, "width");
      f.setValue(c.icon_image.uri, "uri");
      g.setValue(c.title.text, "text");
      d("ProfileCometBannerUtils").removeProfilePendingFriendRequestBanner(e);
    };
    g.updateFriendRequesterFieldsOptimistic = a;
  },
  98
);
__d(
  "FriendingCometFriendRequestsUpdaters",
  ["ProfileCometBannerUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a, b) {
      a = a.get(b);
      if (a == null) return;
      d("ProfileCometBannerUtils").removeProfilePendingFriendRequestBanner(a);
    };
    g.updateFriendRequesterFields = a;
  },
  98
);
__d(
  "FriendingCometFriendRequestConfirmMutation",
  [
    "CometRelay",
    "FriendingCometFriendRequestConfirmMutation.graphql",
    "FriendingCometFriendRequestsOptimisticUpdaters",
    "FriendingCometFriendRequestsUpdaters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("FriendingCometFriendRequestConfirmMutation.graphql"));
    function a(a, b, c, e, f) {
      var g = function (a) {
          d(
            "FriendingCometFriendRequestsOptimisticUpdaters"
          ).updateFriendRequesterFieldsOptimistic(a, "ARE_FRIENDS", b);
        },
        h = function (a) {
          d("FriendingCometFriendRequestsUpdaters").updateFriendRequesterFields(
            a,
            b
          );
        };
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: e,
        onError: f,
        optimisticUpdater: g,
        updater: h,
        variables: {
          input: { friend_requester_id: b, source: c },
          refresh_num: 0,
          scale: d("WebPixelRatio").get(),
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "FriendingCometFriendRequestDeleteMutation",
  [
    "CometRelay",
    "FriendingCometFriendRequestDeleteMutation.graphql",
    "FriendingCometFriendRequestsOptimisticUpdaters",
    "FriendingCometFriendRequestsUpdaters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("FriendingCometFriendRequestDeleteMutation.graphql"));
    function a(a, b, c, e, f) {
      var g = function (a) {
          d(
            "FriendingCometFriendRequestsOptimisticUpdaters"
          ).updateFriendRequesterFieldsOptimistic(a, "CAN_REQUEST", b);
        },
        h = function (a) {
          d("FriendingCometFriendRequestsUpdaters").updateFriendRequesterFields(
            a,
            b
          );
        };
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: e,
        onError: f,
        optimisticUpdater: g,
        updater: h,
        variables: {
          input: { friend_requester_id: b, source: c },
          refresh_num: 0,
          scale: d("WebPixelRatio").get(),
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "FriendingCometPYMKBlacklistSuggestionMutation",
  ["CometRelay", "FriendingCometPYMKBlacklistSuggestionMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("FriendingCometPYMKBlacklistSuggestionMutation.graphql"));
    function a(a, b, c, e, f, g, h) {
      var j = function (a, f) {
        f === void 0 && (f = e);
        a = c != null ? a.get(c) : null;
        if (!a) return;
        var h = g != null ? { location: g } : null;
        a = d("CometRelay").ConnectionHandler.getConnection(a, b, h);
        if (!a) return;
        d("CometRelay").ConnectionHandler.deleteNode(a, f);
      };
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onError: h,
        optimisticUpdater: j,
        updater: function (a) {
          var b = a.getRootField("pymk_suggestion_blacklist");
          if (!b) return;
          b = b.getLinkedRecord("blacklisted_user");
          if (!b) return;
          b = b.getValue("id");
          b = typeof b === "string" ? "" + b : null;
          b != null && j(a, b);
        },
        variables: {
          input: { people_you_may_know_id: e, people_you_may_know_location: f },
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "FriendingCometTestIDHelper",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      getFriendsTabFriendRequestsConfirmedTestID: function (a) {
        return "comet_friends_tab_requests-" + a + "-confirmed";
      },
      getFriendsTabFriendRequestsDeletedTestID: function (a) {
        return "comet_friends_tab_requests-" + a + "-deleted";
      },
      getFriendsTabFriendRequestsTestID: function (a) {
        return "comet_friends_tab_requests-" + a;
      },
      getFriendsTabPYMKTestID: function (a) {
        return "comet_friends_tab_pymk-" + a;
      },
      getGriffinTabFriendRequestsTestID: function (a) {
        return "comet_griffin_tab_requests-" + a;
      },
    });
    f["default"] = a;
  },
  66
);
__d(
  "FriendingCometFriendRequestStrings",
  ["fbt", "qex"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a() {
      return c("qex")._("1755358")
        ? h._("Request removed")
        : h._("Request deleted");
    }
    function b() {
      return c("qex")._("1755358") ? h._("Remove") : h._("Delete");
    }
    function d() {
      return c("qex")._("1755358")
        ? h._("Remove Request")
        : h._("Delete Request");
    }
    g.requestRejected = a;
    g.reject = b;
    g.rejectRequest = d;
  },
  98
);
__d(
  "useHandleUpdateSingleNotifReadState",
  [
    "CometNotificationsUpdateSeenStateMutation",
    "recoverableViolation",
    "useGetCancellableSeenStateCallback",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "MAIN_SURFACE";
    function i(a) {
      var b = a.environment,
        e = a.mutationLogger,
        f = a.notifId,
        g = a.seenState;
      a = a.updateType;
      if (f == null || e == null || g == null || a == null) return;
      d(
        "CometNotificationsUpdateSeenStateMutation"
      ).CometNotificationsUpdateSeenStateMutation(
        b,
        {
          environment: h,
          input: {
            environment: h,
            is_comet: !0,
            last_notif_sync_time: 0,
            notif_ids: [f],
            source: "unknown",
            update_type: a,
          },
        },
        {
          mutationLogger: function () {
            return e(g);
          },
          onError: function (a) {
            c("recoverableViolation")(
              "Update read state (single) mutation failed with an error: ",
              "Notifications",
              { error: a }
            );
          },
          updater: function (a) {
            d(
              "CometNotificationsUpdateSeenStateMutation"
            ).updateSingleNotifReadState(a, f);
          },
        }
      );
    }
    function a(a) {
      return c("useGetCancellableSeenStateCallback")(
        babelHelpers["extends"]({}, a, { updater: i })
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "RegularPymkAddFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744254");
    c = b("FalcoLoggerInternal").create("regular_pymk_add", a);
    e.exports = c;
  },
  null
);
__d(
  "RegularPymkImpFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744255");
    c = b("FalcoLoggerInternal").create("regular_pymk_imp", a);
    e.exports = c;
  },
  null
);
__d(
  "RegularPymkProfileFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744256");
    c = b("FalcoLoggerInternal").create("regular_pymk_profile", a);
    e.exports = c;
  },
  null
);
__d(
  "RegularPymkXoutFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744257");
    c = b("FalcoLoggerInternal").create("regular_pymk_xout", a);
    e.exports = c;
  },
  null
);
__d(
  "RequestSeenFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744262");
    c = b("FalcoLoggerInternal").create("request_seen", a);
    e.exports = c;
  },
  null
);
__d(
  "XCometFriendingSectionControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/friends/{friending_section}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
