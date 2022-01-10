if (self.CavalryLogger) {
  CavalryLogger.start_js(["/Cg4nJe"]);
}

__d(
  "AppLastUsedTimestampsFetcherQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "bookmarkIDs" },
        ],
        b = [
          {
            kind: "Variable",
            name: "bookmark_ids",
            variableName: "bookmarkIDs",
          },
          { kind: "Literal", name: "environment", value: "COMET" },
          { kind: "Literal", name: "folder_id", value: "PRODUCT" },
          { kind: "Literal", name: "sections", value: ["FACEBOOK_APP"] },
        ],
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
          name: "last_used_timestamp",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "AppLastUsedTimestampsFetcherQuery",
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
                  concreteType: "BookmarksConnection",
                  kind: "LinkedField",
                  name: "bookmarks",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "BookmarksEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Bookmark",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "bookmarked_node",
                              plural: !1,
                              selections: [c],
                              storageKey: null,
                            },
                            d,
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "AppLastUsedTimestampsFetcherQuery",
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
                  concreteType: "BookmarksConnection",
                  kind: "LinkedField",
                  name: "bookmarks",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "BookmarksEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Bookmark",
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "bookmarked_node",
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
                              ],
                              storageKey: null,
                            },
                            d,
                            c,
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
          id: "4111943565522889",
          metadata: {},
          name: "AppLastUsedTimestampsFetcherQuery",
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
  "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_form.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_form",
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
              name: "value",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "LoggedInAccountSwitcherAccountForm",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_query.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_query",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometLoggedInAccountSwitcherSubmitForm_query",
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
  "useCometLoggedInAccountSwitcherRemoveAccount_account.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useCometLoggedInAccountSwitcherRemoveAccount_account",
      selections: [
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
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "short_name",
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
      ],
      type: "LoggedInAccountSwitcherAccount",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometRecordProductUsageMutationMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "productID" },
        ],
        b = [
          { kind: "Literal", name: "app_id", value: 2220391788200892 },
          { kind: "Variable", name: "product_id", variableName: "productID" },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "product_id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "last_used_time",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometRecordProductUsageMutationMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "ProductUsageRecord",
              kind: "LinkedField",
              name: "update_last_used_time_for_product",
              plural: !1,
              selections: [c, d],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometRecordProductUsageMutationMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "ProductUsageRecord",
              kind: "LinkedField",
              name: "update_last_used_time_for_product",
              plural: !1,
              selections: [
                c,
                d,
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
        },
        params: {
          id: "4216789958373372",
          metadata: {},
          name: "CometRecordProductUsageMutationMutation",
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
  "RTWebCometIncomingUnsupportedDialogNameQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5489160574491869",
        metadata: {},
        name: "RTWebCometIncomingUnsupportedDialogNameQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ChatConfig",
  ["invariant", "ChatConfigInitialData"],
  function (a, b, c, d, e, f, g, h) {
    var i = Object.assign({}, c("ChatConfigInitialData"));
    function j(a, b) {
      return a in i ? i[a] : b;
    }
    function a(a) {
      return !!j(a, !1);
    }
    function b(a, b) {
      b === void 0 && (b = 0);
      if (a in i) {
        typeof i[a] === "number" || h(0, 3109);
        return i[a];
      }
      return b;
    }
    function d(a, b) {
      i[a] = b;
    }
    function e() {
      return i;
    }
    g.get = j;
    g.getBool = a;
    g.getNumber = b;
    g.set = d;
    g.getDebugInfo = e;
  },
  98
);
__d(
  "FBRTCLocalUploadLogLevel",
  ["CurrentUser", "FBRTCConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return Math.max(h(), a);
    }
    function h() {
      return c("CurrentUser").isEmployee() || c("CurrentUser").isTestUser()
        ? d("FBRTCConstants").UploadLogLevel.LL_DEBUG
        : d("FBRTCConstants").UploadLogLevel.LL_NIL;
    }
    g.getUploadLogLevel = a;
    g.getLocalUploadLogLevel = h;
  },
  98
);
__d(
  "AppLastUsedTimestampsFetcher",
  ["AppLastUsedTimestampsFetcherQuery.graphql", "CometRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, c, e) {
      return d("CometRelay")
        .fetchQuery(
          a,
          h !== void 0
            ? h
            : (h = b("AppLastUsedTimestampsFetcherQuery.graphql")),
          { bookmarkIDs: c }
        )
        .subscribe({
          next: function (a) {
            a = a.viewer.bookmarks.edges.reduce(function (a, b) {
              b = b.node;
              var c = b.bookmarked_node;
              b = b.last_used_timestamp;
              if (c == null) return a;
              c = c.id;
              if (c == null || b == null) return a;
              a[c] = b;
              return a;
            }, {});
            e(a);
          },
        });
    }
    c = { fetch: a };
    e = c;
    g["default"] = e;
  },
  98
);
__d(
  "logCometTopNavTabPress",
  ["CometHomeProductBadgedNavigationLogger", "logCometWatchTabSelectedEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      e != null &&
        b != null &&
        b > 0 &&
        d(
          "CometHomeProductBadgedNavigationLogger"
        ).markerStartAndAnnotateWithProductID(e);
      switch (a) {
        case "watch":
          c("logCometWatchTabSelectedEvent")("tab", b > 0, "tab");
          break;
        default:
          break;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm.react",
  [
    "CometRelay",
    "react",
    "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_form.graphql",
    "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_query.graphql",
    "useCometLoggedInAccountSwitcherSubmitForm",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useRef;
    function a(a) {
      var e = a.destinationUrl,
        f = a.form$key;
      a = a.query$key;
      var g = k(null);
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_query.graphql"
            )),
        a
      );
      f = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_form.graphql"
            )),
        f
      );
      a = c("useCometLoggedInAccountSwitcherSubmitForm")(a, g);
      if (f == null) return null;
      var l = Array.from(f.inputs);
      e != null &&
        !l.find(function (a) {
          return a.name === "next";
        }) &&
        l.push({ name: "next", value: e });
      l = l.map(function (a) {
        var b = a.name;
        a = a.value;
        a = b === "next" && e != null ? e : a;
        return j.jsx("input", { name: b, type: "hidden", value: a }, b);
      });
      return [
        j.jsx("form", {
          action: f.action,
          method: "POST",
          ref: g,
          children: l,
        }),
        a,
      ];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometLoggedInAccountSwitcherRemoveAccount",
  [
    "fbt",
    "CometRelay",
    "promiseDone",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "useCometConfirmationDialog",
    "useCometLoggedInAccountSwitcherRemoveAccount_account.graphql",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react").useCallback,
      k = c("requireDeferred")(
        "CometLoggedInAccountSwitcherRemoveAccountMutation"
      ).__setRef("useCometLoggedInAccountSwitcherRemoveAccount");
    function a(a) {
      var e = d("CometRelay").useRelayEnvironment(),
        f = c("useCometConfirmationDialog")(),
        g = f[0];
      f = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "useCometLoggedInAccountSwitcherRemoveAccount_account.graphql"
            )),
        a
      );
      var l = f.nonce,
        m = f.user;
      return j(
        function () {
          var a = m == null ? void 0 : m.short_name;
          g(
            {
              body:
                a != null
                  ? h._(
                      "{name} will need to enter their email or phone number and password the next time they log in.",
                      [h._param("name", a)]
                    )
                  : h._(
                      "they will need to enter their email or phone number and password the next time they log in."
                    ),
              confirm: h._("Remove Account"),
              title: h._("Remove Account"),
            },
            function () {
              var a = m == null ? void 0 : m.id;
              if (a == null) {
                c("recoverableViolation")(
                  "Cannot remove user from logged in account switcher that has no id",
                  "comet_ui"
                );
                return;
              }
              c("promiseDone")(
                k.load().then(function (b) {
                  b = b.commit;
                  b(e, { id: a, nonce: l });
                })
              );
            }
          );
        },
        [e, l, g, m]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "BrowserPushCommands",
  [],
  function (a, b, c, d, e, f) {
    a = "browser_push_ack";
    b = "browser_push_redirect";
    c = "browser_push_window_visible";
    d = { ACK: a, REDIRECT: b, WINDOW_VISIBLE: c };
    e.exports = d;
  },
  null
);
__d(
  "BrowserPushMessageRedirectUtil",
  ["Bootloader"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = "(messages)(.*?)(?:(tid=))([^&]*)";
      a = a.match(b);
      if (!a) return !0;
      var d = a.pop();
      c("Bootloader").loadModules(
        ["FantaTabActions"],
        function (a) {
          a.openTab(d);
        },
        "BrowserPushMessageRedirectUtil"
      );
      return !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "BrowserPushMessageHandler",
  [
    "BrowserPushCommands",
    "BrowserPushMessageRedirectUtil",
    "EventListener",
    "URI",
    "URISchemes",
    "isFacebookURI",
  ],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      if (
        a.data.command &&
        a.data.command === d("BrowserPushCommands").REDIRECT
      ) {
        if (
          typeof window.onbeforeunload === "function" &&
          window.onbeforeunload() === void 0
        )
          a.ports[0].postMessage({
            command: d("BrowserPushCommands").ACK,
            success: !0,
          });
        else {
          a.ports[0].postMessage({
            command: d("BrowserPushCommands").ACK,
            success: !1,
          });
          return;
        }
        a = a.data.uri;
        if (
          (/^([^.:/?#]+):/.test(a) &&
            !d("URISchemes").isAllowed(/^([^.:/?#]+):/.exec(a)[1])) ||
          !c("isFacebookURI")(new (c("URI"))(a))
        )
          throw new Error("goURI: URI scheme rejected, URI: " + a);
        c("BrowserPushMessageRedirectUtil")(a) && (window.location.href = a);
      }
    }
    a = {
      registerRedirectHandler: function () {
        c("EventListener").listen(window, "message", function (a) {
          a.origin === "" && h(a);
        }),
          navigator.serviceWorker &&
            navigator.serviceWorker.addEventListener &&
            navigator.serviceWorker.addEventListener("message", function (a) {
              ((navigator.serviceWorker &&
                navigator.serviceWorker.controller &&
                a.target &&
                a.target.controller &&
                a.target.controller === navigator.serviceWorker.controller) ||
                new RegExp(
                  "^" +
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    "$"
                ).test(a.origin)) &&
                h(a);
            });
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "BrowserPushVisibilityChanger",
  ["BrowserPushCommands", "ClientServiceWorkerMessage", "Visibility"],
  function (a, b, c, d, e, f, g) {
    function h() {
      new (c("ClientServiceWorkerMessage"))(
        d("BrowserPushCommands").WINDOW_VISIBLE,
        null
      ).sendViaController();
    }
    a = {
      listenForVisibility: function () {
        c("Visibility").isHidden() || h(),
          c("Visibility").addListener(c("Visibility").VISIBLE, h);
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "NUXWizardTypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:NUXWizardLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:NUXWizardLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:NUXWizardLoggerConfig",
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
      c.setEligibleSteps = function (a) {
        this.$1.eligible_steps = b("GeneratedLoggerUtils").serializeVector(a);
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setEventType = function (a) {
        this.$1.event_type = a;
        return this;
      };
      c.setInitializedPlatforms = function (a) {
        this.$1.initialized_platforms = b(
          "GeneratedLoggerUtils"
        ).serializeVector(a);
        return this;
      };
      c.setPlatform = function (a) {
        this.$1.platform = a;
        return this;
      };
      c.setStage = function (a) {
        this.$1.stage = a;
        return this;
      };
      c.setStep = function (a) {
        this.$1.step = a;
        return this;
      };
      c.setTimeSinceStepsCalculated = function (a) {
        this.$1.time_since_steps_calculated = a;
        return this;
      };
      c.updateExtraData = function (a) {
        a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
        b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.addToExtraData = function (a, b) {
        var c = {};
        c[a] = b;
        return this.updateExtraData(c);
      };
      return a;
    })();
    var g = {
      eligible_steps: !0,
      event: !0,
      event_type: !0,
      initialized_platforms: !0,
      platform: !0,
      stage: !0,
      step: !0,
      time_since_steps_calculated: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  "MPushPermissionUtil",
  ["BanzaiLogger", "NUXWizardTypedLogger", "gkx"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      b === void 0 && (b = !1);
      var d = c("gkx")("910664");
      d &&
        c("BanzaiLogger").log("ChromePushPermissionEventsLoggerConfig", {
          event: a,
        });
      if (b) {
        d = null;
        b = "step";
        a === "allow"
          ? ((d = "allow"), (b = "conversion"))
          : a === "deny"
          ? (d = "deny")
          : a === "install_ignore"
          ? (d = "ignore")
          : a === "turn_on_attempt" && (d = "show_browser_dialog");
        if (d !== null) {
          a = new (c("NUXWizardTypedLogger"))()
            .setEvent(d)
            .setEventType(b)
            .setPlatform("mobile")
            .setStep("turn_on_notification");
          a.logVital();
        }
      }
    }
    g.logEvent = a;
  },
  98
);
__d(
  "PushRegistrationUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      var b = a.endpoint;
      "subscriptionId" in a &&
        !new RegExp("/" + a.subscriptionId + "$").test(b) &&
        (b += "/" + a.subscriptionId);
      return b;
    }
    function a(a, b) {
      var c = g(a),
        d = null;
      a.toJSON ? (d = a.toJSON().keys) : a.keys && (d = a.keys);
      return {
        app_id: b,
        push_endpoint: c,
        subscription_keys: JSON.stringify(d),
      };
    }
    f.normalizeSubscriptionEndpoint = g;
    f.setupPushRegistrationData = a;
  },
  66
);
__d(
  "XAsyncPushMuteController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/notifications/settings/push/mute/", {
      appid: { type: "Int", required: !0 },
      push_endpoint: { type: "String", required: !0 },
      mute_for: { type: "Enum", enumType: 0 },
    });
  },
  null
);
__d(
  "XAsyncPushMuteStateController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/notifications/settings/push/mute/state/",
      {
        appid: { type: "Int", required: !0 },
        push_endpoint: { type: "String", required: !0 },
      }
    );
  },
  null
);
__d(
  "PushRegistration",
  [
    "BrowserPushMessageHandler",
    "BrowserPushPubKey",
    "BrowserPushVisibilityChanger",
    "MPushPermissionUtil",
    "Promise",
    "PushRegistrationUtils",
    "ServiceWorkerRegistration",
    "XAsyncPushMuteController",
    "XAsyncPushMuteStateController",
    "emptyFunction",
    "gkx",
    "promiseDone",
  ],
  function (a, b, c, d, e, f) {
    var g = window.Notification,
      h = new Map();
    a = (function () {
      "use strict";
      a.get = function (b, c) {
        if (h.has(c)) return h.get(c);
        b = new a(b, c);
        h.set(c, b);
        return b;
      };
      function a(b, c) {
        (this.$3 = b),
          (this.appID = c),
          !a.$1 && !a.$2 && ((a.$1 = !1), (a.$2 = !1));
      }
      var c = a.prototype;
      c.getPushSubscription = function () {
        var c = this;
        return new (b("Promise"))(function (d, e) {
          a.pushPermissionIsDenied() &&
            (b("MPushPermissionUtil").logEvent("permission_denied_or_blocked"),
            e(new Error("No permission or not supported"))),
            b("ServiceWorkerRegistration")
              .getWorkerRegistration(c.$3)
              .then(function (a) {
                if (!a) {
                  d(null);
                  return;
                }
                a.pushManager
                  .getSubscription()
                  .then(function (a) {
                    d(a);
                  })
                  ["catch"](e);
              })
              ["catch"](e);
        });
      };
      c.$4 = function (a, c, d) {
        a = a.getURIBuilder().getURI();
        c = new c(a);
        c.setData(
          b("PushRegistrationUtils").setupPushRegistrationData(d, this.appID)
        );
        c.setMethod("post");
        c.send();
      };
      c.getMutedUntilInServer = function (a) {
        var c = this;
        return new (b("Promise"))(function (d, e) {
          c.getPushSubscription()
            .then(function (f) {
              if (f) {
                f = b("PushRegistrationUtils").normalizeSubscriptionEndpoint(f);
                f = b("XAsyncPushMuteStateController")
                  .getURIBuilder()
                  .setString("push_endpoint", f)
                  .setInt("appid", c.appID)
                  .getURI();
                f = new a(f);
                f.listen("done", function (a) {
                  d(a.payload.muteUntilTimestampSec);
                });
                f.send();
              } else e("cannot check mute status for unsubscribed endpoint");
            })
            ["catch"](e);
        });
      };
      c.muteNotifications = function (a, c) {
        var d = this;
        return new (b("Promise"))(function (e, f) {
          d.getPushSubscription()
            .then(function (g) {
              if (g) {
                g = b("PushRegistrationUtils").normalizeSubscriptionEndpoint(g);
                g = b("XAsyncPushMuteController")
                  .getURIBuilder()
                  .setEnum("mute_for", a)
                  .setString("push_endpoint", g)
                  .setInt("appid", d.appID)
                  .getURI();
                g = new c(g);
                g.setMethod("POST");
                g.listen("done", function (b) {
                  a !== 0 && b.payload.muteUntilTimestampSec === 0
                    ? f("operation failed in server")
                    : e(b.payload.muteUntilTimestampSec);
                });
                g.send();
              } else f("no subscription found");
            })
            ["catch"](f);
        });
      };
      c.getSubscription = function () {
        var a = this;
        return new (b("Promise"))(function (c, d) {
          a.getPushSubscription()
            .then(function (a) {
              a
                ? c(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(a))
                : c(null);
            })
            ["catch"](d);
        });
      };
      c.maybeRegisterPushAgain = function (a, c) {
        var d = this;
        return new (b("Promise"))(function (e, f) {
          d.getPushSubscription()
            .then(function (f) {
              f
                ? (d.$4(a, c, f),
                  e(
                    b("PushRegistrationUtils").normalizeSubscriptionEndpoint(f)
                  ))
                : e(null);
            })
            ["catch"](function () {
              e(null);
            });
        });
      };
      c.$5 = function (c, d, e) {
        var f = this;
        return new (b("Promise"))(function (b, g) {
          if (a.$2 && !e) {
            g(new Error("sending disable info already"));
            return;
          }
          a.$2 = !0;
          var h = c.getURIBuilder().getURI();
          h = new d(h.toString());
          h.setData({ appid: f.appID, from_browser_settings: e });
          h.setMethod("post");
          h.listen
            ? (h.listen("finally", b),
              h.listen("fail", function () {
                (a.$2 = !1), g();
              }))
            : h.setErrorHandler && h.setHandler
            ? (h.setErrorHandler(function () {
                (a.$2 = !1), g();
              }),
              h.setHandler(b))
            : b();
          h.send();
        });
      };
      c.isPushRegistered = function (c, d, e, f, g, h) {
        var i = this;
        g === void 0 && (g = !1);
        h === void 0 && (h = !1);
        b("BrowserPushMessageHandler").registerRedirectHandler();
        return new (b("Promise"))(function (j, k) {
          i.getPushSubscription()
            .then(function (k) {
              j(!!k || (c && !a.pushPermissionIsPending())),
                k
                  ? g
                    ? i.$4(d, f, k)
                    : b("BrowserPushVisibilityChanger").listenForVisibility()
                  : !k &&
                    c &&
                    (a.pushPermissionIsOn()
                      ? i.registerPush(d, f, h)["catch"](function () {})
                      : i.$5(e, f, !1));
            })
            ["catch"](function () {
              c && i.$5(e, f, !1),
                h &&
                  b("ServiceWorkerRegistration").unregisterControllingWorker(),
                k();
            });
        });
      };
      c.$6 = function () {
        return new (b("Promise"))(function (a, b) {
          g.requestPermission(a);
        });
      };
      c.registerPushAndWaitForEndpoint = function (a, c, d) {
        var e = this;
        d === void 0 && (d = !1);
        return new (b("Promise"))(function (b, f) {
          e.$7(a, c, !0, null, d)
            .then(function (a) {
              if (typeof a !== "string") {
                f(new Error("registerPushImpl did not return an endpoint"));
                return;
              }
              b(a);
            })
            ["catch"](f);
        });
      };
      c.registerPushOnKaiOS = function (a, c, d) {
        var e = this;
        return new (b("Promise"))(function (f, g) {
          d.waitForKaiOS().done(function () {
            d.registerPush(function (d) {
              d = JSON.parse(d.get("push_endpoint"));
              e.$4(a, c, d);
              f(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(d));
            });
          });
        });
      };
      c.registerPush = function (a, c, d, e) {
        d === void 0 && (d = !1);
        e === void 0 && (e = b("emptyFunction"));
        return this.registerPushWithFinishedCallBack(a, c, e, d);
      };
      c.registerPushWithFinishedCallBack = function (a, c, d, e) {
        var f = this;
        e === void 0 && (e = !1);
        return new (b("Promise"))(function (b, g) {
          f.$7(a, c, !1, d, e)
            .then(function (a) {
              if (typeof a !== "boolean") {
                g(new Error("registerPushImpl did not return a boolean"));
                return;
              }
              b(a);
            })
            ["catch"](g);
        });
      };
      c.$7 = function (c, d, e, f, g) {
        var h = this;
        if (a.$1)
          return new (b("Promise"))(function (a, b) {
            b(new Error("registering already"));
          });
        if (!self.PushManager)
          return b("Promise").reject(new Error("PushManager not found."));
        a.$1 = !0;
        return new (b("Promise"))(function (i, j) {
          var k = b("ServiceWorkerRegistration").registerWorkerIfUnregistered(
              h.$3
            ),
            l = h.$6();
          b("Promise")
            .all([k, l])
            .then(function (k) {
              var l = k[0];
              if (!a.pushPermissionIsOn()) {
                g && l.unregister();
                throw new Error("Push permission was denied");
              }
              e || i(!0);
              k = b("BrowserPushPubKey").appServerKey;
              var m = b("gkx")("1511920") && k != null && k != "";
              m = m
                ? { userVisibleOnly: !0, applicationServerKey: k }
                : { userVisibleOnly: !0 };
              l.pushManager
                .subscribe(m)
                .then(function (a) {
                  e &&
                    i(
                      b("PushRegistrationUtils").normalizeSubscriptionEndpoint(
                        a
                      )
                    ),
                    h.$4(c, d, a),
                    f && f(),
                    b("BrowserPushVisibilityChanger").listenForVisibility();
                })
                ["catch"](function (b) {
                  (a.$1 = !1), g && l.unregister(), j(b);
                });
            })
            ["catch"](function (b) {
              (a.$1 = !1), j(b);
            });
        });
      };
      c.unregisterPushAndSWOnKaiOS = function (a, c, d, e) {
        var f = this;
        return new (b("Promise"))(function (b, g) {
          f.$5(a, c, e)
            .then(function () {
              d.unregisterPush(), b();
            })
            ["catch"](g);
        });
      };
      c.unregisterPushAndSW = function (a, c) {
        var d = this;
        return new (b("Promise"))(function (e, f) {
          d.$5(a, c, !0)
            .then(function () {
              b("promiseDone")(
                b("ServiceWorkerRegistration").unregisterControllingWorker(),
                e
              );
            })
            ["catch"](f);
        });
      };
      c.unregisterPushOnly = function (a, c) {
        var d = this;
        return new (b("Promise"))(function (b, e) {
          d.getPushSubscription()
            .then(function (f) {
              f
                ? f
                    .unsubscribe()
                    .then(d.$5(a, c, !0))
                    .then(function () {
                      b(!0);
                    })
                    ["catch"](e)
                : e();
            })
            ["catch"](e);
        });
      };
      a.pushPermissionIsPending = function () {
        return (
          window.Notification && window.Notification.permission === "default"
        );
      };
      a.pushPermissionIsOn = function () {
        return (
          window.Notification && window.Notification.permission === "granted"
        );
      };
      a.pushPermissionIsDenied = function () {
        return (
          window.Notification && window.Notification.permission === "denied"
        );
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "XBrowserPushDisabledController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/notifications/client/push/disabled/",
      {}
    );
  },
  null
);
__d(
  "XBrowserPushXOutController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/notifications/client/push/xout/", {});
  },
  null
);
__d(
  "XPushRegisterServiceWorkerController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/push/register/service_worker/", {});
  },
  null
);
__d(
  "incognito",
  ["Promise", "UserAgent", "WebStorage", "gkx", "regeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a;
      return b("regeneratorRuntime").async(
        function (d) {
          while (1)
            switch ((d.prev = d.next)) {
              case 0:
                a = window.RequestFileSystem || window.webkitRequestFileSystem;
                if (!a) {
                  d.next = 3;
                  break;
                }
                return d.abrupt(
                  "return",
                  new (b("Promise"))(function (b) {
                    return a(
                      window.TEMPORARY,
                      10,
                      function () {
                        return b(!1);
                      },
                      function () {
                        return b(!0);
                      }
                    );
                  })
                );
              case 3:
                if (
                  !(
                    c("UserAgent").isBrowser("IE >= 10") ||
                    c("UserAgent").isBrowser("Edge")
                  )
                ) {
                  d.next = 5;
                  break;
                }
                return d.abrupt("return", !window.indexedDB);
              case 5:
                if (!c("UserAgent").isBrowser("Firefox >= 16")) {
                  d.next = 7;
                  break;
                }
                return d.abrupt(
                  "return",
                  new (b("Promise"))(function (a) {
                    var b = window.indexedDB.open("__test__");
                    b.onsuccess = function () {
                      return a(!1);
                    };
                    b.onerror = function (b) {
                      b.preventDefault(), a(!0);
                    };
                  })
                );
              case 7:
                if (
                  !(
                    c("gkx")("676917") &&
                    ((c("UserAgent").isPlatform("iOS") &&
                      c("UserAgent").isBrowser("Safari >= 10.3")) ||
                      (c("UserAgent").isPlatform("Mac OS X") &&
                        c("UserAgent").isBrowser("Safari >= 11.1")))
                  )
                ) {
                  d.next = 18;
                  break;
                }
                d.prev = 8;
                window.openDatabase("sid", "1.0", "", 0);
                d.next = 16;
                break;
              case 12:
                d.prev = 12;
                d.t0 = d["catch"](8);
                if (!(d.t0.name === "SecurityError")) {
                  d.next = 16;
                  break;
                }
                return d.abrupt("return", !0);
              case 16:
                d.next = 20;
                break;
              case 18:
                if (!c("UserAgent").isBrowser("Safari")) {
                  d.next = 20;
                  break;
                }
                return d.abrupt("return", !c("WebStorage").getLocalStorage());
              case 20:
                return d.abrupt("return", !1);
              case 21:
              case "end":
                return d.stop();
            }
        },
        null,
        this,
        [[8, 12]]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "BrowserPushDirectPromptInstallerComet",
  [
    "AsyncRequest",
    "BanzaiLogger",
    "Promise",
    "PushNotificationsEventEmitter",
    "PushRegistration",
    "QE2Logger",
    "XBrowserPushDisabledController",
    "XBrowserPushXOutController",
    "XPushRegisterServiceWorkerController",
    "incognito",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function j(a, b, d) {
      d === void 0 && (d = "prompt");
      b = babelHelpers["extends"]({ appID: b, event: a, surface: d }, h);
      c("BanzaiLogger").log("BrowserPushLoggerConfig", b);
    }
    function k() {
      h != null &&
        h.xout_count === 0 &&
        i &&
        d("QE2Logger").logExposureForUser(i);
    }
    function l(a) {
      var b = c("XBrowserPushXOutController").getURIBuilder().getURI();
      new (c("AsyncRequest"))().setURI(b).setMethod("POST").send();
      j("xout", a);
    }
    function m(a, b, d, e) {
      a = c("PushRegistration").get(a, b);
      j("turn_on", b);
      return a
        .registerPushWithFinishedCallBack(
          c("XPushRegisterServiceWorkerController"),
          c("AsyncRequest"),
          function () {},
          e
        )
        .then(function () {
          c("PushNotificationsEventEmitter").emit("closeInstallPush"),
            j("install", b);
        })
        ["catch"](function (a) {
          c("PushNotificationsEventEmitter").emit("closeInstallPush"),
            c("PushRegistration").pushPermissionIsDenied()
              ? (c("PushNotificationsEventEmitter").emit(
                  "openPushBlockedNotice",
                  d
                ),
                j("deny", b))
              : j("install_ignore", b),
            l(b);
        });
    }
    function a(a, d, e, f, g, h, i, j) {
      var l = c("PushRegistration").get(a, d);
      l = l.isPushRegistered(
        e,
        c("XPushRegisterServiceWorkerController"),
        c("XBrowserPushDisabledController"),
        c("AsyncRequest"),
        !!g,
        i
      );
      b("Promise")
        .all([l, c("incognito")()])
        .then(function (b) {
          var e = b[0];
          b = b[1];
          if (e || b) return;
          k();
          if (c("PushRegistration").pushPermissionIsPending()) {
            if (!j || f) return;
            c("PushNotificationsEventEmitter").emit("openInstallPush", {
              appID: d,
              browserName: h,
              path: a,
              workerIsForPushOnly: i,
            });
          } else f || m(a, d, h, i);
        })
        ["catch"](function () {
          c("PushRegistration").pushPermissionIsDenied() && k();
        });
    }
    function e(a) {
      h = a;
    }
    function f(a) {
      i = a;
    }
    g.genEnableNotifications = m;
    g.installPush = a;
    g.setLogExtraData = e;
    g.setQEUniverseName = f;
  },
  98
);
__d(
  "NotificationPermissionNoticeComet.react",
  ["fbt", "Locale", "react", "stylex", "useCometCallout"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        calloutMaxWidth: { maxWidth: "nqmqzb3c" },
        root: {
          left: "tkt9xfrv",
          maxWidth: "nqmqzb3c",
          position: "poy2od1o",
          top: "kr520xx4",
        },
      };
    function a(a) {
      var b = a.shortText
          ? h._(
              "Click the lock to give {browser_name} permission to send you desktop notifications.",
              [h._param("browser_name", a.browserName)]
            )
          : h._(
              "If you change your mind, click the lock to give {browser_name} permission to send you desktop notifications.",
              [h._param("browser_name", a.browserName)]
            ),
        e = d("Locale").isRTL();
      e = e ? "end" : "start";
      e = {
        align: e,
        arrowStyle: "inset",
        label: b,
        onHide: a.onHide,
        position: "below",
        type: "accent",
        xstyle: j.calloutMaxWidth,
      };
      b = c("useCometCallout")(e, !0);
      return i.jsx("div", { className: c("stylex")(j.root), ref: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "NotificationPermissionRequestComet.react",
  [
    "fbt",
    "BaseAccessibleElement_DEPRECATED.react",
    "BaseModal.react",
    "CometHideLayerOnEscape.react",
    "CometVisualCompletion",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useEffect;
    function a(a) {
      j(
        function () {
          window.addEventListener("mousedown", a.onClick);
          c("CometVisualCompletion").addAnnotation("pushRequestOverlay", 1);
          return function () {
            window.removeEventListener("mousedown", a.onClick);
          };
        },
        [a.onClick]
      );
      return i.jsx(c("BaseModal.react"), {
        stackingBehavior: "above-everything",
        children: i.jsx(c("CometHideLayerOnEscape.react"), {
          onHide: a.onClick,
          children: i.jsx(c("BaseAccessibleElement_DEPRECATED.react"), {
            children: i.jsxs("div", {
              "aria-label": h._("Push notifications request"),
              "aria-modal": "true",
              role: "alertdialog",
              children: [
                h._(
                  "To allow or block browser notifications from Facebook, go to your browser settings."
                ),
                i.jsx("button", { onClick: a.onClick, children: h._("Close") }),
              ],
            }),
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
  "CometRecordProductUsageMutation",
  [
    "CometRecordProductUsageMutationMutation.graphql",
    "CometRelay",
    "CometRelayErrorHandling",
    "JSScheduler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometRecordProductUsageMutationMutation.graphql"));
    function a(a, b) {
      c("JSScheduler").scheduleLoggingPriCallback(function () {
        d("CometRelay").commitMutation(a, {
          mutation: i,
          onError: function (a) {
            d("CometRelayErrorHandling").markErrorAsHandled(a);
          },
          variables: { productID: b },
        });
      });
    }
    e = { updateProductUsage: a };
    f = e;
    g["default"] = f;
  },
  98
);
__d(
  "CometObjectFitContainerWithMaxHeight.react",
  ["CometObjectFitContainer.react", "react", "useCometSize_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.contentAspectRatio,
        d = a.maxHeight;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "contentAspectRatio",
        "maxHeight",
      ]);
      var e = c("useCometSize_DO_NOT_USE")(),
        f = e[0];
      e = e[1];
      var g = 16 / 9;
      b = b != null && isFinite(b) && b > 0 ? b : g;
      if (d != null && d > 0 && e != null) {
        g = e.width / b;
        g > d && (b = e.width / d);
      }
      return h.jsx(
        c("CometObjectFitContainer.react"),
        babelHelpers["extends"](
          {
            contentAspectRatio: b,
            objectFitMode: "CONTAINER_WIDTH_BASED_ASPECT_RATIO",
            ref: f,
          },
          a
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeCreateMenu.react",
  [
    "fbt",
    "CometHomeCreateMenuContent.react",
    "CometLeftRailHeader.react",
    "CometScrollableArea.react",
    "CometTopNavListDropdown.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        scrollableAreaStyle: {
          maxHeight: "t1wsaese",
          maxWidth: "h77mwsce",
          width: "o36gj0jk",
        },
      };
    function a(a) {
      var b = a.onClose;
      a = a.showComposerDialog;
      return i.jsx(c("CometTopNavListDropdown.react"), {
        label: h._("Create"),
        name: "CreateMenu",
        children: i.jsx(c("CometTopNavListDropdown.react").Card, {
          testid: void 0,
          children: i.jsxs(c("CometScrollableArea.react"), {
            xstyle: j.scrollableAreaStyle,
            children: [
              i.jsx(c("CometLeftRailHeader.react"), { title: h._("Create") }),
              i.jsx(c("CometHomeCreateMenuContent.react"), {
                onClose: b,
                showComposerDialog: a,
                tapPoint: "create_jewel",
              }),
            ],
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
  "MWChatCloseTabs.bs",
  [
    "MWChatMultitabContext.bs",
    "MWChatMultitabDispatcher.bs",
    "MessengerWebEvent",
    "MessengerWebEventsFalcoEvent.bs",
    "react",
    "useCometFeedNoRoutingNavigationEventLogger",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react");
    function a(a) {
      var c = b("useCometFeedNoRoutingNavigationEventLogger")(),
        d = h.useContext(b("MWChatMultitabContext.bs").context);
      return h.useCallback(
        function (a) {
          c(Date.now(), "", "messenger");
          b("MessengerWebEventsFalcoEvent.bs").log(function () {
            return { event_name: b("MessengerWebEvent").CLOSE_ALL_CHAT_TABS };
          });
          if (d !== void 0)
            return b("MWChatMultitabDispatcher.bs").dispatch(void 0, d, 1);
        },
        [d, c]
      );
    }
    f.useHook = a;
  },
  null
);
__d(
  "MWChatCloseTabs.re",
  ["MWChatCloseTabs.bs"],
  function (a, b, c, d, e, f) {
    a = b("MWChatCloseTabs.bs").useHook;
    f.useHook = a;
  },
  null
);
__d(
  "MWChatSettingsHeadPopover.react",
  [
    "fbt",
    "ix",
    "CometMenu.react",
    "CometMenuItem.react",
    "MWChatCloseTabs.re",
    "MWChatCollapseTabs.re",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = d("MWChatCloseTabs.re").useHook(),
        e = d("MWChatCollapseTabs.re").useHook();
      return j.jsxs(c("CometMenu.react"), {
        withArrow: !0,
        children: [
          j.jsx(c("CometMenuItem.react"), {
            icon: d("fbicon")._(i("491584"), 20),
            onClick: function (a) {
              return b();
            },
            primaryText: h._("Close all chats"),
          }),
          j.jsx(c("CometMenuItem.react"), {
            icon: d("fbicon")._(i("518013"), 20),
            onClick: function (a) {
              return e();
            },
            primaryText: h._("Minimize open chats"),
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
  "useOpenConversationsLogOut",
  ["useCometLogout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("useCometLogout").useCometLogout;
  },
  98
);
__d(
  "RTWebCometCallDialog.react",
  [
    "CometControlledUserBlockingDialog.react",
    "TetraButtonGroup.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.acceptIcon,
        d = a.acceptLabel,
        e = a.acceptTestid,
        f = a.body,
        g = a.declineLabel;
      g = g === void 0 ? null : g;
      var i = a.onClose;
      a = a.title;
      a = a === void 0 ? null : a;
      var j = function () {
          i(!0);
        },
        k = function () {
          i(!1);
        };
      return h.jsxs(c("CometControlledUserBlockingDialog.react"), {
        disableClosingWithMask: !0,
        onDismiss: k,
        withCloseButton: !0,
        children: [
          a != null
            ? h.jsx("div", {
                className: "dati1w0a jbae33se hv4rvrfc bjjx79mm",
                children: h.jsx(c("TetraText.react"), {
                  numberOfLines: 1,
                  type: "headlineEmphasized2",
                  children: a,
                }),
              })
            : null,
          h.jsx("div", {
            className: "dati1w0a f10w8fjw hv4rvrfc pybr56ya taijpn5t cbu4d94t",
            children: f,
          }),
          h.jsx("div", {
            className: "a8nywdso ihqw7lf3 dflh9lhu jb3vyjys",
            children: h.jsx(c("TetraButtonGroup.react"), {
              align: "end",
              direction: "backward",
              primary: {
                icon: b,
                label: d,
                onPress: j,
                testid: e,
                type: "primary",
              },
              secondary:
                g !== null
                  ? { label: g, onPress: k, reduceEmphasis: !0 }
                  : null,
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
  "RTWebCometIncomingUnsupportedDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "RTWebCometIncomingUnsupportedDialogNameQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.id;
        return {
          queries: {
            queryReference: {
              parameters: b(
                "RTWebCometIncomingUnsupportedDialogNameQuery$Parameters"
              ),
              variables: { id: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "RTWebCometIncomingUnsupportedDialog.react"
      ).__setRef("RTWebCometIncomingUnsupportedDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "RTWebUnsupportedUpsellDialogWrapper.react",
  [
    "CometPlaceholder.react",
    "RTWebCometIncomingUnsupportedDialog.entrypoint",
    "RelayHooks",
    "react",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.hide,
        e = a.inviterID;
      a = a.threadType;
      var f = c("useCometRelayEntrypointContextualEnvironmentProvider")();
      f = d("RelayHooks").loadEntryPoint(
        f,
        c("RTWebCometIncomingUnsupportedDialog.entrypoint"),
        { id: e }
      );
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: h.jsx(d("RelayHooks").EntryPointContainer, {
          entryPointReference: f,
          props: { hide: b, threadType: a },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ZenonCallWindowOpener_Popup",
  ["ZenonUserActionLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1280,
      i = {
        LargeForGroup: { height: 772, width: 1100 },
        LargeForP2P: { height: 720, width: 1280 },
        Small: { height: 540, width: 960 },
      },
      j = [
        "menubar=no",
        "location=no",
        "scrollbars=no",
        "status=no",
        "personalbar=no",
      ];
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.openWindow = function (a) {
        a = this.$1(a.joinContext);
        var b = this.$2(a),
          c = b.left;
        b = b.top;
        d("ZenonUserActionLogger").logCheckpoint({
          checkpoint:
            "Opening_Popup: left=" +
            c +
            ",top=" +
            b +
            ",width=" +
            a.width +
            ",height=" +
            a.height,
        });
        return window.open(
          "",
          "",
          []
            .concat(j, [
              "height=" + a.height,
              "width=" + a.width,
              "left=" + c,
              "top=" + b,
            ])
            .join(",")
        );
      };
      b.$1 = function (a) {
        if (screen && screen.width > h)
          if (a.type === "link" || a.thread.type === 2)
            return {
              height: i.LargeForGroup.height,
              width: i.LargeForGroup.width,
            };
          else
            return { height: i.LargeForP2P.height, width: i.LargeForP2P.width };
        else return { height: i.Small.height, width: i.Small.width };
      };
      b.$2 = function (a) {
        var b = a.height;
        a = a.width;
        return {
          left: Math.floor(
            window.innerWidth / 2 -
              a / 2 +
              ((a = window.screenLeft) != null ? a : window.screenX)
          ),
          top: Math.floor(
            window.innerHeight / 2 -
              b / 2 +
              ((a = window.screenTop) != null ? a : window.screenY)
          ),
        };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MessengerObjectAssociationType",
  ["keyMirror"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({ REGULAR_CHAT: null, GENERAL_CHAT: null });
    g["default"] = a;
  },
  98
);
__d(
  "ZenonDeviceInfoHelper",
  ["regeneratorRuntime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = -1,
      h = !1,
      i = {
        getBatteryStats: function () {
          var a, c;
          return b("regeneratorRuntime").async(
            function (d) {
              while (1)
                switch ((d.prev = d.next)) {
                  case 0:
                    d.next = 2;
                    return b("regeneratorRuntime").awrap(
                      i.internalGetWindow().navigator.getBattery
                    );
                  case 2:
                    a = d.sent;
                    if (!(typeof a !== "function")) {
                      d.next = 5;
                      break;
                    }
                    return d.abrupt("return", {
                      level: g,
                      placeholder: !0,
                      wasCharged: !1,
                    });
                  case 5:
                    d.next = 7;
                    return b("regeneratorRuntime").awrap(a.call(navigator));
                  case 7:
                    c = d.sent;
                    c.charging
                      ? (h = !0)
                      : (c.onchargingchange = function (a) {
                          a.target.charging && (h = !0),
                            (a.target.onchargingchange = null);
                        });
                    return d.abrupt("return", {
                      level: c.level * 100,
                      placeholder: !1,
                      wasCharged: h,
                    });
                  case 10:
                  case "end":
                    return d.stop();
                }
            },
            null,
            this
          );
        },
        internalGetWindow: function () {
          return window;
        },
      };
    a = i;
    f["default"] = a;
  },
  66
);
__d(
  "ZenonDeviceInfoUtils",
  ["UserAgentData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = c("UserAgentData").browserName,
        b = c("UserAgentData").platformName;
      window.navigator.userAgent.toLowerCase().includes("mobile") &&
        ((b += " Mobile"), a === "Chrome" && (a = "Mobile " + a));
      window.external &&
        window.external.pinPage &&
        a === "Chrome" &&
        (a += " Edge");
      return {
        browser: a,
        browser_version: c("UserAgentData").browserFullVersion,
        device: c("UserAgentData").deviceName,
        os: b,
        os_version: c("UserAgentData").platformFullVersion,
        screen_height: window.screen.availHeight,
        screen_width: window.screen.availWidth,
      };
    }
    g.getDeviceSoftwareInfo = a;
  },
  98
);
__d(
  "ZenonVCSTypes",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
      DIRECT_VIDEO: "direct_video",
      ESCALATED: "escalated",
      ESCALATION_DECLINED: "escalation_declined",
      MWS: "mws",
      VOIP: "voip",
    });
    c = b("$InternalEnum").Mirrored(["ENCRYPT", "DECRYPT"]);
    d = b("$InternalEnum")({
      LL_BASIC: 1,
      LL_DEBUG: 2,
      LL_INFO: 4,
      LL_NIL: 0,
      LL_VERBOSE: 5,
      LL_WARNING: 3,
    });
    f.ZenonCallType = a;
    f.ZenonE2EEType = c;
    f.ZenonUploadLogLevel = d;
  },
  66
);
__d(
  "ZenonLocalUploadLogLevel",
  ["CurrentUser", "ZenonVCSTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return Math.max(h(), a);
    }
    function h() {
      return c("CurrentUser").isEmployee() || c("CurrentUser").isTestUser()
        ? d("ZenonVCSTypes").ZenonUploadLogLevel.LL_DEBUG
        : d("ZenonVCSTypes").ZenonUploadLogLevel.LL_NIL;
    }
    g.getUploadLogLevel = a;
    g.getLocalUploadLogLevel = h;
  },
  98
);
__d(
  "ZenonCallSummary",
  [
    "ChannelClientID",
    "SiteData",
    "WebPerformanceDeviceInfo",
    "ZenonBrowsers",
    "ZenonCallFalcoEventUtils",
    "ZenonDeviceInfoHelper",
    "ZenonDeviceInfoUtils",
    "ZenonDismissReason",
    "ZenonIceStatsParser",
    "ZenonLocalUploadLogLevel",
    "ZenonLoggingEventTypes",
    "ZenonPeerID",
    "ZenonSignalingProtocol",
    "ZenonSignalingProtocolUtils",
    "ZenonVCSTypes",
    "gkx",
    "performanceNow",
    "regeneratorRuntime",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { PRESSED_ANSWER: "p_a" };
    function i(a) {
      var b = c("gkx")("1984542"),
        e = c("gkx")("1845186"),
        f =
          d("ZenonBrowsers").isFBWebviewWithChromeMinVersion(67) &&
          c("gkx")("1888615");
      b = b || e || f;
      if (c("ZenonSignalingProtocolUtils").isMwSupportedProtocol(a) && b)
        return "ZenonPlatform";
      e = c("gkx")("1341692");
      f = c("gkx")("1680228");
      return !e && !f ? "ZenonScotch" : "Old Codebase";
    }
    var j = 19,
      k = 24,
      l = {
        AT_LEAST_ONE_PARTICIPANT_ALERTED: "p_alert",
        AT_LEAST_ONE_PARTICIPANT_ANSWERED: "p_answer",
        CALL_CONNECTED: "connected",
        CALL_ENDED: "ended",
        CALL_STARTED: "started",
        NEGOTIATION_COMPLETED: "negotiation_completed",
        NETWORK_READY: "network_ready",
        PROC_JOIN_RESPONSE: "p_jresp",
        PROC_SERVER_MEDIA_UPDATE_WITH_ANSWER: "p_sreqa",
        RECV_ANSWER: "r_a",
        RECV_ANSWER_ACK: "r_aack",
        RECV_JOIN_RESPONSE: "r_jresp",
        RECV_OFFER: "r_o",
        RECV_OFFER_ACK: "r_oack",
        RECV_OK: "r_ok",
        RECV_PRANSWER: "r_pr",
        RECV_RETRIED_ANSWER: "r_a2",
        RECV_RETRIED_ANSWER_ACK: "r_aack2",
        RECV_RETRIED_OFFER: "r_o2",
        RECV_RETRIED_OFFER_ACK: "r_oack2",
        RECV_RING_REQUEST: "r_rreq",
        RECV_SERVER_MEDIA_UPDATE_WITH_ANSWER: "r_sreqa",
        SENT_ANSWER: "s_a",
        SENT_ANSWER_ACK: "s_aack",
        SENT_JOIN_REQUEST: "s_jreq",
        SENT_OFFER: "s_o",
        SENT_OFFER_ACK: "s_oack",
        SENT_OK: "s_ok",
        SENT_PRANSWER: "s_pr",
        SENT_RETRIED_ANSWER: "s_a2",
        SENT_RETRIED_ANSWER_ACK: "s_aack2",
        SENT_RETRIED_OFFER: "s_o2",
        SENT_RETRIED_OFFER_ACK: "s_oack2",
        SENT_RING_RESPONSE: "s_rresp",
      },
      m = { FIRST_MEDIA: "r_media", FIRST_VIDEO: "r_video" },
      n = {
        BATTERY_END: "battery_end",
        BATTERY_START: "battery_start",
        CONNECTION_EFFECTIVE_TYPE: "conn_effective_type",
        DESKTOP_DEVICE_CLASS: "desktop_device_class",
        DEVICE_INFO: "device_info",
        INITIATED_BY_APP_ID: "initiated_by_app_id",
        INITIATED_BY_PAGE_ID: "initiated_by_page_id",
        MAX_CONCURRENT_CONNECTED_PARTICIPANTS:
          "max_concurrent_connected_participants",
        PEER_IS_MOBILE: "peer_is_mobile",
        RATING: "rating5",
        RATING_SHOWN: "rating_shown",
        ROOM_SURFACE: "room_surface",
        SURVEY_CHOICE: "survey_choice",
        SURVEY_DETAILS: "survey_details",
        SURVEY_SHOWN: "survey_shown",
        YEAR_CLASS: "year_class",
      };
    a = (function () {
      function a(a) {
        var b = a.callID,
          e = a.callTrigger,
          f = a.isCaller,
          g = a.isVideo,
          h = a.localCallID,
          j = a.peerID,
          l = a.protocol;
        a = a.uploadLogLevel;
        this.$23 = 0;
        this.$24 = 0;
        this.$29 = {};
        this.$30 = {};
        this.$31 = {};
        this.$32 = {};
        this.$33 = !1;
        this.$35 = 0;
        this.$36 = 0;
        this.$37 = 0;
        this.$38 = !1;
        this.$39 = {};
        this.$40 = {};
        this.$41 = {};
        this.$42 = {};
        this.$48 = {
          CoreAudioMetrics: { isstall: "0", voice_detect_pct: [] },
          CoreVideoMetrics: {
            screen: {
              capture_stall: { is_stall: "0" },
              encode_stall: { is_stall: "0" },
              sent_stall: { is_stall: "0" },
            },
            video: {
              capture_stall: { is_stall: "0" },
              encode_stall: { is_stall: "0" },
              sent_stall: { is_stall: "0" },
            },
          },
          DebugAudioMetrics: { NetworkReceive: {} },
          extraInfo: {},
          receiver: {},
          sender: {},
          video: {},
        };
        this.$49 = {
          error_count_decrypted: 0,
          error_count_encrypted: 0,
          frames_decrypted: 0,
          frames_encrypted: 0,
          total_decrypt_time: 0,
          total_encrypt_time: 0,
        };
        this.$51 = {};
        this.$52 = {};
        this.$54 = {};
        this.peerID = j;
        this.callID = b;
        this.localCallID = (j = h) != null ? j : c("uuid")();
        this.$1 = d("ChannelClientID").getID();
        this.$3 = f;
        this.$2 = k;
        this.$6 = i(l);
        this.$4 =
          (b = a) != null
            ? b
            : d("ZenonLocalUploadLogLevel").getLocalUploadLogLevel();
        this.$5 = e;
        this.$26 = new Date().valueOf();
        this.$7 = l === c("ZenonSignalingProtocol").P2P ? "p2p" : "mws";
        this.$19 = null;
        this.$18 = null;
        this.$34 = this.peerID === d("ZenonPeerID").ZenonMWPeerID;
        this.$14 = c("SiteData").push_phase;
        this.$7 === "p2p"
          ? this.setCallType(
              g
                ? d("ZenonVCSTypes").ZenonCallType.DIRECT_VIDEO
                : d("ZenonVCSTypes").ZenonCallType.VOIP
            )
          : this.setCallType(d("ZenonVCSTypes").ZenonCallType.MWS);
        this.$28 = c("performanceNow")();
        this.$27 = 0;
        this.$25 = this.$28;
        this.$53 = 0;
        this.$54[n.DEVICE_INFO] = d(
          "ZenonDeviceInfoUtils"
        ).getDeviceSoftwareInfo();
        this.$56();
        this.updateBatteryStart();
        this.$57();
        this.$58();
      }
      a.$59 = function (a) {
        try {
          return JSON.parse(a);
        } catch (a) {
          return null;
        }
      };
      a.fromJsonString = function (b) {
        var e;
        b = this.$59(b);
        if (b == null) return null;
        if (b.version < j) return null;
        if (
          !Object.prototype.hasOwnProperty.call(b, "peerID") ||
          !Object.prototype.hasOwnProperty.call(b, "callID") ||
          !Object.prototype.hasOwnProperty.call(b, "isCaller") ||
          !Object.prototype.hasOwnProperty.call(b, "startTime") ||
          !Object.prototype.hasOwnProperty.call(b, "trigger") ||
          !Object.prototype.hasOwnProperty.call(b, "signalingTime") ||
          !Object.prototype.hasOwnProperty.call(b, "lastUpdatedTime") ||
          !Object.prototype.hasOwnProperty.call(b, "lastSerializedTime")
        )
          return null;
        var f =
          b.activeConn === "p2p"
            ? c("ZenonSignalingProtocol").P2P
            : c("ZenonSignalingProtocol").MW;
        f = new a({
          callID: b.callID,
          isCaller: b.isCaller,
          isVideo: b.callType === d("ZenonVCSTypes").ZenonCallType.DIRECT_VIDEO,
          localCallID: b.localCallID,
          peerID: b.peerID,
          protocol: f,
        });
        f.$1 = b.deviceID;
        f.$2 = b.version;
        f.$4 = b.uploadLogLevel;
        f.$26 = b.startTime;
        f.$5 = b.trigger;
        f.$34 = b.isUsingMultiway;
        f.$33 = b.hasOfferInRingRequest;
        f.$35 = (e = b.renegotiationCmuRequestSent) != null ? e : 0;
        f.$36 = (e = b.renegotiationSmuReqWithAnswerReceived) != null ? e : 0;
        f.$37 = (e = b.renegotiationSmuReqWithOfferReceived) != null ? e : 0;
        f.$6 = b.clientVersion;
        f.$29 = b.signalingTime;
        f.$15 = b.endCallReason;
        f.$16 = b.endCallSubreason;
        f.$17 = b.isRemoteEnded;
        f.$23 = b.lastUpdatedTime;
        f.$24 = b.lastSerializedTime;
        f.$9 = b.joinWithSID;
        f.$19 = (e = b.endIsConnected) != null ? e : null;
        f.$18 = (e = b.pcIsConnected) != null ? e : null;
        f.$38 = b.hasAnswerInJoinResponse;
        b.conferenceName != null && (f.$8 = b.conferenceName);
        b.escP2PCallID != null && (f.$10 = b.escP2PCallID);
        b.activeConn != null && (f.$7 = b.activeConn);
        b.serverInfoData != null && (f.$12 = b.serverInfoData);
        b.localVideoDuration != null && (f.$43 = b.localVideoDuration);
        b.remoteVideoDuration != null && (f.$44 = b.remoteVideoDuration);
        b.unsetOnRetrieve != null && (f.$22 = b.unsetOnRetrieve);
        b.openCount != null && (f.$53 = b.openCount);
        b.extraInfo && (f.$54 = b.extraInfo);
        b.gen0IceSentCount && (f.$39 = b.gen0IceSentCount);
        b.gen0IceReceivedCount && (f.$40 = b.gen0IceReceivedCount);
        b.iceConnections && (f.$51 = b.iceConnections);
        b.iceSentCount && (f.$41 = b.iceSentCount);
        b.iceReceivedCount && (f.$42 = b.iceReceivedCount);
        b.pcConnectionStates && (f.$52 = b.pcConnectionStates);
        b.accumulatedCallTime != null && (f.$27 = b.accumulatedCallTime);
        b.escStateTimes && (f.$30 = b.escStateTimes);
        b.applicationEventTime && (f.$31 = b.applicationEventTime);
        b.videoEscTimes && (f.$32 = b.videoEscTimes);
        b.mediaStats && (f.$48 = b.mediaStats);
        b.e2eeStats && (f.$49 = b.e2eeStats);
        b.connectionType !== void 0 && (f.$20 = b.connectionType);
        b.deviceCharged != null && (f.$55 = b.deviceCharged);
        b.videoReceivedCodec !== null && (f.$45 = b.videoReceivedCodec);
        b.videoSentCodec !== null && (f.$46 = b.videoSentCodec);
        b.audioSentCodec !== null && (f.$47 = b.audioSentCodec);
        b.relayIP !== null && b.relayIP !== void 0 && (f.$21 = b.relayIP);
        b.startReach != null && (f.$50 = b.startReach);
        b.sdpFormat != null && (f.$13 = b.sdpFormat);
        return f;
      };
      var e = a.prototype;
      e.toJsonString = function () {
        var a;
        this.$24 = new Date().valueOf();
        a = {
          accumulatedCallTime: this.$60(),
          activeConn: (a = this.$7) != null ? a : "p2p",
          applicationEventTime: this.$31,
          audioSentCodec: this.$47,
          callID: this.callID,
          callType: this.$11,
          clientVersion: this.$6,
          conferenceName: this.$8,
          connectionType: this.$20,
          deviceCharged: this.$55,
          deviceID: this.$1,
          e2eeStats: this.$49,
          endCallReason: this.$15,
          endCallSubreason: this.$16,
          endIsConnected: this.$19,
          escP2PCallID: this.$10,
          escStateTimes: this.$30,
          extraInfo: this.$54,
          gen0IceReceivedCount: this.$40,
          gen0IceSentCount: this.$39,
          hasAnswerInJoinResponse: this.$38,
          hasOfferInRingRequest: this.$33,
          iceConnections: this.$51,
          iceReceivedCount: this.$42,
          iceSentCount: this.$41,
          isCaller: this.$3,
          isRemoteEnded: this.$17,
          isUsingMultiway: this.$34,
          joinWithSID: this.$9,
          lastSerializedTime: this.$24,
          lastUpdatedTime: this.$23,
          localCallID: this.localCallID,
          localVideoDuration: this.$43,
          mediaStats: this.$48,
          pcConnectionStates: this.$52,
          pcIsConnected: this.$18,
          peerID: this.peerID,
          relayIP: this.$21,
          remoteVideoDuration: this.$44,
          renegotiationCmuRequestSent: this.$35,
          renegotiationSmuReqWithAnswerReceived: this.$36,
          renegotiationSmuReqWithOfferReceived: this.$37,
          sdpFormat: this.$13,
          serverInfoData: this.$12,
          signalingTime: this.$29,
          startReach: this.$50,
          startTime: this.$26,
          trigger: this.$5,
          unsetOnRetrieve: this.$22,
          uploadLogLevel: this.$4,
          version: this.$2,
          videoEscTimes: this.$32,
          videoReceivedCodec: this.$45,
          videoSentCodec: this.$46,
        };
        return JSON.stringify(a);
      };
      e.unsetEndCallFields = function () {
        this.$22 === !0 &&
          ((this.$15 = null),
          (this.$16 = null),
          (this.$17 = null),
          (this.$19 = null),
          delete this.$29[l.CALL_ENDED],
          (this.$28 = 0),
          (this.$22 = null));
      };
      e.isNull = function () {
        return (
          this.peerID === "0" &&
          this.callID === "0" &&
          !this.$3 &&
          this.$5 === "NULL_SUMMARY"
        );
      };
      e.getExtraInfo = function () {
        return this.$54;
      };
      e.getLastUpdatedTime = function () {
        return this.$23;
      };
      e.getMediaStats_DEBUG = function () {
        return this.$48;
      };
      e.getDeviceID = function () {
        return this.$1;
      };
      e.setDeviceID = function (a) {
        this.$1 = a;
      };
      e.getSdpFormat = function () {
        return this.$13;
      };
      e.setSdpFormat = function (a) {
        this.$13 = a;
      };
      e.getLoggingArgs = function () {
        var a;
        return {
          call_id: this.callID,
          conf_name: (a = this.$8) != null ? a : "",
          peer_id: d("ZenonPeerID").convertPeerIDForLogging(this.peerID),
          serv_info: (a = this.$12) != null ? a : "",
          web_device_id: this.$1,
        };
      };
      e.getDeviceCharged = function () {
        return this.$55;
      };
      e.setDeviceCharged = function (a) {
        this.$55 !== !0 && (this.$55 = a);
      };
      e.updateLastSavedTime = function () {
        this.$25 = c("performanceNow")();
      };
      e.onCallAccepted = function (a) {
        (this.$31[h.PRESSED_ANSWER] = this.$60()), (this.$5 = a), this.$58();
      };
      e.onCallJoinRequest = function (a) {
        (this.$33 = a),
          (this.$34 = this.peerID === d("ZenonPeerID").ZenonMWPeerID),
          this.$58();
      };
      e.onCallConnected = function () {
        this.$61(l.CALL_CONNECTED), this.$58();
      };
      e.onNegotiationComplete = function () {
        this.$61(l.NEGOTIATION_COMPLETED), this.$58();
      };
      e.onCallEscalated = function () {
        (this.$35 = this.$60()), this.$58();
      };
      e.onRenegotiationSmuReqWithAnswerReceived = function () {
        (this.$36 = this.$60()), this.$58();
      };
      e.onRenegotiationSmuReqWithOfferReceived = function () {
        (this.$37 = this.$60()), this.$58();
      };
      e.onCallEnded = function (a, b, c, d) {
        (this.$22 = c),
          (this.$15 = a),
          (this.$16 = d),
          (this.$17 = b),
          this.$61(l.CALL_ENDED),
          this.$19 == null && (this.$19 = this.$18),
          this.$58();
      };
      e.setPCIsConnected = function (a) {
        this.$18 !== a &&
          ((this.$18 = a),
          (this.$52[
            d("ZenonCallFalcoEventUtils").nonNullIntNumber(this.$60())
          ] = a));
      };
      e.onInviteResponded = function () {
        var a = this.$7 === "p2p" ? l.SENT_OFFER_ACK : l.SENT_RING_RESPONSE;
        this.$61(a);
        this.$58();
      };
      e.onInviteReceived = function () {
        var a = this.$7 === "p2p" ? l.RECV_OFFER : l.RECV_RING_REQUEST;
        this.$61(a);
        this.$58();
      };
      e.onInviteSent = function () {
        this.$61(l.SENT_JOIN_REQUEST), this.$58();
      };
      e.onInviteResponseReceived = function () {
        this.$61(l.RECV_JOIN_RESPONSE), this.$58();
      };
      e.onInviteResponseProcessed = function () {
        this.$61(l.PROC_JOIN_RESPONSE), this.$58();
      };
      e.onSmuWithAnswerReceived = function () {
        this.$61(l.RECV_SERVER_MEDIA_UPDATE_WITH_ANSWER), this.$58();
      };
      e.onSmuWithAnswerProcessed = function () {
        this.$61(l.PROC_SERVER_MEDIA_UPDATE_WITH_ANSWER), this.$58();
      };
      e.onAtLeastOneParticipantAlerted = function () {
        this.$61(l.AT_LEAST_ONE_PARTICIPANT_ALERTED), this.$58();
      };
      e.onAtLeastOneParticipantAnswered = function () {
        this.$61(l.AT_LEAST_ONE_PARTICIPANT_ANSWERED), this.$58();
      };
      e.onMediaConnected = function () {
        this.$61(l.NETWORK_READY), this.$58();
      };
      e.setIsPeerMobile = function (a) {
        (this.$54[n.PEER_IS_MOBILE] = a ? "1" : "0"), this.$58();
      };
      e.setCallType = function (a) {
        (this.$11 = a), this.$58();
      };
      e.setConferenceName = function (a) {
        (this.$8 = a), this.$58();
      };
      e.setConnectionType = function (a) {
        (this.$20 = a), this.$58();
      };
      e.setInitByPageID = function (a) {
        (this.$54[n.INITIATED_BY_PAGE_ID] = a), this.$58();
      };
      e.setInitByAppID = function (a) {
        a != null && ((this.$54[n.INITIATED_BY_APP_ID] = a), this.$58());
      };
      e.setJoinWithSID = function (a) {
        (this.$9 = a), this.$58();
      };
      e.setMediaStats = function (a) {
        var b = this;
        this.$48 = a;
        a = a.extraInfo;
        var c = a.localIceCandidate,
          d = a.mediaPacketTimes;
        a = a.remoteIceCandidate;
        if (c) {
          (this.$50 == null || this.$50 === "") && (this.$50 = c.networkType);
          if (a) {
            var e = c.candidateType;
            c = c.protocol;
            var f = a.candidateType;
            a = a.protocol;
            if (e != null && c != null && f != null && a != null) {
              e = "l:" + e + "-" + c + ";r:" + f + "-" + a;
              this.$51[e] == null && (this.$51[e] = this.$60());
            }
          }
        }
        if (d != null) {
          c = new Map([
            [m.FIRST_MEDIA, d.audio],
            [m.FIRST_VIDEO, d.video],
          ]);
          c.forEach(function (a, c) {
            if (a != null) {
              a = a - b.$28;
              b.$29[c] == null && (b.$29[c] = Math.floor(b.$27 + a));
            }
          });
        }
        this.updateBatteryEnd();
        this.$58();
      };
      e.setServerInfoData = function (a) {
        (this.$12 = a), this.$58();
      };
      e.setRating = function (a) {
        (this.$54[n.RATING] = d("ZenonCallFalcoEventUtils").nonNullIntNumber(
          a
        )),
          this.$58();
      };
      e.setFeedback = function (a) {
        (this.$54[n.SURVEY_DETAILS] = a), this.$58();
      };
      e.setSurveyChoice = function (a) {
        (this.$54[n.SURVEY_CHOICE] = a), this.$58();
      };
      e.setMaxConnectedParticipants = function (a) {
        (this.$54[n.MAX_CONCURRENT_CONNECTED_PARTICIPANTS] = d(
          "ZenonCallFalcoEventUtils"
        ).nonNullIntNumber(a)),
          this.$58();
      };
      e.setHasAnswerInJoinResponse = function (a) {
        (this.$38 = a), this.$58();
      };
      e.setLinkSurface = function (a) {
        (this.$54[n.ROOM_SURFACE] = a), this.$58();
      };
      e.updateIceInfo = function (a, b) {
        var c =
            b === d("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Send
              ? this.$39
              : this.$40,
          e =
            b === d("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Send
              ? this.$41
              : this.$42;
        b = d("ZenonIceStatsParser").extractIceInfo(a);
        b.forEach(function (a) {
          var b = a.gen;
          a = a.type;
          b === 0 && (c[a] == null ? (c[a] = 1) : c[a]++);
          e[a] == null ? (e[a] = 1) : e[a]++;
        });
      };
      e.updateE2EEStats = function (a, b, c) {
        switch (a) {
          case d("ZenonVCSTypes").ZenonE2EEType.ENCRYPT:
            b ? this.$49.error_count_encrypted++ : this.$49.frames_encrypted++;
            this.$49.total_encrypt_time += c;
            break;
          case d("ZenonVCSTypes").ZenonE2EEType.DECRYPT:
            b ? this.$49.error_count_decrypted++ : this.$49.frames_decrypted++;
            this.$49.total_decrypt_time += c;
            break;
        }
        this.$58();
      };
      e.$61 = function (a) {
        if (this.$29[a] != null) return;
        this.$29[a] = this.$60();
      };
      e.$60 = function () {
        var a = c("performanceNow")() - this.$28;
        return Math.floor(this.$27 + a);
      };
      e.$58 = function () {
        this.$23 = new Date().valueOf();
      };
      e.$57 = function () {
        var a = d("WebPerformanceDeviceInfo").getMobileYearClass();
        a != null && a > 0
          ? (this.$54[n.YEAR_CLASS] = d(
              "ZenonCallFalcoEventUtils"
            ).nonNullIntNumber(a))
          : (this.$54[n.DESKTOP_DEVICE_CLASS] = d(
              "WebPerformanceDeviceInfo"
            ).getDeviceLevel());
      };
      e.updateBatteryStart = function () {
        var a, d, e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  f.next = 2;
                  return b("regeneratorRuntime").awrap(
                    c("ZenonDeviceInfoHelper").getBatteryStats()
                  );
                case 2:
                  (a = f.sent),
                    (d = a.level),
                    (e = a.placeholder),
                    e !== !0 && (this.$54[n.BATTERY_START] = d);
                case 6:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      e.updateBatteryEnd = function () {
        var a, d, e, f;
        return b("regeneratorRuntime").async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  g.next = 2;
                  return b("regeneratorRuntime").awrap(
                    c("ZenonDeviceInfoHelper").getBatteryStats()
                  );
                case 2:
                  (a = g.sent),
                    (d = a.level),
                    (e = a.placeholder),
                    (f = a.wasCharged),
                    e !== !0 &&
                      ((this.$54[n.BATTERY_END] = d), this.setDeviceCharged(f));
                case 7:
                case "end":
                  return g.stop();
              }
          },
          null,
          this
        );
      };
      e.toString = function () {
        var a = { core_metrics: this.$62(), time_series: null };
        return JSON.stringify(a);
      };
      e.toFalco = function () {
        return {
          CoreAudioMetrics: this.$48.CoreAudioMetrics,
          CoreVideoMetrics: this.$48.CoreVideoMetrics,
          DebugAudioMetrics: this.$48.DebugAudioMetrics,
          active_conn: this.$7,
          answer_in_join_resp: this.$38,
          app_event_times: {
            opened: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$31.opened
            ),
            p_a: d("ZenonCallFalcoEventUtils").nonNullIntNumber(this.$31.p_a),
          },
          call_type: this.$11,
          caller: this.$3,
          client_version: this.$6,
          conf_name: this.$8,
          conn: this.$63(),
          device_charged: this.$55,
          e2ee_stats: this.$49,
          end: this.$64(),
          esc_p2p_call_id: this.$10,
          esc_state_times: {
            esc_available: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.esc_available
            ),
            mw_call_ended: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.mw_call_ended
            ),
            out_started: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.out_started
            ),
            p_connected_mw: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.p_connected_mw
            ),
            p_connecting_mw: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.p_connecting_mw
            ),
            p_fail_conn: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.p_fail_conn
            ),
            ready_esc: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.ready_esc
            ),
            rej_invalid_state: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.rej_invalid_state
            ),
            timed_out: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.timed_out
            ),
            u_connected_mw: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.u_connected_mw
            ),
            u_connecting_mw: d("ZenonCallFalcoEventUtils").nonNullIntNumber(
              this.$30.u_connecting_mw
            ),
          },
          is_using_multiway: this.$34,
          join_with_sid: this.$9,
          log_level: this.$65(
            d("ZenonVCSTypes").ZenonUploadLogLevel.cast(this.$4)
          ),
          offer_in_ring_req: this.$33,
          open_count: this.$53,
          peer_id: d("ZenonPeerID").convertPeerIDForLogging(this.peerID),
          perf: this.$66(),
          push_phase: this.$14,
          receiver: this.$67(this.$48.receiver),
          sdp_reneg_times: [
            {
              crs: d("ZenonCallFalcoEventUtils").nonNullIntNumber(this.$35),
              srar: d("ZenonCallFalcoEventUtils").nonNullIntNumber(this.$36),
              sror: d("ZenonCallFalcoEventUtils").nonNullIntNumber(this.$37),
            },
          ],
          sender: this.$68(this.$48.sender),
          serv_info: this.$12,
          signaling: this.$69(),
          ver: d("ZenonCallFalcoEventUtils").nonNullIntNumber(this.$2),
          vid_esc_times: this.$32,
          video: this.$70(),
        };
      };
      e.$62 = function () {
        return {
          CoreAudioMetrics: this.$48.CoreAudioMetrics,
          CoreVideoMetrics: this.$48.CoreVideoMetrics,
          DebugAudioMetrics: this.$48.DebugAudioMetrics,
          active_conn: this.$7,
          answer_in_join_resp: this.$38,
          app_event_times: this.$31,
          call_type: this.$11,
          caller: this.$3,
          client_version: this.$6,
          conf_name: this.$8,
          conn: this.$63(),
          device_charged: this.$55,
          e2ee_stats: this.$49,
          end: this.$64(),
          esc_p2p_call_id: this.$10,
          esc_state_times: this.$30,
          is_using_multiway: this.$34,
          join_with_sid: this.$9,
          log_level: this.$65(
            d("ZenonVCSTypes").ZenonUploadLogLevel.cast(this.$4)
          ),
          offer_in_ring_req: this.$33,
          open_count: this.$53,
          peer_id: d("ZenonPeerID").convertPeerIDForLogging(this.peerID),
          perf: this.$66(),
          push_phase: this.$14,
          receiver: this.$67(this.$48.receiver),
          sdp_reneg_times: [{ crs: this.$35, srar: this.$36, sror: this.$37 }],
          sender: this.$68(this.$48.sender),
          serv_info: this.$12,
          signaling: this.$69(),
          ver: this.$2,
          vid_esc_times: this.$32,
          video: this.$48.video,
        };
      };
      e.$65 = function (a) {
        if (a == null) return "";
        switch (a) {
          case d("ZenonVCSTypes").ZenonUploadLogLevel.LL_BASIC:
            return "basic";
          case d("ZenonVCSTypes").ZenonUploadLogLevel.LL_DEBUG:
            return "debug";
          case d("ZenonVCSTypes").ZenonUploadLogLevel.LL_WARNING:
            return "warning";
          case d("ZenonVCSTypes").ZenonUploadLogLevel.LL_INFO:
            return "info";
          case d("ZenonVCSTypes").ZenonUploadLogLevel.LL_VERBOSE:
            return "verbose";
          default:
            return "";
        }
      };
      e.$63 = function () {
        var a = {},
          b = this.$48.sender,
          c = b.avgrtt,
          e = b.maxrtt;
        b = b.minrtt;
        c != null &&
          ((a.avgrtt = c),
          (a.maxrtt = d("ZenonCallFalcoEventUtils").nonNullIntNumber(e)),
          (a.minrtt = d("ZenonCallFalcoEventUtils").nonNullIntNumber(b)));
        this.$21 != null && (a.relay_ip = this.$21);
        this.$50 != null && this.$50 !== "" && (a.start_reach = this.$50);
        var f = {};
        Object.entries(this.$51).forEach(function (a) {
          var b = a[0];
          a = a[1];
          typeof a === "number" &&
            (f[d("ZenonCallFalcoEventUtils").nonNullIntNumber(a)] = b);
        });
        a.types = f;
        a.ctd = this.$52;
        return a;
      };
      e.$69 = function () {
        var a = {
          start_time: d("ZenonCallFalcoEventUtils").nonNullIntNumber(this.$26),
          time_from_start: p(this.$29),
        };
        this.$5 != null && (a.trigger = this.$5);
        var b = this.$71();
        b > 0 &&
          (a.duration = d("ZenonCallFalcoEventUtils").nonNullIntNumber(b));
        return a;
      };
      e.$68 = function (a) {
        return {
          avgrtt: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.avgrtt),
          bytes: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.bytes),
          codec: a.codec,
          ice: o(this.$41),
          ice_g0: o(this.$39),
          maxrtt: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.maxrtt),
          minrtt: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.minrtt),
          plost: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.plost),
          psent: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.psent),
          taulc: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.taulc),
          tx_sum_lvl: d("ZenonCallFalcoEventUtils").intNumberOrNull(
            a.tx_sum_lvl
          ),
          ube_avg: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.ube_avg),
        };
      };
      e.$67 = function (a) {
        return {
          bytes: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.bytes),
          codec: a.codec,
          dbe_avg: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.dbe_avg),
          dec_ar: a.dec_ar,
          dec_cng: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.dec_cng),
          dec_normal: d("ZenonCallFalcoEventUtils").intNumberOrNull(
            a.dec_normal
          ),
          dec_pack_flush: d("ZenonCallFalcoEventUtils").intNumberOrNull(
            a.dec_pack_flush
          ),
          dec_per: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.dec_per),
          dec_plc: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.dec_plc),
          dec_plc_cng: d("ZenonCallFalcoEventUtils").intNumberOrNull(
            a.dec_plc_cng
          ),
          decel_cnt: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.decel_cnt),
          e2el: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.e2el),
          fecpd: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.fecpd),
          fecpr: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.fecpr),
          ice: o(this.$42),
          ice_g0: o(this.$40),
          jbd: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.jbd),
          jbec: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.jbec),
          jitter: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.jitter),
          neteq_calls: d("ZenonCallFalcoEventUtils").intNumberOrNull(
            a.neteq_calls
          ),
          plost: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.plost),
          precv: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.precv),
          rx_sum_lvl: d("ZenonCallFalcoEventUtils").intNumberOrNull(
            a.rx_sum_lvl
          ),
          sp_dur: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.sp_dur),
          sp_r: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.sp_r),
          taue: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.taue),
          taulc: d("ZenonCallFalcoEventUtils").intNumberOrNull(a.taulc),
        };
      };
      e.$70 = function () {
        var a;
        return {
          bwe: this.$48.video.bwe,
          ld: this.$48.video.ld,
          rd: this.$48.video.rd,
          receiver: {
            av: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.av
            ),
            avabs: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.avabs
            ),
            dec_bytes:
              (a = this.$48.video.receiver) == null ? void 0 : a.dec_bytes,
            dec_frame: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.dec_frame
            ),
            dec_time: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.dec_time
            ),
            dec_time_all_streams: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null
                ? void 0
                : a.dec_time_all_streams
            ),
            dname: (a = this.$48.video.receiver) == null ? void 0 : a.dname,
            dpxl: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.dpxl
            ),
            e2el: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.e2el
            ),
            fir: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.fir
            ),
            frcnt: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.frcnt
            ),
            frd: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.frd
            ),
            frdur: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.frdur
            ),
            jbd: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.jbd
            ),
            jbec: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.jbec
            ),
            jtasb: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.jtasb
            ),
            jtfrm: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.jtfrm
            ),
            jtkey: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.jtkey
            ),
            nack: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.nack
            ),
            pact: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.pact
            ),
            padur: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.padur
            ),
            pli: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.pli
            ),
            plost: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.plost
            ),
            precv: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.precv
            ),
            qps: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.qps
            ),
            recjbl: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.recjbl
            ),
            recv: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.recv
            ),
            rh: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.rh
            ),
            rw: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.rw
            ),
            tdt: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.receiver) == null ? void 0 : a.tdt
            ),
          },
          sender: {
            ah: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.ah
            ),
            aw: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.aw
            ),
            ch: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.ch
            ),
            cw: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.cw
            ),
            efrate: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.efrate
            ),
            ehist: (a = this.$48.video.sender) == null ? void 0 : a.ehist,
            eiframes: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.eiframes
            ),
            eipxl: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.eipxl
            ),
            ename: (a = this.$48.video.sender) == null ? void 0 : a.ename,
            eopxl: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.eopxl
            ),
            eqps: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.eqps
            ),
            fcap: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.fcap
            ),
            fcsn: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.fcsn
            ),
            fir: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.fir
            ),
            frames: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.frames
            ),
            histResScale: ((a =
              (a = this.$48.video.sender) == null ? void 0 : a.histResScale) !=
            null
              ? a
              : []
            ).map(function (a) {
              return d("ZenonCallFalcoEventUtils").nonNullIntNumber(a);
            }),
            kframes: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.kframes
            ),
            nack: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.nack
            ),
            pli: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.pli
            ),
            plost: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.plost
            ),
            psent: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.psent
            ),
            sim_l_chg: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.sim_l_chg
            ),
            ss: {
              avbr: d("ZenonCallFalcoEventUtils").intNumberOrNull(
                (a = this.$48.video.sender) == null
                  ? void 0
                  : (a = a.ss) == null
                  ? void 0
                  : a.avbr
              ),
              avbw: d("ZenonCallFalcoEventUtils").intNumberOrNull(
                (a = this.$48.video.sender) == null
                  ? void 0
                  : (a = a.ss) == null
                  ? void 0
                  : a.avbw
              ),
              dur:
                (a = this.$48.video.sender) == null
                  ? void 0
                  : (a = a.ss) == null
                  ? void 0
                  : a.dur,
              eiframes: d("ZenonCallFalcoEventUtils").intNumberOrNull(
                (a = this.$48.video.sender) == null
                  ? void 0
                  : (a = a.ss) == null
                  ? void 0
                  : a.eiframes
              ),
              eipxl: d("ZenonCallFalcoEventUtils").intNumberOrNull(
                (a = this.$48.video.sender) == null
                  ? void 0
                  : (a = a.ss) == null
                  ? void 0
                  : a.eipxl
              ),
              eopxl: d("ZenonCallFalcoEventUtils").intNumberOrNull(
                (a = this.$48.video.sender) == null
                  ? void 0
                  : (a = a.ss) == null
                  ? void 0
                  : a.eopxl
              ),
              eqps: d("ZenonCallFalcoEventUtils").intNumberOrNull(
                (a = this.$48.video.sender) == null
                  ? void 0
                  : (a = a.ss) == null
                  ? void 0
                  : a.eqps
              ),
              frames: d("ZenonCallFalcoEventUtils").intNumberOrNull(
                (a = this.$48.video.sender) == null
                  ? void 0
                  : (a = a.ss) == null
                  ? void 0
                  : a.frames
              ),
            },
            tet: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.tet
            ),
            tpsd: d("ZenonCallFalcoEventUtils").intNumberOrNull(
              (a = this.$48.video.sender) == null ? void 0 : a.tpsd
            ),
          },
        };
      };
      e.$71 = function (a) {
        var b = this.$29[l.CALL_CONNECTED] || this.$29[l.NETWORK_READY];
        if (!b) return 0;
        a =
          this.$29[l.CALL_ENDED] ||
          (!(a == null ? void 0 : a.assumeOngoing) && this.$27) ||
          this.$60();
        return Math.max(0, a - b);
      };
      e.$64 = function () {
        var a,
          b = {};
        this.$15 != null &&
          ((b.end_call_reason_string = d(
            "ZenonDismissReason"
          ).dismissToEndCallReason(this.$15)),
          this.$16 !== null && (b.end_call_subreason_string = this.$16),
          (b.remote_ended = this.$17),
          (b.end_ctd = this.$19));
        this.$20 != null && (b.conn_type = this.$20);
        a = (a = this.$48.extraInfo) != null ? a : {};
        a = a.localIceCandidate;
        a && a.networkType !== "" && (b.reach = a.networkType);
        return b;
      };
      e.$66 = function () {
        var a,
          b,
          c = this.$71();
        if (c <= 0) return;
        a =
          (a = (a = this.$48.video.receiver) == null ? void 0 : a.tdt) != null
            ? a
            : 0;
        b =
          (b = (b = this.$48.video.sender) == null ? void 0 : b.tet) != null
            ? b
            : 0;
        a = a + b;
        b = d("ZenonCallFalcoEventUtils").nonNullIntNumber(
          Math.round(100 * (a / c))
        );
        return { cpu: { proc: { avg: b } } };
      };
      e.$56 = function () {
        var a;
        ((a = window.navigator.connection) == null
          ? void 0
          : a.effectiveType) != null &&
          (this.$54[n.CONNECTION_EFFECTIVE_TYPE] =
            window.navigator.connection.effectiveType);
      };
      return a;
    })();
    function o(a) {
      return {
        host: d("ZenonCallFalcoEventUtils").nonNullIntNumber(a.host),
        relay: d("ZenonCallFalcoEventUtils").nonNullIntNumber(a.relay),
        srflx: d("ZenonCallFalcoEventUtils").nonNullIntNumber(a.srflx),
      };
    }
    function p(a) {
      var b = {},
        c = Object.keys(a);
      for (var e = 0; e < c.length; e++) {
        var f = c[e];
        b[f] = d("ZenonCallFalcoEventUtils").intNumberOrNull(a[f]);
      }
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ZenonCallSummaryStore",
  ["FBLogger", "ZenonCallSummary", "ZenonGenericCallSummaryStore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "localstorage",
      i = "RTC_CALL_SUMMARY_",
      j = "summary",
      k = 3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.call(this, j, h, i) || this;
      }
      var d = b.prototype;
      d.retrieveCallSummary = function (a, b) {
        var d = this.getCallSummaries();
        d = d[a] ? d[a][b] : null;
        if (d) return c("ZenonCallSummary").fromJsonString(d.__d);
        else return null;
      };
      d.storeCallSummary = function (a) {
        if (a.isNull()) {
          c("FBLogger")("rtweb").mustfix("Storing invalid ZenonCallSummary!");
          return;
        }
        var b = a.peerID,
          d = a.callID;
        this.mutateCallSummaries(
          function (c) {
            c[b] || (c[b] = {});
            c[b][d] = { __d: a.toJsonString(), __t: Date.now(), __z: !0 };
            return c;
          },
          k,
          !1,
          { callID: d, peerID: b }
        );
        a.updateLastSavedTime();
      };
      return b;
    })(c("ZenonGenericCallSummaryStore"));
    b = new a();
    g.ZenonCallSummaryStoreInstance = b;
  },
  98
);
__d(
  "ZenonCallSummaryUploader",
  ["cr:11423"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return b("cr:11423").getLoggableSummaries();
    }
    function c() {
      b("cr:11423").logCallSummaries();
    }
    function d(a) {
      b("cr:11423").logCallSummary(a);
    }
    g.getLoggableSummaries = a;
    g.logCallSummaries = c;
    g.logCallSummary = d;
  },
  98
);
__d(
  "ZenonCallIDType",
  ["randomInt"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a;
    }
    function b() {
      return c("randomInt")(0, 4294967294) + 1;
    }
    g.convertNumberToZenonCallID = a;
    g.generateZenonCallID = b;
  },
  98
);
__d(
  "MessageSharedMediaIDStore.bs",
  ["bs_js_dict"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {};
    function a(a, b) {
      g[a] = b;
    }
    function c(a) {
      a = b("bs_js_dict").get(g, a);
      if (a !== void 0) return a;
      else return null;
    }
    f._store = g;
    f.setMessageIDForAttachmentID = a;
    f.getMessageIDForAttachmentID = c;
  },
  null
);
__d(
  "MessageThreadUnsendabilityStatus.bs",
  ["MessageThreadUnsendabilityStatus"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a == null) return null;
      switch (a) {
        case "can_unsend":
          return b("MessageThreadUnsendabilityStatus").CAN_UNSEND;
        case "deny_for_specific_ids":
          return b("MessageThreadUnsendabilityStatus").DENY_FOR_SPECIFIC_IDS;
        case "deny_if_cannot_load_thread":
          return b("MessageThreadUnsendabilityStatus")
            .DENY_IF_CANNOT_LOAD_THREAD;
        case "deny_if_marketplace_thread":
          return b("MessageThreadUnsendabilityStatus")
            .DENY_IF_MARKETPLACE_THREAD;
        case "deny_if_page_thread":
          return b("MessageThreadUnsendabilityStatus").DENY_IF_PAGE_THREAD;
        case "deny_if_thread_contains_pau":
          return b("MessageThreadUnsendabilityStatus")
            .DENY_IF_THREAD_CONTAINS_PAU;
        default:
          return null;
      }
    }
    f.fromNullableString = a;
  },
  null
);
__d(
  "MessageUnsendabilityStatus.bs",
  ["MessageUnsendabilityStatus"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a == null) return null;
      switch (a) {
        case "can_unsend":
          return b("MessageUnsendabilityStatus").CAN_UNSEND;
        case "deny_blob_attachment":
          return b("MessageUnsendabilityStatus").DENY_BLOB_ATTACHMENT;
        case "deny_for_non_sender":
          return b("MessageUnsendabilityStatus").DENY_FOR_NON_SENDER;
        case "deny_log_message":
          return b("MessageUnsendabilityStatus").DENY_LOG_MESSAGE;
        case "deny_p2p_payment":
          return b("MessageUnsendabilityStatus").DENY_P2P_PAYMENT;
        case "deny_story_reaction":
          return b("MessageUnsendabilityStatus").DENY_STORY_REACTION;
        case "deny_tombstone_message":
          return b("MessageUnsendabilityStatus").DENY_TOMBSTONE_MESSAGE;
        default:
          return null;
      }
    }
    f.fromNullableString = a;
  },
  null
);
__d(
  "MercuryAttachmentContentType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      PHOTO: "attach:image",
      VIDEO: "attach:video",
      MUSIC: "attach:music",
      VOICE: "attach:voice",
      TEXT: "attach:text",
      PDF: "attach:pdf",
      RICHTEXT: "attach:richtext",
      SPREADSHEET: "attach:spreadsheet",
      PRESENTATION: "attach:presentation",
      ARCHIVE: "attach:archive",
      MSWORD: "attach:ms:word",
      MSXLS: "attach:ms:xls",
      MSPPT: "attach:ms:ppt",
      ORION: "attach:orion",
      SHOERACK_INVITATION: "attach:shoerackinvite",
      UNKNOWN: "attach:unknown",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MercuryAttachmentType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      AUDIO: "audio",
      ERROR: "error",
      FILE: "file",
      PHOTO: "photo",
      STICKER: "sticker",
      SHARE: "share",
      UNKNOWN: "unknown",
      VIDEO: "video",
      ANIMATED_IMAGE: "animated_image",
      EMOJI_LIKE: "emoji_like",
      GIFT: "gift",
      THIRDPARTYSTICKER: "third_party_sticker",
    });
    f["default"] = a;
  },
  66
);
__d(
  "FundsAvailability",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      NONE: 0,
      FUNDS_AVAILABILITY_NA: 65,
      FUNDS_AVAILABILITY_IMMEDIATE: 73,
      FUNDS_AVAILABILITY_SAME_DAY: 83,
      FUNDS_AVAILABILITY_NEXT_DAY: 78,
      FUNDS_AVAILABILITY_TWO_DAY: 80,
      FUNDS_AVAILABILITY_FIVE_DAY: 70,
      FUNDS_AVAILABILITY_UNKNOWN: 85,
      FUNDS_AVAILABILITY_ONE_THREE_DAY: 79,
      FUNDS_AVAILABILITY_CROSS_BORDER: 66,
      FUNDS_AVAILABILITY_CROSS_BORDER_FAST_FUNDS: 67,
      FUNDS_AVAILABILITY_DOMESTIC: 68,
      FUNDS_AVAILABILITY_DOMESTIC_FAST_FUNDS: 69,
    });
  },
  null
);
__d(
  "LeadGenInfoFieldTypes",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CUSTOM: "CUSTOM",
      CITY: "CITY",
      COMPANY_NAME: "COMPANY_NAME",
      COUNTRY: "COUNTRY",
      DOB: "DOB",
      EMAIL: "EMAIL",
      GENDER: "GENDER",
      FIRST_NAME: "FIRST_NAME",
      FULL_ADDRESS: "FULL_ADDRESS",
      FULL_NAME: "FULL_NAME",
      JOB_TITLE: "JOB_TITLE",
      LAST_NAME: "LAST_NAME",
      MARITIAL_STATUS: "MARITIAL_STATUS",
      PHONE: "PHONE",
      POST_CODE: "POST_CODE",
      PROVINCE: "PROVINCE",
      RELATIONSHIP_STATUS: "RELATIONSHIP_STATUS",
      STATE: "STATE",
      STREET_ADDRESS: "STREET_ADDRESS",
      ZIP: "ZIP",
      WORK_EMAIL: "WORK_EMAIL",
      MILITARY_STATUS: "MILITARY_STATUS",
      WORK_PHONE_NUMBER: "WORK_PHONE_NUMBER",
      STORE_LOOKUP: "STORE_LOOKUP",
      STORE_LOOKUP_WITH_TYPEAHEAD: "STORE_LOOKUP_WITH_TYPEAHEAD",
      DATE_TIME: "DATE_TIME",
      ID_CPF: "ID_CPF",
      ID_AR_DNI: "ID_AR_DNI",
      ID_CL_RUT: "ID_CL_RUT",
      ID_CO_CC: "ID_CO_CC",
      ID_EC_CI: "ID_EC_CI",
      ID_PE_DNI: "ID_PE_DNI",
      ID_MX_RFC: "ID_MX_RFC",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MNCommerceBubbleType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      FB_RETAIL_RECEIPT: 1,
      FB_RETAIL_CANCELLATION: 2,
      FB_RETAIL_SHIPMENT: 3,
      FB_RETAIL_SHIPMENT_TRACKING_EVENT_ETA: 4,
      FB_RETAIL_SHIPMENT_TRACKING_EVENT_IN_TRANSIT: 5,
      FB_RETAIL_SHIPMENT_TRACKING_EVENT_OUT_FOR_DELIVERY: 6,
      FB_RETAIL_SHIPMENT_TRACKING_EVENT_DELAYED: 7,
      FB_RETAIL_SHIPMENT_TRACKING_EVENT_DELIVERED: 8,
      FB_RETAIL_SHIPMENT_FOR_UNSUPPORTED_CARRIER: 9,
      FB_RETAIL_SHIPMENT_ETA: 10,
      FB_RETAIL_NOW_IN_STOCK: 11,
      FB_RETAIL_AGENT_ITEM_SUGGESTION: 12,
      FB_RETAIL_AGENT_ITEM_RECEIPT: 13,
      FB_RETAIL_PROMOTIONAL_MSG: 14,
    });
    f["default"] = a;
  },
  66
);
__d(
  "MNCommerceCallToActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      OPEN_NATIVE: 1,
      OPEN_URL: 2,
      POSTBACK: 4,
      ACCOUNT_LINK: 5,
      SHARE: 7,
      PAYMENT: 8,
      FACEBOOK_REPORT_A_PROBLEM: 9,
      NAVIGATION: 11,
      EXTENSIBLE_SHARE: 12,
      OPEN_PAGE_ABOUT: 14,
      OPEN_BRANDED_CAMERA: 15,
      OPEN_THREAD: 16,
      OPEN_MARKETPLACE_PROFILE_REPORT: 17,
      OPEN_DIRECT_SEND_VIEW: 18,
      BOOKING: 19,
      BOOKING_ADD_TO_CALENDAR: 20,
      ACCOUNT_UNLINK: 21,
      RATE_SELLER: 22,
      ROOMS_SPEAKEASY_INVITE: 23,
      ROOMS_SPEAKEASY_INTERESTED: 24,
      ROOMS_SPEAKEASY_EDIT: 25,
      ROOMS_SPEAKEASY_UNDO: 26,
      ROOMS_SPEAKEASY_CALLBACK: 27,
      ROOMS_SPEAKEASY_COPY_LINK: 32,
      ROOMS_SPEAKEASY_JOIN_WITHOUT_VIDEO: 34,
      ROOMS_SPEAKEASY_JOIN_FROM_PORTAL: 36,
      FB_LOGIN: 28,
      FEEDBACK_SEND: 29,
      SHOPS_PDP: 30,
      OPEN_SHOPS_PRODUCT_VARIANT_PICKER: 43,
      OPEN_DIALOG: 31,
      RTC_NEW_VIDEO_DEFAULT: 35,
      RTC_NEW_VIDEO_FROM_FB_SHARE: 38,
      RTC_NEW_VIDEO_FROM_FB_VIDEO_SHARE: 40,
      RTC_NEW_VIDEO_FROM_COWATCH_SHARE: 42,
      DISABLED: 44,
      SUBSCRIPTION_PRESELECT: 10,
      OPEN_REACT_NATIVE_MINI_APP: 13,
      OPEN_CANCEL_RIDE_MUTATION: 3,
      MANAGE_MESSAGES: 6,
    });
    f["default"] = a;
  },
  66
);
__d(
  "P2PPaymentRequestStatus",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      INITED: 1,
      DECLINED: 2,
      TRANSFER_INITED: 3,
      TRANSFER_COMPLETED: 4,
      TRANSFER_FAILED: 5,
      CANCELED: 6,
      EXPIRED: 7,
    });
    f["default"] = a;
  },
  66
);
__d(
  "P2PTransferStatus",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      SYSTEM_FAILURE: 0,
      PENDING_SENDER_MANUAL_REVIEW: 1,
      PENDING_SENDER_VERIFICATION: 2,
      CANCELED_SENDER_RISK: 3,
      PENDING_RECIPIENT_NUX: 4,
      CANCELED_DECLINED: 5,
      PENDING_RECIPIENT_VERIFICATION: 6,
      PENDING_RECIPIENT_MANUAL_REVIEW: 7,
      PENDING_RECIPIENT_PROCESSING: 8,
      PENDING_PUSH_FAIL: 9,
      CANCELED_RECIPIENT_RISK: 10,
      CANCELED_SYSTEM_FAIL: 11,
      CANCELED_EXPIRED: 12,
      COMPLETED: 13,
      INTERMEDIATE_PROCESSING: 14,
      PENDING_SENDER_INITED: 15,
      CANCELED_SAME_CARD: 16,
      PENDING_SENDER_VERIFICATION_PROCESSING: 17,
      PENDING_RECIPIENT_VERIFICATION_PROCESSING: 18,
      CANCELED_SENDER_CANCEL: 19,
      PENDING_SENDER_IDV_REVIEW: 20,
      PENDING_RECEIVER_IDV_REVIEW: 21,
    });
    f["default"] = a;
  },
  66
);
__d(
  "PaymentModulesClient",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      DONATION_P4P: "donation_p4p",
      MOR_DONATIONS: "mor_donations",
      PPGF_DONATION: "ppgf_donation",
      DONATION_P4C: "donation_p4c",
      INSTANT_EXPERIENCES: "instant_experiences",
      BUSINESS_PLATFORM_COMMERCE: "business_platform_commerce",
      MESSENGER_OMNIM: "messenger_omnim",
      MESSENGER_PLATFORM: "messenger_platform",
      PAGES_COMMERCE: "pages_commerce",
      MESSAGING_COMMERCE: "messaging_commerce",
      SHIPPING_LABEL: "shipping_label",
      SYNCHRONOUS_COMPONENT_FLOW: "synchronous_component_flow",
      PAGES_SOLUTION: "pages_solution",
      CHECKOUT_EXPERIENCES: "checkout_experiences",
      C2C_CHECKOUT_EXPERIENCES: "c2c_checkout_experiences",
      MOBILE_TOP_UP: "mobile_top_up",
      MOCK: "mock",
      ADVERTISER_SUBSCRIPTION: "advertiser_subscription",
      NMOR_FB_BROWSER_PAY: "fb_browser_payment",
    });
    f["default"] = a;
  },
  66
);
__d(
  "ServicesCalendarSyncType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CLIENT_ONLY: "client_only",
      NO_CALENDAR_SYNC: "no_calendar_sync",
      SERVER_CONTINUOUS: "server_continuous",
      SERVER_SINGLE: "server_single",
    });
    f["default"] = a;
  },
  66
);
__d(
  "bs_char",
  ["bs_caml_bytes"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a < 0 || a > 255)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Char.chr",
          Error: new Error(),
        };
      return a;
    }
    function c(a) {
      var c = 0;
      if (a >= 40) {
        if (a === 92) return "\\\\";
        c = a >= 127 ? 1 : 2;
      } else if (a >= 32) {
        if (a >= 39) return "\\'";
        c = 2;
      } else if (a >= 14) c = 1;
      else
        switch (a) {
          case 8:
            return "\\b";
          case 9:
            return "\\t";
          case 10:
            return "\\n";
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 11:
          case 12:
            c = 1;
            break;
          case 13:
            return "\\r";
        }
      switch (c) {
        case 1:
          c = [0, 0, 0, 0];
          c[0] = 92;
          c[1] = (48 + ((a / 100) | 0)) | 0;
          c[2] = (48 + (((a / 10) | 0) % 10)) | 0;
          c[3] = (48 + (a % 10)) | 0;
          return b("bs_caml_bytes").bytes_to_string(c);
        case 2:
          c = [0];
          c[0] = a;
          return b("bs_caml_bytes").bytes_to_string(c);
      }
    }
    function d(a) {
      if (
        (a >= 65 && a <= 90) ||
        (a >= 192 && a <= 214) ||
        (a >= 216 && a <= 222)
      )
        return (a + 32) | 0;
      else return a;
    }
    function e(a) {
      if (
        (a >= 97 && a <= 122) ||
        (a >= 224 && a <= 246) ||
        (a >= 248 && a <= 254)
      )
        return (a - 32) | 0;
      else return a;
    }
    function g(a) {
      if (a >= 65 && a <= 90) return (a + 32) | 0;
      else return a;
    }
    function h(a) {
      if (a >= 97 && a <= 122) return (a - 32) | 0;
      else return a;
    }
    function i(a, b) {
      return (a - b) | 0;
    }
    function j(a, b) {
      return ((a - b) | 0) === 0;
    }
    f.chr = a;
    f.escaped = c;
    f.lowercase = d;
    f.uppercase = e;
    f.lowercase_ascii = g;
    f.uppercase_ascii = h;
    f.compare = i;
    f.equal = j;
  },
  null
);
__d(
  "bs_bytes",
  ["bs_caml", "bs_caml_bytes", "bs_caml_js_exceptions", "bs_char", "bs_curry"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a, c) {
      var d = b("bs_caml_bytes").caml_create_bytes(a);
      b("bs_caml_bytes").caml_fill_bytes(d, 0, a, c);
      return d;
    }
    function c(a, c) {
      var d = b("bs_caml_bytes").caml_create_bytes(a);
      for (var e = 0; e < a; ++e) d[e] = b("bs_curry")._1(c, e);
      return d;
    }
    var h = [];
    function i(a) {
      var c = a.length,
        d = b("bs_caml_bytes").caml_create_bytes(c);
      b("bs_caml_bytes").caml_blit_bytes(a, 0, d, 0, c);
      return d;
    }
    function d(a) {
      return b("bs_caml_bytes").bytes_to_string(i(a));
    }
    function e(a) {
      return i(b("bs_caml_bytes").bytes_of_string(a));
    }
    function j(a, c, d) {
      if (c < 0 || d < 0 || c > ((a.length - d) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.sub / Bytes.sub",
          Error: new Error(),
        };
      var e = b("bs_caml_bytes").caml_create_bytes(d);
      b("bs_caml_bytes").caml_blit_bytes(a, c, e, 0, d);
      return e;
    }
    function k(a, c, d) {
      return b("bs_caml_bytes").bytes_to_string(j(a, c, d));
    }
    function l(a, b) {
      var c = (a + b) | 0;
      a = a < 0;
      b = b < 0;
      var d = c < 0;
      if (a) {
        if (!b) return c;
        if (d) return c;
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.extend",
          Error: new Error(),
        };
      }
      if (b) return c;
      if (d)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.extend",
          Error: new Error(),
        };
      return c;
    }
    function m(a, c, d) {
      d = l(l(a.length, c), d);
      var e = b("bs_caml_bytes").caml_create_bytes(d);
      c = c < 0 ? [-c | 0, 0] : [0, c];
      var f = c[1];
      c = c[0];
      d = b("bs_caml").caml_int_min((a.length - c) | 0, (d - f) | 0);
      d > 0 && b("bs_caml_bytes").caml_blit_bytes(a, c, e, f, d);
      return e;
    }
    function n(a, c, d, e) {
      if (c < 0 || d < 0 || c > ((a.length - d) | 0))
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.fill / Bytes.fill",
          Error: new Error(),
        };
      return b("bs_caml_bytes").caml_fill_bytes(a, c, d, e);
    }
    function o(a, c, d, e, f) {
      if (
        f < 0 ||
        c < 0 ||
        c > ((a.length - f) | 0) ||
        e < 0 ||
        e > ((d.length - f) | 0)
      )
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.blit",
          Error: new Error(),
        };
      return b("bs_caml_bytes").caml_blit_bytes(a, c, d, e, f);
    }
    function p(a, c, d, e, f) {
      if (
        f < 0 ||
        c < 0 ||
        c > ((a.length - f) | 0) ||
        e < 0 ||
        e > ((d.length - f) | 0)
      )
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.blit / Bytes.blit_string",
          Error: new Error(),
        };
      return b("bs_caml_bytes").caml_blit_string(a, c, d, e, f);
    }
    function q(a, c) {
      for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._1(a, c[d]);
    }
    function r(a, c) {
      for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._2(a, d, c[d]);
    }
    function s(a, b) {
      if (a >= b) return a;
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "Bytes.concat",
        Error: new Error(),
      };
    }
    function t(a, b, c) {
      while (!0) {
        var d = c,
          e = a;
        if (!d) return e;
        var f = d.tl;
        d = d.hd;
        if (!f) return (d.length + e) | 0;
        c = f;
        a = s((((d.length + b) | 0) + e) | 0, e);
        continue;
      }
    }
    function u(a, c) {
      if (!c) return h;
      var d = a.length,
        e = b("bs_caml_bytes").caml_create_bytes(t(0, d, c)),
        f = 0;
      c = c;
      while (!0) {
        var g = c,
          i = f;
        if (!g) return e;
        var j = g.tl;
        g = g.hd;
        if (j) {
          b("bs_caml_bytes").caml_blit_bytes(g, 0, e, i, g.length);
          b("bs_caml_bytes").caml_blit_bytes(a, 0, e, (i + g.length) | 0, d);
          c = j;
          f = (((i + g.length) | 0) + d) | 0;
          continue;
        }
        b("bs_caml_bytes").caml_blit_bytes(g, 0, e, i, g.length);
        return e;
      }
    }
    function v(a, c) {
      var d = a.length,
        e = c.length,
        f = b("bs_caml_bytes").caml_create_bytes((d + e) | 0);
      b("bs_caml_bytes").caml_blit_bytes(a, 0, f, 0, d);
      b("bs_caml_bytes").caml_blit_bytes(c, 0, f, d, e);
      return f;
    }
    function w(a) {
      if (a > 13 || a < 9) return a === 32;
      else return a !== 11;
    }
    function x(a) {
      var b = a.length,
        c = 0;
      while (c < b && w(a[c])) c = (c + 1) | 0;
      b = (b - 1) | 0;
      while (b >= c && w(a[b])) b = (b - 1) | 0;
      if (b >= c) return j(a, c, (((b - c) | 0) + 1) | 0);
      else return h;
    }
    function y(a) {
      var c = 0;
      for (var d = 0, e = a.length; d < e; ++d) {
        var f = a[d];
        c =
          (c +
            (f >= 32
              ? f > 92 || f < 34
                ? f >= 127
                  ? 4
                  : 1
                : f > 91 || f < 35
                ? 2
                : 1
              : f >= 11
              ? f !== 13
                ? 4
                : 2
              : f >= 8
              ? 2
              : 4)) |
          0;
      }
      if (c === a.length) return i(a);
      f = b("bs_caml_bytes").caml_create_bytes(c);
      c = 0;
      for (var d = 0, e = a.length; d < e; ++d) {
        var g = a[d],
          h = 0;
        if (g >= 35) g !== 92 ? (g >= 127 ? (h = 1) : (f[c] = g)) : (h = 2);
        else if (g >= 32) g >= 34 ? (h = 2) : (f[c] = g);
        else if (g >= 14) h = 1;
        else
          switch (g) {
            case 8:
              f[c] = 92;
              c = (c + 1) | 0;
              f[c] = 98;
              break;
            case 9:
              f[c] = 92;
              c = (c + 1) | 0;
              f[c] = 116;
              break;
            case 10:
              f[c] = 92;
              c = (c + 1) | 0;
              f[c] = 110;
              break;
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 11:
            case 12:
              h = 1;
              break;
            case 13:
              f[c] = 92;
              c = (c + 1) | 0;
              f[c] = 114;
              break;
          }
        switch (h) {
          case 1:
            f[c] = 92;
            c = (c + 1) | 0;
            f[c] = (48 + ((g / 100) | 0)) | 0;
            c = (c + 1) | 0;
            f[c] = (48 + (((g / 10) | 0) % 10)) | 0;
            c = (c + 1) | 0;
            f[c] = (48 + (g % 10)) | 0;
            break;
          case 2:
            f[c] = 92;
            c = (c + 1) | 0;
            f[c] = g;
            break;
        }
        c = (c + 1) | 0;
      }
      return f;
    }
    function z(a, c) {
      var d = c.length;
      if (d === 0) return c;
      var e = b("bs_caml_bytes").caml_create_bytes(d);
      for (var f = 0; f < d; ++f) e[f] = b("bs_curry")._1(a, c[f]);
      return e;
    }
    function A(a, c) {
      var d = c.length;
      if (d === 0) return c;
      var e = b("bs_caml_bytes").caml_create_bytes(d);
      for (var f = 0; f < d; ++f) e[f] = b("bs_curry")._2(a, f, c[f]);
      return e;
    }
    function B(a) {
      return z(b("bs_char").uppercase_ascii, a);
    }
    function C(a) {
      return z(b("bs_char").lowercase_ascii, a);
    }
    function D(a, c) {
      if (c.length === 0) return c;
      var d = i(c);
      d[0] = b("bs_curry")._1(a, c[0]);
      return d;
    }
    function E(a) {
      return D(b("bs_char").uppercase_ascii, a);
    }
    function F(a) {
      return D(b("bs_char").lowercase_ascii, a);
    }
    function G(a, b, c, d) {
      while (!0) {
        var e = c;
        if (e >= b) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (a[e] === d) return e;
        c = (e + 1) | 0;
        continue;
      }
    }
    function H(a, b) {
      return G(a, a.length, 0, b);
    }
    function I(a, b, c, d) {
      while (!0) {
        var e = c;
        if (e >= b) return;
        if (a[e] === d) return e;
        c = (e + 1) | 0;
        continue;
      }
    }
    function J(a, b) {
      return I(a, a.length, 0, b);
    }
    function K(a, b, c) {
      var d = a.length;
      if (b < 0 || b > d)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from / Bytes.index_from",
          Error: new Error(),
        };
      return G(a, d, b, c);
    }
    function L(a, b, c) {
      var d = a.length;
      if (b < 0 || b > d)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from_opt / Bytes.index_from_opt",
          Error: new Error(),
        };
      return I(a, d, b, c);
    }
    function M(a, b, c) {
      while (!0) {
        var d = b;
        if (d < 0) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (a[d] === c) return d;
        b = (d - 1) | 0;
        continue;
      }
    }
    function N(a, b) {
      return M(a, (a.length - 1) | 0, b);
    }
    function O(a, b, c) {
      if (b < -1 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from / Bytes.rindex_from",
          Error: new Error(),
        };
      return M(a, b, c);
    }
    function P(a, b, c) {
      while (!0) {
        var d = b;
        if (d < 0) return;
        if (a[d] === c) return d;
        b = (d - 1) | 0;
        continue;
      }
    }
    function Q(a, b) {
      return P(a, (a.length - 1) | 0, b);
    }
    function R(a, b, c) {
      if (b < -1 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from_opt / Bytes.rindex_from_opt",
          Error: new Error(),
        };
      return P(a, b, c);
    }
    function S(a, c, d) {
      var e = a.length;
      if (c < 0 || c > e)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.contains_from / Bytes.contains_from",
          Error: new Error(),
        };
      try {
        G(a, e, c, d);
        return !0;
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Not_found") return !1;
        throw a;
      }
    }
    function T(a, b) {
      return S(a, 0, b);
    }
    function U(a, c, d) {
      if (c < 0 || c >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rcontains_from / Bytes.rcontains_from",
          Error: new Error(),
        };
      try {
        M(a, c, d);
        return !0;
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Not_found") return !1;
        throw a;
      }
    }
    var V = (g = b("bs_caml_bytes")).caml_bytes_compare;
    function W(a) {
      return z(b("bs_char").uppercase, a);
    }
    function X(a) {
      return z(b("bs_char").lowercase, a);
    }
    function Y(a) {
      return D(b("bs_char").uppercase, a);
    }
    function Z(a) {
      return D(b("bs_char").lowercase, a);
    }
    var $ = g.caml_bytes_equal,
      aa = g.bytes_to_string;
    g = g.bytes_of_string;
    f.make = a;
    f.init = c;
    f.empty = h;
    f.copy = i;
    f.of_string = e;
    f.to_string = d;
    f.sub = j;
    f.sub_string = k;
    f.extend = m;
    f.fill = n;
    f.blit = o;
    f.blit_string = p;
    f.concat = u;
    f.cat = v;
    f.iter = q;
    f.iteri = r;
    f.map = z;
    f.mapi = A;
    f.trim = x;
    f.escaped = y;
    f.index = H;
    f.index_opt = J;
    f.rindex = N;
    f.rindex_opt = Q;
    f.index_from = K;
    f.index_from_opt = L;
    f.rindex_from = O;
    f.rindex_from_opt = R;
    f.contains = T;
    f.contains_from = S;
    f.rcontains_from = U;
    f.uppercase = W;
    f.lowercase = X;
    f.capitalize = Y;
    f.uncapitalize = Z;
    f.uppercase_ascii = B;
    f.lowercase_ascii = C;
    f.capitalize_ascii = E;
    f.uncapitalize_ascii = F;
    f.compare = V;
    f.equal = $;
    f.unsafe_to_string = aa;
    f.unsafe_of_string = g;
  },
  null
);
__d(
  "bs_string",
  [
    "bs_bytes",
    "bs_caml",
    "bs_caml_bytes",
    "bs_caml_js_exceptions",
    "bs_caml_string",
    "bs_curry",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
      return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").init(a, c));
    }
    function g(a, c, d) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").sub(b("bs_caml_bytes").bytes_of_string(a), c, d)
      );
    }
    function h(a, b) {
      if (a >= b) return a;
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "String.concat",
        Error: new Error(),
      };
    }
    function i(a, b, c) {
      while (!0) {
        var d = c,
          e = a;
        if (!d) return e;
        var f = d.tl;
        d = d.hd;
        if (!f) return (d.length + e) | 0;
        c = f;
        a = h((((d.length + b) | 0) + e) | 0, e);
        continue;
      }
    }
    function j(a, c, d, e, f) {
      while (!0) {
        var g = f,
          h = c;
        if (!g) return a;
        var i = g.tl;
        g = g.hd;
        if (i) {
          b("bs_caml_bytes").caml_blit_string(g, 0, a, h, g.length);
          b("bs_caml_bytes").caml_blit_string(d, 0, a, (h + g.length) | 0, e);
          f = i;
          c = (((h + g.length) | 0) + e) | 0;
          continue;
        }
        b("bs_caml_bytes").caml_blit_string(g, 0, a, h, g.length);
        return a;
      }
    }
    function c(a, c) {
      if (!c) return "";
      var d = a.length;
      return b("bs_caml_bytes").bytes_to_string(
        j(b("bs_caml_bytes").caml_create_bytes(i(0, d, c)), 0, a, d, c)
      );
    }
    function d(a, c) {
      for (var d = 0, e = c.length; d < e; ++d)
        b("bs_curry")._1(a, c.charCodeAt(d));
    }
    function e(a, c) {
      for (var d = 0, e = c.length; d < e; ++d)
        b("bs_curry")._2(a, d, c.charCodeAt(d));
    }
    function k(a, c) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").map(a, b("bs_caml_bytes").bytes_of_string(c))
      );
    }
    function l(a, c) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").mapi(a, b("bs_caml_bytes").bytes_of_string(c))
      );
    }
    function m(a) {
      if (a > 13 || a < 9) return a === 32;
      else return a !== 11;
    }
    function n(a) {
      if (
        a === "" ||
        !(m(a.charCodeAt(0)) || m(a.charCodeAt((a.length - 1) | 0)))
      )
        return a;
      else
        return b("bs_caml_bytes").bytes_to_string(
          b("bs_bytes").trim(b("bs_caml_bytes").bytes_of_string(a))
        );
    }
    function o(a) {
      var c = function (b) {
        while (!0) {
          var c = b;
          if (c >= a.length) return !1;
          var d = a.charCodeAt(c);
          if (d < 32) return !0;
          if (d > 92 || d < 34) {
            if (d >= 127) return !0;
            b = (c + 1) | 0;
            continue;
          }
          if (d > 91 || d < 35) return !0;
          b = (c + 1) | 0;
          continue;
        }
      };
      if (c(0))
        return b("bs_caml_bytes").bytes_to_string(
          b("bs_bytes").escaped(b("bs_caml_bytes").bytes_of_string(a))
        );
      else return a;
    }
    function p(a, b, c, d) {
      while (!0) {
        var e = c;
        if (e >= b) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (a.charCodeAt(e) === d) return e;
        c = (e + 1) | 0;
        continue;
      }
    }
    function q(a, b) {
      return p(a, a.length, 0, b);
    }
    function r(a, b, c, d) {
      while (!0) {
        var e = c;
        if (e >= b) return;
        if (a.charCodeAt(e) === d) return e;
        c = (e + 1) | 0;
        continue;
      }
    }
    function s(a, b) {
      return r(a, a.length, 0, b);
    }
    function t(a, b, c) {
      var d = a.length;
      if (b < 0 || b > d)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from / Bytes.index_from",
          Error: new Error(),
        };
      return p(a, d, b, c);
    }
    function u(a, b, c) {
      var d = a.length;
      if (b < 0 || b > d)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from_opt / Bytes.index_from_opt",
          Error: new Error(),
        };
      return r(a, d, b, c);
    }
    function v(a, b, c) {
      while (!0) {
        var d = b;
        if (d < 0) throw { RE_EXN_ID: "Not_found", Error: new Error() };
        if (a.charCodeAt(d) === c) return d;
        b = (d - 1) | 0;
        continue;
      }
    }
    function w(a, b) {
      return v(a, (a.length - 1) | 0, b);
    }
    function x(a, b, c) {
      if (b < -1 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from / Bytes.rindex_from",
          Error: new Error(),
        };
      return v(a, b, c);
    }
    function y(a, b, c) {
      while (!0) {
        var d = b;
        if (d < 0) return;
        if (a.charCodeAt(d) === c) return d;
        b = (d - 1) | 0;
        continue;
      }
    }
    function z(a, b) {
      return y(a, (a.length - 1) | 0, b);
    }
    function A(a, b, c) {
      if (b < -1 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from_opt / Bytes.rindex_from_opt",
          Error: new Error(),
        };
      return y(a, b, c);
    }
    function B(a, c, d) {
      var e = a.length;
      if (c < 0 || c > e)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.contains_from / Bytes.contains_from",
          Error: new Error(),
        };
      try {
        p(a, e, c, d);
        return !0;
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Not_found") return !1;
        throw a;
      }
    }
    function C(a, b) {
      return B(a, 0, b);
    }
    function D(a, c, d) {
      if (c < 0 || c >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rcontains_from / Bytes.rcontains_from",
          Error: new Error(),
        };
      try {
        v(a, c, d);
        return !0;
      } catch (c) {
        a = b("bs_caml_js_exceptions").internalToOCamlException(c);
        if (a.RE_EXN_ID === "Not_found") return !1;
        throw a;
      }
    }
    function E(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").uppercase_ascii(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function F(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").lowercase_ascii(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function G(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").capitalize_ascii(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function H(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").uncapitalize_ascii(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    var I = b("bs_caml").caml_string_compare;
    function J(a, b) {
      var c = 0,
        d = b.length;
      for (var e = (b.length - 1) | 0; e >= 0; --e)
        b.charCodeAt(e) === a &&
          ((c = { hd: g(b, (e + 1) | 0, (((d - e) | 0) - 1) | 0), tl: c }),
          (d = e));
      return { hd: g(b, 0, d), tl: c };
    }
    function K(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").uppercase(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function L(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").lowercase(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function M(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").capitalize(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    function N(a) {
      return b("bs_caml_bytes").bytes_to_string(
        b("bs_bytes").uncapitalize(b("bs_caml_bytes").bytes_of_string(a))
      );
    }
    var O = b("bs_caml_string").make,
      P = b("bs_bytes").blit_string;
    function Q(a, b) {
      return a === b;
    }
    f.make = O;
    f.init = a;
    f.sub = g;
    f.blit = P;
    f.concat = c;
    f.iter = d;
    f.iteri = e;
    f.map = k;
    f.mapi = l;
    f.trim = n;
    f.escaped = o;
    f.index = q;
    f.index_opt = s;
    f.rindex = w;
    f.rindex_opt = z;
    f.index_from = t;
    f.index_from_opt = u;
    f.rindex_from = x;
    f.rindex_from_opt = A;
    f.contains = C;
    f.contains_from = B;
    f.rcontains_from = D;
    f.uppercase = K;
    f.lowercase = L;
    f.capitalize = M;
    f.uncapitalize = N;
    f.uppercase_ascii = E;
    f.lowercase_ascii = F;
    f.capitalize_ascii = G;
    f.uncapitalize_ascii = H;
    f.compare = I;
    f.equal = Q;
    f.split_on_char = J;
  },
  null
);
__d(
  "MessengerStoryAttachmentTransformer.bs",
  [
    "fbt",
    "CurrentUser",
    "FundsAvailability",
    "LeadGenInfoFieldTypes",
    "MNCommerceBubbleType",
    "MNCommerceCallToActionType",
    "MercuryAttachmentType",
    "P2PPaymentRequestStatus",
    "P2PTransferStatus",
    "PaymentModulesClient",
    "ServicesCalendarSyncType",
    "URI",
    "bs_belt_Option",
    "bs_caml_array",
    "bs_caml_format",
    "bs_caml_option",
    "bs_js_dict",
    "bs_js_null_undefined",
    "bs_string",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i(a) {
      return a.map(function (a) {
        var c = a.user_confirmation;
        c =
          c == null
            ? [null, null, null, null, !1]
            : [
                c.cancel_button_label,
                c.continue_button_label,
                c.confirmation_message,
                c.confirmation_title,
                !0,
              ];
        var d = a.payment_metadata;
        return {
          action_link: a.action_link,
          action_type: b("bs_js_null_undefined").fromOption(
            b("bs_js_dict").get(
              b("MNCommerceCallToActionType"),
              a.action_open_type
            )
          ),
          action_objects: a.action_objects,
          title: a.title,
          confirmation_cancel_label: c[0],
          confirmation_continue_label: c[1],
          confirmation_message: c[2],
          confirmation_title: c[3],
          id: a.id,
          is_disabled: a.is_disabled,
          is_mutable_by_server: a.is_mutable_by_server,
          logging_token: a.logging_token,
          payment_metadata:
            d == null
              ? { payment_module_config: null, total_price: null }
              : {
                  payment_module_config: d.payment_module_config,
                  total_price: d.total_price,
                },
          render_style: a.render_style,
          webview_metadata: {
            fallback_url: a.webview_metadata.fallback_url,
            messenger_extensions: a.webview_metadata.messenger_extensions,
            webview_height_ratio: a.webview_metadata.webview_height_ratio,
            webview_share_button: a.webview_metadata.webview_share_button,
          },
          should_show_user_confirmation: c[4],
          page_id: a.page_id,
          cta_data: a.cta_data,
        };
      });
    }
    function j(a) {
      return a.map(function (a) {
        var c = a.url;
        c =
          c == null
            ? null
            : new (h || (h = b("URI")))(c).getUnqualifiedURI().toString();
        return { title: a.title, uri: c };
      });
    }
    function a(a) {
      if (!(a == null) && a !== "")
        return "#" + b("bs_string").sub(a, 2, (a.length - 2) | 0);
      else return null;
    }
    function c(a) {
      if (a == null) return null;
      else return { url: a.uri, src: a.uri, width: a.width, height: a.height };
    }
    function k(a, b) {
      var c = b.cover_photo,
        d;
      if (c == null) d = [null, null, null];
      else {
        var e = c.photo.image;
        e =
          e == null
            ? [null, null]
            : [e.uri, { height: e.height, width: e.width }];
        d = [c.photo.id, e[0], e[1]];
      }
      c = b.location;
      e = c == null ? [null, null] : [c.latitude, c.longitude];
      c = b.overall_star_rating;
      return {
        address: b.address.single_line_full_address,
        category: b.top_category_name,
        coverPhotoID: d[0],
        coverPhotoURL: d[1],
        coverPhotoDimensions: d[2],
        latitude: e[0],
        longitude: e[1],
        name: b.name,
        rating: c == null ? null : c.value,
        pageID: b.id,
        priceRange: b.price_range_description,
        viewerID: a,
      };
    }
    function l(a) {
      var b = a.group_commerce_item_seller,
        c = a.primary_photo,
        d;
      if (c == null) d = null;
      else {
        c = c.image;
        d = c == null ? null : c.uri;
      }
      return {
        caption: a.group_commerce_item_description.text,
        desc: a.group_commerce_item_description.text,
        owner_id: b == null ? null : b.id,
        price: a.formatted_price.text,
        text: a.group_commerce_item_description.text,
        title: a.group_commerce_item_title,
        thumb_url: d,
        url: a.url,
      };
    }
    function m(a) {
      return {
        app_name: a.application_name,
        artists: a.artist_names,
        audio_url: a.audio_url,
        duration_ms: a.duration_ms,
        title: a.music_title,
      };
    }
    function n(a) {
      var c = a.payment;
      return {
        id: a.id,
        desc: a.desc,
        display_total_cost: a.total_cost,
        merchant_name: a.merchant_name,
        target_url: a.target_url,
        thumb_url: a.thumb_url,
        raw_amount: a.raw_amount,
        payment_id: c == null ? null : c.id,
        total_cost: {
          amount: b("bs_caml_format").caml_float_of_string(a.price_amount),
          currency: a.price_currency,
        },
        name: a.name,
      };
    }
    function o(a) {
      return {
        fundraiserID: a.fundraiserID,
        canDonate: a.canDonate,
        hasViewerDonated: a.hasViewerDonated,
        fundraiserDetailedProgressText: a.fundraiserDetailedProgressText,
        fundraiserSubtitleText: a.fundraiserSubtitleText,
        focusedCoverPhoto: a.focusedCoverPhoto,
      };
    }
    function p(a) {
      return {
        id: a.id,
        name: a.name,
        is_malicious: a.is_malicious,
        attach_type: b("MercuryAttachmentType").FILE,
        url: a.uri,
        extension: a.extension,
        filesize: a.filesize,
      };
    }
    function q(a) {
      return {
        id: a.id,
        url_shimhash: a.url_shimhash,
        attach_type: b("MercuryAttachmentType").VIDEO,
        url: a.playable_url,
        extension: a.extension,
        filesize: a.filesize,
        name: a.filename,
        height: a.height,
        width: a.width,
      };
    }
    function r(a) {
      return {
        id: a.id,
        name: a.name,
        desc: a.desc,
        thumb_url: a.thumb_url,
        item_url: a.item_url,
        title: a.name,
        text: a.desc,
        source: a.source,
        image_aspect_ratio: a.image_aspect_ratio,
        metalines: {
          metaline_1: a.first_metaline,
          metaline_2: a.second_metaline,
          metaline_3: a.third_metaline,
        },
        default_action: a.default_action,
        call_to_actions: i(a.call_to_actions),
      };
    }
    function s(a) {
      var c = function (a) {
          a = a.services_vertical_info;
          if (!(a == null))
            return {
              isEligibleForAppointmentCalendar:
                a.is_eligible_for_appointment_calendar,
              timezoneName: a.time_zone_name,
            };
        },
        d = a.page;
      c =
        d == null
          ? [void 0, void 0, void 0]
          : [
              d.id,
              b("bs_js_null_undefined").fromOption(
                b("bs_js_dict").get(
                  b("ServicesCalendarSyncType"),
                  d.calendar_sync_type
                )
              ),
              c(d),
            ];
      d = a.native_component_flow_request;
      var e;
      if (d == null) e = null;
      else {
        var f = d.page,
          h = d.page,
          i = d.page,
          j;
        if (i == null) j = void 0;
        else {
          i = i.profile_picture;
          j = i == null ? void 0 : i.uri;
        }
        i = d.suggested_time_range;
        var k = d.user,
          l = d.user,
          m = d.job_application,
          n = d.user,
          o;
        if (n == null) o = void 0;
        else {
          n = n.profile_picture;
          o = n == null ? void 0 : n.uri;
        }
        e = {
          additionalInfo: d.additional_info,
          appointmentAddress: d.appointment_address,
          archivedStatus: d.archived_status,
          availability: d.availability,
          consumer_phone_number: d.consumer_phone_number,
          hasSavedToCalendar: d.has_saved_to_calendar,
          recurMessage: d.recur_message,
          requestFlowType: d.request_flow_type,
          generalInfo: d.service_general_info,
          id: d.id,
          pageID: f == null ? void 0 : f.id,
          pageName: h == null ? void 0 : h.name,
          pageProfilePic: j,
          preferredTimeRange: i == null ? null : { end: i.end, start: i.start },
          productItems: d.services_product_items,
          reminderBubbleText: d.reminder_bubble_text,
          requestAdminApprovalType: d.request_admin_approval_type,
          requestedTime: d.requested_time,
          specialRequest: d.special_request,
          status: d.booking_status_value,
          statusLabel: d.status,
          userID: k == null ? void 0 : k.id,
          username: l == null ? void 0 : l.short_name,
          jobApplicationID: m == null ? void 0 : m.id,
          userProfilePic: o,
        };
      }
      n = a.message_bubble_type;
      var p;
      switch (n) {
        case "ATTENDANCE_UPDATE":
          p = ["Attendance Update", g._("Attendance-Update")];
          break;
        case "CANCELLED":
          p = ["Cancelled", g._("Canceled")];
          break;
        case "DECLINED":
          p = ["Declined", g._("Declined")];
          break;
        case "NO_SHOW":
          p = ["No Show", g._("No-Show")];
          break;
        case "REQUESTED":
          p = ["Requested", g._("Requested")];
          break;
        case "SCHEDULEED":
          p = ["Scheduled", g._("Scheduled")];
          break;
        default:
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Erroneous target status",
            Error: new Error(),
          };
      }
      f = a.user;
      return {
        id: a.id,
        pageID: c[0],
        calendarSyncType: c[1],
        userID: f == null ? "0" : f.id,
        status: p[0],
        statusLabel: p[1],
        ls_xma_title: a.ls_xma_title,
        ls_xma_subtitle: a.ls_xma_subtitle,
        viewerID: b("CurrentUser").getAccountID(),
        requestMetadata: e,
        servicesVerticalInfo: c[2],
      };
    }
    function t(a) {
      return {
        id: a.id,
        page_id: a.page.id,
        user_id: a.consumer.id,
        time_ranges: a.formatted_available_time_ranges.map(function (a) {
          return { start: a.start, end: a.end };
        }),
        has_booking_request_created: a.has_booking_request_created,
      };
    }
    function u(a) {
      return { id: a.id };
    }
    function v(a) {
      return {
        live_location_id: a.live_location_id,
        is_expired: a.is_expired,
        expiration_time: a.expiration_time,
        sender: a.sender,
        coordinate: a.coordinate,
        location_title: a.location_title,
        sender_destination: a.sender_destination,
        stop_reason: a.stop_reason,
      };
    }
    function w(a) {
      return {
        sender_wec_number: a.sender_wec_number,
        sender_wec_number_formated: a.sender_wec_number_formated,
        sender_wec_number_fbid: a.sender_wec_number_fbid,
        sender_wec_name: a.sender_wec_name,
      };
    }
    function x(a) {
      var b = a.preview;
      b = b == null ? null : b.uri;
      var c = a.large_preview;
      c = c == null ? null : c.uri;
      return {
        id: a.id,
        extension: a.extension,
        preview: a.preview,
        large_preview: a.large_preview,
        attach_type: "photo",
        large_preview_url: c,
        preview_url: b,
      };
    }
    function y(a) {
      return {
        id: a.id,
        name: a.filename,
        url_shimhash: a.url_shimhash,
        attach_type: b("MercuryAttachmentType").AUDIO,
        url: a.playable_url,
        extension: a.extension,
        filesize: a.filesize,
        duration: a.duration,
      };
    }
    function z(a) {
      var b = a.first_metaline;
      return {
        desc: a.description,
        id: a.id,
        image_aspect_ratio: a.image_aspect_ratio,
        item_url: a.target_url,
        metalines: b == null ? {} : { metaline_1: b },
        name: a.name,
        source: a.source_name,
        text: a.description,
        thumb_url: a.image_url,
        title: a.name,
        default_action: a.default_action,
        call_to_actions: i(a.call_to_actions),
        media_blob_attachments: a.media_blob_attachments,
      };
    }
    function A(a) {
      var b = a.business_items.nodes.map(z),
        c = i(a.call_to_actions);
      return { message: a.message, call_to_actions: c, items: b };
    }
    function B(a) {
      return {
        message: a.message,
        call_to_actions: i(a.call_to_actions),
        items: a.promotion_items.nodes.map(z),
      };
    }
    function C(a) {
      var c = a.structured_address.streets,
        d = a.partner_logo;
      return {
        account_holder_name: a.account_holder_name,
        adjustments: a.adjustments.map(function (a) {
          return {
            adjustment_type: a.adjustment_type,
            display_adjustment_amount: a.adjustment_amount,
          };
        }),
        cancellation_url: a.cancellation_url,
        items: a.items.nodes.map(z),
        merchant_name: a.merchant_name,
        messenger_commerce_bubble_type: b("bs_js_null_undefined").fromOption(
          b("bs_js_dict").get(
            b("MNCommerceBubbleType"),
            a.messenger_commerce_bubble_type
          )
        ),
        order_id: a.order_id,
        order_time: a.order_time,
        order_url: a.order_url,
        payment_method: a.payment_method,
        receipt_id: a.receipt_id,
        recipient_name: a.recipient_name,
        shipping_cost: a.shipping_cost,
        shipping_method: a.shipping_method,
        status: a.status,
        structured_address: {
          city: a.structured_address.city,
          state: a.structured_address.state,
          country: a.structured_address.country,
          postal_code: a.structured_address.postal_code,
          street_1: b("bs_caml_array").get(c, 0),
          street_2: b("bs_caml_array").get(c, 1),
        },
        subtotal: a.subtotal,
        total_cost: a.total_cost,
        total_tax: a.total_tax,
        partner_logo: d == null ? void 0 : d.uri,
      };
    }
    function D(a, c) {
      return {
        payment_modules_client: b("bs_js_null_undefined").fromOption(
          b("bs_js_dict").get(
            b("PaymentModulesClient"),
            c.payment_modules_client
          )
        ),
        is_viewer_seller: c.is_viewer_seller,
        payment_snippet: c.payment_snippet,
        item_list: c.item_list.map(function (a) {
          return {
            item_id: a.item_id,
            name: a.name,
            subtitle: a.subtitle,
            description: a.description,
            unit_price: a.unit_price,
            image_urls: a.images.map(function (a) {
              return a.uri;
            }),
            quantity: a.quantity,
          };
        }),
        components: c.components,
        payment_call_to_actions: c.payment_call_to_actions,
        click_action: c.click_action,
        summary_action: c.summary_action,
        actor_id: a,
        invoicer_id: c.invoicer_id,
        is_last_attachment: c.is_last_attachment,
        payment_total: c.payment_total,
        product_detail: c.product_detail,
        payment_status_icon: c.payment_status_icon,
        user_facing_payment_status: c.user_facing_payment_status,
        payment_sub_statuses: c.payment_sub_statuses,
        should_show_new_xma: c.should_show_new_xma,
        buyer_name: c.buyer_name,
      };
    }
    var E = function (a) {
      var c = b("LeadGenInfoFieldTypes"),
        d = {},
        e = [];
      for (
        var a = a.field_data_list,
          f = Array.isArray(a),
          g = 0,
          a = f
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var h;
        if (f) {
          if (g >= a.length) break;
          h = a[g++];
        } else {
          g = a.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        var i = h.field_type,
          j = h.label;
        h = h.values;
        i === c.CUSTOM || i === c.ZIP
          ? e.push({ label: j, values: h })
          : (d[i] = { label: j, values: h });
      }
      d.questions = e;
      return d;
    };
    function F(a, b) {
      var c = b.invite_recipient;
      c = c == null ? null : c.id;
      var d = b.invite_sender;
      d = d == null ? null : d.id;
      return {
        quick_invite_id: b.id,
        recipient_id: c,
        sender_id: d,
        is_viewer_recipient: a === c,
      };
    }
    function G(a) {
      var b = function (a) {
          if (a == null) return null;
          else return a.uri;
        },
        c = a.listing_category;
      c = c == null ? [null, null] : [c.offer_image, c.request_image];
      return {
        listingType: a.listing_type,
        mapURI: b(a.map_image),
        offerURI: b(c[0]),
        requestURI: b(c[1]),
      };
    }
    function H(a) {
      return {
        sender: a.sender,
        receiver: a.receiver,
        transfer_id: a.transfer_id,
        bubbleView: a.bubble_view,
      };
    }
    function I(a) {
      var c = a.receiver_profile,
        d;
      if (c == null) d = null;
      else {
        var e = c.profile_picture;
        d = {
          id: c.id,
          name: c.short_name,
          full_name: c.name,
          picture: e == null ? null : e.uri,
          profile_url: c.url,
        };
      }
      e = a.sender;
      if (e == null) c = {};
      else {
        var f = e.profile_picture;
        c = {
          id: e.id,
          name: e.name,
          full_name: e.full_name,
          picture: f == null ? null : f.uri,
          profile_uri: e.url,
        };
      }
      f = a.transfer_context;
      if (f == null) e = [null, null];
      else {
        var g = f.transfer_theme;
        e = [
          f.memo_images.map(function (a) {
            a = a.image;
            if (a == null) return null;
            else return a.uri;
          }),
          g == null ? null : g.id,
        ];
      }
      f = a.platform_item;
      g =
        f == null
          ? null
          : {
              name: f.name,
              description: f.description,
              image: f.photos.map(function (a) {
                a = a.image;
                if (a == null) return null;
                else return a.uri;
              }),
              refURL: f.url,
            };
      f = a.amount_fb_discount;
      return {
        sender: c,
        amountWithSymbol: a.transaction_amount.formatted_amount,
        status: b("bs_js_null_undefined").fromOption(
          b("bs_js_dict").get(b("P2PTransferStatus"), a.transfer_status)
        ),
        receiver: d,
        transfer_id: a.transfer_id,
        completedTime: a.completedTime,
        updatedTime: a.updatedTime,
        creationTime: a.creationTime,
        amount: a.transaction_amount.amount,
        memoText: a.memo_text,
        memoPhotoURLs: e[0],
        themeID: e[1],
        discountAmount: f == null ? null : f.formatted,
        fundsAvailability: b("bs_js_null_undefined").fromOption(
          b("bs_js_dict").get(b("FundsAvailability"), a.funds_availability)
        ),
        groupThreadFBID: a.group_thread_fbid,
        platform_item: g,
        statusDescription: { markup: a.status_description },
        bubbleView: a.bubble_view,
        currencyCode: a.currency_amount.currency,
      };
    }
    function J(a) {
      var c = a.requester,
        d;
      if (c == null) d = void 0;
      else {
        var e = c.profile_picture;
        d = {
          id: c.id,
          name: c.short_name,
          full_name: c.name,
          picture: e == null ? null : e.uri,
          profile_url: c.url,
        };
      }
      e = a.requestee;
      if (e == null) c = void 0;
      else {
        var f = e.profile_picture;
        c = {
          id: e.id,
          name: e.short_name,
          full_name: e.name,
          picture: f == null ? null : f.uri,
          profile_url: e.url,
        };
      }
      f = b("bs_js_null_undefined").fromOption(
        b("bs_js_dict").get(b("P2PPaymentRequestStatus"), a.request_status)
      );
      e = a.transfer;
      e = e == null ? [null, ""] : [I(e), e.id];
      var g = a.request_theme;
      return {
        amount: a.transaction_amount.amount,
        amountWithSymbol: a.amount.formatted,
        requestee: c,
        requester: d,
        currentStatus: f,
        currency: a.amount.currency,
        creationTime: a.creation_time,
        groupThreadFBID: a.group_thread_fbid,
        id: a.id,
        memoText: a.memo_text,
        themeID: g == null ? null : g.id,
        transfer: e[0],
        transferID: e[1],
        updatedTime: a.updated_time,
        bubbleView: a.bubble_view,
        statusDescription: { markup: a.status_description },
      };
    }
    function K(a) {
      var b = J({
        amount: a.amount,
        transaction_amount: a.transaction_amount,
        requester: a.requester,
        requestee: a.requestee,
        request_status: a.request_status,
        request_theme: a.request_theme,
        id: a.id,
        memo_text: a.memo_text,
        transfer: a.transfer,
        creation_time: a.creation_time,
        group_thread_fbid: a.group_thread_fbid,
        updated_time: a.updated_time,
        bubble_view: a.bubble_view,
        status_description: a.status_description,
      });
      a = { individualRequests: a.individual_requests.map(J) };
      return Object.assign(b, a);
    }
    function L(a, c, d) {
      var e = c.media,
        f = e == null ? null : e.animated_image,
        g = e == null ? null : e.image,
        h = {};
      c.properties.forEach(function (a) {
        var b = a.value;
        h[a.key] = b == null ? null : b.text;
      });
      var i = c.target,
        z;
      if (i == null) z = null;
      else
        switch (i.TAG | 0) {
          case 0:
            z = G(i._0);
            break;
          case 1:
            z = H(i._0);
            break;
          case 2:
            z = I(i._0);
            break;
          case 3:
            z = K(i._0);
            break;
          case 4:
            z = D(a, i._0);
            break;
          case 5:
            z = B(i._0);
            break;
          case 6:
            z = A(i._0);
            break;
          case 8:
            z = E(i._0);
            break;
          case 9:
            z = v(i._0);
            break;
          case 10:
            z = F(a, i._0);
            break;
          case 11:
            z = s(i._0);
            break;
          case 12:
            z = t(i._0);
            break;
          case 13:
            z = u(i._0);
            break;
          case 14:
            var J = i._0,
              L = J.genie_sender;
            L =
              L == null
                ? [null, null]
                : [L.messaging_actor.id, L.messaging_actor.name];
            var N = L[0],
              O = {
                action_links: [],
                messaging_attribution: null,
                messenger_call_to_actions: [],
                xma_layout_info: null,
                deduplication_key: null,
                description: null,
                media: null,
                properties: [],
                source: null,
                style_list: [],
                title_with_entities: null,
                url: null,
                subattachments: [],
                target: null,
                messenger_generic_xma_template_extra_info: null,
              },
              P = c.media,
              Q;
            if (P == null) Q = null;
            else {
              P = P.pack;
              if (P == null) {
                P = J.story_attachment;
                Q =
                  P == null || d == null
                    ? null
                    : M(a, {
                        legacy_attachment_id: N,
                        story_attachment: {
                          action_links: d.action_links,
                          messaging_attribution: d.messaging_attribution,
                          messenger_call_to_actions:
                            d.messenger_call_to_actions,
                          xma_layout_info: d.xma_layout_info,
                          deduplication_key: d.deduplication_key,
                          description: d.description,
                          media: d.media,
                          properties: d.properties,
                          source: d.source,
                          style_list: d.style_list,
                          title_with_entities: d.title_with_entities,
                          url: d.url,
                          subattachments: d.subattachments,
                          target: d.target,
                          messenger_generic_xma_template_extra_info:
                            d.messenger_generic_xma_template_extra_info,
                        },
                        genie_attachment: {
                          genie_message: { story_attachment: O },
                        },
                      });
              } else
                Q =
                  d == null
                    ? null
                    : M(a, {
                        legacy_attachment_id: N,
                        story_attachment: O,
                        genie_attachment: {
                          genie_message: { story_attachment: O },
                        },
                      });
            }
            z = { genie_id: N, genie_name: L[1], attachment: Q };
            break;
          case 16:
            z = m(i._0);
            break;
          case 18:
            z = r(i._0);
            break;
          case 19:
            z = n(i._0);
            break;
          case 20:
            z = o(i._0);
            break;
          case 21:
            z = C(i._0);
            break;
          case 23:
            z = l(i._0);
            break;
          case 24:
            z = k(a, i._0);
            break;
          case 36:
            z = w(i._0);
            break;
          case 37:
            z = x(i._0);
            break;
          case 38:
            z = y(i._0);
            break;
          case 39:
            z = p(i._0);
            break;
          case 40:
            z = q(i._0);
            break;
          default:
            z = i._0;
        }
      J = c.target;
      P = J == null || J.TAG !== 5 ? null : 0;
      d = c.description;
      O = c.source;
      N = c.title_with_entities;
      return {
        description: d == null ? null : d.text,
        media: {
          animated_image: f == null ? null : f.uri,
          animated_image_size:
            f == null
              ? { height: null, width: null }
              : { height: f.height, width: f.width },
          image: g == null ? null : g.uri,
          image_size:
            g == null
              ? { height: null, width: null }
              : { height: g.height, width: g.width },
          duration: e == null ? null : e.playable_duration,
          playable: e == null ? null : e.is_playable,
          source: e == null ? null : e.playable_url,
        },
        source: O == null ? null : O.text,
        style_list: c.style_list,
        title: N == null ? null : N.text,
        action_links: j(c.action_links),
        messaging_attribution: c.messaging_attribution,
        messenger_ctas: c.messenger_call_to_actions.map(function (a) {
          return {
            id: a.id,
            page_id: b("bs_belt_Option").getWithDefault(
              b("bs_caml_option").nullable_to_opt(a.page_id),
              ""
            ),
            action_title: a.title,
            action_url: a.action_link,
            action_open_type: b("bs_js_null_undefined").fromOption(
              b("bs_js_dict").get(
                b("MNCommerceCallToActionType"),
                a.action_open_type
              )
            ),
            is_high_confidence: b("bs_belt_Option").getWithDefault(
              b("bs_caml_option").nullable_to_opt(a.is_high_confidence),
              !1
            ),
            is_mutable_by_server: a.is_mutable_by_server,
            native_url: a.native_url,
            is_disabled: a.is_disabled,
            webview_metadata: {
              fallback_url: a.webview_metadata.fallback_url,
              messenger_extensions: a.webview_metadata.messenger_extensions,
              webview_height_ratio: a.webview_metadata.webview_height_ratio,
              webview_share_button: a.webview_metadata.webview_share_button,
            },
          };
        }),
        xma_layout_info: c.xma_layout_info,
        properties: h,
        uri: c.url,
        deduplication_key: c.deduplication_key,
        target: z,
        label: P,
        messenger_generic_xma_template_extra_info:
          c.messenger_generic_xma_template_extra_info,
      };
    }
    function M(a, c) {
      var d = c.genie_attachment,
        e;
      if (d == null) e = null;
      else {
        d = d.genie_message;
        if (d == null) e = null;
        else {
          d = d.story_attachment;
          e =
            d == null
              ? null
              : {
                  description: d.description,
                  media: d.media,
                  source: d.source,
                  style_list: d.style_list,
                  title_with_entities: d.title_with_entities,
                  properties: d.properties,
                  url: d.url,
                  deduplication_key: d.deduplication_key,
                  action_links: d.action_links,
                  messaging_attribution: d.messaging_attribution,
                  messenger_call_to_actions: d.messenger_call_to_actions,
                  xma_layout_info: d.xma_layout_info,
                  messenger_generic_xma_template_extra_info:
                    d.messenger_generic_xma_template_extra_info,
                  target: d.target,
                  subattachments: d.subattachments,
                };
        }
      }
      d = c.story_attachment;
      var f;
      if (d == null) f = null;
      else {
        var g = {
          description: null,
          media: null,
          source: null,
          style_list: [],
          title_with_entities: null,
          properties: [],
          url: null,
          deduplication_key: null,
          action_links: [],
          messaging_attribution: null,
          messenger_call_to_actions: [],
          xma_layout_info: null,
          target: null,
          subattachments: [],
          messenger_generic_xma_template_extra_info: null,
        };
        c = {
          share_id: c.legacy_attachment_id,
          subattachments: d.subattachments.map(function (b) {
            return L(a, b, g);
          }),
        };
        var h = {
          description: d.description,
          media: d.media,
          source: d.source,
          style_list: d.style_list,
          title_with_entities: d.title_with_entities,
          properties: d.properties,
          url: d.url,
          deduplication_key: d.deduplication_key,
          action_links: d.action_links,
          messaging_attribution: d.messaging_attribution,
          messenger_call_to_actions: d.messenger_call_to_actions,
          xma_layout_info: d.xma_layout_info,
          target: d.target,
          messenger_generic_xma_template_extra_info:
            d.messenger_generic_xma_template_extra_info,
        };
        d =
          e == null
            ? {
                description: d.description,
                media: d.media,
                source: d.source,
                style_list: d.style_list,
                title_with_entities: d.title_with_entities,
                properties: d.properties,
                url: d.url,
                deduplication_key: d.deduplication_key,
                action_links: d.action_links,
                messaging_attribution: d.messaging_attribution,
                messenger_call_to_actions: d.messenger_call_to_actions,
                xma_layout_info: d.xma_layout_info,
                target: d.target,
                subattachments: d.subattachments,
                messenger_generic_xma_template_extra_info:
                  d.messenger_generic_xma_template_extra_info,
              }
            : {
                description: e.description,
                media: e.media,
                source: e.source,
                style_list: e.style_list,
                title_with_entities: e.title_with_entities,
                properties: e.properties,
                url: e.url,
                deduplication_key: e.deduplication_key,
                action_links: e.action_links,
                messaging_attribution: e.messaging_attribution,
                messenger_call_to_actions: e.messenger_call_to_actions,
                xma_layout_info: e.xma_layout_info,
                target: e.target,
                subattachments: e.subattachments,
                messenger_generic_xma_template_extra_info:
                  e.messenger_generic_xma_template_extra_info,
              };
        f = Object.assign(c, L(a, h, d));
      }
      return {
        app_attribution: null,
        attach_type: b("MercuryAttachmentType").SHARE,
        name: null,
        url: null,
        rel: null,
        preview_url: null,
        preview_width: null,
        preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        large_preview_height: null,
        icon_type: null,
        metadata: null,
        share: f,
        thumbnail_url: null,
      };
    }
    f._getCallToActions = i;
    f._getActionLinks = j;
    f._getColor = a;
    f._getLogo = c;
    f._getPageTarget = k;
    f._getGroupCommerceProductItemTarget = l;
    f._getExternalSongTarget = m;
    f._getAgentSuggestionItemTarget = n;
    f._getFundraiserTarget = o;
    f._getWECFileTarget = p;
    f._getWECMessageVideoTarget = q;
    f._getRetailItemTarget = r;
    f._getPagesPlatformBookingMessageTarget = s;
    f._getServicesAppointmentAvailabilityTarget = t;
    f._getServicesGenericAdminTextTarget = u;
    f._getMessageLiveLocationTarget = v;
    f._getWECMessageTarget = w;
    f._getWECMessageImageTarget = x;
    f._getWECMessageAudioTarget = y;
    f._getBusinessRetailItem = z;
    f._getMessengerBusinessMessageTarget = A;
    f._getMessengerRetailPromotionTarget = B;
    f._getMessengerRetailReceiptTarget = C;
    f._getPagesPlatformAttachmentTarget = D;
    f._getPagesPlatformLeadGenInfoTarget = E;
    f._getQuickInviteTarget = F;
    f._getCrisisListingTarget = G;
    f._getMoneyTransferTarget = H;
    f._getP2PTransferTarget = I;
    f._getP2PTransferRequestTarget = J;
    f._getP2PTransferRequestWithIndividualRequests = K;
    f.transformStoryAttachment = L;
    f.getExtensibleAttachmentPayload = M;
  },
  null
);
__d(
  "MessengerAttachmentTransformer.bs",
  [
    "fbt",
    "MercuryAttachmentContentType",
    "MercuryAttachmentType",
    "MessageSharedMediaIDStore.bs",
    "MessengerStoryAttachmentTransformer.bs",
    "bs_caml",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      if (a.is_malicious) {
        var c = g._("This attachment has been marked as malicious.");
        return {
          app_attribution: null,
          icon_type: b("MercuryAttachmentContentType").UNKNOWN,
          mime_type: null,
          metadata: null,
          name: null,
          preview_height: null,
          preview_url: null,
          preview_width: null,
          rel: null,
          share: null,
          thumbnail_url: null,
          url: null,
          attach_type: b("MercuryAttachmentType").ERROR,
          error_msg: c,
          message_file_fbid: null,
          url_shimhash: null,
          url_skipshim: null,
          preview: null,
        };
      }
      c = a.attribution_app;
      var d;
      if (c == null) d = null;
      else {
        var e = c.square_logo;
        d = {
          id: c.id,
          icon_url: e == null ? null : e.uri,
          metadata: a.attribution_metadata,
          name: c.name,
        };
      }
      e = a.url;
      return {
        app_attribution: d,
        icon_type: a.content_type,
        mime_type: a.mimetype,
        metadata: null,
        name: a.filename,
        preview_height: null,
        preview_url: a.preview_url,
        preview_width: null,
        rel: "ignore",
        share: null,
        thumbnail_url: null,
        url: e == null ? null : e,
        attach_type: b("MercuryAttachmentType").FILE,
        error_msg: void 0,
        message_file_fbid: a.message_file_fbid,
        url_shimhash: a.url_shimhash,
        url_skipshim: a.url_skipshim,
        preview: a.preview,
      };
    }
    function i(a, c, d) {
      var e = a.chat_image;
      e = e == null ? [null, null, null] : [e.uri, e.width, e.height];
      var f = e[0],
        g = a.chat_image;
      g = g == null ? null : { width: g.width, height: g.height };
      var h = a.large_image;
      h =
        h == null
          ? [null, null]
          : [h.uri, { width: h.width, height: h.height }];
      var i = a.inbox_image;
      i =
        i == null
          ? [null, null]
          : [i.uri, { width: i.width, height: i.height }];
      var j = a.attribution_app,
        k;
      if (j == null) k = null;
      else {
        var l = j.square_logo;
        k = {
          id: j.id,
          icon_url: l == null ? null : l.uri,
          metadata: a.attribution_metadata,
          name: j.name,
        };
      }
      return {
        app_attribution: k,
        attach_type: b("MercuryAttachmentType").VIDEO,
        name: a.filename,
        url: a.playable_url,
        rel: "async",
        preview_url: f,
        preview_width: e[1],
        preview_height: e[2],
        large_preview_url: null,
        large_preview_width: null,
        large_preview_height: null,
        icon_type: b("MercuryAttachmentContentType").VIDEO,
        metadata: {
          fbid: a.legacy_attachment_id,
          render_as_sticker: a.video_type === "SPEAKING_STICKER",
          dimensions: {
            width: a.original_dimensions.x,
            height: a.original_dimensions.y,
          },
          duration: a.playable_duration_in_ms,
          large_size: h[1],
          large_preview: h[0],
          chat_size: g,
          chat_preview: f,
          inbox_size: i[1],
          inbox_preview: i[0],
          pageid: d ? c : void 0,
        },
        thumbnail_url: f,
        share: null,
      };
    }
    function j(a) {
      var c = a.attribution_app,
        d;
      if (c == null) d = null;
      else {
        var e = c.square_logo;
        d = {
          id: c.id,
          icon_url: e == null ? null : e.uri,
          metadata: a.attribution_metadata,
          name: c.name,
        };
      }
      return {
        app_attribution: d,
        attach_type: b("MercuryAttachmentType").FILE,
        name: a.filename,
        url: a.playable_url,
        rel: "ignore",
        preview_url: null,
        preview_width: null,
        preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        large_preview_height: null,
        icon_type: b("MercuryAttachmentContentType").MUSIC,
        metadata: {
          duration: a.playable_duration_in_ms,
          isVoicemail: a.is_voicemail ? "1" : "0",
          type:
            a.audio_type === "VOICE_MESSAGE"
              ? "fb_voice_message"
              : a.audio_type === "VOICE_MESSAGE_WITH_TRANSCRIPT"
              ? "fb_voice_message_with_transcript"
              : "file_attachment",
        },
        thumbnail_url: null,
        share: null,
        url_shimhash: a.url_shimhash,
        url_skipshim: a.url_skipshim,
      };
    }
    function k(a, c, d) {
      var e = a.preview_image;
      e = e == null ? [null, null, null] : [e.uri, e.width, e.height];
      var f = a.animated_image;
      f = f == null ? null : f.uri;
      var g = a.attribution_app,
        h;
      if (g == null) h = null;
      else {
        var i = g.square_logo;
        h = {
          id: g.id,
          icon_url: i == null ? null : i.uri,
          metadata: a.attribution_metadata,
          name: g.name,
        };
      }
      return {
        app_attribution: h,
        attach_type: b("MercuryAttachmentType").ANIMATED_IMAGE,
        name: a.filename,
        url: f,
        rel: "async",
        preview_url: e[0],
        preview_width: e[1],
        preview_height: e[2],
        large_preview_url: null,
        large_preview_width: null,
        large_preview_height: null,
        icon_type: b("MercuryAttachmentContentType").PHOTO,
        metadata: {
          fbid: a.legacy_attachment_id,
          image: f,
          dimensions:
            String(a.original_dimensions.x) +
            ("," + String(a.original_dimensions.y)),
          pageid: d ? c : void 0,
        },
        thumbnail_url: f,
        title: a.title,
        share: null,
      };
    }
    function l(a) {
      var c =
          a.original_extension === "gif"
            ? b("MercuryAttachmentType").ANIMATED_IMAGE
            : a.render_as_sticker
            ? b("MercuryAttachmentType").THIRDPARTYSTICKER
            : b("MercuryAttachmentType").PHOTO,
        d = a.preview;
      d = d == null ? [null, null, null] : [d.uri, d.width, d.height];
      if (c === b("MercuryAttachmentType").PHOTO) {
        var e = a.large_preview;
        e = e == null ? [null, null, null] : [e.uri, e.width, e.height];
      } else e = [null, null, null];
      var f = a.attribution_app,
        g;
      if (f == null) g = null;
      else {
        var h = f.square_logo;
        g = {
          id: f.id,
          icon_url: h == null ? null : h.uri,
          metadata: a.attribution_metadata,
          name: f.name,
        };
      }
      h = a.thumbnail;
      return {
        app_attribution: g,
        attach_type: c,
        blurred_image_uri: a.blurred_image_uri,
        name: a.filename,
        url: null,
        rel: "async",
        preview_url: d[0],
        preview_width: d[1],
        preview_height: d[2],
        large_preview_url: e[0],
        large_preview_width: e[1],
        large_preview_height: e[2],
        icon_type: b("MercuryAttachmentContentType").PHOTO,
        metadata: {
          fbid: a.legacy_attachment_id,
          dimensions:
            String(a.original_dimensions.x) +
            ("," + String(a.original_dimensions.y)),
        },
        thumbnail_url: h == null ? null : h.uri,
        share: null,
        photo_encodings: a.photo_encodings,
      };
    }
    function m(a, c) {
      var d = a,
        e = c;
      if (a >= c) {
        a = b("bs_caml").caml_float_min(120, d / 2);
        c = a / (d / 2);
        return [a | 0, ((e / 2) * c) | 0];
      }
      a = b("bs_caml").caml_float_min(120, e / 2);
      c = a / (e / 2);
      return [((d / 2) * c) | 0, a | 0];
    }
    function n(a) {
      var c = m(a.width, a.height),
        d = a.pack,
        e = a.sprite_image,
        f = a.sprite_image_2x,
        g = a.padded_sprite_image,
        h = a.padded_sprite_image_2x;
      return {
        app_attribution: null,
        attach_type: b("MercuryAttachmentType").STICKER,
        name: null,
        url: a.url,
        rel: null,
        preview_url: null,
        preview_width: null,
        preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        large_preview_height: null,
        icon_type: b("MercuryAttachmentContentType").UNKNOWN,
        metadata: {
          accessibilityLabel: a.label,
          stickerID: a.id,
          packID: d == null ? null : d.id,
          frameCount: a.frame_count,
          frameRate: a.frame_rate,
          framesPerRow: a.frame_count > 1 ? a.frames_per_row : 1,
          framesPerCol: a.frame_count > 1 ? a.frames_per_column : 1,
          height: c[1],
          width: c[0],
          spriteURI: e == null ? null : e.uri,
          spriteURI2x: f == null ? null : f.uri,
          paddedSpriteURI: g == null ? null : g.uri,
          paddedSpriteURI2x: h == null ? null : h.uri,
          thumbnail_url: null,
          share: null,
        },
      };
    }
    function o(a, c) {
      if (!(c == null))
        return b("MessageSharedMediaIDStore.bs").setMessageIDForAttachmentID(
          a,
          c
        );
    }
    function a(a, c, d, e) {
      var f = [],
        g = {
          id: "",
          pack: null,
          label: "",
          frame_count: 0,
          frame_rate: 0,
          frames_per_row: 0,
          frames_per_column: 0,
          height: 0,
          padded_sprite_image: null,
          padded_sprite_image_2x: null,
          sprite_image_2x: null,
          sprite_image: null,
          url: null,
          width: 0,
        },
        m = c.extensible_attachment,
        p;
      if (m == null) p = g;
      else {
        m = m.story_attachment;
        if (m == null) p = g;
        else {
          m = m.media;
          p =
            m == null
              ? g
              : {
                  id: m.id,
                  pack: m.pack,
                  label: m.label,
                  frame_count: m.frame_count,
                  frame_rate: m.frame_rate,
                  frames_per_row: m.frames_per_row,
                  frames_per_column: m.frames_per_column,
                  height: m.height,
                  padded_sprite_image: m.padded_sprite_image,
                  padded_sprite_image_2x: m.padded_sprite_image_2x,
                  sprite_image_2x: m.sprite_image_2x,
                  sprite_image: m.sprite_image,
                  url: m.url,
                  width: m.width,
                };
        }
      }
      g = p.id;
      !(g == null) && g !== "" && f.push(n(p));
      m = c.extensible_attachment;
      m == null ||
        f.push(
          b(
            "MessengerStoryAttachmentTransformer.bs"
          ).getExtensibleAttachmentPayload(a, m)
        );
      g = c.sticker;
      g == null || f.push(n(g));
      p = c.blob_attachments;
      p == null ||
        p.forEach(function (b) {
          switch (b.TAG | 0) {
            case 0:
              var c = b._0;
              o(c.legacy_attachment_id, d);
              f.push(l(c));
              return;
            case 1:
              c = b._0;
              o(c.legacy_attachment_id, d);
              f.push(k(c, a, e));
              return;
            case 2:
              f.push(j(b._0));
              return;
            case 3:
              c = b._0;
              o(c.legacy_attachment_id, d);
              f.push(i(c, a, e));
              return;
            case 4:
              f.push(h(b._0));
              return;
          }
        });
      return f;
    }
    f._getFilePayload = h;
    f._getVideoPayload = i;
    f._getAudioPayload = j;
    f._getAnimatedImagePayload = k;
    f._getImagePayload = l;
    f._getStickerDimensions = m;
    f._getStickerPayload = n;
    f._storeAttachmentMapping = o;
    f.transformAttachment = a;
  },
  null
);
__d(
  "MessengerGroupAdminModelStatus",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      REQUIRED: "required",
      OPTIONAL: "optional",
      NOT_SUPPORTED: "not_supported",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerGroupAdminModelStatus.bs",
  ["MessengerGroupAdminModelStatus"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a == null) return null;
      a = a.toUpperCase();
      switch (a) {
        case "NOT_SUPPORTED":
          return b("MessengerGroupAdminModelStatus").NOT_SUPPORTED;
        case "OPTIONAL":
          return b("MessengerGroupAdminModelStatus").OPTIONAL;
        case "REQUIRED":
          return b("MessengerGroupAdminModelStatus").REQUIRED;
        default:
          return null;
      }
    }
    f.fromNullableString = a;
  },
  null
);
__d(
  "MessengerGroupsSyncStatus",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      PENDING_OPT_IN: "PENDING_OPT_IN",
      OPT_IN: "OPT_IN",
      PENDING_OPT_OUT: "PENDING_OPT_OUT",
      OPT_OUT: "OPT_OUT",
      UNSET: "UNSET",
      UNSUPPORTED: "UNSUPPORTED",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerGroupsSyncStatus.bs",
  ["MessengerGroupsSyncStatus"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a == null) return null;
      switch (a) {
        case "OPT_IN":
          return b("MessengerGroupsSyncStatus").OPT_IN;
        case "OPT_OUT":
          return b("MessengerGroupsSyncStatus").OPT_OUT;
        case "PENDING_OPT_IN":
          return b("MessengerGroupsSyncStatus").PENDING_OPT_IN;
        case "PENDING_OPT_OUT":
          return b("MessengerGroupsSyncStatus").PENDING_OPT_OUT;
        case "UNSET":
          return b("MessengerGroupsSyncStatus").UNSET;
        case "UNSUPPORTED":
          return b("MessengerGroupsSyncStatus").UNSUPPORTED;
        default:
          return null;
      }
    }
    f.fromNullableString = a;
  },
  null
);
__d(
  "InstantGameUpdateXMATUpdateType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      UNKNOWN: "unknown",
      GAME_SCORE: "game_score",
      CUSTOM_MESSAGE: "custom_message",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MNCommerceMessageType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      TEXT: "text",
      IMAGE: "image",
      VIDEO: "video",
      AUDIO: "audio",
      FILE: "file",
      ROBOT_TEXT: "robot_text",
      LOCATION: "location",
      FORCED_FETCH_MESSAGE: "forced_fetch_message",
      SENDER_ACTION: "sender_action",
      SHOPS_PRODUCT: "shops_product",
      SHOPS_PRODUCT_HSCROLL: "shops_product_hscroll",
      RETAIL_PRODUCT_SUBSCRIPTION: "retail_product_subscription",
      RETAIL_PROMOTION: "retail_promotion",
      RETAIL_CANCELLATION: "retail_cancellation",
      RETAIL_SHIPMENT: "retail_shipment",
      SHIPMENT_TRACKING_EVENT: "shipment_tracking_event",
      AIRLINE_CHECKIN_REMINDER: "airline_checkin_reminder",
      AIRLINE_BOARDING_PASS: "airline_boarding_pass",
      AIRLINE_CHECKIN: "airline_checkin",
      AIRLINE_BOARDINGPASS: "airline_boardingpass",
      AIRLINE_UPDATE: "airline_update",
      AIRLINE_ITINERARY: "airline_itinerary",
      CONTENT_SUBSCRIPTION: "content_subscription",
      AD_ADMIN_TEXT: "ad_admin_text",
      AD_TEXT: "ad_text",
      AD_BUBBLE: "ad_bubble",
      NON_AD: "non_ad",
      UNKNOWN: "unknown",
      OTHER: "other",
      TEMPLATE: "template",
      OPEN_GRAPH: "open_graph",
      GENERIC: "generic",
      LIST: "list",
      COMPACT_LIST: "compact_list",
      BUTTON: "button",
      RECEIPT: "receipt",
      GENERIC_LEGACY: "generic_legacy",
      ICE_BREAKER: "ice_breaker",
      FALLBACK: "fallback",
      ONE_TIME_NOTIF_REQ: "one_time_notif_req",
      CUSTOMER_FEEDBACK: "customer_feedback",
      RIDE_INTENT: "ride_intent",
      RIDE_SIGNUP: "ride_signup",
      RIDE_WELCOME: "ride_welcome",
      RIDE_ORDER_CONFIRMATION: "ride_order_confirmation",
      RIDE_REQUESTED: "ride_requested",
      RIDE_DRIVER_ON_THE_WAY: "ride_driver_on_the_way",
      RIDE_NO_DRIVER: "ride_no_driver",
      RIDE_DRIVER_ARRIVING: "ride_driver_arriving",
      RIDE_DRIVER_CANCELED: "ride_driver_canceled",
      RIDE_RIDER_CANCELED: "ride_rider_canceled",
      RIDE_COMPLETE: "ride_complete",
      RIDE_ADMIN_MESSAGE: "ride_admin_message",
      RIDE_RECEIPT: "ride_receipt",
      RIDE_REENGAGEMENT_FIRST_RIDE: "ride_reengagement_first_ride",
      GET_RIDE: "give_get_ride",
      GIVE_RIDE: "send_give_get_ride",
      REFERER_PROMO: "referer_promo",
      INSTANT_GAMES_SHARE: "instant_games_share",
      INSTANT_GAMES_SCORE: "instant_games_score",
      INSTANT_GAMES_LIVE_STREAM: "instant_games_live_stream",
      INSTANT_GAMES_CUSTOM_UPDATE: "instant_games_custom_update",
      INSTANT_GAMES_CUSTOM_UPDATE_MEDIA: "instant_games_custom_update_media",
      INSTANT_GAMES_TOURNAMENT_UPDATE: "instant_games_tournament_update",
      GAMING_SERVICES_GAME_INVITE: "GAMING_SERVICES_GAME_INVITE",
      LINK: "link_admin_message",
      UNLINK: "unlink_admin_message",
      BLOCK_ALL: "block_all_admin_message",
      UNBLOCK_ALL: "unblock_all_admin_message",
      BLOCK_PROMOTION: "block_promotion_admin_message",
      UNBLOCK_PROMOTION: "unblock_promotion_admin_message",
      INITIAL_PROMOTION: "initial_promotion_admin_message",
      WEAK_CONSENT_ADMIN_MESSAGE: "weak_consent_admin_message",
      MESSENGER_TEAM_BOT_MESSAGE: "messenger_team_bot",
      MESSENGER_BOT_BASE_GENERIC: "messenger_bot_base_generic",
      COMMERCE_COMPACT_LIST: "commerce_compact_list",
      FEEDBACK: "feedback",
      FORM_PROGRESS: "form_progress",
      MEDIA: "media",
      PLACE_CARD: "place_card",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MercuryActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ADD_GROUP_ADMINS: "ma-type:add_group_admins",
      ADD_PARTICIPANTS: "ma-type:add-participants",
      ADS_CONVERSION_UPDATE: "ma-type:ads_conversion_update",
      APPROVAL_MODE: "ma-type:approval-mode",
      APPROVAL_QUEUE: "ma-type:approval-queue",
      BLOCK_STATUS_CHANGED: "ma-type:block-status-changed",
      BLURRED_IMAGE_STATUS: "ma-type:blurred-image-status",
      CANCEL_ATTACHMENT_PLACEHOLDER: "ma-type:cancel-attachment-placeholder",
      CHANGE_ARCHIVED_STATUS: "ma-type:change-archived-status",
      CHANGE_FLAG: "ma-type:change_flag",
      CHANGE_FOLDER: "ma-type:change-folder",
      CHANGE_MUTE_SETTINGS: "ma-type:change-mute-settings",
      CHANGE_PAGE_FOLLOW_UP_STATUS: "ma-type:change-page-follow-up-status",
      CHANGE_PINNED_STATUS: "ma-type:change-pinned-status",
      CHANGE_READ_STATUS: "ma-type:change_read_status",
      CONFIRM_ATTACHMENT_PLACEHOLDER: "ma-type:confirm-attachment-placeholder",
      CREATE_OMNI_M_SUGGESTIONS: "ma-type:create-omni-m-suggestions",
      CREATE_PAGE_ADMIN_NOTE: "ma-type:create-page-admin-note",
      DELETE_MESSAGES: "ma-type:delete-messages",
      DELETE_MONTAGE_MESSAGES: "ma-type:delete-montage-messages",
      DELETE_THREAD: "ma-type:delete-thread",
      DESCRIPTION_CHANGED: "ma-type:description-changed",
      EVENT_RSVP_CHANGED: "ma-type:event-rsvp-changed",
      GROUPS_SYNC_METADATA_UPDATE: "ma-type:groups-sync-metadata-update",
      GROUPS_SYNC_STATUS_CHANGED: "ma-type:groups-sync-status-changed",
      IS_PIN_PROTECTED: "ma-type:is_pin_protected",
      JOINABLE_MODE: "ma-type:joinable-mode",
      LIVE_LOCATION_UPDATE: "ma-type:live-location-update",
      LOG_MESSAGE: "ma-type:log-message",
      MARK_THREAD_SEEN: "ma-type:mark_thread_seen",
      MONTAGE_DIRECT_EXPIRE: "ma-type:montage-direct-expire",
      MOVE_PENDING_TO_INBOX: "ma-type:move_pending_to_inbox",
      MUTATE_TAGS: "ma-type:mutate_tags",
      NEW_MONTAGE_MESSAGE: "ma-type:new-montage-message",
      PIN_MESSAGE: "ma-type:pin-message",
      PROMOTE_GROUP_ADMINS: "ma-type:promote-group-admins",
      REACTION_UPDATE: "ma-type:reaction-update",
      REMOVE_GROUP_ADMINS: "ma-type:remove_group_admins",
      REMOVE_MESSAGE: "ma-type:remove-message",
      REPLACE_MESSAGE: "ma-type:replace-message",
      SEND_MESSAGE: "ma-type:send-message",
      SUGGESTED_REPLY_UPDATE: "ma-type:suggested_reply_update",
      UNPIN_MESSAGE: "ma-type:unpin-message",
      UNSUBSCRIBE_STATUS_UPDATE: "ma-type:unsubscribe-status-update",
      UNWRAP_MESSAGE: "ma-type:unwrap-message",
      UPDATE_COMM_ITEM_OWNER: "ma-type:update-comm-item-owner",
      UPDATE_COMM_STATUS: "ma-type:update-comm-status",
      UPDATE_CONNECTIVITY_STATUS: "ma-type:update-connectivity-status",
      UPDATE_CUSTOM_LIKE: "ma-type:update_custom_like",
      UPDATE_JOINABLE_LINK: "ma-type:update-joinable-link",
      UPDATE_RTC_CALL_DATA: "ma-type:update-rtc-call-data",
      UPDATE_SECONDARY_LANGUAGE_BODY: "ma-type:upade-secondary-language-body",
      UPDATE_SNIPPET: "ma-type:update-snippet",
      UPDATE_THREAD_THEME: "ma-type:update-thread-theme",
      USER_GENERATED_MESSAGE: "ma-type:user-generated-message",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MercuryLogMessageType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      SUBSCRIBE: "log:subscribe",
      UNSUBSCRIBE: "log:unsubscribe",
      VIDEO_CALL: "log:video-call",
      PHONE_CALL: "log:phone-call",
      THREAD_NAME: "log:thread-name",
      THREAD_IMAGE: "log:thread-image",
      SERVER_ERROR: "log:error-msg",
      LIVE_LISTEN: "log:live-listen",
      WALLPAPER: "log:wallpaper",
      ORION: "log:orion",
      SWITCH_TO_WORK: "log:switch",
      PAGE_REPLY: "log:page-reply",
      GENERIC_ADMIN_TEXT: "log:generic-admin-text",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MercurySourceType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BRAND_COLLABS_MANAGER: "source:brand_collabs_manager",
      CHAT_ORCA: "source:chat:orca",
      CHAT_LIGHT_SPEED: "source:chat:light_speed",
      CHAT_WEB_LIGHT_SPEED_INBOX: "source:chat:web:light_speed:inbox",
      CHAT_WEB_LIGHT_SPEED_CHAT: "source:chat:web:light_speed:chat",
      CHAT_IPHONE: "source:chat:iphone",
      CHAT_JABBER: "source:chat:jabber",
      CHAT_MEEBO: "source:chat:meebo",
      CHAT_WEB: "source:chat:web",
      CHAT_TEST: "source:chat:test",
      CHAT_FORWARD_DIALOG: "source:chat:forward",
      CHAT: "source:chat",
      CONTACT_ADD_MUTATION: "source:contact_add:graphql_mutation",
      CONTACT_ADD_CYMK: "source:contact_add:cymk_suggestion",
      CONTEXTUAL_PROFILE_MESSAGE: "source:contextual_profile:message",
      COWORKER_GROUP: "source:work:coworker_group",
      COVID_HUB_MENTAL_HEALTH_UNIT: "source:covid_hub_mental_health",
      CUSTOMER_CHAT_PLUGIN: "source:discovery:customer_chat_plugin",
      CUSTOMER_CHAT_PLUGIN_ESCALATION:
        "source:discovery:customer_chat_plugin_escalation",
      EMAIL: "source:email",
      EVENT_MESSAGE_BLAST: "source:event_message_blast",
      EVENT_TICKETING: "source:event_ticket",
      EVENT_REMINDERS: "source:event_reminders",
      WHITEHAT_FBDL: "source:whitehat_fbdl",
      GENERIC_ADMIN_TEXT: "source:generic_admin_text",
      GIGABOXX_API: "source:gigaboxx:api",
      GIGABOXX_BLAST: "source:gigaboxx:blast",
      GIGABOXX_EMAIL_REPLY: "source:gigaboxx:emailreply",
      GIGABOXX_MOBILE: "source:gigaboxx:mobile",
      GIGABOXX_WAP: "source:gigaboxx:wap",
      GIGABOXX_WEB: "source:gigaboxx:web",
      GRATITUDE_LIBRARY: "source:gratitude_library",
      GROUP_GENERAL_THREAD_AUTOJOIN: "source:group:general_thread_autojoin",
      INVITE: "source:invite",
      LEIA: "source:leia",
      MESSENGER_WEB: "source:messenger:web",
      MESSENGER_WEB_SEARCH: "source:messenger:web_search",
      MESSENGER_UNKNOWN: "source:messenger:unknown",
      REFERRALS_DIALOG: "source:referrals:dialog",
      SAM_UFI: "source:sam:ufi",
      SHARE_DIALOG: "source:share:dialog",
      SEND_PLUGIN: "source:sendplugin",
      SMS: "source:sms",
      SSI_RESOURCES: "source:ssi_resources",
      TEST: "source:test",
      TITAN_WAP: "source:titan:wap",
      TITAN_M_BASIC: "source:titan:m_basic",
      TITAN_M_FREE: "source:titan:m_free_basic",
      TITAN_M_JAPAN: "source:titan:m_japan",
      TITAN_M_MINI: "source:titan:m_mini",
      TITAN_M_TOUCH: "source:titan:m_touch",
      TITAN_M_APP: "source:titan:m_app",
      TITAN_M_TABLET: "source:titan:m_tablet",
      TITAN_M_ZERO: "source:titan:m_zero",
      TITAN_M_TALK: "source:titan:m_talk",
      TITAN_WEB: "source:titan:web",
      TITAN_FACEWEB_ANDROID: "source:titan:faceweb_android",
      TITAN_FACEWEB_BUFFY: "source:titan:faceweb_buffy",
      TITAN_FACEWEB_IPAD: "source:titan:faceweb_ipad",
      TITAN_FACEWEB_IPHONE: "source:titan:faceweb_iphone",
      TITAN_FACEWEB_UNKNOWN: "source:titan:faceweb_unknown",
      TITAN_API: "source:titan:api",
      TITAN_API_MOBILE: "source:titan:api_mobile",
      TITAN_ORCA: "source:titan:orca",
      TITAN_EMAIL_REPLY: "source:titan:emailreply",
      MOBILE: "source:mobile",
      PAGE_PLATFORM_API: "source:page_platform_api",
      PAGE_UNIFIED_INBOX: "source:page_unified_inbox",
      WHATSAPP_CALLBACK: "source:wa_callback",
      UNKNOWN: "source:unknown",
      WEB: "source:web",
      WESTWORLD: "source:westworld",
      TESTDATA: "source:testdata",
      HELPCENTER: "source:helpcenter",
      HUDDLE: "source:huddle",
      NEW_SHARE_DIALOG: "source:share:dialog:new",
      PAID_PROMOTION: "source:paid_promotion",
      BUFFY_SMS: "source:buffy:sms",
      WEBRTC_MOBILE: "source:webrtc:mobile",
      MESSENGER_COMMERCE: "source:messenger:commerce",
      MESSENGER_BOT: "source:bot",
      SERVICES_QPC_CTA_TRIGGER_MESSAGE:
        "source:services:qpc:cta:trigger:message",
      MESSENGER_EMPLOYEE_ONLY_BOT: "source:bot:employee_only",
      MESSENGER_OMNIM: "source:messenger:omnim",
      PAGES_PRIVATE_REPLY: "source:pages:private_reply",
      MESSENGER_FORWARD_DIALOG: "source:messenger:forward",
      MESSENGER_AD: "source:messenger:ad",
      CLICK_TO_MESSENGER_AD: "source:click_to_messenger_ad",
      MARKETPLACE: "source:marketplace",
      MARKETPLACE_CARE: "source:marketplace:care",
      MARKETPLACE_BOT: "source:marketplace:bot",
      PAYMENTS_BOT: "source:payments:bot",
      CHEX_C2C: "source:chex:c2c",
      MESSENGER_LEAD_GEN: "source:messenger:lead_gen",
      PAGES_MESSAGE_SHORTLINK: "source:pages:message_shortlink",
      STICKER_SUBSCRIBE: "source:messenger:sticker_subscribe",
      PHOTO_TAG: "source:messenger:photo_tag",
      INTERNAL_TEST_INBOX: "source:internal:test_inbox",
      INTERNAL_TEST_PENDING: "source:internal:test_pending",
      INTERNAL_TEST_OTHER: "source:internal:test_other",
      INTERNAL_TEST_ML_ONLY: "source:internal:test_ml_only",
      JOB_SEARCH_APPLICATION: "source:job_search:application",
      JOB_SEARCH_JOB_OPENING: "source:job_search:job_opening",
      MESSENGER_JOINABLE_LINK: "source:messenger:joinable_link",
      MESSENGER_ADD_WITH_APPROVAL: "source:messenger:add_with_approval",
      MESSENGER_SMS_BRIDGE_CONVERT: "source:messenger:sms_bridge_conversion",
      TINCAN_ORCA: "source:tincan:orca",
      TINCAN_IOS: "source:tincan:ios",
      TINCAN_UNKNOWN: "source:tincan:unknown",
      FACEBOOK_GROUPS_CHANNELS: "source:groups:channels",
      GROUP_COMMERCE: "source:group_commerce",
      INTERNAL_TOOL: "source:internal:tool",
      PAGES_PLATFORM: "source:pages:platform",
      PAGES_RECOMMENDATION: "source:pages:recommendation",
      PAGES_ORDER_MANAGEMENT: "source:pages:order_management",
      PAGE_AUTO_RESPONSE: "source:pages:auto_response",
      PAGES_INVITE: "source:pages:invite",
      PAGES_CHAT_EXTENSION: "source:pages:chat_extension",
      PAGES_COMPOSER: "source:pages:composer",
      PAGES_SMB_LEAD_GEN: "source:pages:smb_lead_gen",
      PTX: "source:ptx",
      SAVED_CHAT_EXTENSION: "source:saved:chat_extension",
      CREATOR_PAGE_INITIATE_TO_CREATOR_PAGE:
        "source:pages:creator_page_initiate_to_creator_page",
      LIVE_VIDEO_CHAT: "source:live_video_chat",
      LIVE_EVENT_CHAT: "source:live_event_chat",
      GEMSTONE: "source:gemstone",
      WATCH_PARTY: "source:watch_party",
      WORK_ACTIVATION_CARD_GENERAL_GROUP_CHAT:
        "source:work:activation_card_general_group_chat",
      SCHOOL_COMMUNITY: "source:school_community",
      SCHOOL_COMMUNITY_COURSE: "source:school_community_course",
      SOCIAL_ASSISTANT: "source:social_assistant",
      BELL_RESEARCH: "source:bell_research",
      BELL_MESSENGER_LINKED: "source:bell_messenger_linked",
      BELL_MESSENGER_UNLINKED: "source:bell_messenger_unlinked",
      BELL_MESSENGER_ONBOARD: "source:bell_messenger_onboard",
      PROFILE_MEET_NEW_FRIENDS: "source:profile_meet_new_friends",
      PROFILE_MEET_NEW_FRIENDS_REPLY: "source:profile_meet_new_friends_reply",
      OCULUS_SHARE_TO_MESSENGER: "source:oculus_share_to_messenger",
      BFF_BOT: "source:bff:bot",
      FRIENDING_ADMIN_BUMP: "source:messenger_growth:friending_admin_bump",
      NEW_MESSENGER_USER_ADMIN_BUMP:
        "source:messenger_growth:new_messenger_user_admin_bump",
      EVENT_UPCOMING_BUMP: "source:messenger_growth:event_upcoming_bump",
      PHOTO_TAG_BUMP: "source:messenger_growth:photo_tag_bump",
      WALL_POST_BUMP: "source:messenger_growth:wall_post_bump",
      FRIENDVERSARY_BUMP: "source:messenger_growth:friendversary_bump",
      CUSTOMIZATION_UPSELL_BUMP:
        "source:messenger_growth:customization_upsell_bump",
      MESSENGER_BROADCASTFLOW: "source:messenger:broadcastflow",
      PAGE_COMMENT_MSG: "source:pages:question_triggered_convo",
      COMMENT_PIVOT: "source:messenger_growth:comment_pivot",
      PAGE_HOVERCARD: "source:pages:hovercard",
      INSTANT_GAMES_GAME_UPDATE: "source:instant_games_game_updates",
      INSTANT_GAMES_GAME_SHARE: "source:instant_games_game_share",
      INSTANT_GAMES_MATCH_MAKING: "source:instant_games_match_making",
      INSTANT_GAMES_GROUP_CREATION: "source:instant_games_group_creation",
      MOBILE_GAME_SHARE: "source:games_app:mobile_game_share",
      GAMES_SERVICE_GAME_INVITE: "source:games_service_game_invite",
      GAMES_SERVICE_GAME_REQUEST: "source:games_service_game_request",
      PAGE_EMAIL_REPLY: "source:pages:email_reply",
      PAGE_HOME_PAGE_PANEL: "source:page_home_page_panel",
      GROUPSYNC_MESSENGER_GROUP_CREATE:
        "source:groupsync:messenger_group_create",
      GROUPSYNC_SYNC_FROM_FB: "source:groupsync:sync_from_fb",
      GROUPSYNC_NAMING: "source:groupsync:naming",
      GROUPSYNC_THREAD_INFO_SYNC_FROM_FB: "source:groupsync:thread_info_sync",
      GROUPSYNC_THREAD_INFO_SYNC_FROM_FB_NON_PARTICIPANT:
        "source:groupsync:thread_info_sync_non_participant",
      WORK_GARDEN_CREATION: "source:work:garden:creation",
      WORK_GROUP_SYNCED_CHAT_CREATION: "source:work:groupchat:creation",
      WORK_DEFAULT_GROUP_SYNCED_CHAT_CREATION:
        "source:work:defaultgroupchat:creation",
      WORK_GROUP_SYNCED_CHAT_MEMBER_SYNC: "source:work:groupchat:member_sync",
      WORK_MEETING_SYNCED_CHAT_MEMBER_SYNC:
        "source:work:meetingchat:member_sync",
      WORK_GROUP_SYNCED_CHAT_DESCRIPTION_SYNC:
        "source:work:groupchat:description_sync",
      WORK_GROUP_SYNCED_CHAT_NAME_SYNC: "source:work:groupchat:name_sync",
      WORK_GROUP_SYNCED_CHAT_OPT_IN: "source:work:groupchat:opt_in",
      PAGE_PQI_MESSAGE: "source:pages:pqi_message",
      PAGE_PLUGIN_MESSAGE: "source:pages:page_plugin_message",
      WORKPLACE_ACTIVATION_GOLDIE_CUSTOM_INVITE:
        "source:workplace:activation_goldie_custom_invite",
      WORKPLACE_CHAT_DESKTOP: "source:workchat:desktop",
      WORKPLACE_QUICKCHAT: "source:workchat:quickchat",
      WORKPLACE_SIGNUP_PAGE_ADMIN_INVITE:
        "source:workplace:signup_page_admin_invite",
      WORKPLACE_APPROVALS: "source:workplace:approvals",
      WORKPLACE_TEAMWORK_CALL: "source:workplace:teamwork_call",
      WORKPLACE_TEAMWORK_TEST: "source:workplace:test",
      WORKPLACE_TEAMWORK_GROUP_POST: "source:workplace:group_post",
      CREATOR_STUDIO: "source:creator_studio",
      FB_GROUP_ADMINSHIP_SYNC: "source:fbgroup:adminship_sync",
      FB_GROUP_CHAT_MUTE_MEMBER: "source:fbgroup:mute_member",
      MESSENGER_ADS_PARTIAL_AUTOMATED_REMINDER:
        "source:ads_partial_automated:reminder",
      COMMUNITY_HELP_LISTING: "source:community_help_listing",
      FUNDRAISER_MESSAGE_BLAST: "source:fundraiser_message_blast",
      MENTORSHIP: "source:mentorship",
      MENTORSHIP_DISCUSSION_TOPIC: "source:mentorship_discussion_topic",
      MENTORSHIP_OUTREACH: "source:mentorship_outreach",
      VOLUNTEERING_ORGANIZER_REACHOUT: "source:volunteering_organizer_reachout",
      VOD_CONVERSATION: "source:vod_conversation",
      LOCAL_SEARCH_SERVICES: "source:local_search_services",
      YOUTH_VAULT: "source:youth_vault",
      MESSENGER_KIDS: "source:messenger_kids",
      MESSENGER_KIDS_ACTIVITY: "source:messenger_kids:activity",
      STORY_REPLY: "source:story_reply",
      LOCAL_DEV_PLATFORM: "source:local_dev_platform",
      INSTAGRAM_DIRECT: "source:instagram_direct",
      WA_MSGR_INTEROP: "source:wa-msgr-interop",
      C4G_CURRENT_GROUP_MEMBERS_ENTINTEGRITY:
        "source:c4g_current_group_members_entintegrity",
      CHATROOM: "source:chatroom",
      FB_GROUPS: "source:fb_groups",
      FB_INBOX: "source:messaging_inbox_in_blue",
      FB_JOINABLE_VIDEO_CHATS: "source:fb_joinable_video_chats",
      FB_PAGE: "source:fb_page",
      FB_PROFILE: "source:fb_profile",
      FB_STORY: "source:fb_story",
      FB_STATUS: "source:fb_status",
      FB_TOP_OF_FEED_UNIT: "source:fb_top_of_feed_unit",
      FEED: "source:feed",
      MIB_NOTIFICATION: "source:mib_notification",
      KOTOTORO: "source:kototoro",
      SHARESHEET: "source:sharesheet",
      UFI: "source:ufi",
      ROOMS_INVITE: "source:rooms_invite",
      IG_ROOMS: "source:ig_rooms",
      FRIENDS_HOME: "source:friends_home",
      FRIENDS_HOME_SENDER_SIDE_POST_ACCEPT:
        "source:friends_home:sender_side_post_accept",
      NPE_WHALE: "source:npe_whale",
      NPE_POUTINE: "source:npe_poutine",
      NPE_HOBBI: "source:npe_hobbi",
      SHOPS_XMA_DOGFOODING: "source:shops_xma_dogfooding",
      CHAT_FOR_ROOM: "source:chat_for_room",
      WORK_AUTOMATION: "source:work_automation",
      WORK_ROOM_INCALL_CHAT: "source:work_room_incall_chat",
      MESSENGER_ROOM_INCALL_CHAT: "source:messenger_room_incall_chat",
      SECURITY_ACADEMY_BOT: "source:security_academy_bot",
      VR_MESSENGER: "source:vr_messenger",
      PRODUCT_PICKER: "product_picker",
      STARS_ONBOARDING: "source:stars_onboarding",
      N4M: "source:novi_for_messenger",
      ARMADILLO_WA: "source:armadillo_wa",
      REMEDIATION_PLATFORM: "REMEDIATION_PLATFORM",
      ONLINE_LEARNING_CLASS_CREATION: "source:online_learning_class_creation",
      ONLINE_LEARNING_CLASS_GOING: "source:online_learning_class_going",
      ONLINE_LEARNING_CLASS_ADMIN_SYNC:
        "source:online_learning_class_admin_sync",
      PORTAL_CONTACT_GROUP: "source:portal_contact_group",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessagingGenericAdminTextType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ALOHA_AUTOCONNECT_INVITED: "aloha_autoconnect_invited",
      ALOHA_CONTACT_ADDED: "aloha_contact_added",
      ALOHA_CONTACT_ADDED_TO_ALOHA_PROXY_USER:
        "aloha_contact_added_to_aloha_proxy_user",
      ALOHA_CONTACT_REMOVED: "aloha_contact_removed",
      ALOHA_INVITE_OWNER_ACCEPT: "aloha_invite_owner_accept",
      ALOHA_INVITE_OWNER_DECLINE: "aloha_invite_owner_decline",
      ALOHA_MEDIA_ADDED: "aloha_media_added",
      ALOHA_MEDIA_SENT: "aloha_media_sent",
      ALOHA_VISUAL_MEDIA_SENT: "aloha_visual_media_sent",
      ALOHA_OWNER_INVITED: "aloha_owner_invited",
      ALOHA_PROXY_USER_NAME_SET: "aloha_proxy_user_name_set",
      ALOHA_PROXY_USER_PROFILE_PHOTO_SET: "aloha_proxy_user_profile_photo_set",
      ALOHA_WIFI_CREDENTIALS_SET: "aloha_wifi_credentials_set",
      ALOHA_USER_JOINED_CALL_ON_ALOHA: "aloha_user_joined_call_on_aloha",
      ALOHA_CALL_ENDED_ON_ALOHA: "aloha_call_ended_on_aloha",
      ALOHA_CALL_INVITE: "aloha_call_invite",
      BCMP_RESPOND_TO_PROJECT_BRIEF: "bcmp_respond_to_project_brief",
      BCMP_BRAND_INITIATED_MESSAGE: "bcmp_brand_initiated_message",
      BCMP_CAMPAIGN_INVITE: "bcmp_campaign_invite",
      MADE_POLL_VOTE: "made_poll_vote",
      GROUP_POLL: "group_poll",
      GENERIC_NEW_CONNECTION: "generic_new_connection",
      CONFIRM_FRIEND_REQUEST: "confirm_friend_request",
      THREAD_CUSTOMIZATION_UPSELL: "thread_customization_upsell",
      PHONE_CONTACT_UPLOAD: "phone_contact_upload",
      RELATIONSHIP_CREATED: "relationship_created",
      ACCEPT_PENDING_THREAD: "accept_pending_thread",
      RAMP_UP_WELCOME_MESSAGE: "ramp_up_welcome_message",
      CHANGE_THREAD_THEME: "change_thread_theme",
      CHANGE_THREAD_ICON: "change_thread_icon",
      GROUP_THREAD_CREATED: "group_thread_created",
      THREAD_EPHEMERAL_SEND_MODE: "thread_ephemeral_send_mode",
      INVITE_ACCEPTED: "invite_accepted",
      MESSENGER_INVITE_SENT: "messenger_invite_sent",
      TURN_ON_PUSH: "turn_on_push",
      JOURNEY_PROMPT_COLOR: "journey_prompt_color",
      JOURNEY_PROMPT_LIKE: "journey_prompt_like",
      JOURNEY_PROMPT_NICKNAME: "journey_prompt_nickname",
      JOURNEY_PROMPT_SETUP: "journey_prompt_setup",
      CHANGE_THREAD_NICKNAME: "change_thread_nickname",
      NOTIFY_GROUP_MAYORSHIP: "notify_group_mayorship",
      PROMPT_GROUP_MAYORSHIP_CUSTOMIZATION:
        "prompt_group_mayorship_customization",
      MESSAGE_COUNT_MILESTONE_MESSAGE: "message_count_milestone_message",
      BOT_THREAD_SUBSCRIPTION: "bot_thread_subscription",
      RTC_CALL_LOG: "rtc_call_log",
      RTC_PAGE_CALLBACK: "rtc_page_callback",
      RTC_INSTANT_VIDEO_LIFECYCLE: "rtc_instant_video_lifecycle",
      JOURNEY_PROMPT_BOT: "journey_prompt_bot",
      RIDE_ORDERED_MESSAGE: "ride_ordered_message",
      DESTINATION_ETA_MESSAGE: "destination_eta_message",
      RIDE_ARRIVED_MESSAGE: "ride_arrived_message",
      JOURNEY_PROMPT_NEW_SETUP: "journey_prompt_new_setup",
      LIGHTWEIGHT_EVENT_CREATE: "lightweight_event_create",
      LIGHTWEIGHT_EVENT_DELETE: "lightweight_event_delete",
      LIGHTWEIGHT_EVENT_NOTIFY: "lightweight_event_notify",
      LIGHTWEIGHT_EVENT_NOTIFY_BEFORE_EVENT:
        "lightweight_event_notify_before_event",
      LIGHTWEIGHT_EVENT_RSVP: "lightweight_event_rsvp",
      LIGHTWEIGHT_EVENT_UPDATE: "lightweight_event_update",
      LIGHTWEIGHT_EVENT_UPDATE_LOCATION: "lightweight_event_update_location",
      LIGHTWEIGHT_EVENT_UPDATE_TIME: "lightweight_event_update_time",
      LIGHTWEIGHT_EVENT_UPDATE_TITLE: "lightweight_event_update_title",
      SAFETY_LOCATION_REQUEST_SENT: "safety_location_request_sent",
      SAFETY_LOCATION_REQUEST_RESPONDED: "safety_location_request_responded",
      SAFETY_LOCATION_REQUEST_DENIED: "safety_location_request_denied",
      AD_MANAGE_MESSAGE: "ad_manage_message",
      ADMIN_TEXT_WITH_LINK: "admin_text_with_link",
      ADMIN_TEXT_WITH_RPC: "admin_text_with_rpc",
      AD_REPLY_MESSAGE: "ad_reply_message",
      TAGGED_PHOTO: "tagged_photo",
      GAME_SCORE: "game_score",
      INSTANT_GAME_UPDATE: "instant_game_update",
      INSTANT_GAME_BOT_INTRO: "instant_game_bot_intro",
      INSTANT_GAME_BOT_FEEDBACK: "instant_game_bot_feedback",
      INSTANT_GAME_WORLD_CUP_INTRO: "intant_games_world_cup_intro",
      INSTANT_GAME_CUSTOM_UPDATE_NUX_ADMIN_MESSAGE:
        "instant_game_custom_update_nux_admin_message",
      INSTANT_GAME_OFFLINE_MATCH_INTRO: "instant_game_offline_match_intro",
      INSTANT_GAME_TOURNAMENT_REMINDER: "instant_game_tournament_reminder",
      MEDIA_SUBSCRIPTION_MANAGE: "media_subscription_manage",
      M_AI_SURVEY: "m_ai_survey",
      PHONE_NUMBER_LOOKUP_NOTICE: "phone_number_lookup_notice",
      MARK_AS_SHIPPED_UPDATE: "mark_as_shipped_update",
      MESSENGER_PRECHECKED_PLUGIN: "messenger_prechecked_plugin",
      MESSENGER_THREAD_RESURRECTION_NOTICE:
        "messenger_thread_resurrection_notice",
      MESSENGER_ENTRY_BY_MDOTME_LINK_WITH_REF:
        "messenger_entry_by_mdotme_link_with_ref",
      ADD_CONTACT: "add_contact",
      PRODUCT_INVOICE_RECEIPT_REJECTED: "product_invoice_receipt_rejected",
      PRODUCT_INVOICE_PAID: "product_invoice_paid",
      PRODUCT_INVOICE_VOIDED: "product_invoice_voided",
      PRODUCT_INVOICE_SHIPPED: "product_invoice_shipped",
      PRODUCT_INVOICE_PAYMENT_EXPIRED: "product_invoice_payment_expired",
      PRODUCT_INVOICE_RECEIPT_UPLOADED: "product_invoice_receipt_uploaded",
      PRODUCT_INVOICE_PAYMENT_PROCESSING: "product_invoice_payment_processing",
      PRODUCT_INVOICE_PAYMENT_FAILED: "product_invoice_payment_failed",
      PRODUCT_INVOICE_SHIPPING_UPDATE: "product_invoice_shipping_update",
      PRODUCT_INVOICE_STATUS_UPDATE: "product_invoice_status_update",
      PRODUCT_INVOICE_DUPLICATE_PAYMENT_REFUND_UPDATE:
        "product_invoice_duplicate_payment_refund_update",
      SELLER_NOT_ONBOARDED_FOR_PAYMENTS: "seller_not_onboarded_for_payments",
      CHANGE_JOINABLE_SETTING: "change_joinable_setting",
      CHANGE_THREAD_ADMINS: "change_thread_admins",
      CHANGE_THREAD_APPROVAL_MODE: "change_thread_approval_mode",
      CAPY_SESSION_BEGIN: "capy_session_begin",
      CAPY_SESSION_BOT_BEGIN: "capy_session_bot_begin",
      CAPY_SESSION_END: "capy_session_end",
      CAPY_AGENT_JOIN: "capy_agent_join",
      CAPY_AGENT_DUMPED: "capy_agent_dumped",
      CAPY_SESSION_UNAVAILABLE: "capy_session_unavailable",
      CAPY_SESSION_WAIT_TIME: "capy_session_wait_time",
      CAPY_TRANSCRIPT_NOTIF: "capy_transcript_notif",
      GROUP_SMS_PARTICIPANT_JOINED: "group_sms_participant_joined",
      GROUP_SMS_PARTICIPANT_CAPPED: "group_sms_participant_capped",
      SMS_PHONE_NUMBER_CHECK: "sms_phone_number_check",
      MESSENGER_BOT_REVIEW_SENT: "messenger_bot_review_sent",
      MESSENGER_CODE_SCAN: "messenger_code_scan",
      MESSENGER_LIVECHAT_PLUGIN_OPEN: "messenger_livechat_plugin_open",
      MESSENGER_LIVECHAT_PLUGIN_GUEST_END_CHAT:
        "messenger_livechat_plugin_guest_end_chat",
      MESSENGER_LIVECHAT_PLUGIN_GUEST_START_CHAT:
        "messenger_livechat_plugin_guest_start_chat",
      MN_ACCOUNT_LINKING_TEXT: "mn_account_linking_text",
      MN_ACCOUNT_UNLINKING_TEXT: "mn_account_unlinking_text",
      MN_ACCOUNT_FORCED_UNLINKING_TEXT: "mn_account_forced_unlinking_text",
      MN_REF_SEND_TEXT: "mn_ref_send_text",
      ADS_WELCOME_MSG: "ads_welcome_msg",
      THREAD_JOINABLE_PROMOTION_TEXT: "thread_joinable_promotion_text",
      PAGES_PLATFORM_REQUEST_TEXT: "pages_platform_request_text",
      MESSENGER_NEW_USER_GET_STARTED: "messenger_new_user_get_started",
      SMS_PHONE_NUMBER_TOGGLE: "sms_phone_number_toggle",
      PAGES_PLATFORM_CREATE_APPOINTMENT: "Pages_Platform_create_appointment",
      INTERNAL_CAREER_JOBSY_REACHOUT_CONNECTED:
        "internal_career_jobsy_reachout_connected",
      JOINABLE_GROUP_THREAD_CREATED: "joinable_group_thread_created",
      JOINABLE_ROOM_CREATED_WITH_CO_CREATORS:
        "joinable_room_created_with_co_creators",
      PAGES_PLATFORM_ACCEPT_APPOINTMENT: "pages_platform_accept_appointment",
      PAGES_PLATFORM_REFERRAL_CONFIRMED_APPOINTMENT:
        "pages_platform_referral_confirmed_appointment",
      PAGES_PLATFORM_DECLINE_APPOINTMENT: "pages_platform_decline_appointment",
      PAGES_PLATFORM_USER_CANCEL: "pages_platform_user_cancel",
      PAGES_PLATFORM_ADMIN_CANCEL: "pages_platform_admin_cancel",
      MESSENGER_OMNIM_CREATE_FLOW: "messenger_omnim_create_flow",
      MESSENGER_OMNIM_UPDATE_FLOW: "messenger_omnim_update_flow",
      MESSENGER_OMNIM_UPDATE_FLOW_STATE: "messenger_omnim_update_flow_state",
      MESSENGER_GROUP_DESCRITPION_UPDATE: "messenger_group_description_update",
      MESSENGER_GROUP_DESCRIPTION_UPDATE_V2:
        "messenger_group_description_update_v2",
      MESSENGER_EXTENSION_ADD_CART: "messenger_extension_add_cart",
      MESSENGER_EXTENSION_ADD_FAVORITE: "messenger_extension_add_favorite",
      MESSENGER_AD_CONTEXT: "messenger_ad_context",
      PAGES_PLATFORM_APPOINTMENT_REMINDER:
        "pages_platform_appointment_reminder",
      PAGES_PLATFORM_ADMIN_DECLINE: "pages_platform_admin_decline",
      POKE_RECEIVED: "poke_received",
      MESSENGER_STATION_SUBSCRIPTION: "messenger_station_subscription",
      MESSENGER_USER_ALSO_ON_MESSENGER: "messenger_user_also_on_messenger",
      MESSENGER_INBOX2_BIRTHDAY_BUMP: "messenger_inbox2_birthday_bump",
      MESSENGER_RESPOND_REMINDER_CONFIRMATION:
        "messenger_respond_reminder_confirmation",
      MESSENGER_RESPOND_REMINDER: "messenger_respond_reminder",
      MESSENGER_RESPOND_REMINDER_USER_CANCEL:
        "messenger_respond_reminder_user_cancel",
      MESSENGER_RESPOND_REMINDER_CANCEL_SUGGESTION:
        "messenger_respond_reminder_cancel_suggestion",
      STARTED_SHARING_VIDEO: "started_sharing_video",
      LIVE_VIDEO_CHAT: "live_video_chat",
      PARTICIPANT_JOINED_GROUP_CALL: "participant_joined_group_call",
      MESSENGER_ONLY_PHONE_JOINED_WITH_NEW_ACCOUNT:
        "messenger_only_phone_joined_with_new_account",
      PAGES_COMMERCE_PAYMENT_ENABLED: "pages_commerce_payment_enabled",
      GROUP_PAYMENT_REQUEST: "group_payment_request",
      P2P_CALL_ESCALATED_TO_GROUP_CALL: "p2p_call_escalated_to_group_call",
      INVITED_TO_ESCALATED_P2P_CALL: "invited_to_escalated_p2p_call",
      EVENT_UPCOMING: "event_upcoming",
      PAGES_VISITOR_POST_SEND_MESSAGE_UPSELL:
        "pages_visitor_post_send_message_upsell",
      PAGES_LOW_MESSAGE_RESPONSE_RATE: "pages_low_message_response_rate",
      PAGES_START_CALL: "pages_start_call",
      PARTIES_INVITE: "parties_invite",
      WORK_INVITE_CLAIMED: "work_invite_claimed",
      WORK_BOT_INSTALLED: "work_bot_installed",
      WORK_NEW_MULTI_COMPANY_CHAT: "work_new_multi_company_chat",
      PARTIAL_AUTOMATED_FEEDBACK: "partial_automated_feedback",
      P2P_PAYMENT_REQUEST_REMINDER: "p2p_payment_request_reminder",
      PHOTO_TAG_BUMP: "photo_tag_bump",
      MESSENGER_CALL_UPGRADE_LEGACY_CLIENT:
        "messenger_call_upgrade_legacy_client",
      DIRECTED_WALL_POST: "directed_wall_post",
      MESSENGER_CALL_LOG: "messenger_call_log",
      P2P_PAYMENT_MONEY_RAIN_GAME_ENTRY_POINT:
        "p2p_payment_money_rain_game_entry_point",
      MESSENGER_MONTAGE_MENTIONS: "messenger_montage_mentions",
      PAGES_MESSAGING_BLOCK_WORDS: "pages_messaging_block_words",
      SHIPPO_TRACKING_UPDATES: "shippo_tracking_updates",
      NEO_APPROVED_CONNECTION_ADDED: "neo_approved_connection_added",
      NEO_APPROVED_USERNAME: "neo_approved_username",
      NEO_PARENT_PROXY_CREATED: "neo_parent_proxy_created",
      NEO_PARENT_PROXY_FORWARDED: "neo_parent_proxy_forwarded",
      NEO_PARENT_UNLOCK_STICKER: "neo_parent_unlock_sticker",
      CHANGE_FAVORITE_COLOR: "change_favorite_color",
      MARKETPLACE_ITEM_CHANGED: "marketplace_item_changed",
      LINK_CTA: "link_cta",
      PLAIN_TEXT: "plain_text",
      BUSINESS_INLINE_FEEDBACK_FORM_CONFIRMATION:
        "business_inline_feedback_form_confirmation",
      BUSINESS_FEEDBACK_FORM_CONFIRMATION:
        "business_feedback_form_confirmation",
      BUSINESS_INLINE_FEEDBACK_FORM_EXPIRING:
        "business_inline_feedback_form_expiring",
      BUSINESS_FEEDBACK_FORM_EXPIRING: "business_feedback_form_expiring",
      SDR_BOT_SESSION_BEGIN: "sdr_bot_session_begin",
      SERVICES_VERTICAL_REDEEMED_REFERRAL:
        "services_vertical_redeemed_referral",
      SERVICES_VERTICAL_OPT_OUT_REQUESTS: "services_vertical_opt_out_requests",
      SERVICES_VERTICAL_OPT_OUT_REQUESTS_SUCCESS:
        "services_vertical_opt_out_requests_success",
      SERVICES_VERTICAL_LEAD_GEN_SURVEY: "services_vertical_lead_gen_survey",
      SERVICES_VERTICAL_LEAD_GEN_SURVEY_EDIT:
        "services_vertical_lead_gen_survey_edit",
      PAGES_MARK_AS_PAID: "pages_mark_as_paid",
      MIGRATED_TO_WORKPLACE: "migrated_to_workplace",
      MESSENGER_GROUP_EVENT_STATUS_UPDATE:
        "messenger_group_event_status_update",
      NEO_APPROVED_USER_REMOVED_FROM_GROUP:
        "neo_approved_user_removed_from_group",
      LIVE_CHAT_SUPPORT_AGENT_JOIN: "live_chat_support_agent_join",
      LIVE_CHAT_SUPPORT_SESSION_BEGIN: "live_chat_support_session_begin",
      LIVE_CHAT_SUPPORT_SESSION_END: "live_chat_support_session_end",
      MONTAGE_DIRECT_KEEP: "montage_direct_keep",
      MONTAGE_DIRECT_EXPIRE: "montage_direct_expire",
      CHSBOT_CONVERSATION_ENDED: "chsbot_conversation_ended",
      CHSBOT_LIVE_CHAT_SUPPORT_AGENT_BEGIN:
        "chsbot_live_chat_support_agent_begin",
      CHSBOT_LIVE_CHAT_SUPPORT_AGENT_END: "chsbot_live_chat_support_agent_end",
      CHSBOT_LIVE_PHONE_SUPPORT_AGENT_CALLING:
        "chsbot_live_phone_support_agent_calling",
      CHSBOT_SUPPORT_REQUESTED: "chsbot_support_requested",
      SUPPORT_BOT_SESSION_AGENT_JOIN: "support_bot_session_agent_join",
      SUPPORT_BOT_SESSION_AGENT_LEAVE: "support_bot_session_agent_leave",
      SUPPORT_BOT_SESSION_END: "support_bot_session_end",
      SUPPORT_BOT_CALL_BEGIN: "support_bot_call_begin",
      SUPPORT_BOT_CALL_END: "support_bot_call_end",
      SUPPORT_BOT_INITIATE_CONVERSATION: "support_bot_initiate_conversation",
      MESSENGER_SUBSCRIBE_TO_UPDATES: "messenger_subscribe_to_updates",
      MESSENGER_UNSUBSCRIBE_FROM_UPDATES: "messenger_unsubscribe_from_updates",
      MESSENGER_BLOCK_MESSAGES: "messenger_block_messages",
      MESSENGER_UNBLOCK_MESSAGES: "messenger_unblock_messages",
      MESSENGER_TURN_ON_MESSAGES: "messenger_turn_on_messages",
      MESSENGER_TURN_OFF_MESSAGES: "messenger_turn_off_messages",
      THANKS_FOR_SHARING_MESSAGE_CONTEXT: "thanks_for_sharing_message_context",
      GROUP_ADMIN_MODEL_NUX: "group_admin_model_nux",
      MESSENGER_PAYMENT_INCENTIVE_INFO: "messenger_payment_incentive_info",
      MESSENGER_PLATFORM_PERSONA: "messenger_platform_persona",
      MESSENGER_GROUP_SYNC_OPT_IN: "messenger_group_sync_opt_in",
      MESSENGER_GROUP_SYNC_OPT_OUT: "messenger_group_sync_opt_out",
      MENTORSHIP_MATCH: "mentorship_match",
      MENTORSHIP_PROGRAM_MATCH: "mentorship_program_match",
      MENTORSHIP_PROGRAM_CONTINUE: "mentorship_program_continue",
      MENTORSHIP_PROGRAM_LEAVE: "mentorship_program_leave",
      MENTORSHIP_PROGRAM_LEAVE_PROMPT: "mentorship_program_leave_prompt",
      MENTORSHIP_CURRICULUM_STEP: "mentorship_curriculum_step",
      MENTORSHIP_DISCUSSION_TOPIC_SET_PROMPT:
        "mentorship_discussion_topic_set_prompt",
      MENTORSHIP_CHECK_IN_REMINDER: "mentorship_check_in_reminder",
      MENTORSHIP_DISCLAIMER: "mentorship_disclaimer",
      PAGES_CALL_DEFLECTION_UPSELL: "pages_call_deflection_upsell",
      RTC_PHOTOBOOTH: "rtc_photobooth",
      DELAYED_PHONE_NUMBER_MATCH: "delayed_phone_number_match",
      AUTOMATIC_TRANSLATION_ENABLED: "automatic_translation_enabled",
      AUTOMATIC_TRANSLATION_AUTO_ENABLED: "automatic_translation_auto_enabled",
      AUTOMATIC_TRANSLATION_DISABLED: "automatic_translation_disabled",
      AUTOMATIC_TRANSCRIPTION_ENABLED: "automatic_transcription_enabled",
      AUTOMATIC_TRANSCRIPTION_DISABLED: "automatic_transcription_disabled",
      MESSENGER_ROOM_MIGRATION: "messenger_room_migration",
      PAGE_ADMIN_RESPONSIVENESS_REMINDER: "page_admin_responsiveness_reminder",
      MESSENGER_GROWTH_GENERIC_ADMIN_TEXT:
        "messenger_growth_generic_admin_text",
      MESSENGER_TALK_TO_YOUR_MOM_REMINDER:
        "messenger_talk_to_your_mom_reminder",
      PAYMENT_INCENTIVE_RECEIVED: "payment_incentive_received",
      PAGES_THREAD_REMINDER: "pages_thread_reminder",
      MESSENGER_PLATFORM_PERSONA_LEAVE_THREAD:
        "messenger_platform_persona_leave_thread",
      STORY_REPLY_CONTEXT: "story_reply_context",
      PAGES_AUTOMATED_RESPONSE_RECOMMENDATION:
        "pages_automated_response_recommendation",
      PAGES_AUTOMATED_RESPONSE_SMART_REPLY:
        "pages_automated_response_smart_reply",
      PAGES_AUTOMATED_RESPONSE_JOB_APPLICATION:
        "pages_automated_response_job_APPLICATION",
      MESSENGER_ICEBREAKER_VOTE_CAST: "messenger_icebreaker_vote_cast",
      PARTIES_PRESENCE: "parties_presence",
      PAGE_THREAD_ADMIN_ASSIGNMENT_TEXT: "page_thread_admin_assignment_text",
      RTC_INSTANT_ACTIVITY_LIFECYCLE: "rtc_instant_activity_lifecycle",
      RTC_VIDEO_CHAT_LINK_LIFECYCLE: "rtc_video_chat_link_lifecycle",
      RTC_REDUCE_CALL_QUALITY: "rtc_reduce_call_quality",
      SHIBA_MOCK_BOT_RESTART_CHAT_TEXT: "shiba_mock_bot_restart_chat_text",
      MARKETPLACE_RENTALS_INITIAL_MESSAGE:
        "marketplace_rentals_initial_message",
      MARKETPLACE_RENTALS_SENDER_INFO: "marketplace_rentals_sender_info",
      PAGES_MARK_AS_PAID_NEW: "pages_mark_as_paid_new",
      MESSENGER_BUSINESS_REPORT_SPAM: "messenger_business_report_spam",
      MESSENGER_BUSINESS_REPORT_INAPPROPRIATE:
        "messenger_business_report_inappropriate",
      MESSENGER_BUSINESS_REPORT_OTHER_ABUSE:
        "messenger_business_report_other_abuse",
      FRIENDED_IN_MESSENGER: "friended_in_messenger",
      MARKETPLACE_REPLY_REMINDER: "marketplace_reply_reminder",
      VOD_CONVERSATION_SEND_MESSAGE: "vod_conversation_send_message",
      MESSENGER_SHARED_WITH: "messenger_shared_with",
      PAGE_THREAD_ACTION_SYSTEM_ADD_DETAILS:
        "page_thread_action_system_add_details",
      PAGE_USER_MESSENGER_CONNECTED: "page_user_messenger_connected",
      FB_ONLY_BOT_TEXT: "fb_only_bot_text",
      MESSENGER_SCHOOL_CHAT_AUTO_ADD_USER:
        "messenger_school_chat_auto_add_user",
      LIVING_ROOM_MESSAGE: "living_room_message",
      MESSENGER_FRIENDVERSARY_SHARED_TO: "messenger_friendversary_shared_to",
      PARENT_APPROVED_NEW_FRIEND_CODE: "parent_approved_new_friend_code",
      CHAT_ENTICEMENT_JOINED: "chat_enticement_joined",
      EVENT_CONFIRMED_GOING: "event_confirmed_going",
      CHEX_ORDER_STATE_CHANGED: "chex_order_state_changed",
      MESSENGER_CARE_PII_PRIVACY_INTRO: "messenger_care_pii_privacy_intro",
      MESSENGER_CARE_AUTH_LINKS_REF: "messenger_care_auth_links_ref",
      MARKETPLACE_RATE_SELLER: "marketplace_rate_seller",
      MARKETPLACE_DISCOUNTED_PRICE_EXPIRING:
        "marketplace_discounted_price_expiring",
      GEMSTONE_THREAD_CREATION: "gemstone_thread_creation",
      GEMSTONE_FB_MESSENGER_THREAD_CREATION:
        "gemstone_fb_messenger_thread_creation",
      GEMSTONE_CONTACT_SHARE_UPSELL: "gemstone_contact_share_upsell",
      GEMSTONE_MUTUAL_READY_TO_MEET: "gemstone_mutual_ready_to_meet",
      GEMSTONE_STALE_THREAD: "gemstone_stale_thread",
      GEMSTONE_WE_MET_PROMPT: "gemstone_we_met_prompt",
      MNF_LIGHTWEIGHT_LIKE: "mnf_lightweight_like",
      WORKCHAT_REMINDER_ADMIN_TEXT: "workchat_reminder_admin_text",
      WORKCHAT_REMINDER_LINK_CTA: "workchat_reminder_link_cta",
      WORKCHAT_RECIPIENT_ON_DND_WARNING: "workchat_recipient_on_dnd_warning",
      WORKCHAT_PIN_MESSAGE_ACTION: "workchat_pin_message_action",
      WORKCHAT_UNPIN_MESSAGE_ACTION: "workchat_unpin_message_action",
      CHATS_IN_GROUPS_PRE_MIGRATION: "chats_in_groups_pre_migration",
      CHATS_IN_GROUPS_MIGRATION: "chats_in_groups_migration",
      POST_SHARED_FROM_GROUP: "post_shared_from_group",
      WORKCHAT_ACTIVATION_WELCOME_MESSAGE:
        "workchat_activation_welcome_message",
      WORKCHAT_SELF_CHAT_INITIATOR: "workchat_self_chat_initiator",
      WORKCHAT_ACTIVATION_UNCLAIMED_ACCOUNT_WELCOME_MESSAGE:
        "workchat_activation_unclaimed_account_welcome_message",
      MARKETPLACE_ASSISTANT_SUPPORT_CASE_START:
        "marketplace_assistant_support_case_start",
      MARKETPLACE_ASSISTANT_SUPPORT_CASE_END:
        "marketplace_assistant_support_case_end",
      SECURITY_HUB_AGENT_LEFT: "security_hub_agent_left",
      SECURITY_HUB_AGENT_JOINED: "security_hub_agent_joined",
      NEO_SEND_DGG: "neo_send_dgg",
      SECURITY_HUB_AGENT_REASSIGNED: "security_hub_agent_reassigned",
      MARKETPLACE_MESSAGE_ENHANCEMENT: "marketplace_message_enhancement",
      C4G_MESSAGE_REMOVED: "c4g_message_removed",
      C4G_NEW_VIDEO_ROOM_CREATED: "c4g_new_video_room_created",
      C4G_VIDEO_ROOM_ENDED: "c4g_video_room_ended",
      C4G_VIDEO_ROOM_PARTICIPANT_JOIN: "c4g_video_room_participant_join",
      C4G_PARTICIPANT_JOIN: "c4g_participant_join",
      C4G_PARTICIPANT_LEFT: "c4g_participant_left",
      NEO_SHARE_VIRTUAL_PET: "neo_share_virtual_pet",
      NEO_SHARE_ASYNC_GAME_SCORE: "neo_share_async_game_score",
      NEO_SHARE_ASYNC_GAME_OTHER: "neo_share_async_game_other",
      NEO_SHARE_PROFILE_PHOTO_UPDATE: "neo_share_profile_photo_update",
      NEO_UPDATE_EMOJI_STATUS: "neo_update_emoji_status",
      NEO_NOTIFY_PARENT_EMOJI_STATUS: "neo_notify_parent_emoji_status",
      NEO_BEACON_QUICK_REACTION: "neo_beacon_quick_reaction",
      NEO_BEACON_QUICK_REPLY: "neo_beacon_quick_reply",
      MARKETPLACE_PROFILE_DESCRIPTION: "marketplace_profile_description",
      THREAD_THEME_DEPRECATION: "thread_theme_deprecation",
      MAKETPLACE_SELLER_REQUEST_RATING: "maketplace_seller_request_rating",
      PRODUCT_INVOICE_CREATED: "PRODUCT_INVOICE_CREATED",
      REJOINED_GROUP_THREAD_AFTER_ERROR: "rejoined_group_thread_after_error",
      IG_DIRECT_CALL_LOG: "ig_direct_call_log",
      PAYMENT_REQUEST_REMINDER: "payment_request_reminder",
      MARKETPLACE_BSG_CONTACT_SELLER: "marketplace_bsg_contact_seller",
      MARKETPLACE_TXN_QUESTION: "marketplace_txn_question",
      MARKETPLACE_BUYER_TXN_QUESTION: "marketplace_buyer_txn_question",
      WORKCHAT_DETACH_SYNCED_GROUP_CHAT: "workchat_detach_synced_group_chat",
      CHAT_PLUGIN_GUEST_EXPIRATION: "chat_plugin_guest_expiration",
      MARKETPLACE_FOLLOW_SUGGESTION: "marketplace_follow_suggestion",
      CIP_REFERRAL_MESSAGE: "cip_referral_message",
      FB_LOGIN_B2P: "fb_login_b2p",
      EO_SRT_HELPDESK_TECHNICIAN_JOINED: "eo_srt_helpdesk_technician_joined",
      EO_SRT_HELPDESK_TECHNICIAN_LEFT: "eo_srt_helpdesk_technician_left",
      COMMUNITY_CHATS_DESCRITPION_UPDATE: "community_chats_description_update",
      COMMUNITY_CHATS_THREAD_CREATION: "community_chats_thread_creation",
      MARKETPLACE_MEETING_PLAN_DELETED: "marketplace_meeting_plan_deleted",
      MARKETPLACE_MEETING_PLAN_SHARED: "marketplace_meeting_plan_shared",
      MARKETPLACE_COMMERCE_POST_PRIVATE_REPLY:
        "marketplace_commerce_post_private_reply",
      PRIVATE_REPLY_ADMIN_TEXT_LOG: "private_reply_admin_text_log",
      CHAT_PLUGIN_UPGRADE_PAGE_SIDE: "chat_plugin_upgrade_page_side",
      MARKETPLACE_DRAFT_THREAD: "marketplace_draft_thread",
      MARKETPLACE_THREAD_RTC_ENABLED: "marketplace_thread_rtc_enabled",
      PRODUCT_INVOICE_PAYMENT_DISPUTED: "product_invoice_payment_disputed",
      SHH_MODE_SCREENSHOT: "shh_mode_screenshot",
      SHH_MODE_REPLAY: "SHH_MODE_REPLAY",
      MESSAGING_REACHABILITY_ONE_WAY_SEND:
        "messaging_reachability_one_way_send",
      NEO_LINK_SHARING: "neo_link_sharing",
      MARKETPLACE_REPLY_REMINDER_1_TO_1_THREAD:
        "marketplace_reply_reminder_1_to_1_thread",
      MARKETPLACE_COMMENT_TO_MESSAGING: "marketplace_comment_to_messaging",
      ADULT_MINOR_INTERACTION_ONE_WAY_SEND:
        "adult_minor_interaction_one_way_send",
      SHARED_ITEM_XMA: "shared_item_xma",
      MESSENGER_ROOMS_THREAD_CREATED: "messenger_rooms_thread_created_xmat",
      MESSENGER_ROOMS_THREAD_PARTICIPANT_JOINED:
        "messenger_rooms_thread_participant_joined_xmat",
      MESSENGER_ROOMS_THREAD_PARTICIPANT_LEFT:
        "messenger_rooms_thread_participant_left_xmat",
      MESSENGER_ROOMS_TO_LIVE_STARTED: "messenger_rooms_to_live_started_xmat",
      MESSENGER_ROOMS_TO_LIVE_END: "messenger_rooms_to_live_end_xmat",
      PAYMENTS_CARE_B2C_MESSENGER_ESCALATION_XMAT:
        "payments_care_b2c_messenger_escalation_xmat",
      REACTION_LOG: "reaction_log",
      GAMING_SQUADS_ADMIN_XMAT: "gaming_squads_admin_xmat",
      MAGIC_WORDS: "magic_words",
      N4M_P2P_INVITE_XMAT: "n4m_p2p_invite_xmat",
      PAY_REFERRAL_INVITATION_SENT_XMAT: "pay_referral_invitation_sent_xmat",
      ICEBREAKER_SENT_BY_MISTAKE: "icebreaker_sent_by_mistake",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessagingTagUtils",
  ["MercurySourceType", "MessagingTagConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(Object.values(c("MercurySourceType")));
    function a(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (h.has(c)) return c;
      }
      return "source:unknown";
    }
    function i(a) {
      for (var b = 0; b < a.length; b++) {
        var d = a[b];
        d = d.split(c("MessagingTagConstants").app_id_root);
        if (d.length > 1) return d[1].trim();
      }
      return null;
    }
    function b(a, b) {
      var d = [],
        e = i(a);
      e &&
        c("MessagingTagConstants").orca_app_ids.indexOf(e) !== -1 &&
        d.push("source:messenger");
      c("MessagingTagConstants").chat_sources.indexOf(b) !== -1 &&
        d.push("source:chat");
      c("MessagingTagConstants").email_source === b && d.push("source:email");
      c("MessagingTagConstants").mobile_sources.indexOf(b) !== -1 &&
        d.push("source:mobile");
      a.indexOf("source:workchat:desktop") !== -1 &&
        d.push("source:workchat:desktop");
      return d;
    }
    g.getSourceFromTags = a;
    g.getSourceTags = b;
  },
  98
);
__d(
  "P2PPaymentLogMessageSubtype",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      SENT_IN_GROUP: "sent_in_group",
      CANCELED_SENDER_RISK: "canceled_sender_risk",
      CANCELED_DECLINED: "canceled_declined",
      CANCELED_RECIPIENT_RISK: "canceled_recipient_risk",
      CANCELED_EXPIRED: "canceled_expired",
      CANCELED_SAME_CARD: "canceled_same_card",
      CANCELED_CUSTOMER_SERVICE: "canceled_customer_service",
      CANCELED_CHARGEBACK: "canceled_chargeback",
      CANCELED_SYSTEM_FAIL: "canceled_system_fail",
      REQUEST_CANCELED_BY_REQUESTER: "request_canceled_by_requester",
      REQUEST_DECLINED_BY_REQUESTEE: "request_declined_by_requestee",
      REQUEST_EXPIRED: "request_expired",
      REQUEST_REMINDER: "request_reminder",
      MONEY_RAIN_GAME_ENTRY_POINT: "money_rain_game_entry_point",
    });
    f["default"] = a;
  },
  66
);
__d(
  "StoryAttachmentStyle",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      FALLBACK: "fallback",
      SHARE: "share",
      SHARE_MEDIUM: "share_medium",
      SHARE_SEVERE: "share_severe",
      SHARE_PORTRAIT: "share_portrait",
      OG_COMPOSER_SIMPLE: "og_composer_simple",
      SPORTS_MATCHUP: "sports_matchup",
      SHARE_LARGE_IMAGE: "share_large_image",
      PHOTO: "photo",
      COVER_PHOTO: "cover_photo",
      INSPIRATION_PHOTO: "inspiration_photo",
      ALBUM: "album",
      NEW_ALBUM: "new_album",
      COUPON: "coupon",
      QUESTION: "question",
      ANSWER: "answer",
      OPTION: "option",
      GALLERY: "gallery",
      STREAM_PUBLISH: "stream_publish",
      MUSIC_AGGREGATION: "music_aggregation",
      ITEM_LIST: "list",
      HIGH_SCORE: "high_score",
      SCORE_LEADERBOARD: "score_leaderboard",
      FRIEND_LIST: "friend_list",
      POPULAR_OBJECTS: "popular_objects",
      AD4AD: "ad4ad",
      AVATAR_LIST: "avatar_list",
      AVATAR: "avatar",
      AVATAR_WITH_VIDEO: "avatar_with_video",
      EVENT: "event",
      CANCELED_EVENT: "canceled_event",
      MINUTIAE_EVENT: "minutiae_event",
      EXPERIENCE: "experience",
      LIFE_EVENT: "life_event",
      GIFT: "gift",
      IMAGE_SHARE: "image_share",
      ANIMATED_IMAGE_SHARE: "animated_image_share",
      ANIMATED_IMAGE_AUTOPLAY: "animated_image_autoplay",
      ANIMATED_IMAGE_VIDEO: "animated_image_video",
      ANIMATED_IMAGE_VIDEO_AUTOPLAY: "animated_image_video_autoplay",
      NOTE: "note",
      TOPIC: "topic",
      TOPIC_FOLLOWING_TOPIC: "topic_following_topic",
      FILE_UPLOAD: "file_upload",
      FOLDER: "folder",
      NOTIFICATION_TARGET: "notification_target",
      UNAVAILABLE: "unavailable",
      EMPTY: "empty",
      PAGE_RECOMMENDATION: "page_recommendation",
      PAGE_VIDEO_PLAYLIST: "page_video_playlist",
      VIDEO: "video",
      VIDEO_INLINE: "video_inline",
      VIDEO_AUTOPLAY: "video_autoplay",
      VIDEO_SHARE: "video_share",
      VIDEO_SHARE_HIGHLIGHTED: "video_share_highlighted",
      VIDEO_SHARE_YOUTUBE: "video_share_youtube",
      VIDEO_DIRECT_RESPONSE: "video_direct_response",
      VIDEO_DIRECT_RESPONSE_AUTOPLAY: "video_direct_response_autoplay",
      VIDEO_SHOP: "video_shop",
      INSPIRATION_VIDEO: "inspiration_video",
      MULTI_VIDEOS_STITCHED: "multi_videos_stitched",
      MAP: "map",
      OG_MAP: "og_map",
      PRODUCT: "product",
      EXTERNAL_PRODUCT: "external_product",
      FITNESS_COURSE: "fitness_course",
      APPLICATION: "application",
      STICKER: "sticker",
      STICKER_AVATAR: "sticker_avatar",
      EXTERNAL_OG_PRODUCT: "external_og_product",
      TRAVEL_LOG: "travel_log",
      MULTI_SHARE: "multi_share",
      MULTI_SHARE_NO_END_CARD: "multi_share_no_end_card",
      MULTI_SHARE_NON_LINK_VIDEO: "multi_share_non_link_video",
      MULTI_SHARE_SEARCH_END_CARD: "multi_share_search_end_card",
      MULTI_SHARE_FIXED_TEXT: "multi_share_fixed_text",
      MULTI_SHARE_CAROUSEL_FREE_SCROLL: "multi_share_carousel_free_scroll",
      MULTI_SHARE_CAROUSEL_FREE_SCROLL_SNAP_CENTER:
        "multi_share_carousel_free_scroll_snap_center",
      MULTI_SHARE_LARGER_CAROUSEL: "multi_share_larger_carousel",
      MULTI_SHARE_WITH_INSTANT_EXPERIENCE:
        "multi_share_with_instant_experience",
      MULTI_SHARE_WITH_PROMO_CARD: "multi_share_with_promo_card",
      YEAR_IN_REVIEW: "year_in_review",
      AVATAR_LARGE_COVER: "avatar_large_cover",
      COMMERCE_PRODUCT_ITEM: "commerce_product_item",
      COMMERCE_STORE: "commerce_store",
      THIRD_PARTY_PHOTO: "third_party_photo",
      PROMPT: "prompt",
      BIRTHDAY: "birthday",
      BIRTHDAY_PERCEPTICONS: "birthday_percepticons",
      DISCUSSION_CONVERSATION: "discussion_conversation",
      DISCUSSION_COMMENT: "discussion_comment",
      GROUP_SELL_PRODUCT_ITEM: "group_sell_product_item",
      GROUP_SELL_PRODUCT_ITEM_MARK_AS_SOLD: "group_sell_mark_as_sold",
      GAMETIME: "gametime",
      GAMETIME_LEAGUE: "gametime_league",
      GAMETIME_PLAY: "gametime_play",
      GROUP_REPORTED_POST_QUEUE: "group_reported_post_queue",
      GROUP_PENDING_POST_QUEUE: "group_pending_post_queue",
      GROUP_JOIN_REQUEST_QUEUE: "group_join_request_queue",
      GREETING_CARD: "greeting_card",
      LEAD_GEN: "lead_gen",
      ATTACHED_STORY: "attached_story",
      POST_CHANNEL: "post_channel",
      TEXT_FOR_COLLAGE: "text_for_collage",
      SOUVENIR: "souvenir",
      SLIDESHOW: "slideshow",
      ORION: "orion",
      ORION_REQUEST: "orion_request",
      P2P_PAYMENT: "p2p_payment",
      P2P_SERVER_BUBBLE: "p2p_server_bubble",
      INSTANT_ARTICLE: "instant_article",
      MOMENTS_APP_INVITATION: "moments_app_invitation",
      MOMENTS_APP_PHOTO_REQUEST: "moments_app_photo_request",
      RIDE_ORDERED: "ride_ordered",
      RIDE_RECEIPT: "ride_receipt",
      BUSINESS_MESSAGE_ITEMS: "business_message_items",
      RETAIL_CANCELLATION: "retail_cancellation",
      RETAIL_PROMOTION: "retail_promotion",
      RETAIL_ITEM: "retail_item",
      RETAIL_NOW_IN_STOCK: "retail_now_in_stock",
      RETAIL_RECEIPT: "retail_receipt",
      RETAIL_SHIPMENT: "retail_shipment",
      RETAIL_SHIPMENT_FOR_SUPPORTED_CARRIER:
        "retail_shipment_for_supported_carrier",
      RETAIL_SHIPMENT_FOR_UNSUPPORTED_CARRIER:
        "retail_shipment_for_unsupported_carrier",
      RETAIL_SHIPMENT_TRACKING_EVENT: "retail_shipment_tracking_event",
      RETAIL_SHIPMENT_TRACKING_EVENT_ETA: "retail_shipment_tracking_event_eta",
      RETAIL_SHIPMENT_TRACKING_EVENT_IN_TRANSIT:
        "retail_shipment_tracking_event_in_transit",
      RETAIL_SHIPMENT_TRACKING_EVENT_OUT_FOR_DELIVERY:
        "retail_shipment_tracking_event_out_for_delivery",
      RETAIL_SHIPMENT_TRACKING_EVENT_DELAYED:
        "retail_shipment_tracking_event_delayed",
      RETAIL_SHIPMENT_TRACKING_EVENT_DELIVERED:
        "retail_shipment_tracking_event_delivered",
      SURVEY: "survey",
      MESSAGE_LOCATION: "message_location",
      GROUP_ADD_MEMBERS: "group_add_memebers",
      GROUP_MEMBER_ADDED: "group_member_added",
      RTC_CALL_LOG: "rtc_call_log",
      JOINABLE_CALL: "joinable_call",
      EVENTS_PENDING_POST_QUEUE: "events_pending_post_queue",
      EVENT_CALENDAR: "event_calendar",
      FACEPILE: "facepile",
      ATTRIBUTED_SHARE: "attributed_share",
      VIDEO_CINEMAGRAPH: "video_cinemagraph",
      LOCAL_CONTEXT_SHARE: "local_context_share",
      H_SCROLL: "h_scroll",
      EGO_HSCROLL: "ego_hscroll",
      MEDIA_QUESTION: "media_question",
      RICH_MEDIA: "rich_media",
      RICH_MEDIA_COLLECTION: "rich_media_collection",
      SQUARE_IMAGE_SHARE: "square_image_share",
      RETAIL_AGENT_ITEM_SUGGESTION: "retail_agent_item_suggestion",
      RETAIL_AGENT_ITEM_RECEIPT: "retail_agent_item_receipt",
      NOTE_COMPOSED: "note_composed",
      AVATAR_WITH_BIRTHDAY: "avatar_with_birthday",
      AIRLINE_FLIGHT_RESCHEDULE_UPDATE_BUBBLE:
        "airline_flight_reschedule_update_bubble",
      AIRLINE_CONFIRMATION: "airline_confirmation",
      AIRLINE_CHECK_IN: "airline_check_in",
      AIRLINE_BOARDING_PASS: "airline_boarding_pass",
      AIRLINE_FLIGHT_RESCHEDULE_UPDATE: "airline_flight_reschedule_update",
      LIGHTBOX_VIDEO: "lightbox_video",
      GLOBALLY_DELETED_MESSAGE_PLACEHOLDER:
        "globally_deleted_message_placeholder",
      GENIE_MESSAGE: "genie_message",
      MOVIE_BOT_MOVIE_LIST: "movie_bot_movie_list",
      MOVIE_BOT_MOVIE_SHOWTIME_LIST: "movie_bot_movie_showtime_list",
      GROUPSMASH_MEDIA: "groupsmash_media",
      AVATAR_WITH_EGO_ACTION: "avatar_with_ego_action",
      EVENT_TICKET_DEPRECATED: "event_ticket",
      VERTICAL_ATTACHMENT_LIST: "vertical_attachment_list",
      INSTANT_ARTICLE_LEGACY: "instant_article_legacy",
      FUNDRAISER_PAGE: "fundraiser_page",
      FINANCIAL_BILL_PAYMENT_REQUEST: "financial_bill_payment_request",
      GOODWILL_THROWBACK_FRIENDVERSARY_POLAROIDS_CARD:
        "goodwill_throwback_friendversary_polaroids_card",
      WELCOME_CARD_IMAGE: "welcome_card_image",
      LARGE_IMAGE_LIKE: "large_image_like",
      ASK_FRIENDS: "ask_friends",
      CULTURAL_MOMENT: "cultural_moment",
      TELEPHONE_CALL_LOG: "telephone_call_log",
      SUPER_EMOJI: "super_emoji",
      BOOK: "book",
      SUBTOPIC_CUSTOMIZATION_QUESTION: "subtopic_customization_question",
      SUBTOPIC_CUSTOMIZATION_OPTION: "subtopic_customization_option",
      RESTAURANT: "restaurant",
      CONNECTION_QUESTION: "connection_question",
      CONNECTION_QUESTION_OPTION: "connection_question_option",
      PYMI_ITEM: "pymi_item",
      GOODWILL_THROWBACK_FRIENDVERSARY_COLLAGE_CARD:
        "goodwill_throwback_friendversary_collage_card",
      CITY: "city",
      AVATAR_WITH_SHARE: "avatar_with_share",
      LIGHTWEIGHT_PLACE: "lightweight_place",
      QUOTED_SHARE: "quoted_share",
      SMS_LOG: "sms_log",
      CENTERED_TEXT: "centered_text",
      GOODWILL_THROWBACK_FRIENDVERSARY_DATA_CARD:
        "goodwill_throwback_friendversary_data_card",
      GOODWILL_THROWBACK_FACEVERSARY_COLLAGE_CARD:
        "goodwill_throwback_faceversary_collage_card",
      GOODWILL_THROWBACK_ANNIVERSARY_COLLAGE_CARD:
        "goodwill_throwback_anniversary_collage_card",
      GOODWILL_THROWBACK_MILESTONE_FRIENDS_MADE_CARD:
        "goodwill_throwback_milestone_friends_made_card",
      MESSAGE_EVENT: "message_event",
      MESSAGE_THREAD: "message_thread",
      QUOTE: "quote",
      AIRLINE_ITINERARY: "airline_itinerary",
      AIRLINE_UPDATE: "airline_update",
      PLACE_LIST: "place_list",
      IMPLICIT_PLACE_LIST_CONVERSION: "implicit_place_list_conversion",
      AIRLINE_CHECKIN_REMINDER: "airline_checkin_reminder",
      MINUTIAE_UNIT: "minutiae_unit",
      INSTANT_ARTICLE_PHOTO: "instant_article_photo",
      INSTANT_ARTICLE_VIDEO: "instant_article_video",
      PHOTO_LINK_SHARE: "photo_link_share",
      PHOTO_LINK_SHARE_WITH_INSTAGRAM_CONTEXT:
        "photo_link_share_with_instagram_context",
      BUSINESS_LOCATION: "business_location",
      GOODWILL_WEATHER: "goodwill_weather",
      CULTURAL_MOMENT_HOLIDAY_CARD: "cultural_moment_holiday_card",
      GROUP: "group",
      COMMENT_PLACE_INFO: "comment_place_info",
      COMMENT_PRODUCT_INFO: "comment_product_info",
      GOODWILL_THROWBACK_FRIENDVERSARY_POLAROIDS_CARD_IPB:
        "goodwill_throwback_friendversary_polaroids_card_ipb",
      GOODWILL_THROWBACK_FRIENDVERSARY_COLLAGE_CARD_IPB:
        "goodwill_throwback_friendversary_collage_card_ipb",
      FUNDRAISER_PERSON_TO_CHARITY: "fundraiser_person_to_charity",
      FUNDRAISER_PERSON_FOR_PERSON: "fundraiser_person_for_person",
      FUNDRAISER_FOR_STORY: "fundraiser_for_story",
      FUNDRAISER_PROFILE_FOR_CHARITY: "fundraiser_profile_for_charity",
      MESSAGE_LIVE_LOCATION: "message_live_location",
      MESSENGER_INVITE: "messenger_invite",
      MESSENGER_NATIVE_TEMPLATES: "messenger_native_templates",
      GAMES_INSTANT_PLAY: "games_instant_play",
      PROFILE_MEDIA: "profile_media",
      NATIVE_TEMPLATES: "native_templates",
      NATIVE_TEMPLATES_FOX: "native_templates_fox",
      NATIVE_TEMPLATES_KEEP_ATTACHED: "native_templates_keep_attached",
      GOODWILL_THROWBACK_VIDEO_BASIC: "goodwill_throwback_video_basic",
      COMMERCE_PRODUCT_MINI: "commerce_product_mini",
      COMMERCE_PRODUCT_MINI_LIST: "commerce_product_mini_list",
      COMMENT: "comment",
      MESSENGER_TEAM_BOT_SHARE: "messenger_team_bot_share",
      LIVE_VIDEO_SCHEDULE: "live_video_schedule",
      PRODUCT_ITEM: "product_item",
      PLATFORM_INSTANT_APP: "platform_instant_app",
      YEAR_OVERVIEW: "year_overview",
      NATIVE_COMPONENT_FLOW_BOOKING_REQUEST:
        "native_component_flow_booking_request",
      FRIEND_REQUEST: "friend_request",
      MESSENGER_GROUP_JOINABLE_LINK: "messenger_group_joinable_link",
      MESSENGER_GROUP_JOINABLE_LINK_V2: "messenger_group_joinable_link_v2",
      SOCIAL_SEARCH_CONVERSION_PROMPT: "social_search_conversion_prompt",
      MDOTME_USER_LINK: "mdotme_user_link",
      DYNAMIC_MULTI_SHARE_ITEMS: "dynamic_multi_share_items",
      EVENT_REMINDER: "event_reminder",
      INSTANT_GAMES_SHARE_MESSAGE: "instant_games_share_message",
      INSTANT_GAMES_LEADERBOARD_UPDATE: "instant_games_leaderboard_update",
      INSTANT_GAMES_CUSTOM_UPDATE: "instant_games_custom_update",
      MESSENGER_PLATFORM_COMPACT_ITEM: "messenger_platform_compact_item",
      MESSENGER_PLATFORM_COVER_ITEM: "messenger_platform_cover_item",
      MULTI_SHARE_NON_LINK_VIDEO_AUTO_SCROLL:
        "multi_share_non_link_video_auto_scroll",
      OFFER_VIEW_LIVE_COUNTDOWN: "offer_view_live_countdown",
      ENHANCED_LINK_REDDIT_POST: "enhanced_link_reddit_post",
      MESSENGER_COMMERCE_COVER_ITEM: "messenger_commerce_cover_item",
      ENHANCED_LINK_YELP_BUSINESS: "enhanced_link_yelp_business",
      PAGES_PLATFORM_LEAD_GEN: "pages_platform_lead_gen",
      NATIVE_STORY: "native_story",
      MFS_BILL_PAY_CREATION_UPDATE: "mfs_bill_pay_creation_update",
      MFS_BILL_PAY_REFERENCE_CODE_UPDATE: "mfs_bill_pay_reference_code_update",
      MFS_BILL_PAY_AGENT_CASH_IN_UPDATE: "mfs_bill_pay_agent_cash_in_update",
      PAGES_PLATFORM_BOOKING_MESSAGE: "pages_platform_booking_message",
      EXTERNAL_GALLERY: "external_gallery",
      MEME_SHARE: "meme_share",
      MESSENGER_PLATFORM_ELEMENT: "messenger_platform_element",
      INSTANT_GAMES_SHARE_SCORE_MESSAGE: "instant_games_share_score_message",
      MESSENGER_PLATFORM_BUTTON_LIST: "messenger_platform_button_list",
      LIGHTWEIGHT_ACTION: "lightweight_action",
      TAROT_DIGEST: "tarot_digest",
      EVENT_TOUR: "event_tour",
      ADAPTIVE_MEDIA: "adaptive_media",
      DYNAMIC_GAME_BOARD: "dynamic_game_board",
      PAYMENT_PLATFORM: "payment_platform",
      OMNI_M_FLOW: "omni_m_flow",
      GROUP_QUIZ: "group_quiz",
      TRIAL_AD: "trial_ad",
      TEEM_COLLECTIONS: "teem_collections",
      CRISIS_DONATION: "crisis_donation",
      CRISIS_STATUS: "crisis_status",
      CRISIS_SHARE: "crisis_share",
      CRISIS_MARK_SAFE: "crisis_mark_safe",
      CRISIS_LISTING: "crisis_listing",
      CORONAVIRUS_HUB: "coronavirus_hub",
      CORONAVIRUS_FACTS: "coronavirus_facts",
      RACIAL_JUSTICE_HUB: "racial_justice_hub",
      FBPAY_OFFER: "fbpay_offer",
      APPLICATION_SHARE_REFERRAL: "application_share_referral",
      VR_CONTENT: "vr_content",
      VIDEO_RECOMMENDATION_HSCROLL: "video_recommendation_hscroll",
      VIDEO_TRAILER: "video_trailer",
      SHOW_PAGE_SHARE: "show_page_share",
      MFS_ATTACHMENT: "mfs_attachment",
      MFS_TIME_SENSITIVE_ATTACHMENT: "mfs_time_sensitive_attachment",
      VIDEO_RECOMMENDATION_SINGLETON: "video_recommendation_singleton",
      PAGE_REVIEW_PROMPT: "page_review_prompt",
      VIDEO_SHOW: "video_show",
      UNCONNECTED_VIDEO: "unconnected_video",
      SHOW_SHARE: "show_share",
      JOB_SEARCH_JOB_APPLICATION: "job_search_job_application",
      PAGE_MESSENGER_ATTACHMENT: "page_messenger_attachment",
      CONTACT_YOUR_REP: "contact_your_rep",
      LOCATION_EXTENSION: "location_extension",
      SERVICES_CONSUMER_HUB: "services_consumer_hub",
      PLACE_RECOMMENDATION: "place_recommendation",
      JOB_SEARCH_JOB_OPENING: "job_search_job_opening",
      PAGE_MESSAGE_ONLINE_INDICATOR: "page_message_online_indicator",
      LOCAL_PIVOT: "local_pivot",
      ORION_REQUEST_NEW: "orion_request_new",
      PHOTO_WITH_SHIELD: "photo_with_shield",
      PLAYABLE_AD: "playable_ad",
      FUN_FACT_PROMPT: "fun_fact_prompt",
      FUN_FACT_STACK: "fun_fact_stack",
      FATIGUED_SHARE: "fatigued_share",
      DISCUSSION_QUESTION: "discussion_question",
      PARTIES_INVITE: "parties_invite",
      PROFILE_INTRO_CARD_BIO: "profile_intro_card_bio",
      PAGES_SHARE: "pages_share",
      PRODUCT_RECOMMENDATION_LIST: "product_recommendation_list",
      VISUAL_POLL: "visual_poll",
      MULTI_PLACE_RECOMMENDATION: "multi_place_recommendation",
      PAGE_IN_COMMENT: "page_in_comment",
      PAGE_ANNOUNCEMENT: "page_announcement",
      MESSENGER_PLATFORM_MEDIA_ATTACHMENT:
        "messenger_platform_media_attachment",
      SCHEDULED_VIDEO_ANNOUNCEMENT: "scheduled_video_announcement",
      HSCROLL_ITEM: "hscroll_item",
      MESSENGER_CALL_LOG: "messenger_call_log",
      PAGE_REVIEW_UPDATE: "page_review_update",
      LOYALTY_CARD_OFFER: "loyalty_card_offer",
      GOODWILL_GRID: "goodwill_grid",
      TRAVEL_PLAN: "travel_plan",
      FIND_PLAYERS: "find_players",
      ASSET3D: "asset3d",
      MESSENGER_GROUP_PERSONAL_LINK: "messenger_group_personal_link",
      FREQUENTLY_ASKED_QUESTION: "frequently_asked_question",
      STORY_LIST: "story_list",
      GOODWILL_SHARED_CARD: "goodwill_shared_card",
      PAYMENT_BUBBLE_VIEW: "PAYMENT_BUBBLE_VIEW",
      POST_TO_EVENT_CREATE: "post_to_event_create",
      MONTAGE_DIRECT: "montage_direct",
      NEO_INVITATION: "NEO_INVITATION",
      NATIVE_TEMPLATES_LINK_SHARE_TEST: "native_templates_link_share_test",
      GOODWILL_HSCROLL: "goodwill_hscroll",
      NEO_KID_INITIATE_FRIENDING: "NEO_KID_INITIATE_FRIENDING",
      NEO_VIDEO_PROMPT: "NEO_VIDEO_PROMPT",
      EVENT_MICRO_ATTACHMENT: "event_micro_attachment",
      SAVED_LIST: "saved_list",
      LOCAL_GUIDE: "local_guide",
      MEET_UP_EVENT: "meet_up_event",
      DONATION: "donation",
      FUNDRAISER_FB_SEEDING_GIFT: "fundraiser_fb_seeding_gift",
      BREAKING_NEWS: "breaking_news",
      GOODWILL_COLLAGE: "goodwill_collage",
      LEAD_FORM: "lead_form",
      LEAD_FORM_USER_INFO: "lead_form_user_info",
      EVENT_TICKET_ORDER: "event_ticket_order",
      PROFILE_CHANNEL: "profile_channel",
      ICE_BREAKER: "ICE_BREAKER",
      MOVIE: "movie",
      ALOHA_CALL: "aloha_call",
      TIP_JAR_PAYMENT: "tip_jar_payment",
      SUBSCRIPTION_GIFT: "subscription_gift",
      COMMENT_MESSAGE_INFO: "comment_message_info",
      CASH_ON_DELIVERY_ORDER: "cash_on_delivery_order",
      CENSUS: "census",
      VOTE_BY_MAIL: "vote_by_mail",
      VOTER_REGISTRATION_DRIVE: "voter_registration_drive",
      VOTING_INFO: "voting_info",
      ELECTION_DAY_REMINDER: "election_day_reminder",
      ELECTION_INFO: "election_info",
      LIVING_ROOM: "living_room",
      ACHIEVEMENT_POST: "achievement_post",
      M_BIRTHDAY_REMINDER: "m_birthday_reminder",
      INSIGHTS_CHART: "insights_chart",
      GROUP_PROACTIVE_FLAGGED_POST_QUEUE: "group_proactive_flagged_post_queue",
      GROUP_ACCEPT_RULE_TO_UNMUTE: "group_accept_rule_to_unmute",
      SHOW_CLICK_TO_WATCH_TAB: "show_click_to_watch_tab",
      SHOW_CLICK_TO_WATCH_TAB_V2: "show_click_to_watch_tab_v2",
      SHOW_CLICK_TO_WATCH_TAB_V3: "show_click_to_watch_tab_v3",
      SHOW_CLICK_TO_WATCH_TAB_V4: "show_click_to_watch_tab_v4",
      SHOW_MASKED: "show_masked",
      SHOW_CONTINUE_WATCHING: "show_continue_watching",
      WATCH_CLICK_STORY_HEADER_TO_WATCH_TAB:
        "watch_click_story_header_to_watch_tab",
      FOX_ALBUM: "fox_album",
      TOOL_SHARE: "tool_share",
      PHONE_REMOVED_ACTION_LIST: "phone_removed_action_list",
      AMP: "amp",
      LDP_APP_INSTANCE: "ldp_app_instance",
      PAGE_RECOMMENDATION_V2: "page_recommendation_v2",
      PLAY_WITH_FRIENDS: "play_with_friends",
      BLOOD_REQUEST: "blood_request",
      BLOOD_DONATION_PARTNER_CTA: "blood_donation_partner_cta",
      HIGH_SCHOOL_COMMUNITY_INVITE: "high_school_community_invite",
      SCHEDULED_LIVE_VIDEO: "scheduled_live_video",
      GAMESHOW: "gameshow",
      GAMESHOW_INVITE: "gameshow_invite",
      MK_FRIEND_REQUEST: "mk_friend_request",
      GOODWILL_PHOTO_CIRCLE: "goodwill_photo_circle",
      SERVICES_APPOINTMENT_AVAILABILITY: "services_appointment_availability",
      NEO_SOCIAL_INVITATION: "neo_social_invitation",
      NEO_KID_INVITATION: "neo_kid_invitation",
      GROUP_SELL_PRODUCT_ITEM_CONDENSED: "group_sell_product_item_condensed",
      GROUP_SELL_PRODUCT_ITEM_MARK_AS_PENDING:
        "group_sell_product_item_mark_as_pending",
      GAMES_VIDEO: "games_video",
      MOVIE_WITH_SHOWTIMES: "movie_with_showtimes",
      WORK_CONTENT_ATTACHMENT: "work_content_attachment",
      GROUP_SAFETY_HUB: "group_safety_hub",
      NEWS_STORYLINE: "news_storyline",
      EVENT_TICKET_REQUEST: "event_ticket_request",
      GROUP_APPLICATION: "group_application",
      MESSAGE_MULTIPLE_LOCATIONS: "message_multiple_locations",
      TODO_LIST: "todo_list",
      PERSONAL_REMINDER: "personal_reminder",
      ARTICLE_MESSAGE: "article_message",
      PERSONAL_REMINDER_LIST: "personal_reminder_list",
      GAMES_APP: "games_app",
      GAMES_APP_SHARED: "games_app_shared",
      MOBILE_GAME_SHARE: "mobile_game_share",
      MONTAGE_MEDIA_EFFECT: "montage_media_effect",
      GROUPS_VOTER_REGISTRATION_DRIVE: "groups_voter_registration_drive",
      MONTAGE_SHARE: "montage_share",
      WEC_MESSAGE: "wec_message",
      INSTAGRAM_DIRECT_MESSAGE_ATTACHMENT:
        "instagram_direct_message_attachment",
      GROUP_APPLICATION_CTA: "group_application_cta",
      MENTORSHIP_CURRICULUM_STEP: "mentorship_curriculum_step",
      SCHEDULED_LIVING_ROOM: "scheduled_living_room",
      STORY_ADS_SURVEY: "story_ads_survey",
      MESSENGER_FORM_PROGRESS_ATTACHMENT: "messenger_form_progress_attachment",
      VIDEO_COMMERCE_INTEREST: "video_commerce_interest",
      PAGES_COMMERCE_BUYER_INTENT: "pages_commerce_buyer_intent",
      BREAKING_NEWS_STORY_GALLERY: "breaking_news_story_gallery",
      BRANDING_PLAYABLE_AD: "branding_playable_ad",
      PAGE_SURFACE_MENU_ITEM: "page_surface_menu_item",
      VIDEO_LIVING_ROOM_MESSENGER: "video_living_room_messenger",
      IMAGE_SHARE_NO_OVERLAY: "image_share_no_overlay",
      JOIN_GROUP_CTA: "join_group_cta",
      ASSISTANT_DRAFT_MESSAGE: "assistant_draft_message",
      ASSISTANT_CONTACT_INFO: "assistant_contact_info",
      NEO_DRAW_AND_GUESS_GAME_REQUEST: "neo_draw_and_guess_game_request",
      SOCIAL_LEARNING_UNIT_CREATED: "social_learning_unit_created",
      SOCIAL_LEARNING_UNIT_COMPLETED: "social_learning_unit_completed",
      GOODWILL_THROWBACK_SINGLE_PHOTO: "goodwill_throwback_single_photo",
      FAN_FUNDING_SUPPORT_CREATOR_CTA: "fan_funding_support_creator_cta",
      WOODHENGE_MEMBERSHIP_CARD: "woodhenge_membership_card",
      USER_PAY_REFERRALS_WWW: "user_pay_referrals_www",
      GOODWILL_VIDEO_SHARED_VIDEO: "goodwill_video_shared_video",
      INSTANT_GAMES_TOURNAMENT: "instant_games_tournament",
      INSTANT_GAMES_TOURNAMENT_ACTIVITY: "instant_games_tournament_activity",
      INSTANT_GAMES_UPDATE_COMMENT: "instant_games_update_comment",
      SCHEDULED_LIVE_VIDEO_POST: "scheduled_live_video_post",
      CHAT_COMMAND_RESULT: "chat_command_result",
      CROSSROADS: "crossroads",
      MOBILE_GAME_THREAD_SHARE: "mobile_game_thread_share",
      SHOW_CLICK_TO_WATCH_TOPIC: "show_click_to_watch_topic",
      LIFE_EVENT_FB_STORY: "life_event_fb_story",
      GROUP_KEYWORD_ALERTED_QUEUE: "group_keyword_alerted_queue",
      GROUP_ADMIN_AUTONOMY_REVIEW_QUEUE: "group_admin_autonomy_review_queue",
      PARENT_APPROVED_PLAIN_TEXT_BOT_MESSAGE:
        "parent_approved_plain_text_bot_message",
      LIVE_VIDEO_REHEARSAL: "live_video_rehearsal",
      ASSISTANT_CONTACT_INFO_LIST: "assistant_contact_info_list",
      PARENT_APPROVED_IMAGE_AND_TEXT_BOT_MESSAGE:
        "parent_approved_image_and_text_bot_message",
      LIVE_VIDEO_SCHEDULED_REHEARSAL: "live_video_scheduled_rehearsal",
      LIVE_VIDEO_SCHEDULED_POST_REHEARSAL:
        "live_video_scheduled_post_rehearsal",
      GROUPS_LINKED_GROUP_FEED_HSCROLL: "groups_linked_group_feed_hscroll",
      SCHEDULED_LIVING_ROOM_POST: "scheduled_living_room_post",
      EVENT_ATTENDANCE_CONFIRMATION: "event_attendance_confirmation",
      ATTACHMENT_FOOTER_SIMPLE_HEADLINE: "attachment_footer_simple_headline",
      ATTACHMENT_FOOTER_CTA: "attachment_footer_cta",
      ATTACHMENT_FOOTER_ACCENT_COLOR: "attachment_footer_accent_color",
      CLICK_TO_WATCH_TAB_WARION_V1: "click_to_watch_tab_warion_v1",
      COMMERCE_UPSELL_MESSAGE: "commerce_upsell_message",
      PROFILE_SONG: "profile_song",
      MENTORSHIP_DISCUSSION_TOPIC_SET: "mentorship_discussion_topic_set",
      LINK_SOCIAL_CONTEXT: "link_social_context",
      POLITICAL_CANDIDATE_VIDEO: "political_candidate_video",
      TWEENS_WOULD_YOU_RATHER: "tweens_would_you_rather",
      TWEENS_INTEREST_CONTENT: "tweens_interest_content",
      SERVICES_GENERIC_ADMIN_TEXT: "services_generic_admin_text",
      MENTORSHIP_H_SCROLL: "mentorship_h_scroll",
      CRS_FEED_LINK_LARGE: "crs_feed_link_large",
      CRS_FEED_LINK_SMALL: "crs_feed_link_small",
      CRS_FEED_PHOTO_SMALL: "crs_feed_photo_small",
      CRS_FEED_PHOTO_LARGE: "crs_feed_photo_large",
      ANONYMOUS_AUTHOR_INFO: "anonymous_author_info",
      MENTORSHIP_XMA: "mentorship_xma",
      GEMSTONE_CENTERED_CONTENT: "gemstone",
      SHOW_EPISODE: "show_episode",
      PLAYLIST_VIDEO: "playlist_video",
      RECRUITING_CANDIDATE: "recruiting_candidate",
      RECRUITING_RESUME_REVIEW: "recruiting_resume_review",
      RECRUITING_GROUP_CONSIDERATION_SHARE:
        "recruiting_group_consideration_share",
      RECRUITING_GROUP_CANDIDATE_SHARE: "recruiting_group_candidate_share",
      INTERVIEW_MARKETPLACE_LISTING: "interview_marketplace_listing",
      VIDEO_LIST: "video_list",
      GROUPS_BUY_SELL_TAB_SALE_ITEM: "groups_buy_sell_tab_sale_item",
      ALBUM_SALE_ITEM: "album_sale_item",
      PHOTO_SALE_ITEM: "photo_sale_item",
      MARKETPLACE_GENERIC_ADMIN_TEXT: "marketplace_generic_admin_text",
      PARENT_APPROVED_USER_SCHOOL_REQUEST:
        "parent_approved_user_school_request",
      PARENT_APPROVED_REMIX_PHOTO_REQUEST:
        "PARENT_APPROVED_REMIX_PHOTO_REQUEST",
      ANONYMOUS_POST_CONTENT: "anonymous_post_content",
      TWEENS_TOPIC_STORY: "tweens_topic_story",
      NEO_KID_PARENT_INVITATION: "neo_kid_parent_invitation",
      GAMING_VIDEO_CHAT_ATTACHMENT: "gaming_video_chat_attachment",
      GAMING_VIDEO_CLIP_ATTACHMENT: "gaming_video_clip_attachment",
      MARKETPLACE_RATE_SELLER_REQUEST: "marketplace_rate_seller_request",
      MARKETPLACE_QUICK_RESPONSE: "marketplace_quick_response",
      GROUP_INVITE_NONMEMBER_MENTIONED: "group_invite_nonmember_mentioned",
      AR_AD: "ar_ad",
      INSTANT_GAMES_INTERACTIVE_POLL: "instant_games_interactive_poll",
      CHATROOM: "chatroom",
      MARKETPLACE_ECOMM_PRODUCT_ITEM: "marketplace_ecomm_product_item",
      VOLUNTEERING_SUPPORT_RELATIONSHIP: "volunteering_support_relationship",
      MARKETPLACE_OFFER: "marketplace_offer",
      VIDEO_HOME_ELIGIBLE_VIDEO_ENDSCREEN:
        "video_home_eligible_video_endscreen",
      COMMERCE_ATTACHMENT: "commerce_attachment",
      GOODWILL_PRODUCT_SYSTEM_CAMPAIGN: "goodwill_product_system_campaign",
      WORK_SHIFT_SWAP: "work_shift_swap",
      FLIPPER_TRACE: "flipper_trace",
      MARKETPLACE_BOT_ORDER_DETAILS: "marketplace_bot_order_details",
      NEO_ASYNC_GAME_REQUEST: "neo_async_game_request",
      GROUP_PENDING_ANONYMOUS_POST_DISCLAIMER:
        "group_pending_anonymous_post_disclaimer",
      AVATAR_FEATURE: "avatar_feature",
      FIRST_PARTY_MUSIC: "first_party_music",
      STORY_CARD_PHOTO: "story_card_photo",
      STORY_CARD_VIDEO: "story_card_video",
      CRICKET_VIDEO: "cricket_video",
      C4G_THREAD_CREATION: "c4g_thread_creation",
      QUARANTINED_VIDEO: "quarantined_video",
      WORK_MAJOR_EVENT: "work_major_event",
      WORK_CHECKLIST: "work_checklist",
      MESSENGER_GENERIC_TEMPLATE: "messenger_generic_template",
      IG_ANIMATED_IMAGE_AUTOPLAY: "ig_animated_image_autoplay",
      VIDEO_MEETUP: "video_meetup",
      CRISIS_HUB: "crisis_hub",
      COLLABORATIVE_DOCUMENT: "collaborative_document",
      AMA_POST: "ama_post",
      ROOMS_SPEAKEASY_XMA: "rooms_speakeasy_xma",
      COLLAB_MEDIA: "collab_media",
      MARKETPLACE_TXN_QUESTION: "marketplace_txn_question",
      KNOWLEDGE_NOTE: "knowledge_note",
      KNOWLEDGE_COLLECTION: "knowledge_collection",
      GIFT_CARD: "gift_card",
      VIDEO_MEETUP_LINK: "video_meetup_link",
      COMMUNITY_PROMPT: "community_prompt",
      COMMUNITY_PROMPT_FOOTER: "community_prompt_footer",
      MARKETPLACE_GENERIC_XMA: "marketplace_generic_xma",
      TOURNAMENT_MATCH_SET: "tournament_match_set",
      FB_SHORTS: "fb_shorts",
      FB_SHORTS_CREATION: "fb_shorts_creation",
      C4G_MESSAGE: "c4g_message",
      COMMUNITY_QUESTIONS: "community_questions",
      MILAN_WORKOUT: "milan_workout",
      IN_THREAD_MULTIPHOTO_CAROUSEL: "in_thread_multiphoto_carousel",
      SHOP_PRODUCT_ITEM: "shop_product_item",
      NEO_SHORT_FORM_VIDEO: "neo_short_form_video",
      WORK_JOINABLE_CALL_INVITE: "work_joinable_call_invite",
      WORK_MEETING: "work_meeting",
      PROFILE_COMMERCE_POST: "profile_commerce_post",
      GAMING_COPLAY_SHARE_LINK: "gaming_coplay_share_link",
      ROOMS_SPEAKEASY_TOMBSTONE_XMA: "rooms_speakeasy_tombstone_xma",
      COMMUNITY_QA: "community_qa",
      FUNDRAISER_PERSON_TO_CHARITY_VIDEO: "fundraiser_person_to_charity_video",
      WORKPLACE_APPROVALS: "workplace_approvals",
      GROUP_VOTER_PLEDGE_DRIVE: "group_voter_pledge_drive",
      SHOP_ORDER_UPDATES: "shop_order_updates",
      SHOP_ORDER_UPDATES_COLLAPSED: "shop_order_updates_collapsed",
      PREVENTIVE_HEALTH_FLU_SHOT_PLEDGE: "preventive_health_flu_shot_pledge",
      PREVENTIVE_HEALTH_COVID_VACCINE_FINDER:
        "preventive_health_covid_vaccine_finder",
      PREVENTIVE_HEALTH_COVID_VACCINE_FINDER_PROVIDER:
        "preventive_health_covid_vaccine_finder_provider",
      PRAYER: "neon",
      GAMES_SERVICE_PLAYER_INVITE_MESSAGE:
        "games_service_player_invite_message",
      REPORTED_GROUP_EVENT: "reported_group_event",
      WORK_MEETING_TRANSCRIPT: "work_meeting_transcript",
      INTERACTIVE_MEDIA: "interactive_media",
      SHOP_STOREFRONT: "shop_storefront",
      MESSENGER_KIDS_IMAGE_CARD_SHARE: "messenger_kids_image_card_share",
      CROWDSOURCING_BADGE: "crowdsourcing_badge",
      RECRUITING_CONTRIBUTIONS_LEADERBOARD:
        "recruiting_contributions_leaderboard",
      GRATITUDE: "gratitude",
      LOOKING_FOR_PLAYERS: "looking_for_players",
      VOLUNTEERING_EVENT: "volunteering_event",
      VOLUNTEERING_EVENT_ACTIVITY_SHIFT: "volunteering_event_activity_shift",
      MARKETPLACE_MEETING_PLAN: "marketplace_meeting_plan",
      QA_APPROVED_ANSWER: "qa_approved_answer",
      FACTS_IN_COMMENTS: "facts_in_comments",
      COMMUNITY_PRODUCT_RECOMMENDATION_IN_COMMENTS:
        "community_product_recommendation_in_comments",
      MIB_GENERIC_XMA: "mib_generic_xma",
      COMMUNITY_PRODUCT_RECOMMENDATIONS_IN_POST:
        "community_product_recommendations_in_post",
      GROUP_WELCOME_POST: "group_welcome_post",
      FB_NOTE: "fb_note",
      AVATAR_WITH_BLURRED_BACKGROUND: "avatar_with_blurred_background",
      ANSWER_CARD_STACK: "answer_card_stack",
      SOUNDBITE: "soundbite",
      FISHBOWL: "fishbowl",
      DISCUSSION_POST_ATTACHMENT: "discussion_post_attachment",
      SHOP_STOREFRONT_XMA: "shop_storefront_xma",
      SHARE_HUB_UNITS: "share_hub_units",
      FANTASY_GAMES_GAME: "fantasy_games_game",
      MEDIA_POLL: "media_poll",
      FANTASY_GAMES_QUESTION: "fantasy_games_question",
      GRATITUDE_MOG: "gratitude_mog",
      GROUP_REFERRAL: "group_referral",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerMessageTransformer.bs",
  [
    "CurrentUser",
    "FBIDCheck",
    "InstantGameUpdateXMATUpdateType",
    "MNCommerceMessageType",
    "MercuryActionType",
    "MercuryIDs",
    "MercuryLogMessageType",
    "MercurySourceType",
    "MessageProfileRangeType",
    "MessageUnsendabilityStatus.bs",
    "MessagingGenericAdminTextType",
    "MessagingTagUtils",
    "MessengerAttachmentTransformer.bs",
    "P2PPaymentLogMessageSubtype",
    "StoryAttachmentStyle",
    "bs_caml_format",
    "bs_caml_option",
    "bs_js_dict",
    "bs_js_null_undefined",
    "getByPath",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      a = a.blob_attachments;
      var b = [];
      a == null ||
        a.forEach(function (a) {
          if (a.__typename === "MessageImage") {
            b.push({
              TAG: 0,
              _0: {
                attribution_app: a.attribution_app,
                attribution_metadata: a.attribution_metadata,
                blurred_image_uri: a.blurred_image_uri,
                filename: a.filename,
                id: a.id,
                preview: a.preview,
                large_preview: a.large_preview,
                thumbnail: a.thumbnail,
                legacy_attachment_id: a.legacy_attachment_id,
                original_dimensions: a.original_dimensions,
                original_extension: a.original_extension,
                render_as_sticker: a.render_as_sticker,
                photo_encodings: a.photo_encodings,
              },
            });
            return;
          } else if (a.__typename === "MessageAnimatedImage") {
            b.push({
              TAG: 1,
              _0: {
                attribution_app: a.attribution_app,
                attribution_metadata: a.attribution_metadata,
                filename: a.filename,
                animated_image: a.animated_image,
                legacy_attachment_id: a.legacy_attachment_id,
                preview_image: a.preview_image,
                original_dimensions: a.original_dimensions,
                title: a.animated_image_caption,
              },
            });
            return;
          } else if (a.__typename === "MessageAudio") {
            b.push({
              TAG: 2,
              _0: {
                attribution_app: a.attribution_app,
                attribution_metadata: a.attribution_metadata,
                filename: a.filename,
                playable_url: a.playable_url,
                playable_duration_in_ms: a.playable_duration_in_ms,
                is_voicemail: a.is_voicemail,
                audio_type: a.audio_type,
                url_shimhash: a.url_shimhash,
                url_skipshim: a.url_skipshim,
              },
            });
            return;
          } else if (a.__typename === "MessageVideo") {
            b.push({
              TAG: 3,
              _0: {
                attribution_app: a.attribution_app,
                attribution_metadata: a.attribution_metadata,
                filename: a.filename,
                playable_url: a.playable_url,
                playable_duration_in_ms: a.playable_duration_in_ms,
                legacy_attachment_id: a.legacy_attachment_id,
                chat_image: a.chat_image,
                video_type: a.video_type,
                original_dimensions: a.original_dimensions,
                large_image: a.large_image,
                inbox_image: a.inbox_image,
              },
            });
            return;
          } else if (a.__typename === "MessageFile") {
            b.push({
              TAG: 4,
              _0: {
                attribution_app: a.attribution_app,
                attribution_metadata: a.attribution_metadata,
                filename: a.filename,
                url: a.url,
                mimetype: a.mimetype,
                content_type: a.content_type,
                is_malicious: a.is_malicious,
                message_file_fbid: a.message_file_fbid,
                url_shimhash: a.url_shimhash,
                url_skipshim: a.url_skipshim,
                preview_url: a.preview_url,
                preview: a.preview,
              },
            });
            return;
          } else return;
        });
      return b;
    }
    function h(a, c, d) {
      var e = c.call_capture_attachments;
      if (e == null) return [];
      else
        return b("MessengerAttachmentTransformer.bs").transformAttachment(
          a,
          {
            extensible_attachment: null,
            blob_attachments: g({
              blob_attachments: e.edges.map(function (a) {
                return a.node;
              }),
            }),
            sticker: null,
          },
          c.message_id,
          d
        );
    }
    function i(a, c, d, e, f) {
      if (c.__typename === "GroupPollExtensibleMessageAdminText") {
        var g = c.question,
          i;
        if (g == null) i = [{}, null];
        else {
          var j = Object.assign({}, g);
          Object.assign(j, {
            total_count: c.total_count,
            options: g.options.nodes.map(function (a) {
              var b = Object.assign({}, a);
              return Object.assign(b, {
                total_count: a.voters.nodes.length,
                voters: a.voters.nodes.map(function (a) {
                  return a.id;
                }),
              });
            }),
          });
          i = [j, g.id];
        }
        j = {
          message_type: b("bs_js_null_undefined").fromOption(
            b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)
          ),
          untypedData: {
            event_type: c.event_type.toLowerCase(),
            question_id: i[1],
            question_json: b("bs_js_null_undefined").fromOption(
              JSON.stringify(i[0])
            ),
          },
        };
      } else if (
        c.__typename === "InstantGameUpdateExtensibleMessageAdminText"
      ) {
        j = {
          message_type: b("bs_js_null_undefined").fromOption(
            b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)
          ),
          untypedData: {
            game_id: (g = b("getByPath"))(c, ["game", "id"]),
            update_type: b("bs_js_null_undefined").fromOption(
              b("bs_js_dict").get(
                b("InstantGameUpdateXMATUpdateType"),
                c.update_type
              )
            ),
            collapsed_text: c.collapsed_text,
            expanded_text: c.expanded_text,
            leaderboard_json: c.leaderboard_json,
            cta_url: g(c, ["instant_game_update_data", "cta_url"]),
            cta_title: g(c, ["instant_game_update_data", "cta_title"]),
            custom_image_url: g(c, [
              "instant_game_update_data",
              "photo",
              "image",
              "uri",
            ]),
            template: g(c, ["instant_game_update_data", "template"]),
          },
        };
      } else if (c.__typename === "MessengerAdContextAdminText")
        j = {
          message_type: b("bs_js_null_undefined").fromOption(
            b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)
          ),
          untypedData: { ad_url: c.ad_url },
        };
      else if (c.__typename === "AdExtensibleMessageAdminText")
        j = {
          message_type: b("bs_js_null_undefined").fromOption(
            b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)
          ),
          untypedData: {
            ad_client_token: c.ad_client_token,
            ad_id: c.ad_id,
            ad_preferences_link: c.ad_preferences_link,
            ad_properties: c.ad_properties,
          },
        };
      else if (c.__typename === "MessengerCallLogExtensibleMessageAdminText")
        j = {
          message_type: b("bs_js_null_undefined").fromOption(
            b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)
          ),
          untypedData: Object.assign(Object.assign({}, c), {
            call_capture_attachments: h(a, c, f),
          }),
        };
      else if (
        c.__typename === "ThemeColorExtensibleMessageAdminText" ||
        c.__typename === "ThreadIconExtensibleMessageAdminText" ||
        c.__typename === "ThreadNicknameExtensibleMessageAdminText" ||
        c.__typename === "AcceptPendingThreadExtensibleMessageAdminText" ||
        c.__typename === "AddContactExtensibleMessageAdminText" ||
        c.__typename === "RtcCallLogExtensibleMessageAdminText" ||
        c.__typename === "GameScoreExtensibleMessageAdminText" ||
        c.__typename === "ConfirmFriendRequestExtensibleMessageAdminText" ||
        c.__typename === "MessengerGrowthGenericExtensibleMessageAdminText" ||
        c.__typename === "PartiesInviteExtensibleMessageAdminText" ||
        c.__typename === "AppointmentReminderExtensibleMessageAdminText" ||
        c.__typename === "LinkCTAExtensibleMessageAdminText" ||
        c.__typename ===
          "GraphQLServicesAppointmentsOptOutExtensibleMessageAdminText" ||
        c.__typename === "ServicesLeadGenSurveyExtensibleMessageAdminText" ||
        c.__typename ===
          "ServicesLeadGenSurveyEditExtensibleMessageAdminText" ||
        c.__typename ===
          "MessengerIcebreakerVoteCastExtensibleMessageAdminText" ||
        c.__typename === "PagesMarkAsPaidExtensibleMessageAdminText" ||
        c.__typename === "PagesMarkAsPaidNewExtensibleMessageAdminText" ||
        c.__typename === "WorkBotInstalledExtensibleMessageAdminText" ||
        c.__typename === "WorkChatReminderLinkCTAExtensibleMessageAdminText" ||
        c.__typename === "PageThreadActionSystemAddDetailsXMAT" ||
        c.__typename === "MagicWordsExtensibleMessageAdminText" ||
        c.__typename === "PostSharedFromGroupExtensibleMessageAdminText"
      )
        j = {
          message_type: b("bs_js_null_undefined").fromOption(
            b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)
          ),
          untypedData: Object.assign({}, c),
        };
      else if (
        c.__typename === "LightweightEventCreateExtensibleMessageAdminText" ||
        c.__typename === "LightweightEventDeleteExtensibleMessageAdminText" ||
        c.__typename ===
          "LightweightEventNotifyBeforeEventExtensibleMessageAdminText" ||
        c.__typename === "LightweightEventNotifyExtensibleMessageAdminText" ||
        c.__typename === "LightweightEventUpdateExtensibleMessageAdminText" ||
        c.__typename ===
          "LightweightEventUpdateLocationExtensibleMessageAdminText" ||
        c.__typename ===
          "LightweightEventUpdateTimeExtensibleMessageAdminText" ||
        c.__typename ===
          "LightweightEventUpdateTitleExtensibleMessageAdminText" ||
        c.__typename === "LightweightEventRSVPExtensibleMessageAdminText"
      ) {
        i = c.event_reminder;
        if (i == null) g = void 0;
        else {
          a = i.lightweight_event_creator;
          f = a == null ? void 0 : a.id;
          a = i.location_page;
          a = a == null ? void 0 : a.id;
          var k = i.timezone_id;
          k = k == null ? void 0 : k.timezone;
          var l = i.location_coordinates;
          l = l == null ? { latitude: void 0, longitude: void 0 } : l;
          var m = i.event_reminder_members;
          m = m == null ? void 0 : m.edges;
          g = {
            event_creator_id: f,
            event_id: i.id,
            event_location_id: a,
            event_location_name: i.location_name,
            event_seconds_to_notify_before: i.seconds_to_notify_before,
            event_time: i.time,
            event_end_time: i.end_time,
            event_timezone: k,
            event_title: i.event_title,
            event_type: i.lightweight_event_type,
            event_track_rsvp: i.allows_rsvp,
            latitude: l.latitude,
            longitude: l.longitude,
            guest_state_list: m,
            guest_id: c.guest_id,
            guest_status: c.guest_status,
          };
        }
        j = {
          message_type: b("bs_js_null_undefined").fromOption(
            b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)
          ),
          untypedData: g,
        };
      } else
        j =
          c.__typename === "AdReplyMessageAdminText"
            ? {
                message_type: b("bs_js_null_undefined").fromOption(
                  b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)
                ),
                untypedData: {
                  ad_url: c.ad_url,
                  should_show_url: c.should_show_url,
                },
              }
            : {
                message_type: b("bs_js_null_undefined").fromOption(
                  b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)
                ),
                untypedData: void 0,
              };
      return {
        log_message_body: e,
        log_message_data: j,
        log_message_type: b("MercuryLogMessageType").GENERIC_ADMIN_TEXT,
      };
    }
    function j(a) {
      return a.map(function (a) {
        if (a === "p2p_transfer") return b("StoryAttachmentStyle").ORION;
        else if (a === "p2p_payment_request")
          return b("StoryAttachmentStyle").ORION_REQUEST;
        else return a;
      });
    }
    function k(a) {
      var b = a.target,
        c;
      if (b == null) c = null;
      else if (b.__typename === "CrisisListing")
        c = {
          TAG: 0,
          _0: {
            listing_type: b.listing_type,
            listing_category: b.listing_category,
            map_image: b.map_image,
          },
        };
      else if (b.__typename === "MoneyTransfer")
        c = {
          TAG: 1,
          _0: {
            sender: b.sender,
            receiver: b.receiver,
            transfer_id: b.transfer_id,
            bubble_view: b.bubble_view,
          },
        };
      else if (b.__typename === "PeerToPeerTransfer")
        c = {
          TAG: 2,
          _0: {
            sender: b.sender,
            receiver_profile: b.receiver_profile,
            transaction_amount: b.transaction_amount,
            transfer_status: b.transfer_status,
            transfer_id: b.transfer_id,
            completedTime: b.completedTime,
            updatedTime: b.updatedTime,
            creationTime: b.creationTime,
            transfer_context: b.transfer_context,
            amount_fb_discount: b.amount_fb_discount,
            funds_availability: b.funds_availability,
            group_thread_fbid: b.group_thread_fbid,
            platform_item: b.platform_item,
            id: b.id,
            status_description: b.status_description,
            bubble_view: b.bubble_view,
            currency_amount: b.currency_amount,
            memo_text: b.memo_text,
          },
        };
      else if (b.__typename === "PeerToPeerPaymentRequest")
        c = {
          TAG: 3,
          _0: {
            amount: b.amount,
            transaction_amount: b.transaction_amount,
            requester: b.requester,
            requestee: b.requestee,
            request_status: b.request_status,
            request_theme: b.request_theme,
            id: b.id,
            memo_text: b.memo_text,
            transfer: b.transfer,
            creation_time: b.creation_time,
            group_thread_fbid: b.group_thread_fbid,
            updated_time: b.updated_time,
            status_description: b.status_description,
            bubble_view: b.bubble_view,
            individual_requests: b.individual_requests,
          },
        };
      else if (b.__typename === "PaymentPlatformAttachment")
        c = {
          TAG: 4,
          _0: {
            payment_modules_client: b.payment_modules_client,
            is_viewer_seller: b.is_viewer_seller,
            payment_snippet: b.payment_snippet,
            item_list: b.item_list,
            components: b.components,
            payment_call_to_actions: b.payment_call_to_actions,
            click_action: b.click_action,
            summary_action: b.summary_action,
            invoicer_id: b.invoicer_id,
            is_last_attachment: b.is_last_attachment,
            payment_total: b.payment_total,
            product_detail: b.product_detail,
            payment_status_icon: b.payment_status_icon,
            user_facing_payment_status: b.user_facing_payment_status,
            payment_sub_statuses: b.payment_sub_statuses,
            should_show_new_xma: b.should_show_new_xma,
            buyer_name: b.buyer_name,
          },
        };
      else if (b.__typename === "MessengerRetailPromotion")
        c = {
          TAG: 5,
          _0: {
            message: b.message,
            call_to_actions: b.call_to_actions,
            promotion_items: b.promotion_items,
          },
        };
      else if (b.__typename === "MessengerBusinessMessage")
        c = {
          TAG: 6,
          _0: {
            message: b.message,
            call_to_actions: b.call_to_actions,
            business_items: b.business_items,
          },
        };
      else if (b.__typename === "Video")
        c = { TAG: 7, _0: { video_id: b.video_id } };
      else if (b.__typename === "PagesPlatformLeadGenInfo")
        c = { TAG: 8, _0: { field_data_list: b.field_data_list } };
      else if (b.__typename === "MessageLiveLocation")
        c = {
          TAG: 9,
          _0: {
            live_location_id: b.live_location_id,
            is_expired: b.is_expired,
            expiration_time: b.expiration_time,
            sender: b.sender,
            coordinate: b.coordinate,
            location_title: b.location_title,
            sender_destination: b.sender_destination,
            stop_reason: b.stop_reason,
          },
        };
      else if (b.__typename === "QuickInvite")
        c = {
          TAG: 10,
          _0: {
            id: b.id,
            invite_sender: b.invite_sender,
            invite_recipient: b.invite_recipient,
          },
        };
      else if (b.__typename === "PagesPlatformBookingMessage")
        c = {
          TAG: 11,
          _0: {
            id: b.id,
            page: b.page,
            message_bubble_type: b.message_bubble_type,
            user: b.user,
            ls_xma_title: b.ls_xma_title,
            ls_xma_subtitle: b.ls_xma_subtitle,
            native_component_flow_request: b.native_component_flow_request,
          },
        };
      else if (b.__typename === "ServicesAppointmentAvailability")
        c = {
          TAG: 12,
          _0: {
            id: b.id,
            page: b.page,
            consumer: b.consumer,
            formatted_available_time_ranges: b.formatted_available_time_ranges,
            has_booking_request_created: b.has_booking_request_created,
          },
        };
      else if (b.__typename === "ServicesGenericAdminText")
        c = { TAG: 13, _0: { id: b.id } };
      else if (b.__typename === "GenieMessage")
        c = {
          TAG: 14,
          _0: {
            genie_sender: b.genie_sender,
            story_attachment: b.story_attachment,
          },
        };
      else if (b.__typename === "Event")
        c = {
          TAG: 15,
          _0: {
            eventID: b.eventID,
            guestStatus: b.guestStatus,
            canViewerJoin: b.canViewerJoin,
            timeString: b.timeString,
            event_place: b.event_place,
            social_context: b.social_context,
            watchStatus: b.watchStatus,
            connection_style: b.connection_style,
            canViewerWatch: b.canViewerWatch,
            profile_picture: b.profile_picture,
            name: b.name,
            start_timestamp: b.start_timestamp,
          },
        };
      else if (b.__typename === "ExternalSong")
        c = {
          TAG: 16,
          _0: {
            application_name: b.application_name,
            artist_names: b.artist_names,
            audio_url: b.audio_url,
            duration_ms: b.duration_ms,
            music_title: b.music_title,
          },
        };
      else if (b.__typename === "LightweightAction")
        c = { TAG: 17, _0: { lwa_state: b.lwa_state, lwa_type: b.lwa_type } };
      else if (b.__typename === "MessengerRetailItem")
        c = {
          TAG: 18,
          _0: {
            id: b.id,
            name: b.name,
            desc: b.desc,
            thumb_url: b.thumb_url,
            item_url: b.item_url,
            source: b.source,
            image_aspect_ratio: b.image_aspect_ratio,
            first_metaline: b.first_metaline,
            second_metaline: b.second_metaline,
            third_metaline: b.third_metaline,
            default_action: b.default_action,
            call_to_actions: b.call_to_actions,
          },
        };
      else if (b.__typename === "AgentItemSuggestion")
        c = {
          TAG: 19,
          _0: {
            id: b.id,
            desc: b.desc,
            total_cost: b.total_cost,
            merchant_name: b.merchant_name,
            target_url: b.target_url,
            thumb_url: b.thumb_url,
            raw_amount: b.raw_amount,
            payment: b.payment,
            price_amount: b.price_amount,
            price_currency: b.price_currency,
            name: b.name,
          },
        };
      else if (
        b.__typename === "FundraiserPersonToCharity" ||
        b.__typename === "FundraiserPersonForPerson"
      ) {
        var d = b.fundraiser_detailed_progress_text,
          e = b.fundraiser_subtitle_text,
          f = b.focused_cover_photo;
        c = {
          TAG: 20,
          _0: {
            fundraiserID: b.id,
            canDonate: b.can_donate,
            hasViewerDonated: b.has_viewer_donated,
            fundraiserDetailedProgressText: d == null ? null : d.text,
            fundraiserSubtitleText: e == null ? null : e.text,
            focusedCoverPhoto:
              f == null
                ? null
                : {
                    src: f.photo.image.uri,
                    data: {
                      height: f.photo.image.height,
                      width: f.photo.image.width,
                    },
                  },
          },
        };
      } else
        c =
          b.__typename === "MessengerRetailReceipt"
            ? {
                TAG: 21,
                _0: {
                  account_holder_name: b.account_holder_name,
                  adjustments: b.retail_adjustments,
                  cancellation_url: b.cancellation_url,
                  items: b.retail_items,
                  merchant_name: b.merchant_name,
                  messenger_commerce_bubble_type: b.bubble_type,
                  order_id: b.receipt_id,
                  order_time: b.order_time_for_display,
                  order_url: b.receipt_url,
                  payment_method: b.order_payment_method,
                  receipt_id: b.id,
                  recipient_name: b.recipient_name,
                  shipping_cost: b.shipping_cost,
                  shipping_method: b.shipping_method,
                  status: b.status,
                  structured_address: b.structured_address,
                  subtotal: b.subtotal,
                  total_cost: b.total,
                  total_tax: b.tax,
                  partner_logo: b.partner_log,
                },
              }
            : b.__typename === "JobApplication"
            ? { TAG: 22, _0: { id: b.id } }
            : b.__typename === "GroupCommerceProductItem"
            ? {
                TAG: 23,
                _0: {
                  group_commerce_item_description:
                    b.group_commerce_item_description,
                  group_commerce_item_seller: b.group_commerce_item_seller,
                  formatted_price: b.formatted_price,
                  group_commerce_item_title: b.group_commerce_item_title,
                  primary_photo: b.primary_photo,
                  url: b.url,
                },
              }
            : b.__typename === "Page"
            ? {
                TAG: 24,
                _0: {
                  address: b.address,
                  top_category_name: b.top_category_name,
                  cover_photo: b.cover_photo,
                  location: b.location,
                  name: b.name,
                  overall_star_rating: b.overall_star_rating,
                  id: b.id,
                  price_range_description: b.price_range_description,
                },
              }
            : b.__typename === "MessengerEventReminder"
            ? {
                TAG: 25,
                _0: {
                  is_active: b.is_active,
                  event_title: b.event_title,
                  time: b.time,
                },
              }
            : b.__typename === "AirlineBoardingPassCollectionMessageAttachment"
            ? {
                TAG: 26,
                _0: {
                  tint_color: b.tint_color,
                  logo: b.logo,
                  flight_label: b.flight_label,
                  boarding_time_label: b.boarding_time_label,
                  departure_label: b.departure_label,
                  passenger_names_label: b.passenger_names_label,
                  passenger_seat_label: b.passenger_seat_label,
                  flight_terminal_label: b.flight_terminal_label,
                  flight_gate_label: b.flight_gate_label,
                  view_boarding_pass_cta_label: b.view_boarding_pass_cta_label,
                  boarding_passes: b.boarding_passes,
                  share_cta_label: b.share_cta_label,
                  message_cta_label: b.message_cta_label,
                  boarding_pass_title_label: b.boarding_pass_title_label,
                  boarding_pass_error_title_label:
                    b.boarding_pass_error_title_label,
                },
              }
            : b.__typename === "AirlineCheckInReminderMessageAttachment"
            ? {
                TAG: 27,
                _0: {
                  pnr_number: b.pnr_number,
                  tint_color: b.tint_color,
                  checkin_url: b.checkin_url,
                  booking_number_label: b.booking_number_label,
                  flight_label: b.flight_label,
                  arrival_time_label: b.arrival_time_label,
                  departure_time_label: b.departure_time_label,
                  checkin_cta_label: b.checkin_cta_label,
                  logo: b.logo,
                  flight_infos: b.flight_infos,
                },
              }
            : b.__typename === "AirlineUpdateMessageAttachment"
            ? {
                TAG: 28,
                _0: {
                  pnr_number: b.pnr_number,
                  tint_color: b.tint_color,
                  update_type: b.update_type,
                  departure_time_label: b.departure_time_label,
                  arrival_time_label: b.arrival_time_label,
                  booking_number_label: b.booking_number_label,
                  flight_gate_label: b.flight_gate_label,
                  flight_label: b.flight_label,
                  flight_status_label: b.flight_status_label,
                  passenger_names_label: b.passenger_names_label,
                  passenger_seat_label: b.passenger_seat_label,
                  logo: b.logo,
                  flight_info: b.flight_info,
                  hightlighted_labels: b.hightlighted_labels,
                },
              }
            : b.__typename === "AirlineItineraryMessageAttachment"
            ? {
                TAG: 29,
                _0: {
                  confirmation_number: b.confirmation_number,
                  pnr_number: b.pnr_number,
                  tint_color: b.tint_color,
                  formatted_total: b.formatted_total,
                  itemized_price_infos: b.itemized_price_infos,
                  formatted_tax: b.formatted_tax,
                  formatted_base_price: b.formatted_base_price,
                  passenger_infos: b.passenger_infos,
                  logo: b.logo,
                  aircraft_type_label: b.aircraft_type_label,
                  arrival_time_label: b.arrival_time_label,
                  base_price_label: b.base_price_label,
                  booking_number_label: b.booking_number_label,
                  cabin_type_label: b.cabin_type_label,
                  departure_time_label: b.departure_time_label,
                  flight_confirmation_label: b.flight_confirmation_label,
                  flight_date_label: b.flight_date_label,
                  flight_label: b.flight_label,
                  flight_terminal_label: b.flight_terminal_label,
                  itinerary_error_title_label: b.itinerary_error_title_label,
                  itinerary_title_label: b.itinerary_title_label,
                  passenger_name_label: b.passenger_name_label,
                  passenger_names_label: b.passenger_names_label,
                  passenger_seat_label: b.passenger_seat_label,
                  purchase_summary_label: b.purchase_summary_label,
                  taxes_label: b.taxes_label,
                  total_label: b.total_label,
                  view_details_cta_label: b.view_details_cta_label,
                  itinerary_legs: b.itinerary_legs,
                },
              }
            : b.__typename === "MessengerRetailShipmentTrackingEvent"
            ? {
                TAG: 30,
                _0: {
                  id: b.id,
                  shipment: b.shipment,
                  tracking_event_time_for_display:
                    b.tracking_event_time_for_display,
                  shipment_tracking_event_type: b.shipment_tracking_event_type,
                  messenger_commerce_location: b.messenger_commerce_location,
                  tracking_event_description: b.tracking_event_description,
                  bubble_type: b.bubble_type,
                },
              }
            : b.__typename === "MessengerRetailShipment"
            ? {
                TAG: 31,
                _0: {
                  id: b.id,
                  tracking_number: b.tracking_number,
                  shipdate_for_display: b.shipdate_for_display,
                  estimated_delivery_time_for_display:
                    b.estimated_delivery_time_for_display,
                  commerce_origin: b.commerce_origin,
                  commerce_destination: b.commerce_destination,
                  retail_carrier: b.retail_carrier,
                  shipment_tracking_events: b.shipment_tracking_events,
                  receipt: b.receipt,
                  recipient: b.recipient,
                  retail_shipment_items: b.retail_shipment_items,
                  bubble_type: b.bubble_type,
                },
              }
            : b.__typename === "EventAttendanceConfirmation"
            ? {
                TAG: 33,
                _0: {
                  id: b.id,
                  num_guests: b.num_guests,
                  attendee_answers: b.attendee_answers,
                  event: b.event,
                },
              }
            : b.__typename === "LeadGenDeepLinkData"
            ? {
                TAG: 32,
                _0: {
                  id: b.id,
                  cover_image: b.cover_image,
                  headline: b.headline,
                  name: b.name,
                  page: b.page,
                },
              }
            : b.__typename === "UserLeadGenInfo"
            ? { TAG: 34, _0: { id: b.id, field_data: b.field_data } }
            : b.__typename === "WECMessageAudio"
            ? {
                TAG: 38,
                _0: {
                  id: b.id,
                  filename: b.filename,
                  playable_url: b.playable_url,
                  url_shimhash: b.url_shimhash,
                  filesize: b.filesize,
                  extension: b.extension,
                  duration: b.duration,
                },
              }
            : b.__typename === "IceBreakerMessageAttachment"
            ? {
                TAG: 35,
                _0: {
                  ice_breaker_title: b.ice_breaker_title,
                  ice_breaker_messages: b.ice_breaker_messages,
                  ad_id: b.ad_id,
                },
              }
            : b.__typename === "WECMessage"
            ? {
                TAG: 36,
                _0: {
                  sender_wec_number: b.sender_wec_number,
                  sender_wec_number_formated: b.sender_wec_number_formated,
                  sender_wec_number_fbid: b.sender_wec_number_fbid,
                  sender_wec_name: b.sender_wec_name,
                },
              }
            : b.__typename === "WECMessageImage"
            ? {
                TAG: 37,
                _0: {
                  id: b.id,
                  extension: b.extension,
                  preview: b.preview,
                  large_preview: b.large_preview,
                },
              }
            : b.__typename === "WECMessageFile"
            ? {
                TAG: 39,
                _0: {
                  id: b.id,
                  name: b.name,
                  is_malicious: b.is_malicious,
                  uri: b.uri,
                  extension: b.extension,
                  filesize: b.filesize,
                },
              }
            : b.__typename === "WECMessageVideo"
            ? {
                TAG: 40,
                _0: {
                  id: b.id,
                  playable_url: b.playable_url,
                  url_shimhash: b.url_shimhash,
                  filesize: b.filesize,
                  extension: b.extension,
                  filename: b.filename,
                  height: b.height,
                  width: b.width,
                },
              }
            : b.__typename === "MontageDirect"
            ? {
                TAG: 41,
                _0: {
                  message_state: b.message_state,
                  is_keep_disabled: b.is_keep_disabled,
                  blob_media_type: b.blob_media_type,
                  blob_media: b.blob_media,
                  image: b.image,
                },
              }
            : b.__typename === "MBirthdayReminderAttachment"
            ? {
                TAG: 42,
                _0: {
                  friend_id: b.friend_id,
                  confidence: b.confidence,
                  birthday_date: b.birthday_date,
                },
              }
            : b.__typename === "MPersonalRemindersList"
            ? {
                TAG: 43,
                _0: {
                  has_more_upcoming_reminders: b.has_more_upcoming_reminders,
                  personal_reminders: b.personal_reminders,
                },
              }
            : b.__typename === "MentorshipMessengerCurriculumStep"
            ? {
                TAG: 44,
                _0: {
                  id: b.id,
                  module_name: b.module_name,
                  mentorship_program: b.mentorship_program,
                  program_name: b.program_name,
                  curriculum_message: b.curriculum_message,
                  prompt: b.prompt,
                  step_count: b.step_count,
                  total_steps: b.total_steps,
                },
              }
            : b.__typename === "MentorshipMessengerDiscussionTopicSet"
            ? { TAG: 45, _0: { id: b.id, topics: b.topics } }
            : b.__typename === "MentorshipMessengerLeavePrompt"
            ? {
                TAG: 46,
                _0: {
                  mentorship_program: b.mentorship_program,
                  id: b.id,
                  xma_type: b.xma_type,
                },
              }
            : b.__typename === "MentorshipMessengerReminder"
            ? { TAG: 47, _0: { id: b.id, xma_type: b.xma_type } }
            : b.__typename === "MentorshipMessengerSurvey"
            ? {
                TAG: 48,
                _0: {
                  id: b.id,
                  xma_type: b.xma_type,
                  xma_title: b.xma_title,
                  xma_disclaimer: b.xma_disclaimer,
                  mentorship_program: b.mentorship_program,
                },
              }
            : b.__typename === "MentorshipMessengerProgressTracker"
            ? {
                TAG: 49,
                _0: {
                  id: b.id,
                  xma_type: b.xma_type,
                  xma_title: b.xma_title,
                  xma_body: b.xma_body,
                },
              }
            : b.__typename === "Story"
            ? {
                TAG: 50,
                _0: {
                  title: b.title,
                  message_richtext: b.message_richtext,
                  feedback: b.feedback,
                  reaction_count_reduced: b.reaction_count_reduced,
                  top_reactions: b.top_reactions,
                  post_id: b.post_id,
                  creation_time: b.creation_time,
                  description: b.description,
                  actors: b.actors,
                  to: b.to,
                  attachments: b.attachments,
                  attached_story: b.attached_story,
                },
              }
            : b.__typename === "User"
            ? {
                TAG: 51,
                _0: {
                  type: b.__typename,
                  id: b.id,
                  name: b.name,
                  profile_picture: b.profile_picture,
                  cover_photo: b.cover_photo,
                  work_info: b.work_info,
                  subscribe_status: b.subscribe_status,
                },
              }
            : b.__typename === "Group"
            ? {
                TAG: 52,
                _0: {
                  type: b.__typename,
                  id: b.id,
                  name: b.name,
                  cover_photo: b.cover_photo,
                  visibility: b.visibility,
                  visibility_sentence: b.visibility_sentence,
                  viewer_join_state: b.viewer_join_state,
                  group_general_chat: b.group_general_chat,
                  work_groups_sync_metadata: b.work_groups_sync_metadata,
                },
              }
            : b.__typename === "AppContent"
            ? {
                TAG: 53,
                _0: {
                  type: b.__typename,
                  id: b.id,
                  attachment_type_name: b.attachment_type_name,
                  privacy_status: b.privacy_status,
                  file_type_category: b.file_type_category,
                  app_integration: b.app_integration,
                  attachment_icon: b.app_integration,
                  content_uri: b.content_uri,
                  link_preview_additional_data: b.link_preview_additional_data,
                },
              }
            : b.__typename === "OneVCMeetingPublic"
            ? {
                TAG: 54,
                _0: {
                  type: b.__typename,
                  subject: b.subject,
                  joinable_link: b.joinable_link,
                },
              }
            : b.__typename === "OfferItem"
            ? { TAG: 55, _0: { type: b.__typename, id: b.id } }
            : b.__typename === "CommerceProductItemShare"
            ? {
                TAG: 56,
                _0: { type: b.__typename, default_action: b.default_action },
              }
            : b.__typename === "ApplicationReferralXMA"
            ? {
                TAG: 57,
                _0: {
                  type: b.__typename,
                  id: b.id,
                  referral_offer_link: b.referral_offer_link,
                },
              }
            : b.__typename === "PostPurchaseOrderUpdateXma"
            ? {
                TAG: 58,
                _0: { type: b.__typename, order_progress: b.order_progress },
              }
            : b.__typename === "InThreadMultiphotoItemCTAData"
            ? {
                TAG: 59,
                _0: {
                  type: b.__typename,
                  action_prefill: b.action_prefill,
                  ad_id: b.ad_id,
                  cta_title: b.cta_title,
                  customer_id: b.customer_id,
                  index: b.index,
                  page_id: b.page_id,
                  reply_image_uri: b.reply_image_uri,
                },
              }
            : null;
      return {
        description: a.description,
        media: a.media,
        source: a.source,
        style_list: j(a.style_list),
        title_with_entities: a.title_with_entities,
        properties: a.properties,
        url: a.url,
        deduplication_key: a.deduplication_key,
        action_links: a.action_links,
        messaging_attribution: a.messaging_attribution,
        messenger_call_to_actions: a.messenger_call_to_actions,
        xma_layout_info: a.xma_layout_info,
        messenger_generic_xma_template_extra_info:
          a.messenger_generic_xma_template_extra_info,
        target: c,
      };
    }
    function l(a) {
      var b = k({
        description: a.description,
        media: a.media,
        source: a.source,
        style_list: a.style_list,
        title_with_entities: a.title_with_entities,
        properties: a.properties,
        url: a.url,
        deduplication_key: a.deduplication_key,
        action_links: a.action_links,
        messaging_attribution: a.messaging_attribution,
        messenger_call_to_actions: a.messenger_call_to_actions,
        xma_layout_info: a.xma_layout_info,
        messenger_generic_xma_template_extra_info:
          a.messenger_generic_xma_template_extra_info,
        target: a.target,
      });
      if (b == null) return null;
      a = a.subattachments.map(k);
      return Object.assign({ subattachments: a }, b);
    }
    function m(a) {
      a = a.message;
      if (a == null) return [];
      var c = [];
      a.ranges.forEach(function (a) {
        var d = a.entity;
        if (d == null) return;
        var e = d.id,
          f = d.thread_key;
        if (e == null) {
          if (f == null) return;
          f = f.thread_fbid;
          if (f == null) return;
          var g = d.__typename,
            h;
          switch (g) {
            case "MessengerViewerGroupThread":
              h = b("MessageProfileRangeType").THREAD;
              break;
            case "User":
              h = b("MessageProfileRangeType").PROFILE;
              break;
            default:
              h = b("MessageProfileRangeType").NONE;
          }
          c.push({ id: f, offset: a.offset, length: a.length, type: h });
          return;
        }
        g = d.__typename;
        var i;
        switch (g) {
          case "MessengerViewerGroupThread":
            i = b("MessageProfileRangeType").THREAD;
            break;
          case "User":
            i = b("MessageProfileRangeType").PROFILE;
            break;
          default:
            i = b("MessageProfileRangeType").NONE;
        }
        c.push({ id: e, offset: a.offset, length: a.length, type: i });
      });
      return c;
    }
    function n(a, c, d, e) {
      var f = {};
      c.message_reactions.forEach(function (a) {
        f[a.user.id] = a.reaction;
      });
      var j = b("FBIDCheck").isUser_deprecated(c.message_sender.id),
        k = j
          ? b("MessagingTagUtils").getSourceFromTags(c.tags_list)
          : b("MercurySourceType").UNKNOWN;
      j = j ? b("MessagingTagUtils").getSourceTags(c.tags_list, k) : [];
      var o = c.message_id,
        p = d.thread_id,
        q = d.thread_fbid,
        r = d.other_user_fbid;
      r =
        p == null
          ? q == null
            ? r == null
              ? null
              : b("MercuryIDs").getThreadIDFromUserID(r)
            : b("MercuryIDs").getThreadIDFromThreadFBID(q)
          : p;
      q = c.secondary_language_body;
      p = c.tags_list.some(function (a) {
        if (
          a === "action:copy_message" ||
          a === "copy_self_message" ||
          a === "action:copy_attachment"
        )
          return !0;
        else return a === "copy_self_attachment";
      });
      var s = c.commerce_message_type,
        t = c.customizations,
        u = c.replied_to_message,
        v;
      if (u == null) v = null;
      else {
        var w = u.message;
        v =
          w == null
            ? { status: u.status, message: null }
            : {
                status: u.status,
                message: b("bs_js_null_undefined").fromOption(
                  b("bs_caml_option").some(n(a, w, d, e))
                ),
              };
      }
      u = c.error_data;
      w = c.unsent_timestamp_precise;
      w =
        w == null || w === "0"
          ? null
          : b("bs_js_null_undefined").fromOption(
              b("bs_caml_format").caml_float_of_string(w)
            );
      var x = c.unsender;
      r = {
        thread_id: r,
        thread_fbid: d.thread_fbid,
        other_user_fbid: d.other_user_fbid,
        action_type:
          c.__typename === "UserMessage"
            ? b("MercuryActionType").USER_GENERATED_MESSAGE
            : b("MercuryActionType").LOG_MESSAGE,
        message_id: o,
        secondary_language_body: q,
        threading_id: null,
        offline_threading_id: c.offline_threading_id,
        author: b("MercuryIDs").getParticipantIDFromUserID(c.message_sender.id),
        author_email: c.message_sender.email,
        ephemeral_ttl_mode: c.ttl,
        timestamp: b("bs_caml_format").caml_float_of_string(
          c.timestamp_precise
        ),
        is_unread: c.unread,
        is_filtered_content: c.tags_list.indexOf("filtered_content") !== -1,
        is_filtered_content_bh:
          c.tags_list.indexOf("filtered_content_bh") !== -1,
        is_filtered_content_account:
          c.tags_list.indexOf("filtered_content_account") !== -1,
        is_filtered_content_quasar:
          c.tags_list.indexOf("filtered_content_quasar") !== -1,
        is_filtered_content_invalid_app:
          c.tags_list.indexOf("filtered_content_invalid_app") !== -1,
        is_sponsored: c.is_sponsored,
        is_one_way_sent: c.tags_list.some(function (a) {
          return a === "one_way_message";
        }),
        ad_id: c.ad_id,
        ad_client_token: c.ad_client_token,
        commerce_message_type:
          s == null
            ? null
            : b("bs_js_null_undefined").fromOption(
                b("bs_js_dict").get(b("MNCommerceMessageType"), s)
              ),
        customizations: t == null ? [] : t,
        source: k,
        source_tags: j,
        tags: c.tags_list,
        is_spoof_warning:
          c.tags_list.indexOf("MTA:dmarc:fail") !== -1 ||
          c.tags_list.indexOf("spam:spoofing") !== -1 ||
          c.tags_list.indexOf("MTA:spoof_warning") !== -1,
        folder: d.folder,
        platform_xmd: c.platform_xmd_encoded,
        m_suggestions: c.m_suggestions,
        message_source: c.message_source_data,
        montage_reply_data: c.montage_reply_data,
        replied_to_message: v,
        skip_bump_thread: !1,
        profile_ranges: m(c),
        reactions: f,
        error_data: u == null ? null : { description: u.description },
        removed_timestamp: w,
        unsender:
          x == null
            ? null
            : {
                id: b("MercuryIDs").getParticipantIDFromUserID(
                  x.messaging_actor.id
                ),
                name: x.messaging_actor.name,
                short_name: x.messaging_actor.short_name,
              },
        verse_group_role_xmd: c.verse_group_role_xmd,
        mib_direct_message_data: c.mib_direct_message_data,
        message_unsendability_status: b(
          "MessageUnsendabilityStatus.bs"
        ).fromNullableString(c.message_unsendability_status),
        has_attachment: null,
        attachments: null,
        raw_attachments: null,
        ranges: null,
        meta_ranges: null,
        status: null,
        log_message_type: null,
        log_message_data: null,
        log_message_body: null,
        body: null,
        subject: null,
        creator_info: null,
        is_forwarded: p,
        preview_attachments: null,
        sticker_id: null,
      };
      if (c.__typename === "UserMessage") {
        q = g(c);
        s = c.extensible_attachment;
        if (s == null) t = null;
        else {
          k = s.story_attachment;
          j = s.genie_attachment;
          if (j == null) v = null;
          else {
            u = j.genie_message;
            if (u == null) w = null;
            else {
              x = u.story_attachment;
              w = { story_attachment: x == null ? null : l(x) };
            }
            v = { genie_message: w };
          }
          t = {
            legacy_attachment_id: s.legacy_attachment_id,
            story_attachment: k == null ? null : l(k),
            genie_attachment: v,
          };
        }
        p = b("MessengerAttachmentTransformer.bs").transformAttachment(
          a,
          { extensible_attachment: t, blob_attachments: q, sticker: c.sticker },
          o,
          e
        );
        j = c.message;
        u = c.page_admin_sender;
        Object.assign(r, {
          body: j == null ? null : j.text,
          creator_info:
            u == null
              ? null
              : {
                  creatorID: u.admin_id,
                  creatorName: u.name,
                  creatorType: u.sender_type,
                  labelType: u.label_type,
                  pageID: u.page_id,
                  profileURI: u.profile_uri,
                },
          subject: null,
          has_attachment: p.length > 0,
          attachments: p,
          raw_attachments: null,
          ranges: void 0,
          meta_ranges: c.meta_ranges.map(function (a) {
            return babelHelpers["extends"]({}, a, { data: JSON.parse(a.data) });
          }),
        });
      } else if (
        c.__typename === "VoiceCallMessage" ||
        c.__typename === "VideoCallMessage"
      ) {
        x = c.__typename;
        w =
          x === "VoiceCallMessage"
            ? b("MercuryLogMessageType").PHONE_CALL
            : b("MercuryLogMessageType").VIDEO_CALL;
        s = c.message_sender.id;
        k = d.other_user_fbid;
        v =
          k == null
            ? null
            : b("MercuryIDs").getParticipantIDFromUserID(
                s === k ? b("CurrentUser").getID() : k
              );
        t = c.answered;
        Object.assign(r, {
          log_message_type: w,
          log_message_data: {
            answered: t == null ? !1 : t,
            call_capture_attachments: h(a, c, e),
            caller: b("MercuryIDs").getParticipantIDFromUserID(s),
            callee: v,
          },
          log_message_body: c.snippet,
        });
      } else if (c.__typename === "ThreadNameMessage")
        Object.assign(r, {
          log_message_type: b("MercuryLogMessageType").THREAD_NAME,
          log_message_data: { name: c.thread_name },
          log_message_body: c.snippet,
        });
      else if (c.__typename === "ThreadImageMessage") {
        q = c.image_with_metadata;
        if (q == null) o = null;
        else {
          j = q.preview;
          o = {
            preview_url: j == null ? null : j.uri,
            metadata: {
              fbid: q.legacy_attachment_id,
              dimensions:
                String(q.original_dimensions.x) +
                ("," + String(q.original_dimensions.y)),
            },
          };
        }
        Object.assign(r, {
          log_message_type: b("MercuryLogMessageType").THREAD_IMAGE,
          log_message_data: { image: o },
          log_message_body: c.snippet,
        });
      } else if (c.__typename === "ParticipantsAddedMessage") {
        u = c.participants_added;
        Object.assign(r, {
          log_message_type: b("MercuryLogMessageType").SUBSCRIBE,
          log_message_data: {
            added_participants:
              u == null
                ? []
                : u.map(function (a) {
                    return b("MercuryIDs").getParticipantIDFromUserID(a.id);
                  }),
          },
          log_message_body: c.snippet,
        });
      } else if (c.__typename === "ParticipantLeftMessage") {
        p = c.participants_removed;
        Object.assign(r, {
          log_message_type: b("MercuryLogMessageType").UNSUBSCRIBE,
          log_message_data: {
            removed_participants:
              p == null
                ? []
                : p.map(function (a) {
                    return b("MercuryIDs").getParticipantIDFromUserID(a.id);
                  }),
          },
          log_message_body: c.snippet,
        });
      } else if (c.__typename === "GenericAdminTextMessage") {
        x = c.extensible_message_admin_text;
        d = c.extensible_message_admin_text_type;
        x == null
          ? d == null ||
            Object.assign(r, {
              log_message_body: c.snippet,
              log_message_data: {
                message_type: b("bs_js_null_undefined").fromOption(
                  b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)
                ),
                untypedData: void 0,
              },
              log_message_type: b("MercuryLogMessageType").GENERIC_ADMIN_TEXT,
            })
          : d == null || Object.assign(r, i(a, x, d, c.snippet, e));
      } else if (
        c.__typename === "P2PPaymentRequestMessage" ||
        c.__typename === "P2PPaymentMessage"
      ) {
        k = c.p2p_sender;
        w = c.p2p_receiver;
        t = c.amount;
        s = c.message_type;
        Object.assign(r, {
          log_message_body: c.snippet,
          log_message_data: {
            transfer_id: c.transfer_id,
            senderId:
              k == null
                ? null
                : b("MercuryIDs").getParticipantIDFromUserID(k.id),
            receiverId:
              w == null
                ? null
                : b("MercuryIDs").getParticipantIDFromUserID(w.id),
            formattedAmount: t == null ? null : t.formatted,
            subtype:
              s == null
                ? null
                : b("bs_js_null_undefined").fromOption(
                    b("bs_js_dict").get(b("P2PPaymentLogMessageSubtype"), s)
                  ),
          },
          log_message_type: b("MercuryLogMessageType").ORION,
        });
      }
      return r;
    }
    f.unsafeCastBlobAttachments = g;
    f._getCallCaptureAttachments = h;
    f._getGenericAdminTextMessage = i;
    f._getStyleList = j;
    f.unsafeCastExtensibleAttachmentWithoutSubattachments = k;
    f.unsafeCastExtensibleAttachment = l;
    f._getProfileRanges = m;
    f.transformMessage = n;
  },
  null
);
__d(
  "MercuryParticipantTypes",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      USER: "user",
      THREAD: "thread",
      EVENT: "event",
      PAGE: "page",
      FRIEND: "friend",
      FB4C: "fb4c",
      NON_FRIEND: "non_friend",
      SERVICE: "service",
      GUEST: "guest",
      PARENT_APPROVED_USER: "parent_approved_user",
      MESSAGE: "message",
      ASSISTANT_TYPEAHEAD: "assistant_typeahead",
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessagingThreadType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ONE_TO_ONE: 1,
      GROUP: 2,
      ROOM: 3,
      MONTAGE: 4,
      MARKETPLACE: 5,
      FOLDER: 6,
      TINCAN_ONE_TO_ONE: 7,
      TINCAN_GROUP_DISAPPEARING: 8,
      CARRIER_MESSAGING_ONE_TO_ONE: 10,
      CARRIER_MESSAGING_GROUP: 11,
      TINCAN_ONE_TO_ONE_DISAPPEARING: 13,
      PAGE_FOLLOW_UP: 14,
      SECURE_MESSAGE_OVER_WA_ONE_TO_ONE: 15,
      SECURE_MESSAGE_OVER_WA_GROUP: 16,
      COMMUNITY_FOLDER: 17,
      COMMUNITY_GROUP: 18,
      COMMUNITY_GROUP_UNJOINED: 19,
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerGroupAdminType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      REGULAR_ADMIN: 0,
      GROUP_CREATOR: 1,
      CHAT_SUPER_ADMIN: 2,
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerGroupThreadSubType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ADMIN_MODEL_V2_THREAD: 1,
      FB_GROUP_CHAT: 2,
      MARKETPLACE_THREAD: 3,
      SCHOOL_CHAT: 4,
      DEPRECATED__WORK_SYNCED_CHAT: 5,
      ADMIN_NOT_SUPPORTED_THREAD: 6,
      BELL_SYNCED_CHAT: 7,
      GAMES_APP_THREAD: 8,
      VAULT_CHAT: 9,
      VERSE_CHAT: 10,
      GENERIC_COMMERCE_THREAD: 11,
      USER_JOB_THREAD: 12,
      COWORKER_GROUP_THREAD: 13,
      APPROVAL_ENFORCED_CHATROOM_THREAD: 14,
      PARENT_APPROVED_SHEPHERD_MANAGED_THREAD: 15,
      CAMPUS_GROUP_THREAD: 16,
      LOCAL_COMMUNITIES_THREAD: 17,
      CHAT_FOR_ROOM_THREAD: 18,
      GAMING_PLAY_SQUAD: 19,
      CHAT_FOR_GROUP_ADMIN_TO_MEMBER_THREAD: 20,
      EITM_BACKED_IG_1TO1_THREAD: 21,
      LEARNING_SPACE: 23,
      E2EE_GROUP_THREAD_METADATA: 24,
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessengerServerPayloadTransformer.bs",
  [
    "fbt",
    "ChatConfig",
    "CurrentUser",
    "DisplayGenderConst",
    "FBID.bs",
    "GenderConst",
    "MercuryIDs",
    "MercuryParticipantTypes",
    "MessageThreadUnsendabilityStatus.bs",
    "MessagingThreadType",
    "MessengerAttachmentTransformer.bs",
    "MessengerGroupAdminModelStatus.bs",
    "MessengerGroupAdminType",
    "MessengerGroupThreadSubType",
    "MessengerGroupsSyncStatus.bs",
    "MessengerMessageTransformer.bs",
    "MessengerObjectAssociationType",
    "MessengerThreadCannotReplyReason",
    "MessengerThreadCannotReplyReason.bs",
    "URI",
    "WorkForeignEntityType",
    "bs_array",
    "bs_belt_Option",
    "bs_caml_array",
    "bs_caml_format",
    "bs_caml_option",
    "bs_js_dict",
    "bs_js_json",
    "bs_js_null_undefined",
    "bs_string",
    "getByPath",
    "isMessengerDotComURI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i(a) {
      var c = a.location_coordinates;
      c = c == null ? [null, null] : [c.latitude, c.longitude];
      var d = a.location_page,
        e;
      if (d == null) e = null;
      else {
        d = d.address;
        e = d == null ? null : d.full_address;
      }
      d = a.allows_rsvp ? 1 : 0;
      var f = b("bs_array").fold_left(
          function (a, b) {
            a[b.node.id] = b.guest_list_state;
            return a;
          },
          {},
          a.event_reminder_members.edges
        ),
        g = a.lightweight_event_creator;
      return {
        creator_id: g == null ? null : g.id,
        event_members: f,
        event_time: a.time,
        event_type: a.lightweight_event_type,
        latitude: c[0],
        longitude: c[1],
        location_address: e,
        location_name: a.location_name,
        note: a.note,
        oid: a.id,
        related_event: a.related_event,
        repeat_mode: a.repeat_mode,
        seconds_to_notify_before: a.seconds_to_notify_before,
        status: a.lightweight_event_status,
        title: a.event_title,
        track_rsvp: d,
      };
    }
    function j(a) {
      a = a.associated_object;
      if (a == null) return null;
      var c = a.action_link,
        d = a.profile_picture,
        e = a.group_general_chat,
        f = a.group_saves,
        g = a.verse_group_link;
      return {
        id: a.id,
        name: a.name,
        action_link:
          c == null
            ? null
            : b("CurrentUser").isWorkUser()
            ? c
            : new (h || (h = b("URI")))(c).setDomain("www.facebook.com"),
        profile_picture: d == null ? null : { uri: d.uri },
        group_general_chat: e == null ? null : { id: e.id },
        room_type: a.room_type,
        privacy_mode: a.privacy_mode,
        approval_mode_toggleable: a.approval_mode_toggleable,
        start_timestamp: a.start_timestamp,
        event_place: a.event_place,
        mentorship_program: a.mentorship_program,
        group_saves: f == null ? { count: 0 } : { count: f.count },
        verse_group_link:
          g == null
            ? null
            : new (h || (h = b("URI")))(g).setDomain("www.facebook.com"),
      };
    }
    function k(a) {
      a = a.related_page_thread;
      if (a == null) return null;
      var b = a.custom_thread_tags.nodes.map(function (a) {
          return { id: a.id, name: a.name, color: a.color };
        }),
        c = a.custom_thread_labels.nodes.map(function (a) {
          return {
            id: a.id,
            name: a.name,
            color: a.label_color,
            data_silo: a.data_silo,
          };
        }),
        d = a.corp_thread_labels.nodes.map(function (a) {
          return {
            id: a.id,
            name: a.name,
            color: a.label_color,
            data_silo: a.data_silo,
          };
        }),
        e = a.page;
      e = e == null ? null : e.id;
      return {
        flagged: a.is_flagged,
        pageID: e,
        customTags: b,
        customLabels: c,
        corpLabels: d,
      };
    }
    function l(a) {
      var c = a.thread_key.other_user_id;
      if (c == null) return !1;
      a = a.all_participants.edges;
      return b("bs_array").fold_left(
        function (a, b) {
          b = b.node.messaging_actor;
          if (b.id === c) return b.__typename === "User";
          else return a;
        },
        !1,
        a
      );
    }
    function m(a) {
      if (a.length === 0) return null;
      var b = {};
      a.forEach(function (a) {
        var c = a.nickname;
        if (!(c == null)) {
          b[a.participant_id] = c;
          return;
        }
      });
      return b;
    }
    function n(a) {
      return "#" + b("bs_string").sub(a, 2, (a.length - 2) | 0);
    }
    function o(a) {
      if (a == null || a === "") return null;
      else return n(a);
    }
    function a(a) {
      return a.thread_key.thread_fbid;
    }
    function c(a) {
      return a.thread_key.other_user_id;
    }
    function d(a) {
      return b("bs_caml_option").nullable_to_opt(
        b("getByPath")(a, ["messages", "page_info"])
      );
    }
    function e(a) {
      var c = b("CurrentUser").isWorkUser()
        ? g._("Workplace User")
        : g._("Facebook User");
      return {
        id: "fbid:" + a,
        fbid: b("FBID.bs").ofStringExn(a),
        gender: b("GenderConst").UNKNOWN_SINGULAR,
        href: null,
        image_src: null,
        square_image_src: null,
        big_image_src: null,
        name: c,
        short_name: c,
        user_type: null,
        vanity: null,
        accepts_messenger_user_feedback: !1,
        is_friend: !1,
        is_viewer_managing_parent: !1,
        is_messenger_user: !1,
        is_aloha_proxy_confirmed: !1,
        is_business_enabled: !1,
        is_messenger_platform_bot: !1,
        is_messenger_ignored: null,
        is_messenger_blocked: !1,
        is_facebook_blocked: !0,
        is_subscribed_to_page_updates: !1,
        title: null,
        company_name: null,
        employee: !1,
        instant_game_channel: null,
        work_foreign_entity_info: null,
        timezone: null,
        wec_group_admins: [],
        wec_group_creation_time: null,
        wec_group_invite_link: null,
        wec_group_participant_count: null,
        wec_group_participants: [],
        verification_status: null,
      };
    }
    function p(a) {
      var c = a.profile_picture_url;
      if (c == null) {
        var d = a.big_image_src;
        d = d == null ? null : d.uri;
      } else d = c;
      c = a.gender;
      var e = a.url,
        f;
      if (e == null) f = null;
      else {
        var g = b("isMessengerDotComURI")(new (h || (h = b("URI")))(e));
        f = g
          ? new (h || (h = b("URI")))(e)
              .getUnqualifiedURI()
              .setDomain("www.facebook.com")
              .setProtocol("https")
              .toString()
          : e;
      }
      g = a.__typename;
      var i;
      switch (g) {
        case "NeoApprovedUser":
          i = b("MercuryParticipantTypes").PARENT_APPROVED_USER;
          break;
        case "Page":
          i = b("MercuryParticipantTypes").PAGE;
          break;
        case "ReducedMessagingActor":
          i = b("MercuryParticipantTypes").GUEST;
          break;
        case "User":
          i = b("MercuryParticipantTypes").USER;
          break;
        default:
          i = null;
      }
      e = a.accepts_messenger_user_feedback;
      g = a.is_viewer_friend;
      var j = a.is_viewer_managing_parent,
        k = a.is_messenger_user,
        l = a.is_aloha_proxy_confirmed,
        m = a.is_messenger_platform_bot,
        n = a.is_message_blocked_by_viewer,
        o = a.is_blocked_by_viewer,
        p = a.is_viewer_subscribed_to_message_updates,
        q = a.work_info,
        r;
      if (q == null) r = null;
      else {
        var s = q.work_community;
        s = s == null ? null : s.name;
        q = q.job_title;
        r =
          s == null
            ? q == null
              ? null
              : q
            : q == null || q.length === 0
            ? s
            : "" + q + " \u2022 " + s;
      }
      q = a.work_info;
      if (q == null) s = null;
      else {
        q = q.work_community;
        q = q == null ? null : q.name;
        var t = a.work_foreign_entity_info;
        s =
          q == null ||
          t == null ||
          t.type !== b("WorkForeignEntityType").FOREIGN
            ? null
            : q;
      }
      t = a.is_employee;
      q = a.work_foreign_entity_info;
      var u = a.wec_group_creation_time,
        v = a.wec_group_invite_link,
        w = a.wec_group_participants,
        x = a.wec_group_participants,
        y = a.wec_group_admins;
      return {
        id: "fbid:" + a.id,
        fbid: a.id,
        gender:
          c == null
            ? b("GenderConst").NOT_A_PERSON
            : c === b("DisplayGenderConst").MALE
            ? b("GenderConst").MALE_SINGULAR
            : c === b("DisplayGenderConst").FEMALE
            ? b("GenderConst").FEMALE_SINGULAR
            : b("GenderConst").NOT_A_PERSON,
        href: f,
        image_src: d,
        square_image_src: null,
        big_image_src: d,
        name: a.name,
        short_name: b("bs_belt_Option").getWithDefault(
          b("bs_caml_option").nullable_to_opt(a.short_name),
          a.name
        ),
        user_type: i,
        vanity: a.username,
        accepts_messenger_user_feedback: e == null ? !1 : e,
        is_friend: g == null ? !1 : g,
        is_viewer_managing_parent: j == null ? !1 : j,
        is_messenger_user: k == null ? !1 : k,
        is_aloha_proxy_confirmed: l == null ? !1 : l,
        is_business_enabled: a.__typename === "Page",
        is_messenger_platform_bot: m == null ? !1 : m,
        is_messenger_ignored: null,
        is_messenger_blocked: n == null ? !1 : n,
        is_facebook_blocked: o == null ? !1 : o,
        is_subscribed_to_page_updates: p == null ? !0 : p,
        title: r,
        company_name: s,
        employee: t == null ? !1 : t,
        instant_game_channel:
          a.__typename === "Page" ? a.instant_game_channel : null,
        work_foreign_entity_info: q == null ? null : q,
        timezone: null,
        wec_group_creation_time: u == null ? null : u,
        wec_group_invite_link: v == null ? null : v,
        wec_group_participant_count: w == null ? null : w.count,
        wec_group_participants:
          x == null
            ? []
            : x.nodes.map(function (a) {
                return {
                  id: b("MercuryIDs").getParticipantIDFromUserID(
                    a.messaging_actor.id
                  ),
                  name: a.messaging_actor.name,
                };
              }),
        wec_group_admins:
          y == null
            ? []
            : y.nodes.map(function (a) {
                return {
                  id: b("MercuryIDs").getParticipantIDFromUserID(
                    a.messaging_actor.id
                  ),
                  name: a.messaging_actor.name,
                };
              }),
        verification_status: a.verification_status,
      };
    }
    function q(a) {
      return a.all_participants.edges.map(function (a) {
        return p(a.node.messaging_actor);
      });
    }
    function r(a, c) {
      c = c.read_receipts;
      if (c == null) return;
      var d = {};
      c.nodes.forEach(function (c) {
        var e = c.actor;
        if (!(e == null) && a !== e.id) {
          d[e.id] = {
            action: b("bs_caml_format").caml_float_of_string(c.action),
            watermark: b("bs_caml_format").caml_float_of_string(c.watermark),
          };
          return;
        }
      });
      return b("bs_caml_option").some(d);
    }
    function s(a) {
      a = a.delivery_receipts;
      if (a == null) return [];
      else
        return a.nodes.sort(function (a, c) {
          a = b("bs_caml_format").caml_float_of_string(a.timestamp_precise);
          c = b("bs_caml_format").caml_float_of_string(c.timestamp_precise);
          if (a > c) return -1;
          else if (a === c) return 0;
          else return 1;
        });
    }
    function t(a, c, d) {
      var e = c.messages;
      if (!(e == null))
        return e.nodes.map(function (e) {
          return b("MessengerMessageTransformer.bs").transformMessage(
            a,
            e,
            {
              thread_id: null,
              thread_fbid: c.thread_key.thread_fbid,
              other_user_fbid: c.thread_key.other_user_id,
              folder: c.folder.toLowerCase(),
            },
            d
          );
        });
    }
    function u(a, c, d) {
      var e = c.last_message.nodes.map(function (d) {
          var f = b("MessengerMessageTransformer.bs").unsafeCastBlobAttachments(
              d
            ),
            a = d.extensible_attachment,
            g;
          if (a == null) g = null;
          else {
            var h = a.story_attachment,
              i = a.genie_attachment,
              c;
            if (i == null) c = null;
            else {
              i = i.genie_message;
              var e;
              if (i == null) e = null;
              else {
                i = i.story_attachment;
                e = {
                  story_attachment:
                    i == null
                      ? null
                      : b(
                          "MessengerMessageTransformer.bs"
                        ).unsafeCastExtensibleAttachment(i),
                };
              }
              c = { genie_message: e };
            }
            g = {
              legacy_attachment_id: a.legacy_attachment_id,
              story_attachment:
                h == null
                  ? null
                  : b(
                      "MessengerMessageTransformer.bs"
                    ).unsafeCastExtensibleAttachment(h),
              genie_attachment: c,
            };
          }
          return {
            message_id: d.message_id,
            snippet: d.snippet,
            message_sender: d.message_sender,
            timestamp_precise: d.timestamp_precise,
            commerce_message_type: d.commerce_message_type,
            extensible_attachment: g,
            blob_attachments: f,
            sticker: d.sticker,
            extensible_message_admin_text: d.extensible_message_admin_text,
            platform_xmd_encoded: d.platform_xmd_encoded,
            extensible_message_admin_text_type:
              d.extensible_message_admin_text_type,
            message_unsendability_status: d.message_unsendability_status,
          };
        }),
        f = {
          id: c.id,
          thread_key: c.thread_key,
          name: c.name,
          all_participants: c.all_participants,
          last_message: { nodes: e },
          unread_count: c.unread_count,
          message_count: c.messages_count,
          image: c.image,
          square_image: c.square_image,
          updated_time_precise: c.updated_time_precise,
          mute_until: c.mute_until,
          is_pinned: c.is_pinned,
          is_pin_protected: c.is_pin_protected,
          is_viewer_subscribed: c.is_viewer_subscribed,
          is_other_recipient_page: c.is_other_recipient_page,
          is_canonical_neo_user: c.is_canonical_neo_user,
          thread_queue_enabled: c.thread_queue_enabled,
          folder: c.folder,
          unread_mentions_count: c.unread_mentions_count,
          has_viewer_archived: c.has_viewer_archived,
          is_page_follow_up: c.is_page_follow_up,
          is_page_unresponded_thread: c.is_page_unresponded_thread,
          cannot_reply_reason: c.cannot_reply_reason,
          can_viewer_report: c.can_viewer_report,
          composer_input_disabled: c.composer_input_disabled,
          ephemeral_ttl_mode: c.ephemeral_ttl_mode,
          customization_info: c.customization_info,
          thread_admins: c.thread_admins,
          approval_mode: c.approval_mode,
          joinable_mode: c.joinable_mode,
          thread_queue_metadata: c.thread_queue_metadata,
          event_reminders: c.event_reminders,
          montage_thread: c.montage_thread,
          last_read_receipt: c.last_read_receipt,
          related_page_thread: c.related_page_thread,
          rtc_call_data: c.rtc_call_data,
          associated_object: c.associated_object,
          reactions_mute_mode: c.reactions_mute_mode,
          mentions_mute_mode: c.mentions_mute_mode,
          privacy_mode: c.privacy_mode,
          customization_enabled: c.customization_enabled,
          thread_type: c.thread_type,
          group_thread_subtype: c.group_thread_subtype,
          thread_pin_timestamp: c.thread_pin_timestamp,
          page_unsubscribe_status: c.page_unsubscribe_status,
          participant_add_mode_as_string: c.participant_add_mode_as_string,
          participants_event_status: c.participants_event_status,
          marketplace_thread_data: c.marketplace_thread_data,
          page_comm_item: c.page_comm_item,
          group_approval_queue: c.group_approval_queue,
          admin_model_status_string: c.admin_model_status_string,
          groups_sync_status_string: c.groups_sync_status_string,
          work_groups_sync_metadata: c.work_groups_sync_metadata,
          pinned_messages: c.pinned_messages,
          description: c.description,
          joinable_link: c.joinable_link,
          linked_mentorship_programs: c.linked_mentorship_programs,
          theme: c.thread_theme,
          thread_connectivity_data: c.thread_connectivity_data,
          thread_unsendability_status: c.thread_unsendability_status,
          is_business_page_active: c.is_business_page_active,
          thread_associated_job_applications:
            c.thread_associated_job_applications,
          thread_associated_page_admin: c.thread_associated_page_admin,
          conversion_detection_data: c.conversion_detection_data,
          suggested_reply_data: c.suggested_reply_data,
        };
      e = f.customization_info;
      var g;
      if (e == null) g = [null, null, null];
      else {
        var h = e.emoji;
        g = [
          o(e.outgoing_bubble_color),
          h == null ? null : { emoji: h },
          m(e.participant_customizations),
        ];
      }
      h = g[0];
      e = f.theme;
      if (e == null) h = [h, h, h, [], null, void 0, null, null];
      else {
        var p = e.reaction_pack,
          r;
        if (p == null) r = void 0;
        else {
          p = p.reaction_assets;
          r =
            p == null
              ? void 0
              : p.nodes.map(function (a) {
                  return {
                    reactionName: a.reaction_name,
                    reactionEmoji: a.reaction_emoji,
                    keyframeAssetUri: a.keyframe_asset_uri,
                    staticAssetUri: a.static_asset.uri,
                  };
                });
        }
        p = e.gradient_colors.length;
        var s = n(e.fallback_color),
          t = b("FBID.bs").ofString(e.id);
        t = t !== void 0 ? b("bs_caml_option").valFromOption(t) : null;
        if (p > 0 && b("ChatConfig").get("chat_tab_has_gradients")) {
          var u = e.gradient_colors.map(n);
          h = [
            s,
            b("bs_caml_array").get(u, 0),
            b("bs_caml_array").get(u, (p - 1) | 0),
            u,
            t,
            r,
            e.accessibility_label,
            e.reverse_gradients_for_radial,
          ];
        } else
          h = [
            s,
            s,
            s,
            [],
            t,
            r,
            e.accessibility_label,
            e.reverse_gradients_for_radial,
          ];
      }
      p = f.page_comm_item;
      u =
        p == null
          ? [null, null, null, null, null, []]
          : [
              p.comm_status,
              p.comm_source_id,
              p.id,
              p.subtitle,
              p.comm_item_owners,
              p.comm_icon_type,
            ];
      s = f.last_message.nodes;
      t = s.length !== 0 ? b("bs_caml_option").some(s[0]) : void 0;
      r = f.last_read_receipt.nodes;
      e = r.length !== 0 ? b("bs_caml_option").some(r[0]) : void 0;
      if (t !== void 0) {
        p = b("bs_caml_option").valFromOption(t);
        s = b("MessengerAttachmentTransformer.bs").transformAttachment(
          a,
          {
            extensible_attachment: p.extensible_attachment,
            blob_attachments: p.blob_attachments,
            sticker: p.sticker,
          },
          p.message_id,
          d
        );
      } else s = [];
      if (t !== void 0) {
        r = b("bs_caml_option").valFromOption(t).extensible_message_admin_text;
        if (r == null) p = null;
        else {
          d = r.game;
          p = d == null ? null : d.id;
        }
      } else p = null;
      r = b("MessengerThreadCannotReplyReason.bs").fromName(
        f.cannot_reply_reason
      );
      d = f.thread_key.other_user_id;
      if (d == null) {
        var v = f.thread_key.thread_fbid;
        v = v == null ? null : v;
      } else v = d;
      d = b("bs_array").fold_left(
        function (a, c) {
          a[c.id] = b("MessengerGroupAdminType").REGULAR_ADMIN;
          return a;
        },
        {},
        f.thread_admins
      );
      d = b("bs_array").fold_left(
        function (a, c) {
          var d = c.node.messaging_actor.id;
          c = c.admin_type;
          var e = b("bs_js_dict").get(a, d);
          !(c == null) && e !== void 0 && (a[d] = c);
          return a;
        },
        d,
        f.all_participants.edges
      );
      var w = f.thread_queue_metadata,
        x = f.thread_type,
        y = f.group_thread_subtype,
        z = f.montage_thread,
        A = f.image,
        B = f.square_image,
        C = f.thread_key.other_user_id,
        D;
      if (t !== void 0) {
        var E = b("bs_caml_option").valFromOption(t).platform_xmd_encoded;
        if (E == null) D = !1;
        else {
          try {
            E = JSON.parse(E);
          } catch (a) {
            E = {};
          }
          E = b("bs_js_json").classify(E);
          D =
            typeof E === "number" || E.TAG !== 2
              ? !1
              : b("bs_js_dict").get(E._0, "landing_exp") !== void 0;
        }
      } else D = !1;
      E = f.thread_queue_metadata;
      var F = f.event_reminders.nodes,
        G = f.name,
        H = f.associated_object,
        I;
      if (H == null) I = null;
      else {
        H = H.group_general_chat;
        I =
          H == null || v == null
            ? null
            : H.id === v
            ? b("MessengerObjectAssociationType").GENERAL_CHAT
            : b("MessengerObjectAssociationType").REGULAR_CHAT;
      }
      H = f.rtc_call_data;
      var J;
      if (H == null) J = null;
      else {
        var K = H.initiator;
        J = {
          call_state: H.call_state,
          server_info_data: H.server_info_data,
          initiator_fbid:
            K == null
              ? null
              : b("bs_js_null_undefined").fromOption(
                  b("FBID.bs").ofString(K.id)
                ),
        };
      }
      H = f.marketplace_thread_data;
      if (H == null) K = null;
      else {
        var L = H.for_sale_item,
          M;
        if (L == null) M = null;
        else {
          var N = L.formatted_price,
            O = L.location,
            P;
          if (O == null) P = null;
          else {
            O = O.reverse_geocode;
            P = {
              reverse_geocode:
                O == null ? null : { city: O.city, state: O.state },
            };
          }
          O = L.primary_photo;
          var Q;
          if (O == null) Q = null;
          else {
            O = O.image;
            Q = O == null ? null : O.uri;
          }
          O = L.product_item;
          var R = L.product_item;
          M = {
            id: L.id,
            story_id: L.story_id,
            title: L.group_commerce_item_title,
            price: N == null ? null : N.text,
            location: P,
            c2c_shipping_eligible: L.c2c_shipping_eligible,
            is_pending: L.is_pending,
            is_shipping_offered: L.is_shipping_offered,
            is_sold: L.is_sold,
            inventory_count: L.inventory_count,
            delivery_types: L.delivery_types,
            image_uri: Q,
            is_commerce_post_item: O == null ? !1 : O.is_commerce_post_item,
            product_item_id: R == null ? null : R.id,
            url: L.url,
          };
        }
        N = H.buyer;
        P = H.seller;
        Q = H.rating_state;
        O = H.seller;
        if (O == null) R = !1;
        else {
          L = O.marketplace_c2c_shipping_seller;
          R = L == null ? !1 : L.is_eligible;
        }
        K = {
          for_sale_item: M,
          buyer_fbid: N == null ? null : N.id,
          seller_fbid: P == null ? null : P.id,
          is_eligible_to_rate: Q == null ? null : Q.is_eligible_to_rate,
          is_seller_eligible_for_shipping: R,
          seller_added_labels: H.seller_added_labels.map(function (a) {
            return { label_string: a.label_string, label_type: a.label_type };
          }),
          eligible_profile_selling_invoice_actions:
            H.eligible_profile_selling_invoice_actions,
          thread_fbid: v,
        };
      }
      O = f.group_approval_queue;
      L = f.work_groups_sync_metadata;
      if (L == null) M = null;
      else {
        N = L.fb_group;
        M = N == null ? null : N;
      }
      P = f.pinned_messages;
      Q = f.linked_mentorship_programs;
      R = f.thread_associated_job_applications;
      return {
        admins: d,
        approval_mode: f.approval_mode,
        approval_queue_ids:
          w == null
            ? []
            : w.approval_requests.nodes.map(function (a) {
                return b("MercuryIDs").getParticipantIDFromUserID(
                  b("FBID.bs").ofStringExn(a.id)
                );
              }),
        can_reply: r === void 0,
        cannot_reply_reason: r !== void 0 ? r : null,
        can_viewer_report: f.can_viewer_report,
        composer_input_disabled: f.composer_input_disabled,
        solid_color: h[0],
        header_color: h[1],
        footer_color: h[2],
        accessibility_label: h[6],
        reverse_gradients_for_radial: h[7],
        gradient_colors: h[3],
        theme_id: h[4],
        reactions: h[5],
        thread_connectivity_data: f.thread_connectivity_data,
        custom_like_icon: g[1],
        custom_nickname: g[2],
        customization_enabled: f.customization_enabled,
        thread_type:
          x == null
            ? null
            : b("bs_js_null_undefined").fromOption(
                b("bs_js_dict").get(b("MessagingThreadType"), x)
              ),
        group_thread_subtype:
          y == null
            ? null
            : b("bs_js_null_undefined").fromOption(
                b("bs_js_dict").get(b("MessengerGroupThreadSubType"), y)
              ),
        page_unsubscribe_status: f.page_unsubscribe_status,
        participant_add_mode: f.participant_add_mode_as_string,
        ephemeral_ttl_mode: f.ephemeral_ttl_mode,
        folder: f.folder.toLowerCase(),
        has_email_participant:
          r !== void 0
            ? r === b("MessengerThreadCannotReplyReason").HAS_EMAIL_PARTICIPANT
            : !1,
        has_montage: !(z == null),
        unread_mentions_count: f.unread_mentions_count,
        image_src: A == null ? null : A.uri,
        square_image_src: B == null ? null : B.uri,
        is_archived: f.has_viewer_archived,
        is_pinned: f.is_pinned,
        is_page_follow_up: f.is_page_follow_up,
        is_page_unresponded_thread: f.is_page_unresponded_thread,
        is_canonical_user: l(f),
        is_canonical: !(C == null),
        is_from_weak_entry_point: D,
        is_pin_protected: f.is_pin_protected,
        is_subscribed: f.is_viewer_subscribed,
        is_other_recipient_page: f.is_other_recipient_page,
        is_canonical_neo_user: f.is_canonical_neo_user,
        is_thread_queue_enabled: !(E == null),
        joinable_mode: {
          mode: b("bs_caml_format").caml_int_of_string(f.joinable_mode.mode),
          link: f.joinable_mode.link,
        },
        last_message_timestamp:
          t !== void 0
            ? b("bs_caml_format").caml_float_of_string(
                b("bs_caml_option").valFromOption(t).timestamp_precise
              )
            : 0,
        last_message_id: null,
        last_message_type:
          t !== void 0
            ? b("bs_caml_option").valFromOption(t).commerce_message_type
            : null,
        last_message_admin_text_type:
          t !== void 0
            ? b("bs_caml_option").valFromOption(t)
                .extensible_message_admin_text_type
            : null,
        last_message_unsendability_status:
          t !== void 0
            ? b("bs_caml_option").valFromOption(t).message_unsendability_status
            : null,
        last_read_timestamp:
          e !== void 0
            ? b("bs_caml_format").caml_float_of_string(
                b("bs_caml_option").valFromOption(e).timestamp_precise
              )
            : 0,
        lightweight_event: F.length !== 0 ? i(F[0]) : null,
        lightweight_events: b("bs_array").fold_left(
          function (a, b) {
            a[b.id] = i(b);
            return a;
          },
          {},
          f.event_reminders.nodes
        ),
        message_count: f.message_count,
        mute_until: f.mute_until,
        name: G == null ? "" : G,
        object_association_type: I,
        other_user_fbid: f.thread_key.other_user_id,
        page_thread_info: k(f),
        participants: f.all_participants.edges.map(function (a) {
          return b("MercuryIDs").getParticipantIDFromUserID(
            a.node.messaging_actor.id
          );
        }),
        participants_event_status: f.participants_event_status,
        preloaded_participants: q(c),
        read_only:
          r !== void 0
            ? r === b("MessengerThreadCannotReplyReason").READ_ONLY
            : !1,
        recipients_loadable:
          r !== void 0
            ? r !==
              b("MessengerThreadCannotReplyReason").RECIPIENTS_NOT_LOADABLE
            : !0,
        server_timestamp: b("bs_caml_format").caml_float_of_string(
          f.updated_time_precise
        ),
        snippet_attachments: s,
        snippet_sender:
          t !== void 0
            ? b("MercuryIDs").getParticipantIDFromUserID(
                b("bs_caml_option").valFromOption(t).message_sender
                  .messaging_actor.id
              )
            : null,
        snippet:
          t !== void 0 ? b("bs_caml_option").valFromOption(t).snippet : null,
        thread_fbid: v,
        thread_id: "",
        thread_pin_timestamp: f.thread_pin_timestamp,
        timestamp: b("bs_caml_format").caml_float_of_string(
          f.updated_time_precise
        ),
        unread_count: f.unread_count,
        rtc_call_data: J,
        marketplace_thread_data: K,
        associated_object: j(f),
        reactions_mute_mode:
          f.reactions_mute_mode === "REACTIONS_NOT_MUTED" ? 0 : 1,
        mentions_mute_mode:
          f.mentions_mute_mode === "MENTIONS_NOT_MUTED" ? 0 : 1,
        comm_status: u[0],
        page_comm_item_id: u[2],
        comm_source_id: u[1],
        subtitle: u[3],
        comm_item_owners: u[4],
        comm_icon_type: u[5],
        group_approval_queue: O == null ? null : O.nodes,
        game_id: p,
        admin_model_status: b(
          "MessengerGroupAdminModelStatus.bs"
        ).fromNullableString(f.admin_model_status_string),
        groups_sync_status: b(
          "MessengerGroupsSyncStatus.bs"
        ).fromNullableString(f.groups_sync_status_string),
        work_associated_group: M,
        pinned_messages:
          P == null
            ? null
            : P.map(function (c) {
                var d = c.message;
                return {
                  message_id: c.message_id,
                  pinning_time: c.pinning_time,
                  message:
                    d == null
                      ? null
                      : b("MessengerMessageTransformer.bs").transformMessage(
                          a,
                          d,
                          {
                            thread_id: null,
                            thread_fbid: f.thread_key.thread_fbid,
                            other_user_fbid: f.thread_key.other_user_id,
                            folder: f.folder.toLowerCase(),
                          },
                          !1
                        ),
                };
              }),
        description: f.description,
        joinable_link: f.joinable_link,
        linked_mentorship_programs: Q == null ? null : Q,
        thread_unsendability_status: b(
          "MessageThreadUnsendabilityStatus.bs"
        ).fromNullableString(f.thread_unsendability_status),
        is_business_page_active: f.is_business_page_active,
        thread_associated_job_applications: R == null ? null : R,
        thread_associated_page_admin: f.thread_associated_page_admin,
        graphql_token: f.id,
        conversion_detection_data: f.conversion_detection_data,
        suggested_reply_data: f.suggested_reply_data,
      };
    }
    f.getThreadFBID = a;
    f.getOtherUserID = c;
    f.getMessagePageInfo = d;
    f.getBlockedParticipant = e;
    f.transformParticipant = p;
    f.transformParticipants = q;
    f.transformReadReceipts = r;
    f.transformDeliveryReceipts = s;
    f.transformMessages = t;
    f.transformThread = u;
  },
  null
);
__d(
  "FBRTCIceStatsParser",
  [],
  function (a, b, c, d, e, f) {
    var g = null;
    a = (function () {
      function a() {}
      a.getInstance = function () {
        g || (g = new a());
        return g;
      };
      var b = a.prototype;
      b.extractIceInfo = function (a) {
        var b = [];
        a = a.split("\r\n");
        for (var c = 0; c < a.length; c++) {
          var d = a[c];
          this.$1(d) && b.push({ gen: this.$2(d), type: this.$3(d) });
        }
        return b;
      };
      b.$1 = function (a) {
        return a.indexOf("candidate:") > -1;
      };
      b.$2 = function (a) {
        var b = 0;
        a = a.match(/generation (\d+)/);
        a && (b = parseInt(a[1], 10));
        return b;
      };
      b.$3 = function (a) {
        a = a.match(/typ (host|relay|srflx|prflx)/);
        if (a) return a[1];
        else return "unknown";
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "FBRTCMediaMetricTracker",
  ["performanceNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      count: 0,
      current: -1,
      first: -1,
      min: -1,
      max: -1,
      mean: -1,
      median: -1,
      startedTime: -1,
      total: -1,
      updatedTime: -1,
    };
    a = (function () {
      function a() {
        (this.$2 = {}),
          (this.$3 = {}),
          (this.$4 = {}),
          (this.$1 = {}),
          (this.$5 = null);
      }
      var b = a.prototype;
      b.getVideoStreamReportKeys = function () {
        return Object.keys(this.$4);
      };
      b.getJitterStreamReportKey = function () {
        return Object.keys(this.$2);
      };
      b.getAudioStreamReportKeys = function () {
        return Object.keys(this.$3);
      };
      b.addJitterBufferDelay = function (a, b) {
        b !== null &&
          b !== void 0 &&
          (this.$2[a] || (this.$2[a] = []), this.$2[a].push(b));
      };
      b.setHistResScale = function (a, b, c) {
        this.$1[a] || (this.$1[a] = { contentType: b, histogram: [] }),
          (this.$1[a] = { contentType: b, histogram: c });
      };
      b.getHistResScale = function (a) {
        return this.$1[a]
          ? {
              contentType: this.$1[a].contentType,
              histogram: this.$1[a].histogram,
            }
          : null;
      };
      b.setVideoContentType = function (a, b) {
        this.$4[a] || (this.$4[a] = {}), (this.$4[a].contentType = b);
      };
      b.getVideoContentType = function (a) {
        return this.$4[a].contentType;
      };
      b.setVideoMetric = function (a, b, c) {
        c !== null &&
          c !== void 0 &&
          (this.$4[a] || (this.$4[a] = {}),
          (this.$4[a][b] = this.$6(this.$4[a][b], c)));
      };
      b.$6 = function (a, b) {
        if (a !== null && a !== void 0) {
          a.current = b;
          a.updatedTime = c("performanceNow")();
          a.total += b;
          a.count += 1;
          a.min = Math.min(a.min, b);
          a.max = Math.max(a.max, b);
          a.mean = a.total / a.count;
          return a;
        } else
          return {
            min: b,
            max: b,
            total: b,
            count: 1,
            mean: b,
            first: b,
            startedTime: c("performanceNow")(),
            current: b,
            updatedTime: c("performanceNow")(),
          };
      };
      b.getVideoStreamDuration = function (a, b) {
        return this.$4[a] != null && this.$4[a][b] != null
          ? this.$4[a][b].count
          : 0;
      };
      b.getAudioStreamDuration = function (a, b) {
        return this.$3[a] != null && this.$3[a][b] != null
          ? this.$3[a][b].count
          : 0;
      };
      b.getVideoMetric = function (a, b) {
        return this.$4[a] ? this.$4[a][b] : null;
      };
      b.addMetricStat = function (a, b, c) {
        c !== null &&
          c !== void 0 &&
          (this.$3[a] || (this.$3[a] = {}),
          (this.$3[a][b] = this.$6(this.$3[a][b], c)));
      };
      b.getMetricStats = function (a, b) {
        return !this.$3[a] ? null : this.$3[a][b];
      };
      b.getJitterBufferStats = function (a) {
        if (!this.$2[a]) return h;
        var b = this.$2[a].length;
        if (b === 0) return h;
        this.$2[a].sort(function (a, b) {
          return a - b;
        });
        var c = this.$2[a].reduce(function (a, b) {
          return a + b;
        });
        if (b % 2 === 0) {
          var d = Math.floor((b - 1) / 2),
            e = Math.ceil((b - 1) / 2);
          d = (this.$2[a][d] + this.$2[a][e]) / 2;
        } else d = this.$2[a][(b - 1) / 2];
        return {
          max: this.$2[a][b - 1],
          min: this.$2[a][0],
          mean: c / b,
          median: d,
          total: c,
          count: b,
          first: -1,
          startedTime: -1,
          current: -1,
          updatedTime: -1,
        };
      };
      b.toJsonString = function () {
        return JSON.stringify({
          stats: this.$3,
          jitterBufferDelays: this.$2,
          videoMetric: this.$4,
          histResScale: this.$1,
        });
      };
      a.getPercentMediaKey = function (a, b, c) {
        return a.concat("_", b, "_p", String(c));
      };
      a.getAvgMediaKey = function (a, b) {
        return a.concat("_", b, "_avg");
      };
      a.fromJsonString = function (b) {
        var c = new a();
        try {
          (b = JSON.parse(b)), (b = b);
        } catch (a) {
          return c;
        }
        b.stats && (c.$3 = b.stats);
        b.jitterBufferDelays && (c.$2 = b.jitterBufferDelays);
        b.videoMetric && (c.$4 = b.videoMetric);
        b.histResScale && (c.$1 = b.histResScale);
        return c;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "FBRTCMediaMetricsConst",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "jitter";
    b = "accelerate_rate";
    c = "decoding_cng";
    d = "decoding_normal";
    e = "decoding_plc";
    var g = "decoding_plc_cng",
      h = "decoding_neteq_call",
      i = "discard_rate",
      j = "encode_bitrate",
      k = "expand_rate",
      l = "speech_expand_rate",
      m = "preemptive_rate",
      n = "audio_send_total_energy",
      o = "audio_receive_total_energy",
      p = "audio_send_log_level",
      q = "audio_send_log_level_count",
      r = "audio_send_loudness_level",
      s = "audio_receive_log_level",
      t = "audio_receive_log_level_count",
      u = "audio_receive_loudness_level",
      v = "audio_packets_received",
      w = "audio_fec_packets_received",
      x = "audio_fec_packets_discarded",
      y = "audio_packets_received_lost",
      z = "audio_packets_sent",
      A = "audio_packets_sent_lost",
      B = "video_bytes_received",
      C = "video_bytes_sent",
      D = "inbound_qp",
      E = "outbound_qp",
      F = "frames_encoded",
      G = "frames_decoded",
      H = "frames_received",
      I = "frames_sent",
      J = "keyframes_decoded",
      K = "picture_less_indication_received",
      L = "full_intra_request_received",
      M = "videobwe_send_bandwidth",
      N = "videobwe_transmit_bitrate",
      O = "videobwe_retransmit_bitrate",
      P = "audio_bytes_sent",
      Q = "audio_bytes_received",
      R = "video_pkts_sent",
      S = "video_pkts_send_lost",
      T = "video_pkts_received",
      U = "video_fec_pkts_received",
      V = "video_fec_pkts_discarded",
      W = "video_pkts_receive_lost",
      X = "audio_rtt_received",
      Y = "audio_rtt_sent",
      Z = "audio_dev_rec_stalls",
      $ = "audio_dev_total_stalls",
      aa = "audio_dev_is_stalled",
      ba = "audio_dev_stall_duration",
      ca = "video_freeze_cnt",
      da = "video_freeze_duration",
      ea = "video_pause_cnt",
      fa = "video_pause_duration",
      ga = "video_capture_width",
      ha = "video_capture_height",
      ia = "video_sum_capture_pixel",
      ja = "video_capture_frame_count",
      ka = "video_decoded_width",
      la = "video_decoded_height",
      ma = "video_encoded_width",
      na = "video_encoded_height",
      oa = "audio_total_packet_send_delay",
      pa = "video_total_packet_send_delay",
      qa = "audio_total_encode_time",
      ra = "video_total_encode_time",
      sa = "audio_total_decode_time",
      ta = "video_total_decode_time",
      ua = "audio_jitter_buffer_delay",
      va = "video_jitter_buffer_delay",
      wa = "audio_jitter_buffer_emitted_count",
      xa = "video_jitter_buffer_emitted_count",
      ya = "audio_e2e_latency",
      za = "video_e2e_latency",
      Aa = "av_sync",
      Ba = "av_sync_abs",
      Ca = "av_sync_count",
      Da = "av_sync_oob",
      Ea = "video_sum_decoded_pixel",
      Fa = "video_sum_encoded_pixel",
      Ga = "audio_neteq_wait_time",
      Ha = "audio_packet_loss_rate",
      Ia = "audio_plc_cng_rate",
      Ja = "audio_plc_rate",
      Ka = "global_audio_bitrate",
      La = "global_battery_usage",
      Ma = "global_cpu_usage",
      Na = "global_video_bitrate",
      Oa = "video_av_sync_abs",
      Pa = "video_av_sync_oob",
      Qa = "video_frame_rate",
      Ra = "video_freeze_count_per_min",
      Sa = "video_freeze_duration_per_min",
      Ta = "video_neteq_wait_time",
      Ua = "video_packet_loss_rate",
      Va = "video_render_scale_ratio",
      Wa = "video_cropping_ratio",
      Xa = "video_rtt_received",
      Ya = "video_rtt_sent",
      Za = "simulcast_layer_changes",
      $a = "video_quality_sent",
      ab = "video_encoded_frame_rate",
      bb = "video_qp_sent",
      cb = "video_decode_time";
    f.JITTER = a;
    f.ACCELERATE_RATE = b;
    f.DECODING_CNG = c;
    f.DECODING_NORMAL = d;
    f.DECODING_PLC = e;
    f.DECODING_PLC_CNG = g;
    f.DECODING_NETEQ_CALL = h;
    f.DISCARD_RATE = i;
    f.ENCODE_BITRATE = j;
    f.EXPAND_RATE = k;
    f.SPEECH_EXPAND_RATE = l;
    f.PREEMPTIVE_RATE = m;
    f.AUDIO_SEND_TOTAL_ENERGY = n;
    f.AUDIO_RECEIVE_TOTAL_ENERGY = o;
    f.AUDIO_SEND_LOG_LEVEL = p;
    f.AUDIO_SEND_LOG_LEVEL_COUNT = q;
    f.AUDIO_SEND_LOUDNESS_LEVEL = r;
    f.AUDIO_RECEIVE_LOG_LEVEL = s;
    f.AUDIO_RECEIVE_LOG_LEVEL_COUNT = t;
    f.AUDIO_RECEIVE_LOUDNESS_LEVEL = u;
    f.AUDIO_PACKETS_RECEIVED = v;
    f.AUDIO_FEC_PACKETS_RECEIVED = w;
    f.AUDIO_FEC_PACKETS_DISCARDED = x;
    f.AUDIO_PACKETS_RECEIVED_LOST = y;
    f.AUDIO_PACKETS_SENT = z;
    f.AUDIO_PACKETS_SENT_LOST = A;
    f.VIDEO_BYTES_RECEIVED = B;
    f.VIDEO_BYTES_SENT = C;
    f.INBOUND_QP = D;
    f.OUTBOUND_QP = E;
    f.FRAMES_ENCODED = F;
    f.FRAMES_DECODED = G;
    f.FRAMES_RECEIVED = H;
    f.FRAMES_SENT = I;
    f.KEYFRAMES_DECODED = J;
    f.PICTURE_LOSS_INDICAION_RECEIVED = K;
    f.FULL_INTRA_REQUEST_RECEIVED = L;
    f.VIDEOBWE_SEND_BANDWIDTH = M;
    f.VIDEOBWE_TRANSMIT_BITRATE = N;
    f.VIDEOBWE_RETRANSMIT_BITRATE = O;
    f.AUDIO_BYTES_SENT = P;
    f.AUDIO_BYTES_RECEIVED = Q;
    f.VIDEO_PKTS_SENT = R;
    f.VIDEO_PKTS_SEND_LOST = S;
    f.VIDEO_PKTS_RECEIVED = T;
    f.VIDEO_FEC_PKTS_RECEIVED = U;
    f.VIDEO_FEC_PKTS_DISCARDED = V;
    f.VIDEO_PKTS_RECV_LOST = W;
    f.AUDIO_RTT_RECEIVED = X;
    f.AUDIO_RTT_SENT = Y;
    f.AUDIO_DEV_REC_STALLS = Z;
    f.AUDIO_DEV_TOTAL_STALLS = $;
    f.AUDIO_DEV_IS_STALLED = aa;
    f.AUDIO_DEV_STALL_DURATION = ba;
    f.VIDEO_FREEZE_COUNT = ca;
    f.VIDEO_FREEZE_DURATION = da;
    f.VIDEO_PAUSE_COUNT = ea;
    f.VIDEO_PAUSE_DURATION = fa;
    f.VIDEO_CAPTURE_WIDTH = ga;
    f.VIDEO_CAPTURE_HEIGHT = ha;
    f.VIDEO_SUM_CAPTURE_PIXEL = ia;
    f.VIDEO_CAPTURE_FRAME_COUNT = ja;
    f.VIDEO_DECODED_WIDTH = ka;
    f.VIDEO_DECODED_HEIGHT = la;
    f.VIDEO_ENCODED_WIDTH = ma;
    f.VIDEO_ENCODED_HEIGHT = na;
    f.AUDIO_TOTAL_PACKET_SEND_DELAY = oa;
    f.VIDEO_TOTAL_PACKET_SEND_DELAY = pa;
    f.AUDIO_TOTAL_ENCODE_TIME = qa;
    f.VIDEO_TOTAL_ENCODE_TIME = ra;
    f.AUDIO_TOTAL_DECODE_TIME = sa;
    f.VIDEO_TOTAL_DECODE_TIME = ta;
    f.AUDIO_JITTER_BUFFER_DELAY = ua;
    f.VIDEO_JITTER_BUFFER_DELAY = va;
    f.AUDIO_JITTER_BUFFER_EMITTED_COUNT = wa;
    f.VIDEO_JITTER_BUFFER_EMITTED_COUNT = xa;
    f.AUDIO_E2E_LATENCY = ya;
    f.VIDEO_E2E_LATENCY = za;
    f.AV_SYNC = Aa;
    f.AV_SYNC_ABS = Ba;
    f.AV_SYNC_COUNT = Ca;
    f.AV_SYNC_OOB = Da;
    f.VIDEO_SUM_DECODED_PIXEL = Ea;
    f.VIDEO_SUM_ENCODED_PIXEL = Fa;
    f.AUDIO_NETEQ_WAIT_TIME = Ga;
    f.AUDIO_PACKET_LOSS_RATE = Ha;
    f.AUDIO_PLC_CNG_RATE = Ia;
    f.AUDIO_PLC_RATE = Ja;
    f.GLOBAL_AUDIO_BITRATE = Ka;
    f.GLOBAL_BATTERY_USAGE = La;
    f.GLOBAL_CPU_USAGE = Ma;
    f.GLOBAL_VIDEO_BITRATE = Na;
    f.VIDEO_AV_SYNC_ABS = Oa;
    f.VIDEO_AV_SYNC_OOB = Pa;
    f.VIDEO_FRAME_RATE = Qa;
    f.VIDEO_FREEZE_COUNT_PER_MIN = Ra;
    f.VIDEO_FREEZE_DURATION_PER_MIN = Sa;
    f.VIDEO_NETEQ_WAIT_TIME = Ta;
    f.VIDEO_PACKET_LOSS_RATE = Ua;
    f.VIDEO_RENDER_SCALE_RATIO = Va;
    f.VIDEO_CROPPING_RATIO = Wa;
    f.VIDEO_RTT_RECEIVED = Xa;
    f.VIDEO_RTT_SENT = Ya;
    f.SIMULCAST_LAYER_CHANGES = Za;
    f.VIDEO_QUALITY_SENT = $a;
    f.VIDEO_ENCODED_FRAME_RATE = ab;
    f.VIDEO_QP_SENT = bb;
    f.VIDEO_DECODE_TIME = cb;
  },
  66
);
__d(
  "FBRTCCallSummary",
  [
    "ChannelClientID",
    "ErrorMetadata",
    "FBRTCConstants",
    "FBRTCIceStatsParser",
    "FBRTCLocalUploadLogLevel",
    "FBRTCLogger",
    "FBRTCMediaMetricTracker",
    "FBRTCMediaMetricsConst",
    "RTWebUserActionLogger",
    "SiteData",
    "URI",
    "UserAgentData",
    "WebPerformanceDeviceInfo",
    "ZenonBrowsers",
    "gkx",
    "performanceNow",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 5 * 60 * 1e3,
      i = 1e5,
      j = [5, 50, 95],
      k = {
        CALL_STARTED: "started",
        SENT_OFFER: "s_o",
        RECV_OFFER: "r_o",
        SENT_OFFER_ACK: "s_oack",
        RECV_OFFER_ACK: "r_oack",
        SENT_RETRIED_OFFER: "s_o2",
        RECV_RETRIED_OFFER: "r_o2",
        SENT_RETRIED_OFFER_ACK: "s_oack2",
        RECV_RETRIED_OFFER_ACK: "r_oack2",
        SENT_PRANSWER: "s_pr",
        RECV_PRANSWER: "r_pr",
        NETWORK_READY: "network_ready",
        SENT_ANSWER: "s_a",
        RECV_ANSWER: "r_a",
        SENT_ANSWER_ACK: "s_aack",
        RECV_ANSWER_ACK: "r_aack",
        SENT_RETRIED_ANSWER: "s_a2",
        RECV_RETRIED_ANSWER: "r_a2",
        SENT_RETRIED_ANSWER_ACK: "s_aack2",
        RECV_RETRIED_ANSWER_ACK: "r_aack2",
        SENT_OK: "s_ok",
        RECV_OK: "r_ok",
        CALL_CONNECTED: "connected",
        CALL_ENDED: "ended",
        SENT_JOIN_REQUEST: "s_jreq",
        RECV_JOIN_RESPONSE: "r_jresp",
        PROC_JOIN_RESPONSE: "p_jresp",
        RECV_RING_REQUEST: "r_rreq",
        SENT_RING_RESPONSE: "s_rresp",
      },
      l = {
        FELLBACK_TO_AUDIO: "f_a",
        MEDIA_REQUESTED: "m_r",
        MEDIA_SUCCEEDED: "m_s",
        POPUP_OPENED: "opened",
        PRESSED_ANSWER: "p_a",
      },
      m = {
        ESCALATION_IS_AVAILABLE: "esc_available",
        USER_INITIATED_REQUEST: "out_started",
        RECEIVED_INCOMING_REQUEST: "inc_started",
        REJECTED_INVALID_P2P_STATE: "rej_invalid_state",
        CONNECTING_TO_MULTIWAY: "u_connecting_mw",
        CONNECTED_TO_MULTIWAY: "u_connected_mw",
        PEER_CONNECTING_TO_MULTIWAY: "p_connecting_mw",
        PEER_CONNECTED_TO_MULTIWAY: "p_connected_mw",
        READY_TO_ESCALATE: "ready_esc",
        PEER_FAILED_TO_CONNECT_TO_MULTIWAY: "p_fail_conn",
        MULTIWAY_CALL_ENDED: "mw_call_ended",
        TIMED_OUT: "timed_out",
        PEER_ABORTED: "p_aborted",
        INTERNAL_ERROR: "internal_err",
      },
      n = {
        ESCALATION_INITIATION_BUTTON_CLICKED: "esc_init_button",
        ESCALATION_APPROVED_BUTTON_CLICKED: "esc_appr_button",
        ESCALATION_DECLINED_BUTTON_CLICKED: "esc_decl_button",
        USERMEDIA_REQUEST: "media_req",
        USERMEDIA_SUCCESS: "media_success",
        USERMEDIA_FAILURE: "media_fail",
        SENT_ESC_REQUEST: "s_esc_req",
        RECV_ESC_REQUEST: "r_esc_req",
        SENT_ESC_REQUEST_ACK: "s_esc_req_ack",
        RECV_ESC_REQUEST_ACK: "s_esc_req_ack",
        SENT_ESC_RESPONSE: "s_esc_rep",
        RECV_ESC_ACCEPT: "r_esc_accept",
        RECV_ESC_DECLINE: "r_esc_decl",
        RECV_ESC_TIMEOUT: "r_esc_timeout",
      },
      o = [
        d("FBRTCMediaMetricsConst").ACCELERATE_RATE,
        d("FBRTCMediaMetricsConst").DISCARD_RATE,
        d("FBRTCMediaMetricsConst").EXPAND_RATE,
        d("FBRTCMediaMetricsConst").PREEMPTIVE_RATE,
        d("FBRTCMediaMetricsConst").SPEECH_EXPAND_RATE,
      ],
      p = [
        {
          key: d("FBRTCMediaMetricsConst").AUDIO_NETEQ_WAIT_TIME,
          field: "nwt",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").AUDIO_PACKET_LOSS_RATE,
          field: "plr",
          scale: 1e4,
        },
        {
          key: d("FBRTCMediaMetricsConst").AUDIO_PLC_CNG_RATE,
          field: "plccngr",
          scale: 1e4,
        },
        {
          key: d("FBRTCMediaMetricsConst").AUDIO_PLC_RATE,
          field: "plcr",
          scale: 1e4,
        },
      ],
      q = [
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_AV_SYNC_ABS,
          field: "avabs",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_FRAME_RATE,
          field: "fr",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_NETEQ_WAIT_TIME,
          field: "nwt",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_PACKET_LOSS_RATE,
          field: "plr",
          scale: 1e4,
        },
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_RENDER_SCALE_RATIO,
          field: "rsr",
          scale: 100,
        },
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_CROPPING_RATIO,
          field: "cr",
          scale: 100,
        },
      ],
      r = [
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_FREEZE_COUNT_PER_MIN,
          field: "vfmin",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_FREEZE_DURATION_PER_MIN,
          field: "vfdur",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_AV_SYNC_OOB,
          field: "avoob",
          scale: 1e4,
        },
      ],
      s = [
        {
          key: d("FBRTCMediaMetricsConst").GLOBAL_CPU_USAGE,
          field: "proc",
          scale: 100,
        },
        {
          key: d("FBRTCMediaMetricsConst").GLOBAL_BATTERY_USAGE,
          field: "bat",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").GLOBAL_AUDIO_BITRATE,
          field: "tadb",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").GLOBAL_VIDEO_BITRATE,
          field: "tvdb",
          scale: 1,
        },
      ],
      t = [
        {
          key: d("FBRTCMediaMetricsConst").AUDIO_RTT_SENT,
          field: "artt",
          scale: 1,
        },
      ],
      u = [
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_RTT_SENT,
          field: "vrtt",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_QUALITY_SENT,
          field: "vqs",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_ENCODED_FRAME_RATE,
          field: "efr",
          scale: 1,
        },
        {
          key: d("FBRTCMediaMetricsConst").VIDEO_QP_SENT,
          field: "qp",
          scale: 1,
        },
      ],
      v = "globalStatsTrackId",
      w = "grid",
      x = "pinned",
      y = "thumbnail",
      z = "pinnedAudioStatsTrackId",
      A = "pinnedVideoStatsTrackId",
      B = "outboundAudioStatsTrackId",
      C = "outboundScreenStatsTrackId",
      D = "outboundVideoStatsTrackId",
      E = [v, z, A, B, C, D];
    function F(a) {
      var b = new (c("URI"))(window.location).getPath().includes("/videocall/");
      if (a === "MW_PEER_ID" && !b) {
        a = c("gkx")("1984542");
        b = c("gkx")("1845186");
        var e =
          d("ZenonBrowsers").isFBWebviewWithChromeMinVersion(67) &&
          c("gkx")("1888615");
        a = a || b || e;
        if (a) return "ZenonPlatform";
      }
      b = c("gkx")("1341692");
      e = c("gkx")("1680228");
      return !b && !e ? "ZenonScotch" : "Old Codebase";
    }
    a = (function () {
      a.nullSummary = function () {
        return new a({
          peerID: "0",
          callID: "0",
          isCaller: !1,
          callTrigger: "NULL_SUMMARY",
        });
      };
      function a(b) {
        var e;
        this.$41 = {};
        this.peerID = String(b.peerID);
        this.callID = String(b.callID);
        this.localCallID = (e = b.localCallID) != null ? e : c("uuid")();
        this.deviceID = d("ChannelClientID").getID();
        this.$2 = b.isCaller;
        this.$1 = b.version || a.CURRENT_SUMMARY_VERSION;
        this.$3 = d("FBRTCLocalUploadLogLevel").getLocalUploadLogLevel();
        this.$15 = new Date().valueOf();
        this.$43 = {};
        this.$4 = b.callTrigger || null;
        this.$6 = {};
        this.$8 = {};
        this.$9 = {};
        this.$14 = {};
        this.$34 = null;
        this.$35 = null;
        this.$36 = null;
        this.$17 = 0;
        this.$18 = 0;
        this.$33 = !1;
        this.$10 = {};
        this.$11 = {};
        this.$12 = {};
        this.$13 = {};
        this.$39 = null;
        this.$38 = null;
        this.$37 = null;
        this.$5 = F(this.peerID);
        this.$20 = c("performanceNow")();
        this.$16 = 0;
        this.$7 = {};
        this.$19 = this.$20;
        this.$21 = 0;
        this.$22 = {};
        this.addExtraInfo(c("FBRTCLogger").Key.DEVICE_INFO, this.$56());
        this.$57();
        this.$58();
        this.$59();
        this.$60();
        this.$24 = c("FBRTCIceStatsParser").getInstance();
        this.$50 = new (c("FBRTCMediaMetricTracker"))();
        this.$23 = c("FBRTCLogger").getInstance();
      }
      var b = a.prototype;
      b.toJsonString = function () {
        this.$18 = new Date().valueOf();
        return JSON.stringify({
          version: this.$1,
          peerID: this.peerID,
          callID: this.callID,
          localCallID: this.localCallID,
          deviceID: this.deviceID,
          isCaller: this.$2,
          uploadLogLevel: this.$3,
          callType: this.$29,
          conferenceName: this.$26,
          joinWithSID: this.$27,
          activeConn: this.$25,
          escP2PCallID: this.$28,
          serverInfoData: this.$30,
          localVideoDuration: this.$31,
          remoteVideoDuration: this.$32,
          startTime: this.$15,
          trigger: this.$4,
          signalingTime: this.$6,
          escStateTimes: this.$8,
          applicationEventTime: this.$9,
          videoEscTimes: this.$14,
          endCallReason: this.$34,
          endCallSubreason: this.$35,
          isRemoteEnded: this.$36,
          lastUpdatedTime: this.$17,
          lastSerializedTime: this.$18,
          unsetOnRetrieve: this.$33,
          openCount: this.$21,
          extraInfo: this.$22,
          gen0IceSentCount: this.$10,
          gen0IceReceivedCount: this.$11,
          iceSentCount: this.$12,
          iceReceivedCount: this.$13,
          connectionType: this.$39,
          mediaMetricStats: this.$50.toJsonString(),
          newSignalingTime: this.$7,
          accumulatedCallTime: this.$61(),
          deviceCharged: this.$42,
          ehist: this.getEhist(),
          videoReceivedCodec: this.$44,
          videoSentCodec: this.$45,
          videoDevice: this.$46,
          audioDevice: this.$47,
          audioDeviceHist: this.$48,
          audioSentCodec: this.$49,
          relayIP: this.$40,
          clientVersion: this.$5,
          pcConnectionStates: this.$41,
          pcIsConnected: this.$37,
          endIsConnected: this.$38,
          maxTotalDecodeTime: this.$51,
          totalDecodeTime: this.$52,
          totalEncodeTime: this.$53,
          keyFramesEncoded: this.$54,
          avSyncAbsHist: this.$55,
        });
      };
      a.fromJsonString = function (b) {
        var d;
        try {
          b = JSON.parse(b);
        } catch (a) {
          return null;
        }
        if (b.version < a.OLDEST_SUPPORTED_SUMMARY_VERSION) return null;
        if (
          !Object.prototype.hasOwnProperty.call(b, "peerID") ||
          !Object.prototype.hasOwnProperty.call(b, "callID") ||
          !Object.prototype.hasOwnProperty.call(b, "isCaller") ||
          !Object.prototype.hasOwnProperty.call(b, "startTime") ||
          !Object.prototype.hasOwnProperty.call(b, "trigger") ||
          !Object.prototype.hasOwnProperty.call(b, "signalingTime") ||
          !Object.prototype.hasOwnProperty.call(b, "endCallReason") ||
          !Object.prototype.hasOwnProperty.call(b, "isRemoteEnded") ||
          !Object.prototype.hasOwnProperty.call(b, "lastUpdatedTime") ||
          !Object.prototype.hasOwnProperty.call(b, "lastSerializedTime")
        )
          return null;
        var e = new a({
          peerID: b.peerID,
          callID: b.callID,
          isCaller: b.isCaller,
          localCallID: b.localCallID,
        });
        e.deviceID = b.deviceID;
        e.$1 = b.version;
        e.$3 = b.uploadLogLevel;
        e.$15 = b.startTime;
        e.$4 = b.trigger;
        e.$5 = b.clientVersion;
        e.$6 = b.signalingTime;
        e.$34 = b.endCallReason;
        e.$35 = b.endCallSubreason;
        e.$36 = b.isRemoteEnded;
        e.$17 = b.lastUpdatedTime;
        e.$18 = b.lastSerializedTime;
        e.$27 = b.joinWithSID;
        e.$38 = (d = b.endIsConnected) != null ? d : null;
        e.$37 = (d = b.pcIsConnected) != null ? d : null;
        b.callType && (e.$29 = b.callType);
        b.conferenceName && (e.$26 = b.conferenceName);
        b.escP2PCallID && (e.$28 = b.escP2PCallID);
        b.activeConn && (e.$25 = b.activeConn);
        b.serverInfoData && (e.$30 = b.serverInfoData);
        b.localVideoDuration && (e.$31 = b.localVideoDuration);
        b.remoteVideoDuration && (e.$32 = b.remoteVideoDuration);
        b.unsetOnRetrieve && (e.$33 = b.unsetOnRetrieve);
        b.openCount && (e.$21 = b.openCount);
        b.extraInfo && (e.$22 = b.extraInfo);
        b.gen0IceSentCount && (e.$10 = b.gen0IceSentCount);
        b.gen0IceReceivedCount && (e.$11 = b.gen0IceReceivedCount);
        b.iceSentCount && (e.$12 = b.iceSentCount);
        b.iceReceivedCount && (e.$13 = b.iceReceivedCount);
        b.newSignalingTime && (e.$7 = b.newSignalingTime);
        b.pcConnectionStates && (e.$41 = b.pcConnectionStates);
        b.accumulatedCallTime && (e.$16 = b.accumulatedCallTime);
        b.escStateTimes && (e.$8 = b.escStateTimes);
        b.applicationEventTime && (e.$9 = b.applicationEventTime);
        b.videoEscTimes && (e.$14 = b.videoEscTimes);
        b.mediaMetricStats &&
          (e.$50 = c("FBRTCMediaMetricTracker").fromJsonString(
            b.mediaMetricStats
          ));
        b.connectionType && (e.$39 = b.connectionType);
        b.deviceCharged && (e.$42 = b.deviceCharged);
        b.ehist !== null && (e.$43 = b.ehist);
        b.videoReceivedCodec !== null && (e.$44 = b.videoReceivedCodec);
        b.videoSentCodec !== null && (e.$45 = b.videoSentCodec);
        b.videoDevice !== null && (e.$46 = b.videoDevice);
        b.audioDevice !== null && (e.$47 = b.audioDevice);
        b.audioDeviceHist !== null && (e.$48 = b.audioDeviceHist);
        b.audioSentCodec !== null && (e.$49 = b.audioSentCodec);
        b.relayIP !== null && b.relayIP !== void 0 && (e.$40 = b.relayIP);
        b.maxTotalDecodeTime !== null &&
          b.maxTotalDecodeTime !== void 0 &&
          (e.$51 = b.maxTotalDecodeTime);
        b.totalDecodeTime != null && (e.$52 = b.totalDecodeTime);
        b.totalEncodeTime != null && (e.$53 = b.totalEncodeTime);
        b.keyFramesEncoded != null && (e.$54 = b.keyFramesEncoded);
        b.avSyncAbsHist !== null && (e.$55 = b.avSyncAbsHist);
        return e;
      };
      a.restoreOrInitialize = function (b, d, e, f, g, h) {
        d = String(d);
        e = String(e);
        b = b.retrieveCallSummary(d, e);
        !b
          ? ((b = new a({ peerID: d, callID: e, isCaller: f })),
            g
              ? (b.onFullMessageReceived({ msg: g }), b.onOfferAckSent(g))
              : b.onCallStarted(h || c("FBRTCLogger").Trigger.UNKNOWN),
            h !== c("FBRTCLogger").Trigger.REDIAL_BUTTON &&
              c("FBRTCLogger")
                .getInstance()
                .logError(d, e, "Missing call summary from storage"))
          : b.$33 &&
            ((b.$38 = null),
            (b.$34 = null),
            (b.$35 = null),
            (b.$36 = null),
            delete b.$6[k.CALL_ENDED],
            delete b.$7[k.CALL_ENDED],
            (b.$20 = 0),
            (b.$33 = null));
        return b;
      };
      a.logSavedSummaries = function (a) {
        var b = a.getLoggableSummaries(),
          d = b.length;
        if (d <= 0) return;
        var e = c("FBRTCLogger").getInstance(),
          f = [];
        for (var g = 0; g < d; g++) {
          var h = b[g];
          e.logEndCallSummary(h);
          f.push({ peerID: h.peerID, callID: h.callID });
        }
        a.removeCallSummaries(f);
        e.logToConsole("Logged pending summaries: " + d);
      };
      b.logThisSummary = function (a, b) {
        b === void 0 && (b = !1);
        var d = c("FBRTCLogger").getInstance();
        a.retrieveCallSummary(this.peerID, this.callID) != null
          ? (d.logEndCallSummary(this, b),
            a.removeCallSummary(this.peerID, this.callID),
            d.logToConsole("Logged active summary"),
            c("RTWebUserActionLogger").logCheckpoint({
              checkpoint:
                "FBRTCCallSummary_logThisSummary: Logged call summary " +
                JSON.stringify({ peerID: this.peerID, callID: this.callID }),
            }))
          : c("RTWebUserActionLogger").logCheckpoint({
              checkpoint:
                "FBRTCCallSummary_logThisSummary: Unable to retrieve call summary " +
                JSON.stringify({ peerID: this.peerID, callID: this.callID }),
            });
      };
      b.isNull = function () {
        var b = a.CANONICAL_NULL_SUMMARY;
        return (
          this.peerID === b.peerID &&
          this.callID === b.callID &&
          this.isCaller() === b.isCaller() &&
          this.getCallTrigger() === b.getCallTrigger()
        );
      };
      b.save = function (a) {
        var b = c("performanceNow")(),
          d = b - this.$19;
        if (d > h) {
          this.$23.logInfo(this.peerID, this.callID, "Summary too old: " + d);
          return;
        }
        a.storeCallSummary(this.peerID, this.callID, this);
        this.$19 = b;
      };
      b.getVersion = function () {
        return this.$1;
      };
      b.getLastUpdatedTime = function () {
        return this.$17;
      };
      b.setLastUpdatedTime = function (a) {
        this.$17 = a;
      };
      b.getExtraInfo = function () {
        return this.$22;
      };
      b.getCallTrigger = function () {
        return this.$4;
      };
      b.addExtraInfo = function (a, b) {
        (this.$22[a] = b), this.$60();
      };
      b.isCaller = function () {
        return this.$2;
      };
      b.isNetworkReady = function () {
        if (this.$6[k.NETWORK_READY]) return !0;
        else return !1;
      };
      b.isAnswerReceived = function () {
        if (this.$6[k.RECV_ANSWER]) return !0;
        else return !1;
      };
      b.onCallStarted = function (a) {
        (this.$4 = a),
          this.$62(k.CALL_STARTED),
          this.$60(),
          c("ErrorMetadata").addGlobalMetadata("RT_WEB", "TYPE", "CallStarted");
      };
      b.setCallTrigger = function (a) {
        (this.$4 = a), this.$60();
      };
      b.setPCIsConnected = function (a) {
        this.$37 !== a && ((this.$37 = a), (this.$41[this.$61()] = a));
      };
      b.onPopupOpened = function () {
        (this.deviceID = d("ChannelClientID").getID()),
          this.$63(l.POPUP_OPENED),
          this.$21++,
          this.$60();
      };
      b.onPressedAnswer = function () {
        this.$63(l.PRESSED_ANSWER), this.$60();
      };
      b.onMediaRequested = function () {
        this.$63(l.MEDIA_REQUESTED), this.$60();
      };
      b.onMediaSucceeded = function () {
        this.$63(l.MEDIA_SUCCEEDED), this.$60();
      };
      b.onFellbackToAudio = function () {
        this.$63(l.FELLBACK_TO_AUDIO), this.$60();
      };
      b.setConnectionType = function (a) {
        (this.$39 = a), this.$60();
      };
      b.setUploadLogLevel = function (a) {
        (this.$3 = a), this.$60();
      };
      b.getCallType = function () {
        return this.$29;
      };
      b.setCallType = function (a) {
        (this.$29 = a),
          this.addExtraInfo(c("FBRTCLogger").Key.CALL_TYPE, a),
          this.$60();
      };
      b.setLinkSurface = function (a) {
        this.addExtraInfo(c("FBRTCLogger").Key.ROOM_SURFACE, a);
      };
      b.setVideoDurations = function (a, b) {
        (this.$31 = a), (this.$32 = b), this.$60();
      };
      b.setAudioDevice = function (a) {
        var b;
        this.$47 = a;
        this.$48 = (b = this.$48) != null ? b : new Array(0);
        this.$48.length === 0
          ? this.$48.push(a)
          : a !== this.$48[this.$48.length - 1] && this.$48.push(a);
      };
      b.setVideoDevice = function (a) {
        this.$46 = a;
      };
      b.setScreenDuration = function (a) {
        this.addExtraInfo(c("FBRTCLogger").Key.SCREEN_DURATION, a);
      };
      b.setConferenceName = function (a) {
        (this.$26 = a), this.$60();
      };
      b.setTotalVideoFilterDuration = function (a) {
        this.addExtraInfo(
          c("FBRTCLogger").Key.VIDEO_DURATION_WITH_FILTER,
          Math.ceil(a).toString()
        );
      };
      b.setCoExperienceEffectDuration = function (a) {
        this.addExtraInfo(
          c("FBRTCLogger").Key.EFFECT_TOTAL_DURATION,
          Math.ceil(a).toString()
        );
      };
      b.setEffectCount = function (a) {
        this.addExtraInfo(c("FBRTCLogger").Key.EFFECT_COUNT, a.toString());
      };
      b.setJoinWithSID = function (a) {
        (this.$27 = a), this.$60();
      };
      b.setServerInfoData = function (a) {
        (this.$30 = a), this.$60();
      };
      b.setActiveConnection = function (a) {
        (this.$25 = a), this.$60();
      };
      b.setEscalationP2PCallID = function (a) {
        (this.$28 = a), this.$60();
      };
      b.onOfferAckSent = function (a) {
        this.onMessageSent({
          type: d("FBRTCConstants").PayloadType.OFFER_ACK,
          flag: a.flag,
        });
      };
      b.onMessageSent = function (a) {
        var b = a.flag === 1;
        switch (a.type) {
          case d("FBRTCConstants").PayloadType.OFFER:
            this.$64(b, k.SENT_OFFER, k.SENT_RETRIED_OFFER);
            this.$65(a, this.$10, this.$12);
            break;
          case d("FBRTCConstants").PayloadType.ANSWER:
            this.$64(b, k.SENT_ANSWER, k.SENT_RETRIED_ANSWER);
            this.$65(a, this.$10, this.$12);
            break;
          case d("FBRTCConstants").PayloadType.OK:
            this.$62(k.SENT_OK);
            break;
          case d("FBRTCConstants").PayloadType.PRANSWER:
            this.$62(k.SENT_PRANSWER);
            break;
          case d("FBRTCConstants").PayloadType.OFFER_ACK:
            this.$64(b, k.SENT_OFFER_ACK, k.SENT_RETRIED_OFFER_ACK);
            break;
          case d("FBRTCConstants").PayloadType.ANSWER_ACK:
            this.$64(b, k.SENT_ANSWER_ACK, k.SENT_RETRIED_ANSWER_ACK);
            break;
          case d("FBRTCConstants").PayloadType.ICE_CANDIDATE:
            this.$65(a, this.$10, this.$12);
            break;
          case d("FBRTCConstants").PayloadType.ACK:
            a.ack_type === d("FBRTCConstants").PayloadType.VIDEO_REQUEST &&
              this.$66(n.SENT_ESC_REQUEST_ACK);
            break;
          case d("FBRTCConstants").PayloadType.VIDEO_REQUEST:
            a.ack_id
              ? this.$66(n.SENT_ESC_RESPONSE)
              : this.$66(n.SENT_ESC_REQUEST);
            break;
          default:
        }
        this.$60();
      };
      b.$65 = function (a, b, c) {
        var d,
          e = null;
        a = this.$24.extractIceInfo(a.sdp);
        for (var f = 0; f < a.length; f++)
          (d = a[f].gen),
            (e = a[f].type),
            d === 0 && this.$67(b, e),
            this.$67(c, e);
      };
      b.$67 = function (a, b) {
        !a[b] ? (a[b] = 1) : (a[b] += 1);
      };
      b.$68 = function (a) {
        this.addExtraInfo(
          c("FBRTCLogger").Key.PEER_IS_MOBILE,
          a.isFromMobile() ? "1" : "0"
        );
      };
      b.onFullMessageReceived = function (a) {
        var b = a.msg,
          c = b.flag === 1;
        switch (b.type) {
          case d("FBRTCConstants").PayloadType.OFFER:
            this.$68(a);
            this.$64(c, k.RECV_OFFER, k.RECV_RETRIED_OFFER);
            this.$65(b, this.$11, this.$13);
            break;
          case d("FBRTCConstants").PayloadType.ANSWER:
            this.$68(a);
            this.$64(c, k.RECV_ANSWER, k.RECV_RETRIED_ANSWER);
            this.$65(b, this.$11, this.$13);
            break;
          case d("FBRTCConstants").PayloadType.OK:
            this.$62(k.RECV_OK);
            break;
          case d("FBRTCConstants").PayloadType.PRANSWER:
            this.$62(k.RECV_PRANSWER);
            break;
          case d("FBRTCConstants").PayloadType.OFFER_ACK:
            this.$64(c, k.RECV_OFFER_ACK, k.RECV_RETRIED_OFFER_ACK);
            break;
          case d("FBRTCConstants").PayloadType.ANSWER_ACK:
            this.$64(c, k.RECV_ANSWER_ACK, k.RECV_RETRIED_ANSWER_ACK);
            break;
          case d("FBRTCConstants").PayloadType.ICE_CANDIDATE:
            this.$65(b, this.$11, this.$13);
            break;
          case d("FBRTCConstants").PayloadType.ACK:
            b.ack_type === d("FBRTCConstants").PayloadType.VIDEO_REQUEST &&
              this.$66(n.RECV_ESC_REQUEST_ACK);
            break;
          case d("FBRTCConstants").PayloadType.VIDEO_REQUEST:
            b.ack_id
              ? b.videoon || b.reqVideoOn
                ? this.$66(n.RECV_ESC_ACCEPT)
                : this.$66(n.RECV_ESC_DECLINE)
              : b.videoon || b.reqVideoOn
              ? this.$66(n.RECV_ESC_REQUEST)
              : this.$66(n.RECV_ESC_TIMEOUT);
            break;
          default:
        }
        this.$60();
      };
      b.onMsgAckReceived = function (a, b) {
        a = a.msg.flag === 1;
        b
          ? this.$64(a, k.RECV_OFFER_ACK, k.RECV_RETRIED_OFFER_ACK)
          : this.$64(a, k.RECV_ANSWER_ACK, k.RECV_RETRIED_ANSWER_ACK);
      };
      b.onNetworkReady = function () {
        this.$62(k.NETWORK_READY), this.$60();
      };
      b.onCallConnected = function () {
        this.$62(k.CALL_CONNECTED), this.$60();
      };
      b.onCallEnded = function (a, b, c, d) {
        (this.$33 = c),
          (this.$34 = a),
          (this.$35 = d),
          (this.$36 = b),
          this.$38 === null && (this.$38 = this.$37),
          this.$62(k.CALL_ENDED),
          this.$60();
      };
      b.setOfferSentTime = function () {
        this.$62(k.SENT_OFFER);
      };
      b.setOfferAckReceivedTime = function () {
        this.$62(k.RECV_OFFER_ACK);
      };
      b.setAnswerSentTime = function () {
        this.$62(k.SENT_ANSWER);
      };
      b.setAnswerReceivedTime = function () {
        this.$62(k.RECV_ANSWER);
      };
      b.setJoinRequestSent = function () {
        this.$62(k.SENT_JOIN_REQUEST), this.$60();
      };
      b.setJoinResponseReceived = function () {
        this.$62(k.RECV_JOIN_RESPONSE), this.$60();
      };
      b.setJoinResponseProcessed = function () {
        this.$62(k.PROC_JOIN_RESPONSE), this.$60();
      };
      b.setRingRequestReceived = function () {
        this.$62(k.RECV_RING_REQUEST), this.$60();
      };
      b.setRingResponseSent = function () {
        this.$62(k.SENT_RING_RESPONSE), this.$60();
      };
      b.setEscalationAvailable = function () {
        this.$69(m.ESCALATION_IS_AVAILABLE);
      };
      b.setEscalationInitiated = function () {
        this.$69(m.USER_INITIATED_REQUEST);
      };
      b.setReceivedEscalationRequest = function () {
        this.$69(m.RECEIVED_INCOMING_REQUEST);
      };
      b.setInvalidP2PEscalationState = function () {
        this.$69(m.REJECTED_INVALID_P2P_STATE);
      };
      b.setEscalationConnectingToMultiway = function () {
        this.$69(m.CONNECTING_TO_MULTIWAY);
      };
      b.setEscalationConnectedToMultiway = function () {
        this.$69(m.CONNECTED_TO_MULTIWAY);
      };
      b.setEscalationPeerConnectingToMultiway = function () {
        this.$69(m.PEER_CONNECTING_TO_MULTIWAY);
      };
      b.setEscalationPeerConnectedToMultiway = function () {
        this.$69(m.PEER_CONNECTED_TO_MULTIWAY);
      };
      b.setReadyToEscalate = function () {
        this.$69(m.READY_TO_ESCALATE);
      };
      b.setEscalationPeerFailedToConnectToMultiway = function () {
        this.$69(m.PEER_FAILED_TO_CONNECT_TO_MULTIWAY);
      };
      b.setEscalationTimedOut = function () {
        this.$69(m.TIMED_OUT);
      };
      b.setVidEscalationInitClick = function () {
        this.$66(n.ESCALATION_INITIATION_BUTTON_CLICKED);
      };
      b.setVidEscalationAcceptedClick = function () {
        this.$66(n.ESCALATION_APPROVED_BUTTON_CLICKED);
      };
      b.setVidEscalationDeclinedClick = function () {
        this.$66(n.ESCALATION_DECLINED_BUTTON_CLICKED);
      };
      b.setVidEscalationMediaRequested = function () {
        this.$66(n.USERMEDIA_REQUEST);
      };
      b.setVidEscalationMediaSuccess = function () {
        this.$66(n.USERMEDIA_SUCCESS);
      };
      b.setVidEscalationMediaFailed = function () {
        this.$66(n.USERMEDIA_FAILURE);
      };
      b.setVideoCapabilities = function (a) {
        this.addExtraInfo(c("FBRTCLogger").Key.VIDEO_CAPABILITIES, a);
      };
      b.setMediaInputs = function (a) {
        this.addExtraInfo(c("FBRTCLogger").Key.MEDIA_INPUTS, a);
      };
      b.getVideoReceivedCodec = function () {
        return this.$44;
      };
      b.setVideoReceivedCodec = function (a) {
        this.$44 = a;
      };
      b.getVideoSentCodec = function () {
        return this.$45;
      };
      b.setVideoSentCodec = function (a) {
        this.$45 = a;
      };
      b.getEhist = function () {
        return this.$43;
      };
      b.setEhist = function (a) {
        this.$43 = a;
      };
      b.getAudioSentCodec = function () {
        return this.$49;
      };
      b.setAudioSentCodec = function (a) {
        this.$49 = a;
      };
      b.setVideoMaxTotalDecodeTime = function (a) {
        var b;
        this.$51 = Math.max((b = this.$51) != null ? b : 0, a);
      };
      b.getTotalDecodeTime = function () {
        return this.$52;
      };
      b.setTotalDecodeTime = function (a) {
        this.$52 = a;
      };
      b.getTotalEncodeTime = function () {
        return this.$53;
      };
      b.setTotalEncodeTime = function (a) {
        this.$53 = a;
      };
      b.getKeyFramesEncoded = function () {
        return this.$54;
      };
      b.setKeyFramesEncoded = function (a) {
        this.$54 = a;
      };
      b.$70 = function () {
        return this.$55;
      };
      b.setAvSyncAbsHist = function (a) {
        var b;
        b = (b = a) != null ? b : [];
        b = b.some(function (a) {
          return a > 0;
        });
        b && (this.$55 = a);
      };
      b.toString = function () {
        var a = {};
        a.core_metrics = this.$71();
        a.time_series = null;
        return JSON.stringify(a);
      };
      b.$71 = function () {
        var a = {};
        a.ver = this.$1;
        a.log_level = d("FBRTCConstants").uploadLogLevelString(this.$3);
        a.caller = this.$2;
        a.call_type = this.$29;
        a.active_conn = this.$25;
        a.app_event_times = this.$9;
        a.conf_name = this.$26;
        a.CoreAudioMetrics = this.$72();
        a.join_with_sid = this.$27;
        a.esc_p2p_call_id = this.$28;
        a.esc_state_times = this.$8;
        a.vid_esc_times = this.$14;
        a.serv_info = this.$30;
        a.conn = this.$73();
        a.peer_id = this.peerID;
        a.has_video = !0;
        a.open_count = this.$21;
        a.signaling = this.$74();
        a.sender = this.$75();
        a.receiver = this.$76();
        a.end = this.$77();
        a.video = this.$78();
        a.push_phase = c("SiteData").push_phase;
        a.DebugAudioMetrics = this.$79();
        a.device_charged = this.$42;
        a.client_version = this.$5;
        a.perf = this.$80();
        a.grid = this.$81();
        a.pinned = this.$82();
        a.thumbnail = this.$83();
        a.sys_pct = this.$84();
        a.sender_pct = this.$85();
        return a;
      };
      b.$79 = function () {
        return { NetworkReceive: { jb_nm: this.$86() } };
      };
      b.$87 = function (a, b, c) {
        var d = this,
          e = 0,
          f = 0;
        b == null && (b = 1);
        var g = this.$50.getVideoStreamReportKeys();
        g.forEach(function (b) {
          if (c == null || d.$50.getVideoContentType(b) === c) {
            b = d.$50.getVideoMetric(b, a);
            b && ((e += b.total), (f += b.count));
          }
        });
        return f === 0 ? null : Math.round((e * b) / f);
      };
      b.$88 = function (a, b, c) {
        var d = this,
          e = 0,
          f = 0;
        b == null && (b = 1);
        var g = this.$50.getVideoStreamReportKeys();
        g.forEach(function (b) {
          if (c == null || d.$50.getVideoContentType(b) === c) {
            b = d.$50.getVideoMetric(b, a);
            b && ((e += b.current), (f += 1));
          }
        });
        return f === 0 ? null : Math.round(e * b);
      };
      b.$89 = function (a, b) {
        var c = this,
          d = 0,
          e = 0;
        b == null && (b = 1);
        var f = this.$50.getAudioStreamReportKeys();
        f.forEach(function (b) {
          b = c.$50.getMetricStats(b, a);
          b && ((d += b.current), (e += 1));
        });
        return e === 0 ? null : Math.round(d * b);
      };
      b.$86 = function () {
        var a = this,
          b = {},
          c = this.$50.getAudioStreamReportKeys();
        if (c.length < 1) return b;
        o.forEach(function (d) {
          var e = 0,
            f = 0,
            g = -Infinity,
            h = Infinity;
          c.forEach(function (b) {
            b = a.$50.getMetricStats(b, d);
            b != null &&
              b.total != null &&
              ((e += b.count),
              (f += b.total),
              (g = Math.max(g, b.max)),
              (h = Math.min(h, b.min)));
          });
          e > 0 &&
            (b[d] = {
              m: Math.round(1e4 * h),
              M: Math.round(1e4 * g),
              avg: Math.round((f * 1e4) / e),
            });
        });
        b.neteq = { meanWait: this.$90() };
        return b;
      };
      b.$90 = function () {
        var a = this.$89(d("FBRTCMediaMetricsConst").AUDIO_JITTER_BUFFER_DELAY),
          b = this.$89(
            d("FBRTCMediaMetricsConst").AUDIO_JITTER_BUFFER_EMITTED_COUNT
          );
        return a != null && b != null && b > 0 ? Math.round((a * 1e3) / b) : -1;
      };
      b.$72 = function () {
        var a = this,
          b = this.$50.getAudioStreamReportKeys();
        b =
          b.reduce(
            function (b, c) {
              c = a.$50.getMetricStats(
                c,
                d("FBRTCMediaMetricsConst").AUDIO_DEV_IS_STALLED
              );
              return !c || c.updatedTime == null || c.current == null
                ? b
                : c.updatedTime > b.timeStamp
                ? { val: c.current, timeStamp: c.updatedTime }
                : b;
            },
            { val: -1, timeStamp: -Infinity }
          ).val > 0
            ? 1
            : 0;
        var c = this.$89(d("FBRTCMediaMetricsConst").AUDIO_DEV_REC_STALLS),
          e = this.$89(d("FBRTCMediaMetricsConst").AUDIO_DEV_TOTAL_STALLS),
          f = this.$89(d("FBRTCMediaMetricsConst").AUDIO_DEV_STALL_DURATION),
          g = this.$91();
        g = g.count === 0 ? 0 : Math.round(g.levelSum / g.count);
        e = {
          astall: e,
          audio_device: this.$47,
          audio_device_hist: this.$48,
          isstall: b,
          rstall: c,
          rx_chan_proc_lvl: g,
          sdur: f,
        };
        return e;
      };
      b.$73 = function () {
        var a = { dtls: 1 },
          b = this.$75();
        b.avgrtt &&
          ((a.avgrtt = b.avgrtt), (a.maxrtt = b.maxrtt), (a.minrtt = b.minrtt));
        this.$40 !== null && (a.relay_ip = this.$40);
        a.ctd = this.$41;
        return a;
      };
      b.$74 = function () {
        var a = {};
        this.$4 && (a.trigger = this.$4);
        a.start_time = this.$15;
        a.time_from_start = this.$6;
        a.new_time_from_start = this.$7;
        var b = this.$92();
        b > 0 && (a.duration = b);
        return a;
      };
      b.$92 = function (a) {
        var b = this.$7[k.CALL_CONNECTED] || this.$7[k.NETWORK_READY];
        if (!b) return 0;
        a =
          this.$7[k.CALL_ENDED] ||
          (!(a == null ? void 0 : a.assumeOngoing) && this.$16) ||
          this.$61();
        return Math.max(0, a - b);
      };
      b.$75 = function () {
        var a = this,
          b = {},
          c = this.$50.getAudioStreamReportKeys(),
          e = 0,
          f = 0,
          g = 0;
        c.forEach(function (b) {
          b = a.$50.getMetricStats(
            b,
            d("FBRTCMediaMetricsConst").AUDIO_BYTES_SENT
          );
          b != null &&
            ((e += b.current),
            (f += b.current - b.first),
            (g += b.updatedTime - b.startedTime));
        });
        g > 0 && (b.ube_avg = Math.round((f * 8e3) / g));
        b.bytes = e;
        b.plost = this.$89(d("FBRTCMediaMetricsConst").AUDIO_PACKETS_SENT_LOST);
        b.psent = this.$89(d("FBRTCMediaMetricsConst").AUDIO_PACKETS_SENT);
        var h = this.$50.getMetricStats(
            B,
            d("FBRTCMediaMetricsConst").AUDIO_SEND_LOUDNESS_LEVEL
          ),
          i = this.$50.getMetricStats(
            B,
            d("FBRTCMediaMetricsConst").AUDIO_SEND_LOG_LEVEL_COUNT
          );
        h && i && ((b.tx_sum_lvl = h.current), (b.taulc = i.current));
        var j = 0,
          k = 0,
          l = null,
          m = null;
        c.forEach(function (b) {
          b = a.$50.getMetricStats(
            b,
            d("FBRTCMediaMetricsConst").AUDIO_RTT_SENT
          );
          b &&
            ((k += b.count),
            (j += b.total),
            (l = l == null ? b.min : Math.min(l, b.min)),
            (m = m == null ? b.max : Math.max(m, b.max)));
        });
        k > 0 &&
          ((b.avgrtt = Math.round(j / k)), (b.maxrtt = m), (b.minrtt = l));
        this.$10 && (b.ice_g0 = this.$10);
        this.$12 && (b.ice = this.$12);
        this.$49 != null && this.$49 !== "" && (b.codec = { www: this.$49 });
        return b;
      };
      b.$76 = function () {
        var a = this,
          b = {},
          c = this.$50.getAudioStreamReportKeys();
        b.jbd = this.$89(
          d("FBRTCMediaMetricsConst").AUDIO_JITTER_BUFFER_DELAY,
          1e3
        );
        b.jbec = this.$89(
          d("FBRTCMediaMetricsConst").AUDIO_JITTER_BUFFER_EMITTED_COUNT
        );
        var e = new Map([
          [d("FBRTCMediaMetricsConst").DECODING_PLC, 0],
          [d("FBRTCMediaMetricsConst").DECODING_PLC_CNG, 0],
          [d("FBRTCMediaMetricsConst").DECODING_CNG, 0],
          [d("FBRTCMediaMetricsConst").DECODING_NORMAL, 0],
          [d("FBRTCMediaMetricsConst").DECODING_NETEQ_CALL, 0],
        ]);
        c.forEach(function (b) {
          if (E.includes(b)) return;
          e.forEach(function (c, d) {
            c = a.$50.getMetricStats(b, d);
            if (c != null) {
              var f;
              f = (f = e.get(d)) != null ? f : 0;
              e.set(d, f + c.current);
            }
          });
        });
        b.dec_plc = e.get(d("FBRTCMediaMetricsConst").DECODING_PLC);
        b.dec_plc_cng = e.get(d("FBRTCMediaMetricsConst").DECODING_PLC_CNG);
        b.dec_cng = e.get(d("FBRTCMediaMetricsConst").DECODING_CNG);
        b.dec_normal = e.get(d("FBRTCMediaMetricsConst").DECODING_NORMAL);
        b.neteq_calls = e.get(d("FBRTCMediaMetricsConst").DECODING_NETEQ_CALL);
        var f = this.$50.getMetricStats(
            v,
            d("FBRTCMediaMetricsConst").AUDIO_SEND_LOUDNESS_LEVEL
          ),
          g = this.$50.getMetricStats(
            v,
            d("FBRTCMediaMetricsConst").AUDIO_SEND_LOG_LEVEL_COUNT
          );
        f && g && ((b.rx_sum_lvl = f.current), (b.taulc = g.current));
        b.fecpd = this.$89(
          d("FBRTCMediaMetricsConst").AUDIO_FEC_PACKETS_DISCARDED
        );
        b.fecpr = this.$89(
          d("FBRTCMediaMetricsConst").AUDIO_FEC_PACKETS_RECEIVED
        );
        var h = 0;
        c.forEach(function (b) {
          b = a.$50.getMetricStats(
            b,
            d("FBRTCMediaMetricsConst").AUDIO_BYTES_RECEIVED
          );
          b && (h += b.current);
        });
        b.bytes = h;
        var j = 0,
          k = 0;
        c.forEach(function (b) {
          b = a.$50.getMetricStats(
            b,
            d("FBRTCMediaMetricsConst").AUDIO_BYTES_RECEIVED
          );
          if (b) {
            var c = b.updatedTime - b.startedTime;
            c > 0 && ((j += b.current - b.first), (k += c));
          }
        });
        k > 0 && (b.dbe_avg = Math.round((j * 8e3) / k));
        var l = 0;
        c.forEach(function (b) {
          b = a.$50.getMetricStats(
            b,
            d("FBRTCMediaMetricsConst").AUDIO_PACKETS_RECEIVED_LOST
          );
          b && (l += b.current);
        });
        b.plost = l;
        var m = 0,
          n,
          o,
          p,
          q = 0,
          r = 0;
        c.forEach(function (b) {
          var c = a.$50.getMetricStats(
              b,
              d("FBRTCMediaMetricsConst").AUDIO_PACKETS_RECEIVED
            ),
            e = a.$50.getMetricStats(
              b,
              d("FBRTCMediaMetricsConst").AUDIO_RTT_RECEIVED
            );
          b = a.$50.getMetricStats(
            b,
            d("FBRTCMediaMetricsConst").AUDIO_RECEIVE_TOTAL_ENERGY
          );
          b != null && ((q += b.current), (r += b.updatedTime - b.startedTime));
          c != null &&
            ((m += c.current),
            e != null &&
              e.mean != null &&
              ((n = n == null ? c.current * e.mean : n + c.current * e.mean),
              (p = p == null ? e.max : Math.max(p, e.max)),
              (o = o == null ? e.min : Math.min(o, e.min))));
        });
        b.taue = Math.round(q * i);
        b.taut = Math.round(r);
        m > 0 &&
          n != null &&
          ((b.avgrtt = Math.round(n / m)), (b.maxrtt = p), (b.minrtt = o));
        b.precv = m;
        this.$11 && (b.ice_g0 = this.$11);
        this.$13 && (b.ice = this.$13);
        return b;
      };
      b.$77 = function () {
        var a = {};
        this.$34 != null &&
          ((a.end_call_reason_string = d("FBRTCConstants").callEndReasonString(
            this.$34
          )),
          this.$35 !== null && (a.end_call_subreason_string = this.$35),
          (a.remote_ended = this.$36),
          (a.end_ctd = this.$38));
        this.$39 && (a.conn_type = this.$39);
        return a;
      };
      b.$78 = function () {
        var a = {
          ch: null,
          cw: null,
          ah: null,
          aw: null,
          efrate: this.$93(),
          ehist: this.getEhist(),
          eipxl: null,
          ename: this.$45,
          eopxl: null,
          fcap: this.$88(d("FBRTCMediaMetricsConst").VIDEO_CAPTURE_FRAME_COUNT),
          eqps: this.$88(d("FBRTCMediaMetricsConst").OUTBOUND_QP),
          frames: this.$88(d("FBRTCMediaMetricsConst").FRAMES_ENCODED),
          kframes: this.$54,
          fcsn: this.$88(d("FBRTCMediaMetricsConst").FRAMES_SENT),
          histResScale: null,
          psent: this.$88(d("FBRTCMediaMetricsConst").VIDEO_PKTS_SENT),
          plost: this.$88(d("FBRTCMediaMetricsConst").VIDEO_PKTS_SEND_LOST),
          ss: {
            avbr: null,
            avbw: this.$87(
              d("FBRTCMediaMetricsConst").VIDEOBWE_SEND_BANDWIDTH,
              1,
              "screen"
            ),
            dur: null,
            eiframes: null,
            eipxl: null,
            eopxl: null,
            eqps: this.$88(
              d("FBRTCMediaMetricsConst").OUTBOUND_QP,
              1,
              "screen"
            ),
            frames: this.$88(
              d("FBRTCMediaMetricsConst").FRAMES_ENCODED,
              1,
              "screen"
            ),
          },
          sim_l_chg: this.$88(
            d("FBRTCMediaMetricsConst").SIMULCAST_LAYER_CHANGES,
            1
          ),
          tet: this.$88(
            d("FBRTCMediaMetricsConst").VIDEO_TOTAL_ENCODE_TIME,
            1e3
          ),
          tpsd: this.$88(
            d("FBRTCMediaMetricsConst").VIDEO_TOTAL_PACKET_SEND_DELAY,
            1e3
          ),
          video_device: this.$46,
        };
        return {
          sender: this.$94(a),
          receiver: this.$95(),
          ld: this.$31,
          rd: this.$32,
          bwe: this.$96(),
        };
      };
      b.$93 = function () {
        var a = this.$31,
          b = this.$88(d("FBRTCMediaMetricsConst").FRAMES_ENCODED);
        if (a != null && a > 0 && b != null && b > 0)
          return Math.round((b * 1e3) / a);
      };
      b.$80 = function () {
        var a,
          b = this.$92() / 1e3;
        if (b <= 0) return;
        a = ((a = this.$52) != null ? a : 0) + ((a = this.$53) != null ? a : 0);
        a = Math.round(100 * (a / b));
        return { cpu: { proc: { avg: a } } };
      };
      b.$91 = function () {
        var a = this,
          b = this.$50.getAudioStreamReportKeys();
        b = b.reduce(
          function (b, c) {
            if (c === v || c === B) return b;
            var e = a.$50.getMetricStats(
              c,
              d("FBRTCMediaMetricsConst").AUDIO_RECEIVE_LOG_LEVEL
            );
            c = a.$50.getMetricStats(
              c,
              d("FBRTCMediaMetricsConst").AUDIO_RECEIVE_LOG_LEVEL_COUNT
            );
            return !e || !c
              ? b
              : {
                  count: b.count + c.current,
                  levelSum: b.levelSum + e.current,
                };
          },
          { count: 0, levelSum: 0 }
        );
        return b;
      };
      b.$96 = function () {
        var a = this,
          b = {
            avg_enc_bitrate: this.$97(),
            avg_send_bw: this.$98(),
            avg_trans_bitrate: null,
            avg_retrans_bitrate: null,
          },
          c = this.$50.getVideoStreamReportKeys();
        c.some(function (c) {
          var e = a.$50.getVideoMetric(
            c,
            d("FBRTCMediaMetricsConst").VIDEOBWE_TRANSMIT_BITRATE
          );
          c = a.$50.getVideoMetric(
            c,
            d("FBRTCMediaMetricsConst").VIDEOBWE_RETRANSMIT_BITRATE
          );
          if (e && c) {
            b.avg_trans_bitrate = e.mean;
            b.avg_retrans_bitrate = c.mean;
            return !0;
          }
          return !1;
        });
        return b;
      };
      b.$97 = function () {
        var a = this,
          b = this.$50.getVideoStreamReportKeys(),
          c = 0,
          e = 0;
        b.forEach(function (b) {
          b = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").ENCODE_BITRATE
          );
          b && ((c += b.total), (e += b.count));
        });
        return e === 0 ? null : Math.round(c / e);
      };
      b.$98 = function () {
        var a = this,
          b = this.$50.getVideoStreamReportKeys(),
          c = null;
        b.some(function (b) {
          c = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").VIDEOBWE_SEND_BANDWIDTH
          );
          return c ? !0 : !1;
        });
        c && (c = c.mean);
        return c;
      };
      b.$85 = function () {
        var a = this.$99(t, B, w),
          b = this.$100(u, C, w),
          c = this.$100(u, D, w);
        return { audio: a, screen: b, video: c };
      };
      b.$99 = function (a, b, d) {
        var e = this,
          f = {};
        a.forEach(function (a) {
          var g,
            h = a.field,
            i = a.key;
          a = a.scale;
          var k = [];
          g =
            (g = e.$50.getMetricStats(
              b,
              c("FBRTCMediaMetricTracker").getAvgMediaKey(i, d)
            )) == null
              ? void 0
              : g.current;
          j.forEach(function (a) {
            a =
              (a =
                (a = e.$50.getMetricStats(
                  b,
                  c("FBRTCMediaMetricTracker").getPercentMediaKey(i, d, a)
                )) == null
                  ? void 0
                  : a.current) != null
                ? a
                : 0;
            k.push(a);
          });
          g != null && (f[h] = e.$101(g, k, a, j));
        });
        return Object.keys(f).length > 0 ? f : null;
      };
      b.$100 = function (a, b, d) {
        var e = this,
          f = {};
        a.forEach(function (a) {
          var g,
            h = a.field,
            i = a.key;
          a = a.scale;
          var k = [];
          g =
            (g = e.$50.getVideoMetric(
              b,
              c("FBRTCMediaMetricTracker").getAvgMediaKey(i, d)
            )) == null
              ? void 0
              : g.current;
          j.forEach(function (a) {
            a =
              (a =
                (a = e.$50.getVideoMetric(
                  b,
                  c("FBRTCMediaMetricTracker").getPercentMediaKey(i, d, a)
                )) == null
                  ? void 0
                  : a.current) != null
                ? a
                : 0;
            k.push(a);
          });
          g != null && (f[h] = e.$101(g, k, a, j));
        });
        return Object.keys(f).length > 0 ? f : null;
      };
      b.$84 = function () {
        return this.$99(s, v, w);
      };
      b.$81 = function () {
        var a = this,
          b = {
            audio: { avg: {}, max: {}, min: {} },
            video: { avg: {}, max: {}, min: {} },
          },
          c = this.$50.getAudioStreamReportKeys(),
          d = this.$50.getVideoStreamReportKeys();
        p.forEach(function (d) {
          var e = d.field,
            f = d.key;
          d = d.scale;
          f = a.$102(f, c, d, !0, j);
          f != null &&
            ((b.audio.avg[e] = f.avg),
            (b.audio.max[e] = f.max),
            (b.audio.min[e] = f.min));
        });
        q.forEach(function (c) {
          var e = c.field,
            f = c.key;
          c = c.scale;
          f = a.$102(f, d, c, !1, j);
          f != null &&
            ((b.video.avg[e] = f.avg),
            (b.video.max[e] = f.max),
            (b.video.min[e] = f.min));
        });
        r.forEach(function (c) {
          var e = c.field,
            f = c.key;
          c = c.scale;
          f = a.$102(f, d, c, !1, []);
          f != null &&
            ((b.video.avg[e] = f.avg.avg),
            (b.video.max[e] = f.max.avg),
            (b.video.min[e] = f.min.avg));
        });
        return b;
      };
      b.$103 = function (a, b, d, e, f) {
        var g = this,
          h = 0,
          i = new Array(f.length).fill(0),
          j = 0,
          k = 0;
        b.forEach(function (b) {
          var d = null,
            l = [];
          if (e) {
            var m;
            j = g.$50.getAudioStreamDuration(
              b,
              c("FBRTCMediaMetricTracker").getAvgMediaKey(a, y)
            );
            d =
              (m = g.$50.getMetricStats(
                b,
                c("FBRTCMediaMetricTracker").getAvgMediaKey(a, y)
              )) == null
                ? void 0
                : m.current;
            f.forEach(function (d) {
              d =
                (d = g.$50.getMetricStats(
                  b,
                  c("FBRTCMediaMetricTracker").getPercentMediaKey(a, y, d)
                )) == null
                  ? void 0
                  : d.current;
              l.push(d);
            });
          } else {
            j = g.$50.getVideoStreamDuration(
              b,
              c("FBRTCMediaMetricTracker").getAvgMediaKey(a, y)
            );
            d =
              (m = g.$50.getVideoMetric(
                b,
                c("FBRTCMediaMetricTracker").getAvgMediaKey(a, y)
              )) == null
                ? void 0
                : m.current;
            f.forEach(function (d) {
              d =
                (d = g.$50.getVideoMetric(
                  b,
                  c("FBRTCMediaMetricTracker").getPercentMediaKey(a, y, d)
                )) == null
                  ? void 0
                  : d.current;
              l.push(d);
            });
          }
          d != null &&
            ((h += d * j),
            (i = l.map(function (a, b) {
              return a != null ? a * j + i[b] : i[b];
            })),
            (k += j));
        });
        if (k === 0) return null;
        b = h / k;
        var l = i.map(function (a) {
          return a / k;
        });
        return this.$101(b, l, d, f);
      };
      b.$102 = function (a, b, d, e, f) {
        var g = this,
          h = 0,
          i = new Array(f.length).fill(0),
          j = 0,
          k = new Array(f.length).fill(0),
          l = 0,
          m = new Array(f.length).fill(0),
          n = 0,
          o = 0;
        b.forEach(function (b) {
          var d = null,
            p = [];
          if (e) {
            var q;
            n = g.$50.getAudioStreamDuration(
              b,
              c("FBRTCMediaMetricTracker").getAvgMediaKey(a, w)
            );
            d =
              (q = g.$50.getMetricStats(
                b,
                c("FBRTCMediaMetricTracker").getAvgMediaKey(a, w)
              )) == null
                ? void 0
                : q.current;
            f.forEach(function (d) {
              d =
                (d = g.$50.getMetricStats(
                  b,
                  c("FBRTCMediaMetricTracker").getPercentMediaKey(a, w, d)
                )) == null
                  ? void 0
                  : d.current;
              p.push(d);
            });
          } else {
            n = g.$50.getVideoStreamDuration(
              b,
              c("FBRTCMediaMetricTracker").getAvgMediaKey(a, w)
            );
            d =
              (q = g.$50.getVideoMetric(
                b,
                c("FBRTCMediaMetricTracker").getAvgMediaKey(a, w)
              )) == null
                ? void 0
                : q.current;
            f.forEach(function (d) {
              d =
                (d = g.$50.getVideoMetric(
                  b,
                  c("FBRTCMediaMetricTracker").getPercentMediaKey(a, w, d)
                )) == null
                  ? void 0
                  : d.current;
              p.push(d);
            });
          }
          d != null &&
            n > 0 &&
            ((h += d * n),
            (i = p.map(function (a, b) {
              return a != null ? a * n + i[b] : i[b];
            })),
            o === 0
              ? ((j = d), (l = d), (k = p), (m = p))
              : d > j
              ? ((j = d), (k = p))
              : d < l && ((l = d), (m = p)),
            (o += n));
        });
        if (o === 0) return null;
        b = h / o;
        var p = i.map(function (a) {
          return a / o;
        });
        b = {
          avg: this.$101(b, p, d, f),
          min: this.$101(l, m, d, f),
          max: this.$101(j, k, d, f),
        };
        return b;
      };
      b.$101 = function (a, b, c, d) {
        var e = {};
        e.avg = Math.round(a * c);
        d.forEach(function (a, d) {
          a = "p".concat(String(a));
          e[a] = Math.round(b[d] * c);
        });
        return e;
      };
      b.$83 = function () {
        var a = this,
          b = { audio: {}, video: {} },
          c = this.$50.getAudioStreamReportKeys(),
          d = this.$50.getVideoStreamReportKeys(),
          e = !1;
        p.forEach(function (d) {
          var f = d.field,
            g = d.key;
          d = d.scale;
          g = a.$103(g, c, d, !0, j);
          g != null && ((b.audio[f] = g), (e = !0));
        });
        q.forEach(function (c) {
          var f = c.field,
            g = c.key;
          c = c.scale;
          g = a.$103(g, d, c, !1, j);
          g != null && ((b.video[f] = g), (e = !0));
        });
        r.forEach(function (c) {
          var f = c.field,
            g = c.key;
          c = c.scale;
          g = a.$103(g, d, c, !1, []);
          g != null && ((b.video[f] = g.avg), (e = !0));
        });
        return !e ? null : b;
      };
      b.$82 = function () {
        var a = this,
          b = this.$50.getAudioStreamReportKeys(),
          d = this.$50.getVideoStreamReportKeys();
        if (!b.includes(z) && !d.includes(A)) return null;
        var e = { audio: {}, video: {} };
        p.forEach(function (b) {
          var d,
            f = b.field,
            g = b.key;
          b = b.scale;
          var h = [];
          d =
            (d = a.$50.getMetricStats(
              z,
              c("FBRTCMediaMetricTracker").getAvgMediaKey(g, x)
            )) == null
              ? void 0
              : d.current;
          j.forEach(function (b) {
            b =
              (b =
                (b = a.$50.getMetricStats(
                  z,
                  c("FBRTCMediaMetricTracker").getPercentMediaKey(g, x, b)
                )) == null
                  ? void 0
                  : b.current) != null
                ? b
                : 0;
            h.push(b);
          });
          d != null && (e.audio[f] = a.$101(d, h, b, j));
        });
        q.forEach(function (b) {
          var d,
            f = b.field,
            g = b.key;
          b = b.scale;
          var h = [];
          d =
            (d = a.$50.getVideoMetric(
              A,
              c("FBRTCMediaMetricTracker").getAvgMediaKey(g, x)
            )) == null
              ? void 0
              : d.current;
          j.forEach(function (b) {
            b =
              (b =
                (b = a.$50.getVideoMetric(
                  A,
                  c("FBRTCMediaMetricTracker").getPercentMediaKey(g, x, b)
                )) == null
                  ? void 0
                  : b.current) != null
                ? b
                : 0;
            h.push(b);
          });
          d != null && (e.video[f] = a.$101(d, h, b, j));
        });
        r.forEach(function (b) {
          var d = b.field,
            f = b.key;
          b = b.scale;
          var g = [];
          f =
            (f = a.$50.getVideoMetric(
              A,
              c("FBRTCMediaMetricTracker").getAvgMediaKey(f, x)
            )) == null
              ? void 0
              : f.current;
          f != null && (e.video[d] = a.$101(f, g, b, []).avg);
        });
        return e;
      };
      b.$94 = function (a) {
        var b = this,
          e = this.$50.getVideoStreamReportKeys(),
          f = new Array(5).fill(0),
          g = 0;
        e.forEach(function (a) {
          a = b.$50.getHistResScale(a);
          a &&
            ((g += 1),
            a.histogram.forEach(function (a, b) {
              f[b] += a;
            }));
        });
        a.histResScale = g === 0 ? null : f;
        e.reverse().some(function (c) {
          var e = b.$50.getVideoMetric(
              c,
              d("FBRTCMediaMetricsConst").VIDEO_CAPTURE_WIDTH
            ),
            f = b.$50.getVideoMetric(
              c,
              d("FBRTCMediaMetricsConst").VIDEO_CAPTURE_HEIGHT
            ),
            g = b.$50.getVideoMetric(
              c,
              d("FBRTCMediaMetricsConst").VIDEO_ENCODED_WIDTH
            );
          c = b.$50.getVideoMetric(
            c,
            d("FBRTCMediaMetricsConst").VIDEO_ENCODED_HEIGHT
          );
          e && f && ((a.cw = e.current), (a.ch = f.current));
          if (g && c) {
            a.aw = g.current;
            a.ah = c.current;
            return !0;
          }
          return !1;
        });
        this.$22[c("FBRTCLogger").Key.SCREEN_DURATION] != null &&
          typeof this.$22[c("FBRTCLogger").Key.SCREEN_DURATION] === "number" &&
          (a.ss.dur = this.$22[c("FBRTCLogger").Key.SCREEN_DURATION]);
        e = this.$88(d("FBRTCMediaMetricsConst").VIDEO_BYTES_SENT, 1, "screen");
        e != null &&
          a.ss.dur != null &&
          a.ss.dur > 0 &&
          (a.ss.avbr = Math.round((1e3 * 8 * e) / a.ss.dur));
        e = this.$88(
          d("FBRTCMediaMetricsConst").VIDEO_SUM_ENCODED_PIXEL,
          1,
          "screen"
        );
        var h = this.$88(
          d("FBRTCMediaMetricsConst").FRAMES_ENCODED,
          1,
          "screen"
        );
        e != null && h != null && h > 0 && (a.ss.eopxl = Math.round(e / h));
        e = this.$88(
          d("FBRTCMediaMetricsConst").VIDEO_SUM_CAPTURE_PIXEL,
          1,
          "screen"
        );
        h = this.$88(
          d("FBRTCMediaMetricsConst").VIDEO_CAPTURE_FRAME_COUNT,
          1,
          "screen"
        );
        e != null &&
          h != null &&
          h > 0 &&
          ((a.ss.eiframes = h), (a.ss.eipxl = Math.round(e / h)));
        e = this.$88(d("FBRTCMediaMetricsConst").VIDEO_SUM_ENCODED_PIXEL, 1);
        h = this.$88(d("FBRTCMediaMetricsConst").FRAMES_ENCODED, 1);
        e != null && h != null && h > 0 && (a.eopxl = Math.round(e / h));
        e = this.$88(d("FBRTCMediaMetricsConst").VIDEO_SUM_CAPTURE_PIXEL, 1);
        h = this.$88(d("FBRTCMediaMetricsConst").VIDEO_CAPTURE_FRAME_COUNT, 1);
        e != null && h != null && h > 0 && (a.eipxl = Math.round(e / h));
        return a;
      };
      b.$95 = function () {
        var a = this,
          b = this.$50.getVideoStreamReportKeys(),
          c = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;
        b.forEach(function (b) {
          var l = a.$50.getVideoMetric(
              b,
              d("FBRTCMediaMetricsConst").VIDEO_PKTS_RECEIVED
            ),
            m = a.$50.getVideoMetric(
              b,
              d("FBRTCMediaMetricsConst").VIDEO_PKTS_RECV_LOST
            );
          l && m && ((f += l.current), (g += m.current));
          l = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").VIDEO_BYTES_RECEIVED
          );
          l && (c += l.current);
          m = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").FRAMES_DECODED
          );
          m && (h += m.current);
          l = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").KEYFRAMES_DECODED
          );
          l && (i += l.current);
          m = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").PICTURE_LOSS_INDICAION_RECEIVED
          );
          m && (j += m.current);
          l = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").FULL_INTRA_REQUEST_RECEIVED
          );
          l && (k += l.current);
          m = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").VIDEO_DECODE_TIME
          );
          m && (e += m.current);
        });
        var l = {
            jtkey: i,
            pli: j,
            fir: k,
            dec_bytes: c,
            dec_frame: h,
            dec_time: this.$51 ? Math.round(this.$51) : null,
            dec_time_all_streams: Math.round(e),
            dname: this.$44,
            dpxl: null,
            frd: h,
            frcnt: null,
            jtasb: null,
            precv: f,
            plost: g,
            qps: this.$88(d("FBRTCMediaMetricsConst").INBOUND_QP),
            rh: null,
            rw: null,
            tdt: this.$88(
              d("FBRTCMediaMetricsConst").VIDEO_TOTAL_DECODE_TIME,
              1e3
            ),
            jbd: null,
            jbec: null,
            recjbl: null,
            e2el: null,
            av: null,
            avabs: null,
            avhist: this.$70(),
            avoob: null,
          },
          m = this.$88(
            d("FBRTCMediaMetricsConst").VIDEO_JITTER_BUFFER_DELAY,
            1e3
          ),
          n = this.$88(
            d("FBRTCMediaMetricsConst").VIDEO_JITTER_BUFFER_EMITTED_COUNT
          );
        l.jbd = m;
        l.jbec = n;
        m != null && n != null && n > 0 && (l.recjbl = Math.round(m / n));
        var o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0;
        b.forEach(function (b) {
          var c = a.$50.getVideoMetric(b, d("FBRTCMediaMetricsConst").AV_SYNC),
            e = a.$50.getVideoMetric(
              b,
              d("FBRTCMediaMetricsConst").AV_SYNC_ABS
            ),
            f = a.$50.getVideoMetric(
              b,
              d("FBRTCMediaMetricsConst").AV_SYNC_OOB
            ),
            g = a.$50.getVideoMetric(
              b,
              d("FBRTCMediaMetricsConst").AV_SYNC_COUNT
            );
          b = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").FRAMES_DECODED
          );
          b != null &&
            c != null &&
            e != null &&
            c.mean != null &&
            e.mean != null &&
            ((q += b.current),
            (o += c.mean * b.current),
            (p += e.mean * b.current));
          f != null && g != null && ((s += g.current), (r += f.current));
        });
        q > 0 && ((l.av = Math.round(o / q)), (l.avabs = Math.round(p / q)));
        s > 0 && (l.avoob = Math.round((r * 1e4) / s));
        var t = 0,
          u = 0;
        b.forEach(function (b) {
          var c = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").VIDEO_E2E_LATENCY
          );
          b = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").FRAMES_DECODED
          );
          c != null &&
            c.mean != null &&
            b != null &&
            ((t += b.current), (u += c.mean * b.current));
        });
        t > 0 && (l.e2el = Math.round(u / t));
        l.frcnt = b.reduce(function (b, c) {
          c = a.$50.getVideoMetric(
            c,
            d("FBRTCMediaMetricsConst").VIDEO_FREEZE_COUNT
          );
          return b + (c ? c.current : 0);
        }, 0);
        l.frdur = b.reduce(function (b, c) {
          c = a.$50.getVideoMetric(
            c,
            d("FBRTCMediaMetricsConst").VIDEO_FREEZE_DURATION
          );
          return b + (c ? c.current : 0);
        }, 0);
        l.frdur = Math.round(l.frdur);
        l.pact = b.reduce(function (b, c) {
          c = a.$50.getVideoMetric(
            c,
            d("FBRTCMediaMetricsConst").VIDEO_PAUSE_COUNT
          );
          return b + (c ? c.current : 0);
        }, 0);
        l.padur = b.reduce(function (b, c) {
          c = a.$50.getVideoMetric(
            c,
            d("FBRTCMediaMetricsConst").VIDEO_PAUSE_DURATION
          );
          return b + (c ? c.current : 0);
        }, 0);
        l.padur = Math.round(l.padur);
        var v = 0;
        b.forEach(function (b) {
          var c = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").VIDEO_DECODED_HEIGHT
          );
          b = a.$50.getVideoMetric(
            b,
            d("FBRTCMediaMetricsConst").VIDEO_DECODED_WIDTH
          );
          b &&
            c &&
            b.updatedTime > v &&
            ((l.rw = b.current), (l.rh = c.current), (v = b.updatedTime));
        });
        l.jtasb = b.reduce(function (b, c) {
          c = a.$50.getVideoMetric(
            c,
            d("FBRTCMediaMetricsConst").FRAMES_RECEIVED
          );
          return b + (c ? c.current : 0);
        }, 0);
        m = this.$88(d("FBRTCMediaMetricsConst").VIDEO_SUM_DECODED_PIXEL, 1);
        n = this.$88(d("FBRTCMediaMetricsConst").FRAMES_DECODED, 1);
        m != null && n != null && n > 0 && (l.dpxl = Math.round(m / n));
        return l;
      };
      b.$104 = function () {
        return new Date().valueOf() - this.$15;
      };
      b.$61 = function () {
        var a = c("performanceNow")() - this.$20;
        return Math.floor(this.$16 + a);
      };
      b.$62 = function (a) {
        if (this.$6[a]) return;
        this.$6[a] = this.$104();
        this.$7[a] = this.$61();
      };
      b.$69 = function (a) {
        if (this.$8[a]) return;
        this.$8[a] = this.$104();
      };
      b.$63 = function (a) {
        if (this.$9[a]) return;
        this.$9[a] = this.$104();
      };
      b.$66 = function (a) {
        if (this.$14[a]) return;
        this.$14[a] = this.$104();
      };
      b.setDeviceCharged = function (a) {
        this.$42 !== !0 && (this.$42 = a);
      };
      b.$64 = function (a, b, c) {
        a ? this.$62(c) : this.$62(b);
      };
      b.$60 = function () {
        this.$17 = new Date().valueOf();
      };
      b.$56 = function () {
        var a = c("UserAgentData").browserName,
          b = c("UserAgentData").platformName;
        window.navigator.userAgent.toLowerCase().includes("mobile") &&
          ((b += " Mobile"), a === "Chrome" && (a = "Mobile " + a));
        return {
          device: c("UserAgentData").deviceName,
          os: b,
          os_version: c("UserAgentData").platformFullVersion,
          browser: a,
          browser_version: c("UserAgentData").browserFullVersion,
          screen_height: window.screen.availHeight,
          screen_width: window.screen.availWidth,
          user_agent: window.navigator.userAgent,
        };
      };
      b.$57 = function () {
        window.navigator.connection != null &&
          window.navigator.connection.effectiveType != null &&
          this.addExtraInfo(
            c("FBRTCLogger").Key.CONNECTION_EFFECTIVE_TYPE,
            window.navigator.connection.effectiveType
          );
      };
      b.$59 = function () {
        var a = d("WebPerformanceDeviceInfo").getMobileYearClass();
        a != null && a > 0
          ? this.addExtraInfo(c("FBRTCLogger").Key.YEAR_CLASS, a)
          : this.addExtraInfo(
              c("FBRTCLogger").Key.DESKTOP_DEVICE_CLASS,
              d("WebPerformanceDeviceInfo").getDeviceLevel()
            );
      };
      b.$58 = function () {
        navigator.hardwareConcurrency != null &&
          this.addExtraInfo(
            c("FBRTCLogger").Key.CPU_CORES,
            navigator.hardwareConcurrency
          ),
          window.navigator.deviceMemory != null &&
            this.addExtraInfo(
              c("FBRTCLogger").Key.DEVICE_MEMORY,
              window.navigator.deviceMemory
            ),
          this.addExtraInfo(
            c("FBRTCLogger").Key.DEVICE_PIXEL_RATIO,
            window.devicePixelRatio
          );
      };
      b.getCallDuration = function () {
        var a = c("gkx")("707989");
        return this.$92({ assumeOngoing: a });
      };
      b.getConnectedStartTime = function () {
        return this.$6[k.CALL_CONNECTED]
          ? this.$6[k.CALL_CONNECTED] + this.$15
          : 0;
      };
      b.getCurrentTimeFromCallConnected = function () {
        var a = this.$7[k.CALL_CONNECTED];
        return this.$61() - a;
      };
      b.getMediaMetricTracker = function () {
        return this.$50;
      };
      b.getEndCallReason = function () {
        return this.$34 != null
          ? d("FBRTCConstants").callEndReasonString(this.$34)
          : "Unknown";
      };
      b.getRelayIP = function () {
        return this.$40;
      };
      b.setRelayIP = function (a) {
        this.$40 = a;
      };
      b.getClientVersion = function () {
        return this.$5;
      };
      b.getHeartbeatData = function () {
        return this.$71();
      };
      b.wasCallEnded = function () {
        return this.$6[k.CALL_ENDED] != null;
      };
      return a;
    })();
    a.CANONICAL_NULL_SUMMARY = Object.freeze(a.nullSummary());
    a.OLDEST_SUPPORTED_SUMMARY_VERSION = 19;
    a.CURRENT_SUMMARY_VERSION = 24;
    a.REPORT_KEY = "reportID";
    g["default"] = a;
  },
  98
);
__d(
  "FBRTCCallSummaryStore",
  [
    "CacheStorage",
    "FBLogger",
    "FBRTCCallSummary",
    "FBRTCLogger",
    "RTWebUserActionLogger",
    "areEqual",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "localstorage",
      i = "RTC_CALL_SUMMARY_",
      j = "summary",
      k = 2e3,
      l = 3,
      m = 3 * 60 * 1e3,
      n = null;
    a = (function () {
      a.getInstance = function () {
        n || (n = new a());
        return n;
      };
      function a() {
        (this.$1 = new (c("CacheStorage"))(h, i)),
          (this.$2 = c("FBRTCLogger").getInstance());
      }
      var b = a.prototype;
      b.storeCallSummary = function (a, b, d) {
        if (d.isNull()) {
          c("RTWebUserActionLogger").logError({
            errorDomain: "FBRTCCallSummaryStore_storeCallSummary",
            errorType:
              "FBRTCCallSummaryStore Storing invalid FBRTCCallSummary!",
            callID: b,
            userID: a,
          });
          c("FBLogger")("rtweb").mustfix("Storing invalid FBRTCCallSummary!");
          return;
        }
        var e = this;
        this.$3(function (c) {
          c[a] || (c[a] = {});
          var f = c[a][b];
          if (f) {
            f = e.$4(f);
            if (f && f.getLastUpdatedTime() > d.getLastUpdatedTime()) {
              e.$2.logToConsole("Outdated summaries");
              return null;
            }
          }
          c[a][b] = e.$5(d);
          return c;
        }, e.$2.logError.bind(e.$2, a, b));
      };
      b.retrieveCallSummary = function (a, b) {
        var c = this.getCallSummaries(),
          d = null;
        c[a] && (d = c[a][b]);
        if (d) return this.$4(d);
        else return null;
      };
      b.removeCallSummary = function (a, b) {
        this.removeCallSummaries([{ peerID: a, callID: b }]);
      };
      b.removeCallSummaries = function (a) {
        var b = this;
        this.$3(function (c) {
          var d = a.length;
          for (var e = 0; e < d; e++) {
            var f = a[e].peerID,
              g = a[e].callID;
            c[f] && c[f][g] && (delete c[f][g], b.$6(c[f]) && delete c[f]);
          }
          return c;
        }, this.$2.logError.bind(this.$2, null, null));
      };
      b.getLoggableSummaries = function () {
        var a = this.getCallSummaries(),
          b = [];
        for (var c in a)
          if (Object.prototype.hasOwnProperty.call(a, c))
            for (var d in a[c])
              if (Object.prototype.hasOwnProperty.call(a[c], d)) {
                var e = this.$4(a[c][d], m);
                e && b.push(e);
              }
        return b;
      };
      b.$6 = function (a) {
        for (var b in a)
          if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
        return !0;
      };
      b.$5 = function (a) {
        a = { __t: Date.now(), __d: a.toJsonString() };
        return a;
      };
      b.$4 = function (a, b) {
        return a && (!b || Date.now() - a.__t >= b)
          ? c("FBRTCCallSummary").fromJsonString(a.__d)
          : null;
      };
      b.getCallSummaries = function () {
        var a = this.$1.get(j) || {};
        return a;
      };
      b.$3 = function (a, b, d, e) {
        d === void 0 && (d = l);
        (d === void 0 || d === null) && (d = l);
        var f = this.getCallSummaries(),
          g = this.getCallSummaries();
        f = a(f);
        if (f === null) return;
        var h = this.getCallSummaries();
        if (c("areEqual")(g, h))
          this.$1.set(j, f),
            this.logStorageError(this.$1.getLastSetException());
        else if (d > 0) {
          b("Retry lock");
          if (e) {
            var i = this;
            c("setTimeout")(function () {
              i.$3(a, b, d - 1, !0);
            }, k);
          } else this.$3(a, b, d - 1, !0);
        } else b("Failed to lock");
      };
      b.logStorageError = function (a) {
        a != null &&
          c("RTWebUserActionLogger").logError({
            errorDomain: "FBRTCCallSummaryStore_storeCallSummary",
            errorType: a.name,
          });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "FBRTCCallSummaryUploader",
  [
    "Banzai",
    "FBRTCCallSummary",
    "FBRTCCallSummaryStore",
    "ZenonCallSummaryUploader",
    "cr:1645710",
  ],
  function (a, b, c, d, e, f, g) {
    function a() {
      var a = c("FBRTCCallSummaryStore").getInstance();
      c("Banzai").subscribe(c("Banzai").SEND, function () {
        d("ZenonCallSummaryUploader").logCallSummaries(),
          b("cr:1645710") == null ? void 0 : b("cr:1645710").logCallSummaries(),
          c("FBRTCCallSummary").logSavedSummaries(a);
      });
    }
    g.init = a;
  },
  98
);
__d(
  "RelayFBDefaultEnvironment",
  ["RelayFBEnvironmentFactory"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("RelayFBEnvironmentFactory").getForActorID(null);
    g["default"] = a;
  },
  98
);
__d(
  "StartVideoChatLinkCall",
  [
    "FBLogger",
    "RTWebPreCallContextSingleton",
    "RelayFBDefaultEnvironment",
    "URI",
    "XGroupCallController",
    "ZenonPeerID",
    "ZenonSignalingProtocol",
    "gkx",
    "randomZenonCallID",
    "randomZenonNonce",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("RTWebPreCallContextSingleton").create({
      relayEnvironment: c("RelayFBDefaultEnvironment"),
    });
    function a(a, b, e, f) {
      b === void 0 && (b = !1);
      e === void 0 && (e = !1);
      f === void 0 && (f = "");
      if (!c("gkx")("1811099")) return null;
      if (h) {
        var g = h.callWindowController,
          j = h.incomingRingSDK,
          k = "",
          l = a,
          m = c("randomZenonCallID")();
        if (b) {
          b = i(a);
          k = c("randomZenonNonce")();
          b != null &&
            (l = c("XGroupCallController")
              .getURIBuilder()
              .setString("call_context", "LINK:" + b)
              .setString("funnel_session_id", f)
              .setString("nonce", k)
              .setBool("auto_join", e ? !0 : null)
              .getURI()
              .getQualifiedURI()
              .toString());
        }
        a = g.initCall({
          context: {
            callID: m,
            intent: "start or join",
            invitees: [],
            existingCall: null,
          },
          mediaType: "video",
          nonce: k,
          joinContext: { linkUrl: l, type: "link" },
        });
        b = a[0];
        a[1];
        j.startCallIntent(k, {
          callID: m,
          callTrigger: "meetup_join",
          isPopupBlocked: b === null,
          isVideo: !0,
          peerID: d("ZenonPeerID").ZenonMWPeerID,
          protocol: c("ZenonSignalingProtocol").MW,
        });
        return b;
      } else return null;
    }
    function i(a) {
      var b = new (c("URI"))(a),
        d = b.getDomain();
      b = b.stripTrailingSlash().getPath();
      if (d === "msngr.com") return b.substring(1);
      if (d === "m.me" && /^\/v(id)?\//.test(b))
        return b.replace(/^\/v(id)?\//, "");
      d = /^\/groupcall\/LINK:/;
      if (d.test(b)) return b.replace(d, "");
      c("FBLogger")("rtc_www").mustfix(
        'Could not extract LinkHash from Video Chat Link. Link = "%s"',
        a
      );
      return null;
    }
    g.startCall = a;
  },
  98
);
__d(
  "RtcWwwWebModuleRtcIncomingRingQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(64225282);
    g["default"] = a;
  },
  98
);
__d(
  "CometInteractionTracingModuleFeedPreferencesDialogOpenQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(30605385);
    g["default"] = a;
  },
  98
);
__d(
  "XGroupCallSendMessageController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/groupcall/sendmessage/", {
      av: { type: "FBID" },
      webrtc_fbtrace: { type: "Int" },
    });
  },
  null
);
__d(
  "XGroupCallSendRequestController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/groupcall/sendrequest/", {
      av: { type: "FBID" },
      webrtc_fbtrace: { type: "Int" },
    });
  },
  null
);
