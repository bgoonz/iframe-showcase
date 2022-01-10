if (self.CavalryLogger) {
  CavalryLogger.start_js(["lKHXJYk"]);
}

__d(
  "CometModernPageFeedPaginationQuery.graphql",
  ["CometFeedUnit_feedUnit$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "UFI2CommentsProvider_commentsKey",
        },
        c = { defaultValue: 5, kind: "LocalArgument", name: "count" },
        d = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextEnableComment",
        },
        f = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAdPreview",
        },
        g = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsAggregatedShare",
        },
        h = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsContextIsStorySet",
        },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "displayCommentsFeedbackContext",
        },
        j = { defaultValue: null, kind: "LocalArgument", name: "feedLocation" },
        k = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "feedbackSource",
        },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "focusCommentID",
        },
        m = { defaultValue: null, kind: "LocalArgument", name: "id" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "privacySelectorRenderLocation",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "renderLocation",
        },
        p = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        q = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        r = [{ kind: "Variable", name: "id", variableName: "id" }],
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        u = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
        ],
        v = [t];
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q],
          kind: "Fragment",
          metadata: null,
          name: "CometModernPageFeedPaginationQuery",
          selections: [
            {
              alias: null,
              args: r,
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
                  ],
                  kind: "FragmentSpread",
                  name: "CometModernPageFeed_pageFeed",
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
          argumentDefinitions: [a, c, d, e, f, g, h, i, j, k, l, n, o, p, q, m],
          kind: "Operation",
          name: "CometModernPageFeedPaginationQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                s,
                t,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: u,
                      concreteType: "TimelineFeedUnitsConnection",
                      kind: "LinkedField",
                      name: "timeline_feed_units",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "TimelineFeedUnitsEdge",
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
                                s,
                                {
                                  kind: "TypeDiscriminator",
                                  abstractKey: "__isFeedUnit",
                                },
                                {
                                  args: null,
                                  fragment: b(
                                    "CometFeedUnit_feedUnit$normalization.graphql"
                                  ),
                                  kind: "FragmentSpread",
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: v,
                                  type: "Story",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: v,
                                  type: "Node",
                                  abstractKey: "__isNode",
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: v,
                                  type: "CommunityChatFeedObject",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: v,
                                  type: "CommunityTabNewJoinFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: v,
                                  type: "CommunityTabTrendingPOGFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: v,
                                  type: "XFBGroupsTabSuggestedGroupSetFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: v,
                                  type: "XFBGroupsTabSuggestedGroupSetsFeedUnit",
                                  abstractKey: null,
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
                      alias: null,
                      args: u,
                      filters: null,
                      handle: "connection",
                      key: "CometModernPageFeed_page_timeline_feed_units",
                      kind: "LinkedHandle",
                      name: "timeline_feed_units",
                    },
                  ],
                  type: "Page",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4260444380658547",
          metadata: {},
          name: "CometModernPageFeedPaginationQuery",
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
  "CometModernPageFeed_page.graphql",
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
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometModernPageFeed_page",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "timeline_pinned_unit",
            plural: !1,
            selections: [
              a,
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedUnit_feedUnit",
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometModernPageFeed_pageFeed",
          },
          {
            kind: "ClientExtension",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "page_pinned_post",
                storageKey: null,
              },
            ],
          },
        ],
        type: "Page",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometModernPageFeed_pageFeed.graphql",
  ["CometModernPageFeedPaginationQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = ["timeline_feed_units"],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "UFI2CommentsProvider_commentsKey" },
          { defaultValue: 5, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { kind: "RootArgument", name: "displayCommentsContextEnableComment" },
          { kind: "RootArgument", name: "displayCommentsContextIsAdPreview" },
          {
            kind: "RootArgument",
            name: "displayCommentsContextIsAggregatedShare",
          },
          { kind: "RootArgument", name: "displayCommentsContextIsStorySet" },
          { kind: "RootArgument", name: "displayCommentsFeedbackContext" },
          { kind: "RootArgument", name: "feedLocation" },
          { kind: "RootArgument", name: "feedbackSource" },
          { kind: "RootArgument", name: "focusCommentID" },
          { kind: "RootArgument", name: "privacySelectorRenderLocation" },
          { kind: "RootArgument", name: "renderLocation" },
          { kind: "RootArgument", name: "scale" },
          { kind: "RootArgument", name: "useDefaultActor" },
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
            operation: b("CometModernPageFeedPaginationQuery.graphql"),
            identifierField: "id",
          },
        },
        name: "CometModernPageFeed_pageFeed",
        selections: [
          {
            alias: "timeline_feed_units",
            args: null,
            concreteType: "TimelineFeedUnitsConnection",
            kind: "LinkedField",
            name: "__CometModernPageFeed_page_timeline_feed_units_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TimelineFeedUnitsEdge",
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
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometFeedUnit_feedUnit",
                      },
                      {
                        kind: "InlineFragment",
                        selections: [c],
                        type: "Story",
                        abstractKey: null,
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
          c,
        ],
        type: "Page",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PagesCometAdminConsolidatedEntryButtonsContainerRendererQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "pageID" }],
        b = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        c = {
          alias: null,
          args: null,
          concreteType: "CometPageConsolidatedEntryButtonsContainerRenderer",
          kind: "LinkedField",
          name: "consolidated_entry_buttons_container",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "PagesCometAdminConsolidatedEntryButtonsContainerRendererQuery",
              fragmentName:
                "PagesCometAdminConsolidatedEntryButtonsContainer_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PagesCometAdminConsolidatedEntryButtonsContainerRendererQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [c],
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
          name: "PagesCometAdminConsolidatedEntryButtonsContainerRendererQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                c,
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
        },
        params: {
          id: "5287262048015747",
          metadata: {},
          name: "PagesCometAdminConsolidatedEntryButtonsContainerRendererQuery",
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
  "PagesCometInlineComposerRendererQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "pageID" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        c = {
          alias: null,
          args: null,
          concreteType: "CometPageAdminComposerRenderer",
          kind: "LinkedField",
          name: "comet_page_composer",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "PagesCometInlineComposerRendererQuery",
              fragmentName: "CometPageInlineComposer_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PagesCometInlineComposerRendererQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [c],
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
          name: "PagesCometInlineComposerRendererQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                c,
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
        },
        params: {
          id: "5653544301384632",
          metadata: {},
          name: "PagesCometInlineComposerRendererQuery",
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
  "PagesCometFBVerifyIGVerifiedProfileDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3569318423169321",
        metadata: {},
        name: "PagesCometFBVerifyIGVerifiedProfileDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometModernPageFeed.react",
  [
    "fbt",
    "CometFeedInfiniteScrollSuspenseList.react",
    "CometFeedSection.react",
    "CometFeedUnit.react",
    "CometHeroFeedItem.react",
    "CometHeroHoldTrigger.react",
    "CometInteractionSourceContext",
    "CometModernPageFeed_page.graphql",
    "CometModernPageFeed_pageFeed.graphql",
    "CometPlaceholder.react",
    "CometRelay",
    "TetraText.react",
    "VideoAutoplayLocalScopeProvider.react",
    "VideoPlayerAutoplayRulesProvider",
    "orEmptyArray",
    "react",
    "useCometFeedKeyCommands",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react"),
      l = d("react").useCallback,
      m = d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules(
        "default_feed"
      ),
      n = 3;
    function a(a) {
      var e = d("CometRelay").useFragment(
          i !== void 0 ? i : (i = b("CometModernPageFeed_page.graphql")),
          a.page
        ),
        f = d("CometRelay").usePaginationFragment(
          j !== void 0 ? j : (j = b("CometModernPageFeed_pageFeed.graphql")),
          e
        ),
        g = f.data,
        o = f.hasNext,
        p = f.isLoadingNext,
        q = f.loadNext,
        r = a.hoistedStoryID;
      f = g.timeline_feed_units;
      g = e.timeline_pinned_unit;
      var s =
        (e = e.page_pinned_post) != null ? e : (e = g) == null ? void 0 : e.id;
      e = c("orEmptyArray")(f == null ? void 0 : f.edges);
      var t = a.variables;
      f = l(
        function () {
          if (!o || p) return;
          q(n);
        },
        [o, p, q]
      );
      c("useCometFeedKeyCommands")(e.length, "newsfeed");
      if (e.length === 0 && !p)
        return k.jsx("div", {
          className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
          children: k.jsx(c("TetraText.react"), {
            align: "center",
            color: "secondary",
            type: "headlineEmphasized2",
            children: h._("No posts yet"),
          }),
        });
      var u = 0;
      a =
        g != null && s !== ""
          ? k.jsx(
              c("CometHeroFeedItem.react"),
              {
                position: u,
                children: k.jsx(c("CometPlaceholder.react"), {
                  fallback: null,
                  children: k.jsx(c("CometFeedUnit.react"), {
                    feedUnit: g,
                    position: u++,
                    variables: t,
                  }),
                }),
              },
              (a = g.id) != null ? a : "pinned-post"
            )
          : null;
      e = e
        .map(function (a, b) {
          a = a.node;
          if ((a == null ? void 0 : a.id) === s) {
            g = a;
            return null;
          }
          return a != null && a.id !== r
            ? k.jsx(
                c("CometFeedUnit.react"),
                { feedUnit: a, position: u++, variables: t },
                (a = a.id) != null ? a : b
              )
            : null;
        })
        .filter(Boolean);
      return k.jsxs(c("VideoAutoplayLocalScopeProvider.react"), {
        autoplayLocalRules: m,
        children: [
          k.jsx(c("CometHeroHoldTrigger.react"), {
            description: "FeedQuery",
            hold: (o || p) && e.length < 2,
          }),
          a != null
            ? k.jsx(c("CometInteractionSourceContext").Provider, {
                value: 27,
                children: k.jsx(c("CometFeedSection.react"), {
                  sectionContents: a,
                  title: h._("PINNED POST"),
                }),
              })
            : null,
          e.length !== 0
            ? a != null || r != null
              ? k.jsx(c("CometFeedSection.react"), {
                  sectionContents: k.jsx(
                    c("CometFeedInfiniteScrollSuspenseList.react"),
                    {
                      hasMore: o,
                      interactionSource: 27,
                      isLoading: p,
                      onLoadMore: f,
                      children: e,
                    }
                  ),
                  title: h._("OTHER POSTS"),
                })
              : k.jsx(c("CometFeedInfiniteScrollSuspenseList.react"), {
                  hasMore: o,
                  interactionSource: 27,
                  isLoading: p,
                  onLoadMore: f,
                  children: e,
                })
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
  "PagesCometAdminConsolidatedEntryButtonsContainerRenderer.react",
  [
    "CometRelay",
    "PagesCometAdminConsolidatedEntryButtonsContainerRendererQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b(
              "PagesCometAdminConsolidatedEntryButtonsContainerRendererQuery.graphql"
            ));
    function a(a) {
      a = a.consolidatedEntryButtonsContainerRendererQueryReference;
      a = d("CometRelay").usePreloadedQuery(j, a);
      a = a.page;
      return i.jsx(d("CometRelay").MatchContainer, {
        match: a == null ? void 0 : a.consolidated_entry_buttons_container,
        props: {
          containerRenderer$key:
            a == null ? void 0 : a.consolidated_entry_buttons_container,
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometInlineComposerRenderer.react",
  ["CometRelay", "PagesCometInlineComposerRendererQuery.graphql", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("PagesCometInlineComposerRendererQuery.graphql"));
    function a(a) {
      var b = a.composerEntryPointRef;
      a = a.inlineComposerRendererQueryReference;
      a = d("CometRelay").usePreloadedQuery(j, a);
      a = a.page;
      a = a == null ? void 0 : a.comet_page_composer;
      return i.jsx(d("CometRelay").MatchContainer, {
        fallback: null,
        match: a,
        props: { composerEntryPointRef: b },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPageSpotlightCardItemGlimmer",
  ["BaseGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", {
        className: "n1l5q3vz ozuftl9m qlnckbn0",
        children: h.jsx("div", {
          className:
            "jt9p5ya7 qlnckbn0 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 cwj9ozl2",
          children: h.jsxs("div", {
            className: "btwxx1t3 j83agx80",
            children: [
              h.jsx(c("BaseGlimmer.react"), {
                className: "ffj4bmtk tr9rh885 dhix69tm kk6bra9y pfnyh3mw",
                index: 0,
              }),
              h.jsxs("div", {
                className:
                  "gl5nj659 dati1w0a qt6c0cv9 hv4rvrfc pybr56ya i1fnvgqd cbu4d94t rq0escxv",
                children: [
                  h.jsx(c("BaseGlimmer.react"), {
                    className: "aahdfvyu cbu4d94t j83agx80",
                    index: 1,
                  }),
                  h.jsx(c("BaseGlimmer.react"), {
                    className: "m6gxxk8c omvj5yrc",
                    index: 2,
                  }),
                  h.jsx(c("BaseGlimmer.react"), {
                    className:
                      "m6gxxk8c hcukyx3x oygrvhab cxmmr5t8 n1l5q3vz mv0m16q6 a8c37x1j",
                    index: 3,
                  }),
                  h.jsx(c("BaseGlimmer.react"), {
                    className:
                      "m6gxxk8c hcukyx3x oygrvhab cxmmr5t8 n1l5q3vz omvj5yrc",
                    index: 4,
                  }),
                  h.jsx(c("BaseGlimmer.react"), {
                    className:
                      "m6gxxk8c hcukyx3x oygrvhab cxmmr5t8 ku2m03ct omvj5yrc",
                    index: 5,
                  }),
                ],
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
  "PagesCometBannerCardGlimmer.react",
  [
    "CometCard.react",
    "CometListCellGlimmer.react",
    "CometRow.react",
    "CometRowItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", {
        className: "cxgpxx05 sj5x9vvc",
        children: h.jsx(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: h.jsx(c("CometRow.react"), {
            children: h.jsx(c("CometRowItem.react"), {
              expanding: !0,
              children: h.jsx(c("CometListCellGlimmer.react"), {
                imageStyle: "circle",
                paddingHorizontal: 0,
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
  "CometChannelTabVideoItemGlimmer.react",
  ["BaseGlimmer.react", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("gkx")("708253");
    function a() {
      return h.jsxs("div", {
        className: i
          ? "k4urcfbm scb9dxdr dflh9lhu l8n96qml rq0escxv"
          : "kfpcsd3p l8n96qml",
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className:
              "stjgntxs ni8dbmo4 n851cfcs mhktyhy0 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 t63ysoy8 linmgsc8 hop1g133 opwvks06",
            index: 0,
          }),
          h.jsx(c("BaseGlimmer.react"), {
            className: "tvmbv18p jnigpg78",
            index: 1,
          }),
          h.jsx(c("BaseGlimmer.react"), {
            className: "ae89nt4x ed3p1gfi",
            index: 2,
          }),
          h.jsx(c("BaseGlimmer.react"), {
            className: "gjzvkazv aahdfvyu ed3p1gfi",
            index: 3,
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
  "PagesCometChannelTabVideoGridGlimmer.react",
  [
    "BaseResponsiveGrid.react",
    "CometChannelTabVideoItemGlimmer.react",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("gkx")("708253");
    function a() {
      var a = [
        h.jsx(c("CometChannelTabVideoItemGlimmer.react"), {}, "1"),
        h.jsx(c("CometChannelTabVideoItemGlimmer.react"), {}, "2"),
        h.jsx(c("CometChannelTabVideoItemGlimmer.react"), {}, "3"),
      ];
      return i
        ? h.jsx("div", {
            className: "scb9dxdr dflh9lhu",
            children: h.jsx(
              c("BaseResponsiveGrid.react"),
              { horizontalGap: 8, minWidth: 272, children: a },
              "videoGrid"
            ),
          })
        : h.jsx("div", {
            className: "tw6a2znq d1544ag0 sjgh65i0 i1fnvgqd btwxx1t3 j83agx80",
            children: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometChannelTabGenericVideosCardGlimmer.react",
  ["BaseGlimmer.react", "PagesCometChannelTabVideoGridGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        className:
          "cxgpxx05 ihqw7lf3 sjgh65i0 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 cwj9ozl2",
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className: "aahdfvyu ozuftl9m tvfksri0 n851cfcs rgmg9uty",
            index: 0,
          }),
          h.jsx(c("PagesCometChannelTabVideoGridGlimmer.react"), {}),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometFBVerifyIGVerifiedPublicFiguresDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "PagesCometFBVerifyIGVerifiedProfileDialogQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.pageID;
        return {
          queries: {
            dialogQueryReference: {
              parameters: b(
                "PagesCometFBVerifyIGVerifiedProfileDialogQuery$Parameters"
              ),
              variables: { pageID: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PagesCometFBVerifyIGVerifiedProfileDialog.react"
      ).__setRef("PagesCometFBVerifyIGVerifiedPublicFiguresDialog.entrypoint"),
    };
    d = a;
    g["default"] = d;
  },
  98
);
__d(
  "CometSinglePageHomeRoot.react",
  [
    "fbt",
    "ix",
    "CometContextualMessage.react",
    "CometDirectionalDockingView.react",
    "CometErrorBoundary.react",
    "CometLegalFooter.react",
    "CometPageSpotlightCardItemGlimmer",
    "CometPlaceholder.react",
    "CometResponsiveColumns.react",
    "CometRouteParams",
    "JSResourceForInteraction",
    "PagesCometAdminConsolidatedEntryButtonsContainerRenderer.react",
    "PagesCometBannerCardGlimmer.react",
    "PagesCometChannelTabGenericVideosCardGlimmer.react",
    "PagesCometFBVerifyIGVerifiedPublicFiguresDialog.entrypoint",
    "PagesCometLikeChainingContext.react",
    "TetraButtonGroup.react",
    "TetraIcon.react",
    "cr:1431699",
    "cr:1585199",
    "deferredLoadComponent",
    "fbicon",
    "lazyLoadComponent",
    "react",
    "recoverableViolation",
    "requireDeferredForDisplay",
    "stylex",
    "unrecoverableViolation",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    e = d("react");
    var k = e.useContext,
      l = e.useEffect,
      m = e.useRef,
      n = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometSinglePageContentContainer.react"
        ).__setRef("CometSinglePageHomeRoot.react")
      ),
      o = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometPageCardsContainer.react"
        ).__setRef("CometSinglePageHomeRoot.react")
      ),
      p = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "PagesCometInlineComposerRenderer.react"
        ).__setRef("CometSinglePageHomeRoot.react")
      ),
      q = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "PagesCometAdminMegaphoneContainer.react"
        ).__setRef("CometSinglePageHomeRoot.react")
      ),
      r = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "PagesCometBusinessManagerEntryCardContainer.react"
        ).__setRef("CometSinglePageHomeRoot.react")
      ),
      s = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "PagesCometRedirectMegaphoneContainer.react"
        ).__setRef("CometSinglePageHomeRoot.react")
      ),
      t = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "PagesCometHealthInformCardContainer.react"
        ).__setRef("CometSinglePageHomeRoot.react")
      ),
      u = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "PagesCometSpotlightCardContainerDeferred.react"
        ).__setRef("CometSinglePageHomeRoot.react")
      ),
      v = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PagesCometLikeChainingCardContainer.react"
        ).__setRef("CometSinglePageHomeRoot.react")
      ),
      w = {
        container: { paddingTop: "cxgpxx05" },
        errorMargin: { marginBottom: "sjgh65i0" },
        spotlight: { marginTop: "aov4n071" },
      };
    function x(a, b) {
      c("recoverableViolation")(
        "[CometPageHomeRoot] " + b + " suffered an uncaught error",
        "pages_consumer_experience_www",
        { error: a }
      );
    }
    var y = function (a) {
      return j.jsx("div", {
        className: c("stylex")(w.errorMargin),
        children: j.jsx(c("CometContextualMessage.react"), {
          addOnPrimary: j.jsx(c("TetraButtonGroup.react"), {
            primary: {
              label: "Reload Page",
              onPress: function (a) {
                return window.location.reload();
              },
              type: "secondary",
            },
          }),
          body: h._("Something went wrong, please try reloading the page."),
          headline: a,
          icon: j.jsx(c("TetraIcon.react"), {
            color: "secondary",
            icon: d("fbicon")._(i("502062"), 20),
          }),
        }),
      });
    };
    function a(a) {
      var e = a.extraProps;
      a = a.queries;
      var f = a.adminMegaphoneContainerQueryReference,
        g = a.consolidatedEntryButtonsContainerRendererQueryReference,
        i = a.contentContainerRendererQueryReference,
        z = a.inlineComposerRendererQueryReference,
        A = a.mainColumnCardsContainerQueryReference,
        B = a.pagesCometBusinessFYICardContainerQueryReference,
        C = a.pagesCometBusinessManagerEntryCardContainerQueryReference,
        D = a.pagesCometHealthInformCardContainerQueryReference,
        E = a.pagesCometMusicVideosCardContainerQueryReference,
        F = a.pagesCometRedirectMegaphoneContainerQueryReference,
        G = a.pagesCometSpotlightCardContainerQueryReference;
      a = a.secondaryColumnCardsContainerQueryReference;
      if (e == null)
        throw c("unrecoverableViolation")(
          "Invalid extraProps passed. extraProps for pages should not be null",
          "pages_consumer_experience_www"
        );
      var H = e.pageID;
      e = d("CometRouteParams").useRouteParams();
      var I = e.modal;
      e = c("useCometEntryPointDialog")(
        c("PagesCometFBVerifyIGVerifiedPublicFiguresDialog.entrypoint"),
        { pageID: H }
      );
      var J = e[0];
      e = k(
        d("PagesCometLikeChainingContext.react").PagesCometLikeChainingContext
      );
      var K = e.setShouldShowLikeChaining;
      e = e.shouldShowLikeChaining;
      l(
        function () {
          return function () {
            return K(!1);
          };
        },
        [H, K]
      );
      var L = m(!1);
      l(
        function () {
          I === "prevet_blue_badge_ig_verified_page" &&
            L.current === !1 &&
            ((L.current = !0), J({ pageID: H }));
        },
        [I, H, J]
      );
      e = e
        ? j.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: j.jsx(v, { pageID: H }),
          })
        : null;
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx(d("CometResponsiveColumns.react").Container, {
            containerWidth: "DEFAULT",
            xstyle: w.spotlight,
            children: j.jsxs(d("CometResponsiveColumns.react").Column, {
              columnType: "FULL",
              children: [
                b("cr:1431699") != null
                  ? j.jsx(c("CometPlaceholder.react"), {
                      fallback: j.jsx(
                        c("PagesCometBannerCardGlimmer.react"),
                        {}
                      ),
                      children: j.jsx(b("cr:1431699"), {
                        PagesCometBusinessFYICardContainerQueryReference: B,
                      }),
                    })
                  : null,
                j.jsx(s, {
                  pageID: H,
                  pagesCometRedirectMegaphoneContainerQueryReference: F,
                }),
                f != null
                  ? j.jsx(c("CometErrorBoundary.react"), {
                      fallback: function () {
                        return null;
                      },
                      children: j.jsx(c("CometPlaceholder.react"), {
                        fallback: j.jsx(
                          c("PagesCometBannerCardGlimmer.react"),
                          {}
                        ),
                        children: j.jsx(q, {
                          adminMegaphoneContainerQueryReference: f,
                        }),
                      }),
                    })
                  : null,
                C != null
                  ? j.jsx(c("CometPlaceholder.react"), {
                      fallback: j.jsx(
                        c("PagesCometBannerCardGlimmer.react"),
                        {}
                      ),
                      children: j.jsx(r, {
                        pagesCometBusinessManagerEntryCardContainerQueryReference:
                          C,
                      }),
                    })
                  : null,
                e,
                b("cr:1585199") != null
                  ? j.jsx(c("CometPlaceholder.react"), {
                      fallback: j.jsx(
                        c("PagesCometChannelTabGenericVideosCardGlimmer.react"),
                        {}
                      ),
                      children: j.jsx(b("cr:1585199"), {
                        PagesCometMusicVideosCardContainerQueryReference: E,
                      }),
                    })
                  : null,
                u != null
                  ? j.jsx(c("CometPlaceholder.react"), {
                      fallback: j.jsx(
                        c("CometPageSpotlightCardItemGlimmer"),
                        {}
                      ),
                      children: j.jsx("div", {
                        children: j.jsx(u, {
                          PagesCometSpotlightCardContainerQueryReference: G,
                        }),
                      }),
                    })
                  : null,
              ],
            }),
          }),
          j.jsxs(d("CometResponsiveColumns.react").Container, {
            containerWidth: "DEFAULT",
            xstyle: w.container,
            children: [
              j.jsx(d("CometResponsiveColumns.react").Column, {
                columnType: "SECONDARY",
                children: j.jsxs(c("CometDirectionalDockingView.react"), {
                  bottom: 16,
                  top: 16,
                  children: [
                    j.jsx(c("CometErrorBoundary.react"), {
                      fallback: function (a) {
                        return y(null);
                      },
                      onError: function (a) {
                        return x(a, "PagesCometSecondaryColumnCardsContainer");
                      },
                      children: j.jsx(o, { cardsContainerQueryReference: a }),
                    }),
                    j.jsx(c("CometLegalFooter.react"), { isPage: !0 }),
                  ],
                }),
              }),
              j.jsxs(d("CometResponsiveColumns.react").Column, {
                columnType: "FEED",
                children: [
                  t != null
                    ? j.jsx(t, {
                        pagesCometHealthInformCardContainerQueryReference: D,
                      })
                    : null,
                  z != null
                    ? j.jsx(c("CometErrorBoundary.react"), {
                        fallback: function (a) {
                          return y(h._("Composer"));
                        },
                        onError: function (a) {
                          return x(a, "RightColumnContentContainer");
                        },
                        children: j.jsx(p, {
                          inlineComposerRendererQueryReference: z,
                        }),
                      })
                    : null,
                  g != null
                    ? j.jsx(c("CometPlaceholder.react"), {
                        fallback: null,
                        children: j.jsx(
                          c(
                            "PagesCometAdminConsolidatedEntryButtonsContainerRenderer.react"
                          ),
                          {
                            consolidatedEntryButtonsContainerRendererQueryReference:
                              g,
                          }
                        ),
                      })
                    : null,
                  j.jsx(c("CometErrorBoundary.react"), {
                    children: j.jsx(o, { cardsContainerQueryReference: A }),
                  }),
                  j.jsx(c("CometErrorBoundary.react"), {
                    fallback: function (a) {
                      return y(h._("Page Feed"));
                    },
                    onError: function (a) {
                      return x(a, "RightColumnContentContainer");
                    },
                    children: j.jsx(n, {
                      contentContainerRendererQueryReference: i,
                    }),
                  }),
                ],
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
  "PagesCometBusinessFYICardContainerDeferred.react",
  ["deferredLoadComponent", "react", "requireDeferredForDisplay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("deferredLoadComponent")(
      c("requireDeferredForDisplay")(
        "PagesCometBusinessFYICardContainer.react"
      ).__setRef("PagesCometBusinessFYICardContainerDeferred.react")
    );
    g["default"] = a;
  },
  98
);
