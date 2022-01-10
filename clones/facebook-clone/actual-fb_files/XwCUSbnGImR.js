if (self.CavalryLogger) {
  CavalryLogger.start_js(["HEnGVnX"]);
}

__d(
  "EventCometUniversalRSVPButton_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometUniversalRSVPButton_event",
      selections: [
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
  "EventCometName_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometName_event",
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
          name: "is_canceled",
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
  "EventCometCardLocationPriceInfo_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometCardLocationPriceInfo_event",
      selections: [
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "contextual_name",
              storageKey: null,
            },
          ],
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
  "useLiveVirtualEventsViewerStateChangeSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = [c, d],
        f = [{ kind: "Literal", name: "first", value: 1 }],
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_state",
          storageKey: null,
        },
        i = [
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "content",
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
        j = {
          kind: "Literal",
          name: "supported",
          value: [
            "EventCoverPhotoRenderer",
            "EventCoverVideoRenderer",
            "EventCoverLiveCountdownRenderer",
            "EventCoverLiveCountdownNoMediaRenderer",
          ],
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useLiveVirtualEventsViewerStateChangeSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "LiveVirtualEventsSubscribeResponsePayload",
              kind: "LinkedField",
              name: "live_virtual_events_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Event",
                  kind: "LinkedField",
                  name: "event",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "online_cta_renderer",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "EventCometOnlineLiveVideoButton_onlineCTARenderer",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "EventCometPermalinkHeaderMediaBlock_event",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "LiveVirtualEventCTAComponent_event",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometFeedStoryEventCoverMediaRenderer_event",
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
          name: "useLiveVirtualEventsViewerStateChangeSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "LiveVirtualEventsSubscribeResponsePayload",
              kind: "LinkedField",
              name: "live_virtual_events_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Event",
                  kind: "LinkedField",
                  name: "event",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "online_cta_renderer",
                      plural: !1,
                      selections: [
                        c,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Event",
                              kind: "LinkedField",
                              name: "event",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "event_creator",
                                  plural: !1,
                                  selections: e,
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "event_viewer",
                                  plural: !1,
                                  selections: e,
                                  storageKey: null,
                                },
                                d,
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
                                  name: "is_past",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_event_draft",
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
                                      args: f,
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
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "owner",
                                                  plural: !1,
                                                  selections: e,
                                                  storageKey: null,
                                                },
                                                d,
                                                g,
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "video_channel",
                                                  plural: !1,
                                                  selections: e,
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
                                      selections: e,
                                      storageKey: null,
                                    },
                                    h,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "LiveVirtualEventCTAInfo",
                                      kind: "LinkedField",
                                      name: "host_cta_info",
                                      plural: !1,
                                      selections: i,
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "LiveVirtualEventCTAInfo",
                                      kind: "LinkedField",
                                      name: "viewer_cta_info",
                                      plural: !1,
                                      selections: i,
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "show_r2l_entrypoint",
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
                              name: "live_video_nux",
                              plural: !1,
                              selections: [
                                c,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "EventCometOnlineLiveVideoButton_onlineCTARenderer",
                                      fragmentName: "EventCometNUX_nux",
                                      fragmentPropName: "nux",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "DefaultNUX",
                                  abstractKey: null,
                                },
                                d,
                              ],
                              storageKey: null,
                            },
                          ],
                          type: "EventOnlineLiveCTARenderer",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    d,
                    {
                      alias: "cover_media_renderer",
                      args: [
                        {
                          kind: "Literal",
                          name: "enable_live_video",
                          value: !0,
                        },
                        j,
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "comet_cover_media_renderer",
                      plural: !1,
                      selections: [
                        c,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "EventCometPermalinkHeaderMediaBlock_event",
                              fragmentName:
                                "EventCometPermalinkHeaderCoverPhotoRenderer_coverMedia",
                              fragmentPropName: "coverMedia",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "EventCoverPhotoRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "EventCometPermalinkHeaderMediaBlock_event",
                              fragmentName:
                                "EventCometPermalinkHeaderCoverVideoRenderer_coverMedia",
                              fragmentPropName: "coverMedia",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "EventCoverVideoRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "EventCometPermalinkHeaderMediaBlock_event",
                              fragmentName:
                                "EventCometPermalinkHeaderCoverCountdownRenderer_coverMedia",
                              fragmentPropName: "coverMedia",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "EventCoverLiveCountdownRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "EventCometPermalinkHeaderMediaBlock_event",
                              fragmentName:
                                "EventCometPermalinkHeaderCoverCountdownNoMediaRenderer_coverMedia",
                              fragmentPropName: "coverMedia",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "EventCoverLiveCountdownNoMediaRenderer",
                          abstractKey: null,
                        },
                      ],
                      storageKey:
                        'comet_cover_media_renderer(enable_live_video:true,supported:["EventCoverPhotoRenderer","EventCoverVideoRenderer","EventCoverLiveCountdownRenderer","EventCoverLiveCountdownNoMediaRenderer"])',
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
                          args: f,
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
                                  selections: [d],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: "associated_live_videos(first:1)",
                        },
                        h,
                      ],
                      storageKey: null,
                    },
                    g,
                    {
                      alias: null,
                      args: [j],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "comet_cover_media_renderer",
                      plural: !1,
                      selections: [
                        c,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedStoryEventCoverMediaRenderer_event",
                              fragmentName:
                                "CometFeedStoryEventImageAttachment_coverMedia",
                              fragmentPropName: "coverMedia",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "EventCoverPhotoRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedStoryEventCoverMediaRenderer_event",
                              fragmentName:
                                "CometFeedStoryEventVideoAttachment_coverMedia",
                              fragmentPropName: "coverMedia",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "EventCoverVideoRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedStoryEventCoverMediaRenderer_event",
                              fragmentName:
                                "CometFeedStoryEventLiveCountdownAttachment_coverMedia",
                              fragmentPropName: "coverMedia",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "EventCoverLiveCountdownRenderer",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "CometFeedStoryEventCoverMediaRenderer_event",
                              fragmentName:
                                "CometFeedStoryEventLiveCountdownNoMediaAttachment_coverMedia",
                              fragmentPropName: "coverMedia",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "EventCoverLiveCountdownNoMediaRenderer",
                          abstractKey: null,
                        },
                      ],
                      storageKey:
                        'comet_cover_media_renderer(supported:["EventCoverPhotoRenderer","EventCoverVideoRenderer","EventCoverLiveCountdownRenderer","EventCoverLiveCountdownNoMediaRenderer"])',
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
          id: "4584988064853354",
          metadata: { subscriptionName: "live_virtual_events_subscribe" },
          name: "useLiveVirtualEventsViewerStateChangeSubscription",
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
  "EventCometPermalinkMoreActionsMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4448965445168272",
        metadata: {},
        name: "EventCometPermalinkMoreActionsMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometPermalinkShareMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5165200543550216",
        metadata: {},
        name: "EventCometPermalinkShareMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "eventCometAccessibilityCaption",
  ["fbt", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    d("react");
    function a(a) {
      return a != null ? a : h._("Image with no available description");
    }
    g["default"] = a;
  },
  98
);
__d(
  "EventCometUniversalRSVPButton.react",
  ["CometRelay", "EventCometUniversalRSVPButton_event.graphql", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var c = a.colorWhenOff,
        e = a.colorWhenOn,
        f = a.event,
        g = a.isUnlabeledRect;
      g = g === void 0 ? !1 : g;
      var j = a.labelIsHidden;
      j = j === void 0 ? !1 : j;
      var k = a.onRSVPChange;
      a = a.showMenuOnLoad;
      a = a === void 0 ? !1 : a;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("EventCometUniversalRSVPButton_event.graphql")),
        f
      );
      return i.jsx(d("CometRelay").MatchContainer, {
        match: f.rsvp_button_renderer,
        props: {
          colorWhenOff: c,
          colorWhenOn: e,
          isUnlabeledRect: g,
          labelIsHidden: j,
          onRSVPChange: k,
          showMenuOnLoad: a,
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometName.react",
  [
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometTextWithEntities.react",
    "EventCometName_event.graphql",
    "RelayHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.event;
      a = a.size;
      e = d("RelayHooks").useFragment(
        h !== void 0 ? h : (h = b("EventCometName_event.graphql")),
        e
      );
      var f = e.is_canceled;
      e = e.name;
      if (e == null) return null;
      a = [
        c("CometEmoticonTransform")({ size: a }),
        c("CometEmojiTransform")({ size: a }),
      ];
      return i.jsx("span", {
        className: f === !0 ? "l89fnc2e" : "",
        children: i.jsx(c("CometTextWithEntities.react"), {
          text: e,
          transforms: a,
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
  "EventCometDashboardConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "/images/youth/birthday/Education_Calendar_A_4x.png";
    b = 1024;
    f.CALENDAR_IMAGE_PATH = a;
    f.SHOW_SIDEBAR_MIN_WIDTH = b;
  },
  66
);
__d(
  "EventCometCardLocationPriceInfo.react",
  [
    "fbt",
    "CometRelay",
    "EventCometCardLocationPriceInfo_event.graphql",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k =
        i !== void 0
          ? i
          : (i = b("EventCometCardLocationPriceInfo_event.graphql"));
    function a(a) {
      var b,
        e = a.event$key;
      a = a.isEmphasized;
      a = a === void 0 ? !0 : a;
      e = d("CometRelay").useFragment(k, e);
      return e == null
        ? null
        : e.is_online === !0
        ? j.jsxs(c("TetraText.react"), {
            color: "secondary",
            type: a ? "bodyLink3" : "body4",
            children: [
              h._("Online"),
              ((b = e.ticketing_context_row) == null
                ? void 0
                : b.price_range_text) != null &&
                j.jsx(j.Fragment, { children: " \xb7 " }),
              (b = e.ticketing_context_row) == null
                ? void 0
                : b.price_range_text,
            ],
          })
        : ((b = e.event_place) == null ? void 0 : b.contextual_name) !== null
        ? j.jsx(c("TetraText.react"), {
            color: "secondary",
            type: a ? "bodyLink3" : "body4",
            children: (b = e.event_place) == null ? void 0 : b.contextual_name,
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useEventCometImpressionLogger",
  ["EventCometActionLogger", "react", "usePartialViewImpression"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b, e) {
      return c("usePartialViewImpression")({
        onImpressionStart: h(
          function () {
            d("EventCometActionLogger").log(a, b, e);
          },
          [a, b, e]
        ),
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useLiveVirtualEventsViewerStateChangeSubscription",
  [
    "CometRelay",
    "WebPixelRatio",
    "react",
    "useLiveVirtualEventsViewerStateChangeSubscription.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useEffect,
      j =
        h !== void 0
          ? h
          : (h = b(
              "useLiveVirtualEventsViewerStateChangeSubscription.graphql"
            )),
      k = function (a, b, c) {
        c === void 0 && (c = { onNext: void 0 });
        return d("CometRelay").requestSubscription(
          a,
          babelHelpers["extends"]({}, c, { subscription: j, variables: b })
        );
      };
    function a(a, b) {
      var c = d("CometRelay").useRelayEnvironment();
      i(
        function () {
          if (a == null) return;
          var e = k(c, {
            feedLocation: b,
            input: { event_id: a },
            scale: d("WebPixelRatio").get(),
          });
          return function () {
            return e.dispose();
          };
        },
        [c, a, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "EventCometPermalinkMoreActionsMenu.entrypoint",
  [
    "EventCometPermalinkMoreActionsMenuQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.eventID;
        return {
          queries: {
            moreActionsMenuQueryReference: {
              parameters: b(
                "EventCometPermalinkMoreActionsMenuQuery$Parameters"
              ),
              variables: { eventID: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "EventCometPermalinkMoreActionsMenu.react"
      ).__setRef("EventCometPermalinkMoreActionsMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "EventCometPermalinkShareMenu.entrypoint",
  [
    "EventCometPermalinkShareMenuQuery$Parameters",
    "JSResourceForInteraction",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var d = a.eventID;
        a = a.eventUrl;
        return {
          queries: {
            eventQueryReference: {
              parameters: b("EventCometPermalinkShareMenuQuery$Parameters"),
              variables: {
                epdSwitch: c("gkx")("1809052"),
                eventID: d,
                eventUrl: a,
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "EventCometPermalinkShareMenu.react"
      ).__setRef("EventCometPermalinkShareMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "EventCometPermalinkShareAction.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "EventCometPermalinkShareMenu.entrypoint",
    "TetraButton.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.buttonProps,
        e = a.eventID,
        f = a.eventUrl,
        g = a.hideLabel,
        k = g === void 0 ? !0 : g;
      g = a.onShare;
      var l = (a = g) != null ? a : function () {};
      return j.jsx(c("CometEntryPointPopoverTrigger.react"), {
        align: "end",
        entryPointParams: { eventID: e, eventUrl: f },
        fallback: j.jsx(c("CometPopoverLoadingState.react"), {}),
        otherProps: {},
        popoverEntryPoint: c("EventCometPermalinkShareMenu.entrypoint"),
        children: function (a, e, f, g, m, n) {
          return j.jsx(
            c("TetraButton.react"),
            babelHelpers["extends"](
              {
                icon: d("fbicon")._(i("484394"), 16),
                label: h._("Share"),
                labelIsHidden: k,
                onHoverIn: g,
                onHoverOut: m,
                onPress: function () {
                  e(), l();
                },
                onPressIn: n,
                ref: a,
                type: "secondary",
              },
              b
            )
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometEventsNotificationsControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/events/notifications/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
