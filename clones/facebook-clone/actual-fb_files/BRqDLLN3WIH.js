if (self.CavalryLogger) {
  CavalryLogger.start_js(["Gc2bljE"]);
}

__d(
  "PagesCometMusicVideosCardContainerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "pageID" },
        b = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        c = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "useDefaultActor",
        },
        d = [{ kind: "Variable", name: "id", variableName: "pageID" }];
      return {
        fragment: {
          argumentDefinitions: [a, b, c],
          kind: "Fragment",
          metadata: null,
          name: "PagesCometMusicVideosCardContainerQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "PagesCometMusicVideosCardRendererContainer_page",
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
          argumentDefinitions: [a, c, b],
          kind: "Operation",
          name: "PagesCometMusicVideosCardContainerQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Literal",
                      name: "supported",
                      value: [
                        "MusicVideosCardRendererForMusicArtistContentPage",
                      ],
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "music_videos_card_renderer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName:
                            "PagesCometMusicVideosCardRendererContainer_page",
                          fragmentName:
                            "PagesCometMusicVideosCardRenderer_musicVideosCardRendererForMusicArtistContentPage",
                          fragmentPropName:
                            "musicVideosCardRendererForMusicArtistContentPage",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MusicVideosCardRendererForMusicArtistContentPage",
                      abstractKey: null,
                    },
                  ],
                  storageKey:
                    'music_videos_card_renderer(supported:["MusicVideosCardRendererForMusicArtistContentPage"])',
                },
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
          id: "3566586226774421",
          metadata: {},
          name: "PagesCometMusicVideosCardContainerQuery",
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
  "PagesCometMusicVideosCardRendererContainer_page.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PagesCometMusicVideosCardRendererContainer_page",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "supported",
              value: ["MusicVideosCardRendererForMusicArtistContentPage"],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "music_videos_card_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "PagesCometMusicVideosCardRendererContainer_page",
                  fragmentName:
                    "PagesCometMusicVideosCardRenderer_musicVideosCardRendererForMusicArtistContentPage",
                  fragmentPropName:
                    "musicVideosCardRendererForMusicArtistContentPage",
                  kind: "ModuleImport",
                },
              ],
              type: "MusicVideosCardRendererForMusicArtistContentPage",
              abstractKey: null,
            },
          ],
          storageKey:
            'music_videos_card_renderer(supported:["MusicVideosCardRendererForMusicArtistContentPage"])',
        },
      ],
      type: "Page",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometMusicVideosCardRendererContainer.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "PagesCometMusicVideosCardRendererContainer_page.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("PagesCometMusicVideosCardRendererContainer_page.graphql")),
        a.page
      );
      a = a == null ? void 0 : a.music_videos_card_renderer;
      return a == null
        ? null
        : i.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: i.jsx(d("CometRelay").MatchContainer, { match: a }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometMusicVideosCardContainer.react",
  [
    "CometRelay",
    "PagesCometMusicVideosCardContainerQuery.graphql",
    "PagesCometMusicVideosCardRendererContainer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").usePreloadedQuery(
        h !== void 0
          ? h
          : (h = b("PagesCometMusicVideosCardContainerQuery.graphql")),
        a.PagesCometMusicVideosCardContainerQueryReference
      );
      a = a == null ? void 0 : a.page;
      return a == null
        ? null
        : i.jsx(c("PagesCometMusicVideosCardRendererContainer.react"), {
            page: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometMusicVideosCardContainerDeferred.react",
  ["deferredLoadComponent", "react", "requireDeferredForDisplay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("deferredLoadComponent")(
      c("requireDeferredForDisplay")(
        "PagesCometMusicVideosCardContainer.react"
      ).__setRef("PagesCometMusicVideosCardContainerDeferred.react")
    );
    g["default"] = a;
  },
  98
);
