if (self.CavalryLogger) {
  CavalryLogger.start_js(["Wu+ndOz"]);
}

__d(
  "SearchCometResultsLoggedProfile_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null,
          },
        ],
        b = {
          alias: null,
          args: [{ kind: "Literal", name: "site", value: "www" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"www")',
        },
        c = [b];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "SearchCometResultsLoggedProfile_profile",
        selections: [
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: "type",
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
            ],
            type: "Node",
            abstractKey: "__isNode",
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: "typeaheadProfilePicture",
                args: [
                  { kind: "Variable", name: "scale", variableName: "scale" },
                  { kind: "Literal", name: "width", value: 36 },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "Profile",
            abstractKey: "__isProfile",
          },
          {
            kind: "InlineFragment",
            selections: a,
            type: "Application",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: a,
            type: "Event",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: a,
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: c,
            type: "Page",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: c,
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              b,
              {
                alias: "contextualProfileGroup",
                args: null,
                concreteType: "Group",
                kind: "LinkedField",
                name: "contextual_profile_group",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "group_id",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "HealthGroupContextualProfile",
            abstractKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
        ],
        type: "Searchable",
        abstractKey: "__isSearchable",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "SearchCometResultsRingedPageProfileImage_page.graphql",
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
        argumentDefinitions: [
          { kind: "RootArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "size" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "SearchCometResultsRingedPageProfileImage_page",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "does_viewer_follow",
            storageKey: null,
          },
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_currently_live",
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "first", value: 1 }],
            concreteType: "PageStoryConnection",
            kind: "LinkedField",
            name: "page_story_bucket",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "DirectMessageThreadBucket",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_bucket_seen_by_viewer",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "first_card_to_show",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "StoryCardSeenState",
                        kind: "LinkedField",
                        name: "story_seen_state",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_seen_by_viewer",
                            storageKey: null,
                          },
                        ],
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
            storageKey: "page_story_bucket(first:1)",
          },
          {
            alias: null,
            args: [
              { kind: "Variable", name: "height", variableName: "size" },
              { kind: "Variable", name: "scale", variableName: "scale" },
              { kind: "Variable", name: "width", variableName: "size" },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "site", value: "www" }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"www")',
          },
        ],
        type: "Page",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "SearchCometResultsRingedUserProfileImage_profile.graphql",
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
        argumentDefinitions: [
          { kind: "RootArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "size" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "SearchCometResultsRingedUserProfileImage_profile",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "friendship_closeness",
            storageKey: null,
          },
          {
            alias: null,
            args: [
              { kind: "Variable", name: "height", variableName: "size" },
              { kind: "Variable", name: "scale", variableName: "scale" },
              { kind: "Variable", name: "width", variableName: "size" },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "first", value: 1 }],
            concreteType: "DirectInboxBroadcastBucketConnection",
            kind: "LinkedField",
            name: "story_bucket",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "DirectMessageThreadBucket",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_bucket_seen_by_viewer",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "first_card_to_show",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "StoryCardSeenState",
                        kind: "LinkedField",
                        name: "story_seen_state",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_seen_by_viewer",
                            storageKey: null,
                          },
                        ],
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
            storageKey: "story_bucket(first:1)",
          },
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "site", value: "www" }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"www")',
          },
        ],
        type: "User",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "SearchCometResultsCTA_ctaModel.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SearchCometResultsCTA_ctaModel",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "SearchCometResultsCTA_ctaModel",
              fragmentName: "SearchCometResultsAppCTA_ctaModel",
              fragmentPropName: "ctaModel",
              kind: "ModuleImport",
            },
          ],
          type: "SearchAppCTAModel",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "SearchCometResultsCTA_ctaModel",
              fragmentName: "SearchCometResultsEventCTA_ctaModel",
              fragmentPropName: "ctaModel",
              kind: "ModuleImport",
            },
          ],
          type: "SearchEventCTAModel",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "SearchCometResultsCTA_ctaModel",
              fragmentName: "SearchCometResultsGroupCTA_ctaModel",
              fragmentPropName: "ctaModel",
              kind: "ModuleImport",
            },
          ],
          type: "SearchGroupCTAModel",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "SearchCometResultsCTA_ctaModel",
              fragmentName: "SearchCometResultsPageCTA_ctaModel",
              fragmentPropName: "ctaModel",
              kind: "ModuleImport",
            },
          ],
          type: "SearchPageCTAModel",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "SearchCometResultsCTA_ctaModel",
              fragmentName: "SearchCometResultsUserCTA_ctaModel",
              fragmentPropName: "ctaModel",
              kind: "ModuleImport",
            },
          ],
          type: "SearchUserCTAModel",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "SearchCometResultsCTA_ctaModel",
              fragmentName: "SearchCometResultsGameCTA_ctaModel",
              fragmentPropName: "ctaModel",
              kind: "ModuleImport",
            },
          ],
          type: "SearchGameCTAModel",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "SearchCometResultsCTA_ctaModel",
              fragmentName: "SearchCometResultsInstantApplicationCTA_ctaModel",
              fragmentPropName: "ctaModel",
              kind: "ModuleImport",
            },
          ],
          type: "SearchInstantApplicationCTAModel",
          abstractKey: null,
        },
      ],
      type: "SearchCTAModel",
      abstractKey: "__isSearchCTAModel",
    };
    e.exports = a;
  },
  null
);
__d(
  "SearchCometResultsCard.react",
  [
    "BaseHeadingContextWrapper.react",
    "CometCard.react",
    "CometUnitHeader.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { primary: 2, secondary: 3 };
    function a(a) {
      var b = a.content,
        d = a.footer,
        e = a.padding;
      e = e === void 0 ? "default" : e;
      var f = a.subtitle,
        g = a.title,
        j = a.titleAction,
        k = a.titleActionLinkProps;
      a = a.titleStyle;
      a = a === void 0 ? "primary" : a;
      g = g != null && g !== "" ? g : null;
      j = h.jsx(c("CometUnitHeader.react"), {
        action: j,
        actionLinkProps: k,
        body: f,
        headline: g,
        level: i[a],
      });
      return h.jsx("div", {
        className: "sjgh65i0",
        "data-testid": void 0,
        role: "article",
        children: h.jsxs(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: [
            g != null
              ? h.jsxs("div", {
                  children: [
                    j,
                    h.jsx("div", {
                      className:
                        e === "default"
                          ? "dhix69tm sjgh65i0 wkznzc2l tr9rh885"
                          : "",
                      children: h.jsx(c("BaseHeadingContextWrapper.react"), {
                        children: b,
                      }),
                    }),
                  ],
                })
              : null,
            g == null
              ? h.jsx("div", {
                  className:
                    e === "default"
                      ? "dhix69tm sjgh65i0 wkznzc2l tr9rh885"
                      : "",
                  children: b,
                })
              : null,
            d != null
              ? h.jsx("div", {
                  className:
                    e === "default"
                      ? "dhix69tm sjgh65i0 wkznzc2l tr9rh885"
                      : "",
                  role: "article",
                  children: d,
                })
              : null,
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
  "SearchCometResultsQueryContext",
  ["react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = h.createContext();
    b = function (a) {
      var b = a.children;
      a = a.context;
      return h.jsx(j.Provider, { value: a, children: b });
    };
    function a() {
      var a = i(j);
      if (a == null)
        throw c("unrecoverableViolation")("No query context found", "search");
      return a;
    }
    g.SearchCometResultsQueryContextProvider = b;
    g.useSearchCometResultsQueryContext = a;
  },
  98
);
__d(
  "SearchCometResultsEntityResultName.react",
  [
    "fbt",
    "CometLink.react",
    "CometPageVerificationIcon.react",
    "filterNulls",
    "intlList",
    "react",
    "stylex",
    "useSearchCometResultsLogger",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo,
      k = {
        link: { whiteSpace: "dkezsu63" },
        verifiedIconContainer: { paddingStart: "b3onmgus" },
      };
    function a(a, b) {
      var d = a.accessibilityLabel,
        e = a.name,
        f = a.url,
        g = a.verificationBadge;
      a = c("useSearchCometResultsLogger")();
      a = a.logResultClick;
      var l = j(
        function () {
          var a;
          return (a = d) != null
            ? a
            : c("intlList")(
                c("filterNulls")([
                  e,
                  g != null && g !== "NOT_VERIFIED"
                    ? h._("Verified Account")
                    : null,
                ]),
                c("intlList").CONJUNCTIONS.NONE
              );
        },
        [d, e, g]
      );
      return i.jsxs(c("CometLink.react"), {
        "aria-label": l,
        href: f,
        onClick: a,
        ref: b,
        xstyle: k.link,
        children: [
          i.jsx("span", { children: e }),
          g != null && g !== "NOT_VERIFIED"
            ? i.jsx("span", {
                className: c("stylex")(k.verifiedIconContainer),
                children: i.jsx(c("CometPageVerificationIcon.react"), {
                  size: "small",
                  verificationBadge: g,
                }),
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometResultsEntityResultNameWithSnippets.react",
  ["CometLineClamp.react", "TetraTextPairing.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        headline: {
          marginEnd: "nkwizq5d",
          marginStart: "roh60bw9",
          marginTop: "hop8lmos",
          marginBottom: "scwd0bx6",
          paddingEnd: "n8tt0mok",
          paddingStart: "hyh9befq",
          paddingTop: "jwdofwj8",
          paddingBottom: "r8blr3vg",
        },
      };
    function a(a) {
      var b = a.meta,
        d = a.metaColor,
        e = a.metaLocation,
        f = a.name,
        g = a.snippetLineLimit,
        j = a.snippets;
      a = a.type;
      a = a === void 0 ? "default" : a;
      return h.jsx(c("TetraTextPairing.react"), {
        body: j,
        bodyColor: "secondary",
        bodyLineLimit: g,
        headline: h.jsx(c("CometLineClamp.react"), {
          lines: 2,
          xstyle: i.headline,
          children: f,
        }),
        isSemanticHeading: !0,
        level: a === "default" ? 4 : 3,
        meta: b,
        metaColor: d,
        metaLineLimit: 1,
        metaLocation: e,
        reduceEmphasis: a === "default",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsLoggedProfileProvider.react",
  [
    "CometSearchEventEmitterContext",
    "CometTypeaheadDataEntryWithMetaData",
    "SearchCometResultsLoggedProfileContext",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo;
    e = c("gkx")("969163");
    function a(a) {
      var b = a.children,
        d = a.id,
        e = a.name,
        f = a.type,
        g = a.typeaheadProfilePictureURI,
        k = a.url;
      a = i(c("CometSearchEventEmitterContext"));
      var l = a.publishRecentSearchEntryAdded;
      a = j(
        function () {
          return {
            addEntityToRecentSearches: function () {
              var a = new (c("CometTypeaheadDataEntryWithMetaData"))({
                key: d,
                label: e,
                metaData: {
                  logging: { entityID: d, entityType: f.toLowerCase() },
                  markers: new Set(["entity", "recent"]),
                },
                rawData: {
                  profile: { id: d, profilePictureURL: g, url: k },
                  type: "recent",
                },
              });
              l(a);
            },
          };
        },
        [d, e, l, f, g, k]
      );
      return h.jsx(c("SearchCometResultsLoggedProfileContext").Provider, {
        value: a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsLoggedProfile.react",
  [
    "CometRelay",
    "SearchCometResultsLoggedProfileProvider.react",
    "SearchCometResultsLoggedProfile_profile.graphql",
    "XCometContextualProfileControllerRouteBuilder",
    "react",
    "recoverableViolation",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = new Map([
        ["Application", "app"],
        ["Event", "event"],
        ["Group", "group"],
        ["HealthGroupContextualProfile", "group_contextual_profile"],
        ["Page", "page"],
        ["User", "user"],
      ]);
    function a(a) {
      var e = a.children;
      a = a.profile;
      if (a == null)
        throw c("unrecoverableViolation")(
          "Undefined profile for logged profile component",
          "search"
        );
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometResultsLoggedProfile_profile.graphql")),
        a
      );
      var f = a.contextualProfileGroup,
        g = a.id,
        k = a.name,
        l = a.type,
        m = a.typeaheadProfilePicture;
      a = a.url;
      m = m == null ? void 0 : m.uri;
      a = a;
      if (l === "HealthGroupContextualProfile" && a == null) {
        f = f == null ? void 0 : f.group_id;
        g != null &&
          f != null &&
          (a = c("XCometContextualProfileControllerRouteBuilder").buildURL({
            group_idorvanity: f,
            member_id: g,
          }));
      }
      if (g == null || l == null || k == null || m == null || a == null)
        return e;
      f = j.get(l);
      if (f == null) {
        c("recoverableViolation")(
          "Invalid entity type for SearchCometResultsLoggedProfileProvider: " +
            l,
          "search"
        );
        return e;
      }
      return i.jsx(c("SearchCometResultsLoggedProfileProvider.react"), {
        id: g,
        name: k,
        type: f,
        typeaheadProfilePictureURI: m,
        url: a,
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsRingedProfileImage.react",
  [
    "TetraProfilePhoto.react",
    "XCometStoriesControllerRouteBuilder",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d,
        e = a.alt,
        f = a.canShowStoryRing,
        g = a.isLive;
      g = g === void 0 ? !1 : g;
      var i = a.onClick,
        j = a.profilePictureUri,
        k = a.size,
        l = a.storyBucket,
        m = a.url;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "alt",
        "canShowStoryRing",
        "isLive",
        "onClick",
        "profilePictureUri",
        "size",
        "storyBucket",
        "url",
      ]);
      l = (l == null ? void 0 : l.nodes) || [];
      l = l[0];
      g = g && c("gkx")("1414427");
      d =
        l == null
          ? void 0
          : (d = l.first_card_to_show) == null
          ? void 0
          : (d = d.story_seen_state) == null
          ? void 0
          : d.is_seen_by_viewer;
      var n = Boolean(l == null ? void 0 : l.is_bucket_seen_by_viewer);
      n = Boolean(d) && n ? "seen" : "unseen";
      var o = "none";
      g ? (o = "live") : f && d != null && (o = n);
      f =
        g || o === "none" || l.id == null
          ? m
          : c("XCometStoriesControllerRouteBuilder").buildURL({
              bucket_id: l.id,
              view_single: !0,
            });
      return h.jsx(
        c("TetraProfilePhoto.react"),
        babelHelpers["extends"](
          {
            alt: e,
            linkProps: { url: f },
            onPress: i,
            ref: b,
            size: k,
            source: { uri: j },
            storyStatus: o,
          },
          a
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometResultsRingedPageProfileImage.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "SearchCometResultsRingedPageProfileImage_page.graphql",
    "SearchCometResultsRingedProfileImage.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("ActorHovercard.react").__setRef(
          "SearchCometResultsRingedPageProfileImage.react"
        )
      ),
      j = d("react");
    function a(a) {
      var e = a.overrideUrl,
        f = a.page,
        g = a.size,
        k = babelHelpers.objectWithoutPropertiesLoose(a, [
          "overrideUrl",
          "page",
          "size",
        ]);
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometResultsRingedPageProfileImage_page.graphql")),
        f
      );
      f = a.id;
      var l = a.is_currently_live,
        m = a.page_story_bucket,
        n = a.profile_picture,
        o = a.url,
        p = n == null ? void 0 : n.uri;
      if (p == null || f == null) return null;
      var q = function (a) {
        var b;
        return j.jsx(
          c("SearchCometResultsRingedProfileImage.react"),
          babelHelpers["extends"]({}, k, {
            canShowStoryRing: !0,
            isLive: (b = l) != null ? b : !1,
            profilePictureUri: p,
            ref: a,
            size: g,
            storyBucket: m,
            url: (b = e) != null ? b : o,
          })
        );
      };
      return j.jsx(c("CometPlaceholder.react"), {
        fallback: q(null),
        children: j.jsx(i, {
          actorID: f,
          children: function (a) {
            return q(a);
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsRingedUserProfileImage.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "ProfileCometContextualProfileGating",
    "ProfileCometLinkContext",
    "SearchCometResultsRingedProfileImage.react",
    "SearchCometResultsRingedUserProfileImage_profile.graphql",
    "XCometContextualProfileControllerRouteBuilder",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useContext,
      j = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("ActorHovercard.react").__setRef(
          "SearchCometResultsRingedUserProfileImage.react"
        )
      ),
      k = d("react");
    function a(a) {
      var e = a.profile,
        f = a.size,
        g = babelHelpers.objectWithoutPropertiesLoose(a, ["profile", "size"]);
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("SearchCometResultsRingedUserProfileImage_profile.graphql")),
        e
      );
      var l = a.friendship_closeness;
      e = a.id;
      var m = a.name,
        n = a.profile_picture,
        o = a.story_bucket,
        p = a.url,
        q = n == null ? void 0 : n.uri;
      a = i(c("ProfileCometLinkContext"));
      n = a.groupID;
      var r =
        n != null &&
        d("ProfileCometContextualProfileGating").canViewCometContextualProfile()
          ? c("XCometContextualProfileControllerRouteBuilder").buildURL({
              group_idorvanity: n,
              member_id: (a = e) != null ? a : "",
            })
          : null;
      if (q == null || e == null) return null;
      var s = function (a) {
        var b;
        return k.jsx(
          c("SearchCometResultsRingedProfileImage.react"),
          babelHelpers["extends"]({}, g, {
            alt: (b = m) != null ? b : "",
            canShowStoryRing: l !== "NOT_FRIENDED",
            profilePictureUri: q,
            ref: a,
            size: f,
            storyBucket: o,
            url: (b = r) != null ? b : p,
          })
        );
      };
      return k.jsx(c("CometPlaceholder.react"), {
        fallback: s(null),
        children: k.jsx(j, {
          actorID: e,
          children: function (a) {
            return s(a);
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsCTAContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ style: "icon_only" });
    g["default"] = b;
  },
  98
);
__d(
  "SearchCometResultsCTAButtonGlimmer.react",
  [
    "BaseGlimmer.react",
    "BaseLoadingStateElement.react",
    "SearchCometResultsCTAContext.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a() {
      var a = i(c("SearchCometResultsCTAContext.react"));
      a = a.style;
      return h.jsx(c("BaseLoadingStateElement.react"), {
        children: h.jsx(c("BaseGlimmer.react"), {
          className: c("stylex").dedupe(
            a === "label_only" || a === "icon_with_label"
              ? {
                  "border-top-start-radius-1": "beltcj47",
                  "border-top-end-radius-1": "p86d2i9g",
                  "border-bottom-end-radius-1": "aot14ch1",
                  "border-bottom-start-radius-1": "kzx2olss",
                  "height-1": "tv7at329",
                }
              : {
                  "border-top-start-radius-1": "e72ty7fz",
                  "border-top-end-radius-1": "qlfml3jp",
                  "border-bottom-end-radius-1": "inkptoze",
                  "border-bottom-start-radius-1": "qmr60zad",
                  "height-1": "tv7at329",
                  "width-1": "thwo4zme",
                }
          ),
          index: 0,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsCTA.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "SearchCometResultsCTAButtonGlimmer.react",
    "SearchCometResultsCTAContext.react",
    "SearchCometResultsCTA_ctaModel.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo;
    function a(a) {
      var e = a.ctaModel;
      a = a.style;
      var f = a === void 0 ? "icon_only" : a;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("SearchCometResultsCTA_ctaModel.graphql")),
        e
      );
      e = j(
        function () {
          return { style: f };
        },
        [f]
      );
      return i.jsx(c("SearchCometResultsCTAContext.react").Provider, {
        value: e,
        children: i.jsx(c("CometPlaceholder.react"), {
          fallback: i.jsx(c("SearchCometResultsCTAButtonGlimmer.react"), {}),
          children: i.jsx(d("CometRelay").MatchContainer, { match: a }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SearchCometResultsCTAButton.react",
  [
    "CometTooltip.react",
    "SearchCometResultsCTAContext.react",
    "TetraButton.react",
    "TetraCircleButton.react",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var b = a.accessibilityLabel,
        d = a.disabled,
        e = a.icon,
        f = a.label,
        g = a.linkProps,
        j = a.onPress,
        k = a.testid;
      k = a.textButton;
      a = a.type;
      a = a === void 0 ? "normal" : a;
      var l = i(c("SearchCometResultsCTAContext.react"));
      l = l.style;
      if (e == null)
        return c("recoverableViolation")("Missing icon for CTA", "search");
      if (f == null)
        return c("recoverableViolation")("Missing label for CTA", "search");
      if (j == null)
        return c("recoverableViolation")("Missing onPress for CTA", "search");
      if (k != null && (l === "label_only" || l === "icon_with_label")) {
        var m;
        return h.jsx(c("TetraButton.react"), {
          "aria-label": (m = b) != null ? m : void 0,
          disabled: d,
          icon: l !== "label_only" ? k.icon : void 0,
          label: k.label,
          linkProps: g,
          onPress: j,
          reduceEmphasis: a === "highlight",
          type: a === "highlight" ? "primary" : "secondary",
        });
      }
      return h.jsx(c("CometTooltip.react"), {
        tooltip: (m = b) != null ? m : f,
        children: h.jsx(c("TetraCircleButton.react"), {
          color: a === "highlight" ? "highlight" : "primary",
          disabled: d,
          icon: e,
          label: (l = b) != null ? l : f,
          linkProps: g,
          onPress: j,
          size: 36,
          testid: void 0,
          type: a === "highlight" ? "deemphasized-overlay" : "normal",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
