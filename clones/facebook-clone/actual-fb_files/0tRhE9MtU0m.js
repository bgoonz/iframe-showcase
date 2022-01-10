if (self.CavalryLogger) {
  CavalryLogger.start_js(["2SBDNz3"]);
}

__d(
  "EventCometDashboardRootQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "scale" }],
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = { kind: "Literal", name: "first", value: 3 },
        e = [
          {
            kind: "Literal",
            name: "connection_types",
            value: ["HOST", "GOING", "INVITED", "MAYBED", "INTERESTED"],
          },
          {
            kind: "Literal",
            name: "filter_child_events",
            value: "HIDE_EVENTS_WITH_CHILDREN",
          },
          d,
          { kind: "Literal", name: "upcoming", value: !0 },
        ],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "EventCometDashboardRootQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "EventCometDashboardDefaultLeftRail_query",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "EventCometDashboardRootQuery",
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
                  kind: "ScalarField",
                  name: "can_see_manage_events_section",
                  storageKey: null,
                },
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
                        {
                          kind: "Literal",
                          name: "color",
                          value: "fig-light-80",
                        },
                      ],
                      concreteType: "Icon",
                      kind: "LinkedField",
                      name: "sutro_icon",
                      plural: !1,
                      selections: b,
                      storageKey: 'sutro_icon(color:"fig-light-80")',
                    },
                    {
                      alias: "dark_icon",
                      args: [
                        { kind: "Literal", name: "color", value: "fig-white" },
                      ],
                      concreteType: "Icon",
                      kind: "LinkedField",
                      name: "sutro_icon",
                      plural: !1,
                      selections: b,
                      storageKey: 'sutro_icon(color:"fig-white")',
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: "loggedInViewer",
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: "account_user",
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [
                    c,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: e,
                          concreteType: "AllEventsConnection",
                          kind: "LinkedField",
                          name: "all_events",
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
                                    f,
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
                                    {
                                      alias: "cover_media_renderer",
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "supported",
                                          value: [
                                            "EventCoverPhotoRenderer",
                                            "EventCoverVideoRenderer",
                                          ],
                                        },
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
                                                "EventCometItemImage_event",
                                              fragmentName:
                                                "EventCometItemPhotoRenderer_coverMedia",
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
                                                "EventCometItemImage_event",
                                              fragmentName:
                                                "EventCometItemVideoRenderer_coverMedia",
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
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "catkit_category_type",
                                          value: "PREDICTED",
                                        },
                                      ],
                                      concreteType:
                                        "EventDiscoverCategoryFormatData",
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
                                      storageKey:
                                        'discovery_categories(catkit_category_type:"PREDICTED")',
                                    },
                                    {
                                      alias: null,
                                      args: [
                                        {
                                          kind: "Literal",
                                          name: "connection_types",
                                          value: ["GOING", "INTERESTED"],
                                        },
                                        d,
                                        {
                                          kind: "Literal",
                                          name: "is_viewer_friend",
                                          value: !0,
                                        },
                                        {
                                          kind: "Literal",
                                          name: "orderby",
                                          value: "viewer_member_coefficient",
                                        },
                                      ],
                                      concreteType:
                                        "EventConnectedUsersConnection",
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
                                          concreteType:
                                            "EventConnectedUsersEdge",
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
                                                c,
                                                {
                                                  alias: null,
                                                  args: [
                                                    {
                                                      kind: "Literal",
                                                      name: "height",
                                                      value: 24,
                                                    },
                                                    {
                                                      kind: "Variable",
                                                      name: "scale",
                                                      variableName: "scale",
                                                    },
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
                                                  selections: b,
                                                  storageKey: null,
                                                },
                                                f,
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey:
                                        'event_connected_users(connection_types:["GOING","INTERESTED"],first:3,is_viewer_friend:true,orderby:"viewer_member_coefficient")',
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
                                      ],
                                      storageKey:
                                        'social_context(social_context_format:"SHORT_RSVP_SHOW_NAMES_ONLY",social_context_render_location:"EVENTS_DASHBOARD")',
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
                                    c,
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
                            'all_events(connection_types:["HOST","GOING","INVITED","MAYBED","INTERESTED"],filter_child_events:"HIDE_EVENTS_WITH_CHILDREN",first:3,upcoming:true)',
                        },
                        {
                          alias: null,
                          args: e,
                          filters: [
                            "connection_types",
                            "filter_child_events",
                            "upcoming",
                          ],
                          handle: "connection",
                          key: "EventCometDashboardLeftRailUpcomingEvents_all_events",
                          kind: "LinkedHandle",
                          name: "all_events",
                        },
                      ],
                      type: "User",
                      abstractKey: null,
                    },
                    f,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "5871990329540500",
          metadata: {},
          name: "EventCometDashboardRootQuery",
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
  "composerAnimatedImageTransform",
  ["recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      var e;
      e =
        (e = a.animatedImageAttachments) == null
          ? void 0
          : (e = e.imageData) == null
          ? void 0
          : e.url;
      a = a.gifMetadata;
      if (e == null) {
        c("recoverableViolation")(
          "URL is undefined for AnimatedImage transform, this means a user did not attach the gif they had selected",
          "comet_composer"
        );
        return d(b);
      }
      a = a != null ? { gif_metadata: a } : null;
      d(
        babelHelpers["extends"](
          {},
          b,
          { attachments: [{ link: { external: { url: e } } }] },
          a
        )
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "EventCometDashboardRoot.react",
  [
    "fbt",
    "CometErrorProjectContext",
    "CometLeftRailAndMainContentContainer.react",
    "CometRelay",
    "EventCometDashboardDefaultLeftRail.react",
    "EventCometDashboardRootQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.entryPoints,
        f = a.props;
      a = a.queries.query$key;
      a = d("CometRelay").usePreloadedQuery(
        i !== void 0 ? i : (i = b("EventCometDashboardRootQuery.graphql")),
        a
      );
      f =
        (f = f.children) != null
          ? f
          : j.jsx(d("CometRelay").EntryPointContainer, {
              entryPointReference: e.contentEntryPoint,
              props: {},
            });
      return j.jsx(c("CometErrorProjectContext").Provider, {
        value: "events",
        children: j.jsx(c("CometLeftRailAndMainContentContainer.react"), {
          hideLeftRail:
            (e = e.contentEntryPoint.extraProps) == null
              ? void 0
              : e.hideLeftRail,
          leftRailContent: j.jsx(
            c("EventCometDashboardDefaultLeftRail.react"),
            { query$key: a }
          ),
          leftRailHeading: h._("Event Dashboard"),
          mainContent: f,
          mainContentHeading: h._("Event Dashboard"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
