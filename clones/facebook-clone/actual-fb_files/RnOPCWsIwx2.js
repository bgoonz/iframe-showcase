if (self.CavalryLogger) {
  CavalryLogger.start_js(["DuiOgVz"]);
}

__d(
  "CometExternalLinkedEntityRenderer_entity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "CometExternalLinkedEntityRenderer_entity",
      selections: [
        {
          alias: null,
          args: [{ kind: "Literal", name: "site", value: "www" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"www")',
        },
      ],
      type: "Entity",
      abstractKey: "__isEntity",
    };
    e.exports = a;
  },
  null
);
__d(
  "MarketplaceCometAutosGating.hybrid",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("gkx")("1261428");
    }
    function b() {
      return c("gkx")("1299673");
    }
    function d() {
      return c("gkx")("1239669");
    }
    function e() {
      return c("gkx")("1707184");
    }
    function f() {
      return c("gkx")("1678238");
    }
    g.canUseCanonicalMakeModelId = a;
    g.canUseCanonicalMakeModelIdForBuyer = b;
    g.showRatingsReviewsOnVEP = d;
    g.isInventoryTabEnabled = e;
    g.enableMotorsSellerPostAsPage = f;
  },
  98
);
__d(
  "CometExternalLinkedEntityRenderer",
  [
    "CometExternalLinkedEntityRenderer_entity.graphql",
    "CometTextContext",
    "CometTextLink.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext;
    h !== void 0
      ? h
      : (h = b("CometExternalLinkedEntityRenderer_entity.graphql"));
    a = function (a, b) {
      var d = j(c("CometTextContext"));
      return b.url == null
        ? a
        : i.jsx(c("CometTextLink.react"), {
            color: "blueLink",
            href: b.url,
            target: "_blank",
            type: (b = d == null ? void 0 : d.type) != null ? b : "bodyLink4",
            children: a,
          });
    };
    g["default"] = a;
  },
  98
);
__d(
  "memoizeByReference",
  ["MemoizationInstrumentation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof WeakMap === "function";
    function a(a, b) {
      b === void 0 && (b = a.name || "unknown");
      var c = h ? new WeakMap() : new Map(),
        e = function (e) {
          var f = d("MemoizationInstrumentation").onFunctionCall(
            "memoizeByReference",
            b
          );
          if (c.has(e)) {
            var g = c.get(e);
            if (g !== void 0) {
              f && f(!0);
              return g[0];
            }
          }
          g = a(e);
          c.set(e, [g]);
          f && f(!1);
          return g;
        };
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getGraphQLEnumSafe",
  ["flipObject", "memoizeByReference"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (b == null) return null;
      a = h(a);
      return !Object.prototype.hasOwnProperty.call(a, b) ? null : a[b];
    }
    var h = c("memoizeByReference")(c("flipObject"));
    g["default"] = a;
  },
  98
);
__d(
  "MarketplacePromotedListingsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1830889");
    c = b("FalcoLoggerInternal").create("marketplace_promoted_listings", a);
    e.exports = c;
  },
  null
);
