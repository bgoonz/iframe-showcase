if (self.CavalryLogger) {
  CavalryLogger.start_js(["YxDyfoB"]);
}

__d(
  "EventCometEventFacepile_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: 3, kind: "LocalArgument", name: "num_faces" },
        { kind: "RootArgument", name: "scale" },
        {
          defaultValue: "EVENTS_DASHBOARD",
          kind: "LocalArgument",
          name: "social_context_render_location",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "EventCometEventFacepile_event",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "connection_types",
              value: ["GOING", "INTERESTED"],
            },
            { kind: "Variable", name: "first", variableName: "num_faces" },
            { kind: "Literal", name: "is_viewer_friend", value: !0 },
            {
              kind: "Literal",
              name: "orderby",
              value: "viewer_member_coefficient",
            },
          ],
          concreteType: "EventConnectedUsersConnection",
          kind: "LinkedField",
          name: "event_connected_users",
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
              concreteType: "EventConnectedUsersEdge",
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
          args: [
            {
              kind: "Literal",
              name: "social_context_format",
              value: "SHORT_RSVP_SHOW_NAMES_ONLY",
            },
            {
              kind: "Variable",
              name: "social_context_render_location",
              variableName: "social_context_render_location",
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
  "EventCometItemImage_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "EventCometItemImage_event",
      selections: [
        {
          alias: "cover_media_renderer",
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: ["EventCoverPhotoRenderer", "EventCoverVideoRenderer"],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "comet_cover_media_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "EventCometItemImage_event",
                  fragmentName: "EventCometItemPhotoRenderer_coverMedia",
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
                  documentName: "EventCometItemImage_event",
                  fragmentName: "EventCometItemVideoRenderer_coverMedia",
                  fragmentPropName: "coverMedia",
                  kind: "ModuleImport",
                },
              ],
              type: "EventCoverVideoRenderer",
              abstractKey: null,
            },
          ],
          storageKey:
            'comet_cover_media_renderer(supported:["EventCoverPhotoRenderer","EventCoverVideoRenderer"])',
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useEventCometDiscoveryGlyph_event",
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
  "EventCometUpcomingItem_event.graphql",
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
            defaultValue: !1,
            kind: "LocalArgument",
            name: "shouldShowGoingInterestedCount",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "EventCometUpcomingItem_event",
        selections: [
          { args: null, kind: "FragmentSpread", name: "EventCometName_event" },
          {
            args: null,
            kind: "FragmentSpread",
            name: "EventCometItemImage_event",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "EventCometEventFacepile_event",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          {
            alias: "start_date",
            args: [
              {
                kind: "Literal",
                name: "day_time_sentence_format",
                value: "DATE_ONLY",
              },
            ],
            kind: "ScalarField",
            name: "day_time_sentence",
            storageKey:
              'day_time_sentence(day_time_sentence_format:"DATE_ONLY")',
          },
          {
            alias: "start_time",
            args: [
              {
                kind: "Literal",
                name: "day_time_sentence_format",
                value: "START_TIME_ONLY",
              },
            ],
            kind: "ScalarField",
            name: "day_time_sentence",
            storageKey:
              'day_time_sentence(day_time_sentence_format:"START_TIME_ONLY")',
          },
          {
            condition: "shouldShowGoingInterestedCount",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: "going_count",
                args: [
                  {
                    kind: "Literal",
                    name: "connection_types",
                    value: ["GOING"],
                  },
                ],
                concreteType: "EventConnectedUsersConnection",
                kind: "LinkedField",
                name: "event_connected_users",
                plural: !1,
                selections: a,
                storageKey: 'event_connected_users(connection_types:["GOING"])',
              },
              {
                alias: "interested_count",
                args: [
                  {
                    kind: "Literal",
                    name: "connection_types",
                    value: ["INTERESTED"],
                  },
                ],
                concreteType: "EventConnectedUsersConnection",
                kind: "LinkedField",
                name: "event_connected_users",
                plural: !1,
                selections: a,
                storageKey:
                  'event_connected_users(connection_types:["INTERESTED"])',
              },
            ],
          },
        ],
        type: "Event",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "EventCometDashboardDefaultLeftRailNavigation_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: !1, kind: "LocalArgument", name: "isLoggedOut" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "EventCometDashboardDefaultLeftRailNavigation_viewer",
      selections: [
        {
          condition: "isLoggedOut",
          kind: "Condition",
          passingValue: !0,
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
                      alias: "upcomingHostingEvents",
                      args: [
                        {
                          kind: "Literal",
                          name: "allowed_states",
                          value: ["CANCELED", "PUBLISHED"],
                        },
                        {
                          kind: "Literal",
                          name: "connection_types",
                          value: ["HOST"],
                        },
                        {
                          kind: "Literal",
                          name: "handle_recurring_events",
                          value: !0,
                        },
                        {
                          kind: "Literal",
                          name: "is_viewer_invited",
                          value: !1,
                        },
                        { kind: "Literal", name: "past", value: !1 },
                        {
                          kind: "Literal",
                          name: "upcoming_include_happening_now",
                          value: !0,
                        },
                      ],
                      concreteType: "AllEventsConnection",
                      kind: "LinkedField",
                      name: "all_events",
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
                      storageKey:
                        'all_events(allowed_states:["CANCELED","PUBLISHED"],connection_types:["HOST"],handle_recurring_events:true,is_viewer_invited:false,past:false,upcoming_include_happening_now:true)',
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
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_see_manage_events_section",
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
  "EventCometDashboardDefaultLeftRail_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: !1, kind: "LocalArgument", name: "isLoggedOut" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "EventCometDashboardDefaultLeftRail_query",
      selections: [
        {
          kind: "RequiredField",
          field: {
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
                name: "EventCometDashboardDefaultLeftRailNavigation_viewer",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "EventCometDashboardLeftRailCategories_viewer",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "viewer",
        },
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
                  args: [
                    { kind: "Literal", name: "upcomingEventsCount", value: 3 },
                  ],
                  kind: "FragmentSpread",
                  name: "EventCometDashboardLeftRailUpcomingEvents_viewer",
                },
              ],
              storageKey: null,
            },
          ],
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
  "EventCometDashboardLeftRailCategories_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "EventCometDashboardLeftRailCategories_viewer",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "EventDiscoverCategoryFormatData",
            kind: "LinkedField",
            name: "event_category_list",
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
                name: "category_id",
                storageKey: null,
              },
              {
                alias: "icon",
                args: [
                  { kind: "Literal", name: "color", value: "fig-light-80" },
                ],
                concreteType: "Icon",
                kind: "LinkedField",
                name: "sutro_icon",
                plural: !1,
                selections: a,
                storageKey: 'sutro_icon(color:"fig-light-80")',
              },
              {
                alias: "dark_icon",
                args: [{ kind: "Literal", name: "color", value: "fig-white" }],
                concreteType: "Icon",
                kind: "LinkedField",
                name: "sutro_icon",
                plural: !1,
                selections: a,
                storageKey: 'sutro_icon(color:"fig-white")',
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
  "EventCometDashboardLeftRailUpcomingEvents_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "upcomingEventsCount",
        },
      ],
      kind: "Fragment",
      metadata: {
        connection: [
          {
            count: "upcomingEventsCount",
            cursor: null,
            direction: "forward",
            path: ["account_user", "all_events"],
          },
        ],
      },
      name: "EventCometDashboardLeftRailUpcomingEvents_viewer",
      selections: [
        {
          alias: "account_user",
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
                  alias: "all_events",
                  args: [
                    {
                      kind: "Literal",
                      name: "connection_types",
                      value: [
                        "HOST",
                        "GOING",
                        "INVITED",
                        "MAYBED",
                        "INTERESTED",
                      ],
                    },
                    {
                      kind: "Literal",
                      name: "filter_child_events",
                      value: "HIDE_EVENTS_WITH_CHILDREN",
                    },
                    { kind: "Literal", name: "upcoming", value: !0 },
                  ],
                  concreteType: "AllEventsConnection",
                  kind: "LinkedField",
                  name: "__EventCometDashboardLeftRailUpcomingEvents_all_events_connection",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AllEventsEdge",
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
                              name: "EventCometUpcomingItem_event",
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
                  storageKey:
                    '__EventCometDashboardLeftRailUpcomingEvents_all_events_connection(connection_types:["HOST","GOING","INVITED","MAYBED","INTERESTED"],filter_child_events:"HIDE_EVENTS_WITH_CHILDREN",upcoming:true)',
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
  "useEventCometDiscoveryGlyph_event.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useEventCometDiscoveryGlyph_event",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "catkit_category_type",
              value: "PREDICTED",
            },
          ],
          concreteType: "EventDiscoverCategoryFormatData",
          kind: "LinkedField",
          name: "discovery_categories",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "glyph_token",
              storageKey: null,
            },
          ],
          storageKey: 'discovery_categories(catkit_category_type:"PREDICTED")',
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
  "EventCometEventFacepile.react",
  [
    "CometRelay",
    "EventCometEventFacepile_event.graphql",
    "TetraOverlappingFacepileUnstyled.react",
    "TetraText.react",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = h !== void 0 ? h : (h = b("EventCometEventFacepile_event.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a.event);
      if (a == null) return null;
      var b = a.event_connected_users;
      a = a.social_context;
      var e = b == null ? void 0 : b.count;
      a = a == null ? void 0 : a.text;
      b = c("orEmptyArray")(b == null ? void 0 : b.edges);
      b = b
        .map(function (a) {
          a = a.node;
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
      return a != null && a !== "" && e != null && e > 0
        ? i.jsx(c("TetraOverlappingFacepileUnstyled.react"), {
            count: e,
            isTextInline: !0,
            items: b,
            size: 24,
            text: i.jsx(c("TetraText.react"), {
              numberOfLines: 2,
              type: "meta3",
              children: a,
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
  "useEventCometDiscoveryGlyph.react",
  ["ix", "CometRelay", "fbicon", "useEventCometDiscoveryGlyph_event.graphql"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j =
        i !== void 0 ? i : (i = b("useEventCometDiscoveryGlyph_event.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a);
      if (
        a === null ||
        (a == null ? void 0 : a.discovery_categories.length) === 0
      )
        return d("fbicon")._(h("481121"), 24);
      switch (a == null ? void 0 : a.discovery_categories[0].glyph_token) {
        case "arts":
          return d("fbicon")._(h("547783"), 24);
        case "babystroller":
          return d("fbicon")._(h("1198860"), 24);
        case "balloon":
          return d("fbicon")._(h("1119503"), 24);
        case "beach":
          return d("fbicon")._(h("1210826"), 24);
        case "book":
          return d("fbicon")._(h("520626"), 24);
        case "building-city":
          return d("fbicon")._(h("497090"), 24);
        case "calendar-with-grid":
          return d("fbicon")._(h("481121"), 24);
        case "calendar-with-star":
          return d("fbicon")._(h("875294"), 24);
        case "car":
          return d("fbicon")._(h("485029"), 24);
        case "card":
          return d("fbicon")._(h("578885"), 24);
        case "clock":
          return d("fbicon")._(h("478797"), 24);
        case "cocktail":
          return d("fbicon")._(h("487310"), 24);
        case "cup":
          return d("fbicon")._(h("968137"), 24);
        case "cupcake":
          return d("fbicon")._(h("1210832"), 24);
        case "face-laughing":
          return d("fbicon")._(h("642540"), 24);
        case "face-very-happy":
          return d("fbicon")._(h("788547"), 24);
        case "film-projector":
          return d("fbicon")._(h("562487"), 24);
        case "following":
          return d("fbicon")._(h("602178"), 24);
        case "friend-confirm":
          return d("fbicon")._(h("562980"), 24);
        case "friends":
          return d("fbicon")._(h("487559"), 24);
        case "fork-knife":
          return d("fbicon")._(h("788689"), 24);
        case "games":
          return d("fbicon")._(h("545941"), 24);
        case "group":
          return d("fbicon")._(h("485094"), 24);
        case "hands-praying":
          return d("fbicon")._(h("656744"), 24);
        case "health":
          return d("fbicon")._(h("549489"), 24);
        case "heart":
          return d("fbicon")._(h("722861"), 24);
        case "house":
          return d("fbicon")._(h("481927"), 24);
        case "kids":
          return d("fbicon")._(h("1210838"), 24);
        case "leaf":
          return d("fbicon")._(h("1135479"), 24);
        case "magnifying-glass":
          return d("fbicon")._(h("491284"), 24);
        case "moon":
          return d("fbicon")._(h("832943"), 24);
        case "music":
          return d("fbicon")._(h("886195"), 24);
        case "nearby-places":
          return d("fbicon")._(h("995983"), 24);
        case "network":
          return d("fbicon")._(h("497901"), 24);
        case "palette":
          return d("fbicon")._(h("785870"), 24);
        case "ribbon":
          return d("fbicon")._(h("642552"), 24);
        case "running":
          return d("fbicon")._(h("572412"), 24);
        case "scissors":
          return d("fbicon")._(h("534422"), 24);
        case "shopping-bag":
          return d("fbicon")._(h("556468"), 24);
        case "soccer":
          return d("fbicon")._(h("585294"), 24);
        case "star":
          return d("fbicon")._(h("479330"), 24);
        case "sunrise":
          return d("fbicon")._(h("929095"), 24);
        case "sun-with-clouds":
          return d("fbicon")._(h("1110199"), 24);
        case "ticket":
          return d("fbicon")._(h("562222"), 24);
        case "tree":
          return d("fbicon")._(h("574153"), 24);
        case "trending":
          return d("fbicon")._(h("549519"), 24);
        case "trowel":
          return d("fbicon")._(h("1210845"), 24);
        case "truck-shipping":
          return d("fbicon")._(h("503034"), 24);
        case "walk":
          return d("fbicon")._(h("854556"), 24);
        case "wireless":
          return d("fbicon")._(h("485124"), 24);
        default:
          return d("fbicon")._(h("481121"), 24);
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "EventCometItemImage.react",
  [
    "CometRelay",
    "EventCometItemImage_event.graphql",
    "TetraIcon.react",
    "react",
    "useEventCometDiscoveryGlyph.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = 56,
      k = 75;
    function a(a) {
      var e = a.event,
        f = a.height;
      f = f === void 0 ? j : f;
      a = a.width;
      a = a === void 0 ? k : a;
      e = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("EventCometItemImage_event.graphql")),
        e
      );
      var g = c("useEventCometDiscoveryGlyph.react")(e);
      return i.jsx("div", {
        className:
          "emzexkp1 stjgntxs ni8dbmo4 taijpn5t e5d9fub0 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 g6srhlxm bp9cbjyn",
        style: { height: f, width: a },
        children: e.cover_media_renderer
          ? i.jsx(d("CometRelay").MatchContainer, {
              match: e.cover_media_renderer,
              props: { imageHeight: f, imageWidth: a },
            })
          : i.jsx(c("TetraIcon.react"), {
              color: "tertiary",
              icon: g,
              size: 24,
            }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometUpcomingItem.react",
  [
    "fbt",
    "CometMiddot.react",
    "CometPressable.react",
    "CometRelay",
    "CometRouteMatch",
    "CometRow.react",
    "CometRowItem.react",
    "EventCometEventFacepile.react",
    "EventCometItemImage.react",
    "EventCometName.react",
    "EventCometUpcomingItem_event.graphql",
    "EventCometVerticalSpacer.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "XCometEventPermalinkControllerRouteBuilder",
    "gkx",
    "react",
    "stylex",
    "useEventActionLoggerParams",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useMemo,
      l = i !== void 0 ? i : (i = b("EventCometUpcomingItem_event.graphql")),
      m = {
        goingInterestedText: { paddingTop: "ecm0bbzt" },
        pressable: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          flexDirection: "cbu4d94t",
          paddingTop: "cxgpxx05",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "sj5x9vvc",
          paddingStart: "a8nywdso",
          width: "k4urcfbm",
        },
        selected: { backgroundColor: "i224opu6" },
        selectedWashBackground: { backgroundColor: "qsy8amke" },
      };
    function a(a) {
      var b,
        e,
        f = a.event$key,
        g = a.hasDisabledInteractivity;
      g = g === void 0 ? !1 : g;
      var i = a.routeTarget,
        n = a.shouldAddHorizontalPadding;
      n = n === void 0 ? !0 : n;
      var o = a.shouldShowFacepile;
      o = o === void 0 ? !0 : o;
      a = a.shouldShowGoingInterestedCount;
      a = a === void 0 ? !1 : a;
      f = d("CometRelay").useFragment(l, f);
      var p = d("CometRouteMatch").useHostedRouteMatcher(
          d("CometRouteMatch").MatchFunctions.pathMatchFunction
        ),
        q = c("useEventActionLoggerParams")({
          mechanism: "your_upcoming_events_unit",
          surface: "bookmark",
        });
      q[0];
      var r = q[1];
      q = k(
        function () {
          return JSON.stringify(r);
        },
        [r]
      );
      if (f == null) return null;
      var s = f.id,
        t = f.start_date,
        u = f.start_time;
      if (s == null || t == null || u == null) return null;
      b = (b = f.going_count) == null ? void 0 : b.count;
      e = (e = f.interested_count) == null ? void 0 : e.count;
      b = j.jsxs(j.Fragment, {
        children: [
          h._("{going} Going", [h._param("going", b)]),
          j.jsx(c("CometMiddot.react"), {}),
          h._("{interested} Interested", [h._param("interested", e)]),
        ],
      });
      e = j.jsxs(c("CometRow.react"), {
        paddingHorizontal: n ? 12 : 0,
        paddingVertical: 0,
        children: [
          j.jsx(c("CometRowItem.react"), {
            children: j.jsx(c("EventCometItemImage.react"), { event: f }),
          }),
          j.jsxs(c("CometRowItem.react"), {
            expanding: !0,
            children: [
              j.jsx(c("TetraTextPairing.react"), {
                headline: j.jsx(c("EventCometName.react"), {
                  event: f,
                  size: 18,
                }),
                headlineLineLimit: 2,
                level: 4,
                meta: j.jsxs(j.Fragment, {
                  children: [t, j.jsx(c("CometMiddot.react"), {}), u],
                }),
                metaColor: "negative",
                metaLocation: "above",
                testid: void 0,
              }),
              j.jsx(c("EventCometVerticalSpacer.react"), { height: 8 }),
              o && j.jsx(c("EventCometEventFacepile.react"), { event: f }),
              a &&
                j.jsx("div", {
                  className: c("stylex")(m.goingInterestedText),
                  children: j.jsx(c("TetraText.react"), {
                    color: "secondary",
                    type: "body4",
                    children: b,
                  }),
                }),
            ],
          }),
        ],
      });
      if (g)
        return j.jsx(c("CometRow.react"), {
          paddingHorizontal: 8,
          children: e,
        });
      n = c("XCometEventPermalinkControllerRouteBuilder").buildURL({
        acontext: q,
        event_id: s,
      });
      u = { routeTarget: (t = i) != null ? t : "content", url: n };
      o = p(n);
      f = c("gkx")("1535") ? m.selectedWashBackground : m.selected;
      return j.jsx(c("CometPressable.react"), {
        linkProps: u,
        overlayDisabled: o,
        xstyle: [m.pressable, o && f],
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometEventsAdminPOEStrings",
  ["fbt", "ix", "ContentRefComet", "formatDate", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = h._("Get Started");
    b = h._("Create Paid Online Event");
    e = h._("Create Event");
    f = h._("Paid Online Events");
    var k = h._("Overview"),
      l = {
        body: h._(
          "Earn money on Facebook by hosting events online that guests can pay to attend. You can create, promote, charge admission to and host your event all in one place, letting you focus on creating the best event possible."
        ),
        ctaLabel: a,
        title: h._(
          "Join a Community of Creators and Businesses Earning Money from Hosting Paid Online Events"
        ),
      };
    a = {
      body: h._(
        "Learn how to make your first event a success with our tips, tricks and best practices."
      ),
      ctaLabel: a,
      title: h._(
        "Welcome to a Community of Creators and Businesses Earning Money by Hosting Events Online"
      ),
    };
    var m = h._(
        "Welcome to a community of creators and businesses, earning money by hosting events online"
      ),
      n = h._(
        "Welcome to a community of sports creators, businesses, and teams, earning money by hosting events online"
      ),
      o = h._(
        "Welcome to a community of creators, businesses, and institutions, earning money by hosting events online"
      ),
      p = {
        body: h._(
          "Easily sign up, and immediately get access to our tools and tips for hosting a successful event. You can create, promote, charge admission to and host your event all on Facebook, letting you focus on creating the best event possible."
        ),
        title: h._("Earn Money by Hosting Paid Online Events"),
      },
      q = {
        body: h._(
          "Easily sign up, and immediately get access to our tools and tips for hosting a successful event. You can create, promote, charge admission to and host your sports event all on Facebook, letting you focus on creating the best event possible."
        ),
        title: h._(
          "Earn Money by Broadcasting Live Games on Paid Online Events"
        ),
      },
      r = {
        body: h._(
          "Easily sign up, and immediately get access to our tools and tips for hosting a successful event. You can create, promote, charge admission to and host your tours and exhibits all on Facebook, letting you focus on creating the best event possible."
        ),
        title: h._("Earn Money by Broadcasting Tours on Paid Online Events"),
      },
      s = h._("Get prepared by reviewing our tips for hosting"),
      t = {
        message: h._("You're all set up to host Paid Online Events"),
        title: h._("Congratulations"),
      },
      u = {
        message: h._(
          "We're making sure your Page follows our monetization policies. We'll notify you of the outcome in a few days."
        ),
        title: h._("Thanks for Signing Up"),
      },
      v = {
        classes: {
          srcAsset: i("1788390"),
          text: h._("Teach a class, lead yoga or give photography tips"),
        },
        comedy: {
          srcAsset: i("1788392"),
          text: h._("Entertain with a comedy show, poetry slam or triva night"),
        },
        culturalInstitutions1: {
          srcAsset: i("1788391"),
          text: h._("Broadcast a live tour or exhibit"),
        },
        culturalInstitutions2: {
          srcAsset: i("1788390"),
          text: h._("Engage with your fans leading up to your event"),
        },
        culturalInstitutions3: {
          srcAsset: i("1788392"),
          text: h._("Earn money with your live content"),
        },
        liveTalk: {
          srcAsset: i("1788391"),
          text: h._("Host a live talk, podcast recording or interview"),
        },
        sportsLeagues1: {
          srcAsset: i("1788391"),
          text: h._("Broadcast a live game or behind-the-scenes action"),
        },
        sportsLeagues2: {
          srcAsset: i("1788390"),
          text: h._("Engage with your fans leading up to your event"),
        },
        sportsLeagues3: {
          srcAsset: i("1788392"),
          text: h._("Earn money with your live sports content"),
        },
        titleActivated: h._(
          "Some inspiration for your next paid online event:"
        ),
        titleNonActivated: h._(
          "Some inspiration for your first paid online event:"
        ),
      },
      w = {
        body: h._(
          "Initially slated to end December 2020, you'll now continue to keep 100\u0025 of the revenue you earn from paid online events (minus applicable taxes) through August 2021."
        ),
        cta: h._("Learn More"),
        title: h._("New! Zero Fees on Paid Online Events Has Been Extended"),
      },
      x = h._("How to make your first event a success"),
      y = h._(
        "Jumpstart your hosting experience with these four best practices"
      ),
      z = h._("How Paid Online Events Can Work For You"),
      A = h._("Improve your hosting experience with these four best practices"),
      B = h._("How to make your events a success"),
      C = {
        description: h._(
          "Create your event at least 2 weeks in advance so you have time to promote it. You can create an event by: {=Tapping Events from your PageSelecting Online Event and choosing the format (Facebook Live, or a third-party hosting platform that you can link to, like Zoom)Setting the admission priceAdding a cover photo and filling in all the details about your event} We'll collect guest's admission and automatically deposit your earnings, so you can focus on creating the best event possible.",
          [
            h._param(
              "=Tapping Events from your PageSelecting Online Event and choosing the format (Facebook Live, or a third-party hosting platform that you can link to, like Zoom)Setting the admission priceAdding a cover photo and filling in all the details about your event",
              j.jsx("ul", {
                style: { listStyleType: "inherit", paddingLeft: 20 },
                children: h._(
                  "{=Tapping Events from your Page}{=Selecting Online Event and choosing the format (Facebook Live, or a third-party hosting platform that you can link to, like Zoom)}{=Setting the admission price}{=Adding a cover photo and filling in all the details about your event}",
                  [
                    h._param(
                      "=Tapping Events from your Page",
                      j.jsx("li", {
                        children: h._("Tapping {=Events} from your Page", [
                          h._param(
                            "=Events",
                            j.jsx("b", { children: h._("Events") })
                          ),
                        ]),
                      })
                    ),
                    h._param(
                      "=Selecting Online Event and choosing the format (Facebook Live, or a third-party hosting platform that you can link to, like Zoom)",
                      j.jsx("li", {
                        children: h._(
                          "Selecting {=Online Event} and choosing the format (Facebook Live, or a third-party hosting platform that you can link to, like Zoom)",
                          [
                            h._param(
                              "=Online Event",
                              j.jsx("b", { children: h._("Online Event") })
                            ),
                          ]
                        ),
                      })
                    ),
                    h._param(
                      "=Setting the admission price",
                      j.jsx("li", {
                        children: h._("Setting the admission price"),
                      })
                    ),
                    h._param(
                      "=Adding a cover photo and filling in all the details about your event",
                      j.jsx("li", {
                        children: h._(
                          "Adding a cover photo and filling in all the details about your event"
                        ),
                      })
                    ),
                  ]
                ),
              })
            ),
          ]
        ),
        getDescriptionWithInlineLinks: function (a, b) {
          return j.jsxs("span", {
            style: { lineHeight: 1.5 },
            children: [
              h._(
                "Create your event at least 2 weeks in advance so you have time to promote it. {lesson link}. You can create an event by: {=Tapping Events from your PageSelecting Online Event and choosing the format (Facebook Live, or a third-party hosting platform that you can link to, like Zoom)Setting the admission priceAdding a cover photo and filling in all the details about your event}{=We'll collect guest's admission and automatically deposit your earnings, so you can focus on creating the best event possible.}",
                [
                  h._param("lesson link", a),
                  h._param(
                    "=Tapping Events from your PageSelecting Online Event and choosing the format (Facebook Live, or a third-party hosting platform that you can link to, like Zoom)Setting the admission priceAdding a cover photo and filling in all the details about your event",
                    j.jsx("ul", {
                      style: {
                        lineHeight: 1.5,
                        listStyleType: "inherit",
                        paddingLeft: 20,
                      },
                      children: h._(
                        "{=Tapping Events from your Page}{=Selecting Online Event and choosing the format (Facebook Live, or a third-party hosting platform that you can link to, like Zoom)}{=Setting the admission price}{=Adding a cover photo and filling in all the details about your event}",
                        [
                          h._param(
                            "=Tapping Events from your Page",
                            j.jsx("li", {
                              children: h._(
                                "Tapping {=Events} from your Page",
                                [
                                  h._param(
                                    "=Events",
                                    j.jsx("b", { children: h._("Events") })
                                  ),
                                ]
                              ),
                            })
                          ),
                          h._param(
                            "=Selecting Online Event and choosing the format (Facebook Live, or a third-party hosting platform that you can link to, like Zoom)",
                            j.jsx("li", {
                              children: h._(
                                "Selecting {=Online Event} and choosing the format (Facebook Live, or a third-party hosting platform that you can link to, like Zoom)",
                                [
                                  h._param(
                                    "=Online Event",
                                    j.jsx("b", {
                                      children: h._("Online Event"),
                                    })
                                  ),
                                ]
                              ),
                            })
                          ),
                          h._param(
                            "=Setting the admission price",
                            j.jsx("li", {
                              children: h._("Setting the admission price"),
                            })
                          ),
                          h._param(
                            "=Adding a cover photo and filling in all the details about your event",
                            j.jsx("li", {
                              children: h._(
                                "Adding a cover photo and filling in all the details about your event"
                              ),
                            })
                          ),
                        ]
                      ),
                    })
                  ),
                  h._param(
                    "=We'll collect guest's admission and automatically deposit your earnings, so you can focus on creating the best event possible.",
                    j.jsx("p", {
                      style: { marginBottom: 6, marginTop: 6 },
                      children: h._(
                        "We'll collect guest's admission and automatically deposit your earnings, so you can focus on creating the best event possible."
                      ),
                    })
                  ),
                ]
              ),
              b,
            ],
          });
        },
        image: i("1793116"),
        lessons: {
          planAndPrepare: {
            descriptionActivated: h._(
              "What to consider when planning your next paid online event."
            ),
            descriptionNonActivated: h._(
              "What to consider when planning your first paid online event."
            ),
            lessonTime: h._("3 min lesson"),
            lessonType: "prepare_for_your_next_event",
            lessonUri:
              "https://www.facebook.com/business/learn/lessons/tips-for-hosting-online-events-on-facebook",
            titleActivated: h._("Prepare for Your Next Event"),
            titleNonActivated: h._("Prepare for Your First Event"),
          },
          setUp: {
            description: h._(
              "How to create a paid online event directly from your Page."
            ),
            lessonTime: h._("3 min lesson"),
            lessonType: "create_your_paid_online_event",
            lessonUri:
              "https://www.facebook.com/business/learn/lessons/set-up-online-events-on-facebook",
            title: h._("Create Your Paid Online Event"),
            titleForLinkVersion: h._(
              "How to create a paid online event directly from your Page"
            ),
          },
        },
        moduleStepImage: i("1802106"),
        title: h._("Plan and create your event"),
      },
      D = {
        description: h._(
          "Increase the size of your audience and your earnings by spreading awareness of your event with our built-in tools. {=Invite friends and Page followers, and ask them to share the event with their network.Select Share on your event Page to share your event to Instagram and Facebook Stories, in a relevant group, or copy the link to send across other channels.Advertise your event on Facebook right from your Page, to easily expand your audience and increase earnings.}",
          [
            h._param(
              "=Invite friends and Page followers, and ask them to share the event with their network.Select Share on your event Page to share your event to Instagram and Facebook Stories, in a relevant group, or copy the link to send across other channels.Advertise your event on Facebook right from your Page, to easily expand your audience and increase earnings.",
              j.jsx("ul", {
                style: { listStyleType: "inherit", paddingLeft: 20 },
                children: h._(
                  "{=Invite friends and Page followers, and ask them to share the event with their network.}{=Select Share on your event Page to share your event to Instagram and Facebook Stories, in a relevant group, or copy the link to send across other channels.}{=Advertise your event on Facebook right from your Page, to easily expand your audience and increase earnings.}",
                  [
                    h._param(
                      "=Invite friends and Page followers, and ask them to share the event with their network.",
                      j.jsx("li", {
                        children: h._(
                          "Invite friends and Page followers, and ask them to share the event with their network."
                        ),
                      })
                    ),
                    h._param(
                      "=Select Share on your event Page to share your event to Instagram and Facebook Stories, in a relevant group, or copy the link to send across other channels.",
                      j.jsx("li", {
                        children: h._(
                          "Select {=Share} on your event Page to share your event to Instagram and Facebook Stories, in a relevant group, or copy the link to send across other channels.",
                          [
                            h._param(
                              "=Share",
                              j.jsx("b", { children: h._("Share") })
                            ),
                          ]
                        ),
                      })
                    ),
                    h._param(
                      "=Advertise your event on Facebook right from your Page, to easily expand your audience and increase earnings.",
                      j.jsx("li", {
                        children: h._(
                          "Advertise your event on Facebook right from your Page, to easily expand your audience and increase earnings."
                        ),
                      })
                    ),
                  ]
                ),
              })
            ),
          ]
        ),
        getDescriptionWithInlineLinks: function (a, b) {
          return j.jsxs("span", {
            style: { lineHeight: 1.5 },
            children: [
              h._(
                "Increase the size of your audience and your earnings by spreading awareness of your event with our built-in tools."
              ),
              j.jsxs("ul", {
                style: { listStyleType: "inherit", paddingLeft: 20 },
                children: [
                  j.jsxs("li", {
                    children: [
                      h._(
                        "Invite friends and Page followers, and ask them to share the event with their network."
                      ),
                      " ",
                      a,
                    ],
                  }),
                  j.jsx("li", {
                    children: h._(
                      "Select {=Share} on your event Page to share your event to Instagram and Facebook Stories, in a relevant group, or copy the link to send across other channels.",
                      [
                        h._param(
                          "=Share",
                          j.jsx("b", { children: h._("Share") })
                        ),
                      ]
                    ),
                  }),
                  j.jsxs("li", {
                    children: [
                      h._(
                        "Advertise your event on Facebook right from your Page, to easily expand your audience and increase earnings."
                      ),
                      " ",
                      b,
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        image: i("1793117"),
        lessons: {
          advertise: {
            description: h._("How to run an ad to promote your event."),
            lessonTime: h._("3 min lesson"),
            lessonType: "advertise_an_event_on_facebook",
            lessonUri:
              "https://www.facebook.com/business/learn/lessons/advertise-paid-online-event-from-facebook-page",
            title: h._("Advertise an Event on Facebook"),
          },
          discover: {
            description: h._(
              "Tips to make sure people discover your event so more guests can pay to attend."
            ),
            lessonTime: h._("3 min lesson"),
            lessonType: "help_people_discover_your_event",
            lessonUri:
              "https://www.facebook.com/business/learn/lessons/help-people-discover-your-paid-online-event",
            title: h._("Help People Discover Your Event"),
          },
        },
        moduleStepImage: i("1802107"),
        title: h._("Promote"),
      },
      E = {
        cta: h._("Set Up Payout Account"),
        step1Body: function (a) {
          return h._(
            "On {expiration date}, or once you earn $500, you'll be unable to create new paid online events until you complete this step.",
            [h._param("expiration date", c("formatDate")(a, "m/d/Y"))]
          );
        },
        step1Title: h._("Add a Payout Account"),
        step2Body: h._(
          "We'll deposit any money that you earn from hosting online events."
        ),
        step2Title: h._("Get Paid"),
        title: h._("Add a Payout Account to Get Your Earnings"),
      },
      F = {
        description: h._(
          "Practicing your event in advance allows you to get familiar with the tools, work out any potential technical issues and gain confidence in what you're going to do when the event is live. A well-rehearsed event is more likely to go smoothly, building trust with your guests and potentially leading to repeat attendees. {=Rehearse using Facebook Live by starting a test broadcast in the Live Producer tool. This keeps your video hidden while you practice.}",
          [
            h._param(
              "=Rehearse using Facebook Live by starting a test broadcast in the Live Producer tool. This keeps your video hidden while you practice.",
              j.jsx("ul", {
                style: { listStyleType: "inherit", paddingLeft: 20 },
                children: h._(
                  "{=Rehearse using Facebook Live by starting a test broadcast in the Live Producer tool. This keeps your video hidden while you practice.}",
                  [
                    h._param(
                      "=Rehearse using Facebook Live by starting a test broadcast in the Live Producer tool. This keeps your video hidden while you practice.",
                      j.jsx("li", {
                        children: h._(
                          "Rehearse using Facebook Live by starting a test broadcast in the Live Producer tool. This keeps your video hidden while you practice."
                        ),
                      })
                    ),
                  ]
                ),
              })
            ),
          ]
        ),
        getDescriptionWithInlineLinks: function (a, b) {
          return j.jsxs("span", {
            style: { lineHeight: 1.5 },
            children: [
              h._(
                "Practicing your event in advance allows you to get familiar with the tools, work out any potential technical issues and gain confidence in what you're going to do when the event is live."
              ),
              j.jsxs("ul", {
                style: { listStyleType: "inherit", paddingLeft: 20 },
                children: [
                  j.jsxs("li", {
                    children: [
                      h._(
                        "A well-rehearsed event is more likely to go smoothly, building trust with your guests and potentially leading to repeat attendees."
                      ),
                      " ",
                      a,
                    ],
                  }),
                  j.jsx("li", {
                    children: h._(
                      "Rehearse using Facebook Live by starting a test broadcast in the Live Producer tool. This keeps your video hidden while you practice."
                    ),
                  }),
                ],
              }),
              j.jsx("p", { children: b }),
            ],
          });
        },
        image: i("1793118"),
        lessons: {
          hostUsingLive: {
            description: h._(
              "How to start your event and what to expect when going live."
            ),
            lessonTime: h._("5 min lesson"),
            lessonType: "host_a_poe_with_fb_live",
            lessonUri:
              "https://www.facebook.com/business/learn/lessons/host-paid-online-event-with-facebook-live",
            title: h._("Host a Paid Online Event with Facebook Live"),
          },
          rehearse: {
            description: h._(
              "How to rehearse, using a test broadcast in Live producer."
            ),
            lessonTime: h._("2 min read"),
            lessonType: "rehearse_a_live_broadcast",
            lessonUri: d("ContentRefComet").get(
              "REHEARSE_A_LIVE_BROADCAST",
              "PAID_ONLINE_EVENTS"
            ),
            title: h._("Rehearse a Live Broadcast"),
          },
        },
        moduleStepImage: i("1802108"),
        title: h._("Rehearse"),
      },
      G = {
        description: h._(
          "Earn money while connecting with your audience or customers in new and exciting ways. You can host all kinds of different events, from a class to a comedy show. {=Easily create an event and set a price.Share your event to Groups, Facebook and Instagram Stories, and share the link anywhere on or off Facebook.Boost your event to reach a wider audience.Rehearse with our test broadcast tool, to make sure everything goes smoothly.} We'll collect guest's admission and automatically deposit your earnings. After the event, we'll provide insights so you can track your success and learn how to improve.",
          [
            h._param(
              "=Easily create an event and set a price.Share your event to Groups, Facebook and Instagram Stories, and share the link anywhere on or off Facebook.Boost your event to reach a wider audience.Rehearse with our test broadcast tool, to make sure everything goes smoothly.",
              j.jsx("ul", {
                style: { listStyleType: "inherit", padding: 20 },
                children: h._(
                  "{=Easily create an event and set a price.}{=Share your event to Groups, Facebook and Instagram Stories, and share the link anywhere on or off Facebook.}{=Boost your event to reach a wider audience.}{=Rehearse with our test broadcast tool, to make sure everything goes smoothly.}",
                  [
                    h._param(
                      "=Easily create an event and set a price.",
                      j.jsx("li", {
                        children: h._(
                          "Easily create an event and set a price."
                        ),
                      })
                    ),
                    h._param(
                      "=Share your event to Groups, Facebook and Instagram Stories, and share the link anywhere on or off Facebook.",
                      j.jsx("li", {
                        children: h._(
                          "Share your event to Groups, Facebook and Instagram Stories, and share the link anywhere on or off Facebook."
                        ),
                      })
                    ),
                    h._param(
                      "=Boost your event to reach a wider audience.",
                      j.jsx("li", {
                        children: h._(
                          "Boost your event to reach a wider audience."
                        ),
                      })
                    ),
                    h._param(
                      "=Rehearse with our test broadcast tool, to make sure everything goes smoothly.",
                      j.jsx("li", {
                        children: h._(
                          "Rehearse with our test broadcast tool, to make sure everything goes smoothly."
                        ),
                      })
                    ),
                  ]
                ),
              })
            ),
          ]
        ),
        image: i("1800307"),
        lessons: {
          guidelines: {
            description: h._(
              "Understand which types of events we support for monetization."
            ),
            lessonTime: h._("3 min read"),
            lessonType: "guidelines",
            lessonUri: d("ContentRefComet").get(
              "POE_GUIDELINES",
              "PAID_ONLINE_EVENTS"
            ),
            title: h._("Guidelines"),
          },
          insights: {
            description: h._(
              "Learn what stats we share with you after each event you host, and how you can use them to make your next event even better."
            ),
            lessonTime: h._("3 min read"),
            lessonType: "insights",
            lessonUri: d("ContentRefComet").get(
              "POE_INSIGHTS",
              "PAID_ONLINE_EVENTS"
            ),
            title: h._("Insights"),
          },
        },
        title: h._("Getting Started"),
      };
    d = {
      description: h._(
        "Start engaging with your audience before the event even starts, to build excitement as well as communicate expectations. {=You can make exclusive posts on the event Page only visible to guests who have paid to attend; this lets you start a conversation, ask questions and get more understanding of your audience.We suggest going live a few days before the event, for another opportunity to interact and build excitement about the event.}",
        [
          h._param(
            "=You can make exclusive posts on the event Page only visible to guests who have paid to attend; this lets you start a conversation, ask questions and get more understanding of your audience.We suggest going live a few days before the event, for another opportunity to interact and build excitement about the event.",
            j.jsx("ul", {
              style: { listStyleType: "inherit", paddingLeft: 20 },
              children: h._(
                "{=You can make exclusive posts on the event Page only visible to guests who have paid to attend; this lets you start a conversation, ask questions and get more understanding of your audience.}{=We suggest going live a few days before the event, for another opportunity to interact and build excitement about the event.}",
                [
                  h._param(
                    "=You can make exclusive posts on the event Page only visible to guests who have paid to attend; this lets you start a conversation, ask questions and get more understanding of your audience.",
                    j.jsx("li", {
                      children: h._(
                        "You can make exclusive posts on the event Page only visible to guests who have paid to attend; this lets you start a conversation, ask questions and get more understanding of your audience."
                      ),
                    })
                  ),
                  h._param(
                    "=We suggest going live a few days before the event, for another opportunity to interact and build excitement about the event.",
                    j.jsx("li", {
                      children: h._(
                        "We suggest going live a few days before the event, for another opportunity to interact and build excitement about the event."
                      ),
                    })
                  ),
                ]
              ),
            })
          ),
        ]
      ),
      getDescriptionWithInlineLinks: function (a) {
        return j.jsxs("span", {
          style: { lineHeight: 1.5 },
          children: [
            h._(
              "Start engaging with your audience before the event even starts, to build excitement as well as communicate expectations."
            ),
            j.jsxs("ul", {
              style: { listStyleType: "inherit", paddingLeft: 20 },
              children: [
                j.jsxs("li", {
                  children: [
                    h._(
                      "You can make exclusive posts on the event Page only visible to guests who have paid to attend; this lets you start a conversation, ask questions and get more understanding of your audience."
                    ),
                    " ",
                    a,
                  ],
                }),
                j.jsx("li", {
                  children: h._(
                    "We suggest going live a few days before the event, for another opportunity to interact and build excitement about the event."
                  ),
                }),
              ],
            }),
          ],
        });
      },
      image: i("1794778"),
      lessons: {
        exclusivePosts: {
          description: h._(
            "How to make posts on your event Page that only paying guests can see."
          ),
          lessonTime: h._("2 min read"),
          lessonType: "create_an_exclusive_post",
          lessonUri: d("ContentRefComet").get(
            "CREATE_EXCLUSIVE_POST",
            "PAID_ONLINE_EVENTS"
          ),
          title: h._("Create an Exclusive Post"),
        },
      },
      moduleStepImage: i("1802109"),
      title: h._("Create Buzz"),
    };
    var H = { title: h._("Milestones & Achievements") },
      I = h._("Launch Lesson"),
      J = h._("Submit"),
      K = h._("Insights"),
      L = {
        cardDescription: h._("A look across your past and upcoming events"),
        cardTitle: h._("Engagement Across All of Your Paid Online Events"),
      },
      M = {
        estimatedEarningsTitle: h._("Estimated Earnings"),
        numberOfPOEsTitle: h._("Events Created"),
        numberOfPurchasesTitle: h._("Purchases"),
      },
      N = {
        title: h._("Manage Your Paid Online Events"),
        tooltip: h._(
          "Events that charge admission through an external website aren\u2019t listed here. Visit the Overview tab to view those events."
        ),
      };
    i = {
      estimatedEarnings: {
        disabledIcon: i("17768"),
        icon: i("1388562"),
        label: h._("Estimated Earnings"),
      },
      purchases: {
        disabledIcon: i("17826"),
        icon: i("1814469"),
        label: h._("Purchased"),
      },
      reach: {
        disabledIcon: i("1852852"),
        icon: i("1444008"),
        label: h._("People Reached"),
      },
      responses: {
        disabledIcon: i("1345663"),
        icon: i("1464233"),
        label: h._("Responses"),
      },
    };
    var O = {
        ctas: {
          boostEvent: h._("Boost Event"),
          duplicateEvent: h._("Duplicate Event"),
          manageEvent: h._("Manage Event"),
        },
        draft: h._("Draft"),
        freeEventType: h._("Free"),
        inPersonType: h._("In Person"),
        onlineType: h._("Online"),
      },
      P = h._("See More"),
      Q = h._("Past Events"),
      R = h._("Draft Events"),
      S = {
        CTA: h._("Create Paid Online Event"),
        bodyText: h._("Try our step-by-step paid online event creation tool"),
      },
      T = {
        bodyText: h._(
          "If you use music in your paid online event (for example, as an intro or background music), please only use music that you created and own all the rights to, or is from Facebook's free Sound Collection. Violation of this may cause your event to be removed and your guests to be refunded."
        ),
        buttonCTA: h._("Facebook's Free Sound Collection"),
        titleText: h._("Only Use Approved Music"),
      },
      U = {
        body: h._(
          "See how other hosts have used paid online events to connect with fans and earn money."
        ),
        caseStudies: {
          daphneSprings: {
            articleURI:
              "https://www.facebook.com/creators/daphnique-springs-virtual-comedy",
            id: "daphne_springs",
            title: h._(
              "How Daphnique Springs monetized her virtual comedy show with paid online events"
            ),
          },
          rachelHolmes: {
            articleURI: "https://www.facebook.com/creators/rachel-holmes",
            id: "rachel_holmes",
            title: h._(
              "How Rachel Holmes Builds Her Brand & Business Using Facebook"
            ),
          },
          subversionJiuJitsu: {
            articleURI:
              "https://www.facebook.com/facebookmedia/success-stories/subversion-jiu-jitsu-uses-facebook-paid-online-events-to-bring-its-fights-to-fans-at-home",
            id: "subversion_jiu_jitsu",
            title: h._(
              "Subversion Jiu Jitsu Uses Facebook Paid Online Events to Bring its Fights to Fans at Home"
            ),
          },
          teatroSanCarlo: {
            articleURI:
              "https://www.facebook.com/facebookmedia/success-stories/teatro-san-carlo-paid-online-events",
            id: "teatro_san_carlos",
            title: h._(
              "Paid online events help a theater earn money during a pandemic"
            ),
          },
        },
        title: h._("Success Stories"),
      },
      V = {
        allInOneValueProps: h._(
          "Create, promote, charge admission to, and interact with your audience all in one place."
        ),
        body: h._(
          "Your page can host events online that guests pay to attend."
        ),
        multipleFormatsProps: h._(
          "Host your event on Facebook Live or a third-party hosting platform like Zoom."
        ),
        title: h._("Earn money and easily host online events on Facebook"),
        zeroFeesValueProp: h._(
          "Keep 100\u0025 of the money you earn (minus applicable taxes) until August 2021."
        ),
      };
    g.createPaidOnlineEventBtnLabel = b;
    g.createEventBtnLabel = e;
    g.paidOnlineEventsTabLabel = f;
    g.overviewTabLabel = k;
    g.preOnboardingAnnouncementCardFbt = l;
    g.postOnboardingAnnouncementCardFbt = a;
    g.postOnboardingHeaderText = m;
    g.sportsLeaguesPostOnboardingHeaderText = n;
    g.culturalInstitutionsPostOnboardingHeaderText = o;
    g.preOnboardingHeaderText = p;
    g.preOnboardingSportsLeaguesHeaderText = q;
    g.preOnboardingCulturalInstitutionsHeaderText = r;
    g.underReviewHeaderText = s;
    g.congratulationsNotificationFbt = t;
    g.underReviewNotificationFbt = u;
    g.inspirationTipsFbt = v;
    g.noRevShareModule = w;
    g.educationSectionTitleNonActivated = x;
    g.educationSectionSubtitleNonActivated = y;
    g.educationSectionTitleActivated = z;
    g.educationSectionSubtitleActivated = A;
    g.preOnboardingGettingStartedTitle = B;
    g.educationPlanModule = C;
    g.educationPromoteModule = D;
    g.setupPayoutModule = E;
    g.educationRehearseModule = F;
    g.preOnboardingGettingStartedModule = G;
    g.educationEngageModule = d;
    g.creatorGamificationModule = H;
    g.lessonButtonCTA = I;
    g.submitToSButtonCTA = J;
    g.insightsModuleTitle = K;
    g.insightsMetricsOverviewCard = L;
    g.insightsOverviewCards = M;
    g.managePaidOnlineEvents = N;
    g.eventLevelInsights = i;
    g.eventInformation = O;
    g.seeMore = P;
    g.pastEventsHeader = Q;
    g.draftEventsHeader = R;
    g.createEventExperiment = S;
    g.soundCollectionDisclaimer = T;
    g.useCaseStudies = U;
    g.valuePropsCard = V;
  },
  98
);
__d(
  "EventCometManageStrings",
  ["fbt", "PagesCometEventsAdminPOEStrings"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("Hosting");
    b = h._("Attending");
    c = {
      mainTitle: h._("Your Events"),
      overviewTabLabel: d("PagesCometEventsAdminPOEStrings").overviewTabLabel,
      paidOnlineEventsTabLabel: d("PagesCometEventsAdminPOEStrings")
        .paidOnlineEventsTabLabel,
    };
    e = {
      drafts: h._("Draft Events"),
      past: d("PagesCometEventsAdminPOEStrings").pastEventsHeader,
      upcoming: h._("Upcoming Events"),
    };
    f = {
      bodyLine1: h._("Events you're hosting will appear here."),
      bodyLine2: h._("Get started by creating a new event."),
      btnCTA: h._("Create New Event"),
    };
    g.manageEventsSectionNavTitle = a;
    g.attendingEventsSectionNavTitle = b;
    g.manageSectionTabs = c;
    g.overviewTabSectionHeaders = e;
    g.overviewNullState = f;
  },
  98
);
__d(
  "XCometEventsCalendarControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/events/calendar/{?focus}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometEventsDashboardPastControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/events/past/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometEventsGoingControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/events/going/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometEventsHostingControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/events/hosting/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometEventsInterestedControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/events/interested/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometEventsInvitesControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/events/invites/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometEventsManageControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/events/manage/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "EventCometDashboardDefaultLeftRailNavigation.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "CometRouteMatch",
    "EventCometActionContext",
    "EventCometDashboardDefaultLeftRailNavigation_viewer.graphql",
    "EventCometManageStrings",
    "TetraButton.react",
    "TetraList.react",
    "TetraListCell.react",
    "XCometBirthdayEventControllerRouteBuilder",
    "XCometEventCreateControllerRouteBuilder",
    "XCometEventsCalendarControllerRouteBuilder",
    "XCometEventsDashboardPastControllerRouteBuilder",
    "XCometEventsGoingControllerRouteBuilder",
    "XCometEventsHomeControllerRouteBuilder",
    "XCometEventsHostingControllerRouteBuilder",
    "XCometEventsInterestedControllerRouteBuilder",
    "XCometEventsInvitesControllerRouteBuilder",
    "XCometEventsManageControllerRouteBuilder",
    "XCometEventsNotificationsControllerRouteBuilder",
    "fbicon",
    "gkx",
    "react",
    "useIsLoggedOut",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useContext,
      m = e.useState;
    function a(a) {
      var e;
      a = a.viewer$key;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b(
              "EventCometDashboardDefaultLeftRailNavigation_viewer.graphql"
            )),
        a
      );
      e =
        a == null
          ? void 0
          : (e = a.actor) == null
          ? void 0
          : (e = e.upcomingHostingEvents) == null
          ? void 0
          : e.count;
      a =
        (a = a == null ? void 0 : a.can_see_manage_events_section) != null
          ? a
          : !1;
      var f = d("CometRouteMatch").useCurrentRouteMatcher(
          d("CometRouteMatch").MatchFunctions.pathMatchFunction
        ),
        g = JSON.stringify(l(c("EventCometActionContext"))),
        n = c("XCometEventsHomeControllerRouteBuilder").buildURL({
          acontext: g,
        }),
        o = c("XCometEventsCalendarControllerRouteBuilder").buildURL({
          acontext: g,
        }),
        p = c("XCometEventsGoingControllerRouteBuilder").buildURL({
          acontext: g,
        }),
        q = c("XCometEventsInvitesControllerRouteBuilder").buildURL({
          acontext: g,
        }),
        r = c("XCometEventsInterestedControllerRouteBuilder").buildURL({
          acontext: g,
        }),
        s = c("XCometEventsHostingControllerRouteBuilder").buildURL({
          acontext: g,
        }),
        t = c("XCometEventsDashboardPastControllerRouteBuilder").buildURL({
          acontext: g,
        }),
        u = c("XCometEventCreateControllerRouteBuilder").buildURL({
          acontext: g,
          dialog_entry_point: "bookmark",
        }),
        v = c("XCometBirthdayEventControllerRouteBuilder").buildURL({
          acontext: g,
        }),
        w = c("XCometEventsManageControllerRouteBuilder").buildURL({
          acontext: g,
        }),
        x = f(w);
      g = c("XCometEventsNotificationsControllerRouteBuilder").buildURL({
        acontext: g,
      });
      var y = f(n),
        z = f(o),
        A = f(p),
        B = f(q),
        C = f(r),
        D = f(s),
        E = f(t),
        F = f(v);
      f = f(g);
      var G = [z, A, B, B, D, E].some(Boolean);
      G = m(G);
      var H = G[0],
        I = G[1];
      G = k.jsx(c("TetraListCell.react"), {
        addOnPrimary: {
          color: y ? "blue" : "gray",
          icon: d("fbicon")._(i("481118"), 20),
          size: 36,
          type: "contained-icon",
        },
        headline: h._("Home"),
        level: 4,
        linkProps: { url: n },
        selected: y,
        selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
        testid: void 0,
      });
      return c("useIsLoggedOut")()
        ? G
        : k.jsxs(k.Fragment, {
            children: [
              G,
              a === !0 &&
                k.jsx(c("TetraListCell.react"), {
                  addOnPrimary: {
                    color: x ? "blue" : "gray",
                    icon: d("fbicon")._(i("481919"), 20),
                    size: 36,
                    type: "contained-icon",
                  },
                  headline: d("EventCometManageStrings")
                    .manageEventsSectionNavTitle,
                  level: 4,
                  linkProps: { url: w },
                  selected: x,
                  selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
                  testid: void 0,
                }),
              k.jsx(c("TetraListCell.react"), {
                addOnPrimary: {
                  color: z ? "blue" : "gray",
                  icon:
                    a === !0
                      ? d("fbicon")._(i("891128"), 20)
                      : d("fbicon")._(i("481919"), 20),
                  size: 36,
                  type: "contained-icon",
                },
                addOnSecondary: {
                  children: k.jsx("div", {
                    className: "aov4n071 dhix69tm sjgh65i0",
                    children: k.jsxs(c("TetraList.react"), {
                      children: [
                        k.jsx(c("TetraListCell.react"), {
                          addOnPrimary: {
                            color: A ? "blue" : "gray",
                            icon: d("fbicon")._(i("498146"), 20),
                            size: 36,
                            type: "contained-icon",
                          },
                          body: h._("Going"),
                          bodyColor: "primary",
                          linkProps: { url: p },
                          selected: A,
                          selectedBackground: c("gkx")("1535")
                            ? "wash"
                            : "highlight",
                          testid: void 0,
                        }),
                        k.jsx(c("TetraListCell.react"), {
                          addOnPrimary: {
                            color: B ? "blue" : "gray",
                            icon: d("fbicon")._(i("495079"), 20),
                            size: 36,
                            type: "contained-icon",
                          },
                          body: h._("Invites"),
                          bodyColor: "primary",
                          linkProps: { url: q },
                          selected: B,
                          selectedBackground: c("gkx")("1535")
                            ? "wash"
                            : "highlight",
                          testid: void 0,
                        }),
                        k.jsx(c("TetraListCell.react"), {
                          addOnPrimary: {
                            color: C ? "blue" : "gray",
                            icon: d("fbicon")._(i("479327"), 20),
                            size: 36,
                            type: "contained-icon",
                          },
                          body: h._("Interested"),
                          bodyColor: "primary",
                          linkProps: { url: r },
                          selected: C,
                          selectedBackground: c("gkx")("1535")
                            ? "wash"
                            : "highlight",
                          testid: void 0,
                        }),
                        a === !0
                          ? null
                          : k.jsx(c("TetraListCell.react"), {
                              addOnPrimary: {
                                color: D ? "blue" : "gray",
                                icon: d("fbicon")._(i("481926"), 20),
                                size: 36,
                                type: "contained-icon",
                              },
                              body:
                                e != null && e > 0
                                  ? h._(
                                      "Hosting \u30fb{count of today's hosting event}",
                                      [
                                        h._param(
                                          "count of today's hosting event",
                                          e
                                        ),
                                      ]
                                    )
                                  : h._("Hosting"),
                              bodyColor: "primary",
                              linkProps: { url: s },
                              selected: D,
                              selectedBackground: c("gkx")("1535")
                                ? "wash"
                                : "highlight",
                              testid: void 0,
                            }),
                        k.jsx(c("TetraListCell.react"), {
                          addOnPrimary: {
                            color: E ? "blue" : "gray",
                            icon: d("fbicon")._(i("534219"), 20),
                            size: 36,
                            type: "contained-icon",
                          },
                          body: h._("Past Events"),
                          bodyColor: "primary",
                          linkProps: { url: t },
                          selected: E,
                          selectedBackground: c("gkx")("1535")
                            ? "wash"
                            : "highlight",
                          testid: void 0,
                        }),
                      ],
                    }),
                  }),
                  open: H,
                  type: "expander",
                },
                headline:
                  a === !0
                    ? d("EventCometManageStrings")
                        .attendingEventsSectionNavTitle
                    : h._("Your Events"),
                level: 4,
                linkProps: z ? void 0 : { url: o },
                onPress: function () {
                  z
                    ? I(function (a) {
                        return !a;
                      })
                    : I(!0);
                },
                selected: z,
                selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
              }),
              k.jsx(c("TetraListCell.react"), {
                addOnPrimary: {
                  color: F ? "blue" : "gray",
                  icon: d("fbicon")._(i("514478"), 20),
                  size: 36,
                  type: "contained-icon",
                },
                headline: h._("Birthdays"),
                level: 4,
                linkProps: { url: v },
                selected: F,
                selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
                testid: void 0,
              }),
              k.jsx(c("TetraListCell.react"), {
                addOnPrimary: {
                  color: f ? "blue" : "gray",
                  icon: d("fbicon")._(i("508241"), 20),
                  size: 36,
                  type: "contained-icon",
                },
                headline: h._("Notifications"),
                level: 4,
                linkProps: { url: g },
                selected: f,
                selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
              }),
              k.jsx("div", {
                className: "dhix69tm bi6gxh9e wkznzc2l n1l5q3vz",
                children: k.jsx(c("TetraButton.react"), {
                  icon: d("fbicon")._(i("483768"), 16),
                  label: h._("Create New Event"),
                  linkProps: { url: u },
                  reduceEmphasis: !0,
                  size: "medium",
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
  "XCometEventsSearchControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/events/search/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useEventCometSearchRouteUrlBuilder",
  [
    "XCometEventsSearchControllerRouteBuilder",
    "react",
    "useSearchCometResultsCommonRouteParamBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = c("useSearchCometResultsCommonRouteParamBuilder")(a);
      return h(
        function (a) {
          return c("XCometEventsSearchControllerRouteBuilder").buildURL(
            babelHelpers["extends"]({}, b.build(a))
          );
        },
        [b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "EventCometDashboardLeftRailCategories.react",
  [
    "fbt",
    "CometRelay",
    "EventCometDashboardConfig",
    "EventCometDashboardLeftRailCategories_viewer.graphql",
    "ImageIconSource",
    "TetraListCell.react",
    "TetraText.react",
    "orEmptyArray",
    "react",
    "useCurrentDisplayMode",
    "useEventCometSearchRouteUrlBuilder",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useMemo;
    function a(a) {
      a = a.viewer$key;
      var e = c("useCurrentDisplayMode")(),
        f = e === "dark";
      e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("EventCometDashboardLeftRailCategories_viewer.graphql")),
        a
      );
      var g = e.event_category_list,
        l = c("useEventCometSearchRouteUrlBuilder")({
          entryPointSurface: "EVENTS_DASHBOARD",
        });
      a = k(
        function () {
          var a;
          return c("orEmptyArray")(
            g == null
              ? void 0
              : (a = g.slice()) == null
              ? void 0
              : a.sort(function (a, b) {
                  return a.label == null || b.label == null
                    ? 0
                    : a.label.localeCompare(b.label);
                })
          );
        },
        [g]
      );
      return !a.length
        ? null
        : j.jsxs("div", {
            children: [
              j.jsx("div", {
                className: "dati1w0a sj5x9vvc hv4rvrfc jb3vyjys",
                children: j.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized3",
                  children: h._("Categories"),
                }),
              }),
              a.map(function (a) {
                var b;
                b = f
                  ? a == null
                    ? void 0
                    : (b = a.dark_icon) == null
                    ? void 0
                    : b.uri
                  : a == null
                  ? void 0
                  : (b = a.icon) == null
                  ? void 0
                  : b.uri;
                if (
                  (a == null ? void 0 : a.label) == null ||
                  (a == null ? void 0 : a.category_id) == null ||
                  b == null
                )
                  return null;
                var e = { name: "filter_events_category" };
                e = JSON.stringify(
                  babelHelpers["extends"]({}, e, { args: a.category_id })
                );
                return j.jsx(
                  c("TetraListCell.react"),
                  {
                    addOnPrimary: {
                      color: "gray",
                      icon: new (c("ImageIconSource"))(b, 20, 20),
                      size: 36,
                      type: "contained-icon",
                    },
                    headline: a.label,
                    level: 4,
                    linkProps: {
                      url: l({
                        encryptedServerDefinedExperience: d(
                          "EventCometDashboardConfig"
                        ).all_events_search_server_defined_experience,
                        entryPointAction: "FILTERS",
                        filters: { "filter_events_category:0": e },
                        query: (b = a.label) != null ? b : "",
                      }),
                    },
                    testid: void 0,
                  },
                  a.category_id
                );
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
  "EventCometDashboardLeftRailUpcomingEvents.react",
  [
    "fbt",
    "CometErrorBoundary.react",
    "CometRelay",
    "CometUnit.react",
    "CometUnitHeader.react",
    "EventCometDashboardLeftRailUpcomingEvents_viewer.graphql",
    "TetraText.react",
    "XCometEventsCalendarControllerRouteBuilder",
    "deferredLoadComponent",
    "gkx",
    "orEmptyArray",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("EventCometUpcomingItem.react").__setRef(
          "EventCometDashboardLeftRailUpcomingEvents.react"
        )
      ),
      l =
        i !== void 0
          ? i
          : (i = b("EventCometDashboardLeftRailUpcomingEvents_viewer.graphql"));
    function m() {
      return j.jsx("div", {
        className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
        children: j.jsx(c("TetraText.react"), {
          align: "center",
          color: "secondary",
          type: "body4",
          children: h._(
            "There was an error loading events. Please try again and if the problem continues report this as a bug."
          ),
        }),
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      a = a.viewer$key;
      a = d("CometRelay").useFragment(l, a);
      a = c("orEmptyArray")(
        a == null
          ? void 0
          : (a = a.account_user) == null
          ? void 0
          : (a = a.all_events) == null
          ? void 0
          : a.edges
      );
      a = a
        .map(function (a) {
          a = a == null ? void 0 : a.node;
          return a != null
            ? j.jsx(
                k,
                {
                  event$key: a,
                  routeTarget: c("gkx")("2007302") ? "self" : null,
                },
                a.id
              )
            : null;
        })
        .filter(Boolean);
      return j.jsx("div", {
        className: "hcukyx3x b20td4e0 cxmmr5t8 sv5sfqaa",
        children: j.jsx(c("CometUnit.react"), {
          header: j.jsx(c("CometUnitHeader.react"), {
            action: a.length > 0 ? h._("See All") : null,
            actionLinkProps: {
              url: c("XCometEventsCalendarControllerRouteBuilder").buildURL({}),
            },
            headline: h._("Your Upcoming Events"),
            level: 3,
            paddingTop: 8,
          }),
          paddingBottom: 8,
          spacing: 4,
          children: j.jsx(c("CometErrorBoundary.react"), {
            fallback: function () {
              return j.jsx(m, {});
            },
            children:
              a.length > 0
                ? j.jsx("div", {
                    className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                    children: a,
                  })
                : j.jsx("div", {
                    className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
                    children: j.jsx(c("TetraText.react"), {
                      align: "center",
                      color: "secondary",
                      type: "body4",
                      children: h._("You don't have any events coming up."),
                    }),
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
  "EventCometDashboardDefaultLeftRail.react",
  [
    "fbt",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometRelay",
    "EventCometDashboardDefaultLeftRailNavigation.react",
    "EventCometDashboardDefaultLeftRail_query.graphql",
    "EventCometDashboardLeftRailCategories.react",
    "EventCometDashboardLeftRailUpcomingEvents.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "EventCometDashboardScopedTypeahead.react"
        ).__setRef("EventCometDashboardDefaultLeftRail.react")
      );
    function a(a) {
      a = a.query$key;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("EventCometDashboardDefaultLeftRail_query.graphql")),
        a
      );
      var e = a.loggedInViewer;
      a = a.viewer;
      return j.jsx(c("CometLeftRailComponent.react"), {
        header: j.jsx(c("CometLeftRailHeader.react"), { title: h._("Events") }),
        primaryNav: j.jsxs(j.Fragment, {
          children: [
            j.jsx(c("EventCometDashboardDefaultLeftRailNavigation.react"), {
              viewer$key: a,
            }),
            j.jsx("div", {
              className:
                "dhix69tm sjgh65i0 wkznzc2l tr9rh885 ay7djpcl pwoa4pd7",
            }),
            e
              ? j.jsxs(j.Fragment, {
                  children: [
                    j.jsx(
                      c("EventCometDashboardLeftRailUpcomingEvents.react"),
                      { viewer$key: e }
                    ),
                    j.jsx("div", {
                      className:
                        "dhix69tm sjgh65i0 wkznzc2l tr9rh885 ay7djpcl pwoa4pd7",
                    }),
                  ],
                })
              : null,
            j.jsx(c("EventCometDashboardLeftRailCategories.react"), {
              viewer$key: a,
            }),
          ],
        }),
        search: j.jsx(k, {}),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometScopedTypeaheadViewItemResolver.react",
  [
    "fbt",
    "CometSearchTypeaheadBaseSurfaceRecentViewItem.react",
    "CometTypeaheadEchoViewItem.react",
    "CometTypeaheadKeywordViewItem.react",
    "CometTypeaheadSeeAllViewItem.react",
    "CometTypeaheadViewItemResolver.react",
    "cometSearchTypeaheadEchoViewItem.resolver",
    "cometSearchTypeaheadKeywordViewItem.resolver",
    "cometSearchTypeaheadRecentViewItem.resolver",
    "cometSearchTypeaheadSeeAllViewItem.resolver",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo;
    function a(a) {
      var b = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
      var d = j(function () {
        return k();
      }, []);
      return i.jsx(
        c("CometTypeaheadViewItemResolver.react"),
        babelHelpers["extends"]({}, a, { entryMappings: d, children: b })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k() {
      return [
        {
          resolver: c("cometSearchTypeaheadEchoViewItem.resolver"),
          viewItem: c("CometTypeaheadEchoViewItem.react"),
        },
        {
          resolver: c("cometSearchTypeaheadSeeAllViewItem.resolver"),
          viewItem: c("CometTypeaheadSeeAllViewItem.react"),
          viewItemProps: { placeholderBuilder: l },
        },
        {
          resolver: c("cometSearchTypeaheadRecentViewItem.resolver"),
          viewItem: c("CometSearchTypeaheadBaseSurfaceRecentViewItem.react"),
        },
        {
          resolver: c("cometSearchTypeaheadKeywordViewItem.resolver"),
          viewItem: c("CometTypeaheadKeywordViewItem.react"),
        },
      ];
    }
    function l(a) {
      return h._("Search events for {=[query]}", [
        h._param(
          "=[query]",
          i.jsx("strong", { children: h._("{query}", [h._param("query", a)]) })
        ),
      ]);
    }
    l.displayName = l.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometScopedTypeaheadViewItem.react",
  ["EventCometScopedTypeaheadViewItemResolver.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.entry,
        d = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
      return h.jsx(c("EventCometScopedTypeaheadViewItemResolver.react"), {
        entry: b,
        children: function (a, c) {
          return h.jsx(
            a,
            babelHelpers["extends"]({}, d, { entry: b, extraViewItemProps: c })
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
  "eventCometScopedTypeahead.config",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      dataSources: {
        keywordDataSourceParams: {
          queryVariables: {
            fetch_count: 8,
            fetch_mode: "events_dashboard_search",
          },
        },
      },
      logging: { sessionContext: "EVENT_SCOPED" },
      view: { renderLimit: 8 },
    };
    f["default"] = a;
  },
  66
);
__d(
  "EventCometDashboardScopedTypeahead.react",
  [
    "fbt",
    "CometErrorBoundary.react",
    "CometSearchScopedTypeahead.react",
    "CometSearchTypeaheadBaseViewRecentEmptyState.react",
    "CometTypeaheadErrorFallback.react",
    "EventCometScopedTypeaheadViewItem.react",
    "eventCometScopedTypeahead.config",
    "react",
    "useCometSearchRecentDataSourceContextDecorator",
    "useCometSearchRoutingQueryString",
    "useCometSearchScopedTypeaheadDataSource",
    "useCometSearchScopedTypeaheadPressEntryHandler",
    "useCometSearchScopedTypeaheadSelectFreeformQueryHandler",
    "useCometSearchTypeaheadLoggingProvider",
    "useCometTypeaheadViewListStrategy",
    "useEventCometSearchRouteUrlBuilder",
    "useSearchCometRecentSearchDataSource",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useMemo,
      k = b.useState;
    function a(a) {
      a = babelHelpers["extends"]({}, a);
      a = c("useEventCometSearchRouteUrlBuilder")({
        entryPointSurface: a.entryPointSurface,
      });
      var b = c("useCometSearchTypeaheadLoggingProvider")({
          context: "event_scoped",
        }),
        d = k(c("useCometSearchRoutingQueryString")()),
        e = d[0];
      d = d[1];
      var f = c("useCometSearchScopedTypeaheadDataSource")({
          config: c("eventCometScopedTypeahead.config"),
          recentDataSource: c("useSearchCometRecentSearchDataSource")({
            filter: "appmark_search",
          }),
        }),
        g = c("useCometSearchRecentDataSourceContextDecorator")(f),
        l = j(
          function () {
            return [g];
          },
          [g]
        ),
        m = c("useCometSearchScopedTypeaheadPressEntryHandler")({
          loggingProvider: b,
          urlBuilder: a,
        });
      a = c("useCometSearchScopedTypeaheadSelectFreeformQueryHandler")({
        loggingProvider: b,
        urlBuilder: a,
      });
      var n = c("useCometTypeaheadViewListStrategy")({
          emptyStateContent: i.jsx(
            c("CometSearchTypeaheadBaseViewRecentEmptyState.react"),
            {}
          ),
          viewItemStrategyRenderer: c(
            "EventCometScopedTypeaheadViewItem.react"
          ),
        }),
        o = h._("Search Events");
      return i.jsx(c("CometErrorBoundary.react"), {
        fallback: function () {
          return i.jsx(c("CometTypeaheadErrorFallback.react"), {});
        },
        children: i.jsx(c("CometSearchScopedTypeahead.react"), {
          dataSource: f,
          decorators: l,
          label: o,
          loggingProvider: b,
          onChange: d,
          onPressEntry: m,
          onSelectFreeformQuery: a,
          placeholder: o,
          queryString: e,
          viewStrategyRenderer: n,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometPageVanityEventsAdminToolControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/{vanity}/events/admin/",
      Object.freeze({ ref: "" }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
