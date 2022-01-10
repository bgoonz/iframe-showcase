if (self.CavalryLogger) {
  CavalryLogger.start_js(["kPsLt5o"]);
}

__d(
  "ProfileCometActionSearchProfileHandler_handler$normalization.graphql",
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
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "ProfileCometActionSearchProfileHandler_handler$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "profile_action",
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
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "profile_owner",
                plural: !1,
                selections: [a],
                storageKey: null,
              },
              a,
            ],
            storageKey: null,
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometActionSearchProfileHandler_handler.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometActionSearchProfileHandler_handler",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "profile_action",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "User",
              kind: "LinkedField",
              name: "profile_owner",
              plural: !1,
              selections: [
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
          storageKey: null,
        },
      ],
      type: "ProfileActionSearchProfileHandler",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometManageSectionsDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3895165277192815",
        metadata: {},
        name: "ProfileCometManageSectionsDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometTabs_cometProfileTabs$normalization.graphql",
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
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tab_key",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "ProfileCometTabs_cometProfileTabs$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "profile_user",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "WoodhengeCreatorInfo",
                kind: "LinkedField",
                name: "profile_plus_woodhenge_creator_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "viewer_subscription_tier",
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
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "mentions_tab_tooltip_nux_text",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_memorialized",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "MemorializedUserInfo",
                kind: "LinkedField",
                name: "memorialized_user_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_tributes_section",
                    storageKey: null,
                  },
                  a,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TimelineNavAppSectionsConnection",
                kind: "LinkedField",
                name: "timeline_nav_app_sections",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "TimelineNavAppSectionsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "TimelineAppSection",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "displayable_count",
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
                            name: "section_type",
                            storageKey: null,
                          },
                          b,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "tracking",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: [
                              { kind: "Literal", name: "site", value: "www" },
                            ],
                            kind: "ScalarField",
                            name: "url",
                            storageKey: 'url(site:"www")',
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "AllTimelineAppCollectionsConnection",
                            kind: "LinkedField",
                            name: "all_collections",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "TimelineAppCollection",
                                kind: "LinkedField",
                                name: "nodes",
                                plural: !0,
                                selections: [b, a],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          a,
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WEMPrivateSharingBundle",
                kind: "LinkedField",
                name: "wem_private_sharing_bundle",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "WemPrivateSharingControlModel",
                    kind: "LinkedField",
                    name: "private_sharing_control_model_for_user",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "private_sharing_enabled",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_viewer_friend",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_currently_live",
                storageKey: null,
              },
              a,
            ],
            storageKey: null,
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometTabs_cometProfileTabs.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "tab_key",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometTabs_cometProfileTabs",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "profile_user",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "WoodhengeCreatorInfo",
                kind: "LinkedField",
                name: "profile_plus_woodhenge_creator_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "viewer_subscription_tier",
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
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "mentions_tab_tooltip_nux_text",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_memorialized",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "MemorializedUserInfo",
                kind: "LinkedField",
                name: "memorialized_user_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_tributes_section",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TimelineNavAppSectionsConnection",
                kind: "LinkedField",
                name: "timeline_nav_app_sections",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "TimelineNavAppSectionsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "TimelineAppSection",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "displayable_count",
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
                            name: "section_type",
                            storageKey: null,
                          },
                          a,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "tracking",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: [
                              { kind: "Literal", name: "site", value: "www" },
                            ],
                            kind: "ScalarField",
                            name: "url",
                            storageKey: 'url(site:"www")',
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "AllTimelineAppCollectionsConnection",
                            kind: "LinkedField",
                            name: "all_collections",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "TimelineAppCollection",
                                kind: "LinkedField",
                                name: "nodes",
                                plural: !0,
                                selections: [a],
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
              {
                alias: null,
                args: null,
                concreteType: "WEMPrivateSharingBundle",
                kind: "LinkedField",
                name: "wem_private_sharing_bundle",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "WemPrivateSharingControlModel",
                    kind: "LinkedField",
                    name: "private_sharing_control_model_for_user",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "private_sharing_enabled",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_viewer_friend",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_currently_live",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "ProfileDefaultTabs",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometTabs_mentions_nux.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometTabs_mentions_nux",
      selections: [
        { args: null, kind: "FragmentSpread", name: "useMaybeNUX_nux" },
      ],
      type: "DefaultNUX",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUsersEntityScopedTypeaheadDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4122624657824558",
        metadata: {},
        name: "CometUsersEntityScopedTypeaheadDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometUsersEntityScopedTypeaheadDialog.entrypoint",
  [
    "CometUsersEntityScopedTypeaheadDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.entityID;
        return {
          queries: {
            CometUsersEntityScopedTypeaheadDialogQueryRef: {
              parameters: b(
                "CometUsersEntityScopedTypeaheadDialogQuery$Parameters"
              ),
              variables: { entityID: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometUsersEntityScopedTypeaheadDialog.react"
      ).__setRef("CometUsersEntityScopedTypeaheadDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometActionSearchProfileHandler.react",
  [
    "CometRelay",
    "CometUsersEntityScopedTypeaheadDialog.entrypoint",
    "ProfileCometActionSearchProfileHandler_handler.graphql",
    "react",
    "unrecoverableViolation",
    "useSearchCometResultsTypeaheadDialogTriggerClickHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("ProfileCometActionSearchProfileHandler_handler.graphql")),
        a.handler
      );
      a = a.children;
      e =
        (e = e.profile_action) == null
          ? void 0
          : (e = e.profile_owner) == null
          ? void 0
          : e.id;
      if (e == null)
        throw c("unrecoverableViolation")(
          "No profile owner is available when attempting to render scoped search entry point",
          "profile_comet"
        );
      e = c("useSearchCometResultsTypeaheadDialogTriggerClickHandler")(
        c("CometUsersEntityScopedTypeaheadDialog.entrypoint"),
        e,
        "user"
      );
      var f = e[0],
        g = e[1],
        i = e[2],
        j = e[3];
      e = e[4];
      return a({
        onHoverIn: i,
        onHoverOut: j,
        onPress: f,
        onPressIn: e,
        ref: g,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometManageSectionsDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometManageSectionsDialogQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.profileID;
        return {
          queries: {
            queryReference: {
              parameters: c("ProfileCometManageSectionsDialogQuery$Parameters"),
              variables: { id: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "ProfileCometManageSectionsDialog.react"
      ).__setRef("ProfileCometManageSectionsDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometTabs.react",
  [
    "fbt",
    "CometBadge.react",
    "CometEntityHeaderTabBar.react",
    "CometRelay",
    "ProfileCometContext",
    "ProfileCometManageSectionsDialog.entrypoint",
    "ProfileCometSession",
    "ProfileCometTabs_cometProfileTabs.graphql",
    "ProfileCometTabs_mentions_nux.graphql",
    "ProfileCometURIUtils",
    "ProfileCometUtils",
    "cr:11523",
    "react",
    "requireDeferred",
    "useCometCallout",
    "useCometEntityKey",
    "useCometEntryPointDialog",
    "useMaybeNUX",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l = d("react"),
      m = d("react").useContext;
    e = {
      isVNextTab: function (a) {
        return !1;
      },
      showManageSectionsFromAboutCollection: !1,
      showVNextTabs: !1,
    };
    k = (k = b("cr:11523")) != null ? k : e;
    var n = k.isVNextTab,
      o = k.showManageSectionsFromAboutCollection,
      p = k.showVNextTabs,
      q = c("requireDeferred")("ProfileEngagementFalcoEvent").__setRef(
        "ProfileCometTabs.react"
      ),
      r = { mentionsNux: { maxWidth: "nqmqzb3c" } };
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("ProfileCometTabs_cometProfileTabs.graphql")),
          a.cometProfileTabs
        );
      a = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("ProfileCometTabs_mentions_nux.graphql")),
        a.nux
      );
      f = f.profile_user;
      var g = m(c("ProfileCometContext")),
        k = g.profileID;
      g = g.viewerID;
      var s = c("useCometEntryPointDialog")(
          c("ProfileCometManageSectionsDialog.entrypoint"),
          { profileID: k },
          "button"
        ),
        t = s[0];
      s[1];
      var u = s[2],
        v = s[3];
      s = s[4];
      var w = {
          content_id: null,
          profile_event_type: "click",
          profile_id: k,
          profile_product_bucket: "nav_bar",
          profile_session_id: d("ProfileCometSession").get(k),
          profile_subsurface: "nav_bar",
          profile_surface: "timeline",
        },
        x = d("ProfileCometUtils").isViewingSelfProfile(k, g);
      a = c("useMaybeNUX")(a);
      var y = a[0];
      a = a[1];
      e = {
        arrowStyle: "inset",
        hasCloseButton: !0,
        label:
          (e = f == null ? void 0 : f.mentions_tab_tooltip_nux_text) != null
            ? e
            : "",
        onHide: a,
        position: "above",
        type: "accent",
        xstyle: r.mentionsNux,
      };
      var z = c("useCometCallout")(e, (a = y) != null ? a : !1),
        A = (e = f == null ? void 0 : f.is_currently_live) != null ? e : !1;
      a = (y = f == null ? void 0 : f.is_viewer_friend) != null ? y : !1;
      y =
        (e =
          f == null
            ? void 0
            : (e = f.wem_private_sharing_bundle) == null
            ? void 0
            : (y = e.private_sharing_control_model_for_user) == null
            ? void 0
            : y.private_sharing_enabled) != null
          ? e
          : !1;
      var B = !x && y && !a,
        C = (e = c("useCometEntityKey")()) == null ? void 0 : e.section;
      y = d("ProfileCometURIUtils").useURIForProfile();
      a =
        (e =
          f == null
            ? void 0
            : (a = f.memorialized_user_info) == null
            ? void 0
            : a.has_tributes_section) != null
          ? e
          : !1;
      var D = (e = f == null ? void 0 : f.is_memorialized) != null ? e : !1,
        E = [];
      e = d("ProfileCometURIUtils").useURIForProfileSection("tributes");
      var F = d("ProfileCometURIUtils").useIsProfileSectionActive("tributes"),
        G = d("ProfileCometURIUtils").useURIForProfileSection("timeline"),
        H = d("ProfileCometURIUtils").useIsProfileSectionActive("timeline"),
        I = d("ProfileCometURIUtils").useIsProfileSectionActive(
          "pretributestimeline"
        ),
        J = d("ProfileCometURIUtils").useIsProfileSectionActive("grid"),
        K = d("ProfileCometURIUtils").useURIForProfileSection("supporters"),
        L = d("ProfileCometURIUtils").useIsProfileSectionActive("supporters");
      a &&
        E.push({
          isActive: function () {
            return F;
          },
          label: h._("Tributes"),
          linkProps: { replace: !0, url: e },
          onPress: function () {
            q.onReady(function (a) {
              a = a.log;
              a(function () {
                return babelHelpers["extends"]({}, w, {
                  profile_item_subtype: "tributes",
                  profile_item_type: "tributes",
                });
              });
            });
          },
        });
      E.push({
        isActive: function () {
          return D ? I : H || J;
        },
        label: h._("Posts"),
        linkProps: { replace: !0, url: a ? G : y },
        onPress: function () {
          q.onReady(function (a) {
            a = a.log;
            a(function () {
              return babelHelpers["extends"]({}, w, {
                profile_item_subtype: "home",
                profile_item_type: "timeline",
              });
            });
          });
        },
      });
      ((f == null
        ? void 0
        : (e = f.profile_plus_woodhenge_creator_info) == null
        ? void 0
        : e.viewer_subscription_tier) != null ||
        (x &&
          (f == null ? void 0 : f.profile_plus_woodhenge_creator_info) !=
            null)) &&
        E.push({
          isActive: function () {
            return L;
          },
          label: h._("Supporter Hub"),
          linkProps: { replace: !0, url: K },
          onPress: function () {
            q.onReady(function (a) {
              a = a.log;
              a(function () {
                return babelHelpers["extends"]({}, w, {
                  profile_item_subtype: "home",
                  profile_item_type: "timeline",
                });
              });
            });
          },
        });
      G =
        f == null
          ? void 0
          : (a = f.timeline_nav_app_sections) == null
          ? void 0
          : a.edges;
      G &&
        G.forEach(function (a) {
          a = a.node;
          if (!a) return;
          var b = a.displayable_count,
            d = a.name,
            e = a.section_type,
            f = a.tab_key,
            g = a.tracking,
            h = a.url;
          if (h == null || d == null) return;
          if (p && !n(e)) return;
          var i = (a = a.all_collections) == null ? void 0 : a.nodes;
          E.push({
            badge:
              e === "LIVE_VIDEOS" && A
                ? l.jsx(c("CometBadge.react"), {})
                : (a = b) != null
                ? a
                : void 0,
            isActive: function () {
              var a = C === f;
              if (a) return !0;
              if (C === "album" && e === "PHOTOS") return !0;
              return i == null
                ? !1
                : i.some(function (a) {
                    a = a.tab_key;
                    return a === C;
                  });
            },
            label: d,
            linkProps: { replace: !0, url: e === "PHOTOS" && B ? null : h },
            onPress: function () {
              q.onReady(function (a) {
                a = a.log;
                a(function () {
                  return babelHelpers["extends"]({}, w, {
                    profile_item_subtype: e == null ? void 0 : e.toLowerCase(),
                    profile_item_type: g,
                  });
                });
              });
            },
            tabRef: e === "MENTIONS" ? z : void 0,
          });
        });
      o ||
        (k === g &&
          E.push({
            isActive: function () {
              return !1;
            },
            label: h._("Manage Sections"),
            onHoverIn: u,
            onHoverOut: v,
            onPress: function () {
              q.onReady(function (a) {
                a = a.log;
                a(function () {
                  return babelHelpers["extends"]({}, w, {
                    profile_item_type: "manage_sections",
                  });
                });
              }),
                t({ profileID: k });
            },
            onPressIn: s,
          }));
      return l.jsx(c("CometEntityHeaderTabBar.react"), { maxTabs: 6, tabs: E });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
