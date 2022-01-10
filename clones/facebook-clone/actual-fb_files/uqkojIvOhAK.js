if (self.CavalryLogger) {
  CavalryLogger.start_js(["RYWNq+i"]);
}

__d(
  "PrivacyCheckupCometRootQuery.graphql",
  [
    "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "topicsCollectionID",
        },
        d = [
          { kind: "Variable", name: "id", variableName: "topicsCollectionID" },
        ],
        e = [
          {
            args: null,
            kind: "FragmentSpread",
            name: "PrivacyCheckupCometTextWithEntities_textWithEntities",
          },
        ],
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
          name: "topic_collection_title",
          storageKey: null,
        },
        h = [
          {
            args: null,
            fragment: b(
              "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"
            ),
            kind: "FragmentSpread",
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, c],
          kind: "Fragment",
          metadata: null,
          name: "PrivacyCheckupCometRootQuery",
          selections: [
            {
              alias: null,
              args: d,
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
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "body_texts_twe",
                      plural: !0,
                      selections: e,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PrivacyReviewCoreCheckupInfo",
                      kind: "LinkedField",
                      name: "checkup_topics",
                      plural: !0,
                      selections: [
                        f,
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "PrivacyCheckupCometTopicTile_topic",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "footer_text",
                      plural: !1,
                      selections: e,
                      storageKey: null,
                    },
                    g,
                  ],
                  type: "PrivacyCheckupTopicsCollection",
                  abstractKey: null,
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
          argumentDefinitions: [c, a],
          kind: "Operation",
          name: "PrivacyCheckupCometRootQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
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
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "body_texts_twe",
                      plural: !0,
                      selections: h,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "PrivacyReviewCoreCheckupInfo",
                      kind: "LinkedField",
                      name: "checkup_topics",
                      plural: !0,
                      selections: [
                        f,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "banner_image_url",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "checkup_title",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "PrivacyCheckupInteractions",
                          kind: "LinkedField",
                          name: "checkup_interaction",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "PrivacyCheckupTopicCompletionState",
                              kind: "LinkedField",
                              name: "completion_state",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "type",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "label",
                                  storageKey: null,
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
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "footer_text",
                      plural: !1,
                      selections: h,
                      storageKey: null,
                    },
                    g,
                  ],
                  type: "PrivacyCheckupTopicsCollection",
                  abstractKey: null,
                },
                f,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4518173848207093",
          metadata: {},
          name: "PrivacyCheckupCometRootQuery",
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
  "PrivacyCheckupCometTextWithEntities_textWithEntities.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PrivacyCheckupCometTextWithEntities_textWithEntities",
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
  "PrivacyCheckupCometTopicReviewMultiStepQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6203867632986507",
        metadata: {},
        name: "PrivacyCheckupCometTopicReviewMultiStepQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PrivacyCheckupCompletionTimestampSubscription.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          concreteType: "PrivacyCheckupTopicCompletionState",
          kind: "LinkedField",
          name: "completion_state",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "label",
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
          name: "PrivacyCheckupCompletionTimestampSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType:
                "PrivacyCheckupCompletionTimestampUpdateSubscribeResponsePayload",
              kind: "LinkedField",
              name: "privacy_checkup_completion_timestamp_update_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "PrivacyCheckupInteractions",
                  kind: "LinkedField",
                  name: "checkup_interaction",
                  plural: !1,
                  selections: [c],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PrivacyCheckupCompletionTimestampSubscription",
          selections: [
            {
              alias: null,
              args: b,
              concreteType:
                "PrivacyCheckupCompletionTimestampUpdateSubscribeResponsePayload",
              kind: "LinkedField",
              name: "privacy_checkup_completion_timestamp_update_subscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "PrivacyCheckupInteractions",
                  kind: "LinkedField",
                  name: "checkup_interaction",
                  plural: !1,
                  selections: [
                    c,
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
          id: "3164931833517696",
          metadata: {
            subscriptionName:
              "privacy_checkup_completion_timestamp_update_subscribe",
          },
          name: "PrivacyCheckupCompletionTimestampSubscription",
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
  "PrivacyCheckupCometMoreYouCanDoPopoverQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "3429962550454388",
        metadata: {},
        name: "PrivacyCheckupCometMoreYouCanDoPopoverQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PrivacyCheckupCometTopicCompletionState_topic.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PrivacyCheckupCometTopicCompletionState_topic",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "PrivacyCheckupInteractions",
          kind: "LinkedField",
          name: "checkup_interaction",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PrivacyCheckupTopicCompletionState",
              kind: "LinkedField",
              name: "completion_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "type",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "label",
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
          name: "id",
          storageKey: null,
        },
      ],
      type: "PrivacyReviewCoreCheckupInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PrivacyCheckupCometTopicTile_topic.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PrivacyCheckupCometTopicTile_topic",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "banner_image_url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "checkup_title",
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
          args: null,
          kind: "FragmentSpread",
          name: "PrivacyCheckupCometTopicCompletionState_topic",
        },
      ],
      type: "PrivacyReviewCoreCheckupInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometErrorLoggingWrapper.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.componentDidCatch = function (a) {
        this.props.loggingCallback(a);
        throw a;
      };
      c.render = function () {
        var a = this.props.children;
        return a;
      };
      return b;
    })(a.PureComponent);
    g["default"] = b;
  },
  98
);
__d(
  "PrivacyCheckupCometMoreYouCanDoPopover.entrypoint",
  [
    "JSResourceForInteraction",
    "PrivacyCheckupCometMoreYouCanDoPopoverQuery$Parameters",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.topicsCollectionID;
        return {
          queries: {
            popover: {
              parameters: b(
                "PrivacyCheckupCometMoreYouCanDoPopoverQuery$Parameters"
              ),
              variables: { topicsCollectionID: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PrivacyCheckupCometMoreYouCanDoPopover.react"
      ).__setRef("PrivacyCheckupCometMoreYouCanDoPopover.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PrivacyCheckupCometRootGlimmer.react",
  ["BaseGlimmer.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        body: { width: "fbgwweev" },
        containerPadding: {
          paddingTop: "discj3wi",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "ihqw7lf3",
          paddingStart: "dati1w0a",
        },
        footer: { marginTop: "ae4e4zyf", width: "n99xedck" },
        header: { marginBottom: "n851cfcs", width: "foejyqcu" },
        root: {
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
          justifyContent: "taijpn5t",
          maxWidth: "edv4fwu4",
          width: "k4urcfbm",
        },
        textGlimmer: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          height: "ed3p1gfi",
        },
      };
    function a() {
      return h.jsx("div", {
        className: c("stylex")(i.root),
        children: h.jsxs("div", {
          className: c("stylex")(i.containerPadding),
          children: [
            h.jsx(c("BaseGlimmer.react"), {
              className: c("stylex")([i.textGlimmer, i.header]),
              index: 0,
            }),
            h.jsx(c("BaseGlimmer.react"), {
              className: c("stylex")([i.textGlimmer, i.body]),
              index: 1,
            }),
            h.jsx(c("BaseGlimmer.react"), {
              className: c("stylex")([i.textGlimmer, i.footer]),
              index: 3,
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
  "PrivacyCheckupCometTextWithEntities.react",
  [
    "CometInlineEntityRenderer",
    "CometRelay",
    "CometTextLink.react",
    "CometTextWithEntitiesRelay.react",
    "PrivacyCheckupCometTextWithEntities_textWithEntities.graphql",
    "PrivacyCheckupLoggingContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "PrivacyCheckupCometTextWithEntities_textWithEntities.graphql"
              )),
          a.textWithEntities$key
        ),
        f = function (b, e) {
          var f = d(
            "PrivacyCheckupLoggingContext"
          ).usePrivacyCheckupLoggingContext();
          if (e.url == null) return b;
          var g = "bodyLink4";
          if (a.level != null)
            switch (a.level) {
              case 1:
                g = "bodyLink1";
                break;
              case 2:
                g = "bodyLink2";
                break;
              case 3:
                g = "bodyLink3";
                break;
              case 4:
                g = "bodyLink4";
                break;
            }
          return i.jsx(c("CometTextLink.react"), {
            color: "blueLink",
            href: e.url,
            onClick: function () {
              f({ event: "link_click", link: e.url });
            },
            target: "_blank",
            type: g,
            children: b,
          });
        };
      return i.jsx(c("CometTextWithEntitiesRelay.react"), {
        renderers: {
          ExternalUrl: [f],
          Inline: [
            (f = a.inlineEntityRenderer) != null
              ? f
              : c("CometInlineEntityRenderer"),
          ],
        },
        textWithEntities: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PrivacyCheckupCompletionTimestampSubscription",
  ["CometRelay", "PrivacyCheckupCompletionTimestampSubscription.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var c = a.environment,
        e = a.input,
        f = a.onCompleted,
        g = a.onError;
      a = a.onNext;
      return d("CometRelay").requestSubscription(c, {
        onCompleted: f,
        onError: g,
        onNext: a,
        subscription:
          h !== void 0
            ? h
            : (h = b("PrivacyCheckupCompletionTimestampSubscription.graphql")),
        variables: { input: e },
      });
    }
    g.subscribeCompletionTimestamp = a;
  },
  98
);
__d(
  "PrivacyCheckupCometTopicCompletionState.react",
  [
    "ix",
    "CometBadge.react",
    "CometRelay",
    "PrivacyCheckupCometTopicCompletionState_topic.graphql",
    "PrivacyCheckupCompletionTimestampSubscription",
    "TetraIcon.react",
    "TetraText.react",
    "fbicon",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useState,
      m = function (a) {
        switch (a) {
          case "MORE_SETTINGS":
            return j.jsx("span", {
              className: "s89635nw",
              children: j.jsx(c("CometBadge.react"), { size: 8 }),
            });
          case "COMPLETED":
            return j.jsx("span", {
              className: "hddg9phg fv0vnmcu",
              children: j.jsx(c("TetraIcon.react"), {
                color: "secondary",
                icon: d("fbicon")._(h("1108890"), 8),
              }),
            });
          default:
            return null;
        }
      };
    function a(a) {
      var e;
      a = a.topic$key;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("PrivacyCheckupCometTopicCompletionState_topic.graphql")),
        a
      );
      var f = c("gkx")("1522701"),
        g = a.id;
      e = l(
        (e = a.checkup_interaction) == null
          ? void 0
          : (e = e.completion_state) == null
          ? void 0
          : e.label
      );
      var h = e[0],
        n = e[1];
      e = l(
        (e = a.checkup_interaction) == null
          ? void 0
          : (a = e.completion_state) == null
          ? void 0
          : a.type
      );
      a = e[0];
      var o = e[1],
        p = d("CometRelay").useRelayEnvironment();
      k(
        function () {
          if (g != null && f) {
            var a = d(
              "PrivacyCheckupCompletionTimestampSubscription"
            ).subscribeCompletionTimestamp({
              environment: p,
              input: { checkup_id: g },
              onCompleted: function () {},
              onError: function () {},
              onNext: function (a) {
                var b;
                n(
                  a == null
                    ? void 0
                    : (b =
                        a.privacy_checkup_completion_timestamp_update_subscribe) ==
                      null
                    ? void 0
                    : (b = b.checkup_interaction) == null
                    ? void 0
                    : (b = b.completion_state) == null
                    ? void 0
                    : b.label
                );
                o(
                  a == null
                    ? void 0
                    : (b =
                        a.privacy_checkup_completion_timestamp_update_subscribe) ==
                      null
                    ? void 0
                    : (a = b.checkup_interaction) == null
                    ? void 0
                    : (b = a.completion_state) == null
                    ? void 0
                    : b.type
                );
              },
            });
            return function () {
              a.dispose();
            };
          }
        },
        [p, g, f]
      );
      return !f || h == null
        ? null
        : j.jsxs("div", {
            className:
              "tw6a2znq qt6c0cv9 d1544ag0 jb3vyjys buofh1pr btwxx1t3 j83agx80 rq0escxv ll8tlv6m",
            children: [
              m(a),
              j.jsx(c("TetraText.react"), {
                color: "secondary",
                type: "meta3",
                children: h,
              }),
            ],
          });
    }
    g["default"] = a;
  },
  98
);
__d(
  "PrivacyCheckupCometTopicReviewDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "PrivacyCheckupCometTopicReviewMultiStepQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.reviewID;
        return {
          queries: {
            topicReviewQueryReference: {
              parameters: b(
                "PrivacyCheckupCometTopicReviewMultiStepQuery$Parameters"
              ),
              variables: { reviewID: a, scale: d("WebPixelRatio").get() },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PrivacyCheckupCometTopicReviewDialog.react"
      ).__setRef("PrivacyCheckupCometTopicReviewDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PrivacyCheckupCometTopicTile.react",
  [
    "CometAspectRatioContainer.react",
    "CometBackgroundImage.react",
    "CometCard.react",
    "CometEntryPointDialogTrigger.react",
    "CometPressable.react",
    "CometRelay",
    "PrivacyCheckupCometTopicCompletionState.react",
    "PrivacyCheckupCometTopicReviewDialog.entrypoint",
    "PrivacyCheckupCometTopicTile_topic.graphql",
    "PrivacyCheckupLoggingContext",
    "TetraText.react",
    "react",
    "recoverableViolation",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        checkupTitle: {
          alignItems: "bp9cbjyn",
          boxSizing: "rq0escxv",
          display: "q9uorilb",
          flexDirection: "btwxx1t3",
          flexGrow: "buofh1pr",
          paddingTop: "jb3vyjys",
          paddingEnd: "d1544ag0",
          paddingBottom: "sj5x9vvc",
          paddingStart: "tw6a2znq",
        },
        pressable: {
          alignItems: "gs1a9yip",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          height: "datstx6m",
        },
        pressableOverlayPressed: { backgroundColor: "sx5rzos5" },
        root: {
          alignItems: "gs1a9yip",
          display: "j83agx80",
          flexDirection: "btwxx1t3",
          height: "datstx6m",
        },
        titleAndCompletion: {
          flexDirection: "cbu4d94t",
          justifyContent: "i1fnvgqd",
          paddingTop: "discj3wi",
          paddingEnd: "rz4wbd8a",
          paddingBottom: "ihqw7lf3",
          paddingStart: "a8nywdso",
        },
      };
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("PrivacyCheckupCometTopicTile_topic.graphql")),
          a.topic$key
        ),
        f = d("PrivacyCheckupLoggingContext").usePrivacyCheckupLoggingContext(),
        g = e.banner_image_url,
        k = e.checkup_title,
        l = e.id;
      a = l || "";
      if (a === "") {
        c("recoverableViolation")("Unexpected null for ID", "privacy_checkup");
        return null;
      }
      return i.jsx("div", {
        className: c("stylex")(j.root),
        children: i.jsx(c("CometEntryPointDialogTrigger.react"), {
          dialogEntryPoint: c(
            "PrivacyCheckupCometTopicReviewDialog.entrypoint"
          ),
          otherProps: { reviewID: a, source: "topics_collection_menu" },
          preloadParams: { reviewID: a },
          children: function (a) {
            return i.jsx(c("CometCard.react"), {
              dropShadow: 2,
              children: i.jsxs(c("CometPressable.react"), {
                display: "inline",
                onPress: function () {
                  f({ checkup_id: l, event: "topic_choose" }), a();
                },
                overlayPressedStyle: j.pressableOverlayPressed,
                testid: void 0,
                xstyle: j.pressable,
                children: [
                  i.jsx(c("CometAspectRatioContainer.react"), {
                    aspectRatio: 2,
                    children:
                      g != null &&
                      g !== "" &&
                      i.jsx(c("CometBackgroundImage.react"), { src: g }),
                  }),
                  i.jsxs("div", {
                    className: c("stylex")(j.titleAndCompletion),
                    children: [
                      i.jsx("div", {
                        className: c("stylex")(j.checkupTitle),
                        children: i.jsx(c("TetraText.react"), {
                          type: "headlineEmphasized3",
                          children: k,
                        }),
                      }),
                      i.jsx(
                        c("PrivacyCheckupCometTopicCompletionState.react"),
                        { topic$key: e }
                      ),
                    ],
                  }),
                ],
              }),
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
  "PrivacyCheckupCometRoot.react",
  [
    "ix",
    "CometContentArea.react",
    "CometEntryPointPopoverTrigger.react",
    "CometErrorLoggingWrapper.react",
    "CometFlexibleGrid.react",
    "CometPlaceholder.react",
    "CometRelay",
    "CometRouteParams",
    "CometRouteRenderType",
    "CometTransientDialogProvider.react",
    "PrivacyCheckupCometMoreYouCanDoPopover.entrypoint",
    "PrivacyCheckupCometRootGlimmer.react",
    "PrivacyCheckupCometRootQuery.graphql",
    "PrivacyCheckupCometTextWithEntities.react",
    "PrivacyCheckupCometTopicTile.react",
    "PrivacyCheckupLoggingContext",
    "TetraButton.react",
    "TetraText.react",
    "fbicon",
    "gkx",
    "react",
    "stylex",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useMemo;
    e = 844;
    var m = 4,
      n = e / m,
      o = "50%",
      p = {
        bodyText: { marginBottom: "bi6gxh9e", maxWidth: "edv4fwu4" },
        content: {
          maxWidth: "mpsmwp96",
          paddingTop: "k3eq2f2k",
          paddingEnd: "hv4rvrfc",
          paddingBottom: "dggo68jo",
          paddingStart: "dati1w0a",
        },
        contentCometOnBlueDialog: {
          paddingTop: "jb3vyjys",
          paddingEnd: "f7vcsfb0",
          paddingBottom: "ihqw7lf3",
          paddingStart: "fjf4s8hc",
        },
        header: { display: "j83agx80", justifyContent: "i1fnvgqd" },
        headerText: {
          marginBottom: "bi6gxh9e",
          maxWidth: "edv4fwu4",
          paddingTop: "cxgpxx05",
        },
        mycdButton: { height: "m7zwrmfr", width: "tmrshh9y" },
        parentForVerticalCentering: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          flexDirection: "cbu4d94t",
          flexGrow: "buofh1pr",
          justifyContent: "taijpn5t",
        },
        root: { backgroundColor: "cwj9ozl2", minHeight: "jgljxmt5" },
        rootCometOnBlueDialog: { minHeight: "gmusp0v1" },
        rootPushView: { minHeight: "h3gjbzrl" },
        topicsList: { marginBottom: "q0rvokjs", marginTop: "en0ipb6w" },
      };
    function a(a) {
      var b = d("CometRouteParams").useRouteParams(),
        e = (b == null ? void 0 : b.source) || a.props.source,
        f = d("PrivacyCheckupLoggingContext").usePrivacyCheckupLoggingContext();
      if (typeof e !== "string") {
        b = "Invalid source in routeParams: " + JSON.stringify(b);
        f({ error_info: b, event: "topics_collection_loading_failure" });
        throw c("unrecoverableViolation")(b, "privacy_checkup");
      }
      var g = a.props.routeProps.topicsCollectionID;
      f = l(
        function () {
          return { source: e, topicsCollectionID: g, type: "landing_page" };
        },
        [e, g]
      );
      return j.jsx(
        d("PrivacyCheckupLoggingContext").PrivacyCheckupLoggingContext.Provider,
        {
          value: f,
          children: j.jsx(c("CometTransientDialogProvider.react"), {
            children: j.jsx(q, babelHelpers["extends"]({}, a)),
          }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function q(a) {
      var b = d("CometRouteRenderType").useIsPushView(),
        e = d("PrivacyCheckupLoggingContext").usePrivacyCheckupLoggingContext();
      k(
        function () {
          e({ event: "topics_collection_entry" });
        },
        [e]
      );
      return j.jsx(c("CometErrorLoggingWrapper.react"), {
        loggingCallback: function (a) {
          e({
            error_info: a.toString(),
            event: "topics_collection_loading_failure",
          });
        },
        children: j.jsx("div", {
          className: c("stylex")([
            p.root,
            b && p.rootPushView,
            a.props.isCometOnBlueDialog === !0 && p.rootCometOnBlueDialog,
          ]),
          children: j.jsx(c("CometContentArea.react"), {
            children: j.jsx(c("CometPlaceholder.react"), {
              fallback: j.jsx(c("PrivacyCheckupCometRootGlimmer.react"), {}),
              children: j.jsx(r, babelHelpers["extends"]({}, a)),
            }),
          }),
        }),
      });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function r(a) {
      var e = a.props;
      a = a.queries;
      a = d("CometRelay").usePreloadedQuery(
        i !== void 0 ? i : (i = b("PrivacyCheckupCometRootQuery.graphql")),
        a.topicsCollectionQueryReference
      );
      var f = d(
          "PrivacyCheckupLoggingContext"
        ).usePrivacyCheckupLoggingContext(),
        g = e.routeProps.topicsCollectionID;
      k(
        function () {
          f({ event: "topics_collection_show" });
        },
        [f]
      );
      a = a.node;
      if (a == null) {
        var l = "Unexpected null node for topics collection: " + g;
        f({
          error_info: l,
          event: "checkup_loading_failure",
          topics_collection_id: g,
        });
        throw c("unrecoverableViolation")(l, "privacy_checkup");
      }
      l = a.body_texts_twe;
      var q = a.checkup_topics,
        r = a.footer_text;
      a = a.topic_collection_title;
      q = q || [];
      if (q.length === 0) {
        var s =
          "Unexpected null or empty checkup_topics for topics collection: " + g;
        f({
          error_info: s,
          event: "topics_collection_loading_failure",
          topics_collection_id: g,
        });
        throw c("unrecoverableViolation")(s, "privacy_checkup");
      }
      s = c("gkx")("1775278")
        ? j.jsx(c("CometEntryPointPopoverTrigger.react"), {
            align: "end",
            entryPointParams: { topicsCollectionID: g },
            otherProps: { topicsCollectionID: g },
            popoverEntryPoint: c(
              "PrivacyCheckupCometMoreYouCanDoPopover.entrypoint"
            ),
            position: "below",
            preloadTrigger: "button",
            children: function (a, b, e, f, g, i) {
              return j.jsx("div", {
                className: c("stylex")(p.mycdButton),
                children: j.jsx(c("TetraButton.react"), {
                  icon: d("fbicon")._(h("484386"), 16),
                  label: "More You Can Do",
                  labelIsHidden: !0,
                  onHoverIn: f,
                  onHoverOut: g,
                  onPress: b,
                  onPressIn: i,
                  ref: a,
                  size: "large",
                  type: "secondary",
                }),
              });
            },
          })
        : null;
      return j.jsx("div", {
        className: c("stylex")(p.parentForVerticalCentering),
        children: j.jsxs("div", {
          className: c("stylex")(
            p.content,
            e.isCometOnBlueDialog === !0 && p.contentCometOnBlueDialog
          ),
          children: [
            j.jsxs("div", {
              className: c("stylex")(p.header),
              children: [
                j.jsxs("div", {
                  children: [
                    j.jsx("div", {
                      className: c("stylex")(p.headerText),
                      children: j.jsx(c("TetraText.react"), {
                        type: "headlineEmphasized1",
                        children: a,
                      }),
                    }),
                    l &&
                      l.map(function (a, b) {
                        return a == null
                          ? null
                          : j.jsx(
                              "div",
                              {
                                className: c("stylex")(p.bodyText),
                                children: j.jsx(c("TetraText.react"), {
                                  color: "secondary",
                                  type: "body2",
                                  children: j.jsx(
                                    c(
                                      "PrivacyCheckupCometTextWithEntities.react"
                                    ),
                                    { textWithEntities$key: a }
                                  ),
                                }),
                              },
                              a.toString() + "_" + b
                            );
                      }),
                  ],
                }),
                s,
              ],
            }),
            j.jsx("div", {
              className: c("stylex")(p.topicsList),
              children: j.jsxs(c("CometFlexibleGrid.react"), {
                columnMaxWidth: o,
                columnMinWidth: n,
                minItems: q.length,
                children: [
                  q.map(function (a, b) {
                    return j.jsx(
                      c("PrivacyCheckupCometTopicTile.react"),
                      { testid: void 0, topic$key: a },
                      a.id
                    );
                  }),
                  Array(m - 1)
                    .fill()
                    .map(function (a, b) {
                      return j.jsx("div", {}, b);
                    }),
                ],
              }),
            }),
            r &&
              j.jsx(c("TetraText.react"), {
                type: "meta3",
                children: j.jsx(
                  c("PrivacyCheckupCometTextWithEntities.react"),
                  { textWithEntities$key: r }
                ),
              }),
          ],
        }),
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
