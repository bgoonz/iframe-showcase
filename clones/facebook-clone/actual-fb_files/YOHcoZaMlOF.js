if (self.CavalryLogger) {
  CavalryLogger.start_js(["18S3E73"]);
}

__d(
  "GroupCometComposerCreateDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3708105122624507",
        metadata: {},
        name: "GroupCometComposerCreateDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupRoomLobbyQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4790549500978378",
        metadata: {},
        name: "GroupRoomLobbyQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedInlineComposerWOYM_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedInlineComposerWOYM_profile",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
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
  "RoomsJoinDialogContainerCometQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4021945797823698",
        metadata: {},
        name: "RoomsJoinDialogContainerCometQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "RoomsLobbyEntryPointDialogTrigger_room.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RoomsLobbyEntryPointDialogTrigger_room",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_hash",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_surface",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_end_calls",
          storageKey: null,
        },
      ],
      type: "MessengerCallInviteLink",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useJoinableVideoChatsRoomUpdateSubscription.graphql",
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
          name: "was_removed",
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
        e = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
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
          name: "__typename",
          storageKey: null,
        },
        i = { kind: "Variable", name: "scale", variableName: "scale" },
        j = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 160 },
            i,
            { kind: "Literal", name: "width", value: 160 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: d,
          storageKey: null,
        },
        k = [j],
        l = [g, j];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useJoinableVideoChatsRoomUpdateSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType:
                "JoinableVideoChatsRoomUpdateSubscribeResponsePayload",
              kind: "LinkedField",
              name: "joinable_video_chats_room_update_subscribe",
              plural: !1,
              selections: [
                c,
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerCallInviteLink",
                  kind: "LinkedField",
                  name: "link",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "GroupJoinableVideoChatRow_link",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "RoomsJoinDialogComet_room",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "RoomsRoomSettingsContextProvider_link",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "RoomsSelfRoomTile_link",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "VideoChatSelfTileCard_link",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "VideoChatTileCard_link",
                    },
                  ],
                  storageKey: null,
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
          name: "useJoinableVideoChatsRoomUpdateSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType:
                "JoinableVideoChatsRoomUpdateSubscribeResponsePayload",
              kind: "LinkedField",
              name: "joinable_video_chats_room_update_subscribe",
              plural: !1,
              selections: [
                c,
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerCallInviteLink",
                  kind: "LinkedField",
                  name: "link",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "active_call_participant_count",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [{ kind: "Literal", name: "first", value: 2 }],
                      concreteType:
                        "MessengerCallInviteLinkActiveParticipantsConnection",
                      kind: "LinkedField",
                      name: "active_participants",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "User",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [e, f],
                          storageKey: null,
                        },
                      ],
                      storageKey: "active_participants(first:2)",
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_viewer_see_join_button_for_group_surface",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_viewer_end_calls",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_viewer_report",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_viewer_report_to_group_admin",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "emoji",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "group_reportable_id",
                      storageKey: null,
                    },
                    f,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "link_hash",
                      storageKey: null,
                    },
                    g,
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "surface", value: "NF_TRAY" },
                      ],
                      kind: "ScalarField",
                      name: "room_card_cta_enum",
                      storageKey: 'room_card_cta_enum(surface:"NF_TRAY")',
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_published",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "expected_call_start_time",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "link_owner",
                      plural: !1,
                      selections: [
                        h,
                        f,
                        {
                          kind: "InlineFragment",
                          selections: [
                            g,
                            {
                              alias: "profile_pic",
                              args: [
                                i,
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
                              name: "short_name",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "gender",
                              storageKey: null,
                            },
                            j,
                            {
                              kind: "ClientExtension",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "availability",
                                  storageKey: null,
                                },
                              ],
                            },
                            {
                              kind: "InlineFragment",
                              selections: k,
                              type: "Actor",
                              abstractKey: "__isActor",
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
                      kind: "ScalarField",
                      name: "link_surface",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "link_container",
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
                              name: "full_name",
                              storageKey: null,
                            },
                            e,
                            f,
                          ],
                          type: "Group",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [f],
                          type: "Node",
                          abstractKey: "__isNode",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "should_allow_guests",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_owner_in_call",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "MessengerCallRoom",
                      kind: "LinkedField",
                      name: "messenger_call_room",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "MessengerCall",
                          kind: "LinkedField",
                          name: "maybe_stale_active_call",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: [
                                {
                                  kind: "Literal",
                                  name: "should_fetch_only_in_call_participants",
                                  value: !0,
                                },
                              ],
                              concreteType:
                                "MessengerCallToCallParticipantsConnection",
                              kind: "LinkedField",
                              name: "call_participants",
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
                                    f,
                                    {
                                      kind: "InlineFragment",
                                      selections: k,
                                      type: "User",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: k,
                                      type: "MessengerCallGuestUser",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "MessengerCallToCallParticipantsEdge",
                                  kind: "LinkedField",
                                  name: "edges",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_group_member",
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
                                        h,
                                        f,
                                        {
                                          kind: "InlineFragment",
                                          selections: l,
                                          type: "Actor",
                                          abstractKey: "__isActor",
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey:
                                "call_participants(should_fetch_only_in_call_participants:true)",
                            },
                            f,
                          ],
                          storageKey: null,
                        },
                        f,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "query_type",
                          value: "FRIEND_INCLUDING_SELF",
                        },
                      ],
                      concreteType:
                        "MessengerCallInviteLinkInterestedParticipantsConnection",
                      kind: "LinkedField",
                      name: "interested_participants",
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
                            f,
                            {
                              kind: "InlineFragment",
                              selections: l,
                              type: "User",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'interested_participants(query_type:"FRIEND_INCLUDING_SELF")',
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "interested_participants_non_friend_count",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "link_url",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "lock_status",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "link_viewer",
                      plural: !1,
                      selections: [f, g, j],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_e2e_encrypted",
                      storageKey: null,
                    },
                    {
                      kind: "ClientExtension",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_ending",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__id",
                          storageKey: null,
                        },
                      ],
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
          id: "4734770516539174",
          metadata: {
            subscriptionName: "joinable_video_chats_room_update_subscribe",
          },
          name: "useJoinableVideoChatsRoomUpdateSubscription",
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
  "VideoChatHomeContainerCometNoDDDQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "show_with_active_room",
          },
        ],
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show_educational_qp",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_collapse_tray",
          storageKey: null,
        },
        d = {
          condition: "show_with_active_room",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_active_rooms",
              storageKey: null,
            },
          ],
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        f = [
          {
            kind: "Literal",
            name: "supported",
            value: ["MessengerRoomsStatusTrayRenderingStrategy"],
          },
        ],
        g = [
          {
            kind: "Literal",
            name: "supported",
            value: ["MessengerRoomsStatusOptInPromotionRenderingStrategy"],
          },
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = [h, e],
        j = [{ kind: "Literal", name: "first", value: 50 }],
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_hash",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_published",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "active_call_participant_count",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_url",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__id",
          storageKey: null,
        },
        p = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "RoomFriendTileCollapsed_room",
              fragmentName: "RoomFriendWithoutRoomTileCardCollapsed_user",
              fragmentPropName: "user",
              kind: "ModuleImport",
            },
          ],
          type: "User",
          abstractKey: null,
        },
        q = {
          args: null,
          documentName: "RoomFriendTileCollapsed_room",
          fragmentName: "RoomFriendWithActiveRoomTileCardCollapsed_room",
          fragmentPropName: "room",
          kind: "ModuleImport",
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_e2e_encrypted",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "lock_status",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "emoji",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_surface",
          storageKey: null,
        },
        w = { kind: "Variable", name: "scale", variableName: "scale" },
        x = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        y = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 160 },
            w,
            { kind: "Literal", name: "width", value: 160 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: x,
          storageKey: null,
        },
        z = {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "availability",
              storageKey: null,
            },
          ],
        },
        A = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "link_container",
          plural: !1,
          selections: [
            h,
            {
              kind: "InlineFragment",
              selections: [
                e,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "full_name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "profile_picture",
                  plural: !1,
                  selections: x,
                  storageKey: null,
                },
              ],
              type: "Group",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [e],
              type: "Node",
              abstractKey: "__isNode",
            },
          ],
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "expected_call_start_time",
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_owner_in_call",
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_allow_guests",
          storageKey: null,
        },
        E = [y];
      E = {
        alias: null,
        args: null,
        concreteType: "MessengerCallRoom",
        kind: "LinkedField",
        name: "messenger_call_room",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MessengerCall",
            kind: "LinkedField",
            name: "maybe_stale_active_call",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Literal",
                    name: "should_fetch_only_in_call_participants",
                    value: !0,
                  },
                ],
                concreteType: "MessengerCallToCallParticipantsConnection",
                kind: "LinkedField",
                name: "call_participants",
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
                      e,
                      {
                        kind: "InlineFragment",
                        selections: E,
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: E,
                        type: "MessengerCallGuestUser",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey:
                  "call_participants(should_fetch_only_in_call_participants:true)",
              },
              e,
            ],
            storageKey: null,
          },
          e,
        ],
        storageKey: null,
      };
      var F = {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_ending",
              storageKey: null,
            },
            o,
          ],
        },
        G = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cursor",
          storageKey: null,
        },
        H = {
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
        I = [
          { kind: "Literal", name: "first", value: 12 },
          { kind: "Literal", name: "hide_self_link", value: !0 },
          { kind: "Literal", name: "hide_suggested_groups", value: !1 },
        ],
        J = { kind: "TypeDiscriminator", abstractKey: "__isFBRoomCard" },
        K = {
          alias: "profile_pic",
          args: [w, { kind: "Literal", name: "width", value: 60 }],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: x,
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "gender",
          storageKey: null,
        };
      w = {
        alias: null,
        args: [w],
        concreteType: "Image",
        kind: "LinkedField",
        name: "profile_picture",
        plural: !1,
        selections: x,
        storageKey: null,
      };
      x = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
      ];
      var N = [
        { kind: "Literal", name: "type", value: "CREATE_ROOM_BUTTON_TITLE" },
      ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "VideoChatHomeContainerCometNoDDDQuery",
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
                  args: null,
                  kind: "FragmentSpread",
                  name: "RoomsTrayRoot_viewer",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "JoinableVideoChatsViewerFields",
                  kind: "LinkedField",
                  name: "joinable_video_chats",
                  plural: !1,
                  selections: [
                    b,
                    c,
                    d,
                    {
                      alias: null,
                      args: null,
                      concreteType: "MessengerRoomsSection",
                      kind: "LinkedField",
                      name: "messenger_rooms_section",
                      plural: !1,
                      selections: [
                        e,
                        {
                          alias: "tray_section",
                          args: f,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "status_renderer_strategies",
                          plural: !1,
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "RoomsTrayRoot_messengeTrayRenderingStrategy",
                            },
                          ],
                          storageKey:
                            'status_renderer_strategies(supported:["MessengerRoomsStatusTrayRenderingStrategy"])',
                        },
                        {
                          alias: "qp_section",
                          args: g,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "status_renderer_strategies",
                          plural: !1,
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "RoomsQuickPromotionComet_messengerRoomsStatusOptInPromotionRenderingStrategy",
                            },
                          ],
                          storageKey:
                            'status_renderer_strategies(supported:["MessengerRoomsStatusOptInPromotionRenderingStrategy"])',
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "VideoChatHomeContainerCometNoDDDQuery",
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
                  selections: i,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "JoinableVideoChatsViewerFields",
                  kind: "LinkedField",
                  name: "joinable_video_chats",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: j,
                      concreteType:
                        "JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsConnection",
                      kind: "LinkedField",
                      name: "published_self_room_cards",
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
                            e,
                            {
                              kind: "InlineFragment",
                              selections: [
                                k,
                                l,
                                m,
                                n,
                                { kind: "ClientExtension", selections: [o] },
                              ],
                              type: "MessengerCallInviteLink",
                              abstractKey: null,
                            },
                            {
                              kind: "InlineFragment",
                              selections: [
                                p,
                                {
                                  kind: "InlineFragment",
                                  selections: [q],
                                  type: "MessengerCallInviteLink",
                                  abstractKey: null,
                                },
                              ],
                              type: "FBRoomCard",
                              abstractKey: "__isFBRoomCard",
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsEdge",
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
                                h,
                                e,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    m,
                                    r,
                                    k,
                                    n,
                                    s,
                                    t,
                                    u,
                                    v,
                                    l,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "link_owner",
                                      plural: !1,
                                      selections: [
                                        h,
                                        e,
                                        {
                                          kind: "InlineFragment",
                                          selections: [u, y, z],
                                          type: "User",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    A,
                                    B,
                                    C,
                                    D,
                                    E,
                                    F,
                                  ],
                                  type: "MessengerCallInviteLink",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            G,
                          ],
                          storageKey: null,
                        },
                        H,
                      ],
                      storageKey: "published_self_room_cards(first:50)",
                    },
                    {
                      alias: null,
                      args: j,
                      filters: null,
                      handle: "connection",
                      key: "useRoomsSelfRooms_published_self_room_cards",
                      kind: "LinkedHandle",
                      name: "published_self_room_cards",
                    },
                    b,
                    c,
                    {
                      alias: null,
                      args: null,
                      concreteType: "MessengerRoomsSection",
                      kind: "LinkedField",
                      name: "messenger_rooms_section",
                      plural: !1,
                      selections: [
                        e,
                        {
                          alias: "tray_section",
                          args: f,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "status_renderer_strategies",
                          plural: !1,
                          selections: [
                            h,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "User",
                                  kind: "LinkedField",
                                  name: "user",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: I,
                                      concreteType:
                                        "UserToFBRoomCardsConnection",
                                      kind: "LinkedField",
                                      name: "fb_room_cards",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "UserToFBRoomCardsEdge",
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
                                                h,
                                                J,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    m,
                                                    s,
                                                    k,
                                                    n,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "link_owner",
                                                      plural: !1,
                                                      selections: [
                                                        h,
                                                        e,
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            K,
                                                            L,
                                                            M,
                                                            u,
                                                            y,
                                                            z,
                                                          ],
                                                          type: "User",
                                                          abstractKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "surface",
                                                          value: "NF_TRAY",
                                                        },
                                                      ],
                                                      kind: "ScalarField",
                                                      name: "room_card_cta_enum",
                                                      storageKey:
                                                        'room_card_cta_enum(surface:"NF_TRAY")',
                                                    },
                                                    t,
                                                    u,
                                                    v,
                                                    l,
                                                    r,
                                                    A,
                                                    B,
                                                    C,
                                                    D,
                                                    E,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "can_viewer_end_calls",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "can_viewer_report",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "can_viewer_report_to_group_admin",
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: "User",
                                                      kind: "LinkedField",
                                                      name: "link_viewer",
                                                      plural: !1,
                                                      selections: [e, u, y],
                                                      storageKey: null,
                                                    },
                                                    F,
                                                  ],
                                                  type: "MessengerCallInviteLink",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [u, w, z],
                                                  type: "User",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "group_address",
                                                      storageKey: null,
                                                    },
                                                    u,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: "Group",
                                                      kind: "LinkedField",
                                                      name: "if_viewer_can_create_open_group_video_room",
                                                      plural: !1,
                                                      selections: i,
                                                      storageKey: null,
                                                    },
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: "Group",
                                                      kind: "LinkedField",
                                                      name: "if_viewer_can_create_private_group_video_room",
                                                      plural: !1,
                                                      selections: i,
                                                      storageKey: null,
                                                    },
                                                    w,
                                                  ],
                                                  type: "Group",
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            {
                                              alias: "collapsed_room",
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: [
                                                h,
                                                J,
                                                e,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [v, q],
                                                  type: "MessengerCallInviteLink",
                                                  abstractKey: null,
                                                },
                                                p,
                                              ],
                                              storageKey: null,
                                            },
                                            G,
                                          ],
                                          storageKey: null,
                                        },
                                        H,
                                      ],
                                      storageKey:
                                        "fb_room_cards(first:12,hide_self_link:true,hide_suggested_groups:false)",
                                    },
                                    {
                                      alias: null,
                                      args: I,
                                      filters: [],
                                      handle: "connection",
                                      key: "RoomsTrayRoot_fb_room_cards",
                                      kind: "LinkedHandle",
                                      name: "fb_room_cards",
                                    },
                                    e,
                                    {
                                      alias: "interested_hint_text",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "type",
                                          value: "INTERESTED_NOTIF_HINT_TEXT",
                                        },
                                      ],
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "joinable_video_chats_string",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'joinable_video_chats_string(type:"INTERESTED_NOTIF_HINT_TEXT")',
                                    },
                                    {
                                      alias: "already_interested_button",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "type",
                                          value:
                                            "FEED_ATTACHMENT_INTERESTED_STATUS",
                                        },
                                      ],
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "joinable_video_chats_string",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'joinable_video_chats_string(type:"FEED_ATTACHMENT_INTERESTED_STATUS")',
                                    },
                                    {
                                      alias: "create_button",
                                      args: N,
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "joinable_video_chats_string",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'joinable_video_chats_string(type:"CREATE_ROOM_BUTTON_TITLE")',
                                    },
                                    {
                                      alias: "interested_button",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "type",
                                          value:
                                            "FEED_ATTACHMENT_INTERESTED_CTA_LABEL",
                                        },
                                      ],
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "joinable_video_chats_string",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'joinable_video_chats_string(type:"FEED_ATTACHMENT_INTERESTED_CTA_LABEL")',
                                    },
                                    {
                                      alias: "join_button",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "type",
                                          value: "JOIN_BUTTON_STRING",
                                        },
                                      ],
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "joinable_video_chats_string",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'joinable_video_chats_string(type:"JOIN_BUTTON_STRING")',
                                    },
                                    L,
                                    M,
                                    {
                                      alias: "tile_meta_string",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "type",
                                          value: "TILE_META_STRING",
                                        },
                                      ],
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "joinable_video_chats_string",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'joinable_video_chats_string(type:"TILE_META_STRING")',
                                    },
                                    {
                                      alias: "say_hi_button",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "type",
                                          value: "SAY_HI_BUTTON_LABEL",
                                        },
                                      ],
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "joinable_video_chats_string",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'joinable_video_chats_string(type:"SAY_HI_BUTTON_LABEL")',
                                    },
                                    K,
                                    {
                                      alias: "create",
                                      args: N,
                                      concreteType: "TextWithEntities",
                                      kind: "LinkedField",
                                      name: "joinable_video_chats_string",
                                      plural: !1,
                                      selections: x,
                                      storageKey:
                                        'joinable_video_chats_string(type:"CREATE_ROOM_BUTTON_TITLE")',
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              type: "MessengerRoomsStatusTrayRenderingStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'status_renderer_strategies(supported:["MessengerRoomsStatusTrayRenderingStrategy"])',
                        },
                        {
                          alias: "qp_section",
                          args: g,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "status_renderer_strategies",
                          plural: !1,
                          selections: [
                            h,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: "promotion_title",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "type",
                                      value: "FEED_UPSELL_TITLE",
                                    },
                                  ],
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "joinable_video_chats_string",
                                  plural: !1,
                                  selections: x,
                                  storageKey:
                                    'joinable_video_chats_string(type:"FEED_UPSELL_TITLE")',
                                },
                                {
                                  alias: "promotion_content",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "type",
                                      value: "FEED_UPSELL_CONTENT",
                                    },
                                  ],
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "joinable_video_chats_string",
                                  plural: !1,
                                  selections: x,
                                  storageKey:
                                    'joinable_video_chats_string(type:"FEED_UPSELL_CONTENT")',
                                },
                                {
                                  alias: "promotion_primary_button_text",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "type",
                                      value: "FEED_UPSELL_BUTTON_STRING",
                                    },
                                  ],
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "joinable_video_chats_string",
                                  plural: !1,
                                  selections: x,
                                  storageKey:
                                    'joinable_video_chats_string(type:"FEED_UPSELL_BUTTON_STRING")',
                                },
                                {
                                  alias: "promotion_secondary_button_text",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "type",
                                      value:
                                        "FEED_UPSELL_SECONDARY_BUTTON_STRING",
                                    },
                                  ],
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "joinable_video_chats_string",
                                  plural: !1,
                                  selections: x,
                                  storageKey:
                                    'joinable_video_chats_string(type:"FEED_UPSELL_SECONDARY_BUTTON_STRING")',
                                },
                              ],
                              type: "MessengerRoomsStatusOptInPromotionRenderingStrategy",
                              abstractKey: null,
                            },
                          ],
                          storageKey:
                            'status_renderer_strategies(supported:["MessengerRoomsStatusOptInPromotionRenderingStrategy"])',
                        },
                      ],
                      storageKey: null,
                    },
                    d,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "surface_nux_id", value: 8001 },
                  ],
                  concreteType: "ViewerEligibleQuickPromotionsConnection",
                  kind: "LinkedField",
                  name: "eligible_promotions",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "ViewerEligibleQuickPromotionsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "QuickPromotion",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "CometQuickPromotionSections",
                              kind: "LinkedField",
                              name: "comet_qp_sections",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "supported",
                                      value: [
                                        "CometQuickPromotionRoomsTrayWideCardRendererStrategy",
                                        "CometQuickPromotionRoomsTrayCardRendererStrategy",
                                        "CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy",
                                        "CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy",
                                        "CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy",
                                        "CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy",
                                        "CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy",
                                        "CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy",
                                      ],
                                    },
                                  ],
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "renderer_strategy",
                                  plural: !1,
                                  selections: [
                                    h,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "useRoomsTrayQuickPromotion_viewer",
                                          fragmentName:
                                            "VideoChatTrayWideEduTile_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionRoomsTrayWideCardRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "useRoomsTrayQuickPromotion_viewer",
                                          fragmentName:
                                            "VideoChatTrayEduTile_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionRoomsTrayCardRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "useRoomsTrayQuickPromotion_viewer",
                                          fragmentName:
                                            "RoomsTrayQuickPromotionEidRoomTileCard_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "useRoomsTrayQuickPromotion_viewer",
                                          fragmentName:
                                            "RoomsTrayQuickPromotionEidRoomWideTileCard_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "useRoomsTrayQuickPromotion_viewer",
                                          fragmentName:
                                            "RoomsTrayQuickPromotionHappyHourTileCard_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "useRoomsTrayQuickPromotion_viewer",
                                          fragmentName:
                                            "RoomsTrayQuickPromotionHappyHourWideTileCard_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "useRoomsTrayQuickPromotion_viewer",
                                          fragmentName:
                                            "RoomsTrayQuickPromotionSocialNormsWideTemplateTileCard_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "useRoomsTrayQuickPromotion_viewer",
                                          fragmentName:
                                            "RoomsTrayQuickPromotionSocialNormsTemplateTileCard_quickPromotion",
                                          fragmentPropName: "quickPromotion",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey:
                                    'renderer_strategy(supported:["CometQuickPromotionRoomsTrayWideCardRendererStrategy","CometQuickPromotionRoomsTrayCardRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy","CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy"])',
                                },
                                {
                                  alias: "rendererStrategyTypeName",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "supported",
                                      value: [
                                        "CometQuickPromotionRoomsTrayCardRendererStrategy",
                                        "CometQuickPromotionRoomsTrayWideCardRendererStrategy",
                                        "CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy",
                                        "CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy",
                                        "CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy",
                                        "CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy",
                                        "CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy",
                                        "CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy",
                                      ],
                                    },
                                  ],
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "renderer_strategy",
                                  plural: !1,
                                  selections: [h],
                                  storageKey:
                                    'renderer_strategy(supported:["CometQuickPromotionRoomsTrayCardRendererStrategy","CometQuickPromotionRoomsTrayWideCardRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy","CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy"])',
                                },
                              ],
                              storageKey: null,
                            },
                            e,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: "eligible_promotions(surface_nux_id:8001)",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "5502606159810775",
          metadata: {},
          name: "VideoChatHomeContainerCometNoDDDQuery",
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
  "CometMegaphoneQuickPromotionSection_quickPromotion.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometMegaphoneQuickPromotionSection_quickPromotion",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "CometQuickPromotionSections",
          kind: "LinkedField",
          name: "comet_qp_sections",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Literal",
                  name: "supported",
                  value: [
                    "CometSlimMegaphoneRendererStrategy",
                    "CometStandardMegaphoneRendererStrategy",
                    "CometEmergencyMegaphoneRendererStrategy",
                    "CometMegaphoneWWWDeviceBasedLoginRendererStrategy",
                    "CometQuickPromotionAYMTNewsFeedMegaphoneRendererStrategy",
                    "CometQuickPromotionPageTransparencyMegaphoneRendererStrategy",
                    "CometQuickPromotionMegaphonePrivacyNotificationRendererStrategy",
                    "CometQuickPromotionBroadDistributionMegaphoneRendererStrategy",
                    "CometQuickPromotionLocationTransparencyMegaphoneRendererStrategy",
                    "CometMegaphoneGDPRContextualConsentRendererStrategy",
                    "CometQuickPromotionNonprofitMegaphoneRendererStrategy",
                    "CometQPDiglossiaSurveyRendererStrategy",
                    "CometQPRegularSurveyRendererStrategy",
                    "CometQuickPromotionFundraiserPromotionalMegaphoneRendererStrategy",
                    "CometQuickPromotionFullImageMegaphoneRendererStrategy",
                    "CometQuickPromotionBLMMegaphoneRendererStrategy",
                    "CometConsentFrameworkRendererStrategy",
                    "CometQuickPromotionPPAMegaphoneRendererStrategy",
                    "CometQuickPromotionPPAPostEnforcementMegaphoneRendererStrategy",
                    "CometQuickPromotionPPAPreApprovedMegaphoneRendererStrategy",
                    "CometQuickPromotionAskMeAnythingNewsFeedMegaphoneRendererStrategy",
                    "CometQuickPromotionFullBleedImageRendererStrategy",
                    "CometQuickPromotionCreateStreamerFanGroupsRendererStrategy",
                    "CometSideImageMegaphoneRendererStrategy",
                    "CometMegaphoneWWWEmailAcquisitionRendererStrategy",
                    "CometQuickPromotionPrayerSettingsMegaphoneRendererStrategy",
                    "CometQuickPromotionGroupsExpertsOptInRendererStrategy",
                    "CometMegaphoneWWWEmailAcquisitionNoAutofillRendererStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "renderer_strategy",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometSlimMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometSlimMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometStandardMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStandardMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometEmergencyMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometEmergencyMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometMegaphoneWWWDeviceBasedLoginRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionAYMTNewsFeedMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionAYMTNewsFeedMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionPageTransparencyMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionPageTransparencyMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionMegaphonePrivacyNotificationRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionMegaphonePrivacyNotificationRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionBroadDistributionMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionBroadDistributionMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionLocationTransparencyMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionLocationTransparencyMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometMegaphoneGDPRContextualConsentRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometMegaphoneGDPRContextualConsentRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionNonprofitMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionNonprofitMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQPDiglossiaSurveyRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQPDiglossiaSurveyRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQPRegularSurveyRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQPRegularSurveyRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionFundraiserPromotionalMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionFundraiserPromotionalMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionFullImageMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionFullImageMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionBLMMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionBLMMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometConsentFrameworkRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometConsentFrameworkRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionPPAMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionPPAMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionPPAPostEnforcementMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionPPAPostEnforcementMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionPPAPreApprovedMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionPPAPreApprovedMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionAskMeAnythingNewsFeedMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionAskMeAnythingNewsFeedMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionFullBleedImageRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionFullBleedImageRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionCreateStreamerFanGroupsRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionCreateStreamerFanGroupsRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometSideImageMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometSideImageMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometMegaphoneWWWEmailAcquisitionRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometMegaphoneWWWEmailAcquisitionRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionPrayerSettingsMegaphoneRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionPrayerSettingsMegaphoneRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometQuickPromotionGroupsExpertsOptInRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometQuickPromotionGroupsExpertsOptInRendererStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometMegaphoneQuickPromotionSection_quickPromotion",
                      fragmentName:
                        "CometMegaphoneWWWEmailAcquisitionNoAutofillRendererStrategy_quickPromotion",
                      fragmentPropName: "quickPromotion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometMegaphoneWWWEmailAcquisitionNoAutofillRendererStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'renderer_strategy(supported:["CometSlimMegaphoneRendererStrategy","CometStandardMegaphoneRendererStrategy","CometEmergencyMegaphoneRendererStrategy","CometMegaphoneWWWDeviceBasedLoginRendererStrategy","CometQuickPromotionAYMTNewsFeedMegaphoneRendererStrategy","CometQuickPromotionPageTransparencyMegaphoneRendererStrategy","CometQuickPromotionMegaphonePrivacyNotificationRendererStrategy","CometQuickPromotionBroadDistributionMegaphoneRendererStrategy","CometQuickPromotionLocationTransparencyMegaphoneRendererStrategy","CometMegaphoneGDPRContextualConsentRendererStrategy","CometQuickPromotionNonprofitMegaphoneRendererStrategy","CometQPDiglossiaSurveyRendererStrategy","CometQPRegularSurveyRendererStrategy","CometQuickPromotionFundraiserPromotionalMegaphoneRendererStrategy","CometQuickPromotionFullImageMegaphoneRendererStrategy","CometQuickPromotionBLMMegaphoneRendererStrategy","CometConsentFrameworkRendererStrategy","CometQuickPromotionPPAMegaphoneRendererStrategy","CometQuickPromotionPPAPostEnforcementMegaphoneRendererStrategy","CometQuickPromotionPPAPreApprovedMegaphoneRendererStrategy","CometQuickPromotionAskMeAnythingNewsFeedMegaphoneRendererStrategy","CometQuickPromotionFullBleedImageRendererStrategy","CometQuickPromotionCreateStreamerFanGroupsRendererStrategy","CometSideImageMegaphoneRendererStrategy","CometMegaphoneWWWEmailAcquisitionRendererStrategy","CometQuickPromotionPrayerSettingsMegaphoneRendererStrategy","CometQuickPromotionGroupsExpertsOptInRendererStrategy","CometMegaphoneWWWEmailAcquisitionNoAutofillRendererStrategy"])',
            },
          ],
          storageKey: null,
        },
      ],
      type: "QuickPromotion",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupCometComposerCreateDialog.entrypoint",
  [
    "GroupCometComposerCreateDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = a.actorID,
          e = a.feedLocation;
        a = a.groupID;
        return {
          queries: {
            queryReference: {
              environmentProviderOptions: { actorID: b },
              parameters: c("GroupCometComposerCreateDialogQuery$Parameters"),
              variables: {
                actorID: b,
                feedLocation: (b = e) != null ? b : "GROUP",
                groupID: a,
                is_work_user: c("gkx")("1224637"),
                privacySelectorRenderLocation: "COMET_COMPOSER",
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "GroupCometComposerCreateDialog.react"
      ).__setRef("GroupCometComposerCreateDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "useGroupCometComposerCreateDialog",
  [
    "fbt",
    "Actor",
    "CometCardedDialog.react",
    "FeedComposerCometGlimmer.react",
    "GroupCometComposerCreateDialog.entrypoint",
    "RelayUFI2CommentsKeyContext",
    "TCometComposerTarget",
    "cometComposerLogger",
    "composerCometCardedDialogProps",
    "react",
    "useCometEntryPointDialog",
    "uuid",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useContext;
    function l() {
      return i.jsx(
        c("CometCardedDialog.react"),
        babelHelpers["extends"](
          { title: h._("Create Post") },
          c("composerCometCardedDialogProps"),
          { children: i.jsx(c("FeedComposerCometGlimmer.react"), {}) }
        )
      );
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      a = a || {};
      var b = a.actorID_DO_NOT_USE_UNLESS_YOU_KNOW_EXACTLY_WHAT_YOU_ARE_DOING,
        e = a.feedLocation,
        f = a.groupID,
        g = a.onBeforeClose,
        h = a.onErr,
        m = a.onSave,
        n = a.onSubmitCommit;
      a = d("Actor").useActor();
      a = a[0];
      b = (b = b) != null ? b : a;
      a = c("useCometEntryPointDialog")(
        c("GroupCometComposerCreateDialog.entrypoint"),
        { actorID: b, feedLocation: e, groupID: f },
        void 0,
        function () {
          return i.jsx(l, {});
        }
      );
      var o = a[0];
      b = a[1];
      e = a[2];
      f = a[3];
      a = a[4];
      var p = k(c("RelayUFI2CommentsKeyContext")),
        q = j(
          function (a) {
            if (a.workDraftFor != null) return;
            g && g(a);
          },
          [g]
        );
      return [
        j(
          function (a) {
            var b, e;
            a = a || {};
            var f = a.beginningViewState,
              g = a.composerSourceSurface,
              i = a.feedLocation,
              j = a.groupID,
              k = a.localBackupTargetID,
              l = a.pushedPageOnLoad;
            a = a.renderLocation;
            b =
              (b = f == null ? void 0 : f.creationSessionID) != null
                ? b
                : c("uuid")();
            e = {
              composerEntryPointName: "inline_composer",
              composerSourceSurface: (e = g) != null ? e : "group",
              composerType: "group",
            };
            e = { fields: e, type: "COMPOSER_ENTRY" };
            var r = {
              target: {
                id: j,
                type: d("TCometComposerTarget").ComposerTargetType.Group,
              },
            };
            c("cometComposerLogger")(e, b, r);
            o({
              beginningViewState: f,
              commentsKey: p,
              composerSourceSurface: g,
              feedLocation: i,
              groupID: j,
              localBackupTargetID: k,
              onBeforeClose: q,
              onErr: h,
              onSave: m,
              onSubmitCommit: n,
              pushedPageOnLoad: l,
              renderLocation: a,
            });
          },
          [p, q, h, m, n, o]
        ),
        b,
        e,
        f,
        a,
      ];
    }
    g["default"] = a;
  },
  98
);
__d(
  "GroupRoomLobby.entrypoint",
  [
    "GroupRoomLobbyQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            queryReference: {
              parameters: c("GroupRoomLobbyQuery$Parameters"),
              variables: {
                linkHash: a.linkHash,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")("GroupRoomLobby.react").__setRef(
        "GroupRoomLobby.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedInlineComposerWOYM.react",
  [
    "CometFeedInlineComposerWOYM_profile.graphql",
    "CometRefineRef",
    "CometRelay",
    "TextInputButton.react",
    "cr:1654613",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.onHoverInPrerenderer,
        g = a.onHoverOutPrerenderer,
        j = a.onPress,
        k = a.onPressInPrerenderer,
        l = a.postPlainText,
        m = a.profile$key;
      a = a.triggerRef;
      m = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedInlineComposerWOYM_profile.graphql")),
        m
      );
      m = b("cr:1654613")(m == null ? void 0 : m.short_name);
      e = (e = l) != null ? e : m;
      return i.jsx(c("TextInputButton.react"), {
        isUserEnteredPreviewText: l != null,
        label: e,
        onHoverIn: f,
        onHoverOut: g,
        onPress: j,
        onPressIn: k,
        ref: c("CometRefineRef")(a),
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometFeedInlineComposerWOYMText",
  ["fbt", "gkx"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = c("gkx")("1224637");
    function a(a) {
      if (i) return h._("What are you working on?");
      else
        return a != null
          ? h._("What's on your mind, {short name}?", [
              h._param("short name", a),
            ])
          : h._("What's on your mind?");
    }
    g["default"] = a;
  },
  98
);
__d(
  "RoomsJoinDialogContainerComet.entrypoint",
  [
    "JSResourceForInteraction",
    "RoomsJoinDialogContainerCometQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            queryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: c("RoomsJoinDialogContainerCometQuery$Parameters"),
              variables: {
                linkHash: a.linkHash,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "RoomsJoinDialogContainerComet.react"
      ).__setRef("RoomsJoinDialogContainerComet.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "RoomsLobbyEntryPointDialogTrigger.react",
  [
    "CometEntryPointDialogTrigger.react",
    "CometRelay",
    "GroupRoomLobby.entrypoint",
    "MessengerCallLinkSurface",
    "RoomsJoinDialogContainerComet.entrypoint",
    "RoomsLobbyEntryPointDialogTrigger_room.graphql",
    "RoomsSelfLobbyDialog.entrypoint",
    "getJSEnumSafe",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.children,
        f = a.loggingData;
      a = a.roomRef;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("RoomsLobbyEntryPointDialogTrigger_room.graphql")),
        a
      );
      var g = a == null ? void 0 : a.can_viewer_end_calls,
        j = a == null ? void 0 : a.link_hash;
      a = c("getJSEnumSafe")(c("MessengerCallLinkSurface"), a.link_surface);
      a = a === 3;
      if (j == null) {
        c("recoverableViolation")(
          "Expected room id to be null when rendering dialog entry point",
          "rooms"
        );
        return null;
      }
      if (a)
        return i.jsx(c("CometEntryPointDialogTrigger.react"), {
          dialogEntryPoint: c("GroupRoomLobby.entrypoint"),
          otherProps: { loggingData: f },
          preloadParams: { linkHash: j },
          preloadTrigger: "button",
          tracePolicy: "comet.rooms.manage",
          children: e,
        });
      if (g === !0)
        return i.jsx(c("CometEntryPointDialogTrigger.react"), {
          dialogEntryPoint: c("RoomsSelfLobbyDialog.entrypoint"),
          otherProps: { loggingData: f },
          preloadParams: { linkHash: j },
          preloadTrigger: "button",
          tracePolicy: "comet.rooms.lobby",
          children: e,
        });
      else
        return i.jsx(c("CometEntryPointDialogTrigger.react"), {
          dialogEntryPoint: c("RoomsJoinDialogContainerComet.entrypoint"),
          otherProps: { loggingData: f },
          preloadParams: { linkHash: j },
          preloadTrigger: "button",
          tracePolicy: "comet.rooms.join",
          children: e,
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useJoinableVideoChatsRoomUpdateSubscription",
  [
    "CometRelay",
    "RoomsRelayStoreUtils",
    "WebPixelRatio",
    "gkx",
    "react",
    "useJoinableVideoChatsRoomUpdateSubscription.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useEffect,
      j = c("gkx")("1422081") === !0,
      k =
        h !== void 0
          ? h
          : (h = b("useJoinableVideoChatsRoomUpdateSubscription.graphql"));
    function l(a, b) {
      return b == null
        ? { dispose: function () {} }
        : d("CometRelay").requestSubscription(a, {
            subscription: k,
            updater: function (a) {
              var c,
                e = b.groupID,
                f = b.linkHash,
                g = b.nodeDataID;
              if (
                ((c = a.getRootField(
                  "joinable_video_chats_room_update_subscribe"
                )) == null
                  ? void 0
                  : c.getValue("was_removed")) !== !0
              )
                return;
              d("RoomsRelayStoreUtils").deleteRoom(a, g, f, e);
            },
            variables: {
              input: { link_hash: b.linkHash },
              scale: d("WebPixelRatio").get(),
            },
          });
    }
    function a(a) {
      var b = d("CometRelay").useRelayEnvironment();
      i(
        function () {
          if (!j) return;
          var c = l(b, a);
          return function () {
            c.dispose();
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
  "RoomCollapsedTilePlaceholder.react",
  ["BaseGlimmer.react", "react", "useVisibilityObserver"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.onVisible;
      a = c("useVisibilityObserver")({
        onVisible: a,
        options: { rootMargin: 200 },
      });
      return h.jsx("div", {
        className: "scb9dxdr qt6c0cv9 dflh9lhu jb3vyjys",
        ref: a,
        children: h.jsx(c("BaseGlimmer.react"), {
          className:
            "q676j6op f9o22wc5 myj7ivm5 ad2k81qe km676qkl qypqp5cg spb7xbtv bkmhp75w emlxlaya s45kfl79",
          index: 0,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoChatTrayTilePlaceholder.react",
  [
    "BaseGlimmer.react",
    "CometCard.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometRow.react",
    "CometRowItem.react",
    "react",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.onVisible;
      a = c("useVisibilityObserver")({
        onVisible: a,
        options: { rootMargin: 200 },
      });
      return h.jsx("div", {
        className:
          "k4urcfbm datstx6m pfnyh3mw buofh1pr j83agx80 rq0escxv gs1a9yip",
        ref: a,
        children: h.jsx(c("CometCard.react"), {
          border: "solid",
          children: h.jsxs(c("CometColumn.react"), {
            children: [
              h.jsx(c("CometColumnItem.react"), {
                children: h.jsx(c("CometRow.react"), {
                  align: "center",
                  paddingTop: 12,
                  children: h.jsx(c("CometRowItem.react"), {
                    children: h.jsx(c("BaseGlimmer.react"), {
                      className:
                        "ljni7pan f9o22wc5 myj7ivm5 ad2k81qe km676qkl cb02d2ww spb7xbtv bkmhp75w emlxlaya s45kfl79",
                      index: 0,
                    }),
                  }),
                }),
              }),
              h.jsx(c("CometColumnItem.react"), {
                children: h.jsx(c("CometRow.react"), {
                  align: "center",
                  paddingVertical: 12,
                  children: h.jsx(c("CometRowItem.react"), {
                    children: h.jsxs("div", {
                      className: "r54jmrld cbu4d94t j83agx80 bp9cbjyn",
                      children: [
                        h.jsx(c("BaseGlimmer.react"), {
                          className:
                            "la0tivve km676qkl oud54xpy cyypbtt7 mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",
                          index: 0,
                        }),
                        h.jsx(c("BaseGlimmer.react"), {
                          className:
                            "f8ljpb73 hcukyx3x myj7ivm5 cxmmr5t8 km676qkl qhh1luux mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",
                          index: 0,
                        }),
                      ],
                    }),
                  }),
                }),
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
  "VideoChatHomeContainerCometNoDDD.react",
  [
    "CometErrorBoundary.react",
    "CometPagelet.react",
    "CometRelay",
    "JSResourceForInteraction",
    "RoomCollapsedTrayPlaceholder.react",
    "RoomsQuickPromotionPlaceholder.react",
    "VideoChatHomeContainerCometNoDDDQuery.graphql",
    "VideoChatTrayPlaceholder.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
    "unrecoverableViolation",
    "useCometLazyDialog",
    "useJoinableVideoChatsDidViewEducationalQPMutation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useEffect,
      k = e.useState,
      l = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("RoomsTrayRoot.react").__setRef(
          "VideoChatHomeContainerCometNoDDD.react"
        )
      ),
      m = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "RoomsQuickPromotionComet.react"
        ).__setRef("VideoChatHomeContainerCometNoDDD.react")
      ),
      n = c("JSResourceForInteraction")(
        "RoomsNotAvailableErrorStateDialog.react"
      ).__setRef("VideoChatHomeContainerCometNoDDD.react"),
      o =
        h !== void 0
          ? h
          : (h = b("VideoChatHomeContainerCometNoDDDQuery.graphql"));
    function a(a) {
      var b,
        e = a.joinableVideoChatsQueryReference,
        f = a.showCollapsedTray,
        g = a.showPromotionalUnit;
      a = a.showWithActiveRoom;
      var h = d("CometRelay").useQueryLoader(o),
        p = h[0],
        q = h[1],
        r = (h = p) != null ? h : e;
      p = d("CometRelay").usePreloadedQuery(o, r);
      h = k(!1);
      var s = h[0],
        t = h[1],
        u =
          p == null
            ? void 0
            : (e = p.viewer) == null
            ? void 0
            : (h = e.joinable_video_chats) == null
            ? void 0
            : h.should_show_educational_qp;
      e =
        p == null
          ? void 0
          : (e = p.viewer) == null
          ? void 0
          : (h = e.joinable_video_chats) == null
          ? void 0
          : h.should_collapse_tray;
      h =
        p == null
          ? void 0
          : (h = p.viewer) == null
          ? void 0
          : (h = h.joinable_video_chats) == null
          ? void 0
          : (h = h.messenger_rooms_section) == null
          ? void 0
          : h.id;
      b =
        p == null
          ? void 0
          : (b = p.viewer) == null
          ? void 0
          : (b = b.joinable_video_chats) == null
          ? void 0
          : b.has_active_rooms;
      if (h == null)
        throw c("unrecoverableViolation")(
          "Expected ID of the room settings object to be non-null",
          "rooms"
        );
      var v = function () {
          return q(r.variables, { fetchPolicy: "network-only" });
        },
        w = c("useJoinableVideoChatsDidViewEducationalQPMutation")();
      j(
        function () {
          if (s || u === !1) return;
          else t(!0), w({});
        },
        [w, s, t, u]
      );
      d("CometRelay").useSubscribeToInvalidationState([h], function () {
        v();
      });
      var x = c("useCometLazyDialog")(n),
        y = x[0];
      x = x[1];
      g = (g = (g = g) != null ? g : u) != null ? g : !1;
      e = (f = (f = f) != null ? f : e) != null ? f : !1;
      f = k(!1);
      var z = f[0],
        A = f[1];
      if (a === !0 && b === !1) return null;
      f = p == null ? void 0 : p.viewer;
      b =
        p == null
          ? void 0
          : (a = p.viewer) == null
          ? void 0
          : (b = a.joinable_video_chats) == null
          ? void 0
          : (a = b.messenger_rooms_section) == null
          ? void 0
          : a.tray_section;
      p =
        p == null
          ? void 0
          : (a = p.viewer) == null
          ? void 0
          : (p = a.joinable_video_chats) == null
          ? void 0
          : (a = p.messenger_rooms_section) == null
          ? void 0
          : a.qp_section;
      return f == null || (b == null && p == null)
        ? null
        : i.jsx("div", {
            ref: x,
            children: i.jsx(
              c("CometErrorBoundary.react"),
              {
                context: { project: "rooms" },
                fallback: function (a) {
                  y({});
                  return null;
                },
                children: i.jsx(d("CometPagelet.react").Placeholder, {
                  fallback: g
                    ? i.jsx(c("RoomsQuickPromotionPlaceholder.react"), {})
                    : e === !0
                    ? i.jsx(c("RoomCollapsedTrayPlaceholder.react"), {})
                    : i.jsx(c("VideoChatTrayPlaceholder.react"), {}),
                  name: "VideoChatHomeUnitNoDDD",
                  children:
                    g && !z
                      ? p != null
                        ? i.jsx(m, {
                            messengerRoomsStatusOptInPromotionRenderingStrategy:
                              p,
                            onDismiss: function () {
                              return A(!0);
                            },
                          })
                        : null
                      : b != null
                      ? i.jsx(l, {
                          messengeTrayRenderingStrategy: b,
                          shouldShowCollapsedTray: e,
                          viewerRef: f,
                        })
                      : null,
                }),
              },
              h
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometMegaphoneQuickPromotionSection.react",
  [
    "CometCard.react",
    "CometErrorBoundary.react",
    "CometMegaphoneQuickPromotionSection_quickPromotion.graphql",
    "CometQuickPromotionLoggerContext.react",
    "CometRelay",
    "react",
    "useQuickPromotionFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = { section: "quick_promotion" };
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometMegaphoneQuickPromotionSection_quickPromotion.graphql"
            )),
        a.quickPromotion
      );
      var e = c("useQuickPromotionFalcoEvent")({
        context_surface_id: 2646,
        context_trigger: "newsfeed",
      });
      a =
        a == null
          ? void 0
          : (a = a.comet_qp_sections) == null
          ? void 0
          : a.renderer_strategy;
      return a != null
        ? i.jsx(c("CometQuickPromotionLoggerContext.react").Provider, {
            value: e,
            children: i.jsx(c("CometErrorBoundary.react"), {
              children: i.jsx("div", {
                className: "sjgh65i0",
                children: i.jsx(c("CometCard.react"), {
                  background: "white",
                  dropShadow: 1,
                  children: i.jsx(d("CometRelay").MatchContainer, {
                    match: a,
                    props: j,
                  }),
                }),
              }),
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
  "XCometGroupJoinableVideoChatsControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/groups/{idorvanity}/rooms/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
