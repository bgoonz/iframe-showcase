if (self.CavalryLogger) {
  CavalryLogger.start_js(["bHQKjVJ"]);
}

__d(
  "CometFeedFavoritesHeaderQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          concreteType: "SeeFirstMigrationContent",
          kind: "LinkedField",
          name: "see_first_migration_content",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "CometFeedFavoritesHeaderQuery",
              fragmentName: "CometFeedSeeFirstMigrationCard_content",
              fragmentPropName: "content",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "CometFeedFavoritesHeaderQuery",
          selections: a,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "CometFeedFavoritesHeaderQuery",
          selections: a,
        },
        params: {
          id: "3568924353234641",
          metadata: {},
          name: "CometFeedFavoritesHeaderQuery",
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
  "CometFeedFavoritesHeader.react",
  [
    "fbt",
    "ix",
    "CometFeedFavoritesHeaderQuery.graphql",
    "CometRelay",
    "TetraButton.react",
    "TetraText.react",
    "fbicon",
    "react",
    "useCometFeedPreferencesDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a() {
      var a = d("CometRelay").useLazyLoadQuery(
          j !== void 0 ? j : (j = b("CometFeedFavoritesHeaderQuery.graphql")),
          {}
        ),
        e = c("useCometFeedPreferencesDialog")(),
        f = e[0];
      e = e[1];
      return k.jsxs("div", {
        children: [
          k.jsxs("div", {
            className: "oud54xpy j83agx80",
            children: [
              k.jsx("div", {
                className: "pybr56ya buofh1pr",
                children: k.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized3",
                  children: h._("Favorites"),
                }),
              }),
              k.jsx("div", {
                className: "kb5gq1qc",
                children: k.jsx(c("TetraButton.react"), {
                  icon: d("fbicon")._(i("497566"), 16),
                  label: h._("Manage Favorites"),
                  onPress: function () {
                    return f();
                  },
                  onPressIn: e,
                  type: "secondary",
                }),
              }),
              k.jsx("div", {
                className: "kb5gq1qc scb9dxdr",
                children: k.jsx(c("TetraButton.react"), {
                  icon: d("fbicon")._(i("638854"), 16),
                  label: h._("Back"),
                  linkProps: { url: "/" },
                  type: "secondary",
                }),
              }),
            ],
          }),
          k.jsx(d("CometRelay").MatchContainer, {
            match: a == null ? void 0 : a.see_first_migration_content,
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
  "CometFeedMostRecentHeader.react",
  [
    "fbt",
    "CometPressable.react",
    "CometRouteParams",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      var a = d("CometRouteParams").useRouteParams();
      a = a.sk;
      if (a !== "h_chr") return null;
      a = h._("Back to Top Posts");
      return i.jsxs("div", {
        className:
          "a8nywdso ihqw7lf3 rz4wbd8a discj3wi f9o22wc5 oygrvhab ad2k81qe kvgmc6g5 j83agx80 l6v480f0",
        children: [
          i.jsx("div", {
            className: "buofh1pr",
            children: i.jsx(c("TetraText.react"), {
              type: "headlineEmphasized3",
              children: h._("Most Recent"),
            }),
          }),
          i.jsx("div", {
            className: "g5gj957u",
            children: i.jsx(c("CometPressable.react"), {
              display: "inline",
              label: a,
              linkProps: { url: "/" },
              overlayDisabled: !0,
              children: i.jsx(c("TetraText.react"), {
                color: "blueLink",
                type: "body3",
                children: a,
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
  "StoriesRatioBox.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        c = a.height;
      a = a.width;
      c = (c / a) * 100;
      return h.jsx("div", {
        className: "k4urcfbm l9j0dhe7 do00u71z",
        style: { paddingTop: c + "%" },
        children: h.jsx("div", {
          className: "kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 i09qtzwb",
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesConstants",
  ["StoriesGating"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = { DEFAULT_SUSPENSE_CARD_INDEX: -1 };
    b = 9 / 16;
    c = { BANNER_HEIGHT: 42, BOTTOM_MARGIN: 25, COUNT_PER_PAGINATION_FETCH: 9 };
    e = 9;
    f = 2;
    var h = {
        MAX_RATING: 5,
        PADDING_SPACE_PORTION: 0.04,
        STAR_ICON_SIZE: 32,
        STAR_INLINE_PORTION: 0.55,
      },
      i = {
        NETWORK_ONLY: "network-only",
        STORE_OR_NETWORK: "store-or-network",
      };
    d = d("StoriesGating").getTileGridRowLength();
    d = { INITIAL_ROW_COUNT: 3, ITEMS_PER_ROW: d };
    var j = 3e3,
      k = 300,
      l = { COUNT_PER_PAGINATION_FETCH: 10, MAX_REACTIONS_PER_VIEWER: 5 },
      m = 6,
      n = 5,
      o = 13 / 22,
      p = 8 / 19,
      q = {
        CREATION_END_CARD: "creation_end_card",
        EMPTY_BUCKET_ERROR: "empty_bucket_error",
        FRIENDS_STORY_OVERLAY: "friends_story_overlay",
      };
    g.CARD = a;
    g.DEFAULT_ASPECT_RATIO = b;
    g.NavList = c;
    g.NAV_PANE_TOTAL_COUNT = e;
    g.NUMBER_OF_BUCKETS_TO_PREFETCH = f;
    g.RATING_STICKER = h;
    g.RELAY_FETCH_POLICY = i;
    g.TILE_GRID = d;
    g.TIMEOUT_FOR_SERVER_TO_FINISH_WORK = j;
    g.TRANSITION_DURATION_MS = k;
    g.ViewerSheetViewerList = l;
    g.MAX_TILES_TO_SHOW = m;
    g.MAX_TILES_TO_SHOW_BIG = n;
    g.BIG_TILE_ASPECT_RATIO = o;
    g.SKINNY_TILE_ASPECT_RATIO = p;
    g.VIEWER_V3_NULL_STATE = q;
  },
  98
);
