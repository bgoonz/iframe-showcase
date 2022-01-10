if (self.CavalryLogger) {
  CavalryLogger.start_js(["GxiGPjU"]);
}

__d(
  "CometAppNavigationTargetedTabBarContentInnerImplQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        b = [a],
        c = [
          { kind: "Literal", name: "environment", value: "COMET" },
          { kind: "Literal", name: "folder_id", value: "PRODUCT" },
        ],
        d = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "bookmark_render_location",
              value: "COMET_TOP_TAB",
            },
          ],
          kind: "ScalarField",
          name: "unread_count",
          storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")',
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "last_used_timestamp",
          storageKey: null,
        },
        f = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          a,
        ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "CometAppNavigationTargetedTabBarContentInnerImplQuery",
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: b,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: c,
                  concreteType: "TabBookmarksConnection",
                  kind: "LinkedField",
                  name: "tab_bookmarks",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "TabBookmarksEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Bookmark",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            d,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "bookmarked_node",
                              plural: !1,
                              selections: b,
                              storageKey: null,
                            },
                            e,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'tab_bookmarks(environment:"COMET",folder_id:"PRODUCT")',
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
          argumentDefinitions: [],
          kind: "Operation",
          name: "CometAppNavigationTargetedTabBarContentInnerImplQuery",
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
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: f,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: c,
                  concreteType: "TabBookmarksConnection",
                  kind: "LinkedField",
                  name: "tab_bookmarks",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "TabBookmarksEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Bookmark",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            d,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "bookmarked_node",
                              plural: !1,
                              selections: f,
                              storageKey: null,
                            },
                            e,
                            a,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'tab_bookmarks(environment:"COMET",folder_id:"PRODUCT")',
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4021346731213641",
          metadata: {},
          name: "CometAppNavigationTargetedTabBarContentInnerImplQuery",
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
  "TabEventsOutline28.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { viewBox: "0 0 28 28", width: "1em", height: "1em" },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M23.5 10V6.75c0-1.241-1.01-2.25-2.25-2.25H6.75A2.253 2.253 0 0 0 4.5 6.75V10h19zm0 11.25V11.5h-19v9.75c0 1.241 1.01 2.25 2.25 2.25h14.5c1.24 0 2.25-1.009 2.25-2.25zM21.25 3A3.755 3.755 0 0 1 25 6.75v14.5A3.755 3.755 0 0 1 21.25 25H6.75A3.755 3.755 0 0 1 3 21.25V6.75A3.755 3.755 0 0 1 6.75 3h14.5zm-9.933 15.482-1.586-1.517a.75.75 0 0 1 .413-1.284l2.202-.314.984-1.954c.254-.507 1.086-.507 1.34 0l.983 1.954 2.202.314a.75.75 0 0 1 .413 1.284l-1.586 1.517.374 2.14a.75.75 0 0 1-1.083.794L14 20.398l-1.974 1.018a.749.749 0 0 1-1.083-.795l.374-2.139zM18.25 6.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h8.5z",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometIconEvents.react",
  ["CometSVGIcon.react", "TabEventsOutline28.svg.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("CometSVGIcon.react"),
        babelHelpers["extends"]({}, a, {
          component: c("TabEventsOutline28.svg.react"),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "TabEventsFilled28.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { viewBox: "0 0 28 28", width: "1em", height: "1em" },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M18.25 8h-8.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5m.521 7.841-1.839 1.782.434 2.513a.75.75 0 0 1-1.086.793L14 19.739l-2.28 1.19a.75.75 0 0 1-1.086-.793l.434-2.513-1.839-1.782a.748.748 0 0 1 .414-1.281l2.547-.367 1.138-2.291c.254-.509 1.09-.509 1.344 0l1.138 2.291 2.547.367a.75.75 0 0 1 .414 1.281M21.25 3H6.75A3.755 3.755 0 0 0 3 6.75v14.5A3.755 3.755 0 0 0 6.75 25h14.5A3.755 3.755 0 0 0 25 21.25V6.75A3.755 3.755 0 0 0 21.25 3",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometIconEventsFilled.react",
  ["CometSVGIcon.react", "TabEventsFilled28.svg.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("CometSVGIcon.react"),
        babelHelpers["extends"]({}, a, {
          component: c("TabEventsFilled28.svg.react"),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "TabJobsOutline28.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { viewBox: "0 0 28 28", width: "1em", height: "1em" },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M2.5 8.988A1.49 1.49 0 0 1 3.988 7.5h20.024c.82 0 1.488.667 1.488 1.488v4.226a4.29 4.29 0 0 1-4.285 4.286H15v-1a1 1 0 0 0-2 0v1H6.785A4.29 4.29 0 0 1 2.5 13.214V8.988zM9.5 5c0-.827.74-1.5 1.65-1.5h5.7c.91 0 1.65.673 1.65 1.5v1h-9V5zm15 16.37c0 1.174-.907 2.13-2.022 2.13H5.522c-1.115 0-2.022-.956-2.022-2.13v-3.4A5.75 5.75 0 0 0 6.785 19H13v1a1 1 0 0 0 2 0v-1h6.215a5.75 5.75 0 0 0 3.285-1.03v3.4zm-22.5 0c0 2 1.58 3.63 3.522 3.63h16.956C24.42 25 26 23.371 26 21.37v-4.91c.631-.926 1-2.044 1-3.247V8.988A2.991 2.991 0 0 0 24.012 6H20V5c0-1.655-1.413-3-3.15-3h-5.7C9.413 2 8 3.345 8 5v1H3.988A2.991 2.991 0 0 0 1 8.988v4.226c0 1.203.369 2.321 1 3.247v4.909z",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometIconJobs.react",
  ["CometSVGIcon.react", "TabJobsOutline28.svg.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("CometSVGIcon.react"),
        babelHelpers["extends"]({}, a, {
          component: c("TabJobsOutline28.svg.react"),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "TabJobsFilled28.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { viewBox: "0 0 28 28", width: "1em", height: "1em" },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M16.5 19h4.715A7.244 7.244 0 0 0 26 17.194v4.176c0 2.002-1.58 3.63-3.522 3.63H5.522C3.58 25 2 23.372 2 21.37v-4.176A7.244 7.244 0 0 0 6.785 19H11.5c0 1.378 1.121 2.5 2.5 2.5s2.5-1.122 2.5-2.5zM14 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM9.5 5v1h9V5c0-.176-.04-.343-.102-.5-.227-.581-.832-1-1.548-1h-5.7c-.716 0-1.321.419-1.548 1-.065.159-.1.328-.102.5zM8 6V5c0-.171.023-.336.053-.5C8.305 3.084 9.593 2 11.15 2h5.7c1.557 0 2.845 1.084 3.097 2.5.03.164.053.329.053.5v1h4.012A2.991 2.991 0 0 1 27 8.988v2.726a5.792 5.792 0 0 1-5.785 5.786H16.5V17c0-1.378-1.121-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5v.5H6.785A5.792 5.792 0 0 1 1 11.714V8.988A2.991 2.991 0 0 1 3.988 6H8z",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometIconJobsFilled.react",
  ["CometSVGIcon.react", "TabJobsFilled28.svg.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("CometSVGIcon.react"),
        babelHelpers["extends"]({}, a, {
          component: c("TabJobsFilled28.svg.react"),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometIconNews.react",
  ["CometSVGIcon.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { height: "1em", viewBox: "0 0 28 28", width: "1em" },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                className: "ofq5nk8a",
                d: "M4.973 8c-.854 0-1.75.646-1.919 1.656-.272 1.631.546 8.789 1.044 11.101.22 1.02.855 1.997 1.585 2.514",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
              }),
              h.jsx("path", {
                className: "ofq5nk8a",
                clipRule: "evenodd",
                d: "M8 20.5c0 1.345-.597 3.285-2.317 2.771.76.54 1.67.799 3.089.979 1.968.25 4.428.25 6.642.25 2.214 0 3.69 0 5.658-.25 2.783-.354 4.428-1 4.428-3.5V6a2 2 0 00-2-2H10a2 2 0 00-2 2v14.5z",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
              }),
              h.jsx("path", {
                className: "em6zcovv",
                clipRule: "evenodd",
                d: "M16.75 10.25a3 3 0 11-6 0 3 3 0 016 0zM5.349 15.896a170.9 170.9 0 01-.82-5.646l-.092-.707-.047-.352c-.015-.117-.032-.23-.041-.387a2.823 2.823 0 01.455-1.782c.365-.552.96-.91 1.55-1.079.293-.084.622-.107.823-.127l.694-.061.015-.002a.75.75 0 01.157 1.492c-.461.057-1.038.082-1.307.145a1.405 1.405 0 00-.774.467c-.186.23-.3.542-.303.907l.026 1.394c.046 1.901.063 3.804.045 5.709a.192.192 0 01-.381.029z",
                fillRule: "evenodd",
              }),
              h.jsx("path", {
                className: "em6zcovv",
                clipRule: "evenodd",
                d: "M11.25 17.25h11a.5.5 0 00.5-.5v-.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v.5a.5.5 0 00.5.5zM11.25 20.75h11a.5.5 0 00.5-.5v-.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v.5a.5.5 0 00.5.5z",
                fill: "#231F20",
              }),
            ],
          }
        )
      );
    }
    i.displayName = i.name + " [from " + f.id + "]";
    i._isSVG = !0;
    function a(a) {
      return h.jsx(
        c("CometSVGIcon.react"),
        babelHelpers["extends"]({}, a, { color: "none", component: i })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "TabNewsFilled28.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { viewBox: "0 0 28 28", width: "1em", height: "1em" },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.973 16c0 .276-.225.5-.504.5H10.867a.502.502 0 0 1-.505-.5v-.5c0-.277.226-.5.505-.5h11.602c.279 0 .504.223.504.5v.5zm0 3.5c0 .276-.225.5-.504.5H10.867a.502.502 0 0 1-.505-.5V19c0-.276.226-.5.505-.5h11.602c.279 0 .504.224.504.5v.5zm-9.584-13c1.671 0 3.027 1.343 3.027 3 0 1.656-1.356 3-3.027 3s-3.027-1.344-3.027-3c0-1.657 1.356-3 3.027-3zM7.336 20.25c0 1.282-.81 3.066-2.336 3.503.926.59 1.984.829 3.27.991 2.034.256 4.565.256 6.798.256 2.27 0 3.77 0 5.803-.256C23.353 24.431 26 23.82 26 20.5V5.75C26 4.234 24.755 3 23.226 3H10.11a2.764 2.764 0 0 0-2.767 2.609L7.336 20.25z",
              }),
              h.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.059 15.022a.19.19 0 0 0 .187.162.19.19 0 0 0 .195-.186c.026-1.974.024-3.949-.011-5.921l-.021-1.48c-.02-.437.062-.75.245-1.015a1.34 1.34 0 0 1 .781-.521c.074-.022.171-.038.283-.053 0 0 .282-.084.282.285V19.93c0 .78-.573 2.004-1.435 2.07-.184.007-.39-.081-.558-.253a3.697 3.697 0 0 1-.751-1.176c-.038-.132-.079-.266-.103-.392-.078-.355-.14-.703-.202-1.052a79.368 79.368 0 0 1-.587-4.17c-.16-1.393-.302-2.784-.357-4.211-.008-.36-.013-.723.006-1.105.016-.201.027-.4.078-.634.05-.234.135-.462.25-.675.127-.235.29-.448.478-.634.164-.153.277-.114.326.117a76.52 76.52 0 0 0 .914 7.207z",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometIconNewsFilled.react",
  ["CometSVGIcon.react", "TabNewsFilled28.svg.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("CometSVGIcon.react"),
        babelHelpers["extends"]({}, a, {
          component: c("TabNewsFilled28.svg.react"),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTopNavTargetedTab.react",
  [
    "fbt",
    "CometPassiveGetRouterStateContext",
    "CometPlaceholder.react",
    "CometPressable.react",
    "CometProductAttribution",
    "CometRelay",
    "CometRouteMatch",
    "CometTooltip.react",
    "CometTopNavTabBadge.react",
    "HiddenSubtreePassiveContext",
    "WebSession",
    "getCometEntityKey",
    "getTopMostRoute",
    "qex",
    "react",
    "requireDeferred",
    "stylex",
    "unrecoverableViolation",
    "useCometRoute",
    "useCometRouterState",
    "useShouldPrefetchQueriesBasedOnLastUsedTimestamp",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useRef,
      n = c("requireDeferred")("CometRecordProductUsageMutation").__setRef(
        "CometTopNavTargetedTab.react"
      ),
      o = c("requireDeferred")("CometTopnavItemClickFalcoEvent").__setRef(
        "CometTopNavTargetedTab.react"
      ),
      p = c("requireDeferred")("CometTopnavItemImpressionFalcoEvent").__setRef(
        "CometTopNavTargetedTab.react"
      ),
      q = c("requireDeferred")("logCometTopNavTabPress").__setRef(
        "CometTopNavTargetedTab.react"
      ),
      r = {
        badgeContainer: {
          position: "pmk7jnqg",
          start: "h5g66v2i",
          top: "nezaghv5",
        },
        badgeContainerBottom: {
          position: "pmk7jnqg",
          start: "dnzpfbms",
          top: "daor5o6w",
        },
        hideMore: { display: "mkhogb32" },
        iconContainer: { position: "l9j0dhe7" },
        link: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
          justifyContent: "taijpn5t",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
        linkOverlayPressed: { backgroundColor: "k19f6yf2" },
        linkUnderline: {
          borderBottomColor: "ooq845xs",
          borderBottomStyle: "s44p3ltw",
          borderBottomWidth: "b2mspmbn",
          borderTopEndRadius: "akjuzmll",
          borderTopStartRadius: "bub6lnnc",
          bottom: "i09qtzwb",
          end: "lthxh50u",
          position: "pmk7jnqg",
          start: "tkxwya3v",
          transform: "b5ifovcx",
          transformOrigin: "tt24zdws",
          transitionDuration: "ms05siws",
          transitionProperty: "flx89l3n",
          transitionTimingFunction: "b7h9ocf4",
        },
        linkUnderlineSelected: { transform: "jav28p83" },
        linkWrapper: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          height: "byvelhso",
          position: "l9j0dhe7",
        },
        moreTab: { "@media (min-width: 1100px)": { display: "k5e9hw6w" } },
        tab: {
          flexGrow: "buofh1pr",
          maxWidth: "to382e16",
          minWidth: "o5zgeu5y",
        },
        tab500: { maxWidth: "acodgwtc" },
        tab584: { maxWidth: "qv5dp139" },
        tabHiddenAtLargeViewport: {
          "@media (max-width: 1099px)": { display: "bx45vsiw" },
        },
        tabHiddenAtSmallViewport: {
          "@media (max-width: 700px)": { display: "hw7htvoc" },
        },
        tabResponsive: {
          "@media (min-width: 1100px) and (max-height: 789px), (min-width: 1100px) and (max-width: 1379px)":
            { maxWidth: "jrc8bbd0" },
          "@media (max-width: 1099px)": { maxWidth: "dawyy4b1" },
        },
        tabSpacing: { marginStart: "h676nmdw" },
        tabStyles1: { "@media (max-width: 999px)": { display: "lq0a8jme" } },
        tabStyles2: { "@media (max-width: 899px)": { display: "hlyrhctz" } },
        tabStyles3: { "@media (max-width: 799px)": { display: "sybrdicc" } },
        tabStyles4: { "@media (max-width: 699px)": { display: "hqaqkjpe" } },
        tabStyles5: { "@media (max-width: 599px)": { display: "bbtpyesa" } },
      },
      s = 9;
    e = (e = c("qex")._("1493007")) != null ? e : "red_numbered_badge";
    var t = e === "blue_badge" || e === "red_bottom_badge",
      u = function (a) {
        var b = a.badgeUpdate,
          c = a.badgeValue,
          e = a.navItemId,
          f = a.navItemName,
          g = a.passiveGetRouterState,
          h = a.position;
        a = a.selected;
        return {
          bt: "number",
          bu: (b = b) != null ? b : !1,
          bv: c,
          nii: e,
          nin: f,
          nip: (b = h) != null ? b : -1,
          nit: "tab",
          pa: d(
            "CometProductAttribution"
          ).getMinifiedTopMostRouteProductAttribution(g),
          sel: a,
          si: d("WebSession").getId(),
        };
      };
    function a(a) {
      var b = a.appID,
        e = a.badgeCount,
        f = a.entityMatcherFunction,
        g = a.hideSelected,
        h = a.position,
        n = a.tabKey,
        o = a.url,
        q = c("useCometRouterState")(),
        r = c("useCometRoute")(o),
        s = k(c("HiddenSubtreePassiveContext")),
        t = m(!1),
        w = m(null),
        x = k(c("CometPassiveGetRouterStateContext"));
      if (o == null)
        throw c("unrecoverableViolation")(
          "Must provide a URL to CometTopNavTab",
          "comet_infra"
        );
      var y = q != null ? c("getTopMostRoute")(q) : null,
        z = y ? c("getCometEntityKey")(y) : null;
      q = q != null && (q == null ? void 0 : q.main.route.tabKey) === n;
      var A =
        y != null &&
        (f != null && z != null
          ? f(z)
          : r != null
          ? d("CometRouteMatch").MatchFunctions.routeMatchFunction(r, y)
          : d("CometRouteMatch").MatchFunctions.urlMatchFunction(o, y));
      f = q && g !== !0;
      var B = j(
          function (a) {
            return u({
              badgeUpdate: a,
              badgeValue: String(e),
              navItemId: b,
              navItemName: n,
              passiveGetRouterState: x,
              position: h,
              selected: A,
            });
          },
          [x, e, b, n, h, A]
        ),
        C = m(B);
      l(function () {
        C.current = B;
      });
      z = j(function () {
        return C.current();
      }, []);
      var D = j(
          function (a, b) {
            if (a) return;
            p.onReady(function (a) {
              a.log(function () {
                return B(b);
              });
            });
          },
          [B]
        ),
        E = m(e);
      l(
        function () {
          E.current !== e && D(t.current, !0), (E.current = e);
        },
        [D, e]
      );
      l(
        function () {
          var a = d("WebSession").getId();
          !t.current && a !== w.current && ((w.current = a), D(!1));
          var b = s.subscribeToChanges(function (a) {
            t.current = a.hiddenOrBackgrounded_FIXME;
          });
          return function () {
            return b.remove();
          };
        },
        [D, s]
      );
      r = a.pendingTabKey;
      o = babelHelpers.objectWithoutPropertiesLoose(a, ["pendingTabKey"]);
      return i.jsx(
        v,
        babelHelpers["extends"]({}, o, {
          badgeCount: (y = e) != null ? y : 0,
          getLoggingDataForPress: z,
          isActiveTab: f,
          isPendingTab: r === n,
          selected: A,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var v = i.memo(b);
    function b(a) {
      var b = a.activeIcon,
        e = a.appID,
        f = a.badgeCount,
        g = a.customIcon,
        j = a.getLoggingDataForPress,
        k = a.icon,
        l = a.isActiveTab,
        m = a.isBadgeHidden,
        p = a.isPendingTab,
        u = a.label,
        v = a.lastUsedTimestamp,
        w = a.passthroughProps,
        x = a.position,
        y = a.prefetchQueriesEligible,
        z = a.preload,
        A = a.preventLocalNavigation,
        B = A === void 0 ? !1 : A;
      A = a.responsiveStyle;
      var C = a.selected,
        D = a.setIsPendingTab,
        E = a.tabKey,
        F = a.testid;
      F = a.url;
      y = c("useShouldPrefetchQueriesBasedOnLastUsedTimestamp")(y, v);
      var G = d("CometRelay").useRelayEnvironment();
      v = function () {
        a.onPress && a.onPress(),
          B || D(!0, E),
          o.onReady(function (a) {
            a.log(function () {
              return j();
            });
          }),
          n.onReady(function (a) {
            e != null && a.updateProductUsage(G, e);
          });
      };
      var H = null;
      if (g != null) {
        g = g;
        H = i.jsx(g, { isActive: l });
      } else if (k != null && b != null) {
        g = l ? b : k;
        H = i.jsxs("span", {
          className: c("stylex")(r.iconContainer),
          children: [
            i.jsx(g, { color: l ? "active-tab" : "inactive-tab", size: 28 }),
            i.jsx(c("CometPlaceholder.react"), {
              fallback: i.jsx("span", {}),
              children: i.jsx("span", {
                className: c("stylex")(
                  !t && r.badgeContainer,
                  t && r.badgeContainerBottom
                ),
                children: i.jsx(c("CometTopNavTabBadge.react"), {
                  isBadgeHidden: m,
                  isTab: !0,
                  overflow: s,
                  value: f,
                }),
              }),
            }),
          ],
        });
      }
      b = function () {
        D(!1, E),
          q.onReadyImmediately(function (a) {
            return a(E, f, e);
          });
      };
      k =
        f > 0
          ? h._(
              {
                "*": "{label}, {number} notifications",
                _1: "{label}, 1 notification",
              },
              [h._param("label", u), h._plural(f, "number")]
            )
          : u;
      m = i.jsxs("div", {
        className: c("stylex")(r.linkWrapper),
        children: [
          i.jsx("div", {
            className: c("stylex")(
              r.linkUnderline,
              l && r.linkUnderlineSelected
            ),
          }),
          i.jsx(c("CometPressable.react"), {
            "aria-current": l ? "page" : void 0,
            "aria-label": k,
            display: "inline",
            linkProps: {
              onNavigate: b,
              passthroughProps: w,
              prefetchQueries: y,
              preload: z,
              preventLocalNavigation: B,
              productAttribution: { tap_point: "tap_tabbar" },
              url: (g = F) != null ? g : "#",
            },
            onPress: v,
            overlayDisabled: C,
            overlayFocusVisibleStyle: p ? r.linkOverlayPressed : void 0,
            overlayHoveredStyle: p ? r.linkOverlayPressed : void 0,
            overlayOffset: { bottom: -4, left: 0, right: 0, top: -4 },
            overlayRadius: 8,
            testid: void 0,
            xstyle: r.link,
            children: H,
          }),
        ],
      });
      l =
        A === !0
          ? [
              x != null && x < 4 && r.tabHiddenAtSmallViewport,
              x != null && x === 4 && r.tabHiddenAtLargeViewport,
              E === "more" && r.moreTab,
            ]
          : [
              x != null && x === 0 && r.tabStyles1,
              x != null && x === 1 && r.tabStyles2,
              x != null && x === 2 && r.tabStyles3,
              x != null && x === 3 && r.tabStyles4,
              x != null && x === 4 && r.tabStyles5,
              E === "more" && r.hideMore,
            ];
      k = null;
      switch (c("qex")._("1570039")) {
        case "500":
          k = r.tab500;
          break;
        case "584":
          k = r.tab584;
          break;
      }
      return i.jsx("li", {
        className: c("stylex")(
          r.tab,
          r.tabResponsive,
          k,
          x !== 0 && r.tabSpacing,
          l
        ),
        children: i.jsx(c("CometTooltip.react"), {
          align: "middle",
          tooltip: u,
          children: m,
        }),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometEventsHomeControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/events/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometLoggedInTargetedTabsList",
  [
    "fbt",
    "CometIconEvents.react",
    "CometIconEventsFilled.react",
    "CometIconFeed.react",
    "CometIconFeedFilled.react",
    "CometIconFriends.react",
    "CometIconFriendsFilled.react",
    "CometIconGaming.react",
    "CometIconGamingFilled.react",
    "CometIconGroups.react",
    "CometIconGroupsFilled.react",
    "CometIconJobs.react",
    "CometIconJobsFilled.react",
    "CometIconMarketplace.react",
    "CometIconMarketplaceFilled.react",
    "CometIconMoreFilled.react",
    "CometIconNews.react",
    "CometIconNewsFilled.react",
    "CometIconPages.react",
    "CometIconPagesFilled.react",
    "CometIconPennant.react",
    "CometIconPennantFilled.react",
    "CometIconWatch.react",
    "CometIconWatchFilled.react",
    "FriendingCometFriendRequestSubscriptionHelper",
    "XCometBookmarksControllerRouteBuilder",
    "XCometCampusControllerRouteBuilder",
    "XCometEventsHomeControllerRouteBuilder",
    "XCometFriendingControllerRouteBuilder",
    "XCometGamingControllerRouteBuilder",
    "XCometGroupsTabControllerRouteBuilder",
    "XCometHomeControllerRouteBuilder",
    "XCometJobsControllerRouteBuilder",
    "XCometMarketplaceControllerRouteBuilder",
    "XCometNewsCompassControllerRouteBuilder",
    "XCometPageBrowserControllerRouteBuilder",
    "XCometWatchControllerRouteBuilder",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    d("react");
    a = "4748854339";
    b = "1606854132932955";
    e = "2392950137";
    f = "2361831622";
    var i = "2356318349",
      j = "250100865708545",
      k = "513746992167374",
      l = "2344061033",
      m = "977114232337111",
      n = "2166827706737654",
      o = "137793194318064";
    a = new Map([
      [
        a,
        {
          activeIcon: c("CometIconFeedFilled.react"),
          appID: a,
          entityMatcherFunction: function (a) {
            return a.entity_type === "home" && a.section === "news_feed";
          },
          icon: c("CometIconFeed.react"),
          label: h._("Home"),
          maintain: !0,
          prefetchQueriesEligible: !0,
          tabKey: "home",
          testid: "NewsFeedTabLink",
          url: c("XCometHomeControllerRouteBuilder").buildURL({}),
        },
      ],
      [
        i,
        {
          activeIcon: c("CometIconFriendsFilled.react"),
          appID: i,
          badgeSubscriptionCallback: d(
            "FriendingCometFriendRequestSubscriptionHelper"
          ).setupFriendingSubscription,
          icon: c("CometIconFriends.react"),
          label: h._("Friends"),
          passthroughProps: { ref: "FRIENDING_TAB_OPEN" },
          tabKey: "friends",
          testid: "FriendsCometTabLink",
          url: c("XCometFriendingControllerRouteBuilder").buildURL({}),
        },
      ],
      [
        j,
        {
          activeIcon: c("CometIconPagesFilled.react"),
          appID: j,
          icon: c("CometIconPages.react"),
          label: h._("Pages"),
          tabKey: "pages",
          testid: "PagesCometTabLink",
          url: c("XCometPageBrowserControllerRouteBuilder").buildURL({
            category: "your_pages",
            ref: "bookmarks",
          }),
        },
      ],
      [
        e,
        {
          activeIcon: c("CometIconWatchFilled.react"),
          appID: e,
          icon: c("CometIconWatch.react"),
          label: h._("Watch"),
          prefetchQueriesEligible: !0,
          tabKey: "watch",
          testid: "WatchTabLink",
          url: c("XCometWatchControllerRouteBuilder").buildURL({}),
        },
      ],
      [
        b,
        {
          activeIcon: c("CometIconMarketplaceFilled.react"),
          appID: b,
          icon: c("CometIconMarketplace.react"),
          label: h._("Marketplace"),
          prefetchQueriesEligible: !0,
          tabKey: "marketplace",
          testid: "MarketplaceTabLink",
          url: c("XCometMarketplaceControllerRouteBuilder").buildURL({
            ref: "app_tab",
          }),
        },
      ],
      [
        f,
        {
          activeIcon: c("CometIconGroupsFilled.react"),
          appID: f,
          icon: c("CometIconGroups.react"),
          label: h._("Groups"),
          prefetchQueriesEligible: !0,
          tabKey: "groups",
          testid: "GroupsTabLink",
          url: c("XCometGroupsTabControllerRouteBuilder").buildURL({}),
        },
      ],
      [
        k,
        {
          activeIcon: c("CometIconGamingFilled.react"),
          appID: k,
          icon: c("CometIconGaming.react"),
          label: h._("Gaming"),
          prefetchQueriesEligible: !0,
          tabKey: "gaming",
          testid: "GamingTabLink",
          url: c("XCometGamingControllerRouteBuilder").buildURL({
            ref: "games_tab",
          }),
        },
      ],
      [
        l,
        {
          activeIcon: c("CometIconEventsFilled.react"),
          appID: l,
          icon: c("CometIconEvents.react"),
          label: h._("Events"),
          prefetchQueriesEligible: !0,
          tabKey: "events",
          testid: "EventsTabLink",
          url: c("XCometEventsHomeControllerRouteBuilder").buildURL({}),
        },
      ],
      [
        m,
        {
          activeIcon: c("CometIconJobsFilled.react"),
          appID: m,
          icon: c("CometIconJobs.react"),
          label: h._("Jobs"),
          prefetchQueriesEligible: !0,
          tabKey: "jobs",
          testid: "JobsTabLink",
          url: c("XCometJobsControllerRouteBuilder").buildURL({}),
        },
      ],
      [
        n,
        {
          activeIcon: c("CometIconNewsFilled.react"),
          appID: n,
          icon: c("CometIconNews.react"),
          label: h._("News"),
          prefetchQueriesEligible: !0,
          tabKey: "news",
          testid: "NewsTabLink",
          url: c("XCometNewsCompassControllerRouteBuilder").buildURL({}),
        },
      ],
      [
        o,
        {
          activeIcon: c("CometIconPennantFilled.react"),
          appID: o,
          icon: c("CometIconPennant.react"),
          label: h._("Campus"),
          prefetchQueriesEligible: !0,
          tabKey: "campus",
          testid: "CampusFeedTabLink",
          url: c("XCometCampusControllerRouteBuilder").buildURL({}),
        },
      ],
      [
        "More",
        {
          activeIcon: c("CometIconMoreFilled.react"),
          icon: c("CometIconMoreFilled.react"),
          label: h._("More"),
          tabKey: "more",
          testid: "MoreTabLink",
          url: c("XCometBookmarksControllerRouteBuilder").buildURL({}),
        },
      ],
    ]);
    g["default"] = a;
  },
  98
);
__d(
  "CometLoggedOutTargetedTabsList",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = new Map();
    f["default"] = a;
  },
  66
);
__d(
  "CometTargetedTabsGlimmers.react",
  ["BaseGlimmer.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        glimmer: {
          borderTopStartRadius: "s45kfl79",
          borderTopEndRadius: "emlxlaya",
          borderBottomEndRadius: "bkmhp75w",
          borderBottomStartRadius: "spb7xbtv",
          height: "mudddibn",
          width: "ciadx1gn",
        },
        glimmerWrapper: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          height: "byvelhso",
          justifyContent: "taijpn5t",
        },
        tab: {
          flexGrow: "buofh1pr",
          maxWidth: "to382e16",
          minWidth: "o5zgeu5y",
        },
        tabHiddenAtLargeViewport: {
          "@media (max-width: 1099px)": { display: "bx45vsiw" },
        },
        tabHiddenAtSmallViewport: {
          "@media (max-width: 700px)": { display: "hw7htvoc" },
        },
        tabResponsive: {
          "@media (min-width: 1100px) and (max-height: 789px), (min-width: 1100px) and (max-width: 1379px)":
            { maxWidth: "jrc8bbd0" },
          "@media (max-width: 1099px)": { maxWidth: "dawyy4b1" },
        },
        tabSpacing: { marginStart: "h676nmdw" },
      };
    function a(a) {
      a = a.numberOfItems;
      a = a === void 0 ? 5 : a;
      a = Array.from({ length: a }).map(function (a, b) {
        a = [
          b < 4 && i.tabHiddenAtSmallViewport,
          b === 4 && i.tabHiddenAtLargeViewport,
        ];
        return h.jsx(
          "li",
          {
            className: c("stylex")(
              i.tab,
              i.tabResponsive,
              b !== 0 && i.tabSpacing,
              a
            ),
            children: h.jsx("div", {
              className: c("stylex")(i.glimmerWrapper),
              children: h.jsx(c("BaseGlimmer.react"), {
                index: b,
                xstyle: i.glimmer,
              }),
            }),
          },
          "targeted-tabs-glimmer-" + b
        );
      });
      return h.jsx(h.Fragment, { children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTargetedTopNav.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "CometSection.react",
    "CometTargetedTabsGlimmers.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.children;
      return i.jsx(c("CometSection.react"), {
        className: "taijpn5t byvelhso j83agx80",
        name: h._("Facebook"),
        role: "navigation",
        testid: void 0,
        children: i.jsx("ul", {
          className:
            "thodolrn ojvp67qx taijpn5t buofh1pr j83agx80 aovydwv3 bqdfd6uv",
          children: i.jsx(c("CometPlaceholder.react"), {
            fallback: i.jsx(c("CometTargetedTabsGlimmers.react"), {}),
            children: a,
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
  "CometTopNavMoreTab.react",
  [
    "CometTopNavTargetedTab.react",
    "XCometHomeControllerRouteBuilder",
    "getTopMostRouteInfo",
    "react",
    "useCometRouterDispatcher",
    "useCometRouterState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = c("useCometRouterState")(),
        d = c("useCometRouterDispatcher")(),
        e = b != null ? c("getTopMostRouteInfo")(b) : null;
      b =
        (e == null ? void 0 : (b = e.route) == null ? void 0 : b.tabKey) ===
        "more";
      b =
        b && d
          ? {
              onPress: function () {
                var a;
                (e == null
                  ? void 0
                  : (a = e.referrer) == null
                  ? void 0
                  : a.navigationType) !== "initial"
                  ? d.goBack()
                  : d.go(
                      c("XCometHomeControllerRouteBuilder").buildURL({}),
                      {}
                    );
              },
              preventLocalNavigation: !0,
            }
          : null;
      return h.jsx(
        c("CometTopNavTargetedTab.react"),
        babelHelpers["extends"]({}, b, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTopNavTargetedTabWrapper.react",
  [
    "CometRelay",
    "CometTopNavMoreTab.react",
    "CometTopNavTargetedTab.react",
    "react",
    "useHideNotificationsToasts",
    "useToasterStateManager",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a) {
      var b = a.actorID,
        e = a.badgeSubscriptionCallback;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "actorID",
        "badgeSubscriptionCallback",
      ]);
      var f = d("CometRelay").useRelayEnvironment(),
        g = c("useToasterStateManager")(),
        j = c("useHideNotificationsToasts")();
      i(
        function () {
          if (e) return e(b, f, g, j);
        },
        [b, e, f, j, g]
      );
      var k = a.tabKey;
      k =
        k === "more"
          ? c("CometTopNavMoreTab.react")
          : c("CometTopNavTargetedTab.react");
      return h.jsx(k, babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometAppNavigationTargetedTabBarContent.react",
  [
    "CometAppNavigationTabBarContainer.react",
    "CometAppNavigationTargetedTabBarContentInnerImplQuery.graphql",
    "CometContextualLayerAnchorRoot.react",
    "CometErrorBoundary.react",
    "CometLoggedInTargetedTabsList",
    "CometLoggedOutTargetedTabsList",
    "CometRelay",
    "CometTargetedTopNav.react",
    "CometTooltipGroup.react",
    "CometTopNavTargetedTabWrapper.react",
    "FocusInertRegion.react",
    "JSResource",
    "lazyLoadComponent",
    "react",
    "unrecoverableViolation",
    "useShouldRenderFullTopNav",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react"),
      k = j.useCallback,
      l = j.useState,
      m = c("lazyLoadComponent")(
        c("JSResource")("CometAppNavigationTabBarContent.react").__setRef(
          "CometAppNavigationTargetedTabBarContent.react"
        )
      );
    function a(a) {
      var b = a.inert;
      return i.jsx(c("CometErrorBoundary.react"), {
        fallback: function () {
          return i.jsx(m, { inert: b });
        },
        children: i.jsx("div", {
          "aria-hidden": b,
          className: "kr520xx4 j9ispegn poy2od1o n7fi1qx3 tkr6xdv7",
          children: i.jsx(c("FocusInertRegion.react"), {
            disabled: !b,
            children: i.jsx(c("CometAppNavigationTabBarContainer.react"), {
              children: i.jsx(c("CometContextualLayerAnchorRoot.react"), {
                children: i.jsx(c("CometTooltipGroup.react"), {
                  children: i.jsx(c("CometTargetedTopNav.react"), {
                    children: i.jsx(n, {}),
                  }),
                }),
              }),
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var n = i.memo(e);
    function e() {
      var a,
        e = d("CometRelay").useLazyLoadQuery(
          h !== void 0
            ? h
            : (h = b(
                "CometAppNavigationTargetedTabBarContentInnerImplQuery.graphql"
              )),
          {}
        ),
        f =
          (a =
            e == null
              ? void 0
              : (a = e.viewer) == null
              ? void 0
              : (a = a.actor) == null
              ? void 0
              : a.id) != null
            ? a
            : "";
      a =
        e == null
          ? void 0
          : (a = e.viewer) == null
          ? void 0
          : (e = a.tab_bookmarks) == null
          ? void 0
          : e.edges;
      e = l(null);
      var g = e[0],
        j = e[1],
        m = k(
          function (a, b) {
            j(a ? b : null);
          },
          [j]
        );
      e = c("useShouldRenderFullTopNav")();
      var n = e
        ? c("CometLoggedInTargetedTabsList")
        : c("CometLoggedOutTargetedTabsList");
      if (a == null || a.length === 0)
        throw c("unrecoverableViolation")(
          "Targeted tabs return null or emtpy array",
          "comet_ui"
        );
      e = n.get("More");
      return i.jsx(i.Fragment, {
        children: a
          .map(function (a, b) {
            var d, e;
            d =
              a == null
                ? void 0
                : (d = a.node) == null
                ? void 0
                : (d = d.bookmarked_node) == null
                ? void 0
                : d.id;
            e =
              a == null
                ? void 0
                : (e = a.node) == null
                ? void 0
                : e.last_used_timestamp;
            if (d == null) return null;
            d = n.get(d);
            if (d == null) return;
            var h = d.activeIcon,
              j = d.appID,
              k = d.badgeSubscriptionCallback,
              l = d.customIcon,
              o = d.entityMatcherFunction,
              p = d.hidden,
              q = d.icon,
              r = d.label,
              s = d.prefetchQueriesEligible,
              t = d.preload,
              u = d.tabKey,
              v = d.testid;
            d = babelHelpers.objectWithoutPropertiesLoose(d, [
              "activeIcon",
              "appID",
              "badgeSubscriptionCallback",
              "customIcon",
              "entityMatcherFunction",
              "hidden",
              "icon",
              "label",
              "prefetchQueriesEligible",
              "preload",
              "tabKey",
              "testid",
            ]);
            if (p === !0) return null;
            p = {
              activeIcon: h,
              appID: j,
              customIcon: l,
              entityMatcherFunction: o,
              icon: q,
              label: r,
              lastUsedTimestamp: e,
              pendingTabKey: g,
              prefetchQueriesEligible: s,
              preload: t,
              setIsPendingTab: m,
              tabKey: u,
              testid: v,
            };
            h = d.url;
            l =
              a == null
                ? void 0
                : (j = a.node) == null
                ? void 0
                : j.unread_count;
            return i.jsx(
              c("CometTopNavTargetedTabWrapper.react"),
              babelHelpers["extends"](
                {
                  actorID: f,
                  badgeCount: l != null ? l : 0,
                  badgeSubscriptionCallback: k,
                  passthroughProps: d.passthroughProps,
                  position: b,
                  responsiveStyle: !0,
                  url: h,
                },
                p
              ),
              h
            );
          })
          .concat(
            e != null
              ? i.jsx(
                  c("CometTopNavTargetedTabWrapper.react"),
                  {
                    activeIcon: e.activeIcon,
                    actorID: f,
                    icon: e.icon,
                    label: e.label,
                    pendingTabKey: g,
                    position: a.length,
                    responsiveStyle: !0,
                    setIsPendingTab: m,
                    tabKey: e.tabKey,
                    testid: void 0,
                    url: e.url,
                  },
                  e.url
                )
              : null
          )
          .filter(Boolean),
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    j = i.memo(a);
    g["default"] = j;
  },
  98
);
