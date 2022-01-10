if (self.CavalryLogger) {
  CavalryLogger.start_js(["h4m0C1p"]);
}

__d(
  "CometPublicSearchResultsEmptyResultsCard.react",
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
          body: null,
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
  "PublicSearchRoot.entrypoint",
  ["JSResourceForInteraction", "SearchCometResultsBase.entrypoint"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: d("SearchCometResultsBase.entrypoint").getPreloadProps,
      root: c("JSResourceForInteraction")("PublicSearchRoot.react").__setRef(
        "PublicSearchRoot.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResults.react",
  [
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "SearchCometResultsInitialResults.react"
        ).__setRef("SearchCometResults.react")
      ),
      i = d("react");
    function a(a) {
      var b,
        d = a.resultsLayoutStrategy,
        e = a.rootLayoutStrategyFactory,
        f = a.routeProps;
      a = a.searchQueryReference;
      b = (b = a.variables.args.context) == null ? void 0 : b.bsid;
      if (b == null)
        throw c("unrecoverableViolation")(
          "Search result page session id is missing from timespent metadata",
          "search"
        );
      return e({
        resultContent: i.jsx(h, {
          resultsLayoutStrategy: d,
          routeProps: f,
          searchQueryReference: a,
          sessionID: b,
        }),
        sessionID: b,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsColumnResultsLayoutStrategy.react",
  ["CometSuspenseList.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.children;
      return h.jsx(c("CometSuspenseList.react"), {
        revealOrder: "forwards",
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsCardGlimmer.react",
  [
    "BaseGlimmer.react",
    "BaseLoadingStateElement.react",
    "SearchCometResultsCard.react",
    "TetraAccessoryListCell.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        addOnPrimary: { marginBottom: "oygrvhab", marginTop: "kvgmc6g5" },
        glimmerContent: {
          paddingTop: "discj3wi",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "ihqw7lf3",
          paddingStart: "dati1w0a",
        },
        glimmerInfo: {
          borderTopStartRadius: "dwerhba3",
          borderTopEndRadius: "kgjeooe1",
          borderBottomEndRadius: "kxcb68kb",
          borderBottomStartRadius: "mwvzfrdb",
          height: "bsodd3zb",
          maxWidth: "rgvimh9o",
          width: "o08m72bw",
        },
        glimmerInfoContainer: { paddingTop: "ecm0bbzt" },
        glimmerName: {
          borderTopStartRadius: "dwerhba3",
          borderTopEndRadius: "kgjeooe1",
          borderBottomEndRadius: "kxcb68kb",
          borderBottomStartRadius: "mwvzfrdb",
          height: "cyypbtt7",
          minWidth: "phjedfvl",
          width: "qc8v8me0",
        },
        glimmerNameContainer: { paddingBottom: "e5nlhep0" },
        glimmerPhoto: {
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          height: "cb02d2ww",
          width: "ljni7pan",
        },
      },
      j = 0;
    function a() {
      return h.jsx(
        c("SearchCometResultsCard.react"),
        {
          content: h.jsx(c("BaseLoadingStateElement.react"), {
            xstyle: i.glimmerContent,
            children: h.jsx(c("TetraAccessoryListCell.react"), {
              addOnPrimary: {
                component: h.jsx(c("BaseGlimmer.react"), {
                  className: c("stylex")(i.glimmerPhoto),
                  index: 0,
                }),
                type: "override",
              },
              addOnPrimaryOverrideVerticalStyle: i.addOnPrimary,
              contentHorizontalPadding: 0,
              headline: h.jsx("div", {
                className: c("stylex")(i.glimmerNameContainer),
                children: h.jsx(c("BaseGlimmer.react"), {
                  className: c("stylex")(i.glimmerName),
                  index: 0,
                }),
              }),
              level: 3,
              meta: h.jsx("div", {
                className: c("stylex")(i.glimmerInfoContainer),
                children: h.jsx(c("BaseGlimmer.react"), {
                  className: c("stylex")(i.glimmerInfo),
                  index: 0,
                }),
              }),
              paddingHorizontal: 0,
            }),
          }),
          padding: "none",
        },
        j++
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "searchCometResultsResultReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g() {
      return {
        childResults: [],
        hasIemTriggered: !1,
        hasNoResults: !1,
        isLoading: !0,
        resultRefs: { current: new Map() },
        results: [],
      };
    }
    function a(a) {
      return new Map([[a, g()]]);
    }
    function b(a, b) {
      var c = b.sessionID,
        d = new Map(a);
      switch (b.type) {
        case "UPDATE_RESULT_STATE":
          var e,
            f = b.hasIemTriggered,
            h = b.hasNoResults,
            i = b.isLoading,
            j = b.results;
          d.set(c, {
            childResults:
              ((e = a.get(c)) == null ? void 0 : e.childResults) || [],
            hasIemTriggered: f,
            hasNoResults: h,
            isLoading: i,
            resultRefs: (e = a.get(c)) == null ? void 0 : e.resultRefs,
            resultRefsByIndex:
              (f = a.get(c)) == null ? void 0 : f.resultRefsByIndex,
            results: j,
          });
          break;
        case "UPDATE_RESULT_REFS_BY_INDEX":
          i = ((h = a.get(c)) == null ? void 0 : h.childResults) || [];
          f = ((e = a.get(c)) == null ? void 0 : e.resultRefsByIndex) || {
            current: new Map(),
          };
          j = [];
          h = b.isChildResults;
          e = b.resultRefsByIndex;
          for (
            var e = e.current,
              k = Array.isArray(e),
              l = 0,
              e = k
                ? e
                : e[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var m, n;
            if (k) {
              if (l >= e.length) break;
              n = e[l++];
            } else {
              l = e.next();
              if (l.done) break;
              n = l.value;
            }
            n = n;
            var o = n[0];
            n = n[1];
            f == null ? void 0 : (m = f.current) == null ? void 0 : m.set(o, n);
            h && j.push(String(n.loggingUnitID));
          }
          o = (m = a.get(c)) != null ? m : g();
          d.set(
            c,
            babelHelpers["extends"]({}, o, {
              childResults: i.concat(j),
              resultRefsByIndex: f,
            })
          );
          break;
        case "UPDATE_RESULT_REFS":
          l = ((n = a.get(c)) == null ? void 0 : n.childResults) || [];
          e = ((k = a.get(c)) == null ? void 0 : k.resultRefs) || {
            current: new Map(),
          };
          h = [];
          m = b.isChildResults;
          o = b.resultRefs;
          for (
            var i = o.current,
              j = Array.isArray(i),
              f = 0,
              i = j
                ? i
                : i[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (j) {
              if (f >= i.length) break;
              n = i[f++];
            } else {
              f = i.next();
              if (f.done) break;
              n = f.value;
            }
            k = n;
            b = k[0];
            o = k[1];
            e == null ? void 0 : (n = e.current) == null ? void 0 : n.set(b, o);
            m && h.push(String(b.logging_unit_id));
          }
          n = (k = a.get(c)) != null ? k : g();
          d.set(
            c,
            babelHelpers["extends"]({}, n, {
              childResults: l.concat(h),
              resultRefs: e,
            })
          );
          break;
      }
      return d;
    }
    f.searchCometResultsResultsInitialState = g;
    f.searchCometResultsResultReducerInitialState = a;
    f.searchCometResultsResultReducer = b;
  },
  66
);
__d(
  "SearchCometResultsResultContext",
  [
    "SearchCometResultsQueryContext",
    "react",
    "searchCometResultsResultReducer",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useContext,
      j = e.useReducer,
      k = h.createContext(),
      l = h.createContext();
    f = function (a) {
      var b = a.children;
      a = a.sessionID;
      a = j(
        d("searchCometResultsResultReducer").searchCometResultsResultReducer,
        a,
        d("searchCometResultsResultReducer")
          .searchCometResultsResultReducerInitialState
      );
      var c = a[0];
      a = a[1];
      return h.jsx(k.Provider, {
        value: a,
        children: h.jsx(l.Provider, { value: c, children: b }),
      });
    };
    function a() {
      var a = i(k);
      if (a == null)
        throw c("unrecoverableViolation")(
          "SearchCometResultsResultDispatchContext not setup",
          "search"
        );
      return a;
    }
    function m() {
      var a = d(
        "SearchCometResultsQueryContext"
      ).useSearchCometResultsQueryContext();
      a = a.sessionID;
      var b = i(l);
      if (b == null)
        throw c("unrecoverableViolation")(
          "SearchCometResultsResultStateContext not setup",
          "search"
        );
      b = b.get(a);
      return b == null
        ? d(
            "searchCometResultsResultReducer"
          ).searchCometResultsResultsInitialState()
        : b;
    }
    function b() {
      var a = m();
      return a.results.some(function (a) {
        return ((a = a.node) == null ? void 0 : a.role) === "SEARCH_INTERCEPT";
      });
    }
    g.SearchCometResultsResultContextProvider = f;
    g.useSearchResultsResultDispatcher = a;
    g.useSearchResultsResultState = m;
    g.useSearchResultsIntercepted = b;
  },
  98
);
__d(
  "SearchCometResultsSingleColumnRootLayout.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.content;
      a = a.width;
      return h.jsx("div", {
        className: c("stylex").dedupe(
          { "max-width-1": "d2edcug0", "width-1": "oh7imozk" },
          a === "wide" ? { "width-1": "o7dlgrpb" } : null
        ),
        role: "feed",
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsTwoColumnRootLayout.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.content;
      a = a.sideRail;
      return h.jsxs("div", {
        className: "j83agx80",
        children: [
          h.jsx("div", {
            className: "iahi5gft o7dlgrpb d2edcug0 pfnyh3mw buofh1pr",
            role: "feed",
            children: b,
          }),
          h.jsx("div", {
            className: "i6t7qrcs n5hh3s10 i0u1bx94",
            children: a,
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
  "useSearchCometHasBootstrapEntityModule",
  ["CometRouteParams"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("CometRouteParams").useRouteParams();
      a = a.__pei__;
      return a != null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsColumnRootLayoutStrategy.react",
  [
    "CometPlaceholder.react",
    "CometSuspenseList.react",
    "SearchCometResultsCardGlimmer.react",
    "SearchCometResultsEndOfResultsNotice.react",
    "SearchCometResultsResultContext",
    "SearchCometResultsSingleColumnRootLayout.react",
    "SearchCometResultsTwoColumnRootLayout.react",
    "react",
    "useSearchCometHasBootstrapEntityModule",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.emptyResultsCard,
        e = a.layoutProps;
      a = a.resultContent;
      e = e || {};
      var f = e.beforeResultContent,
        g = e.rightRail;
      e = e.singleColumnWidth;
      var i = d(
          "SearchCometResultsResultContext"
        ).useSearchResultsResultState(),
        j = i.hasNoResults;
      i = i.isLoading;
      var k = d(
          "SearchCometResultsResultContext"
        ).useSearchResultsIntercepted(),
        l = c("useSearchCometHasBootstrapEntityModule")();
      if (j && !l) return b;
      f = h.jsxs(c("CometSuspenseList.react"), {
        revealOrder: "forwards",
        tail: "collapsed",
        children: [
          h.jsx(c("CometPlaceholder.react"), {
            fallback: h.jsx(c("SearchCometResultsCardGlimmer.react"), {}),
            children: k ? null : (b = f) != null ? b : null,
          }),
          !k && j && l
            ? h.jsx(c("SearchCometResultsEndOfResultsNotice.react"), {})
            : null,
          h.jsxs(c("CometPlaceholder.react"), {
            fallback: h.jsx(c("SearchCometResultsCardGlimmer.react"), {}),
            children: [
              a,
              i ? h.jsx(c("SearchCometResultsCardGlimmer.react"), {}) : null,
            ],
          }),
        ],
      });
      return h.jsx("div", {
        className: "fjf4s8hc tu1s4ah4 f7vcsfb0 k3eq2f2k d2edcug0 rq0escxv",
        children:
          !k && g != null
            ? h.jsx(c("SearchCometResultsTwoColumnRootLayout.react"), {
                content: f,
                sideRail: g,
              })
            : h.jsx(c("SearchCometResultsSingleColumnRootLayout.react"), {
                content: f,
                width: e,
              }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometFiltersContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function j(a, b) {
      a === void 0 && (a = { filtersCannotExist: null });
      if (b == null) return a;
      switch (b.type) {
        case "UPDATE_CONTEXT":
          b = b.filtersCannotExist;
          var c = babelHelpers["extends"]({}, a);
          b != null && (c.filtersCannotExist = b);
          return c;
      }
      return a;
    }
    function k(a, b) {
      var c;
      a === void 0 && (a = {});
      if (b == null) return a;
      switch (b.type) {
        case "DROPDOWN_SELECT":
          if (b.value == null) {
            delete a[b.filterViewID];
            return a;
          }
          return babelHelpers["extends"](
            {},
            a,
            ((c = {}), (c[b.filterViewID] = b.value), c)
          );
        case "TOGGLE_CHECKBOX_VALUE":
        case "TOGGLE_RADIO_VALUE":
          if (b.value == null) {
            delete a[b.filterViewID];
            return a;
          }
          return babelHelpers["extends"](
            {},
            a,
            ((c = {}), (c[b.filterViewID] = b.value), c)
          );
        case "INIT_FILTERS_EVENT_DONE":
          return b.value;
        case "SEARCH_QUERY_LOADING":
        case "CLEAR_FILTERS":
          return {};
      }
      return a;
    }
    function l(a, b) {
      a === void 0 && (a = { events: [] });
      if (b == null) return a;
      switch (b.type) {
        case "DROPDOWN_SELECT":
        case "TOGGLE_CHECKBOX_VALUE":
        case "TOGGLE_RADIO_VALUE":
        case "CLEAR_FILTERS":
          return { events: [].concat(a.events, ["APPLY_FILTERS_EVENT"]) };
        case "SEARCH_QUERY_LOADED":
          return { events: [].concat(a.events, ["INIT_FILTERS_EVENT"]) };
        case "APPLY_FILTERS_EVENT_DONE":
        case "INIT_FILTERS_EVENT_DONE":
          return { events: a.events.slice(1) };
      }
      return a;
    }
    function m(a, b) {
      a === void 0 && (a = { filterTypeSets: null, hash: null, isLoading: !0 });
      if (b == null) return a;
      switch (b.type) {
        case "RESET_HASH":
          return babelHelpers["extends"]({}, a, { hash: null });
        case "SEARCH_QUERY_LOADED":
          return babelHelpers["extends"]({}, a, {
            filterTypeSets: b.filterTypeSets,
            isLoading: !1,
          });
        case "SEARCH_QUERY_LOADING":
          return babelHelpers["extends"]({}, a, {
            filterTypeSets: null,
            hash: b.hash,
            isLoading: !0,
          });
      }
      return a;
    }
    function a(a, b) {
      a === void 0 && (a = {});
      return {
        context: j(a.context, b),
        currentFilters: k(a.currentFilters, b),
        eventQueue: l(a.eventQueue, b),
        filterTypeSetsRequest: m(a.filterTypeSetsRequest, b),
      };
    }
    var n = h.createContext(c("emptyFunction")),
      o = h.createContext(a());
    f = function (a) {
      var b = a.children,
        c = a.dispatch;
      a = a.state;
      return h.jsx(n.Provider, {
        value: c,
        children: h.jsx(o.Provider, { value: a, children: b }),
      });
    };
    function b() {
      return i(n);
    }
    function e() {
      return i(o);
    }
    g.reducer = a;
    g.SearchCometFiltersContextProvider = f;
    g.useSearchFiltersDispatcher = b;
    g.useSearchFiltersState = e;
  },
  98
);
__d(
  "SearchCometResultsUIContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ isResponsive: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometSerpPerfContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {};
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "SearchCometSerpSetPerfContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(c("emptyFunction"));
    g["default"] = b;
  },
  98
);
__d(
  "useSearchCometResultsSearchTypeFromURL",
  ["CometRouteParams"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("CometRouteParams").useRouteParams();
      a = a.searchtype;
      a = a != null ? a : null;
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSearchCometResultsSearchType",
  ["useSearchCometResultsSearchTypeFromURL"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = c("useSearchCometResultsSearchTypeFromURL")();
      return (b = (b = b) != null ? b : a.decrypted_search_type) != null
        ? b
        : a.default_search_type;
    }
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsContextProviders.react",
  [
    "CometErrorProjectContext",
    "CometRouteParams",
    "CometSaveLoggingContext",
    "EventCometActionContext",
    "SearchCometFiltersContext",
    "SearchCometResultsQueryContext",
    "SearchCometResultsResultContext",
    "SearchCometResultsUIContext",
    "SearchCometSerpPerfContext",
    "SearchCometSerpSetPerfContext",
    "getSearchCometResultsQuery",
    "react",
    "unrecoverableViolation",
    "useCometTypeaheadNavigate",
    "useEventActionLoggerParams",
    "useSearchCometResultsSearchType",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useMemo,
      k = b.useReducer,
      l = b.useState;
    function a(a) {
      var b = a.children,
        e = a.isResponsive,
        f = a.routeProps,
        g = a.searchQueryReference,
        m = a.tabsWithoutFilters,
        n = a.urlBuilder;
      a = d("CometRouteParams").useRouteParams();
      var o = c("getSearchCometResultsQuery")(f, a);
      if (o == null)
        throw c("unrecoverableViolation")("Query missing", "search");
      var p = (g = g.variables.args.context) == null ? void 0 : g.bsid;
      if (p == null)
        throw c("unrecoverableViolation")(
          "Search result page session id is missing from timespent metadata",
          "search"
        );
      var q = c("useSearchCometResultsSearchType")(f),
        r = c("useCometTypeaheadNavigate")();
      g = a.f;
      var s = a.sde,
        t = typeof g === "string" ? g : null,
        u = typeof s === "string" ? s : null,
        v = a.spell === "1" ? !0 : null;
      g = f.render_location;
      var w = g === "group_serp" ? g : "search_results_page";
      s = j(
        function () {
          return {
            disableAutocorrect: v,
            encryptedQueryFunction: t,
            encryptedServerDefinedExperience: u,
            navigate: r,
            query: o,
            renderLocation: w,
            searchType: q,
            sessionID: p,
            urlBuilder: n,
          };
        },
        [v, t, u, r, o, w, q, p, n]
      );
      var x = j(
        function () {
          return { filtersCannotExist: m != null ? m.includes(q) : null };
        },
        [q, m]
      );
      a = j(function () {
        return {
          surface: "search",
          surfaceGraphQL: "SEARCH",
          surfaceGraphQL_legacy: "search",
        };
      }, []);
      f = k(
        d("SearchCometFiltersContext").reducer,
        d("SearchCometFiltersContext").reducer({ context: x })
      );
      g = f[0];
      var y = f[1];
      i(
        function () {
          y(babelHelpers["extends"]({ type: "UPDATE_CONTEXT" }, x));
        },
        [x]
      );
      f = c("useEventActionLoggerParams")({
        mechanism: "search_results",
        surface: "search",
      });
      f[0];
      f = f[1];
      var z = l({}),
        A = z[0];
      z = z[1];
      var B = j(
        function () {
          return { isResponsive: Boolean(e) };
        },
        [e]
      );
      return h.jsx(c("CometErrorProjectContext").Provider, {
        value: "search",
        children: h.jsx(c("EventCometActionContext").Provider, {
          value: f,
          children: h.jsx(
            d("SearchCometResultsQueryContext")
              .SearchCometResultsQueryContextProvider,
            {
              context: s,
              children: h.jsx(
                d("SearchCometResultsResultContext")
                  .SearchCometResultsResultContextProvider,
                {
                  sessionID: p,
                  children: h.jsx(c("SearchCometSerpPerfContext").Provider, {
                    value: A,
                    children: h.jsx(
                      c("SearchCometSerpSetPerfContext").Provider,
                      {
                        value: z,
                        children: h.jsx(
                          d("SearchCometFiltersContext")
                            .SearchCometFiltersContextProvider,
                          {
                            dispatch: y,
                            state: g,
                            children: h.jsx(
                              c("CometSaveLoggingContext").Provider,
                              {
                                value: a,
                                children: h.jsx(
                                  c("SearchCometResultsUIContext").Provider,
                                  { value: B, children: b }
                                ),
                              }
                            ),
                          }
                        ),
                      }
                    ),
                  }),
                }
              ),
            }
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometPublicSearchControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/public/{q}/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useCometPublicSearchRouteUrlBuilder",
  ["XCometPublicSearchControllerRouteBuilder", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a() {
      return h(function (a) {
        a = a.query;
        return c("XCometPublicSearchControllerRouteBuilder").buildURL({ q: a });
      }, []);
    }
    g["default"] = a;
  },
  98
);
__d(
  "PublicSearchRoot.react",
  [
    "fbt",
    "CometContentArea.react",
    "CometLoggedOutCTA.react",
    "CometPublicSearchResultsEmptyResultsCard.react",
    "SearchCometResults.react",
    "SearchCometResultsColumnResultsLayoutStrategy.react",
    "SearchCometResultsColumnRootLayoutStrategy.react",
    "SearchCometResultsContextProviders.react",
    "TetraText.react",
    "react",
    "useCometPublicSearchRouteUrlBuilder",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback;
    function a(a) {
      var b,
        d = a.props.routeProps;
      a = a.queries;
      var e = c("useCometPublicSearchRouteUrlBuilder")(),
        f = j(function (a) {
          var b = a.resultContent;
          a = a.sessionID;
          return i.jsx(
            c("SearchCometResultsColumnRootLayoutStrategy.react"),
            {
              emptyResultsCard: i.jsx(
                c("CometPublicSearchResultsEmptyResultsCard.react"),
                {}
              ),
              layoutProps: {
                beforeResultContent: null,
                rightRail: null,
                singleColumnWidth: "normal",
              },
              resultContent: b,
            },
            a
          );
        }, []);
      b =
        a == null
          ? void 0
          : (b = a.searchQuery) == null
          ? void 0
          : (b = b.variables) == null
          ? void 0
          : (b = b.args) == null
          ? void 0
          : b.text;
      b =
        b != null && b.length
          ? i.jsx("div", {
              className:
                "oh7imozk dn56xbwz l9j0dhe7 fjf4s8hc qt6c0cv9 f7vcsfb0 jb3vyjys glvd648r d2edcug0 tr9rh885",
              children: i.jsx(c("TetraText.react"), {
                align: "start",
                color: "secondary",
                isSemanticHeading: !0,
                numberOfLines: 1,
                type: "headlineEmphasized2",
                children: h._("People named {search_term}", [
                  h._param("search_term", b),
                ]),
              }),
            })
          : null;
      return i.jsx(c("SearchCometResultsContextProviders.react"), {
        routeProps: d,
        searchQueryReference: a.searchQuery,
        urlBuilder: e,
        children: i.jsxs(c("CometContentArea.react"), {
          children: [
            b,
            i.jsx(c("SearchCometResults.react"), {
              resultsLayoutStrategy: c(
                "SearchCometResultsColumnResultsLayoutStrategy.react"
              ),
              rootLayoutStrategyFactory: f,
              routeProps: d,
              searchQueryReference: a.searchQuery,
            }),
            i.jsx(c("CometLoggedOutCTA.react"), { referrerSurface: 3 }),
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
  "useSearchCometSerpTtbrTracker",
  ["cr:1791501", "cr:1919446", "performanceAbsoluteNow", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useRef;
    function a(a, d) {
      var e = b("cr:1919446") != null ? b("cr:1919446")(d) : null,
        f = i(null);
      return h(
        function (g) {
          if (e == null || d == null || f.current === g) return;
          f.current = g;
          if (g) {
            if (b("cr:1791501")) {
              var h = c("performanceAbsoluteNow")(),
                i = b("cr:1791501").getCurrentVCTraces();
              i.forEach(function (a) {
                a.addMountPoint(g, h, "SearchTTBR");
              });
            }
            e.endTtbr(a);
          }
        },
        [e, a, d]
      );
    }
    g["default"] = a;
  },
  98
);
