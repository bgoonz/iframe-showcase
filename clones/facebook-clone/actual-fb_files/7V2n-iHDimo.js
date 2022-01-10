if (self.CavalryLogger) {
  CavalryLogger.start_js(["GD9fuxn"]);
}

__d(
  "FriendingCometAcceptedFriendRequestsPanel_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "FriendingCometAcceptedFriendRequestsPanel_user",
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
          name: "url",
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 60 },
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
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "FriendingCometAcceptedFriendRequestsPanel_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: 5, kind: "LocalArgument", name: "count" },
        { kind: "RootArgument", name: "scale" },
      ],
      kind: "Fragment",
      metadata: {
        connection: [
          {
            count: "count",
            cursor: null,
            direction: "forward",
            path: ["friend_confirmed_notifications"],
          },
        ],
      },
      name: "FriendingCometAcceptedFriendRequestsPanel_viewer",
      selections: [
        {
          alias: "friend_confirmed_notifications",
          args: null,
          concreteType: "FriendConfirmedNotificationsConnection",
          kind: "LinkedField",
          name: "__FriendingCometAcceptedFriendRequestsPanel_friend_confirmed_notifications_connection",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "count",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "FriendConfirmedNotificationsEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_unseen",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "time_sent",
                  storageKey: null,
                },
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
                      name: "url",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "height", value: 60 },
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
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "FriendingCometMainTabViewLeftRail_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: 5, kind: "LocalArgument", name: "confirmed_count" },
        { defaultValue: null, kind: "LocalArgument", name: "requests_initial" },
        { kind: "RootArgument", name: "should_show_hscroll" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "FriendingCometMainTabViewLeftRail_viewer",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "first",
              variableName: "confirmed_count",
            },
          ],
          concreteType: "FriendConfirmedNotificationsConnection",
          kind: "LinkedField",
          name: "friend_confirmed_notifications",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "FriendConfirmedNotificationsEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "notification_id",
                  storageKey: null,
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
              name: "count",
              variableName: "confirmed_count",
            },
          ],
          kind: "FragmentSpread",
          name: "FriendingCometAcceptedFriendRequestsPanel_viewer",
        },
        {
          condition: "should_show_hscroll",
          kind: "Condition",
          passingValue: !1,
          selections: [
            {
              args: [
                {
                  kind: "Variable",
                  name: "count",
                  variableName: "requests_initial",
                },
              ],
              kind: "FragmentSpread",
              name: "FriendingCometFriendRequestsPanel_viewerConnection",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "FriendingCometPYMKPanel_viewer",
            },
          ],
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show_proactive_friending_alert",
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
  "FriendingCometMainTabViewMainContent_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "should_show_hscroll" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "FriendingCometMainTabViewMainContent_viewer",
      selections: [
        {
          condition: "should_show_hscroll",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "FriendingCometFriendRequestsGrid_viewer",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "FriendingCometPYMKGrid_viewer",
            },
          ],
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
  "FriendingCometMainTabView_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "requests_initial",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "FriendingCometMainTabView_viewer",
        selections: [
          {
            alias: "friends_container_request_count",
            args: null,
            concreteType: "FriendingPossibilitiesConnection",
            kind: "LinkedField",
            name: "friending_possibilities",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: "friends_container_pymk_count",
            args: null,
            concreteType: "PeopleYouMayKnowConnection",
            kind: "LinkedField",
            name: "people_you_may_know",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            args: [
              {
                kind: "Variable",
                name: "requests_initial",
                variableName: "requests_initial",
              },
            ],
            kind: "FragmentSpread",
            name: "FriendingCometMainTabViewLeftRail_viewer",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "FriendingCometMainTabViewMainContent_viewer",
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
  "FriendingCometRootQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "requests_initial",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "should_show_hscroll",
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        e = [d],
        f = [{ kind: "Literal", name: "first", value: 5 }],
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        i = { kind: "Variable", name: "scale", variableName: "scale" },
        j = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        k = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 60 },
            i,
            { kind: "Literal", name: "width", value: 60 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: j,
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
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cursor",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "end_cursor",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_next_page",
          storageKey: null,
        },
        q = {
          kind: "Literal",
          name: "friending_channel",
          value: "REQUESTS_JEWEL",
        },
        r = [
          { kind: "Variable", name: "first", variableName: "requests_initial" },
          q,
        ],
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "social_context",
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
        u = {
          alias: null,
          args: [{ kind: "Literal", name: "site", value: "comet" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"comet")',
        },
        v = {
          kind: "InlineFragment",
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                t,
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "social_context_top_mutual_friends",
                  plural: !0,
                  selections: [
                    l,
                    g,
                    u,
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "height", value: 20 },
                        i,
                        { kind: "Literal", name: "width", value: 20 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "profile_picture",
                      plural: !1,
                      selections: j,
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
          type: "FriendNode",
          abstractKey: "__isFriendNode",
        },
        w = {
          alias: null,
          args: null,
          concreteType: "PageInfo",
          kind: "LinkedField",
          name: "page_info",
          plural: !1,
          selections: [p, o],
          storageKey: null,
        },
        x = ["friending_channel"],
        y = { kind: "Literal", name: "location", value: "FRIENDS_CENTER" },
        z = [{ kind: "Literal", name: "first", value: 10 }, y],
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tracking_signature",
          storageKey: null,
        },
        B = ["location"],
        C = { kind: "Literal", name: "first", value: 20 };
      q = [C, q];
      u = {
        alias: null,
        args: null,
        concreteType: "User",
        kind: "LinkedField",
        name: "social_context_top_mutual_friends",
        plural: !0,
        selections: [
          l,
          g,
          u,
          {
            alias: null,
            args: [
              { kind: "Literal", name: "height", value: 16 },
              i,
              { kind: "Literal", name: "width", value: 16 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: j,
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      C = [C, y];
      return {
        fragment: {
          argumentDefinitions: [a, b, c],
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometRootQuery",
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
                      kind: "Variable",
                      name: "requests_initial",
                      variableName: "requests_initial",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "FriendingCometMainTabView_viewer",
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
          argumentDefinitions: [b, a, c],
          kind: "Operation",
          name: "FriendingCometRootQuery",
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
                  alias: "friends_container_request_count",
                  args: null,
                  concreteType: "FriendingPossibilitiesConnection",
                  kind: "LinkedField",
                  name: "friending_possibilities",
                  plural: !1,
                  selections: e,
                  storageKey: null,
                },
                {
                  alias: "friends_container_pymk_count",
                  args: null,
                  concreteType: "PeopleYouMayKnowConnection",
                  kind: "LinkedField",
                  name: "people_you_may_know",
                  plural: !1,
                  selections: e,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: f,
                  concreteType: "FriendConfirmedNotificationsConnection",
                  kind: "LinkedField",
                  name: "friend_confirmed_notifications",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "FriendConfirmedNotificationsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "notification_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_unseen",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "time_sent",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "User",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [g, h, k, l, m],
                          storageKey: null,
                        },
                        n,
                      ],
                      storageKey: null,
                    },
                    d,
                    {
                      alias: null,
                      args: null,
                      concreteType: "PageInfo",
                      kind: "LinkedField",
                      name: "page_info",
                      plural: !1,
                      selections: [o, p],
                      storageKey: null,
                    },
                  ],
                  storageKey: "friend_confirmed_notifications(first:5)",
                },
                {
                  alias: null,
                  args: f,
                  filters: null,
                  handle: "connection",
                  key: "FriendingCometAcceptedFriendRequestsPanel_friend_confirmed_notifications",
                  kind: "LinkedHandle",
                  name: "friend_confirmed_notifications",
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_show_proactive_friending_alert",
                  storageKey: null,
                },
                {
                  condition: "should_show_hscroll",
                  kind: "Condition",
                  passingValue: !1,
                  selections: [
                    {
                      alias: null,
                      args: r,
                      concreteType: "FriendingPossibilitiesConnection",
                      kind: "LinkedField",
                      name: "friending_possibilities",
                      plural: !1,
                      selections: [
                        d,
                        {
                          alias: null,
                          args: null,
                          concreteType: "FriendingPossibilitiesEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_seen",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "time",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "User",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                l,
                                s,
                                g,
                                h,
                                k,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "gender",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "short_name",
                                  storageKey: null,
                                },
                                m,
                                v,
                              ],
                              storageKey: null,
                            },
                            n,
                          ],
                          storageKey: null,
                        },
                        w,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: r,
                      filters: x,
                      handle: "connection",
                      key: "FriendingCometFriendRequestsPanel_friending_possibilities",
                      kind: "LinkedHandle",
                      name: "friending_possibilities",
                    },
                    {
                      alias: null,
                      args: z,
                      concreteType: "PeopleYouMayKnowConnection",
                      kind: "LinkedField",
                      name: "people_you_may_know",
                      plural: !1,
                      selections: [
                        A,
                        {
                          alias: null,
                          args: null,
                          concreteType: "PeopleYouMayKnowEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "User",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [l, s, g, h, k, m, v],
                              storageKey: null,
                            },
                            n,
                          ],
                          storageKey: null,
                        },
                        w,
                      ],
                      storageKey:
                        'people_you_may_know(first:10,location:"FRIENDS_CENTER")',
                    },
                    {
                      alias: null,
                      args: z,
                      filters: B,
                      handle: "connection",
                      key: "FriendingCometPYMKPanel_people_you_may_know",
                      kind: "LinkedHandle",
                      name: "people_you_may_know",
                    },
                  ],
                },
                {
                  condition: "should_show_hscroll",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      alias: "friend_requests",
                      args: q,
                      concreteType: "FriendingPossibilitiesConnection",
                      kind: "LinkedField",
                      name: "friending_possibilities",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "FriendingPossibilitiesEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "User",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                l,
                                s,
                                g,
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "height",
                                      value: 230,
                                    },
                                    i,
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 230,
                                    },
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "profile_picture",
                                  plural: !1,
                                  selections: j,
                                  storageKey: null,
                                },
                                t,
                                u,
                                m,
                              ],
                              storageKey: null,
                            },
                            n,
                          ],
                          storageKey: null,
                        },
                        w,
                      ],
                      storageKey:
                        'friending_possibilities(first:20,friending_channel:"REQUESTS_JEWEL")',
                    },
                    {
                      alias: "friend_requests",
                      args: q,
                      filters: x,
                      handle: "connection",
                      key: "FriendingCometFriendRequestsGrid_friend_requests",
                      kind: "LinkedHandle",
                      name: "friending_possibilities",
                    },
                    {
                      alias: "pymk_grid",
                      args: C,
                      concreteType: "PeopleYouMayKnowConnection",
                      kind: "LinkedField",
                      name: "people_you_may_know",
                      plural: !1,
                      selections: [
                        A,
                        {
                          alias: null,
                          args: null,
                          concreteType: "PeopleYouMayKnowEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "User",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                l,
                                s,
                                g,
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "height",
                                      value: 160,
                                    },
                                    i,
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 160,
                                    },
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "profile_picture",
                                  plural: !1,
                                  selections: j,
                                  storageKey: null,
                                },
                                t,
                                u,
                                m,
                              ],
                              storageKey: null,
                            },
                            n,
                          ],
                          storageKey: null,
                        },
                        w,
                      ],
                      storageKey:
                        'people_you_may_know(first:20,location:"FRIENDS_CENTER")',
                    },
                    {
                      alias: "pymk_grid",
                      args: C,
                      filters: B,
                      handle: "connection",
                      key: "FriendingCometPYMKGrid_pymk_grid",
                      kind: "LinkedHandle",
                      name: "people_you_may_know",
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3940174346069454",
          metadata: {},
          name: "FriendingCometRootQuery",
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
  "FriendingCometFriendRequestsCard_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "FriendingCometFriendRequestsCard_user",
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
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 230 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 230 },
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
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "social_context",
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
          args: [{ kind: "Literal", name: "iconSize", value: 16 }],
          kind: "FragmentSpread",
          name: "FriendingCometMutualFriendsSocialContext_user",
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
  "FriendingCometFriendRequestsGridPaginationQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: 20, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
          {
            kind: "Literal",
            name: "friending_channel",
            value: "REQUESTS_JEWEL",
          },
        ],
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
          name: "name",
          storageKey: null,
        },
        e = { kind: "Variable", name: "scale", variableName: "scale" },
        f = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometFriendRequestsGridPaginationQuery",
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
                    { kind: "Variable", name: "count", variableName: "count" },
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "FriendingCometFriendRequestsGrid_viewer",
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
          name: "FriendingCometFriendRequestsGridPaginationQuery",
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
                  alias: "friend_requests",
                  args: b,
                  concreteType: "FriendingPossibilitiesConnection",
                  kind: "LinkedField",
                  name: "friending_possibilities",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "FriendingPossibilitiesEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "User",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            c,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "friendship_status",
                              storageKey: null,
                            },
                            d,
                            {
                              alias: null,
                              args: [
                                { kind: "Literal", name: "height", value: 230 },
                                e,
                                { kind: "Literal", name: "width", value: 230 },
                              ],
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "profile_picture",
                              plural: !1,
                              selections: f,
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "TextWithEntities",
                              kind: "LinkedField",
                              name: "social_context",
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
                              concreteType: "User",
                              kind: "LinkedField",
                              name: "social_context_top_mutual_friends",
                              plural: !0,
                              selections: [
                                c,
                                d,
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "site",
                                      value: "comet",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "url",
                                  storageKey: 'url(site:"comet")',
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "height",
                                      value: 16,
                                    },
                                    e,
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 16,
                                    },
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "profile_picture",
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
                          name: "has_next_page",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "end_cursor",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: "friend_requests",
                  args: b,
                  filters: ["friending_channel"],
                  handle: "connection",
                  key: "FriendingCometFriendRequestsGrid_friend_requests",
                  kind: "LinkedHandle",
                  name: "friending_possibilities",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3968821546508213",
          metadata: {},
          name: "FriendingCometFriendRequestsGridPaginationQuery",
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
  "FriendingCometFriendRequestsGrid_viewer.graphql",
  ["FriendingCometFriendRequestsGridPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["friend_requests"];
      return {
        argumentDefinitions: [
          { defaultValue: 20, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: "count", cursor: "cursor", direction: "forward", path: a },
          ],
          refetch: {
            connection: {
              forward: { count: "count", cursor: "cursor" },
              backward: null,
              path: a,
            },
            fragmentPathInResult: ["viewer"],
            operation: b(
              "FriendingCometFriendRequestsGridPaginationQuery.graphql"
            ),
          },
        },
        name: "FriendingCometFriendRequestsGrid_viewer",
        selections: [
          {
            alias: "friend_requests",
            args: [
              {
                kind: "Literal",
                name: "friending_channel",
                value: "REQUESTS_JEWEL",
              },
            ],
            concreteType: "FriendingPossibilitiesConnection",
            kind: "LinkedField",
            name: "__FriendingCometFriendRequestsGrid_friend_requests_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "FriendingPossibilitiesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
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
                        name: "id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "friendship_status",
                        storageKey: null,
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "FriendingCometFriendRequestsCard_user",
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
                    name: "has_next_page",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey:
              '__FriendingCometFriendRequestsGrid_friend_requests_connection(friending_channel:"REQUESTS_JEWEL")',
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
  "FriendingCometPYMKGridPaginationQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: 20, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          {
            defaultValue: "FRIENDS_CENTER",
            kind: "LocalArgument",
            name: "location",
          },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = { kind: "Variable", name: "location", variableName: "location" },
        c = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
          b,
        ],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        f = { kind: "Variable", name: "scale", variableName: "scale" },
        g = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometPYMKGridPaginationQuery",
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
                    { kind: "Variable", name: "count", variableName: "count" },
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                    b,
                  ],
                  kind: "FragmentSpread",
                  name: "FriendingCometPYMKGrid_viewer",
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
          name: "FriendingCometPYMKGridPaginationQuery",
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
                  alias: "pymk_grid",
                  args: c,
                  concreteType: "PeopleYouMayKnowConnection",
                  kind: "LinkedField",
                  name: "people_you_may_know",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "tracking_signature",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PeopleYouMayKnowEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "User",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            d,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "friendship_status",
                              storageKey: null,
                            },
                            e,
                            {
                              alias: null,
                              args: [
                                { kind: "Literal", name: "height", value: 160 },
                                f,
                                { kind: "Literal", name: "width", value: 160 },
                              ],
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "profile_picture",
                              plural: !1,
                              selections: g,
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "TextWithEntities",
                              kind: "LinkedField",
                              name: "social_context",
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
                              concreteType: "User",
                              kind: "LinkedField",
                              name: "social_context_top_mutual_friends",
                              plural: !0,
                              selections: [
                                d,
                                e,
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "site",
                                      value: "comet",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "url",
                                  storageKey: 'url(site:"comet")',
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "height",
                                      value: 16,
                                    },
                                    f,
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 16,
                                    },
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "profile_picture",
                                  plural: !1,
                                  selections: g,
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
                          name: "has_next_page",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "end_cursor",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: "pymk_grid",
                  args: c,
                  filters: ["location"],
                  handle: "connection",
                  key: "FriendingCometPYMKGrid_pymk_grid",
                  kind: "LinkedHandle",
                  name: "people_you_may_know",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4518065481541835",
          metadata: {},
          name: "FriendingCometPYMKGridPaginationQuery",
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
  "FriendingCometPYMKGrid_viewer.graphql",
  ["FriendingCometPYMKGridPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["pymk_grid"];
      return {
        argumentDefinitions: [
          { defaultValue: 20, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          {
            defaultValue: "FRIENDS_CENTER",
            kind: "LocalArgument",
            name: "location",
          },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: "count", cursor: "cursor", direction: "forward", path: a },
          ],
          refetch: {
            connection: {
              forward: { count: "count", cursor: "cursor" },
              backward: null,
              path: a,
            },
            fragmentPathInResult: ["viewer"],
            operation: b("FriendingCometPYMKGridPaginationQuery.graphql"),
          },
        },
        name: "FriendingCometPYMKGrid_viewer",
        selections: [
          {
            alias: "pymk_grid",
            args: [
              { kind: "Variable", name: "location", variableName: "location" },
            ],
            concreteType: "PeopleYouMayKnowConnection",
            kind: "LinkedField",
            name: "__FriendingCometPYMKGrid_pymk_grid_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "tracking_signature",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "PeopleYouMayKnowEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
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
                        name: "id",
                        storageKey: null,
                      },
                      {
                        args: [{ kind: "Literal", name: "size", value: 160 }],
                        kind: "FragmentSpread",
                        name: "FriendingCometPYMKCard_user",
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
                    name: "has_next_page",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
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
  "FriendingCometMainTabViewLeftRailSettingsMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3061851457252390",
        metadata: {},
        name: "FriendingCometMainTabViewLeftRailSettingsMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "FriendingCometAcceptedFriendRequestsPanel.react",
  [
    "fbt",
    "CometBadge.react",
    "CometImageIcon_DEPRECATED.react",
    "CometLegacyClickableListItemBase.react",
    "CometLink.react",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "CometTooltip.react",
    "FriendingCometAcceptedFriendRequestsPanel_user.graphql",
    "FriendingCometAcceptedFriendRequestsPanel_viewer.graphql",
    "FriendingCometPanel.react",
    "MWChatFacepile.re",
    "TetraText.react",
    "XCometMeTabControllerRouteBuilder",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react");
    function a(a) {
      var e, f;
      i !== void 0
        ? i
        : (i = b("FriendingCometAcceptedFriendRequestsPanel_user.graphql"));
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("FriendingCometAcceptedFriendRequestsPanel_viewer.graphql")),
        a.viewer
      );
      e =
        a == null
          ? void 0
          : (e = a.friend_confirmed_notifications) == null
          ? void 0
          : e.edges;
      f =
        (f =
          a == null
            ? void 0
            : (f = a.friend_confirmed_notifications) == null
            ? void 0
            : f.count) != null
          ? f
          : 0;
      if (f <= 0 || e == null || e.length === 0) return null;
      var g = null,
        l;
      if (f === 1) {
        var m, n, o;
        m =
          (m =
            (m = e[0]) == null
              ? void 0
              : (m = m.node) == null
              ? void 0
              : m.name) != null
            ? m
            : "";
        n =
          (n =
            a == null
              ? void 0
              : (n = a.friend_confirmed_notifications) == null
              ? void 0
              : (n = n.edges[0].node) == null
              ? void 0
              : (n = n.profile_picture) == null
              ? void 0
              : n.uri) != null
            ? n
            : "";
        o =
          (o =
            a == null
              ? void 0
              : (o = a.friend_confirmed_notifications) == null
              ? void 0
              : (o = o.edges[0].node) == null
              ? void 0
              : o.url) != null
            ? o
            : "";
        l = o;
        n = k.jsx(c("CometImageIcon_DEPRECATED.react"), { size: 60, src: n });
        g = h._("{name1} accepted your friend request.", [
          h._param(
            "name1",
            k.jsx(c("CometLink.react"), {
              href: o,
              routeTarget: "content",
              children: k.jsx("b", { children: m }),
            })
          ),
        ]);
      } else {
        var p, q, r, s;
        m =
          (o =
            (o = e[0]) == null
              ? void 0
              : (m = o.node) == null
              ? void 0
              : m.name) != null
            ? o
            : "";
        o =
          (o =
            (o = e[1]) == null
              ? void 0
              : (o = o.node) == null
              ? void 0
              : o.name) != null
            ? o
            : "";
        p =
          (p =
            a == null
              ? void 0
              : (p = a.friend_confirmed_notifications) == null
              ? void 0
              : (p = p.edges[0].node) == null
              ? void 0
              : (p = p.profile_picture) == null
              ? void 0
              : p.uri) != null
            ? p
            : "";
        q =
          (q =
            a == null
              ? void 0
              : (q = a.friend_confirmed_notifications) == null
              ? void 0
              : (q = q.edges[1].node) == null
              ? void 0
              : (q = q.profile_picture) == null
              ? void 0
              : q.uri) != null
            ? q
            : "";
        r =
          (r =
            a == null
              ? void 0
              : (r = a.friend_confirmed_notifications) == null
              ? void 0
              : (r = r.edges[0].node) == null
              ? void 0
              : r.url) != null
            ? r
            : "";
        s =
          (s =
            a == null
              ? void 0
              : (s = a.friend_confirmed_notifications) == null
              ? void 0
              : (s = s.edges[1].node) == null
              ? void 0
              : s.url) != null
            ? s
            : "";
        l = c("XCometMeTabControllerRouteBuilder").buildURL({
          tab: "friends_recent",
        });
        n = k.jsx(d("MWChatFacepile.re").make, {
          borderBetweenImages: !0,
          firstParticipantURI: p,
          secondParticipantURI: q,
          size: 60,
        });
        if (f === 2)
          g = h._("{users1} and {users2} accepted your friend requests.", [
            h._param(
              "users1",
              k.jsx(c("CometLink.react"), {
                href: r,
                routeTarget: "content",
                children: k.jsx("b", { children: m }),
              })
            ),
            h._param(
              "users2",
              k.jsx(c("CometLink.react"), {
                href: s,
                routeTarget: "content",
                children: k.jsx("b", { children: o }),
              })
            ),
          ]);
        else {
          p = [];
          for (var q = 2; q < e.length; q++) {
            var t;
            t =
              (t = e[q]) == null
                ? void 0
                : (t = t.node) == null
                ? void 0
                : t.name;
            t != null &&
              p.push(
                k.jsx(
                  c("TetraText.react"),
                  { color: "white", type: "body4", children: t },
                  q
                )
              );
          }
          g = h._("{names} and {=} accepted your friend requests.", [
            h._param(
              "names",
              k.jsxs("b", {
                children: [
                  k.jsx(c("CometLink.react"), {
                    href: r,
                    routeTarget: "content",
                    children: m,
                  }),
                  ",",
                  " ",
                  k.jsx(c("CometLink.react"), {
                    href: s,
                    routeTarget: "content",
                    children: o,
                  }),
                ],
              })
            ),
            h._param(
              "=",
              k.jsx("div", {
                className: "nc684nl6",
                children: h._("{=}", [
                  h._param(
                    "=",
                    k.jsx(c("CometTooltip.react"), {
                      align: "start",
                      tooltip: k.jsx("div", {
                        className: "cbu4d94t j83agx80",
                        children: p,
                      }),
                      children: h._({ "*": "{number} others", _1: "1 other" }, [
                        h._plural(f - 2, "number"),
                      ]),
                    })
                  ),
                ]),
              })
            ),
          ]);
        }
      }
      e =
        a == null
          ? void 0
          : (t = a.friend_confirmed_notifications) == null
          ? void 0
          : t.edges[0];
      r = (q = e == null ? void 0 : e.time_sent) != null ? q : 0;
      m = new Date(r * 1e3);
      o = (s = e == null ? void 0 : e.is_unseen) != null ? s : !0;
      p = k.jsxs(c("CometLegacyClickableListItemBase.react"), {
        addon: k.jsx("div", { children: n }),
        href: l,
        routeTarget: "content",
        children: [
          k.jsx(c("TetraText.react"), {
            color: "primary",
            numberOfLines: 3,
            type: "body3",
            children: g,
          }),
          k.jsx("div", {
            className: "knvmm38d",
            children: k.jsxs(c("TetraText.react"), {
              color: o ? "highlight" : "secondary",
              type: "meta3",
              children: [
                o ? k.jsx(c("CometBadge.react"), { color: "blue" }) : null,
                k.jsx(c("CometRelativeTimestamp.react"), {
                  date: m,
                  format: "normal",
                }),
              ],
            }),
          }),
        ],
      });
      return k.jsx(c("FriendingCometPanel.react"), {
        heading: h._("New Friends"),
        children: p,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometMainTabViewLeftRailSettingsMenu.entrypoint",
  [
    "FriendingCometMainTabViewLeftRailSettingsMenuQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            queryReference: {
              parameters: b(
                "FriendingCometMainTabViewLeftRailSettingsMenuQuery$Parameters"
              ),
              variables: {},
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "FriendingCometMainTabViewLeftRailSettingsMenu.react"
      ).__setRef("FriendingCometMainTabViewLeftRailSettingsMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometMainTabViewLeftRailSettingsButton.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "FriendingCometMainTabViewLeftRailSettingsMenu.entrypoint",
    "TetraCircleButton.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useState;
    function a() {
      var a = k(!1),
        b = a[0];
      a = a[1];
      return j.jsx(c("CometEntryPointPopoverTrigger.react"), {
        align: "end",
        entryPointParams: {},
        fallback: j.jsx(c("CometPopoverLoadingState.react"), {}),
        onVisibilityChange: a,
        otherProps: {},
        popoverEntryPoint: c(
          "FriendingCometMainTabViewLeftRailSettingsMenu.entrypoint"
        ),
        position: "below",
        preloadTrigger: "button",
        children: function (a, e, f, g, k, l) {
          return j.jsx(c("TetraCircleButton.react"), {
            color: b ? "highlight" : "primary",
            icon: d("fbicon")._(i("497567"), 20),
            label: h._("Edit Notification Settings"),
            onHoverIn: g,
            onHoverOut: k,
            onPress: e,
            onPressIn: l,
            ref: a,
            size: 36,
            type: b ? "deemphasized-overlay" : "normal",
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
  "FriendingCometSectionNavigationListItem.react",
  [
    "ix",
    "CometRouteMatch",
    "TetraAccessoryListCell.react",
    "TetraText.react",
    "fbicon",
    "gkx",
    "react",
    "useHostedRoute",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.headline,
        e = a.icon,
        f = a.showChevron;
      f = f === void 0 ? !1 : f;
      a = a.url;
      var g = d("CometRouteMatch").useCurrentRouteMatcher(
          d("CometRouteMatch").MatchFunctions.pathMatchFunction
        ),
        j = c("useHostedRoute")();
      j = j == null && g(a);
      return i.jsx(c("TetraAccessoryListCell.react"), {
        addOnPrimary: {
          color: j ? "blue" : "gray",
          icon: e,
          size: 36,
          type: "contained-icon",
        },
        addOnSecondary: f
          ? {
              color: "secondary",
              icon: d("fbicon")._(h("492536"), 20),
              type: "icon",
            }
          : null,
        headline: i.jsx(c("TetraText.react"), {
          type: "headline3",
          children: b,
        }),
        linkProps: {
          passthroughProps: { ref: "FRIENDS_HOME_PLINK_CLICK" },
          url: a,
        },
        selected: j,
        selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometSectionNavigationPanel.react",
  [
    "fbt",
    "ix",
    "FriendingCometSectionNavigationListItem.react",
    "XCometFriendingControllerRouteBuilder",
    "XCometFriendingSectionControllerRouteBuilder",
    "fbicon",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b, e;
      a = (a = c("qex")._("1925622")) != null ? a : !1;
      b = (b = c("qex")._("1907931")) != null ? b : !1;
      e = (e = c("qex")._("1907930")) != null ? e : !1;
      var f = [];
      (a || b || e) &&
        f.push(
          j.jsx(
            c("FriendingCometSectionNavigationListItem.react"),
            {
              headline: h._("Home"),
              icon: d("fbicon")._(i("487558"), 20),
              url: c("XCometFriendingControllerRouteBuilder").buildURL({}),
            },
            "home"
          )
        );
      e &&
        (f.push(
          j.jsx(
            c("FriendingCometSectionNavigationListItem.react"),
            {
              headline: h._("Friend Requests"),
              icon: d("fbicon")._(i("502671"), 20),
              showChevron: !0,
              url: c("XCometFriendingSectionControllerRouteBuilder").buildURL({
                friending_section: "requests",
              }),
            },
            "requests"
          )
        ),
        f.push(
          j.jsx(
            c("FriendingCometSectionNavigationListItem.react"),
            {
              headline: h._("Suggestions"),
              icon: d("fbicon")._(i("497885"), 20),
              showChevron: !0,
              url: c("XCometFriendingSectionControllerRouteBuilder").buildURL({
                friending_section: "suggestions",
              }),
            },
            "suggestions"
          )
        ));
      b &&
        f.push(
          j.jsx(
            c("FriendingCometSectionNavigationListItem.react"),
            {
              headline: h._("All Friends"),
              icon: d("fbicon")._(i("1339093"), 20),
              showChevron: !0,
              url: c("XCometFriendingSectionControllerRouteBuilder").buildURL({
                friending_section: "list",
              }),
            },
            "all-friends"
          )
        );
      a &&
        f.push(
          j.jsx(
            c("FriendingCometSectionNavigationListItem.react"),
            {
              headline: h._("Birthdays"),
              icon: d("fbicon")._(i("1002576"), 20),
              url: c("XCometFriendingSectionControllerRouteBuilder").buildURL({
                friending_section: "birthdays",
              }),
            },
            "birthdays"
          )
        );
      e &&
        f.push(
          j.jsx(
            c("FriendingCometSectionNavigationListItem.react"),
            {
              headline: h._("Custom Lists"),
              icon: d("fbicon")._(i("1339093"), 20),
              showChevron: !0,
              url: c("XCometFriendingSectionControllerRouteBuilder").buildURL({
                friending_section: "friendlist",
              }),
            },
            "friendlist"
          )
        );
      return f.length !== 0
        ? j.jsx("div", { className: "tr9rh885", children: f })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometMainTabViewLeftRail.react",
  [
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometLegacyListItemSeparator.react",
    "CometRelay",
    "FriendingCometAcceptedFriendRequestsPanel.react",
    "FriendingCometFriendLimitWarning.react",
    "FriendingCometFriendRequestsPanel.react",
    "FriendingCometFriendsBadgeCountClearMutation",
    "FriendingCometMainTabViewLeftRailSettingsButton.react",
    "FriendingCometMainTabViewLeftRail_viewer.graphql",
    "FriendingCometPYMKPanel.react",
    "FriendingCometSectionNavigationPanel.react",
    "react",
    "useSimpleImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback;
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("FriendingCometMainTabViewLeftRail_viewer.graphql")),
          a.viewer
        ),
        g = d("CometRelay").useRelayEnvironment();
      e =
        f == null
          ? void 0
          : (e = f.friend_confirmed_notifications) == null
          ? void 0
          : e.edges;
      var k = [];
      e != null &&
        (k = e.map(function (a, b) {
          return (b = a == null ? void 0 : a.notification_id) != null ? b : "";
        }));
      e = j(
        function () {
          d("FriendingCometFriendsBadgeCountClearMutation").commit(g, {
            action_type: "read",
            notif_ids: k,
            source: "friending_tab",
          });
        },
        [g, k]
      );
      c("useSimpleImpression")(e);
      return i.jsx(c("CometLeftRailComponent.react"), {
        header: i.jsx(c("CometLeftRailHeader.react"), {
          auxiliary: i.jsx(
            c("FriendingCometMainTabViewLeftRailSettingsButton.react"),
            {}
          ),
          title: a.title,
        }),
        primaryNav: i.jsxs("div", {
          className: "rtmu0sqt",
          children: [
            i.jsx(c("FriendingCometSectionNavigationPanel.react"), {}),
            !a.shouldShowFriendingPanels &&
            ((f == null ? void 0 : f.should_show_proactive_friending_alert) ===
              !0 ||
              k.length > 0)
              ? i.jsx(c("CometLegacyListItemSeparator.react"), {})
              : null,
            (f == null ? void 0 : f.should_show_proactive_friending_alert) ===
            !0
              ? i.jsx(c("FriendingCometFriendLimitWarning.react"), {})
              : null,
            k.length > 0
              ? i.jsx(c("FriendingCometAcceptedFriendRequestsPanel.react"), {
                  viewer: f,
                })
              : null,
            a.shouldShowFriendingPanels && k.length > 0
              ? i.jsx(c("CometLegacyListItemSeparator.react"), {})
              : null,
            a.shouldShowFriendingPanels
              ? i.jsx(c("FriendingCometFriendRequestsPanel.react"), {
                  viewerConnection: f,
                })
              : null,
            a.shouldShowFriendingPanels && a.pymkCount > 0
              ? i.jsxs(i.Fragment, {
                  children: [
                    i.jsx(c("CometLegacyListItemSeparator.react"), {}),
                    i.jsx(c("FriendingCometPYMKPanel.react"), { viewer: f }),
                  ],
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
  "FriendingCometFriendRequestsCard.react",
  [
    "fbt",
    "ActorHovercard.react",
    "CometCard.react",
    "CometImage.react",
    "CometLink.react",
    "CometRelay",
    "FriendingCometFriendRequestConfirmMutation",
    "FriendingCometFriendRequestDeleteMutation",
    "FriendingCometFriendRequestStrings",
    "FriendingCometFriendRequestsCard_user.graphql",
    "FriendingCometMutualFriendsSocialContext.react",
    "TetraButton.react",
    "TetraText.react",
    "react",
    "stylex",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useRef,
      m = e.useState,
      n = h._("Request confirmed"),
      o = d("FriendingCometFriendRequestStrings").requestRejected(),
      p = {
        button: { width: "k4urcfbm" },
        buttonSpacer: { height: "tv7at329" },
        cardContent: {
          paddingTop: "pybr56ya",
          paddingEnd: "d1544ag0",
          paddingBottom: "f10w8fjw",
          paddingStart: "tw6a2znq",
        },
        container: { width: "k4urcfbm" },
        context: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          height: "mudddibn",
          paddingBottom: "r8blr3vg",
          width: "k4urcfbm",
        },
        deleteButton: { paddingTop: "ipjc6fyt" },
        image: { height: "datstx6m", objectFit: "bixrwtb6", width: "k4urcfbm" },
        imageContainer: {
          paddingBottom: "d5it6em2",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
        imageLink: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          display: "a8c37x1j",
        },
        inset: {
          bottom: "i09qtzwb",
          boxShadow: "oaz4zybt",
          height: "ay7djpcl",
          position: "pmk7jnqg",
          width: "k4urcfbm",
        },
        textWrapper: { marginBottom: "tvmbv18p", marginTop: "aahdfvyu" },
      };
    function a(a) {
      var e = a.confirmButtonReduceEmphasis;
      e = e === void 0 ? !0 : e;
      var f = a.dropShadow;
      f = f === void 0 ? 2 : f;
      var g = a.logClick,
        q = a.logConfirm,
        r = a.logDelete,
        s = a.logImpression,
        t = a.profileURI,
        u = a.responseRef;
      a = a.user;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("FriendingCometFriendRequestsCard_user.graphql")),
        a
      );
      var v = d("CometRelay").useRelayEnvironment(),
        w = a.friendship_status,
        x = a.id,
        y = a.name,
        z = a.profile_picture;
      z = z == null ? void 0 : z.uri;
      var A = l(!1),
        B = m(null),
        C = B[0],
        D = B[1];
      B = m(null);
      var E = B[0],
        F = B[1];
      w === "ARE_FRIENDS" && C !== n && D(n);
      w === "CAN_REQUEST" && C !== o && D(o);
      var G = k(function (a) {
        F(function () {
          return a.name === "NetworkTransportError"
            ? h._("Connection error. Please check your Internet connection.")
            : a.description;
        });
      }, []);
      B = k(
        function () {
          x != null &&
            (d("FriendingCometFriendRequestConfirmMutation").commit(
              v,
              x,
              u,
              void 0,
              G
            ),
            F(null),
            D(function () {
              return n;
            }),
            q != null && q());
        },
        [v, G, x, q, u]
      );
      var H = k(
          function () {
            x != null &&
              (d("FriendingCometFriendRequestDeleteMutation").commit(
                v,
                x,
                u,
                void 0,
                G
              ),
              F(null),
              D(function () {
                return o;
              }),
              r != null && r());
          },
          [v, G, x, r, u]
        ),
        I = k(
          function () {
            x != null && !A.current && s != null && (s(), (A.current = !0));
          },
          [x, s]
        );
      I = c("useVisibilityObserver")({ onVisible: I });
      if (x == null || z == null || y == null) return null;
      var J = null;
      if (E !== null) {
        J = j.jsx(c("TetraText.react"), {
          color: "secondary",
          type: "body3",
          children: (E = E) != null ? E : "",
        });
      } else {
        E =
          (E = (E = a.social_context) == null ? void 0 : E.text) != null
            ? E
            : "";
        J =
          E !== ""
            ? j.jsx(c("FriendingCometMutualFriendsSocialContext.react"), {
                iconSize: 16,
                socialContextText: E,
                textType: "body3",
                truncateContextText: !0,
                user: a,
              })
            : null;
      }
      E =
        w === "INCOMING_REQUEST"
          ? j.jsx("div", {
              className: c("stylex")(p.button),
              children: j.jsx(c("TetraButton.react"), {
                label: h._("Confirm"),
                onPress: B,
                reduceEmphasis: e,
                type: "primary",
              }),
            })
          : j.jsx("div", {
              className: c("stylex")(p.button, p.deleteButton, p.buttonSpacer),
            });
      a =
        w === "INCOMING_REQUEST"
          ? j.jsx("div", {
              className: c("stylex")(p.button, p.deleteButton),
              children: j.jsx(c("TetraButton.react"), {
                label: d("FriendingCometFriendRequestStrings").reject(),
                onPress: H,
                type: "secondary",
              }),
            })
          : j.jsx("div", {
              className: c("stylex")(p.button),
              children: j.jsx(c("TetraButton.react"), {
                disabled: !0,
                label: C,
                reduceEmphasis: !0,
                type: "secondary",
              }),
            });
      return j.jsx("div", {
        className: c("stylex")(p.container),
        "data-testid": void 0,
        ref: I,
        children: j.jsxs(c("CometCard.react"), {
          background: "white",
          border: "solid",
          dropShadow: f,
          children: [
            j.jsxs("div", {
              className: c("stylex")(p.imageContainer),
              children: [
                j.jsx(c("CometLink.react"), {
                  href: t,
                  onClick: g,
                  xstyle: p.imageLink,
                  children: j.jsx(c("CometImage.react"), {
                    alt: "Profile Picture",
                    src: z,
                    xstyle: p.image,
                  }),
                }),
                j.jsx("div", { className: c("stylex")(p.inset) }),
              ],
            }),
            j.jsxs("div", {
              className: c("stylex")(p.cardContent),
              children: [
                j.jsx(c("ActorHovercard.react"), {
                  actorID: x,
                  children: function (a) {
                    return j.jsx(c("CometLink.react"), {
                      "aria-hidden": !1,
                      href: t,
                      onClick: g,
                      ref: a,
                      children: j.jsx("div", {
                        className: c("stylex")(p.textWrapper),
                        children: j.jsx(c("TetraText.react"), {
                          color: "primary",
                          numberOfLines: 1,
                          type: "bodyLink2",
                          children: y,
                        }),
                      }),
                    });
                  },
                }),
                j.jsx("div", {
                  className: c("stylex")(p.context),
                  children: J,
                }),
                E,
                a,
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
  "FriendingCometFriendRequestsGrid.react",
  [
    "fbt",
    "ix",
    "CometFlexibleGrid.react",
    "CometPressable.react",
    "CometRelay",
    "CometUnitHeader.react",
    "FriendingCometFriendRequestsCard.react",
    "FriendingCometFriendRequestsGrid_viewer.graphql",
    "FriendingCometHScrollGlimmerCard.react",
    "FriendingCometTestIDHelper",
    "RequestClickFalcoEvent",
    "RequestSeenFalcoEvent",
    "TetraIcon.react",
    "TetraText.react",
    "WebPixelRatio",
    "XCometFriendingSectionControllerRouteBuilder",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useTransition;
    function a(a) {
      var e = m(),
        f = e[0],
        g = e[1];
      e = d("CometRelay").useBlockingPaginationFragment(
        j !== void 0
          ? j
          : (j = b("FriendingCometFriendRequestsGrid_viewer.graphql")),
        a.viewer
      );
      a = e.data;
      var n = e.hasNext,
        o = e.loadNext,
        p = e.refetch,
        q = l(function (a) {
          return function () {
            a != null &&
              c("RequestClickFalcoEvent").log(function () {
                return { request_id: a, request_surface: "friends_tab" };
              });
          };
        }, []),
        r = l(function (a, b) {
          return function () {
            a != null &&
              c("RequestSeenFalcoEvent").log(function () {
                return {
                  request_id: a,
                  request_position: b,
                  request_surface: "friends_tab",
                };
              });
          };
        }, []),
        s =
          a == null
            ? void 0
            : (e = a.friend_requests) == null
            ? void 0
            : e.edges,
        t = 200,
        u = 20;
      a = function () {
        if (!n || f) return;
        if (s != null) {
          var a;
          ((a = s[s.length - 1]) == null
            ? void 0
            : (a = a.node) == null
            ? void 0
            : a.friendship_status) === "INCOMING_REQUEST"
            ? g(function () {
                o(u, {
                  onComplete: function (a) {
                    a != null &&
                      p({
                        count: Math.min(s.length + u, t),
                        scale: d("WebPixelRatio").get(),
                      });
                  },
                });
              })
            : g(function () {
                p({
                  count: Math.min(s.length + u, t),
                  scale: d("WebPixelRatio").get(),
                });
              });
        }
      };
      if (s == null) return null;
      e = s
        .map(function (a, b) {
          var d, e;
          a = a == null ? void 0 : a.node;
          d = c("XCometFriendingSectionControllerRouteBuilder").buildURL({
            friending_section: "requests",
            profile_id: (d = a == null ? void 0 : a.id) != null ? d : "",
          });
          return a != null
            ? k.jsx(
                c("FriendingCometFriendRequestsCard.react"),
                {
                  confirmButtonReduceEmphasis: !1,
                  dropShadow: 1,
                  logClick: q(a.id),
                  logImpression: r(a.id, b + 1),
                  profileURI: d,
                  responseRef: "friends_tab",
                  testid: void 0,
                  user: a,
                },
                a.id
              )
            : null;
        })
        .filter(Boolean);
      var v = null;
      if (f) {
        var w = Array.from({ length: 10 }, function (a, b) {
          return k.jsx(c("FriendingCometHScrollGlimmerCard.react"), {}, b);
        });
        v = k.jsx(c("CometFlexibleGrid.react"), {
          columnMaxWidth: 250,
          columnMinWidth: 200,
          justify: "start",
          children: w,
        });
      } else
        n &&
          (v = k.jsx("div", {
            className: "stjgntxs ni8dbmo4 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
            children: k.jsx(c("CometPressable.react"), {
              expanding: !0,
              onPress: a,
              children: k.jsxs("div", {
                className:
                  "k4urcfbm f10w8fjw pybr56ya taijpn5t btwxx1t3 j83agx80 bp9cbjyn",
                children: [
                  k.jsx("div", {
                    className: "dflh9lhu",
                    children: k.jsx(c("TetraText.react"), {
                      color: "highlight",
                      type: "button1",
                      children: h._("See More"),
                    }),
                  }),
                  k.jsx(c("TetraIcon.react"), {
                    color: "highlight",
                    icon: d("fbicon")._(i("481882"), 16),
                  }),
                ],
              }),
            }),
          }));
      w = h._("Friend Requests");
      a = h._("See All");
      var x = c("XCometFriendingSectionControllerRouteBuilder").buildURL({
        friending_section: "requests",
      });
      return k.jsxs("div", {
        children: [
          k.jsx("div", {
            className: "ihqw7lf3",
            children: k.jsx(c("CometUnitHeader.react"), {
              action: a,
              actionLinkProps: { url: x },
              headline: w,
              level: 2,
            }),
          }),
          k.jsxs("div", {
            className: "dati1w0a hv4rvrfc",
            children: [
              k.jsx("div", {
                className: "f10w8fjw",
                children: k.jsx(c("CometFlexibleGrid.react"), {
                  columnMaxWidth: 250,
                  columnMinWidth: 200,
                  justify: "start",
                  minItems: n ? e.length - 10 : e.length,
                  children: e,
                }),
              }),
              v,
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
  "PYMKLocation",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ACCOUNT_CONFIRM_CLIFF: "account_confirm_cliff",
      CONTACT_SUGGEST_FRIEND: "contact_suggest_friend",
      CTX_PYMK_NETEGO: "ctx_netego",
      EMPTY_FEED: "empty_feed",
      FEED_CONTEXT: "feed_context",
      FRIEND_BROWSER: "friend_browser",
      FRIEND_BROWSER_LIST: "friend_browser_list",
      FRIEND_FINDER: "friend_finder",
      FRIENDS_CENTER: "friends_center",
      FRIENDS_CENTER_REQUESTS: "friends_center_requests",
      FRIENDS_HOME_FALLBACK: "friends_home_fallback",
      FRIENDS_HOME_MAIN: "friends_home_main",
      FRIENDS_HOME_SUGGESTIONS: "friends_home_suggestions",
      FRIENDS_HOME_THEMED_PYMK: "friends_home_themed_pymk",
      FULL_SCREEN_PYMK: "full_screen_pymk",
      GRIFFIN_TAB: "griffin_tab",
      INLINE_FEED: "inline_feed",
      INTEGRITY_OBJECTS: "integrity_objects",
      JAPAN_CI_FRIENDS_SUGGESTION: "japan_ci_friends_suggestion",
      MOBILE_IN_FEED: "mobile_in_feed",
      NEEDY_USER_FEED: "needy_user_feed",
      NEW_ACCOUNT_PYMK_GENERATION: "new_account_pymk_generation",
      NUDGE_CAMPAIGN_NOTIFICATION: "campaign_notification",
      NULLSTATE_SEARCH_PYMK_UPSELL: "nullstate_search_pymk_upsell",
      NUX_QUICK_FRIENDING: "nux_quick_friending",
      PROFILE_FRIEND_LIST: "profile_friend_list",
      PROFILE_SUGGESTED_FRIENDS: "profile_suggested_friends",
      PYMK_API_NUX: "nux",
      PYMK_CONTEXT_DIALOG: "contextual",
      PYMK_CONTEXT_DIALOG_ALL_SOURCES: "contextual_all_sources",
      PYMK_CONTEXT_REQS: "ajax/reqs.php",
      PYMK_EMAIL: "email",
      PYMK_EVENTS: "events",
      PYMK_FALLBACK: "pymk_fallback",
      PYMK_FEED_STORY: "feed_story",
      PYMK_FIND_FRIENDS: "/find-friends/index.php",
      PYMK_HOME: "/home.php",
      PYMK_JEWEL: "pymk_jewel",
      PYMK_JEWEL_FIRST_PAGE: "pymk_jewel_first_page",
      PYMK_M_BASIC_HOME: "m_basic_home",
      PYMK_M_CHAIN_FRIEND_ACCEPT: "m_chain_friend_accept",
      PYMK_M_CHAIN_FRIEND_ACCEPT_NOTIFICATION: "m_chain_friend_accept_notif",
      PYMK_M_CHAIN_FRIEND_REQUEST: "m_chain_friend_request",
      PYMK_M_CHAIN_FRIEND_REQUEST_PENDING: "m_chain_friend_request_pending",
      PYMK_M_FRIEND_REQUESTS_PAGE: "m_friend_requests_page",
      PYMK_M_HOME_WELCOME: "m_home_welcome",
      PYMK_M_SEARCH: "m_search",
      PYMK_MESSENGER: "messenger",
      PYMK_MOBILE_FEED_ZERO_STATE: "mobile_feed_zero_state",
      PYMK_MOBILE_JEWEL: "mobile_jewel",
      PYMK_MOBILE_NATIVE_APP_URL_SEGUE: "native_app_url_segue",
      PYMK_MOBILE_NOTIFICATIONS_TAB: "mobile_notifications_tab",
      PYMK_MOBILE_SIDEBAR: "mobile_sidebar",
      PYMK_MOBILE_TOP_OF_FEED: "mobile_top_of_feed",
      PYMK_NETEGO: "netego",
      PYMK_NETEGO_ALBUM: "netego_album",
      PYMK_NETEGO_CANVAS: "netego_canvas",
      PYMK_NETEGO_GROUP: "netego_group",
      PYMK_NETEGO_MESSENGER: "netego_messenger",
      PYMK_NETEGO_NOTE: "netego_note",
      PYMK_NETEGO_PERMALINK: "netego_permalink",
      PYMK_NETEGO_PROFILE: "netego_profile",
      PYMK_NETEGO_REPLACE: "netego_replace",
      PYMK_NETEGO_TIMELINE: "netego_timeline",
      PYMK_NETEGO_TIMELINE_COLLECTIONS: "netego_timeline_collections",
      PYMK_NUX_FOLLOW: "pymk_nux_follow",
      PYMK_NUX_MEGAPHONE: "nux_megaphone",
      PYMK_NUX_WIZARD: "pymk_nux_wizard",
      PYMK_PROFILE_QUESTION: "profile_question",
      PYMK_QUICK_PROMOTION: "quick_promotion",
      PYMK_SEARCH: "search",
      PYMK_SEARCH_RANKING: "search_ranking",
      PYMK_STORY_CARD: "pymk_story_card",
      PYMK_STORY_SUGGESTION_LIST: "pymk_story_suggestion_list",
      PYMK_TIMELINE_CHAIN: "pymk_timeline_chain",
      PYMK_UNKNOWN: "unknown",
      PYMK_UPSELL: "pymk_upsell",
      PYMK_WIZARD: "wizard",
      REQUESTS_PAGE_PYMK: "requests_page_pymk",
      RHC: "rhc",
      SAFETY_TERRORISM_PYMK: "safety_terrorism_pymk",
      SELF_PROFILE: "self_profile",
      SPOTLIGHT_PYMK: "spotlight_pymk",
      TEST: "test",
      TOP_OF_FEED: "top_of_feed",
    });
    f["default"] = a;
  },
  66
);
__d(
  "FriendingCometPYMKGrid.react",
  [
    "fbt",
    "CometFlexibleGrid.react",
    "CometRelay",
    "CometUnitHeader.react",
    "FriendingCometHScrollGlimmerCard.react",
    "FriendingCometPYMKBlacklistSuggestionMutation",
    "FriendingCometPYMKCard.react",
    "FriendingCometPYMKGrid_viewer.graphql",
    "FriendingCometTestIDHelper",
    "RegularPymkAddFalcoEvent",
    "RegularPymkImpFalcoEvent",
    "RegularPymkProfileFalcoEvent",
    "RegularPymkXoutFalcoEvent",
    "XCometFriendingSectionControllerRouteBuilder",
    "react",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useTransition;
    function a(a) {
      var e = d("CometRelay").useRelayEnvironment(),
        f = l(),
        g = f[0],
        m = f[1];
      f = d("CometRelay").useBlockingPaginationFragment(
        i !== void 0 ? i : (i = b("FriendingCometPYMKGrid_viewer.graphql")),
        a.viewer
      );
      a = f.data;
      var n = f.hasNext,
        o = f.loadNext,
        p =
          a == null
            ? void 0
            : (f = a.pymk_grid) == null
            ? void 0
            : f.tracking_signature,
        q = k(
          function (a) {
            return function () {
              a != null &&
                c("RegularPymkAddFalcoEvent").log(function () {
                  return {
                    pymk_id: a,
                    pymk_location: "friends_center",
                    pymk_signature: p,
                  };
                });
            };
          },
          [p]
        ),
        r = k(
          function (a) {
            return function () {
              a != null &&
                c("RegularPymkProfileFalcoEvent").log(function () {
                  return {
                    pymk_id: a,
                    pymk_location: "friends_center",
                    pymk_signature: p,
                  };
                });
            };
          },
          [p]
        ),
        s = k(
          function (a) {
            return function () {
              a != null &&
                c("RegularPymkImpFalcoEvent").log(function () {
                  return {
                    pymk_id: a,
                    pymk_location: "friends_center",
                    pymk_signature: p,
                  };
                });
            };
          },
          [p]
        );
      a = a == null ? void 0 : (f = a.pymk_grid) == null ? void 0 : f.edges;
      f = function () {
        if (!n || g) return;
        m(function () {
          o(20);
        });
      };
      f = c("useVisibilityObserver")({ onVisible: f });
      if (a == null || a.length === 0) return null;
      var t = function (a) {
        return function () {
          a != null &&
            (d("FriendingCometPYMKBlacklistSuggestionMutation").commit(
              e,
              "FriendingCometPYMKGrid_pymk_grid",
              d("CometRelay").VIEWER_ID,
              a,
              "FRIENDS_CENTER",
              "FRIENDS_CENTER"
            ),
            c("RegularPymkXoutFalcoEvent").log(function () {
              return {
                pymk_id: a,
                pymk_location: "friends_center",
                pymk_signature: p,
              };
            }));
        };
      };
      a = a
        .map(function (a) {
          var b;
          a = a == null ? void 0 : a.node;
          b = c("XCometFriendingSectionControllerRouteBuilder").buildURL({
            friending_section: "suggestions",
            profile_id: (b = a == null ? void 0 : a.id) != null ? b : "",
          });
          return a != null
            ? j.jsx(
                c("FriendingCometPYMKCard.react"),
                {
                  addFriendSource: "people_you_may_know",
                  cancelRequestSource: "pymk",
                  dropShadow: 1,
                  hasButtonIcons: !1,
                  hasRemoveTextButton: !0,
                  logAddFriend: q(a.id),
                  logClick: r(a.id),
                  logImpression: s(a.id),
                  onRemove: t(a.id),
                  profileURI: b,
                  pymkLocation: "friends_center",
                  user: a,
                },
                a.id
              )
            : null;
        })
        .filter(Boolean);
      var u = null;
      if (n || g) {
        var v = Array.from({ length: 10 }, function (a, b) {
          return j.jsx(c("FriendingCometHScrollGlimmerCard.react"), {}, b);
        });
        u = j.jsx("div", {
          "data-testid": void 0,
          ref: f,
          children: j.jsx(c("CometFlexibleGrid.react"), {
            columnMaxWidth: 250,
            columnMinWidth: 200,
            justify: "start",
            children: v,
          }),
        });
      }
      f = h._("People You May Know");
      v = h._("See All");
      var w = c("XCometFriendingSectionControllerRouteBuilder").buildURL({
        friending_section: "suggestions",
      });
      return j.jsxs("div", {
        children: [
          j.jsx("div", {
            className: "ihqw7lf3",
            children: j.jsx(c("CometUnitHeader.react"), {
              action: v,
              actionLinkProps: { url: w },
              headline: f,
              level: 2,
            }),
          }),
          j.jsxs("div", {
            className: "dati1w0a hv4rvrfc",
            children: [
              j.jsx("div", {
                className: "f10w8fjw",
                children: j.jsx(c("CometFlexibleGrid.react"), {
                  columnMaxWidth: 250,
                  columnMinWidth: 200,
                  justify: "start",
                  minItems: n ? a.length - 10 : a.length,
                  children: a,
                }),
              }),
              u,
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
  "FriendingCometMainTabViewMainContent.react",
  [
    "CometLegacyListItemSeparator.react",
    "CometRelay",
    "FriendingCometFriendRequestsGrid.react",
    "FriendingCometMainTabViewMainContent_viewer.graphql",
    "FriendingCometNullStateView.react",
    "FriendingCometPYMKGrid.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.pymkCount,
        f = a.requestsCount,
        g = a.shouldShowHScroll;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("FriendingCometMainTabViewMainContent_viewer.graphql")),
        a.viewer
      );
      return !g
        ? i.jsx(c("FriendingCometNullStateView.react"), {
            hasRequestsOrSuggestions: e + f > 0,
          })
        : i.jsxs("div", {
            className: "lt9micmv ofv0k9yr gl4o1x5y aodizinl",
            children: [
              f > 0
                ? i.jsx(c("FriendingCometFriendRequestsGrid.react"), {
                    viewer: a,
                  })
                : null,
              f > 0 && e > 0
                ? i.jsx(c("CometLegacyListItemSeparator.react"), {})
                : null,
              e > 0
                ? i.jsx(c("FriendingCometPYMKGrid.react"), { viewer: a })
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
  "FriendingCometMainTabView.react",
  [
    "fbt",
    "CometLeftRailAndMainContentContainer.react",
    "CometRelay",
    "FriendingCometMainTabViewLeftRail.react",
    "FriendingCometMainTabViewMainContent.react",
    "FriendingCometMainTabView_viewer.graphql",
    "FriendsCenterOpenedFalcoEvent",
    "qex",
    "react",
    "useCurrentRoute",
    "useRoutePassthroughProps",
    "useSimpleImpression",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback;
    function a(a) {
      var e,
        f,
        g,
        l,
        m = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("FriendingCometMainTabView_viewer.graphql")),
          a.viewer
        );
      e =
        (e =
          (e = m.friends_container_request_count) == null ? void 0 : e.count) !=
        null
          ? e
          : 0;
      f =
        (f = (f = m.friends_container_pymk_count) == null ? void 0 : f.count) !=
        null
          ? f
          : 0;
      var n = c("useRoutePassthroughProps")(),
        o =
          (n == null ? void 0 : n.ref) != null
            ? String(n == null ? void 0 : n.ref)
            : null,
        p =
          (n == null ? void 0 : n.ref_tab) != null
            ? String(n == null ? void 0 : n.ref_tab)
            : null;
      n = k(
        function () {
          c("FriendsCenterOpenedFalcoEvent").log(function () {
            return { initial_tab: "main", ref_tab: p, source_ref: o };
          });
        },
        [p, o]
      );
      c("useSimpleImpression")(n);
      n = h._("Friends");
      g = (g = c("qex")._("1907930")) != null ? g : !1;
      var q = c("useCurrentRoute")(),
        r = a.routeProps.profileID;
      l =
        (l = a.children) != null
          ? l
          : q != null &&
            (q == null ? void 0 : q.params.friending_section) === "birthdays"
          ? j.jsx(d("CometRelay").EntryPointContainer, {
              entryPointReference: a.entryPoints.birthdaysEntryPoint,
              props: {},
            })
          : r != null
          ? j.jsx(d("CometRelay").EntryPointContainer, {
              entryPointReference: a.entryPoints.profileEntryPoint,
              props: { routeProps: { userID: r, userVanity: null } },
            })
          : j.jsx(c("FriendingCometMainTabViewMainContent.react"), {
              pymkCount: f,
              requestsCount: e,
              shouldShowHScroll: g,
              viewer: m,
            });
      return j.jsx(c("CometLeftRailAndMainContentContainer.react"), {
        leftRailContent: j.jsx(c("FriendingCometMainTabViewLeftRail.react"), {
          pymkCount: f,
          shouldShowFriendingPanels: !g,
          title: n,
          viewer: m,
        }),
        leftRailHeading: n,
        leftRailPrimary: a.children == null,
        mainContent: l,
        mainContentHeading: n,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometRoot.react",
  [
    "fbt",
    "CometContentArea.react",
    "CometErrorBoundary.react",
    "CometLeftRailAndMainContentContainer.react",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometListCellGlimmer.react",
    "CometPlaceholder.react",
    "CometRelay",
    "FriendingCometMainTabView.react",
    "FriendingCometRootQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function k(a) {
      var e = a.children,
        f = a.entryPoints,
        g = a.friendingCometRootQueryReference;
      a = a.routeProps;
      g = d("CometRelay").usePreloadedQuery(
        i !== void 0 ? i : (i = b("FriendingCometRootQuery.graphql")),
        g
      );
      return g.viewer != null
        ? j.jsx(c("FriendingCometMainTabView.react"), {
            children: e,
            entryPoints: f,
            routeProps: a,
            viewer: g.viewer,
          })
        : null;
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.entryPoints,
        d = a.props;
      a = a.queries;
      var e = h._("Friends");
      return j.jsx(c("CometErrorBoundary.react"), {
        fallback: function () {
          return j.jsx(c("CometLeftRailAndMainContentContainer.react"), {
            leftRailContent: j.jsx(c("CometLeftRailComponent.react"), {
              header: j.jsx(c("CometLeftRailHeader.react"), { title: e }),
              primaryNav: h._("Error loading friend requests"),
            }),
            leftRailHeading: e,
            leftRailPrimary: d.children == null,
            mainContent: j.jsx(c("CometContentArea.react"), {
              children: j.jsx("div", {}),
            }),
            mainContentHeading: e,
          });
        },
        children: j.jsx(c("CometPlaceholder.react"), {
          fallback: j.jsx(c("CometLeftRailAndMainContentContainer.react"), {
            leftRailContent: j.jsx(c("CometLeftRailComponent.react"), {
              header: j.jsx(c("CometLeftRailHeader.react"), { title: e }),
              primaryNav: j.jsx(c("CometListCellGlimmer.react"), {
                imageSize: 60,
                imageStyle: "circle",
                numberOfItems: 4,
              }),
            }),
            leftRailHeading: e,
            leftRailPrimary: d.children == null,
            mainContent: j.jsx(c("CometContentArea.react"), {
              children: j.jsx("div", {}),
            }),
            mainContentHeading: e,
          }),
          children: j.jsx(k, {
            children: d.children,
            entryPoints: b,
            friendingCometRootQueryReference:
              a.friendingCometRootQueryReference,
            routeProps: d.routeProps,
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
