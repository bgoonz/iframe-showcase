if (self.CavalryLogger) {
  CavalryLogger.start_js(["CxiiQov"]);
}

__d(
  "CometAdsSideFeedUnitItemListLayoutWrapper_sidead.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometAdsSideFeedUnitItemListLayoutWrapper_sidead",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
      ],
      type: "AdsSideFeedUnitItem",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometAdsSideFeedUnitItem_sidead.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { kind: "Variable", name: "scale", variableName: "scale" },
        b = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        c = {
          alias: null,
          args: [a],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: b,
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: null,
        name: "CometAdsSideFeedUnitItem_sidead",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "RightColumnAd",
            kind: "LinkedField",
            name: "rhc_ad",
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
                    name: "name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "height", value: 36 },
                      a,
                      { kind: "Literal", name: "width", value: 36 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: b,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "description",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "title",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subtitle",
                storageKey: null,
              },
              c,
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
                    args: [{ kind: "Literal", name: "first", value: 2 }],
                    concreteType: "SubattachmentsConnection",
                    kind: "LinkedField",
                    name: "all_subattachments",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "StoryAttachment",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "media",
                            plural: !1,
                            selections: [c],
                            storageKey: null,
                          },
                          d,
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: "all_subattachments(first:2)",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "target_url",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "web_link",
                plural: !1,
                selections: [
                  d,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "fbclid",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "lynx_mode",
                        storageKey: null,
                      },
                    ],
                    type: "ExternalWebLink",
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
            concreteType: "SponsoredData",
            kind: "LinkedField",
            name: "sponsored_data",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_token",
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
                name: "ad_id",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometAdsSideFeedUnitItemListLayoutWrapper_sidead",
          },
        ],
        type: "AdsSideFeedUnitItem",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometAdsSideFeedUnit_adsSideFeedUnit$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        b = [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "val",
            storageKey: null,
          },
        ],
        c = {
          alias: null,
          args: null,
          concreteType: "GHLScramblingProperty",
          kind: "LinkedField",
          name: "attributes",
          plural: !0,
          selections: b,
          storageKey: null,
        };
      b = {
        alias: null,
        args: null,
        concreteType: "GHLScramblingProperty",
        kind: "LinkedField",
        name: "styles",
        plural: !0,
        selections: b,
        storageKey: null,
      };
      var d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tag",
          storageKey: null,
        },
        f = [{ kind: "Literal", name: "first", value: 2 }],
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        h = { kind: "Variable", name: "scale", variableName: "scale" },
        i = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        k = {
          alias: null,
          args: [h],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: i,
          storageKey: null,
        },
        l = [j],
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometAdsSideFeedUnit_adsSideFeedUnit$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "GHLScramblingNode",
            kind: "LinkedField",
            name: "ghl_label",
            plural: !1,
            selections: [
              c,
              b,
              d,
              e,
              {
                alias: null,
                args: null,
                concreteType: "GHLScramblingNode",
                kind: "LinkedField",
                name: "children",
                plural: !0,
                selections: [
                  c,
                  b,
                  d,
                  e,
                  {
                    alias: null,
                    args: null,
                    concreteType: "GHLScramblingNode",
                    kind: "LinkedField",
                    name: "children",
                    plural: !0,
                    selections: [c, b, d, e],
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
            args: f,
            concreteType: "AdsSideFeedUnitConnection",
            kind: "LinkedField",
            name: "ads",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AdsSideFeedUnitItem",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "RightColumnAd",
                    kind: "LinkedField",
                    name: "rhc_ad",
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
                          g,
                          a,
                          {
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
                            selections: i,
                            storageKey: null,
                          },
                          j,
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "description",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "title",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "subtitle",
                        storageKey: null,
                      },
                      k,
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
                            args: f,
                            concreteType: "SubattachmentsConnection",
                            kind: "LinkedField",
                            name: "all_subattachments",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "StoryAttachment",
                                kind: "LinkedField",
                                name: "nodes",
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
                                      g,
                                      k,
                                      {
                                        kind: "InlineFragment",
                                        selections: l,
                                        type: "Node",
                                        abstractKey: "__isNode",
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: l,
                                        type: "GenericAttachmentMedia",
                                        abstractKey: null,
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: l,
                                        type: "MontageImage",
                                        abstractKey: null,
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: l,
                                        type: "MontageVideo",
                                        abstractKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  m,
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: "all_subattachments(first:2)",
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "target_url",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "web_link",
                        plural: !1,
                        selections: [
                          g,
                          m,
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "fbclid",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "lynx_mode",
                                storageKey: null,
                              },
                            ],
                            type: "ExternalWebLink",
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
                    concreteType: "SponsoredData",
                    kind: "LinkedField",
                    name: "sponsored_data",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "client_token",
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
                        name: "ad_id",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  j,
                ],
                storageKey: null,
              },
            ],
            storageKey: "ads(first:2)",
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometAdsSideFeedUnit_adsSideFeedUnit.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometAdsSideFeedUnit_adsSideFeedUnit",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "GHLScramblingNode",
          kind: "LinkedField",
          name: "ghl_label",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "CometGHLScrambledLabel_label",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 2 }],
          concreteType: "AdsSideFeedUnitConnection",
          kind: "LinkedField",
          name: "ads",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdsSideFeedUnitItem",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometAdsSideFeedUnitItem_sidead",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: "ads(first:2)",
        },
      ],
      type: "AdsSideFeedUnit",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "HideRHCAdMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "HideRhcAdResponsePayload",
            kind: "LinkedField",
            name: "hide_rhc_ad",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
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
          name: "HideRHCAdMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "HideRHCAdMutation",
          selections: b,
        },
        params: {
          id: "2188211757958566",
          metadata: {},
          name: "HideRHCAdMutation",
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
  "CometHomeRightSideEgoMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4141120699260561",
        metadata: {},
        name: "CometHomeRightSideEgoMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "HideRHCAdMutation",
  ["CometRelay", "HideRHCAdMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("HideRHCAdMutation.graphql"));
    function a(a, b, c, e) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: c,
        onError: e,
        variables: { input: b },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometAdsSideFeedUnitItemHiddenContent.react",
  [
    "fbt",
    "CometHomeRightRailUnit.react",
    "CometRelay",
    "CometUnitHeader.react",
    "HideRHCAdMutation",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.adId,
        e = a.hasBottomDivider,
        f = a.impressionToken,
        g = a.isAdReported,
        j = a.updateRHCAdVisibility,
        k = d("CometRelay").useRelayEnvironment();
      return i.jsx(c("CometHomeRightRailUnit.react"), {
        hasBottomDivider: e,
        header: i.jsx(c("CometUnitHeader.react"), {
          action: h._("Undo"),
          body: g
            ? h._("We won't show you this ad again.")
            : h._("You won't see this ad and ads like it."),
          headline: g ? h._("Ad Reported") : h._("Ad Hidden"),
          level: 4,
          onActionPress: function () {
            j(!0, !1),
              d("HideRHCAdMutation").commit(
                k,
                {
                  ad_id: parseInt(b, 10),
                  client_token: f,
                  is_reported: g,
                  undo: !0,
                },
                function () {},
                function (a) {
                  c("recoverableViolation")(
                    "Unhide ad for rhc mutation failed with error",
                    "ad_preferences",
                    { error: a }
                  );
                }
              );
          },
        }),
        children: i.jsx("span", {}),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useGHLRHCLinkProps",
  ["fbt", "gkx", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    b = d("react");
    var i = b.useCallback,
      j = b.useState;
    function a(a, b, d) {
      var e = c("gkx")("1844620"),
        f = j("Label"),
        g = f[0],
        k = f[1];
      f = h._("Advertiser Image Link");
      var l = j(null),
        m = l[0],
        n = l[1];
      l = i(
        function () {
          n({ href: a, rel: b, target: d }), k(h._("Advertiser Image Link"));
        },
        [a, b, d]
      );
      return {
        label: e ? g : f,
        linkAttributes: e ? m : { href: a, rel: b, target: d },
        unshimAttributes: e ? l : function () {},
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometAdsSideFeedUnitCarouselCard.react",
  ["CometImage.react", "CometLink.react", "react", "useGHLRHCLinkProps"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        carouselImage: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          display: "a8c37x1j",
          maxWidth: "d2edcug0",
          minHeight: "kltspiyx",
        },
      };
    function a(a) {
      var b = a.imageUri;
      a = a.url;
      a = c("useGHLRHCLinkProps")(a, "nofollow", "_blank");
      var d = a.label,
        e = a.linkAttributes;
      a = a.unshimAttributes;
      return h.jsx(
        c("CometLink.react"),
        babelHelpers["extends"]({ label: d }, e, {
          onFocus: a,
          onHoverStart: a,
          suppressHydrationWarning: !0,
          children: h.jsx(c("CometImage.react"), {
            src: b,
            xstyle: i.carouselImage,
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
  "CometHomeRightSideEgoMenu.entrypoint",
  ["CometHomeRightSideEgoMenuQuery$Parameters", "JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.id;
        return {
          queries: {
            queryReference: {
              parameters: c("CometHomeRightSideEgoMenuQuery$Parameters"),
              variables: { id: a },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometHomeRightSideEgoMenu.react"
      ).__setRef("CometHomeRightSideEgoMenu.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "useCometRightRailGHLAriaLabelledBys",
  ["cr:1807247", "gkx", "react", "useCometAriaID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var d = c("useCometAriaID")("aria-labelledby"),
        e = d[0],
        f = e[0];
      e = e[1];
      d = d[1];
      var g = d[0];
      d = d[1];
      f = b("cr:1807247")
        ? h.jsx(b("cr:1807247"), { targetProps: f, targetRef: e, children: a })
        : null;
      return {
        ariaLabelledByProps: g,
        ariaLabelledByRef: d,
        fallbackAriaLabelFbt: c("gkx")("1807248") ? null : a,
        portaledAriaLabel: f,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeRightSideEgoMenuSection.react",
  [
    "fbt",
    "ix",
    "CometEntryPointPopoverTrigger.react",
    "CometHomeRightSideEgoMenu.entrypoint",
    "CometTrackingNodeProvider.react",
    "TetraCircleButton.react",
    "fbicon",
    "gkx",
    "react",
    "stylex",
    "useCometRightRailGHLAriaLabelledBys",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback,
      l = c("gkx")("1627707");
    function a(a) {
      var b = a.onMenuStateChange,
        e = k(
          function (a) {
            b != null && b(a);
          },
          [b]
        ),
        f = c("useCometRightRailGHLAriaLabelledBys")(h._("Open Menu")),
        g = f.ariaLabelledByProps,
        m = f.ariaLabelledByRef,
        n = f.fallbackAriaLabelFbt,
        o = f.portaledAriaLabel;
      return a.sidead == null || a.menuSideAdId == null
        ? null
        : j.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 55,
            children: j.jsx(c("CometEntryPointPopoverTrigger.react"), {
              align: "end",
              entryPointParams: { id: a.menuSideAdId },
              onVisibilityChange: e,
              otherProps: {
                sidead: a.sidead,
                updateAdUnitVisibility: a.updateAdUnitVisibility,
              },
              popoverEntryPoint: c("CometHomeRightSideEgoMenu.entrypoint"),
              popoverType: "menu",
              position: "below",
              preloadTrigger: l ? "button" : void 0,
              children: function (b, e, f, k, p, q) {
                return j.jsx("div", {
                  className: c("stylex").dedupe(
                    {
                      "border-top-start-radius-1": "s45kfl79",
                      "border-top-end-radius-1": "emlxlaya",
                      "border-bottom-end-radius-1": "bkmhp75w",
                      "border-bottom-start-radius-1": "spb7xbtv",
                      "box-shadow-1": "kujm000c",
                      "end-1": "agsi23a0",
                      "position-1": "pmk7jnqg",
                      "top-1": "ntk8zc1u",
                      "z-index-1": "tkr6xdv7",
                    },
                    a.hidden
                      ? {
                          "clip-1": "svngc6pa",
                          "height-1": "ay7djpcl",
                          "position-1": "pmk7jnqg",
                          "width-1": "rfua0xdk",
                        }
                      : null
                  ),
                  ref: b,
                  children: j.jsxs(
                    "span",
                    babelHelpers["extends"]({}, g, {
                      ref: m,
                      children: [
                        o,
                        j.jsx(
                          c("TetraCircleButton.react"),
                          babelHelpers["extends"](
                            {
                              color: "secondary",
                              icon: d("fbicon")._(i("484387"), 20),
                              label: (f = n) != null ? f : h._("More"),
                            },
                            l
                              ? { onHoverIn: k, onHoverOut: p, onPressIn: q }
                              : Object.freeze({}),
                            { onPress: e, size: 32, type: "overlay" }
                          )
                        ),
                      ],
                    })
                  ),
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
  "useAdUnitImpressionLoggerExperimental",
  [
    "CometGHLTracker",
    "CometMetricsViewableImpressionFalcoEvent",
    "DebugOwl",
    "ghlTestUBT",
    "gkx",
    "randomInt",
    "react",
    "requireDeferred",
    "sendImpressionEnterActionValidationData",
    "sendImpressionExitActionValidationData",
    "setTimeout",
    "useMinifiedProductAttribution",
    "usePartialViewImpression",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = c("requireDeferred")("Banzai").__setRef(
        "useAdUnitImpressionLoggerExperimental"
      ),
      l = {
        can_delay_log_impression: !0,
        client_track_subsequent_impression: !1,
        subsequent_gap_in_ms: 0,
      },
      m = 5e3;
    function a(a, b, e, f) {
      b === void 0 && (b = !0);
      e === void 0 && (e = !0);
      f === void 0 && (f = !1);
      var g = babelHelpers["extends"]({}, l),
        n = j(null),
        o = j(null),
        p = j(null),
        q = j(!1),
        r = j(!1),
        s = c("useMinifiedProductAttribution")();
      i(
        function () {
          c("ghlTestUBT")(function (a) {
            q.current = a;
          });
          return function () {
            (n.current = null), (r.current = !1);
          };
        },
        [a]
      );
      var t = h(
          function (h) {
            var i = h.entry;
            h = h.visibleTime;
            c("DebugOwl").perch(i.target);
            var j = function (g) {
              if (a == null) return;
              var h = Date.now(),
                i = d("CometGHLTracker").c(g.target);
              c("DebugOwl").fly(g.target);
              var j = c("uuid")(),
                l = h + "_" + (c("randomInt")(0, 4294967295) + 1),
                m = Math.floor(h / 1e3),
                n = a,
                o = i;
              c("CometMetricsViewableImpressionFalcoEvent").logImmediately(
                function () {
                  return {
                    aidv2: s,
                    cts: m.toString(),
                    eid: n,
                    etid: l,
                    event_trace_id: j,
                    hba: o,
                    isv: "1",
                  };
                }
              );
              var p = {
                cts: m,
                eid: n,
                etid: l,
                event_trace_id: j,
                hba: o,
                isv: 1,
              };
              k.onReady(function (a) {
                var c = b
                  ? babelHelpers["extends"]({}, a.VITAL, { signal: e })
                  : { signal: e };
                a.post("comet_metrics:viewable_imp", p, c);
              });
              r.current = !0;
              f &&
                c("sendImpressionEnterActionValidationData")(
                  "ad_unit_generic_api_comet_after_dedup",
                  g,
                  null,
                  { eid: a }
                );
            };
            if (a == null) return;
            var l = {
              boundingClientRect: i.boundingClientRect,
              impressedAt: h,
              intersectionRect: i.intersectionRect,
              invisibleReason: null,
              rootBounds: i.rootBounds,
              status: "ENTER",
              target: i.target,
              visible: !0,
              visiblePercentage: i.intersectionRatio,
            };
            f &&
              c("sendImpressionEnterActionValidationData")(
                "ad_unit_generic_api_comet",
                l,
                null,
                { eid: a, pre_rs: n.current }
              );
            if (
              p.current ||
              o.current ||
              (r.current && !g.client_track_subsequent_impression)
            )
              return;
            if (
              g.can_delay_log_impression === !0 &&
              (q.current || d("CometGHLTracker").b() || c("gkx")("986925"))
            ) {
              h = m;
              o.current = c("setTimeout")(function () {
                j && j(l), (o.current = null);
              }, h);
            } else j && j(l);
          },
          [
            g.can_delay_log_impression,
            g.client_track_subsequent_impression,
            a,
            e,
            f,
            b,
            s,
          ]
        ),
        u = h(
          function (b) {
            var d = b.hiddenReason,
              e = b.visibleDuration;
            b = b.visibleTime;
            if (a == null) return;
            f &&
              c("sendImpressionExitActionValidationData")(
                "ad_unit_generic_api_comet_exit",
                { impressedAt: b, invisibleReason: d, visiblePercentage: 0 },
                null,
                { duration: e, eid: a, pre_rs: n.current }
              );
            n.current = d;
            if (p.current) return;
            g.client_track_subsequent_impression &&
              (r.current || o.current) &&
              (p.current = c("setTimeout")(function () {
                (r.current = !1), (p.current = null);
              }, g.subsequent_gap_in_ms));
          },
          [g.client_track_subsequent_impression, g.subsequent_gap_in_ms, a, f]
        );
      return c("usePartialViewImpression")({
        onImpressionEnd: u,
        onImpressionStart: t,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useAdUnitImpressionLoggerRoot",
  ["cr:1179640", "mergeRefs", "react", "useAdUnitImpressionLoggerExperimental"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a, d, e, f) {
      d === void 0 && (d = !0);
      e === void 0 && (e = !0);
      f === void 0 && (f = !1);
      var g = c("useAdUnitImpressionLoggerExperimental")(a, d, e, f),
        i = b("cr:1179640")(a, d, e);
      return h(
        function () {
          return c("mergeRefs")(i, g);
        },
        [i, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "GhlAdSwankFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1955956");
    c = b("FalcoLoggerInternal").create("ghl_ad_swank", a);
    e.exports = c;
  },
  null
);
__d(
  "useCometGHLRHCSurvey",
  [
    "CometGHLTracker",
    "DebugOwl",
    "GhlAdSwankFalcoEvent",
    "cr:1088657",
    "react",
    "useCometGHLDisplayMonitor",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useRef;
    function a(a) {
      var e = a.impressionToken;
      a = a.location;
      var f = j(!1);
      a = h(
        function (a) {
          if (f.current || e == null) return;
          f.current = !0;
          c("GhlAdSwankFalcoEvent").log(function () {
            return { eid: e, hd: String(a) };
          });
          var h = g.current;
          if (h !== null) {
            d("CometGHLTracker").m(h);
            b("cr:1088657") &&
              b("cr:1088657").b({
                e: h,
                hd: a,
                token: (h = e) != null ? h : "",
              });
          }
        },
        [e, a]
      );
      var g = c("useCometGHLDisplayMonitor")(!f.current, a);
      i(
        function () {
          var a = g.current;
          return function () {
            a && d("CometGHLTracker").d(a);
          };
        },
        [g]
      );
      a = h(function (a) {
        c("DebugOwl").nest(a, { location: "RHC" });
      }, []);
      return c("useMergeRefs")(g, a);
    }
    f = a;
    g["default"] = f;
  },
  98
);
__d(
  "CometAdsSideFeedUnitItemListLayout.react",
  [
    "fbt",
    "CometAdsSideFeedUnitCarouselCard.react",
    "CometHomeRightSideEgoMenuSection.react",
    "CometImage.react",
    "CometLegacyClickableListItemBase.react",
    "TetraTextPairing.react",
    "gkx",
    "mergeRefs",
    "react",
    "stylex",
    "useAdUnitImpressionLoggerRoot",
    "useCometGHLRHCSurvey",
    "useCometRightRailGHLAriaLabelledBys",
    "useGHLRHCLinkProps",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        adContent: { alignItems: "bp9cbjyn", display: "j83agx80" },
        image: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          display: "a8c37x1j",
          maxWidth: "d2edcug0",
          minHeight: "kltspiyx",
        },
        imageContainer: {
          alignSelf: "o8rfisnq",
          flexShrink: "pfnyh3mw",
          width: "pfqjqu37",
        },
        subtitle: { textTransform: "gc8qjt7d" },
        textContainer: { paddingStart: "tw6a2znq" },
      };
    function a(a) {
      var b = a.fbclid,
        d = a.adImage,
        e = a.lynxMode,
        f = a.targetUrl,
        g = a.sideAd,
        l = a.updateAdUnitVisibility,
        m = a.subattachments,
        n = c("useCometRightRailGHLAriaLabelledBys")(h._("Advertiser link")),
        o = n.ariaLabelledByProps,
        p = n.ariaLabelledByRef,
        q = n.fallbackAriaLabelFbt;
      n = n.portaledAriaLabel;
      f = c("useGHLRHCLinkProps")(f, "nofollow", "_blank");
      var r = f.linkAttributes,
        s = f.unshimAttributes;
      f = babelHelpers["extends"]({}, r);
      q != null && (f = babelHelpers["extends"]({}, f, { "aria-label": q }));
      r = c("useCometGHLRHCSurvey")({
        impressionToken: a.impressionToken,
        location: "RHC",
      });
      q = c("useAdUnitImpressionLoggerRoot")(
        a.impressionToken,
        !0,
        !0,
        c("gkx")("1179641")
      );
      q = c("mergeRefs")(q, r);
      r = i.jsx(c("TetraTextPairing.react"), {
        body: i.jsx("div", {
          className: c("stylex")(j.subtitle),
          children: a.adSubtitle,
        }),
        bodyColor: "secondary",
        bodyLineLimit: 2,
        headline: a.adTitle,
        headlineLineLimit: 3,
        level: 4,
        reduceEmphasis: !0,
      });
      g = i.jsx(c("CometHomeRightSideEgoMenuSection.react"), {
        hidden: !a.menuButtonVisible,
        menuSideAdId: a.menuSideAdId,
        onMenuStateChange: a.setMenuOpened,
        sidead: g,
        updateAdUnitVisibility: l,
      });
      return i.jsx("div", {
        onFocus: s,
        onMouseEnter: function () {
          a.handleMouseEnter(), s();
        },
        onMouseLeave: a.handleMouseLeave,
        ref: q,
        children: i.jsx(
          c("CometLegacyClickableListItemBase.react"),
          babelHelpers["extends"]({ fbclid: b, lynxMode: e }, f, {
            right: g,
            children: i.jsxs(
              "span",
              babelHelpers["extends"]({}, o, {
                ref: p,
                children: [
                  n,
                  i.jsxs("div", {
                    className: c("stylex")(j.adContent),
                    children: [
                      i.jsx("div", {
                        className: c("stylex")(j.imageContainer),
                        children:
                          d != null
                            ? i.jsx(c("CometImage.react"), {
                                src: d,
                                xstyle: j.image,
                              })
                            : k(m),
                      }),
                      i.jsx("div", {
                        className: c("stylex")(j.textContainer),
                        children: r,
                      }),
                    ],
                  }),
                ],
              })
            ),
          })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      if (a == null || a.length < 2) return null;
      else return l(a[0]);
    }
    function l(a) {
      var b = a.imageUri;
      a = a.url;
      return b == null || a == null
        ? null
        : i.jsx(c("CometAdsSideFeedUnitCarouselCard.react"), {
            imageUri: b,
            url: a,
          });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometAdsSideFeedUnitItemListLayoutWrapper.react",
  [
    "CometAdsSideFeedUnitItemListLayout.react",
    "CometAdsSideFeedUnitItemListLayoutWrapper_sidead.graphql",
    "CometRelay",
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
          : (h = b("CometAdsSideFeedUnitItemListLayoutWrapper_sidead.graphql")),
        a.menuSideAd
      );
      a.menuSideAd;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["menuSideAd"]);
      return i.jsx(
        c("CometAdsSideFeedUnitItemListLayout.react"),
        babelHelpers["extends"]({ menuSideAdId: e == null ? void 0 : e.id }, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometAdsSideFeedUnitItem.react",
  [
    "CometAdsSideFeedUnitItemHiddenContent.react",
    "CometAdsSideFeedUnitItemListLayoutWrapper.react",
    "CometAdsSideFeedUnitItem_sidead.graphql",
    "CometFeedStoryClickLoggerImpl.react",
    "CometRelay",
    "CometTrackingCodeContext",
    "CometTrackingNodeProvider.react",
    "FBLogger",
    "ODS",
    "gkx",
    "react",
    "recoverableViolation",
    "useMenuButtonVisibilityState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useMemo,
      m = e.useState;
    function a(a) {
      var e,
        f,
        g,
        n,
        o = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("CometAdsSideFeedUnitItem_sidead.graphql")),
          a.sidead
        ),
        p = m(null),
        q = p[0];
      p = p[1];
      var r = m(!1),
        s = r[0];
      r = r[1];
      var t = m(!1),
        u = t[0];
      t = t[1];
      var v = q == null ? void 0 : q.rhc_ad,
        w =
          q == null
            ? void 0
            : (e = q.sponsored_data) == null
            ? void 0
            : e.client_token,
        x =
          q == null
            ? void 0
            : (e = q.sponsored_data) == null
            ? void 0
            : e.click_tracking_linkshim_cb,
        y =
          q == null
            ? void 0
            : (e = q.sponsored_data) == null
            ? void 0
            : e.ad_id;
      e = m(!1);
      var z = e[0],
        A = e[1];
      e = m(!1);
      var B = e[0],
        C = e[1];
      e = l(
        function () {
          var a;
          return {
            click_tracking_linkshim_cb: [(a = x) != null ? a : ""],
            encrypted_click_tracking: [],
            encrypted_tracking: ['{"ei":"' + ((a = w) != null ? a : "") + '"}'],
          };
        },
        [x, w]
      );
      var D = j(function (a, b) {
          C(b), A(!a);
        }, []),
        E = c("useMenuButtonVisibilityState")(),
        F = E[0];
      E = E[1];
      var G = E.setListItemHovered;
      E = E.setMenuOpened;
      var H = j(
          function () {
            G(!1);
          },
          [G]
        ),
        I = j(
          function () {
            G(!0);
          },
          [G]
        );
      k(
        function () {
          s &&
            (c("FBLogger")("feed_ads").mustfix(
              "CometAdsSideFeedUnitItem - unsupported_ad, adid - %s",
              y
            ),
            d("ODS").bumpEntityKey(
              144,
              "feed_ads",
              "CometAdsSideFeedUnitItem.unsupported_ad"
            ));
        },
        [y, s]
      );
      k(
        function () {
          u &&
            d("ODS").bumpEntityKey(
              144,
              "feed_ads",
              "CometAdsSideFeedUnitItem.same_ad_repeated"
            );
        },
        [u]
      );
      k(
        function () {
          var a;
          if (v == null) return;
          v.web_link == null
            ? c("recoverableViolation")(
                "rhcAd web_link must not be null",
                "comet_infra"
              )
            : ((a = v.web_link) == null ? void 0 : a.url) !== v.target_url &&
              c("recoverableViolation")(
                "rhcAd web_link field must be equal to target_url field",
                "comet_infra"
              );
        },
        [v]
      );
      if ((o == null ? void 0 : o.rhc_ad) != null && q !== o) {
        if (q != null) {
          var J;
          (q == null
            ? void 0
            : (J = q.sponsored_data) == null
            ? void 0
            : J.ad_id) ===
            (o == null
              ? void 0
              : (J = o.sponsored_data) == null
              ? void 0
              : J.ad_id) &&
          (q == null
            ? void 0
            : (J = q.sponsored_data) == null
            ? void 0
            : J.client_token) !==
            (o == null
              ? void 0
              : (J = o.sponsored_data) == null
              ? void 0
              : J.client_token)
            ? t(!0)
            : t(!1);
          (q == null
            ? void 0
            : (J = q.sponsored_data) == null
            ? void 0
            : J.ad_id) !==
            (o == null
              ? void 0
              : (t = o.sponsored_data) == null
              ? void 0
              : t.ad_id) && A(!1);
        }
        r(!1);
        p(o);
        return null;
      }
      if (v == null) return null;
      if (w == null || y == null) {
        r(!0);
        return null;
      }
      if (z)
        return i.jsx(c("CometAdsSideFeedUnitItemHiddenContent.react"), {
          adId: y,
          hasBottomDivider: a.hasBottomDivider,
          impressionToken: w,
          isAdReported: B,
          updateRHCAdVisibility: D,
        });
      J = v.actor;
      if (J == null) {
        r(!0);
        return null;
      }
      t = J.name;
      z = (p = J.profile_picture) == null ? void 0 : p.uri;
      a = v.image;
      B = v.title;
      J = v.subtitle;
      p = v.description;
      var K = v.attachments;
      f = (f = v.web_link) == null ? void 0 : f.fbclid;
      g = (g = v.web_link) == null ? void 0 : g.lynx_mode;
      n =
        v.web_link != null &&
        ((n = v.web_link) == null ? void 0 : n.url) === v.target_url &&
        c("gkx")("1616314")
          ? (n = v.web_link) == null
            ? void 0
            : n.url
          : v.target_url;
      if (t == null || z == null || B == null || n == null) {
        r(!0);
        return null;
      }
      if (a == null && K == null) {
        r(!0);
        return null;
      }
      var L = a == null ? void 0 : a.uri;
      if (a != null && L == null) {
        r(!0);
        return null;
      }
      a = [];
      if (K !== null && K.length !== 0) {
        r = K[0];
        r = (K = r.all_subattachments) == null ? void 0 : K.nodes;
        if (r != null && r.length === 2) {
          K = {
            imageUri:
              (K = r[0].media) == null
                ? void 0
                : (K = K.image) == null
                ? void 0
                : K.uri,
            url: r[0].url,
          };
          a[0] = K;
          K = {
            imageUri:
              (K = r[1].media) == null
                ? void 0
                : (K = K.image) == null
                ? void 0
                : K.uri,
            url: r[1].url,
          };
          a[1] = K;
        }
      }
      r = {
        actorName: t,
        actorProfilePicture: z,
        adDescription: p,
        adImage: L,
        adSubtitle: J,
        adTitle: B,
        fbclid: f,
        handleMouseEnter: I,
        handleMouseLeave: H,
        impressionToken: w,
        lynxMode: g,
        menuButtonVisible: F,
        menuSideAd: o,
        setMenuOpened: E,
        sideAd: q,
        subattachments: a,
        targetUrl: n,
        updateAdUnitVisibility: D,
      };
      K = i.jsx(c("CometTrackingCodeContext").Provider, {
        value: e,
        children: i.jsx(c("CometFeedStoryClickLoggerImpl.react"), {
          children: i.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 85,
            children: i.jsx(
              c("CometAdsSideFeedUnitItemListLayoutWrapper.react"),
              babelHelpers["extends"]({}, r),
              w
            ),
          }),
        }),
      });
      return i.jsx("div", { "data-testid": void 0, children: K });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometAdsSideFeedUnit.react",
  [
    "fbt",
    "CometAdPreviewContext",
    "CometAdsSideFeedUnitItem.react",
    "CometAdsSideFeedUnit_adsSideFeedUnit.graphql",
    "CometHomeRightRailUnit.react",
    "CometRelay",
    "CometUnitHeader.react",
    "cr:1815922",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = window.atob && window.atob("c3BvbnNvcmVkX2Fk"),
      l = c("gkx")("1151060");
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("CometAdsSideFeedUnit_adsSideFeedUnit.graphql")),
        a.adsSideFeedUnit
      );
      var f = d("CometAdPreviewContext").useCometAdPreviewContext(),
        g = (e = a.ads) == null ? void 0 : e.nodes;
      e = a == null ? void 0 : a.ghl_label;
      a = h._("Sponsored");
      if (g == null || g.length < 1) return null;
      return f
        ? j.jsx(c("CometAdsSideFeedUnitItem.react"), {
            hasBottomDivider: !0,
            sidead: g[0],
          })
        : j.jsx(c("CometHomeRightRailUnit.react"), {
            header: j.jsx(c("CometUnitHeader.react"), {
              headline:
                b("cr:1815922") && e != null
                  ? j.jsx(b("cr:1815922"), {
                      label: e,
                      location: "rhc",
                      text: a,
                      withTextDecoration: !1,
                    })
                  : a,
              headlineColor: "secondary",
              level: 3,
            }),
            children: g.map(function (a, b) {
              return j.jsx(
                "div",
                {
                  className: l ? k : "",
                  children: j.jsx(c("CometAdsSideFeedUnitItem.react"), {
                    hasBottomDivider: b !== g.length - 1,
                    sidead: a,
                  }),
                },
                "rhc_" + b
              );
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
