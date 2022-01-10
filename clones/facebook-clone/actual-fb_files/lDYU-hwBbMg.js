if (self.CavalryLogger) {
  CavalryLogger.start_js(["2GKgh+u"]);
}

__d(
  "SearchCometFilters_filterTypeSets.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "text",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { plural: !0 },
        name: "SearchCometFilters_filterTypeSets",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: "GraphSearchQueryFilterGroup",
            kind: "LinkedField",
            name: "filters",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "GraphSearchQueryFilter",
                kind: "LinkedField",
                name: "main_filter",
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
                    name: "filter_set_key",
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
                    name: "pill_button_type",
                    storageKey: null,
                  },
                  a,
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "SearchCometFiltersDropdownFilter_filter",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "SearchCometResultsFiltersGroupedToggleFilter_filter",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "SearchCometFiltersToggleFilter_filter",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "WorkGalahadSearchFiltersDropdownFilter_filter",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "EventCometDashboardLeftRailSearchMultiSelectFilter_filter",
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "GraphSearchQueryFilterTypeSet",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "SearchCometFiltersDropdownFilter_filter.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        b = [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "SearchCometFiltersDropdownFilter_filter",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
          a,
          {
            alias: null,
            args: [{ kind: "Literal", name: "first", value: 50 }],
            concreteType: "GraphSearchQueryFilterValuesConnection",
            kind: "LinkedField",
            name: "filter_values",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "GraphSearchQueryFilterValuesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "GraphSearchQueryFilterValue",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: b,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: "filter_values(first:50)",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "search_place_holder",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "custom_value_template",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "GraphSearchQueryFilterValue",
            kind: "LinkedField",
            name: "current_value",
            plural: !1,
            selections: b,
            storageKey: null,
          },
        ],
        type: "GraphSearchQueryFilter",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "SearchCometFiltersToggleFilter_filter.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
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
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "SearchCometFiltersToggleFilter_filter",
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
            args: [{ kind: "Literal", name: "first", value: 50 }],
            concreteType: "GraphSearchQueryFilterValuesConnection",
            kind: "LinkedField",
            name: "filter_values",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "GraphSearchQueryFilterValuesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "GraphSearchQueryFilterValue",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: a,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: "filter_values(first:50)",
          },
          {
            alias: null,
            args: null,
            concreteType: "GraphSearchQueryFilterValue",
            kind: "LinkedField",
            name: "current_value",
            plural: !1,
            selections: a,
            storageKey: null,
          },
        ],
        type: "GraphSearchQueryFilter",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "SearchCometResultsFiltersGroupedToggleFilter_filter.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
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
          kind: "ScalarField",
          name: "value",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "SearchCometResultsFiltersGroupedToggleFilter_filter",
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
            args: [{ kind: "Literal", name: "first", value: 50 }],
            concreteType: "GraphSearchQueryFilterValuesConnection",
            kind: "LinkedField",
            name: "filter_values",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "GraphSearchQueryFilterValuesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "GraphSearchQueryFilterValue",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: a,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: "filter_values(first:50)",
          },
          {
            alias: null,
            args: null,
            concreteType: "GraphSearchQueryFilterValue",
            kind: "LinkedField",
            name: "current_value",
            plural: !1,
            selections: a,
            storageKey: null,
          },
        ],
        type: "GraphSearchQueryFilter",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "SearchCometResultsDefaultEmptyResultsCard.react",
  ["fbt", "NullStateNoResults", "TetraNullState.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx("div", {
        align: "center",
        className: "ssixshrq qmfd67dx pxynge53",
        "data-testid": void 0,
        children: i.jsx(c("TetraNullState.react"), {
          body: h._(
            "Make sure everything is spelled correctly or try different keywords."
          ),
          headline: h._("We didn't find any results"),
          icon: c("NullStateNoResults"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsEmptyResultsCard.react",
  ["NullStateNoResults", "TetraNullState.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.action,
        d = a.body;
      a = a.headline;
      return h.jsx("div", {
        align: "center",
        className: "ssixshrq qmfd67dx pxynge53",
        "data-testid": void 0,
        children: h.jsx(c("TetraNullState.react"), {
          action: b,
          body: d,
          headline: a,
          icon: c("NullStateNoResults"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometGlobalSearchTabs",
  ["fbt", "gkx"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = { label: h._("All"), searchType: "top" };
    b = c("gkx")("1741026")
      ? [a]
      : [
          a,
          { label: h._("Posts"), searchType: "posts" },
          { label: h._("People"), searchType: "people" },
          { label: h._("Photos"), searchType: "photos" },
          { label: h._("Videos"), searchType: "videos" },
          { label: h._("Marketplace"), searchType: "shop" },
          { label: h._("Pages"), searchType: "pages" },
          { label: h._("Places"), searchType: "places" },
          { label: h._("Groups"), searchType: "groups" },
          { label: h._("Events"), searchType: "events" },
        ];
    g["default"] = b;
  },
  98
);
__d(
  "useSearchCometClearFiltersHandler",
  ["SearchCometResultsQueryContext", "react", "useCometRouterDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a() {
      var a = d(
          "SearchCometResultsQueryContext"
        ).useSearchCometResultsQueryContext(),
        b = a.urlBuilder;
      a = d(
        "SearchCometResultsQueryContext"
      ).useSearchCometResultsQueryContext();
      var e = a.query,
        f = c("useCometRouterDispatcher")();
      return h(
        function () {
          if (f == null || e == null) return;
          var a = b({
            entryPointAction: "SERP_NULL_STATE_CLEAR_FILTERS",
            query: e,
          });
          f.go(a, {});
        },
        [f, e, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometHasFilters",
  ["CometRouteParams"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("CometRouteParams").useRouteParams();
      a = a.filters;
      return a != null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometSearchAllOfFacebookHandler",
  [
    "SearchCometResultsQueryContext",
    "react",
    "useCometRouterDispatcher",
    "useSearchCometGlobalSERPRouteUrlBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a() {
      var a = d(
          "SearchCometResultsQueryContext"
        ).useSearchCometResultsQueryContext(),
        b = a.query,
        e = c("useSearchCometGlobalSERPRouteUrlBuilder")(),
        f = c("useCometRouterDispatcher")();
      return h(
        function () {
          if (f == null || b == null) return;
          var a = e({
            entryPointAction: "SERP_NULL_STATE_SEARCH_GLOBAL",
            query: b,
          });
          f.go(a, {});
        },
        [f, e, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsOverFilteredEmptyResultsCard.react",
  [
    "fbt",
    "SearchCometGlobalSearchTabs",
    "SearchCometResultsDefaultEmptyResultsCard.react",
    "SearchCometResultsEmptyResultsCard.react",
    "TetraButton.react",
    "react",
    "recoverableViolation",
    "useSearchCometClearFiltersHandler",
    "useSearchCometHasFilters",
    "useSearchCometSearchAllOfFacebookHandler",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = new Map([
        ["people", h._("We Didn't Find Any People")],
        ["photos", h._("We Didn't Find Any Photos")],
        ["videos", h._("We Didn't Find Any Videos")],
        ["pages", h._("We Didn't Find Any Pages")],
        ["places", h._("We Didn't Find Any Places")],
        ["groups", h._("We Didn't Find Any Groups")],
        ["apps", h._("We Didn't Find Any Apps")],
        ["events", h._("We Didn't Find Any Events")],
        ["posts", h._("We Didn't Find Any Posts")],
        ["links", h._("We Didn't Find Any Links")],
      ]);
    function a(a) {
      var b = a.tab;
      a = c("useSearchCometHasFilters")();
      var d = c("useSearchCometClearFiltersHandler")(),
        e = c("useSearchCometSearchAllOfFacebookHandler")(),
        f =
          b != null
            ? c("SearchCometGlobalSearchTabs").find(function (a) {
                return a.searchType === b;
              })
            : null,
        g = f != null ? j.get(f.searchType) : null;
      f = f == null ? h._("We Didn't Find Anything") : g;
      if (f == null) {
        c("recoverableViolation")(
          "No valid empty state body text found",
          "search"
        );
        return i.jsx(c("SearchCometResultsDefaultEmptyResultsCard.react"), {});
      }
      return i.jsx(c("SearchCometResultsEmptyResultsCard.react"), {
        action: i.jsx(c("TetraButton.react"), {
          label: a ? h._("Clear Filters") : h._("Search All Of Facebook"),
          onPress: a ? d : e,
        }),
        body: a
          ? h._("Try different keywords or remove any filters")
          : h._("Try different keywords or search all of Facebook"),
        headline: f,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometFilterContainer.react",
  ["CometErrorBoundary.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.filter,
        d = a.filterComponentResolver,
        e = a.filterViewID,
        f = a.isFilterSet;
      a = a.pillButtonType;
      return h.jsx(c("CometErrorBoundary.react"), {
        children: h.jsx(d, {
          filter: b,
          filterViewID: e,
          isFilterSet: f,
          pillButtonType: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometFilterRow.react",
  ["TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        d = a.label;
      a = a.testid;
      return h.jsxs("div", {
        className: "kbf60n1y h676nmdw oi9244e8 j83agx80 bp9cbjyn",
        "data-testid": void 0,
        children: [
          h.jsx("div", {
            className: "hzawbc8m rv4hoivh o5zgeu5y buofh1pr",
            children: h.jsx(c("TetraText.react"), {
              numberOfLines: 2,
              type: "body3",
              children: d,
            }),
          }),
          h.jsx("div", {
            className: "jgsskzai bkfpd7mw j83agx80",
            children: b,
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
  "SearchCometFiltersUtils",
  ["Base64", "isStringNullOrEmpty", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (a == null || a[0] == null || b == null) return {};
      a = a[0].filters.reduce(function (a, b) {
        b = b.main_filter;
        if (b != null) {
          var d = b.filter_set_key;
          b = b.name;
          if (b != null) {
            d = c("isStringNullOrEmpty")(d) ? b : d;
            a[b] = d;
          }
        }
        return a;
      }, {});
      b = h(b);
      if (b == null) return {};
      var d = {},
        e = Object.keys(b);
      for (var f = 0; f < e.length; f++) {
        var g = e[f],
          i = b[g];
        g = g.replace(/:\d+$/, "");
        var j = a[g];
        d[j] == null && (d[j] = { name: g, value: [] });
        d[j].value.push(i);
      }
      g = {};
      j = Object.keys(d);
      for (var i = 0; i < j.length; i++) {
        e = j[i];
        g[e] = {
          name: d[e].name,
          value:
            d[e].value.length === 1
              ? d[e].value[0]
              : JSON.stringify(d[e].value),
        };
      }
      return g;
    }
    function b(a) {
      var b = {},
        c = Object.keys(a);
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        e = a[e];
        var f = e.name;
        e = e.value;
        var g = [e];
        try {
          e = JSON.parse(e);
          Array.isArray(e) && (g = e);
        } catch (a) {}
        for (var e = 0; e < g.length; e++) b[f + ":" + e] = g[e];
      }
      return b;
    }
    function h(a) {
      try {
        return JSON.parse(c("Base64").decode(a));
      } catch (a) {
        c("recoverableViolation")("Malformed filters param", "search");
        return null;
      }
    }
    g.buildCurrentFiltersFromParams = a;
    g.buildSearchFiltersParam = b;
    g.decodeFiltersParam = h;
  },
  98
);
__d(
  "SearchCometFilters.react",
  [
    "BaseScrollableArea.react",
    "CometErrorBoundary.react",
    "CometProgressIndicator.react",
    "CometRelay",
    "CometRouteParams",
    "SearchCometFilterContainer.react",
    "SearchCometFiltersContext",
    "SearchCometFiltersUtils",
    "SearchCometFilters_filterTypeSets.graphql",
    "SearchCometResultsQueryContext",
    "SearchCometResultsUIContext",
    "cometUniqueID",
    "cr:1009405",
    "cr:1683142",
    "isStringNullOrEmpty",
    "react",
    "recoverableViolation",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect,
      l = {
        filersDesktop: {
          position: "l9j0dhe7",
          "@media (max-width: 899px)": { display: "hlyrhctz" },
        },
        filersRowMobile: {
          marginEnd: "dlv3wnog",
          marginStart: "rl04r1d5",
          paddingEnd: "hv4rvrfc",
          paddingStart: "dati1w0a",
          paddingTop: "cxgpxx05",
          position: "l9j0dhe7",
          "@media (min-width: 900px)": { display: "en3zacjc" },
        },
        progressIndicatorContainer: {
          display: "j83agx80",
          justifyContent: "taijpn5t",
          paddingTop: "aodizinl",
          paddingEnd: "gl4o1x5y",
          paddingBottom: "ofv0k9yr",
          paddingStart: "lt9micmv",
        },
      };
    function a(a) {
      var e = a.filterComponentResolver,
        f = a.filterTypeSets,
        g = a.hash,
        m = g === void 0 ? "" : g;
      g = a.isLoading;
      a = a.xstyle;
      var n = d("SearchCometFiltersContext").useSearchFiltersDispatcher(),
        o = d("SearchCometFiltersContext").useSearchFiltersState(),
        p = d("CometRouteParams").useRouteParams(),
        q = d(
          "SearchCometResultsQueryContext"
        ).useSearchCometResultsQueryContext(),
        r = q.disableAutocorrect,
        s = q.encryptedQueryFunction,
        t = q.encryptedServerDefinedExperience,
        u = q.navigate,
        v = q.query,
        w = q.searchType,
        x = q.urlBuilder,
        y = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("SearchCometFilters_filterTypeSets.graphql")),
          f
        );
      k(
        function () {
          var a = o.eventQueue.events.pop();
          if (a === "APPLY_FILTERS_EVENT") {
            var e = o.currentFilters;
            if (b("cr:1683142") && b("cr:1009405"))
              b("cr:1683142").go(
                b("cr:1009405").navigateURIWithCurrentFilters(
                  b("cr:1683142").getNextURI(),
                  e
                )
              );
            else if (v == null)
              c("recoverableViolation")(
                "Race condition, apply filters ran before a url builder existed.",
                "search"
              );
            else {
              var f =
                b("cr:1009405") != null
                  ? b("cr:1009405").getFilterParamsFromCurrentFilters
                  : d("SearchCometFiltersUtils").buildSearchFiltersParam;
              f = Object.keys(e).length === 0 ? null : f(e);
              e = x({
                disableAutocorrect: r,
                encryptedQueryFunction: s,
                encryptedServerDefinedExperience: t,
                entryPointAction: "FILTERS",
                filters: f,
                query: v,
                searchType: w,
              });
              u(e);
            }
            n({ type: "APPLY_FILTERS_EVENT_DONE" });
          } else if (a === "INIT_FILTERS_EVENT") {
            b("cr:1683142") && b("cr:1009405")
              ? (f = b("cr:1009405").getFiltersState(
                  b("cr:1683142").getNextURI()
                ))
              : b("cr:1009405")
              ? (f = b("cr:1009405").getFiltersFromBase64FilterString(
                  p.filters == null ? null : String(p.filters)
                ))
              : (f = d("SearchCometFiltersUtils").buildCurrentFiltersFromParams(
                  y,
                  p.filters == null ? null : String(p.filters)
                ));
            n({ type: "INIT_FILTERS_EVENT_DONE", value: f });
          }
        },
        [r, s, t, y, n, o, o.eventQueue, u, v, p.filters, w, x]
      );
      k(
        function () {
          n({ hash: m, type: "SEARCH_QUERY_LOADING" });
        },
        [n, m]
      );
      q = j(c("SearchCometResultsUIContext"));
      f = q.isResponsive;
      if (o.context.filtersCannotExist === !0) return null;
      if (m !== "" && o.filterTypeSetsRequest.hash !== m) return null;
      if (g)
        return i.jsx("div", {
          className: c("stylex")(l.progressIndicatorContainer),
          children: i.jsx(c("CometProgressIndicator.react"), {}),
        });
      if (y == null) return null;
      q = y.filter(Boolean);
      if (q.length === 0) return null;
      g = y[0];
      q = y.slice(1);
      q.length > 0 &&
        c("recoverableViolation")(
          "We only expected one filter type set. To investigate @sahbeewah",
          "search"
        );
      var z = g.filters.reduce(function (a, b) {
        b = b.main_filter;
        if (b != null) {
          var d = b.filter_set_key,
            e = b.id,
            f = b.text;
          if (c("isStringNullOrEmpty")(d)) {
            var g = c("cometUniqueID")();
            a[g] = { filters: [b], text: f };
          } else {
            g = a[d] || { filters: [], id: e, text: f };
            g.filters.push(b);
            a[d] = g;
          }
        }
        return a;
      }, {});
      q = Object.keys(z).map(function (a, b) {
        var d;
        d = (d = z[a]) != null ? d : {};
        d = d.filters;
        var f, g;
        if (d.length > 1) {
          f = a;
          g = !0;
          a = d
            .map(function (a, b) {
              return f != null && a != null
                ? i.jsx(
                    c("SearchCometFilterContainer.react"),
                    {
                      filter: a,
                      filterComponentResolver: e,
                      filterViewID: f,
                      isFilterSet: g,
                      pillButtonType: a.pill_button_type,
                    },
                    b
                  )
                : null;
            })
            .filter(Boolean);
          return i.jsx("div", { children: a }, b);
        }
        a = d[0];
        if (a == null) return null;
        f = a.name;
        g = !1;
        return f == null
          ? null
          : i.jsx(
              c("SearchCometFilterContainer.react"),
              {
                filter: a,
                filterComponentResolver: e,
                filterViewID: f,
                isFilterSet: g,
                pillButtonType: a.pill_button_type,
              },
              b
            );
      });
      if (q.length === 0) return null;
      g = Object.keys(o.currentFilters).length > 0;
      return i.jsx(c("CometErrorBoundary.react"), {
        children: f
          ? i.jsxs(i.Fragment, {
              children: [
                i.jsx(c("BaseScrollableArea.react"), {
                  hideScrollbar: !0,
                  horizontal: !0,
                  testid: void 0,
                  vertical: !1,
                  xstyle: [a, l.filersRowMobile],
                  children: q,
                }),
                i.jsx("div", {
                  className: c("stylex")(a, l.filersDesktop),
                  "data-testid": void 0,
                  children: q,
                }),
              ],
            })
          : i.jsx("div", {
              className: c("stylex")(a),
              "data-testid": void 0,
              children: q,
            }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometFiltersHeader.react",
  [
    "fbt",
    "CometUnitHeader.react",
    "SearchCometFiltersContext",
    "react",
    "useSearchCometClearFiltersHandler",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      var a = d("SearchCometFiltersContext").useSearchFiltersState(),
        b = c("useSearchCometClearFiltersHandler")();
      a =
        (a == null ? void 0 : a.currentFilters) != null &&
        Object.keys(a.currentFilters).length > 0;
      return i.jsx(c("CometUnitHeader.react"), {
        action: a ? h._("Reset") : null,
        actiontestid: "SearchCometFiltersHeader_resetButton",
        hasTopDivider: !0,
        headline: h._("Filters"),
        level: 3,
        onActionPress: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometFiltersDropdownFilter.react",
  [
    "BaseGlimmer.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometTypeaheadDataEntry",
    "MarketplaceUnifiedDropdownFilter.react",
    "SearchCometFiltersContext",
    "SearchCometFiltersDropdownFilter_filter.graphql",
    "SearchCometResultsUIContext",
    "deferredLoadComponent",
    "orEmptyArray",
    "react",
    "requireDeferredForDisplay",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useMemo,
      m = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "SearchCometFiltersTypeaheadFilter.react"
        ).__setRef("SearchCometFiltersDropdownFilter.react")
      ),
      n = "__UNDEFINED__";
    function a(a) {
      var e = a.filter,
        f = a.filterID,
        g = a.filterViewID,
        p = d("SearchCometFiltersContext").useSearchFiltersDispatcher();
      a = d("SearchCometFiltersContext").useSearchFiltersState();
      var q = a.currentFilters;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometFiltersDropdownFilter_filter.graphql")),
        e
      );
      var r = a.current_value;
      e = a.custom_value_template;
      var s = a.filter_values,
        t = a.name,
        u = a.search_place_holder;
      a = a.text;
      s = s == null ? void 0 : s.edges;
      var v = j(
        function (a) {
          if (t == null)
            throw c("unrecoverableViolation")(
              "name unexpectedly became null when onChange was invoked",
              "search"
            );
          else {
            a = a === n ? null : { name: t, value: a };
            p({ filterViewID: g, type: "DROPDOWN_SELECT", value: a });
          }
        },
        [p, g, t]
      );
      if (t == null || s == null || a == null)
        throw c("unrecoverableViolation")(
          "Expected all dropdown filters to have a name, edges, and text",
          "search"
        );
      s = s
        .map(function (a) {
          a = a.node;
          return a == null ? null : o(a);
        })
        .filter(Boolean);
      if (e != null) {
        var w = r != null ? o(r) : null;
        w != null && s.unshift(w);
      }
      w =
        e != null
          ? s
              .map(function (a) {
                var b = a.label;
                a = a.value;
                return b == null || b === ""
                  ? null
                  : new (c("CometTypeaheadDataEntry"))({
                      key: b,
                      label: b,
                      rawData: { name: b, value: (b = a) != null ? b : "" },
                    });
              })
              .filter(Boolean)
          : [];
      var x = s.find(function (a) {
          var b;
          return (
            a != null &&
            ((r == null ? void 0 : r.value) === a.value ||
              ((b = q[g]) == null ? void 0 : b.value) === a.value)
          );
        }),
        y = l(
          function () {
            return x != null && x.label != null && x.value != null
              ? { name: x.label, value: x.value }
              : null;
          },
          [x]
        ),
        z = k(c("SearchCometResultsUIContext"));
      z = z.isResponsive;
      return e != null
        ? i.jsx(c("CometPlaceholder.react"), {
            fallback: i.jsx(c("BaseGlimmer.react"), {
              className: "k4urcfbm datstx6m",
              index: 0,
            }),
            children: i.jsx("div", {
              "data-testid": void 0,
              children: i.jsx(m, {
                customValueTemplate: e,
                entries: c("orEmptyArray")(w),
                filterID: f,
                filterViewID: g,
                label: a,
                placeholder: (e = u) != null ? e : "",
                value: y,
              }),
            }),
          })
        : i.jsx("div", {
            className: "l8hfysis",
            children: i.jsx(c("MarketplaceUnifiedDropdownFilter.react"), {
              isResponsive: z,
              label: (x == null ? void 0 : x.value) != null ? null : a,
              onChange: v,
              options: s,
              selectedLabel: x == null ? void 0 : x.label,
              selectedValue: x == null ? void 0 : x.value,
              testid: void 0,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function o(a) {
      var b = a.text;
      a = a.value;
      return b != null && a != null ? { label: b, value: a } : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometFiltersToggleFilter.react",
  [
    "CometRelay",
    "CometToggle.react",
    "SearchCometFilterRow.react",
    "SearchCometFiltersContext",
    "SearchCometFiltersToggleFilter_filter.graphql",
    "TetraButton.react",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.filter,
        f = a.filterViewID;
      a = a.isResponsiveTop;
      a = a === void 0 ? !1 : a;
      var g = d("SearchCometFiltersContext").useSearchFiltersDispatcher(),
        j = d("SearchCometFiltersContext").useSearchFiltersState();
      j = j.currentFilters;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometFiltersToggleFilter_filter.graphql")),
        e
      );
      var k = e.current_value,
        l = e.filter_values,
        m = e.name;
      e = l == null ? void 0 : l.edges[0].node;
      if (e == null) {
        c("recoverableViolation")(
          "Expected all filters to have a node",
          "search"
        );
        return null;
      }
      l = e.text;
      var n = e.value;
      if (m == null || l == null || n == null) {
        c("recoverableViolation")(
          "Expected all filters to have a name, title and value",
          "search"
        );
        return null;
      }
      var o =
        (k == null ? void 0 : k.value) === n ||
        ((e = j[f]) == null ? void 0 : e.value) === n;
      return a
        ? i.jsx(c("TetraButton.react"), {
            "aria-label": l,
            label: l,
            onPress: function () {
              g({
                filterViewID: f,
                type: "TOGGLE_CHECKBOX_VALUE",
                value: o ? null : { name: m, value: n },
              });
            },
            reduceEmphasis: o,
            type: o ? "primary" : "secondary",
          })
        : i.jsx(c("SearchCometFilterRow.react"), {
            label: l,
            testid: void 0,
            children: i.jsx(c("CometToggle.react"), {
              onClick: function () {
                g({
                  filterViewID: f,
                  type: "TOGGLE_CHECKBOX_VALUE",
                  value: o ? null : { name: m, value: n },
                });
              },
              size: "small",
              testid: void 0,
              value: Boolean(o),
              children: l,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsFiltersGroupedToggleFilter.react",
  [
    "CometRelay",
    "CometToggle.react",
    "SearchCometFilterRow.react",
    "SearchCometFiltersContext",
    "SearchCometResultsFiltersGroupedToggleFilter_filter.graphql",
    "react",
    "unrecoverableViolation",
    "useNullthrowsViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback;
    function a(a) {
      var e = a.filter,
        f = a.filterViewID,
        g = d("SearchCometFiltersContext").useSearchFiltersDispatcher();
      a = d("SearchCometFiltersContext").useSearchFiltersState();
      a = a.currentFilters;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "SearchCometResultsFiltersGroupedToggleFilter_filter.graphql"
            )),
        e
      );
      var k = e.current_value,
        l = e.filter_values,
        m = e.name;
      e = c("useNullthrowsViolation")(
        l == null ? void 0 : l.edges[0].node,
        "Expected all filters to have a node"
      );
      l = e.text;
      var n = e.value;
      if (m == null || l == null || n == null)
        throw c("unrecoverableViolation")(
          "Expected all filters to have a name, title and value",
          "search"
        );
      var o =
        (k == null ? void 0 : k.value) === n ||
        ((e = a[f]) == null ? void 0 : e.value) === n;
      k = j(
        function () {
          !o
            ? g({
                filterViewID: f,
                type: "TOGGLE_RADIO_VALUE",
                value: { name: m, value: n },
              })
            : g({ filterViewID: f, type: "TOGGLE_RADIO_VALUE", value: null });
        },
        [g, f, o, m, n]
      );
      return i.jsx(c("SearchCometFilterRow.react"), {
        label: l,
        children: i.jsx(c("CometToggle.react"), {
          onClick: k,
          size: "small",
          value: Boolean(o),
          children: l,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometMarketplaceLocationlessSearchControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/marketplace/search/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometResultsTabToDeepLinkURI",
  ["XCometMarketplaceLocationlessSearchControllerRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = new Map([
      [
        "shop",
        function (a) {
          return c(
            "XCometMarketplaceLocationlessSearchControllerRouteBuilder"
          ).buildURL({ query: a });
        },
      ],
    ]);
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometDefaultFilterComponentResolver.react",
  [
    "SearchCometFiltersDropdownFilter.react",
    "SearchCometFiltersToggleFilter.react",
    "SearchCometResultsFiltersGroupedToggleFilter.react",
    "SearchCometResultsUIContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var b = a.filter,
        d = a.filterViewID,
        e = a.isFilterSet;
      a = a.pillButtonType;
      var f = i(c("SearchCometResultsUIContext"));
      f = f.isResponsive;
      var g = { left: null, top: null };
      switch (a) {
        case "CHOICE":
          a = h.jsx(c("SearchCometFiltersDropdownFilter.react"), {
            filter: b,
            filterID: (a = b == null ? void 0 : b.id) != null ? a : "",
            filterViewID: d,
          });
          g = { left: a, top: a };
          break;
        case "TOGGLE":
          a = h.jsx(c("SearchCometResultsFiltersGroupedToggleFilter.react"), {
            filter: b,
            filterViewID: d,
          });
          g = e
            ? { left: a, top: a }
            : {
                left: h.jsx(c("SearchCometFiltersToggleFilter.react"), {
                  filter: b,
                  filterViewID: d,
                }),
                top: h.jsx(c("SearchCometFiltersToggleFilter.react"), {
                  filter: b,
                  filterViewID: d,
                  isResponsiveTop: !0,
                }),
              };
          break;
      }
      return f
        ? h.jsxs(h.Fragment, {
            children: [
              h.jsx("div", {
                className: "hlyrhctz l8hfysis knvmm38d qzhwtbm6",
                children: g.left,
              }),
              h.jsx("div", {
                className:
                  "en3zacjc l9j0dhe7 b3onmgus ph5uu5jm d2edcug0 pfnyh3mw cbu4d94t j83agx80",
                children: g.top,
              }),
            ],
          })
        : h.jsx("div", {
            className: "l8hfysis knvmm38d qzhwtbm6",
            children: g.left,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometTabItem.react",
  [
    "SearchCometResultsQueryContext",
    "SearchCometResultsTabToDeepLinkURI",
    "TetraAccessoryListCell.react",
    "TetraText.react",
    "gkx",
    "react",
    "useRoutePassthroughProps",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b,
        e = a.href,
        f = a.icon,
        g = a.label,
        i = a.query;
      a = a.searchType;
      var j = d(
        "SearchCometResultsQueryContext"
      ).useSearchCometResultsQueryContext();
      j = j.searchType;
      j = a === j;
      a = c("SearchCometResultsTabToDeepLinkURI").get(a);
      b =
        (b = c("useRoutePassthroughProps")()) == null
          ? void 0
          : b.intercept_config;
      return h.jsx(c("TetraAccessoryListCell.react"), {
        addOnPrimary: {
          color: j ? "blue" : "gray",
          icon: f,
          size: 36,
          type: "contained-icon",
        },
        headline: h.jsx(c("TetraText.react"), {
          type: "headline4",
          children: g,
        }),
        level: 4,
        linkProps: {
          passthroughProps: { intercept_config: b },
          routeTarget: "self",
          url: a != null ? a(i) : e,
        },
        selected: j,
        selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "searchCometTabIconBySearchType",
  ["ix", "fbicon", "recoverableViolation"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {
        apps: d("fbicon")._(h("492685"), 20),
        events: d("fbicon")._(h("875292"), 20),
        group_posts: d("fbicon")._(h("482255"), 20),
        groups: d("fbicon")._(h("485091"), 20),
        groups_home: d("fbicon")._(h("647441"), 20),
        links: d("fbicon")._(h("481761"), 20),
        pages: d("fbicon")._(h("490492"), 20),
        people: d("fbicon")._(h("487558"), 20),
        photos: d("fbicon")._(h("481799"), 20),
        places: d("fbicon")._(h("481942"), 20),
        posts: d("fbicon")._(h("482255"), 20),
        shop: d("fbicon")._(h("543729"), 20),
        top: d("fbicon")._(h("647441"), 20),
        videos: d("fbicon")._(h("507226"), 20),
      },
      j = i.top;
    function a(a) {
      var b = i[a];
      b == null &&
        c("recoverableViolation")(
          'Undefined icon for SERP tab with searchType "' + a + '"',
          "search"
        );
      return (a = b) != null ? a : j;
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsTabs.react",
  [
    "CometUnit.react",
    "SearchCometDefaultFilterComponentResolver.react",
    "SearchCometFilters.react",
    "SearchCometFiltersContext",
    "SearchCometFiltersHeader.react",
    "SearchCometResultsQueryContext",
    "SearchCometTabItem.react",
    "react",
    "searchCometTabIconBySearchType",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect,
      j = {
        filters: {
          marginBottom: "dicw6rsg",
          marginEnd: "oi9244e8",
          marginStart: "lwwyvkzy",
          marginTop: "qjjbsfad",
        },
      };
    function a(a) {
      var b = a.query;
      a = a.tabs;
      var e = d(
          "SearchCometResultsQueryContext"
        ).useSearchCometResultsQueryContext(),
        f = e.searchType,
        g = d("SearchCometFiltersContext").useSearchFiltersDispatcher();
      i(
        function () {
          f == null && g({ type: "RESET_HASH" });
        },
        [f, g]
      );
      e = d("SearchCometFiltersContext").useSearchFiltersState();
      e = e.filterTypeSetsRequest;
      if (e == null) return null;
      var l, m;
      for (var n = 0; n < a.length; n++)
        if (a[n].searchType === f) {
          l = a[n];
          m = n;
          break;
        }
      n = m != null ? a.slice(0, m) : a;
      a = m != null ? a.slice(m + 1, a.length) : [];
      var o = e.filterTypeSets;
      e = e.isLoading;
      return h.jsxs(c("CometUnit.react"), {
        header: h.jsx(c("SearchCometFiltersHeader.react"), {}),
        testid: void 0,
        children: [
          n.length > 0
            ? h.jsx(h.Fragment, {
                children: n.map(function (a) {
                  return k(b, a);
                }),
              })
            : null,
          l != null
            ? h.jsxs(h.Fragment, {
                children: [
                  k(b, l),
                  l != null
                    ? h.jsx(c("SearchCometFilters.react"), {
                        filterComponentResolver: c(
                          "SearchCometDefaultFilterComponentResolver.react"
                        ),
                        filterTypeSets: o,
                        hash: l.searchType,
                        isLoading: e,
                        xstyle: j.filters,
                      })
                    : null,
                ],
              })
            : null,
          a.length > 0
            ? h.jsx(h.Fragment, {
                children: a.map(function (a) {
                  return k(b, a);
                }),
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a, b) {
      return h.jsx(
        c("SearchCometTabItem.react"),
        {
          href: b.href,
          icon: c("searchCometTabIconBySearchType")(b.searchType),
          label: b.label,
          query: a,
          searchType: b.searchType,
        },
        b.searchType
      );
    }
    k.displayName = k.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsTabsPlaceholder.react",
  [
    "fbt",
    "CometListCellGlimmer.react",
    "CometUnit.react",
    "CometUnitHeader.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.numberOfTabs;
      return i.jsx(c("CometUnit.react"), {
        header: i.jsx(c("CometUnitHeader.react"), {
          hasTopDivider: !0,
          headline: h._("Filters"),
          level: 3,
        }),
        children: i.jsx("div", {
          className: "n99xedck",
          children: i.jsx(c("CometListCellGlimmer.react"), {
            imageSize: 36,
            imageStyle: "circle",
            numberOfItems: a,
            paddingHorizontal: 16,
            removeFirstItemPadding: !1,
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
  "CometTypeaheadBaseStaticDataSource",
  [
    "CometTypeaheadDataCacheProvider",
    "CometTypeaheadInMemoryMapDataCache",
    "cometTypeaheadStartsWithMatchBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = a.entries,
          d = a.keyBuilder;
        a = a.matchBuilder;
        a = a === void 0 ? c("cometTypeaheadStartsWithMatchBuilder") : a;
        this.$1 = new (c("CometTypeaheadDataCacheProvider"))({
          cache: new (c("CometTypeaheadInMemoryMapDataCache"))(),
          keyBuilder: d,
          matchBuilder: a,
        });
        this.$1.add(b);
      }
      var b = a.prototype;
      b.fetchCache = function (a) {
        var b = a.query;
        return { entries: this.$1.match(b), params: a };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "useCometTypeaheadStaticDataSource",
  [
    "CometTypeaheadBaseStaticDataSource",
    "cometSearchTypeaheadPayloadDecoratorAddLimit",
    "react",
    "useDeepEqualMemo",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      var b = a.limit;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["limit"]);
      var d = h(
          function () {
            return c("cometSearchTypeaheadPayloadDecoratorAddLimit")(b);
          },
          [b]
        ),
        e = c("useDeepEqualMemo")(a),
        f = h(
          function () {
            return new (c("CometTypeaheadBaseStaticDataSource"))(e);
          },
          [e]
        );
      return h(
        function () {
          return {
            fetchCache: function (a) {
              return d(f.fetchCache(a));
            },
          };
        },
        [f, d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometGlobalSearchRootBase.react",
  [
    "CometContentArea.react",
    "CometRouteParams",
    "SearchCometResults.react",
    "SearchCometResultsContextProviders.react",
    "VideoPlayerLoggingSuboriginContext",
    "getSearchCometResultsQuery",
    "react",
    "unrecoverableViolation",
    "useSearchCometGlobalSERPRouteUrlBuilder",
    "useSearchCometResultsSearchType",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = a.preloadedQueries,
        e = a.resultsLayoutStrategy,
        f = a.rootLayout,
        g = a.rootLayoutStrategyFactory;
      a = a.routeProps;
      var j = d("CometRouteParams").useRouteParams();
      j = c("getSearchCometResultsQuery")(a, j);
      if (j == null)
        throw c("unrecoverableViolation")("Query missing", "search");
      j = c("useSearchCometResultsSearchType")(a);
      j = c("useSearchCometGlobalSERPRouteUrlBuilder")({
        currentSearchType: j,
      });
      var k = i(function () {
        return ["apps", "links", "top"];
      }, []);
      return h.jsx(c("SearchCometResultsContextProviders.react"), {
        routeProps: a,
        searchQueryReference: b.searchQuery,
        tabsWithoutFilters: k,
        urlBuilder: j,
        children: h.jsx(f, {
          hashtagQueryReference: b.hashtagCountQuery,
          routeProps: a,
          children: h.jsx(c("VideoPlayerLoggingSuboriginContext").Provider, {
            value: "results",
            children: h.jsx(c("CometContentArea.react"), {
              hasNoRole: !0,
              children: h.jsx(c("SearchCometResults.react"), {
                resultsLayoutStrategy: e,
                rootLayoutStrategyFactory: g,
                routeProps: a,
                searchQueryReference: b.searchQuery,
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
  "SearchCometGlobalSearchLeftRail.react",
  [
    "fbt",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometPlaceholder.react",
    "SearchCometResultsTabsPlaceholder.react",
    "TetraText.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
    "useMatchViewport",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "SearchCometGlobalSearchTabList.react"
        ).__setRef("SearchCometGlobalSearchLeftRail.react")
      );
    function a(a) {
      a = a.query;
      var b = c("useMatchViewport")("min", "width", 1260);
      b = b
        ? h._("Search Results")
        : h._("Search Results for {search-query}", [
            h._param(
              "search-query",
              i.jsxs(i.Fragment, {
                children: [
                  i.jsx("br", {}),
                  i.jsx(c("TetraText.react"), {
                    color: "secondary",
                    type: "body3",
                    children: a,
                  }),
                ],
              })
            ),
          ]);
      return i.jsx(c("CometLeftRailComponent.react"), {
        header: i.jsx(c("CometLeftRailHeader.react"), { title: b }),
        primaryNav: i.jsx(c("CometPlaceholder.react"), {
          fallback: i.jsx(c("SearchCometResultsTabsPlaceholder.react"), {
            numberOfTabs: 10,
          }),
          children: i.jsx(j, { query: a }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometGlobalSearchRootLayout.react",
  [
    "fbt",
    "CometLeftRailAndMainContentContainer.react",
    "CometRouteParams",
    "SearchCometGlobalSearchLeftRail.react",
    "getSearchCometResultsQuery",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.children;
      a = a.routeProps;
      var e = d("CometRouteParams").useRouteParams();
      a = c("getSearchCometResultsQuery")(a, e);
      if (a == null)
        throw c("unrecoverableViolation")("Query missing", "search");
      return i.jsx(c("CometLeftRailAndMainContentContainer.react"), {
        leftRailContent: i.jsx(c("SearchCometGlobalSearchLeftRail.react"), {
          query: a,
        }),
        leftRailHeading: h._("Result Filters"),
        leftRailRole: "region",
        mainContent: b,
        mainContentHeading: h._("Search Results"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometGlobalSearchDefaultTabRoot.react",
  [
    "SearchCometGlobalSearchRootBase.react",
    "SearchCometGlobalSearchRootLayout.react",
    "SearchCometResultsColumnResultsLayoutStrategy.react",
    "SearchCometResultsColumnRootLayoutStrategy.react",
    "SearchCometResultsDefaultEmptyResultsCard.react",
    "SearchCometResultsOverFilteredEmptyResultsCard.react",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.props.routeProps;
      a = a.queries;
      var d = i(
        function (a) {
          var d = a.resultContent;
          a = a.sessionID;
          return h.jsx(
            c("SearchCometResultsColumnRootLayoutStrategy.react"),
            {
              emptyResultsCard: c("gkx")("1214686")
                ? h.jsx(
                    c("SearchCometResultsOverFilteredEmptyResultsCard.react"),
                    { tab: b.default_search_type }
                  )
                : h.jsx(
                    c("SearchCometResultsDefaultEmptyResultsCard.react"),
                    {}
                  ),
              layoutProps: {
                beforeResultContent: null,
                rightRail: null,
                singleColumnWidth: "wide",
              },
              resultContent: d,
            },
            a
          );
        },
        [b.default_search_type]
      );
      return h.jsx(c("SearchCometGlobalSearchRootBase.react"), {
        preloadedQueries: a,
        resultsLayoutStrategy: c(
          "SearchCometResultsColumnResultsLayoutStrategy.react"
        ),
        rootLayout: c("SearchCometGlobalSearchRootLayout.react"),
        rootLayoutStrategyFactory: d,
        routeProps: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometGlobalTypeaheadEntityBootstrapIfAvailable",
  ["CometRelay", "ifRequired"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("CometRelay").useRelayEnvironment();
      return {
        getParamsForQuery: function (b) {
          var d;
          c("ifRequired")(
            "CometSearchBootstrapEntitiesDataSource",
            function (b) {
              d = b.getInstance({ relayEnvironment: a });
            }
          );
          if (d == null || !d.isBootstrapped()) return null;
          var e;
          c("ifRequired")(
            "getSearchCometGlobalTypeaheadBootstrapEntityModuleParams",
            function (a) {
              e = a(d, b);
            }
          );
          return e;
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometGlobalSearchTabList.react",
  [
    "SearchCometGlobalSearchTabs",
    "SearchCometResultsQueryContext",
    "SearchCometResultsTabs.react",
    "react",
    "useSearchCometGlobalTypeaheadEntityBootstrapIfAvailable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = a.query;
      a = d(
        "SearchCometResultsQueryContext"
      ).useSearchCometResultsQueryContext();
      var e = a.urlBuilder;
      a = c("useSearchCometGlobalTypeaheadEntityBootstrapIfAvailable")();
      var f = a.getParamsForQuery;
      a = i(
        function () {
          return c("SearchCometGlobalSearchTabs").map(function (a) {
            var c;
            c = a.searchType === "top" ? ((c = f(b)) != null ? c : {}) : {};
            var d = c.highConfidenceResult,
              g = c.preloadedEntityIDs;
            c = c.preloadedEntityType;
            return babelHelpers["extends"]({}, a, {
              href: e({
                entryPointAction: "SERP_TAB",
                highConfidenceResult: d,
                preloadedEntityIDs: g,
                preloadedEntityType: c,
                query: b,
                searchType: a.searchType,
              }),
            });
          });
        },
        [f, b, e]
      );
      return h.jsx(c("SearchCometResultsTabs.react"), { query: b, tabs: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
