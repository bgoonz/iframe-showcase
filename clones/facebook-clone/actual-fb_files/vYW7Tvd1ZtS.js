if (self.CavalryLogger) {
  CavalryLogger.start_js(["l40g5Nd"]);
}

__d(
  "DetectBrokenProxyCache",
  ["AsyncSignal", "Cookie", "URI"],
  function (a, b, c, d, e, f) {
    var g;
    function a(a, c) {
      var d = b("Cookie").get(c);
      if (d != a && d != null && a != "0") {
        c = { c: "si_detect_broken_proxy_cache", m: c + " " + a + " " + d };
        a = new (g || (g = b("URI")))("/common/scribe_endpoint.php")
          .getQualifiedURI()
          .toString();
        new (b("AsyncSignal"))(a, c).send();
      }
    }
    e.exports = { run: a };
  },
  null
);
__d(
  "CometLogoutHandlerQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logout_whitelist",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logout_hash",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_confirmed_contactpoints",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        e = [d],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "CometLogoutHandlerQuery",
          selections: [
            a,
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                b,
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "account_user",
                  plural: !1,
                  selections: [
                    c,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "pending_contactpoints",
                      plural: !0,
                      selections: [
                        {
                          kind: "InlineFragment",
                          selections: e,
                          type: "PendingEmail",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: e,
                          type: "PhoneNumber",
                          abstractKey: null,
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "CometLogoutHandlerQuery",
          selections: [
            a,
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                b,
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "account_user",
                  plural: !1,
                  selections: [
                    c,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "pending_contactpoints",
                      plural: !0,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [f],
                          type: "Node",
                          abstractKey: "__isNode",
                        },
                      ],
                      storageKey: null,
                    },
                    f,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4245490798835423",
          metadata: {},
          name: "CometLogoutHandlerQuery",
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
  "CometRouteActorToasterQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "scale" }],
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        d = {
          alias: "toast_icon",
          args: [
            { kind: "Literal", name: "height", value: 32 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 32 },
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
        e = {
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
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometRouteActorToasterQuery",
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
                  selections: [b, c, d, e],
                  storageKey: null,
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometRouteActorToasterQuery",
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
                    b,
                    c,
                    d,
                    e,
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
        },
        params: {
          id: "4283634038368163",
          metadata: {},
          name: "CometRouteActorToasterQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometLoggedInAccountSwitcherPopoverMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4361331790578449",
        metadata: {},
        name: "CometLoggedInAccountSwitcherPopoverMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometLoggedInAccountSwitcher_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometLoggedInAccountSwitcher_query",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometLoggedInAccountSwitcherLogoutAndRedirectForm_query",
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
              alias: null,
              args: null,
              concreteType: "LoggedInAccountSwitcherAccount",
              kind: "LinkedField",
              name: "device_switchable_accounts",
              plural: !0,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometLoggedInAccountSwitcherRowWithUpdateText_account",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "user",
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
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometLoggedInAccountSwitcherRowWithUpdateText_query",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometProfileSwitcherPagePublishingAuthorizationCard_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometProfileSwitcherPagePublishingAuthorizationCard_query",
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
              kind: "ScalarField",
              name: "is_eligible_for_account_level_settings",
              storageKey: null,
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
                      name: "page_publishing_authorization_hub_action_url",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "page_publishing_authorization_admin_notice",
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
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometProfileSwitcher_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_switching_to_additional_profile",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "profile_plus_primary_platform_tool",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "delegate_page_id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_has_pending_core_app_access_approval",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        g = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 40 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 40 },
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "width",
              storageKey: null,
            },
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
          ],
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unseen_update_count",
          storageKey: null,
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "CometProfileSwitcher_query",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useProfileCometSwitcherCleanUpOnSwap_query",
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
                        concreteType:
                          "UserProfileSwitcherEligibleProfilesConnection",
                        kind: "LinkedField",
                        name: "profile_switcher_eligible_profiles",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "ProfileSwitcherEligibleProfile",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "profile",
                                plural: !1,
                                selections: [a, b, c, d, e, f, g, h],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      e,
                      f,
                      g,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "should_switch_landing_page",
                        storageKey: null,
                      },
                      a,
                      b,
                      c,
                      d,
                      h,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_failing_page_publishing_authorization",
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
                concreteType: "AdditionalProfileCreationEligibility",
                kind: "LinkedField",
                name: "additional_profile_creation_eligibility",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "AdditionalProfileCreationEligibilityType",
                    kind: "LinkedField",
                    name: "single_owner",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_create",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "explanation",
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
            args: null,
            kind: "FragmentSpread",
            name: "CometProfileSwitcherPagePublishingAuthorizationCard_query",
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometSettingsDropdownHeader_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometSettingsDropdownHeader_viewer",
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
              name: "name",
              storageKey: null,
            },
            {
              alias: "settings_dropdown_profile_picture",
              args: [
                { kind: "Literal", name: "height", value: 60 },
                { kind: "Variable", name: "scale", variableName: "scale" },
                { kind: "Literal", name: "width", value: 60 },
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
                  kind: "ScalarField",
                  name: "should_use_page_rename",
                  storageKey: null,
                },
                {
                  alias: "profileSwitcherEligibleProfiles",
                  args: null,
                  concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                  kind: "LinkedField",
                  name: "profile_switcher_eligible_profiles",
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
  "CometSettingsDropdownListQuery.graphql",
  [
    "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "inProfileSwitcherEntry",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        },
        e = {
          alias: "profileSwitcherEligibleProfiles",
          args: null,
          concreteType: "UserProfileSwitcherEligibleProfilesConnection",
          kind: "LinkedField",
          name: "profile_switcher_eligible_profiles",
          plural: !1,
          selections: [d],
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        h = { kind: "Variable", name: "scale", variableName: "scale" },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        j = [
          i,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "width",
            storageKey: null,
          },
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
        ],
        k = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 36 },
            h,
            { kind: "Literal", name: "width", value: 36 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: j,
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unseen_update_count",
          storageKey: null,
        },
        m = [
          { kind: "Literal", name: "height", value: 40 },
          h,
          { kind: "Literal", name: "width", value: 40 },
        ],
        n = {
          alias: null,
          args: m,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: j,
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "profile_plus_primary_platform_tool",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "delegate_page_id",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_has_pending_core_app_access_approval",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_switching_to_additional_profile",
          storageKey: null,
        },
        s = [{ kind: "Literal", name: "first", value: 1 }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unread_notification_count",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          concreteType: "LoggedInAccountSwitcherAccountForm",
          kind: "LinkedField",
          name: "form",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "action",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "LoggedInAccountSwitcherAccountFormField",
              kind: "LinkedField",
              name: "inputs",
              plural: !0,
              selections: [
                g,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "value",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c],
          kind: "Fragment",
          metadata: null,
          name: "CometSettingsDropdownListQuery",
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
                    {
                      kind: "InlineFragment",
                      selections: [e],
                      type: "User",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometSettingsDropdownHeader_viewer",
                },
              ],
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometSettingsDropdownSettingsAndPrivacy_query",
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "useCometCombinedProfileAccountSwitcherListCell_query",
            },
            {
              condition: "inProfileSwitcherEntry",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useCometSettingsDropdownAdditionalProfileListCell_query",
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [c, a],
          kind: "Operation",
          name: "CometSettingsDropdownListQuery",
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
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    f,
                    g,
                    {
                      alias: "settings_dropdown_profile_picture",
                      args: [
                        { kind: "Literal", name: "height", value: 60 },
                        h,
                        { kind: "Literal", name: "width", value: 60 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "profile_picture",
                      plural: !1,
                      selections: [i],
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        e,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "should_use_page_rename",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "PolyglotUserProgress",
                          kind: "LinkedField",
                          name: "polyglot_user_progress",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "inline_mode",
                              storageKey: null,
                            },
                            f,
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "username",
                          storageKey: null,
                        },
                        {
                          alias: "first_profiles",
                          args: [{ kind: "Literal", name: "first", value: 2 }],
                          concreteType:
                            "UserProfileSwitcherEligibleProfilesConnection",
                          kind: "LinkedField",
                          name: "profile_switcher_eligible_profiles",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ProfileSwitcherEligibleProfile",
                              kind: "LinkedField",
                              name: "nodes",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "User",
                                  kind: "LinkedField",
                                  name: "profile",
                                  plural: !1,
                                  selections: [k, f],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey:
                            "profile_switcher_eligible_profiles(first:2)",
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "UserProfileSwitcherEligibleProfilesConnection",
                          kind: "LinkedField",
                          name: "profile_switcher_eligible_profiles",
                          plural: !1,
                          selections: [
                            d,
                            {
                              alias: null,
                              args: null,
                              concreteType: "ProfileSwitcherEligibleProfile",
                              kind: "LinkedField",
                              name: "nodes",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "User",
                                  kind: "LinkedField",
                                  name: "profile",
                                  plural: !1,
                                  selections: [l, f, g, n, o, p, q, r],
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
                          name: "page_publishing_authorization_hub_action_url",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "TextWithEntities",
                          kind: "LinkedField",
                          name: "page_publishing_authorization_admin_notice",
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
                          name: "is_failing_page_publishing_authorization",
                          storageKey: null,
                        },
                        o,
                        p,
                        n,
                        q,
                        l,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "should_switch_landing_page",
                          storageKey: null,
                        },
                        r,
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
                  alias: "first_account",
                  args: s,
                  concreteType: "LoggedInAccountSwitcherAccount",
                  kind: "LinkedField",
                  name: "device_switchable_accounts",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "user",
                      plural: !1,
                      selections: [k, f, g],
                      storageKey: null,
                    },
                    t,
                    u,
                  ],
                  storageKey: "device_switchable_accounts(first:1)",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "LoggedInAccountSwitcherAccount",
                  kind: "LinkedField",
                  name: "device_switchable_accounts",
                  plural: !0,
                  selections: [
                    t,
                    {
                      alias: null,
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "user",
                      plural: !1,
                      selections: [
                        f,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "short_name",
                          storageKey: null,
                        },
                        g,
                        {
                          alias: "switcher_profile_picture",
                          args: m,
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "profile_picture",
                          plural: !1,
                          selections: j,
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "nonce",
                      storageKey: null,
                    },
                    u,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "AdditionalProfileCreationEligibility",
                  kind: "LinkedField",
                  name: "additional_profile_creation_eligibility",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdditionalProfileCreationEligibilityType",
                      kind: "LinkedField",
                      name: "single_owner",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "can_create",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "explanation",
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
                  name: "logout_hash",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: [
                { kind: "Literal", name: "query", value: "" },
                { kind: "Literal", name: "suggested_locale_limit", value: 4 },
              ],
              concreteType: "IntlLocaleSelectorTypeaheadQuery",
              kind: "LinkedField",
              name: "intl_locale_selector_query",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "LocaleSelectorTypeaheadItem",
                  kind: "LinkedField",
                  name: "current_locale",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "localized_name",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey:
                'intl_locale_selector_query(query:"",suggested_locale_limit:4)',
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "logout_whitelist",
              storageKey: null,
            },
            {
              condition: "inProfileSwitcherEntry",
              kind: "Condition",
              passingValue: !0,
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
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: "first_profile",
                              args: s,
                              concreteType:
                                "UserProfileSwitcherEligibleProfilesConnection",
                              kind: "LinkedField",
                              name: "profile_switcher_eligible_profiles",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "ProfileSwitcherEligibleProfile",
                                  kind: "LinkedField",
                                  name: "nodes",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "User",
                                      kind: "LinkedField",
                                      name: "profile",
                                      plural: !1,
                                      selections: [f, g, k, l],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey:
                                "profile_switcher_eligible_profiles(first:1)",
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "4296727780407052",
          metadata: {},
          name: "CometSettingsDropdownListQuery",
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
  "CometSettingsDropdownQuickHelpQuery.graphql",
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
      };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "CometSettingsDropdownQuickHelpQuery",
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
                  selections: [a],
                  storageKey: null,
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
          name: "CometSettingsDropdownQuickHelpQuery",
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
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
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
        },
        params: {
          id: "3378026022267210",
          metadata: {},
          name: "CometSettingsDropdownQuickHelpQuery",
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
  "CometSettingsDropdownSettingsAndPrivacy_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometSettingsDropdownSettingsAndPrivacy_query",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometSettingsDropdownInternationalization_query",
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
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "username",
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
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometLoggedInAccountSwitcherRemoveAccountMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "id" },
          { defaultValue: null, kind: "LocalArgument", name: "nonce" },
        ],
        b = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "account_id", variableName: "id" },
              { kind: "Variable", name: "nonce", variableName: "nonce" },
            ],
            concreteType:
              "RemoveAccountFromLoggedInAccountSwitcherResponsePayload",
            kind: "LinkedField",
            name: "remove_account_from_logged_in_account_switcher",
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
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometLoggedInAccountSwitcherRemoveAccountMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometLoggedInAccountSwitcherRemoveAccountMutation",
          selections: b,
        },
        params: {
          id: "4080273905344940",
          metadata: {},
          name: "CometLoggedInAccountSwitcherRemoveAccountMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useCometLoggedInAccountSwitcherListCell_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "unread_notification_count",
        storageKey: null,
      };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "useCometLoggedInAccountSwitcherListCell_query",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_query",
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
                alias: "first_account",
                args: [{ kind: "Literal", name: "first", value: 1 }],
                concreteType: "LoggedInAccountSwitcherAccount",
                kind: "LinkedField",
                name: "device_switchable_accounts",
                plural: !0,
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    concreteType: "LoggedInAccountSwitcherAccountForm",
                    kind: "LinkedField",
                    name: "form",
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_form",
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "user",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: [
                          { kind: "Literal", name: "height", value: 36 },
                          {
                            kind: "Variable",
                            name: "scale",
                            variableName: "scale",
                          },
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
                            name: "scale",
                            storageKey: null,
                          },
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
                            name: "width",
                            storageKey: null,
                          },
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
                    storageKey: null,
                  },
                ],
                storageKey: "device_switchable_accounts(first:1)",
              },
              {
                alias: null,
                args: null,
                concreteType: "LoggedInAccountSwitcherAccount",
                kind: "LinkedField",
                name: "device_switchable_accounts",
                plural: !0,
                selections: [a],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometLoggedInAccountSwitcher_query",
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometLoggedInAccountSwitcherRowWithUpdateText_account.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometLoggedInAccountSwitcherRowWithUpdateText_account",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometLoggedInAccountSwitcherRemoveAccount_account",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unread_notification_count",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "LoggedInAccountSwitcherAccountForm",
          kind: "LinkedField",
          name: "form",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_form",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "user",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
            {
              alias: "switcher_profile_picture",
              args: [
                { kind: "Literal", name: "height", value: 40 },
                { kind: "Variable", name: "scale", variableName: "scale" },
                { kind: "Literal", name: "width", value: 40 },
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
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "width",
                  storageKey: null,
                },
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
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "LoggedInAccountSwitcherAccount",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometLoggedInAccountSwitcherRowWithUpdateText_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometLoggedInAccountSwitcherRowWithUpdateText_query",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_query",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometProfileAndAccountSwitcher_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          args: null,
          kind: "FragmentSpread",
          name: "CometProfileSwitcherListCell_profile",
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "profile_plus_primary_platform_tool",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "delegate_page_id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_has_pending_core_app_access_approval",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        g = { kind: "Variable", name: "scale", variableName: "scale" },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        i = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 40 },
            g,
            { kind: "Literal", name: "width", value: 40 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: [h],
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unread_notification_count",
          storageKey: null,
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "CometProfileAndAccountSwitcher_query",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useProfileCometSwitcherCleanUpOnSwap_query",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometProfileSwitcherPagePublishingAuthorizationCard_query",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: {
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
                            kind: "RequiredField",
                            field: {
                              alias: null,
                              args: null,
                              concreteType:
                                "UserProfileSwitcherEligibleProfilesConnection",
                              kind: "LinkedField",
                              name: "profile_switcher_eligible_profiles",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "ProfileSwitcherEligibleProfile",
                                  kind: "LinkedField",
                                  name: "nodes",
                                  plural: !0,
                                  selections: [
                                    {
                                      kind: "RequiredField",
                                      field: {
                                        alias: null,
                                        args: null,
                                        concreteType: "User",
                                        kind: "LinkedField",
                                        name: "profile",
                                        plural: !1,
                                        selections: [
                                          a,
                                          b,
                                          c,
                                          d,
                                          {
                                            kind: "RequiredField",
                                            field: e,
                                            action: "THROW",
                                            path: "viewer.actor.profile_switcher_eligible_profiles.nodes.profile.id",
                                          },
                                          f,
                                          i,
                                        ],
                                        storageKey: null,
                                      },
                                      action: "THROW",
                                      path: "viewer.actor.profile_switcher_eligible_profiles.nodes.profile",
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            action: "THROW",
                            path: "viewer.actor.profile_switcher_eligible_profiles",
                          },
                          e,
                          f,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_failing_page_publishing_authorization",
                            storageKey: null,
                          },
                          b,
                          c,
                          i,
                          d,
                          a,
                        ],
                        type: "User",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "viewer.actor",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "AdditionalProfileCreationEligibility",
                  kind: "LinkedField",
                  name: "additional_profile_creation_eligibility",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdditionalProfileCreationEligibilityType",
                      kind: "LinkedField",
                      name: "single_owner",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "can_create",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "explanation",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: "first_account",
                  args: [{ kind: "Literal", name: "first", value: 1 }],
                  concreteType: "LoggedInAccountSwitcherAccount",
                  kind: "LinkedField",
                  name: "device_switchable_accounts",
                  plural: !0,
                  selections: [
                    j,
                    {
                      alias: null,
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "user",
                      plural: !1,
                      selections: [
                        e,
                        f,
                        {
                          alias: null,
                          args: [
                            { kind: "Literal", name: "height", value: 36 },
                            g,
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
                              name: "scale",
                              storageKey: null,
                            },
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
                              name: "width",
                              storageKey: null,
                            },
                            h,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: "device_switchable_accounts(first:1)",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "LoggedInAccountSwitcherAccount",
                  kind: "LinkedField",
                  name: "device_switchable_accounts",
                  plural: !0,
                  selections: [j],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "viewer",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometLoggedInAccountSwitcher_query",
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometProfileSwitcherListCell_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometProfileSwitcherListCell_profile",
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
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 40 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 40 },
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "width",
              storageKey: null,
            },
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
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unseen_update_count",
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
  "useCometCombinedProfileAccountSwitcherListCell_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "width",
              storageKey: null,
            },
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
          ],
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "useCometCombinedProfileAccountSwitcherListCell_query",
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
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: "first_profiles",
                        args: [{ kind: "Literal", name: "first", value: 2 }],
                        concreteType:
                          "UserProfileSwitcherEligibleProfilesConnection",
                        kind: "LinkedField",
                        name: "profile_switcher_eligible_profiles",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: "ProfileSwitcherEligibleProfile",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "profile",
                                plural: !1,
                                selections: a,
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey:
                          "profile_switcher_eligible_profiles(first:2)",
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType:
                          "UserProfileSwitcherEligibleProfilesConnection",
                        kind: "LinkedField",
                        name: "profile_switcher_eligible_profiles",
                        plural: !1,
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
                            concreteType: "ProfileSwitcherEligibleProfile",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "profile",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "unseen_update_count",
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
                    type: "User",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: "first_account",
                args: [{ kind: "Literal", name: "first", value: 1 }],
                concreteType: "LoggedInAccountSwitcherAccount",
                kind: "LinkedField",
                name: "device_switchable_accounts",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "user",
                    plural: !1,
                    selections: a,
                    storageKey: null,
                  },
                ],
                storageKey: "device_switchable_accounts(first:1)",
              },
              {
                alias: null,
                args: null,
                concreteType: "LoggedInAccountSwitcherAccount",
                kind: "LinkedField",
                name: "device_switchable_accounts",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "unread_notification_count",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometProfileAndAccountSwitcher_query",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometProfileSwitcher_query",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCometLoggedInAccountSwitcherListCell_query",
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "LiveVideoCometNuxForCVCQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "nuxID" },
          { defaultValue: null, kind: "LocalArgument", name: "videoID" },
        ],
        b = [{ kind: "Variable", name: "nux_id", variableName: "nuxID" }],
        c = {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "LiveVideoCometNuxForCVCQuery",
              fragmentName: "LiveVideoCometNuxForCVCInternal_nux",
              fragmentPropName: "nux",
              kind: "ModuleImport",
            },
          ],
          type: "DefaultNUX",
          abstractKey: null,
        },
        d = [{ kind: "Variable", name: "id", variableName: "videoID" }],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "LiveVideoCometNuxForCVCQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "nux",
              plural: !1,
              selections: [c],
              storageKey: null,
            },
            {
              alias: null,
              args: d,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "LiveVideoCometNuxForCVCInternal_video",
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "LiveVideoCometNuxForCVCQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: null,
              kind: "LinkedField",
              name: "nux",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                c,
                e,
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: d,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_premiere",
                  storageKey: null,
                },
                e,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3832265616859130",
          metadata: {},
          name: "LiveVideoCometNuxForCVCQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometBatchNotificationsStateChangeSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "environment",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "input" },
        c = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "BatchNotificationStateChangeSubscribeResponsePayload",
            kind: "LinkedField",
            name: "batch_notification_state_change_subscribe",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Notification",
                kind: "LinkedField",
                name: "aggregated_notifications",
                plural: !0,
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
                    name: "seen_state",
                    storageKey: null,
                  },
                ],
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
                    alias: null,
                    args: [
                      {
                        kind: "Variable",
                        name: "environment",
                        variableName: "environment",
                      },
                    ],
                    kind: "ScalarField",
                    name: "notifications_unseen_count",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "last_update_timestamp",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "CometBatchNotificationsStateChangeSubscription",
          selections: c,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "CometBatchNotificationsStateChangeSubscription",
          selections: c,
        },
        params: {
          id: "3434598286567017",
          metadata: {
            subscriptionName: "batch_notification_state_change_subscribe",
          },
          name: "CometBatchNotificationsStateChangeSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsStateChangeSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "environment",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "input" },
        c = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "NotificationStateChangeSubscribeResponsePayload",
            kind: "LinkedField",
            name: "notification_state_change_subscribe",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Notification",
                kind: "LinkedField",
                name: "notification",
                plural: !1,
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
                    name: "seen_state",
                    storageKey: null,
                  },
                ],
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
                    alias: null,
                    args: [
                      {
                        kind: "Variable",
                        name: "environment",
                        variableName: "environment",
                      },
                    ],
                    kind: "ScalarField",
                    name: "notifications_unseen_count",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "last_update_timestamp",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "CometNotificationsStateChangeSubscription",
          selections: c,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "CometNotificationsStateChangeSubscription",
          selections: c,
        },
        params: {
          id: "2889547877749972",
          metadata: { subscriptionName: "notification_state_change_subscribe" },
          name: "CometNotificationsStateChangeSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometHeaderActionBarMenuItemWithoutIsActiveField_profileAction.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Literal", name: "icon_color", value: "fds-black" },
        b = { kind: "Literal", name: "icon_size", value: "20" },
        c = { kind: "Variable", name: "scale", variableName: "scale" },
        d = [
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
        ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometHeaderActionBarMenuItemWithoutIsActiveField_profileAction",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "profile_action_type",
            storageKey: null,
          },
          {
            alias: "secondary_icon",
            args: [
              a,
              b,
              { kind: "Literal", name: "icon_variant", value: "outline" },
              c,
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon_image",
            plural: !1,
            selections: d,
            storageKey: null,
          },
          {
            alias: "active_secondary_icon",
            args: [
              a,
              b,
              { kind: "Literal", name: "icon_variant", value: "filled" },
              c,
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon_image",
            plural: !1,
            selections: d,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "ProfileCometActionTrigger_action",
          },
        ],
        type: "ProfileAction",
        abstractKey: "__isProfileAction",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometHeaderActionBarMenuItem_profileAction.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Literal", name: "icon_color", value: "fds-black" },
        b = { kind: "Literal", name: "icon_size", value: "20" },
        c = { kind: "Variable", name: "scale", variableName: "scale" },
        d = [
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
        ];
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometHeaderActionBarMenuItem_profileAction",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "profile_action_type",
            storageKey: null,
          },
          {
            alias: "secondary_icon",
            args: [
              a,
              b,
              { kind: "Literal", name: "icon_variant", value: "outline" },
              c,
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon_image",
            plural: !1,
            selections: d,
            storageKey: null,
          },
          {
            alias: "active_secondary_icon",
            args: [
              a,
              b,
              { kind: "Literal", name: "icon_variant", value: "filled" },
              c,
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "icon_image",
            plural: !1,
            selections: d,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_active",
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "ProfileCometActionTrigger_action",
          },
        ],
        type: "ProfileAction",
        abstractKey: "__isProfileAction",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql",
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
      name: "ProfileCometHeaderActionBarMoreMenu_actorWithActionBar",
      selections: [
        {
          alias: "secondaryActions",
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
              name: "id",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "ProfileCometHeaderActionBarMenuItem_profileAction",
            },
          ],
          storageKey: null,
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
  "PresenceStatusProviderSubscriptionComponentQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [{ kind: "Variable", name: "count", variableName: "count" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "buddy_id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PresenceStatusProviderSubscriptionComponentQuery",
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
                  args: b,
                  concreteType: "ChatSidebarRankedContact",
                  kind: "LinkedField",
                  name: "chat_sidebar_contact_rankings",
                  plural: !0,
                  selections: [
                    {
                      kind: "InlineDataFragmentSpread",
                      name: "PresenceStatusProviderSubscription_rankings",
                      selections: [
                        c,
                        d,
                        {
                          alias: null,
                          args: null,
                          concreteType: "User",
                          kind: "LinkedField",
                          name: "user",
                          plural: !1,
                          selections: [
                            e,
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "MWChatContact_profile",
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  storageKey: null,
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "PresenceStatusProviderSubscriptionComponentQuery",
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
                  args: b,
                  concreteType: "ChatSidebarRankedContact",
                  kind: "LinkedField",
                  name: "chat_sidebar_contact_rankings",
                  plural: !0,
                  selections: [
                    c,
                    d,
                    {
                      alias: null,
                      args: null,
                      concreteType: "User",
                      kind: "LinkedField",
                      name: "user",
                      plural: !1,
                      selections: [
                        e,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "name",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: [
                                { kind: "Literal", name: "height", value: 36 },
                                {
                                  kind: "Variable",
                                  name: "scale",
                                  variableName: "scale",
                                },
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
                                  kind: "ClientExtension",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "availability",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "last_active_time",
                                      storageKey: null,
                                    },
                                  ],
                                },
                              ],
                              type: "User",
                              abstractKey: null,
                            },
                          ],
                          type: "Profile",
                          abstractKey: "__isProfile",
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
          id: "4601721123227254",
          metadata: {},
          name: "PresenceStatusProviderSubscriptionComponentQuery",
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
  "PresenceStatusProviderSubscription_ContactProfilesQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "ids" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [{ kind: "Variable", name: "ids", variableName: "ids" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        e = {
          alias: null,
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
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PresenceStatusProviderSubscription_ContactProfilesQuery",
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
                  args: b,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "chat_sidebar_contact_nodes",
                  plural: !0,
                  selections: [c, d, e],
                  storageKey: null,
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "PresenceStatusProviderSubscription_ContactProfilesQuery",
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
                  args: b,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "chat_sidebar_contact_nodes",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    c,
                    { kind: "TypeDiscriminator", abstractKey: "__isProfile" },
                    d,
                    e,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4115654068514312",
          metadata: {},
          name: "PresenceStatusProviderSubscription_ContactProfilesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "chat_visibility",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_converted_to_view_side_settings",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: "PresenceViewerBasedSettings",
                  kind: "LinkedField",
                  name: "presence_view_side_settings",
                  plural: !1,
                  selections: [b],
                  storageKey: null,
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
          name: "PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: "PresenceViewerBasedSettings",
                  kind: "LinkedField",
                  name: "presence_view_side_settings",
                  plural: !1,
                  selections: [
                    b,
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
        },
        params: {
          id: "2607318959337318",
          metadata: {},
          name: "PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PresenceStatusProviderSubscription_rankings.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "PresenceStatusProviderSubscription_rankings",
    };
    e.exports = a;
  },
  null
);
__d(
  "RTWebCallBlockSettingHooksQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
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
              kind: "ScalarField",
              name: "call_blocked_until",
              storageKey: null,
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
          name: "RTWebCallBlockSettingHooksQuery",
          selections: a,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "RTWebCallBlockSettingHooksQuery",
          selections: a,
        },
        params: {
          id: "5359827550755125",
          metadata: {},
          name: "RTWebCallBlockSettingHooksQuery",
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
  "RTWebCometRoomIncomingCallDialog_DisclaimerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5077922372277873",
        metadata: {},
        name: "RTWebCometRoomIncomingCallDialog_DisclaimerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerWithWatchAndScrollWarningScreen_video.graphql",
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
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "VideoPlayerWithWatchAndScrollWarningScreen_video",
        selections: [
          {
            alias: null,
            args: [
              { kind: "Literal", name: "framework", value: "WARNING_SCREENS" },
              { kind: "Literal", name: "location", value: "video_channel" },
            ],
            concreteType: "CIXScreen",
            kind: "LinkedField",
            name: "cix_screen",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "view_model",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "VideoPlayerWithWatchAndScrollWarningScreen_video",
                        fragmentName: "CometWarningScreenOverlay_data",
                        fragmentPropName: "data",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "OverlayWarningScreenViewModel",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey:
              'cix_screen(framework:"WARNING_SCREENS",location:"video_channel")',
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "container_story",
            plural: !1,
            selections: [a],
            storageKey: null,
          },
          a,
          {
            alias: null,
            args: null,
            concreteType: "VideoThumbnail",
            kind: "LinkedField",
            name: "preferred_thumbnail",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Image",
                kind: "LinkedField",
                name: "image",
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
            storageKey: null,
          },
        ],
        type: "Video",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerDefaultControlsImplLive_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerDefaultControlsImplLive_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerLiveVideoControls_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerDefaultControlsImplNotLive_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerDefaultControlsImplNotLive_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerScrubberPreview_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerWatchAndScrollControl_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerLiveVideoControls_video.graphql",
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
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "VideoPlayerLiveVideoControls_video",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_clipping_enabled",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "live_rewind_enabled",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [a],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "VideoPlayerWatchAndScrollControl_video",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "LiveVideoLatencyMenuContextProvider_video",
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_see_community_moderation_tools",
            plural: !1,
            selections: [
              {
                args: null,
                documentName: "VideoPlayerLiveVideoControls_video",
                fragmentName: "VideoPlayerModeratorControl_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_use_live_rewind",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "VideoPlayerLiveVideoControls_video_if_viewer_can_use_live_rewind",
                fragmentName: "VideoPlayerLiveRewindControlsGroup_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_use_live_clipping",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "VideoPlayerLiveVideoControls_video_if_viewer_can_use_live_clipping",
                fragmentName: "VideoPlayerClipVideoControl_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_see_costreaming_tools",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "VideoPlayerLiveVideoControls_video_if_viewer_can_see_costreaming_tools",
                fragmentName: "VideoPlayerCostreamingControl_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
        ],
        type: "Video",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerSkipControl_video.graphql",
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
          { defaultValue: "WNS", kind: "LocalArgument", name: "caller" },
          {
            defaultValue: "WNS",
            kind: "LocalArgument",
            name: "channelEntryPoint",
          },
          { defaultValue: 1, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { defaultValue: null, kind: "LocalArgument", name: "seedVideoID" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "VideoPlayerSkipControl_video",
        selections: [
          a,
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "entry_point",
                variableName: "channelEntryPoint",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "video_channel",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  { kind: "Variable", name: "after", variableName: "cursor" },
                  { kind: "Variable", name: "caller", variableName: "caller" },
                  {
                    kind: "Variable",
                    name: "exclude_video",
                    variableName: "seedVideoID",
                  },
                  { kind: "Variable", name: "first", variableName: "count" },
                ],
                concreteType: "VideoChannelFeedConnection",
                kind: "LinkedField",
                name: "video_channel_feed",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "VideoChannelFeedEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cursor",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "StoryAttachment",
                                kind: "LinkedField",
                                name: "attachments",
                                plural: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "media",
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
                                          a,
                                          {
                                            args: null,
                                            kind: "FragmentSpread",
                                            name: "CometWatchAndScrollUpNextCard_video",
                                          },
                                        ],
                                        type: "Video",
                                        abstractKey: null,
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
                                name: "click_tracking_linkshim_cb",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "encrypted_click_tracking",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "encrypted_tracking",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "viewability_config",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: "CometClientViewConfig",
                                kind: "LinkedField",
                                name: "client_view_config",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "can_delay_log_impression",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "use_banzai_signal_imp",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "use_banzai_vital_imp",
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            type: "Story",
                            abstractKey: null,
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
        type: "Video",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerWatchAndScrollControl_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerWatchAndScrollControl_video",
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
          name: "playable_duration_in_ms",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "owner",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_professional_features_for_watch",
                  storageKey: null,
                },
              ],
              type: "VideoOwner",
              abstractKey: "__isVideoOwner",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerWatchAndScrollControlNUXQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ kind: "Literal", name: "nux_id", value: 9347 }],
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "useVideoPlayerWatchAndScrollControlNUXQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "nux",
              plural: !1,
              selections: [b],
              storageKey: "nux(nux_id:9347)",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "useVideoPlayerWatchAndScrollControlNUXQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "nux",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                b,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: "nux(nux_id:9347)",
            },
          ],
        },
        params: {
          id: "4063034090470312",
          metadata: {},
          name: "useVideoPlayerWatchAndScrollControlNUXQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometWatchAndScrollChainingQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "caller" },
          { defaultValue: null, kind: "LocalArgument", name: "chainingCursor" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "channelEntryPoint",
          },
          { defaultValue: null, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "seedVideoID" },
        ],
        b = [{ kind: "Variable", name: "id", variableName: "seedVideoID" }],
        c = [
          {
            kind: "Variable",
            name: "entry_point",
            variableName: "channelEntryPoint",
          },
        ],
        d = [
          { kind: "Variable", name: "after", variableName: "chainingCursor" },
          { kind: "Variable", name: "caller", variableName: "caller" },
          {
            kind: "Variable",
            name: "exclude_video",
            variableName: "seedVideoID",
          },
          { kind: "Variable", name: "first", variableName: "count" },
        ],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cursor",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        h = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        i = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 202 },
            { kind: "Literal", name: "sizing", value: "cover-fill-cropped" },
            { kind: "Literal", name: "width", value: 360 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: h,
          storageKey: 'image(height:202,sizing:"cover-fill-cropped",width:360)',
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "click_tracking_linkshim_cb",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_click_tracking",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewability_config",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          concreteType: "CometClientViewConfig",
          kind: "LinkedField",
          name: "client_view_config",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "can_delay_log_impression",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "use_banzai_signal_imp",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "use_banzai_vital_imp",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        o = [{ kind: "Literal", name: "site", value: "www" }],
        p = [g],
        q = {
          kind: "InlineFragment",
          selections: p,
          type: "Node",
          abstractKey: "__isNode",
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometWatchAndScrollChainingQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: c,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "video_channel",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: d,
                      concreteType: "VideoChannelFeedConnection",
                      kind: "LinkedField",
                      name: "video_channel_feed",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "VideoChannelFeedEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            e,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryAttachment",
                                      kind: "LinkedField",
                                      name: "attachments",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "media",
                                          plural: !1,
                                          selections: [
                                            f,
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  kind: "FragmentSpread",
                                                  name: "CometWatchAndScrollContextSection_video",
                                                },
                                                {
                                                  args: null,
                                                  kind: "FragmentSpread",
                                                  name: "CometWatchAndScrollUpNextCard_video",
                                                },
                                                g,
                                                i,
                                              ],
                                              type: "Video",
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    j,
                                    k,
                                    l,
                                    m,
                                    n,
                                  ],
                                  type: "Story",
                                  abstractKey: null,
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
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometWatchAndScrollFallbackCTAScreen_video",
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometWatchAndScrollChainingQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: c,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "video_channel",
                  plural: !1,
                  selections: [
                    f,
                    {
                      alias: null,
                      args: d,
                      concreteType: "VideoChannelFeedConnection",
                      kind: "LinkedField",
                      name: "video_channel_feed",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "VideoChannelFeedEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            e,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                f,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryAttachment",
                                      kind: "LinkedField",
                                      name: "attachments",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "media",
                                          plural: !1,
                                          selections: [
                                            f,
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "title_with_fallback",
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType: null,
                                                  kind: "LinkedField",
                                                  name: "owner",
                                                  plural: !1,
                                                  selections: [
                                                    f,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "name",
                                                      storageKey: null,
                                                    },
                                                    g,
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "height",
                                                          value: 32,
                                                        },
                                                        {
                                                          kind: "Variable",
                                                          name: "scale",
                                                          variableName: "scale",
                                                        },
                                                        {
                                                          kind: "Literal",
                                                          name: "width",
                                                          value: 32,
                                                        },
                                                      ],
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "profile_picture",
                                                      plural: !1,
                                                      selections: h,
                                                      storageKey: null,
                                                    },
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "has_professional_features_for_watch",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      type: "VideoOwner",
                                                      abstractKey:
                                                        "__isVideoOwner",
                                                    },
                                                    {
                                                      kind: "InlineFragment",
                                                      selections: [
                                                        {
                                                          alias: null,
                                                          args: o,
                                                          kind: "ScalarField",
                                                          name: "url",
                                                          storageKey:
                                                            'url(site:"www")',
                                                        },
                                                      ],
                                                      type: "User",
                                                      abstractKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                                i,
                                                g,
                                              ],
                                              type: "Video",
                                              abstractKey: null,
                                            },
                                            q,
                                            {
                                              kind: "InlineFragment",
                                              selections: p,
                                              type: "GenericAttachmentMedia",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: p,
                                              type: "MontageImage",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: p,
                                              type: "MontageVideo",
                                              abstractKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    j,
                                    k,
                                    l,
                                    m,
                                    n,
                                  ],
                                  type: "Story",
                                  abstractKey: null,
                                },
                                q,
                                {
                                  kind: "InlineFragment",
                                  selections: p,
                                  type: "CommunityChatFeedObject",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: p,
                                  type: "CommunityTabNewJoinFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: p,
                                  type: "CommunityTabTrendingPOGFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: p,
                                  type: "XFBGroupsTabSuggestedGroupSetFeedUnit",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: p,
                                  type: "XFBGroupsTabSuggestedGroupSetsFeedUnit",
                                  abstractKey: null,
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
                    g,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_viewer_share",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "creation_story",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "shareable",
                      plural: !1,
                      selections: [
                        f,
                        {
                          alias: "wwwUrl",
                          args: o,
                          kind: "ScalarField",
                          name: "url",
                          storageKey: 'url(site:"www")',
                        },
                        q,
                      ],
                      storageKey: null,
                    },
                    g,
                  ],
                  storageKey: null,
                },
                g,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3780271015408064",
          metadata: {},
          name: "CometWatchAndScrollChainingQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometWatchAndScrollCloseButton_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWatchAndScrollCloseButton_video",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "owner",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_professional_features_for_watch",
                  storageKey: null,
                },
              ],
              type: "VideoOwner",
              abstractKey: "__isVideoOwner",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWatchAndScrollContainer_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWatchAndScrollContainer_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoOriginalDimensionsRelay_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWatchAndScrollContextSection_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometWatchAndScrollContextSection_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title_with_fallback",
          storageKey: null,
        },
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
              name: "name",
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
              args: [
                { kind: "Literal", name: "height", value: 32 },
                { kind: "Variable", name: "scale", variableName: "scale" },
                { kind: "Literal", name: "width", value: 32 },
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
                  kind: "ScalarField",
                  name: "has_professional_features_for_watch",
                  storageKey: null,
                },
              ],
              type: "VideoOwner",
              abstractKey: "__isVideoOwner",
            },
            {
              kind: "InlineFragment",
              selections: [
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
            },
          ],
          storageKey: null,
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWatchAndScrollFallbackCTAScreen_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWatchAndScrollFallbackCTAScreen_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerReshareButton_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWatchAndScrollTopBar_video.graphql",
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
          name: "name",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri_token",
          storageKey: null,
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "CometWatchAndScrollTopBar_video",
        selections: [
          a,
          b,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "title_with_fallback",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometWatchAndScrollCloseButton_video",
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [
              b,
              a,
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "height", value: 32 },
                  { kind: "Variable", name: "scale", variableName: "scale" },
                  { kind: "Literal", name: "width", value: 32 },
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
                  c,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "page_vanity_url",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "vanity",
                    storageKey: null,
                  },
                ],
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  c,
                  {
                    kind: "InlineFragment",
                    selections: [
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
                  },
                ],
                type: "VideoOwner",
                abstractKey: "__isVideoOwner",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "creation_story",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "identifier_token",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "debug_info",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "tracking",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Video",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometWatchAndScrollUpNextCard_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometWatchAndScrollUpNextCard_video",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 202 },
            { kind: "Literal", name: "sizing", value: "cover-fill-cropped" },
            { kind: "Literal", name: "width", value: 360 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
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
          storageKey: 'image(height:202,sizing:"cover-fill-cropped",width:360)',
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title_with_fallback",
          storageKey: null,
        },
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
              name: "name",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometWatchAndScrollVideoQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "chainingCursor",
        },
        b = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "chainingSeedVideoID",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        d = { defaultValue: null, kind: "LocalArgument", name: "videoID" },
        e = [{ kind: "Variable", name: "id", variableName: "videoID" }],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_professional_features_for_watch",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_gaming_video",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          concreteType: "PayToAccessPaywall",
          kind: "LinkedField",
          name: "pay_to_access_paywall",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_show_paywall",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        k = [
          { kind: "Variable", name: "id", variableName: "chainingSeedVideoID" },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri_token",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        o = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        p = [
          g,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "start",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "end",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "representation_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "mime_codec",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "segment_type",
            storageKey: null,
          },
        ],
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title_with_fallback",
          storageKey: null,
        },
        r = [f],
        s = {
          kind: "InlineFragment",
          selections: r,
          type: "Node",
          abstractKey: "__isNode",
        };
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d],
          kind: "Fragment",
          metadata: null,
          name: "CometWatchAndScrollVideoQuery",
          selections: [
            {
              alias: null,
              args: e,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                f,
                g,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "owner",
                  plural: !1,
                  selections: [
                    {
                      kind: "InlineFragment",
                      selections: [h],
                      type: "VideoOwner",
                      abstractKey: "__isVideoOwner",
                    },
                  ],
                  storageKey: null,
                },
                i,
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometWatchAndScrollContainer_video",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "VideoPlayerRelay_video",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "VideoPlayerWithLiveVideoIndicator_video",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometWatchAndScrollTopBar_video",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometWatchAndScrollCloseButton_video",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "VideoPlayerWithWatchAndScrollWarningScreen_video",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "VideoPlayerWithAudioOverlay_video",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "VideoPlayerWithAudioBackground_video",
                },
                j,
              ],
              storageKey: null,
            },
            {
              alias: "chainingSeedVideo",
              args: k,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                {
                  kind: "Defer",
                  selections: [
                    {
                      args: [
                        {
                          kind: "Variable",
                          name: "cursor",
                          variableName: "chainingCursor",
                        },
                        {
                          kind: "Variable",
                          name: "seedVideoID",
                          variableName: "chainingSeedVideoID",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "VideoPlayerSkipControl_video",
                    },
                  ],
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
          argumentDefinitions: [a, b, d, c],
          kind: "Operation",
          name: "CometWatchAndScrollVideoQuery",
          selections: [
            {
              alias: null,
              args: e,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                f,
                g,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "owner",
                  plural: !1,
                  selections: [
                    l,
                    {
                      kind: "InlineFragment",
                      selections: [
                        h,
                        m,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: [
                                { kind: "Literal", name: "site", value: "www" },
                              ],
                              kind: "ScalarField",
                              name: "url",
                              storageKey: 'url(site:"www")',
                            },
                          ],
                          type: "User",
                          abstractKey: null,
                        },
                      ],
                      type: "VideoOwner",
                      abstractKey: "__isVideoOwner",
                    },
                    f,
                    n,
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "height", value: 32 },
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
                        { kind: "Literal", name: "width", value: 32 },
                      ],
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "profile_picture",
                      plural: !1,
                      selections: o,
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        m,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "page_vanity_url",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "vanity",
                          storageKey: null,
                        },
                      ],
                      type: "Page",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
                i,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "original_width",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "original_height",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "original_rotation",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "animated_image_caption",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "broadcaster_origin",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "broadcast_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "broadcast_status",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_live_streaming",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_live_trace_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_looping",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_video_broadcast",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "loop_count",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_spherical",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_spherical_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "unsupported_browser_message",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "MusicVideoMetadata",
                  kind: "LinkedField",
                  name: "pmv_metadata",
                  plural: !1,
                  selections: [l, f],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_ncsr",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "permalink_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "captions_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dash_prefetch_experimental",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoCaptionLocale",
                  kind: "LinkedField",
                  name: "video_available_captions_locales",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "localized_creation_method",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InstreamExtraConfig",
                  kind: "LinkedField",
                  name: "instream_extra_config",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "instream_halo_delay_time_seconds",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoPrefetchResources",
                  kind: "LinkedField",
                  name: "dash_prefetch_resources",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "VideoPrefetchResource",
                      kind: "LinkedField",
                      name: "audio",
                      plural: !0,
                      selections: p,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "VideoPrefetchResource",
                      kind: "LinkedField",
                      name: "video",
                      plural: !0,
                      selections: p,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "context", value: "DEFAULT" },
                    {
                      kind: "Literal",
                      name: "supported",
                      value: [
                        "CometVideoPlayerOzImplementation",
                        "CometVideoPlayerShakaImplementation",
                        "CometVideoPlayerProgressiveImplementation",
                      ],
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_video_player_implementations",
                  plural: !0,
                  selections: [
                    l,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "useRelay3DVideoImplementations_video",
                          fragmentName:
                            "useRelay3DOzImplementation_implementation",
                          fragmentPropName: "implementation",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometVideoPlayerOzImplementation",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "useRelay3DVideoImplementations_video",
                          fragmentName:
                            "useRelay3DShakaImplementation_implementation",
                          fragmentPropName: "implementation",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometVideoPlayerShakaImplementation",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "useRelay3DVideoImplementations_video",
                          fragmentName:
                            "useRelay3DProgressiveImplementation_implementation",
                          fragmentPropName: "implementation",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometVideoPlayerProgressiveImplementation",
                      abstractKey: null,
                    },
                  ],
                  storageKey:
                    'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])',
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_use_oz",
                  storageKey: null,
                },
                {
                  alias: "playable_url_dash",
                  args: [
                    {
                      kind: "Literal",
                      name: "scrubbing_preference",
                      value: "MPEG_DASH",
                    },
                  ],
                  kind: "ScalarField",
                  name: "playable_url",
                  storageKey: 'playable_url(scrubbing_preference:"MPEG_DASH")',
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dash_manifest",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "min_quality_preference",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_rss_podcast_video",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoPlayerShakaLiveP2PInit",
                  kind: "LinkedField",
                  name: "video_player_shaka_live_p2p_init",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "json_encoded_video_data",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "playable_url",
                  storageKey: null,
                },
                {
                  alias: "playable_url_quality_hd",
                  args: [{ kind: "Literal", name: "quality", value: "HD" }],
                  kind: "ScalarField",
                  name: "playable_url",
                  storageKey: 'playable_url(quality:"HD")',
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "SphericalVideoFallbackUrls",
                  kind: "LinkedField",
                  name: "spherical_video_fallback_urls",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "hd",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "sd",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_latency_menu_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "fbls_tier",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_latency_sensitive_broadcast",
                  storageKey: null,
                },
                {
                  kind: "ClientExtension",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "selected_latency_setting",
                      storageKey: null,
                    },
                  ],
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "comet_video_player_static_config",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "comet_video_player_context_sensitive_config",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoPlayerShakaPerformanceLoggerInit",
                  kind: "LinkedField",
                  name: "video_player_shaka_performance_logger_init",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        "useVideoPlayerShakaPerformanceLoggerRelayImpl_video",
                      fragmentName:
                        "useVideoPlayerShakaPerformanceLoggerRelayImpl_init",
                      fragmentPropName: "init",
                      kind: "ModuleImport",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "video_player_shaka_performance_logger_should_sample",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "autoplay_gating_result",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "viewer_autoplay_setting",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_autoplay",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "drm_info",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoP2PSettings",
                  kind: "LinkedField",
                  name: "p2p_settings",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "ticket",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "VideoP2PSettingsConfig",
                      kind: "LinkedField",
                      name: "config",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "delay_p2p_until_play",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "disable_hivejava_for_livevc",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "VideoHiveInitializationOptions",
                      kind: "LinkedField",
                      name: "hive_initialization_options",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "VideoHiveInitializationOptionHiveJava",
                          kind: "LinkedField",
                          name: "hive_java",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "min_version",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "hive_tech_order",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "debug_level",
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
                  concreteType: "AudioSettings",
                  kind: "LinkedField",
                  name: "audio_settings",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "video_volume_setting",
                      storageKey: null,
                    },
                    f,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "CaptionsSettings",
                  kind: "LinkedField",
                  name: "captions_settings",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "always_show_captions",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "captions_background_color",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "captions_background_opacity",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "captions_text_color",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "captions_text_size",
                      storageKey: null,
                    },
                    f,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoBroadcastLowLatencyConfig",
                  kind: "LinkedField",
                  name: "broadcast_low_latency_config",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "ll_desired_latency_ms",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "ll_latency_tolerance_ms",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audio_availability",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoMutedSegment",
                  kind: "LinkedField",
                  name: "muted_segments",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "mute_start_time_in_sec",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "mute_end_time_in_sec",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "SphericalVideoRenderer",
                  kind: "LinkedField",
                  name: "spherical_video_renderer",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        "VideoPlayerRelay_video_spherical_video_renderer",
                      fragmentName:
                        "VideoPlayerSphericalRelay_sphericalVideoRenderer",
                      fragmentPropName: "sphericalVideoRenderer",
                      kind: "ModuleImport",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "InstreamVideoAdBreaks",
                  kind: "LinkedField",
                  name: "instream_video_ad_breaks_comet",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      documentName:
                        "VideoPlayerRelay_video_instream_video_ad_breaks_comet",
                      fragmentName: "InstreamVideoAdBreaksPlayer_adBreaks",
                      fragmentPropName: "adBreaks",
                      kind: "ModuleImport",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoThumbnail",
                  kind: "LinkedField",
                  name: "preferred_thumbnail",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Image",
                      kind: "LinkedField",
                      name: "image",
                      plural: !1,
                      selections: o,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "image_preview_payload",
                      storageKey: null,
                    },
                    f,
                  ],
                  storageKey: null,
                },
                {
                  alias: "breakingStatus",
                  args: null,
                  kind: "ScalarField",
                  name: "breaking_status",
                  storageKey: null,
                },
                {
                  alias: "videoId",
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                {
                  alias: "isPremiere",
                  args: null,
                  kind: "ScalarField",
                  name: "is_premiere",
                  storageKey: null,
                },
                {
                  alias: "liveViewerCount",
                  args: null,
                  kind: "ScalarField",
                  name: "live_viewer_count_read_only",
                  storageKey: null,
                },
                {
                  alias: "rehearsalInfo",
                  args: null,
                  concreteType: "LiveVideoRehearsalInfo",
                  kind: "LinkedField",
                  name: "rehearsal_info",
                  plural: !1,
                  selections: [
                    {
                      alias: "typeName",
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "publish_time",
                  storageKey: null,
                },
                n,
                q,
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "creation_story",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "identifier_token",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "debug_info",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "tracking",
                      storageKey: null,
                    },
                    f,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    {
                      kind: "Literal",
                      name: "framework",
                      value: "WARNING_SCREENS",
                    },
                    {
                      kind: "Literal",
                      name: "location",
                      value: "video_channel",
                    },
                  ],
                  concreteType: "CIXScreen",
                  kind: "LinkedField",
                  name: "cix_screen",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "view_model",
                      plural: !1,
                      selections: [
                        l,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "VideoPlayerWithWatchAndScrollWarningScreen_video",
                              fragmentName: "CometWarningScreenOverlay_data",
                              fragmentPropName: "data",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "OverlayWarningScreenViewModel",
                          abstractKey: null,
                        },
                        s,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'cix_screen(framework:"WARNING_SCREENS",location:"video_channel")',
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "Story",
                  kind: "LinkedField",
                  name: "container_story",
                  plural: !1,
                  selections: r,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    {
                      kind: "Literal",
                      name: "supported",
                      value: [
                        "CometVideoPlayerWithHuddleOverlayRenderer",
                        "CometVideoPlayerWithPodcastOverlayRenderer",
                      ],
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_video_player_audio_overlay_renderer",
                  plural: !1,
                  selections: [
                    l,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "VideoPlayerWithAudioOverlay_video",
                          fragmentName:
                            "CometVideoPlayerWithHuddleOverlayRenderer_renderer",
                          fragmentPropName: "renderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometVideoPlayerWithHuddleOverlayRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "VideoPlayerWithAudioOverlay_video",
                          fragmentName:
                            "CometVideoPlayerWithPodcastOverlayRenderer_renderer",
                          fragmentPropName: "renderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometVideoPlayerWithPodcastOverlayRenderer",
                      abstractKey: null,
                    },
                  ],
                  storageKey:
                    'comet_video_player_audio_overlay_renderer(supported:["CometVideoPlayerWithHuddleOverlayRenderer","CometVideoPlayerWithPodcastOverlayRenderer"])',
                },
                {
                  alias: null,
                  args: [
                    {
                      kind: "Literal",
                      name: "supported",
                      value: [
                        "CometVideoPlayerWithHuddleBackgroundRenderer",
                        "CometVideoPlayerWithPodcastBackgroundRenderer",
                      ],
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "comet_video_player_audio_background_renderer",
                  plural: !1,
                  selections: [
                    l,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "VideoPlayerWithAudioBackground_video",
                          fragmentName:
                            "CometVideoPlayerWithHuddleBackgroundRenderer_renderer",
                          fragmentPropName: "renderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometVideoPlayerWithHuddleBackgroundRenderer",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "VideoPlayerWithAudioBackground_video",
                          fragmentName:
                            "CometVideoPlayerWithPodcastBackgroundRenderer_renderer",
                          fragmentPropName: "renderer",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "CometVideoPlayerWithPodcastBackgroundRenderer",
                      abstractKey: null,
                    },
                  ],
                  storageKey:
                    'comet_video_player_audio_background_renderer(supported:["CometVideoPlayerWithHuddleBackgroundRenderer","CometVideoPlayerWithPodcastBackgroundRenderer"])',
                },
                j,
              ],
              storageKey: null,
            },
            {
              alias: "chainingSeedVideo",
              args: k,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                {
                  if: null,
                  kind: "Defer",
                  label:
                    "CometWatchAndScrollVideoQuery$defer$VideoPlayerSkipControl_video_izUbj",
                  selections: [
                    f,
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "entry_point", value: "WNS" },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "video_channel",
                      plural: !1,
                      selections: [
                        l,
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Variable",
                              name: "after",
                              variableName: "chainingCursor",
                            },
                            { kind: "Literal", name: "caller", value: "WNS" },
                            {
                              kind: "Variable",
                              name: "exclude_video",
                              variableName: "chainingSeedVideoID",
                            },
                            { kind: "Literal", name: "first", value: 1 },
                          ],
                          concreteType: "VideoChannelFeedConnection",
                          kind: "LinkedField",
                          name: "video_channel_feed",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "VideoChannelFeedEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "cursor",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    l,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "StoryAttachment",
                                          kind: "LinkedField",
                                          name: "attachments",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: "LinkedField",
                                              name: "media",
                                              plural: !1,
                                              selections: [
                                                l,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: [
                                                    f,
                                                    {
                                                      alias: null,
                                                      args: [
                                                        {
                                                          kind: "Literal",
                                                          name: "height",
                                                          value: 202,
                                                        },
                                                        {
                                                          kind: "Literal",
                                                          name: "sizing",
                                                          value:
                                                            "cover-fill-cropped",
                                                        },
                                                        {
                                                          kind: "Literal",
                                                          name: "width",
                                                          value: 360,
                                                        },
                                                      ],
                                                      concreteType: "Image",
                                                      kind: "LinkedField",
                                                      name: "image",
                                                      plural: !1,
                                                      selections: o,
                                                      storageKey:
                                                        'image(height:202,sizing:"cover-fill-cropped",width:360)',
                                                    },
                                                    q,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "owner",
                                                      plural: !1,
                                                      selections: [l, n, f],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  type: "Video",
                                                  abstractKey: null,
                                                },
                                                s,
                                                {
                                                  kind: "InlineFragment",
                                                  selections: r,
                                                  type: "GenericAttachmentMedia",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: r,
                                                  type: "MontageImage",
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: "InlineFragment",
                                                  selections: r,
                                                  type: "MontageVideo",
                                                  abstractKey: null,
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
                                          name: "click_tracking_linkshim_cb",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "encrypted_click_tracking",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "encrypted_tracking",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "viewability_config",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "CometClientViewConfig",
                                          kind: "LinkedField",
                                          name: "client_view_config",
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "can_delay_log_impression",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "use_banzai_signal_imp",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "use_banzai_vital_imp",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "Story",
                                      abstractKey: null,
                                    },
                                    s,
                                    {
                                      kind: "InlineFragment",
                                      selections: r,
                                      type: "CommunityChatFeedObject",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: r,
                                      type: "CommunityTabNewJoinFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: r,
                                      type: "CommunityTabTrendingPOGFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: r,
                                      type: "XFBGroupsTabSuggestedGroupSetFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: r,
                                      type: "XFBGroupsTabSuggestedGroupSetsFeedUnit",
                                      abstractKey: null,
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
                        f,
                      ],
                      storageKey: 'video_channel(entry_point:"WNS")',
                    },
                  ],
                },
                f,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "6594852640540253",
          metadata: {},
          name: "CometWatchAndScrollVideoQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "FleetBeaconSubscriptionNetwork_LogMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "FleetBeaconLogResponsePayload",
            kind: "LinkedField",
            name: "fleet_beacon_log",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FleetBeaconSubscriptionNetwork_LogMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "FleetBeaconSubscriptionNetwork_LogMutation",
          selections: b,
        },
        params: {
          id: "4501085869904851",
          metadata: {},
          name: "FleetBeaconSubscriptionNetwork_LogMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "FleetBeaconSubscriptionNetwork_PublishMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "FleetBeaconPublishResponsePayload",
            kind: "LinkedField",
            name: "fleet_beacon_publish",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FleetBeaconSubscriptionNetwork_PublishMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "FleetBeaconSubscriptionNetwork_PublishMutation",
          selections: b,
        },
        params: {
          id: "3918234471547751",
          metadata: {},
          name: "FleetBeaconSubscriptionNetwork_PublishMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "FleetBeaconSubscriptionNetwork_Subscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "TestFleetBeaconSubscribeResponsePayload",
            kind: "LinkedField",
            name: "test_fleet_beacon_subscribe",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_subscription_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "test_id",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FleetBeaconSubscriptionNetwork_Subscription",
          selections: b,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "FleetBeaconSubscriptionNetwork_Subscription",
          selections: b,
        },
        params: {
          id: "3194829573871785",
          metadata: { subscriptionName: "test_fleet_beacon_subscribe" },
          name: "FleetBeaconSubscriptionNetwork_Subscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometVirtualCursorStatus",
  ["UserAgent", "cr:1345969", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = null;
    function j() {
      i ||
        (i = window.addEventListener("blur", function () {
          (h = null), k();
        }));
    }
    function k() {
      i && (i.remove(), (i = null));
    }
    function a(a) {
      (h = a.keyCode), j();
    }
    function d(a) {
      (h = null), k();
    }
    if (
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
    ) {
      f = document.documentElement;
      if (f)
        if (f.addEventListener)
          f.addEventListener("keydown", a, !0),
            f.addEventListener("keyup", d, !0);
        else if (f.attachEvent) {
          f = f.attachEvent;
          f("onkeydown", a);
          f("onkeyup", d);
        }
    }
    var l = {
        getKeyDownCode: function () {
          return h;
        },
        isKeyDown: function () {
          return !!h;
        },
      },
      m = !1,
      n = !1,
      o = null,
      p = !1;
    function q(a) {
      var b = new Set(),
        d = l.isKeyDown(),
        e = a.WEBKIT_FORCE_AT_MOUSE_DOWN,
        f = a.clientX,
        g = a.clientY,
        h = a.isTrusted,
        i = a.mozInputSource,
        j = a.offsetX,
        k = a.offsetY,
        o = a.webkitForce;
      f === 0 &&
        g === 0 &&
        j >= 0 &&
        k >= 0 &&
        n &&
        h &&
        i == null &&
        b.add("Chrome");
      m &&
        n &&
        !d &&
        o != null &&
        o < e &&
        j === 0 &&
        k === 0 &&
        i == null &&
        b.add("Safari-edge");
      f === 0 &&
        g === 0 &&
        j < 0 &&
        k < 0 &&
        n &&
        i == null &&
        b.add("Safari-old");
      if (
        !m &&
        !n &&
        !d &&
        h &&
        c("UserAgent").isBrowser("IE >= 10") &&
        i == null
      ) {
        o = a.target;
        e = o.clientHeight;
        d = o.clientWidth;
        f < 0 && g < 0
          ? b.add("IE")
          : (j < 0 || j > d) && (k < 0 || k > e) && b.add("MSIE");
      }
      i === 0 && h && b.add("Firefox");
      return b;
    }
    function r() {
      (m = !0),
        c("setTimeout")(function () {
          m = !1;
        }, 0);
    }
    function s() {
      (n = !0),
        c("setTimeout")(function () {
          n = !1;
        }, 0);
    }
    function t(a) {
      p &&
        b("cr:1345969").log({
          extra_data: { source_app: "comet" },
          indicated_browsers: o,
          is_virtual_cursor_action: a,
        });
    }
    function u(a) {
      o === null && (o = Array.from(q(a)));
      p = o != null && o.length > 0;
      a =
        a.target != null &&
        a.target.getAttribute != null &&
        a.target.getAttribute("data-accessibilityid") ===
          "virtual_cursor_trigger";
      t(a);
      c("setTimeout")(function () {
        (p = !1), (o = null);
      }, 0);
    }
    function e() {
      document.addEventListener("click", u, !0),
        document.addEventListener("mousedown", r, !0),
        document.addEventListener("mouseup", s, !0);
    }
    g.initLogging = e;
  },
  98
);
__d(
  "XUpdateTimezoneControllerRouteBuilder",
  ["jsExtraRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsExtraRouteBuilder")(
      "/ajax/autoset_timezone_ajax/",
      Object.freeze({ is_forced: !1 }),
      [
        "/ajax/autoset_timezone_ajax.php",
        "/ajax/timezone/update/",
        "/ajax/timezone/update.php",
      ],
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "getBrowserTimezone",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      try {
        var a;
        a =
          ((a = window.Intl) == null ? void 0 : a.DateTimeFormat) &&
          Intl.DateTimeFormat();
        a = (a == null ? void 0 : a.resolvedOptions) && a.resolvedOptions();
        return a == null ? void 0 : a.timeZone;
      } catch (a) {
        c("FBLogger")("TimezoneAutoset")
          .catching(a)
          .warn("Could not read IANA timezone from browser");
        return null;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTimezoneUpdater",
  [
    "UserTimezoneServerTimeData",
    "XUpdateTimezoneControllerRouteBuilder",
    "cometAsyncFetch",
    "getBrowserGMTOffsetAdjustedForSkew",
    "getBrowserTimezone",
    "killswitch",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("UserTimezoneServerTimeData").force_update,
        b = d("UserTimezoneServerTimeData").server_gmt_offset,
        e = d("UserTimezoneServerTimeData").server_time,
        f = d("UserTimezoneServerTimeData").timezone;
      if (e == null || b == null) return;
      e = -c("getBrowserGMTOffsetAdjustedForSkew")(e);
      var g = c("killswitch")("TIMEZONE_SET_IANA_ZONE_NAME")
        ? null
        : c("getBrowserTimezone")();
      (a === !0 || e !== b || (g != null && g !== f)) &&
        c("cometAsyncFetch")(
          c("XUpdateTimezoneControllerRouteBuilder").buildExtraURL(
            "/ajax/timezone/update.php",
            {}
          ),
          { data: { gmt_off: e, is_forced: a, tz: g }, method: "POST" }
        );
    }
    b = { updateTimezoneIfNecessary: a };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "useCometLogoutWithPendingContactpointConfirmationDialog.react",
  ["fbt", "react", "useCometConfirmationDialog"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useCallback;
    function a(a, b) {
      var d = c("useCometConfirmationDialog")(),
        e = d[0];
      d = i(
        function () {
          var c = h._("Log Out of Facebook?"),
            d =
              a === "PhoneNumber"
                ? h._(
                    "Are you sure you want to log out of Facebook before you confirm your mobile number? Confirming the mobile number on your account ensures you will be able to log in again."
                  )
                : h._(
                    "Are you sure you want to log out of Facebook before you confirm your email? Confirming the email on your account ensures you will be able to log in again."
                  ),
            f = h._("Confirm Account"),
            g = h._("Log Out");
          e({ body: d, cancel: f, confirm: g, title: c }, b);
        },
        [a, b, e]
      );
      return a === "PendingEmail" || a === "PhoneNumber" ? d : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometLogoutHandler.react",
  [
    "Banzai",
    "CometLogoutHandlerQuery.graphql",
    "CometRelay",
    "ServiceWorkerLoginAndLogout",
    "WebStorageMonster",
    "XLogoutControllerRouteBuilder",
    "react",
    "recoverableViolation",
    "useCometLogoutWithPendingContactpointConfirmationDialog.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    a = d("react");
    e = a.forwardRef;
    var j = a.useCallback,
      k = a.useEffect,
      l = a.useImperativeHandle,
      m = a.useRef;
    f = e(function (a, e) {
      var f,
        g,
        n = a.shouldInitiateLogout,
        o = m(!1);
      a = d("CometRelay").useLazyLoadQuery(
        h !== void 0 ? h : (h = b("CometLogoutHandlerQuery.graphql")),
        {}
      );
      var p = a.logout_whitelist;
      a = a.viewer;
      var q = m(),
        r = j(
          function () {
            if (o.current) return;
            o.current = !0;
            var a = q.current;
            if (a == null) {
              c("recoverableViolation")(
                "Unable to get logout form ref to submit",
                "comet_ui"
              );
              return;
            }
            c("WebStorageMonster").cleanOnLogout(p);
            c("ServiceWorkerLoginAndLogout").logout();
            c("Banzai").flush();
            a.submit();
          },
          [q, p]
        );
      f =
        a == null
          ? void 0
          : (f = a.account_user) == null
          ? void 0
          : f.has_confirmed_contactpoints;
      g =
        a == null
          ? void 0
          : (g = a.account_user) == null
          ? void 0
          : (g = g.pending_contactpoints) == null
          ? void 0
          : (g = g[0]) == null
          ? void 0
          : g.__typename;
      var s = c(
          "useCometLogoutWithPendingContactpointConfirmationDialog.react"
        )(f !== !0 ? g : null, r),
        t = j(
          function () {
            s ? s() : r();
          },
          [r, s]
        );
      l(e, function () {
        return { logout: t };
      });
      k(
        function () {
          q.current == null
            ? c("recoverableViolation")(
                "Expected logout form ref to be valid",
                "comet_ui"
              )
            : n === !0 && t();
        },
        [t, n]
      );
      f = c("XLogoutControllerRouteBuilder").buildURL({
        button_location: "settings",
        button_name: "logout",
      });
      return i.jsxs("form", {
        action: f,
        method: "POST",
        ref: q,
        children: [
          i.jsx("input", {
            name: "h",
            type: "hidden",
            value: a == null ? void 0 : a.logout_hash,
          }),
          i.jsx("input", { name: "ref", type: "hidden", value: "mb" }),
        ],
      });
    });
    a = f;
    g["default"] = a;
  },
  98
);
__d(
  "CometOnBeforeUnloadDialog.react",
  [
    "fbt",
    "CometCardedDialog.react",
    "CometTrackingNodeProvider.react",
    "TetraButtonGroup.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.body,
        d = a.cancel,
        e = a.confirm,
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.onClose,
        j = a.onCloseButtonPress,
        k = a.primaryAction,
        l = a.secondaryAction;
      a = a.title;
      var m = function () {
          k(), g();
        },
        n = function () {
          l(), g();
        };
      return i.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 163,
        children: i.jsxs(c("CometCardedDialog.react"), {
          onClose: function () {
            j(), g();
          },
          testid: void 0,
          title: a,
          titleHorizontalAlignment: "start",
          withCloseButton: !0,
          children: [
            i.jsx("div", {
              className: "l9j0dhe7 dati1w0a f10w8fjw hv4rvrfc pybr56ya",
              children: i.jsx(c("TetraText.react"), {
                type: "body3",
                children: b,
              }),
            }),
            i.jsx("div", {
              className:
                "a8nywdso ihqw7lf3 rz4wbd8a jb3vyjys bkfpd7mw btwxx1t3 j83agx80",
              children: i.jsx(c("TetraButtonGroup.react"), {
                direction: "backward",
                paddingHorizontal: 16,
                primary: {
                  disabled: f,
                  label: (a = e) != null ? a : h._("Confirm"),
                  onPress: m,
                  testid: "CometOnBeforeUnloadDialogConfirmButton",
                },
                secondary: {
                  disabled: f,
                  label: (b = d) != null ? b : h._("Cancel"),
                  onPress: n,
                  reduceEmphasis: !0,
                  testid: "CometOnBeforeUnloadDialogCancelButton",
                },
              }),
            }),
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
  "CometRouteActorToaster.react",
  [
    "fbt",
    "Actor",
    "CometRelay",
    "CometRouteActorToasterBlocklist",
    "CometRouteActorToasterQuery.graphql",
    "TetraProfilePhoto.react",
    "TetraText.react",
    "WebPixelRatio",
    "cometPushToast",
    "getTopMostRoute",
    "promiseDone",
    "react",
    "requireDeferred",
    "useCometRouterState",
    "useCurrentRoute",
    "useProfileCometIsViewAs",
    "useRouteReferrer",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useRef,
      m = c("requireDeferred")("AcfToastImpressionFalcoEvent").__setRef(
        "CometRouteActorToaster.react"
      );
    function n(a, b) {
      if (b)
        return j.jsx(c("TetraText.react"), {
          color: "primary",
          type: "body3",
          children: h._("You're now interacting as {=your profile}", [
            h._param(
              "=your profile",
              j.jsx(c("TetraText.react"), {
                type: "bodyLink3",
                children: h._("your profile"),
              })
            ),
          ]),
        });
      else
        return j.jsx(c("TetraText.react"), {
          color: "primary",
          type: "body3",
          children: h._("You're now interacting as {actor}", [
            h._param(
              "actor",
              j.jsx(c("TetraText.react"), { type: "bodyLink3", children: a })
            ),
          ]),
        });
    }
    var o = i !== void 0 ? i : (i = b("CometRouteActorToasterQuery.graphql"));
    function a() {
      var a = d("CometRelay").useRelayEnvironment(),
        b = d("Actor").useActor(),
        e = b[0];
      b = c("useCometRouterState")();
      var f = c("useCurrentRoute")(),
        g = c("useRouteReferrer")(),
        h = c("useProfileCometIsViewAs")(),
        i = l({
          actorID: g == null ? void 0 : g.actorID,
          tracePolicy: g == null ? void 0 : g.tracePolicy,
        });
      g = c("CometRouteActorToasterBlocklist").route_trace_policies;
      var p = f == null ? void 0 : f.tracePolicy;
      g = g.includes(p);
      b = b != null ? c("getTopMostRoute")(b) : null;
      f = f === b;
      var q = f && !g && !h;
      k(
        function () {
          var b,
            f = (b = i.current) == null ? void 0 : b.actorID,
            g = (b = i.current) == null ? void 0 : b.tracePolicy;
          if (f != null && f !== e && q) {
            b = function (a) {
              var b;
              b =
                a == null
                  ? void 0
                  : (b = a.viewer) == null
                  ? void 0
                  : (b = b.actor) == null
                  ? void 0
                  : b.name;
              if (b != null) {
                var e;
                e =
                  (a == null
                    ? void 0
                    : (e = a.viewer) == null
                    ? void 0
                    : (e = e.actor) == null
                    ? void 0
                    : e.__typename) === "User" &&
                  (a == null
                    ? void 0
                    : (e = a.viewer) == null
                    ? void 0
                    : (e = e.actor) == null
                    ? void 0
                    : (e = e.profile_plus_continuity_mode_info) == null
                    ? void 0
                    : e.is_acting_as_profile_plus) !== !0;
                a =
                  a == null
                    ? void 0
                    : (a = a.viewer) == null
                    ? void 0
                    : (a = a.actor) == null
                    ? void 0
                    : (a = a.toast_icon) == null
                    ? void 0
                    : a.uri;
                a =
                  a != null
                    ? j.jsx(c("TetraProfilePhoto.react"), {
                        shape: "circle",
                        size: 32,
                        source: { uri: a },
                      })
                    : null;
                b = n(b, e);
                d("cometPushToast").cometPushToast({ icon: a, message: b });
                m.onReady(function (a) {
                  a = a.log;
                  a(function () {
                    var a;
                    return {
                      destination: (a = p) != null ? a : "comet.app",
                      destination_type: "comet_route",
                      source: g,
                      source_type: "comet_route",
                      source_userid: f,
                    };
                  });
                });
              }
            };
            var h = { scale: d("WebPixelRatio").get() };
            c("promiseDone")(
              d("CometRelay").fetchQuery(a, o, h).toPromise(),
              b
            );
          }
          i.current = { actorID: e, tracePolicy: p };
        },
        [e, p, a, q]
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometLoggedInAccountSwitcherRowWithUpdateText.react",
  [
    "fbt",
    "ix",
    "CometBadge.react",
    "CometLoggedInAccountSwitcherRowWithUpdateText_account.graphql",
    "CometLoggedInAccountSwitcherRowWithUpdateText_query.graphql",
    "CometRelay",
    "TetraListCell.react",
    "WebPixelRatio",
    "fbicon",
    "react",
    "recoverableViolation",
    "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm.react",
    "useCometLoggedInAccountSwitcherRemoveAccount",
    "useProfileSwitcherEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b(
              "CometLoggedInAccountSwitcherRowWithUpdateText_query.graphql"
            )),
        a.query
      );
      a = d("CometRelay").useFragment(
        k !== void 0
          ? k
          : (k = b(
              "CometLoggedInAccountSwitcherRowWithUpdateText_account.graphql"
            )),
        a.account
      );
      var f = a.form,
        g = a.unread_notification_count,
        m = a.user;
      f = c("useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm.react")(
        { form$key: f, query$key: e }
      );
      var n = c("useCometLoggedInAccountSwitcherRemoveAccount")(a);
      e = {
        product_bucket: "profile_account_switcher",
        subsurface: "switch_account_menu",
        surface: "navigation",
      };
      var o = c("useProfileSwitcherEngagementClickCallback")(
          babelHelpers["extends"]({}, e, { item_type: "account" })
        ),
        p = c("useProfileSwitcherEngagementClickCallback")(
          babelHelpers["extends"]({}, e, { item_type: "remove" })
        );
      if (m == null) {
        c("recoverableViolation")(
          "A user is required to render a CometLoggedInAccountSwitcherRowWithUpdateText",
          "comet_ui"
        );
        return null;
      }
      if (f == null) {
        c("recoverableViolation")(
          "A form is required to render a CometLoggedInAccountSwitcherRowWithUpdateText",
          "comet_ui"
        );
        return null;
      }
      g == null &&
        c("recoverableViolation")(
          "We should have an unread_notification_count but we don't",
          "comet_ui"
        );
      a = f[0];
      var q = f[1];
      return l.jsx(c("TetraListCell.react"), {
        addOnPrimary: {
          shape: "circle",
          size: 40,
          source: {
            height:
              (f =
                m == null
                  ? void 0
                  : (e = m.switcher_profile_picture) == null
                  ? void 0
                  : e.height) != null
                ? f
                : 40,
            scale:
              (f =
                m == null
                  ? void 0
                  : (e = m.switcher_profile_picture) == null
                  ? void 0
                  : e.scale) != null
                ? f
                : d("WebPixelRatio").get(),
            uri:
              (f =
                m == null
                  ? void 0
                  : (e = m.switcher_profile_picture) == null
                  ? void 0
                  : e.uri) != null
                ? f
                : "",
            width:
              (f =
                m == null
                  ? void 0
                  : (e = m.switcher_profile_picture) == null
                  ? void 0
                  : e.width) != null
                ? f
                : 40,
          },
          type: "profile-photo",
        },
        addOnSecondary: {
          "aria-label": h._("Remove Account"),
          color: "secondary",
          icon: d("fbicon")._(i("478234"), 24),
          onPress: function () {
            p(), n();
          },
          type: "icon",
        },
        body:
          g !== null && g !== 0
            ? l.jsxs(l.Fragment, {
                children: [
                  l.jsx(c("CometBadge.react"), {}),
                  h._({ "*": "{number} notifications", _1: "1 notification" }, [
                    h._plural(g || 0, "number"),
                  ]),
                ],
              })
            : null,
        headline: l.jsxs(l.Fragment, {
          children: [m == null ? void 0 : m.name, a],
        }),
        level: 4,
        onPress: function () {
          o(), q();
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometLoggedInAccountSwitcher.react",
  [
    "fbt",
    "ix",
    "CometLegacyListItemSeparator.react",
    "CometLoggedInAccountSwitcherRowWithUpdateText.react",
    "CometLoggedInAccountSwitcher_query.graphql",
    "Locale",
    "RelayHooks",
    "TetraIcon.react",
    "TetraList.react",
    "TetraListCell.react",
    "TetraText.react",
    "fbicon",
    "orEmptyArray",
    "react",
    "useCometLoggedInAccountSwitcherLogoutAndRedirectForm.react",
    "useProfileSwitcherEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("Locale").isRTL();
    function a(a) {
      var e = a.onReturn;
      a = a.query;
      var f = d("RelayHooks").useFragment(
        j !== void 0
          ? j
          : (j = b("CometLoggedInAccountSwitcher_query.graphql")),
        a
      );
      a = c("useCometLoggedInAccountSwitcherLogoutAndRedirectForm.react")({
        loginSource: "www_account_switcher",
        logoutButtonLocation: "settings",
        logoutButtonName: "switch_accounts",
        query$key: f,
      });
      var g = a[0],
        m = a[1];
      a = {
        product_bucket: "profile_account_switcher",
        subsurface: "switch_account_menu",
        surface: "navigation",
      };
      var n = c("useProfileSwitcherEngagementClickCallback")(
          babelHelpers["extends"]({}, a, { item_type: "back" })
        ),
        o = c("useProfileSwitcherEngagementClickCallback")(
          babelHelpers["extends"]({}, a, { item_type: "add" })
        );
      return k.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          k.jsxs("div", {
            className: "dati1w0a sj5x9vvc hv4rvrfc discj3wi btwxx1t3 j83agx80",
            children: [
              k.jsx("div", {
                className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                children: k.jsx(c("TetraIcon.react"), {
                  "aria-label": h._("Back"),
                  icon: l
                    ? d("fbicon")._(i("514454"), 20)
                    : d("fbicon")._(i("512647"), 20),
                  onPress: function () {
                    n(), e();
                  },
                }),
              }),
              k.jsx("div", {
                className: "h4z51re5 j83agx80 bp9cbjyn",
                children: k.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized1",
                  children: h._("Switch Account"),
                }),
              }),
            ],
          }),
          k.jsxs("div", {
            className: "a8nywdso jbae33se rz4wbd8a cxgpxx05",
            children: [
              k.jsxs(c("TetraList.react"), {
                children: [
                  k.jsx(c("TetraListCell.react"), {
                    body: h._(
                      "You'll be logged out first. Then someone else can log in or add their account"
                    ),
                    bodyColor: "secondary",
                  }),
                  c("orEmptyArray")(
                    f == null
                      ? void 0
                      : (a = f.viewer) == null
                      ? void 0
                      : a.device_switchable_accounts
                  ).map(function (a) {
                    return k.jsx(
                      c("CometLoggedInAccountSwitcherRowWithUpdateText.react"),
                      { account: a, query: f },
                      (a =
                        a == null
                          ? void 0
                          : (a = a.user) == null
                          ? void 0
                          : a.id) != null
                        ? a
                        : void 0
                    );
                  }),
                  k.jsx(c("CometLegacyListItemSeparator.react"), {}),
                  k.jsx(c("TetraListCell.react"), {
                    addOnPrimary: {
                      icon: d("fbicon")._(i("487087"), 20),
                      size: 36,
                      type: "contained-icon",
                    },
                    headline: h._("Log Into Another Account"),
                    level: 4,
                    onPress: function () {
                      o(), m();
                    },
                  }),
                ],
              }),
              g,
            ],
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
  "XCometProfileCreateControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/profile/create/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometProfileSwitcherCreateProfileListCell.react",
  [
    "fbt",
    "ix",
    "TetraListCell.react",
    "XCometProfileCreateControllerRouteBuilder",
    "fbicon",
    "react",
    "useProfileSwitcherEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.disabled,
        e = a.meta,
        f = a.onClose,
        g = c("useProfileSwitcherEngagementClickCallback")({
          event_metadata: { creation_source: "profile_switcher" },
          item_type: "create_new_profile",
          product_bucket: "profile_account_switcher",
          subsurface: "switch_profile_bottom_sheet",
          surface: "navigation",
        });
      return j.jsx(c("TetraListCell.react"), {
        addOnPrimary: {
          icon: d("fbicon")._(i("483769"), 20),
          size: 40,
          type: "contained-icon",
        },
        addOnSecondaryVerticalAlign: "center",
        disabled: b,
        headline: h._("Create new profile"),
        level: 4,
        linkProps: {
          url: c("XCometProfileCreateControllerRouteBuilder").buildURL({}),
        },
        meta: e,
        onPress: function () {
          g(), f && f();
        },
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometProfileSwitcherPagePublishingAuthorizationCard.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometProfileSwitchCleanAndLogoutUtils",
    "CometProfileSwitcherPagePublishingAuthorizationCard_query.graphql",
    "CometTextWithEntitiesRelay.react",
    "JSResourceForInteraction",
    "PagesIntegrityEventTypedLoggerLite",
    "RelayHooks",
    "TetraButton.react",
    "TetraText.react",
    "promiseDone",
    "react",
    "useProfileCometErrorDialog_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useEffect,
      m = c("JSResourceForInteraction")(
        "CometAdditionalProfileSwitchToPrimaryProfileMutation"
      ).__setRef("CometProfileSwitcherPagePublishingAuthorizationCard.react");
    function a(a) {
      var e, f;
      a = a.query;
      a = d("RelayHooks").useFragment(
        j !== void 0
          ? j
          : (j = b(
              "CometProfileSwitcherPagePublishingAuthorizationCard_query.graphql"
            )),
        a
      );
      e =
        a == null
          ? void 0
          : (e = a.viewer) == null
          ? void 0
          : (e = e.actor) == null
          ? void 0
          : e.id;
      var g =
        a == null
          ? void 0
          : (f = a.viewer) == null
          ? void 0
          : (f = f.actor) == null
          ? void 0
          : f.page_publishing_authorization_admin_notice;
      f =
        a == null
          ? void 0
          : (f = a.viewer) == null
          ? void 0
          : (f = f.actor) == null
          ? void 0
          : f.page_publishing_authorization_hub_action_url;
      var n =
          a == null
            ? void 0
            : (a = a.viewer) == null
            ? void 0
            : a.is_eligible_for_account_level_settings,
        o = d("RelayHooks").useRelayEnvironment();
      a = c("useProfileCometErrorDialog_DEPRECATED")(
        h._("Failed to switch to Page")
      );
      var p = a[0];
      a = function () {
        c("PagesIntegrityEventTypedLoggerLite").log({
          event: "click",
          event_callsite: "profile_plus_switcher",
          event_target: "get_started_button",
          extra_data: { is_comet_render: "true" },
        }),
          n !== !0 &&
            c("promiseDone")(
              m.load().then(function (a) {
                a = a.switchProfileWithLogout;
                a(o, {
                  onCompleted: function (a) {
                    var b;
                    if (
                      Array.isArray(
                        a == null
                          ? void 0
                          : (b =
                              a.additional_profile_logout_primary_profile_login_on_comet) ==
                            null
                          ? void 0
                          : b.logout_whitelist
                      )
                    ) {
                      d(
                        "CometProfileSwitchCleanAndLogoutUtils"
                      ).cleanAndLogoutForProfileSwitch(
                        a == null
                          ? void 0
                          : (b =
                              a.additional_profile_logout_primary_profile_login_on_comet) ==
                            null
                          ? void 0
                          : b.logout_whitelist
                      );
                    }
                  },
                  onError: function (a) {
                    p(a);
                  },
                });
              })
            );
      };
      l(
        function () {
          g != null &&
            n === !0 &&
            c("PagesIntegrityEventTypedLoggerLite").log({
              event: "view",
              event_callsite: "profile_plus_switcher",
              event_target: "profile_plus_switcher_banner",
              extra_data: { is_comet_render: "true" },
            });
        },
        [g, n]
      );
      if (e == null || g == null || f == null) return null;
      return n !== !0
        ? null
        : k.jsx("div", {
            className: "dati1w0a hv4rvrfc sj5x9vvc",
            children: k.jsxs("div", {
              className: "dati1w0a hv4rvrfc sj5x9vvc qsy8amke",
              children: [
                k.jsxs("div", {
                  className:
                    "discj3wi scb9dxdr dflh9lhu sj5x9vvc btwxx1t3 j83agx80",
                  children: [
                    k.jsx("div", {
                      children: k.jsx(c("CometImage.react"), {
                        src: i("489662"),
                      }),
                    }),
                    k.jsx("div", {
                      className: "tw6a2znq lrazzd5p jq4qci2q j83agx80 bp9cbjyn",
                      children: k.jsx(c("TetraText.react"), {
                        type: "headlineEmphasized4",
                        children: k.jsx(c("CometTextWithEntitiesRelay.react"), {
                          textWithEntities: g,
                        }),
                      }),
                    }),
                  ],
                }),
                k.jsx("div", {
                  className: "discj3wi dati1w0a hv4rvrfc ihqw7lf3 bp9cbjyn",
                  children: k.jsx(c("TetraButton.react"), {
                    label: h._("Get Started"),
                    linkProps: { target: "_blank", url: f },
                    onPress: a,
                    padding: "wide",
                  }),
                }),
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
  "CometProfileSwitcher.react",
  [
    "fbt",
    "ix",
    "CometBadge.react",
    "CometInteractionTracingModuleProfileSwitchingTtiQPLEvent",
    "CometProfileSwitcherCreateProfileListCell.react",
    "CometProfileSwitcherPagePublishingAuthorizationCard.react",
    "CometProfileSwitcher_query.graphql",
    "CometRelay",
    "ConstUriUtils",
    "JSResourceForInteraction",
    "Locale",
    "ProfilePlusAdminActivitiesFalcoEvent",
    "RelayHooks",
    "TetraIcon.react",
    "TetraList.react",
    "TetraListCell.react",
    "TetraText.react",
    "WebPixelRatio",
    "XCometProfileControllerRouteBuilder",
    "fbicon",
    "gkx",
    "goForceFullPageRedirectTo",
    "orEmptyArray",
    "promiseDone",
    "qex",
    "react",
    "useCometInteractionTracing",
    "useCometLazyDialog",
    "useIsMountedRef",
    "useProfileCometErrorDialog_DEPRECATED",
    "useProfileCometSwitcherCleanUpOnSwap",
    "useProfileSwitcherEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useState,
      m = d("Locale").isRTL(),
      n = c("JSResourceForInteraction")("CometProfileSwitchMutation").__setRef(
        "CometProfileSwitcher.react"
      ),
      o = c("JSResourceForInteraction")(
        "CometProfilePlusAdminlessTransitionCAEDialog.react"
      ).__setRef("CometProfileSwitcher.react");
    function a(a) {
      var e,
        f,
        g,
        p,
        q = a.onClose,
        r = a.onReturn;
      a = a.query;
      a = d("RelayHooks").useFragment(
        j !== void 0 ? j : (j = b("CometProfileSwitcher_query.graphql")),
        a
      );
      var s = c("gkx")("1663500"),
        t =
          a == null
            ? void 0
            : (e = a.viewer) == null
            ? void 0
            : (e = e.actor) == null
            ? void 0
            : e.should_switch_landing_page,
        u =
          (e =
            a == null
              ? void 0
              : (e = a.viewer) == null
              ? void 0
              : (e = e.actor) == null
              ? void 0
              : e.id) != null
            ? e
            : "";
      e =
        {
          profile:
            a == null ? void 0 : (e = a.viewer) == null ? void 0 : e.actor,
        } || {};
      f = c("orEmptyArray")(
        a == null
          ? void 0
          : (f = a.viewer) == null
          ? void 0
          : (f = f.actor) == null
          ? void 0
          : (f = f.profile_switcher_eligible_profiles) == null
          ? void 0
          : f.nodes
      );
      g = l(
        a == null
          ? void 0
          : (g = a.viewer) == null
          ? void 0
          : (g = g.actor) == null
          ? void 0
          : g.id
      );
      var v = g[0],
        w = g[1],
        x =
          (g =
            a == null
              ? void 0
              : (g = a.viewer) == null
              ? void 0
              : (g = g.actor) == null
              ? void 0
              : g.is_failing_page_publishing_authorization) != null
            ? g
            : !1;
      g =
        (g =
          a == null
            ? void 0
            : (g = a.viewer) == null
            ? void 0
            : (g = g.additional_profile_creation_eligibility) == null
            ? void 0
            : (g = g.single_owner) == null
            ? void 0
            : g.can_create) != null
          ? g
          : !1;
      p =
        a == null
          ? void 0
          : (p = a.viewer) == null
          ? void 0
          : (p = p.additional_profile_creation_eligibility) == null
          ? void 0
          : (p = p.single_owner) == null
          ? void 0
          : p.explanation;
      var y = c("useProfileSwitcherEngagementClickCallback")({
          item_type: "profile",
          product_bucket: "profile_account_switcher",
          subsurface: "switch_profile_menu",
          surface: "navigation",
        }),
        z = c("useCometInteractionTracing")(
          c("CometInteractionTracingModuleProfileSwitchingTtiQPLEvent"),
          "responsive",
          "INTERACTION"
        ),
        A = c("useProfileCometSwitcherCleanUpOnSwap")(a),
        B = d("CometRelay").useRelayEnvironment(),
        C = c("useIsMountedRef")(),
        D = c("useProfileCometErrorDialog_DEPRECATED")(
          h._("Failed to switch profiles")
        ),
        E = D[0],
        F = function (a, b) {
          c("promiseDone")(
            n.load().then(function (e) {
              e = e.switchProfile;
              e(
                B,
                { profileId: a },
                {
                  onCompleted: function () {
                    if (a !== null && b === !0 && t === !0) {
                      A();
                      var e = c("XCometProfileControllerRouteBuilder").buildURL(
                        { id: a, show_switched_toast: !0 }
                      );
                      c("goForceFullPageRedirectTo")(e);
                    } else {
                      C.current && q();
                      e = c("qex")._("567");
                      A(e);
                      if (e === !0) {
                        e = window.location.href;
                        var f = d("ConstUriUtils").getUri(e);
                        e =
                          f != null
                            ? f.removeQueryParams(["show_switched_toast"])
                            : e;
                        e != null
                          ? c("goForceFullPageRedirectTo")(e)
                          : c("goForceFullPageRedirectTo")("/");
                      } else c("goForceFullPageRedirectTo")("/");
                    }
                  },
                  onError: function (a) {
                    q(), E(a);
                  },
                }
              );
            })
          );
        };
      D = c("useCometLazyDialog")(o);
      var G = D[0];
      return k.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          k.jsxs("div", {
            className: "discj3wi dati1w0a hv4rvrfc sj5x9vvc btwxx1t3 j83agx80",
            children: [
              k.jsx("div", {
                className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                children: k.jsx(c("TetraIcon.react"), {
                  "aria-label": h._("Back"),
                  icon: m
                    ? d("fbicon")._(i("514454"), 20)
                    : d("fbicon")._(i("512647"), 20),
                  onPress: r,
                }),
              }),
              k.jsx("div", {
                className: "tw6a2znq j83agx80 bp9cbjyn",
                children: k.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized1",
                  children: h._("Select Profile"),
                }),
              }),
            ],
          }),
          k.jsx(
            c("CometProfileSwitcherPagePublishingAuthorizationCard.react"),
            { query: a }
          ),
          k.jsx("div", {
            className: "cxgpxx05 jbae33se",
            children: k.jsxs(c("TetraList.react"), {
              children: [
                [e].concat(f).map(function (a) {
                  var b = a.profile;
                  return b != null
                    ? k.jsx(
                        c("TetraListCell.react"),
                        {
                          addOnPrimary: {
                            shape: "circle",
                            size: 40,
                            source: {
                              height:
                                (a =
                                  b == null
                                    ? void 0
                                    : (a = b.profile_picture) == null
                                    ? void 0
                                    : a.height) != null
                                  ? a
                                  : 40,
                              scale:
                                (a =
                                  b == null
                                    ? void 0
                                    : (a = b.profile_picture) == null
                                    ? void 0
                                    : a.scale) != null
                                  ? a
                                  : d("WebPixelRatio").get(),
                              uri:
                                (a =
                                  b == null
                                    ? void 0
                                    : (a = b.profile_picture) == null
                                    ? void 0
                                    : a.uri) != null
                                  ? a
                                  : "",
                              width:
                                (a =
                                  b == null
                                    ? void 0
                                    : (a = b.profile_picture) == null
                                    ? void 0
                                    : a.width) != null
                                  ? a
                                  : 40,
                            },
                            type: "profile-photo",
                          },
                          addOnSecondary: { on: v === b.id, type: "radio" },
                          addOnSecondaryVerticalAlign: "center",
                          body:
                            x && v !== b.id
                              ? k.jsxs(k.Fragment, {
                                  children: [
                                    k.jsx(c("CometBadge.react"), {
                                      color: "red",
                                    }),
                                    h._("Temporarily Restricted"),
                                  ],
                                })
                              : b.unseen_update_count !== null &&
                                b.unseen_update_count !== 0
                              ? k.jsxs(k.Fragment, {
                                  children: [
                                    k.jsx(c("CometBadge.react"), {}),
                                    h._(
                                      {
                                        "*": "{number} notifications",
                                        _1: "1 notification",
                                      },
                                      [
                                        h._plural(
                                          b.unseen_update_count || 0,
                                          "number"
                                        ),
                                      ]
                                    ),
                                  ],
                                })
                              : null,
                          disabled: x && v !== b.id,
                          headline: b.name,
                          level: 4,
                          onPress: function () {
                            w(b.id);
                            y();
                            var a = b.id;
                            a != null &&
                              c("ProfilePlusAdminActivitiesFalcoEvent").log(
                                function () {
                                  return {
                                    additional_profile_id: a,
                                    event: "click",
                                    event_target:
                                      "global_voice_switcher_menu_item",
                                    surface: "global_voice_switcher",
                                  };
                                }
                              );
                            if (
                              (b == null
                                ? void 0
                                : b.viewer_has_pending_core_app_access_approval) ===
                              !0
                            ) {
                              var d;
                              G({
                                name: b == null ? void 0 : b.name,
                                pageID: b == null ? void 0 : b.delegate_page_id,
                                platformTool:
                                  (d =
                                    b == null
                                      ? void 0
                                      : b.profile_plus_primary_platform_tool) !=
                                  null
                                    ? d
                                    : "BUSINESS_SUITE",
                                profilePictureURI:
                                  b == null
                                    ? void 0
                                    : (d = b.profile_picture) == null
                                    ? void 0
                                    : d.uri,
                              });
                            } else
                              z(function (a) {
                                var c =
                                  b.is_switching_to_additional_profile === !0 &&
                                  t === !0
                                    ? "profile"
                                    : "newsfeed";
                                a.addMetadata("origin", "voice_switcher");
                                a.addMetadata("landing_surface", c);
                                a.addMetadata("originating_user_id", u);
                                F(b.id, b.is_switching_to_additional_profile);
                              });
                          },
                          testid: void 0,
                        },
                        b.id
                      )
                    : null;
                }),
                s && (g || p)
                  ? k.jsx(
                      c("CometProfileSwitcherCreateProfileListCell.react"),
                      { disabled: !g, meta: p, onClose: q }
                    )
                  : null,
              ],
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
  "CometSettingsDropdownKeyboard.react",
  [
    "fbt",
    "ix",
    "CometAccessibilitySettingsFalcoEvent",
    "CometKeyCommandSettingsContext",
    "CometListCell.react",
    "CometListCellPressable.react",
    "CometListCellRadioAddOn.react",
    "CometListCellText.react",
    "CometRadioGroupList.react",
    "CometRadioListCellPressable.react",
    "CometSkittleIcon.react",
    "JSResourceForInteraction",
    "Locale",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useContext,
      m = b.useState,
      n = c("JSResourceForInteraction")(
        "CometKeyShortcutDialog.react"
      ).__setRef("CometSettingsDropdownKeyboard.react"),
      o = c("Locale").isRTL();
    function p(a) {
      c("CometAccessibilitySettingsFalcoEvent").log(function () {
        return a;
      });
    }
    function a(a) {
      a = a.onReturn;
      var b = l(c("CometKeyCommandSettingsContext")),
        e = b.getAreSingleKeysDisabled,
        f = b.setAreSingleKeysDisabled;
      b = m(e() === !1);
      e = b[0];
      var g = b[1];
      b = c("useCometLazyDialog")(n);
      var q = b[0],
        r = k(
          function (a) {
            f(!a), g(a);
          },
          [f]
        );
      return j.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          j.jsxs("div", {
            className: "dati1w0a sj5x9vvc hv4rvrfc discj3wi btwxx1t3 j83agx80",
            children: [
              j.jsx("div", {
                className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                children: j.jsx(c("TetraIcon.react"), {
                  "aria-label": h._("Back"),
                  icon: o
                    ? d("fbicon")._(i("514454"), 20)
                    : d("fbicon")._(i("512647"), 20),
                  onPress: a,
                }),
              }),
              j.jsx("div", {
                className: "h4z51re5 j83agx80 bp9cbjyn",
                children: j.jsx(c("TetraText.react"), {
                  isSemanticHeading: !0,
                  type: "headlineEmphasized1",
                  children: h._("Keyboard"),
                }),
              }),
            ],
          }),
          j.jsxs("div", {
            className: "a8nywdso jbae33se rz4wbd8a cxgpxx05 muag1w35 b20td4e0",
            children: [
              j.jsx(c("CometListCellPressable.react"), {
                addOnStart: j.jsx(c("CometSkittleIcon.react"), {
                  color: "gray",
                  icon: d("fbicon")._(i("577844"), 20),
                  size: 36,
                }),
                content: j.jsx(c("CometListCellText.react"), {
                  emphasized: !0,
                  headline: h._("See All Keyboard Shortcuts"),
                }),
                contentPaddingHorizontal: 16,
                onPress: function () {
                  q({}, function () {}),
                    p({
                      event_type: "click",
                      target_item: "see_keyboard_shortcuts",
                    });
                },
              }),
              j.jsx(c("CometListCell.react"), {
                addOnStart: j.jsx(c("CometSkittleIcon.react"), {
                  color: "gray",
                  icon: d("fbicon")._(i("657879"), 20),
                  size: 36,
                }),
                addOnStartVerticalAlign: "top",
                content: j.jsx(c("CometListCellText.react"), {
                  body: h._(
                    "Use single-character shortcuts to perform common actions."
                  ),
                  emphasized: !0,
                  headline: h._("Use Single-Character Keyboard Shortcuts"),
                }),
                contentPaddingHorizontal: 16,
              }),
              j.jsxs(c("CometRadioGroupList.react"), {
                label: h._("Use Single-Character Keyboard Shortcuts"),
                name: "single-char-shortcuts",
                onValueChange: function (a) {
                  a = a === "on";
                  r(a);
                  p({
                    event_type: "click",
                    target_item: a ? "single_keys_off" : "single_keys_on",
                  });
                },
                children: [
                  j.jsx(c("CometRadioListCellPressable.react"), {
                    content: j.jsx(c("CometListCellText.react"), {
                      headline: h._("Off"),
                    }),
                    contentPaddingHorizontal: 16,
                    level: 4,
                    nestedSpacing: 48,
                    radioAddonComponent: c("CometListCellRadioAddOn.react"),
                    radioAddonProps: { checked: !e, value: "off" },
                  }),
                  j.jsx(c("CometRadioListCellPressable.react"), {
                    content: j.jsx(c("CometListCellText.react"), {
                      headline: h._("On"),
                    }),
                    contentPaddingHorizontal: 16,
                    level: 4,
                    nestedSpacing: 48,
                    radioAddonComponent: c("CometListCellRadioAddOn.react"),
                    radioAddonProps: { checked: e, value: "on" },
                  }),
                ],
              }),
            ],
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
  "CometSettingsDropdownAppearance.react",
  [
    "fbt",
    "ix",
    "CometAccessibilitySettingsFalcoEvent",
    "CometDarkModeContext",
    "CometDensityModeContext",
    "CometListCell.react",
    "CometListCellPressable.react",
    "CometListCellRadioAddOn.react",
    "CometListCellText.react",
    "CometRadioGroupList.react",
    "CometRadioListCellPressable.react",
    "CometSettingsDropdownKeyboard.react",
    "CometSkittleIcon.react",
    "Locale",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "react",
    "useCurrentDisplayMode",
    "useTopNavigationLogging",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext,
      l = c("Locale").isRTL();
    function m(a) {
      c("CometAccessibilitySettingsFalcoEvent").log(function () {
        return a;
      });
    }
    function a(a) {
      var b = a.onReturn,
        e = a.pushPage;
      a = c("useCurrentDisplayMode")();
      a = a === "dark";
      var f = k(c("CometDarkModeContext")),
        g = f.setDarkModePreference;
      f = k(c("CometDensityModeContext"));
      var n = f[0],
        o = f[1];
      f = d("useTopNavigationLogging").useSettingsItemLoggingCallbacks(
        "dark-mode",
        1,
        a
      );
      var p = f[0];
      f = f[1];
      var q = d("useTopNavigationLogging").useSettingsItemLoggingCallbacks(
          "compact-mode",
          2,
          n
        ),
        r = q[0];
      q = q[1];
      var s = d("useTopNavigationLogging").useSettingsItemLoggingCallbacks(
          "keyboard",
          3,
          !1
        ),
        t = s[0];
      s = s[1];
      var u = h._("Display & Accessibility");
      return j.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          j.jsxs("div", {
            className: "dati1w0a sj5x9vvc hv4rvrfc discj3wi btwxx1t3 j83agx80",
            children: [
              j.jsx("div", {
                className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                children: j.jsx(c("TetraIcon.react"), {
                  "aria-label": h._("Back"),
                  icon: l
                    ? d("fbicon")._(i("514454"), 20)
                    : d("fbicon")._(i("512647"), 20),
                  onPress: b,
                }),
              }),
              j.jsx("div", {
                className: "h4z51re5 j83agx80 bp9cbjyn",
                children: j.jsx(c("TetraText.react"), {
                  isSemanticHeading: !0,
                  type: "headlineEmphasized1",
                  children: u,
                }),
              }),
            ],
          }),
          j.jsxs("div", {
            className: "a8nywdso jbae33se rz4wbd8a cxgpxx05 muag1w35 b20td4e0",
            children: [
              j.jsx(c("CometListCell.react"), {
                addOnStart: j.jsx(c("CometSkittleIcon.react"), {
                  color: "gray",
                  icon: d("fbicon")._(i("832941"), 20),
                  size: 36,
                }),
                addOnStartVerticalAlign: "top",
                content: j.jsx(c("CometListCellText.react"), {
                  body: h._(
                    "Adjust the appearance of Facebook to reduce glare and give your eyes a break."
                  ),
                  emphasized: !0,
                  headline: h._("Dark Mode"),
                }),
                contentPaddingHorizontal: 16,
              }),
              j.jsxs(c("CometRadioGroupList.react"), {
                label: h._("Dark Mode"),
                name: "dark-mode",
                onValueChange: function (a) {
                  p(), g(a === "on");
                },
                children: [
                  j.jsx(c("CometRadioListCellPressable.react"), {
                    content: j.jsx(c("CometListCellText.react"), {
                      headline: h._("Off"),
                    }),
                    contentPaddingHorizontal: 16,
                    level: 4,
                    nestedSpacing: 48,
                    radioAddonComponent: c("CometListCellRadioAddOn.react"),
                    radioAddonProps: { checked: !a, value: "off" },
                    ref: a ? f : void 0,
                  }),
                  j.jsx(c("CometRadioListCellPressable.react"), {
                    content: j.jsx(c("CometListCellText.react"), {
                      headline: h._("On"),
                    }),
                    contentPaddingHorizontal: 16,
                    level: 4,
                    nestedSpacing: 48,
                    radioAddonComponent: c("CometListCellRadioAddOn.react"),
                    radioAddonProps: { checked: a, value: "on" },
                    ref: a ? void 0 : f,
                  }),
                ],
              }),
              j.jsx(c("CometListCell.react"), {
                addOnStart: j.jsx(c("CometSkittleIcon.react"), {
                  color: "gray",
                  icon: d("fbicon")._(i("1252034"), 20),
                  size: 36,
                }),
                addOnStartVerticalAlign: "top",
                content: j.jsx(c("CometListCellText.react"), {
                  body: h._(
                    "Make your font size smaller so more content can fit on the screen."
                  ),
                  emphasized: !0,
                  headline: h._("Compact Mode"),
                }),
                contentPaddingHorizontal: 16,
              }),
              j.jsxs(c("CometRadioGroupList.react"), {
                label: h._("Compact Mode"),
                name: "compact-mode",
                onValueChange: function (a) {
                  a !== "focus" ? (r(), o(a === "on")) : o(!1);
                },
                children: [
                  j.jsx(c("CometRadioListCellPressable.react"), {
                    content: j.jsx(c("CometListCellText.react"), {
                      headline: h._("Off"),
                    }),
                    contentPaddingHorizontal: 16,
                    level: 4,
                    nestedSpacing: 48,
                    radioAddonComponent: c("CometListCellRadioAddOn.react"),
                    radioAddonProps: { checked: !n, value: "off" },
                    ref: n ? q : void 0,
                  }),
                  j.jsx(c("CometRadioListCellPressable.react"), {
                    content: j.jsx(c("CometListCellText.react"), {
                      headline: h._("On"),
                    }),
                    contentPaddingHorizontal: 16,
                    level: 4,
                    nestedSpacing: 48,
                    radioAddonComponent: c("CometListCellRadioAddOn.react"),
                    radioAddonProps: { checked: n, value: "on" },
                    ref: n ? void 0 : q,
                  }),
                ],
              }),
              j.jsx(c("CometListCellPressable.react"), {
                addOnStart: j.jsx(c("CometSkittleIcon.react"), {
                  color: "gray",
                  icon: d("fbicon")._(i("577844"), 20),
                  size: 36,
                }),
                addOnStartVerticalAlign: "top",
                content: j.jsx(c("CometListCellText.react"), {
                  emphasized: !0,
                  headline: h._("Keyboard"),
                }),
                contentPaddingHorizontal: 16,
                onPress: function () {
                  e(function (a) {
                    return j.jsx(c("CometSettingsDropdownKeyboard.react"), {
                      onReturn: a.onReturn,
                    });
                  }),
                    t(),
                    m({ event_type: "click", target_item: "keyboard" });
                },
                ref: s,
              }),
            ],
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
  "CometSettingsDropdownHeader.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "CometSettingsDropdownHeader_viewer.graphql",
    "TetraCircleButton.react",
    "TetraListCell.react",
    "XCometMeControllerRouteBuilder",
    "fbicon",
    "gkx",
    "react",
    "useTopNavigationLogging",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = c("XCometMeControllerRouteBuilder").buildURL({});
    function a(a) {
      var e,
        f,
        g,
        m = a.onPress,
        n = a.onSecondaryPress,
        o = a.selected;
      a = a.viewer;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometSettingsDropdownHeader_viewer.graphql")),
        a
      );
      e = a == null ? void 0 : (e = a.actor) == null ? void 0 : e.name;
      f =
        a == null
          ? void 0
          : (f = a.actor) == null
          ? void 0
          : (f = f.settings_dropdown_profile_picture) == null
          ? void 0
          : f.uri;
      var p = d("useTopNavigationLogging").useSettingsItemLoggingCallbacks(
          "profile",
          0,
          !1
        ),
        q = p[0];
      p = p[1];
      g =
        (a == null
          ? void 0
          : (g = a.actor) == null
          ? void 0
          : (g = g.profileSwitcherEligibleProfiles) == null
          ? void 0
          : g.count) != null &&
        (a == null
          ? void 0
          : (g = a.actor) == null
          ? void 0
          : (g = g.profileSwitcherEligibleProfiles) == null
          ? void 0
          : g.count) > 0;
      var r = c("gkx")("1663500"),
        s = r && g;
      s = s ? 36 : 60;
      var t = null;
      r &&
        (g
          ? (t = { on: o != null ? o : !0, type: "radio" })
          : (t = {
              addOn: k.jsx(c("TetraCircleButton.react"), {
                icon: d("fbicon")._(i("484386"), 16),
                label: h._("Switch Profile"),
                onPress: n,
                size: 36,
              }),
              type: "body",
            }));
      return e == null
        ? null
        : k.jsx(c("TetraListCell.react"), {
            addOnPrimary:
              f == null
                ? void 0
                : {
                    shape: "circle",
                    size: s,
                    source: { height: s, uri: f, width: s },
                    type: "profile-photo",
                  },
            addOnPrimaryVerticalAlign: "center",
            addOnSecondary: t,
            body:
              (a == null
                ? void 0
                : (r = a.actor) == null
                ? void 0
                : r.should_use_page_rename) === !0
                ? h._("See your Page")
                : h._("See your profile"),
            emphasized: !0,
            headline: e,
            level: 3,
            linkProps: { routeTarget: "self", url: l },
            onPress: function (a) {
              m(), q();
            },
            ref: p,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSettingsDropdownListItem.react",
  ["TetraListCell.react", "react", "useTopNavigationLogging"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.cellProps,
        e = a.itemKey,
        f = a.position;
      a = a.selected;
      var g = b.onPress;
      e = d("useTopNavigationLogging").useSettingsItemLoggingCallbacks(e, f, a);
      var j = e[0];
      f = e[1];
      a = i(
        function (a) {
          j(), g && g(a);
        },
        [j, g]
      );
      return h.jsx(
        c("TetraListCell.react"),
        babelHelpers["extends"]({}, b, { onPress: a, ref: f })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSettingsDropdownSafety.react",
  [
    "fbt",
    "ix",
    "Locale",
    "TetraIcon.react",
    "TetraList.react",
    "TetraListCell.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("Locale").isRTL();
    function a(a) {
      var b = a.onClose;
      a = a.onReturn;
      b = [
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("588485"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Visit the Safety Center"),
            level: 4,
            linkProps: { target: "_blank", url: "/safety" },
            onPress: b,
          },
          render: !0,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("487558"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Find resources for parents"),
            level: 4,
            linkProps: { target: "_blank", url: "/safety/parents" },
            onPress: b,
          },
          render: !0,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("1859005"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Help prevent bullying"),
            level: 4,
            linkProps: { target: "_blank", url: "/safety/bullying" },
            onPress: b,
          },
          render: !0,
        },
      ].filter(function (a) {
        return a.render;
      });
      return j.jsxs("div", {
        className: "jbae33se cbu4d94t j83agx80",
        children: [
          j.jsxs("div", {
            className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi btwxx1t3 j83agx80",
            children: [
              j.jsx("div", {
                className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                children: j.jsx(c("TetraIcon.react"), {
                  "aria-label": h._("Back"),
                  icon: k
                    ? d("fbicon")._(i("514454"), 20)
                    : d("fbicon")._(i("512647"), 20),
                  onPress: a,
                }),
              }),
              j.jsx("div", {
                className: "h4z51re5 j83agx80 bp9cbjyn",
                children: j.jsx(c("TetraText.react"), {
                  isSemanticHeading: !0,
                  type: "headlineEmphasized1",
                  children: h._("Safety"),
                }),
              }),
            ],
          }),
          j.jsx(c("TetraList.react"), {
            items: b,
            children: function (a) {
              var b = a.item.cellProps;
              a = a.props;
              return j.createElement(
                c("TetraListCell.react"),
                babelHelpers["extends"]({}, b, { key: a.key })
              );
            },
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
  "XCometPrivacyCheckupControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/privacy/checkup/",
      Object.freeze({ source: "unknown" }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCreatorPortalControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/help/creator/{?*rest}",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometSettingsDropdownQuickHelp.react",
  [
    "fbt",
    "ix",
    "CometIHCCloseButtonContext",
    "CometRelay",
    "CometSettingsDropdownQuickHelpQuery.graphql",
    "CometSettingsDropdownSafety.react",
    "Locale",
    "TetraIcon.react",
    "TetraList.react",
    "TetraListCell.react",
    "TetraText.react",
    "XCometPrivacyCheckupControllerRouteBuilder",
    "XCreatorPortalControllerRouteBuilder",
    "fbicon",
    "gkx",
    "react",
    "useCometReportBug",
    "useLaunchFRXFlow",
    "useNullthrowsViolation",
    "useShouldRenderFullTopNav",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useContext,
      m = d("Locale").isRTL();
    function a(a) {
      var e = a.onClose,
        f = a.onReturn,
        g = a.pushPage;
      a = d("CometRelay").useLazyLoadQuery(
        j !== void 0
          ? j
          : (j = b("CometSettingsDropdownQuickHelpQuery.graphql")),
        {}
      );
      a = c("useNullthrowsViolation")(
        (a = a.viewer) == null ? void 0 : (a = a.actor) == null ? void 0 : a.id
      );
      var n = l(c("CometIHCCloseButtonContext")),
        o = function () {
          n.setClosed(!n.closed);
        },
        p = c("useCometReportBug")(),
        q = p[0];
      p = c("useLaunchFRXFlow")({
        content_id: a,
        entry_point: "STRUCTURED_REPORT_BUTTON",
        location: "HELP_AND_SUPPORT",
        trigger_event_type: "REPORT_BUTTON_CLICKED",
      });
      var r = p[0];
      a = c("useShouldRenderFullTopNav")();
      p = [
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("496951"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Help Center"),
            level: 4,
            linkProps: c("gkx")("2524")
              ? { preventLocalNavigation: !0, url: "/help/?ref=contextual" }
              : { target: "_blank", url: "/help/?ref=contextual" },
            onPress: function () {
              c("gkx")("2524") && o(), e();
            },
          },
          render: !0,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("558620"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Creator Support"),
            level: 4,
            linkProps: {
              target: "_blank",
              url: c("XCreatorPortalControllerRouteBuilder").buildURL({}),
            },
            onPress: e,
          },
          render: c("gkx")("1312"),
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("497245"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Privacy Checkup"),
            level: 4,
            linkProps: {
              url: c("XCometPrivacyCheckupControllerRouteBuilder").buildURL({
                source: "quick_help",
              }),
            },
            onPress: e,
          },
          render: !1,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("497567"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Privacy Shortcuts"),
            level: 4,
            linkProps: { url: "/privacy/" },
            onPress: e,
          },
          render: !1,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("495079"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Report Census or Voter Interference"),
            level: 4,
            onPress: function () {
              r({}), e();
            },
          },
          render: c("gkx")("1300497"),
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("495079"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Support Inbox"),
            level: 4,
            linkProps: { url: "/support?ref=contextual" },
            onPress: e,
          },
          render: a,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("490580"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Report a Problem"),
            level: 4,
            onPress: function () {
              q(), e();
            },
          },
          render: !0,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("1856932"), 20),
              size: 36,
              type: "contained-icon",
            },
            addOnSecondary: {
              color: "secondary",
              icon: m
                ? d("fbicon")._(i("492491"), 24)
                : d("fbicon")._(i("492539"), 24),
              type: "icon",
            },
            headline: h._("Safety"),
            level: 4,
            onPress: function () {
              g(function (a) {
                a = a.onReturn;
                return k.jsx(c("CometSettingsDropdownSafety.react"), {
                  onClose: e,
                  onReturn: a,
                  pushPage: g,
                });
              });
            },
          },
          render: c("gkx")("1545458"),
        },
      ].filter(function (a) {
        return a.render;
      });
      return k.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          k.jsxs("div", {
            className: "dati1w0a sj5x9vvc hv4rvrfc discj3wi btwxx1t3 j83agx80",
            children: [
              k.jsx("div", {
                className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                children: k.jsx(c("TetraIcon.react"), {
                  "aria-label": h._("Back"),
                  icon: m
                    ? d("fbicon")._(i("514454"), 20)
                    : d("fbicon")._(i("512647"), 20),
                  onPress: f,
                }),
              }),
              k.jsx("div", {
                className: "h4z51re5 j83agx80 bp9cbjyn",
                children: k.jsx(c("TetraText.react"), {
                  isSemanticHeading: !0,
                  type: "headlineEmphasized1",
                  children: h._("Help & Support"),
                }),
              }),
            ],
          }),
          k.jsx("div", {
            className: "a8nywdso jbae33se rz4wbd8a cxgpxx05",
            children: k.jsx(c("TetraList.react"), {
              items: p,
              children: function (a) {
                var b = a.item.cellProps;
                a = a.props;
                return k.createElement(
                  c("TetraListCell.react"),
                  babelHelpers["extends"]({}, b, { key: a.key })
                );
              },
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
  "CometInteractionTracingModuleFeedPreferencesDialogOpenQPLEvent",
  ["cr:5857"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:5857");
  },
  98
);
__d(
  "CometSettingsDropdownSettingsAndPrivacy.react",
  [
    "fbt",
    "ix",
    "CometInteractionTracingModuleFeedPreferencesDialogOpenQPLEvent",
    "CometRelay",
    "CometSettingsDropdownListItem.react",
    "CometSettingsDropdownSettingsAndPrivacy_query.graphql",
    "Locale",
    "TetraIcon.react",
    "TetraList.react",
    "TetraText.react",
    "XCometActivityLogControllerRouteBuilder",
    "XCometPrivacyCheckupControllerRouteBuilder",
    "XCometSettingsControllerRouteBuilder",
    "cr:1571188",
    "cr:1915101",
    "fbicon",
    "gkx",
    "react",
    "recoverableViolation",
    "useCometFeedPreferencesDialog",
    "useCometInteractionTracing",
    "useShouldRenderFullTopNav",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l =
        (e = b("cr:1571188")) != null
          ? e
          : function () {
              return null;
            },
      m = d("Locale").isRTL();
    function a(a) {
      var e,
        f,
        g = a.onClose,
        n = a.onReturn,
        o = a.pushPage;
      a = a.query;
      var p = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometSettingsDropdownSettingsAndPrivacy_query.graphql")),
        a
      );
      a = p == null ? void 0 : p.viewer;
      var q = l();
      e = a == null ? void 0 : (e = a.actor) == null ? void 0 : e.username;
      f = a == null ? void 0 : (f = a.actor) == null ? void 0 : f.id;
      f = e == null || e === "" ? f : e;
      e =
        f == null || f === ""
          ? null
          : c("XCometActivityLogControllerRouteBuilder").buildURL({
              entry_point: "settings_and_privacy",
              should_load_landing_page: !0,
              vanity: f,
            });
      e == null &&
        c("recoverableViolation")(
          "Was not able to get activity log uri for settings menu",
          "comet_ui"
        );
      f =
        (a == null ? void 0 : a.is_eligible_for_account_level_settings) === !0;
      a = f && !c("gkx")("1545458");
      var r = c("useCometFeedPreferencesDialog")(),
        s = r[0];
      r = r[1];
      var t = c("useCometInteractionTracing")(
          c("CometInteractionTracingModuleFeedPreferencesDialogOpenQPLEvent"),
          "responsive",
          "INTERACTION"
        ),
        u = c("useShouldRenderFullTopNav")();
      a = [
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("497567"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("Settings"),
            level: 4,
            linkProps: { url: "/settings" },
            onPress: g,
            testid: "CometSettingsButton",
          },
          itemKey: "settings-privacy",
          render: u,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("487622"), 20),
              size: 36,
              type: "contained-icon",
            },
            addOnSecondary: {
              color: "secondary",
              icon: m
                ? d("fbicon")._(i("492491"), 24)
                : d("fbicon")._(i("492539"), 24),
              type: "icon",
            },
            headline: h._("Language"),
            level: 4,
            onPress: function () {
              o(function (a) {
                return k.jsx(b("cr:1915101"), {
                  onClose: g,
                  onReturn: a.onReturn,
                  pushPage: o,
                  query: p,
                });
              });
            },
            testid: "CometSettingsLanguageInternalDropdown",
          },
          itemKey: "internationalization",
          render: u && b("cr:1915101") != null,
        },
        f === !1
          ? null
          : {
              cellProps: {
                addOnPrimary: {
                  icon: d("fbicon")._(i("789724"), 20),
                  size: 36,
                  type: "contained-icon",
                },
                headline: h._("Privacy Checkup"),
                level: 4,
                linkProps: {
                  url: c("XCometPrivacyCheckupControllerRouteBuilder").buildURL(
                    { source: "settings_and_privacy" }
                  ),
                },
                onPress: g,
                testid: "CometSettingsDropdownPrivacyCheckup",
              },
              itemKey: "privacy-checkup",
              render: u,
            },
        a === !1
          ? null
          : {
              cellProps: {
                addOnPrimary: {
                  icon: d("fbicon")._(i("497245"), 20),
                  size: 36,
                  type: "contained-icon",
                },
                headline: h._("Privacy Shortcuts"),
                level: 4,
                linkProps: { url: "/privacy/" },
                onPress: g,
                testid: "CometPrivacyShortcutsButton",
              },
              itemKey: "privacy",
              render: u,
            },
        e == null
          ? null
          : {
              cellProps: {
                addOnPrimary: {
                  icon: d("fbicon")._(i("486354"), 20),
                  size: 36,
                  type: "contained-icon",
                },
                headline: h._("Activity Log"),
                level: 4,
                linkProps: { url: e },
                onPress: g,
              },
              itemKey: "activity-log",
              render: u,
            },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("607148"), 20),
              size: 36,
              type: "contained-icon",
            },
            headline: h._("News Feed Preferences"),
            level: 4,
            onPress: function () {
              t(function (a) {
                a.addMetadata("SurfaceType", "Comet"), s();
              }),
                g();
            },
            onPressIn: r,
            testid: "CometNewsFeedPreferencesButton",
          },
          itemKey: "news-feed-preferences",
          render: u,
        },
        f === !1
          ? null
          : {
              cellProps: {
                addOnPrimary: {
                  icon: d("fbicon")._(i("487622"), 20),
                  size: 36,
                  type: "contained-icon",
                },
                headline: h._("Language"),
                level: 4,
                linkProps: {
                  url: c("XCometSettingsControllerRouteBuilder").buildURL({
                    tab: "language",
                  }),
                },
                onPress: g,
                testid: "CometSettingsLanguageExternalHyperlink",
              },
              itemKey: "language",
              render: u && b("cr:1915101") === null,
            },
        q,
      ]
        .filter(Boolean)
        .filter(function (a) {
          return a.render;
        });
      return k.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          k.jsxs("div", {
            className: "dati1w0a sj5x9vvc hv4rvrfc discj3wi btwxx1t3 j83agx80",
            children: [
              k.jsx("div", {
                className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                children: k.jsx(c("TetraIcon.react"), {
                  "aria-label": h._("Back"),
                  icon: m
                    ? d("fbicon")._(i("514454"), 20)
                    : d("fbicon")._(i("512647"), 20),
                  onPress: n,
                }),
              }),
              k.jsx("div", {
                className: "h4z51re5 j83agx80 bp9cbjyn",
                children: k.jsx(c("TetraText.react"), {
                  isSemanticHeading: !0,
                  type: "headlineEmphasized1",
                  children: h._("Settings & Privacy"),
                }),
              }),
            ],
          }),
          k.jsx("div", {
            className: "a8nywdso jbae33se rz4wbd8a cxgpxx05",
            children: k.jsx(c("TetraList.react"), {
              items: a,
              children: function (a) {
                var b,
                  d = a.item,
                  e = d.cellProps;
                d = d.itemKey;
                a = a.props;
                var f = e.addOnSecondary;
                b = (b = a.key) != null ? b : -1;
                f = f != null && f.value != null ? f.value : !1;
                return k.jsx(
                  c("CometSettingsDropdownListItem.react"),
                  { cellProps: e, itemKey: d, position: b, selected: f },
                  a.key
                );
              },
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
  "getProfileSwitcherListCellProps",
  ["fbt", "CometBadge.react", "WebPixelRatio", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b,
        e = a.isFailingPagePublishingAuthorization;
      e = e === void 0 ? !1 : e;
      var f = a.onPress;
      f = f === void 0 ? function () {} : f;
      var g = a.user,
        j = a.selected;
      j = j === void 0 ? !1 : j;
      var k = a.size;
      k = k === void 0 ? 40 : k;
      a = a.testid;
      return {
        addOnPrimary: {
          shape: "circle",
          size: k,
          source: {
            height:
              (b =
                g == null
                  ? void 0
                  : (b = g.profile_picture) == null
                  ? void 0
                  : b.height) != null
                ? b
                : k,
            scale:
              (b =
                g == null
                  ? void 0
                  : (b = g.profile_picture) == null
                  ? void 0
                  : b.scale) != null
                ? b
                : d("WebPixelRatio").get(),
            uri:
              (b =
                g == null
                  ? void 0
                  : (b = g.profile_picture) == null
                  ? void 0
                  : b.uri) != null
                ? b
                : "",
            width:
              (b =
                g == null
                  ? void 0
                  : (b = g.profile_picture) == null
                  ? void 0
                  : b.width) != null
                ? b
                : k,
          },
          type: "profile-photo",
        },
        addOnSecondary: { on: j, type: "radio" },
        addOnSecondaryVerticalAlign: "center",
        body:
          e && !j
            ? i.jsxs(i.Fragment, {
                children: [
                  i.jsx(c("CometBadge.react"), { color: "red" }),
                  h._("Temporarily Restricted"),
                ],
              })
            : (g == null ? void 0 : g.unseen_update_count) !== null &&
              (g == null ? void 0 : g.unseen_update_count) !== 0
            ? i.jsxs(i.Fragment, {
                children: [
                  i.jsx(c("CometBadge.react"), {}),
                  h._({ "*": "{number} notifications", _1: "1 notification" }, [
                    h._plural(
                      (g == null ? void 0 : g.unseen_update_count) || 0,
                      "number"
                    ),
                  ]),
                ],
              })
            : null,
        disabled: e && !j,
        headline: g == null ? void 0 : g.name,
        level: 4,
        onPress: f,
        testid: a,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometProfileSwitcherListCell.react",
  [
    "CometProfileSwitcherListCell_profile.graphql",
    "CometRelay",
    "TetraListCell.react",
    "getProfileSwitcherListCellProps",
    "react",
    "useProfileSwitcherEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = a.isFailingPagePublishingAuthorization;
      f = f === void 0 ? !1 : f;
      var g = a.loggerData,
        j = a.onClick,
        k = a.profile;
      a = a.selected;
      a = a === void 0 ? !1 : a;
      k = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometProfileSwitcherListCell_profile.graphql")),
        k
      );
      var l = c("useProfileSwitcherEngagementClickCallback")(
        (e = g) != null ? e : {}
      );
      f = c("getProfileSwitcherListCellProps")({
        isFailingPagePublishingAuthorization: f,
        onPress: function () {
          g != null && l(), j && j();
        },
        selected: a,
        size: 40,
        user: {
          id: k == null ? void 0 : k.id,
          name: k == null ? void 0 : k.name,
          profile_picture: {
            height:
              k == null
                ? void 0
                : (e = k.profile_picture) == null
                ? void 0
                : e.height,
            scale:
              k == null
                ? void 0
                : (f = k.profile_picture) == null
                ? void 0
                : f.scale,
            uri:
              k == null
                ? void 0
                : (a = k.profile_picture) == null
                ? void 0
                : a.uri,
            width:
              k == null
                ? void 0
                : (e = k.profile_picture) == null
                ? void 0
                : e.width,
          },
          unseen_update_count: k == null ? void 0 : k.unseen_update_count,
        },
      });
      return i.jsx(c("TetraListCell.react"), babelHelpers["extends"]({}, f));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometProfileAndAccountSwitcher.react",
  [
    "fbt",
    "ix",
    "CometBadge.react",
    "CometLegacyListItemSeparator.react",
    "CometLoggedInAccountSwitcher.react",
    "CometProfileAndAccountSwitcher_query.graphql",
    "CometProfileSwitcherCreateProfileListCell.react",
    "CometProfileSwitcherListCell.react",
    "CometProfileSwitcherPagePublishingAuthorizationCard.react",
    "CometRelay",
    "JSResourceForInteraction",
    "Locale",
    "RelayHooks",
    "TetraIcon.react",
    "TetraList.react",
    "TetraListCell.react",
    "TetraText.react",
    "WebPixelRatio",
    "fbicon",
    "gkx",
    "goForceFullPageRedirectTo",
    "orEmptyArray",
    "promiseDone",
    "react",
    "useCometLazyDialog",
    "useIsMountedRef",
    "useProfileCometErrorDialog_DEPRECATED",
    "useProfileCometSwitcherCleanUpOnSwap",
    "useProfileSwitcherEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useState,
      m = d("Locale").isRTL(),
      n = c("JSResourceForInteraction")("CometProfileSwitchMutation").__setRef(
        "CometProfileAndAccountSwitcher.react"
      ),
      o = 40,
      p = c("JSResourceForInteraction")(
        "CometProfilePlusAdminlessTransitionCAEDialog.react"
      ).__setRef("CometProfileAndAccountSwitcher.react");
    function a(a) {
      var e,
        f,
        g,
        q,
        r,
        s,
        t = a.onClose,
        u = a.onReturn,
        v = a.pushPage;
      a = a.query;
      var w = d("RelayHooks").useFragment(
        j !== void 0
          ? j
          : (j = b("CometProfileAndAccountSwitcher_query.graphql")),
        a
      );
      a = c("gkx")("1663500");
      e =
        {
          profile:
            w == null ? void 0 : (e = w.viewer) == null ? void 0 : e.actor,
        } || {};
      f = c("orEmptyArray")(
        w == null
          ? void 0
          : (f = w.viewer) == null
          ? void 0
          : (f = f.actor) == null
          ? void 0
          : (f = f.profile_switcher_eligible_profiles) == null
          ? void 0
          : f.nodes
      );
      var x =
        (g =
          w == null
            ? void 0
            : (g = w.viewer) == null
            ? void 0
            : (g = g.actor) == null
            ? void 0
            : g.is_failing_page_publishing_authorization) != null
          ? g
          : !1;
      g =
        (g =
          w == null
            ? void 0
            : (g = w.viewer) == null
            ? void 0
            : (g = g.additional_profile_creation_eligibility) == null
            ? void 0
            : (g = g.single_owner) == null
            ? void 0
            : g.can_create) != null
          ? g
          : !1;
      q =
        w == null
          ? void 0
          : (q = w.viewer) == null
          ? void 0
          : (q = q.additional_profile_creation_eligibility) == null
          ? void 0
          : (q = q.single_owner) == null
          ? void 0
          : q.explanation;
      r = l(
        w == null
          ? void 0
          : (r = w.viewer) == null
          ? void 0
          : (r = r.actor) == null
          ? void 0
          : r.id
      );
      var y = r[0],
        z = r[1],
        A = {
          product_bucket: "profile_account_switcher",
          subsurface: "switch_profile_menu",
          surface: "navigation",
        },
        B = c("useProfileSwitcherEngagementClickCallback")(
          babelHelpers["extends"]({}, A, { item_type: "more" })
        ),
        C = c("useProfileSwitcherEngagementClickCallback")(
          babelHelpers["extends"]({}, A, { item_type: "back" })
        ),
        D = c("useProfileCometSwitcherCleanUpOnSwap")(w),
        E = d("CometRelay").useRelayEnvironment(),
        F = c("useIsMountedRef")();
      r = c("useProfileCometErrorDialog_DEPRECATED")(
        h._("Failed to switch profiles")
      );
      var G = r[0],
        H = function (a) {
          c("promiseDone")(
            n.load().then(function (b) {
              b = b.switchProfile;
              b(
                E,
                { profileId: a },
                {
                  onCompleted: function () {
                    F.current && t(), D(), c("goForceFullPageRedirectTo")("/");
                  },
                  onError: function (a) {
                    t(), G(a);
                  },
                }
              );
            })
          );
        };
      r =
        w == null
          ? void 0
          : (r = w.viewer) == null
          ? void 0
          : r.first_account[0];
      s = c("orEmptyArray")(
        w == null
          ? void 0
          : (s = w.viewer) == null
          ? void 0
          : s.device_switchable_accounts
      );
      var I = 0;
      s.forEach(function (a) {
        I += a.unread_notification_count || 0;
      });
      s = c("useCometLazyDialog")(p);
      var J = s[0];
      return k.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          k.jsxs("div", {
            className: "discj3wi dati1w0a hv4rvrfc sj5x9vvc btwxx1t3 j83agx80",
            children: [
              k.jsx("div", {
                className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                children: k.jsx(c("TetraIcon.react"), {
                  "aria-label": h._("Back"),
                  icon: m
                    ? d("fbicon")._(i("514454"), 20)
                    : d("fbicon")._(i("512647"), 20),
                  onPress: function () {
                    C(), u();
                  },
                }),
              }),
              k.jsx("div", {
                className: "tw6a2znq j83agx80 bp9cbjyn",
                children: k.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized1",
                  children: h._("Switch Profile"),
                }),
              }),
            ],
          }),
          k.jsx(
            c("CometProfileSwitcherPagePublishingAuthorizationCard.react"),
            { query: w }
          ),
          k.jsx("div", {
            className: "cxgpxx05 jbae33se",
            children: k.jsxs(c("TetraList.react"), {
              children: [
                [e].concat(f).map(function (a) {
                  var b = a.profile;
                  return k.jsx(
                    c("CometProfileSwitcherListCell.react"),
                    {
                      isFailingPagePublishingAuthorization: x,
                      loggerData: babelHelpers["extends"]({}, A, {
                        item_type: "profile",
                        profile_id_dummy: b == null ? void 0 : b.id,
                      }),
                      onClick: function () {
                        z(b == null ? void 0 : b.id);
                        if (
                          (b == null
                            ? void 0
                            : b.viewer_has_pending_core_app_access_approval) ===
                          !0
                        ) {
                          var a;
                          J({
                            name: b == null ? void 0 : b.name,
                            pageID: b == null ? void 0 : b.delegate_page_id,
                            platformTool:
                              (a =
                                b == null
                                  ? void 0
                                  : b.profile_plus_primary_platform_tool) !=
                              null
                                ? a
                                : "BUSINESS_SUITE",
                            profilePictureURI:
                              b == null
                                ? void 0
                                : (a = b.profile_picture) == null
                                ? void 0
                                : a.uri,
                          });
                        } else H(b == null ? void 0 : b.id);
                      },
                      profile: b,
                      selected: y === (b == null ? void 0 : b.id),
                    },
                    b == null ? void 0 : b.id
                  );
                }),
                a && (g || q)
                  ? k.jsx(
                      c("CometProfileSwitcherCreateProfileListCell.react"),
                      { disabled: !g, meta: q, onClose: t }
                    )
                  : null,
                k.jsx(c("CometLegacyListItemSeparator.react"), {}),
                k.jsx(
                  c("TetraListCell.react"),
                  {
                    addOnPrimary: {
                      shape: "circle",
                      size: o,
                      source: {
                        height:
                          (f =
                            r == null
                              ? void 0
                              : (s = r.user) == null
                              ? void 0
                              : (e = s.profile_picture) == null
                              ? void 0
                              : e.height) != null
                            ? f
                            : o,
                        scale:
                          (q =
                            r == null
                              ? void 0
                              : (a = r.user) == null
                              ? void 0
                              : (g = a.profile_picture) == null
                              ? void 0
                              : g.scale) != null
                            ? q
                            : d("WebPixelRatio").get(),
                        uri:
                          (f =
                            r == null
                              ? void 0
                              : (s = r.user) == null
                              ? void 0
                              : (e = s.profile_picture) == null
                              ? void 0
                              : e.uri) != null
                            ? f
                            : "",
                        width:
                          (q =
                            r == null
                              ? void 0
                              : (a = r.user) == null
                              ? void 0
                              : (g = a.profile_picture) == null
                              ? void 0
                              : g.width) != null
                            ? q
                            : o,
                      },
                      type: "profile-photo",
                    },
                    addOnSecondary: {
                      color: "secondary",
                      icon: d("fbicon")._(i("492539"), 24),
                      type: "icon",
                    },
                    body:
                      I > 0
                        ? k.jsxs(k.Fragment, {
                            children: [
                              k.jsx(c("CometBadge.react"), {}),
                              h._(
                                {
                                  "*": "{number} notifications",
                                  _1: "1 notification",
                                },
                                [h._plural(I || 0, "number")]
                              ),
                            ],
                          })
                        : null,
                    headline: h._("Switch Accounts"),
                    level: 4,
                    onPress: function () {
                      return v(function (a) {
                        a = a.onReturn;
                        B();
                        return k.jsx(c("CometLoggedInAccountSwitcher.react"), {
                          onClose: t,
                          onReturn: a,
                          query: w,
                        });
                      });
                    },
                  },
                  r == null ? void 0 : (s = r.user) == null ? void 0 : s.id
                ),
              ],
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
  "CometLoggedInAccountSwitcherPopoverMenu.entrypoint",
  [
    "CometLoggedInAccountSwitcherPopoverMenuQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            root: {
              parameters: c(
                "CometLoggedInAccountSwitcherPopoverMenuQuery$Parameters"
              ),
              variables: {},
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometLoggedInAccountSwitcherPopoverMenu.react"
      ).__setRef("CometLoggedInAccountSwitcherPopoverMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "useCometLoggedInAccountSwitcherListCell",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometLoggedInAccountSwitcher.react",
    "CometLoggedInAccountSwitcherPopoverMenu.entrypoint",
    "CometPopoverLoadingState.react",
    "CometRelay",
    "TetraIcon.react",
    "WebPixelRatio",
    "fbicon",
    "orEmptyArray",
    "react",
    "useCometLoggedInAccountSwitcherListCell_query.graphql",
    "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm.react",
    "useProfileSwitcherEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a(a, e, f) {
      var g,
        l = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("useCometLoggedInAccountSwitcherListCell_query.graphql")),
          a
        );
      a =
        l == null
          ? void 0
          : (a = l.viewer) == null
          ? void 0
          : (a = a.first_account) == null
          ? void 0
          : a[0];
      var m = a == null ? void 0 : a.user,
        n = c(
          "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm.react"
        )({ form$key: a == null ? void 0 : a.form, query$key: l });
      g = c("orEmptyArray")(
        l == null
          ? void 0
          : (g = l.viewer) == null
          ? void 0
          : g.device_switchable_accounts
      );
      var o = 0;
      g.forEach(function (a) {
        o += a.unread_notification_count || 0;
      });
      g = {
        product_bucket: "profile_account_switcher",
        subsurface: "settings_menu",
        surface: "navigation",
      };
      var p = c("useProfileSwitcherEngagementClickCallback")(
          babelHelpers["extends"]({}, g, { item_type: "account" })
        ),
        q = c("useProfileSwitcherEngagementClickCallback")(
          babelHelpers["extends"]({}, g, { item_type: "more" })
        );
      if (
        (l == null
          ? void 0
          : (g = l.viewer) == null
          ? void 0
          : (g = g.device_switchable_accounts) == null
          ? void 0
          : g.length) === 1 &&
        a != null
      ) {
        g = a.unread_notification_count;
        if (n != null) {
          a = n[0];
          var r = n[1];
          return {
            cellProps: {
              addOnPrimary: {
                addOnTopEnd:
                  ((n = g) != null ? n : 0) > 0
                    ? {
                        number: (n = g) != null ? n : 0,
                        type: "notificationBadge",
                      }
                    : void 0,
                shape: "circle",
                size: 36,
                source: {
                  height:
                    (n =
                      m == null
                        ? void 0
                        : (g = m.profile_picture) == null
                        ? void 0
                        : g.height) != null
                      ? n
                      : 36,
                  scale:
                    (n =
                      m == null
                        ? void 0
                        : (g = m.profile_picture) == null
                        ? void 0
                        : g.scale) != null
                      ? n
                      : d("WebPixelRatio").get(),
                  uri:
                    (n =
                      m == null
                        ? void 0
                        : (g = m.profile_picture) == null
                        ? void 0
                        : g.uri) != null
                      ? n
                      : "",
                  width:
                    (n =
                      m == null
                        ? void 0
                        : (g = m.profile_picture) == null
                        ? void 0
                        : g.width) != null
                      ? n
                      : 36,
                },
                type: "profile-photo",
              },
              addOnSecondary: {
                addOn: k.jsx(c("CometEntryPointPopoverTrigger.react"), {
                  align: "end",
                  entryPointParams: {},
                  fallback: k.jsx(c("CometPopoverLoadingState.react"), {}),
                  otherProps: {},
                  popoverEntryPoint: b(
                    "CometLoggedInAccountSwitcherPopoverMenu.entrypoint"
                  ),
                  popoverType: "menu",
                  children: function (a, b) {
                    return k.jsx(c("TetraIcon.react"), {
                      "aria-label": h._("Menu"),
                      color: "secondary",
                      icon: d("fbicon")._(i("484388"), 24),
                      onPress: b,
                      ref: a,
                    });
                  },
                }),
                type: "body",
              },
              body: k.jsxs(k.Fragment, {
                children: [
                  h._("Log in as {name}", [
                    h._param("name", m == null ? void 0 : m.name),
                  ]),
                  a,
                ],
              }),
              headline: h._("Switch Account"),
              level: 4,
              onPress: function () {
                p(), r();
              },
            },
            itemKey: "account-switcher",
            render: !0,
          };
        }
      }
      a = {
        addOnTopEnd: o > 0 ? { number: o, type: "notificationBadge" } : void 0,
        shape: "circle",
        size: 36,
        source: {
          height:
            (n =
              m == null
                ? void 0
                : (g = m.profile_picture) == null
                ? void 0
                : g.height) != null
              ? n
              : 36,
          scale:
            (g =
              m == null
                ? void 0
                : (a = m.profile_picture) == null
                ? void 0
                : a.scale) != null
              ? g
              : d("WebPixelRatio").get(),
          uri:
            (a =
              m == null
                ? void 0
                : (n = m.profile_picture) == null
                ? void 0
                : n.uri) != null
              ? a
              : "",
          width:
            (n =
              m == null
                ? void 0
                : (g = m.profile_picture) == null
                ? void 0
                : g.width) != null
              ? n
              : 36,
        },
        type: "profile-photo",
      };
      return {
        cellProps: {
          addOnPrimary: a,
          addOnSecondary: {
            color: "secondary",
            icon: d("fbicon")._(i("492539"), 24),
            type: "icon",
          },
          headline: h._("Switch Accounts"),
          level: 4,
          onPress: function () {
            e(function (a) {
              a = a.onReturn;
              if (c("CometLoggedInAccountSwitcher.react") == null) return;
              q();
              return k.jsx(c("CometLoggedInAccountSwitcher.react"), {
                onClose: f,
                onReturn: a,
                query: l,
              });
            });
          },
        },
        itemKey: "account-switcher",
        render:
          ((n =
            l == null
              ? void 0
              : (m = l.viewer) == null
              ? void 0
              : (g = m.device_switchable_accounts) == null
              ? void 0
              : g.length) != null
            ? n
            : 0) > 0,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometCombinedProfileAccountSwitcherListCell.react",
  [
    "fbt",
    "ix",
    "CometProfileAndAccountSwitcher.react",
    "CometProfileSwitcher.react",
    "CometRelay",
    "WebPixelRatio",
    "fbicon",
    "gkx",
    "orEmptyArray",
    "react",
    "useCometCombinedProfileAccountSwitcherListCell_query.graphql",
    "useCometLoggedInAccountSwitcherListCell",
    "useProfileSwitcherEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    function a(a, e, f) {
      var g,
        l,
        m,
        n = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b(
                "useCometCombinedProfileAccountSwitcherListCell_query.graphql"
              )),
          a
        );
      a = c("useCometLoggedInAccountSwitcherListCell")(n, e, f);
      var o = c("useProfileSwitcherEngagementClickCallback")({
        item_type: "more",
        product_bucket: "profile_account_switcher",
        subsurface: "settings_menu",
        surface: "navigation",
      });
      g =
        (n == null
          ? void 0
          : (g = n.viewer) == null
          ? void 0
          : (g = g.actor) == null
          ? void 0
          : (g = g.profile_switcher_eligible_profiles) == null
          ? void 0
          : g.nodes) || [];
      l = c("orEmptyArray")(
        n == null
          ? void 0
          : (l = n.viewer) == null
          ? void 0
          : l.device_switchable_accounts
      );
      m =
        (n == null
          ? void 0
          : (m = n.viewer) == null
          ? void 0
          : (m = m.actor) == null
          ? void 0
          : (m = m.profile_switcher_eligible_profiles) == null
          ? void 0
          : m.count) || 0;
      var p = l.length || 0,
        q = 0;
      g.forEach(function (a) {
        q += a.unseen_update_count || 0;
      });
      l.forEach(function (a) {
        q += a.unread_notification_count || 0;
      });
      g = c("gkx")("1663500");
      var r;
      if (p > 0) {
        r =
          n == null
            ? void 0
            : (l = n.viewer) == null
            ? void 0
            : (l = l.first_account[0]) == null
            ? void 0
            : (l = l.user) == null
            ? void 0
            : l.profile_picture;
      } else if (m > 1) {
        r =
          n == null
            ? void 0
            : (l = n.viewer) == null
            ? void 0
            : (l = l.actor) == null
            ? void 0
            : (l = l.first_profiles) == null
            ? void 0
            : (l = l.nodes[1]) == null
            ? void 0
            : (l = l.profile) == null
            ? void 0
            : l.profile_picture;
      }
      l = r || {};
      var s = l.height,
        t = l.scale,
        u = l.uri;
      l = l.width;
      var v;
      p <= 0
        ? g
          ? (v = m <= 3 ? h._("See All") : h._("All Profiles"))
          : (v = h._("Switch Profile"))
        : g
        ? (v = h._("All Profiles"))
        : (v = h._("Switch Profile or Account"));
      if (g || m > 0) {
        return {
          cellProps: {
            addOnPrimary: r
              ? {
                  addOnTopEnd:
                    q > 0 ? { number: q, type: "notificationBadge" } : void 0,
                  shape: "circle",
                  size: 36,
                  source: {
                    height: (g = s) != null ? g : 36,
                    scale: (m = t) != null ? m : d("WebPixelRatio").get(),
                    uri: (s = u) != null ? s : "",
                    width: (g = l) != null ? g : 36,
                  },
                  type: "profile-photo",
                }
              : {
                  icon: d("fbicon")._(i("484391"), 24),
                  size: 36,
                  type: "contained-icon",
                },
            addOnSecondary: {
              color: "secondary",
              icon: d("fbicon")._(i("492539"), 24),
              type: "icon",
            },
            headline: v,
            level: 4,
            onPress: function () {
              p > 0
                ? e(function (a) {
                    a = a.onReturn;
                    if (c("CometProfileAndAccountSwitcher.react") == null)
                      return;
                    o();
                    return k.jsx(c("CometProfileAndAccountSwitcher.react"), {
                      onClose: f,
                      onReturn: a,
                      pushPage: e,
                      query: n,
                    });
                  })
                : e(function (a) {
                    a = a.onReturn;
                    if (c("CometProfileSwitcher.react") == null) return;
                    o();
                    return k.jsx(c("CometProfileSwitcher.react"), {
                      onClose: f,
                      onReturn: a,
                      query: n,
                    });
                  });
            },
            testid: "CometSettingsCombinedProfileAccountSwitcher",
          },
          itemKey: "profile-account-switcher",
          render: !0,
        };
      }
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSettingsDropdownList.react",
  [
    "fbt",
    "ix",
    "CometLegalFooter.react",
    "CometMenuSeparator.react",
    "CometRelay",
    "CometSettingsDropdownAppearance.react",
    "CometSettingsDropdownHeader.react",
    "CometSettingsDropdownListItem.react",
    "CometSettingsDropdownListQuery.graphql",
    "CometSettingsDropdownQuickHelp.react",
    "CometSettingsDropdownSettingsAndPrivacy.react",
    "Locale",
    "TetraList.react",
    "WebPixelRatio",
    "cr:1673052",
    "cr:630",
    "fbicon",
    "gkx",
    "react",
    "useCometCombinedProfileAccountSwitcherListCell.react",
    "useCometReportBug",
    "useShouldRenderFullTopNav",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useState,
      n = d("Locale").isRTL(),
      o = c("gkx")("1663500"),
      p =
        (e = b("cr:1673052")) != null
          ? e
          : function () {
              for (
                var a = arguments.length, b = new Array(a), c = 0;
                c < a;
                c++
              )
                b[c] = arguments[c];
              return {
                args: b,
                cellProps: {},
                itemKey: "profile-account-switcher",
                render: !1,
              };
            };
    function a(a) {
      var e,
        f,
        g = a.onClose,
        q = a.pushPage;
      a = c("useCometReportBug")();
      var r = a[0];
      a = c("useShouldRenderFullTopNav")();
      var s = d("CometRelay").useLazyLoadQuery(
          j !== void 0 ? j : (j = b("CometSettingsDropdownListQuery.graphql")),
          { inProfileSwitcherEntry: o, scale: d("WebPixelRatio").get() }
        ),
        t = b("cr:630")(),
        u = m(!1),
        v = u[0],
        w = u[1];
      u = l(
        function (a) {
          return w(!0);
        },
        [w]
      );
      u = p(s, g, u, v);
      var x = c("useCometCombinedProfileAccountSwitcherListCell.react")(
        s,
        q,
        g
      );
      e =
        (s == null
          ? void 0
          : (e = s.viewer) == null
          ? void 0
          : (e = e.actor) == null
          ? void 0
          : (e = e.profileSwitcherEligibleProfiles) == null
          ? void 0
          : e.count) != null &&
        (s == null
          ? void 0
          : (e = s.viewer) == null
          ? void 0
          : (e = e.actor) == null
          ? void 0
          : (e = e.profileSwitcherEligibleProfiles) == null
          ? void 0
          : e.count) > 0;
      var y = s.viewer,
        z = {
          color: "secondary",
          icon: n
            ? d("fbicon")._(i("492491"), 24)
            : d("fbicon")._(i("492539"), 24),
          type: "icon",
        };
      f =
        (y == null
          ? void 0
          : (f = y.actor) == null
          ? void 0
          : (f = f.profileSwitcherEligibleProfiles) == null
          ? void 0
          : f.count) || 0;
      z = [
        o ? null : x,
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("497567"), 20),
              size: 36,
              type: "contained-icon",
            },
            addOnSecondary: z,
            headline: h._("Settings & Privacy"),
            level: 4,
            onPress: function () {
              q(function (a) {
                a = a.onReturn;
                return k.jsx(
                  c("CometSettingsDropdownSettingsAndPrivacy.react"),
                  { onClose: g, onReturn: a, pushPage: q, query: s }
                );
              });
            },
            testid: "CometSettingsDropdownSettingsAndPrivacy",
          },
          itemKey: "settings-privacy-folder",
          render: a,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("496951"), 20),
              size: 36,
              type: "contained-icon",
            },
            addOnSecondary: z,
            headline: h._("Help & Support"),
            level: 4,
            onPress: function () {
              q(function (a) {
                a = a.onReturn;
                return k.jsx(c("CometSettingsDropdownQuickHelp.react"), {
                  onClose: g,
                  onReturn: a,
                  pushPage: q,
                });
              });
            },
          },
          itemKey: "help-support",
          render: a,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("832941"), 20),
              size: 36,
              type: "contained-icon",
            },
            addOnSecondary: z,
            headline: h._("Display & Accessibility"),
            level: 4,
            onPress: function () {
              q(function (a) {
                a = a.onReturn;
                return k.jsx(c("CometSettingsDropdownAppearance.react"), {
                  onReturn: a,
                  pushPage: q,
                });
              });
            },
          },
          itemKey: "display-and-accessibility",
          render: a,
        },
        {
          cellProps: {
            addOnPrimary: {
              icon: d("fbicon")._(i("951888"), 20),
              size: 36,
              type: "contained-icon",
            },
            dataAttributes: { nocookies: "true" },
            headline: h._("Log Out"),
            level: 4,
            onPress: function () {
              t(), g();
            },
            testid: "CometLogoutButton",
          },
          itemKey: "log-out",
          render: !0,
        },
      ]
        .filter(function (a) {
          return a == null ? void 0 : a.render;
        })
        .filter(Boolean);
      return k.jsxs("div", {
        className: "aov4n071",
        children: [
          a
            ? k.jsxs(k.Fragment, {
                children: [
                  k.jsx(c("CometSettingsDropdownHeader.react"), {
                    onPress: g,
                    onSecondaryPress: x.cellProps.onPress,
                    selected: !v,
                    viewer: y,
                  }),
                  o && e
                    ? k.jsx(c("CometSettingsDropdownListItem.react"), {
                        cellProps: u.cellProps,
                        itemKey: u.itemKey,
                        position: 0,
                        selected: v,
                      })
                    : null,
                  o && e
                    ? k.jsx(c("CometSettingsDropdownListItem.react"), {
                        cellProps: x.cellProps,
                        itemKey: x.itemKey,
                        position: f > 1 ? 1 : 0,
                        selected: !1,
                      })
                    : null,
                  k.jsx(c("CometMenuSeparator.react"), {}),
                  k.jsx(c("CometSettingsDropdownListItem.react"), {
                    cellProps: {
                      addOnPrimary: {
                        icon: c("gkx")("678680")
                          ? d("fbicon")._(i("530509"), 20)
                          : d("fbicon")._(i("693172"), 20),
                        shape: "circle",
                        size: 36,
                        type: "contained-icon",
                      },
                      body: h._("Help us improve the new Facebook."),
                      headline: c("gkx")("678680")
                        ? h._("Report a Problem")
                        : h._("Give Feedback"),
                      level: 4,
                      onPress: function () {
                        g(), r();
                      },
                      testid: "comet-bug-report-setttings-dropdown-list-item",
                    },
                    itemKey: "give-feedback",
                    position: o ? (f > 1 ? 2 : 1) : 0,
                    selected: !1,
                  }),
                  k.jsx(c("CometMenuSeparator.react"), {}),
                ],
              })
            : null,
          k.jsx("div", {
            className: "a8nywdso sj5x9vvc rz4wbd8a ecm0bbzt",
            children: k.jsx(c("TetraList.react"), {
              items: z,
              children: function (a) {
                var b,
                  d = a.item,
                  e = d.cellProps;
                d = d.itemKey;
                a = a.props;
                var f = e.addOnSecondary;
                b = (b = a.key) != null ? b : -1;
                f = f != null && f.value != null ? f.value : !1;
                return k.jsx(
                  c("CometSettingsDropdownListItem.react"),
                  { cellProps: e, itemKey: d, position: b, selected: f },
                  a.key
                );
              },
            }),
          }),
          k.jsx("div", {
            className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
            children: k.jsx(c("CometLegalFooter.react"), { onClick: g }),
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
  "CometSettingsDropdown.react",
  [
    "fbt",
    "BaseMultiStepContainer.react",
    "CometPopover.react",
    "CometScrollableArea.react",
    "CometSettingsDropdownList.react",
    "qex",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("qex")._("1875564"),
      k = {
        card: {
          maxHeight: "t1wsaese",
          maxWidth: "h77mwsce",
          width: "o36gj0jk",
        },
        root: { marginTop: "knvmm38d" },
      };
    function a(a) {
      var b = a.onClose;
      a = i.jsx(c("CometScrollableArea.react"), {
        xstyle: k.card,
        children: i.jsx("div", {
          children: i.jsx(c("BaseMultiStepContainer.react"), {
            children: function (a) {
              return i.jsx(c("CometSettingsDropdownList.react"), {
                onClose: b,
                pushPage: a,
              });
            },
          }),
        }),
      });
      return j === !0
        ? a
        : i.jsx("div", {
            className: c("stylex")(k.root),
            children: i.jsx(c("CometPopover.react"), {
              label: h._("Account"),
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
  "CometLoggedInAccountSwitcherRemoveAccountMutation",
  ["CometLoggedInAccountSwitcherRemoveAccountMutation.graphql", "CometRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, c) {
      var e = c.id;
      c = c.nonce;
      function f(a) {
        a = a.getRoot().getLinkedRecord("viewer");
        if (a == null) return;
        var b = a.getLinkedRecords("device_switchable_accounts");
        if (b == null) return;
        b = b.filter(function (a) {
          if (a == null) return a;
          var b = a.getLinkedRecord("user");
          return b == null ? a : b.getValue("id") !== e;
        });
        a.setLinkedRecords(b, "device_switchable_accounts");
        b = b.find(function (a) {
          if (a == null) return !1;
          a = a.getValue("unread_notification_count");
          return typeof a !== "number" ? !1 : a > 0;
        });
        a.setValue(Boolean(b), "device_switchable_account_has_notification");
      }
      return d("CometRelay").commitMutation(a, {
        mutation:
          h !== void 0
            ? h
            : (h = b(
                "CometLoggedInAccountSwitcherRemoveAccountMutation.graphql"
              )),
        optimisticUpdater: f,
        updater: f,
        variables: { id: e, nonce: c },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometIconWirelessSlashFilled.react",
  ["CometSVGIcon.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("CometSVGIcon.react"),
        babelHelpers["extends"]({ viewBox: "0 0 24 24" }, a, {
          children: h.jsx("path", {
            d: "M23.7805.2195c.2925.293.2925.768 0 1.061l-22.5 22.5C1.134 23.927.942 24 .75 24c-.192 0-.384-.073-.5305-.2195-.2925-.293-.2925-.768 0-1.061l12.1967947-12.1971509c-2.3773758-.1150468-4.79162015.7286756-6.6038447 2.5401009-.3905.3905-1.0235.3905-1.414 0-.3905-.3905-.3905-1.024 0-1.414 2.65728981-2.65728981 6.3696459-3.62280965 9.8005664-2.90852144l2.430738-2.43186193C11.7816792 4.58111626 6.15198938 5.65271062 2.27735 9.52735c-.3905.3905-1.0235.3905-1.414 0-.3905-.3905-.3905-1.0235 0-1.414 4.6714534-4.67191574 11.571522-5.78608437 17.3096457-3.34843552L22.7195.2195c.293-.2925.768-.2925 1.061 0zM12 18.5c.6905 0 1.25.5595 1.25 1.25S12.6905 21 12 21s-1.25-.5595-1.25-1.25.5595-1.25 1.25-1.25zm1.4175-4.81495c.9705.2455 1.8905.741 2.6485 1.499.3905.3905.3905 1.0235 0 1.414-.1955.1955-.451.293-.707.293-.256 0-.512-.0975-.707-.293-.7835333-.7835333-1.8301422-1.1445778-2.8581093-1.0880116L11.574 15.52855l1.8435-1.8435zm3.8154-3.8154c.848.4725 1.649 1.059 2.3685 1.779.391.39.391 1.023 0 1.414-.195.195-.451.293-.707.293-.2555 0-.5115-.098-.707-.293-.7285-.728-1.5575-1.291-2.439-1.7085zm2.1908-2.1908l1.4425-1.4425c.8.545 1.5615 1.168 2.2705 1.877.3905.3905.3905 1.0235 0 1.414-.1955.1955-.451.293-.707.293-.256 0-.5115-.0975-.707-.293-.5933333-.59333333-1.2283333-1.11861111-1.895162-1.57959491L19.4237 7.67885l1.4425-1.4425z",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUncaughtError.react",
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
        className: "k4urcfbm poy2od1o taijpn5t nznu9b0o j83agx80 bp9cbjyn",
        children: i.jsx(c("CometContentArea.react"), {
          verticalAlign: "middle",
          children: i.jsx(c("TetraNullState.react"), {
            headline: h._("Sorry! Something went wrong :("),
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
  "CometToasterView_DO_NOT_USE.react",
  [
    "BaseContextualLayerAnchorRoot.react",
    "BasePortal.react",
    "BaseToastAnimationInternal.react",
    "BaseToasterView.react",
    "gkx",
    "react",
    "stylex",
    "useToasterStateManager",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState,
      k = {
        list: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          listStyle: "p7hjln8o",
        },
        root: {
          bottom: "i09qtzwb",
          display: "j83agx80",
          end: "n7fi1qx3",
          pointerEvents: "hzruof5a",
          position: "poy2od1o",
          start: "j9ispegn",
          zIndex: "kavbgo14",
        },
        rootBlue: { zIndex: "guygq49l" },
        rootWorkplaceLegacy: { zIndex: "lidd1b6n" },
        toast: {
          paddingTop: "discj3wi",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "ihqw7lf3",
          paddingStart: "dati1w0a",
          pointerEvents: "oqq733wu",
        },
      },
      l = {
        center: { justifyContent: "taijpn5t" },
        start: { justifyContent: "jifvfom9" },
      };
    function a(a) {
      var b = a.align;
      b = b === void 0 ? "start" : b;
      var d = a.filterToasts;
      a = a.maxVisible;
      a = a === void 0 ? 1 : a;
      var e = c("useToasterStateManager")(),
        f = j(function () {
          return e.getEmptyState();
        }),
        g = f[0],
        m = f[1];
      i(
        function () {
          var a = e.registerView(m, 0);
          return a.remove;
        },
        [e]
      );
      return h.jsx(c("BasePortal.react"), {
        target: document.body,
        xstyle: [
          k.root,
          c("gkx")("708253")
            ? null
            : c("gkx")("1341692")
            ? k.rootWorkplaceLegacy
            : k.rootBlue,
          l[b],
        ],
        children: h.jsx(c("BaseToasterView.react"), {
          className: c("stylex")(k.list),
          filterToasts: d,
          maxVisible: a,
          toasterState: g,
          children: function (a, b, d, e) {
            return h.jsx(
              c("BaseToastAnimationInternal.react"),
              {
                expired: d,
                id: b,
                position: e,
                xstyle: k.toast,
                children: h.jsx(c("BaseContextualLayerAnchorRoot.react"), {
                  children: a,
                }),
              },
              e
            );
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
  "GhlTestUbtFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1942319");
    c = b("FalcoLoggerInternal").create("ghl_test_ubt", a);
    e.exports = c;
  },
  null
);
__d(
  "CometGHLTestUBT",
  ["GhlTestUbtFalcoEvent", "JSScheduler", "ghlTestUBT"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      d("JSScheduler").scheduleLoggingPriCallback(function () {
        c("ghlTestUBT")(function (a) {
          return c("GhlTestUbtFalcoEvent").log(function () {
            return { ubt: a };
          });
        });
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "ErrorSetup",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorSetup;
  },
  98
);
__d(
  "JavascriptWebErrorFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1828905");
    c = b("FalcoLoggerInternal").create("javascript_web_error", a);
    e.exports = c;
  },
  null
);
__d(
  "ErrorTransport",
  ["JavascriptWebErrorFalcoEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      c("JavascriptWebErrorFalcoEvent").log(function () {
        return a;
      });
    }
    g.log = a;
  },
  98
);
__d(
  "CometErrorLogging",
  [
    "ClientConsistency",
    "Env",
    "ErrorGuard",
    "ErrorSetup",
    "ErrorTransport",
    "JSErrorLoggingConfig",
    "SiteData",
    "WebSession",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      c("ErrorGuard").skipGuardGlobal(c("Env").nocatch);
      b = a;
      if (c("JSErrorLoggingConfig").sampleWeight != null) {
        c("ErrorSetup").setup(
          {
            additional_client_revisions:
              c("ClientConsistency").getAdditionalRevisions(),
            appId: c("JSErrorLoggingConfig").appId,
            cavalry_lid: b,
            client_revision: c("SiteData").client_revision,
            extra: c("JSErrorLoggingConfig").extra,
            loggingFramework: "comet",
            push_phase: c("SiteData").push_phase,
            report_source: c("JSErrorLoggingConfig").report_source,
            report_source_ref: c("JSErrorLoggingConfig").report_source_ref,
            sample_weight:
              (a = c("JSErrorLoggingConfig").sampleWeight) != null ? a : 0,
            script_path: "/comet",
            server_revision: c("SiteData").server_revision,
            spin: c("SiteData").spin,
            web_session_id: d("WebSession").getId(),
          },
          d("ErrorTransport").log
        );
      }
    }
    c("ErrorSetup").preSetup();
    g.init = a;
  },
  98
);
__d(
  "CometBootloaderEventsTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:CometBootloaderEventsLoggerConfig"
    );
  },
  null
);
__d(
  "HasteResponseFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1823926");
    c = b("FalcoLoggerInternal").create("haste_response", a);
    e.exports = c;
  },
  null
);
__d(
  "CometBootloaderLoggerUtil",
  [
    "BootloaderEvents",
    "BootloaderEventsPerf",
    "CometBootloaderEventsTypedLoggerLite",
    "CometTimeSpentNavigation",
    "HasteResponseFalcoEvent",
    "ResourceTimingStore",
    "SiteData",
    "performanceNavigationStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = !1;
    function a(a) {
      var b = a.bl_sample_rate,
        e = a.hr_sample_rate,
        f = a.parent_lid;
      if (h || !(b || e)) return;
      h = !0;
      d("ResourceTimingStore").init();
      var g = function (a) {
        return {
          ms_since_navstart: Math.round(a - c("performanceNavigationStart")()),
          parent_lid: f,
          pkg_cohort: c("SiteData").pkg_cohort,
          request_path:
            (a = c("CometTimeSpentNavigation").getPathInfo()) == null
              ? void 0
              : a.name,
          svn_rev: c("SiteData").client_revision,
        };
      };
      e &&
        d("BootloaderEvents").onHasteResponse(function (a) {
          return c("HasteResponseFalcoEvent").log(function () {
            var b = d("BootloaderEventsPerf").computeHRData(a),
              c = d("BootloaderEventsPerf").flattenData(b);
            return babelHelpers["extends"]({}, c, g(b.start_time));
          });
        });
      b &&
        d("BootloaderEvents").onBootload(function (a) {
          a = d("BootloaderEventsPerf").computeBLData(a);
          var e = d("BootloaderEventsPerf").flattenData(a);
          c("CometBootloaderEventsTypedLoggerLite").log(
            babelHelpers["extends"]({}, e, g(a.start_time)),
            { weight: b }
          );
        });
    }
    g.initLogging = a;
  },
  98
);
__d(
  "CometPixelRatioUpdater",
  ["Cookie", "Run", "WebPixelRatio"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "dpr";
    function i(a) {
      c("Cookie").set(h, String(a));
    }
    function j() {
      window.devicePixelRatio !== d("WebPixelRatio").get() &&
        i(window.devicePixelRatio);
    }
    function a() {
      j(),
        d("Run").onBeforeUnload(j, !1),
        "onpagehide" in window && window.addEventListener("pageHide", j);
    }
    g.startDetecting = a;
  },
  98
);
__d(
  "CometNetworkStatusToast",
  [
    "fbt",
    "ix",
    "BaseToasterStateManager",
    "CometIconWirelessSlashFilled.react",
    "CometRelayEnvironmentFactory",
    "NetworkStatus",
    "TetraIcon.react",
    "cometPushToast",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = null;
    function l(a) {
      a = a.online;
      var b = c("BaseToasterStateManager").getInstance();
      k != null && (b.expire(k), (k = null));
      k = a
        ? d("cometPushToast").cometPushToast(
            {
              icon: j.jsx(c("TetraIcon.react"), {
                color: "positive",
                icon: d("fbicon")._(i("485124"), 24),
              }),
              message: h._("Your internet connection was restored."),
            },
            4e3,
            b
          )
        : d("cometPushToast").cometPushToast(
            {
              action: {
                label: h._("Refresh"),
                onPress: function () {
                  d(
                    "CometRelayEnvironmentFactory"
                  ).commitLocalUpdateForEachEnvironment(function (a, b, c) {
                    c.invalidateStore();
                  });
                },
              },
              icon: j.jsx(c("TetraIcon.react"), {
                color: "disabled",
                icon: c("CometIconWirelessSlashFilled.react"),
                size: 24,
              }),
              message: h._("You are currently offline."),
            },
            Infinity,
            b
          );
    }
    function a() {
      c("NetworkStatus").onChange(l);
    }
    g.subscribe = a;
  },
  98
);
__d(
  "SimplePageLoadLogger",
  ["ODS", "performance"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      d("ODS").bumpEntityKey(1678, "www_client_navigations", h());
    }
    function h() {
      if (
        c("performance").navigation == null ||
        c("performance").navigation.type == null
      )
        return "UNSUPPORTED";
      switch (c("performance").navigation.type) {
        case c("performance").navigation.TYPE_NAVIGATE:
          return "NAVIGATE";
        case c("performance").navigation.TYPE_RELOAD:
          return "RELOAD";
        case c("performance").navigation.TYPE_BACK_FORWARD:
          return "BACK_FORWARD";
        case c("performance").navigation.TYPE_RESERVED:
          return "RESERVED";
        default:
          return "UNKNOWN";
      }
    }
    g.logPageNavigationType = a;
  },
  98
);
__d(
  "CometRootDeferredShared",
  [
    "CometBootloaderLoggerUtil",
    "CometErrorRoot.react",
    "CometFullPageCompatRoot.react",
    "CometNetworkStatusToast",
    "CometVCTracker",
    "CometVirtualCursorStatus",
    "DeferredCookie",
    "DetectBrokenProxyCache",
    "ErrorGuard",
    "JSScheduler",
    "SimplePageLoadLogger",
    "WebStorageMonster",
    "cr:10026",
    "cr:1201738",
    "cr:1332233",
    "cr:1516609",
    "cr:1813330",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("CometErrorRoot.react");
    b("CometFullPageCompatRoot.react");
    function a(a) {
      var e = a.blLoggingCavalryFields,
        f = a.deferredCookies,
        g = a.userID;
      c("ErrorGuard").applyWithGuard(
        function () {
          return d("CometBootloaderLoggerUtil").initLogging(e);
        },
        null,
        []
      );
      c("ErrorGuard").applyWithGuard(
        function () {
          return d("CometVirtualCursorStatus").initLogging();
        },
        null,
        []
      );
      c("ErrorGuard").applyWithGuard(
        function () {
          return d("CometNetworkStatusToast").subscribe();
        },
        null,
        []
      );
      b("cr:10026") &&
        c("ErrorGuard").applyWithGuard(
          function () {
            return b("cr:10026")();
          },
          null,
          []
        );
      c("ErrorGuard").applyWithGuard(
        function () {
          return d("SimplePageLoadLogger").logPageNavigationType();
        },
        null,
        []
      );
      d("JSScheduler").scheduleSpeculativeCallback(function () {
        c("WebStorageMonster").schedule();
      });
      d("JSScheduler").scheduleSpeculativeCallback(function () {
        d("DetectBrokenProxyCache").run(g, "c_user");
      });
      b("cr:1201738") &&
        c("CometVCTracker").VisualCompletionTraceObserver.subscribe(function (
          a
        ) {
          a.interactionType === "INITIAL_LOAD" && b("cr:1201738").init();
        });
      Object.keys(f).forEach(function (a) {
        var b = f[a],
          d = b.expiration_for_js,
          e = b.first_party_only,
          g = b.path,
          h = b.secure;
        b = b.value;
        c("DeferredCookie").addToQueue(a, b, d, g, e, !1, h);
      });
      b("cr:1332233") &&
        c("ErrorGuard").applyWithGuard(
          function () {
            return b("cr:1332233")();
          },
          null,
          []
        );
      b("cr:1516609") != null &&
        c("ErrorGuard").applyWithGuard(
          function () {
            return b("cr:1516609").initSignalCollection();
          },
          null,
          []
        );
      b("cr:1813330") &&
        c("ErrorGuard").applyWithGuard(
          function () {
            return b("cr:1813330").init();
          },
          null,
          []
        );
    }
    g.initDeferred = a;
  },
  98
);
__d(
  "CometRootDeferred",
  [
    "CometRootDeferredShared",
    "CometTimezoneUpdater",
    "JSScheduler",
    "SketchComet",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.sketchInfo;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["sketchInfo"]);
      b != null &&
        d("JSScheduler").scheduleSpeculativeCallback(function () {
          c("SketchComet").solveAllPrimitivesAndCallAsyncController(
            b.seed1,
            b.seed2,
            b.rounds
          );
        });
      d("CometRootDeferredShared").initDeferred(a);
      c("CometTimezoneUpdater").updateTimezoneIfNecessary();
    }
    g.initDeferred = a;
  },
  98
);
__d(
  "LiveVideoCometNuxForCVC.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "LiveVideoCometNuxForCVCQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = h !== void 0 ? h : (h = b("LiveVideoCometNuxForCVCQuery.graphql"));
    function a(a) {
      a = a.videoID;
      a = d("CometRelay").useLazyLoadQuery(j, { nuxID: 8030, videoID: a });
      return i.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: i.jsx(d("CometRelay").MatchContainer, {
          match: a.nux,
          props: { video: a.video },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WebBrowserDimensionsTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:WebBrowserDimensionsLoggerConfig"
    );
  },
  null
);
__d(
  "CometBrowserDimensionsLogger",
  ["SiteData", "WebBrowserDimensionsTypedLoggerLite", "getViewportDimensions"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null;
    function i() {
      h === null && (h = c("getViewportDimensions")());
      return h;
    }
    function a(a) {
      var b,
        d = i();
      b = {
        client_hint_width: a == null ? void 0 : a.clientHintWidth,
        pixel_ratio: (b = window.devicePixelRatio) != null ? b : 1,
        screen_x: window.screen.width,
        screen_y: window.screen.height,
        server_pixel_ratio: c("SiteData").pr,
        server_viewport_x: a == null ? void 0 : a.viewportWidth,
        server_viewport_y: a == null ? void 0 : a.viewportHeight,
        viewport_x: d.width,
        viewport_y: d.height,
      };
      window.navigator &&
        window.navigator.hardwareConcurrency &&
        (b.cpu_cores_count = window.navigator.hardwareConcurrency);
      if (window.innerWidth > 0 && window.outerWidth > 0) {
        a = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
        b.zoom_ratio = a;
      }
      if (window.getComputedStyle && document.documentElement != null) {
        d = window.getComputedStyle(document.documentElement);
        d != null && (b.document_font_size = d.fontSize);
      }
      c("WebBrowserDimensionsTypedLoggerLite").log(b);
    }
    g.init = a;
  },
  98
);
__d(
  "CometBatchNotificationsStateChangeSubscription",
  ["CometBatchNotificationsStateChangeSubscription.graphql", "CometRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometBatchNotificationsStateChangeSubscription.graphql"));
    function a(a) {
      return d("CometRelay").requestSubscription(a, {
        subscription: i,
        variables: {
          environment: "MAIN_SURFACE",
          input: { environment: "MAIN_SURFACE" },
        },
      });
    }
    g.subscription = i;
    g.batchSubscribe = a;
  },
  98
);
__d(
  "CometNotificationsStateChangeSubscription",
  ["CometNotificationsStateChangeSubscription.graphql", "CometRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometNotificationsStateChangeSubscription.graphql"));
    function a(a) {
      return d("CometRelay").requestSubscription(a, {
        subscription: i,
        variables: {
          environment: "MAIN_SURFACE",
          input: { environment: "MAIN_SURFACE" },
        },
      });
    }
    c = { subscribe: a, subscription: i };
    g["default"] = c;
  },
  98
);
__d(
  "ProfileCometHeaderActionBarMenuItem.react",
  [
    "CometMenuItem.react",
    "CometRelay",
    "ProfileCometActionTrigger.react",
    "ProfileCometContextualProfileContext",
    "ProfileCometHeaderActionBarMenuItemWithoutIsActiveField_profileAction.graphql",
    "ProfileCometHeaderActionBarMenuItem_profileAction.graphql",
    "TintableIconSource",
    "coerceRelayImage",
    "mergeRefs",
    "react",
    "recoverableViolation",
    "useProfileCometEngagementEventsClickCallback",
    "useProfileCometEngagementEventsImpression",
    "useProfileEngagementClickCallback",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useContext;
    h !== void 0
      ? h
      : (h = b(
          "ProfileCometHeaderActionBarMenuItemWithoutIsActiveField_profileAction.graphql"
        ));
    function a(a) {
      var e = a.action,
        f = a.additionalActionProps;
      a = a.overflowSlot;
      e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "ProfileCometHeaderActionBarMenuItem_profileAction.graphql"
            )),
        e
      );
      var g = k(c("ProfileCometContextualProfileContext")),
        h = g.groupID,
        l = g.userID,
        m = c("useProfileEngagementClickCallback")(
          g.isContextualProfileView
            ? {
                event_metadata: { groupID: h },
                item_subtype: (
                  e.profile_action_type || "unknown"
                ).toLowerCase(),
                item_type: "more",
                product_bucket: "contextual_profile",
                profile_id_dummy: l,
                surface: "group_contextual_profile",
              }
            : {
                item_subtype: (
                  e.profile_action_type || "unknown"
                ).toLowerCase(),
                item_type: "more",
                product_bucket: "action_bar",
                surface: "timeline",
              }
        ),
        n = f == null ? void 0 : f.iconStyle,
        o = f == null ? void 0 : f.secondaryText;
      g = (e.profile_action_type || "unknown").toLowerCase();
      h = {
        event_metadata: { overflow_slot: String(a) },
        feature_item: g,
        feature_surface: "action_sheet",
        profile_feature: "overflow_action",
        profile_section: "action_bar",
      };
      var p = c("useProfileCometEngagementEventsClickCallback")(h),
        q = c("useProfileCometEngagementEventsImpression")(h),
        r = e.is_active === !0 ? e.active_secondary_icon : e.secondary_icon,
        s = e == null ? void 0 : (l = e.title) == null ? void 0 : l.text;
      if (s == null) {
        c("recoverableViolation")("Action has no title", "profile_comet");
        return null;
      }
      if (!r) {
        c("recoverableViolation")("Action has no icon", "profile_comet");
        return null;
      }
      return j.jsx(c("ProfileCometActionTrigger.react"), {
        action: e,
        children: function (a) {
          var b;
          return a.memberModerations
            ? a.memberModerations
            : j.jsx(c("CometMenuItem.react"), {
                disabled: a.disabled,
                download:
                  (b = (b = a.linkProps) == null ? void 0 : b.download) != null
                    ? b
                    : void 0,
                href:
                  (b = (b = a.linkProps) == null ? void 0 : b.url) != null
                    ? b
                    : void 0,
                icon: new (c("TintableIconSource"))(
                  "FB",
                  c("coerceRelayImage")(r),
                  20
                ),
                iconStyle: n,
                onClick: function (b) {
                  m(), p(), a.onPress && a.onPress(b);
                },
                onHoverIn: a.onHoverIn,
                onHoverOut: a.onHoverOut,
                onPressIn: a.onPressIn,
                primaryText: s,
                ref: c("mergeRefs")(a.ref, q),
                routeTarget:
                  (b = (b = a.linkProps) == null ? void 0 : b.routeTarget) !=
                  null
                    ? b
                    : void 0,
                secondaryText: o,
                target:
                  (b = (b = a.linkProps) == null ? void 0 : b.target) != null
                    ? b
                    : void 0,
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
  "ProfileCometHeaderActionBarMoreMenu.react",
  [
    "CometMenu.react",
    "CometRelay",
    "ProfileCometHeaderActionBarMenuItem.react",
    "ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.actor;
      a = a.onClose;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql"
            )),
        e
      );
      if (!e || !e.secondaryActions) {
        c("recoverableViolation")(
          "Rendering more menu with no actions",
          "profile_comet"
        );
        return null;
      }
      return i.jsx(c("CometMenu.react"), {
        onClose: a,
        withArrow: !0,
        children: e.secondaryActions.map(function (a, b) {
          return i.jsx(
            c("ProfileCometHeaderActionBarMenuItem.react"),
            { action: a, overflowSlot: b + 1 },
            a == null ? void 0 : a.id
          );
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWChatMultitabCookieWriter.bs",
  ["DeferredCookie", "MWChatThreadId.bs", "recoverableViolation"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var c = a.chatHeads.map(function (a) {
        return { i: b("MWChatThreadId.bs").serializeFuture(a) };
      });
      a = a.openTabsState;
      var d;
      if (a.length !== 1) d = void 0;
      else {
        a = a[0];
        a = a.threadID;
        d = a ? b("MWChatThreadId.bs").serializeFuture(a._0) : void 0;
      }
      a = JSON.stringify({ t3: c, utc3: Date.now(), lm3: d, v: 1 });
      a !== void 0
        ? b("DeferredCookie").addToQueue("presence", "C" + a, 0, "", !1, !1, !0)
        : b("recoverableViolation")(
            "Failed to serialize cookie",
            "messenger_comet"
          );
    }
    c = 1;
    f.version = c;
    f.write = a;
  },
  null
);
__d(
  "LSErrorHandler.bs",
  [
    "ix",
    "BaseToasterStateManager",
    "CometToast.react",
    "LS.bs",
    "LSCoreRemoveErrorStoredProcedure",
    "LSTransaction.bs",
    "SkytaleDB",
    "SortedAsyncIterable.bs",
    "TetraIcon.react",
    "bs_caml_option",
    "bs_curry",
    "fbicon",
    "promiseDone",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || b("react"),
      j = { contents: !1 },
      k = b("BaseToasterStateManager").getInstance();
    function a(a) {
      if (j.contents) return;
      j.contents = !0;
      var c = b("SortedAsyncIterable.bs").subscribe(
        b("SkytaleDB").table(a, "user_visible_errors").asc,
        function (c, d) {
          if (typeof d === "number") return;
          if (d.TAG !== 0) return;
          var e = d._0,
            f = { contents: void 0 };
          f.contents = b("bs_caml_option").some(
            k.push(
              i.jsx(b("CometToast.react"), {
                loadImmediately: !0,
                onDismiss: function (c) {
                  b("promiseDone")(
                    b("LSTransaction.bs").run(
                      a,
                      function (a) {
                        return b("LSCoreRemoveErrorStoredProcedure")(
                          e.a,
                          b("LS.bs").make(a)
                        );
                      },
                      "readWrite"
                    ),
                    void 0,
                    void 0
                  );
                  c = f.contents;
                  if (c !== void 0) {
                    k.expire(b("bs_caml_option").valFromOption(c));
                    return;
                  }
                },
                message: e.d,
                icon: i.jsx(b("TetraIcon.react"), {
                  icon: b("fbicon")._(g("502062"), 20),
                  color: "warning",
                }),
              }),
              2750
            )
          );
        }
      );
      return function (a) {
        j.contents = !1;
        return b("bs_curry")._1(c, void 0);
      };
    }
    f.subscribeToErrorTableAndShowToast = a;
  },
  null
);
__d(
  "IBFEncoder.bs",
  [
    "bs_belt_Array",
    "bs_caml",
    "bs_caml_array",
    "bs_caml_int32",
    "bs_caml_int64",
    "bs_int64",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [-873292572, 2216829733];
    function h(a, c, d) {
      d = c !== void 0 ? c : g;
      return b("bs_belt_Array")
        .range(0, 7)
        .reduce(function (c, d) {
          var e;
          c = (e = b("bs_caml_int64")).add(
            e.add(
              e.add(
                e.add(
                  e.add(e.add(c, e.lsl_(c, 1)), e.lsl_(c, 4)),
                  e.lsl_(c, 5)
                ),
                e.lsl_(c, 7)
              ),
              e.lsl_(c, 8)
            ),
            e.lsl_(c, 40)
          );
          e = e.and_(e.asr_(a, d << 3), [0, 255]);
          d = b("bs_caml").i64_gt(e, [0, 127])
            ? b("bs_caml_int64").or_(e, [-1, 4294967040])
            : e;
          return b("bs_caml_int64").xor(c, d);
        }, d);
    }
    function i(a) {
      var c = new TextEncoder();
      return c.encode(a).reduce(function (a, c) {
        var d;
        d = (d = b("bs_caml_int64")).add(
          d.add(
            d.add(
              d.add(d.add(d.add(a, d.lsl_(a, 1)), d.lsl_(a, 4)), d.lsl_(a, 5)),
              d.lsl_(a, 7)
            ),
            d.lsl_(a, 8)
          ),
          d.lsl_(a, 40)
        );
        a = c > 127 ? c | -256 : c;
        return b("bs_caml_int64").xor(d, b("bs_caml_int64").of_int32(a));
      }, g);
    }
    function j(a, c) {
      var d,
        e = (d = b("bs_caml_int64")).mod_(d.and_(a, d.max_int), c);
      d = d.zero;
      b("bs_caml").i64_neq(
        b("bs_caml_int64").and_(a, b("bs_caml_int64").min_int),
        b("bs_caml_int64").zero
      ) &&
        (d = b("bs_caml").i64_le(c, [1073741824, 0])
          ? b("bs_caml_int64").mul(
              b("bs_caml_int64").mod_([1073741824, 0], c),
              [0, 2]
            )
          : b("bs_caml_int64").add(
              b("bs_caml_int64").sub([1073741824, 0], c),
              [1073741824, 0]
            ));
      return b("bs_caml_int64").mod_(b("bs_caml_int64").add(e, d), c);
    }
    function k(a, c, d) {
      var e = b("bs_belt_Array").make(a, 0),
        f = d;
      for (var g = 0; g < c; ++g) {
        f = h(d, f, void 0);
        var i = b("bs_caml_int64").to_int32(
          j(f, b("bs_caml_int64").of_int32(a))
        );
        while (b("bs_caml_array").get(e, i) !== 0)
          i = b("bs_caml_int32").mod_((i + 1) | 0, a);
        b("bs_caml_array").set(e, i, 1);
      }
      return e;
    }
    function l(a) {
      return b("bs_caml_int64").add(
        b("bs_caml_int64").mul([0, 2], i(a)),
        b("bs_caml_int64").one
      );
    }
    function m(a) {
      return h(a, [0, 1459076858], void 0);
    }
    function a(a, c) {
      var d = [],
        e = new Map(),
        f = new Map(),
        g = new Map();
      for (var h = 0; h < a; ++h)
        d.push({
          hashResultSum: b("bs_caml_int64").zero,
          verificationHashResultSum: b("bs_caml_int64").zero,
          count: 0,
        });
      var j = function (e, f) {
        var g = m(e),
          h = k(a, c, e);
        h.forEach(function (c, a) {
          if (c !== 0) {
            return (c = b("bs_caml_array")).set(d, a, {
              hashResultSum: b("bs_caml_int64").xor(
                c.get(d, a).hashResultSum,
                e
              ),
              verificationHashResultSum: b("bs_caml_int64").xor(
                c.get(d, a).verificationHashResultSum,
                g
              ),
              count: (c.get(d, a).count + f) | 0,
            });
          }
        });
      };
      return {
        addObject: function (a, c) {
          c = a + c;
          var d = 1,
            h = l(a);
          c = b("bs_caml_int64").mul([0, 2], i(c));
          e.set(b("bs_int64").to_string(h), a);
          f.set(b("bs_int64").to_string(c), a);
          g.set(h, c);
          j(h, d);
          return j(c, d);
        },
        serializeToArray: function (e) {
          e = [];
          for (var c = 0; c < a; ++c)
            e.push(b("bs_caml_array").get(d, c).hashResultSum),
              e.push(b("bs_caml_array").get(d, c).verificationHashResultSum),
              e.push(
                b("bs_caml_int64").of_int32(b("bs_caml_array").get(d, c).count)
              );
          return e;
        },
      };
    }
    f.make = a;
  },
  null
);
__d(
  "AvailableListState",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ OFFLINE: 0, IDLE: 1, ACTIVE: 2, MOBILE: 3 });
    f["default"] = a;
  },
  66
);
__d(
  "PresenceStatusProviderSubscription",
  [
    "AvailableListState",
    "CometHomeContactsConfig",
    "CometRelay",
    "CurrentUser",
    "LogHistory",
    "PresenceStatusProviderSubscription_ContactProfilesQuery.graphql",
    "PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery.graphql",
    "PresenceStatusProviderSubscription_rankings.graphql",
    "WebPixelRatio",
    "gkx",
    "promiseDone",
    "recoverableViolation",
    "relay-runtime",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = c("requireDeferred")("FBMqttChannel").__setRef(
        "PresenceStatusProviderSubscription"
      ),
      l = c("requireDeferred")("MessengerMQTTPresence").__setRef(
        "PresenceStatusProviderSubscription"
      ),
      m = Object.assign.apply(
        Object,
        [{}].concat(
          Object.entries(c("AvailableListState")).map(function (a) {
            var b,
              c = a[0];
            a = a[1];
            return (b = {}), (b[String(a)] = c), b;
          })
        )
      ),
      n =
        h !== void 0
          ? h
          : (h = b(
              "PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery.graphql"
            )),
      o =
        i !== void 0
          ? i
          : (i = b(
              "PresenceStatusProviderSubscription_ContactProfilesQuery.graphql"
            ));
    function p(a) {
      var b = null,
        c = k.onReady(function (c) {
          c.subscribe("/legacy_web", function (b) {
            var c = JSON.parse(b);
            c.type === "privacy_changed" &&
              a.commitUpdate(function (a) {
                a = a.getRoot();
                if (a == null) return;
                a = a.getLinkedRecord("viewer");
                if (a == null) return;
                a.setValue(
                  ((a = c.data) == null ? void 0 : a.visibility) === !0,
                  "chat_visibility"
                );
              });
          }),
            (b = function () {
              return c.unsubscribeAll("/legacy_web");
            });
        });
      return {
        remove: function () {
          c.remove(), b != null && b();
        },
      };
    }
    function q(a, b, c, d, e) {
      var f = null,
        g = l.onReady(function (g) {
          g.subscribe({
            reset: function () {
              var f = b.current,
                g = {};
              Object.keys(f).forEach(function (a) {
                delete g[a];
              });
              b.current = g;
              w(a, b.current, c, d, e);
            },
            setMultiFromMQTT: function (f) {
              var g = b.current,
                h = babelHelpers["extends"]({}, g);
              f.forEach(function (a) {
                h[a.u] = { last_active_time: a.l, status: a.p };
              });
              b.current = h;
              w(a, b.current, c, d, e);
            },
          }),
            (f = function () {
              return g.unsubscribe();
            });
        });
      return {
        remove: function () {
          g.remove(), f != null && f();
        },
      };
    }
    function r(a, b, c, e, f) {
      var g,
        h = d("relay-runtime").getRequest(n);
      h = d("relay-runtime").createOperationDescriptor(h, {});
      h = a.lookup(h.fragment);
      g = (g = h.data) == null ? void 0 : g.viewer;
      var i =
        typeof g === "object" ? (g == null ? void 0 : g.chat_visibility) : null;
      e.current = !!i;
      g = a.subscribe(h, function (d) {
        d = d.data;
        d = d == null ? void 0 : d.viewer;
        if (typeof d !== "object" || d == null) return;
        var g = d == null ? void 0 : d.presence_view_side_settings;
        if (
          typeof g === "object" &&
          g != null &&
          g.has_converted_to_view_side_settings === !0
        )
          return;
        g = d.chat_visibility;
        i != null && g !== i && w(a, b.current, c, e, f);
        i = g;
      });
      return g;
    }
    var s = { height: 36, scale: d("WebPixelRatio").get(), width: 36 },
      t = function (a, b, e) {
        if (b.size === 0) return;
        c("promiseDone")(
          d("CometRelay")
            .fetchQuery(
              e,
              o,
              { ids: Array.from(b), scale: d("WebPixelRatio").get() },
              c("gkx")("1820749") ? { fetchPolicy: "store-or-network" } : void 0
            )
            .toPromise()
            .then(function (b) {
              var d =
                (b == null
                  ? void 0
                  : (b = b.viewer) == null
                  ? void 0
                  : b.chat_sidebar_contact_nodes) || [];
              e.commitUpdate(function (b) {
                d.forEach(function (d) {
                  var e,
                    f = d == null ? void 0 : d.id;
                  if (f == null) return;
                  var g = b.get(f);
                  g == null && (g = b.create(f, "User"));
                  var h = d == null ? void 0 : d.name;
                  if (h == null)
                    return c("recoverableViolation")(
                      "ContactProfilesQuery return empty name for user " + f,
                      "messenger_comet"
                    );
                  g.setValue(h, "name");
                  h = g.getOrCreateLinkedRecord("profile_picture", "Image", s);
                  e =
                    d == null
                      ? void 0
                      : (e = d.profile_picture) == null
                      ? void 0
                      : e.uri;
                  if (e == null)
                    return c("recoverableViolation")(
                      "ContactProfilesQuery return empty profileUri for user " +
                        f,
                      "messenger_comet"
                    );
                  h.setValue(
                    d == null
                      ? void 0
                      : (e = d.profile_picture) == null
                      ? void 0
                      : e.uri,
                    "uri"
                  );
                  g.setLinkedRecord(h, "profile_picture", s);
                  a.push(g);
                }),
                  v(b, a);
              });
            })
        );
      },
      u = function (a, b, d, e) {
        a.commitUpdate(function (f) {
          if (d == null) return;
          var g = new Set(
              Object.keys(b).filter(function (a) {
                return (
                  c("CurrentUser").getID() !== a &&
                  ((a = b[a]) == null ? void 0 : a.status) === 2
                );
              })
            ),
            h = d
              .filter(function (a) {
                var c = a.buddy_id;
                a = a.status;
                return a == null || c == null
                  ? !1
                  : ((c = e.current
                      ? (c = b[c]) == null
                        ? void 0
                        : c.status
                      : 0) != null
                      ? c
                      : 0) === a;
              })
              .map(function (a) {
                a = (a = a.user) == null ? void 0 : a.id;
                if (a == null) return null;
                g["delete"](a);
                return f.get(a);
              })
              .filter(Boolean);
          g.size > 0 &&
            (g.forEach(function (a) {
              var b = f.get(a);
              if (b != null && b.getValue("name") != null) {
                var c = b.getLinkedRecord("profile_picture", s);
                c != null &&
                  c.getValue("uri") != null &&
                  (h.push(b), g["delete"](a));
              }
            }),
            t(h, g, a));
          v(f, h);
        });
      };
    function v(a, b) {
      d("LogHistory")
        .getInstance("messenger-comet")
        .log("updateChatSidebarContacts", b.length);
      a = a.getRoot().getLinkedRecord("viewer");
      if (a == null) {
        c("recoverableViolation")(
          "Viewer should not be null here, something has gone horribly wrong",
          "messenger_web_product"
        );
        return;
      }
      a.setLinkedRecords(b, "chat_sidebar_contacts", {
        count: c("CometHomeContactsConfig").numContactsToFetch,
      });
    }
    function w(a, b, c, d, e) {
      a.commitUpdate(function (a) {
        var e = a.getRoot();
        if (e == null) return;
        e = e.getLinkedRecord("viewer");
        if (e == null) return;
        var f = e.getLinkedRecord("presence_view_side_settings"),
          g =
            (f != null &&
              f.getValue("has_converted_to_view_side_settings") === !0) ||
            e.getValue("chat_visibility") === !0;
        f = e.getLinkedRecord("actor");
        f != null && g
          ? f.setValue("ACTIVE", "availability")
          : f != null && f.setValue("OFFLINE", "availability");
        d.current = g;
        e = Object.keys(b);
        e.forEach(function (c) {
          var d, e;
          d = (d = b[c]) == null ? void 0 : d.status;
          e = (e = b[c]) == null ? void 0 : e.last_active_time;
          d = d == null ? null : m[String(d)];
          var f = a.get(c);
          f == null && d === "ACTIVE" && (f = a.create(c, "User"));
          f != null &&
            (f.setValue(d === "ACTIVE" && g ? d : null, "availability"),
            !g
              ? f.setValue(null, "last_active_time")
              : e !== 0 && e != null && f.setValue(e, "last_active_time"));
        });
        c();
      }),
        u(a, b, e, d);
    }
    a = {
      init: function (a, c, e, f, g) {
        g =
          g != null
            ? g.map(function (a) {
                return d("CometRelay").readInlineData(
                  j !== void 0
                    ? j
                    : (j = b(
                        "PresenceStatusProviderSubscription_rankings.graphql"
                      )),
                  a
                );
              })
            : null;
        var h = p(a),
          i = q(a, c, e, f, g),
          k = r(a, c, e, f, g);
        return {
          remove: function () {
            i.remove(), h.remove(), k.dispose();
          },
        };
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "PresenceStatusProviderSubscriptionComponent.react",
  [
    "CometRelay",
    "PresenceStatusProviderSubscription",
    "PresenceStatusProviderSubscriptionComponentQuery.graphql",
    "WebPixelRatio",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useEffect,
      j = 50,
      k = 500,
      l = function () {
        return d("CometRelay").useLazyLoadQuery(
          h !== void 0
            ? h
            : (h = b(
                "PresenceStatusProviderSubscriptionComponentQuery.graphql"
              )),
          { count: c("gkx")("2822") ? j : k, scale: d("WebPixelRatio").get() }
        );
      };
    function a(a) {
      var b = a.chatVisibilityRef,
        e = a.presenceInformer,
        f = a.presenceMap;
      a = l();
      var g =
          (a =
            a == null
              ? void 0
              : (a = a.viewer) == null
              ? void 0
              : a.chat_sidebar_contact_rankings) != null
            ? a
            : null,
        h = d("CometRelay").useRelayEnvironment();
      i(
        function () {
          var a = c("PresenceStatusProviderSubscription").init(h, f, e, b, g);
          return function () {
            a.remove();
          };
        },
        [h, e, f, g, b]
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "LSDataTraceType.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").one;
    c = [0, 2];
    d = [0, 3];
    e = [0, 4];
    b = [0, 5];
    var g = [0, 6];
    f.task = a;
    f.sync = c;
    f.receiveMsg = d;
    f.richMediaSend = e;
    f.richMediaDownload = b;
    f.taskClientMode = g;
  },
  null
);
__d(
  "LsDataTraceFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743851");
    c = b("FalcoLoggerInternal").create("ls_data_trace", a);
    e.exports = c;
  },
  null
);
__d(
  "LSDataTraceFlush.bs",
  [
    "ArmadilloDataTraceType.bs",
    "LSDataTraceType.bs",
    "LSDatabaseDeferred.bs",
    "LSInt64.bs",
    "LSTransaction.bs",
    "LsDataTraceFalcoEvent",
    "ODS",
    "Promise",
    "ReQL.bs",
    "SkytaleDB",
    "bs_belt_Option",
    "bs_caml",
    "bs_caml_int64",
    "bs_caml_option",
    "bs_int64",
    "clearTimeout",
    "promiseDone",
    "setTimeout",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, c, d) {
      var e = a.length;
      if (e === 0)
        return [
          b("bs_caml_int64").neg_one,
          b("bs_caml_int64").neg_one,
          void 0,
          void 0,
          void 0,
        ];
      e = a.find(function (a) {
        return a.f !== void 0;
      });
      e = b("bs_belt_Option").mapWithDefault(
        e === void 0 ? void 0 : b("bs_caml_option").some(e),
        void 0,
        function (a) {
          return a.f;
        }
      );
      a = a[(a.length - 1) | 0];
      var f = b("bs_caml_int64").of_float(Date.now()),
        g = [0, 12e4],
        h = a.c;
      g = b("bs_int64").compare(b("bs_caml_int64").sub(f, d), g) >= 0;
      return !c && g
        ? [b("bs_caml_int64").sub(f, d), a.d, h, e, "trace expired"]
        : [b("bs_caml_int64").sub(h, d), a.d, h, e, e];
    }
    function h(a) {
      return a.reduce(
        function (a, c, d) {
          var e = b("bs_int64").to_string(c.d),
            f = c.c,
            g = b("bs_int64").to_string(
              b("bs_belt_Option").getWithDefault(
                c.e,
                b("bs_caml_int64").neg_one
              )
            );
          c = c.g;
          c = c !== void 0 ? "," + c : "";
          if (d === 0) a.pointsList = "".concat("(", e, ",", g, c, ")");
          else {
            d = String(
              b("bs_caml_int64").to_int32(
                b("bs_caml_int64").sub(f, a.lastCheckPointTimestamp)
              )
            );
            a.pointsList = a.pointsList.concat("-", d, "-(", e, ",", g, c, ")");
          }
          a.lastCheckPointTimestamp = f;
          return a;
        },
        { pointsList: "", lastCheckPointTimestamp: b("bs_caml_int64").zero }
      ).pointsList;
    }
    var i = [0, 2];
    function j(a, c) {
      var d = c.a,
        e = c.e,
        f = c.d,
        j = b("bs_caml").i64_eq(f, b("LSDataTraceType.bs").task)
          ? "send"
          : b("bs_caml").i64_eq(
              f,
              b("ArmadilloDataTraceType.bs").armadilloMessageSend
            )
          ? "armadillo send"
          : c.g;
      f = c.d;
      var k = b("bs_caml").i64_eq(
          f,
          b("ArmadilloDataTraceType.bs").armadilloMessageSend
        )
          ? "tam_message_send"
          : c.f,
        l = b("bs_caml").i64_eq(c.d, i) ? void 0 : c.i,
        m = c.b;
      return b("ReQL.bs")
        .toArray(
          b("ReQL.bs").filter(
            b("SkytaleDB").table(a, "data_trace_addon").asc,
            function (a) {
              return a.b === d;
            }
          )
        )
        .then(function (a) {
          var c = g(a, e, m),
            f = c[4],
            i = c[3],
            n = c[1],
            o = c[0],
            p = a.length,
            q = h(a);
          b("LsDataTraceFalcoEvent").log(function () {
            var a, c;
            return {
              data_trace_id: d,
              trace_flow: b("bs_belt_Option").getWithDefault(j, ""),
              database_id: k,
              error_message: f,
              first_error_message: i,
              has_backgrounded: !1,
              predefined_id: l,
              latency: (a = b("bs_caml_option")).some(
                (c = b("LSInt64.bs")).string(o)
              ),
              last_check_point: a.some(c.string(n)),
              check_point_count: a.some(
                c.string(b("bs_caml_int64").of_int32(p))
              ),
              check_point_list: q,
              client_event_ts: a.some(
                c.string(b("bs_caml_int64").of_float(Date.now()))
              ),
              start_time: a.some(c.string(m)),
              cold_start_time: void 0,
              sent_text_messages: void 0,
              sent_rich_media_messages: void 0,
              delivered_messages: void 0,
              media_type: void 0,
              num_of_attachments: void 0,
            };
          });
          return b("Promise").resolve(void 0);
        })
        .then(function (c) {
          return b("SkytaleDB")
            .table(a, "data_trace_meta")
            ["delete"]({ hd: d, tl: 0 });
        });
    }
    function a(a, c) {
      return b("ReQL.bs")
        .first(
          b("ReQL.bs").getKeyRange(
            b("SkytaleDB").table(a, "data_trace_meta").asc,
            { hd: c, tl: 0 }
          )
        )
        .then(function (c) {
          if (c !== void 0) return j(a, c);
          else return b("Promise").resolve(void 0);
        });
    }
    var k = { contents: void 0 };
    function l(a) {
      var c = [0, 12e4];
      return b("LSDatabaseDeferred.bs").db.then(function (a) {
        return b("LSTransaction.bs").run(
          a,
          function (a) {
            return b("ReQL.bs")
              .toArray(b("SkytaleDB").table(a, "data_trace_meta").asc)
              .then(function (d) {
                return b("Promise").all(
                  d.map(function (d) {
                    var e = d.e,
                      f = d.b,
                      g = b("bs_caml_int64").of_float(Date.now());
                    if (
                      e === !1 &&
                      b("bs_int64").compare(b("bs_caml_int64").sub(g, f), c) >=
                        0
                    )
                      return j(a, d);
                    else return b("Promise").resolve(void 0);
                  })
                );
              });
          },
          "readWrite"
        );
      });
    }
    function m(a) {
      b("promiseDone")(
        l(void 0),
        function (a) {
          a = k.contents;
          a !== void 0 &&
            b("clearTimeout")(b("bs_caml_option").valFromOption(a));
          a = b("setTimeout")(function (a) {
            return m(void 0);
          }, 6e4);
          k.contents = b("bs_caml_option").some(a);
        },
        function (a) {
          a = k.contents;
          a !== void 0 &&
            b("clearTimeout")(b("bs_caml_option").valFromOption(a));
          b("ODS").bumpEntityKey(3185, "mw_trace", "error");
        }
      );
    }
    c = [0, 4];
    d = [0, 5];
    f.dataTraceSync = i;
    f.dataTraceRichMediaSend = c;
    f.dataTraceRichMediaDownload = d;
    f.flushForTraceMeta = j;
    f.flush = a;
    f.flushExpiredDataTraces = m;
  },
  null
);
__d(
  "LSCoreCreateInvertibleBloomFilterEncoder.bs",
  ["IBFEncoder.bs", "bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e) {
      return window.Promise.resolve([
        b("IBFEncoder.bs").make(
          b("bs_caml_int64").to_int32(d),
          b("bs_caml_int64").to_int32(e)
        ),
      ]);
    }
    f.call = a;
  },
  null
);
__d(
  "CometRelayEF",
  [
    "Bootloader",
    "BootloaderEvents",
    "ClientConsistencyEventEmitter",
    "CometSSREntrypoint",
    "cometAsyncFetch",
    "gkx",
    "performanceAbsoluteNow",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();
    function i(a, b) {
      if (!c("gkx")("1334580")) return;
      a = d("CometSSREntrypoint").processRootEntryPoint(a, b);
      var e = [];
      a.forEach(function (a) {
        a = a.name;
        h.has(a) ||
          (e.push(a),
          d("BootloaderEvents").notifyHasteResponseEFStart("relay_3d", a));
      });
      if (e.length === 0) return;
      var f = c("performanceAbsoluteNow")(),
        g = c("cometAsyncFetch")("/ajax/relay-ef/", {
          data: { queries: e },
          method: "POST",
        }).then(function (a) {
          return {
            fetchPredictionsEnd: c("performanceAbsoluteNow")(),
            fetchPredictionsStart: f,
            payload: a,
          };
        });
      e.forEach(function (a) {
        return h.set(a, g);
      });
    }
    function a(a, b) {
      if (!c("gkx")("1334580")) return;
      var e = c("performanceAbsoluteNow")();
      i(a, b);
      a = d("CometSSREntrypoint").processRootEntryPoint(a, b);
      a.forEach(function (a) {
        var b = a.name,
          f = h.get(b);
        f &&
          f !== !0 &&
          c("promiseDone")(f, function (a) {
            var f = a.fetchPredictionsEnd,
              g = a.fetchPredictionsStart;
            a = a.payload;
            a != null &&
              typeof a === "object" &&
              (c("Bootloader").loadPredictedResourceMap(
                a.predictions[b],
                {
                  onLog: function (a) {
                    return d("BootloaderEvents").notifyHasteResponseEF(
                      "relay_3d",
                      b,
                      {
                        fetchPredictionsEnd: f,
                        fetchPredictionsStart: g,
                        fetchRsrcsStart: e,
                        tierOne: a,
                      }
                    );
                  },
                },
                a.consistency.rev
              ),
              c("ClientConsistencyEventEmitter").emit(
                "newEntry",
                a.consistency
              ));
          });
        h.set(a.name, !0);
      });
    }
    g.fetchPredictions = i;
    g.fetchPredictedResources = a;
  },
  98
);
__d(
  "RTWebCallBlockSettingHooks",
  [
    "CometRelay",
    "DateConsts",
    "RTWebCallBlockSettingHooksQuery.graphql",
    "RTWebCallBlockedSettingSubscription",
    "RTWebPreCallContext",
    "ServerTime",
    "promiseDone",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useContext,
      j = e.useEffect,
      k = e.useState,
      l = 6e4,
      m = h !== void 0 ? h : (h = b("RTWebCallBlockSettingHooksQuery.graphql")),
      n = function (a, b) {
        return function (c) {
          c = c.getRoot();
          if (c == null) return;
          c = c.getLinkedRecord("viewer");
          if (c == null) return;
          c.setValue(b, a);
        };
      };
    function o(a) {
      return a === -1 ? a : (a || 0) * d("DateConsts").MS_PER_SEC;
    }
    function p() {
      var a = d("CometRelay").useRelayEnvironment(),
        b = d("CometRelay").getActorID(a),
        e = k(0),
        f = e[0],
        g = e[1];
      j(
        function () {
          var e = d("CometRelay")
            .fetchQuery(a, m, {}, { fetchPolicy: "store-or-network" })
            .toPromise()
            .then(function (a) {
              a = a == null ? void 0 : a.viewer;
              a != null && g(o(a.call_blocked_until));
            });
          c("promiseDone")(e);
          var f = d("RTWebCallBlockedSettingSubscription").subscribe(
            a,
            { viewer_id: b },
            function (b) {
              b = b == null ? void 0 : b.rtweb_call_blocked_setting_subscribe;
              b != null &&
                (g(o(b.call_blocked_until)),
                a.commitUpdate(n("call_blocked_until", b.call_blocked_until)));
            }
          );
          return function () {
            f.dispose();
          };
        },
        [a, b]
      );
      return f;
    }
    function q() {
      var a = p(),
        b = d("ServerTime").getMillis(),
        c = a < 0,
        e = a > b;
      b = k(c || e);
      var f = b[0],
        g = b[1];
      (c || e) !== f && g(c || e);
      j(
        function () {
          if (e) {
            var b = window.setInterval(function () {
              a <= d("ServerTime").getMillis() &&
                (g(!1), window.clearInterval(b));
            }, l);
            return function () {
              window.clearInterval(b);
            };
          }
        },
        [a, e]
      );
      return f;
    }
    function a() {
      var a = i(c("RTWebPreCallContext")),
        b = q();
      j(
        function () {
          a != null && a.callInviteModel.startListening({ callsBlocked: b });
        },
        [a, b]
      );
    }
    g.useCallBlockSettingValue = p;
    g.useHasCallsBlocked = q;
    g.useCallBlockSetting = a;
  },
  98
);
__d(
  "showDesktopNotification",
  [
    "MessengerDesktopNotificationPermissions",
    "MessengerDesktopNotifications",
    "ZenonUserActionLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 8e3;
    function a() {
      return function (a) {
        var b = a.acceptCall,
          e = a.body,
          f = a.icon;
        a = a.title;
        var g = {
          body: e,
          closeTime: h,
          icon: f,
          onClick: function () {
            d("ZenonUserActionLogger").logClick({
              component: "browser_notification",
              surface: "desktop_notification",
            }),
              window.focus(),
              b({ trigger: "desktop_notification" });
          },
          onShow: function () {
            d("ZenonUserActionLogger").logImpression({
              component: "browser_notification",
              surface: "desktop_notification",
            });
          },
          title: a,
        };
        if (
          d("MessengerDesktopNotifications").checkPermission() ===
          c("MessengerDesktopNotificationPermissions").DEFAULT
        ) {
          d("MessengerDesktopNotifications").requestPermission(function () {
            d("MessengerDesktopNotifications").showNotification(g);
          });
          return;
        }
        d("MessengerDesktopNotifications").showNotification(g);
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "RTWebCallInviteDesktopNotification.react",
  [
    "fbt",
    "RTWebPreCallHooks",
    "ZenonUsersHooks",
    "react",
    "showDesktopNotification",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.invite;
      return (a == null ? void 0 : a.type) === "ringing"
        ? i.jsx(j, { invite: a })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      a = a.invite;
      var b = c("showDesktopNotification")(),
        e = c("usePrevious")(a.ringID),
        f = d("RTWebPreCallHooks").useAcceptCallCallback(),
        g = d("ZenonUsersHooks").useZenonUser(a.inviterID),
        h = a.requestingVideo,
        i = a.participants.length > 1;
      if (e !== a.ringID && g != null) {
        b({
          acceptCall: f,
          body: l(g.shortName),
          icon: (e = g.profilePictureUrl) != null ? e : null,
          title: k(h, i),
        });
      }
      return null;
    }
    function k(a, b) {
      if (!b) return a ? h._("Incoming video chat") : h._("Incoming call");
      else
        return a
          ? h._("Incoming Group Video Chat")
          : h._("Incoming Group Call");
    }
    function l(a) {
      return h._("{caller name} is calling you. Click to answer.", [
        h._param("caller name", a),
      ]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "RtcWwwWebModuleRtcIncomingRingQPLEvent",
  ["cr:4407"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:4407");
  },
  98
);
__d(
  "ZenonDialogContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      hide: c("emptyFunction"),
      hideAll: c("emptyFunction"),
      hideByID: c("emptyFunction"),
      show: c("emptyFunction"),
      showByID: c("emptyFunction"),
      toggle: c("emptyFunction"),
    });
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "useRTWebIncomingCallDialog",
  [
    "fbt",
    "ix",
    "RTWebPreCallContext",
    "RtcWwwWebModuleRtcIncomingRingQPLEvent",
    "ZenonDialogContext",
    "ZenonUserActionLogger",
    "cr:1568669",
    "deferredLoadComponent",
    "emptyFunction",
    "fbicon",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = c("deferredLoadComponent")(
        c("requireDeferred")("RTWebCometIncomingCallContent.react").__setRef(
          "useRTWebIncomingCallDialog"
        )
      ),
      m = c("deferredLoadComponent")(
        c("requireDeferred")("RTWebCometCallDialog.react").__setRef(
          "useRTWebIncomingCallDialog"
        )
      ),
      n = d("react"),
      o = b("cr:1568669") ? b("cr:1568669").addPoint : c("emptyFunction");
    function a() {
      var a = k(c("ZenonDialogContext")),
        b = a.hide,
        e = a.show;
      a = k(c("RTWebPreCallContext"));
      var f = a ? a.callInviteModel : null;
      return j(
        function (a) {
          var g,
            j = a.inviterID,
            k = a.isVideoCall,
            q = a.onAccept,
            r = a.onDecline;
          a = a.participantIDs;
          d("ZenonUserActionLogger").logImpression({
            surface: "incoming_call_dialog",
          });
          o(c("RtcWwwWebModuleRtcIncomingRingQPLEvent"), "render_dialog", {
            instanceKey: +(f == null
              ? void 0
              : (g = f.getCurrentInvite()) == null
              ? void 0
              : g.ringID),
          });
          e(
            n.jsx(m, {
              acceptIcon: k
                ? d("fbicon")._(i("493173"), 16)
                : d("fbicon")._(i("558160"), 16),
              acceptLabel: h._("Accept"),
              acceptTestid: "answerCallButton",
              body: n.jsx(l, {
                inviterID: j,
                isVideoCall: k,
                participantIDs: a,
              }),
              declineLabel: h._("Decline"),
              onClose: function (a) {
                d("ZenonUserActionLogger").logClick({
                  component: a ? "accept_button" : "decline_button",
                  surface: "incoming_call_dialog",
                });
                b();
                return a ? q() : r();
              },
              title: p(k, a.length > 1),
            })
          );
          return { dismiss: b };
        },
        [f, b, e]
      );
    }
    function p(a, b) {
      if (!b) return a ? h._("Incoming video chat") : h._("Incoming call");
      else
        return a
          ? h._("Incoming Group Video Chat")
          : h._("Incoming Group Call");
    }
    g["default"] = a;
  },
  98
);
__d(
  "RTWebIncomingUnsupportedBrowserDialogWrapper.react",
  ["cr:230"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:230");
  },
  98
);
__d(
  "useRTWebIncomingUnsupportedBrowserDialog",
  [
    "RTWebIncomingUnsupportedBrowserDialogWrapper.react",
    "ZenonDialogContext",
    "ZenonUserActionLogger",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext;
    function a() {
      var a = j(c("ZenonDialogContext")),
        b = a.hide,
        e = a.show;
      return i(
        function (a) {
          d("ZenonUserActionLogger").logImpression({
            surface: "unsupported_browser_dialog",
          });
          a = babelHelpers["extends"]({}, a, { hide: b });
          e(
            h.jsx(
              c("RTWebIncomingUnsupportedBrowserDialogWrapper.react"),
              babelHelpers["extends"]({}, a)
            )
          );
          return { dismiss: b };
        },
        [b, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useRTWebMissedCallDialog",
  [
    "fbt",
    "ix",
    "CometCardedDialogLoadingState.react",
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "ZenonDialogContext",
    "ZenonUserActionLogger",
    "fbicon",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useContext,
      m = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "RTWebCometMissedCallContent.react"
        ).__setRef("useRTWebMissedCallDialog")
      ),
      n = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("RTWebCometCallDialog.react").__setRef(
          "useRTWebMissedCallDialog"
        )
      );
    function a() {
      var a = l(c("ZenonDialogContext")),
        b = a.hide,
        e = a.show;
      return k(
        function (a) {
          var f = a.inviterID,
            g = a.isVideoCall,
            k = a.onCallback,
            l = a.participantIDs;
          a = a.timeMissed;
          d("ZenonUserActionLogger").logImpression({
            surface: "missed_call_dialog",
          });
          e(
            j.jsx(c("CometPlaceholder.react"), {
              fallback: j.jsx(c("CometCardedDialogLoadingState.react"), {}),
              children: j.jsx(n, {
                acceptIcon: g
                  ? d("fbicon")._(i("493173"), 16)
                  : d("fbicon")._(i("558160"), 16),
                acceptLabel: h._("Call Back"),
                body: j.jsx(m, {
                  inviterID: f,
                  isRoomCall: !1,
                  isVideoCall: g,
                  participantIDs: l,
                  timeMissed: a,
                }),
                declineLabel: h._("Close"),
                onClose: function (a) {
                  d("ZenonUserActionLogger").logClick({
                    component: a ? "call_back" : "close_dialog",
                    surface: "missed_call_dialog",
                  });
                  a &&
                    d("ZenonUserActionLogger").logClick({
                      component: "start_call_button",
                      surface: "missed_call_dialog",
                    });
                  b();
                  return a ? k() : void 0;
                },
                title: o(g, l.length > 1),
              }),
            })
          );
          return { dismiss: b };
        },
        [b, e]
      );
    }
    function o(a, b) {
      if (!b) return a ? h._("Missed Video Chat") : h._("Missed Call");
      else return a ? h._("Missed Group Video Chat") : h._("Missed Group Call");
    }
    g["default"] = a;
  },
  98
);
__d(
  "RTWebCometRoomIncomingCallDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "RTWebCometRoomIncomingCallDialog_DisclaimerQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            queryReference: {
              parameters: b(
                "RTWebCometRoomIncomingCallDialog_DisclaimerQuery$Parameters"
              ),
              variables: { nuxID: 8259 },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "RTWebCometRoomIncomingCallDialogContainer.react"
      ).__setRef("RTWebCometRoomIncomingCallDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "useRoomIncomingCallDialog",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "RTWebCometRoomIncomingCallDialog.entrypoint",
    "VideoChatLinksUserActionsMultiplexLogger",
    "ZenonDialogContext",
    "react",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext;
    function a() {
      var a = j(c("ZenonDialogContext")),
        b = a.hide,
        e = a.show,
        f = c("useCometRelayEntrypointContextualEnvironmentProvider")();
      return i(
        function (a) {
          var g = a.inviterID,
            i = a.linkUrl,
            j = a.onAccept,
            k = a.onDecline,
            l = a.roomName;
          a = a.sender;
          new (c("VideoChatLinksUserActionsMultiplexLogger"))()
            .setSurface("vcl_meetups_notification")
            .setEvent("room_ringback_received")
            .setVideoCallLinkURLRaw(i)
            .log();
          var m = d("CometRelay").loadEntryPoint(
            f,
            c("RTWebCometRoomIncomingCallDialog.entrypoint"),
            {}
          );
          e(
            h.jsx(c("CometPlaceholder.react"), {
              fallback: null,
              children: h.jsx(d("CometRelay").EntryPointContainer, {
                entryPointReference: m,
                props: {
                  inviterID: g,
                  linkUrl: i,
                  onAccept: j,
                  onDecline: k,
                  roomName: l,
                  sender: a,
                },
              }),
            })
          );
          return { dismiss: b };
        },
        [f, b, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useRoomMissedCallDialog",
  [
    "fbt",
    "ix",
    "CometCardedDialogLoadingState.react",
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "VideoChatLinksUserActionsMultiplexLogger",
    "ZenonDialogContext",
    "fbicon",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useContext,
      m = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "RTWebCometMissedCallContent.react"
        ).__setRef("useRoomMissedCallDialog")
      ),
      n = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("RTWebCometCallDialog.react").__setRef(
          "useRoomMissedCallDialog"
        )
      );
    function a() {
      var a = l(c("ZenonDialogContext")),
        b = a.hide,
        e = a.show;
      return k(
        function (a) {
          var f = a.inviterID,
            g = a.linkUrl,
            k = a.onCallback,
            l = a.participantIDs,
            o = a.roomName;
          a = a.timeMissed;
          new (c("VideoChatLinksUserActionsMultiplexLogger"))()
            .setSurface("vcl_meetups_notification")
            .setEvent("room_ringback_missed")
            .setVideoCallLinkURLRaw(g)
            .log();
          e(
            j.jsx(c("CometPlaceholder.react"), {
              fallback: j.jsx(c("CometCardedDialogLoadingState.react"), {}),
              children: j.jsx(n, {
                acceptIcon: d("fbicon")._(i("493173"), 16),
                acceptLabel: h._("Join"),
                body: j.jsx(m, {
                  inviterID: f,
                  isRoomCall: !0,
                  isVideoCall: !1,
                  participantIDs: l,
                  timeMissed: a,
                }),
                declineLabel: h._("Close"),
                onClose: function (a) {
                  a
                    ? (new (c("VideoChatLinksUserActionsMultiplexLogger"))()
                        .setSurface("vcl_meetups_notification")
                        .setEvent("room_ringback_accepted")
                        .setVideoCallLinkURLRaw(g)
                        .log(),
                      k())
                    : new (c("VideoChatLinksUserActionsMultiplexLogger"))()
                        .setSurface("vcl_meetups_notification")
                        .setEvent("room_ringback_missed_dialog_dismissed")
                        .setVideoCallLinkURLRaw(g)
                        .log(),
                    b();
                },
                title: h._("Missed Call from {room name}", [
                  h._param("room name", o),
                ]),
              }),
            })
          );
          return { dismiss: b };
        },
        [b, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useZenonDialogController",
  ["react", "usePrevious"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    function a(a, b) {
      var d = i(null),
        e = d[0],
        f = d[1],
        g = c("usePrevious")(a);
      h(
        function () {
          if (
            (a == null ? void 0 : a.ringID) ===
              (g == null ? void 0 : g.ringID) &&
            (a == null ? void 0 : a.type) === (g == null ? void 0 : g.type)
          )
            return;
          e && (e.dismiss(), f(null));
          if (a === null) return;
          f(b());
        },
        [e, a, g, b]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "RTWebCometCallInviteDialogs.react",
  [
    "Actor",
    "RTWebPreCallContext",
    "RTWebPreCallHooks",
    "ServerTime",
    "StartVideoChatLinkCall",
    "qex",
    "react",
    "useRTWebIncomingCallDialog",
    "useRTWebIncomingUnsupportedBrowserDialog",
    "useRTWebMissedCallDialog",
    "useRoomIncomingCallDialog",
    "useRoomMissedCallDialog",
    "useZenonDialogController",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a(a) {
      var b = a.invite;
      a = d("Actor").useActor();
      var e = a[0];
      a = h(c("RTWebPreCallContext"));
      var f = c("useRTWebIncomingCallDialog")(),
        g = c("useRoomIncomingCallDialog")(),
        i = c("useRTWebMissedCallDialog")(),
        j = c("useRoomMissedCallDialog")(),
        k = c("useRTWebIncomingUnsupportedBrowserDialog")(),
        l = d("RTWebPreCallHooks").useAcceptCallCallback(),
        m = d("RTWebPreCallHooks").useStartCallCallback(),
        n = a ? a.callInviteModel : null;
      c("useZenonDialogController")(b, function () {
        if (b === null || n == null) return null;
        if (b.context.type === "room") {
          var a,
            h = b.context.room;
          a = (a = c("qex")._("1968272")) != null ? a : !1;
          if (a)
            switch (b.type) {
              case "ringing":
                return g({
                  inviterID: b.inviterID,
                  linkUrl: h.linkHash,
                  onAccept: function () {
                    d("StartVideoChatLinkCall").startCall(h.linkHash, !0, !0);
                  },
                  onDecline: function () {
                    n.decline("IgnoreCall");
                  },
                  roomName: h.roomName,
                  sender: h.sender,
                });
              case "missed":
                return j({
                  inviterID: b.inviterID,
                  linkUrl: h.linkHash,
                  onCallback: function () {
                    d("StartVideoChatLinkCall").startCall(h.linkHash, !0, !0),
                      n.dismiss();
                  },
                  participantIDs: b.participants,
                  roomName: h.roomName,
                  timeMissed: new Date(d("ServerTime").getMillis()),
                });
              case "unsupported_browser":
                return k({
                  inviterID: b.inviterID,
                  isVideoCall: b.requestingVideo,
                  onClose: function () {
                    n.dismiss();
                  },
                  participantIDs: b.participants,
                  threadType: 3,
                });
              default:
                return null;
            }
          else
            switch (b.type) {
              case "ringing":
                return g({
                  inviterID: b.inviterID,
                  linkUrl: h.linkHash,
                  onAccept: function () {
                    d("StartVideoChatLinkCall").startCall(h.linkHash, !0, !0);
                  },
                  onDecline: function () {
                    n.decline("IgnoreCall");
                  },
                  roomName: h.roomName,
                  sender: h.sender,
                });
              case "missed":
                return j({
                  inviterID: b.inviterID,
                  linkUrl: h.linkHash,
                  onCallback: function () {
                    d("StartVideoChatLinkCall").startCall(h.linkHash, !0, !0),
                      n.dismiss();
                  },
                  participantIDs: b.participants,
                  roomName: h.roomName,
                  timeMissed: new Date(d("ServerTime").getMillis()),
                });
              default:
                return null;
            }
        }
        switch (b.type) {
          case "ringing":
            return f({
              inviterID: b.inviterID,
              isVideoCall: b.requestingVideo,
              onAccept: function () {
                l({ trigger: "comet_incoming_dialog_accept_button" });
              },
              onDecline: function () {
                n.decline("IgnoreCall");
              },
              participantIDs: b.participants,
            });
          case "missed":
            if (b.context.type === "thread") {
              var o = b.context.thread;
              return i({
                inviterID: b.inviterID,
                isVideoCall: b.requestingVideo,
                onCallback: function () {
                  m({
                    existingCall: null,
                    invitees: [b.inviterID].concat(
                      b.participants.filter(function (a) {
                        return a !== e;
                      })
                    ),
                    mediaType: b.requestingVideo ? "video" : "audio",
                    thread: o,
                    trigger: "comet_missed_call_dialog",
                  }),
                    n.dismiss();
                },
                participantIDs: b.participants,
                timeMissed: new Date(d("ServerTime").getMillis()),
              });
            }
            return null;
          case "unsupported_browser":
            return k({
              inviterID: b.inviterID,
              isVideoCall: b.requestingVideo,
              onClose: function () {
                n.dismiss();
              },
              participantIDs: b.participants,
              threadType:
                b.context.type === "thread" ? b.context.thread.type : 2,
            });
          default:
            return null;
        }
      });
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useZenonRingTone",
  ["RTCSounds", "Sound", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = [d("RTCSounds").ringtone_mp3_url, d("RTCSounds").ringtone_ogg_url];
    function a(a) {
      a === void 0 && (a = !1),
        h(
          function () {
            if (a) {
              d("Sound").play(i, null, !0);
              return function () {
                d("Sound").stop(i);
              };
            }
          },
          [a]
        );
    }
    g["default"] = a;
  },
  98
);
__d(
  "ZenonCallInviteRingtone.react",
  ["useZenonRingTone"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = a.invite;
      c("useZenonRingTone")((a == null ? void 0 : a.type) === "ringing");
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useDocumentTitleBlink",
  ["DocumentTitle", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a) {
      h(
        function () {
          if (a == null) return;
          var b = c("DocumentTitle").blink(a);
          return function () {
            b.stop();
          };
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "ZenonCallInviteTitleBlinking.react",
  ["fbt", "ZenonUsersHooks", "react", "useDocumentTitleBlink"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.invite;
      return a !== null && a.type === "ringing" && a.inviterID != null
        ? i.jsx(j, { inviterID: a.inviterID })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      a = a.inviterID;
      a = d("ZenonUsersHooks").useZenonUser(a);
      c("useDocumentTitleBlink")(
        a ? h._("{name} is calling", [h._param("name", a.shortName)]) : null
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useZenonDialogSetters",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useMemo;
    function a(a, b) {
      return h(
        function () {
          return {
            hide: function () {
              a(null);
            },
            hideAll: function () {
              a(null), b([]);
            },
            hideByID: function (a) {
              b(function (b) {
                return b.filter(function (b) {
                  return b.key !== a;
                });
              });
            },
            show: a,
            showByID: function (a, c) {
              b(function (b) {
                var d = b.findIndex(function (b) {
                    return b.key === a;
                  }),
                  e = { key: a, node: c };
                if (d === -1) return [].concat(b, [e]);
                else return [].concat(b.slice(0, d), b.slice(d + 1), [e]);
              });
            },
            toggle: function (b) {
              b === void 0 && (b = !1), b || a(null);
            },
          };
        },
        [a, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "ZenonDialogProvider.react",
  ["ZenonDialogContext", "react", "useZenonDialogSetters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      a = a.children;
      var b = i(null),
        d = b[0];
      b = b[1];
      var e = i([]),
        f = e[0];
      e = e[1];
      b = c("useZenonDialogSetters")(b, e);
      return h.jsxs(c("ZenonDialogContext").Provider, {
        value: b,
        children: [
          a,
          d,
          f.map(function (a) {
            a = a.node;
            return a;
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
  "RTWebCometCallInviteController.react",
  [
    "RTWebCallBlockSettingHooks",
    "RTWebCallInviteDesktopNotification.react",
    "RTWebCometCallInviteDialogs.react",
    "RTWebPreCallHooks",
    "ZenonCallInviteRingtone.react",
    "ZenonCallInviteTitleBlinking.react",
    "ZenonDialogProvider.react",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = c("requireDeferred")("FBRTCCallSummaryUploader").__setRef(
      "RTWebCometCallInviteController.react"
    );
    b.onReady(function (a) {
      a.init();
    });
    function a() {
      d("RTWebCallBlockSettingHooks").useCallBlockSetting();
      d("RTWebPreCallHooks").useNoAnswerTimeout();
      var a = d("RTWebPreCallHooks").useCallInvite();
      return h.jsxs(c("ZenonDialogProvider.react"), {
        children: [
          h.jsx(c("RTWebCometCallInviteDialogs.react"), { invite: a }),
          h.jsx(c("RTWebCallInviteDesktopNotification.react"), { invite: a }),
          h.jsx(c("ZenonCallInviteRingtone.react"), { invite: a }),
          h.jsx(c("ZenonCallInviteTitleBlinking.react"), { invite: a }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RTWebCallWindowOpener",
  ["cr:1099565"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1099565");
  },
  98
);
__d(
  "RTWebCometIncomingCallContent.react",
  [
    "fbt",
    "CometProgressIndicator.react",
    "RTWebCometCallMessageLayout.react",
    "RtcWwwWebModuleRtcIncomingRingQPLEvent",
    "ZenonUsersHooks",
    "cr:1568669",
    "cr:1568670",
    "emptyFunction",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useEffect,
      k = b("cr:1568669") ? b("cr:1568669").addPoint : c("emptyFunction"),
      l = b("cr:1568670") ? b("cr:1568670").useCallInvite : c("emptyFunction"),
      m = c("gkx")("1536863") ? e : c("emptyFunction");
    function a(a) {
      var b = a.inviterID,
        e = a.isVideoCall;
      a = a.participantIDs;
      b = d("ZenonUsersHooks").useZenonUser(b);
      var f = d("ZenonUsersHooks").useZenonUsers(a).valueSeq().toArray();
      m(f, a, c("RtcWwwWebModuleRtcIncomingRingQPLEvent"));
      a = a.length > 1;
      var g = a
        ? e
          ? h._("{caller name} invited you to a group video chat.", [
              h._param("caller name", b == null ? void 0 : b.name),
            ])
          : h._("{caller name} invited you to a group call.", [
              h._param("caller name", b == null ? void 0 : b.name),
            ])
        : h._("{caller name} is calling you.", [
            h._param("caller name", b == null ? void 0 : b.name),
          ]);
      a = a
        ? e
          ? h._("Your video will be shared as soon as you answer")
          : h._("The call will start as soon as you answer.")
        : h._("The call will start as soon as you answer.");
      return b === null
        ? i.jsx(c("CometProgressIndicator.react"), {})
        : i.jsx(c("RTWebCometCallMessageLayout.react"), {
            caller: b,
            mainMessage: g,
            participants: f,
            subMessage: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function e(a, b, c) {
      var d = n();
      j(
        function () {
          a.length === 0 && k(c, "fetching_participants", { instanceKey: d }),
            a.length === b.length &&
              k(c, "fetched_participants", { instanceKey: d });
        },
        [d, b.length, a, c]
      );
    }
    function n() {
      var a = l();
      return +(a == null ? void 0 : a.ringID);
    }
    g["default"] = a;
  },
  98
);
__d(
  "ZenonCallInviteModelTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      missed: "missed",
      ringing: "ringing",
      unsupported_browser: "unsupported_browser",
    };
    f.CallInviteModelType = a;
  },
  66
);
__d(
  "ZenonCallInviteModel",
  [
    "BaseEventEmitter",
    "FBLogger",
    "ZenonCallInviteModelTypes",
    "ZenonCallsModelTypes",
    "ZenonIncomingRingSDKTypes",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this) || this;
        e.$ZenonCallInviteModel3 = function (a) {
          c("FBLogger")("rtc_www").info("Received cancel for: ", a.ringID);
          if (
            e.__currentRequest &&
            e.__currentRequest.model &&
            e.__currentRequest.model.ringID === a.ringID
          )
            switch (a.reason) {
              case d("ZenonIncomingRingSDKTypes").ZenonCancelReason.Hangup:
                a =
                  ((a = e.__currentRequest) == null
                    ? void 0
                    : (a = a.model) == null
                    ? void 0
                    : a.type) !==
                  d("ZenonCallInviteModelTypes").CallInviteModelType
                    .unsupported_browser;
                e.__currentRequest.model = babelHelpers["extends"](
                  {},
                  e.__currentRequest.model,
                  { type: "missed" }
                );
                a && e.emit("callInvite", e.__currentRequest.model);
                break;
              case d("ZenonIncomingRingSDKTypes").ZenonCancelReason
                .OtherDismiss:
                e.dismiss();
                break;
            }
        };
        e.$ZenonCallInviteModel2 = function (a) {
          var b;
          c("FBLogger")("rtc_www").info("Receiving ring: ", a.ringID);
          if (
            ((b = e.__currentRequest) == null
              ? void 0
              : (b = b.model) == null
              ? void 0
              : b.type) === "ringing"
          ) {
            if (
              ((b = e.__currentRequest) == null
                ? void 0
                : (b = b.model) == null
                ? void 0
                : b.ringID) !== a.ringID &&
              c("gkx")("1434282")
            ) {
              a.onDecline("InAnotherCall");
              c("FBLogger")("rtc_www").info(
                "Sending InAnotherCall to ring: ",
                a.ringID,
                "Current ring: ",
                (b = e.__currentRequest) == null
                  ? void 0
                  : (b = b.model) == null
                  ? void 0
                  : b.ringID
              );
            }
          } else
            (e.__currentRequest = {
              model: {
                context: a.context,
                controllerParams: a.controllerParams,
                inviterID: a.inviterID,
                participants: a.otherParticipants,
                requestingVideo: a.requestingVideo,
                ringID: a.ringID,
                type: a.isClientPermissableRing
                  ? "ringing"
                  : "unsupported_browser",
              },
              ringPayload: a,
            }),
              e.emit("callInvite", e.__currentRequest.model),
              a.isClientPermissableRing || a.onDecline("VersionUnsupported");
        };
        e.$ZenonCallInviteModel1 = function (a) {
          c("FBLogger")("rtc_www").info("Blocking ring: ", a.ringID),
            a.onDecline(
              "IgnoreCall",
              d("ZenonCallsModelTypes").ZenonEndCallSubreason.CallsBlocked
            );
        };
        e.__eventSource = b;
        e.__currentRequest = null;
        return e;
      }
      var e = b.prototype;
      e.getCurrentInvite = function () {
        var a;
        return (a = (a = this.__currentRequest) == null ? void 0 : a.model) !=
          null
          ? a
          : null;
      };
      e.startListening = function (a) {
        a = a.callsBlocked;
        this.__currentRequest && this.dismiss();
        this.stopListening();
        a
          ? this.__eventSource.addListener(
              "incomingRing",
              this.$ZenonCallInviteModel1
            )
          : (this.__eventSource.addListener(
              "incomingRing",
              this.$ZenonCallInviteModel2
            ),
            this.__eventSource.addListener(
              "ringCancel",
              this.$ZenonCallInviteModel3
            ));
      };
      e.stopListening = function () {
        this.__eventSource.removeAllListeners("incomingRing"),
          this.__eventSource.removeAllListeners("ringCancel"),
          (this.__currentRequest = null);
      };
      e.dismiss = function () {
        var a;
        c("FBLogger")("rtc_www").info(
          "Dismissing ring: ",
          (a = this.__currentRequest) == null
            ? void 0
            : (a = a.model) == null
            ? void 0
            : a.ringID
        );
        this.__currentRequest = null;
        this.emit("callInvite", null);
      };
      e.accept = function (a, b) {
        var d = this.__currentRequest;
        if (d) {
          var e;
          c("FBLogger")("rtc_www").info(
            "Accepting ring: ",
            (e = d.model) == null ? void 0 : e.ringID
          );
          ((e = d.model) == null ? void 0 : e.type) === "ringing" &&
            d.ringPayload.onAccept(a, b);
          this.dismiss();
        }
      };
      e.decline = function (a, b) {
        a === void 0 && (a = "IgnoreCall");
        var d = this.__currentRequest;
        if (d) {
          var e;
          c("FBLogger")("rtc_www").info(
            "Declining ring: ",
            (e = d.model) == null ? void 0 : e.ringID
          );
          d.ringPayload.onDecline(a, b);
          this.dismiss();
          return;
        }
      };
      return b;
    })(c("BaseEventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "delegateZenonCallInviteModel",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      (a.getCurrentInvite = b.getCurrentInvite.bind(b)),
        (a.startListening = b.startListening.bind(b)),
        (a.stopListening = b.stopListening.bind(b)),
        (a.dismiss = b.dismiss.bind(b)),
        (a.accept = b.accept.bind(b)),
        (a.decline = b.decline.bind(b)),
        b.addListener("callInvite", function (b) {
          a.emit("callInvite", b);
        });
    }
    f["default"] = a;
  },
  66
);
__d(
  "ZenonCallWindowController",
  ["FBLogger", "Promise", "ZenonCallWindowErrors"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        var c = b.callWindowInitializerResource,
          d = b.callWindowOpener;
        b = b.uriBuilderResource;
        this.$2 = null;
        this.$3 = !1;
        this.$5 = null;
        this.$1 = a;
        this.$7 = b;
        this.$4 = c;
        this.$6 = d;
      }
      var e = a.prototype;
      e.initCall = function (a) {
        var e = this;
        if (this.$3)
          throw new (d("ZenonCallWindowErrors").OpeningAnotherCallError)();
        try {
          if (
            this.$2 &&
            !this.$2.closed &&
            a.joinContext.type === "thread" &&
            this.$2.inCallWith === a.joinContext.thread.id
          ) {
            this.$2.focus();
            return [this.$2, b("Promise").resolve({ alohaEscalatedMW: !1 })];
          }
        } catch (a) {
          c("FBLogger")("rtc_www")
            .catching(a)
            .warn("Failed to access inCallWith on call window");
        }
        var f = this.$6.openWindow(a);
        try {
          this.$2 && (this.$2.closed || this.$2.close(), (this.$2 = null));
        } catch (a) {
          c("FBLogger")("rtc_www")
            .catching(a)
            .warn("Failed to access close on call window");
        }
        this.$2 = f;
        this.$3 = !0;
        return [
          f,
          b("Promise")
            .all([this.$7.load(), this.$4.load()])
            .then(function (b) {
              var c = b[0];
              b = b[1];
              e.$5 === null && (e.$5 = new b(e.$1, new c(e.$1)));
              return e.$5.initCall(e.$2, a);
            })
            ["finally"](function () {
              e.$3 = !1;
            }),
        ];
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "CometWatchAndScrollContextSection.react",
  [
    "CometLink.react",
    "CometRelay",
    "CometWatchAndScrollContextSection_video.graphql",
    "TetraProfilePhoto.react",
    "TetraText.react",
    "XCometVideoHomePlaylistControllerRouteBuilder",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef(
        "CometWatchAndScrollContextSection.react"
      );
    function a(a) {
      var e;
      a = a.video;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometWatchAndScrollContextSection_video.graphql")),
        a
      );
      var f = a == null ? void 0 : a.owner;
      if (a == null || f == null) return null;
      var g = f.id,
        k = f.name,
        l = f.url;
      e = (e = f.profile_picture) == null ? void 0 : e.uri;
      var m = "#";
      f.has_professional_features_for_watch === !0
        ? (m = c("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({
            idorvanity: g,
          }))
        : l != null && (m = l);
      return i.jsxs("div", {
        className: "j83agx80 bp9cbjyn",
        children: [
          i.jsx("div", {
            className: "oi9244e8",
            children: i.jsx(c("TetraProfilePhoto.react"), {
              "aria-label": k != null && k !== "" ? k : m,
              linkProps: { url: m },
              onPress: function () {
                j.onReady(function (a) {
                  a.log({
                    click_point: "actor_profile_picture",
                    click_target: "watch_and_scroll_end_screen",
                    event: "click",
                  });
                });
              },
              size: 32,
              source: { uri: e || "" },
            }),
          }),
          i.jsxs("div", {
            className: "hpfvmrgz",
            children: [
              k != null &&
                k !== "" &&
                i.jsx(c("CometLink.react"), {
                  color: "secondary",
                  href: m,
                  onClick: function () {
                    j.onReady(function (a) {
                      a.log({
                        click_point: "actor_name",
                        click_target: "watch_and_scroll_end_screen",
                        event: "click",
                      });
                    });
                  },
                  children: i.jsx(c("TetraText.react"), {
                    color: "secondary",
                    numberOfLines: 1,
                    type: "meta4",
                    children: k,
                  }),
                }),
              i.jsx("div", {
                className: "aahdfvyu",
                children: i.jsx(c("TetraText.react"), {
                  color: "primary",
                  numberOfLines: 1,
                  type: "headlineEmphasized4",
                  children: a == null ? void 0 : a.title_with_fallback,
                }),
              }),
            ],
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
  "CometWatchAndScrollActionButton.react",
  ["CometPressable.react", "TetraIcon.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.icon,
        d = a.label,
        e = a.onPress,
        f = a.testid;
      f = a.url;
      return h.jsxs("div", {
        className:
          "etr7akla l9j0dhe7 ozuftl9m n851cfcs tvfksri0 n1l5q3vz taijpn5t cbu4d94t j83agx80 bp9cbjyn",
        "data-testid": void 0,
        children: [
          h.jsx("div", {
            className:
              "h4z51re5 osnr6wyh rv4hoivh jktsbyx5 n851cfcs spb7xbtv bkmhp75w emlxlaya s45kfl79 kozd3uwk moy3fgm5 jsrkvy3z gag4i7dh",
            children: h.jsx(c("CometPressable.react"), {
              "aria-label": d,
              linkProps: { url: f },
              onPress: e,
              children: h.jsx(c("TetraIcon.react"), {
                "aria-label": d,
                color: "white",
                hideHoverOverlay: !0,
                icon: b,
              }),
            }),
          }),
          h.jsx(c("CometPressable.react"), {
            linkProps: { url: f },
            onPress: e,
            children: h.jsx(c("TetraText.react"), {
              align: "center",
              color: "white",
              type: "bodyLink4",
              children: d,
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
  "CometWatchAndScrollFallbackCTAScreen.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "CometSetWatchAndScrollVideoContext",
    "CometWatchAndScrollActionButton.react",
    "CometWatchAndScrollFallbackCTAScreen_video.graphql",
    "VideoPlayerHooks",
    "VideoPlayerReshareButton.react",
    "XCometWatchControllerRouteBuilder",
    "fbicon",
    "react",
    "requireDeferred",
    "useCometRouterState",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useContext,
      m = c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef(
        "CometWatchAndScrollFallbackCTAScreen.react"
      );
    function a(a) {
      var e = a.setIsCanceled;
      a = a.video;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometWatchAndScrollFallbackCTAScreen_video.graphql")),
        a
      );
      var f = d("VideoPlayerHooks").useController(),
        g = c("useCometRouterState")();
      g = g == null ? void 0 : g.main.route.tabKey;
      g = g !== "watch";
      var n = l(c("CometSetWatchAndScrollVideoContext")),
        o = function (a) {
          m.onReady(function (b) {
            b.log({
              click_point: a,
              click_target: "watch_and_scroll_end_screen",
              event: "click",
            });
          });
        };
      return k.jsx("div", {
        className:
          "fl8dtwsd gbhij3x4 tkv8g59h dsae2hpk taijpn5t j83agx80 kzizifcz c6a7hszh bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
        children: k.jsxs("div", {
          className: "taijpn5t btwxx1t3 j83agx80 ll8tlv6m",
          children: [
            g &&
              k.jsx(c("CometWatchAndScrollActionButton.react"), {
                icon: d("fbicon")._(i("607168"), 16),
                label: h._("More Videos on Watch"),
                onPress: function () {
                  n(null), o("watch_button");
                },
                url: c("XCometWatchControllerRouteBuilder").buildURL({}),
              }),
            k.jsx(c("CometWatchAndScrollActionButton.react"), {
              icon: d("fbicon")._(i("534218"), 16),
              label: h._("Replay video"),
              onPress: function () {
                f.play("user_initiated"), e(!1), o("replay");
              },
            }),
            a != null &&
              k.jsx(c("VideoPlayerReshareButton.react"), {
                renderActionButton: function (a) {
                  var b = a.onPress;
                  return k.jsx(c("CometWatchAndScrollActionButton.react"), {
                    icon: d("fbicon")._(i("484394"), 16),
                    label: h._("Share"),
                    onPress: function () {
                      b(), o("share_button");
                    },
                  });
                },
                video: a,
              }),
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
  "CometWatchAndScrollUpNextCard.react",
  [
    "fbt",
    "CometLink.react",
    "CometRelay",
    "CometResponsiveColumns.react",
    "CometTahoeEndScreenProgressCircle.react",
    "CometWatchAndScrollUpNextCard_video.graphql",
    "TetraText.react",
    "VideoPlayerHooks",
    "qex",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = {
        backgroundThumbnail: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          backgroundPosition: "skiu6z9h",
          backgroundSize: "r4lidvzm",
          borderTopStartRadius: "jk6sbkaj",
          borderTopEndRadius: "kdgqqoy6",
          borderBottomEndRadius: "ihh4hy1g",
          borderBottomStartRadius: "qttc61fc",
        },
        cardRoot: {
          backgroundColor: "cwj9ozl2",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          bottom: "mio9le5o",
          display: "j83agx80",
          end: "n7fi1qx3",
          marginTop: "aov4n071",
          marginEnd: "oi9244e8",
          marginBottom: "bi6gxh9e",
          marginStart: "h676nmdw",
          paddingTop: "cxgpxx05",
          paddingEnd: "dflh9lhu",
          paddingBottom: "sj5x9vvc",
          paddingStart: "scb9dxdr",
          position: "pmk7jnqg",
          start: "j9ispegn",
        },
        metaColumn: { flexBasis: "ovwxwvn6" },
        metadataContainer: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          marginBottom: "qzhwtbm6",
          marginTop: "knvmm38d",
        },
        previewContainer: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "pkqgeaxr",
          justifyContent: "taijpn5t",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          width: "e1e8jytk",
        },
        thumbnailColumn: { flexBasis: "cy3bvc1o" },
        upNextText: { marginBottom: "dicw6rsg" },
        videoMetaText: { marginTop: "aov4n071" },
      },
      l = 6;
    function a(a) {
      var e,
        f,
        g = a.hidden,
        m = a.onNextVideo;
      a = a.video;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometWatchAndScrollUpNextCard_video.graphql")),
        a
      );
      var n = d("VideoPlayerHooks").useEnded();
      if (a == null) return null;
      e = (e = c("qex")._("1795765")) != null ? e : l;
      f = (f = a.image) == null ? void 0 : f.uri;
      f =
        f != null
          ? { backgroundImage: "url(" + f + ")" }
          : { backgroundColor: "var(--disabled-icon)" };
      f = j.jsx("div", {
        className: c("stylex")(k.backgroundThumbnail),
        style: f,
      });
      var o = a.title_with_fallback;
      a = (a = a.owner) == null ? void 0 : a.name;
      return j.jsx("div", {
        className: c("stylex")(k.cardRoot),
        children: j.jsxs(d("CometResponsiveColumns.react").Container, {
          children: [
            j.jsx(d("CometResponsiveColumns.react").Column, {
              xstyle: k.thumbnailColumn,
              children: j.jsxs("div", {
                className: c("stylex")(k.previewContainer),
                children: [
                  f,
                  m &&
                    j.jsx(c("CometLink.react"), {
                      onClick: function () {
                        return m("watch_and_scroll_chaining_click_advance");
                      },
                      children: j.jsx(
                        c("CometTahoeEndScreenProgressCircle.react"),
                        {
                          circleDiameter: 32,
                          circleStrokeColor: "var(--base-blue)",
                          circleStrokeWidth: 3,
                          iconSize: 20,
                          isMakingProgress: !g && n,
                          onProgressDone: function () {
                            return m("watch_and_scroll_chaining_auto_advance");
                          },
                          timeoutSec: e,
                        }
                      ),
                    }),
                ],
              }),
            }),
            j.jsx(d("CometResponsiveColumns.react").Column, {
              xstyle: k.metaColumn,
              children: j.jsxs("div", {
                className: c("stylex")(k.metadataContainer),
                children: [
                  j.jsx("div", {
                    className: c("stylex")(k.upNextText),
                    children: j.jsx(c("TetraText.react"), {
                      color: "secondary",
                      type: "meta4",
                      children: h._("UP NEXT"),
                    }),
                  }),
                  j.jsx("div", {
                    className: c("stylex")(k.videoMetaText),
                    children: j.jsx(c("TetraText.react"), {
                      color: "secondary",
                      numberOfLines: 1,
                      type: "body4",
                      children: a,
                    }),
                  }),
                  j.jsx("div", {
                    className: c("stylex")(k.videoMetaText),
                    children: j.jsx(c("TetraText.react"), {
                      color: "primary",
                      numberOfLines: 1,
                      type: "bodyLink4",
                      children: o,
                    }),
                  }),
                ],
              }),
            }),
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
  "CometWatchAndScrollChaining.react",
  [
    "fbt",
    "ix",
    "CometBackgroundImage.react",
    "CometPressable.react",
    "CometRelay",
    "CometSetWatchAndScrollVideoContext",
    "CometTahoeEndScreenProgressCircle.react",
    "CometTheme.react",
    "CometWatchAndScrollChainingQuery.graphql",
    "CometWatchAndScrollContextSection.react",
    "CometWatchAndScrollFallbackCTAScreen.react",
    "CometWatchAndScrollSetStoryViewabilityLoggerContext",
    "CometWatchAndScrollUpNextCard.react",
    "CometWatchAndScrollVideoContext",
    "TetraIcon.react",
    "TetraText.react",
    "VideoPlayerHooks",
    "WebPixelRatio",
    "fbicon",
    "qex",
    "react",
    "requireDeferred",
    "useCometTahoeChainingDepth",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useState,
      p = c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef(
        "CometWatchAndScrollChaining.react"
      ),
      q = 6;
    function a(a) {
      var e,
        f = a.hidden,
        g = a.routeTracePolicy,
        r = a.seedVideoID,
        s = a.subOrigin,
        t = m(c("CometWatchAndScrollVideoContext"));
      a = t == null ? void 0 : t.chainingCursor;
      var u = !!c("qex")._("221");
      a = d("CometRelay").useLazyLoadQuery(
        j !== void 0 ? j : (j = b("CometWatchAndScrollChainingQuery.graphql")),
        {
          caller: "WNS",
          chainingCursor: a,
          channelEntryPoint: "WNS",
          count: 1,
          scale: d("WebPixelRatio").get(),
          seedVideoID: r,
        }
      );
      var v = d("useCometTahoeChainingDepth").useChainingDepthContext(),
        w = v.chainingDepthDispatch;
      v = o(!1);
      var x = v[0],
        y = v[1],
        z = d("VideoPlayerHooks").useController(),
        A = m(c("CometSetWatchAndScrollVideoContext"));
      v =
        (v = a.video) == null
          ? void 0
          : (v = v.video_channel) == null
          ? void 0
          : (v = v.video_channel_feed) == null
          ? void 0
          : (v = v.edges) == null
          ? void 0
          : v[0];
      var B = v == null ? void 0 : v.cursor,
        C = v == null ? void 0 : v.node;
      v =
        C == null
          ? void 0
          : (v = C.attachments) == null
          ? void 0
          : (v = v[0]) == null
          ? void 0
          : v.media;
      var D =
        v != null && v.__typename === "Video"
          ? v == null
            ? void 0
            : v.id
          : null;
      n(
        function () {
          !f &&
            !x &&
            p.onReady(function (a) {
              a.log({ event: "watch_and_scroll_end_screen_impression" });
            });
        },
        [f, x]
      );
      var E = m(c("CometWatchAndScrollSetStoryViewabilityLoggerContext")),
        F = l(
          function (a) {
            p.onReady(function (b) {
              b.log({ event: a });
            }),
              A({
                chainingCursor: B,
                chainingSeedVideoID: r,
                routeTracePolicy: g,
                sessionStartTime: t == null ? void 0 : t.sessionStartTime,
                sessionTrigger: t == null ? void 0 : t.sessionTrigger,
                subOrigin: s,
                videoID: D,
              }),
              E({
                clientViewConfig: C == null ? void 0 : C.client_view_config,
                encryptedTracking: C == null ? void 0 : C.encrypted_tracking,
                trackingCode: {
                  click_tracking_linkshim_cb:
                    (C == null ? void 0 : C.click_tracking_linkshim_cb) || "",
                  encrypted_click_tracking:
                    (C == null ? void 0 : C.encrypted_click_tracking) || "",
                  encrypted_tracking:
                    (C == null ? void 0 : C.encrypted_tracking) || "",
                },
                videoID: D,
                viewabilityConfig: C == null ? void 0 : C.viewability_config,
              });
          },
          [
            D,
            B,
            g,
            r,
            E,
            A,
            C == null ? void 0 : C.click_tracking_linkshim_cb,
            C == null ? void 0 : C.client_view_config,
            C == null ? void 0 : C.encrypted_click_tracking,
            C == null ? void 0 : C.encrypted_tracking,
            C == null ? void 0 : C.viewability_config,
            s,
            t == null ? void 0 : t.sessionStartTime,
            t == null ? void 0 : t.sessionTrigger,
          ]
        );
      if (x)
        return k.jsx(c("CometWatchAndScrollFallbackCTAScreen.react"), {
          setIsCanceled: y,
          video: a == null ? void 0 : a.video,
        });
      if (v == null || v.__typename !== "Video") {
        p.onReady(function (a) {
          a.log({ event: "watch_and_scroll_chaining_query_empty" });
        });
        return k.jsx(c("CometWatchAndScrollFallbackCTAScreen.react"), {
          setIsCanceled: y,
          video: a == null ? void 0 : a.video,
        });
      }
      a = (a = v.image) == null ? void 0 : a.uri;
      e = (e = c("qex")._("1795765")) != null ? e : q;
      var G = function () {
          y(!0),
            p.onReady(function (a) {
              a.log({
                click_point: "cancel_button",
                click_target: "watch_and_scroll_end_screen",
                event: "click",
              });
            });
        },
        H = function () {
          z.play("user_initiated"),
            p.onReady(function (a) {
              a.log({
                click_point: "replay",
                click_target: "watch_and_scroll_end_screen",
                event: "click",
              });
            });
        },
        I = h._("Replay");
      return u
        ? k.jsx(c("CometWatchAndScrollUpNextCard.react"), {
            hidden: f,
            onNextVideo: function (a) {
              F(a), w && w({ type: "INCREMENT" });
            },
            video: v,
          })
        : k.jsx(c("CometTheme.react"), {
            theme: "dark",
            children: k.jsxs("div", {
              className:
                "kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
              children: [
                k.jsx("div", {
                  className:
                    "kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
                  children:
                    a != null &&
                    k.jsx(c("CometBackgroundImage.react"), { src: a }),
                }),
                k.jsxs("div", {
                  className:
                    "h4z51re5 osnr6wyh rv4hoivh jktsbyx5 cbu4d94t j83agx80 c6a7hszh kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
                  children: [
                    k.jsx("div", {
                      className: "oud54xpy",
                      children: k.jsx(c("TetraText.react"), {
                        color: "white",
                        type: "body3",
                        children: h._("UP NEXT FROM WATCH"),
                      }),
                    }),
                    k.jsx(c("CometWatchAndScrollContextSection.react"), {
                      video: v,
                    }),
                    k.jsxs("div", {
                      className: "km676qkl j83agx80 bp9cbjyn",
                      children: [
                        k.jsx("div", {
                          className: "oi9244e8",
                          children: k.jsx(c("TetraIcon.react"), {
                            "aria-label": I,
                            color: "white",
                            icon: d("fbicon")._(i("534219"), 20),
                            onPress: H,
                          }),
                        }),
                        k.jsx(c("CometPressable.react"), {
                          onPress: H,
                          children: k.jsx(c("TetraText.react"), {
                            color: "white",
                            type: "bodyLink4",
                            children: I,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                k.jsx("div", {
                  className:
                    "hzruof5a taijpn5t cbu4d94t j83agx80 bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
                  children: k.jsxs("div", {
                    className: "oqq733wu jei6r52m",
                    children: [
                      !f &&
                        k.jsx(c("CometPressable.react"), {
                          "aria-label": h._("Play next video"),
                          onPress: function () {
                            F("watch_and_scroll_chaining_click_advance"),
                              w && w({ type: "INCREMENT" });
                          },
                          children: k.jsx(
                            c("CometTahoeEndScreenProgressCircle.react"),
                            {
                              circleDiameter: 44,
                              circleStrokeColor: "var(--base-blue)",
                              circleStrokeWidth: 3,
                              iconSize: 20,
                              isMakingProgress: !f,
                              onProgressDone: function () {
                                F("watch_and_scroll_chaining_auto_advance"),
                                  w && w({ type: "INCREMENT" });
                              },
                              timeoutSec: e,
                            }
                          ),
                        }),
                      k.jsx("div", {
                        className: "ku2m03ct",
                        children: k.jsx(c("CometPressable.react"), {
                          onPress: G,
                          children: k.jsx(c("TetraText.react"), {
                            color: "secondary",
                            type: "bodyLink4",
                            children: h._("Cancel"),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
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
  "VideoPlayerWithWatchAndScrollChaining.react",
  [
    "CometLoadingAnimation.react",
    "CometPlaceholder.react",
    "CometWatchAndScrollChaining.react",
    "CometWatchAndScrollVideoContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var b = a.hidden,
        d = a.routeTracePolicy;
      a = a.subOrigin;
      var e = i(c("CometWatchAndScrollVideoContext"));
      e = e == null ? void 0 : e.chainingSeedVideoID;
      return e == null
        ? null
        : h.jsx(c("CometPlaceholder.react"), {
            fallback: h.jsx("div", {
              className:
                "taijpn5t j83agx80 c6a7hszh bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
              children: h.jsx("div", {
                className: "thwo4zme l9j0dhe7 tv7at329",
                children: h.jsx(c("CometLoadingAnimation.react"), { size: 36 }),
              }),
            }),
            children: h.jsx(c("CometWatchAndScrollChaining.react"), {
              hidden: b,
              routeTracePolicy: d,
              seedVideoID: e,
              subOrigin: a,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWithWatchAndScrollSoundContext.react",
  [
    "CometWatchAndScrollSoundContext",
    "VideoPlayerHooks",
    "react",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a() {
      var a = h(c("CometWatchAndScrollSoundContext")),
        b = d("VideoPlayerHooks").useController(),
        e = d("VideoPlayerHooks").useMuted(),
        f = d("VideoPlayerHooks").useVolume(),
        g = d("VideoPlayerHooks").usePaused(),
        k = c("usePrevious")(e),
        l = c("usePrevious")(f),
        m = j(e),
        n = j(f);
      i(
        function () {
          k !== null && k !== e && a.setMuted(e),
            l !== null && l !== f && a.setVolume(f);
        },
        [e, k, l, a, f]
      );
      i(
        function () {
          g ||
            (a.muted == null && a.setMuted(m.current),
            a.volume == null && a.setVolume(n.current));
        },
        [g, a]
      );
      i(
        function () {
          if (!g) {
            var c = a.muted,
              d = a.volume;
            c != null && b.setMuted(c, "user_initiated");
            d != null && b.setVolume(d);
          }
        },
        [b, g, a]
      );
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWithWatchAndScrollWarningScreen.react",
  [
    "CometRelay",
    "CometWarningScreenContext",
    "VideoPlayerHooks",
    "VideoPlayerWithWatchAndScrollWarningScreen_video.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useEffect;
    function a(a) {
      var c, e;
      a = a.video;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("VideoPlayerWithWatchAndScrollWarningScreen_video.graphql")),
        a
      );
      var f = d("VideoPlayerHooks").useController(),
        g = d("VideoPlayerHooks").usePaused(),
        k = d("VideoPlayerHooks").useEnded(),
        l = d("CometWarningScreenContext").useSetOverlayExists(),
        m = d("CometWarningScreenContext").useShowOverlay(),
        n = d("CometWarningScreenContext").useIsOverlayShown();
      c =
        a == null ? void 0 : (c = a.cix_screen) == null ? void 0 : c.view_model;
      var o = c != null;
      e =
        (e =
          a == null
            ? void 0
            : (e = a.preferred_thumbnail) == null
            ? void 0
            : (e = e.image) == null
            ? void 0
            : e.uri) != null
          ? e
          : "#";
      var p = a == null ? void 0 : a.id;
      a = a == null ? void 0 : (a = a.container_story) == null ? void 0 : a.id;
      j(
        function () {
          o && (l(!0), m(!0));
        },
        [f, l, m, o]
      );
      j(
        function () {
          !g && n && f.pause("warning_screen_cover");
        },
        [f, n, g]
      );
      return o && !k
        ? i.jsx(d("CometRelay").MatchContainer, {
            match: c,
            props: {
              alwaysShowDetails: !0,
              contentID: p,
              data: c,
              mediaUri: e,
              storyID: a,
              surface: "video_channel",
            },
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCastControlLazy.react",
  [
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("VideoPlayerCastControl.react").__setRef(
          "VideoPlayerCastControlLazy.react"
        )
      );
    function a(a) {
      a = a.subOrigin;
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: h.jsx(i, { subOrigin: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerJoinOnPortalControl.react",
  ["cr:1795495", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function (a) {
      a = a.isVisible;
      return !a || b("cr:1795495") == null ? null : h.jsx(b("cr:1795495"), {});
    };
    c = a;
    g["default"] = c;
  },
  98
);
__d(
  "VideoPlayerQuietModeControl.react",
  [
    "fbt",
    "ix",
    "CometTahoeSidePaneContext",
    "VideoPlayerControlIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a() {
      var a = k(c("CometTahoeSidePaneContext")),
        b = a.rightRailHidden,
        e = a.setRightRailHidden;
      a = b
        ? h._("Show comments and reactions")
        : h._("Hide comments and reactions");
      return j.jsx("div", {
        className: "ggphbty4 w0hvl6rk fv0vnmcu qjjbsfad q9uorilb",
        children: j.jsx(c("VideoPlayerControlIcon.react"), {
          icon: b
            ? d("fbicon")._(i("942218"), 20)
            : d("fbicon")._(i("942221"), 20),
          label: a,
          onPress: function () {
            e(!b);
          },
          tooltip: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerWatchAndScrollControlNUX",
  [
    "fbt",
    "CometRelay",
    "CometWatchAndScrollTriggerContext",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "useCometCallout",
    "useVideoPlayerWatchAndScrollControlNUXQuery.graphql",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useState,
      n = c("requireDeferred")("CometDismissFBNuxMutation").__setRef(
        "useVideoPlayerWatchAndScrollControlNUX"
      ),
      o = c("requireDeferred")("CometLogImpressionFBNuxMutation").__setRef(
        "useVideoPlayerWatchAndScrollControlNUX"
      ),
      p = { nux: { maxWidth: "nqmqzb3c" } },
      q = 9347,
      r =
        i !== void 0
          ? i
          : (i = b("useVideoPlayerWatchAndScrollControlNUXQuery.graphql"));
    function a(a) {
      var b = k(c("CometWatchAndScrollTriggerContext")),
        e = b.setIsTriggerDisabled;
      b = m(null);
      var f = b[0],
        g = b[1],
        i = d("CometRelay").useRelayEnvironment(),
        s = j(
          function () {
            e != null && e(!0),
              g(!1),
              n.onReady(function (a) {
                a.commit(i, q);
              });
          },
          [i, e]
        );
      l(
        function () {
          if (a && f === null) {
            var b = d("CometRelay")
              .fetchQuery(i, r, { fetchPolicy: "store-or-network" })
              .subscribe({
                next: function (b) {
                  b =
                    (b == null
                      ? void 0
                      : (b = b.nux) == null
                      ? void 0
                      : b.should_show) || !1;
                  g(b);
                  b &&
                    a &&
                    o.onReady(function (a) {
                      a.commit(
                        i,
                        q,
                        function () {},
                        function () {
                          c("recoverableViolation")(
                            "logimpression fb nux mutation failed for video player watch and scroll control.",
                            "watch_www_bug_rotation"
                          );
                        }
                      );
                    });
                },
              });
            return function () {
              b.unsubscribe();
            };
          }
        },
        [i, a, f]
      );
      b = {
        align: "end",
        arrowStyle: "inset",
        disableAutoFlip: !0,
        hasCloseButton: !0,
        label: h._("Continue watching while you browse Facebook."),
        onClose: function () {
          s();
        },
        onHide: function () {
          g(!1);
        },
        position: "below",
        type: "accent",
        xstyle: p.nux,
      };
      b = c("useCometCallout")(b, (f === !0 && a) || !1);
      return { handleDismissNUX: s, nuxRef: b, shouldShowNUX: f };
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWatchAndScrollControl.react",
  [
    "fbt",
    "ix",
    "CastingStateHooks",
    "CometRelay",
    "CometRouteRenderType",
    "CometWatchAndScrollControlNUXContext",
    "CometWatchAndScrollTriggerContext",
    "JSResourceForInteraction",
    "VideoPlayerControlIcon.react",
    "VideoPlayerHooks",
    "VideoPlayerInstreamAdsStateHooks",
    "VideoPlayerWatchAndScrollControl_video.graphql",
    "VideoPlayerWithWatchAndScrollTrigger.react",
    "emptyFunction",
    "fbicon",
    "gkx",
    "qex",
    "react",
    "requireDeferred",
    "useCometLazyDialog",
    "useCometRouterDispatcher",
    "useCometRouterState",
    "useIsVideoHomePlayerOriginFromTracePolicy",
    "usePlayerOriginRouteTracePolicy",
    "useVideoPlayerWatchAndScrollControlNUX",
    "useWatchAndScrollTrigger",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useState,
      p = c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef(
        "VideoPlayerWatchAndScrollControl.react"
      ),
      q = c("JSResourceForInteraction")(
        "CometCastingStopWatchAndScrollDialog.react"
      ).__setRef("VideoPlayerWatchAndScrollControl.react"),
      r = 6e4,
      s = 10;
    function a(a) {
      var e = a.subOrigin;
      a = a.video;
      var f = m(c("CometWatchAndScrollTriggerContext")),
        g = f.isControlShown,
        t = f.setIsControlShown;
      f = d("CometRouteRenderType").useIsPushView();
      var u = d("VideoPlayerHooks").useIsFullscreen(),
        v = c("useCometRouterDispatcher")(),
        w = c("useCometRouterState")(),
        x =
          (w = w == null ? void 0 : w.main.route.tabKey) != null
            ? w
            : "undefined";
      w = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("VideoPlayerWatchAndScrollControl_video.graphql")),
        a
      );
      var y = w == null ? void 0 : w.id;
      a = (a = w == null ? void 0 : w.playable_duration_in_ms) != null ? a : 0;
      n(
        function () {
          t != null && t(!0);
        },
        [t]
      );
      var z = c("usePlayerOriginRouteTracePolicy")(),
        A = c("useIsVideoHomePlayerOriginFromTracePolicy")(z);
      w =
        (w == null
          ? void 0
          : (w = w.owner) == null
          ? void 0
          : w.has_professional_features_for_watch) === !0 &&
        a >= r &&
        g &&
        !A;
      var B = d("VideoPlayerHooks").usePlaying(),
        C = d("VideoPlayerHooks").useController();
      a = C.getPlayheadPosition();
      A = (g = c("qex")._("1942215")) != null ? g : s;
      var D = a >= A;
      g = o(!1);
      a = g[0];
      var E = g[1];
      A = c("gkx")("3017");
      g = d("VideoPlayerInstreamAdsStateHooks").useInstreamAdsStateValue();
      g =
        g === "STARTING_INDICATOR" ||
        g === "PLAY_NI_VIDEO" ||
        g === "START_AD" ||
        g === "PLAY_LONGER_AD";
      n(
        function () {
          B && D && E(!0);
        },
        [D, B]
      );
      var F = d("CastingStateHooks").useIsCastingAnyVideo(),
        G = c("useCometLazyDialog")(q),
        H = G[0];
      G = !g && a && w && c("gkx")("1910721");
      g = c("useVideoPlayerWatchAndScrollControlNUX")(G);
      var I = g.handleDismissNUX;
      a = g.nuxRef;
      w = g.shouldShowNUX;
      var J = w === !0 && G;
      g = m(c("CometWatchAndScrollControlNUXContext"));
      var K = g.setIsVideoPlayerWatchAndScrollControlNUXVisible;
      n(
        function () {
          K && K(J);
        },
        [J, K]
      );
      var L = d("useWatchAndScrollTrigger").useWatchAndScrollTrigger(
          e,
          d("VideoPlayerWithWatchAndScrollTrigger.react")
            .WatchAndScrollTriggerType.WNS_CONTROL,
          y
        ),
        M = z === "comet.videos.tahoe",
        N = l(
          function () {
            F && y != null
              ? H(
                  {
                    onClose: c("emptyFunction"),
                    onContinue: L,
                    startingVideoType: "wns",
                  },
                  c("emptyFunction")
                )
              : L();
          },
          [F, L, H, y]
        );
      w = l(
        function () {
          N(),
            p.onReady(function (a) {
              a.log({
                click_point: "control_watch_and_scroll",
                event: "click",
                event_target_info: x,
              });
            }),
            J === !0 && I(),
            v && v.popPushView && v.popPushView();
        },
        [N, J, v, x, I]
      );
      var O = e === "live_producer";
      G = l(
        function () {
          N(),
            p.onReady(function (a) {
              a.log({
                click_point: "control_watch_and_scroll",
                event: "click",
                event_target_info: x,
              });
            }),
            J === !0 && I(),
            u && C.requestSetIsFullscreen(!1),
            v != null && (O || M) && v.go("/", {});
        },
        [N, J, u, x, I, C, v, O, M]
      );
      g = f ? w : G;
      z = c("gkx")("1224637")
        ? h._("Continue watching while you use Workplace")
        : h._("Continue watching while you browse Facebook.");
      return k.jsx("div", {
        ref: a,
        children: k.jsx(c("VideoPlayerControlIcon.react"), {
          color: "white",
          icon: A
            ? d("fbicon")._(i("150489"), 20)
            : d("fbicon")._(i("1414201"), 20),
          label: z,
          onPress: g,
          tooltip: J ? null : z,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerLiveVideoControls.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "LiveCostreamerTagSubscription.react",
    "LiveVideoLatencyMenu.react",
    "PlaybackSpeedExperiments",
    "VideoPlayerCastControlLazy.react",
    "VideoPlayerControlsBottomRowAddOnContext",
    "VideoPlayerControlsContainerOverlay.react",
    "VideoPlayerControlsGroups.react",
    "VideoPlayerHooks",
    "VideoPlayerJoinOnPortalControl.react",
    "VideoPlayerLiveVideoControls_video.graphql",
    "VideoPlayerPlaybackControl.react",
    "VideoPlayerQuietModeControl.react",
    "VideoPlayerSettingsControl.react",
    "VideoPlayerVolumeControl.react",
    "VideoPlayerWatchAndScrollControl.react",
    "cr:1809777",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext,
      k = d("PlaybackSpeedExperiments").isInCometHeadroomTest()
        ? b("cr:1809777")
        : null,
      l =
        h !== void 0
          ? h
          : (h = b("VideoPlayerLiveVideoControls_video.graphql"));
    function m(a) {
      var b,
        e,
        f = d("CometRelay").useFragment(l, a.video),
        g = d("VideoPlayerHooks").useEnded(),
        h = d("VideoPlayerHooks").useIsFullscreen(),
        m = j(
          d("VideoPlayerControlsBottomRowAddOnContext")
            .VideoPlayerControlsBottomRowAddOnContext
        );
      if (g) return null;
      g = a.disablePlaybackControls;
      var n = a.expandControl,
        o = a.isControlsVisible,
        p = a.isExpandControlVisible;
      p = p === void 0 ? !1 : p;
      var q = a.isVolumeControlVisible,
        r = a.isWatchAndScrollControlVisible;
      r = r === void 0 ? !1 : r;
      var s = a.onUserInteraction,
        t = a.shouldRenderCostreamControl;
      t = t === void 0 ? !1 : t;
      var u = a.shouldRenderModeratorControl;
      u = u === void 0 ? !1 : u;
      var v = a.subOrigin,
        w = f == null ? void 0 : f.id;
      b = f == null ? void 0 : (b = f.owner) == null ? void 0 : b.id;
      var x = f == null ? void 0 : f.if_viewer_can_see_costreaming_tools,
        y = x != null,
        z = f == null ? void 0 : f.if_viewer_can_use_live_clipping,
        A = (f == null ? void 0 : f.is_clipping_enabled) === !0,
        B = f == null ? void 0 : f.if_viewer_can_see_community_moderation_tools,
        C = B != null,
        D = f == null ? void 0 : f.if_viewer_can_use_live_rewind;
      e =
        ((e = f == null ? void 0 : f.live_rewind_enabled) != null ? e : !1) &&
        a.shouldHideRewindControls !== !0;
      p = p || o || g;
      r = r || o || g;
      p = i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: p,
        noPaddingEnd: !0,
        noPaddingStart: !0,
        children: n,
      });
      n =
        a.shouldRenderWatchAndScrollControl === !0 && v != null && f != null
          ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
              isVisible: r,
              children: i.jsx(c("VideoPlayerWatchAndScrollControl.react"), {
                subOrigin: v,
                video: f,
              }),
            })
          : null;
      return i.jsxs(c("VideoPlayerControlsContainerOverlay.react"), {
        isBackgroundVisible: o,
        children: [
          e
            ? i.jsx(d("CometRelay").MatchContainer, {
                match: D,
                props: {
                  isControlsVisible: o && !g,
                  onUserInteraction: s,
                  video: D,
                },
              })
            : i.jsxs(i.Fragment, {
                children: [
                  Boolean(a.shouldRenderPauseControl)
                    ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
                        isVisible: o && !g,
                        children: i.jsx(
                          c("VideoPlayerPlaybackControl.react"),
                          {}
                        ),
                      })
                    : null,
                  i.jsx(d("VideoPlayerControlsGroups.react").Expanded, {
                    children: i.jsx(i.Fragment, {}),
                  }),
                ],
              }),
          i.jsxs(d("VideoPlayerControlsGroups.react").Contracted, {
            isVisible: o,
            children: [
              b != null &&
                w != null &&
                i.jsx(c("LiveCostreamerTagSubscription.react"), {
                  pageID: b,
                  videoID: w,
                }),
              y &&
                t &&
                w != null &&
                !h &&
                i.jsx(c("CometPlaceholder.react"), {
                  fallback: null,
                  children: i.jsx(d("CometRelay").MatchContainer, {
                    match: x,
                    props: { video: x },
                  }),
                }),
              a.shouldRenderQuietModeControl === !0 &&
                !h &&
                i.jsx(c("VideoPlayerQuietModeControl.react"), {}),
              A &&
                w != null &&
                i.jsx(d("CometRelay").MatchContainer, {
                  match: z,
                  props: { video: z, videoID: w },
                }),
              C && u
                ? i.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: i.jsx(d("CometRelay").MatchContainer, {
                      match: B,
                      props: { video: B, videoID: w },
                    }),
                  })
                : null,
              g === !0
                ? null
                : i.jsx(c("CometTrackingNodeProvider.react"), {
                    trackingNode: 257,
                    children: i.jsx(
                      d("LiveVideoLatencyMenu.react")
                        .LiveVideoLatencyMenuContextProvider,
                      {
                        video: f,
                        children: i.jsx(c("VideoPlayerSettingsControl.react"), {
                          alignMenuToIcon:
                            (m == null ? void 0 : m.getBottomRowAddOn()) !=
                            null,
                          onUserInteraction: s,
                        }),
                      }
                    ),
                  }),
              k != null
                ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
                    isVisible: o,
                    children: i.jsx(k, { onUserInteraction: s }),
                  })
                : null,
              a.shouldRenderCastControl === !0 && v != null && f != null
                ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
                    isVisible: o && !g,
                    noPaddingEnd: !0,
                    noPaddingStart: !0,
                    children: i.jsx(c("CometPlaceholder.react"), {
                      fallback: null,
                      children: i.jsx(c("VideoPlayerCastControlLazy.react"), {
                        subOrigin: v,
                      }),
                    }),
                  })
                : null,
            ],
          }),
          c("gkx")("1910721")
            ? i.jsxs(i.Fragment, {
                children: [
                  p,
                  i.jsx(c("VideoPlayerJoinOnPortalControl.react"), {
                    isVisible: o,
                  }),
                  n,
                ],
              })
            : i.jsxs(i.Fragment, {
                children: [
                  n,
                  i.jsx(c("VideoPlayerJoinOnPortalControl.react"), {
                    isVisible: o,
                  }),
                  p,
                ],
              }),
          i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
            isVisible: q,
            noPaddingStart: !0,
            children: i.jsx(c("CometTrackingNodeProvider.react"), {
              trackingNode: 114,
              children: i.jsx(c("VideoPlayerVolumeControl.react"), {
                onUserInteraction: s,
              }),
            }),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      return i.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: i.jsx(m, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerDefaultControlsImplLive.react",
  [
    "CometRelay",
    "VideoPlayerDefaultControlsImplLive_video.graphql",
    "VideoPlayerLiveVideoControls.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.expandControl,
        f = a.isControlsVisible,
        g = a.isVolumeControlVisible,
        j = a.onUserInteraction,
        k = a.shouldHideRewindControls,
        l = a.shouldRenderCostreamControl,
        m = a.shouldRenderModeratorControl,
        n = a.shouldRenderPauseControl,
        o = a.shouldRenderQuietModeControl,
        p = a.shouldRenderWatchAndScrollControl,
        q = a.subOrigin,
        r = a.video;
      a = a.videoTahoeUrl;
      r = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("VideoPlayerDefaultControlsImplLive_video.graphql")),
        r
      );
      return i.jsx(c("VideoPlayerLiveVideoControls.react"), {
        expandControl: e,
        isControlsVisible: f,
        isVolumeControlVisible: g,
        onUserInteraction: j,
        shouldHideRewindControls: k,
        shouldRenderCostreamControl: l,
        shouldRenderModeratorControl: m,
        shouldRenderPauseControl: n,
        shouldRenderQuietModeControl: o,
        shouldRenderWatchAndScrollControl: p,
        subOrigin: q,
        video: r,
        videoTahoeUrl: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerDefaultControlsImplNotLive.react",
  [
    "CometRelay",
    "PlaybackSpeedExperiments",
    "VideoPlayerControlsContainerOverlay.react",
    "VideoPlayerControlsGroups.react",
    "VideoPlayerDefaultControlsImplNotLive_video.graphql",
    "VideoPlayerHooks",
    "VideoPlayerJoinOnPortalControl.react",
    "VideoPlayerPlaybackControl.react",
    "VideoPlayerPlaybackTimer.react",
    "VideoPlayerQuietModeControl.react",
    "VideoPlayerScrubberWithPreview.react",
    "VideoPlayerSettingsControl.react",
    "VideoPlayerVolumeControl.react",
    "VideoPlayerWatchAndScrollControl.react",
    "cr:1790881",
    "cr:1809777",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("PlaybackSpeedExperiments").isInCometHeadroomTest
        ? b("cr:1790881")
        : null,
      k = d("PlaybackSpeedExperiments").isInCometHeadroomTest
        ? b("cr:1809777")
        : null;
    function a(a) {
      var e = a.expandControl,
        f = a.isControlsVisible,
        g = a.isVolumeControlVisible,
        l = a.onUserInteraction,
        m = a.shouldRenderQuietModeControl;
      m = m === void 0 ? !1 : m;
      var n = a.shouldRenderWatchAndScrollControl,
        o = a.skipControl,
        p = a.subOrigin;
      a = a.video;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("VideoPlayerDefaultControlsImplNotLive_video.graphql")),
        a
      );
      var q = d("VideoPlayerHooks").useIsFullscreen();
      m =
        m === !0 && !q
          ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
              isVisible: f,
              noPaddingEnd: !0,
              children: i.jsx(c("VideoPlayerQuietModeControl.react"), {}),
            })
          : null;
      q = i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: f,
        noPaddingEnd: !0,
        noPaddingStart: m != null,
        children: i.jsx(c("VideoPlayerSettingsControl.react"), {
          onUserInteraction: l,
        }),
      });
      n =
        n === !0 && p != null && a != null
          ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
              isVisible: f,
              children: i.jsx(c("VideoPlayerWatchAndScrollControl.react"), {
                subOrigin: p,
                video: a,
              }),
            })
          : null;
      p = i.jsxs(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: f,
        noPaddingEnd: !0,
        children: [
          e,
          i.jsx(c("VideoPlayerJoinOnPortalControl.react"), { isVisible: f }),
        ],
      });
      e =
        k != null
          ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
              isVisible: !0,
              children: i.jsx(k, {
                enableNUX: d(
                  "PlaybackSpeedExperiments"
                ).enableCometPlaybackSpeedControlHeadroomTestNUX(),
                onUserInteraction: l,
              }),
            })
          : null;
      g = i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: k ? !0 : g,
        noPaddingStart: !0,
        children: i.jsx(c("VideoPlayerVolumeControl.react"), {
          onUserInteraction: l,
        }),
      });
      a = i.jsx(d("VideoPlayerControlsGroups.react").Expanded, {
        isVisible: f,
        children: i.jsx(c("VideoPlayerScrubberWithPreview.react"), {
          onUserInteraction: l,
          video: a,
        }),
      });
      o = i.jsxs(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: f,
        children: [
          i.jsx(c("VideoPlayerPlaybackControl.react"), {}),
          o,
          i.jsx(c("VideoPlayerPlaybackTimer.react"), {}),
          j != null
            ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
                isVisible: f,
                children: i.jsx(j, { onUserInteraction: l }),
              })
            : null,
        ],
      });
      return i.jsxs(c("VideoPlayerControlsContainerOverlay.react"), {
        isBackgroundVisible: f,
        children: [o, a, m, q, n, p, e, g],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerSkipControlBase.react",
  ["fbt", "ix", "VideoPlayerControlIcon.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      return j.jsx(c("VideoPlayerControlIcon.react"), {
        color: "white",
        disabled: a.disabled,
        icon: d("fbicon")._(i("1052613"), 20),
        label: h._("Skip"),
        onHoverIn: a.onHoverIn,
        onHoverOut: a.onHoverOut,
        onPress: a.onPress,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerSkipControl.react",
  [
    "CometRelay",
    "CometSetWatchAndScrollVideoContext",
    "CometWatchAndScrollSetStoryViewabilityLoggerContext",
    "CometWatchAndScrollUpNextCard.react",
    "CometWatchAndScrollVideoContext",
    "VideoPlayerHooks",
    "VideoPlayerSkipControlBase.react",
    "VideoPlayerSkipControl_video.graphql",
    "react",
    "requireDeferred",
    "useCometTahoeChainingDepth",
    "usePlayerOriginRouteTracePolicy",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useState,
      m = c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef(
        "VideoPlayerSkipControl.react"
      );
    function a(a) {
      var e = a.subOrigin;
      a = a.video;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("VideoPlayerSkipControl_video.graphql")),
        a
      );
      var f = d("useCometTahoeChainingDepth").useChainingDepthContext(),
        g = f.chainingDepthDispatch,
        n = k(c("CometWatchAndScrollVideoContext"));
      f = d("VideoPlayerHooks").useEnded();
      var o = k(c("CometWatchAndScrollSetStoryViewabilityLoggerContext")),
        p = k(c("CometSetWatchAndScrollVideoContext"));
      a =
        (a = a.video_channel) == null
          ? void 0
          : (a = a.video_channel_feed) == null
          ? void 0
          : (a = a.edges) == null
          ? void 0
          : a[0];
      var q = a == null ? void 0 : a.cursor,
        r = a == null ? void 0 : a.node,
        s = r == null ? void 0 : r.client_view_config;
      a =
        r == null
          ? void 0
          : (a = r.attachments) == null
          ? void 0
          : (a = a[0]) == null
          ? void 0
          : a.media;
      var t =
          a != null && a.__typename === "Video"
            ? a == null
              ? void 0
              : a.id
            : null,
        u = n == null ? void 0 : n.chainingSeedVideoID,
        v = c("usePlayerOriginRouteTracePolicy")(),
        w = l(!1),
        x = w[0],
        y = w[1];
      w = j(function () {
        y(!0),
          m.onReady(function (a) {
            a.log({ event: "watch_and_scroll_skip_overlay_impression" });
          });
      }, []);
      var z = j(function () {
          y(!1);
        }, []),
        A = j(
          function () {
            var a;
            m.onReady(function (a) {
              a.log({
                click_point: "control_skip",
                click_target: "watch_and_scroll",
                event: "click",
              });
            });
            p({
              chainingCursor: q,
              chainingSeedVideoID: u,
              routeTracePolicy:
                (a = n == null ? void 0 : n.routeTracePolicy) != null ? a : v,
              sessionStartTime: n == null ? void 0 : n.sessionStartTime,
              sessionTrigger: n == null ? void 0 : n.sessionTrigger,
              subOrigin: e,
              videoID: t,
            });
            a = {
              can_delay_log_impression:
                s == null ? void 0 : s.can_delay_log_impression,
              use_banzai_signal_imp:
                s == null ? void 0 : s.use_banzai_signal_imp,
              use_banzai_vital_imp: s == null ? void 0 : s.use_banzai_vital_imp,
            };
            o({
              clientViewConfig: a,
              encryptedTracking: r == null ? void 0 : r.encrypted_tracking,
              trackingCode: {
                click_tracking_linkshim_cb:
                  (r == null ? void 0 : r.click_tracking_linkshim_cb) || "",
                encrypted_click_tracking:
                  (r == null ? void 0 : r.encrypted_click_tracking) || "",
                encrypted_tracking:
                  (r == null ? void 0 : r.encrypted_tracking) || "",
              },
              videoID: t,
              viewabilityConfig: r == null ? void 0 : r.viewability_config,
            });
            g && g({ type: "INCREMENT" });
          },
          [
            t,
            g,
            s == null ? void 0 : s.can_delay_log_impression,
            s == null ? void 0 : s.use_banzai_signal_imp,
            s == null ? void 0 : s.use_banzai_vital_imp,
            q,
            v,
            o,
            p,
            r == null ? void 0 : r.click_tracking_linkshim_cb,
            r == null ? void 0 : r.encrypted_click_tracking,
            r == null ? void 0 : r.encrypted_tracking,
            r == null ? void 0 : r.viewability_config,
            e,
            u,
            n == null ? void 0 : n.routeTracePolicy,
            n == null ? void 0 : n.sessionStartTime,
          ]
        );
      if (a == null || a.__typename !== "Video") {
        m.onReady(function (a) {
          a.log({ event: "watch_and_scroll_chaining_query_empty" });
        });
        return i.jsx(c("VideoPlayerSkipControlBase.react"), { disabled: !0 });
      }
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("VideoPlayerSkipControlBase.react"), {
            onHoverIn: w,
            onHoverOut: z,
            onPress: A,
          }),
          x &&
            !f &&
            i.jsxs(i.Fragment, {
              children: [
                i.jsx("div", {
                  className:
                    "mindcfhs t35zue3m oz0m54rj pmk7jnqg kmzbrmfl mio9le5o b6jg2yqc hp05c5td bn9qtmzc s8bnoagg cwj9ozl2",
                }),
                i.jsx(c("CometWatchAndScrollUpNextCard.react"), {
                  hidden: !1,
                  video: a,
                }),
              ],
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
  "useVideoPlayerWithWatchAndScrollChaining.react",
  [
    "CometPrerenderer.react",
    "VideoPlayerHooks",
    "VideoPlayerWithWatchAndScrollChaining.react",
    "gkx",
    "qex",
    "react",
    "useVideoPlayerControllerSubscription",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 0.8,
      j = 0;
    function a(a) {
      var b = a.isVideoHomeEligible,
        e = a.routeTracePolicy,
        f = a.subOrigin,
        g = d("VideoPlayerHooks").useIsLive();
      a = c("useVideoPlayerControllerSubscription")(function (a, b) {
        var d, e;
        if (g) (d = !1), (e = !1);
        else {
          var f = a.getCurrentState().ended,
            h = a.getPlayheadPosition();
          a = a.getCurrentState();
          var k = a.duration,
            l = a.loopCount;
          a = a.loopCurrent;
          k = Math.min(k * i, k - j);
          var m = !!c("qex")._("221");
          d = a >= l && f;
          e = m || (b != null && b.shouldPrerender) || h > k;
        }
        return b != null && b.isVisible === d && b.shouldPrerender === e
          ? b
          : { isVisible: d, shouldPrerender: e };
      });
      if (!b || !c("gkx")("1910721"))
        return {
          isWatchAndScrollChainingComponentRendered: !1,
          watchAndScrollChainingComponent: null,
        };
      b = h.jsx(c("CometPrerenderer.react"), {
        prerenderingProps: a,
        children: function (a) {
          return h.jsx("div", {
            className: a.hidden === !0 ? "mkhogb32" : "",
            children: h.jsx(
              c("VideoPlayerWithWatchAndScrollChaining.react"),
              babelHelpers["extends"]({ routeTracePolicy: e, subOrigin: f }, a)
            ),
          });
        },
      });
      return {
        isWatchAndScrollChainingComponentRendered: a.isVisible,
        watchAndScrollChainingComponent: b,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometWatchAndScrollCloseButton.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "CometSetWatchAndScrollVideoContext",
    "CometWatchAndScrollCloseButton_video.graphql",
    "CometWatchAndScrollVideoContext",
    "TetraIcon.react",
    "VideoPlayerInstreamAdsStateHooks",
    "fbicon",
    "gkx",
    "react",
    "requireDeferred",
    "useCometRouterState",
    "useCometTahoeChainingDepth",
    "useVideoPlayerDefaultControlsVisibility",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useContext,
      m = c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef(
        "CometWatchAndScrollCloseButton.react"
      );
    function a(a) {
      a = a.video;
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometWatchAndScrollCloseButton_video.graphql")),
        a
      );
      var e = l(c("CometSetWatchAndScrollVideoContext")),
        f = l(c("CometWatchAndScrollVideoContext")),
        g = d("useCometTahoeChainingDepth").useChainingDepthContext(),
        n = g.chainingDepthState;
      g = c("useVideoPlayerDefaultControlsVisibility")();
      var o = g.isControlsVisible,
        p = g.onUserInteraction;
      a = !!(a == null
        ? void 0
        : (g = a.owner) == null
        ? void 0
        : g.has_professional_features_for_watch);
      g = d("VideoPlayerInstreamAdsStateHooks").useInstreamAdsIsStart();
      var q = (a && c("gkx")("1910721")) || g;
      a = c("useCometRouterState")();
      var r =
        (g = a == null ? void 0 : a.main.route.tabKey) != null
          ? g
          : "undefined";
      return k.jsx("i", {
        className:
          (q ? "" : "ntk8zc1u pmk7jnqg agsi23a0") +
          " tkr6xdv7" +
          (!q && !o ? " kr9hpln1 b5wmifdl" : ""),
        children: k.jsx(c("TetraIcon.react"), {
          "aria-label": h._("Close Watch and Scroll"),
          color: q ? "primary" : "white",
          icon: d("fbicon")._(i("478233"), 20),
          onPress: function () {
            var a = f == null ? void 0 : f.sessionStartTime,
              b = new Date(),
              c = (f == null ? void 0 : f.sessionTrigger)
                ? f == null
                  ? void 0
                  : f.sessionTrigger
                : null;
            e(null);
            p({ name: "exit_watch_and_scroll_video", type: "happened" });
            q &&
              m.onReady(function (d) {
                var e = n + 1,
                  f = a ? (b.getTime() - a.getTime()) / 1e3 : null;
                d.log({
                  click_point: "close_button",
                  click_target: "watch_and_scroll",
                  event: "click",
                  event_target_info: r,
                });
                d.log({
                  event: "watch_and_scroll_end_session",
                  event_target_info: c,
                  video_watched_count: e,
                  watch_time_in_watch_and_scroll_s: f,
                });
              });
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
  "CometWatchAndScrollTopBar.react",
  [
    "ix",
    "CometLink.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "CometVideoHomeThreeDotContextMenu.react",
    "CometWatchAndScrollCloseButton.react",
    "CometWatchAndScrollTopBar_video.graphql",
    "TetraProfilePhoto.react",
    "TetraTextPairing.react",
    "VideoPlayerHooks",
    "VideoPlayerInstreamAdsStateHooks",
    "XCometGamingVanityControllerRouteBuilder",
    "XCometVideoHomePlaylistControllerRouteBuilder",
    "fbicon",
    "gkx",
    "react",
    "requireDeferred",
    "stylex",
    "useCometRouterState",
    "useNavigateToTahoePassthroughProps",
    "useVideoPlayerDefaultControlsVisibility",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useState,
      l = c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef(
        "CometWatchAndScrollTopBar.react"
      ),
      m = {
        actorIcon: {
          marginStart: "h676nmdw",
          paddingTop: "jb3vyjys",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "qt6c0cv9",
          paddingStart: "a8nywdso",
        },
        closeButton: {
          display: "j83agx80",
          marginTop: "n1l5q3vz",
          marginEnd: "tvfksri0",
          marginBottom: "n851cfcs",
          marginStart: "ozuftl9m",
          paddingTop: "jb3vyjys",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "qt6c0cv9",
          paddingStart: "a8nywdso",
        },
        root: {
          backgroundColor: "cwj9ozl2",
          borderTopEndRadius: "pw54ja7n",
          borderTopStartRadius: "ue3kfks5",
          boxShadow: "h0eh6jkb",
          display: "j83agx80",
          end: "n7fi1qx3",
          height: "ur1d1wif",
          opacity: "pedkr2u6",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "p6s4hbd1",
          transform: "of6qqfjd",
          transformOrigin: "ho8ehabp",
          transitionDuration: "ebpj63zs",
          transitionProperty: "flx89l3n",
        },
        rootHidden: {
          transform: "b5ifovcx",
          transformOrigin: "ho8ehabp",
          transitionDuration: "ebpj63zs",
          transitionProperty: "flx89l3n",
        },
        row: {
          marginTop: "kvgmc6g5",
          marginEnd: "cxmmr5t8",
          marginBottom: "oygrvhab",
          marginStart: "hcukyx3x",
          width: "k4urcfbm",
        },
        threeDot: {
          display: "j83agx80",
          marginTop: "kvgmc6g5",
          marginEnd: "cxmmr5t8",
          marginBottom: "oygrvhab",
          marginStart: "hcukyx3x",
          paddingTop: "jb3vyjys",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "qt6c0cv9",
          paddingStart: "a8nywdso",
        },
      };
    function a(a) {
      var e = a.isGamingVideo,
        f = a.permalinkUrl,
        g = a.routeTracePolicy,
        q = a.subOrigin;
      a = a.video;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("CometWatchAndScrollTopBar_video.graphql")),
        a
      );
      var r = c("useVideoPlayerDefaultControlsVisibility")({
        forceVisibleOnMount: !0,
      });
      r = r.isControlsVisible;
      var s = c("useNavigateToTahoePassthroughProps")(),
        t = k(!1),
        u = t[0],
        v = t[1];
      t = d("VideoPlayerInstreamAdsStateHooks").useInstreamAdsIsStart();
      var w = d("VideoPlayerHooks").useIsHovering(),
        x = d("VideoPlayerHooks").useIsMouseIdle();
      r = c("gkx")("1910721") || r || u || (t && w && !x);
      u = function (a) {
        v(a);
      };
      t = a == null ? void 0 : a.owner;
      if (a == null || t == null) return null;
      w = babelHelpers["extends"]({}, s, {
        playerSubOrigin: q,
        portalingRouteTracePolicy: g,
        portalingSubOrigin: q,
      });
      x = "#";
      s = t.uri_token;
      s != null
        ? (x = c("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({
            idorvanity: s,
          }))
        : t.url != null && (x = t.url);
      if (e) {
        s =
          (s = (s = t.page_vanity_url) != null ? s : t.vanity) != null
            ? s
            : t.uri_token;
        if (s != null) {
          var y;
          x = c("XCometGamingVanityControllerRouteBuilder").buildURL({
            injected_hero_video_id: (y = a.id) != null ? y : void 0,
            vanity: s,
          });
        }
      }
      return j.jsx("div", {
        className: c("stylex")(m.root, !r && m.rootHidden),
        children: j.jsxs(c("CometRow.react"), {
          paddingHorizontal: 0,
          paddingVertical: 0,
          verticalAlign: "center",
          xstyle: m.row,
          children: [
            j.jsx(c("CometRowItem.react"), {
              xstyle: m.actorIcon,
              children: j.jsx(n, {
                actorID: t.id,
                actorName: t.name,
                actorURL: x,
                iconURI: (y = t.profile_picture) == null ? void 0 : y.uri,
                passthroughProps: e ? w : void 0,
              }),
            }),
            j.jsx(c("CometRowItem.react"), {
              expanding: !0,
              children: j.jsx(c("TetraTextPairing.react"), {
                headline: j.jsx(p, {
                  isGamingVideo: e,
                  passthroughProps: w,
                  permalinkUrl: f,
                  routeTracePolicy: g,
                  subOrigin: q,
                  title: a.title_with_fallback,
                  videoUrl: a.url,
                }),
                headlineLineLimit: 1,
                level: 4,
                meta: j.jsx(o, {
                  actorName: t.name,
                  actorURL: x,
                  passthroughProps: e ? w : void 0,
                }),
                metaLineLimit: 1,
                metaLocation: "above",
              }),
            }),
            j.jsx(c("CometRowItem.react"), {
              xstyle: m.threeDot,
              children: j.jsx(c("CometVideoHomeThreeDotContextMenu.react"), {
                icon: d("fbicon")._(h("555291"), 20),
                identifierToken:
                  (s = a.creation_story) == null ? void 0 : s.identifier_token,
                onMenuVisibilityChange: u,
                onPress: function () {
                  l.onReady(function (a) {
                    a.log({
                      click_point: "three_dot_menu",
                      click_target: "watch_and_scroll",
                      event: "click",
                    });
                  });
                },
                position: "above",
                storyDebugInfo:
                  (r = a.creation_story) == null ? void 0 : r.debug_info,
                tracking: (y = a.creation_story) == null ? void 0 : y.tracking,
                videoID: a.id,
                videoMenuLocation: "WATCH_AND_SCROLL",
              }),
            }),
            j.jsx(c("CometRowItem.react"), {
              xstyle: m.closeButton,
              children: j.jsx(c("CometWatchAndScrollCloseButton.react"), {
                video: a,
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function n(a) {
      var b = a.actorName,
        d = a.actorURL,
        e = a.iconURI;
      a = a.passthroughProps;
      return j.jsx(c("TetraProfilePhoto.react"), {
        "aria-label": b != null && b !== "" ? b : d,
        linkProps: { passthroughProps: (b = a) != null ? b : void 0, url: d },
        onPress: function () {
          l.onReady(function (a) {
            a.log({
              click_point: "actor_profile_picture",
              click_target: "watch_and_scroll",
              event: "click",
            });
          });
        },
        size: 32,
        source: { uri: e || "" },
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      var b = a.actorName,
        d = a.actorURL;
      a = a.passthroughProps;
      return b != null && b !== ""
        ? j.jsx(c("CometLink.react"), {
            href: d,
            onClick: function () {
              l.onReady(function (a) {
                a.log({
                  click_point: "actor_name",
                  click_target: "watch_and_scroll",
                  event: "click",
                });
              });
            },
            passthroughProps: (d = a) != null ? d : void 0,
            children: b,
          })
        : null;
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p(a) {
      var b = a.isGamingVideo,
        d = a.passthroughProps,
        e = a.permalinkUrl,
        f = a.title;
      a = a.videoUrl;
      var g = c("useCometRouterState")(),
        h = g == null ? void 0 : g.main.route.tabKey;
      g = b ? "gaming" : "watch";
      b = h !== g;
      g = b && d.portableVideoID != null ? e : a;
      return j.jsx(c("CometLink.react"), {
        href: g,
        onClick: function () {
          l.onReady(function (a) {
            a.log({
              click_point: "video_title",
              click_target: "watch_and_scroll",
              event: "click",
              event_target_info: h,
            });
          });
        },
        passthroughProps: d,
        children: f,
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometWatchAndScroll.react",
  [
    "CometInteractionSourceContext",
    "CometLoadingAnimation.react",
    "CometObjectFitContainerWithMaxHeight.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometRouterPushViewStackContext",
    "CometSetWatchAndScrollVideoContext",
    "CometTahoeChainingDepthLogging.react",
    "CometTrackingCodeProvider.react",
    "CometUFIVideoPlayerUtils",
    "CometWarningScreenContext",
    "CometWatchAndScrollCloseButton.react",
    "CometWatchAndScrollContainer_video.graphql",
    "CometWatchAndScrollSoundContext",
    "CometWatchAndScrollStoryViewabilityLoggerContext",
    "CometWatchAndScrollTopBar.react",
    "CometWatchAndScrollVideoContext",
    "CometWatchAndScrollVideoQuery.graphql",
    "HiddenSubtreeContext",
    "HiddenSubtreeContextProvider.react",
    "Locale",
    "MWChatOpenTabCount.re",
    "VideoAutoplayLocalScopeProvider.react",
    "VideoPlayerAutoplayRulesProvider",
    "VideoPlayerCometWatchInjectionControl.react",
    "VideoPlayerDefaultControls.react",
    "VideoPlayerHooks",
    "VideoPlayerInstreamAdsStateHooks",
    "VideoPlayerNavigateToTahoeOrFullScreenControl.react",
    "VideoPlayerRelay.react",
    "VideoPlayerSkipControlBase.react",
    "VideoPlayerSurface.react",
    "VideoPlayerWithAudioBackground.react",
    "VideoPlayerWithAudioOverlay.react",
    "VideoPlayerWithLiveVideoIndicator.react",
    "VideoPlayerWithWatchAndScrollSoundContext.react",
    "VideoPlayerWithWatchAndScrollWarningScreen.react",
    "WebPixelRatio",
    "XCometGamingVideoControllerRouteBuilder",
    "XCometWatchControllerRouteBuilder",
    "cr:522",
    "deferredLoadComponent",
    "gkx",
    "isRouteTransparent",
    "qex",
    "react",
    "requireDeferred",
    "requireDeferredForDisplay",
    "useCometRouterState",
    "useStoryViewabilityLogger",
    "useVideoOriginalDimensionsRelay",
    "useVideoPlayerWithWatchAndScrollChaining.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react");
    e = d("react");
    var k = e.useContext,
      l = e.useEffect,
      m = e.useMemo,
      n = c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef(
        "CometWatchAndScroll.react"
      ),
      o = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("VideoPlayerSkipControl.react").__setRef(
          "CometWatchAndScroll.react"
        )
      ),
      p = d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("wns");
    function q() {
      var a = d("MWChatOpenTabCount.re").useHook();
      a = a[0];
      var b = 338,
        c = 80;
      a = a * b + c;
      return a;
    }
    function a() {
      var a = k(c("CometRouterPushViewStackContext")),
        b = k(c("CometWatchAndScrollVideoContext")),
        e = k(c("CometSetWatchAndScrollVideoContext")),
        f = k(c("CometWatchAndScrollSoundContext"));
      a = (a || []).some(function (a) {
        a = a.route;
        return !c("isRouteTransparent")(a);
      });
      var g = b == null ? void 0 : b.portableVideoID,
        h = b == null ? void 0 : b.routeTracePolicy,
        i = b == null ? void 0 : b.subOrigin,
        m = b == null ? void 0 : b.videoID,
        n = b == null ? void 0 : b.chainingSeedVideoID,
        o = b == null ? void 0 : b.chainingCursor;
      l(
        function () {
          b != null &&
            m != null &&
            n == null &&
            e(babelHelpers["extends"]({}, b, { chainingSeedVideoID: m }));
        },
        [n, e, m, b]
      );
      l(
        function () {
          m == null && (f.setMuted(null), f.setVolume(null));
        },
        [f, m]
      );
      var p = q();
      return m == null || i == null || h == null
        ? null
        : j.jsx(c("CometPlaceholder.react"), {
            fallback: j.jsx("div", {
              className:
                "a9ndjppc poy2od1o k3cnv2bo taijpn5t esma6hys j83agx80 eu4i7hue k01i5q8h tqsryivl",
              style: d("Locale").isRTL() ? { left: p } : { right: p },
              children: j.jsx("div", {
                className: "thwo4zme pmk7jnqg dfilqbxc j83agx80",
                children: j.jsx(c("CometLoadingAnimation.react"), { size: 36 }),
              }),
            }),
            children: j.jsx(c("HiddenSubtreeContextProvider.react"), {
              isHidden: a,
              children: j.jsx(r, {
                chainingCursor: o,
                chainingSeedVideoID: n,
                portableVideoID: g,
                routeTracePolicy: h,
                subOrigin: i,
                videoID: m,
              }),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function r(a) {
      var e,
        f = a.chainingCursor,
        g = a.chainingSeedVideoID,
        i = a.portableVideoID,
        k = a.routeTracePolicy,
        l = a.subOrigin;
      a = a.videoID;
      g = d("CometRelay").useLazyLoadQuery(
        h !== void 0 ? h : (h = b("CometWatchAndScrollVideoQuery.graphql")),
        {
          chainingCursor: f,
          chainingSeedVideoID: (f = g) != null ? f : a,
          scale: d("WebPixelRatio").get(),
          videoID: a,
        }
      );
      f = g.chainingSeedVideo;
      g = g.video;
      if (g == null) return null;
      var m = (g == null ? void 0 : g.is_gaming_video) === !0,
        n = g == null ? void 0 : g.id,
        o = c("XCometGamingVideoControllerRouteBuilder").buildURL(
          n != null ? { ref: "comet_wns", video_id: n } : {}
        );
      n = c("XCometWatchControllerRouteBuilder").buildURL(
        n != null ? { v: n } : {}
      );
      e =
        (g == null
          ? void 0
          : (e = g.pay_to_access_paywall) == null
          ? void 0
          : e.should_show_paywall) === !0;
      o = m ? o : n;
      return e
        ? null
        : j.jsx(c("CometInteractionSourceContext").Provider, {
            value: 54,
            children: j.jsx(c("VideoAutoplayLocalScopeProvider.react"), {
              autoplayLocalRules: p,
              children: j.jsx(
                d("CometUFIVideoPlayerUtils")
                  .CometUFIVideoPlayerStateAndControllerContextProvider,
                {
                  children: j.jsx(
                    d("CometWarningScreenContext")
                      .CometWarningScreenContextProvider,
                    {
                      overlayExists: !1,
                      children: j.jsx(s, {
                        video: g,
                        videoID: a,
                        children: j.jsx(c("VideoPlayerRelay.react"), {
                          initialTracePolicy: k,
                          playerFormat: "watch_scroll",
                          portalingEnabled: !0,
                          portalingFromVideoID: i,
                          portalingPlaceMetaData: {
                            placeDescription: "watch_and_scroll",
                          },
                          subOrigin: l,
                          video: g,
                          volumeSetting: null,
                          children: j.jsx(u, {
                            chainingSeedVideo: f,
                            isGamingVideo: m,
                            isVideoHomeEligible: !!((n = g.owner) == null
                              ? void 0
                              : n.has_professional_features_for_watch),
                            permalinkUrl: o,
                            routeTracePolicy: k,
                            subOrigin: l,
                            video: g,
                            videoID: a,
                          }),
                        }),
                      }),
                    }
                  ),
                }
              ),
            }),
          });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function s(a) {
      var e = a.children,
        f = a.video;
      a = a.videoID;
      f = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometWatchAndScrollContainer_video.graphql")),
        f
      );
      f = c("useVideoOriginalDimensionsRelay")(f);
      f = f.originalAspectRatio;
      var g = q(),
        h = k(c("CometWatchAndScrollStoryViewabilityLoggerContext"));
      a = (h == null ? void 0 : h.videoID) === a;
      var l = c("useStoryViewabilityLogger")({
          clientViewConfig: h == null ? void 0 : h.clientViewConfig,
          encryptedTracking: h == null ? void 0 : h.encryptedTracking,
          position: 0,
          viewabilityConfig: h == null ? void 0 : h.viewabilityConfig,
        }),
        m = l.debuggingInfoLoggers;
      l = l.ref;
      l = j.jsxs("div", {
        className:
          "a9ndjppc poy2od1o k3cnv2bo taijpn5t esma6hys j83agx80 eu4i7hue k01i5q8h tqsryivl",
        ref: a ? l : null,
        style: d("Locale").isRTL() ? { left: g } : { right: g },
        children: [
          m,
          j.jsx(c("CometObjectFitContainerWithMaxHeight.react"), {
            contentAspectRatio: f,
            maxHeight: 300,
            children: e,
          }),
        ],
      });
      g = h == null ? void 0 : h.trackingCode;
      return g != null && a
        ? j.jsx(c("CometTrackingCodeProvider.react"), {
            trackingCode: g,
            children: l,
          })
        : l;
    }
    function t() {
      var a = d("VideoPlayerHooks").useController(),
        b = k(c("HiddenSubtreeContext")).hidden;
      l(
        function () {
          b || a.play("user_initiated");
        },
        [a, b]
      );
    }
    function u(a) {
      var e = a.chainingSeedVideo,
        f = a.isGamingVideo,
        g = a.isVideoHomeEligible,
        h = a.permalinkUrl,
        i = a.routeTracePolicy,
        l = a.subOrigin,
        p = a.video;
      a = a.videoID;
      t();
      var q = c("useCometRouterState")();
      q = q == null ? void 0 : q.main.route.tabKey;
      var r = d("CometWarningScreenContext").useHasOverlay(),
        s = d("VideoPlayerInstreamAdsStateHooks").useInstreamAdsIsStart(),
        u = d("VideoPlayerHooks").useIsVideoBroadcast(),
        v = k(c("CometSetWatchAndScrollVideoContext"));
      s = (g && c("gkx")("1910721")) || s;
      var w = f ? "gaming" : "watch";
      u =
        g &&
        !r &&
        q === "watch" &&
        !((u = u) != null ? u : !1) &&
        Boolean(c("qex")._("330"));
      q = q !== w && g && !r;
      w = q && c("gkx")("1910721");
      var x = !f && (q || u) && c("gkx")("1967296");
      r = c("useVideoPlayerWithWatchAndScrollChaining.react")({
        isVideoHomeEligible: g,
        routeTracePolicy: i,
        subOrigin: l,
      });
      q = r.isWatchAndScrollChainingComponentRendered;
      u = r.watchAndScrollChainingComponent;
      g = !!c("qex")._("270");
      r = !!c("qex")._("221") || !q;
      var y = function (a) {
          n.onReady(function (b) {
            b.log({
              click_point: a,
              click_target: "watch_and_scroll",
              event: "click",
            });
          });
        },
        z = p.url;
      q = m(
        function () {
          return { subOrigin: l, videoTahoeUrl: z };
        },
        [l, z]
      );
      var A = c("gkx")("3017");
      return j.jsxs(c("VideoPlayerSurface.react"), {
        children: [
          j.jsx(c("CometTahoeChainingDepthLogging.react"), {}),
          s &&
            j.jsx(c("CometWatchAndScrollTopBar.react"), {
              isGamingVideo: f,
              permalinkUrl: h,
              routeTracePolicy: i,
              subOrigin: l,
              video: p,
            }),
          j.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: j.jsx(c("VideoPlayerWithAudioBackground.react"), {
              video: p,
            }),
          }),
          r &&
            j.jsx(c("VideoPlayerDefaultControls.react"), {
              renderExpandControl: function (a) {
                a = a.onUserInteraction;
                return x
                  ? j.jsx(c("VideoPlayerCometWatchInjectionControl.react"), {
                      onPress: function () {
                        v(null), y("control_open_in_watch");
                      },
                      routeTracePolicy: i,
                      subOrigin: l,
                      videoWatchUrl: h,
                    })
                  : j.jsx(
                      c("VideoPlayerNavigateToTahoeOrFullScreenControl.react"),
                      {
                        onPressFullscreenControl: function () {
                          return y("control_fullscreen");
                        },
                        onPressTahoeControl: function () {
                          y("control_expand_to_tahoe"), A && v(null);
                        },
                        onUserInteraction: a,
                        subOrigin: "watch_scroll",
                        videoTahoeUrl: z,
                      }
                    );
              },
              skipControl: g
                ? j.jsx(c("CometPlaceholder.react"), {
                    fallback: j.jsx(c("VideoPlayerSkipControlBase.react"), {
                      disabled: !0,
                    }),
                    children: e
                      ? j.jsx(o, { subOrigin: l, video: e })
                      : j.jsx(c("VideoPlayerSkipControlBase.react"), {
                          disabled: !0,
                        }),
                  })
                : null,
              subOrigin: "watch_scroll",
            }),
          s &&
            w &&
            b("cr:522") &&
            j.jsx(b("cr:522"), {
              isGamingVideo: f,
              permalinkUrl: h,
              routeTracePolicy: i,
              subOrigin: l,
              videoID: a,
            }),
          !s && j.jsx(c("CometWatchAndScrollCloseButton.react"), { video: p }),
          j.jsx(c("VideoPlayerWithLiveVideoIndicator.react"), {
            hasCometNavOverlay: !1,
            video: p,
          }),
          j.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: j.jsx(c("VideoPlayerWithAudioOverlay.react"), {
              playerFormat: "inline",
              video: p,
            }),
          }),
          u,
          j.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: j.jsx(
              c("VideoPlayerWithWatchAndScrollWarningScreen.react"),
              { video: p }
            ),
          }),
          j.jsx(
            d("CometUFIVideoPlayerUtils")
              .CometUFIVideoPlayerStateAndControllerExtractor,
            { data: q }
          ),
          j.jsx(c("VideoPlayerWithWatchAndScrollSoundContext.react"), {}),
        ],
      });
    }
    u.displayName = u.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ZenonCallLogger",
  ["ZenonInfraActionsLogger", "gkx", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(["setMediaStats", "updateE2EEStats"]);
    a = (function () {
      function a(a, b) {
        var d,
          e = this;
        this.$1 = [];
        this.$2 = {
          localCallID: c("uuid")(),
          peerID: a.peerID,
          sharedCallID: (d = a.serverInfoData) != null ? d : a.callID,
        };
        b.forEach(function (b) {
          return e.$1.push(
            new b(a, function (a) {
              Object.assign(e.$2, a);
            })
          );
        });
      }
      var b = a.prototype;
      b.log = function (a) {
        !h.has(a.name) &&
          c("gkx")("2890") &&
          c("ZenonInfraActionsLogger").logCheckpoint({
            checkpoint: "[ZP] ZenonCallLogger event: " + a.name,
          }),
          this.$1.forEach(function (b) {
            b.processEvent(a);
          });
      };
      b.getLogIdentifiers = function () {
        return this.$2;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ZenonParentCallSummaryLogProcessor",
  [
    "ZenonActorHooks",
    "ZenonCallSummary",
    "ZenonCallSummaryStore",
    "ZenonDismissReason",
    "ZenonPeerID",
    "ZenonSignalingProtocolUtils",
    "pageID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$2 = a.protocol),
          c("ZenonSignalingProtocolUtils").isMwSupportedProtocol(a.protocol) &&
            (a.peerID = d("ZenonPeerID").ZenonMWPeerID),
          (this.$1 = new (c("ZenonCallSummary"))(a)),
          b && b({ localCallID: this.$1.localCallID });
      }
      var b = a.prototype;
      b.$3 = function (a) {
        if (a != null) {
          a = a.deviceID;
          a = a === "mobile";
          this.$1.setIsPeerMobile(a);
        }
      };
      b.processEvent = function (a) {
        switch (a.name) {
          case "inviteResponded":
            this.$1.onInviteResponded();
            break;
          case "inviteReceived":
            this.$1.onInviteReceived();
            this.$3(a.remoteDeviceInfo);
            break;
          case "callEnded":
            this.$4(a);
            break;
          case "callAccepted":
            this.$1.onCallAccepted(a.trigger);
            d(
              "ZenonCallSummaryStore"
            ).ZenonCallSummaryStoreInstance.storeCallSummary(this.$1);
            break;
          case "popupOpened":
            this.$5(a);
            d(
              "ZenonCallSummaryStore"
            ).ZenonCallSummaryStoreInstance.storeCallSummary(this.$1);
            break;
        }
      };
      b.$5 = function (a) {
        this.$1.setInitByPageID(c("pageID")),
          this.$1.setInitByAppID(d("ZenonActorHooks").ZenonActor.getAppID()),
          this.$1.onCallEnded(
            d("ZenonDismissReason").ZenonDismissReason.ClientError,
            !1,
            !0,
            a.isPopupBlocked ? "PopupBlocked" : "PopupPending"
          ),
          d(
            "ZenonCallSummaryStore"
          ).ZenonCallSummaryStoreInstance.storeCallSummary(this.$1);
      };
      b.$4 = function (a) {
        if (
          c("ZenonSignalingProtocolUtils").isMwSupportedProtocol(this.$2) &&
          a.isRemoteEnded
        )
          return;
        var b = a.endCallReason,
          e = a.endCallSubreason;
        a = a.isRemoteEnded;
        if (
          b ===
            d("ZenonDismissReason").ZenonDismissReason.OtherInstanceHandled &&
          a
        )
          return;
        this.$1.onCallEnded(b, a, !1, e);
        d(
          "ZenonCallSummaryStore"
        ).ZenonCallSummaryStoreInstance.storeCallSummary(this.$1);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ZenonParentQPLLogProcessor",
  ["QPLUserFlow", "RtcWwwWebModuleRtcIncomingRingQPLEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a.callID;
      }
      var b = a.prototype;
      b.processEvent = function (a) {
        switch (a.name) {
          case "inviteReceived":
            c("QPLUserFlow").start(
              c("RtcWwwWebModuleRtcIncomingRingQPLEvent"),
              { instanceKey: +this.$1 }
            );
            break;
          case "callEnded":
            c("QPLUserFlow").endCancel(
              c("RtcWwwWebModuleRtcIncomingRingQPLEvent"),
              { instanceKey: +this.$1 }
            );
            break;
          case "callAccepted":
            c("QPLUserFlow").addPoint(
              c("RtcWwwWebModuleRtcIncomingRingQPLEvent"),
              "call_accepted",
              { instanceKey: +this.$1 }
            );
            break;
          case "inviteResponded":
            c("QPLUserFlow").addPoint(
              c("RtcWwwWebModuleRtcIncomingRingQPLEvent"),
              "invite_responded",
              { instanceKey: +this.$1 }
            );
            break;
          case "popupOpened":
            c("QPLUserFlow").endSuccess(
              c("RtcWwwWebModuleRtcIncomingRingQPLEvent"),
              { instanceKey: +this.$1 }
            );
            break;
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ZenonCollisionContext",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = null;
      a.groupThreadID != null
        ? (b = { id: a.groupThreadID, type: 2 })
        : a.peerID != null && (b = { id: a.peerID, type: 1 });
      return b;
    }
    f.getThreadIDAndTypeFromCollisionContext = a;
  },
  66
);
__d(
  "LazyLoadInstance",
  ["promiseDone"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { LOADING: 1, NOT_READY: 0, READY: 2 };
    a = (function () {
      function a(a, b) {
        this.$1 = { instantiate: b, moduleReference: a, stage: h.NOT_READY };
      }
      var b = a.prototype;
      b.get = function (a) {
        switch (this.$1.stage) {
          case h.NOT_READY:
            c("promiseDone")(this.$2(this.$1), a);
            break;
          case h.LOADING:
            c("promiseDone")(this.$1.instancePromise, a);
            break;
          case h.READY:
            a(this.$1.instance);
            break;
        }
      };
      b.getNow = function () {
        return this.$1.stage === h.READY ? this.$1.instance : null;
      };
      b.preload = function () {
        this.$1.stage === h.NOT_READY && this.$2(this.$1);
      };
      b.$2 = function (a) {
        var b = this,
          c = a.instantiate;
        a = a.moduleReference;
        a = a.load().then(function (a) {
          a = c(a);
          b.$1 = { instance: a, stage: h.READY };
          return a;
        });
        this.$1 = { instancePromise: a, stage: h.LOADING };
        return a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ZenonSignalingConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "/rtc_multi";
    f.RTC_MULTI_MQTT_TOPIC = a;
  },
  66
);
__d(
  "ZenonMqttMWMessageSender",
  [
    "FBMqttChannel",
    "Promise",
    "ZenonDebugLogger",
    "ZenonMWMessageLogger",
    "ZenonMWMessageReliabilityLogger",
    "ZenonMWMessageTranslator",
    "ZenonSignalingConstants",
    "ZenonUserActionLogger",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 15e3;
    a = (function () {
      function a() {}
      var e = a.prototype;
      e.waitForMqttConnected = function () {
        return new (b("Promise"))(function (a, b) {
          if (c("FBMqttChannel").getConnectionState() === "Connected") a();
          else {
            c("ZenonUserActionLogger").logCheckpoint({
              checkpoint: "MQTT not connected, deferring sending MWS message",
            });
            c("ZenonUserActionLogger").startTimer("MQTT not connected");
            var d = {
                onMQTTStateChanged: function (b) {
                  b === "Connected" &&
                    (c("ZenonUserActionLogger").stopTimer({
                      checkpointName:
                        "MQTT connected after deferring sending MWS message",
                      timerName: "MQTT not connected",
                    }),
                    c("FBMqttChannel").unsubscribeChannelEvents(d),
                    window.clearTimeout(e),
                    a());
                },
              },
              e = window.setTimeout(function () {
                c("FBMqttChannel").unsubscribeChannelEvents(d),
                  c("ZenonUserActionLogger").stopTimer({
                    checkpointName:
                      "MQTT never connected. Current status: " +
                      c("FBMqttChannel").getConnectionState(),
                    timerName: "MQTT not connected",
                  }),
                  b("timeout");
              }, h);
            c("FBMqttChannel").subscribeChannelEvents(d);
          }
        });
      };
      e.asyncSendMessage = function (a) {
        var e = this,
          f,
          g;
        return b("regeneratorRuntime").async(
          function (h) {
            while (1)
              switch ((h.prev = h.next)) {
                case 0:
                  f = !0;
                  h.next = 3;
                  return b("regeneratorRuntime").awrap(
                    this.waitForMqttConnected()["catch"](function (a) {
                      c("ZenonUserActionLogger").logCheckpoint({
                        checkpoint:
                          "Not sending MWS message through MQTT because MQTT could not connect. Error: " +
                          a,
                      }),
                        (f = !1);
                    })
                  );
                case 3:
                  if (f) {
                    h.next = 5;
                    break;
                  }
                  return h.abrupt("return");
                case 5:
                  g = c("ZenonDebugLogger").getInstance();
                  d("ZenonMWMessageReliabilityLogger").logSendingMessage(a);
                  g.logMWMessage("SENDING", "MQTT", a);
                  this.$2 &&
                    d("ZenonMWMessageLogger").logSentMessage(a, this.$2);
                  h.prev = 9;
                  h.next = 12;
                  return b("regeneratorRuntime").awrap(
                    c("FBMqttChannel")
                      .publish(
                        d("ZenonSignalingConstants").RTC_MULTI_MQTT_TOPIC,
                        JSON.stringify(a)
                      )
                      .then(
                        function (b) {
                          d("ZenonMWMessageReliabilityLogger").logSentMessage(
                            a
                          );
                        },
                        function (b) {
                          e.$3(a, b.toString());
                        }
                      )
                  );
                case 12:
                  h.next = 17;
                  break;
                case 14:
                  (h.prev = 14),
                    (h.t0 = h["catch"](9)),
                    this.$3(a, h.t0.toString());
                case 17:
                case "end":
                  return h.stop();
              }
          },
          null,
          this,
          [[9, 14]]
        );
      };
      e.$3 = function (a, b) {
        var e = c("ZenonDebugLogger").getInstance();
        b = b != null ? b : "MQTT Message Send Error";
        d("ZenonMWMessageReliabilityLogger").logSendMessageFailed(a);
        e.logSendMultiwayMessageFailure(b, a.jsonPayload.header.type);
      };
      e.sendMessage = function (a) {
        a = d("ZenonMWMessageTranslator").toMWMessage(a);
        a != null && this.asyncSendMessage(a);
      };
      e.setMessageReceiver = function (a) {
        this.$1 = a;
      };
      e.setLoggingEventHandler = function (a) {
        this.$2 = a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ZenonXControllerSendRequest",
  [
    "AsyncRequest",
    "Promise",
    "XGroupCallSendMessageController",
    "XGroupCallSendRequestController",
    "ZenonActorHooks",
    "ZenonMWMessageReliabilityLogger",
    "err",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e3;
    function i(a, e) {
      return new (b("Promise"))(function (b, f) {
        d("ZenonMWMessageReliabilityLogger").logSendingMessage(e),
          a
            .setMethod("POST")
            .setAllowCrossPageTransition(!0)
            .setHandler(function (a) {
              d("ZenonMWMessageReliabilityLogger").logSentMessage(e), b(a);
            })
            .setErrorHandler(function (a) {
              d(
                "ZenonMWMessageReliabilityLogger"
              ).logSendRequestFailedFromHandler(e);
              a = a.getErrorDescription();
              a = new (c("err"))(
                a != null ? a.toString() : "AsyncRequest error"
              );
              f(a);
            })
            .setTimeoutHandler(h, function () {
              f("Timeout");
            }),
          a.send();
      });
    }
    function a(a) {
      var b = c("XGroupCallSendMessageController").getURIBuilder();
      c("gkx")("2028434") &&
        b.setFBID("av", d("ZenonActorHooks").ZenonActor.getID());
      b = b.getURI();
      b = new (c("AsyncRequest"))(b).setData({ message: JSON.stringify(a) });
      return i(b, a);
    }
    function e(a) {
      var b = c("XGroupCallSendRequestController").getURIBuilder();
      c("gkx")("2028434") &&
        b.setFBID("av", d("ZenonActorHooks").ZenonActor.getID());
      b = b.getURI();
      b = new (c("AsyncRequest"))(b).setData({ request: JSON.stringify(a) });
      return i(b, a);
    }
    g.sendMessage = a;
    g.sendRequest = e;
  },
  98
);
__d(
  "ZenonXControllerMWMessageSender",
  [
    "ZenonDebugLogger",
    "ZenonMWMessageLogger",
    "ZenonMWMessageReliabilityLogger",
    "ZenonMWMessageTranslator",
    "ZenonMWMessageTypes",
    "ZenonMWTranslatorUtils",
    "ZenonXControllerSendRequest",
    "regeneratorRuntime",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var e = a.prototype;
      e.handleResponse = function (a) {
        a = a.payload;
        if (a == null) return;
        var b = a.header || null;
        a = a.body || null;
        var e = c("ZenonDebugLogger").getInstance();
        if (b != null && a != null) {
          b = c("ZenonMWTranslatorUtils").createMWMessage(b, a);
          d("ZenonMWMessageReliabilityLogger").logStartProcessingResponse(b);
          e.logMWMessage("RECEIVED", "XController", b);
          d("ZenonMWMessageReliabilityLogger").logReceivedMessage(b);
          a = d("ZenonMWMessageTranslator").toSignalingMessage(b);
          if (this.$1 != null)
            this.$1(a),
              d("ZenonMWMessageReliabilityLogger").logProcessingMessage(b);
          else
            throw c("unrecoverableViolation")(
              "Should never have null message receiver",
              "rtc_www"
            );
        }
      };
      e.asyncSendMessage = function (a) {
        var e, f, g;
        return b("regeneratorRuntime").async(
          function (h) {
            while (1)
              switch ((h.prev = h.next)) {
                case 0:
                  e = c("ZenonDebugLogger").getInstance();
                  e.logMWMessage("SENDING", "XController", a);
                  this.$2 &&
                    d("ZenonMWMessageLogger").logSentMessage(a, this.$2);
                  h.prev = 3;
                  if (!this.isResponseExpected(a)) {
                    h.next = 11;
                    break;
                  }
                  h.next = 7;
                  return b("regeneratorRuntime").awrap(
                    d("ZenonXControllerSendRequest").sendRequest(a)
                  );
                case 7:
                  f = h.sent;
                  this.handleResponse(f);
                  h.next = 13;
                  break;
                case 11:
                  h.next = 13;
                  return b("regeneratorRuntime").awrap(
                    d("ZenonXControllerSendRequest").sendMessage(a)
                  );
                case 13:
                  h.next = 20;
                  break;
                case 15:
                  (h.prev = 15),
                    (h.t0 = h["catch"](3)),
                    (g = h.t0 != null ? h.t0.toString() : "Message Send Error"),
                    d("ZenonMWMessageReliabilityLogger").logSendMessageFailed(
                      a
                    ),
                    e.logSendMultiwayMessageFailure(
                      g,
                      a.jsonPayload.header.type
                    );
                case 20:
                case "end":
                  return h.stop();
              }
          },
          null,
          this,
          [[3, 15]]
        );
      };
      e.isResponseExpected = function (a) {
        switch (a.jsonPayload.header.type) {
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.JOIN:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
            .CLIENT_MEDIA_UPDATE:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
            .DATA_MESSAGE:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
            .CLIENT_EVENT:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.UNSUBSCRIBE:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.UPDATE:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.CONNECT:
            return !0;
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.RING:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
            .SERVER_MEDIA_UPDATE:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.NOTIFY:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
            .CONFERENCE_STATE:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.HANGUP:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
            .ICE_CANDIDATE:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.DISMISS:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
            .ADD_PARTICIPANTS:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
            .SUBSCRIPTION:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
            .REMOVE_PARTICIPANTS:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.PING:
          case d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
            .P2P_PROTOCOL:
            return !1;
          default:
            return !1;
        }
      };
      e.sendMessage = function (a) {
        a = d("ZenonMWMessageTranslator").toMWMessage(a);
        a != null && this.asyncSendMessage(a);
      };
      e.setMessageReceiver = function (a) {
        this.$1 = a;
      };
      e.setLoggingEventHandler = function (a) {
        this.$2 = a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ZenonHybridMWMessageSender",
  [
    "FBLogger",
    "ZenonActorHooks",
    "ZenonGraphQLMWMessageSender",
    "ZenonInfraActionsLogger",
    "ZenonMWMessageTranslator",
    "ZenonMWMessageTypes",
    "ZenonMqttMWMessageSender",
    "ZenonXControllerMWMessageSender",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = new (c("ZenonXControllerMWMessageSender"))()),
          (this.$2 = new (c("ZenonGraphQLMWMessageSender"))()),
          (this.$3 = new (c("ZenonMqttMWMessageSender"))()),
          (this.$4 = !1),
          (this.$4 = d("ZenonActorHooks").ZenonActor.isPage());
      }
      var b = a.prototype;
      b.sendMessage = function (a) {
        var b = d("ZenonMWMessageTranslator").toMWMessage(a),
          e = b == null ? void 0 : b.jsonPayload.header.type;
        if (
          a.getHeader().remoteSignalingID == null &&
          e != null &&
          e !== d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.JOIN
        ) {
          c("ZenonInfraActionsLogger").logCheckpoint({
            checkpoint: "[ZP][DROP] No remoteSignalingID in message: " + e,
          });
          c("FBLogger")("rtc_www").warn(
            "[ZP][DROP] No remoteSignalingID in message: " + e
          );
          return;
        }
        b != null &&
          (this.$4
            ? this.$2.asyncSendMessage(b)
            : (this.$3.asyncSendMessage(b),
              e !==
                d("ZenonMWMessageTypes").ZenonMWSignalingPayloadType
                  .DATA_MESSAGE && this.$2.asyncSendMessage(b)));
      };
      b.setMessageReceiver = function (a) {
        this.$1.setMessageReceiver(a), this.$2.setMessageReceiver(a);
      };
      b.setLoggingEventHandler = function (a) {
        this.$1.setLoggingEventHandler(a), this.$2.setLoggingEventHandler(a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ZenonParentSignalingClient",
  [
    "RtcWwwWebModuleParentSignalingClientQPLEvent",
    "ZenonDebugLogger",
    "ZenonSignalingTypes",
    "recoverableViolation",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, d, e) {
        var f = this;
        this.remoteSignalingID = null;
        this.$4 = "init";
        this.$6 = null;
        this.$7 = null;
        this.$8 = function () {};
        this.$9 = function (a, b, d) {
          c("ZenonDebugLogger")
            .getInstance()
            .logStateMachine(
              "ParentSignalingClient",
              f.$4,
              "received " + a.eventName,
              f.$1.getSignalingID()
            );
          switch (a.eventName) {
            case "inviteRequest":
              f.$11(a, b, d);
              break;
            case "remoteSdpRequest":
              f.$12(a, b);
              break;
            case "terminateRequest":
              f.$13(a, b, d);
              break;
          }
        };
        this.$1 = a;
        this.$3 = d;
        this.$5 = e;
        this.$2 = b;
        b.setReceiver(this.$9);
        c("ZenonDebugLogger")
          .getInstance()
          .startQPL(
            c("RtcWwwWebModuleParentSignalingClientQPLEvent"),
            +a.getSignalingID()
          );
      }
      var b = a.prototype;
      b.setSignalingEventHandlers = function (a) {
        if (this.$6 != null) {
          c("recoverableViolation")(
            "setSignalingEventHandlers should only be called once, to avoid accidentally losing handlers.",
            "rtc_www"
          );
          return;
        }
        this.$6 = a;
      };
      b.setLoggingEventHandler = function (a) {
        this.$8 = a;
      };
      b.getSignalingModel = function () {
        return this.$1;
      };
      b.sendDismiss = function (a) {
        this.$4 = "terminated";
        a = {
          eventName: "terminateRequest",
          fromJoinResponse: !1,
          reason: a,
          shouldInformPeer: !0,
        };
        this.$10(a);
      };
      b.receiveMessage = function (a) {
        this.$2.receiveMessage(a);
      };
      b.isTerminated = function () {
        return this.$4 === "terminated";
      };
      b.sendAnswerIntent = function () {
        if (this.$4 === "inviteAcknowledged") {
          this.$4 = "answered";
          var a = { eventName: "answerIntentRequest" };
          this.$10(a);
        } else
          throw c("unrecoverableViolation")(
            "sendAnswerIntent called in unexpected state " + this.$4,
            "rtc_www"
          );
      };
      b.respondToInvite = function (a) {
        if (this.$4 === "inviteReceived") {
          if (this.$7 == null)
            throw c("unrecoverableViolation")(
              "respondToInvite called without inviteMessageId being populated first",
              "rtc_www"
            );
          this.$4 = "inviteAcknowledged";
          a = { ackMessageId: this.$7, eventName: "inviteResponse", status: a };
          this.$10(a);
        } else
          throw c("unrecoverableViolation")(
            "respondToInvite called in unexpected state " + this.$4,
            "rtc_www"
          );
      };
      b.initiateClientRenegotiation = function (a) {
        throw c("unrecoverableViolation")(
          "initiateClientRenegotiation called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendClientEvent = function (a) {
        throw c("unrecoverableViolation")(
          "sendClientEvent called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendInvite = function (a, b) {
        throw c("unrecoverableViolation")(
          "sendInvite called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendSdp = function (a, b) {
        throw c("unrecoverableViolation")(
          "sendSdp called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendIceCandidate = function (a) {
        throw c("unrecoverableViolation")(
          "sendIceCandidate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendMediaUpdate = function (a) {
        throw c("unrecoverableViolation")(
          "sendMediaUpdate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendAddParticipantsMessage = function (a) {
        throw c("unrecoverableViolation")(
          "sendAddParticipantsMessage called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendRemoveParticipantsRequest = function (a) {
        throw c("unrecoverableViolation")(
          "sendRemoveParticipantsRequest called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendUsersApprovalRequest = function (a, b) {
        throw c("unrecoverableViolation")(
          "sendUsersApprovalRequest called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendStateSyncUnsubscribe = function (a) {
        throw c("unrecoverableViolation")(
          "sendStateSyncUnsubscribe called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendStateSyncUpdate = function (a, b) {
        throw c("unrecoverableViolation")(
          "sendStateSyncUpdate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendSubscriptionRequest = function (a) {
        throw c("unrecoverableViolation")(
          "sendSubscriptionRequest called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendClientInfo = function (a) {
        throw c("unrecoverableViolation")(
          "sendClientInfo called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.sendGenericDataMessage = function (a, b, d) {
        throw c("unrecoverableViolation")(
          "sendGenericDataMessage called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?",
          "rtc_www"
        );
      };
      b.$10 = function (a) {
        c("ZenonDebugLogger")
          .getInstance()
          .logStateMachine(
            "ParentSignalingClient",
            this.$4,
            "sending " + a.eventName,
            this.$1.getSignalingID()
          ),
          this.$3.sendEvent(a);
      };
      b.$11 = function (a, b, c) {
        this.$4 === "init" &&
          ((this.$4 = "inviteReceived"), (this.$7 = b), this.$5(a, c, this));
      };
      b.$13 = function (a, b, c) {
        if (this.$4 !== "terminated") {
          this.$4 = "terminated";
          c = { ackMessageId: b, eventName: "dismissResponse" };
          this.$3.sendEvent(c);
          if (this.$6 && this.$6.onDismissReceived) {
            this.$6.onDismissReceived(
              this.$1.getSignalingID(),
              a.reason,
              (b = a.subreason) != null ? b : null
            );
          }
        }
      };
      b.$12 = function (a, b) {
        b = {
          ackMessageId: b,
          acknowledgedVersion: a.sdp.version,
          eventName: "remoteSdpResponse",
          negotiateType: a.negotiateType,
          status: d("ZenonSignalingTypes").ZenonRemoteSdpResponseStatus.OK,
          type: a.sdp.type,
        };
        this.$3.sendEvent(b);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "TokenBucketRateLimit",
  ["DateConsts"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e3;
    a = (function () {
      function a(a, b) {
        (this.$1 = a * h),
          (this.$2 = a * h),
          (this.$3 = Date.now()),
          (this.$4 = b * h);
      }
      var b = a.prototype;
      b.take = function (a) {
        a === void 0 && (a = 1);
        a = a * h;
        this.$5();
        if (this.$2 < a) return !1;
        this.$2 -= a;
        return !0;
      };
      b.$5 = function () {
        if (this.$2 >= this.$1) return;
        var a = Date.now(),
          b = (a - this.$3) / d("DateConsts").MS_PER_SEC;
        b = Math.round(b * this.$4);
        if (b === 0) return;
        this.$2 = Math.min(this.$1, this.$2 + b);
        this.$3 = a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ZenonSDKRateLimiter",
  ["TokenBucketRateLimit", "ZenonPlatformRateLimitSitevarConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = new Map();
      }
      var b = a.prototype;
      b.take = function (a, b) {
        b === void 0 && (b = 1);
        a = this.$2(a);
        return a.take(b);
      };
      b.$2 = function (a) {
        var b,
          d = this.$1.get(a);
        if (d) return d;
        b =
          (b = c("ZenonPlatformRateLimitSitevarConfig").buckets.get(a)) != null
            ? b
            : c("ZenonPlatformRateLimitSitevarConfig")["default"];
        d = new (c("TokenBucketRateLimit"))(b.bucket_size, b.refill_rate);
        this.$1.set(a, d);
        return d;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ZenonParentCallsManager",
  [
    "BaseEventEmitter",
    "FBLogger",
    "JSResource",
    "LazyLoadInstance",
    "ZenonCallLogger",
    "ZenonCallsModelTypes",
    "ZenonCollisionContext",
    "ZenonDismissReason",
    "ZenonHybridMWMessageSender",
    "ZenonParentCallSummaryLogProcessor",
    "ZenonParentQPLLogProcessor",
    "ZenonParentSignalingClient",
    "ZenonSDKRateLimiter",
    "ZenonSignalingProtocol",
    "gkx",
    "recoverableViolation",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(b) {
        var e;
        e = a.call(this) || this;
        e.$ZenonParentCallsManager4 = new Map();
        e.$ZenonParentCallsManager5 = new Set();
        e.$ZenonParentCallsManager6 = null;
        e.onInviteReceived = function (a, b, f) {
          var g,
            h = f.getSignalingModel().getSignalingID();
          f.setSignalingEventHandlers({
            onDismissReceived: e.onDismissReceived,
          });
          var i = a.inviterID,
            j = a.otherParticipants,
            k = a.requestingVideo;
          a = a.roomInfo;
          var l =
              b === c("ZenonSignalingProtocol").P2P
                ? "p2p_incoming"
                : "multiway_incoming",
            m = e.$ZenonParentCallsManager8({
              callID: h,
              callTrigger: l,
              isCaller: !1,
              isVideo: k,
              peerID: i,
              protocol: b,
            });
          m.log({ name: "inviteReceived" });
          var n = e.$ZenonParentCallsManager3.isSupportedClientForProtocol(b),
            o = n ? "OK" : "NOT_SUPPORTED";
          f.respondToInvite(o);
          m.log({ name: "inviteResponded" });
          o = { thread: { id: "0", type: 2 }, type: "thread" };
          if (
            ((g = a.context) == null ? void 0 : g.groupThreadID) ||
            ((g = a.context) == null ? void 0 : g.peerID)
          ) {
            o = {
              thread:
                (g = d(
                  "ZenonCollisionContext"
                ).getThreadIDAndTypeFromCollisionContext(a.context)) != null
                  ? g
                  : o.thread,
              type: "thread",
            };
          } else
            ((g = a.room) == null ? void 0 : g.linkHash) != null &&
              ((g = a.room) == null ? void 0 : g.roomName) != null &&
              (o = { room: a.room, type: "room" });
          a = {
            context: o,
            controllerParams: {
              callContext: a.name,
              callID: h,
              configuration: b,
              serverInfoData:
                (o = (g = a.context) == null ? void 0 : g.serverInfoData) !=
                null
                  ? o
                  : null,
            },
            inviterID: i,
            isClientPermissableRing: n,
            onAccept: function (a, d) {
              d = d.isPopupBlocked;
              m.log({ name: "callAccepted", trigger: l });
              b === c("ZenonSignalingProtocol").P2P &&
                e.$ZenonParentCallsManager2.get(function (a) {
                  a.storeOfferForBackwardsCompat(i, h);
                });
              f.sendAnswerIntent();
              e.$ZenonParentCallsManager9(a, {
                callID: h,
                callTrigger: l,
                isPopupBlocked: d,
                isVideo: k,
                peerID: i,
                protocol: b,
              });
            },
            onDecline: function (a, b) {
              b === void 0 && (b = null), e.onDecline(h, m, a, b);
            },
            otherParticipants: j,
            requestingVideo: k,
            ringID: h,
          };
          e.emit("incomingRing", a);
        };
        e.onDismissReceived = function (a, b) {
          var c = d("ZenonDismissReason").dismissReasonToCancelReason(b);
          c = { reason: c, ringID: a };
          e.emit("ringCancel", c);
          c = e.$ZenonParentCallsManager4.get(a);
          c != null &&
            (c.log({ name: "dismissRecv" }),
            c.log({ endCallReason: b, isRemoteEnded: !0, name: "callEnded" }));
        };
        e.$ZenonParentCallsManager3 = b;
        e.$ZenonParentCallsManager2 = new (c("LazyLoadInstance"))(
          c("JSResource")("ZenonSignalingParentTransport").__setRef(
            "ZenonParentCallsManager"
          ),
          function (a) {
            return new a();
          }
        );
        var f = new (c("ZenonHybridMWMessageSender"))();
        e.$ZenonParentCallsManager1 = new (c("LazyLoadInstance"))(
          c("JSResource")("ZenonSignalingClientManager").__setRef(
            "ZenonParentCallsManager"
          ),
          function (a) {
            return new a(
              c("ZenonParentSignalingClient"),
              e.onInviteReceived,
              f
            );
          }
        );
        c("gkx")("357") &&
          (e.$ZenonParentCallsManager6 = new (c("ZenonSDKRateLimiter"))());
        return e;
      }
      var f = e.prototype;
      f.startOutgoingCallIntent = function (a, b) {
        if (!this.$ZenonParentCallsManager7("startOutgoingCallIntent")) return;
        var c = b.callID,
          d = b.callTrigger,
          e = b.isVideo,
          f = b.peerID,
          g = b.protocol;
        this.$ZenonParentCallsManager8({
          callID: c,
          callTrigger: d,
          isCaller: !0,
          isVideo: e,
          peerID: f,
          protocol: g,
        });
        this.$ZenonParentCallsManager9(a, b);
      };
      f.$ZenonParentCallsManager8 = function (a) {
        var b = a.callID,
          d = a.callTrigger,
          e = a.isCaller,
          f = a.isVideo,
          g = a.peerID;
        a = a.protocol;
        var h = this.$ZenonParentCallsManager4.get(b);
        !h
          ? ((h = new (c("ZenonCallLogger"))(
              {
                callID: b,
                callTrigger: d,
                isCaller: e,
                isVideo: f,
                peerID: g,
                protocol: a,
              },
              c("gkx")("1536863")
                ? [
                    c("ZenonParentCallSummaryLogProcessor"),
                    c("ZenonParentQPLLogProcessor"),
                  ]
                : [c("ZenonParentCallSummaryLogProcessor")]
            )),
            this.$ZenonParentCallsManager4.set(b, h))
          : c("recoverableViolation")(
              "Call logger key collision in parentCallsManager for callID: " +
                b,
              "rtc_www"
            );
        return h;
      };
      f.$ZenonParentCallsManager9 = function (a, c) {
        var e, f, g, h, i;
        return b("regeneratorRuntime").async(
          function (j) {
            while (1)
              switch ((j.prev = j.next)) {
                case 0:
                  (e = c.alohaEscalatedMW),
                    (f = c.callID),
                    (g = c.isPopupBlocked);
                  this.$ZenonParentCallsManager2.get(function (b) {
                    b.verificationNonce = a;
                  });
                  this.$ZenonParentCallsManager5.add(f);
                  h = this.$ZenonParentCallsManager4.get(f);
                  if (!(h != null)) {
                    j.next = 11;
                    break;
                  }
                  h.log({ isPopupBlocked: g, name: "popupOpened" });
                  if (!(e != null)) {
                    j.next = 11;
                    break;
                  }
                  j.next = 9;
                  return b("regeneratorRuntime").awrap(e);
                case 9:
                  (i = j.sent),
                    i &&
                      h.log({
                        endCallReason:
                          d("ZenonDismissReason").ZenonDismissReason
                            .OtherInstanceHandled,
                        endCallSubreason: "forceP2POverMWForAloha",
                        isRemoteEnded: !1,
                        name: "callEnded",
                      });
                case 11:
                case "end":
                  return j.stop();
              }
          },
          null,
          this
        );
      };
      f.initListeners = function (a) {
        var b = this;
        for (
          var a = a,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          e.subscribe(
            function (a) {
              return b.onMessageReceived(a);
            },
            function (a) {
              return b.onRawP2PMessageReceived(a);
            },
            function (a) {
              return b.onRawMWMessageReceived(a);
            }
          );
        }
      };
      f.onMessageReceived = function (a) {
        var b = a.getHeader().signalingID;
        if (b != null && this.$ZenonParentCallsManager5.has(b)) return;
        this.$ZenonParentCallsManager1.get(function (b) {
          b.receiveMessage(a);
        });
      };
      f.onRawP2PMessageReceived = function (a) {
        this.$ZenonParentCallsManager2.get(function (b) {
          b.enqueueRawP2PMessage(a);
        });
      };
      f.onRawMWMessageReceived = function (a) {
        this.$ZenonParentCallsManager2.get(function (b) {
          b.enqueueRawMWMessage(a);
        });
      };
      f.onDecline = function (a, b, e, f) {
        f === void 0 && (f = null),
          this.$ZenonParentCallsManager1.get(function (g) {
            g = g.getSignalingClient(a);
            if (g) {
              var h = d("ZenonDismissReason").endCallToDismissReason(e);
              e !== "VersionUnsupported" &&
                f !==
                  d("ZenonCallsModelTypes").ZenonEndCallSubreason
                    .CallsBlocked &&
                g.sendDismiss(h);
              b.log({
                endCallReason: h,
                endCallSubreason: f == null ? null : f,
                isRemoteEnded: !1,
                name: "callEnded",
              });
            } else c("recoverableViolation")("signaling client should be defined", "rtc_www");
          });
      };
      f.removeListeners = function (a) {
        for (
          var a = a,
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          d.unsubscribe();
        }
      };
      f.$ZenonParentCallsManager7 = function (a) {
        if (
          this.$ZenonParentCallsManager6 &&
          !this.$ZenonParentCallsManager6.take(a)
        ) {
          c("FBLogger")("rtc_www").warn(
            "[ZP] Dropping " +
              a +
              " invocation. This SDK method is being called too rapidly."
          );
          return !1;
        }
        return !0;
      };
      return e;
    })(c("BaseEventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "ZenonP2PMessageValidator",
  ["ZenonActorHooks", "ZenonP2PMessageTypes", "err", "orEmptyArray"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = JSON.parse(a);
      var b = a.call_id,
        e = a.from,
        f = a.id,
        g = a.msg_type,
        h = a.payload,
        i = a.source,
        j = a.to;
      a = a.type;
      if (j != null && j.toString() !== d("ZenonActorHooks").ZenonActor.getID())
        throw c("err")(
          "P2P message.to field " +
            j +
            " does not match logged in user ID " +
            d("ZenonActorHooks").ZenonActor.getID() +
            " for msg_type " +
            g
        );
      if (e && b && h) {
        j = {
          call_id: b,
          from: e,
          id: f,
          msg_type: g,
          payload: h,
          source: i,
          type: a,
        };
        return j;
      } else
        throw c("err")(
          "P2P message does not have valid from, call_id, and payload fields"
        );
    }
    function b(a) {
      if (a) {
        var b = a.msg_type;
        switch (b) {
          case d("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.OFFER:
            return i(a);
          case d("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.HANG_UP:
            return j(a);
          case d("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType
            .ICE_CANDIDATE:
            return h(a);
          case d("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType
            .OTHER_DISMISS:
            return k(a);
        }
      }
      return null;
    }
    function h(a) {
      var b = a.from,
        c = a.payload;
      a = a.source;
      c = JSON.parse(c);
      var e = c.call_id,
        f = c.capability,
        g = c.label,
        h = c.msg_id,
        i = c.sdp,
        j = c.sdp_line_idx,
        k = c.sdp_mid;
      c = c.version;
      e = {
        call_id: e,
        capability: f,
        from: b,
        label: g,
        msg_id: h,
        sdp: i,
        sdp_line_idx: j,
        sdp_mid: k,
        source: a,
        type: d("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType
          .ICE_CANDIDATE,
        version: c,
      };
      return e;
    }
    function i(a) {
      var b,
        e,
        f = a.from,
        g = a.payload;
      a = a.source;
      g = JSON.parse(g);
      var h = g.call_id,
        i = g.calltype,
        j = g.capability;
      b = (b = g.escalation_conference_name) != null ? b : null;
      var k = c("orEmptyArray")(g.experiments),
        l = c("orEmptyArray")(g.extraParams);
      e = (e = g.fbexp) != null ? e : "";
      var m = g.handlescollision !== void 0 ? g.handlescollision : !1,
        n =
          g.offer_escalation_support !== void 0
            ? g.offer_escalation_support
            : !1,
        o = g.msg_id,
        p = g.sdp;
      g = g.videoon;
      h = {
        call_id: h,
        calltype: i,
        capability: j,
        escalation_conference_name: b,
        experiments: k,
        extraParams: l,
        fbexp: e,
        from: f,
        handlescollision: m,
        msg_id: o,
        offer_escalation_support: n,
        sdp: p,
        source: a,
        type: d("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.OFFER,
        videoon: g,
      };
      return h;
    }
    function j(a) {
      var b = a.from,
        c = a.payload;
      a = a.source;
      c = JSON.parse(c);
      var e = c.call_id,
        f = c.capability,
        g = c.msg_id,
        h = c.reason;
      c = c.subreason;
      e = {
        call_id: e,
        capability: f,
        from: b,
        msg_id: g,
        reason: h,
        source: a,
        subreason: c,
        type: d("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.HANG_UP,
      };
      return e;
    }
    function k(a) {
      var b = a.from,
        c = a.payload;
      a = a.source;
      c = JSON.parse(c);
      var e = c.call_id,
        f = c.capability;
      c = c.msg_id;
      e = {
        call_id: e,
        capability: f,
        from: b,
        msg_id: c,
        source: a,
        type: d("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType
          .OTHER_DISMISS,
      };
      return e;
    }
    g.getValidP2PMessage = a;
    g.transformP2PMessage = b;
  },
  98
);
__d(
  "RTWebSignalingListener",
  [
    "FBLogger",
    "FBMqttChannel",
    "ZenonDebugLogger",
    "ZenonMWMessageReliabilityLogger",
    "ZenonMWMessageTranslator",
    "ZenonP2PMessageTranslator",
    "ZenonP2PMessageValidator",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.subscribe = function (a, b, e) {
        var f = this;
        c("FBMqttChannel").subscribe("/webrtc", function (e) {
          var g = c("ZenonDebugLogger").getInstance(),
            h = d("ZenonP2PMessageValidator").getValidP2PMessage(e),
            i = d("ZenonP2PMessageValidator").transformP2PMessage(h);
          f.$1(e, b);
          if (i) {
            e = d("ZenonP2PMessageTranslator").toSignalingMessage(i);
            e &&
              (g.logP2PMessageReceived(h), a(e), g.logP2PMessageProcessed(h));
          }
        });
        c("FBMqttChannel").subscribe("/rtc_multi", function (b) {
          try {
            var g = JSON.parse(b),
              h = c("ZenonDebugLogger").getInstance();
            d("ZenonMWMessageReliabilityLogger").logReceivedMessage(g);
            h.logMWMessage("RECEIVED", "MQTT", g);
            h = d("ZenonMWMessageTranslator").toSignalingMessage(g);
            a(h);
            e && f.$2(b, e);
            d("ZenonMWMessageReliabilityLogger").logProcessingMessage(g);
          } catch (a) {
            c("FBLogger")("rpweb")
              .catching(a)
              .warn("Error receiving MQTT message from /rtc_multi topic");
          }
        });
      };
      b.unsubscribe = function () {
        c("FBMqttChannel").unsubscribeAll("/webrtc"),
          c("FBMqttChannel").unsubscribeAll("/rtc_multi");
      };
      b.$1 = function (a, b) {
        try {
          a = JSON.parse(a);
          b(a);
        } catch (a) {
          c("recoverableViolation")(
            "Signaling messages should be json parsable. error:" + a,
            "rtweb"
          );
        }
      };
      b.$2 = function (a, b) {
        try {
          a = JSON.parse(a);
          b(a);
        } catch (a) {
          c("recoverableViolation")(
            "Signaling messages should be json parsable. error:" + a,
            "rtweb"
          );
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "WebPerfDeviceInfoLogFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1871697");
    c = b("FalcoLoggerInternal").create("web_perf_device_info_log", a);
    e.exports = c;
  },
  null
);
__d(
  "XDeviceClassRealtimeController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/web_perf/get_perf_level/", {});
  },
  null
);
__d(
  "WebDevicePerfInfoLogging",
  [
    "AsyncTypedRequest",
    "JSScheduler",
    "Promise",
    "WebDevicePerfInfoData",
    "WebPerfDeviceInfoLogFalcoEvent",
    "XDeviceClassRealtimeController",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = document.createElement("canvas");
      b = b.getContext("webgl") || b.getContext("experimental-webgl");
      if (!b) return;
      var c = b.getExtension("WEBGL_debug_renderer_info");
      if (!c) return;
      var d = b.getParameter(c.UNMASKED_RENDERER_WEBGL);
      b = b.getParameter(c.UNMASKED_VENDOR_WEBGL);
      a.gpu_vendor = b;
      a.gpu_renderer = d;
    }
    function i() {
      var a = window.navigator,
        b = {};
      a &&
        a.hardwareConcurrency !== void 0 &&
        (b.cpu_cores = a.hardwareConcurrency);
      a && a.deviceMemory !== void 0 && (b.ram = a.deviceMemory);
      c("WebDevicePerfInfoData").needsFullUpdate && h(b);
      return b;
    }
    function j() {
      var a = i();
      c("WebPerfDeviceInfoLogFalcoEvent").log(function () {
        var b;
        return {
          cpu_cores: (b = a.cpu_cores) != null ? b : null,
          ram: (b = a.ram) != null ? b : null,
          gpu_renderer: (b = a.gpu_renderer) != null ? b : null,
          gpu_vendor: (b = a.gpu_vendor) != null ? b : null,
        };
      });
    }
    function k() {
      var a, d;
      return b("regeneratorRuntime").async(
        function (e) {
          while (1)
            switch ((e.prev = e.next)) {
              case 0:
                a = i();
                e.next = 3;
                return b("regeneratorRuntime").awrap(
                  new (c("AsyncTypedRequest"))(
                    c("XDeviceClassRealtimeController").getURIBuilder().getURI()
                  )
                    .setData(a)
                    .promisePayload()
                );
              case 3:
                d = e.sent;
                return e.abrupt("return", d.devicePerfClassLevel);
              case 5:
              case "end":
                return e.stop();
            }
        },
        null,
        this
      );
    }
    function a() {
      (c("WebDevicePerfInfoData").needsFullUpdate ||
        c("WebDevicePerfInfoData").needsPartialUpdate) &&
        d("JSScheduler").scheduleSpeculativeCallback(j);
    }
    function e() {
      return new (b("Promise"))(function (a, b) {
        c("WebDevicePerfInfoData").needsFullUpdate ||
        c("WebDevicePerfInfoData").needsPartialUpdate
          ? d("JSScheduler").scheduleSpeculativeCallback(function () {
              k().then(a)["catch"](b);
            })
          : b();
      });
    }
    g.doLog = a;
    g.doLogPromise = e;
  },
  98
);
__d(
  "AcfToastImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1873550");
    c = b("FalcoLoggerInternal").create("acf_toast_impression", a);
    e.exports = c;
  },
  null
);
__d(
  "ClientConsistencyFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1764786");
    c = b("FalcoLoggerInternal").create("client_consistency", a);
    e.exports = c;
  },
  null
);
__d(
  "CometTopnavItemClickFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743396");
    c = b("FalcoLoggerInternal").create("comet_topnav_item_click", a);
    e.exports = c;
  },
  null
);
__d(
  "CometTopnavItemImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743397");
    c = b("FalcoLoggerInternal").create("comet_topnav_item_impression", a);
    e.exports = c;
  },
  null
);
__d(
  "QpActionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744247");
    c = b("FalcoLoggerInternal").create("qp_action", a);
    e.exports = c;
  },
  null
);
__d(
  "QpImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744249");
    c = b("FalcoLoggerInternal").create("qp_impression", a);
    e.exports = c;
  },
  null
);
__d(
  "ProfileEngagementTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:ProfileEngagementLoggerConfig"
    );
  },
  null
);
__d(
  "FalcoLoggerTransports",
  [
    "AnalyticsCoreData",
    "Banzai",
    "JSResource",
    "ODS",
    "PersistedQueue",
    "Queue",
    "WebSession",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 5 * 1024,
      i = 60 * 1e3,
      j = 1e3,
      k = "falco:",
      l = new (c("Queue"))(),
      m = [],
      n = 0,
      o,
      p = !1,
      q = !1,
      r = !1,
      s = !0;
    function t(a, b) {
      var c = b.item.extra.length;
      n + c > h && (clearTimeout(o), u());
      m.push([a, b]);
      n += c;
    }
    function u() {
      o = null;
      p = !1;
      var a = m;
      l.enqueue(function (b) {
        return b.log(
          a.map(function (a) {
            return a[1].item;
          }),
          function (b) {
            for (var c = 0; c < a.length; c++) {
              var d = a[c],
                e = d[0];
              d = d[1];
              e.markItem(d, b);
            }
          }
        );
      });
      m = [];
      n = 0;
    }
    function v(a) {
      return {
        events: a.map(function (a) {
          return {
            name: a.name,
            extra: a.extra,
            rate: a.policy.r,
            time: a.time / 1e3,
          };
        }),
      };
    }
    function w(a) {
      return Object.freeze({
        deviceId: c("AnalyticsCoreData").device_id,
        sessionId: a,
        appId: c("AnalyticsCoreData").app_id,
        pushPhase: c("AnalyticsCoreData").push_phase,
      });
    }
    function x(a, b) {
      y("planes.banzai.write", a.length);
      for (var e = 0; e < a.length; e++) {
        var f,
          g = a[e];
        c("Banzai").post(
          k + g.name,
          ((f = {}),
          (f.e = g.extra),
          (f.r = g.policy.r),
          (f.d = c("AnalyticsCoreData").device_id),
          (f.s = d("WebSession").getId()),
          (f.t = g.time),
          f),
          b
        );
      }
    }
    function y(a, b) {
      d("ODS").bumpEntityKey(
        1344,
        "falco.fabric.www." + c("AnalyticsCoreData").push_phase,
        a,
        b
      );
    }
    var z = {
      log: function (a, b) {
        x(a, c("Banzai").BASIC), b(!0);
      },
      logImmediately: function (a, b) {
        x(a, c("Banzai").VITAL), b(!0);
      },
      logCritical: function (a, b) {
        x(a, { signal: !0, retry: !0 }), b(!0);
      },
    };
    function A() {
      if (q) return;
      c("JSResource").loadAll(
        [
          c("JSResource")("TransportSelectingClientSingleton").__setRef(
            "FalcoLoggerTransports"
          ),
          c("JSResource")(
            "RequestStreamCommonRequestStreamCommonTypes"
          ).__setRef("FalcoLoggerTransports"),
        ],
        function (a, b) {
          var e = b.FlowStatus,
            f;
          b = {
            onTermination: function (a) {
              a.message === "Stream closed"
                ? (l.stop(!0), (q = !1))
                : ((s = !1),
                  l.start(function (a) {
                    return a(z);
                  }));
            },
            onFlowStatus: function (a) {
              a === e.Started &&
                l.start(function (a) {
                  return a({
                    log: function (b, a) {
                      y("planes.bladerunner.write", b.length);
                      b = JSON.stringify(v(b));
                      f &&
                        (c("AnalyticsCoreData").enable_ack
                          ? c("promiseDone")(f.amendWithAck(b), function () {
                              return a(!0);
                            })
                          : (f.amendWithoutAck(b), a(!0)));
                    },
                    logImmediately: function (b, a) {
                      this.log(b, a);
                    },
                    logCritical: function (b, a) {
                      this.log(b, a);
                    },
                  });
                });
            },
          };
          c("promiseDone")(
            a
              .requestStream(
                { method: "Falco" },
                JSON.stringify(w(d("WebSession").getId())),
                b,
                { requestId: "" }
              )
              .then(function (a) {
                f = a;
              })
              ["catch"](function (a) {
                l.stop(!0), (q = !1);
              })
          );
        }
      );
      q = !0;
    }
    function B(a) {
      return c("AnalyticsCoreData").enable_bladerunner && s && a.s === 1;
    }
    function a() {
      if (r) return;
      r = !0;
      c("PersistedQueue").setHandler("falco_queue_log", function (a) {
        var b;
        while ((b = a.dequeueItem()))
          (function (b) {
            B(b.item.policy)
              ? (A(), o == null && (o = setTimeout(u, i)), t(a, b))
              : z.log([b.item], function (c) {
                  return a.markItem(b, c);
                });
          })(b);
      });
      c("PersistedQueue").setHandler("falco_queue_immediately", function (a) {
        var b;
        while ((b = a.dequeueItem()))
          (function (b) {
            B(b.item.policy)
              ? (A(),
                (o == null || !p) &&
                  (clearTimeout(o), (o = setTimeout(u, j)), (p = !0)),
                t(a, b))
              : z.logImmediately([b.item], function (c) {
                  return a.markItem(b, c);
                });
          })(b);
      });
      c("PersistedQueue").setHandler("falco_queue_critical", function (a) {
        var b;
        while ((b = a.dequeueItem()))
          (function (b) {
            var c = b.item;
            B(c.policy)
              ? (A(),
                l.enqueue(function (d) {
                  return d.logCritical([c], function (c) {
                    return a.markItem(b, c);
                  });
                }))
              : z.logCritical([c], function (c) {
                  return a.markItem(b, c);
                });
          })(b);
      });
    }
    g.attach = a;
  },
  98
);
__d(
  "FleetBeaconStates",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.getName = function () {
        return "initial";
      };
      b.getFleetBeaconRunner = function () {
        return this.$1;
      };
      b.prepareFleetBeaconSucceed = function () {
        throw new Error("Invalid transition");
      };
      b.prepareFleetBeaconFailed = function () {
        throw new Error("Invalid transition");
      };
      b.subscribeIssued = function () {
        throw new Error("Invalid transition");
      };
      b.subscribeSuccessSignalReceived = function () {
        throw new Error("Invalid transition");
      };
      b.publishIssued = function () {
        throw new Error("Invalid transition");
      };
      b.publishFailed = function () {
        throw new Error("Invalid transition");
      };
      b.payloadReceived = function () {
        throw new Error("Invalid transition");
      };
      b.waitForPublishTimeout = function () {
        throw new Error("Invalid transition");
      };
      b.subscribeTimeout = function () {
        throw new Error("Invalid transition");
      };
      b.payloadTimeout = function () {
        throw new Error("Invalid transition");
      };
      b.cleanUpFinish = function () {
        throw new Error("Invalid transition");
      };
      return a;
    })();
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.getName = function () {
        return "preparing";
      };
      c.prepareFleetBeaconSucceed = function () {
        var b = this;
        return {
          newState: new g(a.prototype.getFleetBeaconRunner.call(this)),
          action: function () {
            a.prototype.getFleetBeaconRunner.call(b).runFleetBeaconTest();
          },
        };
      };
      c.prepareFleetBeaconFailed = function () {
        var b = this;
        return {
          newState: new m(a.prototype.getFleetBeaconRunner.call(this)),
          action: function () {
            b.getFleetBeaconRunner().cleanUpFleetBeacon();
          },
        };
      };
      return b;
    })(a);
    var g = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.getName = function () {
          return "before_subscribe";
        };
        c.subscribeIssued = function () {
          var a = this;
          return {
            newState: new h(b.prototype.getFleetBeaconRunner.call(this)),
            action: function () {
              b.prototype.getFleetBeaconRunner.call(a).startSubscribeTimer();
            },
          };
        };
        return a;
      })(a),
      h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.getName = function () {
          return "subscribe_issued";
        };
        c.subscribeSuccessSignalReceived = function () {
          var a = this;
          return {
            newState: new i(b.prototype.getFleetBeaconRunner.call(this)),
            action: function () {
              b.prototype.getFleetBeaconRunner.call(a).waitForNextPublish();
            },
          };
        };
        c.subscribeTimeout = function () {
          var a = this;
          return {
            newState: new k(b.prototype.getFleetBeaconRunner.call(this)),
            action: function () {
              a.getFleetBeaconRunner().cleanUpFleetBeacon();
            },
          };
        };
        return a;
      })(a),
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.getName = function () {
          return "waiting_to_publish";
        };
        c.waitForPublishTimeout = function () {
          var a = this;
          return {
            newState: new j(b.prototype.getFleetBeaconRunner.call(this)),
            action: function () {
              b.prototype.getFleetBeaconRunner.call(a).publish(),
                b.prototype.getFleetBeaconRunner.call(a).startPayloadTimer();
            },
          };
        };
        return a;
      })(a),
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.getName = function () {
          return "publish_issued";
        };
        c.publishFailed = function () {
          var a = this;
          return {
            newState: new m(b.prototype.getFleetBeaconRunner.call(this)),
            action: function () {
              a.getFleetBeaconRunner().cleanUpFleetBeacon();
            },
          };
        };
        c.payloadReceived = function () {
          var a = this,
            c,
            d;
          (function () {});
          b.prototype.getFleetBeaconRunner.call(this).isLastPayload()
            ? ((c = new l(b.prototype.getFleetBeaconRunner.call(this))),
              (d = function () {
                a.getFleetBeaconRunner().cleanUpFleetBeacon();
              }))
            : ((c = new i(b.prototype.getFleetBeaconRunner.call(this))),
              (d = function () {
                b.prototype.getFleetBeaconRunner.call(a).waitForNextPublish();
              }));
          return { newState: c, action: d };
        };
        c.payloadTimeout = function () {
          var a = this;
          return {
            newState: new k(b.prototype.getFleetBeaconRunner.call(this)),
            action: function () {
              a.getFleetBeaconRunner().cleanUpFleetBeacon();
            },
          };
        };
        return a;
      })(a),
      k = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.getName = function () {
          return "failed";
        };
        c.cleanUpFinish = function () {
          return {
            newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
            action: function () {},
          };
        };
        return a;
      })(a),
      l = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.getName = function () {
          return "succeed";
        };
        c.cleanUpFinish = function () {
          return {
            newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
            action: function () {},
          };
        };
        return a;
      })(a),
      m = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.getName = function () {
          return "aborted";
        };
        c.cleanUpFinish = function () {
          return {
            newState: new n(b.prototype.getFleetBeaconRunner.call(this)),
            action: function () {},
          };
        };
        return a;
      })(a),
      n = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.getName = function () {
          return "finish";
        };
        return a;
      })(a);
    f.FleetBeaconState = a;
    f.FleetBeaconPreparingState = b;
    f.FleetBeaconBeforeSubscribeState = g;
    f.FleetBeaconSubscribedIssuedState = h;
    f.FleetBeaconWaitingToPublishState = i;
    f.FleetBeaconPublishIssuedState = j;
    f.FleetBeaconFailedState = k;
    f.FleetBeaconSucceedState = l;
    f.FleetBeaconAbortedState = m;
    f.FleetBeaconFinishState = n;
  },
  66
);
__d(
  "FleetBeaconRunner",
  ["FleetBeaconStates", "clearTimeout", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
        this.$2 = new (d("FleetBeaconStates").FleetBeaconState)(this);
        var b = new (d("FleetBeaconStates").FleetBeaconPreparingState)(this);
        this.$1.cleanPreviousFleetBeaconResult();
        this.$6(function () {
          return { newState: b, action: function () {} };
        });
        this.$3 = 0;
        this.$1.setFleetBeaconRunner(this);
      }
      var b = a.prototype;
      b.getPublishTimes = function () {
        return this.$3;
      };
      b.prepareFleetBeaconTest = function () {
        this.$1.prepareFleetBeaconTest();
      };
      b.runFleetBeaconTest = function () {
        var a = this;
        this.$6(function () {
          return a.$2.subscribeIssued();
        });
        this.$7();
      };
      b.$7 = function () {
        this.$1.subscribe();
      };
      b.publish = function () {
        this.$1.publish();
      };
      b.isLastPayload = function () {
        return this.$3 >= this.$1.publishWaitIntervalsMS().length;
      };
      b.waitForNextPublish = function () {
        var a = this,
          b = this.$1.publishWaitIntervalsMS()[this.$3];
        this.$3 += 1;
        b === 0
          ? this.$8()
          : c("setTimeout")(function () {
              a.$8();
            }, b);
      };
      b.startSubscribeTimer = function () {
        var a = this,
          b = this.$1.subscribeTimeoutIntervalMS();
        this.$4 = c("setTimeout")(function () {
          a.$9();
        }, b);
      };
      b.startPayloadTimer = function () {
        var a = this,
          b = this.$1.payloadTimeoutIntervalMS();
        this.$5 = c("setTimeout")(function () {
          a.$10();
        }, b);
      };
      b.cleanUpFleetBeacon = function () {
        this.$1.cleanUpFleetBeacon();
      };
      b.onCleanUpFinish = function () {
        var a = this;
        this.$6(function () {
          return a.$2.cleanUpFinish();
        });
      };
      b.$8 = function () {
        var a = this;
        this.$6(function () {
          return a.$2.waitForPublishTimeout();
        });
      };
      b.$9 = function () {
        var a = this;
        this.$6(function () {
          return a.$2.subscribeTimeout();
        });
      };
      b.$10 = function () {
        var a = this;
        this.$6(function () {
          return a.$2.payloadTimeout();
        });
      };
      b.onPrepareFleetBeaconSuccess = function () {
        var a = this;
        this.$6(function () {
          return a.$2.prepareFleetBeaconSucceed();
        });
      };
      b.onPrepareFleetBeaconFailed = function () {
        var a = this;
        this.$6(function () {
          return a.$2.prepareFleetBeaconFailed();
        });
      };
      b.onSubscribe = function () {
        var a = this;
        c("clearTimeout")(this.$4);
        this.$6(function () {
          return a.$2.subscribeSuccessSignalReceived();
        });
      };
      b.onPayloadReceived = function () {
        var a = this;
        c("clearTimeout")(this.$5);
        this.$6(function () {
          return a.$2.payloadReceived();
        });
      };
      b.onPublishFailed = function () {
        var a = this;
        c("clearTimeout")(this.$5);
        this.$6(function () {
          return a.$2.publishFailed();
        });
      };
      b.$6 = function (a) {
        a = a();
        var b = this.$2;
        this.$2 = a.newState;
        var c = this.$2;
        this.$11(b, c);
        a.action();
      };
      b.$11 = function (a, b) {
        this.$1.onFleetBeaconStateTransition(a, b);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "FleetBeaconStateTransitionListener",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.onFleetBeaconStateTransition = function (a, b, c, d) {
        throw new Error("Require implementation");
      };
      b.cleanState = function () {
        throw new Error("Require implementation");
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "FleetBeaconTestBase",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = null), (this.$2 = []);
      }
      var b = a.prototype;
      b.addStateTransitionListener = function (a) {
        this.$2.push(a);
      };
      b.cleanPreviousFleetBeaconResult = function () {
        this.$2.forEach(function (a) {
          a.cleanState();
        });
      };
      b.getNumberOfPublishers = function () {
        var a;
        return (a = (a = this.$1) == null ? void 0 : a.getPublishTimes()) !=
          null
          ? a
          : -1;
      };
      b.getTestID = function () {
        throw new Error("Require implementation");
      };
      b.setFleetBeaconRunner = function (a) {
        this.$1 = a;
      };
      b.prepareFleetBeaconTest = function () {
        throw new Error("Require implementation");
      };
      b.onPrepareFleetBeaconSuccess = function () {
        var a;
        (a = this.$1) == null ? void 0 : a.onPrepareFleetBeaconSuccess();
      };
      b.onPrepareFleetBeaconFailed = function () {
        var a;
        (a = this.$1) == null ? void 0 : a.onPrepareFleetBeaconFailed();
      };
      b.subscribe = function () {
        throw new Error("Require implementation");
      };
      b.onSubscribe = function () {
        var a;
        (a = this.$1) == null ? void 0 : a.onSubscribe();
      };
      b.publish = function () {
        throw new Error("Require implementation");
      };
      b.cleanUpFleetBeacon = function () {
        throw new Error("Require implementation");
      };
      b.onCleanUpFinish = function () {
        var a;
        (a = this.$1) == null ? void 0 : a.onCleanUpFinish();
      };
      b.onPublishFailed = function () {
        var a;
        (a = this.$1) == null ? void 0 : a.onPublishFailed();
      };
      b.onPayloadReceived = function () {
        var a;
        (a = this.$1) == null ? void 0 : a.onPayloadReceived();
      };
      b.subscribeTimeoutIntervalMS = function () {
        return 1e4;
      };
      b.payloadTimeoutIntervalMS = function () {
        return 2e4;
      };
      b.publishWaitIntervalsMS = function () {
        return [1e4, 5e3];
      };
      b.shouldStartTime = function () {
        return !0;
      };
      b.onFleetBeaconStateTransition = function (a, b) {
        var c = this,
          d = Date.now();
        this.$2.forEach(function (e) {
          e.onFleetBeaconStateTransition(a, b, d, c);
        });
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "FleetBeaconTestUIAnnouncer",
  ["FleetBeaconStateTransitionListener"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b;
        b = a.call(this) || this;
        b.$FleetBeaconTestUIAnnouncer1 = [];
        b.$FleetBeaconTestUIAnnouncer3 = !1;
        b.$FleetBeaconTestUIAnnouncer4 = !1;
        b.$FleetBeaconTestUIAnnouncer5 = !1;
        b.$FleetBeaconTestUIAnnouncer6 = !1;
        b.$FleetBeaconTestUIAnnouncer7 = -1;
        b.$FleetBeaconTestUIAnnouncer8 = -1;
        b.$FleetBeaconTestUIAnnouncer9 = 0;
        b.$FleetBeaconTestUIAnnouncer10 = 0;
        b.$FleetBeaconTestUIAnnouncer11 = [];
        b.$FleetBeaconTestUIAnnouncer12 = -1;
        b.$FleetBeaconTestUIAnnouncer13 = -1;
        b.$FleetBeaconTestUIAnnouncer14 = -1;
        return b;
      }
      var c = b.prototype;
      c.cleanState = function () {
        (this.$FleetBeaconTestUIAnnouncer3 = !1),
          (this.$FleetBeaconTestUIAnnouncer4 = !1),
          (this.$FleetBeaconTestUIAnnouncer5 = !1),
          (this.$FleetBeaconTestUIAnnouncer6 = !1),
          (this.$FleetBeaconTestUIAnnouncer7 = -1),
          (this.$FleetBeaconTestUIAnnouncer8 = -1),
          (this.$FleetBeaconTestUIAnnouncer9 = 0),
          (this.$FleetBeaconTestUIAnnouncer10 = 0),
          (this.$FleetBeaconTestUIAnnouncer11 = []),
          (this.$FleetBeaconTestUIAnnouncer12 = -1),
          (this.$FleetBeaconTestUIAnnouncer13 = -1),
          (this.$FleetBeaconTestUIAnnouncer14 = -1);
      };
      c.addSubscriber = function (a) {
        this.$FleetBeaconTestUIAnnouncer1.push(a);
      };
      c.onFleetBeaconStateTransition = function (a, b, c, d) {
        var e = d.getTestID(),
          f = { oldState: a, newState: b, testID: e, timestamp: c, extra: {} };
        this.$FleetBeaconTestUIAnnouncer2 == null &&
          (this.$FleetBeaconTestUIAnnouncer2 = d);
        e = "NONE";
        switch (b.getName()) {
          case "initial":
            break;
          case "preparing":
            this.$FleetBeaconTestUIAnnouncer12 = Date.now();
            this.$FleetBeaconTestUIAnnouncer3 = !0;
            f.extra = babelHelpers["extends"]({}, f.extra, {
              createIssued: !0,
            });
            break;
          case "before_subscribe":
            this.$FleetBeaconTestUIAnnouncer13 = Date.now();
            this.$FleetBeaconTestUIAnnouncer4 = !0;
            f.extra = babelHelpers["extends"]({}, f.extra, {
              createSuccess: !0,
            });
            break;
          case "subscribe_issued":
            this.$FleetBeaconTestUIAnnouncer5 = !0;
            f.extra = babelHelpers["extends"]({}, f.extra, {
              subscribeIssued: !0,
              subscribeTimestamp: this.$FleetBeaconTestUIAnnouncer13,
              subscribeTimeoutIntervalMS:
                (d =
                  (c = this.$FleetBeaconTestUIAnnouncer2) == null
                    ? void 0
                    : c.subscribeTimeoutIntervalMS()) != null
                  ? d
                  : -1,
            });
            break;
          case "waiting_to_publish":
            a.getName() === "subscribe_issued" &&
              ((this.$FleetBeaconTestUIAnnouncer6 = !0),
              (this.$FleetBeaconTestUIAnnouncer7 =
                Date.now() - this.$FleetBeaconTestUIAnnouncer13),
              (f.extra = babelHelpers["extends"]({}, f.extra, {
                subscribeSuccess: !0,
                subscribeLatencyMS: this.$FleetBeaconTestUIAnnouncer7,
              })));
            a.getName() === "publish_issued" &&
              this.$FleetBeaconTestUIAnnouncer15(f);
            break;
          case "publish_issued":
            this.$FleetBeaconTestUIAnnouncer9 += 1;
            this.$FleetBeaconTestUIAnnouncer14 = Date.now();
            f.extra = babelHelpers["extends"]({}, f.extra, {
              publishIssued: !0,
              payloadTimeoutInterval:
                (c =
                  (b = this.$FleetBeaconTestUIAnnouncer2) == null
                    ? void 0
                    : b.payloadTimeoutIntervalMS()) != null
                  ? c
                  : -1,
            });
            break;
          case "failed":
            a.getName() === "subscribe_issued" && (e = "SUBSCRIBE_FAILED");
            a.getName() === "publish_issued" && (e = "RECEIVE_PUBLISH_FAILED");
            this.$FleetBeaconTestUIAnnouncer16(f, "FAILURE", e);
            break;
          case "succeed":
            a.getName() === "publish_issued" &&
              this.$FleetBeaconTestUIAnnouncer15(f);
            this.$FleetBeaconTestUIAnnouncer16(f, "SUCCESS", "NONE");
            break;
          case "aborted":
            a.getName() === "preparing" && (e = "CREATE_TEST_FAILED");
            a.getName() === "publish_issued" && (e = "MUTATE_FIELD_FAILED");
            this.$FleetBeaconTestUIAnnouncer16(f, "ABORT", e);
            break;
          case "finish":
            f.extra = babelHelpers["extends"]({}, f.extra, {
              cleanUpFinish: !0,
            });
            break;
          default:
        }
        this.$FleetBeaconTestUIAnnouncer1.forEach(function (a) {
          a(f);
        });
      };
      c.$FleetBeaconTestUIAnnouncer15 = function (a) {
        this.$FleetBeaconTestUIAnnouncer10 += 1;
        var b = Date.now() - this.$FleetBeaconTestUIAnnouncer14;
        this.$FleetBeaconTestUIAnnouncer11.push(b);
        a.extra = babelHelpers["extends"]({}, a.extra, {
          payloadSuccess: !0,
          payloadSuccessCnt: this.$FleetBeaconTestUIAnnouncer10,
          payloadLatency: b,
        });
      };
      c.$FleetBeaconTestUIAnnouncer16 = function (a, b, c) {
        a.extra = babelHelpers["extends"]({}, a.extra, {
          testResult: b,
          failureReason: c,
        });
      };
      return b;
    })(c("FleetBeaconStateTransitionListener"));
    g["default"] = a;
  },
  98
);
__d(
  "FleetBeaconSubscriptionNetwork",
  [
    "CurrentUser",
    "FleetBeaconSubscriptionNetwork_LogMutation.graphql",
    "FleetBeaconSubscriptionNetwork_PublishMutation.graphql",
    "FleetBeaconSubscriptionNetwork_Subscription.graphql",
    "Promise",
    "RelayModern",
    "regeneratorRuntime",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    a = (function () {
      function a(a) {
        this.environment = a;
      }
      var e = a.prototype;
      e.subscribe = function (a, c) {
        return d("RelayModern").requestSubscription(this.environment, {
          subscription:
            h !== void 0
              ? h
              : (h = b("FleetBeaconSubscriptionNetwork_Subscription.graphql")),
          variables: { input: { test_id: a } },
          onError: c.onError,
          onNext: c.onNext,
        });
      };
      e.publish = function (a) {
        var e = this;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  return f.abrupt(
                    "return",
                    new (b("Promise"))(function (f, g) {
                      d("RelayModern").commitMutation(e.environment, {
                        mutation:
                          i !== void 0
                            ? i
                            : (i = b(
                                "FleetBeaconSubscriptionNetwork_PublishMutation.graphql"
                              )),
                        variables: {
                          input: {
                            client_mutation_id: c("uuid")(),
                            actor_id: c("CurrentUser").getAccountID(),
                            test_id: a,
                          },
                        },
                        onCompleted: function (a) {
                          return f();
                        },
                        onError: g,
                      });
                    })
                  );
                case 1:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      e.log = function (a) {
        var c = this;
        return b("regeneratorRuntime").async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    new (b("Promise"))(function (e, f) {
                      d("RelayModern").commitMutation(c.environment, {
                        mutation:
                          j !== void 0
                            ? j
                            : (j = b(
                                "FleetBeaconSubscriptionNetwork_LogMutation.graphql"
                              )),
                        variables: { input: a },
                        onCompleted: function (a) {
                          return e();
                        },
                        onError: f,
                      });
                    })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          },
          null,
          this
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "FleetBeaconTestSubscriptionLogger",
  [
    "CurrentUser",
    "FleetBeaconStateTransitionListener",
    "RelayRTIUtils",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        var e;
        e = a.call(this) || this;
        e.$FleetBeaconTestSubscriptionLogger1 = null;
        e.$FleetBeaconTestSubscriptionLogger2 = b;
        e.$FleetBeaconTestSubscriptionLogger3 = !1;
        e.$FleetBeaconTestSubscriptionLogger4 = !1;
        e.$FleetBeaconTestSubscriptionLogger5 = !1;
        e.$FleetBeaconTestSubscriptionLogger6 = !1;
        e.$FleetBeaconTestSubscriptionLogger7 = -1;
        e.$FleetBeaconTestSubscriptionLogger8 = -1;
        e.$FleetBeaconTestSubscriptionLogger9 = 0;
        e.$FleetBeaconTestSubscriptionLogger10 = 0;
        e.$FleetBeaconTestSubscriptionLogger11 = [];
        e.$FleetBeaconTestSubscriptionLogger12 = -1;
        e.$FleetBeaconTestSubscriptionLogger13 = -1;
        e.$FleetBeaconTestSubscriptionLogger14 = -1;
        e.$FleetBeaconTestSubscriptionLogger15 = c;
        e.$FleetBeaconTestSubscriptionLogger16 = d;
        return e;
      }
      var e = b.prototype;
      e.cleanState = function () {
        (this.$FleetBeaconTestSubscriptionLogger3 = !1),
          (this.$FleetBeaconTestSubscriptionLogger4 = !1),
          (this.$FleetBeaconTestSubscriptionLogger5 = !1),
          (this.$FleetBeaconTestSubscriptionLogger6 = !1),
          (this.$FleetBeaconTestSubscriptionLogger7 = -1),
          (this.$FleetBeaconTestSubscriptionLogger8 = -1),
          (this.$FleetBeaconTestSubscriptionLogger9 = 0),
          (this.$FleetBeaconTestSubscriptionLogger10 = 0),
          (this.$FleetBeaconTestSubscriptionLogger11 = []),
          (this.$FleetBeaconTestSubscriptionLogger12 = -1),
          (this.$FleetBeaconTestSubscriptionLogger13 = -1),
          (this.$FleetBeaconTestSubscriptionLogger14 = -1);
      };
      e.onFleetBeaconStateTransition = function (a, b, c, d) {
        this.$FleetBeaconTestSubscriptionLogger1 == null &&
          (this.$FleetBeaconTestSubscriptionLogger1 = d);
        c = "NONE";
        switch (b.getName()) {
          case "initial":
            break;
          case "preparing":
            this.$FleetBeaconTestSubscriptionLogger12 = Date.now();
            this.$FleetBeaconTestSubscriptionLogger3 = !0;
            break;
          case "before_subscribe":
            this.$FleetBeaconTestSubscriptionLogger13 = Date.now();
            this.$FleetBeaconTestSubscriptionLogger4 = !0;
            break;
          case "subscribe_issued":
            this.$FleetBeaconTestSubscriptionLogger5 = !0;
            break;
          case "waiting_to_publish":
            a.getName() === "subscribe_issued" &&
              ((this.$FleetBeaconTestSubscriptionLogger6 = !0),
              (this.$FleetBeaconTestSubscriptionLogger7 =
                Date.now() - this.$FleetBeaconTestSubscriptionLogger13));
            a.getName() === "publish_issued" &&
              this.$FleetBeaconTestSubscriptionLogger17();
            break;
          case "publish_issued":
            this.$FleetBeaconTestSubscriptionLogger9 += 1;
            this.$FleetBeaconTestSubscriptionLogger14 = Date.now();
            break;
          case "failed":
            a.getName() === "subscribe_issued" && (c = "SUBSCRIBE_FAILED");
            a.getName() === "publish_issued" && (c = "RECEIVE_PUBLISH_FAILED");
            this.$FleetBeaconTestSubscriptionLogger18("FAILURE", c);
            break;
          case "succeed":
            a.getName() === "publish_issued" &&
              this.$FleetBeaconTestSubscriptionLogger17();
            this.$FleetBeaconTestSubscriptionLogger18("SUCCESS", "NONE");
            break;
          case "aborted":
            a.getName() === "preparing" && (c = "CREATE_TEST_FAILED");
            a.getName() === "publish_issued" && (c = "MUTATE_FIELD_FAILED");
            this.$FleetBeaconTestSubscriptionLogger18("ABORT", c);
            break;
          default:
        }
      };
      e.$FleetBeaconTestSubscriptionLogger17 = function () {
        this.$FleetBeaconTestSubscriptionLogger10 += 1;
        var a = Date.now() - this.$FleetBeaconTestSubscriptionLogger14;
        this.$FleetBeaconTestSubscriptionLogger11.push(a);
      };
      e.$FleetBeaconTestSubscriptionLogger18 = function (a, b) {
        var e,
          f = this,
          g = (this.$FleetBeaconTestSubscriptionLogger12 =
            Date.now() - this.$FleetBeaconTestSubscriptionLogger12),
          h = parseInt(
            this.$FleetBeaconTestSubscriptionLogger11.reduce(function (a, b) {
              return a + b;
            }, 0) / this.$FleetBeaconTestSubscriptionLogger10,
            10
          );
        e =
          (e = this.$FleetBeaconTestSubscriptionLogger1) == null
            ? void 0
            : e.getTestID();
        if (e == null) return;
        this.$FleetBeaconTestSubscriptionLogger2
          .log({
            client_mutation_id: c("uuid")(),
            actor_id: c("CurrentUser").getAccountID(),
            test_id: e,
            test_name: "Web_Manual",
            test_result: a,
            failure_reason: b,
            subscribe_issued: this.$FleetBeaconTestSubscriptionLogger5,
            subscribe_success: this.$FleetBeaconTestSubscriptionLogger6,
            subscribe_latency_ms: this.$FleetBeaconTestSubscriptionLogger7,
            subscribe_timeout_interval_ms:
              (e = this.$FleetBeaconTestSubscriptionLogger1) == null
                ? void 0
                : e.subscribeTimeoutIntervalMS(),
            publish_success: this.$FleetBeaconTestSubscriptionLogger10 > 0,
            publish_latency_ms: h,
            publish_timeout_interval_ms:
              (a = this.$FleetBeaconTestSubscriptionLogger1) == null
                ? void 0
                : a.payloadTimeoutIntervalMS(),
            test_duration_ms: g,
            triggering_subscription:
              (b = this.$FleetBeaconTestSubscriptionLogger15) != null
                ? b
                : "manual",
            app_id: d("RelayRTIUtils").GRAPH_SERVICES_SDK_APP_ID,
          })
          .then(function (a) {
            f.$FleetBeaconTestSubscriptionLogger16(!0);
          })
          ["catch"](function (a) {
            f.$FleetBeaconTestSubscriptionLogger16(!1);
          });
      };
      return b;
    })(c("FleetBeaconStateTransitionListener"));
    g["default"] = a;
  },
  98
);
__d(
  "FleetBeaconTestSubscription",
  [
    "FleetBeaconTestBase",
    "FleetBeaconTestSubscriptionLogger",
    "FleetBeaconTestUIAnnouncer",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d, e) {
        var f;
        f = a.call(this) || this;
        f.onCleanUpFleetBeaconFinish = function (a) {
          f.onCleanUpFinish();
        };
        f.$FleetBeaconTestSubscription1 = b;
        f.$FleetBeaconTestSubscription3 = null;
        f.$FleetBeaconTestSubscription4 = e;
        f.$FleetBeaconTestSubscription6 = new (c(
          "FleetBeaconTestSubscriptionLogger"
        ))(b, d, f.onCleanUpFleetBeaconFinish);
        f.$FleetBeaconTestSubscription5 = new (c(
          "FleetBeaconTestUIAnnouncer"
        ))();
        a.prototype.addStateTransitionListener.call(
          babelHelpers.assertThisInitialized(f),
          f.$FleetBeaconTestSubscription6
        );
        a.prototype.addStateTransitionListener.call(
          babelHelpers.assertThisInitialized(f),
          f.$FleetBeaconTestSubscription5
        );
        f.cleanPreviousFleetBeaconResult();
        return f;
      }
      var d = b.prototype;
      d.cleanPreviousFleetBeaconResult = function () {
        a.prototype.cleanPreviousFleetBeaconResult.call(this),
          (this.$FleetBeaconTestSubscription2 = c("uuid")());
      };
      d.getTestID = function () {
        return this.$FleetBeaconTestSubscription2;
      };
      d.getFleetBeaconUIAnnouncer = function () {
        return this.$FleetBeaconTestSubscription5;
      };
      d.prepareFleetBeaconTest = function () {
        this.onPrepareFleetBeaconSuccess();
      };
      d.subscribe = function () {
        var a = this,
          b = this.$FleetBeaconTestSubscription2;
        if (b == null) return;
        this.$FleetBeaconTestSubscription3 =
          this.$FleetBeaconTestSubscription1.subscribe(b, {
            onNext: function () {
              a.onPayloadReceived();
            },
            onError: function () {},
          });
        this.onSubscribe();
      };
      d.publish = function () {
        var b = this,
          c = this.$FleetBeaconTestSubscription2;
        if (c == null) return;
        this.$FleetBeaconTestSubscription1.publish(c)["catch"](function (c) {
          a.prototype.onPublishFailed.call(b);
        });
      };
      d.cleanUpFleetBeacon = function () {};
      d.$FleetBeaconTestSubscription7 = function () {
        var a;
        (a = this.$FleetBeaconTestSubscription3) == null ? void 0 : a.dispose();
      };
      d.onFleetBeaconStateTransition = function (b, c) {
        a.prototype.onFleetBeaconStateTransition.call(this, b, c);
        b = c.getName();
        b === "finish" &&
          (this.$FleetBeaconTestSubscription4(),
          this.$FleetBeaconTestSubscription7());
      };
      return b;
    })(c("FleetBeaconTestBase"));
    g["default"] = a;
  },
  98
);
__d(
  "FleetBeaconSubscriptionLauncher",
  [
    "FleetBeaconRunner",
    "FleetBeaconSubscriptionNetwork",
    "FleetBeaconTestSubscription",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      a = new (c("FleetBeaconTestSubscription"))(
        new (c("FleetBeaconSubscriptionNetwork"))(a),
        b,
        d
      );
      return a;
    }
    function b(a) {
      var b = new (c("FleetBeaconRunner"))(a);
      a.setFleetBeaconRunner(b);
      b.prepareFleetBeaconTest();
    }
    g.CreateFleetBeaconTestSubscription = a;
    g.LaunchFleetBeaconTestSubscription = b;
  },
  98
);
__d(
  "MqttLongPollingHookCollection",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = new Set();
      }
      var b = a.prototype;
      b.addHook = function (a) {
        this.$1.add(a);
      };
      b.removeHook = function (a) {
        this.$1["delete"](a);
      };
      b.onPollRequestSent = function () {
        this.$1.forEach(function (a) {
          a.onPollRequestSent();
        });
      };
      b.onPollRequestSuccess = function () {
        this.$1.forEach(function (a) {
          a.onPollRequestSuccess();
        });
      };
      b.onPollResponse = function (a) {
        this.$1.forEach(function (b) {
          b.onPollResponse(a);
        });
      };
      b.onPollFinish = function () {
        this.$1.forEach(function (a) {
          a.onPollFinish();
        });
      };
      b.onPollRequestFailed = function (a) {
        this.$1.forEach(function (b) {
          b.onPollRequestFailed(a);
        });
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "PromiseResult",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        var a = this;
        this.promise = new (b("Promise"))(function (b, c) {
          (a.$1 = b), (a.$2 = c);
        });
      }
      var c = a.prototype;
      c.resolve = function (a) {
        this.$1(a);
      };
      c.reject = function (a) {
        this.$2(a);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MqttFetchClient",
  ["MqttEnv", "MqttProtocolCodec", "MqttUtils", "Promise", "PromiseResult"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env,
      h = b("MqttProtocolCodec").WireMessage,
      i = b("MqttProtocolCodec").decodeByteMessages,
      j = b("MqttProtocolCodec").MESSAGE_TYPE,
      k = "fetch_pull",
      l = "fetch_pull_finish",
      m = "fetch_",
      n = 6e4,
      o = "action",
      p = "chunked",
      q = "send",
      r = "true",
      s = 5,
      t = 20,
      u = 10,
      v = 5e3;
    a = (function () {
      function a() {
        (this.$1 = ""),
          (this.$2 = g.getLoggerInstance()),
          (this.$3 = 0),
          (this.$4 = ""),
          (this.$6 = function () {}),
          (this.$7 = function (a) {}),
          (this.$8 = function () {}),
          (this.$9 = function (a) {}),
          (this.$10 = 0),
          (this.$11 = 0),
          (this.$12 = 0),
          (this.$13 = 0),
          (this.$14 = "Ready"),
          (this.$15 = []),
          (this.$16 = []),
          (this.$17 = null),
          (this.$18 = !1),
          (this.$19 = 0);
      }
      a.isSupported = function () {
        return typeof fetch === "function";
      };
      var c = a.prototype;
      c.run = function (a, c, d, e, f, g, h, i) {
        (this.$1 = b("MqttUtils").endpointWithSessionId(a, c)),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e),
          (this.$6 = f),
          (this.$7 = g),
          (this.$8 = h),
          (this.$9 = i),
          this.$20();
      };
      c.isTopicSupported = function (a) {
        return !0;
      };
      c.publish = function (a, c) {
        if (this.$14 !== "ReceivingData") {
          this.$2.bumpCounter(m + "publish." + a + ".invalidstate");
          return b("Promise").reject("not connected");
        } else {
          this.$2.bumpCounter(m + "publish." + a + ".publish");
          var d = new (b("PromiseResult"))();
          a = { topic: a, payload: c, promiseResult: d };
          this.$15.push(a);
          this.$21();
          return d.promise;
        }
      };
      c.abort = function () {
        (this.$6 = function () {}),
          (this.$7 = function (a) {}),
          (this.$8 = function () {}),
          (this.$9 = function (a) {});
      };
      c.$22 = function (a) {
        var b = this;
        a.forEach(function (a) {
          b.$2.bumpCounter(m + "publish." + a.topic + ".resolved"),
            a.promiseResult.resolve();
        });
        this.$12 += a.length;
      };
      c.$23 = function (a, b) {
        var c = this;
        a.forEach(function (a) {
          c.$2.bumpCounter(m + "publish." + a.topic + ".rejected"),
            a.promiseResult.reject(b);
        });
      };
      c.$24 = function (a, b, c, d) {
        var e = a
          .map(function (a) {
            return a.topic;
          })
          .join(",");
        this.$2.debugTrace(
          "FetchClient",
          "Fetch publish request failed. Publishes:" + e + ", retry:" + c
        );
        this.$2.bumpCounter(m + "publish_request_failed");
        this.$14 != "ReceivingData" || c === s
          ? (this.$23(a, d),
            (this.$18 = !1),
            this.$2.bumpCounter(m + "publish_request_failed_final"),
            this.$21())
          : this.$25(a, b, c + 1);
      };
      c.$26 = function (a, b, c, d) {
        if (!d.ok) {
          this.$2.bumpCounter(m + "publish_request_failed.http." + d.status);
          if (d.status === 409) {
            this.$19++;
            if (this.$19 >= u) {
              this.$2.bumpCounter(m + "409_reset");
              this.$27(new Error("Too many 409 errors"));
              return;
            }
          }
          this.$24(a, b, c, this.$28(d));
          return;
        }
        this.$2.bumpCounter(m + "publish_request_success");
        b = a
          .map(function (a) {
            return a.topic;
          })
          .join(",");
        this.$2.debugTrace(
          "FetchClient",
          "Fetch publish request success. Publishes:" + b + ", retry:" + c
        );
        this.$22(a);
        this.$18 = !1;
        this.$21();
      };
      c.$21 = function () {
        if (this.$14 != "ReceivingData") return;
        if (this.$18) return;
        if (this.$15.length == 0 && this.$16.length == 0) return;
        this.$18 = !0;
        var a = this.$15.slice(0, t);
        this.$15 = this.$15.slice(t, this.$15.length);
        clearTimeout(this.$17);
        this.$17 = null;
        var b = this.$16.slice(0, t);
        this.$16 = this.$16.slice(t, this.$16.length);
        this.$25(a, b, 0);
      };
      c.$25 = function (a, c, d) {
        var e = this,
          f = a
            .map(function (a) {
              return a.topic;
            })
            .join(",");
        this.$2.debugTrace(
          "FetchClient",
          "Fetch publish request sent. Publishes:" + f + ", retry:" + d
        );
        f = b("MqttUtils").endpointWithExtraParameter(this.$1, o, q);
        var h = a.map(function (a) {
          return {
            topic: a.topic,
            payload: a.payload,
            qos: 0,
            messageId: g.random(),
          };
        });
        h = this.$5.gen(this.$3, [], h, c);
        this.$2.bumpCounter(m + "publish_request");
        b("MqttUtils").promiseDoneWithTimeout(
          fetch(f, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            referrer: "no-referrer",
            body: h,
            keepalive: !1,
          }),
          function (b) {
            return e.$26(a, c, d, b);
          },
          function (b) {
            return e.$24(a, c, d, b);
          },
          n
        );
      };
      c.$29 = function (a) {
        a = a.message;
        this.$2.debugTrace(
          "FetchClient",
          "Fetch request failed with error:" + a
        );
        this.$9(a);
        this.$30(!1, a);
        this.$2.bumpCounter(m + "error");
        this.$14 = "Error";
      };
      c.$31 = function (a) {
        var b = this;
        this.$2.debugTrace("FetchClient", "Fetch response data received");
        a = i(new Uint8Array(a));
        a = a.messages;
        var c = a.filter(function (a) {
          return a.messageType === j.PINGREQ;
        });
        a = a
          .filter(function (a) {
            return a.messageType === j.PUBLISH;
          })
          .map(function (a) {
            if (!(a instanceof h.Publish)) return {};
            a = a;
            a.qos === 1 &&
              a.messageIdentifier != null &&
              (b.$16.push(a.messageIdentifier),
              b.$17 == null &&
                (b.$17 = g.setTimeout(function () {
                  b.$21();
                }, v)));
            return {
              topic: a.topic,
              payload: a.payloadMessage.payloadString,
              qos: a.qos,
            };
          });
        for (
          var d = a,
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var k;
          if (e) {
            if (f >= d.length) break;
            k = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            k = f.value;
          }
          k = k;
          this.$2.bumpCounter(m + "response_" + k.topic);
        }
        a && a.length > 0 && ((this.$13 += a.length), this.$7(a));
        c && c.length > 0 && this.$32();
      };
      c.$32 = function () {
        this.$2.debugTrace("FetchClient", "Got server ping request"),
          this.$2.bumpCounter(m + "ping");
      };
      c.$27 = function (a) {
        this.$2.debugTrace(
          "FetchClient",
          "Fetch request ended: " + a.toString()
        ),
          this.$2.bumpCounter(m + "done"),
          this.$33(a.message),
          this.$8(),
          (this.$14 = "Done");
      };
      c.$34 = function (a, c, d) {
        var e = this;
        if (d !== null && d !== void 0)
          try {
            this.$31(d);
          } catch (a) {
            this.$27(a);
            this.$2.bumpCounter(m + "dataDecodeException");
            return;
          }
        if (c) {
          this.$27(new Error("EOF"));
          return;
        }
        b("MqttUtils").promiseDone(
          a.read(),
          function (c) {
            var b = c.done;
            c = c.value;
            return e.$34(a, b, c);
          },
          function (a) {
            return e.$27(a);
          }
        );
      };
      c.$35 = function (a) {
        if (!a.ok) {
          this.$2.bumpCounter(m + "error.http." + a.status);
          this.$29(this.$28(a));
          return;
        }
        a = a.body;
        if (!a) {
          this.$29(new Error("Empty body"));
          return;
        }
        a = a.getReader();
        this.$6();
        this.$2.bumpCounter(m + "success");
        this.$30(!0, null);
        this.$11 = Date.now();
        this.$14 = "ReceivingData";
        this.$2.debugTrace("FetchClient", "Fetch request success");
        this.$34(a, !1, null);
      };
      c.$33 = function (a) {
        this.$2.eventLogPullFinish({
          pullEventName: l,
          sessionID: this.$3,
          duration: Date.now() - this.$11,
          errorMessage: a,
          publishReceived: this.$13,
          publishSent: this.$12,
        });
      };
      c.$30 = function (a, b) {
        this.$2.eventLogPull({
          pullEventName: k,
          sessionID: this.$3,
          status: a,
          duration: Date.now() - this.$10,
          hostname: this.$1,
          errorMessage: b,
        });
      };
      c.$20 = function () {
        var a = this;
        if (this.$14 != "Ready") return;
        this.$2.debugTrace("FetchClient", "Sending fetch request");
        this.$2.bumpCounter(m + "request");
        this.$10 = Date.now();
        var c = b("MqttUtils").endpointWithExtraParameter(this.$1, p, r);
        b("MqttUtils").promiseDoneWithTimeout(
          fetch(c, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            referrer: "no-referrer",
            body: this.$4,
            keepalive: !1,
          }),
          function (b) {
            return a.$35(b);
          },
          function (b) {
            return a.$29(b);
          },
          n
        );
      };
      c.$28 = function (a) {
        return new Error("Http error, status=" + a.status);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "MqttLongPollingClient",
  [
    "MqttEnv",
    "MqttProtocolCodec",
    "Promise",
    "XHRRequest",
    "getCrossOriginTransport",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env,
      h = b("MqttProtocolCodec").WireMessage,
      i = b("MqttProtocolCodec").decodeByteMessages,
      j = 120 * 1e3,
      k = "simple_pull";
    a = (function () {
      function a() {
        (this.$3 = ""),
          (this.$4 = 0),
          (this.$2 = g.getLoggerInstance()),
          (this.$1 = "Ready"),
          (this.$5 = ""),
          (this.$7 = function () {}),
          (this.$8 = function (a) {}),
          (this.$9 = function () {}),
          (this.$10 = function (a) {}),
          (this.$11 = 0),
          (this.$12 = null),
          (this.$13 = new Set([
            "/t_ms",
            "/messenger_sync_get_diffs",
            "/messenger_sync_create_queue",
            "/webrtc",
            "/rtc_multi",
          ]));
      }
      var c = a.prototype;
      c.run = function (a, b, c, d, e, f, g, h) {
        (this.$3 = a),
          (this.$4 = b),
          (this.$5 = c),
          (this.$6 = d),
          (this.$7 = e),
          (this.$8 = f),
          (this.$9 = g),
          (this.$10 = h),
          this.$14(this.$5);
      };
      c.isTopicSupported = function (a) {
        return this.$13.has(a);
      };
      c.publish = function (a, c) {
        return b("Promise").reject("not supported");
      };
      c.abort = function () {
        this.$12 != null && this.$12.abort("Disconnected");
      };
      c.$15 = function (a, b) {
        if (this.$1 === a) return;
        this.$1 = a;
        a == "Error" && b != null && this.$10(b);
      };
      c.$16 = function (a) {
        if (this.$1 != "RequestSend") return;
        if (!a) {
          this.$17("EmptyResponse", null);
          return;
        }
        this.$7();
        this.$18(!0, null);
        this.$15("ResponseReceived");
        a = i(new Uint8Array(a));
        a = a.messages
          .filter(function (a) {
            return a instanceof h.Publish;
          })
          .map(function (a) {
            if (a instanceof h.Publish) {
              a = a;
              return {
                topic: a.topic,
                payload: a.payloadMessage.payloadString,
                qos: a.qos,
              };
            } else return {};
          });
        this.$8(a);
        this.$9();
      };
      c.$17 = function (a, b) {
        b = b != null ? b.message : "null";
        this.$2.debugTrace(
          "LongPollingClient Error",
          "Poll failed with error:" + a + ", errorMsg:" + b
        );
        this.$18(!1, a + ":" + b);
        this.$15("Error", a);
      };
      c.$18 = function (a, b) {
        this.$2.eventLogPull({
          pullEventName: k,
          sessionID: this.$4,
          status: a,
          duration: Date.now() - this.$11,
          hostname: this.$3,
          errorMessage: b,
        });
      };
      c.$14 = function (a) {
        var c = this;
        if (this.$1 != "Ready" || this.$12) return;
        try {
          (this.$11 = Date.now()),
            (this.$12 = new (b("XHRRequest"))(this.$3)
              .setResponseType("arraybuffer")
              .setRawData(a)
              .setTransportBuilder(b("getCrossOriginTransport").withCredentials)
              .setResponseHandler(function (a) {
                return c.$16(a);
              })
              .setNetworkFailureHandler(function (a) {
                c.$17("Network", a);
              })
              .setErrorHandler(function (a) {
                c.$17("Error", a);
              })
              .setAbortHandler(function (a) {
                c.$17("Abort", null);
              })
              .setTimeoutHandler(function () {
                c.$17("Timeout", null);
              })
              .setTimeout(j)
              .send()),
            this.$15("RequestSend");
        } catch (a) {
          this.$17("Error", a);
        }
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "MqttLongPollingRunner",
  [
    "MqttEnv",
    "MqttFetchClient",
    "MqttLongPollingClient",
    "MqttLongPollingHookCollection",
    "MqttTypes",
    "MqttUtils",
    "Promise",
    "exponentialBackoff",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env,
      h = b("MqttEnv").MqttGkNames,
      i = b("MqttTypes").MqttChannelError,
      j = 4,
      k = 1e3,
      l = 3e3,
      m = "mqtt_should_longpoll",
      n = "last_lp",
      o = "yes",
      p = "no";
    a = (function () {
      function a(a, c, d, e, f, j, k, l, m) {
        var n = this;
        this.$23 = function () {
          try {
            if (!n.$29()) return;
            var a = n.$30();
            n.$14 = a;
            var c = n.$9(),
              d = n.$10();
            c = c.filter(function (b) {
              return a.isTopicSupported(b);
            });
            d = d.filter(function (b) {
              return a.isTopicSupported(b.topic);
            });
            if (c.length == 0 && d.length == 0) {
              n.$5.debugTrace(
                "LongPollingRunner",
                "Poll skipped, nothing to do"
              );
              n.$14 = null;
              g.setTimeout(function () {
                n.$23();
              }, 1e3);
              return;
            }
            var e = b("MqttUtils").generateSessionId();
            a.run(
              n.$6,
              e,
              n.$7.gen(e, c, d),
              n.$7,
              function () {
                return n.$31();
              },
              function (a) {
                return n.$32(a);
              },
              function () {
                return n.$33();
              },
              function (a) {
                return n.$34(a);
              }
            );
            n.$19.onPollRequestSent();
            e = c.join(",");
            c = d
              .map(function (a) {
                return a.topic;
              })
              .join(",");
            n.$5.debugTrace(
              "LongPollingRunner",
              "Making a poll request to " +
                n.$6 +
                ". SubscribedTopics:" +
                e +
                ". Publishes:" +
                c
            );
          } catch (a) {
            a && n.$5.logErrorWarn(a, "lp_js_error"),
              n.$11(new i(!1, "js error lp", a)),
              n.$34("lp_js_error");
          }
        };
        this.$6 = a;
        this.$7 = c;
        this.$1 = e;
        this.$2 = 0;
        this.$3 = d;
        this.$4 = b("MqttUtils").hasWSSupport();
        this.$5 = g.getLoggerInstance();
        this.$8 = f;
        this.$9 = j;
        this.$10 = k;
        this.$11 = l;
        this.$12 = m;
        this.$13 = !1;
        this.$14 = null;
        this.$15 = "LPInactive";
        this.$16 = "NotSent";
        this.$17 = 0;
        this.$19 = new (b("MqttLongPollingHookCollection"))();
        this.$18 = new (b("exponentialBackoff"))(this.$23, this);
        this.$20 = 0;
        this.$21 = p;
        a = g.genGk(h.mqtt_lp_use_fetch);
        c = b("MqttFetchClient").isSupported();
        a
          ? this.$5.bumpCounter("fetch_gk_pass")
          : this.$5.bumpCounter("fetch_gk_fail");
        c
          ? this.$5.bumpCounter("fetch_api_supported")
          : this.$5.bumpCounter("fetch_api_not_supported");
        this.$22 = a && c;
      }
      var c = a.prototype;
      c.addHook = function (a) {
        this.$19.addHook(a);
      };
      c.start = function () {
        var a = this;
        this.$21 = g.configRead(n, p);
        this.$5.debugTrace(
          "LongPollingRunner",
          "Runner loaded, last status " + this.$21
        );
        this.$20 = Date.now();
        this.$23();
        g.setTimeout(function () {
          a.$23();
        }, k + 100);
        g.setTimeout(function () {
          a.$23();
        }, l + 100);
      };
      c.canPublish = function () {
        return this.$15 === "LPActive" && this.$16 === "ReceivingData";
      };
      c.publish = function (a, c, d) {
        return g.genGk(h.mqtt_enable_publish_over_polling) &&
          this.$14 &&
          this.$14.isTopicSupported(a)
          ? this.$14.publish(a, c)
          : b("Promise").reject();
      };
      c.onConnectAttempt = function () {};
      c.onConnectFailure = function () {
        this.$2++, this.$23();
      };
      c.onConnected = function () {};
      c.onConnectSuccess = function () {
        (this.$1 = !0), g.configWrite(n, null);
      };
      c.onConnectionLost = function () {};
      c.onSubscribe = function (a) {};
      c.onUnsubscribe = function (a) {};
      c.onPublish = function (a) {};
      c.onMessage = function (a) {};
      c.onWSFatal = function () {
        (this.$3 = !0), this.$23();
      };
      c.getStatus = function () {
        return this.$15;
      };
      c.getRequestStatus = function () {
        return this.$16;
      };
      c.$24 = function (a) {
        a != this.$15 &&
          (this.$5.debugTrace(
            "LongPollingRunner",
            "status changed to " + a + " from " + this.$15
          ),
          (this.$15 = a),
          this.$12(this.$15, this.$16));
      };
      c.$25 = function (a) {
        if (!this.$22) return;
        a !== this.$16 &&
          (this.$5.debugTrace(
            "LongPollingRunner",
            "request status changed to " + a + " from " + this.$16
          ),
          (this.$16 = a),
          this.$12(this.$15, this.$16));
      };
      c.$26 = function () {
        this.$17 = 0;
      };
      c.$27 = function () {
        this.$17++, this.$17 >= j && this.$24("LPError");
      };
      c.$28 = function () {
        var a = g.genGk(h.mqtt_lp_no_delay),
          b = g.genGk(h.mqtt_ws_polling_enabled),
          c = g.genGk(h.mqtt_fast_lp);
        this.$5.debugTrace(
          "LongPollingRunner",
          "_shouldPoll? pollNow:" +
            String(a) +
            " enabled:" +
            String(b) +
            " fastPoll:" +
            String(c) +
            " hasWSSupport:" +
            String(this.$4) +
            " hasSuccess:" +
            String(this.$1) +
            " failureCount:" +
            this.$2 +
            " wsFatal:" +
            String(this.$3)
        );
        if (!b) return !1;
        if (a) {
          this.$5.bumpCounter(m + ".nd");
          return !0;
        }
        if (!this.$4) {
          this.$5.bumpCounter(m + ".na");
          return !0;
        }
        if (this.$3) {
          this.$5.bumpCounter(m + ".fatal");
          return !0;
        }
        if (this.$1) return !1;
        if (c) {
          b = Date.now() - this.$20;
          if (this.$21 === o) {
            if (this.$2 >= 1) return !0;
            if (b > k) {
              this.$5.bumpCounter(m + ".fastdelay");
              return !0;
            }
          } else if (b > l) {
            this.$5.bumpCounter(m + ".regulardelay");
            return !0;
          }
        }
        if (this.$2 >= 3) {
          this.$5.bumpCounter(m + ".failure");
          return !0;
        }
        return !1;
      };
      c.$29 = function () {
        if (this.$14 != null) return !1;
        var a = this.$28();
        !this.$13 &&
          a &&
          (this.$5.bumpCounter("polling_kickin"),
          (this.$13 = !0),
          this.$24("LPActive"),
          this.$26());
        this.$13 &&
          !a &&
          (this.$5.bumpCounter("polling_stopped"),
          (this.$13 = !1),
          this.$24("LPInactive"),
          this.$26());
        return a;
      };
      c.$30 = function () {
        if (this.$22) {
          this.$5.debugTrace(
            "LongPollingRunner",
            "Creating polling client using Fetch API"
          );
          return new (b("MqttFetchClient"))();
        } else {
          this.$5.debugTrace(
            "LongPollingRunner",
            "Creating regular Polling client"
          );
          return new (b("MqttLongPollingClient"))();
        }
      };
      c.$31 = function () {
        this.$5.debugTrace("LongPollingRunner", "Poll success"),
          this.$19.onPollRequestSuccess(),
          this.$18.reset(),
          this.$24("LPActive"),
          this.$26(),
          g.configWrite(n, o),
          this.$25("ReceivingData");
      };
      c.$32 = function (a) {
        var b = a
          .map(function (a) {
            return a.topic;
          })
          .join(",");
        this.$5.debugTrace(
          "LongPollingRunner",
          "Poll response received, message received:" + b
        );
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          this.$19.onPollResponse(c.topic);
          this.$8(c.topic, c.payload, c.qos);
        }
      };
      c.$33 = function () {
        this.$5.debugTrace("LongPollingRunner", "Poll finish"),
          this.$19.onPollFinish(),
          this.$14 && this.$14.abort(),
          (this.$14 = null),
          this.$23(),
          this.$25("NotSent");
      };
      c.$34 = function (a) {
        this.$19.onPollRequestFailed(a),
          this.$14 && this.$14.abort(),
          (this.$14 = null),
          this.$18(),
          this.$27(),
          this.$25("NotSent");
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
