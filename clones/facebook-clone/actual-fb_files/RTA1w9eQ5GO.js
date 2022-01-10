if (self.CavalryLogger) {
  CavalryLogger.start_js(["U0420Lx"]);
}

__d(
  "CometAddTypeaheadRecentSearchMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "SearchTypeaheadAddRecentSearchResponsePayload",
            kind: "LinkedField",
            name: "search_typeahead_add_recent_search",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
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
          name: "CometAddTypeaheadRecentSearchMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometAddTypeaheadRecentSearchMutation",
          selections: b,
        },
        params: {
          id: "4038957636197257",
          metadata: {},
          name: "CometAddTypeaheadRecentSearchMutation",
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
  "CometDeleteRecentSearchMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "SearchTypeaheadDeleteRecentResponsePayload",
            kind: "LinkedField",
            name: "search_typeahead_delete_recent",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
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
          name: "CometDeleteRecentSearchMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometDeleteRecentSearchMutation",
          selections: b,
        },
        params: {
          id: "2231609870228327",
          metadata: {},
          name: "CometDeleteRecentSearchMutation",
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
  "getSearchCometKeywordDataSourceStructuredInfoForEntry_structuredTypeaheadInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "getSearchCometKeywordDataSourceStructuredInfoForEntry_structuredTypeaheadInfo",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometSearchKeywordDataSourceQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "query" }],
        b = [{ kind: "Variable", name: "query", variableName: "query" }],
        c = {
          alias: "name",
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logging_id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logging_info",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_url",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "snippet",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        };
      g = [
        {
          alias: null,
          args: null,
          concreteType: "STSDirectNavResult",
          kind: "LinkedField",
          name: "direct_nav_result",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ent_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "img_url",
              storageKey: null,
            },
            f,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "entity_type",
              storageKey: null,
            },
            g,
            h,
            i,
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "STSHighConfidenceResult",
          kind: "LinkedField",
          name: "high_confidence_result",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "hcm_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "picture_url",
              storageKey: null,
            },
            g,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "source_as_enum",
              storageKey: null,
            },
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
          concreteType: "STSDisambiguationResult",
          kind: "LinkedField",
          name: "disambiguation_result",
          plural: !1,
          selections: [
            h,
            {
              alias: null,
              args: null,
              concreteType: "STSDisambiguationInfo",
              kind: "LinkedField",
              name: "disambiguation_info_list",
              plural: !0,
              selections: [
                {
                  alias: "snippet",
                  args: null,
                  kind: "ScalarField",
                  name: "text",
                  storageKey: null,
                },
                f,
                i,
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      h = {
        alias: null,
        args: null,
        concreteType: "SearchTypeaheadSuggestionKeys",
        kind: "LinkedField",
        name: "suggestion_keys",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "tier",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "keys",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "default_key",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometSearchKeywordDataSourceQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "KeywordsSearchSuggestionSet",
              kind: "LinkedField",
              name: "search_keywords_suggestion",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "KeywordsSearchSuggestionsConnection",
                  kind: "LinkedField",
                  name: "suggestions",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "KeywordsSearchSuggestionsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "KeywordSuggestionUnit",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            c,
                            d,
                            e,
                            {
                              alias: null,
                              args: null,
                              concreteType: "StructuredTypeaheadInfo",
                              kind: "LinkedField",
                              name: "structured_info",
                              plural: !1,
                              selections: [
                                {
                                  kind: "InlineDataFragmentSpread",
                                  name: "getSearchCometKeywordDataSourceStructuredInfoForEntry_structuredTypeaheadInfo",
                                  selections: g,
                                },
                              ],
                              storageKey: null,
                            },
                            h,
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometSearchKeywordDataSourceQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "KeywordsSearchSuggestionSet",
              kind: "LinkedField",
              name: "search_keywords_suggestion",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "KeywordsSearchSuggestionsConnection",
                  kind: "LinkedField",
                  name: "suggestions",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "KeywordsSearchSuggestionsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "KeywordSuggestionUnit",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            c,
                            d,
                            e,
                            {
                              alias: null,
                              args: null,
                              concreteType: "StructuredTypeaheadInfo",
                              kind: "LinkedField",
                              name: "structured_info",
                              plural: !1,
                              selections: g,
                              storageKey: null,
                            },
                            h,
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
          id: "4127947623964819",
          metadata: {},
          name: "CometSearchKeywordDataSourceQuery",
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
  "CometSearchRecentDataSourceQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "fetch_sts" },
        b = { defaultValue: null, kind: "LocalArgument", name: "filter" },
        c = { defaultValue: null, kind: "LocalArgument", name: "first" },
        d = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "search_scope_entity_id",
        },
        f = [
          { kind: "Variable", name: "filter", variableName: "filter" },
          { kind: "Variable", name: "first", variableName: "first" },
          {
            kind: "Variable",
            name: "search_scope_entity_id",
            variableName: "search_scope_entity_id",
          },
        ],
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
        i = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: [
                { kind: "Variable", name: "scale", variableName: "scale" },
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
          type: "Profile",
          abstractKey: "__isProfile",
        },
        j = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null,
          },
        ],
        k = {
          kind: "InlineFragment",
          selections: j,
          type: "Application",
          abstractKey: null,
        },
        l = {
          kind: "InlineFragment",
          selections: j,
          type: "Event",
          abstractKey: null,
        },
        m = {
          kind: "InlineFragment",
          selections: j,
          type: "Group",
          abstractKey: null,
        },
        n = {
          kind: "InlineFragment",
          selections: j,
          type: "Page",
          abstractKey: null,
        };
      j = {
        kind: "InlineFragment",
        selections: j,
        type: "User",
        abstractKey: null,
      };
      var o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "link_url",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "snippet",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        };
      q = [
        {
          alias: null,
          args: null,
          concreteType: "STSDirectNavResult",
          kind: "LinkedField",
          name: "direct_nav_result",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ent_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "img_url",
              storageKey: null,
            },
            p,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "entity_type",
              storageKey: null,
            },
            q,
            r,
            s,
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "STSHighConfidenceResult",
          kind: "LinkedField",
          name: "high_confidence_result",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "hcm_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "picture_url",
              storageKey: null,
            },
            q,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "source_as_enum",
              storageKey: null,
            },
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
          concreteType: "STSDisambiguationResult",
          kind: "LinkedField",
          name: "disambiguation_result",
          plural: !1,
          selections: [
            r,
            {
              alias: null,
              args: null,
              concreteType: "STSDisambiguationInfo",
              kind: "LinkedField",
              name: "disambiguation_info_list",
              plural: !0,
              selections: [
                {
                  alias: "snippet",
                  args: null,
                  kind: "ScalarField",
                  name: "text",
                  storageKey: null,
                },
                p,
                s,
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      r = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "item_logging_info",
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e],
          kind: "Fragment",
          metadata: null,
          name: "CometSearchRecentDataSourceQuery",
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
                  args: f,
                  concreteType: "RecentSearchConnection",
                  kind: "LinkedField",
                  name: "recent_searches",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "RecentSearchEdge",
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
                              kind: "InlineFragment",
                              selections: [g, h],
                              type: "Node",
                              abstractKey: "__isNode",
                            },
                            i,
                            k,
                            l,
                            m,
                            n,
                            j,
                            o,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  condition: "fetch_sts",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StructuredTypeaheadInfo",
                                      kind: "LinkedField",
                                      name: "sts_info",
                                      plural: !1,
                                      selections: [
                                        {
                                          kind: "InlineDataFragmentSpread",
                                          name: "getSearchCometKeywordDataSourceStructuredInfoForEntry_structuredTypeaheadInfo",
                                          selections: q,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                },
                                r,
                              ],
                              type: "GraphSearchQuery",
                              abstractKey: null,
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [b, c, d, a, e],
          kind: "Operation",
          name: "CometSearchRecentDataSourceQuery",
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
                  args: f,
                  concreteType: "RecentSearchConnection",
                  kind: "LinkedField",
                  name: "recent_searches",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "RecentSearchEdge",
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
                            g,
                            o,
                            {
                              kind: "InlineFragment",
                              selections: [h],
                              type: "Node",
                              abstractKey: "__isNode",
                            },
                            i,
                            k,
                            l,
                            m,
                            n,
                            j,
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  condition: "fetch_sts",
                                  kind: "Condition",
                                  passingValue: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StructuredTypeaheadInfo",
                                      kind: "LinkedField",
                                      name: "sts_info",
                                      plural: !1,
                                      selections: q,
                                      storageKey: null,
                                    },
                                  ],
                                },
                                r,
                              ],
                              type: "GraphSearchQuery",
                              abstractKey: null,
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
          id: "4331246513607643",
          metadata: {},
          name: "CometSearchRecentDataSourceQuery",
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
  "SearchGeminiGlobalResultPageTracePolicy",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      DEFAULT_TAB: "gemini.search_results.default",
      HASHTAG: "gemini.search_results.hashtag",
    });
    f["default"] = a;
  },
  66
);
__d(
  "isSearchGeminiGlobalResultPageTracePolicy",
  ["SearchGeminiGlobalResultPageTracePolicy"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return Object.values(
        c("SearchGeminiGlobalResultPageTracePolicy")
      ).includes(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometResultsEntryPointSurface",
  [
    "isSearchCometGlobalResultPageTracePolicy",
    "isSearchCometScopedResultPageTracePolicy",
    "isSearchGeminiGlobalResultPageTracePolicy",
    "useCometRouterState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map([
        ["apps", "SERP_APPS_TAB"],
        ["events", "SERP_EVENTS_TAB"],
        ["groups", "SERP_GROUPS_TAB"],
        ["links", "SERP_NEWS_LINK_TAB"],
        ["pages", "SERP_PAGES_TAB"],
        ["people", "SERP_PEOPLE_TAB"],
        ["photos", "SERP_PHOTOS_TAB"],
        ["places", "SERP_PLACES_TAB"],
        ["posts", "SERP_POSTS_TAB"],
        ["top", "SERP_TOP_TAB"],
        ["videos", "SERP_VIDEOS_TAB"],
      ]),
      i = new Map([
        ["groups_home", "GROUPS_HOME_SERP_ALL_TAB"],
        ["groups", "GROUPS_HOME_SERP_GROUPS_TAB"],
        ["posts", "GROUPS_HOME_SERP_GROUP_POSTS_TAB"],
      ]);
    function a(a) {
      a = (a = a) != null ? a : {};
      var b = a.currentSearchType;
      a = a.entryPointSurface;
      var d = c("useCometRouterState")();
      if (a != null) return a;
      a = (d == null ? void 0 : d.pushViewStack) || [];
      if (a.length > 0) {
        a = (a = a[a.length - 1]) == null ? void 0 : a.route;
      } else a = d == null ? void 0 : d.main.route;
      d = (d = a) == null ? void 0 : d.tracePolicy;
      a =
        (a = a) == null
          ? void 0
          : (a = a.params) == null
          ? void 0
          : a.searchtype;
      a = typeof a === "string" ? a : null;
      b = (b = b) != null ? b : a;
      if (
        b != null &&
        d != null &&
        (c("isSearchCometGlobalResultPageTracePolicy")(d) ||
          c("isSearchGeminiGlobalResultPageTracePolicy")(d) ||
          d === "comet.groups.search")
      ) {
        a = d === "comet.groups.search" ? i : h;
        return a.get(b);
      }
      var e;
      if (
        d != null &&
        !c("isSearchCometScopedResultPageTracePolicy")(d) &&
        !c("isSearchCometGlobalResultPageTracePolicy")(d) &&
        !c("isSearchGeminiGlobalResultPageTracePolicy")(d)
      ) {
        a = d.match(/^((comet|gemini)\.[a-zA-Z_]+).*$/);
        a != null && (e = a[1]);
      }
      return (b = e) != null ? b : d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadInMemoryListDataCache",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = [];
      }
      var b = a.prototype;
      b.clear = function () {
        this.$1 = [];
      };
      b.get = function (a) {
        var b = this.$1.find(function (b) {
          return b.key === a;
        });
        return b ? b.value : null;
      };
      b.has = function (a) {
        return this.$1.some(function (b) {
          return b.key === a;
        });
      };
      b.set = function (a, b) {
        var c = this.$1.findIndex(function (b) {
          return b.key === a;
        });
        if (c === -1) {
          this.$1.push({ key: a, value: b });
          return;
        }
        this.$1[c] = { key: a, value: b };
      };
      b.remove = function (a) {
        var b = this.$1.findIndex(function (b) {
          return b.key === a;
        });
        this.$1.splice(b, 1);
      };
      b.values = function () {
        return this.$1.map(function (a) {
          return a.value;
        });
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "CometTypeaheadLoggingProvider",
  [
    "cr:1846269",
    "gkx",
    "orEmptyArray",
    "recoverableViolation",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("ODS").__setRef(
        "CometTypeaheadLoggingProvider"
      ),
      i = function () {
        return Math.random().toString();
      };
    a = (function () {
      function a(a) {
        var b = a.context,
          c = a.log;
        a = a.onSessionEnd;
        this.$4 = null;
        this.$5 = null;
        this.$6 = !1;
        this.$3 = c;
        this.$1 = b;
        this.$7 = a;
      }
      var d = a.prototype;
      d.addEvent = function (a, b) {
        var d = this,
          e = a.action,
          f = a.entries,
          g = a.entry;
        a = a.queryString;
        var i = String(Date.now());
        if (!this.$6 || this.$4 == null) {
          if (!this.$6) {
            var j;
            c("recoverableViolation")(
              "Cannot log a new " +
                e +
                " event into inactive session on " +
                this.$1 +
                " surface. Reason: session inactive. Callsite: " +
                ((j = b) != null ? j : "none"),
              "search"
            );
          } else {
            c("recoverableViolation")(
              "Cannot log a new " +
                e +
                " event into inactive session on " +
                this.$1 +
                " surface. Reason: null session id. Callsite: " +
                ((j = b) != null ? j : "none"),
              "search"
            );
          }
          h.onReady(function (a) {
            a.bumpEntityKey(
              354,
              "comet_ta_out_of_sync_event",
              [
                d.$1,
                (a = b) != null ? a : "no_callsite",
                d.$6 ? "null_session_id" : "inactive_session",
              ].join("."),
              1
            );
          });
          return null;
        }
        this.$2 &&
          this.$2.push({
            action: e,
            entries: f ? [].concat(f) : null,
            entry: g,
            queryString: a,
            sequenceID: i,
          });
        return { sequenceID: i, sessionID: this.$4 };
      };
      d.isSessionActive = function () {
        return this.$6;
      };
      d.getSessionID = function () {
        this.$4 == null &&
          c("recoverableViolation")(
            "Logging sessionID requested from " +
              this.$1 +
              " surface does not exist.",
            "search"
          );
        return this.$4;
      };
      d.endSession = function () {
        var a = this.$5,
          d = this.$4,
          e = this.$2;
        if (a == null || d == null || e == null) return;
        e = j(e);
        e = { endTimeMs: Date.now(), events: e, sessionID: d, startTimeMs: a };
        this.$3(e);
        c("gkx")("1288454") && b("cr:1846269") && b("cr:1846269")(e);
        a = this.$7;
        if (a) {
          e = new Set();
          for (
            var f = c("orEmptyArray")(this.$2),
              g = Array.isArray(f),
              h = 0,
              f = g
                ? f
                : f[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var i;
            if (g) {
              if (h >= f.length) break;
              i = f[h++];
            } else {
              h = f.next();
              if (h.done) break;
              i = h.value;
            }
            i = i;
            if (i.entries != null)
              for (
                var i = i.entries,
                  k = Array.isArray(i),
                  l = 0,
                  i = k
                    ? i
                    : i[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                ;

              ) {
                var m;
                if (k) {
                  if (l >= i.length) break;
                  m = i[l++];
                } else {
                  l = i.next();
                  if (l.done) break;
                  m = l.value;
                }
                m = m;
                e.add(m);
              }
          }
          m = this.$2 != null ? this.$2[this.$2.length - 1] : null;
          a({
            reason:
              m != null
                ? m.action === "abandon"
                  ? "abandon"
                  : "success"
                : void 0,
            sessionID: d,
            shownEntries: Array.from(e),
          });
        }
        this.$6 = !1;
        this.$2 = null;
        this.$5 = null;
      };
      d.startSession = function () {
        this.$6 = !0;
        this.$2 = [];
        var a = i();
        this.$4 = a;
        var d = Date.now();
        this.$5 = d;
        if (c("gkx")("1288454")) {
          a = { events: [], sessionID: a, startTimeMs: d };
          b("cr:1846269") && b("cr:1846269")(a);
        }
      };
      d.getContext = function () {
        return this.$1;
      };
      return a;
    })();
    function j(a) {
      if (a.length < 2) {
        c("recoverableViolation")(
          "Logging session can't have less than 2 events",
          "search"
        );
        return [];
      }
      var b = a[0],
        d = a[1],
        e = a.slice(2),
        f = [];
      if (b.action === "typeahead_appeared" && d.action === "keystroke") {
        b = babelHelpers["extends"]({}, b, {
          entries: (b = b.entries) != null ? b : d.entries,
        });
        (d = f).push.apply(d, [b].concat(e));
      } else f = [].concat(a);
      d = [];
      while (f.length > 0) {
        b = f.shift();
        e = f;
        a = e[0];
        d.push(
          babelHelpers["extends"]({}, b, {
            entries:
              (e = a == null ? void 0 : a.entries) != null ? e : b.entries,
          })
        );
      }
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadErrorFallback.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx("div", { className: "taijpn5t datstx6m j83agx80 bp9cbjyn" });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadStateQueryString",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    function a(a) {
      var b = i(a),
        c = b[0],
        d = b[1];
      h(
        function () {
          return d(a);
        },
        [a]
      );
      return [c, d];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadEchoViewItem.react",
  [
    "CometTypeaheadViewItem.react",
    "CometTypeaheadViewItemIcon.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.entry,
        d = a.isActive,
        e = a.queryString;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "entry",
        "isActive",
        "queryString",
      ]);
      return h.jsx(
        c("CometTypeaheadViewItem.react"),
        babelHelpers["extends"]({}, a, {
          entry: b,
          isActive: d,
          itemStartContent: h.jsx(c("CometTypeaheadViewItemIcon.react"), {
            isActive: d,
            type: "typed",
          }),
          children: h.jsx(c("TetraText.react"), {
            numberOfLines: 1,
            type: "body3",
            children: String(e).toLowerCase(),
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadEntityViewItem.react",
  [
    "CometImageIcon_DEPRECATED.react",
    "CometTypeaheadViewItem.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.entry,
        d = a.pictureUrl;
      a.queryString;
      var e = a.size;
      e = e === void 0 ? 36 : e;
      var f = a.style;
      f = f === void 0 ? "circle" : f;
      var g = a.subtext;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "entry",
        "pictureUrl",
        "queryString",
        "size",
        "style",
        "subtext",
      ]);
      return h.jsx(
        c("CometTypeaheadViewItem.react"),
        babelHelpers["extends"]({}, a, {
          entry: b,
          itemStartContent:
            d != null
              ? h.jsx(c("CometImageIcon_DEPRECATED.react"), {
                  size: e,
                  src: d,
                  style: f,
                })
              : null,
          children: h.jsx(c("TetraTextPairing.react"), {
            body: b.getLabel(),
            bodyLineLimit: 2,
            level: 3,
            meta: g,
            metaLineLimit: 1,
            reduceEmphasis: !0,
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTypeaheadSeeAllViewItem.react",
  [
    "fbt",
    "ix",
    "CometTypeaheadViewItem.react",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useMemo;
    function a(a) {
      var b = a.entry,
        e = a.extraViewItemProps,
        f = a.queryString;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "entry",
        "extraViewItemProps",
        "queryString",
      ]);
      var g = k(
        function () {
          var a;
          return (a = e == null ? void 0 : e.placeholderBuilder) != null
            ? a
            : l;
        },
        [e == null ? void 0 : e.placeholderBuilder]
      );
      return j.jsx(
        c("CometTypeaheadViewItem.react"),
        babelHelpers["extends"]({}, a, {
          entry: b,
          itemStartContent: j.jsx("div", {
            className:
              "thwo4zme taijpn5t tv7at329 j83agx80 k77z8yql qs9ysxi8 arfg74bv n00je7tq is6700om bp9cbjyn",
            children: j.jsx(c("TetraIcon.react"), {
              color: "white",
              icon: d("fbicon")._(i("491282"), 16),
              size: 16,
            }),
          }),
          children: j.jsx(c("TetraText.react"), {
            color: "blueLink",
            numberOfLines: 1,
            type: "body3",
            children: g(f),
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function l(a) {
      return h._("Search for {=[query]}", [
        h._param(
          "=[query]",
          j.jsx("strong", {
            children: h._("{query}", [h._param("query", a.toLowerCase())]),
          })
        ),
      ]);
    }
    l.displayName = l.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometAddTypeaheadRecentSearchMutation",
  ["CometAddTypeaheadRecentSearchMutation.graphql", "cr:1012418"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometAddTypeaheadRecentSearchMutation.graphql"));
    function a(a) {
      var c = a.onBeforeCommitMutation,
        d = a.onError,
        e = a.onSuccess,
        f = a.relayEnvironment,
        g = a.searchScopeEntityID,
        h = a.selectedID,
        j = a.selectedText,
        k = a.selectedType,
        l = a.source,
        m = a.stsDirectNavType,
        n = a.stsDisambiguationType,
        o = a.stsHighConfidenceSource,
        p = a.userID;
      a = a.userInput;
      c && c();
      b("cr:1012418").commitMutation(f, {
        mutation: i,
        onCompleted: function (a, b) {
          b && b.length
            ? d &&
              d(
                new Error(
                  "Payload errors while executing `addTypeaheadRecentSearchMutation`."
                )
              )
            : e && e(a);
        },
        onError: d,
        variables: {
          input: {
            actor_id: p != null ? p : void 0,
            search_scope_entity_id: g,
            selected_id: h,
            selected_text: j,
            selected_type: k,
            source: l,
            sts_direct_nav_type_for_graphql: m,
            sts_disambiguation_type_for_graphql: n,
            sts_high_confidence_source_for_graphql: o,
            user_input: a,
          },
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometDeleteRecentSearchMutation",
  ["CometDeleteRecentSearchMutation.graphql", "cr:1012418"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometDeleteRecentSearchMutation.graphql"));
    function a(a) {
      var c = a.onBeforeCommitMutation,
        d = a.onError,
        e = a.onSuccess,
        f = a.relayEnvironment,
        g = a.searchEntityType,
        h = a.searchText;
      a = a.userID;
      c && c();
      b("cr:1012418").commitMutation(f, {
        mutation: i,
        onCompleted: function (a, b) {
          b && b.length
            ? d &&
              d(
                new Error(
                  "Payloads error while executing `deleteSearchMutation`."
                )
              )
            : e && e(a);
        },
        onError: d,
        variables: {
          input: babelHelpers["extends"](
            {},
            a != null ? { actor_id: a } : null,
            { search_entity_type: g, search_text: h }
          ),
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "useCometSearchRoutingQueryString",
  ["CometRouteParams"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("CometRouteParams").useRouteParams();
      return typeof a.q === "string" ? a.q.trim() : "";
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometResultsCommonRouteParamBuilder",
  [
    "Base64",
    "CometRouteParams",
    "react",
    "useSearchCometResultsEntryPointSurface",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      a = (a = a) != null ? a : {};
      var b = a.currentSearchType;
      a = a.entryPointSurface;
      var e = d("CometRouteParams").useRouteParams(),
        f = e.__tsid__,
        g = c("useSearchCometResultsEntryPointSurface")({
          currentSearchType: b,
          entryPointSurface: a,
        });
      return h(
        function () {
          return {
            build: function (a) {
              var b = a.disableAutocorrect,
                d = a.encryptedQueryFunction,
                e = a.encryptedServerDefinedExperience,
                h = a.entryPointAction,
                i = a.filters,
                j = a.query;
              a = a.typeaheadSessionID;
              j = { q: j };
              d != null && (j.f = d);
              e != null && (j.sde = e);
              a != null
                ? (j.__tsid__ = a)
                : typeof f === "string" && (j.__tsid__ = f);
              h != null && (j.__epa__ = h);
              g != null && (j.__eps__ = g);
              b === !0 && (j.spell = "1");
              i != null && (j.filters = c("Base64").encode(JSON.stringify(i)));
              return j;
            },
          };
        },
        [f, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "getSearchCometKeywordDataSourceStructuredSuggestionKey",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b;
      if (((b = a.direct_nav_result) == null ? void 0 : b.ent_id) != null) {
        return (
          "dir_nav_sts:" +
          ((b = a.direct_nav_result) == null ? void 0 : b.ent_id)
        );
      }
      if (
        ((b = a.high_confidence_result) == null ? void 0 : b.hcm_id) != null
      ) {
        return (
          "hc_sts:" +
          ((b = a.high_confidence_result) == null ? void 0 : b.hcm_id)
        );
      }
      return ((b = a.disambiguation_result) == null ? void 0 : b.title) !=
        null &&
        ((b = a.disambiguation_result) == null
          ? void 0
          : (b = b.disambiguation_info_list[0]) == null
          ? void 0
          : b.type) != null
        ? a.disambiguation_result.disambiguation_info_list[0].type +
            ":" +
            a.disambiguation_result.title
        : null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "getSearchCometKeywordDataSourceStructuredInfoForEntry",
  [
    "CometRelay",
    "getSearchCometKeywordDataSourceStructuredInfoForEntry_structuredTypeaheadInfo.graphql",
    "getSearchCometKeywordDataSourceStructuredSuggestionKey",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = a.structuredTypeaheadInfo;
      if (a == null)
        return {
          entryKey: null,
          extraLoggingInfo: null,
          label: null,
          markers: [],
          structuredInfo: null,
        };
      a = d("CometRelay").readInlineData(
        h !== void 0
          ? h
          : (h = b(
              "getSearchCometKeywordDataSourceStructuredInfoForEntry_structuredTypeaheadInfo.graphql"
            )),
        a
      );
      var e = a.direct_nav_result,
        f = a.disambiguation_result;
      a = a.high_confidence_result;
      var g = [],
        i,
        j,
        k;
      if (e != null) {
        g = ["direct_nav"];
        var l = e.ent_id,
          m = e.entity_type,
          n = e.img_url,
          o = e.link_url,
          p = e.snippet,
          q = e.title;
        e = e.type;
        k = q;
        i = {
          direct_nav_result: {
            ent_id: l,
            entity_type: m,
            img_url: n,
            link_url: o,
            snippet: p,
            title: q,
            type: e,
          },
        };
        j = {
          stsDirectNavEntityID: l,
          stsDirectNavEntityType: m,
          stsDirectNavType: e,
        };
      }
      if (a != null) {
        g = ["high_confidence"];
        n = a.hcm_id;
        o = a.picture_url;
        p = a.snippet;
        q = a.source_as_enum;
        l = a.text;
        k = l;
        i = {
          high_confidence_result: {
            hcm_id: n,
            picture_url: o,
            snippet: p,
            source_as_enum: q,
            text: l,
          },
        };
        j = { stsHighConfidenceID: n, stsHighConfidenceSource: q };
      }
      if (f != null) {
        g = ["disambiguation"];
        m = f.disambiguation_info_list;
        e = f.title;
        k = e;
        i = {
          disambiguation_result: { disambiguation_info_list: m, title: e },
        };
        j = { stsDisambiguationType: m[0].type };
      }
      return {
        entryKey:
          i != null
            ? c("getSearchCometKeywordDataSourceStructuredSuggestionKey")(i)
            : null,
        extraLoggingInfo: j,
        label: k,
        markers: g,
        structuredInfo: i,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSearchKeywordDataSource.query",
  [
    "CometSearchKeywordDataSourceQuery.graphql",
    "CometTypeaheadDataEntryWithMetaData",
    "cometUniqueID",
    "getSearchCometKeywordDataSourceStructuredInfoForEntry",
    "orEmptyArray",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d = h !== void 0 ? h : (h = b("CometSearchKeywordDataSourceQuery.graphql"));
    function a(a, b) {
      if (!a) return [];
      a = a.search_keywords_suggestion;
      var d = b.query.request_id;
      a = c("orEmptyArray")(
        a == null ? void 0 : (a = a.suggestions) == null ? void 0 : a.edges
      )
        .map(function (a) {
          return a.node;
        })
        .filter(Boolean);
      var e;
      try {
        b = JSON.parse(b.query.query_text);
        e = b != null ? b[0] : null;
      } catch (a) {}
      b = a.map(function (a) {
        var b,
          f = a.logging_id,
          g = a.logging_info,
          h = a.name,
          i = a.structured_info;
        a = a.suggestion_keys;
        i = c("getSearchCometKeywordDataSourceStructuredInfoForEntry")({
          structuredTypeaheadInfo: i,
        });
        var j = i.entryKey,
          k = i.extraLoggingInfo,
          l = i.label,
          m = i.markers;
        i = i.structuredInfo;
        b = (b = a) != null ? b : {};
        var n = b.default_key,
          o = b.keys;
        b = b.tier;
        return new (c("CometTypeaheadDataEntryWithMetaData"))({
          key:
            (a =
              (j =
                (j = j) != null
                  ? j
                  : i && (a == null ? void 0 : a.default_key)) != null
                ? j
                : h) != null
              ? a
              : c("cometUniqueID")(),
          label: (a = (j = l) != null ? j : h) != null ? a : "",
          metaData: {
            logging: babelHelpers["extends"]({}, k, {
              loggingID: f,
              loggingInfo: g,
              query: e,
              sequenceID: d,
            }),
            markers: new Set(["keyword"].concat(m)),
          },
          rawData: {
            structuredInfo: i,
            suggestion_keys:
              b != null ? { default_key: n, keys: o, tier: b } : null,
            type: "keyword",
          },
        });
      });
      return b;
    }
    g.query = d;
    g.normalize = a;
  },
  98
);
__d(
  "cometSearchKeywordDataSourceQueryOrLabelSuffixBuilder",
  ["cometTypeaheadLabelSuffixBuilder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d = a.getRawData();
      return d.type === "keyword" && d.suffix != null && d.suffix !== ""
        ? d.suffix
        : c("cometTypeaheadLabelSuffixBuilder")(a, b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometSearchKeywordDataSourceQueryVariablesBuilder",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 10,
      h = "blended";
    function a(a) {
      return function (b) {
        var c,
          d = b.loggingEventTrace;
        b = b.query;
        c = (c = a) != null ? c : {};
        var e = c.fetch_count,
          f = c.fetch_mode;
        c = c.group_id;
        c = JSON.stringify(
          c != null ? [{ text: "", type: "group", uid: c }, b] : [b]
        );
        return {
          query: {
            fetch_count: (b = e) != null ? b : g,
            fetch_mode: (e = f) != null ? e : h,
            query_text: c,
            request_id: d == null ? void 0 : d.sequenceID,
            session_id: (b = d == null ? void 0 : d.sessionID) != null ? b : "",
          },
        };
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometSearchKeywordDataSource",
  [
    "CometSearchKeywordDataSource.query",
    "CometTypeaheadDataProvider",
    "CometTypeaheadDataProviderQueryVariablesBuilder",
    "CometTypeaheadNetworkCacheDataSource",
    "CometTypeaheadQueryDataCacheProvider",
    "cometCacheEntryKeyBuilder",
    "cometSearchKeywordDataSourceQueryOrLabelSuffixBuilder",
    "cometSearchKeywordDataSourceQueryVariablesBuilder",
    "cometTypeaheadDedupEntriesBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = a.dedupe,
          e = a.onError,
          f = a.queryVariables;
        a = a.relayEnvironment;
        f = new (c("CometTypeaheadDataProviderQueryVariablesBuilder"))(
          c("cometSearchKeywordDataSourceQueryVariablesBuilder")
        ).setDefaultVariables(f);
        e = new (c("CometTypeaheadDataProvider"))({
          onError: e,
          query: d("CometSearchKeywordDataSource.query").query,
          queryVariablesBuilder: f,
          relayEnvironment: a,
        });
        this.$1 = new (c("CometTypeaheadQueryDataCacheProvider"))({
          dedupe:
            (f = b) != null
              ? f
              : c("cometTypeaheadDedupEntriesBuilder")(
                  c("cometCacheEntryKeyBuilder")
                ),
          suffixBuilder: function () {
            return c(
              "cometSearchKeywordDataSourceQueryOrLabelSuffixBuilder"
            ).apply(void 0, arguments);
          },
        });
        this.$2 = new (c("CometTypeaheadNetworkCacheDataSource"))(e, this.$1, {
          normalizeFunc: d("CometSearchKeywordDataSource.query").normalize,
        });
      }
      var b = a.prototype;
      b.fetchCache = function (a) {
        return this.$2.fetchCache(a);
      };
      b.fetchNetwork = function (a) {
        return this.$2.fetchNetwork(a);
      };
      b.clearQueryCache = function () {
        this.$1.clear();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "CometSearchRecentDataCacheProvider",
  ["cometDataEntryLabelKeyBuilder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = a.cache,
          d = a.matchBuilder;
        a = a.keyBuilder;
        a = a === void 0 ? c("cometDataEntryLabelKeyBuilder") : a;
        this.$1 = b;
        this.$2 = d;
        this.$3 = a;
      }
      var b = a.prototype;
      b.add = function (a, b, c) {
        var d = this;
        if (c === "network") {
          this.$1.clear();
          []
            .concat(a)
            .reverse()
            .forEach(function (a) {
              var b = d.$3(a);
              d.$1.set(b, a);
            });
          return;
        }
        a.forEach(function (a) {
          var b = d.$3(a);
          d.$1.has(b) && d.$1.remove(b);
          d.$1.set(b, a);
        });
      };
      b.clear = function () {
        this.$1.clear();
      };
      b.remove = function (a) {
        a = this.$3(a);
        this.$1.remove(a);
      };
      b.match = function (a) {
        var b = this.$2({ query: a });
        return []
          .concat(this.$1.values())
          .reverse()
          .filter(function (a) {
            return b(a);
          });
      };
      b.values = function () {
        return this.$1.values();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "cometSearchNullStateMatchBuilder",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return function (a) {
        a = a.getMetaData();
        a = a.markers;
        return a.has("recent") || a.has("nullstate_explore");
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometSearchRecentDataSource",
  [
    "CometAddTypeaheadRecentSearchMutation",
    "CometDeleteRecentSearchMutation",
    "CometSearchRecentDataCacheProvider",
    "CometTypeaheadDataProvider",
    "CometTypeaheadDataProviderQueryVariablesBuilder",
    "CometTypeaheadInMemoryListDataCache",
    "CometTypeaheadNetworkDataSource",
    "Promise",
    "cometDataEntryKeyBuilder",
    "cometSearchNullStateMatchBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = a.gqlQuery,
          d = a.limit,
          e = a.normalize,
          f = a.options,
          g = a.queryVariablesBuilderFunction;
        a = a.relayEnvironment;
        this.$4 = a;
        this.$5 = d;
        a = function () {
          return g;
        };
        d = new (c("CometTypeaheadDataProviderQueryVariablesBuilder"))(a);
        a = new (c("CometTypeaheadDataProvider"))({
          options: f,
          query: b,
          queryVariablesBuilder: d,
          relayEnvironment: this.$4,
        });
        this.$2 = new (c("CometSearchRecentDataCacheProvider"))({
          cache: new (c("CometTypeaheadInMemoryListDataCache"))(),
          keyBuilder: c("cometDataEntryKeyBuilder"),
          matchBuilder: c("cometSearchNullStateMatchBuilder"),
        });
        this.$1 = new (c("CometTypeaheadNetworkDataSource"))(a, e);
      }
      var e = a.prototype;
      e.add = function (a, b, c) {
        c = c === void 0 ? {} : c;
        var e = c.onBeforeCommitMutation,
          f = c.onError;
        c = c.onSuccess;
        var g = a.getMetaData();
        this.$2.add([a], "");
        g = (g = g == null ? void 0 : g.logging) != null ? g : {};
        var h = g.entityID,
          i = g.entityType,
          j = g.searchScopeEntityID,
          k = g.stsDirectNavEntityID,
          l = g.stsDirectNavType,
          m = g.stsDisambiguationType,
          n = g.stsHighConfidenceID;
        g = g.stsHighConfidenceSource;
        d("CometAddTypeaheadRecentSearchMutation").commit({
          onBeforeCommitMutation: e,
          onError: f,
          onSuccess: c,
          relayEnvironment: this.$4,
          searchScopeEntityID: j,
          selectedID: (f = (e = h) != null ? e : k) != null ? f : n,
          selectedText: a.getLabel().toLowerCase(),
          selectedType: (c = i) != null ? c : "keyword",
          source: b,
          stsDirectNavType: l,
          stsDisambiguationType: m,
          stsHighConfidenceSource: g,
          userInput: a.getLabel().toLowerCase(),
        });
      };
      e.bootstrap = function () {
        this.fetchNetwork({ query: "" });
      };
      e.fetchCache = function (a) {
        var b = a.query;
        b = this.$2.match(b);
        return { entries: b, params: a };
      };
      e.fetchNetwork = function (a) {
        var c = this;
        return this.$3 != null && this.$3 < this.$5
          ? b("Promise").resolve({ entries: this.$2.match(a.query), params: a })
          : this.$1.fetchNetwork(a).then(function (b) {
              var d = b.entries;
              b = b.params.query;
              d != null && ((c.$3 = d.length), c.$2.add(d, b, "network"));
              return { entries: c.$2.match(b), params: a };
            });
      };
      e.remove = function (a, b) {
        b = b === void 0 ? {} : b;
        var c = b.onBeforeCommitMutation,
          e = b.onError;
        b = b.onSuccess;
        this.$2.remove(a);
        d("CometDeleteRecentSearchMutation").commit({
          onBeforeCommitMutation: c,
          onError: e,
          onSuccess: b,
          relayEnvironment: this.$4,
          searchText: a.getLabel(),
        });
      };
      e.clear = function () {
        this.$2.clear();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "searchCometIsValidRecentSearchEntityType",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = ["app", "application", "event", "group", "page", "user"];
    function a(a) {
      return g.includes(a == null ? void 0 : a.toLowerCase());
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometSearchRecentDataSource.query",
  [
    "CometSearchRecentDataSourceQuery.graphql",
    "CometTypeaheadDataEntryWithMetaData",
    "filterNulls",
    "getSearchCometKeywordDataSourceStructuredInfoForEntry",
    "orEmptyArray",
    "recoverableViolation",
    "searchCometIsValidRecentSearchEntityType",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d = h !== void 0 ? h : (h = b("CometSearchRecentDataSourceQuery.graphql"));
    function a(a) {
      if (!a) return [];
      a = a.viewer;
      a = c("orEmptyArray")(
        a == null ? void 0 : (a = a.recent_searches) == null ? void 0 : a.edges
      )
        .map(function (a) {
          return a.node;
        })
        .filter(Boolean);
      a = c("filterNulls")(
        a.map(function (a) {
          var b = a.__typename,
            d = a.id,
            e = a.item_logging_info,
            f = a.name,
            g = a.profile_picture,
            h = a.sts_info;
          a = a.url;
          var i = c("searchCometIsValidRecentSearchEntityType")(b);
          h = c("getSearchCometKeywordDataSourceStructuredInfoForEntry")({
            structuredTypeaheadInfo: h,
          });
          var j = h.entryKey,
            k = h.extraLoggingInfo,
            l = h.label,
            m = h.markers;
          h = h.structuredInfo;
          j = (j = j) != null ? j : f;
          if (j == null || f == null) {
            c("recoverableViolation")(
              "Missing id, key or label for recent search entry",
              "search"
            );
            return null;
          }
          return new (c("CometTypeaheadDataEntryWithMetaData"))({
            key: j,
            label: (j = l) != null ? j : f,
            metaData: {
              logging: babelHelpers["extends"]({}, k, {
                entityID: i ? d : null,
                entityType: i && b != null ? b.toLowerCase() : null,
                loggingInfo: e,
              }),
              markers: new Set(i ? ["entity", "recent"] : ["recent"].concat(m)),
            },
            rawData: {
              profile:
                i &&
                d != null &&
                (g == null ? void 0 : g.uri) != null &&
                a != null
                  ? { id: d, profilePictureURL: g.uri, url: a }
                  : void 0,
              structuredInfo: h,
              type: "recent",
            },
          });
        })
      );
      return a;
    }
    g.query = d;
    g.normalize = a;
  },
  98
);
__d(
  "CometSearchRecentDataSourceDispatcherContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b;
  },
  98
);
__d(
  "useCometSearchRecentDataSourceDispatcher",
  ["CometSearchRecentDataSourceDispatcherContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometSearchRecentDataSourceDispatcherContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometWithRecentDataSourceContext",
  [
    "CometSearchEventEmitterContext",
    "CometSearchRecentDataSourceDispatcherContext",
    "CometTypeaheadDataEntryWithMetaData",
    "react",
    "useCometInternalTypeaheadFetch",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useMemo;
    function a(a, b) {
      var d = b.dataSource;
      return h.forwardRef(function (b, e) {
        var f = b.onPressEntry,
          g = b.onSelectFreeformQuery;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "onPressEntry",
          "onSelectFreeformQuery",
        ]);
        var m = c("useCometInternalTypeaheadFetch")(),
          n = m.refetch;
        m = j(c("CometSearchEventEmitterContext"));
        var o = m.subscribeToRecentSearchEntryAdded;
        k(
          function () {
            return o(function (a) {
              d.addRecentEntry(a);
            });
          },
          [o]
        );
        m = i(
          function (a) {
            var b = new (c("CometTypeaheadDataEntryWithMetaData"))({
              key: a,
              label: a,
              metaData: { markers: new Set(["recent"]) },
              rawData: { type: "temp" },
            });
            d.addRecentEntry(b);
            g && g(a);
          },
          [g]
        );
        var p = i(
            function (a) {
              var b,
                e = a.getMetaData();
              b = (b = e == null ? void 0 : e.markers) != null ? b : new Set();
              if (b.has("nullstate_explore")) {
                f && f(a);
                return;
              }
              var g = new Set(["recent"]);
              b.has("entity") && g.add("entity");
              b.has("direct_nav") && g.add("direct_nav");
              b.has("high_confidence") && g.add("high_confidence");
              e = (b = e == null ? void 0 : e.logging) != null ? b : {};
              b = e.entityID;
              var h = e.entityType,
                i = e.loggingInfo,
                j = e.stsDirectNavEntityID,
                k = e.stsDirectNavType,
                l = e.stsDisambiguationType,
                m = e.stsHighConfidenceID;
              e = e.stsHighConfidenceSource;
              b = new (c("CometTypeaheadDataEntryWithMetaData"))({
                key: a.getKey(),
                label: a.getLabel(),
                metaData: {
                  logging: {
                    entityID: b,
                    entityType: h,
                    loggingInfo: i,
                    stsDirectNavEntityID: j,
                    stsDirectNavType: k,
                    stsDisambiguationType: l,
                    stsHighConfidenceID: m,
                    stsHighConfidenceSource: e,
                  },
                  markers: g,
                },
                rawData: a.getRawData(),
              });
              d.addRecentEntry(b);
              f && f(a);
            },
            [f]
          ),
          q = i(
            function (a) {
              d.removeRecentEntry(a, {
                onBeforeCommitMutation: function () {
                  n({ source: "cache" });
                },
              });
            },
            [n]
          ),
          r = l(
            function () {
              return { dispatchRemoveRecentEntry: q };
            },
            [q]
          );
        return h.jsx(
          c("CometSearchRecentDataSourceDispatcherContext").Provider,
          {
            value: r,
            children: h.jsx(
              a,
              babelHelpers["extends"]({}, b, {
                onPressEntry: p,
                onSelectFreeformQuery: m,
                ref: e,
              })
            ),
          }
        );
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometSearchRecentDataSourceContextDecorator",
  ["cometWithRecentDataSourceContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      return h(
        function () {
          return {
            decorate: function () {
              return c("cometWithRecentDataSourceContext").apply(
                void 0,
                arguments
              );
            },
            params: { dataSource: a },
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
  "useSearchCometRecentSearchDataSource",
  [
    "CometRelay",
    "CometSearchRecentDataSource",
    "CometSearchRecentDataSource.query",
    "WebPixelRatio",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo,
      i = 16;
    function a(a) {
      var b = a.fetchSTS,
        e = b === void 0 ? !1 : b,
        f = a.filter,
        g = a.searchScopeEntityID,
        j = d("CometRelay").useRelayEnvironment();
      return h(
        function () {
          return new (c("CometSearchRecentDataSource"))({
            gqlQuery: d("CometSearchRecentDataSource.query").query,
            limit: i,
            normalize: d("CometSearchRecentDataSource.query").normalize,
            queryVariablesBuilderFunction: function () {
              return {
                fetch_sts: e,
                filter: f,
                first: i,
                scale: d("WebPixelRatio").get(),
                search_scope_entity_id: g,
              };
            },
            relayEnvironment: j,
          });
        },
        [e, f, j, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchTypeaheadLoggingSessionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744357");
    c = b("FalcoLoggerInternal").create("search_typeahead_logging_session", a);
    e.exports = c;
  },
  null
);
__d(
  "cometSearchTypeaheadFalcoLoggingSessionLogBuilder",
  [
    "SearchCometTypeaheadLoggingConfig",
    "SearchTypeaheadLoggingSessionFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return function (d) {
        var e = h(a, b, d);
        c("SearchTypeaheadLoggingSessionFalcoEvent").logImmediately(
          function () {
            return { session: e };
          }
        );
      };
    }
    function h(a, b, c) {
      var e = c.endTimeMs,
        f = c.events,
        g = c.sessionID;
      c = c.startTimeMs;
      var h = f.filter(function (a, b) {
        return (
          b <
            Math.floor(
              d("SearchCometTypeaheadLoggingConfig").max_events_to_log / 2
            ) ||
          b >=
            f.length -
              Math.ceil(
                d("SearchCometTypeaheadLoggingConfig").max_events_to_log / 2
              )
        );
      });
      return {
        context: a,
        end_time_ms: String(e),
        events: h.map(i),
        scoped_entity_id: b,
        session_id: g,
        start_time_ms: String(c),
      };
    }
    function i(a) {
      var b = a.action,
        c = a.entries,
        d = a.entry,
        e = a.queryString;
      a = a.sequenceID;
      return {
        action_type: b,
        entries: c != null ? c.map(j) : [],
        entry: d != null && c != null ? j(d, c.indexOf(d)) : null,
        query: (b = e) != null ? b : "",
        sequence_id: a,
      };
    }
    function j(a, b) {
      var c,
        d = a.getMetaData();
      return {
        entity_id:
          d == null ? void 0 : (c = d.logging) == null ? void 0 : c.entityID,
        entity_type:
          d == null ? void 0 : (c = d.logging) == null ? void 0 : c.entityType,
        id: a.getKey(),
        index_in_group: String(b),
        label: a.getLabel(),
        logging_id:
          d == null ? void 0 : (c = d.logging) == null ? void 0 : c.loggingID,
        logging_info:
          d == null ? void 0 : (b = d.logging) == null ? void 0 : b.loggingInfo,
        selected_type: String((c = a.getRawData()) == null ? void 0 : c.type),
        sequence_id:
          d == null ? void 0 : (b = d.logging) == null ? void 0 : b.sequenceID,
        source: k(a),
      };
    }
    function k(a) {
      a = a.getMetaData();
      if (a == null) return "backend";
      a = a.markers;
      if (a.has("see_all")) return "escape";
      if (a.has("echo")) return "echo";
      if (a.has("recent")) return "recent_searches";
      return a.has("bootstrap") ? "bootstrap" : "backend";
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometSearchTypeaheadLoggingProvider",
  [
    "CometTypeaheadLoggingProvider",
    "cometSearchTypeaheadFalcoLoggingSessionLogBuilder",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      var b = a.context,
        d = a.onSessionEnd,
        e = a.scopedEntityID;
      return h(
        function () {
          return new (c("CometTypeaheadLoggingProvider"))({
            context: b,
            log: c("cometSearchTypeaheadFalcoLoggingSessionLogBuilder")(b, e),
            onSessionEnd: d,
          });
        },
        [b, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometSearchTypeaheadPayloadDecoratorAddEcho",
  [
    "CometTypeaheadDataEntryWithMetaData",
    "cometDataEntryKeyBuilder",
    "cometTypeaheadMemoizeEntryKey",
    "orEmptyArray",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.keyBuilder,
        d = b === void 0 ? c("cometDataEntryKeyBuilder") : b,
        e = a.limit;
      return function (a) {
        var b = a.entries,
          f = a.params.query;
        b = c("orEmptyArray")(b);
        var g =
            b.find(function (a) {
              return d(a).trim().toLowerCase() === f.trim().toLowerCase();
            }) != null,
          h = [];
        if (!g && b.length < e) {
          g = c("cometTypeaheadMemoizeEntryKey")(f + "-echo");
          g = new (c("CometTypeaheadDataEntryWithMetaData"))({
            key: g,
            label: f,
            metaData: { markers: new Set(["echo"]) },
            rawData: { type: "echo" },
          });
          h.push(g);
        }
        return babelHelpers["extends"]({}, a, { entries: [].concat(b, h) });
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometSearchTypeaheadPayloadDecoratorAddSeeAll",
  [
    "CometTypeaheadDataEntryWithMetaData",
    "cometTypeaheadMemoizeEntryKey",
    "orEmptyArray",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.position;
      return function (a) {
        var d = a.entries,
          e = a.params.query;
        d = c("orEmptyArray")(d);
        var f = c("cometTypeaheadMemoizeEntryKey")(e + "-see_all");
        f = new (c("CometTypeaheadDataEntryWithMetaData"))({
          key: f,
          label: e,
          metaData: { markers: new Set(["see_all"]) },
          rawData: { type: "see_all" },
        });
        e = [];
        switch (b) {
          case "bottom":
            e = [].concat(d, [f]);
            break;
          case "top":
            e = [f].concat(d);
            break;
        }
        return babelHelpers["extends"]({}, a, { entries: e });
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometSearchTypeaheadDecorateMixedPayload",
  [
    "cometSearchTypeaheadPayloadDecoratorAddEcho",
    "cometSearchTypeaheadPayloadDecoratorAddLimit",
    "cometSearchTypeaheadPayloadDecoratorAddSeeAll",
    "cometTypeaheadFetchPayloadDecorate",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d = b.keyBuilder,
        e = b.limit;
      b = b.seeAllPosition;
      b = b === void 0 ? "bottom" : b;
      return c("cometTypeaheadFetchPayloadDecorate")(a, [
        c("cometSearchTypeaheadPayloadDecoratorAddLimit")(e),
        c("cometSearchTypeaheadPayloadDecoratorAddEcho")({
          keyBuilder: d,
          limit: e,
        }),
        c("cometSearchTypeaheadPayloadDecoratorAddSeeAll")({ position: b }),
      ]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometSearchTypeaheadDecorateRecentPayload",
  [
    "cometSearchTypeaheadPayloadDecoratorAddLimit",
    "cometTypeaheadFetchPayloadDecorate",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      b = b.limit;
      return c("cometTypeaheadFetchPayloadDecorate")(a, [
        c("cometSearchTypeaheadPayloadDecoratorAddLimit")(b),
      ]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "searchCometTypeaheadPushErrorToast",
  ["fbt", "cometPushToast"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a() {
      d("cometPushToast").cometPushErrorToast({
        message: h._(
          "Sorry, something went wrong. Please try again at a later time."
        ),
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometSearchTypeaheadEchoViewItem.resolver",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.getMetaData();
      a = a.markers;
      return a.has("echo");
    }
    f["default"] = a;
  },
  66
);
__d(
  "cometSearchTypeaheadKeywordViewItem.resolver",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.getMetaData();
      a = a.markers;
      return a.has("keyword");
    }
    f["default"] = a;
  },
  66
);
__d(
  "cometSearchTypeaheadRecentViewItem.resolver",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.getMetaData();
      a = a.markers;
      return a.has("recent");
    }
    f["default"] = a;
  },
  66
);
__d(
  "cometSearchTypeaheadSeeAllViewItem.resolver",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.getMetaData();
      a = a.markers;
      return a.has("see_all");
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometSearchTypeaheadBaseSurfaceRecentViewItemRemoveButton.react",
  [
    "fbt",
    "ix",
    "TetraIcon.react",
    "fbicon",
    "react",
    "useCometSearchRecentDataSourceDispatcher",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useState;
    function a(a) {
      var b = a.entry;
      a = c("useCometSearchRecentDataSourceDispatcher")();
      var e = a.dispatchRemoveRecentEntry;
      a = l(!1);
      var f = a[0],
        g = a[1];
      a = k(
        function (a) {
          a && a.type !== "press" && a.stopPropagation(), g(!0), e(b);
        },
        [e, b]
      );
      return j.jsx("div", {
        className: "odw8uiq3 jnigpg78",
        children: j.jsx(c("TetraIcon.react"), {
          "aria-label": h._("Delete recent search"),
          color: "secondary",
          disabled: f,
          focusable: !1,
          icon: d("fbicon")._(i("478231"), 12),
          onPress: a,
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
  "CometSearchTypeaheadBaseSurfaceRecentViewItem.react",
  [
    "CometSearchTypeaheadBaseSurfaceRecentViewItemRemoveButton.react",
    "CometTypeaheadFocusLockRegion.react",
    "CometTypeaheadRecentViewItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.entry;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
      return h.jsx(
        c("CometTypeaheadRecentViewItem.react"),
        babelHelpers["extends"]({}, a, {
          entry: b,
          itemEndContent: h.jsx(c("CometTypeaheadFocusLockRegion.react"), {
            children: h.jsx(
              c(
                "CometSearchTypeaheadBaseSurfaceRecentViewItemRemoveButton.react"
              ),
              { entry: b }
            ),
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometSearchHashtagControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/hashtag/{hashtag}/{?explore_tab}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useSearchCometHashtagRouteUrlBuilder",
  [
    "CometRouteParams",
    "XCometSearchHashtagControllerRouteBuilder",
    "react",
    "useSearchCometResultsEntryPointSurface",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      a = a === void 0 ? {} : a;
      a = a.entryPointSurface;
      var b = d("CometRouteParams").useRouteParams(),
        e = b.__tsid__,
        f = c("useSearchCometResultsEntryPointSurface")({
          entryPointSurface: a,
        });
      return h(
        function (a) {
          var b = a.entryPointAction,
            d = a.exploreEntryPoint,
            g = a.groupID,
            h = a.hashtag;
          a = a.typeaheadSessionID;
          h = { hashtag: h };
          a != null
            ? (h.__tsid__ = a)
            : typeof e === "string" && (h.__tsid__ = e);
          b != null && (h.__epa__ = b);
          f != null && (h.__eps__ = f);
          d != null && (h.__eep__ = d);
          g != null && (h.__gid__ = g);
          return c("XCometSearchHashtagControllerRouteBuilder").buildURL(h);
        },
        [e, f]
      );
    }
    g["default"] = a;
  },
  98
);
