if (self.CavalryLogger) {
  CavalryLogger.start_js(["xh6P0cA"]);
}

__d(
  "ProfileTransparencyDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4303038703050811",
        metadata: {},
        name: "ProfileTransparencyDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometTextWithEntities_textWithEntities.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometTextWithEntities_textWithEntities",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometTextWithEntitiesRelay_textWithEntities",
        },
      ],
      type: "TextWithEntities",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometInfoBio_user$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "ProfileCometInfoBio_user$normalization",
      selections: [
        {
          if: null,
          kind: "Defer",
          label:
            "ProfileCometInfoBio_user$defer$ProfileCometBioTextContainer_user",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ProfileIntroCard",
              kind: "LinkedField",
              name: "profile_intro_card",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "bio",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      fragment: b(
                        "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
                      ),
                      kind: "FragmentSpread",
                    },
                  ],
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
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_use_page_rename",
              storageKey: null,
            },
          ],
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometInfoBio_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometInfoBio_user",
      selections: [
        {
          kind: "Defer",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "ProfileCometBioTextContainer_user",
            },
          ],
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometBioTextContainer_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometBioTextContainer_user",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ProfileIntroCard",
          kind: "LinkedField",
          name: "profile_intro_card",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "bio",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "ProfileCometTextWithEntities_textWithEntities",
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
          name: "should_use_page_rename",
          storageKey: null,
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometBioTextEditorPrivacyIconQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4190057744411629",
        metadata: {},
        name: "ProfileCometBioTextEditorPrivacyIconQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "sample_entities",
          plural: !0,
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
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AggregatedEntitiesAtRange",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometMetaLinkedEntityRenderer_entity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "CometMetaLinkedEntityRenderer_entity",
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
  "CometTextLink.react",
  ["CometLink.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.color,
        e = a.type;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["color", "type"]);
      a = babelHelpers["extends"]({}, a, { ref: b });
      return h.jsx(c("TetraText.react"), {
        color: d,
        type: e,
        children: h.jsx(
          c("CometLink.react"),
          babelHelpers["extends"]({}, a, { color: d })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "ProfileTransparencyDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileTransparencyDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = d("WebPixelRatio").get();
        return {
          queries: {
            profileTransparencyDialogQueryReference: {
              parameters: c("ProfileTransparencyDialogQuery$Parameters"),
              variables: { pageID: a.pageID, scale: b },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "ProfileTransparencyDialog.react"
      ).__setRef("ProfileTransparencyDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometAppCollectionNullState.react",
  ["TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.message;
      return h.jsx("div", {
        className: "bjjx79mm bq3qbged",
        children: h.jsx(c("TetraText.react"), {
          align: "center",
          color: "tertiary",
          type: "headlineEmphasized2",
          children: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometContextuallyStyledAggregatedEntitiesTooltipRenderer",
  [
    "fbt",
    "CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",
    "CometTooltip.react",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    i !== void 0
      ? i
      : (i = b(
          "CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql"
        ));
    a = function (a, b) {
      var d;
      d = (d = b.count) != null ? d : 0;
      b = c("orEmptyArray")(b.sample_entities);
      d = d - b.length;
      var e = d > 0;
      return j.jsx(c("CometTooltip.react"), {
        tooltip: j.jsxs(j.Fragment, {
          children: [
            b.map(function (a) {
              if (a.__typename !== "User") return null;
              var b = a.id;
              a = a.name;
              return b != null && a != null
                ? j.jsx("div", { children: a }, b)
                : null;
            }),
            e
              ? j.jsx("div", {
                  children: h._("and {count} more...", [h._param("count", d)]),
                })
              : null,
          ],
        }),
        children: a,
      });
    };
    g["default"] = a;
  },
  98
);
__d(
  "ComposedInlineStyle",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      NONE: 0,
      BOLD: 1,
      ITALIC: 2,
      UNDERLINE: 4,
      CODE: 8,
      STRIKETHROUGH: 16,
      SUBSCRIPT: 32,
      SUPERSCRIPT: 64,
      QUOTE: 128,
      UNORDEREDLIST: 256,
      LISTITEM: 512,
      MEDIUM_WEIGHT: 1024,
      SEMIBOLD: 2048,
      HEADLINE1: 4096,
      HEADLINE2: 8192,
      HEADLINE3: 16384,
      ORDEREDLIST: 32768,
      HORIZONTALRULER: 65536,
      TABLE: 131072,
      TABLEDATA: 262144,
      TABLEROW: 524288,
      PARAGRAPH: 1048576,
      LIGHTSTRIKETHROUGH: 2097152,
      HEADLINE4: 4194304,
      COPYABLE: 8388608,
    });
  },
  null
);
__d(
  "CometInlineEntityRenderer",
  ["ComposedInlineStyle", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function (a, b) {
      switch (b.inline_style) {
        case "BOLD":
        case c("ComposedInlineStyle").BOLD:
          return h.jsx("b", { children: a });
        case "ITALIC":
        case c("ComposedInlineStyle").ITALIC:
          return h.jsx("i", { children: a });
        case "UNDERLINE":
        case c("ComposedInlineStyle").UNDERLINE:
          return h.jsx("u", { children: a });
        case "CODE":
        case c("ComposedInlineStyle").CODE:
          return h.jsx("code", {
            className:
              "o4yrsmyh ojkyduve ggysqto6 bglqfnb7 bk57svhc kfh7ys0q b3i9ofy5",
            children: a,
          });
        case "LIGHTSTRIKETHROUGH":
        case c("ComposedInlineStyle").LIGHTSTRIKETHROUGH:
          return h.jsx("strike", { className: "kgtf8isp", children: a });
        case "STRIKETHROUGH":
        case c("ComposedInlineStyle").STRIKETHROUGH:
          return h.jsx("strike", { children: a });
        case "SUBSCRIPT":
        case c("ComposedInlineStyle").SUBSCRIPT:
          return h.jsx("sub", { children: a });
        case "SUPERSCRIPT":
        case c("ComposedInlineStyle").SUPERSCRIPT:
          return h.jsx("sup", { children: a });
        case "QUOTE":
        case c("ComposedInlineStyle").QUOTE:
          return h.jsx("blockquote", { children: a });
        case "UNORDEREDLIST":
        case c("ComposedInlineStyle").UNORDEREDLIST:
          return h.jsx("ul", { className: "dhix69tm mf5omzu7", children: a });
        case "ORDEREDLIST":
        case c("ComposedInlineStyle").ORDEREDLIST:
          return h.jsx("ol", { className: "dhix69tm mf5omzu7", children: a });
        case "LISTITEM":
        case c("ComposedInlineStyle").LISTITEM:
          return h.jsx("li", { children: a });
        case "HEADLINE1":
        case c("ComposedInlineStyle").HEADLINE1:
          return h.jsx(c("TetraText.react"), {
            isSemanticHeading: !0,
            type: "headlineEmphasized1",
            children: a,
          });
        case "HEADLINE2":
        case c("ComposedInlineStyle").HEADLINE2:
          return h.jsx(c("TetraText.react"), {
            isSemanticHeading: !0,
            type: "headlineEmphasized2",
            children: a,
          });
        case "HEADLINE3":
        case c("ComposedInlineStyle").HEADLINE3:
          return h.jsx(c("TetraText.react"), {
            isSemanticHeading: !0,
            type: "headlineEmphasized3",
            children: a,
          });
        case "HORIZONTALRULER":
        case c("ComposedInlineStyle").HORIZONTALRULER:
          return h.jsx("hr", {});
        default:
          return a;
      }
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometMetaLinkedEntityRenderer",
  [
    "CometLink.react",
    "CometMetaLinkedEntityRenderer_entity.graphql",
    "CometTextContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext;
    h !== void 0 ? h : (h = b("CometMetaLinkedEntityRenderer_entity.graphql"));
    a = function (a, b) {
      var d;
      d = (d = j(c("CometTextContext"))) == null ? void 0 : d.type;
      if (b.url == null) return a;
      return d == null || !d.startsWith("meta")
        ? i.jsx(c("CometLink.react"), { href: b.url, children: a })
        : i.jsx(c("CometLink.react"), {
            color: "secondary",
            href: b.url,
            weight: d === "meta3" || d === "meta4" ? "normal" : "semibold",
            children: a,
          });
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometTextWithEntities.react",
  [
    "CometAggregatedEntitiesTooltipRenderer",
    "CometContextuallyStyledAggregatedEntitiesTooltipRenderer",
    "CometHovercardEntityRenderer",
    "CometImageEntityRenderer",
    "CometInlineEntityRenderer",
    "CometLinkedEntityRenderer",
    "CometMetaLinkedEntityRenderer",
    "CometRelay",
    "CometTextWithEntitiesRelay.react",
    "ProfileCometTextWithEntities_textWithEntities.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.textWithEntities,
        f = a.useMetaTextContext;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "textWithEntities",
        "useMetaTextContext",
      ]);
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("ProfileCometTextWithEntities_textWithEntities.graphql")),
        e
      );
      f = f != null && f;
      return i.jsx(
        c("CometTextWithEntitiesRelay.react"),
        babelHelpers["extends"]({}, a, {
          renderers: {
            "*": [
              f
                ? c("CometMetaLinkedEntityRenderer")
                : c("CometLinkedEntityRenderer"),
            ],
            Aggregate: [
              f
                ? c("CometContextuallyStyledAggregatedEntitiesTooltipRenderer")
                : c("CometAggregatedEntitiesTooltipRenderer"),
            ],
            Event: [c("CometHovercardEntityRenderer")],
            Group: [c("CometHovercardEntityRenderer")],
            Image: [c("CometImageEntityRenderer")()],
            Inline: [c("CometInlineEntityRenderer")],
            Page: [c("CometHovercardEntityRenderer")],
            User: [c("CometHovercardEntityRenderer")],
          },
          textWithEntities: e,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometAboutInfoDetails.react",
  ["ProfileCometTextWithEntities.react", "TetraTextPairing.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.color,
        d = a.subtitle;
      a = a.title;
      return h.jsx(c("TetraTextPairing.react"), {
        body: h.jsx(c("ProfileCometTextWithEntities.react"), {
          textWithEntities: a,
        }),
        bodyColor: b,
        level: 3,
        meta: d
          ? h.jsx(c("ProfileCometTextWithEntities.react"), {
              textWithEntities: d,
            })
          : null,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometLoadingOverlay.react",
  ["CometProgressIndicator.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.solidBackground;
      return h.jsx("div", {
        className:
          "taijpn5t j83agx80 hybvsw6c bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb" +
          (a == null || a === !1 ? " ocubwz8y" : ""),
        children: h.jsx(c("CometProgressIndicator.react"), {}),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometInfoBio.react",
  [
    "CometColumnItem.react",
    "CometPlaceholder.react",
    "CometRelay",
    "ProfileCometInfoBio_user.graphql",
    "TetraTextPairing.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "ProfileCometBioTextContainer.react"
        ).__setRef("ProfileCometInfoBio.react")
      );
    function a(a) {
      var e = a.align;
      a = a.user;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("ProfileCometInfoBio_user.graphql")),
        a
      );
      return j != null
        ? i.jsx(c("CometColumnItem.react"), {
            paddingTop: 16,
            children: i.jsx(c("CometPlaceholder.react"), {
              fallback: null,
              children: i.jsx(c("TetraTextPairing.react"), {
                body: i.jsx(j, { user: a }),
                bodyColor: "secondary",
                level: "entityHeader1",
                textAlign: e,
              }),
            }),
          })
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometBioTextEditor.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometBioTextEditorPrivacyIconQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.profileID;
        return {
          queries: {
            queryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: c(
                "ProfileCometBioTextEditorPrivacyIconQuery$Parameters"
              ),
              variables: { id: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "ProfileCometBioTextEditor.react"
      ).__setRef("ProfileCometBioTextEditor.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometBioTextContainer.react",
  [
    "fbt",
    "CometLineBreakTransform",
    "CometPlaceholder.react",
    "CometRelay",
    "CometTextLink.react",
    "ProfileCometBioTextContainer_user.graphql",
    "ProfileCometBioTextEditor.entrypoint",
    "ProfileCometContext",
    "ProfileCometLoadingOverlay.react",
    "ProfileCometTextWithEntities.react",
    "ProfileCometUtils",
    "react",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useContext;
    function a(a) {
      a = a.user;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("ProfileCometBioTextContainer_user.graphql")),
        a
      );
      var e = a.profile_intro_card,
        f = e == null ? void 0 : e.bio,
        g = k(c("ProfileCometContext")),
        l = g.profileID;
      g = g.viewerID;
      a = a.should_use_page_rename === !0;
      g = d("ProfileCometUtils").isViewingSelfProfile(l, g);
      var m = c("useCometRelayEntrypointContextualEnvironmentProvider")();
      m = d("CometRelay").useEntryPointLoader(
        m,
        c("ProfileCometBioTextEditor.entrypoint")
      );
      var n = m[0],
        o = m[1];
      m = m[2];
      var p = null;
      f == null
        ? g &&
          e != null &&
          (p = j.jsx(c("CometTextLink.react"), {
            color: "highlight",
            onClick: function () {
              return o({ profileID: l });
            },
            testid: void 0,
            type: "bodyLink3",
            children: h._("Add Bio"),
          }))
        : (p = j.jsxs("span", {
            "data-testid": void 0,
            children: [
              j.jsx(c("ProfileCometTextWithEntities.react"), {
                textWithEntities: f,
                transforms: [c("CometLineBreakTransform")],
              }),
              g &&
                j.jsx("div", {
                  children: j.jsx(c("CometTextLink.react"), {
                    color: "highlight",
                    onClick: function () {
                      return o({ profileID: l });
                    },
                    testid: void 0,
                    type: "bodyLink3",
                    children: h._("Edit"),
                  }),
                }),
            ],
          }));
      return n != null
        ? j.jsx(c("CometPlaceholder.react"), {
            fallback: j.jsxs("div", {
              className: "l9j0dhe7",
              children: [
                p,
                j.jsx(c("ProfileCometLoadingOverlay.react"), {
                  solidBackground: !0,
                }),
              ],
            }),
            children: j.jsx("div", {
              className: "cs7azdtd",
              children: j.jsx(d("CometRelay").EntryPointContainer, {
                entryPointReference: n,
                props: {
                  onCancel: m,
                  onPublishComplete: m,
                  shouldUsePageRename: a,
                },
              }),
            }),
          })
        : p;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
