if (self.CavalryLogger) {
  CavalryLogger.start_js(["8qLFU9L"]);
}

__d(
  "ApplicationAndWebsiteSettingAppGridList_SettingUserAppInfo.graphql",
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
          name: "app_id",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "app_name",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logo_url",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "install_timestamp",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "app_status",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "privacy_url",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_aggregator_app",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_loyalty_programs",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_with_facebook_timestamp",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_with_loyalty_timestamp",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_with_news_timestamp",
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "ApplicationAndWebsiteSettingAppGridList_SettingUserAppInfo",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "SettingUserAppDetailsDict",
            kind: "LinkedField",
            name: "active",
            plural: !0,
            selections: [a, b, c, d, e, f, g, h, i, j, k, l],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "SettingUserAppDetailsDict",
            kind: "LinkedField",
            name: "expired",
            plural: !0,
            selections: [a, b, c, d, e, f, h, i, g, j, k, l],
            storageKey: null,
          },
        ],
        type: "SettingUserAppInfo",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "ApplicationAndWebsiteSettingTabRootQuery.graphql",
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
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "app_id",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "app_name",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logo_url",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "install_timestamp",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "app_status",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "privacy_url",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_aggregator_app",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_loyalty_programs",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_with_facebook_timestamp",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_with_loyalty_timestamp",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "connected_with_news_timestamp",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "ApplicationAndWebsiteSettingTabRootQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "SettingsAppsAndWebsiteTabRenderPayload",
              kind: "LinkedField",
              name: "settings_app_and_website_tab_metadata",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "SettingUserAppInfo",
                  kind: "LinkedField",
                  name: "user_app_info",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "ApplicationAndWebsiteSettingAppGridList_SettingUserAppInfo",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "AppsAndWebsitesRemovedSection_removedApps",
                    },
                  ],
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "AppsAndWebsitesPreferenceCard_SettingsAppsAndWebsiteTabRenderPayload",
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
          name: "ApplicationAndWebsiteSettingTabRootQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "SettingsAppsAndWebsiteTabRenderPayload",
              kind: "LinkedField",
              name: "settings_app_and_website_tab_metadata",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "SettingUserAppInfo",
                  kind: "LinkedField",
                  name: "user_app_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "SettingUserAppDetailsDict",
                      kind: "LinkedField",
                      name: "active",
                      plural: !0,
                      selections: [a, b, c, d, e, f, g, h, i, j, k, l],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "SettingUserAppDetailsDict",
                      kind: "LinkedField",
                      name: "expired",
                      plural: !0,
                      selections: [a, b, c, d, e, f, h, i, g, j, k, l],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "SettingUserRemovedAppDetailsDict",
                      kind: "LinkedField",
                      name: "removed",
                      plural: !0,
                      selections: [
                        a,
                        b,
                        c,
                        d,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "disconnected_facebook_login_timestamp",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "disconnected_loyalty_timestamp",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "disconnected_news_timestamp",
                          storageKey: null,
                        },
                        g,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "uninstall_timestamp",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "user_app_scope_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "delete_data_url",
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
                  concreteType: "SettingUserPrefernce",
                  kind: "LinkedField",
                  name: "user_preference",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "platform_enabled",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "game_app_notification_enabled",
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
          id: "4108486899265827",
          metadata: {},
          name: "ApplicationAndWebsiteSettingTabRootQuery",
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
  "AppsAndWebsitesPreferenceCardChangeGlobalNotificationMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "setToEnable" },
        ],
        b = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "enabled",
                variableName: "setToEnable",
              },
            ],
            concreteType: "SettingUserPrefernce",
            kind: "LinkedField",
            name: "setting_apps_and_websites_change_games_and_apps_notification_preference",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "game_app_notification_enabled",
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
          name: "AppsAndWebsitesPreferenceCardChangeGlobalNotificationMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "AppsAndWebsitesPreferenceCardChangeGlobalNotificationMutation",
          selections: b,
        },
        params: {
          id: "4155946054416562",
          metadata: {},
          name: "AppsAndWebsitesPreferenceCardChangeGlobalNotificationMutation",
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
  "AppsAndWebsitesPreferenceCard_SettingsAppsAndWebsiteTabRenderPayload.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AppsAndWebsitesPreferenceCard_SettingsAppsAndWebsiteTabRenderPayload",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "SettingUserPrefernce",
          kind: "LinkedField",
          name: "user_preference",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "platform_enabled",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "game_app_notification_enabled",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "SettingsAppsAndWebsiteTabRenderPayload",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "AppsAndWebsitesRemovedAppDialog_removedApps.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AppsAndWebsitesRemovedAppDialog_removedApps",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "SettingUserRemovedAppDetailsDict",
          kind: "LinkedField",
          name: "removed",
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
              name: "app_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "app_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "logo_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "disconnected_facebook_login_timestamp",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "disconnected_loyalty_timestamp",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "disconnected_news_timestamp",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "privacy_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uninstall_timestamp",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "user_app_scope_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "delete_data_url",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "SettingUserAppInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "AppsAndWebsitesRemovedSection_removedApps.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AppsAndWebsitesRemovedSection_removedApps",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "AppsAndWebsitesRemovedAppDialog_removedApps",
        },
      ],
      type: "SettingUserAppInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "AppsAndWebsitesChangePlatformOptPreferenceOptInMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          concreteType: "SettingAppsAndWebsitesPlatformOptInResponsePayload",
          kind: "LinkedField",
          name: "setting_apps_and_websites_platform_opt_in",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "execusion_success",
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
          name: "AppsAndWebsitesChangePlatformOptPreferenceOptInMutation",
          selections: a,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AppsAndWebsitesChangePlatformOptPreferenceOptInMutation",
          selections: a,
        },
        params: {
          id: "3866685796744978",
          metadata: {},
          name: "AppsAndWebsitesChangePlatformOptPreferenceOptInMutation",
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
  "AppsAndWebsitesChangePlatformOptPreferenceOptOutMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          concreteType: "SettingAppsAndWebsitesPlatformOptOutResponsePayload",
          kind: "LinkedField",
          name: "setting_apps_and_websites_platform_opt_out",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "execusion_success",
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
          name: "AppsAndWebsitesChangePlatformOptPreferenceOptOutMutation",
          selections: a,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AppsAndWebsitesChangePlatformOptPreferenceOptOutMutation",
          selections: a,
        },
        params: {
          id: "3970597486335090",
          metadata: {},
          name: "AppsAndWebsitesChangePlatformOptPreferenceOptOutMutation",
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
  "ApplicationAndWebsiteErrorContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ errorType: "null", onError: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "ApplicationAndWebsiteSettingAppStatus.react",
  ["fbt", "ix", "TetraIcon.react", "fbicon", "formatDate", "react", "stylex"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.appStatus;
      a = a.installTimestamp;
      var e;
      switch (b) {
        case "Active":
          e = h._("Active");
          break;
        case "Expired":
          e = h._("Expired");
          break;
        default:
          e = h._("Something wrong with app status");
      }
      a =
        a == null || a === 0
          ? null
          : h._("Added on {integration_app_added_date}", [
              h._param(
                "integration_app_added_date",
                c("formatDate")(a, "M d, Y")
              ),
            ]);
      return j.jsx("div", {
        children: j.jsxs("span", {
          className: "j83agx80 bp9cbjyn",
          children: [
            a,
            j.jsx(c("TetraIcon.react"), {
              color: "secondary",
              icon: d("fbicon")._(i("505496"), 16),
            }),
            j.jsx("span", {
              className: c("stylex").dedupe(
                { "font-weight-1": "n3ffmt46" },
                b === "Active" ? { "color-1": "g5o1ygfq" } : null,
                b === "Expired" ? { "color-1": "ksyxlhar" } : null
              ),
              "data-testid": void 0,
              children: e,
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
  "ApplicationAndWebsiteToastContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      appName: "",
      removeType: "null",
      setAppName: function () {},
      setRemoveType: function () {},
    });
    g["default"] = b;
  },
  98
);
__d(
  "AppsAndWebsitesErrorUtils.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometRow.react",
    "CometRowItem.react",
    "TetraButton.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "goForceFullPageRedirectTo",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a() {
      return j.jsxs("div", {
        className: "tw6a2znq ihqw7lf3 d1544ag0 discj3wi cbu4d94t j83agx80",
        children: [
          j.jsxs("div", {
            className: "hxf637px dhix69tm wkznzc2l kvgmc6g5 btwxx1t3 j83agx80",
            children: [
              j.jsx("div", {
                children: j.jsx(c("CometImage.react"), { src: i("1583140") }),
              }),
              j.jsx("div", {
                className: "mww98ynv",
                children: j.jsx(c("TetraTextPairing.react"), {
                  body: h._(
                    "This could be because of a technical error that we are working to get fixed. Please refresh the page and try again."
                  ),
                  level: 2,
                }),
              }),
            ],
          }),
          j.jsx("div", {
            className: "dcskz6gf bkfpd7mw j83agx80",
            children: j.jsx(c("CometRow.react"), {
              children: j.jsxs(c("CometRowItem.react"), {
                children: [
                  j.jsx(c("TetraButton.react"), {
                    label: h._("Refresh"),
                    onPress: function () {
                      c("goForceFullPageRedirectTo")(window.location.href);
                    },
                  }),
                  " ",
                ],
              }),
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      return j.jsxs("div", {
        className: "btwxx1t3 j83agx80",
        children: [
          j.jsx(c("CometImage.react"), { src: i("1583136") }),
          j.jsx("div", {
            className: "h676nmdw",
            children: j.jsx(c("TetraText.react"), {
              type: "meta3",
              children: h._(
                "An error occurred while removing this app. Please try again."
              ),
            }),
          }),
        ],
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function e() {
      return j.jsxs("div", {
        className: "btwxx1t3 j83agx80",
        children: [
          j.jsx(c("CometImage.react"), { src: i("1583136") }),
          j.jsx("div", {
            className: "h676nmdw",
            children: j.jsx(c("TetraText.react"), {
              type: "meta3",
              children: h._(
                "An error occurred while removing this connection. Please try again."
              ),
            }),
          }),
        ],
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    function k() {
      return j.jsxs("div", {
        className: "btwxx1t3 j83agx80",
        children: [
          j.jsx(c("CometImage.react"), { src: i("1583136") }),
          j.jsx("div", {
            className: "h676nmdw",
            children: j.jsx(c("TetraText.react"), {
              type: "meta3",
              children: h._(
                "An error occurred while removing this permission. Please try again."
              ),
            }),
          }),
        ],
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
      return h._(
        "{the error object, can be app name, permission or account linking type} could not be removed",
        [
          h._param(
            "the error object, can be app name, permission or account linking type",
            a
          ),
        ]
      );
    }
    l.displayName = l.name + " [from " + f.id + "]";
    g.getRemovedErrorDialogContent = a;
    g.getRemovedAppErrorSection = b;
    g.getDisconnectionErrorSection = e;
    g.getRemovePermissionErrorSection = k;
    g.getErrorDialogTitle = l;
  },
  98
);
__d(
  "ApplicationAndWebsiteSettingCopyButton.react",
  [
    "fbt",
    "ix",
    "CometLink.react",
    "TetraIcon.react",
    "fbicon",
    "react",
    "useCopyText",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = h._("Copy"),
      l = h._("Copied");
    function a(a, b) {
      var e = a.color;
      e = e === void 0 ? "primary" : e;
      var f = a.onClick,
        g = a.value;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "color",
        "onClick",
        "value",
      ]);
      var h = c("useCopyText")({ value: g }),
        m = h[0],
        n = h[1],
        o = h[2];
      h = n ? l : k;
      if (!m) return null;
      m = n
        ? j.jsxs("span", {
            children: [
              g,
              j.jsx("span", {
                className: "hytbnt81 dicw6rsg",
                children: j.jsx(c("TetraIcon.react"), {
                  icon: d("fbicon")._(i("477819"), 16),
                }),
              }),
            ],
          })
        : j.jsxs(
            c("CometLink.react"),
            babelHelpers["extends"]({ "aria-label": h }, a, {
              color: e,
              onClick: function () {
                o(), f == null ? void 0 : f();
              },
              ref: b,
              children: [
                g,
                j.jsx("span", {
                  className: "hytbnt81 dicw6rsg",
                  children: j.jsx(c("TetraIcon.react"), {
                    icon: d("fbicon")._(i("500198"), 16),
                  }),
                }),
              ],
            })
          );
      return j.jsx("span", { className: "hytbnt81", children: m });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = j.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "AccessibleTableParts.react",
  ["cx", "joinClasses", "prop-types", "react"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || b("react");
    function j(a, b) {
      return i.Children.map(a, function (a) {
        return a && a.type === "th" ? i.cloneElement(a, { scope: b }) : a;
      });
    }
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        var a = j(this.props.children, "col");
        return i.jsx(
          "tr",
          babelHelpers["extends"]({}, this.props, { children: a })
        );
      };
      return b;
    })(i.Component);
    c = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.render = function () {
        var a = j(this.props.children, "row"),
          c = this.props,
          d = c.className,
          e = c.hover,
          f = c.selected;
        c = babelHelpers.objectWithoutPropertiesLoose(c, [
          "className",
          "hover",
          "selected",
        ]);
        d = b("joinClasses")((e ? "" : "_1isx") + (f ? " _4jpt" : ""), d);
        return i.jsx(
          "tr",
          babelHelpers["extends"]({ className: d }, c, { children: a })
        );
      };
      return c;
    })(i.Component);
    c.propTypes = {
      hover: b("prop-types").bool,
      selected: b("prop-types").bool,
    };
    c.defaultProps = { hover: !0, selected: !1 };
    d = { HeadRow: a, BodyRow: c };
    e.exports = d;
  },
  null
);
__d(
  "AppsManagerDataDeletionRequestLinkCell.react",
  ["cx", "fbt", "ix", "Image.react", "Link.react", "XUIText.react", "react"],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = k.jsx(c("Image.react"), {
          className: "_3-99 _3-94",
          src: j("505975"),
        });
        if (this.props.request.statusURL)
          return k.jsxs(c("Link.react"), {
            className: "_1dnr",
            href: this.props.request.statusURL,
            children: [
              k.jsx(c("XUIText.react"), {
                className: "_1dns",
                color: "highlight",
                size: "body3",
                children: i._("View Status"),
              }),
              a,
            ],
          });
        else if (
          this.props.request.status === "failed" &&
          !this.props.hasSentEmail
        ) {
          var b = k.jsx(c("XUIText.react"), {
            className: "_1dns",
            color: "highlight",
            size: "body3",
            children: i._("Contact {app_name}", [
              i._param("app_name", this.props.appName),
            ]),
          });
          if (this.props.appContactURL != null)
            return k.jsxs(c("Link.react"), {
              className: "_1dnr",
              href: this.props.appContactURL,
              target: "_blank",
              children: [b, a],
            });
        }
        return null;
      };
      return b;
    })(k.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "AppsManagerDataDeletionRequestStatusCell.react",
  ["cx", "fbt", "XUIText.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.$1 = function () {
        var a =
          this.props.numRequests === 1
            ? i._("Email sent")
            : i._("Follow-up request sent");
        return j.jsxs("div", {
          children: [
            j.jsx("div", { className: "_2ykl" }),
            j.jsxs("div", {
              className: "_2ykm",
              children: [
                j.jsx(c("XUIText.react"), {
                  display: "block",
                  size: "body2",
                  children: a,
                }),
                j.jsx(c("XUIText.react"), {
                  color: "secondary",
                  size: "body3",
                  children: i._(
                    "You sent a message to {app_name} requesting your info be deleted.",
                    [i._param("app_name", this.props.appName)]
                  ),
                }),
              ],
            }),
          ],
        });
      };
      d.$2 = function () {
        return j.jsxs("div", {
          children: [
            j.jsx("div", { className: "_2ykl" }),
            j.jsx(c("XUIText.react"), {
              size: "body2",
              children: i._("Request sent to delete info"),
            }),
          ],
        });
      };
      d.$3 = function () {
        return j.jsxs("div", {
          children: [
            j.jsx("div", { className: "_2ykl" }),
            j.jsxs("div", {
              className: "_2ykm",
              children: [
                j.jsx(c("XUIText.react"), {
                  display: "block",
                  size: "body2",
                  children: i._("Request received by {app_name}", [
                    i._param("app_name", this.props.appName),
                  ]),
                }),
                j.jsx(c("XUIText.react"), {
                  color: "secondary",
                  size: "body3",
                  children: i._(
                    "View the status of your request using this confirmation number: {confirmation_number}",
                    [
                      i._param(
                        "confirmation_number",
                        this.props.request.confirmationCode
                      ),
                    ]
                  ),
                }),
              ],
            }),
          ],
        });
      };
      d.$4 = function () {
        return j.jsxs("div", {
          children: [
            j.jsx("div", { className: "_2ykn" }),
            j.jsxs("div", {
              className: "_2ykm",
              children: [
                j.jsx(c("XUIText.react"), {
                  display: "block",
                  size: "body2",
                  children: i._("Unable to confirm request was received"),
                }),
                j.jsx(c("XUIText.react"), {
                  color: "secondary",
                  size: "body3",
                  children: this.props.hasSentEmail
                    ? i._(
                        "{app_name} sent an invalid response to your request.",
                        [i._param("app_name", this.props.appName)]
                      )
                    : i._(
                        "{app_name} sent an invalid response to your request. Contact {app_name} directly to request it delete info it has about you.",
                        [i._param("app_name", this.props.appName)]
                      ),
                }),
              ],
            }),
          ],
        });
      };
      d.$5 = function () {
        return j.jsxs("div", {
          children: [
            j.jsx("div", { className: "_2ykp" }),
            j.jsxs("div", {
              className: "_2ykm",
              children: [
                j.jsx(c("XUIText.react"), {
                  display: "block",
                  size: "body2",
                  children: i._("Awaiting response"),
                }),
                j.jsx(c("XUIText.react"), {
                  color: "secondary",
                  size: "body3",
                  children: i._(
                    "{app_name} hasn't confirmed your request was received.",
                    [i._param("app_name", this.props.appName)]
                  ),
                }),
              ],
            }),
          ],
        });
      };
      d.render = function () {
        var a = this.props.request;
        if (!a.status) return this.$5();
        switch (a.status) {
          case "sent":
            if (a.type === "email") return this.$1();
            else return this.$2();
          case "receipt":
            return this.$3();
          case "failed":
          default:
            return this.$4();
        }
      };
      return b;
    })(j.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "AppsManagerDataDeletionRequestsTable.react",
  [
    "cx",
    "fbt",
    "AccessibleTableParts.react",
    "AppsManagerDataDeletionRequestLinkCell.react",
    "AppsManagerDataDeletionRequestStatusCell.react",
    "XUIText.react",
    "formatDate",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this,
          b =
            this.props.requests.filter(function (a) {
              return a.type === "email";
            }).length > 0,
          e = this.props.requests.length;
        return j.jsxs("table", {
          className: "_3_ae",
          children: [
            j.jsx("thead", {
              className: "_3_a-",
              children: j.jsxs(d("AccessibleTableParts.react").HeadRow, {
                children: [
                  j.jsx("th", {
                    className: "_3_a_",
                    children: j.jsx(c("XUIText.react"), {
                      size: "body2",
                      weight: "bold",
                      children: i._("Data Deletion Request"),
                    }),
                  }),
                  j.jsx("th", {
                    className: "_3_a_",
                    children: j.jsx(c("XUIText.react"), {
                      size: "body2",
                      weight: "bold",
                      children: i._("Date"),
                    }),
                  }),
                  j.jsx("th", {}),
                ],
              }),
            }),
            j.jsx("tbody", {
              children: this.props.requests.map(function (f, g) {
                return j.jsxs(
                  d("AccessibleTableParts.react").BodyRow,
                  {
                    className: "_3_b0",
                    children: [
                      j.jsxs("td", {
                        className: "_3_a_",
                        children: [
                          j.jsx(
                            c("AppsManagerDataDeletionRequestStatusCell.react"),
                            {
                              appName: a.props.appName,
                              hasSentEmail: b,
                              numRequests: e,
                              request: f,
                            }
                          ),
                          a.props.inlineCTA === !0 &&
                            j.jsx("div", {
                              className: "_2ykm _9vuc",
                              children: j.jsx(
                                c(
                                  "AppsManagerDataDeletionRequestLinkCell.react"
                                ),
                                {
                                  appContactURL: a.props.appContactURL,
                                  appName: a.props.appName,
                                  hasSentEmail: b,
                                  request: f,
                                }
                              ),
                            }),
                        ],
                      }),
                      j.jsx("td", {
                        className: "_3_a_ _42qn",
                        children: f.status
                          ? c("formatDate")(f.timestamp, "M j, Y g:i A")
                          : null,
                      }),
                      a.props.inlineCTA !== !0 &&
                        j.jsx("td", {
                          className: "_3_a_ _42qo",
                          children: j.jsx(
                            c("AppsManagerDataDeletionRequestLinkCell.react"),
                            {
                              appContactURL: a.props.appContactURL,
                              appName: a.props.appName,
                              hasSentEmail: b,
                              request: f,
                            }
                          ),
                        }),
                    ],
                  },
                  g
                );
              }),
            }),
          ],
        });
      };
      return b;
    })(j.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "XAppSettingsDeletionRequestsAsyncController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/settings/applications/fetch_deletion_requests/",
      { app_id: { type: "FBID", required: !0 }, page_id: { type: "FBID" } }
    );
  },
  null
);
__d(
  "XAppSettingsSendDeletionRequestAsyncController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/settings/applications/send_deletion_request/",
      { app_id: { type: "FBID", required: !0 } }
    );
  },
  null
);
__d(
  "AppsManagerDataDeletionRequestsComet.react",
  [
    "fbt",
    "AppsManagerDataDeletionRequestsTable.react",
    "AsyncRequest",
    "CometProgressRing.react",
    "TetraButton.react",
    "TetraText.react",
    "XAppSettingsDeletionRequestsAsyncController",
    "XAppSettingsSendDeletionRequestAsyncController",
    "react",
    "setTimeout",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        button: { width: "q3qqxkgz" },
        title: {
          marginTop: "jei6r52m",
          marginEnd: "cxmmr5t8",
          marginBottom: "sjgh65i0",
          marginStart: "hcukyx3x",
        },
      };
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.state = { deletionRequests: [], requestsLoaded: !1 }),
          (d.$2 = function () {
            d.setState({ requestsLoaded: !1 });
            var a = c("XAppSettingsSendDeletionRequestAsyncController")
              .getURIBuilder()
              .setFBID("app_id", d.props.appID)
              .getURI();
            new (c("AsyncRequest"))()
              .setURI(a)
              .setMethod("POST")
              .setHandler(function (a) {
                d.$1();
              })
              .setErrorHandler(function (a) {
                d.$1();
              })
              .send();
            c("setTimeout")(d.$3, 1e3);
          }),
          (d.$3 = function () {
            if (d.state.requestsLoaded) return;
            var a = new Date(Date.now());
            a = [
              {
                confirmationCode: null,
                status: "sent",
                statusURL: null,
                timestamp: a,
                type: "endpoint",
              },
              {
                confirmationCode: null,
                status: null,
                statusURL: null,
                timestamp: a,
                type: "endpoint",
              },
            ];
            d.setState({ deletionRequests: a });
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.componentDidMount = function () {
        this.$1();
      };
      d.$1 = function () {
        var a = this,
          b = c("XAppSettingsDeletionRequestsAsyncController")
            .getURIBuilder()
            .setFBID("app_id", this.props.appID)
            .getURI();
        new (c("AsyncRequest"))()
          .setURI(b)
          .setHandler(function (b) {
            b.payload &&
              !b.error &&
              a.setState({ deletionRequests: b.payload }),
              a.setState({ requestsLoaded: !0 });
          })
          .setErrorHandler(function (b) {
            a.setState({ requestsLoaded: !0 });
          })
          .send();
      };
      d.render = function () {
        if (this.state.deletionRequests.length === 0) {
          var a = i.jsx("div", {
            className: c("stylex")(j.button),
            children: i.jsx(c("TetraButton.react"), {
              addOnPrimary: this.state.requestsLoaded
                ? void 0
                : i.jsx(c("CometProgressRing.react"), {
                    color: "disabled",
                    duration: 2,
                    size: 16,
                    type: "estimated",
                  }),
              disabled: !this.state.requestsLoaded,
              label: h._("Send Request"),
              onPress: this.$2,
              testid: void 0,
              type: "secondary",
            }),
          });
          return i.jsx(k, {
            title: h._(
              "Request {app_name} delete info it has about you from Facebook.",
              [h._param("app_name", this.props.appName)]
            ),
            children: a,
          });
        }
        return i.jsx(k, {
          title: h._(
            "You requested {app_name} delete info it has about you from Facebook.",
            [h._param("app_name", this.props.appName)]
          ),
          children: i.jsx(c("AppsManagerDataDeletionRequestsTable.react"), {
            appContactURL: this.props.appContactURL,
            appName: this.props.appName,
            inlineCTA: !0,
            requests: this.state.deletionRequests,
          }),
        });
      };
      return b;
    })(i.PureComponent);
    var k = function (a) {
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx("div", {
            className: c("stylex")(j.title),
            children: i.jsxs(c("TetraText.react"), {
              type: "meta3",
              children: [a.title, " "],
            }),
          }),
          i.jsx("div", { children: a.children }),
        ],
      });
    };
    g["default"] = a;
  },
  98
);
__d(
  "AppsAndWebsitesRemovedDetailDialog.react",
  [
    "fbt",
    "ApplicationAndWebsiteSettingCopyButton.react",
    "AppsManagerDataDeletionRequestsComet.react",
    "CometLink.react",
    "CometRow.react",
    "CometRowItem.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "formatDate",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        dividerLine: {
          borderBottom: "qliro4oi",
          marginBottom: "w0hvl6rk",
          width: "k4urcfbm",
        },
        permissionContainer: {
          marginBottom: "dzkejj4q",
          paddingStart: "e9o6kcyi",
          width: "k4urcfbm",
        },
        removeDescriptionStyle: {
          fontFamily: "rsyw3t7h",
          fontSize: "jq4qci2q",
          marginEnd: "gupp8or6",
          marginStart: "dhix69tm",
          marginTop: "swg4t2nn",
        },
        removeDescriptionTextStyle: {
          marginBottom: "bhv7cq3t",
          marginTop: "aov4n071",
        },
      };
    function k(a) {
      return a === null || a === 0
        ? null
        : h
            ._("Removed on {integration_app_added_date}", [
              h._param(
                "integration_app_added_date",
                c("formatDate")(a, "M d, Y")
              ),
            ])
            .toString();
    }
    function l(a, b, d, e, f) {
      if (f === "")
        return i.jsxs(c("TetraText.react"), {
          type: "meta3",
          children: [
            h._(
              "You removed all your connections with {app name}. To request that the app delete all the information they have from these connections, review their {=Privacy Policy} for details and their contact information. If you contact {app name} to remove your info, they may need your User ID for this connection:",
              [
                h._param("app name", a),
                h._param(
                  "=Privacy Policy",
                  i.jsx(c("CometLink.react"), {
                    href: e,
                    children: h._("Privacy Policy"),
                  })
                ),
              ]
            ),
            i.jsx(c("ApplicationAndWebsiteSettingCopyButton.react"), {
              color: "secondary",
              value: d,
            }),
          ],
        });
      else
        return a == null || b == null
          ? null
          : i.jsxs("div", {
              children: [
                i.jsx(c("TetraText.react"), {
                  type: "meta3",
                  children: h._(
                    "{app_name} uses your information to improve your experience. To learn more about how they use your info, view their {=Privacy Policy}.",
                    [
                      h._param("app_name", a),
                      h._param(
                        "=Privacy Policy",
                        i.jsx(c("CometLink.react"), {
                          href: e,
                          children: h._("Privacy Policy"),
                        })
                      ),
                    ]
                  ),
                }),
                i.jsx(c("AppsManagerDataDeletionRequestsComet.react"), {
                  appContactURL: e,
                  appDeleteDataURL: f,
                  appID: b,
                  appName: a,
                }),
              ],
            });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.appID,
        d = a.appName,
        e = a.deleteDataURL,
        f = a.privacyUrl,
        g = a.uninstallFacebookLoginTimestamp,
        m = a.uninstallLoyaltyTimestamp,
        n = a.uninstallNewsTimestamp,
        o = a.uninstallTimestamp;
      a = a.userAppScopeID;
      g = k(g);
      m = k(m);
      n = k(n);
      o = k(o);
      return i.jsxs("div", {
        className: c("stylex")(j.removeDescriptionStyle),
        children: [
          i.jsx("div", {
            children: i.jsx(c("TetraText.react"), {
              color: "negative",
              type: "bodyLink4",
              children: o,
            }),
          }),
          i.jsx("div", {
            className: c("stylex")(j.removeDescriptionTextStyle),
            children: l(d, b, a, f, e),
          }),
          g != null &&
            i.jsx(c("CometRow.react"), {
              xstyle: j.permissionContainer,
              children: i.jsx(c("CometRowItem.react"), {
                children: i.jsx(c("TetraTextPairing.react"), {
                  headline: h._("Logged in with Facebook"),
                  level: 3,
                  meta: g,
                  metaColor: "negative",
                }),
              }),
            }),
          g != null &&
            m != null &&
            i.jsx("div", { className: c("stylex")(j.dividerLine) }),
          m != null &&
            i.jsx(c("CometRow.react"), {
              xstyle: j.permissionContainer,
              children: i.jsx(c("CometRowItem.react"), {
                children: i.jsx(c("TetraTextPairing.react"), {
                  headline: h._("Connected Loyalty Program"),
                  level: 3,
                  meta: m,
                  metaColor: "negative",
                }),
              }),
            }),
          (g != null || m != null) &&
            n != null &&
            i.jsx("div", { className: c("stylex")(j.dividerLine) }),
          n != null &&
            i.jsx(c("CometRow.react"), {
              xstyle: j.permissionContainer,
              children: i.jsx(c("CometRowItem.react"), {
                children: i.jsx(c("TetraTextPairing.react"), {
                  headline: h._("Connected News subscription"),
                  level: 3,
                  meta: n,
                  metaColor: "negative",
                }),
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
  "SettingsAppsManagerTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:SettingsAppsManagerLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:SettingsAppsManagerLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:SettingsAppsManagerLoggerConfig",
          this.$1,
          { signal: !0 },
          a
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.setAppAndWebsiteCometUx = function (a) {
        this.$1.app_and_website_comet_ux = a;
        return this;
      };
      c.setAppIds = function (a) {
        this.$1.app_ids = b("GeneratedLoggerUtils").serializeVector(a);
        return this;
      };
      c.setErrorMessage = function (a) {
        this.$1.error_message = a;
        return this;
      };
      c.setErrorTrace = function (a) {
        this.$1.error_trace = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setExceptionErrorCode = function (a) {
        this.$1.exception_error_code = a;
        return this;
      };
      c.setPermission = function (a) {
        this.$1.permission = a;
        return this;
      };
      c.setRef = function (a) {
        this.$1.ref = a;
        return this;
      };
      c.setTab = function (a) {
        this.$1.tab = a;
        return this;
      };
      c.setType = function (a) {
        this.$1.type = a;
        return this;
      };
      return a;
    })();
    c = {
      app_and_website_comet_ux: !0,
      app_ids: !0,
      error_message: !0,
      error_trace: !0,
      event: !0,
      exception_error_code: !0,
      permission: !0,
      ref: !0,
      tab: !0,
      type: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  "XCometApplicationAndWebsiteSettingEditAppDetailsControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/settings/applications/app_details/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ApplicationAndWebsiteSettingAppGrid.react",
  [
    "fbt",
    "ApplicationAndWebsiteErrorContext",
    "ApplicationAndWebsiteSettingAppStatus.react",
    "ApplicationAndWebsiteToastContext",
    "AppsAndWebsitesErrorUtils.react",
    "AppsAndWebsitesRemovedDetailDialog.react",
    "CometImage.react",
    "CometRow.react",
    "CometRowItem.react",
    "JSResourceForInteraction",
    "SettingsAppsManagerTypedLogger",
    "TetraButton.react",
    "TetraButtonGroup.react",
    "TetraTextPairing.react",
    "XCometApplicationAndWebsiteSettingEditAppDetailsControllerRouteBuilder",
    "react",
    "stylex",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useContext,
      k = 42,
      l = {
        appInfo: {
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          flexShrink: "fq7gm3ab",
          paddingTop: "aodizinl",
        },
        appInfoAndEditRow: {
          backgroundColor: "cwj9ozl2",
          borderTop: "opwvks06",
          borderEnd: "hop1g133",
          borderBottom: "linmgsc8",
          borderStart: "t63ysoy8",
          marginTop: "hqeojc4l",
          marginEnd: "cxmmr5t8",
          marginBottom: "mkjtxrlb",
          marginStart: "hcukyx3x",
          minHeight: "t5t1ig2m",
          minWidth: "dfk82vis",
        },
        appTextSection: {
          marginBottom: "myj7ivm5",
          marginStart: "ozuftl9m",
          marginTop: "km676qkl",
        },
        buttonGroup: { flexShrink: "g5gj957u" },
        removedAppGridRoot: {
          borderBottom: "neevheor",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          justifyContent: "i1fnvgqd",
          paddingTop: "discj3wi",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "ihqw7lf3",
          paddingStart: "dati1w0a",
        },
        removedIconAndName: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
        },
      };
    function a(a) {
      var b = a.appID,
        e = a.appName,
        f = a.appStatus,
        g = a.connectedLoyaltyPrograms,
        m = a.connectedWithFacebookLoginTimestamp,
        n = a.connectedWithLoyaltyTimestamp,
        o = a.connectedWithNewsTimestamp,
        p = a.deleteDataURL,
        q = a.installTimestamp,
        r = a.isAggregator,
        s = a.logoUrl,
        t = a.privacyUrl,
        u = a.pushPage,
        v = a.uninstallFacebookLoginTimestamp,
        w = a.uninstallLoyaltyTimestamp,
        x = a.uninstallNewsTimestamp,
        y = a.uninstallTimestamp,
        z = a.userAppScopeID,
        A = j(c("ApplicationAndWebsiteErrorContext")),
        B = j(c("ApplicationAndWebsiteToastContext"));
      a = c("useCometLazyDialog")(
        c("JSResourceForInteraction")(
          "AppsAndWebsitesDeleteAppDialog.react"
        ).__setRef("ApplicationAndWebsiteSettingAppGrid.react")
      );
      var C = a[0];
      if (
        b == null ||
        s == null ||
        b === "" ||
        s === "" ||
        e == null ||
        e === "" ||
        f == null
      )
        return null;
      a = c(
        "XCometApplicationAndWebsiteSettingEditAppDetailsControllerRouteBuilder"
      ).buildURL({ app_id: b });
      return f === "Removed"
        ? u == null
          ? null
          : i.jsxs("div", {
              className: c("stylex")(l.removedAppGridRoot),
              "data-testid": void 0,
              id: b,
              children: [
                i.jsxs("div", {
                  className: c("stylex")(l.removedIconAndName),
                  children: [
                    i.jsx(c("CometImage.react"), {
                      alt: h._(
                        "The application detailed tab's application logo image."
                      ),
                      height: k,
                      src: s,
                      width: k,
                    }),
                    i.jsx("div", {
                      className: c("stylex")(l.appTextSection),
                      children: i.jsx(c("TetraTextPairing.react"), {
                        headline: e,
                        level: 4,
                      }),
                    }),
                  ],
                }),
                i.jsx("div", {
                  children: i.jsx(c("TetraButton.react"), {
                    label: h._("View"),
                    onPress: function () {
                      u(
                        function () {
                          return i.jsx(
                            c("AppsAndWebsitesRemovedDetailDialog.react"),
                            {
                              appID: b,
                              appName: e,
                              deleteDataURL: p,
                              privacyUrl: t,
                              uninstallFacebookLoginTimestamp: v,
                              uninstallLoyaltyTimestamp: w,
                              uninstallNewsTimestamp: x,
                              uninstallTimestamp: y,
                              userAppScopeID: z,
                            }
                          );
                        },
                        { title: e }
                      ),
                        new (c("SettingsAppsManagerTypedLogger"))()
                          .setAppAndWebsiteCometUx(!0)
                          .setAppIds([b])
                          .setEvent("show_removed_app_details")
                          .setType("apps")
                          .log();
                    },
                    ref: null,
                    size: "medium",
                    testid: void 0,
                    type: "secondary",
                  }),
                }),
              ],
            })
        : i.jsx("div", {
            className: c("stylex")(l.appInfoAndEditRow),
            "data-testid": void 0,
            id: b,
            children: i.jsxs(c("CometRow.react"), {
              paddingTop: 0,
              children: [
                i.jsxs(c("CometRowItem.react"), {
                  xstyle: l.appInfo,
                  children: [
                    i.jsx(c("CometImage.react"), {
                      alt: h._(
                        "The application detailed tab's application logo image."
                      ),
                      height: k,
                      src: s,
                      width: k,
                    }),
                    i.jsx("div", {
                      className: c("stylex")(l.appTextSection),
                      children: i.jsx(c("TetraTextPairing.react"), {
                        headline: e,
                        level: 4,
                        meta: i.jsxs("div", {
                          children: [
                            i.jsx(
                              c("ApplicationAndWebsiteSettingAppStatus.react"),
                              { appStatus: f, installTimestamp: q }
                            ),
                            A.appID === b &&
                              A.onError &&
                              A.errorType === "removeApp" &&
                              d(
                                "AppsAndWebsitesErrorUtils.react"
                              ).getRemovedAppErrorSection(),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                i.jsx(c("CometRowItem.react"), {
                  verticalAlign: "center",
                  xstyle: l.buttonGroup,
                  children: i.jsx(c("TetraButtonGroup.react"), {
                    direction: "backward",
                    primary: {
                      label: h._("Remove"),
                      onPress: function () {
                        r === !0
                          ? C({
                              appID: b,
                              appName: e,
                              connectedLoyaltyPrograms: g,
                              connectedWithFacebookLoginTimestamp: m,
                              connectedWithLoyaltyTimestamp: n,
                              connectedWithNewsTimestamp: o,
                              errorContext: A,
                              toastContext: B,
                            })
                          : C({
                              appID: b,
                              appName: e,
                              connectedWithFacebookLoginTimestamp: m,
                              connectedWithLoyaltyTimestamp: n,
                              connectedWithNewsTimestamp: o,
                              errorContext: A,
                              toastContext: B,
                            }),
                          new (c("SettingsAppsManagerTypedLogger"))()
                            .setAppIds([b])
                            .setAppAndWebsiteCometUx(!0)
                            .setEvent("show_remove_dialog")
                            .setType("apps")
                            .log();
                      },
                      reduceEmphasis: !0,
                      testid: "AppsAndWebsiteOverallPage_RemoveButton",
                      type: "primary",
                    },
                    secondary: {
                      disabled:
                        A.appID === b &&
                        A.onError &&
                        A.errorType === "removeApp",
                      label: h._("View and Edit"),
                      linkProps: { url: a },
                      testid: "AppsAndWebsiteOverallPage_ViewDetailButton",
                    },
                    size: "medium",
                    verticalAlign: "center",
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
  "ApplicationAndWebsiteSettingAppGridList.react",
  [
    "fbt",
    "ix",
    "ApplicationAndWebsiteSettingAppGrid.react",
    "ApplicationAndWebsiteSettingAppGridList_SettingUserAppInfo.graphql",
    "CometImage.react",
    "CometShowToggleButton.react",
    "RelayHooks",
    "TetraText.react",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useState,
      m = 6;
    function a(a) {
      a = a.userAppInfo;
      a = d("RelayHooks").useFragment(
        j !== void 0
          ? j
          : (j = b(
              "ApplicationAndWebsiteSettingAppGridList_SettingUserAppInfo.graphql"
            )),
        a
      );
      var e = l(!0),
        f = e[0],
        g = e[1];
      e = l(!1);
      var n = e[0],
        o = e[1];
      if (
        ((a == null ? void 0 : a.active) == null &&
          (a == null ? void 0 : a.expired) == null) ||
        ((a == null ? void 0 : a.active.length) === 0 &&
          (a == null ? void 0 : a.expired.length) === 0)
      )
        return k.jsxs("div", {
          className: "pow20xho f0zqjlou cbu4d94t j83agx80 bp9cbjyn n5ue3fu6",
          children: [
            k.jsx(c("CometImage.react"), { src: i("517192") }),
            k.jsx("div", {
              className: "f0zqjlou",
              children: k.jsx(c("TetraText.react"), {
                type: "meta1",
                children: h._("You don't have any apps or websites to review."),
              }),
            }),
          ],
        });
      e = c("orEmptyArray")(a == null ? void 0 : a.active);
      a = c("orEmptyArray")(a == null ? void 0 : a.expired);
      e = [].concat(e, a);
      a = e
        .sort(function (a, b) {
          return a.install_timestamp != null &&
            b.install_timestamp != null &&
            a.install_timestamp < b.install_timestamp
            ? 1
            : -1;
        })
        .map(function (a) {
          return k.jsx(
            c("ApplicationAndWebsiteSettingAppGrid.react"),
            {
              appID: a.app_id,
              appName: a.app_name,
              appStatus: a.app_status,
              connectedLoyaltyPrograms: a.connected_loyalty_programs,
              connectedWithFacebookLoginTimestamp: Number(
                a.connected_with_facebook_timestamp
              ),
              connectedWithLoyaltyTimestamp: Number(
                a.connected_with_loyalty_timestamp
              ),
              connectedWithNewsTimestamp: Number(
                a.connected_with_news_timestamp
              ),
              installTimestamp: Number(a.install_timestamp),
              isAggregator: a.is_aggregator_app,
              logoUrl: a.logo_url,
            },
            a.app_id
          );
        });
      var p = function () {
        o(!0), g(!f);
      };
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx("div", {
            className: "pow20xho",
            children: n ? a : a.slice(0, m),
          }),
          k.jsx("div", {
            className: "sej5wr8e" + (!f || e.length <= m ? " mkhogb32" : ""),
            children: k.jsx(c("CometShowToggleButton.react"), {
              collapsed: f,
              collapsedLabel: h._("See More"),
              expandedLabel: h._("See Less"),
              onToggle: p,
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
  "AppsAndWebsitesToastUtils.react",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      if (a === "removeApp") return "removeApp";
      if (a === "disconnectedFBLogin") return "disconnectedFBLogin";
      if (a === "disconnectedLoyalty") return "disconnectedLoyalty";
      if (a === "disconnectedNews") return "disconnectedNews";
      return a === "permission" ? "permission" : "null";
    }
    function b(a, b, c) {
      switch (b) {
        case "removeApp":
          return h._("You removed {app name} from Apps and Websites", [
            h._param("app name", a),
          ]);
        case "disconnectedFBLogin":
          return h._("You removed your log in connection with {app name}", [
            h._param("app name", a),
          ]);
        case "disconnectedNews":
          return h._(
            "You removed your {app name} news subscription account from Facebook",
            [h._param("app name", a)]
          );
        case "disconnectedLoyalty":
          return h._(
            "You removed your {app name} loyalty account from Facebook",
            [h._param("app name", a)]
          );
        case "permission":
          return h._(
            "You removed {app name}'s access to your {permission label}",
            [
              h._param("app name", a),
              h._param(
                "permission label",
                c == null ? void 0 : c.toLowerCase()
              ),
            ]
          );
      }
      return "placeholder";
    }
    g.getRemoveTypeValueFromRaw = a;
    g.getRemoveSuccessToastMessage = b;
  },
  98
);
__d(
  "ApplicationAndWebsiteSettingAppRemovalSuccessToast.react",
  ["AppsAndWebsitesToastUtils.react", "CometToast.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = function () {
        window.setTimeout(function () {
          a.onClose();
        }, 3e3);
      };
      return h.jsxs("div", {
        className: "dbpd2lw6 h5g66v2i pmk7jnqg fk4cgndu",
        children: [
          b(),
          h.jsx(c("CometToast.react"), {
            message: d(
              "AppsAndWebsitesToastUtils.react"
            ).getRemoveSuccessToastMessage(
              a.appName,
              a.removeType,
              a.permissionLabel
            ),
            onDismiss: a.onClose,
            supressCloseButton: !0,
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
  "AppsAndWebsitesHomeHeader.react",
  ["fbt", "CometLink.react", "TetraTextPairing.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx("div", {
        className: "hcukyx3x o0krvn1l cxmmr5t8 gn435yay",
        children: i.jsx(c("TetraTextPairing.react"), {
          headline: h._("Apps and Websites"),
          level: 2,
          meta: i.jsxs("div", {
            className: "tr9rh885 knj5qynh",
            children: [
              h._(
                "These are the apps and websites you\u2019ve connected to your Facebook account. They have ongoing access to information you\u2019ve shared with them. You can manage what you\u2019re sharing with an app or remove it completely. Removed apps can no longer access non-public information previously shared, but may still have what they received while their connections were active."
              ),
              " ",
              i.jsx(c("CometLink.react"), {
                href: "/help/218345114850283",
                target: "_blank",
                children: h._("Learn More"),
              }),
            ],
          }),
          reduceEmphasis: !0,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "AppsAndWebsitesChangePlatformOptPreference",
  [
    "AppsAndWebsitesChangePlatformOptPreferenceOptInMutation.graphql",
    "AppsAndWebsitesChangePlatformOptPreferenceOptOutMutation.graphql",
    "CometRelay",
    "orEmptyArray",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a) {
      var e = d("CometRelay").useMutation(
          h !== void 0
            ? h
            : (h = b(
                "AppsAndWebsitesChangePlatformOptPreferenceOptOutMutation.graphql"
              ))
        ),
        f = e[0];
      e = d("CometRelay").useMutation(
        i !== void 0
          ? i
          : (i = b(
              "AppsAndWebsitesChangePlatformOptPreferenceOptInMutation.graphql"
            ))
      );
      var g = e[0];
      if (a)
        return function () {
          g({
            updater: function (a) {
              (a = a
                .getRoot()
                .getLinkedRecord("settings_app_and_website_tab_metadata")) ==
              null
                ? void 0
                : (a = a.getLinkedRecord("user_preference")) == null
                ? void 0
                : a.setValue(!0, "platform_enabled");
            },
            variables: {},
          });
        };
      else
        return function () {
          f({
            updater: function (a) {
              var b, d;
              b =
                (b = a
                  .getRoot()
                  .getLinkedRecord("settings_app_and_website_tab_metadata")) ==
                null
                  ? void 0
                  : b.getLinkedRecord("user_app_info");
              var e = b == null ? void 0 : b.getLinkedRecords("active"),
                f = b == null ? void 0 : b.getLinkedRecords("expired");
              e = c("orEmptyArray")(
                b == null
                  ? void 0
                  : (d = b.getLinkedRecords("removed")) == null
                  ? void 0
                  : (d = d.concat(e)) == null
                  ? void 0
                  : d.concat(f)
              );
              d = [];
              b == null ? void 0 : b.setLinkedRecords(d, "active");
              b == null ? void 0 : b.setLinkedRecords(d, "expired");
              b == null ? void 0 : b.setLinkedRecords(e, "removed");
              (f = a
                .getRoot()
                .getLinkedRecord("settings_app_and_website_tab_metadata")) ==
              null
                ? void 0
                : (d = f.getLinkedRecord("user_preference")) == null
                ? void 0
                : d.setValue(!1, "platform_enabled");
            },
            variables: {},
          });
        };
    }
    g["default"] = a;
  },
  98
);
__d(
  "AppsAndWebsitesPreferenceItem.react",
  [
    "fbt",
    "CometLazyDialogTrigger.react",
    "JSResourceForInteraction",
    "SettingsAppsManagerTypedLogger",
    "TetraButton.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("JSResourceForInteraction")(
        "AppsAndWebistesPreferenceDialog.react"
      ).__setRef("AppsAndWebsitesPreferenceItem.react");
    function k(a) {
      a != null &&
        new (c("SettingsAppsManagerTypedLogger"))()
          .setEvent(a)
          .setAppAndWebsiteCometUx(!0)
          .log();
    }
    function a(a) {
      return i.jsxs("div", {
        className:
          "lt9micmv ofv0k9yr gl4o1x5y aodizinl tr9rh885 i1fnvgqd btwxx1t3 j83agx80 kzx2olss aot14ch1 p86d2i9g beltcj47 t63ysoy8 linmgsc8 hop1g133 opwvks06",
        children: [
          i.jsx(c("TetraTextPairing.react"), {
            headline: a.title,
            level: 3,
            meta: a.explainContent,
          }),
          i.jsx("div", {
            className: "fq7gm3ab",
            children: i.jsx(c("CometLazyDialogTrigger.react"), {
              dialogProps: {
                changeGlobalPreferenceFn:
                  a.dialogMutationChangeGlobalPreference,
                contentElement: a.dialogContentElement,
                primaryButtonText: a.primaryButtonText,
                secondaryButtonText: a.secondaryButtonText,
                titleText: a.dialogTitle,
              },
              dialogResource: j,
              onShow: function () {
                return k(a.event);
              },
              children: function (b, d, e) {
                return i.jsx(c("TetraButton.react"), {
                  label:
                    a.buttonContext === "on" ? h._("Turn On") : h._("Turn Off"),
                  onPress: function () {
                    b(), e == null ? void 0 : e();
                  },
                  ref: d,
                  size: "medium",
                  testid: void 0,
                  type: "secondary",
                });
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
  "AppsAndWebsitesPreferenceCard.react",
  [
    "fbt",
    "AppsAndWebsitesChangePlatformOptPreference",
    "AppsAndWebsitesPreferenceCardChangeGlobalNotificationMutation.graphql",
    "AppsAndWebsitesPreferenceCard_SettingsAppsAndWebsiteTabRenderPayload.graphql",
    "AppsAndWebsitesPreferenceItem.react",
    "RelayHooks",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react");
    function l() {
      return k.jsxs("div", {
        className: "dhix69tm nzypyw8j wkznzc2l tr9rh885",
        children: [
          k.jsx("div", {
            className: "p5pk11vy",
            children: k.jsx(c("TetraText.react"), {
              type: "headlineEmphasized4",
              children: h._("If you turn off this setting:"),
            }),
          }),
          k.jsx("div", {
            className: "hzawbc8m audrk5ec fv0vnmcu sw24d88r",
            children: k.jsx(c("TetraText.react"), {
              type: "body3",
              children: k.jsxs("ul", {
                className: "qvhz7x84 rc19sd8y sq6gx45u",
                children: [
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._(
                        "You won't be able to log into apps or websites using Facebook"
                      ),
                    }),
                  }),
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._(
                        "Apps and websites you've logged into with Facebook may delete your accounts and activity"
                      ),
                    }),
                  }),
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._(
                        "You won't be able to play some games on Facebook, and your gaming activity may be deleted"
                      ),
                    }),
                  }),
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._(
                        "Your posts, photos and videos on Facebook that apps and websites have published may be deleted"
                      ),
                    }),
                  }),
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._(
                        "You may not be able to fully interact with and/or share content from other apps and websites on Facebook using social plugins such as the Share and Like buttons"
                      ),
                    }),
                  }),
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._(
                        "Any accounts with other apps and websites you\u2019ve connected to Facebook (like loyalty programs and news subscriptions), will be disconnected"
                      ),
                    }),
                  }),
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._(
                        "You won\u2019t be able to connect your accounts with other apps and websites to your Facebook"
                      ),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m() {
      return k.jsxs("div", {
        className: "dhix69tm nzypyw8j wkznzc2l tr9rh885",
        children: [
          k.jsx("div", {
            className: "p5pk11vy",
            children: k.jsx(c("TetraText.react"), {
              type: "bodyLink3",
              children: h._("If you turn on this setting, you can:"),
            }),
          }),
          k.jsx("div", {
            className: "hzawbc8m audrk5ec fv0vnmcu sw24d88r",
            children: k.jsx(c("TetraText.react"), {
              type: "body3",
              children: k.jsxs("ul", {
                className: "qvhz7x84 rc19sd8y sq6gx45u",
                children: [
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._(
                        "Log into other apps and websites using Facebook"
                      ),
                    }),
                  }),
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._("Play games in Facebook Gameroom"),
                    }),
                  }),
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._(
                        "Interact with and share content from other apps and websites using Facebook social plugins such as the Share and Like buttons"
                      ),
                    }),
                  }),
                  k.jsx("li", {
                    className: "rat2krgp bzsjyuwj oo9gr5id",
                    children: k.jsx("div", {
                      className: "qnrpqo6b jq4qci2q",
                      children: h._(
                        "Connect your accounts with other apps and websites (like loyalty programs and news subscriptions) to Facebook"
                      ),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      var e,
        f = d("RelayHooks").useFragment(
          i !== void 0
            ? i
            : (i = b(
                "AppsAndWebsitesPreferenceCard_SettingsAppsAndWebsiteTabRenderPayload.graphql"
              )),
          a.metaData
        );
      a =
        (f == null
          ? void 0
          : (a = f.user_preference) == null
          ? void 0
          : a.platform_enabled) === !0;
      e =
        (f == null
          ? void 0
          : (e = f.user_preference) == null
          ? void 0
          : e.game_app_notification_enabled) === !0;
      var g = d("RelayHooks").useMutation(
          j !== void 0
            ? j
            : (j = b(
                "AppsAndWebsitesPreferenceCardChangeGlobalNotificationMutation.graphql"
              ))
        ),
        n = g[0];
      g = function () {
        var a;
        n({
          updater: function (a) {
            var b;
            b =
              (b = a.getRootField(
                "setting_apps_and_websites_change_games_and_apps_notification_preference"
              )) == null
                ? void 0
                : b.getValue("game_app_notification_enabled");
            (a = a
              .getRoot()
              .getLinkedRecord("settings_app_and_website_tab_metadata")) == null
              ? void 0
              : (a = a.getLinkedRecord("user_preference")) == null
              ? void 0
              : a.setValue(b, "game_app_notification_enabled");
          },
          variables: {
            setToEnable: !((a =
              f == null
                ? void 0
                : (a = f.user_preference) == null
                ? void 0
                : a.game_app_notification_enabled) != null
              ? a
              : !1),
          },
        });
      };
      return k.jsxs("div", {
        className: "cbu4d94t j83agx80",
        children: [
          k.jsxs(c("TetraText.react"), {
            type: "bodyLink1",
            children: [h._("Preferences"), " "],
          }),
          k.jsx(c("AppsAndWebsitesPreferenceItem.react"), {
            buttonContext: a ? "off" : "on",
            buttonTestID: "platform-opt-button",
            dialogContentElement: a ? l() : m(),
            dialogMutationChangeGlobalPreference: c(
              "AppsAndWebsitesChangePlatformOptPreference"
            )(!a),
            dialogTitle: a
              ? h._("Turn off apps, websites and games?")
              : h._("Turn on apps, websites and games?"),
            event: a
              ? "show_platform_optout_dialog"
              : "show_platform_optin_dialog",
            explainContent: h._(
              "Gives you the ability to use Facebook to log into and interact with third party apps, websites and games as well as connect accounts you have with other apps, websites and games to Facebook."
            ),
            primaryButtonText: a ? h._("Turn Off") : h._("Turn On"),
            secondaryButtonText: h._("Cancel"),
            title: h._("Apps, websites and games"),
          }),
          a &&
            k.jsx(c("AppsAndWebsitesPreferenceItem.react"), {
              buttonContext: e ? "off" : "on",
              dialogContentElement: k.jsx("div", {
                className:
                  "dhix69tm nzypyw8j wkznzc2l tr9rh885 b4ylihy8 a8nywdso jq4qci2q rsyw3t7h",
                children: k.jsx(c("TetraText.react"), {
                  type: "body3",
                  children: e
                    ? h._(
                        "Turning off game and app notifications hide those notifications on Facebook and Gameroom. It will not affect games in your Instant Games settings or impact your ability to use apps or play games."
                      )
                    : h._(
                        "Turning on game and app notifications will re-enable those notifications on Facebook and Gameroom based on your previous settings"
                      ),
                }),
              }),
              dialogMutationChangeGlobalPreference: g,
              dialogTitle: e
                ? h._("Turn off game and app notifications?")
                : h._("Turn on game and app notifications?"),
              event: e
                ? "show_disable_global_notification_dialog"
                : "show_enable_global_notification_dialog",
              explainContent: h._(
                "Allows notifications for game requests from friends, game status updates and app notifications from app developers on Facebook and Gameroom. Changing these settings will not affect games in your Instant Games settings or impact your ability to use apps or play games."
              ),
              primaryButtonText: e ? h._("Turn Off") : h._("Turn On"),
              secondaryButtonText: h._("Cancel"),
              title: h._("Game and app notifications"),
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
  "AppsAndWebsitesRedirectedRemovedAppDetailsDialog.react",
  [
    "AppsAndWebsitesRemovedDetailDialog.react",
    "CometCardedDialog.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        dialog: {
          overflowX: "eljz3tee",
          overflowY: "emxnvquj",
          width: "oh7imozk",
        },
      };
    function a(a) {
      return a.appID == null || a.appName == null
        ? null
        : h.jsx("div", {
            style: i.dialog,
            children: h.jsx(c("CometCardedDialog.react"), {
              onClose: a.onClose,
              title: a.appName,
              withCloseButton: !0,
              children: h.jsx(c("AppsAndWebsitesRemovedDetailDialog.react"), {
                appID: a.appID,
                appName: a.appName,
                deleteDataURL: a.deleteDataURL,
                privacyUrl: a.privacyUrl,
                uninstallFacebookLoginTimestamp:
                  a.uninstallFacebookLoginTimestamp,
                uninstallLoyaltyTimestamp: a.uninstallLoyaltyTimestamp,
                uninstallNewsTimestamp: a.uninstallNewsTimestamp,
                uninstallTimestamp: a.uninstallTimestamp,
                userAppScopeID: a.userAppScopeID,
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
  "AppsAndWebsitesRemovedAppDialog.react",
  [
    "fbt",
    "ix",
    "ApplicationAndWebsiteSettingAppGrid.react",
    "AppsAndWebsitesRedirectedRemovedAppDetailsDialog.react",
    "AppsAndWebsitesRemovedAppDialog_removedApps.graphql",
    "CometImage.react",
    "CometMultiStepDialog.react",
    "RelayHooks",
    "SettingsAppsManagerTypedLogger",
    "TetraText.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useEffect,
      m = {
        anchor: { minHeight: "pnzxbu4t" },
        dialogSize: {
          height: "rw93awf7",
          overflowX: "eljz3tee",
          overflowY: "emxnvquj",
          paddingTop: "jb3vyjys",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "qt6c0cv9",
          paddingStart: "dati1w0a",
        },
        noAppContent: {
          alignContent: "n5ue3fu6",
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          justifyContent: "taijpn5t",
        },
        noAppMargin: { marginTop: "f0zqjlou" },
      };
    function a(a) {
      l(function () {
        new (c("SettingsAppsManagerTypedLogger"))()
          .setAppAndWebsiteCometUx(!0)
          .setEvent("show_app_list")
          .setTab("removed")
          .setType("apps")
          .log();
      }, []);
      var e = d("RelayHooks").useFragment(
        j !== void 0
          ? j
          : (j = b("AppsAndWebsitesRemovedAppDialog_removedApps.graphql")),
        a.fragmentProp$key
      );
      if (a.showRedirectedRemovedAppDialog && a.removedAppID != null) {
        var f =
          e == null
            ? void 0
            : e.removed.filter(function (b) {
                return b.app_id === a.removedAppID;
              });
        if (f != null && f.length > 0) {
          f = f[0];
          return k.jsx(
            c("AppsAndWebsitesRedirectedRemovedAppDetailsDialog.react"),
            {
              appID: f.app_id,
              appName: f.app_name,
              deleteDataURL: f.delete_data_url,
              onClose: function () {
                a.onClose(), a.setShowRedirectedRemovedAppDialog(!1);
              },
              privacyUrl: f.privacy_url,
              uninstallFacebookLoginTimestamp: Number(
                f.disconnected_facebook_login_timestamp
              ),
              uninstallLoyaltyTimestamp: Number(
                f.disconnected_loyalty_timestamp
              ),
              uninstallNewsTimestamp: Number(f.disconnected_news_timestamp),
              uninstallTimestamp: Number(f.uninstall_timestamp),
              userAppScopeID: f.user_app_scope_id,
            }
          );
        }
      }
      var g = (e == null ? void 0 : e.removed.length) === 0;
      return k.jsx(c("CometMultiStepDialog.react"), {
        anchorXStyle: m.anchor,
        onClose: a.onClose,
        title: h._("Removed Apps and Websites"),
        withCloseButton: !0,
        children: function (a) {
          return g
            ? k.jsxs("div", {
                className: c("stylex")(m.dialogSize, m.noAppContent),
                children: [
                  k.jsx(c("CometImage.react"), { src: i("517192") }),
                  k.jsx("div", {
                    className: c("stylex")(m.noAppMargin),
                    children: k.jsx(c("TetraText.react"), {
                      type: "meta1",
                      children: h._(
                        "You don't have any apps or websites to review."
                      ),
                    }),
                  }),
                ],
              })
            : k.jsx("div", {
                className: c("stylex")(m.dialogSize),
                children:
                  e == null
                    ? void 0
                    : e.removed.map(function (b) {
                        return k.jsx(
                          c("ApplicationAndWebsiteSettingAppGrid.react"),
                          {
                            appID: b.app_id,
                            appName: b.app_name,
                            appStatus: "Removed",
                            deleteDataURL: b.delete_data_url,
                            logoUrl: b.logo_url,
                            privacyUrl: b.privacy_url,
                            pushPage: a,
                            uninstallFacebookLoginTimestamp: Number(
                              b.disconnected_facebook_login_timestamp
                            ),
                            uninstallLoyaltyTimestamp: Number(
                              b.disconnected_loyalty_timestamp
                            ),
                            uninstallNewsTimestamp: Number(
                              b.disconnected_news_timestamp
                            ),
                            uninstallTimestamp: Number(b.uninstall_timestamp),
                            userAppScopeID: b.user_app_scope_id,
                          },
                          b.app_id
                        );
                      }),
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
  "AppsAndWebsitesRemovedSection.react",
  [
    "fbt",
    "AppsAndWebsitesRemovedAppDialog.react",
    "AppsAndWebsitesRemovedSection_removedApps.graphql",
    "RelayHooks",
    "TetraButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useState;
    function a(a) {
      var e = d("RelayHooks").useFragment(
          i !== void 0
            ? i
            : (i = b("AppsAndWebsitesRemovedSection_removedApps.graphql")),
          a.userAppInfo
        ),
        f = k(a.removedAppID != null),
        g = f[0],
        l = f[1];
      f = k(a.removedAppID != null);
      var m = f[0];
      f = f[1];
      return a.userAppInfo != null
        ? j.jsxs(j.Fragment, {
            children: [
              j.jsx(c("TetraButton.react"), {
                label: h._("View Removed Apps and Websites"),
                onPress: function () {
                  return l(!0);
                },
                reduceEmphasis: !0,
                type: "secondary",
              }),
              g &&
                j.jsx("div", {
                  className: "oh7imozk py2didcb rk01pc8j kfkz5moi pmk7jnqg",
                  children: j.jsx(c("AppsAndWebsitesRemovedAppDialog.react"), {
                    fragmentProp$key: e,
                    onClose: function () {
                      return l(!1);
                    },
                    removedAppID: a.removedAppID,
                    setShowRedirectedRemovedAppDialog: f,
                    showRedirectedRemovedAppDialog: m,
                  }),
                }),
            ],
          })
        : j.jsx("div", { children: h._("error happens") });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ApplicationAndWebsiteSettingTabRoot.react",
  [
    "ApplicationAndWebsiteErrorContext",
    "ApplicationAndWebsiteSettingAppGridList.react",
    "ApplicationAndWebsiteSettingAppRemovalSuccessToast.react",
    "ApplicationAndWebsiteSettingTabRootQuery.graphql",
    "ApplicationAndWebsiteToastContext",
    "AppsAndWebsitesHomeHeader.react",
    "AppsAndWebsitesPreferenceCard.react",
    "AppsAndWebsitesRemovedSection.react",
    "AppsAndWebsitesToastUtils.react",
    "RelayHooks",
    "SettingsAppsManagerTypedLogger",
    "react",
    "useRoutePassthroughProps",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useEffect,
      k = e.useMemo,
      l = e.useState;
    function a(a) {
      var e = c("useRoutePassthroughProps")(),
        f = d("RelayHooks").usePreloadedQuery(
          h !== void 0
            ? h
            : (h = b("ApplicationAndWebsiteSettingTabRootQuery.graphql")),
          a.queries.ApplicationAndWebsiteSettingTabRootQueryReference
        ),
        g = l(!1),
        m = g[0],
        n = g[1];
      g = l("null");
      var o = g[0],
        p = g[1];
      g = l(null);
      var q = g[0],
        r = g[1];
      g = d("AppsAndWebsitesToastUtils.react").getRemoveTypeValueFromRaw(
        String(e == null ? void 0 : e.passRemoveToastType)
      );
      g = l(g);
      var s = g[0],
        t = g[1];
      e = l(String((g = e == null ? void 0 : e.appName) != null ? g : ""));
      var u = e[0],
        v = e[1];
      j(function () {
        new (c("SettingsAppsManagerTypedLogger"))()
          .setEvent("show_settings")
          .setAppAndWebsiteCometUx(!0)
          .setType("apps")
          .setTab(null)
          .log();
      }, []);
      g = k(
        function () {
          return { appName: u, removeType: s, setAppName: v, setRemoveType: t };
        },
        [s, u, v, t]
      );
      e = k(
        function () {
          return {
            appID: q,
            errorType: o,
            onError: m,
            setAppID: r,
            setErrorType: p,
            setOnError: n,
          };
        },
        [q, o, m, r, p, n]
      );
      return i.jsxs(c("ApplicationAndWebsiteErrorContext").Provider, {
        value: e,
        children: [
          i.jsx(c("ApplicationAndWebsiteToastContext").Provider, {
            value: g,
            children: i.jsxs("div", {
              className:
                "gm7ombtx g39emmki j8udfqtb jb3vyjys dfk82vis datstx6m cbu4d94t j83agx80 cwj9ozl2",
              children: [
                i.jsx(c("AppsAndWebsitesHomeHeader.react"), {}),
                i.jsx(c("ApplicationAndWebsiteSettingAppGridList.react"), {
                  userAppInfo:
                    (e = f.settings_app_and_website_tab_metadata) == null
                      ? void 0
                      : e.user_app_info,
                }),
                i.jsx("div", {
                  className: "jei6r52m qvjaupoy",
                  children: i.jsx(c("AppsAndWebsitesRemovedSection.react"), {
                    removedAppID:
                      (g = a.extraProps) == null ? void 0 : g.app_id,
                    userAppInfo:
                      (e = f.settings_app_and_website_tab_metadata) == null
                        ? void 0
                        : e.user_app_info,
                  }),
                }),
                i.jsx(c("AppsAndWebsitesPreferenceCard.react"), {
                  metaData: f.settings_app_and_website_tab_metadata,
                }),
              ],
            }),
          }),
          s !== "null" &&
            i.jsx(
              c("ApplicationAndWebsiteSettingAppRemovalSuccessToast.react"),
              {
                appName: u,
                onClose: function () {
                  t("null"), v("");
                },
                removeType: s,
              }
            ),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
