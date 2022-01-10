if (self.CavalryLogger) {
  CavalryLogger.start_js(["2EM8nUJ"]);
}

__d(
  "EventCometHomeHappeningNow_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          concreteType: "EventDiscoveryTab",
          kind: "LinkedField",
          name: "requested_tab",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [{ kind: "Literal", name: "first", value: 8 }],
              concreteType: "EventDiscoveryTabEventsConnection",
              kind: "LinkedField",
              name: "events",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Event",
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
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
                      name: "EventCometCardRoot_event",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: "events(first:8)",
            },
          ],
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "EventCometHomeHappeningNow_viewer",
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
                kind: "InlineFragment",
                selections: [
                  {
                    alias: "live_now_tab",
                    args: [
                      { kind: "Literal", name: "type", value: "LIVE_NOW" },
                    ],
                    concreteType: "EventDiscoveryTabs",
                    kind: "LinkedField",
                    name: "event_discovery_tabs",
                    plural: !1,
                    selections: a,
                    storageKey: 'event_discovery_tabs(type:"LIVE_NOW")',
                  },
                  {
                    alias: "now_tab",
                    args: [{ kind: "Literal", name: "type", value: "NOW" }],
                    concreteType: "EventDiscoveryTabs",
                    kind: "LinkedField",
                    name: "event_discovery_tabs",
                    plural: !1,
                    selections: a,
                    storageKey: 'event_discovery_tabs(type:"NOW")',
                  },
                  {
                    alias: "popular_now_tab",
                    args: [
                      { kind: "Literal", name: "type", value: "POPULAR_NOW" },
                    ],
                    concreteType: "EventDiscoveryTabs",
                    kind: "LinkedField",
                    name: "event_discovery_tabs",
                    plural: !1,
                    selections: a,
                    storageKey: 'event_discovery_tabs(type:"POPULAR_NOW")',
                  },
                ],
                type: "User",
                abstractKey: null,
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
  "EventCometHomeRootQuery.graphql",
  [
    "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "isLoggedOut" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        c = [
          { kind: "Literal", name: "environment", value: "EVENTS" },
          { kind: "Literal", name: "seen_state", value: "UNSEEN_AND_UNREAD" },
        ],
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        g = [f],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "accessibility_caption",
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
          args: null,
          concreteType: "FocusedPhoto",
          kind: "LinkedField",
          name: "cover_photo",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Photo",
              kind: "LinkedField",
              name: "photo",
              plural: !1,
              selections: [
                h,
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "height", value: 147 },
                    i,
                    {
                      kind: "Literal",
                      name: "sizing",
                      value: "cover-fill-cropped",
                    },
                    { kind: "Literal", name: "width", value: 308 },
                  ],
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "image",
                  plural: !1,
                  selections: j,
                  storageKey: null,
                },
                e,
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          concreteType: "OnlineEventSetup",
          kind: "LinkedField",
          name: "online_event_setup",
          plural: !1,
          selections: [
            f,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "messenger_room_url",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_happening_now",
          storageKey: null,
        },
        n = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "day_time_sentence_format",
              value: "LONG",
            },
          ],
          kind: "ScalarField",
          name: "day_time_sentence",
          storageKey: 'day_time_sentence(day_time_sentence_format:"LONG")',
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        p = {
          kind: "InlineFragment",
          selections: [e],
          type: "Node",
          abstractKey: "__isNode",
        },
        q = {
          alias: null,
          args: [
            { kind: "Literal", name: "social_context_format", value: "LONG" },
            {
              kind: "Literal",
              name: "social_context_render_location",
              value: "EVENTS_DASHBOARD",
            },
          ],
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
                    d,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: [
                            { kind: "Literal", name: "height", value: 24 },
                            i,
                            { kind: "Literal", name: "width", value: 24 },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "profile_picture",
                          plural: !1,
                          selections: j,
                          storageKey: null,
                        },
                      ],
                      type: "Profile",
                      abstractKey: "__isProfile",
                    },
                    p,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey:
            'social_context(social_context_format:"LONG",social_context_render_location:"EVENTS_DASHBOARD")',
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_online",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          concreteType: "EventTicketingContextRow",
          kind: "LinkedField",
          name: "ticketing_context_row",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "price_range_text",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      p = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "event_place",
        plural: !1,
        selections: [
          d,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "contextual_name",
            storageKey: null,
          },
          p,
        ],
        storageKey: null,
      };
      var t = {
          alias: "eventUrl",
          args: [{ kind: "Literal", name: "site", value: "comet" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"comet")',
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_rsvp",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_share",
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_online_or_detected_online",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_host",
          storageKey: null,
        },
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "start_timestamp",
          storageKey: null,
        },
        z = {
          alias: "rsvp_button_renderer",
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: [
                "LiveVideoGoLiveStyleRenderer",
                "DisabledRsvpStyleRenderer",
                "PrivateRsvpStyleRenderer",
                "PublicRsvpStyleRenderer",
                "WorkPrivateRsvpStyleRenderer",
                "WorkPublicRsvpStyleRenderer",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "rsvp_style_renderer",
          plural: !1,
          selections: [
            d,
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "EventCometUniversalRSVPButton_event",
                  fragmentName:
                    "LiveVideoCometGoLiveButtonRenderer_rsvpStyleRenderer",
                  fragmentPropName: "rsvpStyleRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "LiveVideoGoLiveStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "EventCometUniversalRSVPButton_event",
                  fragmentName:
                    "EventCometDisabledRSVPButtonRenderer_rsvpStyleRenderer",
                  fragmentPropName: "rsvpStyleRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "DisabledRsvpStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "EventCometUniversalRSVPButton_event",
                  fragmentName:
                    "PrivateEventCometRSVPButtonRenderer_rsvpStyleRenderer",
                  fragmentPropName: "rsvpStyleRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "PrivateRsvpStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "EventCometUniversalRSVPButton_event",
                  fragmentName:
                    "PublicEventCometRSVPButtonRenderer_rsvpStyleRenderer",
                  fragmentPropName: "rsvpStyleRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "PublicRsvpStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "EventCometUniversalRSVPButton_event",
                  fragmentName:
                    "EventsGeminiPrivateEventRSVPButtonRenderer_rsvpStyleRenderer",
                  fragmentPropName: "rsvpStyleRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkPrivateRsvpStyleRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "EventCometUniversalRSVPButton_event",
                  fragmentName:
                    "EventsGeminiPublicEventRSVPButtonRenderer_rsvpStyleRenderer",
                  fragmentPropName: "rsvpStyleRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "WorkPublicRsvpStyleRenderer",
              abstractKey: null,
            },
          ],
          storageKey:
            'rsvp_style_renderer(supported:["LiveVideoGoLiveStyleRenderer","DisabledRsvpStyleRenderer","PrivateRsvpStyleRenderer","PublicRsvpStyleRenderer","WorkPrivateRsvpStyleRenderer","WorkPublicRsvpStyleRenderer"])',
        };
      f = {
        alias: null,
        args: null,
        concreteType: "Event",
        kind: "LinkedField",
        name: "parent_if_exists_or_self",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "OnlineEventSetup",
            kind: "LinkedField",
            name: "online_event_setup",
            plural: !1,
            selections: [
              f,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "third_party_url",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          e,
        ],
        storageKey: null,
      };
      var A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_past",
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        C = [d, e];
      C = {
        alias: null,
        args: null,
        concreteType: "LiveVirtualEventInfo",
        kind: "LinkedField",
        name: "live_virtual_event_info",
        plural: !1,
        selections: [
          {
            alias: null,
            args: [{ kind: "Literal", name: "first", value: 1 }],
            concreteType: "LiveVirtualEventInfoAssociatedLiveVideosConnection",
            kind: "LinkedField",
            name: "associated_live_videos",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "LiveVirtualEventInfoAssociatedLiveVideosEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Video",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      e,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_live_streaming",
                        storageKey: null,
                      },
                      B,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "video_channel",
                        plural: !1,
                        selections: C,
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "owner",
                        plural: !1,
                        selections: C,
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_show_video",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: "associated_live_videos(first:1)",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_viewer_go_live",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "go_live_target",
            plural: !1,
            selections: C,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "viewer_state",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var D = [
          {
            alias: null,
            args: null,
            concreteType: "EventDiscoveryTab",
            kind: "LinkedField",
            name: "requested_tab",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [{ kind: "Literal", name: "first", value: 8 }],
                concreteType: "EventDiscoveryTabEventsConnection",
                kind: "LinkedField",
                name: "events",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Event",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [
                      e,
                      k,
                      l,
                      m,
                      n,
                      o,
                      q,
                      r,
                      s,
                      p,
                      t,
                      u,
                      v,
                      w,
                      x,
                      y,
                      z,
                      f,
                      A,
                      C,
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: "events(first:8)",
              },
            ],
            storageKey: null,
          },
        ],
        E = [{ kind: "Literal", name: "type", value: "NOW" }],
        F = [{ kind: "Literal", name: "type", value: "TOP_CATEGORY" }],
        G = [{ kind: "Literal", name: "first", value: 9 }];
      k = [
        {
          alias: null,
          args: null,
          concreteType: "Event",
          kind: "LinkedField",
          name: "node",
          plural: !1,
          selections: [
            e,
            k,
            l,
            m,
            n,
            o,
            q,
            r,
            s,
            p,
            t,
            u,
            v,
            w,
            x,
            y,
            z,
            f,
            A,
            C,
            d,
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
      ];
      l = {
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
      };
      m = [
        {
          alias: null,
          args: null,
          concreteType: "EventDiscoveryTab",
          kind: "LinkedField",
          name: "requested_tab",
          plural: !1,
          selections: [
            {
              alias: null,
              args: G,
              concreteType: "EventDiscoveryTabEventsConnection",
              kind: "LinkedField",
              name: "events",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "EventDiscoveryTabEventsEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: k,
                  storageKey: null,
                },
                l,
              ],
              storageKey: "events(first:9)",
            },
            {
              alias: null,
              args: G,
              filters: null,
              handle: "connection",
              key: "EventCometHomeDiscoverContent_events",
              kind: "LinkedHandle",
              name: "events",
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
          name: "EventCometHomeRootQuery",
          selections: [
            {
              condition: "isLoggedOut",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: {
                    alias: "loggedInViewer",
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "EventCometHomeDiscoverSection_viewer",
                      },
                      {
                        alias: null,
                        args: c,
                        concreteType: "NotificationsConnection",
                        kind: "LinkedField",
                        name: "notifications",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "NotificationsEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [d],
                            storageKey: null,
                          },
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "EventCometSurfaceHighlight_notificationsConnection",
                          },
                        ],
                        storageKey:
                          'notifications(environment:"EVENTS",seen_state:"UNSEEN_AND_UNREAD")',
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "EventCometHomeHappeningNow_viewer",
                      },
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "EventCometHomeRecommendedGroupsSection_viewer",
                      },
                    ],
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "loggedInViewer",
                },
              ],
            },
            {
              condition: "isLoggedOut",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  kind: "RequiredField",
                  field: {
                    alias: "loggedOutViewer",
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "EventCometHomeLOVFeed_viewer",
                      },
                    ],
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "loggedOutViewer",
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "EventCometHomeRootQuery",
          selections: [
            {
              condition: "isLoggedOut",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: "loggedInViewer",
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
                        d,
                        e,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "EventDiscoveryTabs",
                              kind: "LinkedField",
                              name: "event_discovery_tabs",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "EventDiscoveryTab",
                                  kind: "LinkedField",
                                  name: "tabs",
                                  plural: !0,
                                  selections: g,
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: "live_now_tab",
                              args: [
                                {
                                  kind: "Literal",
                                  name: "type",
                                  value: "LIVE_NOW",
                                },
                              ],
                              concreteType: "EventDiscoveryTabs",
                              kind: "LinkedField",
                              name: "event_discovery_tabs",
                              plural: !1,
                              selections: D,
                              storageKey:
                                'event_discovery_tabs(type:"LIVE_NOW")',
                            },
                            {
                              alias: "now_tab",
                              args: E,
                              concreteType: "EventDiscoveryTabs",
                              kind: "LinkedField",
                              name: "event_discovery_tabs",
                              plural: !1,
                              selections: D,
                              storageKey: 'event_discovery_tabs(type:"NOW")',
                            },
                            {
                              alias: "popular_now_tab",
                              args: [
                                {
                                  kind: "Literal",
                                  name: "type",
                                  value: "POPULAR_NOW",
                                },
                              ],
                              concreteType: "EventDiscoveryTabs",
                              kind: "LinkedField",
                              name: "event_discovery_tabs",
                              plural: !1,
                              selections: D,
                              storageKey:
                                'event_discovery_tabs(type:"POPULAR_NOW")',
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "XFBRecommendedGroup",
                              kind: "LinkedField",
                              name: "recommended_groups",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Event",
                                  kind: "LinkedField",
                                  name: "upcoming_event",
                                  plural: !1,
                                  selections: [
                                    B,
                                    o,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "capitalized_day_time_sentence",
                                      storageKey: null,
                                    },
                                    z,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "FocusedPhoto",
                                      kind: "LinkedField",
                                      name: "cover_photo",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Photo",
                                          kind: "LinkedField",
                                          name: "photo",
                                          plural: !1,
                                          selections: [
                                            h,
                                            {
                                              alias: null,
                                              args: [
                                                {
                                                  kind: "Literal",
                                                  name: "height",
                                                  value: 189,
                                                },
                                                i,
                                                {
                                                  kind: "Literal",
                                                  name: "width",
                                                  value: 333,
                                                },
                                              ],
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "image",
                                              plural: !1,
                                              selections: j,
                                              storageKey: null,
                                            },
                                            e,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    e,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Group",
                                  kind: "LinkedField",
                                  name: "group",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "supported",
                                          value: [
                                            "GroupJoinGroupAction",
                                            "GroupJoinForumAction",
                                            "GroupJoinedGroupAction",
                                            "GroupJoinSubspaceAction",
                                            "GroupJoinLOVAction",
                                            "XFBGroupJoinLOVWithScopedPersonSignupAction",
                                            "GroupJoinCommunityPresenceGroupAction",
                                          ],
                                        },
                                      ],
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "join_action",
                                      plural: !1,
                                      selections: [
                                        d,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "useGroupsCometJoinActionButton_group_join_action",
                                              fragmentName:
                                                "GroupsCometJoinGroupButton_action",
                                              fragmentPropName: "action",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "GroupJoinGroupAction",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "useGroupsCometJoinActionButton_group_join_action",
                                              fragmentName:
                                                "GroupsCometJoinForumButton_action",
                                              fragmentPropName: "action",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "GroupJoinForumAction",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "useGroupsCometJoinActionButton_group_join_action",
                                              fragmentName:
                                                "GroupsCometJoinedGroupButton_action",
                                              fragmentPropName: "action",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "GroupJoinedGroupAction",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "useGroupsCometJoinActionButton_group_join_action",
                                              fragmentName:
                                                "GroupsCometJoinSubgroupButton_action",
                                              fragmentPropName: "action",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "GroupJoinSubspaceAction",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "useGroupsCometJoinActionButton_group_join_action",
                                              fragmentName:
                                                "GroupsCometLOVJoinGroupButton_action",
                                              fragmentPropName: "action",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "GroupJoinLOVAction",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "useGroupsCometJoinActionButton_group_join_action",
                                              fragmentName:
                                                "GroupsCometLOVJoinWithScopedPersonSignupButton_action",
                                              fragmentPropName: "action",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "XFBGroupJoinLOVWithScopedPersonSignupAction",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "useGroupsCometJoinActionButton_group_join_action",
                                              fragmentName:
                                                "GroupsCometJoinCommunityPresenceButton_action",
                                              fragmentPropName: "action",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "GroupJoinCommunityPresenceGroupAction",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey:
                                        'join_action(supported:["GroupJoinGroupAction","GroupJoinForumAction","GroupJoinedGroupAction","GroupJoinSubspaceAction","GroupJoinLOVAction","XFBGroupJoinLOVWithScopedPersonSignupAction","GroupJoinCommunityPresenceGroupAction"])',
                                    },
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "supported",
                                          value: ["GroupLeaveForumAction"],
                                        },
                                      ],
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "leave_action",
                                      plural: !1,
                                      selections: [
                                        d,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "useGroupsCometLeaveActionButton_group_leave_action",
                                              fragmentName:
                                                "GroupsCometVisitGroupButton_action",
                                              fragmentPropName: "action",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "GroupLeaveForumAction",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey:
                                        'leave_action(supported:["GroupLeaveForumAction"])',
                                    },
                                    B,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "FocusedPhoto",
                                      kind: "LinkedField",
                                      name: "cover_photo",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Photo",
                                          kind: "LinkedField",
                                          name: "photo",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: [
                                                {
                                                  kind: "Literal",
                                                  name: "height",
                                                  value: 60,
                                                },
                                                i,
                                                {
                                                  kind: "Literal",
                                                  name: "width",
                                                  value: 60,
                                                },
                                              ],
                                              concreteType: "Image",
                                              kind: "LinkedField",
                                              name: "image",
                                              plural: !1,
                                              selections: j,
                                              storageKey: null,
                                            },
                                            e,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    e,
                                    o,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "GroupMemberProfilesConnection",
                                      kind: "LinkedField",
                                      name: "group_member_profiles",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "type",
                                              value: "COMPRESSED",
                                            },
                                          ],
                                          kind: "ScalarField",
                                          name: "formatted_count_text",
                                          storageKey:
                                            'formatted_count_text(type:"COMPRESSED")',
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
                                  name: "upcoming_events_count",
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
                      alias: "top_category_tab",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: F,
                              concreteType: "EventDiscoveryTabs",
                              kind: "LinkedField",
                              name: "event_discovery_tabs",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "EventDiscoveryTab",
                                  kind: "LinkedField",
                                  name: "requested_tab",
                                  plural: !1,
                                  selections: [o],
                                  storageKey: null,
                                },
                              ],
                              storageKey:
                                'event_discovery_tabs(type:"TOP_CATEGORY")',
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        e,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "default_actor",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        d,
                        e,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: [
                                {
                                  kind: "Literal",
                                  name: "type",
                                  value: "RECOMMENDED",
                                },
                              ],
                              concreteType: "EventDiscoveryTabs",
                              kind: "LinkedField",
                              name: "event_discovery_tabs",
                              plural: !1,
                              selections: m,
                              storageKey:
                                'event_discovery_tabs(type:"RECOMMENDED")',
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "this_week_actor",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              if: null,
                              kind: "Defer",
                              label:
                                "EventCometHomeDiscoverFeed_viewer$defer$EventCometHomeDiscoverThisWeekContent_user",
                              selections: [
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "type",
                                      value: "THIS_WEEK",
                                    },
                                  ],
                                  concreteType: "EventDiscoveryTabs",
                                  kind: "LinkedField",
                                  name: "event_discovery_tabs",
                                  plural: !1,
                                  selections: m,
                                  storageKey:
                                    'event_discovery_tabs(type:"THIS_WEEK")',
                                },
                                e,
                              ],
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        e,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "online_actor",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              if: null,
                              kind: "Defer",
                              label:
                                "EventCometHomeDiscoverFeed_viewer$defer$EventCometHomeDiscoverOnlineContent_user",
                              selections: [
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "type",
                                      value: "ONLINE",
                                    },
                                  ],
                                  concreteType: "EventDiscoveryTabs",
                                  kind: "LinkedField",
                                  name: "event_discovery_tabs",
                                  plural: !1,
                                  selections: m,
                                  storageKey:
                                    'event_discovery_tabs(type:"ONLINE")',
                                },
                                e,
                              ],
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        e,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "learning_class_actor",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              if: null,
                              kind: "Defer",
                              label:
                                "EventCometHomeDiscoverFeed_viewer$defer$EventCometHomeDiscoverLearningClassContent_user",
                              selections: [
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "type",
                                      value: "LEARNING_CLASS",
                                    },
                                  ],
                                  concreteType: "EventDiscoveryTabs",
                                  kind: "LinkedField",
                                  name: "event_discovery_tabs",
                                  plural: !1,
                                  selections: m,
                                  storageKey:
                                    'event_discovery_tabs(type:"LEARNING_CLASS")',
                                },
                                e,
                              ],
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        e,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "friends_actor",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              if: null,
                              kind: "Defer",
                              label:
                                "EventCometHomeDiscoverFeed_viewer$defer$EventCometHomeDiscoverFriendsContent_user",
                              selections: [
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "type",
                                      value: "FRIENDS",
                                    },
                                  ],
                                  concreteType: "EventDiscoveryTabs",
                                  kind: "LinkedField",
                                  name: "event_discovery_tabs",
                                  plural: !1,
                                  selections: m,
                                  storageKey:
                                    'event_discovery_tabs(type:"FRIENDS")',
                                },
                                e,
                              ],
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        e,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "following_actor",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              if: null,
                              kind: "Defer",
                              label:
                                "EventCometHomeDiscoverFeed_viewer$defer$EventCometHomeDiscoverFollowingContent_user",
                              selections: [
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "type",
                                      value: "FOLLOWING",
                                    },
                                  ],
                                  concreteType: "EventDiscoveryTabs",
                                  kind: "LinkedField",
                                  name: "event_discovery_tabs",
                                  plural: !1,
                                  selections: m,
                                  storageKey:
                                    'event_discovery_tabs(type:"FOLLOWING")',
                                },
                                e,
                              ],
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        e,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "top_category_actor",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: F,
                              concreteType: "EventDiscoveryTabs",
                              kind: "LinkedField",
                              name: "event_discovery_tabs",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "EventDiscoveryTab",
                                  kind: "LinkedField",
                                  name: "requested_tab",
                                  plural: !1,
                                  selections: g,
                                  storageKey: null,
                                },
                              ],
                              storageKey:
                                'event_discovery_tabs(type:"TOP_CATEGORY")',
                            },
                            {
                              if: null,
                              kind: "Defer",
                              label:
                                "EventCometHomeDiscoverFeed_viewer$defer$EventCometHomeDiscoverTopCategoryContent_user",
                              selections: [
                                {
                                  alias: null,
                                  args: F,
                                  concreteType: "EventDiscoveryTabs",
                                  kind: "LinkedField",
                                  name: "event_discovery_tabs",
                                  plural: !1,
                                  selections: m,
                                  storageKey:
                                    'event_discovery_tabs(type:"TOP_CATEGORY")',
                                },
                                e,
                              ],
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        e,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: "now_actor",
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              if: null,
                              kind: "Defer",
                              label:
                                "EventCometHomeDiscoverFeed_viewer$defer$EventCometHomeDiscoverNowContent_user",
                              selections: [
                                {
                                  alias: null,
                                  args: E,
                                  concreteType: "EventDiscoveryTabs",
                                  kind: "LinkedField",
                                  name: "event_discovery_tabs",
                                  plural: !1,
                                  selections: m,
                                  storageKey:
                                    'event_discovery_tabs(type:"NOW")',
                                },
                                e,
                              ],
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                        e,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: c,
                      concreteType: "NotificationsConnection",
                      kind: "LinkedField",
                      name: "notifications",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "NotificationsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            d,
                            {
                              alias: null,
                              args: null,
                              concreteType: "Notification",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                e,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "TextWithEntities",
                                  kind: "LinkedField",
                                  name: "body",
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
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "height",
                                      value: 56,
                                    },
                                    i,
                                    {
                                      kind: "Literal",
                                      name: "width",
                                      value: 56,
                                    },
                                  ],
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "notif_image",
                                  plural: !1,
                                  selections: j,
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "notif_sent_time",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "seen_state",
                                  storageKey: null,
                                },
                                B,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'notifications(environment:"EVENTS",seen_state:"UNSEEN_AND_UNREAD")',
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
            {
              condition: "isLoggedOut",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "loggedOutViewer",
                  args: null,
                  concreteType: "Viewer",
                  kind: "LinkedField",
                  name: "viewer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "EventDiscoverQuery",
                      kind: "LinkedField",
                      name: "suggested_events",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: G,
                          concreteType: "EventDiscoverEventConnection",
                          kind: "LinkedField",
                          name: "events",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "EventDiscoverEventEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: k,
                              storageKey: null,
                            },
                            l,
                          ],
                          storageKey: "events(first:9)",
                        },
                        {
                          alias: null,
                          args: G,
                          filters: null,
                          handle: "connection",
                          key: "EventCometHomeLOVFeed_events",
                          kind: "LinkedHandle",
                          name: "events",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "4019755044818870",
          metadata: {},
          name: "EventCometHomeRootQuery",
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
  "EventCometHomeDiscoverContentRefetchQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: 9, kind: "LocalArgument", name: "count" },
        b = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        c = { defaultValue: null, kind: "LocalArgument", name: "id" },
        d = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        e = { defaultValue: null, kind: "LocalArgument", name: "tab_type" },
        f = [{ kind: "Variable", name: "id", variableName: "id" }],
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
        ],
        j = { kind: "Variable", name: "scale", variableName: "scale" },
        k = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        m = {
          kind: "InlineFragment",
          selections: [h],
          type: "Node",
          abstractKey: "__isNode",
        },
        n = [g, h];
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e],
          kind: "Fragment",
          metadata: null,
          name: "EventCometHomeDiscoverContentRefetchQuery",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
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
                    {
                      kind: "Variable",
                      name: "tab_type",
                      variableName: "tab_type",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "EventCometHomeDiscoverContent_user",
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
          argumentDefinitions: [a, b, d, e, c],
          kind: "Operation",
          name: "EventCometHomeDiscoverContentRefetchQuery",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                g,
                h,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "type",
                          variableName: "tab_type",
                        },
                      ],
                      concreteType: "EventDiscoveryTabs",
                      kind: "LinkedField",
                      name: "event_discovery_tabs",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "EventDiscoveryTab",
                          kind: "LinkedField",
                          name: "requested_tab",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: i,
                              concreteType: "EventDiscoveryTabEventsConnection",
                              kind: "LinkedField",
                              name: "events",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "EventDiscoveryTabEventsEdge",
                                  kind: "LinkedField",
                                  name: "edges",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Event",
                                      kind: "LinkedField",
                                      name: "node",
                                      plural: !1,
                                      selections: [
                                        h,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "FocusedPhoto",
                                          kind: "LinkedField",
                                          name: "cover_photo",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "Photo",
                                              kind: "LinkedField",
                                              name: "photo",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "accessibility_caption",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: [
                                                    {
                                                      kind: "Literal",
                                                      name: "height",
                                                      value: 147,
                                                    },
                                                    j,
                                                    {
                                                      kind: "Literal",
                                                      name: "sizing",
                                                      value:
                                                        "cover-fill-cropped",
                                                    },
                                                    {
                                                      kind: "Literal",
                                                      name: "width",
                                                      value: 308,
                                                    },
                                                  ],
                                                  concreteType: "Image",
                                                  kind: "LinkedField",
                                                  name: "image",
                                                  plural: !1,
                                                  selections: k,
                                                  storageKey: null,
                                                },
                                                h,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "OnlineEventSetup",
                                          kind: "LinkedField",
                                          name: "online_event_setup",
                                          plural: !1,
                                          selections: [
                                            l,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "messenger_room_url",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "is_happening_now",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "day_time_sentence_format",
                                              value: "LONG",
                                            },
                                          ],
                                          kind: "ScalarField",
                                          name: "day_time_sentence",
                                          storageKey:
                                            'day_time_sentence(day_time_sentence_format:"LONG")',
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
                                            {
                                              kind: "Literal",
                                              name: "social_context_format",
                                              value: "LONG",
                                            },
                                            {
                                              kind: "Literal",
                                              name: "social_context_render_location",
                                              value: "EVENTS_DASHBOARD",
                                            },
                                          ],
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
                                                    g,
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: [
                                                            {
                                                              kind: "Literal",
                                                              name: "height",
                                                              value: 24,
                                                            },
                                                            j,
                                                            {
                                                              kind: "Literal",
                                                              name: "width",
                                                              value: 24,
                                                            },
                                                          ],
                                                          concreteType: "Image",
                                                          kind: "LinkedField",
                                                          name: "profile_picture",
                                                          plural: !1,
                                                          selections: k,
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      type: "Profile",
                                                      abstractKey:
                                                        "__isProfile",
                                                    },
                                                    m,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey:
                                            'social_context(social_context_format:"LONG",social_context_render_location:"EVENTS_DASHBOARD")',
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "is_online",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "EventTicketingContextRow",
                                          kind: "LinkedField",
                                          name: "ticketing_context_row",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "price_range_text",
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
                                          name: "event_place",
                                          plural: !1,
                                          selections: [
                                            g,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "contextual_name",
                                              storageKey: null,
                                            },
                                            m,
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: "eventUrl",
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
                                          args: null,
                                          kind: "ScalarField",
                                          name: "can_viewer_rsvp",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "can_viewer_share",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "is_online_or_detected_online",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "is_viewer_host",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "start_timestamp",
                                          storageKey: null,
                                        },
                                        {
                                          alias: "rsvp_button_renderer",
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "supported",
                                              value: [
                                                "LiveVideoGoLiveStyleRenderer",
                                                "DisabledRsvpStyleRenderer",
                                                "PrivateRsvpStyleRenderer",
                                                "PublicRsvpStyleRenderer",
                                                "WorkPrivateRsvpStyleRenderer",
                                                "WorkPublicRsvpStyleRenderer",
                                              ],
                                            },
                                          ],
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "rsvp_style_renderer",
                                          plural: !1,
                                          selections: [
                                            g,
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "EventCometUniversalRSVPButton_event",
                                                  fragmentName:
                                                    "LiveVideoCometGoLiveButtonRenderer_rsvpStyleRenderer",
                                                  fragmentPropName:
                                                    "rsvpStyleRenderer",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "LiveVideoGoLiveStyleRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "EventCometUniversalRSVPButton_event",
                                                  fragmentName:
                                                    "EventCometDisabledRSVPButtonRenderer_rsvpStyleRenderer",
                                                  fragmentPropName:
                                                    "rsvpStyleRenderer",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "DisabledRsvpStyleRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "EventCometUniversalRSVPButton_event",
                                                  fragmentName:
                                                    "PrivateEventCometRSVPButtonRenderer_rsvpStyleRenderer",
                                                  fragmentPropName:
                                                    "rsvpStyleRenderer",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "PrivateRsvpStyleRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "EventCometUniversalRSVPButton_event",
                                                  fragmentName:
                                                    "PublicEventCometRSVPButtonRenderer_rsvpStyleRenderer",
                                                  fragmentPropName:
                                                    "rsvpStyleRenderer",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "PublicRsvpStyleRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "EventCometUniversalRSVPButton_event",
                                                  fragmentName:
                                                    "EventsGeminiPrivateEventRSVPButtonRenderer_rsvpStyleRenderer",
                                                  fragmentPropName:
                                                    "rsvpStyleRenderer",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "WorkPrivateRsvpStyleRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "EventCometUniversalRSVPButton_event",
                                                  fragmentName:
                                                    "EventsGeminiPublicEventRSVPButtonRenderer_rsvpStyleRenderer",
                                                  fragmentPropName:
                                                    "rsvpStyleRenderer",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "WorkPublicRsvpStyleRenderer",
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey:
                                            'rsvp_style_renderer(supported:["LiveVideoGoLiveStyleRenderer","DisabledRsvpStyleRenderer","PrivateRsvpStyleRenderer","PublicRsvpStyleRenderer","WorkPrivateRsvpStyleRenderer","WorkPublicRsvpStyleRenderer"])',
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Event",
                                          kind: "LinkedField",
                                          name: "parent_if_exists_or_self",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "OnlineEventSetup",
                                              kind: "LinkedField",
                                              name: "online_event_setup",
                                              plural: !1,
                                              selections: [
                                                l,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "third_party_url",
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                            h,
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "is_past",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "LiveVirtualEventInfo",
                                          kind: "LinkedField",
                                          name: "live_virtual_event_info",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: [
                                                {
                                                  kind: "Literal",
                                                  name: "first",
                                                  value: 1,
                                                },
                                              ],
                                              concreteType:
                                                "LiveVirtualEventInfoAssociatedLiveVideosConnection",
                                              kind: "LinkedField",
                                              name: "associated_live_videos",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "LiveVirtualEventInfoAssociatedLiveVideosEdge",
                                                  kind: "LinkedField",
                                                  name: "edges",
                                                  plural: !0,
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: "Video",
                                                      kind: "LinkedField",
                                                      name: "node",
                                                      plural: !1,
                                                      selections: [
                                                        h,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "is_live_streaming",
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
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "video_channel",
                                                          plural: !1,
                                                          selections: n,
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: null,
                                                          kind: "LinkedField",
                                                          name: "owner",
                                                          plural: !1,
                                                          selections: n,
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "is_show_video",
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
                                                "associated_live_videos(first:1)",
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "can_viewer_go_live",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "go_live_target",
                                              plural: !1,
                                              selections: n,
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "viewer_state",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        g,
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
                              args: i,
                              filters: null,
                              handle: "connection",
                              key: "EventCometHomeDiscoverContent_events",
                              kind: "LinkedHandle",
                              name: "events",
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
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4637588096326940",
          metadata: {},
          name: "EventCometHomeDiscoverContentRefetchQuery",
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
  "EventCometHomeDiscoverContent_user.graphql",
  ["EventCometHomeDiscoverContentRefetchQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["event_discovery_tabs", "requested_tab", "events"],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: 9, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { kind: "RootArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "tab_type" },
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
            fragmentPathInResult: ["node"],
            operation: b("EventCometHomeDiscoverContentRefetchQuery.graphql"),
            identifierField: "id",
          },
        },
        name: "EventCometHomeDiscoverContent_user",
        selections: [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "type", variableName: "tab_type" },
            ],
            concreteType: "EventDiscoveryTabs",
            kind: "LinkedField",
            name: "event_discovery_tabs",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "EventDiscoveryTab",
                kind: "LinkedField",
                name: "requested_tab",
                plural: !1,
                selections: [
                  {
                    alias: "events",
                    args: null,
                    concreteType: "EventDiscoveryTabEventsConnection",
                    kind: "LinkedField",
                    name: "__EventCometHomeDiscoverContent_events_connection",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "EventDiscoveryTabEventsEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "Event",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [
                              c,
                              {
                                args: null,
                                kind: "FragmentSpread",
                                name: "EventCometCardRoot_event",
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
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          c,
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
  "EventCometHomeDiscoverFeed_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometHomeDiscoverFeed_viewer",
      selections: [
        {
          alias: "default_actor",
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
                  name: "EventCometHomeDiscoverRecommendedContent_user",
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: "this_week_actor",
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
                  kind: "Defer",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "EventCometHomeDiscoverThisWeekContent_user",
                    },
                  ],
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: "online_actor",
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
                  kind: "Defer",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "EventCometHomeDiscoverOnlineContent_user",
                    },
                  ],
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: "learning_class_actor",
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
                  kind: "Defer",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "EventCometHomeDiscoverLearningClassContent_user",
                    },
                  ],
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: "friends_actor",
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
                  kind: "Defer",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "EventCometHomeDiscoverFriendsContent_user",
                    },
                  ],
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: "following_actor",
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
                  kind: "Defer",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "EventCometHomeDiscoverFollowingContent_user",
                    },
                  ],
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: "top_category_actor",
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
                  alias: null,
                  args: [
                    { kind: "Literal", name: "type", value: "TOP_CATEGORY" },
                  ],
                  concreteType: "EventDiscoveryTabs",
                  kind: "LinkedField",
                  name: "event_discovery_tabs",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "EventDiscoveryTab",
                      kind: "LinkedField",
                      name: "requested_tab",
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
                  storageKey: 'event_discovery_tabs(type:"TOP_CATEGORY")',
                },
                {
                  kind: "Defer",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "EventCometHomeDiscoverTopCategoryContent_user",
                    },
                  ],
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: "now_actor",
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
                  kind: "Defer",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "EventCometHomeDiscoverNowContent_user",
                    },
                  ],
                },
              ],
              type: "User",
              abstractKey: null,
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
  "EventCometHomeDiscoverFollowingContent_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometHomeDiscoverFollowingContent_user",
      selections: [
        {
          args: [{ kind: "Literal", name: "tab_type", value: "FOLLOWING" }],
          kind: "FragmentSpread",
          name: "EventCometHomeDiscoverContent_user",
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
  "EventCometHomeDiscoverFriendsContent_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometHomeDiscoverFriendsContent_user",
      selections: [
        {
          args: [{ kind: "Literal", name: "tab_type", value: "FRIENDS" }],
          kind: "FragmentSpread",
          name: "EventCometHomeDiscoverContent_user",
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
  "EventCometHomeDiscoverLearningClassContent_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometHomeDiscoverLearningClassContent_user",
      selections: [
        {
          args: [
            { kind: "Literal", name: "tab_type", value: "LEARNING_CLASS" },
          ],
          kind: "FragmentSpread",
          name: "EventCometHomeDiscoverContent_user",
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
  "EventCometHomeDiscoverNowContent_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometHomeDiscoverNowContent_user",
      selections: [
        {
          args: [{ kind: "Literal", name: "tab_type", value: "NOW" }],
          kind: "FragmentSpread",
          name: "EventCometHomeDiscoverContent_user",
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
  "EventCometHomeDiscoverOnlineContent_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometHomeDiscoverOnlineContent_user",
      selections: [
        {
          args: [{ kind: "Literal", name: "tab_type", value: "ONLINE" }],
          kind: "FragmentSpread",
          name: "EventCometHomeDiscoverContent_user",
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
  "EventCometHomeDiscoverRecommendedContent_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometHomeDiscoverRecommendedContent_user",
      selections: [
        {
          args: [{ kind: "Literal", name: "tab_type", value: "RECOMMENDED" }],
          kind: "FragmentSpread",
          name: "EventCometHomeDiscoverContent_user",
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
  "EventCometHomeDiscoverSection_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometHomeDiscoverSection_viewer",
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
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "EventDiscoveryTabs",
                  kind: "LinkedField",
                  name: "event_discovery_tabs",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "EventDiscoveryTab",
                      kind: "LinkedField",
                      name: "tabs",
                      plural: !0,
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
          alias: "top_category_tab",
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
                  alias: null,
                  args: [
                    { kind: "Literal", name: "type", value: "TOP_CATEGORY" },
                  ],
                  concreteType: "EventDiscoveryTabs",
                  kind: "LinkedField",
                  name: "event_discovery_tabs",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "EventDiscoveryTab",
                      kind: "LinkedField",
                      name: "requested_tab",
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
                  ],
                  storageKey: 'event_discovery_tabs(type:"TOP_CATEGORY")',
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "EventCometHomeDiscoverFeed_viewer",
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
  "EventCometHomeDiscoverThisWeekContent_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometHomeDiscoverThisWeekContent_user",
      selections: [
        {
          args: [{ kind: "Literal", name: "tab_type", value: "THIS_WEEK" }],
          kind: "FragmentSpread",
          name: "EventCometHomeDiscoverContent_user",
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
  "EventCometHomeDiscoverTopCategoryContent_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometHomeDiscoverTopCategoryContent_user",
      selections: [
        {
          args: [{ kind: "Literal", name: "tab_type", value: "TOP_CATEGORY" }],
          kind: "FragmentSpread",
          name: "EventCometHomeDiscoverContent_user",
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
  "EventCometHomeLOVFeedRefetchQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: 9, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = { kind: "Variable", name: "scale", variableName: "scale" },
        e = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        h = {
          kind: "InlineFragment",
          selections: [c],
          type: "Node",
          abstractKey: "__isNode",
        },
        i = [g, c];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "EventCometHomeLOVFeedRefetchQuery",
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
                  name: "EventCometHomeLOVFeed_viewer",
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
          name: "EventCometHomeLOVFeedRefetchQuery",
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
                  concreteType: "EventDiscoverQuery",
                  kind: "LinkedField",
                  name: "suggested_events",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: b,
                      concreteType: "EventDiscoverEventConnection",
                      kind: "LinkedField",
                      name: "events",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "EventDiscoverEventEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Event",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                c,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "FocusedPhoto",
                                  kind: "LinkedField",
                                  name: "cover_photo",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Photo",
                                      kind: "LinkedField",
                                      name: "photo",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "accessibility_caption",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: [
                                            {
                                              kind: "Literal",
                                              name: "height",
                                              value: 147,
                                            },
                                            d,
                                            {
                                              kind: "Literal",
                                              name: "sizing",
                                              value: "cover-fill-cropped",
                                            },
                                            {
                                              kind: "Literal",
                                              name: "width",
                                              value: 308,
                                            },
                                          ],
                                          concreteType: "Image",
                                          kind: "LinkedField",
                                          name: "image",
                                          plural: !1,
                                          selections: e,
                                          storageKey: null,
                                        },
                                        c,
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "OnlineEventSetup",
                                  kind: "LinkedField",
                                  name: "online_event_setup",
                                  plural: !1,
                                  selections: [
                                    f,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "messenger_room_url",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_happening_now",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "day_time_sentence_format",
                                      value: "LONG",
                                    },
                                  ],
                                  kind: "ScalarField",
                                  name: "day_time_sentence",
                                  storageKey:
                                    'day_time_sentence(day_time_sentence_format:"LONG")',
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
                                    {
                                      kind: "Literal",
                                      name: "social_context_format",
                                      value: "LONG",
                                    },
                                    {
                                      kind: "Literal",
                                      name: "social_context_render_location",
                                      value: "EVENTS_DASHBOARD",
                                    },
                                  ],
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
                                            g,
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: [
                                                    {
                                                      kind: "Literal",
                                                      name: "height",
                                                      value: 24,
                                                    },
                                                    d,
                                                    {
                                                      kind: "Literal",
                                                      name: "width",
                                                      value: 24,
                                                    },
                                                  ],
                                                  concreteType: "Image",
                                                  kind: "LinkedField",
                                                  name: "profile_picture",
                                                  plural: !1,
                                                  selections: e,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "Profile",
                                              abstractKey: "__isProfile",
                                            },
                                            h,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey:
                                    'social_context(social_context_format:"LONG",social_context_render_location:"EVENTS_DASHBOARD")',
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_online",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "EventTicketingContextRow",
                                  kind: "LinkedField",
                                  name: "ticketing_context_row",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "price_range_text",
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
                                  name: "event_place",
                                  plural: !1,
                                  selections: [
                                    g,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "contextual_name",
                                      storageKey: null,
                                    },
                                    h,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: "eventUrl",
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
                                  args: null,
                                  kind: "ScalarField",
                                  name: "can_viewer_rsvp",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "can_viewer_share",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_online_or_detected_online",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_viewer_host",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "start_timestamp",
                                  storageKey: null,
                                },
                                {
                                  alias: "rsvp_button_renderer",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "supported",
                                      value: [
                                        "LiveVideoGoLiveStyleRenderer",
                                        "DisabledRsvpStyleRenderer",
                                        "PrivateRsvpStyleRenderer",
                                        "PublicRsvpStyleRenderer",
                                        "WorkPrivateRsvpStyleRenderer",
                                        "WorkPublicRsvpStyleRenderer",
                                      ],
                                    },
                                  ],
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "rsvp_style_renderer",
                                  plural: !1,
                                  selections: [
                                    g,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "EventCometUniversalRSVPButton_event",
                                          fragmentName:
                                            "LiveVideoCometGoLiveButtonRenderer_rsvpStyleRenderer",
                                          fragmentPropName: "rsvpStyleRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "LiveVideoGoLiveStyleRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "EventCometUniversalRSVPButton_event",
                                          fragmentName:
                                            "EventCometDisabledRSVPButtonRenderer_rsvpStyleRenderer",
                                          fragmentPropName: "rsvpStyleRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "DisabledRsvpStyleRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "EventCometUniversalRSVPButton_event",
                                          fragmentName:
                                            "PrivateEventCometRSVPButtonRenderer_rsvpStyleRenderer",
                                          fragmentPropName: "rsvpStyleRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "PrivateRsvpStyleRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "EventCometUniversalRSVPButton_event",
                                          fragmentName:
                                            "PublicEventCometRSVPButtonRenderer_rsvpStyleRenderer",
                                          fragmentPropName: "rsvpStyleRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "PublicRsvpStyleRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "EventCometUniversalRSVPButton_event",
                                          fragmentName:
                                            "EventsGeminiPrivateEventRSVPButtonRenderer_rsvpStyleRenderer",
                                          fragmentPropName: "rsvpStyleRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "WorkPrivateRsvpStyleRenderer",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          args: null,
                                          documentName:
                                            "EventCometUniversalRSVPButton_event",
                                          fragmentName:
                                            "EventsGeminiPublicEventRSVPButtonRenderer_rsvpStyleRenderer",
                                          fragmentPropName: "rsvpStyleRenderer",
                                          kind: "ModuleImport",
                                        },
                                      ],
                                      type: "WorkPublicRsvpStyleRenderer",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey:
                                    'rsvp_style_renderer(supported:["LiveVideoGoLiveStyleRenderer","DisabledRsvpStyleRenderer","PrivateRsvpStyleRenderer","PublicRsvpStyleRenderer","WorkPrivateRsvpStyleRenderer","WorkPublicRsvpStyleRenderer"])',
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Event",
                                  kind: "LinkedField",
                                  name: "parent_if_exists_or_self",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "OnlineEventSetup",
                                      kind: "LinkedField",
                                      name: "online_event_setup",
                                      plural: !1,
                                      selections: [
                                        f,
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "third_party_url",
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    c,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_past",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "LiveVirtualEventInfo",
                                  kind: "LinkedField",
                                  name: "live_virtual_event_info",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "first",
                                          value: 1,
                                        },
                                      ],
                                      concreteType:
                                        "LiveVirtualEventInfoAssociatedLiveVideosConnection",
                                      kind: "LinkedField",
                                      name: "associated_live_videos",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "LiveVirtualEventInfoAssociatedLiveVideosEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: "Video",
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: [
                                                c,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_live_streaming",
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
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "video_channel",
                                                  plural: !1,
                                                  selections: i,
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "owner",
                                                  plural: !1,
                                                  selections: i,
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "is_show_video",
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
                                        "associated_live_videos(first:1)",
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "can_viewer_go_live",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "go_live_target",
                                      plural: !1,
                                      selections: i,
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "viewer_state",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                g,
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
                      args: b,
                      filters: null,
                      handle: "connection",
                      key: "EventCometHomeLOVFeed_events",
                      kind: "LinkedHandle",
                      name: "events",
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
          id: "4678844862145178",
          metadata: {},
          name: "EventCometHomeLOVFeedRefetchQuery",
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
  "EventCometHomeLOVFeed_viewer.graphql",
  ["EventCometHomeLOVFeedRefetchQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["suggested_events", "events"];
      return {
        argumentDefinitions: [
          { defaultValue: 9, kind: "LocalArgument", name: "count" },
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
            operation: b("EventCometHomeLOVFeedRefetchQuery.graphql"),
          },
        },
        name: "EventCometHomeLOVFeed_viewer",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "EventDiscoverQuery",
            kind: "LinkedField",
            name: "suggested_events",
            plural: !1,
            selections: [
              {
                alias: "events",
                args: null,
                concreteType: "EventDiscoverEventConnection",
                kind: "LinkedField",
                name: "__EventCometHomeLOVFeed_events_connection",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "EventDiscoverEventEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "Event",
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
                            name: "EventCometCardRoot_event",
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
  "EventCometCardContent_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometCardContent_event",
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
          name: "EventCometCardImage_event",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "EventCometCardInfo_event",
        },
      ],
      type: "Event",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometCardDefaultFooterButtons_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometCardDefaultFooterButtons_event",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGetEventCometDailyRecommendedActionButtons_event",
        },
      ],
      type: "Event",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometCardRoot_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometCardRoot_event",
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
          name: "EventCometCardContent_event",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "EventCometCardDefaultFooterButtons_event",
        },
      ],
      type: "Event",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometCardImage_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "EventCometCardImage_event",
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
          concreteType: "FocusedPhoto",
          kind: "LinkedField",
          name: "cover_photo",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Photo",
              kind: "LinkedField",
              name: "photo",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "accessibility_caption",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "height", value: 147 },
                    { kind: "Variable", name: "scale", variableName: "scale" },
                    {
                      kind: "Literal",
                      name: "sizing",
                      value: "cover-fill-cropped",
                    },
                    { kind: "Literal", name: "width", value: 308 },
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
        {
          alias: null,
          args: null,
          concreteType: "OnlineEventSetup",
          kind: "LinkedField",
          name: "online_event_setup",
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
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_happening_now",
          storageKey: null,
        },
      ],
      type: "Event",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometCardInfo_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "EventCometCardInfo_event",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
          path: "id",
        },
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "day_time_sentence_format",
              value: "LONG",
            },
          ],
          kind: "ScalarField",
          name: "day_time_sentence",
          storageKey: 'day_time_sentence(day_time_sentence_format:"LONG")',
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
            { kind: "Literal", name: "social_context_format", value: "LONG" },
            {
              kind: "Literal",
              name: "social_context_render_location",
              value: "EVENTS_DASHBOARD",
            },
          ],
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
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: [
                            { kind: "Literal", name: "height", value: 24 },
                            {
                              kind: "Variable",
                              name: "scale",
                              variableName: "scale",
                            },
                            { kind: "Literal", name: "width", value: 24 },
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
              ],
              storageKey: null,
            },
          ],
          storageKey:
            'social_context(social_context_format:"LONG",social_context_render_location:"EVENTS_DASHBOARD")',
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_happening_now",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "EventCometCardLocationPriceInfo_event",
        },
      ],
      type: "Event",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useGetEventCometDailyRecommendedActionButtons_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useGetEventCometDailyRecommendedActionButtons_event",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "NONE",
          path: "id",
        },
        {
          kind: "RequiredField",
          field: {
            alias: "eventUrl",
            args: [{ kind: "Literal", name: "site", value: "comet" }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"comet")',
          },
          action: "NONE",
          path: "eventUrl",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_rsvp",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_share",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_happening_now",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_online_or_detected_online",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_viewer_host",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "start_timestamp",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "EventCometUniversalRSVPButton_event",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "EventCometBookmarkVirtualEventCTAButton_event",
        },
      ],
      type: "Event",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometBookmarkLinkEventButton_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometBookmarkLinkEventButton_event",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Event",
          kind: "LinkedField",
          name: "parent_if_exists_or_self",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "OnlineEventSetup",
              kind: "LinkedField",
              name: "online_event_setup",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "third_party_url",
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
          name: "is_viewer_host",
          storageKey: null,
        },
      ],
      type: "Event",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometBookmarkLiveVideoButton_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometBookmarkLiveVideoButton_event",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "LiveVirtualEventInfo",
          kind: "LinkedField",
          name: "live_virtual_event_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [{ kind: "Literal", name: "first", value: 1 }],
              concreteType:
                "LiveVirtualEventInfoAssociatedLiveVideosConnection",
              kind: "LinkedField",
              name: "associated_live_videos",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "LiveVirtualEventInfoAssociatedLiveVideosEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Video",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CometVideoHomeVideoLink_video",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: "associated_live_videos(first:1)",
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "can_viewer_go_live",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "go_live_target",
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
              name: "viewer_state",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "EventCometUniversalRSVPButton_event",
        },
      ],
      type: "Event",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometBookmarkOrientedRoomButton_onlineEventSetup.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometBookmarkOrientedRoomButton_onlineEventSetup",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "messenger_room_url",
          storageKey: null,
        },
      ],
      type: "OnlineEventSetup",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometBookmarkVirtualEventCTAButton_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometBookmarkVirtualEventCTAButton_event",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "OnlineEventSetup",
          kind: "LinkedField",
          name: "online_event_setup",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "EventCometBookmarkOrientedRoomButton_onlineEventSetup",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Event",
          kind: "LinkedField",
          name: "parent_if_exists_or_self",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "OnlineEventSetup",
              kind: "LinkedField",
              name: "online_event_setup",
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_past",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "EventCometBookmarkLinkEventButton_event",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "EventCometBookmarkLiveVideoButton_event",
        },
      ],
      type: "Event",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometNotificationsListItem_notification.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "EventCometNotificationsListItem_notification",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "body",
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
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
          path: "id",
        },
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 56 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 56 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "notif_image",
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
          name: "notif_sent_time",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "seen_state",
          storageKey: null,
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null,
          },
          action: "THROW",
          path: "url",
        },
      ],
      type: "Notification",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometSurfaceHighlight_notificationsConnection.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometSurfaceHighlight_notificationsConnection",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "NotificationsEdge",
          kind: "LinkedField",
          name: "edges",
          plural: !0,
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                concreteType: "Notification",
                kind: "LinkedField",
                name: "node",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                    action: "THROW",
                    path: "edges.node.id",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "EventCometNotificationsListItem_notification",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "edges.node",
            },
          ],
          storageKey: null,
        },
      ],
      type: "NotificationsConnection",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventNotificationsUpdateSeenStateMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "bookmarkID" },
        b = { defaultValue: null, kind: "LocalArgument", name: "environment" },
        c = { defaultValue: null, kind: "LocalArgument", name: "hasBookmark" },
        d = { defaultValue: null, kind: "LocalArgument", name: "hasTopTab" },
        e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        f = [{ kind: "Variable", name: "data", variableName: "input" }],
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          concreteType: "Notification",
          kind: "LinkedField",
          name: "notifications",
          plural: !0,
          selections: [
            g,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "seen_state",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = [
          {
            kind: "Literal",
            name: "bookmark_render_location",
            value: "COMET_LEFT_NAV",
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e],
          kind: "Fragment",
          metadata: null,
          name: "EventNotificationsUpdateSeenStateMutation",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: "NotificationsUpdateSeenOrReadResponsePayload",
              kind: "LinkedField",
              name: "notifications_update_seen_or_read",
              plural: !1,
              selections: [
                h,
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
                      name: "CometNotificationsBadgeCountFragment_viewer",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometHomepageBadgeCountClearingMutationHelper_viewer",
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
          argumentDefinitions: [a, d, c, e, b],
          kind: "Operation",
          name: "EventNotificationsUpdateSeenStateMutation",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: "NotificationsUpdateSeenOrReadResponsePayload",
              kind: "LinkedField",
              name: "notifications_update_seen_or_read",
              plural: !1,
              selections: [
                h,
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
                        {
                          kind: "Variable",
                          name: "environment",
                          variableName: "environment",
                        },
                      ],
                      kind: "ScalarField",
                      name: "notifications_unseen_count",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        {
                          items: [
                            {
                              kind: "Variable",
                              name: "bookmark_ids.0",
                              variableName: "bookmarkID",
                            },
                          ],
                          kind: "ListValue",
                          name: "bookmark_ids",
                        },
                        {
                          kind: "Literal",
                          name: "environment",
                          value: "COMET",
                        },
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
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "__typename",
                                      storageKey: null,
                                    },
                                    g,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  condition: "hasBookmark",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: "bookmark_unread_count",
                                      args: i,
                                      kind: "ScalarField",
                                      name: "unread_count",
                                      storageKey:
                                        'unread_count(bookmark_render_location:"COMET_LEFT_NAV")',
                                    },
                                  ],
                                },
                                {
                                  alias: "bookmark_unread_count_string",
                                  args: i,
                                  kind: "ScalarField",
                                  name: "unread_count_string",
                                  storageKey:
                                    'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")',
                                },
                                {
                                  condition: "hasTopTab",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: "tab_unread_count",
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
                                  ],
                                },
                                g,
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
        },
        params: {
          id: "4461514877196531",
          metadata: {},
          name: "EventNotificationsUpdateSeenStateMutation",
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
  "EventCometDashboardNullState.react",
  [
    "CometImage.react",
    "EventCometDashboardConstants",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.action;
      a = a.body;
      return h.jsxs("div", {
        className:
          "gm7ombtx jbae33se gpl4oick bjjx79mm taijpn5t cbu4d94t j83agx80 bp9cbjyn",
        children: [
          h.jsx("div", {
            className: "sej5wr8e",
            children: h.jsx(c("CometImage.react"), {
              alt: "Education_Calendar",
              height: 100,
              src: d("EventCometDashboardConstants").CALENDAR_IMAGE_PATH,
              width: 148,
            }),
          }),
          h.jsx(c("TetraTextPairing.react"), {
            body: a,
            bodyColor: "secondary",
            level: 2,
            textAlign: "center",
          }),
          !!b && h.jsx("div", { className: "gh1tjcio", children: b }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometCardMoreButton.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "EventCometPermalinkMoreActionsMenu.entrypoint",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      a = a.eventID;
      return j.jsx(c("CometEntryPointPopoverTrigger.react"), {
        align: "end",
        entryPointParams: { eventID: a },
        fallback: j.jsx(c("CometPopoverLoadingState.react"), {}),
        otherProps: {},
        popoverEntryPoint: c("EventCometPermalinkMoreActionsMenu.entrypoint"),
        preloadTrigger: "button",
        children: function (a, b, e, f, g, k) {
          return j.jsx("div", {
            className:
              "fcg2cn6m pmk7jnqg scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 swmj3c3o spb7xbtv bkmhp75w emlxlaya s45kfl79 c6a7hszh",
            children: j.jsx(c("TetraIcon.react"), {
              "aria-label": h._("More"),
              color: "white",
              icon: d("fbicon")._(i("484386"), 16),
              onHoverIn: f,
              onHoverOut: g,
              onPress: b,
              onPressIn: k,
              ref: a,
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
  "EventCometCardImage.react",
  [
    "fbt",
    "ix",
    "CometImageCover.react",
    "CometRelay",
    "EventCometCardImage_event.graphql",
    "EventCometCardMoreButton.react",
    "TetraIcon.react",
    "TetraText.react",
    "eventCometAccessibilityCaption",
    "fbicon",
    "react",
    "stylex",
    "useIsLoggedOut",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useState,
      m = j !== void 0 ? j : (j = b("EventCometCardImage_event.graphql"));
    function a(a) {
      var b, e;
      a = d("CometRelay").useFragment(m, a.event$key);
      b =
        (b = a.cover_photo) == null
          ? void 0
          : (b = b.photo) == null
          ? void 0
          : (b = b.image) == null
          ? void 0
          : b.uri;
      e = c("eventCometAccessibilityCaption")(
        (e = a.cover_photo) == null
          ? void 0
          : (e = e.photo) == null
          ? void 0
          : e.accessibility_caption
      );
      var f = c("useIsLoggedOut")(),
        g = l(!1),
        j = g[0],
        n = g[1];
      return k.jsx("div", {
        className: c("stylex").dedupe(
          {
            "padding-bottom-1": "qgoq1ngx",
            "position-1": "l9j0dhe7",
            "width-1": "k4urcfbm",
          },
          j ? { "padding-bottom-1": "is38vakr" } : null
        ),
        children: k.jsxs("div", {
          className:
            "k4urcfbm stjgntxs ni8dbmo4 taijpn5t kb5gq1qc j83agx80 g6srhlxm bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
          children: [
            b != null
              ? k.jsx(c("CometImageCover.react"), {
                  alt: e,
                  onError: function () {
                    return n(!0);
                  },
                  src: b,
                })
              : k.jsx(c("TetraIcon.react"), {
                  color: "tertiary",
                  icon: d("fbicon")._(i("607795"), 32),
                  size: 32,
                }),
            a.is_happening_now === !0 &&
            ((g = a.online_event_setup) == null ? void 0 : g.type) ===
              "MESSENGER_ROOM"
              ? k.jsx("div", {
                  className:
                    "fcg2cn6m rnx8an3s pmk7jnqg b3onmgus e5nlhep0 ph5uu5jm ecm0bbzt qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj tqsryivl",
                  children: k.jsx(c("TetraIcon.react"), {
                    color: "white",
                    icon: d("fbicon")._(i("493173"), 16),
                  }),
                })
              : a.is_happening_now === !0 &&
                ((j = a.online_event_setup) == null ? void 0 : j.type) ===
                  "FB_LIVE"
              ? k.jsx("div", {
                  className:
                    "fcg2cn6m rnx8an3s pmk7jnqg pcp91wgn iuny7tx3 p8fzw8mz ipjc6fyt qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj l44iypv3",
                  children: k.jsx(c("TetraText.react"), {
                    color: "white",
                    type: "headline4",
                    children: h._("LIVE"),
                  }),
                })
              : null,
            a.id != null &&
              !f &&
              k.jsx(
                c("EventCometCardMoreButton.react"),
                { eventID: a.id },
                a.id
              ),
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
  "EventCometCardInfo.react",
  [
    "CometLink.react",
    "CometRelay",
    "CometTooltip.react",
    "EventCometActionContext",
    "EventCometCardInfo_event.graphql",
    "EventCometCardLocationPriceInfo.react",
    "TetraOverlappingFacepileUnstyled.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "XCometEventPermalinkControllerRouteBuilder",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useMemo,
      l = h !== void 0 ? h : (h = b("EventCometCardInfo_event.graphql"));
    function a(a) {
      var b,
        e,
        f = d("CometRelay").useFragment(l, a.event$key),
        g = j(c("EventCometActionContext")),
        h = k(
          function () {
            return JSON.stringify(g);
          },
          [g]
        );
      if (f == null || f.name == null) return null;
      a = (a = a.hideSocialContext) != null ? a : !1;
      b =
        ((b = f.social_context) == null ? void 0 : b.text) != null &&
        i.jsx(c("TetraText.react"), {
          color: "secondary",
          numberOfLines: 1,
          type: "body4",
          children: f.social_context.text,
        });
      e = c("orEmptyArray")((e = f.social_context) == null ? void 0 : e.ranges);
      e = e
        .map(function (a) {
          a = a.entity;
          return a;
        })
        .filter(Boolean)
        .map(function (a) {
          a = a.profile_picture;
          if (a == null || a.uri == null) return null;
          a = a.uri;
          return { source: { uri: a } };
        })
        .filter(Boolean);
      return i.jsxs("div", {
        className:
          "l3itjdph dati1w0a qt6c0cv9 hv4rvrfc pybr56ya i1fnvgqd ajpb0j6l buofh1pr cbu4d94t",
        children: [
          i.jsx(c("TetraTextPairing.react"), {
            body: i.jsx(c("EventCometCardLocationPriceInfo.react"), {
              event$key: f,
            }),
            bodyLineLimit: 1,
            headline: i.jsx(c("CometLink.react"), {
              href: c("XCometEventPermalinkControllerRouteBuilder").buildURL({
                acontext: h,
                event_id: f.id,
              }),
              children: i.jsx(c("CometTooltip.react"), {
                tooltip: f.name,
                children: f.name,
              }),
            }),
            headlineLineLimit: 2,
            level: 3,
            meta: i.jsx(c("TetraText.react"), {
              color: f.is_happening_now === !0 ? "negative" : "primary",
              type: "bodyLink4",
              children: f.day_time_sentence,
            }),
            metaLineLimit: 1,
            metaLocation: "above",
          }),
          b != null &&
            !a &&
            i.jsx(c("CometTooltip.react"), {
              tooltip: (h = f.social_context) == null ? void 0 : h.text,
              children: i.jsx("div", {
                className: "ltmttdrg jktsbyx5 stjgntxs ni8dbmo4 rgmg9uty",
                children:
                  e.length === 0
                    ? b
                    : i.jsx(c("TetraOverlappingFacepileUnstyled.react"), {
                        count: (a = e.length) != null ? a : 3,
                        isTextInline: !0,
                        items: e,
                        size: 24,
                        text: b,
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
  "EventCometCardContent.react",
  [
    "CometCard.react",
    "CometPressable.react",
    "CometRelay",
    "EventCometActionContext",
    "EventCometCardContent_event.graphql",
    "EventCometCardImage.react",
    "EventCometCardInfo.react",
    "XCometEventPermalinkControllerRouteBuilder",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useMemo,
      l = h !== void 0 ? h : (h = b("EventCometCardContent_event.graphql")),
      m = {
        footer: {
          flexGrow: "kb5gq1qc",
          height: "tv7at329",
          paddingTop: "cxgpxx05",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "f10w8fjw",
          paddingStart: "dati1w0a",
        },
        pressable: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
          justifyContent: "i1fnvgqd",
          width: "k4urcfbm",
        },
        root: {
          alignItems: "gs1a9yip",
          boxSizing: "rq0escxv",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
          width: "k4urcfbm",
        },
      };
    function a(a) {
      var b = a.event$key;
      a = a.footer;
      b = d("CometRelay").useFragment(l, b);
      var e = j(c("EventCometActionContext")),
        f = k(
          function () {
            return JSON.stringify(e);
          },
          [e]
        );
      if ((b == null ? void 0 : b.id) == null) return null;
      f = {
        url: c("XCometEventPermalinkControllerRouteBuilder").buildURL({
          acontext: f,
          event_id: b.id,
        }),
      };
      return i.jsx("div", {
        className: c("stylex")(m.root),
        children: i.jsx(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: i.jsxs(c("CometPressable.react"), {
            display: "block",
            focusable: !1,
            linkProps: f,
            role: "article",
            xstyle: m.pressable,
            children: [
              i.jsx(c("EventCometCardImage.react"), { event$key: b }),
              i.jsx(c("EventCometCardInfo.react"), { event$key: b }),
              i.jsx("div", { className: c("stylex")(m.footer), children: a }),
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
  "EventCometBookmarkLinkEventButton.react",
  [
    "fbt",
    "CometRelay",
    "EventCometActionContext",
    "EventCometActionLogger",
    "EventCometBookmarkLinkEventButton_event.graphql",
    "TetraButton.react",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useContext,
      l =
        i !== void 0
          ? i
          : (i = b("EventCometBookmarkLinkEventButton_event.graphql"));
    function a(a) {
      var b,
        e = a.event$key,
        f = a.eventID;
      a = a.urlJoinable;
      e = d("CometRelay").useFragment(l, e);
      b =
        e == null
          ? void 0
          : (b = e.parent_if_exists_or_self) == null
          ? void 0
          : (b = b.online_event_setup) == null
          ? void 0
          : b.third_party_url;
      e = (e == null ? void 0 : e.is_viewer_host) === !0;
      var g = k(c("EventCometActionContext"));
      return b == null
        ? c("recoverableViolation")(
            "third_party_url for link event cannot be null.",
            "events"
          )
        : j.jsx(c("TetraButton.react"), {
            disabled: a,
            label: e ? h._("Start") : h._("Join"),
            linkProps: { url: b },
            onPress: function () {
              d("EventCometActionLogger").log(f, {
                acontext: g,
                mechanism: "HAPPENING_ONLINE_NOW_HSCROLL",
                surface: "dashboard",
                target: "feed_units",
                target_id: f,
                type: "join_third_party_uri",
              });
            },
            type: "secondary",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "LiveVirtualEventViewerState",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      PRE_LIVE: "pre_live",
      COUNTDOWN: "countdown",
      IS_LIVE: "is_live",
      PREPARING_VOD: "preparing_vod",
      WAS_LIVE: "was_live",
      WAITING_FOR_BROADCAST: "waiting_for_broadcast",
      PAST_WITH_NO_BROADCAST: "past_with_no_broadcast",
    });
    f["default"] = a;
  },
  66
);
__d(
  "getRouteToLiveProducer",
  ["XCometLiveProducerControllerRouteBuilder", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e, f) {
      a = babelHelpers["extends"](
        {},
        a != null && f == null ? { target_id: a } : {}
      );
      d != null
        ? (a = { videoID: d })
        : (["feedx_sprouts", "timeline", "group"].includes(b) &&
            (a.source = "CAMERA"),
          c("gkx")("1399530") && (a.source = "CAMERA"),
          f != null && (a.to_additional_profile_id = f),
          (a.entry_point = b));
      return c("XCometLiveProducerControllerRouteBuilder").buildURL(
        babelHelpers["extends"]({}, a, e)
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "EventCometBookmarkLiveVideoButton.react",
  [
    "fbt",
    "CometRelay",
    "CometVideoHomeVideoLink.react",
    "EventCometActionContext",
    "EventCometActionLogger",
    "EventCometBookmarkLiveVideoButton_event.graphql",
    "EventCometUniversalRSVPButton.react",
    "LiveVirtualEventViewerState",
    "TetraButton.react",
    "VideoPlayerLoggingSuboriginContext",
    "getJSEnumSafe",
    "getRouteToLiveProducer",
    "react",
    "recoverableViolation",
    "useLiveVirtualEventsViewerStateChangeSubscription",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m =
        i !== void 0
          ? i
          : (i = b("EventCometBookmarkLiveVideoButton_event.graphql"));
    function n(a) {
      switch (a) {
        case "countdown":
        case "waiting_for_broadcast":
          return h._("Starting Soon");
        case "is_live":
          return h._("Watch Live");
        case "preparing_vod":
        case "was_live":
          return h._("Watch Video");
        case "pre_live":
        case "past_with_no_broadcast":
        default:
          return null;
      }
    }
    function a(a) {
      var b,
        e,
        f = a.event$key,
        g = a.eventID;
      a = a.liveJoinable;
      f = d("CometRelay").useFragment(m, f);
      var i = f == null ? void 0 : f.live_virtual_event_info,
        o = i == null ? void 0 : i.can_viewer_go_live;
      b = i == null ? void 0 : (b = i.go_live_target) == null ? void 0 : b.id;
      e =
        i == null
          ? void 0
          : (e = i.associated_live_videos) == null
          ? void 0
          : (e = e.edges) == null
          ? void 0
          : (e = e[0]) == null
          ? void 0
          : e.node;
      var p = l(c("EventCometActionContext"));
      c("useLiveVirtualEventsViewerStateChangeSubscription")(g);
      var q = k(
        function () {
          d("EventCometActionLogger").log(g, {
            acontext: p,
            mechanism: "HAPPENING_ONLINE_NOW_HSCROLL",
            surface: "dashboard",
            target: "feed_units",
            target_id: g,
            type: "join_live_video",
          });
        },
        [p, g]
      );
      if (o === !0 && b !== null)
        return j.jsx(c("TetraButton.react"), {
          label: h._("Go Live"),
          linkProps: {
            url: c("getRouteToLiveProducer")(b, "event_live_cta", null, {
              event_id: g,
            }),
          },
          onPress: q,
          type: "secondary",
        });
      if (i == null)
        return c("recoverableViolation")(
          "live_virtual_event_info for link event cannot be null.",
          "events"
        );
      o = c("getJSEnumSafe")(
        c("LiveVirtualEventViewerState"),
        i == null ? void 0 : i.viewer_state
      );
      b = n(o);
      if (b == null)
        return j.jsx(c("EventCometUniversalRSVPButton.react"), {
          colorWhenOn: "blue",
          event: f,
        });
      q = a || o === "countdown" || o === "waiting_for_broadcast";
      return j.jsx(c("VideoPlayerLoggingSuboriginContext").Provider, {
        value: "events_live_cta",
        children:
          e != null
            ? j.jsx(c("CometVideoHomeVideoLink.react"), {
                buttonProps: {
                  disabled: q,
                  label: b,
                  onPress: function () {
                    d("EventCometActionLogger").log(g, {
                      acontext: p,
                      mechanism: "HAPPENING_ONLINE_NOW_HSCROLL",
                      surface: "dashboard",
                      target: "feed_units",
                      target_id: g,
                      type: "join_live_video",
                    });
                  },
                  type: "secondary",
                },
                openInTahoe: !0,
                playerOrigin: "events",
                video: e,
              })
            : j.jsx(c("TetraButton.react"), { disabled: q, label: b }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometBookmarkOrientedRoomButton.react",
  [
    "fbt",
    "CometRelay",
    "EventCometActionContext",
    "EventCometActionLogger",
    "EventCometBookmarkOrientedRoomButton_onlineEventSetup.graphql",
    "TetraButton.react",
    "react",
    "recoverableViolation",
    "useMWChatJoinVideoChat",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m =
        i !== void 0
          ? i
          : (i = b(
              "EventCometBookmarkOrientedRoomButton_onlineEventSetup.graphql"
            ));
    function a(a) {
      var b = a.eventID,
        e = a.onlineEventSetup$key;
      a = a.roomJoinable;
      e = d("CometRelay").useFragment(m, e);
      var f = c("useMWChatJoinVideoChat")(),
        g = f[0],
        i = l(c("EventCometActionContext")),
        n = e == null ? void 0 : e.messenger_room_url;
      f = k(
        function () {
          d("EventCometActionLogger").log(b, {
            acontext: i,
            mechanism: "HAPPENING_ONLINE_NOW_HSCROLL",
            surface: "dashboard",
            target: "feed_units",
            target_id: b,
            type: "join_room",
          }),
            n != null && g(n);
        },
        [i, b, g, n]
      );
      return n == null
        ? c("recoverableViolation")(
            "link_url for event oriented room cannot be null.",
            "events"
          )
        : j.jsx(c("TetraButton.react"), {
            disabled: a,
            label: h._("Join"),
            onPress: f,
            type: "secondary",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometOtherVirtualEventButton.react",
  [
    "fbt",
    "EventCometActionContext",
    "EventCometActionLogger",
    "TetraButton.react",
    "XCometEventPermalinkControllerRouteBuilder",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useContext,
      k = b.useMemo;
    function a(a) {
      var b = a.eventID,
        e = j(c("EventCometActionContext"));
      a = k(
        function () {
          return JSON.stringify(e);
        },
        [e]
      );
      a = {
        url: c("XCometEventPermalinkControllerRouteBuilder").buildURL({
          acontext: a,
          event_id: b,
        }),
      };
      return i.jsx(c("TetraButton.react"), {
        label: h._("View Details"),
        linkProps: a,
        onPress: function () {
          d("EventCometActionLogger").log(b, {
            acontext: e,
            mechanism: "HAPPENING_ONLINE_NOW_HSCROLL",
            surface: "dashboard",
            target: "feed_units",
            target_id: b,
            type: "view_details",
          });
        },
        type: "secondary",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometBookmarkVirtualEventCTAButton.react",
  [
    "CometRelay",
    "EventCometBookmarkLinkEventButton.react",
    "EventCometBookmarkLiveVideoButton.react",
    "EventCometBookmarkOrientedRoomButton.react",
    "EventCometBookmarkVirtualEventCTAButton_event.graphql",
    "EventCometOtherVirtualEventButton.react",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("EventCometBookmarkVirtualEventCTAButton_event.graphql"));
    function a(a) {
      var b, e;
      a = a.event$key;
      a = d("CometRelay").useFragment(j, a);
      b = (b = a) != null ? b : {};
      var f = b.id;
      b = b.is_past;
      if (f == null)
        throw c("unrecoverableViolation")(
          "virtual event_id cannot be null.",
          "events"
        );
      e =
        (e = a.parent_if_exists_or_self) == null
          ? void 0
          : e.online_event_setup;
      if (e == null || a.online_event_setup == null)
        return i.jsx(c("EventCometOtherVirtualEventButton.react"), {
          eventID: f,
        });
      e = e.type;
      b = b === !0;
      switch (e) {
        case "MESSENGER_ROOM":
          return i.jsx(c("EventCometBookmarkOrientedRoomButton.react"), {
            eventID: f,
            onlineEventSetup$key: a.online_event_setup,
            roomJoinable: b,
          });
        case "THIRD_PARTY":
          return i.jsx(c("EventCometBookmarkLinkEventButton.react"), {
            event$key: a,
            eventID: f,
            urlJoinable: b,
          });
        case "FB_LIVE":
          return i.jsx(c("EventCometBookmarkLiveVideoButton.react"), {
            event$key: a,
            eventID: f,
            liveJoinable: b,
          });
        default:
          return i.jsx(c("EventCometOtherVirtualEventButton.react"), {
            eventID: f,
          });
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometListCardMoreAction.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "EventCometPermalinkMoreActionsMenu.entrypoint",
    "TetraButton.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      a = a.eventID;
      return j.jsx(c("CometEntryPointPopoverTrigger.react"), {
        align: "end",
        entryPointParams: { eventID: a },
        fallback: j.jsx(c("CometPopoverLoadingState.react"), {}),
        otherProps: {},
        popoverEntryPoint: c("EventCometPermalinkMoreActionsMenu.entrypoint"),
        preloadTrigger: "button",
        children: function (a, b, e, f, g, k) {
          return j.jsx(c("TetraButton.react"), {
            "aria-label": h._("More"),
            icon: d("fbicon")._(i("484386"), 16),
            label: h._("More"),
            labelIsHidden: !0,
            onHoverIn: f,
            onHoverOut: g,
            onPress: b,
            onPressIn: k,
            ref: a,
            type: "secondary",
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
  "useGetEventCometDailyRecommendedActionButtons.react",
  [
    "CometErrorBoundary.react",
    "CometRelay",
    "EventCometBookmarkVirtualEventCTAButton.react",
    "EventCometListCardMoreAction.react",
    "EventCometPermalinkShareAction.react",
    "EventCometUniversalRSVPButton.react",
    "react",
    "useGetEventCometDailyRecommendedActionButtons_event.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = 1800,
      k =
        h !== void 0
          ? h
          : (h = b(
              "useGetEventCometDailyRecommendedActionButtons_event.graphql"
            ));
    function a(a, b) {
      var e = d("CometRelay").useFragment(k, a);
      if (e == null) return [];
      var f = e.can_viewer_rsvp;
      a = e.can_viewer_share;
      var g = e.eventUrl,
        h = e.id,
        l = e.is_happening_now,
        m = e.is_online_or_detected_online,
        n = e.is_viewer_host,
        o = e.start_timestamp;
      m =
        m === !0 && (l === !0 || (n === !0 && o != null && o - Date.now() < j));
      l = m
        ? i.jsx(c("CometErrorBoundary.react"), {
            fallback: function () {
              return f === !0
                ? i.jsx(c("EventCometUniversalRSVPButton.react"), {
                    colorWhenOn: "blue",
                    event: e,
                  })
                : null;
            },
            children: i.jsx(
              c("EventCometBookmarkVirtualEventCTAButton.react"),
              { event$key: e }
            ),
          })
        : f === !0
        ? i.jsx(c("EventCometUniversalRSVPButton.react"), {
            colorWhenOn: "blue",
            event: e,
          })
        : null;
      b === !0
        ? (n = i.jsx(
            c("EventCometListCardMoreAction.react"),
            { eventID: e.id },
            e.id
          ))
        : (n =
            a === !0
              ? i.jsx(c("EventCometPermalinkShareAction.react"), {
                  eventID: h,
                  eventUrl: g,
                  onShare: function () {},
                })
              : null);
      return [l, n].filter(Boolean);
    }
    g["default"] = a;
  },
  98
);
__d(
  "EventCometCardDefaultFooterButtons.react",
  [
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "EventCometCardDefaultFooterButtons_event.graphql",
    "react",
    "useGetEventCometDailyRecommendedActionButtons.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("EventCometCardDefaultFooterButtons_event.graphql")),
        a.event$key
      );
      a = c("useGetEventCometDailyRecommendedActionButtons.react")(a);
      if (a.length === 0) return null;
      var e = a[0];
      a = a.slice(1);
      a = a.map(function (a, b) {
        return i.jsx(c("CometRowItem.react"), { children: a }, b);
      });
      return i.jsxs(c("CometRow.react"), {
        paddingHorizontal: 0,
        paddingTop: 0,
        children: [
          i.jsx(c("CometRowItem.react"), { expanding: !0, children: e }),
          a,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometCardRoot.react",
  [
    "CometRelay",
    "EventCometCardContent.react",
    "EventCometCardDefaultFooterButtons.react",
    "EventCometCardRoot_event.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = h !== void 0 ? h : (h = b("EventCometCardRoot_event.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a.event$key);
      return (a == null ? void 0 : a.id) == null
        ? null
        : i.jsx(c("EventCometCardContent.react"), {
            event$key: a,
            footer: i.jsx(c("EventCometCardDefaultFooterButtons.react"), {
              event$key: a,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeHappeningNow.react",
  [
    "fbt",
    "CometHScroll.react",
    "CometRelay",
    "EventCometCardRoot.react",
    "EventCometHomeHappeningNow_viewer.graphql",
    "TetraText.react",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e, f;
      a = a.viewer$key;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("EventCometHomeHappeningNow_viewer.graphql")),
        a
      );
      a = a.actor;
      e =
        (e =
          a == null
            ? void 0
            : (e = a.live_now_tab) == null
            ? void 0
            : (e = e.requested_tab) == null
            ? void 0
            : (e = e.events) == null
            ? void 0
            : e.nodes) != null
          ? e
          : [];
      f =
        (f =
          a == null
            ? void 0
            : (f = a.now_tab) == null
            ? void 0
            : (f = f.requested_tab) == null
            ? void 0
            : (f = f.events) == null
            ? void 0
            : f.nodes) != null
          ? f
          : [];
      a =
        (a =
          a == null
            ? void 0
            : (a = a.popular_now_tab) == null
            ? void 0
            : (a = a.requested_tab) == null
            ? void 0
            : (a = a.events) == null
            ? void 0
            : a.nodes) != null
          ? a
          : [];
      if ((!e.length && !f.length && !a.length) || !c("qex")._("349"))
        return null;
      var g = new Set();
      e = []
        .concat(e, c("qex")._("5") ? a : f)
        .filter(function (a) {
          if ((a == null ? void 0 : a.id) != null && !g.has(a.id)) {
            g.add(a.id);
            return !0;
          }
          return !1;
        })
        .slice(0, 8);
      return !e.length
        ? null
        : j.jsxs("div", {
            className: "qcwxy68d ikt3359e piqn31j5 bcvklqu9",
            children: [
              j.jsx("div", {
                className: "sjgh65i0",
                children: j.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized1",
                  children: h._("Happening Now"),
                }),
              }),
              j.jsx(d("CometHScroll.react").Container, {
                accessibilityLabel: h._("Events"),
                cardWidth: { minWidth: 300, type: "responsive" },
                gap: 8,
                nextButtonLabel: h._("Next Events"),
                prevButtonLabel: h._("Previous Events"),
                children: e.map(function (a) {
                  return j.jsx(
                    d("CometHScroll.react").Child,
                    {
                      type: "custom",
                      children: j.jsx("div", {
                        className:
                          "cs7azdtd abpf7j7b ojkyduve exrn9cbp ggysqto6",
                        children: j.jsx(c("EventCometCardRoot.react"), {
                          event$key: a,
                        }),
                      }),
                    },
                    a.id
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
  "EventCometHomeRecommendedGroupPlaceholderGroupInfo.react",
  ["BaseRow.react", "BaseRowItem.react", "CometGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs(c("BaseRow.react"), {
        children: [
          h.jsx(c("BaseRowItem.react"), {
            children: h.jsx(c("CometGlimmer.react"), {
              className:
                "ljni7pan aov4n071 frluczxc cb02d2ww mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",
              index: 4,
            }),
          }),
          h.jsxs(c("BaseRowItem.react"), {
            expanding: !0,
            children: [
              h.jsx(c("CometGlimmer.react"), {
                className:
                  "pnicyljo aov4n071 dhix69tm cyypbtt7 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                index: 5,
              }),
              h.jsx(c("CometGlimmer.react"), {
                className:
                  "gjzvkazv aov4n071 dhix69tm bsodd3zb l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                index: 5,
              }),
              h.jsx(c("CometGlimmer.react"), {
                className:
                  "p0n2ovh4 aahdfvyu dhix69tm bsodd3zb l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                index: 5,
              }),
            ],
          }),
          h.jsx(c("BaseRowItem.react"), {
            children: h.jsx(c("CometGlimmer.react"), {
              className:
                "gjzvkazv aov4n071 gupp8or6 afyhebng l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
              index: 6,
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
  "EventCometHomeRecommendedGroupsPlaceholderEventInfo.react",
  ["BaseRow.react", "BaseRowItem.react", "CometGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs(c("BaseRow.react"), {
        children: [
          h.jsx(c("BaseRowItem.react"), {
            children: h.jsxs("div", {
              children: [
                h.jsx(c("CometGlimmer.react"), {
                  className:
                    "k6hq67h2 gxs2ddam oygrvhab cxmmr5t8 gh1tjcio cyypbtt7 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                  index: 1,
                }),
                h.jsx(c("CometGlimmer.react"), {
                  className:
                    "qio8uep8 knvmm38d gxs2ddam oygrvhab cxmmr5t8 gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                  index: 2,
                }),
              ],
            }),
          }),
          h.jsx(c("BaseRowItem.react"), {
            children: h.jsx(c("CometGlimmer.react"), {
              className:
                "q676j6op jei6r52m f9o22wc5 gupp8or6 qypqp5cg mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",
              index: 3,
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
  "EventCometHomeRecommendedGroupPlaceholder.react",
  [
    "CometCard.react",
    "CometGlimmer.react",
    "EventCometHomeRecommendedGroupPlaceholderGroupInfo.react",
    "EventCometHomeRecommendedGroupsPlaceholderEventInfo.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", {
        className: "k4urcfbm sjgh65i0",
        children: h.jsx(c("CometCard.react"), {
          background: "white",
          dropShadow: 2,
          children: h.jsxs("div", {
            className: "g5gj957u j83agx80 gs1a9yip",
            children: [
              h.jsx("div", {
                children: h.jsx(c("CometGlimmer.react"), {
                  className: "b9k6jsef bl8bd2xn l9j0dhe7 bkq834e2",
                  index: 0,
                }),
              }),
              h.jsx("div", {
                className: "k4urcfbm",
                children: h.jsxs("div", {
                  className: "k4urcfbm cbu4d94t j83agx80",
                  children: [
                    h.jsx(
                      c(
                        "EventCometHomeRecommendedGroupsPlaceholderEventInfo.react"
                      ),
                      {}
                    ),
                    h.jsx("div", {
                      className:
                        "frluczxc bi6gxh9e gupp8or6 tr9rh885 ay7djpcl pwoa4pd7",
                    }),
                    h.jsx(
                      c(
                        "EventCometHomeRecommendedGroupPlaceholderGroupInfo.react"
                      ),
                      {}
                    ),
                  ],
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
  "EventCometHomeRecommendedGroupSectionPlaceholder.react",
  [
    "CometContentArea.react",
    "CometGlimmer.react",
    "EventCometHomeRecommendedGroupPlaceholder.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx(c("CometContentArea.react"), {
        children: h.jsxs("div", {
          className:
            "k4urcfbm ckpwuovz cifkjjtc j8udfqtb jb3vyjys qcwxy68d e4zlvol6 piqn31j5 ikscmtro rq0escxv",
          children: [
            h.jsx(c("CometGlimmer.react"), {
              className:
                "gds2cq3q c9zspvje rldn0tbr lsl2245n hqlzco19 o3c63hce lit7pgxp",
              index: 0,
            }),
            h.jsx(c("EventCometHomeRecommendedGroupPlaceholder.react"), {}),
            h.jsx(c("EventCometHomeRecommendedGroupPlaceholder.react"), {}),
            h.jsx(c("EventCometHomeRecommendedGroupPlaceholder.react"), {}),
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
  "EventCometCardRootGlimmer.react",
  ["BaseGlimmer.react", "CometCard.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs(c("CometCard.react"), {
        background: "white",
        dropShadow: 1,
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className: "k4urcfbm l9j0dhe7 qgoq1ngx",
            index: 0,
          }),
          h.jsxs("div", {
            className: "dati1w0a qt6c0cv9 hv4rvrfc pybr56ya ajpb0j6l",
            children: [
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "t1ll2xni tvmbv18p gl3lb2sf qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",
                index: 1,
              }),
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "k4urcfbm dicw6rsg jnigpg78 qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",
                index: 2,
              }),
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "eq70wtua bi6gxh9e jnigpg78 qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",
                index: 3,
              }),
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "t1ll2xni tvmbv18p gl3lb2sf qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",
                index: 4,
              }),
            ],
          }),
          h.jsxs("div", {
            className: "dati1w0a f10w8fjw hv4rvrfc cxgpxx05 j83agx80",
            children: [
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "oi9244e8 tv7at329 buofh1pr l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                index: 5,
              }),
              h.jsx(c("BaseGlimmer.react"), {
                className:
                  "tmrshh9y tv7at329 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                index: 6,
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
  "EventCometHomeDiscoverFeedGlimmer.react",
  ["fbt", "CometHScroll.react", "EventCometCardRootGlimmer.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx("div", {
        className: "tr9rh885",
        children: i.jsx(d("CometHScroll.react").Container, {
          accessibilityLabel: h._("Discover Events"),
          cardWidth: { minWidth: 300, type: "responsive" },
          disableScrolling: !0,
          hideArrows: !0,
          children: Array.from({ length: 10 }, function (a, b) {
            return i.jsx(
              d("CometHScroll.react").Child,
              { children: i.jsx(c("EventCometCardRootGlimmer.react"), {}) },
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
  "EventCometHomeRootGlimmer.react",
  ["EventCometHomeDiscoverFeedGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", {
        className:
          "h8czfk5b tvx22r68 a8nywdso ofv0k9yr rz4wbd8a d2edcug0 qcwxy68d o5hsqohe piqn31j5 jei6r52m l6v480f0",
        "data-testid": void 0,
        children: h.jsx(c("EventCometHomeDiscoverFeedGlimmer.react"), {}),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeRoot.react",
  [
    "CometContentArea.react",
    "CometErrorBoundary.react",
    "CometErrorRoot.react",
    "CometPlaceholder.react",
    "CometRelay",
    "EventCometActionContext",
    "EventCometHomeRecommendedGroupSectionPlaceholder.react",
    "EventCometHomeRootGlimmer.react",
    "EventCometHomeRootQuery.graphql",
    "cr:283",
    "deferredLoadComponent",
    "qex",
    "react",
    "requireDeferredForDisplay",
    "useEventCometImpressionLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useMemo,
      l = e.useState,
      m = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "EventCometSurfaceHighlight.react"
        ).__setRef("EventCometHomeRoot.react")
      ),
      n = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "EventCometHomeHappeningNow.react"
        ).__setRef("EventCometHomeRoot.react")
      ),
      o = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "EventCometHomeDiscoverSection.react"
        ).__setRef("EventCometHomeRoot.react")
      ),
      p = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("EventCometHomeLOVFeed.react").__setRef(
          "EventCometHomeRoot.react"
        )
      ),
      q = h !== void 0 ? h : (h = b("EventCometHomeRootQuery.graphql"));
    function r(a) {
      var e;
      a = a.homeEvents$key;
      a = d("CometRelay").usePreloadedQuery(q, a);
      var f = a.loggedInViewer;
      a = a.loggedOutViewer;
      var g = l(c("qex")._("527") ? "NOW" : "RECOMMENDED"),
        h = g[0];
      g = g[1];
      var j;
      (f == null ? void 0 : f.notifications) != null &&
        (f == null
          ? void 0
          : (e = f.notifications.edges) == null
          ? void 0
          : e.length) > 0 &&
        (j = i.jsx(m, {
          notifications$key: f == null ? void 0 : f.notifications,
        }));
      return i.jsxs("div", {
        children: [
          j,
          f && i.jsx(n, { viewer$key: f }),
          b("cr:283") != null &&
            f &&
            i.jsx(c("CometPlaceholder.react"), {
              fallback: i.jsx(
                c("EventCometHomeRecommendedGroupSectionPlaceholder.react"),
                {}
              ),
              children: i.jsx(b("cr:283"), { viewer$key: f }),
            }),
          f &&
            i.jsx(o, {
              selectedDiscoverTab: h,
              setSelectedDiscoverTab: g,
              viewer$key: f,
            }),
          a && i.jsx(p, { viewer$key: a }),
        ],
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function a(a) {
      a = a.queries;
      var b = j(c("EventCometActionContext")),
        d = c("useEventCometImpressionLogger")(
          null,
          k(
            function () {
              return {
                acontext: b,
                mechanism: "surface",
                surface: "bookmark",
                target: "bookmark",
                type: "view",
              };
            },
            [b]
          )
        );
      return i.jsx(c("CometContentArea.react"), {
        children: i.jsx("div", {
          className:
            "k4urcfbm lt9micmv ofv0k9yr gl4o1x5y aodizinl q90w0soq rq0escxv",
          "data-testid": void 0,
          ref: d,
          children: i.jsx(c("CometErrorBoundary.react"), {
            fallback: function () {
              return i.jsx(c("CometErrorRoot.react"), {});
            },
            children: i.jsx(c("CometPlaceholder.react"), {
              fallback: i.jsx(c("CometContentArea.react"), {
                children: i.jsx(c("EventCometHomeRootGlimmer.react"), {}),
              }),
              children: i.jsx(r, babelHelpers["extends"]({}, a)),
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
  "EventCometFeedCardWrap.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.children;
      return h.jsx("div", {
        className:
          "ck3b4tlb qlyowdya ehbs6d9j wp3ta8j8 mras6tbi dlbaxph7 t9u6kdq2 nxkscmto kkf49tns bi6gxh9e cgat1ltu aov4n071",
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeDiscoverContent.react",
  [
    "fbt",
    "CometInfiniteScrollTrigger.react",
    "CometRelay",
    "EventCometActionContext",
    "EventCometCardRoot.react",
    "EventCometCardRootGlimmer.react",
    "EventCometDashboardNullState.react",
    "EventCometFeedCardWrap.react",
    "EventCometHomeDiscoverContent_user.graphql",
    "orEmptyArray",
    "react",
    "useEventActionLoggerParams",
    "useEventCometImpressionLogger",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.startTransition,
      l = e.useMemo;
    function a(a) {
      var e = a.actionMechanism;
      a = a.user$key;
      a = d("CometRelay").usePaginationFragment(
        i !== void 0
          ? i
          : (i = b("EventCometHomeDiscoverContent_user.graphql")),
        a
      );
      var f = a.data,
        g = a.hasNext,
        m = a.isLoadingNext,
        n = a.loadNext;
      a = c("useEventActionLoggerParams")({
        mechanism: e,
        surface: "bookmark",
      });
      var o = a[0];
      a = a[1];
      var p = c("useEventCometImpressionLogger")(
        null,
        l(
          function () {
            return {
              acontext: o,
              mechanism: e,
              surface: "bookmark",
              target: "feed_units",
              type: "view",
            };
          },
          [o, e]
        )
      );
      f =
        (f = f.event_discovery_tabs) == null
          ? void 0
          : (f = f.requested_tab) == null
          ? void 0
          : f.events;
      if (f == null) return null;
      f = c("orEmptyArray")(f == null ? void 0 : f.edges)
        .map(function (a) {
          a = a.node;
          if (a != null && a.id != null)
            return j.jsx(
              c("EventCometFeedCardWrap.react"),
              {
                children: j.jsx(c("EventCometCardRoot.react"), {
                  event$key: a,
                }),
              },
              a.id
            );
        })
        .filter(Boolean);
      return !f.length
        ? j.jsx(c("EventCometDashboardNullState.react"), {
            body: h._("No events found."),
          })
        : j.jsx(c("EventCometActionContext").Provider, {
            value: a,
            children: j.jsxs("div", {
              className:
                "rl04r1d5 oygrvhab dlv3wnog tr9rh885 lhclo0ds j83agx80 bp9cbjyn",
              ref: p,
              children: [
                f,
                g &&
                  j.jsx(c("EventCometFeedCardWrap.react"), {
                    children: j.jsx(c("CometInfiniteScrollTrigger.react"), {
                      hasMore: g,
                      isLoading: m,
                      onLoadMore: function () {
                        k(function () {
                          n(9);
                        });
                      },
                      children: j.jsx(c("EventCometCardRootGlimmer.react"), {}),
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
  "EventCometHomeDiscoverFollowingContent.react",
  [
    "CometRelay",
    "EventCometHomeDiscoverContent.react",
    "EventCometHomeDiscoverFollowingContent_user.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("EventCometHomeDiscoverFollowingContent_user.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a.user$key);
      return i.jsx(c("EventCometHomeDiscoverContent.react"), {
        actionMechanism: "discovery_following_tab",
        user$key: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeDiscoverFriendsContent.react",
  [
    "CometRelay",
    "EventCometHomeDiscoverContent.react",
    "EventCometHomeDiscoverFriendsContent_user.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("EventCometHomeDiscoverFriendsContent_user.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a.user$key);
      return i.jsx(c("EventCometHomeDiscoverContent.react"), {
        actionMechanism: "discovery_friends_tab",
        user$key: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeDiscoverLearningClassContent.react",
  [
    "CometRelay",
    "EventCometHomeDiscoverContent.react",
    "EventCometHomeDiscoverLearningClassContent_user.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("EventCometHomeDiscoverLearningClassContent_user.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a.user$key);
      return i.jsx(c("EventCometHomeDiscoverContent.react"), {
        actionMechanism: "discovery_learning_class_tab",
        user$key: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeDiscoverNowContent.react",
  [
    "CometRelay",
    "EventCometHomeDiscoverContent.react",
    "EventCometHomeDiscoverNowContent_user.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("EventCometHomeDiscoverNowContent_user.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a.user$key);
      return i.jsx(c("EventCometHomeDiscoverContent.react"), {
        actionMechanism: "discovery_now_tab",
        user$key: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeDiscoverOnlineContent.react",
  [
    "CometRelay",
    "EventCometHomeDiscoverContent.react",
    "EventCometHomeDiscoverOnlineContent_user.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("EventCometHomeDiscoverOnlineContent_user.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a.user$key);
      return i.jsx(c("EventCometHomeDiscoverContent.react"), {
        actionMechanism: "discovery_online_tab",
        user$key: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeDiscoverRecommendedContent.react",
  [
    "CometRelay",
    "EventCometHomeDiscoverContent.react",
    "EventCometHomeDiscoverRecommendedContent_user.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("EventCometHomeDiscoverRecommendedContent_user.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a.user$key);
      return i.jsx(c("EventCometHomeDiscoverContent.react"), {
        actionMechanism: "discovery_top_tab",
        user$key: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeDiscoverThisWeekContent.react",
  [
    "CometRelay",
    "EventCometHomeDiscoverContent.react",
    "EventCometHomeDiscoverThisWeekContent_user.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("EventCometHomeDiscoverThisWeekContent_user.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a.user$key);
      return i.jsx(c("EventCometHomeDiscoverContent.react"), {
        actionMechanism: "discovery_this_week_tab",
        user$key: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeDiscoverTopCategoryContent.react",
  [
    "CometRelay",
    "EventCometHomeDiscoverContent.react",
    "EventCometHomeDiscoverTopCategoryContent_user.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("EventCometHomeDiscoverTopCategoryContent_user.graphql"));
    function a(a) {
      var b = d("CometRelay").useFragment(j, a.user$key),
        e = "unknown";
      switch (a.topCategoryTabType) {
        case "ARTS_CULTURE":
          e = "discovery_arts_culture_tab";
          break;
        case "FITNESS":
          e = "discovery_fitness_tab";
          break;
        case "HEALTH":
          e = "discovery_health_tab";
          break;
        case "KID_FRIENDLY":
          e = "discovery_kid_friendly_tab";
          break;
      }
      return i.jsx(c("EventCometHomeDiscoverContent.react"), {
        actionMechanism: e,
        user$key: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventDiscoveryTabType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      RECOMMENDED: "RECOMMENDED",
      THIS_WEEK: "THIS_WEEK",
      NOW: "NOW",
      LIVE_NOW: "LIVE_NOW",
      POPULAR_NOW: "POPULAR_NOW",
      ONLINE: "ONLINE",
      FRIENDS: "FRIENDS",
      FOLLOWING: "FOLLOWING",
      FITNESS: "FITNESS",
      ARTS_CULTURE: "ARTS_CULTURE",
      CAUSES: "CAUSES",
      FILM: "FILM",
      FOOD_DRINK: "FOOD_DRINK",
      HEALTH: "HEALTH",
      KID_FRIENDLY: "KID_FRIENDLY",
      LEARNING_CLASS: "LEARNING_CLASS",
      MUSIC: "MUSIC",
      NETWORKING: "NETWORKING",
      NIGHTLIFE: "NIGHTLIFE",
      RELIGION: "RELIGION",
      SHOPPING: "SHOPPING",
      TOP_CATEGORY: "TOP_CATEGORY",
    });
    f["default"] = a;
  },
  66
);
__d(
  "EventCometHomeDiscoverFeed.react",
  [
    "CometRelay",
    "EventCometHomeDiscoverFeed_viewer.graphql",
    "EventCometHomeDiscoverFollowingContent.react",
    "EventCometHomeDiscoverFriendsContent.react",
    "EventCometHomeDiscoverLearningClassContent.react",
    "EventCometHomeDiscoverNowContent.react",
    "EventCometHomeDiscoverOnlineContent.react",
    "EventCometHomeDiscoverRecommendedContent.react",
    "EventCometHomeDiscoverThisWeekContent.react",
    "EventCometHomeDiscoverTopCategoryContent.react",
    "EventDiscoveryTabType",
    "getJSEnumSafe",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0 ? h : (h = b("EventCometHomeDiscoverFeed_viewer.graphql"));
    function a(a) {
      var b,
        e = a.selectedDiscoverTab;
      a = a.viewer$key;
      a = d("CometRelay").useFragment(j, a);
      b =
        (b = a.top_category_actor) == null
          ? void 0
          : (b = b.event_discovery_tabs) == null
          ? void 0
          : b.requested_tab;
      b = c("getJSEnumSafe")(
        c("EventDiscoveryTabType"),
        b == null ? void 0 : b.type
      );
      if (
        a.default_actor == null ||
        a.this_week_actor == null ||
        a.online_actor == null
      )
        return null;
      switch (e) {
        case "RECOMMENDED":
          return i.jsx(c("EventCometHomeDiscoverRecommendedContent.react"), {
            user$key: a.default_actor,
          });
        case "THIS_WEEK":
          return i.jsx(c("EventCometHomeDiscoverThisWeekContent.react"), {
            user$key: a.this_week_actor,
          });
        case "ONLINE":
          return i.jsx(c("EventCometHomeDiscoverOnlineContent.react"), {
            user$key: a.online_actor,
          });
        case "LEARNING_CLASS":
          return a.learning_class_actor != null
            ? i.jsx(c("EventCometHomeDiscoverLearningClassContent.react"), {
                user$key: a.learning_class_actor,
              })
            : null;
        case "FRIENDS":
          return a.friends_actor != null
            ? i.jsx(c("EventCometHomeDiscoverFriendsContent.react"), {
                user$key: a.friends_actor,
              })
            : null;
        case "FOLLOWING":
          return a.following_actor != null && c("qex")._("1951534")
            ? i.jsx(c("EventCometHomeDiscoverFollowingContent.react"), {
                user$key: a.following_actor,
              })
            : null;
        case "TOP_CATEGORY":
          return a.top_category_actor != null && c("qex")._("1954448")
            ? i.jsx(c("EventCometHomeDiscoverTopCategoryContent.react"), {
                topCategoryTabType: b,
                user$key: a.top_category_actor,
              })
            : null;
        case "NOW":
          return a.now_actor != null
            ? i.jsx(c("EventCometHomeDiscoverNowContent.react"), {
                user$key: a.now_actor,
              })
            : null;
      }
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometHomeDiscoverTabs.react",
  ["fbt", "CometCard.react", "EventCometSubTabHeader.react", "qex", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.selectedDiscoverTab,
        d = a.setSelectedDiscoveryTab,
        e = a.topCategoryTabName,
        f = function () {
          d("RECOMMENDED");
        },
        g = function () {
          d("THIS_WEEK");
        },
        j = function () {
          d("ONLINE");
        },
        k = function () {
          d("LEARNING_CLASS");
        },
        l = function () {
          d("FRIENDS");
        },
        m = function () {
          d("FOLLOWING");
        },
        n = function () {
          d("TOP_CATEGORY");
        },
        o = function () {
          d("NOW");
        };
      f = [
        { label: h._("Top"), onPress: f, selected: b === "RECOMMENDED" },
        { label: h._("This Week"), onPress: g, selected: b === "THIS_WEEK" },
      ];
      c("qex")._("527")
        ? f.unshift({ label: h._("Now"), onPress: o, selected: b === "NOW" })
        : f.push({
            label: h._("Online Events"),
            onPress: j,
            selected: b === "ONLINE",
          });
      a.hasClassesTab === !0 &&
        f.push({
          label: h._("Classes"),
          onPress: k,
          selected: b === "LEARNING_CLASS",
        });
      (c("qex")._("1920065") || b === "FRIENDS") &&
        f.push({
          label: h._("Friends"),
          onPress: l,
          selected: b === "FRIENDS",
        });
      c("qex")._("1951534") &&
        f.push({
          label: h._("Following"),
          onPress: m,
          selected: b === "FOLLOWING",
        });
      e != null &&
        c("qex")._("1954448") &&
        f.push({
          label: h._("{top category type}", [h._param("top category type", e)]),
          onPress: n,
          selected: b === "TOP_CATEGORY",
        });
      return i.jsx(c("CometCard.react"), {
        background: "white",
        children: i.jsx("div", {
          className: "gm7ombtx gpl4oick",
          children: i.jsx(c("EventCometSubTabHeader.react"), {
            tabsConfig: f,
            title: h._("Discover Events"),
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
  "EventCometHomeDiscoverSection.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "EventCometHomeDiscoverFeed.react",
    "EventCometHomeDiscoverFeedGlimmer.react",
    "EventCometHomeDiscoverSection_viewer.graphql",
    "EventCometHomeDiscoverTabs.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("EventCometHomeDiscoverSection_viewer.graphql"));
    function a(a) {
      var b,
        e,
        f = a.selectedDiscoverTab,
        g = a.setSelectedDiscoverTab;
      a = a.viewer$key;
      a = d("CometRelay").useFragment(j, a);
      b = (
        ((b = a.actor) == null
          ? void 0
          : (b = b.event_discovery_tabs) == null
          ? void 0
          : b.tabs) || []
      ).some(function (a) {
        return a.type === "LEARNING_CLASS";
      });
      e =
        (e = a.top_category_tab) == null
          ? void 0
          : (e = e.event_discovery_tabs) == null
          ? void 0
          : e.requested_tab;
      return i.jsxs("div", {
        className: "qcwxy68d oygrvhab piqn31j5 kvgmc6g5",
        children: [
          i.jsx(c("EventCometHomeDiscoverTabs.react"), {
            hasClassesTab: b,
            selectedDiscoverTab: f,
            setSelectedDiscoveryTab: g,
            topCategoryTabName: e == null ? void 0 : e.name,
          }),
          i.jsx(c("CometPlaceholder.react"), {
            fallback: i.jsx(c("EventCometHomeDiscoverFeedGlimmer.react"), {}),
            children: i.jsx(c("EventCometHomeDiscoverFeed.react"), {
              selectedDiscoverTab: f,
              viewer$key: a,
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
  "EventCometHomeLOVFeed.react",
  [
    "fbt",
    "CometInfiniteScrollTrigger.react",
    "CometRelay",
    "EventCometActionContext",
    "EventCometCardRoot.react",
    "EventCometCardRootGlimmer.react",
    "EventCometDashboardNullState.react",
    "EventCometFeedCardWrap.react",
    "EventCometHomeLOVFeed_viewer.graphql",
    "TetraText.react",
    "orEmptyArray",
    "react",
    "useEventActionLoggerParams",
    "useEventCometImpressionLogger",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.startTransition,
      l = e.useMemo;
    function a(a) {
      a = a.viewer$key;
      a = d("CometRelay").usePaginationFragment(
        i !== void 0 ? i : (i = b("EventCometHomeLOVFeed_viewer.graphql")),
        a
      );
      var e = a.data,
        f = a.hasNext,
        g = a.isLoadingNext,
        m = a.loadNext;
      a = c("useEventActionLoggerParams")({
        mechanism: "lov_feed",
        surface: "bookmark",
      });
      var n = a[0];
      a = a[1];
      var o = c("useEventCometImpressionLogger")(
        null,
        l(
          function () {
            return {
              acontext: n,
              mechanism: "lov_feed",
              surface: "bookmark",
              target: "feed_units",
              type: "view",
            };
          },
          [n]
        )
      );
      e = c("orEmptyArray")(
        e == null
          ? void 0
          : (e = e.suggested_events) == null
          ? void 0
          : (e = e.events) == null
          ? void 0
          : e.edges
      )
        .map(function (a) {
          a = a.node;
          if (a != null && a.id != null) return a;
        })
        .filter(Boolean);
      return !e.length
        ? j.jsx(c("EventCometDashboardNullState.react"), {
            body: h._("No events found."),
          })
        : j.jsx(c("EventCometActionContext").Provider, {
            value: a,
            children: j.jsxs("div", {
              className: "qcwxy68d oygrvhab piqn31j5 kvgmc6g5",
              children: [
                j.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized2",
                  children: h._("Discover Events"),
                }),
                j.jsxs("div", {
                  className:
                    "rl04r1d5 oygrvhab dlv3wnog tr9rh885 lhclo0ds j83agx80 bp9cbjyn",
                  ref: o,
                  children: [
                    e.map(function (a) {
                      return j.jsx(
                        c("EventCometFeedCardWrap.react"),
                        {
                          children: j.jsx(c("EventCometCardRoot.react"), {
                            event$key: a,
                          }),
                        },
                        a.id
                      );
                    }),
                    f &&
                      j.jsx(c("EventCometFeedCardWrap.react"), {
                        children: j.jsx(c("CometInfiniteScrollTrigger.react"), {
                          hasMore: f,
                          isLoading: g,
                          onLoadMore: function () {
                            k(function () {
                              m(9);
                            });
                          },
                          children: j.jsx(
                            c("EventCometCardRootGlimmer.react"),
                            {}
                          ),
                        }),
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
  "EventCometNotificationsListItem.react",
  [
    "ix",
    "CometBadge.react",
    "CometBoldedEntityRenderer",
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometNotificationsMarkReadMutation",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "EventCometActionContext",
    "EventCometActionLogger",
    "EventCometNotificationsListItem_notification.graphql",
    "TetraAccessoryListCell.react",
    "TetraText.react",
    "fbicon",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m = e.useState,
      n = "SEEN_AND_READ",
      o = { "*": [c("CometBoldedEntityRenderer")] },
      p = [c("CometEmoticonTransform")(), c("CometEmojiTransform")()];
    function a(a) {
      a = a.notification$key;
      var e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("EventCometNotificationsListItem_notification.graphql")),
        a
      );
      a = e.body;
      var f = e.notif_image,
        g = d("CometRelay").useRelayEnvironment(),
        q = l(c("EventCometActionContext")),
        r = m(!1),
        s = r[0],
        t = r[1];
      r = k(
        function () {
          t(!1),
            c("CometNotificationsMarkReadMutation")(
              g,
              {
                input: {
                  environment: "EVENTS",
                  is_comet: !0,
                  notif_id: e.id,
                  source: "unknown",
                },
              },
              e.seen_state
            ),
            d("EventCometActionLogger").log(null, {
              acontext: q,
              mechanism: "surface",
              surface: "bookmark_notifications",
              target: "bookmark_notifications_link",
              type: "click",
            });
        },
        [q, g, e.id, e.seen_state]
      );
      if (e == null || a == null)
        throw c("unrecoverableViolation")("notification is null", "events");
      return j.jsx(c("TetraAccessoryListCell.react"), {
        addOnPrimary:
          (f == null ? void 0 : f.uri) != null
            ? {
                shape: "circle",
                size: 60,
                source: { uri: f.uri },
                type: "profile-photo",
              }
            : {
                icon: d("fbicon")._(h("875294"), 24),
                size: 60,
                type: "contained-icon",
              },
        body: j.jsx(c("CometTextWithEntitiesRelay.react"), {
          renderers: o,
          textWithEntities: a,
          transforms: p,
        }),
        bodyColor: s || e.seen_state !== n ? "primary" : "secondary",
        bodyLineLimit: 3,
        linkProps: { url: e.url },
        meta:
          e.notif_sent_time == null
            ? null
            : j.jsxs(c("TetraText.react"), {
                color: s || e.seen_state !== n ? "highlight" : "secondary",
                type: "body4",
                children: [
                  s || e.seen_state !== n
                    ? j.jsx(c("CometBadge.react"), { color: "blue" })
                    : null,
                  j.jsx(c("CometRelativeTimestamp.react"), {
                    date: new Date(e.notif_sent_time * 1e3),
                  }),
                ],
              }),
        onPress: r,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventNotificationsUpdateSeenStateMutation",
  [
    "CometNotificationsMutationLogger",
    "CometNotificationsThinClientConnectionHandler",
    "CometRelay",
    "EventNotificationsUpdateSeenStateMutation.graphql",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("EventNotificationsUpdateSeenStateMutation.graphql"));
    function j(a, b) {
      var c = b[0];
      if (c == null) return;
      b = a.get(d("relay-runtime").VIEWER_ID);
      if (b == null) return;
      a = d("CometNotificationsThinClientConnectionHandler").getConnection(
        b,
        "CometNotificationsList_notifications_page"
      );
      if (a == null) return;
      a = a.getLinkedRecords("edges");
      if (a == null || a.length === 0) return;
      var e = [];
      a.forEach(function (a) {
        if (a == null) return;
        a = a.getLinkedRecord("node");
        if (a == null) return;
        var b = a.getType();
        if (
          b !== "NotifPageNotificationRow" &&
          b !== "NotifPageCachedNotificationRow"
        )
          return;
        b = a.getLinkedRecord("notif");
        if (b == null) return;
        e.push(b);
      });
      a = e.findIndex(function (a) {
        return a.getValue("id") === c;
      });
      if (a < 0) return;
      e[a] != null && e[a].setValue("SEEN_BUT_UNREAD", "seen_state");
      a = b.getValue("notifications_unseen_count", {
        environment: "MAIN_SURFACE",
      });
      if (a == null) return;
      a = +a - 1;
      b.setValue(Math.max(0, a), "notifications_unseen_count", {
        environment: "MAIN_SURFACE",
      });
    }
    function a(a, b, c) {
      var e = function (a) {
          var d = b.input;
          if (d == null) return;
          d = d.notif_ids;
          if (d == null) return;
          j(a, d);
          c && c.updater && c.updater(a);
        },
        f = d("CometNotificationsMutationLogger").notificationMarkAsSeenStart(),
        g = f.logOnError,
        h = f.logOnSuccess;
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: function (a) {
          h(), c && c.onSuccess(a);
        },
        onError: function (a) {
          g(a), c && c.onError(a);
        },
        optimisticUpdater: e,
        variables: b,
      });
    }
    g.EventNotificationsUpdateSeenStateMutation = a;
    g.mutation = i;
  },
  98
);
__d(
  "EventCometSurfaceHighlight.react",
  [
    "fbt",
    "CometHomepageBadgeCountClearingMutationHelper",
    "CometRelay",
    "CometSurfaceHighlight.react",
    "EventCometActionContext",
    "EventCometNotificationsListItem.react",
    "EventCometSurfaceHighlight_notificationsConnection.graphql",
    "EventNotificationsUpdateSeenStateMutation",
    "XCometEventsNotificationsControllerRouteBuilder",
    "emptyFunction",
    "filterNulls",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useContext,
      l = e.useEffect,
      m = e.useMemo,
      n = e.useRef;
    function a(a) {
      a = a.notifications$key;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "EventCometSurfaceHighlight_notificationsConnection.graphql"
            )),
        a
      );
      var e = JSON.stringify(k(c("EventCometActionContext"))),
        f = n(a.edges);
      a = f.current.map(function (a) {
        return j.jsx(
          c("EventCometNotificationsListItem.react"),
          { notification$key: a.node },
          a.node.id
        );
      });
      var g = m(function () {
          return c("filterNulls")(
            f.current.map(function (a) {
              return a.node.id;
            })
          );
        }, []),
        o = d("CometRelay").useRelayEnvironment();
      l(
        function () {
          var a = { bookmarkID: "2344061033", hasBookmark: !0, hasTopTab: !0 };
          if (!g.length) return;
          d(
            "EventNotificationsUpdateSeenStateMutation"
          ).EventNotificationsUpdateSeenStateMutation(
            o,
            babelHelpers["extends"](
              {
                environment: "EVENTS",
                input: {
                  environment: "EVENTS",
                  is_comet: !0,
                  last_notif_sync_time: 0,
                  notif_ids: g,
                  source: "unknown",
                  update_type: "MARK_SEEN",
                },
              },
              a
            ),
            {
              onError: function (a) {
                c("recoverableViolation")(
                  "Could not mark notifications as seen; Received following error " +
                    a.toString(),
                  "events"
                );
              },
              onSuccess: function (a) {},
              updater: function (b) {
                d(
                  "CometHomepageBadgeCountClearingMutationHelper"
                ).clearBadgeCount(babelHelpers["extends"]({}, a, { store: b }));
              },
            }
          );
        },
        [o, g]
      );
      return j.jsx("div", {
        className: "ofv0k9yr qcwxy68d oygrvhab piqn31j5 kvgmc6g5",
        children: j.jsx(c("CometSurfaceHighlight.react"), {
          actionLinkProps: {
            url: c("XCometEventsNotificationsControllerRouteBuilder").buildURL({
              acontext: e,
            }),
          },
          borderHighlightAnimation: !0,
          dropShadow: 1,
          onActionPress: c("emptyFunction"),
          title: h._("New for You"),
          totalNotifications: a.length,
          children: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
