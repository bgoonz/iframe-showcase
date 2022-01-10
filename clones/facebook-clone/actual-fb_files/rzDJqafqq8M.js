if (self.CavalryLogger) {
  CavalryLogger.start_js(["JF/Bn1o"]);
}

__d(
  "useGroupsCometJoinActionButton_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "source" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "useGroupsCometJoinActionButton_group",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Variable", name: "source", variableName: "source" },
            {
              kind: "Literal",
              name: "supported",
              value: [
                "GroupJoinGroupAction",
                "GroupJoinForumAction",
                "GroupJoinedGroupAction",
                "GroupJoinSubspaceAction",
                "GroupJoinLOVAction",
                "XFBGroupJoinLOVWithScopedPersonSignupAction",
                "GroupJoinCommunityPresenceGroupAction",
              ],
            },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "join_action",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useGroupsCometJoinActionButton_group_join_action",
                  fragmentName: "GroupsCometJoinGroupButton_action",
                  fragmentPropName: "action",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupJoinGroupAction",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useGroupsCometJoinActionButton_group_join_action",
                  fragmentName: "GroupsCometJoinForumButton_action",
                  fragmentPropName: "action",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupJoinForumAction",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useGroupsCometJoinActionButton_group_join_action",
                  fragmentName: "GroupsCometJoinedGroupButton_action",
                  fragmentPropName: "action",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupJoinedGroupAction",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useGroupsCometJoinActionButton_group_join_action",
                  fragmentName: "GroupsCometJoinSubgroupButton_action",
                  fragmentPropName: "action",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupJoinSubspaceAction",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useGroupsCometJoinActionButton_group_join_action",
                  fragmentName: "GroupsCometLOVJoinGroupButton_action",
                  fragmentPropName: "action",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupJoinLOVAction",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useGroupsCometJoinActionButton_group_join_action",
                  fragmentName:
                    "GroupsCometLOVJoinWithScopedPersonSignupButton_action",
                  fragmentPropName: "action",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBGroupJoinLOVWithScopedPersonSignupAction",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "useGroupsCometJoinActionButton_group_join_action",
                  fragmentName: "GroupsCometJoinCommunityPresenceButton_action",
                  fragmentPropName: "action",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupJoinCommunityPresenceGroupAction",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometMemberCountAndPrivacy_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: !1, kind: "LocalArgument", name: "showOnlyCount" },
        { defaultValue: "COMPRESSED", kind: "LocalArgument", name: "type" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometMemberCountAndPrivacy_group",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometPrivacyText_group",
        },
        {
          args: [
            {
              kind: "Variable",
              name: "showOnlyCount",
              variableName: "showOnlyCount",
            },
            { kind: "Variable", name: "type", variableName: "type" },
          ],
          kind: "FragmentSpread",
          name: "useGroupsCometMemberCount_group",
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometPrivacyText_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometPrivacyText_group",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "GroupPrivacyInfo",
            kind: "LinkedField",
            name: "privacy_info",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "useGroupsCometPrivacyIcon_privacyInfo",
              },
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
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometTextWithEntitiesRelay_textWithEntities",
                    },
                  ],
                  storageKey: null,
                },
                action: "THROW",
                path: "privacy_info.title",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "privacy_info",
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useGroupsCometMemberCount_group.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "show_only_count",
              variableName: "showOnlyCount",
            },
            { kind: "Variable", name: "type", variableName: "type" },
          ],
          kind: "ScalarField",
          name: "formatted_count_text",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [
          { defaultValue: !1, kind: "LocalArgument", name: "showOnlyCount" },
          { defaultValue: "COMPRESSED", kind: "LocalArgument", name: "type" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "useGroupsCometMemberCount_group",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "GroupForumMemberProfilesConnection",
            kind: "LinkedField",
            name: "forum_member_profiles",
            plural: !1,
            selections: a,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "GroupMemberProfilesConnection",
            kind: "LinkedField",
            name: "group_member_profiles",
            plural: !1,
            selections: a,
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
        type: "Group",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometEventLinkedGroupInviteDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4732999413396242",
        metadata: {},
        name: "GroupsCometEventLinkedGroupInviteDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometAppsDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4515247571870571",
        metadata: {},
        name: "GroupsCometAppsDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometHeaderInviteMemberAddButton_action$normalization.graphql",
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
        name: "GroupsCometHeaderInviteMemberAddButton_action$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "group",
            plural: !1,
            selections: [
              a,
              {
                alias: null,
                args: [{ kind: "Literal", name: "first", value: 1 }],
                concreteType: "GroupToPurposesConnection",
                kind: "LinkedField",
                name: "group_purposes",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "GroupToPurposesEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "GroupPurpose",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "purpose_enum",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: "group_purposes(first:1)",
              },
              {
                alias: null,
                args: null,
                concreteType: "Event",
                kind: "LinkedField",
                name: "linked_events",
                plural: !1,
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    concreteType: "EventLinkedGroupCard",
                    kind: "LinkedField",
                    name: "linked_group_card",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "type",
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
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometHeaderInviteMemberAddButton_action.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometHeaderInviteMemberAddButton_action",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "group",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "GroupsCometHeaderInviteFacebookFriendsTrigger_group",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "group",
        },
      ],
      type: "XFBGroupInviteMemberAddButtonAction",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GroupsCometMoreActionMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4073277779465099",
        metadata: {},
        name: "GroupsCometMoreActionMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "useGroupsCometPrivacyIcon_privacyInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useGroupsCometPrivacyIcon_privacyInfo",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "icon_name",
          storageKey: null,
        },
      ],
      type: "GroupPrivacyInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometCreationContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ isDraft: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "useIsCreationPreview",
  ["CometCreationContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("CometCreationContext"));
      return a.isDraft;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometCreationPreviewPlaceholder.react",
  ["react", "useIsCreationPreview"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      var b = a.children,
        d = a.placeholder,
        e = a.shouldShowPlaceholder;
      e = e === void 0 ? !1 : e;
      var f = c("useIsCreationPreview")();
      a =
        Object.prototype.hasOwnProperty.call(a, "stringValueToCheck") &&
        (a.stringValueToCheck == null || a.stringValueToCheck === "");
      return f && (a || e) ? d : b;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometEntityHeaderCoverMediaFooter.react",
  ["CometRow.react", "CometRowItem.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        footer: {
          paddingBottom: "ihqw7lf3",
          paddingTop: "discj3wi",
          position: "l9j0dhe7",
        },
      };
    function a(a) {
      var b = a.customBackgroundColor,
        d = a.footer,
        e = a.footerAlign;
      a = a.xstyle;
      return d == null
        ? null
        : h.jsx("div", {
            className: c("stylex")(i.footer, a),
            style: { backgroundColor: b },
            children: h.jsx(c("CometRow.react"), {
              align: e,
              paddingHorizontal: 16,
              paddingTop: 0,
              verticalAlign: "bottom",
              children: h.jsx(c("CometRowItem.react"), {
                expanding: !0,
                children: d,
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
  "CometMoreMenuEntryPointButton.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "TetraButton.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.align;
      b = b === void 0 ? "middle" : b;
      var e = a.entryPointParams,
        f = a.onMenuPress,
        g = a.otherProps,
        k = a.popoverEntryPoint,
        l = a.testid;
      l = a.type;
      var m = l === void 0 ? "secondary" : l;
      return j.jsx(c("CometEntryPointPopoverTrigger.react"), {
        align: b,
        entryPointParams: e,
        otherProps: g,
        popoverEntryPoint: k,
        children: function (a, b, e, g, k, l) {
          return j.jsx(c("TetraButton.react"), {
            icon: d("fbicon")._(i("484386"), 16),
            label: h._("More"),
            labelIsHidden: !0,
            onHoverIn: g,
            onHoverOut: k,
            onPress: function () {
              b(), f && f.apply(void 0, arguments);
            },
            onPressIn: l,
            ref: a,
            testid: void 0,
            type: m,
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
  "GroupsCometMoreActionMenu.entrypoint",
  [
    "GroupsCometMoreActionMenuQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.groupID;
        return {
          queries: {
            queryReference: {
              parameters: b("GroupsCometMoreActionMenuQuery$Parameters"),
              variables: { groupID: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "GroupsCometMoreActionMenu.react"
      ).__setRef("GroupsCometMoreActionMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometJoinButtonWithMenu.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "GroupsCometMoreActionMenu.entrypoint",
    "TetraButtonGroup.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.groupID,
        e = a.primaryButtonConfig;
      return j.jsx(c("CometEntryPointPopoverTrigger.react"), {
        align: "middle",
        entryPointParams: { groupID: b },
        otherProps: {},
        popoverEntryPoint: c("GroupsCometMoreActionMenu.entrypoint"),
        preloadTrigger: "button",
        children: function (a, b, f, g, k, l) {
          return j.jsx(c("TetraButtonGroup.react"), {
            paddingHorizontal: 0,
            primary: e,
            secondaryIcon: {
              icon: d("fbicon")._(i("484386"), 16),
              label: h._("More"),
              onHoverIn: g,
              onHoverOut: k,
              onPress: b,
              onPressIn: l,
              ref: a,
            },
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
  "GroupsCometJoinedButton.react",
  [
    "fbt",
    "ix",
    "GroupsCometJoinButtonWithMenu.react",
    "TetraButton.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.groupID,
        e = a.groupURL,
        f = a.isCommunity;
      f = f === void 0 ? !1 : f;
      var g = a.onFooter;
      g = g === void 0 ? !1 : g;
      var k = a.onPressJoined,
        l = a.source,
        m = a.useShortenedCTA;
      m = m === void 0 ? !1 : m;
      a = a.withMenu;
      a = a === void 0 ? !1 : a;
      var n = {
          icon: m ? d("fbicon")._(i("647440"), 16) : void 0,
          label: m ? h._("View") : f ? h._("Visit Now") : h._("Visit Group"),
          linkProps: { url: e },
          onPress: k,
          reduceEmphasis: !g,
          type: g ? "secondary" : "primary",
        },
        o = {
          icon: d("fbicon")._(i("1009563"), 16),
          label: h._("Joined"),
          linkProps: { url: e },
          onPress: k,
          size: "large",
          type: "secondary",
        },
        p = {
          icon: d("fbicon")._(i("477813"), 16),
          label: h._("Joined"),
          linkProps: { url: e },
          onPress: k,
          reduceEmphasis: !0,
          size: "medium",
          type: "primary",
        };
      if (a)
        return j.jsx(c("GroupsCometJoinButtonWithMenu.react"), {
          groupID: b,
          primaryButtonConfig: n,
        });
      m = function () {
        switch (l) {
          case "comet_events_meet_your_hosts":
            return o;
          case "group_subfeed_page":
            return p;
          default:
            return n;
        }
      };
      f = m();
      return j.jsx(c("TetraButton.react"), babelHelpers["extends"]({}, f));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometCannotRequestButton.react",
  ["fbt", "GroupsCometJoinButtonWithMenu.react", "TetraButton.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.groupID;
      a = a.withMenu;
      var d = { disabled: !0, label: h._("Join Group"), type: "secondary" };
      return a
        ? i.jsx(c("GroupsCometJoinButtonWithMenu.react"), {
            groupID: b,
            primaryButtonConfig: d,
          })
        : i.jsx(c("TetraButton.react"), babelHelpers["extends"]({}, d));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useGroupsCometJoinActionButton",
  ["CometRelay", "react", "useGroupsCometJoinActionButton_group.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var c = a.group$key,
        e = a.groupShareTrackingParams;
      e = e === void 0 ? null : e;
      var f = a.isPrimary,
        g = a.onCancelRequestToJoinError,
        j = a.onCancelRequestToJoinSuccess,
        k = a.onFooter,
        l = a.onPressCancelRequest,
        m = a.onPressJoin,
        n = a.onPressJoined,
        o = a.onRequestToJoinError,
        p = a.onRequestToJoinSuccess,
        q = a.source,
        r = a.testid;
      a = a.useShortenedCTA;
      a = a === void 0 ? !1 : a;
      c = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useGroupsCometJoinActionButton_group.graphql")),
        c
      );
      c = c == null ? void 0 : c.join_action;
      return c == null
        ? null
        : i.jsx(d("CometRelay").MatchContainer, {
            match: c,
            props: {
              groupShareTrackingParams: e,
              isPrimary: f,
              onCancelRequestToJoinError: g,
              onCancelRequestToJoinSuccess: j,
              onFooter: k,
              onPressCancelRequest: l,
              onPressJoin: m,
              onPressJoined: n,
              onRequestToJoinError: o,
              onRequestToJoinSuccess: p,
              source: q,
              testid: r,
              useShortenedCTA: a,
            },
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useGroupsCometPrivacyIcon",
  [
    "ix",
    "CometRelay",
    "fbicon",
    "recoverableViolation",
    "useGroupsCometPrivacyIcon_privacyInfo.graphql",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("useGroupsCometPrivacyIcon_privacyInfo.graphql")),
        a
      );
      if (a.icon_name == null) return null;
      switch (a.icon_name) {
        case "arrows-left-right-circle":
          return d("fbicon")._(h("785426"), 12);
        case "business-briefcase":
          return d("fbicon")._(h("497865"), 12);
        case "globe-americas":
          return d("fbicon")._(h("560118"), 12);
        case "neighborhood":
          return d("fbicon")._(h("1721953"), 12);
        case "pennant":
          return d("fbicon")._(h("1679807"), 12);
        case "privacy":
          return d("fbicon")._(h("497243"), 12);
        case "privacy-unlocked":
          return d("fbicon")._(h("603210"), 12);
        default:
          return c("recoverableViolation")(
            "GroupPrivacyInfo.icon_name is not recognized.",
            "groups_comet"
          );
      }
    }
    g.useGroupsCometPrivacyIcon = a;
  },
  98
);
__d(
  "GroupsCometPrivacyText.react",
  [
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometTextWithEntitiesRelay.react",
    "GroupsCometPrivacyText_group.graphql",
    "TetraIcon.react",
    "react",
    "useGroupsCometPrivacyIcon",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.group$key;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("GroupsCometPrivacyText_group.graphql")),
        a
      );
      var e = d("useGroupsCometPrivacyIcon").useGroupsCometPrivacyIcon(
        a.privacy_info
      );
      return i.jsxs(c("CometRow.react"), {
        align: "start",
        paddingHorizontal: 0,
        paddingTop: 0,
        spacing: 4,
        verticalAlign: "center",
        children: [
          e &&
            i.jsx(c("CometRowItem.react"), {
              children: i.jsx(c("TetraIcon.react"), {
                color: "secondary",
                icon: e,
              }),
            }),
          i.jsx(c("CometRowItem.react"), {
            children: i.jsx(c("CometTextWithEntitiesRelay.react"), {
              textWithEntities: a.privacy_info.title,
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
  "useGroupsCometMemberCount",
  [
    "CometRelay",
    "recoverableViolation",
    "useGroupsCometMemberCount_group.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var e, f;
      a = a.group$key;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useGroupsCometMemberCount_group.graphql")),
        a
      );
      e =
        a == null
          ? void 0
          : (e = a.forum_member_profiles) == null
          ? void 0
          : e.formatted_count_text;
      f =
        a == null
          ? void 0
          : (f = a.group_member_profiles) == null
          ? void 0
          : f.formatted_count_text;
      if (e == null && f == null) return null;
      if (e != null && f != null) {
        return c("recoverableViolation")(
          "Both Group.forum_member_profiles and Group.group_member_profiles returned non-null values for group " +
            ((a = a.id) != null ? a : "(unknown ID)") +
            ". This should never happen.",
          "groups_comet"
        );
      }
      return (e = (a = e) != null ? a : f) != null ? e : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometMemberCountAndPrivacy.react",
  [
    "CometMiddot.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "GroupsCometMemberCountAndPrivacy_group.graphql",
    "GroupsCometPrivacyText.react",
    "react",
    "useGroupsCometMemberCount",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.group$key;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("GroupsCometMemberCountAndPrivacy_group.graphql")),
        a
      );
      var e = c("useGroupsCometMemberCount")({ group$key: a });
      return i.jsxs(c("CometRow.react"), {
        align: "start",
        paddingHorizontal: 0,
        paddingTop: 0,
        spacing: 4,
        verticalAlign: "center",
        wrap: "forward",
        children: [
          i.jsx(c("CometRowItem.react"), {
            children: i.jsx(c("GroupsCometPrivacyText.react"), {
              group$key: a,
            }),
          }),
          e != null &&
            i.jsx(c("CometRowItem.react"), {
              children: i.jsx(c("CometMiddot.react"), {}),
            }),
          e != null && i.jsx(c("CometRowItem.react"), { children: e }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometEventLinkedGroupInviteDialog.entrypoint",
  [
    "GroupsCometEventLinkedGroupInviteDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = a.eventID,
          e = a.groupID;
        a = a.source;
        return {
          queries: {
            queryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: c(
                "GroupsCometEventLinkedGroupInviteDialogQuery$Parameters"
              ),
              variables: {
                eventID: b,
                groupID: e,
                scale: d("WebPixelRatio").get(),
                source: a,
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "GroupsCometEventLinkedGroupInviteDialog.react"
      ).__setRef("GroupsCometEventLinkedGroupInviteDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometAppsDialog.entrypoint",
  [
    "GroupsCometAppsDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = a.enableGroupContext;
        a = a.groupID;
        return {
          queries: {
            myQueryReference: {
              parameters: c("GroupsCometAppsDialogQuery$Parameters"),
              variables: {
                enableGroupContext: b,
                groupID: a,
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "GroupsCometAppsDialog.react"
      ).__setRef("GroupsCometAppsDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometHeaderInviteMemberAddButton.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "GroupCometCreationTooltipWrapper.react",
    "GroupsCometHeaderInviteFacebookFriendsTrigger.react",
    "GroupsCometHeaderInviteMemberAddButton_action.graphql",
    "TetraButton.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a(a) {
      var e = a.action,
        f = a.isLabelHidden,
        g = f === void 0 ? !1 : f;
      f = a.isSecondary;
      var l = f === void 0 ? !1 : f,
        m = a.onPress;
      f = a.pageActorID;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("GroupsCometHeaderInviteMemberAddButton_action.graphql")),
        e
      );
      e = a.group;
      a = function (a) {
        return k.jsx(c("TetraButton.react"), {
          icon: d("fbicon")._(i("483768"), 16),
          label: h._("Invite"),
          labelIsHidden: g,
          onPress: function () {
            a(), m && m.apply(void 0, arguments);
          },
          testid: void 0,
          type: l ? "secondary" : void 0,
        });
      };
      return k.jsx(c("GroupCometCreationTooltipWrapper.react"), {
        children: k.jsx(
          c("GroupsCometHeaderInviteFacebookFriendsTrigger.react"),
          { group: e, pageActorID: f, children: a }
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useGroupsCometUserFlowLogger",
  ["QPLUserFlow", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useMemo,
      j = b.useRef,
      k = 0;
    function a(a) {
      var b = a.addPointOnLoad,
        d = a.addPointOnLoadStringAnnotations,
        e = a.instanceKey,
        f = a.quickLogEvent,
        g = a.startFlowOnLoad,
        l = g === void 0 ? !1 : g,
        m = a.startFlowStringAnnotations,
        n = j(!1),
        o = i(
          function () {
            var a;
            return (a = e) != null ? a : k;
          },
          [e]
        );
      h(
        function () {
          n.current === !1 &&
            ((n.current = !0),
            l &&
              c("QPLUserFlow").start(
                f,
                m != null
                  ? { annotations: { string: m }, instanceKey: o }
                  : { instanceKey: o }
              ),
            b != null &&
              c("QPLUserFlow").addPoint(
                f,
                b,
                d != null
                  ? { data: { string: d }, instanceKey: o }
                  : { instanceKey: o }
              ));
        },
        [b, d, o, f, l, m]
      );
      return i(
        function () {
          return {
            addPoint: function (a, b) {
              c("QPLUserFlow").addPoint(
                f,
                a,
                b != null
                  ? { data: { string: b }, instanceKey: o }
                  : { instanceKey: o }
              );
            },
            endCancel: function () {
              c("QPLUserFlow").endCancel(f, { instanceKey: o });
            },
            endFailure: function (a) {
              c("QPLUserFlow").endFailure(f, a, { instanceKey: o });
            },
            endSuccess: function () {
              c("QPLUserFlow").endSuccess(f, { instanceKey: o });
            },
            getAddPointFunction: function (a) {
              return function () {
                c("QPLUserFlow").addPoint(f, a, { instanceKey: o });
              };
            },
          };
        },
        [o, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "range",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      c = c == null || c === 0 ? (a < b ? 1 : -1) : c;
      var d = -1;
      b = Math.max(Math.ceil((b - a) / c), 0);
      var e = Array(b);
      a = a;
      while (b--) (e[++d] = a), (a += c);
      return e;
    }
    f["default"] = a;
  },
  66
);
