if (self.CavalryLogger) {
  CavalryLogger.start_js(["fzJSx68"]);
}

__d(
  "SupportInboxMainContainerQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4659961314022290",
        metadata: {},
        name: "SupportInboxMainContainerQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "AdPreferencesRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4706551299359402",
        metadata: {},
        name: "AdPreferencesRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometAdPreferencesAdvertisersSectionQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4272149439489463",
        metadata: {},
        name: "CometAdPreferencesAdvertisersSectionQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometAdPreferencesHiddenAdvertisersSectionQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4876928612322685",
        metadata: {},
        name: "CometAdPreferencesHiddenAdvertisersSectionQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "JournalistRegistrationRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3910329915653778",
        metadata: {},
        name: "JournalistRegistrationRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ApplicationAndWebsiteSettingTabRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4108486899265827",
        metadata: {},
        name: "ApplicationAndWebsiteSettingTabRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "SupportInboxItemsTabType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      REPORTS: "REPORTS",
      APPEALS: "APPEALS",
      REPORTS_AND_ESCALATIONS: "REPORTS_AND_ESCALATIONS",
      IG_CREATOR_SUPPORT: "IG_CREATOR_SUPPORT",
    });
    f["default"] = a;
  },
  66
);
__d(
  "buildSupportInboxRoute.entrypoint",
  ["JSResourceForInteraction", "createContentAreaCompoundEntryPointBuilder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("SupportInboxRoot.react").__setRef(
        "buildSupportInboxRoute.entrypoint"
      ),
      function (a) {}
    );
    g["default"] = a;
  },
  98
);
__d(
  "SupportInboxMainContainer.entrypoint",
  [
    "JSResourceForInteraction",
    "SupportInboxItemsTabType",
    "SupportInboxMainContainerQuery$Parameters",
    "WebPixelRatio",
    "buildSupportInboxRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b;
      b = {
        trigger_event_type: "OPEN_SUPPORT_INBOX",
        trigger_session_id:
          (b =
            (b = a.timeSpentMetaData) == null
              ? void 0
              : (b = b.session_ids) == null
              ? void 0
              : b.support_inbox_session_id) != null
            ? b
            : "unknown_session_id",
      };
      a = a.routeParams;
      var e = a.eid,
        f = a.item_id,
        g = a.tab_type;
      f != null &&
        (b = babelHelpers["extends"]({}, b, {
          selected_support_inbox_item_id: f,
        }));
      if (g != null) {
        a = Object.keys(c("SupportInboxItemsTabType")).find(function (a) {
          return c("SupportInboxItemsTabType")[a] === g;
        });
        a != null &&
          (b = babelHelpers["extends"]({}, b, {
            selected_support_inbox_tab_type: a,
          }));
      }
      e != null &&
        (b = babelHelpers["extends"]({}, b, { encrypted_item_id: String(e) }));
      return { input: b, scale: d("WebPixelRatio").get() };
    }
    a = c("buildSupportInboxRoute.entrypoint")(
      c("JSResourceForInteraction")("SupportInboxMainContainer.react").__setRef(
        "SupportInboxMainContainer.entrypoint"
      ),
      function (a) {
        return {
          queries: {
            mainContainerQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: b("SupportInboxMainContainerQuery$Parameters"),
              variables: h(a),
            },
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "buildAdPreferencesRoute.entrypoint",
  [
    "AdPreferencesRootQuery$Parameters",
    "JSResourceForInteraction",
    "createContentAreaCompoundEntryPointBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createContentAreaCompoundEntryPointBuilder")(
      c("JSResourceForInteraction")("AdPreferencesRoot.react").__setRef(
        "buildAdPreferencesRoute.entrypoint"
      ),
      function () {
        return {
          headerQueryReference: {
            parameters: b("AdPreferencesRootQuery$Parameters"),
            variables: {},
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "AdPreferencesHiddenAdvertisersRoot.entrypoint",
  [
    "CometAdPreferencesHiddenAdvertisersSectionQuery$Parameters",
    "JSResourceForInteraction",
    "buildAdPreferencesRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildAdPreferencesRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "CometAdPreferencesHiddenAdvertisersSection.react"
      ).__setRef("AdPreferencesHiddenAdvertisersRoot.entrypoint"),
      function (a) {
        return {
          queries: {
            cometAdPreferencesHiddenAdvertisersSectionQueryReference: {
              parameters: b(
                "CometAdPreferencesHiddenAdvertisersSectionQuery$Parameters"
              ),
              variables: {},
            },
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "AdPreferencesAdvertisersRoot.entrypoint",
  [
    "AdPreferencesHiddenAdvertisersRoot.entrypoint",
    "CometAdPreferencesAdvertisersSectionQuery$Parameters",
    "JSResourceForInteraction",
    "buildAdPreferencesRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildAdPreferencesRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "CometAdPreferencesAdvertisersSection.react"
      ).__setRef("AdPreferencesAdvertisersRoot.entrypoint"),
      function (a) {
        return {
          entryPoints: {
            advertisersNestedEntryPoint: {
              entryPoint: c("AdPreferencesHiddenAdvertisersRoot.entrypoint"),
              entryPointParams: a,
            },
          },
          queries: {
            advertisersSectionQueryReference: {
              parameters: b(
                "CometAdPreferencesAdvertisersSectionQuery$Parameters"
              ),
              variables: {},
            },
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "JournalistRegistrationRoot.entrypoint",
  ["JSResourceForInteraction", "JournalistRegistrationRootQuery$Parameters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 8475;
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            journalistRegistrationRootQueryRef: {
              parameters: c("JournalistRegistrationRootQuery$Parameters"),
              variables: { nuxID: h },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "JournalistRegistrationRoot.react"
      ).__setRef("JournalistRegistrationRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "ApplicationAndWebsiteSettingTabRootEntryPoint.entrypoint",
  [
    "ApplicationAndWebsiteSettingTabRootQuery$Parameters",
    "JSResourceForInteraction",
    "buildCometSettingsRoute.entrypoint",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("buildCometSettingsRoute.entrypoint")(
      c("JSResourceForInteraction")(
        "ApplicationAndWebsiteSettingTabRoot.react"
      ).__setRef("ApplicationAndWebsiteSettingTabRootEntryPoint.entrypoint"),
      function (a) {
        return {
          extraProps: { app_id: a.routeProps.app_id },
          queries: {
            ApplicationAndWebsiteSettingTabRootQueryReference: {
              options: {},
              parameters: c(
                "ApplicationAndWebsiteSettingTabRootQuery$Parameters"
              ),
              variables: {},
            },
          },
        };
      }
    );
    g["default"] = a;
  },
  98
);
