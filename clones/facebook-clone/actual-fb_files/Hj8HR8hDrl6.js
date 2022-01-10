if (self.CavalryLogger) {
  CavalryLogger.start_js(["EAoXW5M"]);
}

__d(
  "SearchCometResultsInitialResultsQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4808606569154020",
        metadata: {},
        name: "SearchCometResultsInitialResultsQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometInfoBoxQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5272001469538950",
        metadata: {},
        name: "SearchCometInfoBoxQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "searchCometEncodeQuery",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return encodeURIComponent(a.trim())
        .replace(/!/g, "%21")
        .replace(/\'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A")
        .replace(/~/g, "%7E")
        .replace(/%20/g, "+");
    }
    f["default"] = a;
  },
  66
);
__d(
  "SearchCometResultsDefaultQueryVariables",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { count: 5 };
    f["default"] = a;
  },
  66
);
__d(
  "SearchCometResultsBase.entrypoint",
  [
    "Base64",
    "SearchCometInfoBoxQuery$Parameters",
    "SearchCometResultsDefaultQueryVariables",
    "SearchCometResultsInitialResultsQuery$Parameters",
    "WebPixelRatio",
    "orEmptyArray",
    "searchCometEncodeQuery",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.passthroughProps,
        e = a.routeParams,
        f = a.routeProps,
        g = f.callsite,
        k = f.decrypted_bqf_title,
        l = f.encoded_server_defined_params,
        m = f.entity_id,
        n = f.experience_type,
        o = f.fetch_filters,
        p = f.has_info_box;
      f = f.render_location;
      a = a.timeSpentMetaData;
      var q = e.__hcr__,
        r = e.__pei__,
        s = e.__pet__,
        t = e.__stsd__,
        u = e.__tsid__,
        v = e.filters,
        w = e.q,
        x = e.spell,
        y = e.watch_config;
      a =
        a == null
          ? void 0
          : (a = a.session_ids) == null
          ? void 0
          : a.search_sid;
      w = typeof w === "string" ? w : null;
      if (k != null) {
        var z;
        w = (z = w) != null ? z : k;
      } else e.hashtag != null && (w = "#" + e.hashtag);
      z = typeof u === "string" ? String(u) : null;
      k = x === "1";
      u = {};
      if (v != null) {
        u = (x = h(v)) != null ? x : {};
      }
      v = i(u);
      x = null;
      if (r != null)
        try {
          x = JSON.parse(c("Base64").decode(r));
        } catch (a) {}
      u = null;
      if (s != null)
        try {
          u = JSON.parse(c("Base64").decode(s)).toUpperCase();
        } catch (a) {}
      r = null;
      if (q != null)
        try {
          s = JSON.parse(c("Base64").decode(q));
          r = { id: s.id, source: s.source };
        } catch (a) {}
      q = null;
      if (t != null)
        try {
          q = JSON.parse(c("Base64").decode(t));
        } catch (a) {}
      s = null;
      if (y != null)
        try {
          t = JSON.parse(c("Base64").decode(y));
          s = { watch_serp_type: t.watch_serp_type };
        } catch (a) {}
      y = n;
      t = g === "COMET_GLOBAL_SEARCH" && y === "GLOBAL_SEARCH";
      n = t ? 2 : 0;
      l = { encoded_server_defined_params: l, fbid: m, type: y };
      m =
        x != null && u != null
          ? {
              preloaded_entity_ids: c("orEmptyArray")(x),
              preloaded_entity_type: u,
            }
          : null;
      u = {
        callsite: g,
        config: {
          bootstrap_config: m,
          exact_match: k,
          high_confidence_config: r,
          intercept_config:
            (y = b == null ? void 0 : b.intercept_config) != null ? y : null,
          sts_disambiguation: q,
          watch_config: s,
        },
        context: { bsid: a, tsid: z },
        experience: l,
        filters: v,
        text: (x = w) != null ? x : "",
      };
      g = {
        options: { fetchPolicy: "store-or-network" },
        parameters: c("SearchCometResultsInitialResultsQuery$Parameters"),
        variables: babelHelpers["extends"](
          {},
          c("SearchCometResultsDefaultQueryVariables"),
          {
            allow_streaming: t,
            args: u,
            cursor: null,
            feedbackSource: 23,
            fetch_filters: o,
            renderLocation: f,
            scale: d("WebPixelRatio").get(),
            stream_initial_count: n,
          }
        ),
      };
      m =
        p === !0 && w != null
          ? j({ query: w, routeParams: e, sessionID: a })
          : null;
      return {
        queries:
          m != null ? { infoBoxQuery: m, searchQuery: g } : { searchQuery: g },
      };
    }
    function h(a) {
      try {
        return JSON.parse(c("Base64").decode(a));
      } catch (a) {
        return null;
      }
    }
    function i(a) {
      return Object.keys(a).length === 0
        ? []
        : Object.keys(a).map(function (b) {
            return a[b];
          });
    }
    function j(a) {
      var b = a.query,
        d = a.routeParams;
      a = a.sessionID;
      if (a == null) return null;
      var e = typeof d.debug_ib_kgid === "string" ? d.debug_ib_kgid : null,
        f = null;
      if (d.ib !== null) {
        d = (d = JSON.stringify(d.ib)) != null ? d : "";
        d = JSON.parse(c("Base64").decode(d));
        f = d.kgid;
      }
      f = (d = f) != null ? d : e;
      return {
        options: { fetchPolicy: "store-or-network" },
        parameters: c("SearchCometInfoBoxQuery$Parameters"),
        variables: {
          bqf: "keywords_search(" + c("searchCometEncodeQuery")(b) + ")",
          id: f,
          session_id: a,
          surface: "infobox",
        },
      };
    }
    g.getPreloadProps = a;
  },
  98
);
__d(
  "SearchCometGlobalSearchDefaultTabRoot.entrypoint",
  ["JSResourceForInteraction", "SearchCometResultsBase.entrypoint"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: d("SearchCometResultsBase.entrypoint").getPreloadProps,
      root: c("JSResourceForInteraction")(
        "SearchCometGlobalSearchDefaultTabRoot.react"
      ).__setRef("SearchCometGlobalSearchDefaultTabRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometGlobalSearchPlacesTabRoot.entrypoint",
  ["JSResourceForInteraction", "SearchCometResultsBase.entrypoint"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: d("SearchCometResultsBase.entrypoint").getPreloadProps,
      root: c("JSResourceForInteraction")(
        "SearchCometGlobalSearchPlacesTabRoot.react"
      ).__setRef("SearchCometGlobalSearchPlacesTabRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometGlobalSearchTopTabRoot.entrypoint",
  ["JSResourceForInteraction", "SearchCometResultsBase.entrypoint"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: d("SearchCometResultsBase.entrypoint").getPreloadProps,
      root: c("JSResourceForInteraction")(
        "SearchCometGlobalSearchTopTabRoot.react"
      ).__setRef("SearchCometGlobalSearchTopTabRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
