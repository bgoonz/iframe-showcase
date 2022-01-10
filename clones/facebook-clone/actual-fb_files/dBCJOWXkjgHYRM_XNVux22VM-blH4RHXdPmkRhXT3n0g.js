if (self.CavalryLogger) {
  CavalryLogger.start_js(["pu7zb5S"]);
}

__d(
  "BCSupportButton_bcUserInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BCSupportButton_bcUserInfo",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "bc_user_info_owner",
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
      type: "BrandedContentUserInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometComposerBrandedContentButton_bcUserInfo.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometComposerBrandedContentButton_bcUserInfo",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "bc_user_info_owner",
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
      type: "BrandedContentUserInfo",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometComposerBCSupportSprout_sprout$normalization.graphql",
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
        name: "PagesCometComposerBCSupportSprout_sprout$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Page",
            kind: "LinkedField",
            name: "page",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "BrandedContentUserInfo",
                kind: "LinkedField",
                name: "branded_content_user_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "bc_user_info_owner",
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
                  a,
                ],
                storageKey: null,
              },
              a,
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
  "PagesCometComposerBCSupportSprout_sprout.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PagesCometComposerBCSupportSprout_sprout",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Page",
          kind: "LinkedField",
          name: "page",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "BrandedContentUserInfo",
              kind: "LinkedField",
              name: "branded_content_user_info",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "BCSupportButton_bcUserInfo",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "PagesCometComposerBCSupportSprout",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PagesCometComposerBrandedContentSprout_sprout$normalization.graphql",
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
        name: "PagesCometComposerBrandedContentSprout_sprout$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "BrandedContentUserInfo",
            kind: "LinkedField",
            name: "branded_content_user_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "bc_user_info_owner",
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
              a,
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
  "PagesCometComposerBrandedContentSprout_sprout.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PagesCometComposerBrandedContentSprout_sprout",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "BrandedContentUserInfo",
          kind: "LinkedField",
          name: "branded_content_user_info",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometComposerBrandedContentButton_bcUserInfo",
            },
          ],
          storageKey: null,
        },
      ],
      type: "PagesCometComposerBrandedContentSprout",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "BrandedContentRTSTaggerContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ candidateSponsorIds: null, interceptReason: null });
    g["default"] = b;
  },
  98
);
__d(
  "BrandedContentTaggerContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      creatorID: null,
      funnelSessionID: null,
      location: null,
      sproutType: null,
    });
    g["default"] = b;
  },
  98
);
__d(
  "BrandedContentHandshakeToolLoggerEventLocation",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CREATOR_STUDIO: "creator_studio",
      ENFORCEMENT: "enforcement",
      FEED: "feed",
      GROUPS: "groups",
      LIVE_PRODUCER: "live_producer",
      PAGES: "pages",
    });
    f["default"] = a;
  },
  66
);
__d(
  "BrandedContentHandshakeToolTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:BrandedContentHandshakeToolLoggerConfig"
    );
  },
  null
);
__d(
  "logBrandedContentHandshakeToolEvent",
  [
    "BrandedContentHandshakeToolLoggerEventLocation",
    "BrandedContentHandshakeToolTypedLoggerLite",
    "BrandedContentSponsorRelationship",
    "WebFunnelLogger",
    "getJSEnumSafe",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b;
      if (a.logFunnel === !0) {
        var d = a.event;
        switch (a.event) {
          case "enforcement_intercept_action":
            d += "." + ((b = a.enforcementInterceptAction) != null ? b : "");
            break;
          case "rbc_intercept_action":
            d += "." + ((b = a.rbcInterceptAction) != null ? b : "");
            break;
        }
        b = new (c("WebFunnelLogger"))("BrandedContentHSTWebFunnelDefinition")
          .setAction((b = d) != null ? b : "")
          .setSessionKey((d = a.funnelSessionID) != null ? d : "");
        a.startFunnelLogger === !0 &&
          (b = b.markStart().setFunnelTags(["is_comet"]));
        a.endFunnelLogger === !0 && (b = b.markEnd());
        b.log();
      }
      c("BrandedContentHandshakeToolTypedLoggerLite").logImmediately({
        branded_content_event: a.event,
        creator_id: a.creatorID,
        enforcement_intercept_action: a.enforcementInterceptAction,
        enforcement_intercept_reason: a.enforcementInterceptReason,
        event_location: c("getJSEnumSafe")(
          c("BrandedContentHandshakeToolLoggerEventLocation"),
          a.location
        ),
        extra_fields_map: a.extra_fields_map,
        rbc_intercept_action: a.rbcInterceptAction,
        sponsor_id: a.sponsorID,
        sponsor_relationship: c("getJSEnumSafe")(
          c("BrandedContentSponsorRelationship"),
          a.sponsorRelationship
        ),
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useBCHSTEventLogger",
  [
    "BrandedContentRTSTaggerContext",
    "BrandedContentTaggerContext",
    "CometComposerViewStateContext",
    "PagesCometComposerContext",
    "logBrandedContentHandshakeToolEvent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a() {
      var a,
        b = i(c("PagesCometComposerContext")),
        d = i(c("CometComposerViewStateContext"));
      d = d.brandedContent;
      var e = i(c("BrandedContentRTSTaggerContext"));
      e = e.interceptReason;
      var f = i(c("BrandedContentTaggerContext")),
        g = f.funnelSessionID,
        j = f.location;
      f = f.sproutType;
      var k =
          (a = (a = d == null ? void 0 : d.funnelSessionID) != null ? a : g) !=
          null
            ? a
            : void 0,
        l = e,
        m = d == null ? void 0 : d.sponsorID,
        n =
          (a =
            (g = f) != null ? g : d == null ? void 0 : d.sponsorRelationship) !=
          null
            ? a
            : "PAID_RELATIONSHIP_WITH";
      return h(
        function (a, d) {
          var e;
          d === void 0 && (d = Object.freeze({}));
          c("logBrandedContentHandshakeToolEvent")(
            babelHelpers["extends"](
              {
                creatorID: (e = b == null ? void 0 : b.pageID) != null ? e : "",
                enforcementInterceptReason: l,
                event: a,
                funnelSessionID: k,
                location: (e = j) != null ? e : void 0,
                logFunnel: !0,
                sponsorID: m,
                sponsorRelationship: n,
              },
              d
            )
          );
        },
        [b, l, k, j, m, n]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "BCSupportButton.react",
  [
    "fbt",
    "ix",
    "BCHSTStrings",
    "BCSupportButton_bcUserInfo.graphql",
    "BCSupportPopoverButton.react",
    "CometComposerBrandedContentPopoverResource",
    "CometComposerSproutButton.react",
    "CometComposerTaggerPluginTypes",
    "CometRelay",
    "composerBrandedContentReducer",
    "lazyLoadComponent",
    "react",
    "useBCHSTEventLogger",
    "useCometComposerPushPage",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "uuid",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = c("lazyLoadComponent")(
        c("CometComposerBrandedContentPopoverResource")
      );
    function a(a) {
      var e = a.bcUserInfoRef,
        f = a.brandedContent,
        g = a.composerType,
        m = a.location;
      a = a.visibleOnLoad;
      a === void 0 ? !1 : a;
      var n = c("useCometComposerPushPage")();
      c("useComposerViewStateReducer")(c("composerBrandedContentReducer"));
      var o = c("useComposerViewStateDispatcher")();
      a =
        (f == null ? void 0 : f.sponsorID) != null &&
        (f == null ? void 0 : f.sponsorRelationship) === "SUPPORT";
      g = g === "edit";
      var p = c("useBCHSTEventLogger")();
      e = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("BCSupportButton_bcUserInfo.graphql")),
        e
      );
      var q =
        (e =
          e == null
            ? void 0
            : (e = e.bc_user_info_owner) == null
            ? void 0
            : e.id) != null
          ? e
          : "";
      return n == null
        ? k.jsx(c("BCSupportPopoverButton.react"), {
            creatorID: q,
            isActive: a,
            location: m,
            sproutType: "SUPPORT",
          })
        : k.jsx(c("CometComposerSproutButton.react"), {
            activeColor: "var(--fds-spectrum-aluminum-tint-70)",
            disabled: g,
            disabledIcon: i("484194"),
            disabledTooltip: g ? h._("You cannot edit this content") : void 0,
            icon: i("490496"),
            isActive: a,
            label: d("BCHSTStrings").supportTag.sproutLabel,
            loggingName: "bc_support",
            onClick: function () {
              var a,
                b = f == null ? void 0 : f.funnelSessionID;
              a = (a = b) != null ? a : c("uuid")();
              b == null &&
                o({
                  funnelSessionID: a,
                  type: "branded_content_set_funnel_session_id",
                });
              p("bc_sprout_clicked", {
                funnelSessionID: a,
                location: m,
                sponsorRelationship: "SUPPORT",
                startFunnelLogger: b == null,
              });
              n != null &&
                n(
                  d("BCHSTStrings").supportTag.sproutLabel,
                  function (a) {
                    a = a.onReturn;
                    return k.jsx(l, {
                      contextProps: {
                        creatorID: q,
                        funnelSessionID: null,
                        location: m,
                        sproutType: "SUPPORT",
                      },
                      onClose: a,
                      withPopover: !1,
                    });
                  },
                  { hasCustomHeader: !0 }
                );
            },
            pluginName: c("CometComposerTaggerPluginTypes").BC_SUPPORT,
            sproutName: "BC_SUPPORT",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      return { brandedContent: a.brandedContent };
    });
    g["default"] = e;
  },
  98
);
__d(
  "CometComposerBrandedContentButton.react",
  [
    "fbt",
    "ix",
    "BrandedContentPopoverButton.react",
    "CometBCHSTStrings",
    "CometComposerBrandedContentButton_bcUserInfo.graphql",
    "CometComposerBrandedContentPopoverResource",
    "CometComposerBrandedContentStrings",
    "CometComposerSproutButton.react",
    "CometComposerTaggerPluginTypes",
    "CometRelay",
    "composerBrandedContentReducer",
    "lazyLoadComponent",
    "react",
    "useBCHSTEventLogger",
    "useCometComposerPushPage",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "uuid",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = c("lazyLoadComponent")(
        c("CometComposerBrandedContentPopoverResource")
      );
    function a(a) {
      var e = a.bcUserInfoRef,
        f = a.brandedContent,
        g = a.composerType,
        m = a.location;
      a = a.visibleOnLoad;
      a === void 0 ? !1 : a;
      var n = c("useCometComposerPushPage")();
      c("useComposerViewStateReducer")(c("composerBrandedContentReducer"));
      var o = c("useComposerViewStateDispatcher")();
      a =
        (f == null ? void 0 : f.sponsorID) != null &&
        (f == null ? void 0 : f.sponsorRelationship) ===
          "PAID_RELATIONSHIP_WITH";
      g = g === "edit";
      var p = c("useBCHSTEventLogger")();
      e = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometComposerBrandedContentButton_bcUserInfo.graphql")),
        e
      );
      var q =
        (e =
          e == null
            ? void 0
            : (e = e.bc_user_info_owner) == null
            ? void 0
            : e.id) != null
          ? e
          : "";
      return n == null
        ? k.jsx(c("BrandedContentPopoverButton.react"), {
            creatorID: q,
            isActive: a,
            location: m,
            sproutType: "PAID_RELATIONSHIP_WITH",
          })
        : k.jsx(c("CometComposerSproutButton.react"), {
            activeColor: "var(--fds-spectrum-aluminum-tint-70)",
            disabled: g,
            disabledIcon: i("608367"),
            disabledTooltip: g ? h._("You cannot edit this content") : void 0,
            icon: i("1099025"),
            isActive: a,
            label: d("CometBCHSTStrings").tagging.sproutTooltip,
            loggingName: "sponsor_sprout",
            onClick: function () {
              var a,
                b = f == null ? void 0 : f.funnelSessionID;
              a = (a = b) != null ? a : c("uuid")();
              b == null &&
                o({
                  funnelSessionID: a,
                  type: "branded_content_set_funnel_session_id",
                });
              p("bc_sprout_clicked", {
                funnelSessionID: a,
                location: m,
                sponsorRelationship: "PAID_RELATIONSHIP_WITH",
                startFunnelLogger: b == null,
              });
              n != null &&
                n(
                  d("CometComposerBrandedContentStrings").popoverTitle,
                  function (a) {
                    a = a.onReturn;
                    return k.jsx(l, {
                      contextProps: {
                        creatorID: q,
                        funnelSessionID: null,
                        location: m,
                        sproutType: "PAID_RELATIONSHIP_WITH",
                      },
                      onClose: a,
                      pushPage: n,
                      withPopover: !1,
                    });
                  },
                  { hasCustomHeader: !0 }
                );
            },
            pluginName: c("CometComposerTaggerPluginTypes").BRANDED_CONTENT,
            sproutName: "SPONSOR_TAG",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c("withComposerViewStatePart")(a, function (a) {
      return { brandedContent: a.brandedContent };
    });
    g["default"] = e;
  },
  98
);
__d(
  "PagesCometComposerBCSupportSprout.react",
  [
    "BCSupportButton.react",
    "PagesCometComposerBCSupportSprout_sprout.graphql",
    "RelayHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.composerType;
      a = a.sprout;
      a = d("RelayHooks").useFragment(
        h !== void 0
          ? h
          : (h = b("PagesCometComposerBCSupportSprout_sprout.graphql")),
        a
      );
      return i.jsx(
        c("BCSupportButton.react"),
        {
          bcUserInfoRef:
            (a = (a = a.page) == null ? void 0 : a.branded_content_user_info) !=
            null
              ? a
              : void 0,
          composerType: e,
          location: "PAGES",
        },
        "comet_composer_bc_support_button"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometComposerBrandedContentSprout.react",
  [
    "CometComposerBrandedContentButton.react",
    "PagesCometComposerBrandedContentSprout_sprout.graphql",
    "RelayHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.composerType;
      a = a.sprout;
      a = d("RelayHooks").useFragment(
        h !== void 0
          ? h
          : (h = b("PagesCometComposerBrandedContentSprout_sprout.graphql")),
        a
      );
      return i.jsx(
        c("CometComposerBrandedContentButton.react"),
        {
          bcUserInfoRef: (a = a.branded_content_user_info) != null ? a : void 0,
          composerType: e,
          location: "PAGES",
        },
        "comet_composer_branded_content_button"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XContentRefController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/business/content_ref/", {
      name: { type: "String", required: !0 },
      callsite: { type: "String", required: !0 },
    });
  },
  null
);
__d(
  "ContentRef",
  ["XContentRefController"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      b === void 0 && (b = "DEFAULT");
      return c("XContentRefController")
        .getURIBuilder()
        .setString("name", a)
        .setString("callsite", b)
        .getURI();
    }
    function a(a, b) {
      b === void 0 && (b = "DEFAULT");
      return h(a, b).toString();
    }
    g.uri = h;
    g.get = a;
  },
  98
);
__d(
  "BCHSTStrings",
  ["fbt", "ContentRef", "FDSLink.react", "Link.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = {
      dialogTitle: h._("Is this post part of a paid partnership?"),
      dialogContentBrandDetected: h._(
        "Your post contains information commonly found in branded content, including the name of a possible sponsor. If the sponsor identified here is wrong, you can remove it and enter the correct one.{newline}If your post features or is influenced by a business partner for an exchange of value, our policies require you to tag the partner to show that your content is sponsored.",
        [
          h._param(
            "newline",
            i.jsxs(i.Fragment, { children: [i.jsx("br", {}), i.jsx("br", {})] })
          ),
        ]
      ),
      dialogContentSelfDisclosure: h._(
        "Your post contains information commonly found in branded content. If your post features or is influenced by a business partner for an exchange of value, our policies require you to tag the partner to show that your content is sponsored."
      ),
      dialogContentAffiliateLink: h._(
        "Your post mentions a third party product or business. If your post features or is influenced by a business partner for an exchange of value, our policies require you to tag the partner to show that your content is sponsored."
      ),
      publishWithTag: h._("Publish With Tag"),
      scheduleWithTag: h._("Schedule With Tag"),
      publishWithoutTag: h._("Publish Without Tag"),
      scheduleWithoutTag: h._("Schedule Without Tag"),
      RTSYesDisclosureRadioButton: h._("Yes, this is branded content"),
      RTSNoDisclosureRadioButton: h._("No, this is not branded content"),
      RTSDisclosureContinue: h._("Continue"),
      brandTaggingTitle: h._("Your Post Isn't Published Yet"),
      getBrandTaggingDialogBodyWithBrand: function (a) {
        return h._(
          "{=[brandName]} has not approved your Page to tag them as a sponsor. If you have a branded content partnership, please ask them to approve your Page for tagging them in posts. Then try again to publish this post.",
          [
            h._param(
              "=[brandName]",
              i.jsx("b", {
                children: h._("{brandName}", [h._param("brandName", a)]),
              })
            ),
          ]
        );
      },
      brandTaggingDialogBody: h._(
        "Your tagged business partner has not approved your Page to tag them as a sponsor. If you have a branded content partnership, please ask them to approve your Page for tagging them in posts. Then try again to publish this post."
      ),
    };
    b = {
      checkboxLabel: h._("This post falls under a restricted category"),
      header: h._("Restricted Audience"),
    };
    e = {
      allowBoostCheckbox: h._("Allow tagged Page to boost this post"),
      allowBoostTooltip: h._(
        "The Page you're tagging will be able to boost your post on Facebook or Instagram. If the Page you're tagging boosts this post, it will be associated with your Page on Facebook and your linked Instagram account on Instagram. {Learn More Boost link}",
        [
          h._param(
            "Learn More Boost link",
            i.jsx(c("FDSLink.react"), {
              href: "/business/help/2021526178075899/",
              target: "_blank",
              children: h._("Learn More"),
            })
          ),
        ]
      ),
      sponsorCTALabel: h._(
        "Allow business partner to add custom call-to-action button"
      ),
      allowSponsorCTAText: h._(
        "Your business partner's custom call-to-action button will link to a destination they select, and will remain part of your post after they've stopped boosting it. They'll be able to change the button at any time without notice or approval. {newline} Adding a call-to-action button to photo posts may cause the photo to be cropped, and the photo may link to the same destination as the button. {newline2}{=Learn more}",
        [
          h._param(
            "newline",
            i.jsxs(i.Fragment, { children: [i.jsx("br", {}), i.jsx("br", {})] })
          ),
          h._param(
            "newline2",
            i.jsxs(i.Fragment, { children: [i.jsx("br", {}), i.jsx("br", {})] })
          ),
          h._param(
            "=Learn more",
            i.jsx("span", {
              children: h._("{=Learn more}", [
                h._param(
                  "=Learn more",
                  i.jsx(c("Link.react"), {
                    href: d("ContentRef").get(
                      "SPONSOR_CTA_HELP_LINK",
                      "BRANDED_CONTENT"
                    ),
                    target: "_blank",
                    children: h._("Learn more"),
                  })
                ),
              ]),
            })
          ),
        ]
      ),
      dontAllowBoostCheckbox: h._("Don't allow tagged Page to boost this post"),
      disclaimerDescription: h._(
        'Unpaid promotional content will include a new "in support of" tag to distinguish it from paid partnerships. If you receive anything of value in exchange for content, including donated goods or services, your post is part of a paid partnership and can\'t include the "in support of" tag. Add #SupportSmallBusiness to help people outside your followers find your post.'
      ),
      disclaimerHeader: h._(
        "Supporting Small Businesses Affected by Coronavirus (COVID-19)"
      ),
      inSupportOf: h._("In support of"),
      notPaidPartnership: h._(
        "I confirm that I have not received anything of value for this post, including donated goods or services."
      ),
      sproutLabel: h._("Tag Unpaid Promotion"),
      sproutNux: h._(
        "Tag a small business you want to support with unpaid promotional content. If you receive anything of value in exchange, including donated goods or services, your post is part of a paid partnership and can't be identified as an unpaid promotion."
      ),
      typeaheadPlaceholder: h._(
        "Enter the name of a small business to support"
      ),
      typeaheadTooltip: h._(
        "Pages you tag will be notified, and their admins will be able to view this post's metrics."
      ),
    };
    f = {
      tagSponsorLabel: h._("Tag Sponsor"),
      tagSponsorTypeaheadPlaceholder: h._(
        "Enter your business partner's Page or username"
      ),
    };
    g.intercept = a;
    g.restricted = b;
    g.supportTag = e;
    g.tagging = f;
  },
  98
);
__d(
  "BCSupportPopoverButton.react",
  [
    "fbt",
    "ix",
    "BCHSTStrings",
    "CometComposerBrandedContentPopoverResource",
    "CometComposerSproutButton.react",
    "CometComposerTaggerPluginTypes",
    "CometLazyPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "composerBrandedContentReducer",
    "react",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = { popoverFallback: { minWidth: "s282zdxb" } };
    function a(a) {
      var b = a.composerType,
        e = a.creatorID,
        f = a.isActive,
        g = a.location,
        l = a.sproutType;
      a = a.visibleOnLoad;
      a = a === void 0 ? !1 : a;
      c("useComposerViewStateReducer")(c("composerBrandedContentReducer"));
      var m = c("useComposerViewStateDispatcher")(),
        n = b === "edit";
      return j.jsx(c("CometLazyPopoverTrigger.react"), {
        align: "middle",
        fallback: j.jsx(c("CometPopoverLoadingState.react"), {
          withArrow: !0,
          xstyle: k.popoverFallback,
        }),
        popoverProps: {
          contextProps: {
            creatorID: e,
            funnelSessionID: null,
            location: g,
            sproutType: l,
          },
          withPopover: !0,
        },
        popoverResource: c("CometComposerBrandedContentPopoverResource"),
        position: "above",
        preloadTrigger: "button",
        visibleOnLoad: a,
        children: function (a, b, e, g, k, l) {
          return j.jsx(c("CometComposerSproutButton.react"), {
            activeColor: "var(--fds-spectrum-aluminum-tint-70)",
            disabled: n,
            disabledIcon: i("484194"),
            disabledTooltip: n ? h._("You cannot edit this content") : void 0,
            icon: i("490496"),
            isActive: f,
            label: d("BCHSTStrings").supportTag.sproutLabel,
            loggingName: "bc_support",
            onClick: function () {
              m({
                sponsorRelationship: "SUPPORT",
                type: "branded_content_set_sponsor_relationship",
              }),
                b();
            },
            onHoverIn: g,
            onHoverOut: k,
            onPressIn: l,
            pluginName: c("CometComposerTaggerPluginTypes").BC_SUPPORT,
            ref: a,
            sproutName: "BC_SUPPORT",
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
  "BrandedContentPopoverButton.react",
  [
    "fbt",
    "ix",
    "CometBCHSTStrings",
    "CometComposerBrandedContentPopoverResource",
    "CometComposerSproutButton.react",
    "CometComposerTaggerPluginTypes",
    "CometLazyPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "composerBrandedContentReducer",
    "react",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = { popoverFallback: { minWidth: "s282zdxb" } };
    function a(a) {
      var b = a.composerType,
        e = a.creatorID,
        f = a.isActive,
        g = a.location,
        l = a.sproutType;
      a = a.visibleOnLoad;
      a = a === void 0 ? !1 : a;
      c("useComposerViewStateReducer")(c("composerBrandedContentReducer"));
      var m = c("useComposerViewStateDispatcher")(),
        n = b === "edit";
      return j.jsx(c("CometLazyPopoverTrigger.react"), {
        align: "middle",
        fallback: j.jsx(c("CometPopoverLoadingState.react"), {
          withArrow: !0,
          xstyle: k.popoverFallback,
        }),
        popoverProps: {
          contextProps: {
            creatorID: e,
            funnelSessionID: null,
            location: g,
            sproutType: l,
          },
          withPopover: !0,
        },
        popoverResource: c("CometComposerBrandedContentPopoverResource"),
        position: "above",
        preloadTrigger: "button",
        visibleOnLoad: a,
        children: function (a, b, e, g, k, l) {
          return j.jsx(c("CometComposerSproutButton.react"), {
            activeColor: "var(--fds-spectrum-aluminum-tint-70)",
            disabled: n,
            disabledIcon: i("608367"),
            disabledTooltip: n ? h._("You cannot edit this content") : void 0,
            icon: i("1099025"),
            isActive: f,
            label: d("CometBCHSTStrings").tagging.sproutTooltip,
            loggingName: "sponsor_sprout",
            onClick: function () {
              m({
                sponsorRelationship: "PAID_RELATIONSHIP_WITH",
                type: "branded_content_set_sponsor_relationship",
              }),
                b();
            },
            onHoverIn: g,
            onHoverOut: k,
            onPressIn: l,
            pluginName: c("CometComposerTaggerPluginTypes").BRANDED_CONTENT,
            ref: a,
            sproutName: "SPONSOR_TAG",
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
  "ComposerBrandedContentTaggerPushPageGlimmmer",
  ["BaseGlimmer.react", "BaseLoadingStateElement.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        backButton: {
          borderTopStartRadius: "e72ty7fz",
          borderTopEndRadius: "qlfml3jp",
          borderBottomEndRadius: "inkptoze",
          borderBottomStartRadius: "qmr60zad",
          height: "tv7at329",
          position: "pmk7jnqg",
          start: "re5koujm",
          top: "fcg2cn6m",
          width: "thwo4zme",
        },
        header: {
          alignItems: "bp9cbjyn",
          borderBottom: "prcnd6m8",
          display: "j83agx80",
          height: "f13nzvq2",
          justifyContent: "taijpn5t",
        },
        root: {
          backgroundColor: "hybvsw6c",
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          boxShadow: "nwpbqux9",
          height: "rq1lv6aj",
          width: "oh7imozk",
        },
        searchBar: {
          borderTopStartRadius: "e72ty7fz",
          borderTopEndRadius: "qlfml3jp",
          borderBottomEndRadius: "inkptoze",
          borderBottomStartRadius: "qmr60zad",
          height: "tv7at329",
          marginTop: "aov4n071",
          marginEnd: "oi9244e8",
          marginBottom: "tvmbv18p",
          marginStart: "h676nmdw",
          width: "k4urcfbm",
        },
        searchBarView: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          height: "pi1r6xr4",
          justifyContent: "taijpn5t",
        },
        title: {
          borderTopStartRadius: "dwerhba3",
          borderTopEndRadius: "kgjeooe1",
          borderBottomEndRadius: "kxcb68kb",
          borderBottomStartRadius: "mwvzfrdb",
          height: "rgmg9uty",
          width: "bdkkod50",
        },
      };
    function a(a, b) {
      return h.jsxs(c("BaseLoadingStateElement.react"), {
        ref: b,
        xstyle: i.root,
        children: [
          h.jsxs("div", {
            children: [
              h.jsx(c("BaseGlimmer.react"), {
                className: c("stylex")(i.backButton),
                index: 0,
              }),
              h.jsx("div", {
                className: c("stylex")(i.header),
                children: h.jsx(c("BaseGlimmer.react"), {
                  className: c("stylex")(i.title),
                  index: 0,
                }),
              }),
            ],
          }),
          h.jsx("div", {
            className: c("stylex")(i.searchBarView),
            children: h.jsx(c("BaseGlimmer.react"), {
              className: c("stylex")(i.searchBar),
              index: 1,
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometComposerBrandedContentPopover.react",
  [
    "BCHSTStrings",
    "BrandedContentTaggerContext",
    "CometBCHSTStrings",
    "CometComposerBrandedContentTagger.react",
    "CometComposerPushPageContext",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometPopover.react",
    "ComposerBrandedContentTaggerPushPageGlimmmer",
    "FeedComposerCometGlimmer.react",
    "composerBrandedContentReducer",
    "react",
    "useComposerViewStateDispatcher",
    "useComposerViewStateReducer",
    "withComposerViewStatePart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = d("react");
    var i = a.useContext,
      j = a.useState;
    function k(a) {
      var b = a.onClose,
        e = a.sponsorRelationship;
      a = a.withPopover;
      c("useComposerViewStateReducer")(c("composerBrandedContentReducer"));
      var f = c("useComposerViewStateDispatcher")(),
        g = i(c("BrandedContentTaggerContext")),
        k = g.location;
      g = g.sproutType;
      g = j((g = g) != null ? g : e);
      var l = g[0];
      g[1];
      e = function (a) {
        b();
        f({
          bcmpCampaignAgreementID: a.bcmpCampaignAgreementID,
          eventLocation: k,
          sponsorCanAddCTA: a.canAddCTA,
          sponsorCanBoost: a.canBoost,
          sponsorID: a.sponsorID,
          type: "branded_content_tag_sponsor",
        });
        f({
          sponsorRelationship: (a = l) != null ? a : "PAID_RELATIONSHIP_WITH",
          type: "branded_content_set_sponsor_relationship",
        });
      };
      g = function () {
        f({ type: "branded_content_remove_sponsor" });
      };
      var m =
        l === "SUPPORT"
          ? d("BCHSTStrings").supportTag.sproutLabel
          : d("CometBCHSTStrings").tagging.title;
      m = h.jsx(c("CometComposerBrandedContentTagger.react"), {
        headerTitle: m,
        onClose: b,
        onTagComplete: e,
        onUntag: g,
        withInitialBackButton: k !== "live_producer",
      });
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: h.jsx(c("ComposerBrandedContentTaggerPushPageGlimmmer"), {}),
        children: h.jsx("div", {
          className: "oh7imozk",
          children: h.jsx(c("CometErrorBoundary.react"), {
            fallback: function () {
              return h.jsx(c("FeedComposerCometGlimmer.react"), {});
            },
            children: a
              ? h.jsx(c("CometPopover.react"), { withArrow: !0, children: m })
              : m,
          }),
        }),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    b = function (a) {
      var b = a.contextProps
        ? h.jsx(c("BrandedContentTaggerContext").Provider, {
            value: a.contextProps,
            children: h.jsx(k, babelHelpers["extends"]({}, a)),
          })
        : h.jsx(k, babelHelpers["extends"]({}, a));
      return a.pushPage
        ? h.jsx(c("CometComposerPushPageContext").Provider, {
            value: a.pushPage,
            children: b,
          })
        : b;
    };
    e = c("withComposerViewStatePart")(b, function (a) {
      return {
        sponsorRelationship:
          (a = a.brandedContent) == null ? void 0 : a.sponsorRelationship,
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "createCometComposerWhatsAppDeeplinkEntity",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "PageWhatsAppNumber";
    function a(a, b, c) {
      return c.createEntity("MENTION", "IMMUTABLE", { entType: g, id: a });
    }
    f["default"] = a;
  },
  66
);
__d(
  "composerBrandedContentReducer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c;
      switch (b.type) {
        case "branded_content_tag_sponsor":
          return babelHelpers["extends"]({}, a, {
            brandedContent: babelHelpers["extends"]({}, a.brandedContent, {
              bcmpCampaignAgreementID: b.bcmpCampaignAgreementID,
              eventLocation:
                (c = b.eventLocation) != null
                  ? c
                  : (c = a.brandedContent) == null
                  ? void 0
                  : c.eventLocation,
              isReviewable: !1,
              sponsorCanAddCTA: b.sponsorCanAddCTA,
              sponsorCanBoost: b.sponsorCanBoost,
              sponsorID: b.sponsorID,
            }),
          });
        case "branded_content_remove_sponsor":
          return babelHelpers["extends"]({}, a, {
            brandedContent: babelHelpers["extends"]({}, a.brandedContent, {
              bcmpCampaignAgreementID: void 0,
              isReviewable: void 0,
              sponsorCanAddCTA: void 0,
              sponsorCanBoost: void 0,
              sponsorID: void 0,
              sponsorRelationship: void 0,
            }),
          });
        case "branded_content_set_reviewable":
          if (((c = a.brandedContent) == null ? void 0 : c.sponsorID) != null)
            return babelHelpers["extends"]({}, a, {
              brandedContent: babelHelpers["extends"]({}, a.brandedContent, {
                isReviewable: !0,
              }),
            });
          break;
        case "branded_content_set_enforcement_intercept_event":
          return babelHelpers["extends"]({}, a, {
            brandedContent: babelHelpers["extends"]({}, a.brandedContent, {
              enforcementInterceptEvent: b.event,
            }),
          });
        case "branded_content_set_enforcement_intercept_reason":
          return babelHelpers["extends"]({}, a, {
            brandedContent: babelHelpers["extends"]({}, a.brandedContent, {
              enforcementInterceptReason: b.reason,
            }),
          });
        case "branded_content_set_funnel_session_id":
          return babelHelpers["extends"]({}, a, {
            brandedContent: babelHelpers["extends"]({}, a.brandedContent, {
              funnelSessionID: b.funnelSessionID,
            }),
          });
        case "branded_content_set_sponsor_relationship":
          return babelHelpers["extends"]({}, a, {
            brandedContent: babelHelpers["extends"]({}, a.brandedContent, {
              sponsorRelationship: b.sponsorRelationship,
            }),
          });
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "getEditorStateForPageVideoComposer",
  [
    "createCometComposerEditorStateFromTextWithEntities",
    "createCometComposerMentionsEntity",
    "createCometComposerWhatsAppDeeplinkEntity",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d = [];
      for (
        var e = 0;
        e < ((f = b == null ? void 0 : b.length) != null ? f : 0);
        e++
      ) {
        var f;
        f = b[e];
        f != null &&
          f.offset != null &&
          f.length != null &&
          f.entity != null &&
          f.entity.__typename != null &&
          d.push({
            entity: f.entity,
            entity_is_weak_reference:
              f == null ? void 0 : f.entity_is_weak_reference,
            length: f.length,
            offset: f.offset,
          });
      }
      e = c("createCometComposerEditorStateFromTextWithEntities")(
        { ranges: d, text: (f = a) != null ? f : "" },
        function (a, b) {
          a = a.entity;
          var d = a.__typename;
          a = a.id;
          if (a == null) return null;
          switch (d) {
            case "User":
            case "Page":
            case "Event":
            case "Group":
              return c("createCometComposerMentionsEntity")(a, !1, b);
            case "PageWhatsAppNumber":
              return c("createCometComposerWhatsAppDeeplinkEntity")(a, !1, b);
            default:
              return null;
          }
        }
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTime",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return new Date(a * 1e3);
    }
    function b(a) {
      var b = a.getTime();
      if (Number.isNaN(b))
        throw c("unrecoverableViolation")(
          "Tried to get time, but got NaN: " + a.toString(),
          "comet_ui"
        );
      return Math.floor(b / 1e3);
    }
    g.fromSeconds = a;
    g.toSeconds = b;
  },
  98
);
