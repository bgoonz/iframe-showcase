if (self.CavalryLogger) {
  CavalryLogger.start_js(["ubLBV2J"]);
}

__d(
  "CometSettingsLeftRailContainerMenuBookmark_bookmark.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "uri",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometSettingsLeftRailContainerMenuBookmark_bookmark",
        selections: [
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "label",
              storageKey: null,
            },
            action: "THROW",
            path: "label",
          },
          { kind: "RequiredField", field: a, action: "THROW", path: "uri" },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "Image",
              kind: "LinkedField",
              name: "icon",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: a,
                  action: "THROW",
                  path: "icon.uri",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "icon",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "testid",
            storageKey: null,
          },
        ],
        type: "CometSettingsLeftRailBookmarkData",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometSettingsLeftRailContainerMenu_nav.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometSettingsLeftRailContainerMenu_nav",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "CometSettingsLeftRailBookmarkOrDivider",
          kind: "LinkedField",
          name: "bookmarks",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_divider",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "CometSettingsLeftRailBookmarkData",
              kind: "LinkedField",
              name: "bookmark",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "key",
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "bookmarks.bookmark.key",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometSettingsLeftRailContainerMenuBookmark_bookmark",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometSettingsLeftRail",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometSettingsLeftRailContainer_container.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "scale" },
        { kind: "RootArgument", name: "tab" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometSettingsLeftRailContainer_container",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actor",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "if_viewer_can_see_management_tools_in_professional_dashboard",
                  plural: !1,
                  selections: [
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
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_eligible_for_account_level_settings",
          storageKey: null,
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: [
              { kind: "Variable", name: "scale", variableName: "scale" },
              { kind: "Variable", name: "tab", variableName: "tab" },
            ],
            concreteType: "CometSettingsLeftRail",
            kind: "LinkedField",
            name: "settings_left_rail",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "CometSettingsLeftRailGroupHeader",
                kind: "LinkedField",
                name: "header",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "title",
                      storageKey: null,
                    },
                    action: "THROW",
                    path: "settings_left_rail.header.title",
                  },
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "uri",
                      storageKey: null,
                    },
                    action: "THROW",
                    path: "settings_left_rail.header.uri",
                  },
                ],
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometSettingsLeftRailContainerMenu_nav",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "settings_left_rail",
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometSettingsRootQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        b = { defaultValue: null, kind: "LocalArgument", name: "tab" },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "CometSettingsRootQuery",
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
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometSettingsLeftRailContainer_container",
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
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "CometSettingsRootQuery",
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
                  selections: [
                    c,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "User",
                          kind: "LinkedField",
                          name: "if_viewer_can_see_management_tools_in_professional_dashboard",
                          plural: !1,
                          selections: [c, d],
                          storageKey: null,
                        },
                      ],
                      type: "User",
                      abstractKey: null,
                    },
                    d,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_eligible_for_account_level_settings",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: "Variable", name: "scale", variableName: "scale" },
                    { kind: "Variable", name: "tab", variableName: "tab" },
                  ],
                  concreteType: "CometSettingsLeftRail",
                  kind: "LinkedField",
                  name: "settings_left_rail",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "CometSettingsLeftRailGroupHeader",
                      kind: "LinkedField",
                      name: "header",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "title",
                          storageKey: null,
                        },
                        e,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "CometSettingsLeftRailBookmarkOrDivider",
                      kind: "LinkedField",
                      name: "bookmarks",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_divider",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "CometSettingsLeftRailBookmarkData",
                          kind: "LinkedField",
                          name: "bookmark",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "key",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "label",
                              storageKey: null,
                            },
                            e,
                            {
                              alias: null,
                              args: null,
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "icon",
                              plural: !1,
                              selections: [e],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "testid",
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
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3824409074355545",
          metadata: {},
          name: "CometSettingsRootQuery",
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
  "CometFullPageEntryPointCompatRoot.react",
  ["CometFullPageCompatRoot.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.extraProps;
      return h.jsx(
        c("CometFullPageCompatRoot.react"),
        babelHelpers["extends"]({}, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSettingsLeftRailContainerMenuBookmark.react",
  [
    "CometRelay",
    "CometRouteParams",
    "CometSettingsLeftRailContainerMenuBookmark_bookmark.graphql",
    "IconSource",
    "TetraAccessoryListCell.react",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e;
      a = a.bookmark;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometSettingsLeftRailContainerMenuBookmark_bookmark.graphql"
            )),
        a
      );
      var f = d("CometRouteParams").useRouteParams();
      f = f.tab;
      var g = a.icon,
        j = a.label,
        k = a.testid;
      k = a.uri;
      a = f !== null && new URL(k).searchParams.get("tab") === f;
      return i.jsx(c("TetraAccessoryListCell.react"), {
        addOnPrimary: {
          icon: new (c("IconSource"))("FB", g.uri, 28),
          type: "icon",
        },
        headline: j,
        linkProps: { routeTarget: "self", url: k },
        selected: a,
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
  "CometSettingsLeftRailContainerMenu.react",
  [
    "CometErrorBoundary.react",
    "CometMenuSeparator.react",
    "CometRelay",
    "CometSettingsLeftRailContainerMenuBookmark.react",
    "CometSettingsLeftRailContainerMenu_nav.graphql",
    "cr:628",
    "cr:864",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = b("cr:628") || b("cr:864");
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometSettingsLeftRailContainerMenu_nav.graphql")),
        a.nav
      );
      e = e.bookmarks;
      if (e == null || e.length === 0) {
        c("recoverableViolation")(
          "Settings bookmark list can not be null",
          "comet_ui"
        );
        return null;
      }
      e = e.map(function (a, b) {
        if (a.is_divider === !0)
          return i.jsx(c("CometMenuSeparator.react"), {}, b);
        if (a.bookmark == null) {
          c("recoverableViolation")(
            "Non-divider settings bookmark returned null bookmark",
            "comet_ui"
          );
          return null;
        }
        return i.jsx(
          c("CometErrorBoundary.react"),
          {
            children: i.jsx(
              c("CometSettingsLeftRailContainerMenuBookmark.react"),
              { bookmark: a.bookmark }
            ),
          },
          a.bookmark.key
        );
      });
      return i.jsxs("div", {
        className: "n851cfcs",
        children: [e, a.isEligibleForAccountLevelSettings && j && i.jsx(j, {})],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSettingsLeftRailContainer.react",
  [
    "fbt",
    "CometErrorBoundary.react",
    "CometLeftRailBreadcrumbs.react",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometRelay",
    "CometSettingsLeftRailContainerMenu.react",
    "CometSettingsLeftRailContainer_container.graphql",
    "ProfileTabConst",
    "XCometMeTabControllerRouteBuilder",
    "XCometSettingsControllerRouteBuilder",
    "react",
    "useNullthrowsViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = c("XCometSettingsControllerRouteBuilder").buildUri({}).toString(),
      l = h._("Settings");
    function a(a) {
      var e;
      a = a.container;
      var f = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometSettingsLeftRailContainer_container.graphql")),
        a
      );
      a = c("useNullthrowsViolation")(
        f == null ? void 0 : f.settings_left_rail
      );
      var g = a.header;
      m = m();
      e =
        (e = f == null ? void 0 : f.is_eligible_for_account_level_settings) !=
        null
          ? e
          : !0;
      return j.jsx(c("CometLeftRailComponent.react"), {
        header: j.jsx(c("CometLeftRailHeader.react"), {
          meta:
            m && j.jsx(c("CometLeftRailBreadcrumbs.react"), { breadcrumbs: m }),
          title: g != null ? g.title : h._("Settings"),
        }),
        primaryNav: j.jsx(c("CometErrorBoundary.react"), {
          children: j.jsx(c("CometSettingsLeftRailContainerMenu.react"), {
            isEligibleForAccountLevelSettings: e,
            nav: a,
          }),
        }),
      });
      function m() {
        var a;
        if (g != null)
          return [
            { label: l, url: k },
            { label: g.title, url: g.uri },
          ];
        else if (
          (f == null
            ? void 0
            : (a = f.actor) == null
            ? void 0
            : a.if_viewer_can_see_management_tools_in_professional_dashboard) !=
          null
        ) {
          a = c("XCometMeTabControllerRouteBuilder").buildURL({
            tab: c("ProfileTabConst").PROFESSIONAL_DASHBOARD,
          });
          return [
            { label: h._("Manage Your Community"), url: a },
            { label: l, url: k },
          ];
        }
        return void 0;
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSettingsRoot.react",
  [
    "fbt",
    "CometLeftRailAndMainContentContainer.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometSettingsLeftRailContainer.react",
    "CometSettingsRootQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = {};
    function a(a) {
      var e = a.entryPoints;
      a = a.queries;
      a = d("CometRelay").usePreloadedQuery(
        i !== void 0 ? i : (i = b("CometSettingsRootQuery.graphql")),
        a.cometSettingsRootQueryReference
      );
      a = a.viewer;
      e = j.jsx(c("CometPlaceholder.react"), {
        fallback: j.jsx("div", {}),
        children: j.jsx(d("CometRelay").EntryPointContainer, {
          entryPointReference: e.contentEntryPoint,
          props: k,
        }),
      });
      return j.jsx(c("CometLeftRailAndMainContentContainer.react"), {
        leftRailContent: j.jsx(c("CometSettingsLeftRailContainer.react"), {
          container: a,
        }),
        leftRailHeading: h._("Navigation within Settings"),
        mainContent: e,
        mainContentHeading: h._("Settings"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
