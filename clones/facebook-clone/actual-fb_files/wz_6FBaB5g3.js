if (self.CavalryLogger) {
  CavalryLogger.start_js(["gsxkyOl"]);
}

__d(
  "FBShopsLegacyUpgradeProductTaggingUtils_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "FBShopsLegacyUpgradeProductTaggingUtils_page",
    };
    e.exports = a;
  },
  null
);
__d(
  "getCometMediaURL_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { kind: "InlineDataFragment", name: "getCometMediaURL_media" };
    e.exports = a;
  },
  null
);
__d(
  "useCometMediaURL_media.graphql",
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
      a = [
        a,
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "owner",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            a,
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "uri_token",
                  storageKey: null,
                },
              ],
              type: "Page",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useCometMediaURL_media",
        selections: [
          {
            kind: "InlineDataFragmentSpread",
            name: "getCometMediaURL_media",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_playable",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: a,
                type: "Photo",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: a,
                type: "Video",
                abstractKey: null,
              },
            ],
          },
        ],
        type: "Media",
        abstractKey: "__isMedia",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNewsfeedKeyCommandWidget",
  ["createKeyCommandWidget"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")();
    g["default"] = a;
  },
  98
);
__d(
  "FBShopsLegacyUpgradeProductTaggingUtils",
  ["CometRelay", "FBShopsLegacyUpgradeProductTaggingUtils_page.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var c, e;
      a = d("CometRelay").readInlineData(
        h !== void 0
          ? h
          : (h = b("FBShopsLegacyUpgradeProductTaggingUtils_page.graphql")),
        a
      );
      var f = a.legacy_shop_upgrade_admin_and_page_eligibility;
      c = ((c = a.friction_gk) == null ? void 0 : c.passes_gk) === !0;
      e = ((e = a.blocking_gk) == null ? void 0 : e.passes_gk) === !0;
      var g =
        f === "PAGE_AND_ADMIN_ELIGIBLE" ||
        f === "PAGE_ELIGIBLE_ADMIN_NOT_ELIGIBLE";
      return !g
        ? {
            adminHasPermissions: !1,
            dialogType: "product_tagging_friction",
            pageID: a.id,
            shouldShowModal: !1,
          }
        : {
            adminHasPermissions: f === "PAGE_AND_ADMIN_ELIGIBLE",
            dialogType: e
              ? "product_tagging_block"
              : "product_tagging_friction",
            pageID: a.id,
            shouldShowModal: c || e,
          };
    }
    g.getProductTaggingLegacyUpgradeStatus = a;
  },
  98
);
__d(
  "CometContentNotAvailable.react",
  [
    "fbt",
    "CometContentArea.react",
    "NullStateGeneral",
    "TetraNullState.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx("div", {
        className: "k4urcfbm taijpn5t bkyfam09 j83agx80 bp9cbjyn",
        children: i.jsx(c("CometContentArea.react"), {
          verticalAlign: "middle",
          children: i.jsx(c("TetraNullState.react"), {
            headline: h._("Sorry, this content isn't available right now"),
            icon: c("NullStateGeneral"),
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
  "useMediaViewerVPVDLogger",
  [
    "CometInteractionSourceContext",
    "WebSession",
    "gkx",
    "react",
    "requireDeferred",
    "useVPVDImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = c("requireDeferred")("CometMediaVpvdFalcoEvent").__setRef(
        "useMediaViewerVPVDLogger"
      );
    function a(a, b) {
      var e = i(c("CometInteractionSourceContext")),
        f = a.authorId,
        g = a.createdTime,
        k = a.fbid,
        l = a.source,
        m = a.storyContainerId;
      b = h(
        function (a) {
          var b, c;
          a.hiddenTime;
          var h = a.visibleDuration;
          a = a.visibleTime;
          if (k == null) return;
          b = (b = l) != null ? b : e;
          var i = {
            a: (c = f) != null ? c : "",
            ct: (c = g) != null ? c : 0,
            d: h,
            i: k,
            s: b,
            si: m,
            sid: d("WebSession").getId(),
            vst: a,
          };
          j.onReady(function (a) {
            a = a.log;
            return a(function () {
              return i;
            });
          });
        },
        [f, g, k, e, l, m]
      );
      return c("useVPVDImpression")({ onVPVDEnd: b });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometPhotoViewerContainerContext",
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
  "CometMediaViewerRightRailUFIGlimmer.react",
  ["BaseGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs("div", {
        className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi kwzhilbh j83agx80",
        children: [
          h.jsx(c("BaseGlimmer.react"), {
            className: "a12rg87m bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",
            index: 1,
          }),
          h.jsx(c("BaseGlimmer.react"), {
            className: "a12rg87m bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",
            index: 2,
          }),
          h.jsx(c("BaseGlimmer.react"), {
            className: "a12rg87m bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",
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
  "XCometPageVanityNoMediasetPhotoControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/{vanity}/photos/{?set}/{fbid}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometPageVanityPhotoControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/{vanity}/photos/{set}/{fbid}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometPhotoControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/photo/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "getCometMediaURL",
  [
    "CometRelay",
    "XCometPageVanityNoMediasetPhotoControllerRouteBuilder",
    "XCometPageVanityPhotoControllerRouteBuilder",
    "XCometPhotoControllerRouteBuilder",
    "XCometVideoControllerRouteBuilder",
    "getCometMediaURL_media.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, e) {
      var f;
      a = d("CometRelay").readInlineData(
        h !== void 0 ? h : (h = b("getCometMediaURL_media.graphql")),
        a
      );
      var g = a == null ? void 0 : a.id,
        i = (a == null ? void 0 : a.is_playable) === !0;
      f =
        (f =
          a == null ? void 0 : (f = a.owner) == null ? void 0 : f.uri_token) !=
        null
          ? f
          : a == null
          ? void 0
          : (f = a.owner) == null
          ? void 0
          : f.id;
      a =
        (a == null ? void 0 : (a = a.owner) == null ? void 0 : a.__typename) ===
        "Page";
      if (g == null) return null;
      if (i)
        return f == null
          ? null
          : c("XCometVideoControllerRouteBuilder").buildURL({
              page_token: f,
              set: e,
              story_token: g,
            });
      else if (a && f != null)
        if (e != null && e !== "")
          return c("XCometPageVanityPhotoControllerRouteBuilder").buildURL({
            fbid: g,
            set: e,
            vanity: f,
          });
        else
          return c(
            "XCometPageVanityNoMediasetPhotoControllerRouteBuilder"
          ).buildURL({ fbid: g, vanity: f });
      else
        return c("XCometPhotoControllerRouteBuilder").buildURL({
          fbid: g,
          set: e,
        });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometMediaURL",
  ["CometRelay", "getCometMediaURL", "useCometMediaURL_media.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, e) {
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useCometMediaURL_media.graphql")),
        a
      );
      return c("getCometMediaURL")(a, e);
    }
    g["default"] = a;
  },
  98
);
