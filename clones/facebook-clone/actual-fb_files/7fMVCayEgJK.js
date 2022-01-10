if (self.CavalryLogger) {
  CavalryLogger.start_js(["2PUwI5N"]);
}

__d(
  "HelpCenterContentPageRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4077389405717016",
        metadata: {},
        name: "HelpCenterContentPageRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometNotificationsRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4572861212765096",
        metadata: {},
        name: "CometNotificationsRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "SupportedCMSPlatformsNames",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ANDROID: "android",
      IPHONE: "iphone",
      IPAD: "ipad",
      DESKTOP: "desktop",
      ANDROID_APP: "android-app",
      MOBILE_TOUCH: "mobile-touch",
      FBLITE: "fblite",
      IPHONE_APP: "iphone-app",
      IPAD_APP: "ipad-app",
      MOBILE_BASIC: "mobile-basic",
      WWW: "www",
      WINDOWS: "windows",
      WINDOWS_PHONE: "windows-phone",
      WINDOWS_DESKTOP: "windows-desktop",
      EVERYPHONE_STANDARD: "everyphone-standard",
      MESSENGER_LITE: "messenger-lite",
      MESSENGER_LITE_APP: "messenger-lite-app",
    });
    f["default"] = a;
  },
  66
);
__d(
  "HelpCenterContentPageRoot.entrypoint",
  [
    "HelpCenterContentPageRootQuery$Parameters",
    "JSResourceForInteraction",
    "SupportedCMSPlatformsNames",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = a.routeParams.cms_platform;
        a = a.routeProps;
        var d = a.cmsID;
        a = a.identifier;
        return {
          queries: {
            HelpCenterContentPageRootQueryReference: {
              parameters: c("HelpCenterContentPageRootQuery$Parameters"),
              variables: {
                cmsID: d,
                cmsPlatform: h(b),
                hasLoadedHelpCenterContainer: !c("gkx")("2524"),
                hasLoadedHelpCenterResponsiveContaienr: c("gkx")("2524"),
                helpIdentifier: a,
                showResponsiveNav: c("gkx")("3198"),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "HelpCenterContentPageRoot.react"
      ).__setRef("HelpCenterContentPageRoot.entrypoint"),
    };
    var h = function (a) {
      var b = Object.keys(c("SupportedCMSPlatformsNames"));
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        if (c("SupportedCMSPlatformsNames")[e] === a) return e;
      }
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometNotificationsRoot.entrypoint",
  [
    "CometNotificationsRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = {
          count: 15,
          environment: "MAIN_SURFACE",
          menuUseEntryPoint: c("gkx")("146"),
          scale: d("WebPixelRatio").get(),
        };
        return {
          queries: {
            notificationsRootQueryReference: {
              parameters: b("CometNotificationsRootQuery$Parameters"),
              variables: a,
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometNotificationsRoot.react"
      ).__setRef("CometNotificationsRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
