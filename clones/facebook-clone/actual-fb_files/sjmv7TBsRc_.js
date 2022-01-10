if (self.CavalryLogger) {
  CavalryLogger.start_js(["pRU1j3A"]);
}

__d(
  "useFundraiserBoCDonateDialog_fundraiser.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "donateRef" },
        { defaultValue: null, kind: "LocalArgument", name: "prevSource" },
        { defaultValue: null, kind: "LocalArgument", name: "source" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "useFundraiserBoCDonateDialog_fundraiser",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_donate",
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: "Variable", name: "donate_ref", variableName: "donateRef" },
            {
              kind: "Variable",
              name: "prev_source",
              variableName: "prevSource",
            },
            { kind: "Variable", name: "source", variableName: "source" },
          ],
          kind: "ScalarField",
          name: "mobile_donate_url",
          storageKey: null,
        },
      ],
      type: "Fundraiser",
      abstractKey: "__isFundraiser",
    };
    e.exports = a;
  },
  null
);
__d(
  "useFundraiserDonateCometCheckout_fundraiser.graphql",
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
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "donateRef" },
          { defaultValue: null, kind: "LocalArgument", name: "prevSource" },
          { defaultValue: null, kind: "LocalArgument", name: "source" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "useFundraiserDonateCometCheckout_fundraiser",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "beneficiary",
            plural: !1,
            selections: [a, b],
            storageKey: null,
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "payment_type",
              storageKey: null,
            },
            action: "THROW",
            path: "payment_type",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "receiver_id",
              storageKey: null,
            },
            action: "THROW",
            path: "receiver_id",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_donate",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "psd_agreement_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "fundraiser_campaign_type",
            storageKey: null,
          },
          {
            args: [
              {
                kind: "Variable",
                name: "donateRef",
                variableName: "donateRef",
              },
              {
                kind: "Variable",
                name: "prevSource",
                variableName: "prevSource",
              },
              { kind: "Variable", name: "source", variableName: "source" },
            ],
            kind: "FragmentSpread",
            name: "useFundraiserBoCDonateDialog_fundraiser",
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "parent_container",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [b],
                    type: "Group",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "FundraiserPersonForPerson",
            abstractKey: null,
          },
        ],
        type: "Fundraiser",
        abstractKey: "__isFundraiser",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PagesCometComposerDialogQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4134520779966670",
        metadata: {},
        name: "PagesCometComposerDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "EventCometCard.react",
  ["CometCard.react", "TetraTextPairing.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        d = a.icon,
        e = a.rightHeaderElement,
        f = a.subtitle,
        g = a.testid;
      g = a.title;
      a = g != null || e != null;
      var i = d != null && g != null && e == null;
      i = i
        ? h.jsxs("div", {
            className:
              "dati1w0a ihqw7lf3 hv4rvrfc ecm0bbzt jifvfom9 btwxx1t3 j83agx80 bp9cbjyn du4w35lb l9j0dhe7 hpfvmrgz tgvbjcpo kvgmc6g5 hcukyx3x cxmmr5t8 oygrvhab g5gj957u buofh1pr rq0escxv auili1gw ow4ym5g4",
            children: [
              h.jsx("div", {
                className: "oi9244e8 j83agx80 bp9cbjyn",
                children: d,
              }),
              h.jsx(c("TetraTextPairing.react"), {
                body: f,
                bodyColor: "secondary",
                headline: g,
                isSemanticHeading: !0,
                level: 2,
              }),
            ],
          })
        : null;
      d = a
        ? h.jsxs("div", {
            className:
              "dati1w0a ihqw7lf3 hv4rvrfc ecm0bbzt i1fnvgqd btwxx1t3 aovydwv3 du4w35lb l9j0dhe7 hpfvmrgz tgvbjcpo kvgmc6g5 hcukyx3x cxmmr5t8 oygrvhab g5gj957u buofh1pr j83agx80 rq0escxv auili1gw ow4ym5g4",
            children: [
              g != null
                ? h.jsx(c("TetraTextPairing.react"), {
                    body: f,
                    bodyColor: "secondary",
                    headline: g,
                    isSemanticHeading: !0,
                    level: 2,
                  })
                : h.jsx("div", { className: "buofh1pr" }),
              e,
            ],
          })
        : null;
      return h.jsx("div", {
        className: "sjgh65i0",
        "data-testid": void 0,
        children: h.jsx(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: h.jsxs("div", {
            className: "discj3wi ihqw7lf3",
            children: [i ? i : d, b],
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
  "EventCometCardSidePadding.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        className: "dati1w0a hv4rvrfc",
        children: a.children,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometVerticalSpacer.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.height;
      return h.jsx("div", {
        className: c("stylex").dedupe(
          a === 8 ? { "height-1": "t6na6p9t" } : {},
          a === 12 ? { "height-1": "cyypbtt7" } : null,
          a === 16 ? { "height-1": "gl3lb2sf" } : null,
          a === 32 ? { "height-1": "k7cz35w2" } : null
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventCometComposerStrings",
  ["fbt", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    d("react");
    a = h._("Create Post");
    b = h._("Edit Post");
    c = h._("A message is required.");
    e = h._("Add a Post");
    f = h._("Write something...");
    d = h._("Sharing to");
    h = h._("Post");
    g.createTitle = a;
    g.editTitle = b;
    g.errorMessageRequired = c;
    g.openComposer = e;
    g.placeholderTextEditor = f;
    g.sharingTo = d;
    g.submitPost = h;
  },
  98
);
__d(
  "useFundraiserBoCDonateDialog",
  [
    "CometCompatModalDialogResource",
    "CometRelay",
    "absoluteToRelative",
    "gkx",
    "useCometLazyDialog",
    "useFundraiserBoCDonateDialog_fundraiser.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("useFundraiserBoCDonateDialog_fundraiser.graphql"));
    function a(a) {
      var b = a.fundraiser,
        e = a.onClose;
      a = c("gkx")("708253");
      b = d("CometRelay").useFragment(i, b);
      var f = c("useCometLazyDialog")(c("CometCompatModalDialogResource")),
        g = f[0],
        h = b == null ? void 0 : b.mobile_donate_url;
      if (
        !a ||
        h == null ||
        b == null ||
        (b == null ? void 0 : b.can_donate) !== !0
      )
        return null;
      f = function () {
        g({ params: { rel: "dialog", uri: c("absoluteToRelative")(h) } }, e);
      };
      return f;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useFundraiserDonateCometCheckout",
  [
    "CometRelay",
    "emptyFunction",
    "gkx",
    "react",
    "requireDeferred",
    "unrecoverableViolation",
    "useFundraiserBoCDonateDialog",
    "useFundraiserDonateCometCheckout_fundraiser.graphql",
    "usePaymentsCometCheckout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j = c("requireDeferred")("SocialGoodCharityActionsLoggingUtils").__setRef(
        "useFundraiserDonateCometCheckout"
      ),
      k =
        h !== void 0
          ? h
          : (h = b("useFundraiserDonateCometCheckout_fundraiser.graphql"));
    function a(a) {
      var b = a.extraData,
        e = a.fundraiser,
        f = a.onClose,
        g = a.overrideAmountForMatching,
        h = a.overridePaymentTypeForMatching,
        l = d("CometRelay").useFragment(k, e),
        m = c("useFundraiserBoCDonateDialog")({ fundraiser: l, onClose: f });
      if (l == null)
        throw c("unrecoverableViolation")(
          "Fundraiser data cannot be null",
          "charitable_giving"
        );
      a = c("usePaymentsCometCheckout")({
        checkoutProps: {
          extraData: b,
          orderID: l == null ? void 0 : l.id,
          overrideAmount: g,
          paymentType:
            (a = h) != null ? a : l == null ? void 0 : l.payment_type,
          psdAgreementID:
            (e = l == null ? void 0 : l.psd_agreement_id) != null ? e : "",
          receiverID: l == null ? void 0 : l.receiver_id,
          receiverName:
            l == null ? void 0 : (a = l.beneficiary) == null ? void 0 : a.name,
          receiverOrganizationName:
            l == null
              ? void 0
              : (e = l.parent_container) == null
              ? void 0
              : e.name,
        },
        onClose: f || c("emptyFunction"),
      });
      var n = a[0],
        o = { is_monthly_subscription: "false" };
      (b == null ? void 0 : b.isMonthlySubscription) === !0 &&
        (o.is_monthly_subscription = "true");
      e = i(
        function () {
          h != null ||
          (c("gkx")("1341566") &&
            ((l == null ? void 0 : l.payment_type) !== "NMOR_DONATION_P4C" ||
              c("gkx")("1872522")))
            ? (j.onReady(function (a) {
                a = a.logFundraiserDonateEvent;
                a(
                  "initialization",
                  (a = b == null ? void 0 : b.sourceData) != null ? a : {},
                  l == null ? void 0 : l.id,
                  l == null ? void 0 : l.fundraiser_campaign_type,
                  o
                );
              }),
              n())
            : m && m();
        },
        [b, n, m, h]
      );
      return ((l == null ? void 0 : l.can_donate) !== !0 && g == null) ||
        !c("gkx")("708253")
        ? null
        : e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometComposerDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "PagesCometComposerDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.id;
        return {
          queries: {
            dialogQueryReference: {
              parameters: b("PagesCometComposerDialogQuery$Parameters"),
              variables: {
                id: a,
                privacySelectorRenderLocation: "COMET_COMPOSER",
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PagesCometComposerDialog.react"
      ).__setRef("PagesCometComposerDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "useCometPageComposerDialog",
  [
    "fbt",
    "CometCardedDialog.react",
    "FeedComposerCometGlimmer.react",
    "PagesCometComposerDialog.entrypoint",
    "emptyFunction",
    "react",
    "useCometEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback,
      k = { withCloseButton: !0 };
    function l(a) {
      return i.jsx("div", {
        children: i.jsx(
          c("CometCardedDialog.react"),
          babelHelpers["extends"]({ size: "content", title: a.title }, a, {
            children: i.jsx(c("FeedComposerCometGlimmer.react"), {}),
          })
        ),
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.actorID,
        d = a.composerEntryPointRef,
        e = a.composerType,
        f = a.onBeforeClose,
        g = a.onSave,
        m = a.pageID,
        n = a.title,
        o = n === void 0 ? h._("Create Post") : n,
        p = (n = a.onClose) != null ? n : c("emptyFunction");
      a = c("useCometEntryPointDialog")(
        c("PagesCometComposerDialog.entrypoint"),
        { id: m },
        void 0,
        function () {
          return i.jsx(l, babelHelpers["extends"]({ title: o }, k));
        }
      );
      var q = a[0];
      n = a[1];
      a = a[2];
      return [
        j(
          function (a) {
            a = a || {};
            var c = a.beginningViewState;
            a = a.pushedPageOnLoad;
            q(
              babelHelpers["extends"](
                {
                  actorID: b,
                  beginningViewState: c,
                  composerEntryPointRef: d,
                  composerType: e,
                  onBeforeClose: f,
                  onClose: p,
                  onSave: g,
                  pageID: m,
                  pushedPageOnLoad: a,
                  title: o,
                },
                k
              ),
              p
            );
          },
          [b, d, e, f, p, g, m, q, o]
        ),
        n,
        a,
      ];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometInteractionTracingModulePageComposerDialogOpenQPLEvent",
  ["cr:3079"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:3079");
  },
  98
);
__d(
  "useCometPageComposerTrigger",
  [
    "CometComposerAttachmentPluginTypes",
    "CometInteractionTracingModulePageComposerDialogOpenQPLEvent",
    "JSResourceForInteraction",
    "react",
    "useCometInteractionTracing",
    "useCometPageComposerDialog",
    "useResumableComposerViewState",
    "useVideoComposerDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useMemo,
      j = c("JSResourceForInteraction")(
        "PagesCometComposerDialog.react"
      ).__setRef("useCometPageComposerTrigger");
    function a(a, b, d, e, f, g, k, l) {
      var m = c("useResumableComposerViewState")(a),
        n = m.clearResumableViewState,
        o = m.getResumableViewState,
        p = m.saveResumableViewState;
      m = h(
        function (a) {
          p(a);
        },
        [p]
      );
      var q = h(
          function () {
            f != null && f(), n();
          },
          [n, f]
        ),
        r = c("useVideoComposerDialog")({
          composerEntryPointRef: e,
          targetID: b,
        }),
        s = i(
          function () {
            return {
              launchBlueVideoComposer: r,
              shouldOpenVideoSpecificComposer: !0,
              targetID: b,
            };
          },
          [r, b]
        );
      k = c("useCometPageComposerDialog")({
        actorID: a,
        composerEntryPointRef: e,
        composerType: (a = k) != null ? a : "page",
        onBeforeClose: m,
        onSave: q,
        pageID: b,
        title: d,
      });
      var t = k[0];
      a = k[1];
      var u = c("useCometInteractionTracing")(
        c("CometInteractionTracingModulePageComposerDialogOpenQPLEvent"),
        "responsive",
        "INTERACTION"
      );
      m = h(
        function (a) {
          var b,
            d =
              (b = a == null ? void 0 : a.beginningViewState) != null ? b : o();
          g != null &&
            (d = babelHelpers["extends"]({}, d, {
              placeholderTextOverride: g,
            }));
          e === "pages_social_learning" &&
            (d = babelHelpers["extends"]({}, d, {
              socialLearningModule: { moduleName: "", unitID: null },
            }));
          d = babelHelpers["extends"]({}, d, { videoComposerData: s });
          (a == null ? void 0 : a.pushedPageOnLoad) ===
            "get_whatsapp_messages" &&
            (d = babelHelpers["extends"]({}, d, {
              attachmentArea: babelHelpers["extends"]({}, d.attachmentArea, {
                activeAttachmentType: c("CometComposerAttachmentPluginTypes")
                  .GET_WHATSAPP_MESSAGES,
              }),
              isGetWhatsAppMessagePost: !0,
            }));
          b =
            (a == null ? void 0 : a.pushedPageOnLoad) == null &&
            ((b = d) == null
              ? void 0
              : (b = b.attachmentArea) == null
              ? void 0
              : b.activeAttachmentType) ===
              c("CometComposerAttachmentPluginTypes").MEDIA &&
            l === !0;
          b &&
            (d = babelHelpers["extends"]({}, d, {
              attachmentArea: babelHelpers["extends"]({}, d.attachmentArea, {
                activeAttachmentType: c("CometComposerAttachmentPluginTypes")
                  .GET_MESSAGES,
                previousAttachmentType: c("CometComposerAttachmentPluginTypes")
                  .MEDIA,
              }),
              isGetMessagesPost: !0,
            }));
          (a == null ? void 0 : a.pushedPageOnLoad) === "get_messages" &&
            (d = babelHelpers["extends"]({}, d, {
              attachmentArea: babelHelpers["extends"]({}, d.attachmentArea, {
                activeAttachmentType: c("CometComposerAttachmentPluginTypes")
                  .GET_MESSAGES,
              }),
              isGetMessagesPost: !0,
            }));
          var f = j.getModuleIfRequireable() != null;
          u(function (b) {
            b.onComplete(function (a) {
              f && b.addMetadata("revisit", 1);
            }),
              t({
                beginningViewState: d,
                pushedPageOnLoad: a == null ? void 0 : a.pushedPageOnLoad,
              });
          });
        },
        [o, g, e, s, u, t, l]
      );
      return [m, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometPageInlineComposer",
  [
    "CometRouteParams",
    "PagesCometComposerStrings",
    "react",
    "useCometPageComposerTrigger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.startTransition,
      i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = a.actorID,
        e = a.composerEntryPointRef,
        f = a.onSave,
        g = a.pageID,
        k = a.placeholderTextOverride;
      a = a.upsellMessenger;
      b = c("useCometPageComposerTrigger")(
        b,
        g,
        d("PagesCometComposerStrings").PAGE_COMPOSER_TITLE,
        e,
        f,
        k,
        void 0,
        a
      );
      var l = b[0];
      e = b[1];
      f = d("CometRouteParams").useRouteParams();
      var m = j(null),
        n = String(f == null ? void 0 : f.modal);
      i(function () {
        if (m.current === g) return;
        n !== "null" && (m.current = g);
        n === "media_composer" || n === "composer"
          ? h(function () {
              return l();
            })
          : n === "local_alerts_onboarding"
          ? h(function () {
              return l({ pushedPageOnLoad: "local_alert_tagger" });
            })
          : n === "voting_alerts_onboarding"
          ? h(function () {
              return l({ pushedPageOnLoad: "voting_alert_tagger" });
            })
          : n === "product_tagging" &&
            h(function () {
              return l({ pushedPageOnLoad: "product_tagger" });
            });
      });
      return [l, e];
    }
    g["default"] = a;
  },
  98
);
__d(
  "XMediaManagerControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/creatorstudio/{?*tab_route}/",
      Object.freeze({
        override_mweb_check: !1,
        open_bulk_upload_panel: !1,
        mta_onboarding_includes_brand_collabs: !1,
        mta_onboarding_deferred_payout: !1,
        open_videolist_creation_dialogue: !1,
        open_basic_post_composer: !1,
        open_igtv_uploader: !1,
        open_boost_post_dialog: !1,
        open_promo_dialog: !1,
        show_live_break_custom_video_tray: !1,
      }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometInteractionTracingModulePageComposerDialogOpenQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(30605333);
    g["default"] = a;
  },
  98
);
