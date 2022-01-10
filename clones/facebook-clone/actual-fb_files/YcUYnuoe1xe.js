if (self.CavalryLogger) {
  CavalryLogger.start_js(["OEJGCdG"]);
}

__d(
  "CometEntityActorSelectorButton_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometEntityActorSelectorButton_viewer",
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
              alias: null,
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
            {
              alias: "profile_image",
              args: [
                { kind: "Literal", name: "height", value: 36 },
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
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBProfilePlusContinuityModeInfo",
                  kind: "LinkedField",
                  name: "profile_plus_continuity_mode_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_acting_as_profile_plus",
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
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometEntityActorSelectorMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4230981693634381",
        metadata: {},
        name: "CometEntityActorSelectorMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometEntityActorSelector_entity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometEntityActorSelector_entity",
      selections: [
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
          ],
          type: "Node",
          abstractKey: "__isNode",
        },
        {
          alias: null,
          args: null,
          concreteType: "AvailableActorsConnection",
          kind: "LinkedField",
          name: "available_actors",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "count",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "SupportsScopedActors",
      abstractKey: "__isSupportsScopedActors",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometEntityActorSelector_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometEntityActorSelector_viewer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometEntityActorSelectorButton_viewer",
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "actor",
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
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometEntityHeaderActorSelector_entity.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometEntityHeaderActorSelector_entity",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometEntityActorSelector_entity",
        },
        {
          alias: null,
          args: null,
          concreteType: "AvailableActorsConnection",
          kind: "LinkedField",
          name: "available_actors",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "count",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "SupportsScopedActors",
      abstractKey: "__isSupportsScopedActors",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometEntityHeaderActorSelector_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometEntityHeaderActorSelector_viewer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometEntityActorSelector_viewer",
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
  "ProfileCometActorSelector_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometActorSelector_user",
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
          concreteType: "Viewer",
          kind: "LinkedField",
          name: "viewer",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometEntityHeaderActorSelector_viewer",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometEntityHeaderActorSelector_entity",
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
  "ProfileCometHeaderActionBarButtonWithoutIsActiveField_action.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometHeaderActionBarButtonWithoutIsActiveField_action",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text",
                  storageKey: null,
                },
                action: "THROW",
                path: "title.text",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "title",
        },
        {
          kind: "RequiredField",
          field: {
            alias: "primary_icon",
            args: [
              { kind: "Literal", name: "icon_color", value: "fds-black" },
              { kind: "Literal", name: "icon_size", value: "16" },
              { kind: "Literal", name: "icon_variant", value: "filled" },
              { kind: "Variable", name: "scale", variableName: "scale" },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon_image",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "height",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "scale",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "width",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "primary_icon",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "profile_action_type",
          storageKey: null,
        },
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_optimistic_update",
              storageKey: null,
            },
          ],
        },
      ],
      type: "ProfileAction",
      abstractKey: "__isProfileAction",
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometHeaderActionBarButton_action.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometHeaderActionBarButton_action",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text",
                  storageKey: null,
                },
                action: "THROW",
                path: "title.text",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "title",
        },
        {
          kind: "RequiredField",
          field: {
            alias: "primary_icon",
            args: [
              { kind: "Literal", name: "icon_color", value: "fds-black" },
              { kind: "Literal", name: "icon_size", value: "16" },
              { kind: "Literal", name: "icon_variant", value: "filled" },
              { kind: "Variable", name: "scale", variableName: "scale" },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon_image",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "height",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "scale",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "width",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "primary_icon",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "profile_action_type",
          storageKey: null,
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_active",
            storageKey: null,
          },
          action: "THROW",
          path: "is_active",
        },
        {
          alias: null,
          args: null,
          concreteType: "ProfileActionNux",
          kind: "LinkedField",
          name: "nux",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "nux_caption",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "nux_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_optimistic_update",
              storageKey: null,
            },
          ],
        },
      ],
      type: "ProfileAction",
      abstractKey: "__isProfileAction",
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometHeaderActionBar_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          kind: "Variable",
          name: "associated_entity_id",
          variableName: "entityID",
        },
        b = {
          kind: "Variable",
          name: "render_location",
          variableName: "userActionBarRenderLocation",
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "entityID" },
          {
            defaultValue: "WWW_COMET_PROFILE",
            kind: "LocalArgument",
            name: "userActionBarRenderLocation",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometHeaderActionBar_actor",
        selections: [
          {
            alias: "primaryActions",
            args: [
              a,
              b,
              {
                kind: "Literal",
                name: "subsurface_type",
                value: "PRIMARY_SURFACE",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "profile_actions",
            plural: !0,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometHeaderActionBarButton_action",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometActionTrigger_action",
              },
            ],
            storageKey: null,
          },
          {
            alias: "secondaryActions",
            args: [
              a,
              b,
              {
                kind: "Literal",
                name: "subsurface_type",
                value: "SECONDARY_SURFACE",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "profile_actions",
            plural: !0,
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
          {
            args: [
              { kind: "Variable", name: "entityID", variableName: "entityID" },
              {
                kind: "Variable",
                name: "userActionBarRenderLocation",
                variableName: "userActionBarRenderLocation",
              },
            ],
            kind: "FragmentSpread",
            name: "ProfileCometHeaderMoreActionButton_actor",
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AvailableActorsConnection",
                kind: "LinkedField",
                name: "available_actors",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "count",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "has_vnext_action_bar",
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometActorSelector_user",
              },
            ],
            type: "User",
            abstractKey: null,
          },
        ],
        type: "ActorWithActionBar",
        abstractKey: "__isActorWithActionBar",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometHeaderMoreActionButton_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "entityID" },
        {
          defaultValue: "WWW_COMET_PROFILE",
          kind: "LocalArgument",
          name: "userActionBarRenderLocation",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometHeaderMoreActionButton_actor",
      selections: [
        {
          alias: "primaryActions",
          args: [
            {
              kind: "Variable",
              name: "associated_entity_id",
              variableName: "entityID",
            },
            {
              kind: "Variable",
              name: "render_location",
              variableName: "userActionBarRenderLocation",
            },
            {
              kind: "Literal",
              name: "subsurface_type",
              value: "PRIMARY_SURFACE",
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "profile_actions",
          plural: !0,
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
        {
          args: [
            { kind: "Variable", name: "entityID", variableName: "entityID" },
            {
              kind: "Variable",
              name: "userActionBarRenderLocation",
              variableName: "userActionBarRenderLocation",
            },
          ],
          kind: "FragmentSpread",
          name: "ProfileCometHeaderActionBarMoreMenu_actorWithActionBar",
        },
      ],
      type: "ActorWithActionBar",
      abstractKey: "__isActorWithActionBar",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometEntityActorSelectorButton.react",
  [
    "fbt",
    "ix",
    "CometEntityActorSelectorButton_viewer.graphql",
    "CometProfilePhoto.react",
    "CometRelay",
    "TetraButton.react",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function l(a, b) {
      if (b)
        return k.jsx(c("TetraText.react"), {
          color: "primary",
          type: "body4",
          children: h._("Interacting as {=your profile}", [
            h._param(
              "=your profile",
              k.jsx(c("TetraText.react"), {
                type: "bodyLink4",
                children: h._("your profile"),
              })
            ),
          ]),
        });
      else
        return k.jsx(c("TetraText.react"), {
          color: "primary",
          type: "body4",
          children: h._("Interacting as {actor}", [
            h._param(
              "actor",
              k.jsx(c("TetraText.react"), { type: "bodyLink4", children: a })
            ),
          ]),
        });
    }
    function a(a, e) {
      var f,
        g,
        m,
        n,
        o = a.viewer$key;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["viewer$key"]);
      o = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometEntityActorSelectorButton_viewer.graphql")),
        o
      );
      f = o == null ? void 0 : (f = o.actor) == null ? void 0 : f.id;
      g = o == null ? void 0 : (g = o.actor) == null ? void 0 : g.name;
      m =
        o == null
          ? void 0
          : (m = o.actor) == null
          ? void 0
          : (m = m.profile_image) == null
          ? void 0
          : m.uri;
      n =
        (o == null
          ? void 0
          : (n = o.actor) == null
          ? void 0
          : (n = n.profile_plus_continuity_mode_info) == null
          ? void 0
          : n.is_acting_as_profile_plus) === !0;
      o =
        (o == null ? void 0 : (o = o.actor) == null ? void 0 : o.__typename) ===
          "User" && !n;
      return f == null || g == null || m == null
        ? c("recoverableViolation")(
            "Actor ID, actor name, or profile picture URI are null in actor button",
            "comet_ui"
          )
        : k.jsx(
            c("TetraButton.react"),
            babelHelpers["extends"]({}, a, {
              addOnPrimary: k.jsx(c("CometProfilePhoto.react"), {
                shape: "circle",
                size: 36,
                source: { uri: m },
              }),
              addOnSecondary: k.jsx(c("TetraIcon.react"), {
                icon: d("fbicon")._(i("481882"), 16),
                size: 16,
              }),
              label: h._("Actor Selector"),
              labelIsHidden: !0,
              reduceEmphasis: !0,
              ref: e,
              size: "large",
              tooltip: l(g, o),
              type: "secondary",
            })
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = k.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometEntityActorSelectorMenu.entrypoint",
  [
    "CometEntityActorSelectorMenuQuery$Parameters",
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
            menuQueryReference: {
              parameters: b("CometEntityActorSelectorMenuQuery$Parameters"),
              variables: { entityID: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometEntityActorSelectorMenu.react"
      ).__setRef("CometEntityActorSelectorMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometEntityActorSelectorPlaceholder.react",
  ["ix", "CometProgressIndicator.react", "TetraIcon.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsxs("div", {
        className: "t7sz67dt l9j0dhe7 qypqp5cg",
        children: [
          i.jsxs("div", {
            className: "jwdofwj8 tw6a2znq d1544ag0 r8blr3vg j83agx80 bp9cbjyn",
            children: [
              i.jsx("div", {
                className:
                  "thwo4zme fv0vnmcu tv7at329 spb7xbtv bkmhp75w emlxlaya s45kfl79 pgeiv1et",
              }),
              i.jsx(c("TetraIcon.react"), {
                icon: d("fbicon")._(h("481882"), 16),
                size: 16,
              }),
            ],
          }),
          i.jsx("div", {
            className: "fgv6swy9 p8hbile0 pmk7jnqg",
            children: i.jsx(c("CometProgressIndicator.react"), {
              overrideBGColorContext: "media",
              size: "small",
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
  "CometEntityActorSelector.react",
  [
    "CometEntityActorSelectorButton.react",
    "CometEntityActorSelectorMenu.entrypoint",
    "CometEntityActorSelectorPlaceholder.react",
    "CometEntityActorSelector_entity.graphql",
    "CometEntityActorSelector_viewer.graphql",
    "CometEntryPointPopoverTrigger.react",
    "CometRelay",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useTransition;
    function a(a) {
      var e = a.entity$key,
        f = a.onChangeActor;
      a = a.viewer$key;
      e = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometEntityActorSelector_entity.graphql")),
        e
      );
      var g = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometEntityActorSelector_viewer.graphql")),
        a
      );
      a = k();
      var l = a[0],
        m = a[1];
      a = g == null ? void 0 : (a = g.actor) == null ? void 0 : a.id;
      var n = e == null ? void 0 : e.id;
      if (a == null || n == null)
        return c("recoverableViolation")(
          "Actor ID or entity ID is null in actor selector",
          "comet_ui"
        );
      a =
        (e =
          e == null
            ? void 0
            : (a = e.available_actors) == null
            ? void 0
            : a.count) != null
          ? e
          : 0;
      if (a === 0)
        return c("recoverableViolation")(
          "No available actors in actor selector for entity " + n,
          "comet_ui"
        );
      e = function (a) {
        m(function () {
          return f(a);
        });
      };
      return j.jsx(c("CometEntryPointPopoverTrigger.react"), {
        align: "end",
        entryPointParams: { entityID: n },
        otherProps: { onChangeActor: e },
        popoverEntryPoint: c("CometEntityActorSelectorMenu.entrypoint"),
        position: "below",
        preloadTrigger: "button",
        children: function (a, b, d, e, f, h) {
          return l
            ? j.jsx(c("CometEntityActorSelectorPlaceholder.react"), {})
            : j.jsx(c("CometEntityActorSelectorButton.react"), {
                onHoverIn: e,
                onHoverOut: f,
                onPress: b,
                onPressIn: h,
                ref: a,
                testid: void 0,
                viewer$key: g,
              });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometEntityHeaderActorSelector.react",
  [
    "CometEntityActorSelector.react",
    "CometEntityHeaderActorSelector_entity.graphql",
    "CometEntityHeaderActorSelector_viewer.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    function a(a) {
      var e,
        f = a.entity$key,
        g = a.onChangeActor;
      a = a.viewer$key;
      f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometEntityHeaderActorSelector_entity.graphql")),
        f
      );
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometEntityHeaderActorSelector_viewer.graphql")),
        a
      );
      e = (e = f.available_actors) == null ? void 0 : e.count;
      return e == null || e < 2
        ? null
        : j.jsx("div", {
            className: "b3onmgus dhix69tm aypy0576",
            children: j.jsx(c("CometEntityActorSelector.react"), {
              entity$key: f,
              onChangeActor: g,
              viewer$key: a,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometActorSelector.react",
  [
    "Actor",
    "CometEntityHeaderActorSelector.react",
    "CometRelay",
    "ProfileCometActorSelector_user.graphql",
    "react",
    "recoverableViolation",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = c("requireDeferred")("ProfilePlusContinuityFalcoEvent").__setRef(
        "ProfileCometActorSelector.react"
      );
    function a(a) {
      a = a.user$key;
      var e = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("ProfileCometActorSelector_user.graphql")),
        a
      );
      a = d("Actor").useActor();
      var f = a[1];
      a = function (a) {
        f(a),
          j.onReady(function (a) {
            a = a.log;
            a(function () {
              return { event: "voice_switch", profile_plus_id: e.id };
            });
          });
      };
      var g = e.viewer;
      return g == null
        ? c("recoverableViolation")(
            "Profile viewer cannot be null",
            "profile_comet"
          )
        : i.jsx(c("CometEntityHeaderActorSelector.react"), {
            entity$key: e,
            onChangeActor: a,
            viewer$key: g,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometHeaderActionBarButton.react",
  [
    "CometProgressRingIndeterminate.react",
    "CometRelay",
    "ProfileCometContextualProfileContext",
    "ProfileCometHeaderActionBarButtonWithoutIsActiveField_action.graphql",
    "ProfileCometHeaderActionBarButton_action.graphql",
    "TetraButton.react",
    "TintableIconSource",
    "coerceRelayImage",
    "mergeRefs",
    "react",
    "stylex",
    "useCometCalloutNUX",
    "useProfileCometEngagementEventsClickCallback",
    "useProfileCometEngagementEventsImpression",
    "useProfileEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useContext,
      l = {
        buttonWithLabel: { width: "k4urcfbm" },
        tooltipWithMaxWidth: { maxWidth: "qhjacvs6" },
      };
    h !== void 0
      ? h
      : (h = b(
          "ProfileCometHeaderActionBarButtonWithoutIsActiveField_action.graphql"
        ));
    function a(a, e) {
      var f = a.action,
        g = a.actionBarSlot,
        h = a.hasVNextActionBar,
        m = a.labelIsHidden;
      m = m === void 0 ? !1 : m;
      var n = a.onPress,
        o = a.otherLogAction,
        p = a.source;
      p = p === void 0 ? "WWW_COMET_PROFILE" : p;
      var q = a.type;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "action",
        "actionBarSlot",
        "hasVNextActionBar",
        "labelIsHidden",
        "onPress",
        "otherLogAction",
        "source",
        "type",
      ]);
      f = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("ProfileCometHeaderActionBarButton_action.graphql")),
        f
      );
      var r = k(c("ProfileCometContextualProfileContext")),
        s = r.groupID,
        t = r.isContextualProfileView;
      r = r.userID;
      var u = (f.profile_action_type || "unknown").toLowerCase(),
        v = c("useProfileEngagementClickCallback")(
          t
            ? {
                event_metadata: {
                  entry_point:
                    u === "edit_contextual_profile"
                      ? "self-view_edit_profile"
                      : "",
                  groupID: s,
                },
                item_subtype:
                  u === "edit_contextual_profile"
                    ? "contextual_profile_edit"
                    : null,
                item_type: u,
                product_bucket: "contextual_profile",
                profile_id_dummy: r,
                surface: "group_contextual_profile",
              }
            : {
                item_type: u,
                product_bucket: "action_bar",
                surface:
                  p === "WWW_COMET_FRIENDSHIP_PAGE"
                    ? "friends_page"
                    : "timeline",
              },
          n
        );
      t = {
        event_metadata: {
          action_bar_slot: g.toString(),
          is_primary: f.is_active.toString(),
        },
        feature_item: u,
        feature_surface: null,
        profile_feature: "action",
        profile_section: "action_bar",
      };
      var w = c("useProfileCometEngagementEventsClickCallback")(t);
      s = c("useProfileCometEngagementEventsImpression")(t);
      r = f.primary_icon;
      p = f.title.text;
      n = "";
      switch (f.profile_action_type) {
        case "EDIT_CONTEXTUAL_PROFILE":
          n = "EditContextualProfileActionBarButton";
          break;
        case "FRIEND":
          n = "add_button";
          break;
        case "MANAGE_MEMORIALIZED_ACCOUNT":
          n = "memorialization_manage_memorialization_button";
          break;
        default:
          n = p;
      }
      g = f.is_optimistic_update === !0;
      u = g
        ? j.jsx(c("CometProgressRingIndeterminate.react"), {
            color: a.disabled === !0 ? "disabled" : "dark",
            size: 16,
          })
        : void 0;
      t =
        !g && (r == null ? void 0 : r.uri) != null
          ? new (c("TintableIconSource"))("FB", c("coerceRelayImage")(r), 16)
          : void 0;
      r = (g = (n = f.nux) == null ? void 0 : n.nux_id) != null ? g : "";
      n = (g = (n = f.nux) == null ? void 0 : n.nux_caption) != null ? g : "";
      g = c("useCometCalloutNUX")(
        r,
        {
          align: "start",
          arrowStyle: "edge",
          label: n,
          position: "above",
          type: "accent",
          xstyle: l.tooltipWithMaxWidth,
        },
        n !== ""
      );
      return j.jsx("div", {
        className: c("stylex")(!m && l.buttonWithLabel),
        ref: e,
        children: j.jsx(
          c("TetraButton.react"),
          babelHelpers["extends"]({}, a, {
            addOnPrimary: u,
            icon: t,
            label: p,
            labelIsHidden: m,
            onPress: function (a) {
              v(a), w(), o && o();
            },
            reduceEmphasis: !h && f.is_active === !0,
            ref: c("mergeRefs")(g, s),
            size: "medium",
            testid: void 0,
            tooltip: m ? p : null,
            type:
              (r = q) != null
                ? r
                : f.is_active === !0
                ? "primary"
                : "secondary",
          })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = j.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "ProfileCometHeaderMoreActionButton.react",
  [
    "fbt",
    "CometDeferredPopoverTrigger.react",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRelay",
    "Dots3HorizontalFilled24.svg.react",
    "ProfileCometContextualProfileContext",
    "ProfileCometHeaderMoreActionButton_actor.graphql",
    "SVGIcon",
    "TetraButton.react",
    "mergeRefs",
    "react",
    "requireDeferred",
    "useProfileCometEngagementEventsClickCallback",
    "useProfileCometEngagementEventsImpression",
    "useProfileEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m = c("requireDeferred")(
        "ProfileCometHeaderActionBarMoreMenu.react"
      ).__setRef("ProfileCometHeaderMoreActionButton.react");
    function n(a, b) {
      var d = l(c("ProfileCometContextualProfileContext")),
        e = d.groupID,
        f = d.isContextualProfileView;
      d = d.userID;
      var g = c("useProfileEngagementClickCallback")(
          f
            ? {
                event_metadata: { entry_point: "", groupID: e },
                item_subtype: null,
                item_type: "see_more",
                product_bucket: "contextual_profile",
                profile_id_dummy: d,
                surface: "group_contextual_profile",
              }
            : {
                item_type: "see_more",
                product_bucket: "action_bar",
                surface:
                  a === "WWW_COMET_FRIENDSHIP_PAGE"
                    ? "friends_page"
                    : "timeline",
              }
        ),
        h = c("useProfileCometEngagementEventsClickCallback")(b);
      return k(
        function () {
          g(), h();
        },
        [g, h]
      );
    }
    function a(a) {
      var e = a.actor;
      a = a.source;
      a = a === void 0 ? "WWW_COMET_PROFILE" : a;
      e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("ProfileCometHeaderMoreActionButton_actor.graphql")),
        e
      );
      var f = e.primaryActions.length + 1;
      f = {
        event_metadata: { action_bar_slot: f.toString() },
        feature_item: null,
        feature_surface: null,
        profile_feature: "overflow_action",
        profile_section: "action_bar",
      };
      var g = n(a, f),
        k = c("useProfileCometEngagementEventsImpression")(f);
      if (e == null) return null;
      a = j.jsx("div", {
        children: j.jsx(c("TetraButton.react"), {
          disabled: !0,
          icon: d("SVGIcon").svgIcon(c("Dots3HorizontalFilled24.svg.react")),
          label: h._("More"),
          labelIsHidden: !0,
          type: "secondary",
        }),
      });
      return j.jsx(c("CometErrorBoundary.react"), {
        children: j.jsx(c("CometPlaceholder.react"), {
          fallback: a,
          children: j.jsx(c("CometDeferredPopoverTrigger.react"), {
            align: "middle",
            onVisibilityChange: function (a) {
              a && g();
            },
            popoverProps: { actor: e },
            popoverResource: m,
            popoverType: "menu",
            children: function (a, b) {
              return j.jsx(c("TetraButton.react"), {
                icon: d("SVGIcon").svgIcon(
                  c("Dots3HorizontalFilled24.svg.react")
                ),
                label: h._("More"),
                labelIsHidden: !0,
                onPress: b,
                ref: c("mergeRefs")(a, k),
                testid: void 0,
                type: "secondary",
              });
            },
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
  "ProfileCometHeaderActionBar.react",
  [
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRelay",
    "ProfileCometActionTrigger.react",
    "ProfileCometActorSelector.react",
    "ProfileCometHeaderActionBarButton.react",
    "ProfileCometHeaderActionBar_actor.graphql",
    "ProfileCometHeaderMoreActionButton.react",
    "gkx",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        buttonContainer: { marginEnd: "cgat1ltu", marginStart: "kkf49tns" },
        fullButtonContainerInHeader: {
          flexShrink: "g5gj957u",
          maxWidth: "r2nqfv2r",
          minWidth: "jgsskzai",
        },
        fullButtonContainerInHovercard: {
          flexGrow: "buofh1pr",
          flexShrink: "g5gj957u",
          minWidth: "jgsskzai",
        },
        root: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          marginEnd: "dlv3wnog",
          marginStart: "rl04r1d5",
        },
        rootInHeader: {
          justifyContent: "bkfpd7mw",
          paddingBottom: "f10w8fjw",
          paddingTop: "pybr56ya",
        },
        rootInHovercard: { justifyContent: "taijpn5t" },
      };
    function a(a) {
      var e = a.actor,
        f = a.isInHovercard,
        g = f === void 0 ? !1 : f;
      f = a.source;
      var k = f === void 0 ? "WWW_COMET_PROFILE" : f;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("ProfileCometHeaderActionBar_actor.graphql")),
        e
      );
      if (a == null) return null;
      if (c("gkx")("2820")) return null;
      f = a.available_actors;
      e = a.primaryActions;
      var l = a.secondaryActions;
      f = f == null ? void 0 : f.count;
      var m = e != null && e.length > 0;
      l = l != null && l.length > 0;
      f = f != null && f > 1 && !g;
      if (!m && !l && !f) return null;
      var n = a.has_vnext_action_bar !== !1;
      l =
        l &&
        i.jsx("div", {
          className: c("stylex")(j.buttonContainer),
          children: i.jsx(c("ProfileCometHeaderMoreActionButton.react"), {
            actor: a,
            source: k,
          }),
        });
      var o =
        m &&
        e.map(function (a, b) {
          return i.jsx(
            "div",
            {
              className: c("stylex")(
                j.buttonContainer,
                ((n && b <= 1) || b === 0) &&
                  (g
                    ? j.fullButtonContainerInHovercard
                    : j.fullButtonContainerInHeader)
              ),
              children: i.jsx(c("ProfileCometHeaderActionBarButton.react"), {
                action: a,
                actionBarSlot: b + 1,
                disabled: !0,
                hasVNextActionBar: n,
                labelIsHidden: n ? b > 1 : b > 0,
              }),
            },
            b
          );
        });
      return i.jsx(c("CometErrorBoundary.react"), {
        children: i.jsxs("div", {
          className: c("stylex")(
            j.root,
            g ? j.rootInHovercard : j.rootInHeader
          ),
          "data-testid": void 0,
          children: [
            m &&
              i.jsx(c("CometPlaceholder.react"), {
                fallback: o,
                children: e.map(function (a, b) {
                  return i.jsx(
                    "div",
                    {
                      className: c("stylex")(
                        j.buttonContainer,
                        ((n && b <= 1) || b === 0) &&
                          (g
                            ? j.fullButtonContainerInHovercard
                            : j.fullButtonContainerInHeader)
                      ),
                      children: i.jsx(c("CometErrorBoundary.react"), {
                        children: i.jsx(c("ProfileCometActionTrigger.react"), {
                          action: a,
                          source: k,
                          children: function (d) {
                            d.memberModerations;
                            d = babelHelpers.objectWithoutPropertiesLoose(d, [
                              "memberModerations",
                            ]);
                            return i.jsx(
                              c("ProfileCometHeaderActionBarButton.react"),
                              babelHelpers["extends"]({}, d, {
                                action: a,
                                actionBarSlot: b + 1,
                                hasVNextActionBar: n,
                                labelIsHidden: n ? b > 1 : b > 0,
                                source: k,
                              })
                            );
                          },
                        }),
                      }),
                    },
                    b
                  );
                }),
              }),
            l,
            f
              ? i.jsx(c("ProfileCometActorSelector.react"), { user$key: a })
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
