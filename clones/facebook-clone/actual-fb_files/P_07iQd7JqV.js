if (self.CavalryLogger) {
  CavalryLogger.start_js(["e7CDZD0"]);
}

__d(
  "CometFeedUnitCard_feedUnit.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedUnitCard_feedUnit",
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
          ],
          type: "Story",
          abstractKey: null,
        },
      ],
      type: "FeedUnit",
      abstractKey: "__isFeedUnit",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedUnitErrorBoundary_feedUnit.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedUnitErrorBoundary_feedUnit",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
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
                  name: "__typename",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Story",
          abstractKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedUnitEventLogger_feedUnit",
        },
      ],
      type: "FeedUnit",
      abstractKey: "__isFeedUnit",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedUnit_feedUnit.graphql",
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
        name: "CometFeedUnit_feedUnit",
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
                kind: "ScalarField",
                name: "debug_info",
                storageKey: null,
              },
              a,
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
                    name: "ad_id",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Group",
                    kind: "LinkedField",
                    name: "associated_group",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "context_actor_hovercard",
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
            type: "Story",
            abstractKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedUnitCard_feedUnit",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedUnitContainerSection_feedUnit",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedUnitErrorBoundary_feedUnit",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedUnit_trackableFeedUnit",
          },
        ],
        type: "FeedUnit",
        abstractKey: "__isFeedUnit",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedUnit_trackableFeedUnit.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedUnit_trackableFeedUnit",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TrackingData",
          kind: "LinkedField",
          name: "trackingdata",
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
        {
          kind: "InlineFragment",
          selections: [
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
      type: "TrackableFeedUnit",
      abstractKey: "__isTrackableFeedUnit",
    };
    e.exports = a;
  },
  null
);
__d(
  "useCometFeedUnitEventLogger_feedUnit.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          concreteType: "QuickPromotionFeedUnitItem",
          kind: "LinkedField",
          name: "quick_promotion_items",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "QuickPromotion",
              kind: "LinkedField",
              name: "quick_promotion",
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
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useCometFeedUnitEventLogger_feedUnit",
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
            selections: a,
            type: "QuickPromotionFeedUnit",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: a,
            type: "QuickPromotionNativeTemplateFeedUnit",
            abstractKey: null,
          },
        ],
        type: "FeedUnit",
        abstractKey: "__isFeedUnit",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedUnitContainerSection_feedUnit.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedUnitContainerSection_feedUnit",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometFeedUnitStoryStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "Story",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometFeedUnitGoodwillMemoryStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "GoodwillCometStory",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometPYMKQPFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "PaginatedPeopleYouMayKnowFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometFriendRequestsFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "FriendRequestsFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometFeedUnitQuickPromotionStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "QuickPromotionNativeTemplateFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "GroupsCometGYSJFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "GroupsYouShouldJoinFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometGroupsSuggestionFeedUnitStrategy_unit",
              fragmentPropName: "unit",
              kind: "ModuleImport",
            },
          ],
          type: "GroupsSuggestionUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometPYMIQPFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "PaginatedGroupsPeopleYouMayInviteFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometPYMAQPFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "PagesYouMayAdvertiseFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "GeminiPYSFQPFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "PeopleYouShouldFollowAtWorkFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometSPFFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "SuggestedPublicEntitiesToFollowFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CoronavirusCommunityHelpFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "CoronavirusCommunityHelpFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometMarketplaceShowcaseFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "ShowcaseMarketplaceFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometEndOfFeedUpsellStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "EndOfFeedUpsellFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometInterestBasedGYSJFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "InterestBasedGYSJFeedUnit",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometFeedUnitContainerSection_feedUnit",
              fragmentName: "CometInterestBasedIFRFeedUnitStrategy_feedUnit",
              fragmentPropName: "feedUnit",
              kind: "ModuleImport",
            },
          ],
          type: "InterestBasedIFRFeedUnit",
          abstractKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedUnitUnknownFeedUnitStrategy_feedUnit",
        },
      ],
      type: "FeedUnit",
      abstractKey: "__isFeedUnit",
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFocusHighlightedContent.react",
  ["FocusManager", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useRef,
      m = h.createContext(null);
    function a(a) {
      var b = j(m);
      k(
        function () {
          if (!a) return;
          var c = a.current;
          if (!c || !b) return;
          var e = document.activeElement;
          (!e || e.hasAttribute("aria-busy") || !b(e)) &&
            d("FocusManager").focusElement(c, {
              focusWithoutUserIntent: !0,
              preventScroll: !0,
            });
        },
        [b, a]
      );
    }
    function b(a) {
      var b = a.children;
      a = a.disabled;
      var d = l(null),
        e = i(function (a) {
          var b = d.current;
          return b ? b.containsNode(a) : !1;
        }, []);
      return !c("gkx")("1756645")
        ? b
        : h.jsx(m.Provider, { value: a ? null : e, children: b });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.useCometFocusHighlightedContent = a;
    g.CometFocusHighlightedContent = b;
  },
  98
);
__d(
  "CometDirectionalDockingView.sticky.react",
  [
    "$InternalEnum",
    "BaseScrollableAreaContext",
    "BaseViewportMarginsContext",
    "ReactDOMComet",
    "react",
    "stylex",
    "useMergeRefs",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useRef,
      m = e.useState,
      n = { main: { position: "lpgh02oy" } },
      o = b("$InternalEnum")({ Down: 0, Up: 1 }),
      p = Object.freeze({});
    function a(a) {
      var b = a.bottomStickyAdjustment_DO_NOT_USE,
        e = b === void 0 ? 0 : b;
      b = a.top;
      b = b === void 0 ? 16 : b;
      var f = a.bottom;
      f = f === void 0 ? b : f;
      var g = a.children,
        q = a.tagName;
      q = q === void 0 ? "div" : q;
      a = a.xstyle;
      var r = j(c("BaseScrollableAreaContext")),
        s = j(c("BaseViewportMarginsContext")),
        t = b + s.top,
        u = f + s.bottom;
      b = m(0);
      f = b[0];
      var v = b[1];
      s = m(p);
      b = s[0];
      var w = s[1],
        x = i(
          function () {
            return r.length > 0 ? r[r.length - 1].getDOMNode() : window;
          },
          [r]
        ),
        y = i(
          function () {
            var a = x();
            if (a == null) return null;
            if (window.HTMLElement != null) {
              return a instanceof HTMLElement
                ? a.getBoundingClientRect().height
                : (a = a.innerHeight) != null
                ? a
                : null;
            }
            return null;
          },
          [x]
        ),
        z = l(null),
        A = l(y());
      s = i(function (a) {
        a = a.height;
        z.current = a;
      }, []);
      s = c("useResizeObserver")(s);
      var B = l(0),
        C = l(null),
        D = l(null),
        E = l(null);
      s = c("useMergeRefs")(s, D);
      var F = i(
          function (a) {
            a = a.top;
            var b = B.current,
              c = C.current;
            b = a > b ? o.Down : o.Up;
            var f = D.current,
              g = E.current;
            if (f == null || g == null) return;
            B.current = a;
            C.current = b;
            if (b === c) return;
            c = (a = A.current) != null ? a : y();
            if (c == null) return;
            a = f.getBoundingClientRect();
            f = g.getBoundingClientRect();
            g = a.height;
            var h = a.top - f.top,
              i;
            if (g < c - t - u) (h = 0), (i = { top: t });
            else
              switch (b) {
                case o.Down:
                  a = Math.round(Math.min(t, c - u - g));
                  i = { top: a };
                  break;
                case o.Up:
                  f = Math.round(Math.min(u, c - t - g));
                  i = { bottom: f + e };
              }
            d("ReactDOMComet").flushSync(function () {
              w(function (a) {
                if (i.top != null && a.top != null && i.top === a.top) return a;
                return i.bottom != null &&
                  a.bottom != null &&
                  i.bottom === a.bottom
                  ? a
                  : (a = i) != null
                  ? a
                  : p;
              }),
                v(h);
            });
          },
          [u, t, y]
        ),
        G = i(
          function () {
            var a = x();
            return a == null
              ? { left: 0, top: 0 }
              : a instanceof HTMLElement
              ? { left: a.scrollLeft, top: a.scrollTop }
              : { left: a.scrollY, top: a.scrollY };
          },
          [x]
        );
      k(
        function () {
          var a = x();
          if (a != null) {
            var b = function () {
              F(G());
            };
            a.addEventListener("scroll", b);
            return function () {
              a.removeEventListener("scroll", b);
            };
          }
        },
        [x, G, F]
      );
      k(
        function () {
          var a = function () {
            A.current = y();
            var a = C.current;
            C.current = null;
            var b = G();
            F({ left: b.left, top: b.top + (a === o.Up ? -1 : 1) });
          };
          window.addEventListener("resize", a);
          return function () {
            window.removeEventListener("resize", a);
          };
        },
        [G, F, y]
      );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", { ref: E, style: { height: f } }),
          h.jsx(q, {
            className: c("stylex")(n.main, a),
            ref: s,
            style: b,
            children: g,
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
  "useMergeCometAriaProps",
  ["useSetAttributeRef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b;
      for (
        var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
        f < d;
        f++
      )
        e[f - 1] = arguments[f];
      var g = e
          .reduce(function (b, c) {
            Object.prototype.hasOwnProperty.call(c, a) &&
              typeof c[a] === "string" &&
              b.push(c[a]);
            return b;
          }, [])
          .join(" "),
        h = c("useSetAttributeRef")(a, g);
      return [((b = {}), (b[a] = g), (b.suppressHydrationWarning = !0), b), h];
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedModuleFeedBottomCollisionQPLEvent",
  ["cr:9416"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:9416");
  },
  98
);
__d(
  "CometFeedInfiniteScrollSuspenseList.react",
  [
    "CometEventListener",
    "CometFeedGlimmer.react",
    "CometFeedTailLoadBufferHeight",
    "CometInfiniteScrollSuspenseList.react",
    "CometInfiniteScrollSuspenseListIncrementalRenderer.react",
    "CometInteractionSourceContext",
    "FBLogger",
    "FeedModuleFeedBottomCollisionQPLEvent",
    "QuickPerformanceLogger",
    "WebConnectionClassServerGuess",
    "gkx",
    "react",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useMemo,
      k = b.useState;
    function a(a) {
      var b = a.incrementalRendering;
      b = b === void 0 ? !0 : b;
      var d = a.waitOnScrollIntent,
        e = a.children,
        f = a.hasMore,
        g = a.incrementalRenderingPageSizes,
        l = a.interactionSource,
        m = a.isLoading,
        n = a.onLoadMore,
        o = a.pageletName,
        p = a.positionLimitForSSR,
        q = a.revealOrder;
      c("gkx")("659") && ((b = !1), (d = !1));
      a = k(!1);
      var r = a[0],
        s = a[1];
      i(
        function () {
          if (!r) {
            var a = window.scrollY,
              b = c("CometEventListener").capture(
                window,
                "scroll",
                function (b) {
                  b.target === window.document && window.scrollY !== a && s(!0);
                }
              );
            return function () {
              b.remove();
            };
          }
        },
        [r]
      );
      a = j(
        function () {
          return {
            onVisible: function () {
              c("QuickPerformanceLogger").markEvent(
                c("FeedModuleFeedBottomCollisionQPLEvent"),
                "collision_happened",
                7,
                {
                  annotations: {
                    bool: { had_demonstrated_scroll_intent: r },
                    int: { interaction_source: l },
                  },
                }
              );
            },
          };
        },
        [l, r]
      );
      a = c("useVisibilityObserver")(a);
      var t = j(
        function () {
          var a;
          if (d === !0 && !r) return 0;
          var b;
          switch (c("WebConnectionClassServerGuess").connectionClass) {
            case "UNKNOWN":
            case "EXCELLENT":
            default:
              b = c("CometFeedTailLoadBufferHeight").EXCELLENT;
              break;
            case "GOOD":
              b = c("CometFeedTailLoadBufferHeight").GOOD;
              break;
            case "MODERATE":
              b = c("CometFeedTailLoadBufferHeight").MODERATE;
              break;
            case "POOR":
              b = c("CometFeedTailLoadBufferHeight").POOR;
              break;
          }
          b == null &&
            (c("FBLogger")("comet_feed").mustfix(
              "Found no tail load buffer height value for the connection class `%s`. Falling back to 2500px.",
              c("WebConnectionClassServerGuess").connectionClass
            ),
            (b = 2500));
          return (a = {}), (a[q === "backwards" ? "top" : "bottom"] = b), a;
        },
        [q, r, d]
      );
      a = {
        endGlimmerRef: a,
        hasMore: f,
        isLoading: m,
        listGlimmer: h.jsx(c("CometFeedGlimmer.react"), {}),
        onLoadMore: n,
        pageletName: o,
        positionLimitForSSR: p,
        revealOrder: q,
        rootMargin: t,
      };
      if (b && (q == null || q === "forwards"))
        return h.jsx(c("CometInteractionSourceContext").Provider, {
          value: l,
          children: h.jsx(
            c("CometInfiniteScrollSuspenseListIncrementalRenderer.react"),
            babelHelpers["extends"]({ pageSizes: g }, a, { children: e })
          ),
        });
      else
        return h.jsx(c("CometInteractionSourceContext").Provider, {
          value: l,
          children: h.jsx(
            c("CometInfiniteScrollSuspenseList.react"),
            babelHelpers["extends"]({}, a, { children: e })
          ),
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedSection.react",
  ["CometUnitHeader.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.meta,
        d = a.sectionContents,
        e = a.title;
      a = a.widthStyle;
      a = a === void 0 ? "none" : a;
      return h.jsxs("div", {
        className: a === "full" ? "k4urcfbm" : "",
        "data-testid": void 0,
        role: "feed",
        children: [
          h.jsx("div", {
            className: "f10w8fjw ocgrx2df tmqn73lw",
            children: h.jsx(c("CometUnitHeader.react"), {
              headline: e,
              headlineColor: "secondary",
              level: 4,
              meta: b,
            }),
          }),
          d,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedUnitBorderContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(void 0);
    g["default"] = b;
  },
  98
);
__d(
  "CometFeedUnitCard.react",
  [
    "CometCard.react",
    "CometFeedARIAProperties.react",
    "CometFeedHighlightedStoriesContext",
    "CometFeedStoryAttachmentCommandWidget",
    "CometFeedUnitBorderContext",
    "CometFeedUnitCard_feedUnit.graphql",
    "CometFocusHighlightedContent.react",
    "CometHideableComponent.react",
    "CometKeyCommandWrapper.react",
    "CometRelay",
    "FocusWithinHandler.react",
    "UserAgent",
    "mergeRefs",
    "react",
    "useCometAriaID",
    "useCometScrollAnchor",
    "useMergeCometAriaProps",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useMemo,
      l = e.useRef,
      m = e.useState;
    function a(a) {
      var e = a.children,
        f = a.position;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometFeedUnitCard_feedUnit.graphql")),
        a.feedUnit
      );
      a = a.id;
      var g = c("useCometAriaID")("aria-labelledby"),
        n = g[0],
        o = n[0],
        p = n[1];
      n = g[1];
      var q = n[0];
      g = n[1];
      n = c("useCometAriaID")("aria-describedby");
      var r = n[0],
        s = r[0],
        t = r[1];
      r = n[1];
      n = r[0];
      r[1];
      r = c("useCometAriaID")("aria-describedby");
      var u = r[0],
        v = u[0],
        w = u[1];
      u = r[1];
      r = u[0];
      u[1];
      u = c("useCometAriaID")("aria-describedby");
      var x = u[0],
        y = x[0],
        z = x[1];
      x = u[1];
      u = x[0];
      x[1];
      x = c("useCometAriaID")("aria-describedby");
      var A = x[0],
        B = A[0],
        C = A[1];
      A = x[1];
      x = A[0];
      A[1];
      A = c("useCometAriaID")("aria-describedby");
      var D = A[0],
        E = D[0],
        F = D[1];
      D = A[1];
      A = D[0];
      D[1];
      D = c("useMergeCometAriaProps")("aria-describedby", n, r, u, A, x);
      var G = D[0];
      n = D[1];
      var H = k(
        function () {
          return {
            attachmentTargetProps: y,
            attachmentTargetRef: z,
            commentCountTargetProps: B,
            commentCountTargetRef: C,
            contentTargetProps: v,
            contentTargetRef: w,
            metaTargetProps: s,
            metaTargetRef: t,
            reactionTargetProps: E,
            reactionTargetRef: F,
            titleTargetProps: o,
            titleTargetRef: p,
          };
        },
        [y, z, B, C, v, w, s, t, E, F, o, p]
      );
      r = j(c("CometFeedHighlightedStoriesContext"));
      u = a != null && r != null && r.has(a);
      A = m(u);
      var I = A[0],
        J = A[1];
      x = d("useCometScrollAnchor").useCometScrollAnchor("feed-story", a, {
        onScrollComplete: function () {
          return J(!0);
        },
      });
      D = l(null);
      var K = c("mergeRefs")(D, x, n, g);
      d("CometFocusHighlightedContent.react").useCometFocusHighlightedContent(
        u ? D : null
      );
      var L = j(c("CometFeedUnitBorderContext")),
        M =
          c("UserAgent").isBrowser("Chrome") &&
          c("UserAgent").isPlatform("Mac OS X");
      return i.jsx("div", {
        className: "du4w35lb l9j0dhe7",
        children: i.jsx(c("FocusWithinHandler.react"), {
          children: function (a, b) {
            return i.jsx(c("CometKeyCommandWrapper.react"), {
              debugName: "feed_story",
              children: i.jsx(
                c("CometFeedStoryAttachmentCommandWidget").Wrapper,
                {
                  children: i.jsx(
                    "div",
                    babelHelpers["extends"](
                      { "aria-posinset": M ? void 0 : f + 1 },
                      G,
                      q,
                      {
                        className: "lzcic4wl",
                        "data-testid": void 0,
                        ref: K,
                        role: "article",
                        children: i.jsx(c("CometHideableComponent.react"), {
                          children: i.jsx(c("CometCard.react"), {
                            background: "white",
                            border: L,
                            borderHighlightAnimation: I || b,
                            dropShadow: 1,
                            children: i.jsx(
                              c("CometFeedARIAProperties.react").Provider,
                              { value: H, children: e }
                            ),
                          }),
                        }),
                      }
                    )
                  ),
                }
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
  "CometFeedUnitContainerSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedUnitContainerSection_feedUnit.graphql",
    "RelayHooks",
    "cr:1448849",
    "react",
    "usePageletMatchMetadata",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useState,
      l =
        h !== void 0
          ? h
          : (h = b("CometFeedUnitContainerSection_feedUnit.graphql"));
    function a(a) {
      var e = a.onUnsupported,
        f = a.position,
        g = a.variables;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "onUnsupported",
        "position",
        "variables",
      ]);
      a = d("RelayHooks").useFragment(l, a.feedUnit);
      var h = k(!1),
        m = h[0],
        n = h[1];
      h = j(
        function () {
          n(!0), e();
        },
        [e]
      );
      c("usePageletMatchMetadata")("feed_unit", a);
      if (!m)
        return i.jsx(c("CometFeedMatchRenderer.react"), {
          match: a,
          matchRequired: !0,
          onUnsupported: h,
          props: { position: f, variables: g },
          section: "feed_unit",
          trackingData: null,
        });
      return b("cr:1448849") != null
        ? i.jsx(b("cr:1448849"), { feedUnit: a, position: f })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "useCometFeedUnitEventLogger",
  [
    "CometFeedUnitsTypedLoggerLite",
    "CometRelay",
    "react",
    "useCometFeedUnitEventLogger_feedUnit.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback;
    function a(a) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useCometFeedUnitEventLogger_feedUnit.graphql")),
        a
      );
      return i(
        function (a) {
          var b = a.category,
            d = a.errorName,
            f = a.event,
            g = a.numCommitsBeforeError,
            h = a.position;
          a = a.renderLocation;
          var i = [];
          e.quick_promotion_items != null &&
            (i = e.quick_promotion_items
              .map(function (a) {
                return (a = a.quick_promotion) == null ? void 0 : a.id;
              })
              .filter(Boolean));
          c("CometFeedUnitsTypedLoggerLite").log({
            category: b,
            error_name: d,
            event: f,
            num_commits_before_error: g,
            position: h,
            related_ids: i,
            render_location: a,
            unit_name: e.__typename,
          });
        },
        [e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedUnitErrorBoundary.react",
  [
    "CometErrorBoundary.react",
    "CometFeedUnitErrorBoundary_feedUnit.graphql",
    "CometFeedUnitOnFeedUnitErrorContext",
    "CometFeedUnitSetStatusContext",
    "CometFeedUnitShouldPropagateErrorContext",
    "CometRelay",
    "InteractionTracingMetrics",
    "cr:1448848",
    "emptyFunction",
    "gkx",
    "react",
    "useCometFeedUnitEventLogger",
    "useCommitCountRef",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useState;
    function a(a) {
      var e = a.category,
        f = a.children,
        g = a.feedUnit,
        m = a.onError,
        n = a.position,
        o = a.renderLocation;
      a = l(null);
      var p = a[0],
        q = a[1],
        r = c("useCommitCountRef")();
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedUnitErrorBoundary_feedUnit.graphql")),
        g
      );
      var s = k(
          d("CometFeedUnitSetStatusContext").CometFeedUnitSetStatusContext
        ),
        t = c("useCometFeedUnitEventLogger")(a);
      g = j(
        function (a) {
          q(a),
            s("error"),
            t({
              category: e,
              errorName: a.message,
              event: "js_error",
              numCommitsBeforeError: r.current,
              position: n,
              renderLocation: o !== "%future added value" ? o : void 0,
            }),
            c("InteractionTracingMetrics")
              .currentInteractionLogger()
              .addMetadata("feedUnitError", 1),
            m != null && m(a);
        },
        [r, e, t, m, n, o, s]
      );
      if (p != null)
        return b("cr:1448848") != null
          ? i.jsx(b("cr:1448848"), { error: p })
          : null;
      p = a.sponsored_data != null;
      a = p ? c("gkx")("1460645") : c("gkx")("1460646");
      return i.jsx(c("CometErrorBoundary.react"), {
        context: { project: "CometFeedUnitErrorBoundary" },
        onError: g,
        children: i.jsx(
          c("CometFeedUnitShouldPropagateErrorContext").Provider,
          {
            value: !0,
            children: i.jsx(c("CometFeedUnitOnFeedUnitErrorContext").Provider, {
              value: a ? c("emptyFunction") : g,
              children: f,
            }),
          }
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedUnitSetDebugInfoContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(c("emptyFunction"));
    g["default"] = b;
  },
  98
);
__d(
  "CometOffscreenScrollCompensator.react",
  ["cr:10000", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    e = (c = b("cr:10000")) != null ? c : a.Fragment;
    g["default"] = e;
  },
  98
);
__d(
  "CometFeedUnit.react",
  [
    "ActorHovercardContext",
    "CometErrorProjectContext",
    "CometFeedUnitCard.react",
    "CometFeedUnitContainerSection.react",
    "CometFeedUnitErrorBoundary.react",
    "CometFeedUnitLoadingContext",
    "CometFeedUnitLoggingContext",
    "CometFeedUnitOnUnsupportedLoggerContext",
    "CometFeedUnitQueryVariablesContext",
    "CometFeedUnitSetDebugInfoContext",
    "CometFeedUnitSetStatusContext",
    "CometFeedUnit_feedUnit.graphql",
    "CometFeedUnit_trackableFeedUnit.graphql",
    "CometHovercardGroupContext",
    "CometOffscreenScrollCompensator.react",
    "CometProfiler.react",
    "CometRelay",
    "FocusRegion.react",
    "HiddenSubtreePassiveContext",
    "InteractionTracingMetrics",
    "cr:1829844",
    "deferredLoadComponent",
    "gkx",
    "joinClasses",
    "react",
    "requireDeferred",
    "unrecoverableViolation",
    "useActorHovercardContext",
    "useLayoutEffect_SAFE_FOR_SSR",
    "useMergeRefs",
    "useStoryViewabilityLogger",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = c("deferredLoadComponent")(
        c("requireDeferred")(
          "CometFeedUnitLoadingIndicatorMask.react"
        ).__setRef("CometFeedUnit.react")
      ),
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useMemo,
      p = e.useRef,
      q = e.useState,
      r = window.atob && window.atob("c3BvbnNvcmVkX2Fk"),
      s = h !== void 0 ? h : (h = b("CometFeedUnit_feedUnit.graphql")),
      t = i !== void 0 ? i : (i = b("CometFeedUnit_trackableFeedUnit.graphql")),
      u = [5, 8];
    function v(a) {
      var b = a.children,
        d = a.debuggingInfoLoggers,
        e = a.focusableRef,
        f = a.loggingRef,
        g = a.visibilityObserverRef;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "debuggingInfoLoggers",
        "focusableRef",
        "loggingRef",
        "visibilityObserverRef",
      ]);
      e = c("useMergeRefs")(e, g, f);
      return k.jsxs(
        "div",
        babelHelpers["extends"]({}, a, { ref: e, children: [d, b] })
      );
    }
    v.displayName = v.name + " [from " + f.id + "]";
    function a(a) {
      var e,
        f = a.category,
        g = a.onError,
        h = a.position,
        i = a.variables;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "category",
        "onError",
        "position",
        "variables",
      ]);
      var w = d("CometRelay").useFragment(s, a.feedUnit);
      if (w == null)
        throw c("unrecoverableViolation")(
          "Relay fragment feedUnit cannot be null/undefined in CometFeedUnit",
          "comet_feed"
        );
      var x = d("CometRelay").useFragment(t, w),
        y = x.client_view_config,
        z = x.trackingdata;
      x = x.viewability_config;
      z = (z = z) != null ? z : {};
      z = z.id;
      var A = i.renderLocation,
        B = q(!1),
        C = B[0],
        D = B[1];
      B = o(function () {
        return {
          onFinishLoading: function () {
            return D(!1);
          },
          onStartLoading: function () {
            return D(!0);
          },
        };
      }, []);
      var E = (e = w.feedback) == null ? void 0 : e.associated_group;
      e = E == null ? void 0 : E.context_actor_hovercard;
      var F = c("useActorHovercardContext")();
      e = (e = e) != null ? e : F;
      F = o(
        function () {
          var a;
          return {
            groupID: (a = E == null ? void 0 : E.id) != null ? a : void 0,
          };
        },
        [E == null ? void 0 : E.id]
      );
      var G = m(
          d("CometFeedUnitSetStatusContext").CometFeedUnitSetStatusContext
        ),
        H = p(!1),
        I = m(
          d("CometFeedUnitOnUnsupportedLoggerContext")
            .CometFeedUnitOnUnsupportedLoggerContext
        ),
        J = p(null);
      c("useLayoutEffect_SAFE_FOR_SSR")(
        function () {
          h === 0 &&
            H.current === !1 &&
            c("InteractionTracingMetrics")
              .currentInteractionLogger()
              .addMarkerPoint("FirstFeedUnitMount", "AppTiming"),
            (H.current = !0);
        },
        [h]
      );
      n(
        function () {
          return G("rendered");
        },
        [G]
      );
      var K = l(
          function () {
            c("InteractionTracingMetrics")
              .currentInteractionLogger()
              .addMetadata("unsupportedFeedUnit", 1),
              I(),
              G("error");
          },
          [I, G]
        ),
        L = m(c("CometFeedUnitSetDebugInfoContext")),
        M = w.debug_info,
        N = w.id,
        O = p(!1),
        P = m(c("HiddenSubtreePassiveContext")),
        Q = l(
          function () {
            if (!P.getCurrentState().hiddenOrBackgrounded_FIXME) {
              var a;
              L(h, {
                debugInfo: (a = M) != null ? a : null,
                storyId: (a = N) != null ? a : null,
                visible: O.current,
              });
            }
          },
          [M, P, N, h, L]
        ),
        R = l(
          function () {
            (O.current = !1), Q();
          },
          [Q]
        ),
        S = l(
          function () {
            (O.current = !0), Q();
          },
          [Q]
        );
      R = c("useVisibilityObserver")({ onHidden: R, onVisible: S });
      S = {
        can_delay_log_impression:
          y == null ? void 0 : y.can_delay_log_impression,
        use_banzai_signal_imp: y == null ? void 0 : y.use_banzai_signal_imp,
        use_banzai_vital_imp: y == null ? void 0 : y.use_banzai_vital_imp,
      };
      S = c("useStoryViewabilityLogger")({
        clientViewConfig: S,
        encryptedTracking: z,
        position: h,
        viewabilityConfig: (y = x) != null ? y : u,
      });
      z = S.debuggingInfoLoggers;
      x = S.ref;
      n(
        function () {
          return Q();
        },
        [Q]
      );
      y = a["data-testid"];
      a =
        c("gkx")("1151060") &&
        (w == null
          ? void 0
          : (S = w.sponsored_data) == null
          ? void 0
          : S.ad_id) != null;
      y = o(
        function () {
          var a;
          return { position: h, renderLocation: (a = A) != null ? a : null };
        },
        [h, A]
      );
      S = k.jsx(c("CometErrorProjectContext").Provider, {
        value: "comet_feed",
        children: k.jsx(c("CometFeedUnitLoggingContext").Provider, {
          value: y,
          children: k.jsx(c("CometFeedUnitQueryVariablesContext").Provider, {
            value: i,
            children: k.jsx(c("CometFeedUnitLoadingContext").Provider, {
              value: B,
              children: k.jsx(c("CometOffscreenScrollCompensator.react"), {
                children: k.jsx(c("CometProfiler.react"), {
                  id: "CometFeedUnit_" + h,
                  children: k.jsx(d("FocusRegion.react").FocusRegion, {
                    id: "CometFeedUnit_" + h,
                    recoverFocusQuery: null,
                    children: k.jsx("div", {
                      className: c("joinClasses")(
                        "du4w35lb k4urcfbm l9j0dhe7 sjgh65i0",
                        a ? r : ""
                      ),
                      children: k.jsx(c("CometFeedUnitCard.react"), {
                        feedUnit: w,
                        position: h,
                        children: k.jsxs(v, {
                          "data-testid": void 0,
                          debuggingInfoLoggers: z,
                          focusableRef: J,
                          loggingRef: x,
                          visibilityObserverRef: R,
                          children: [
                            k.jsx(c("CometFeedUnitContainerSection.react"), {
                              feedUnit: w,
                              onUnsupported: K,
                              position: h,
                              variables: i,
                            }),
                            C ? k.jsx(j, {}) : null,
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        }),
      });
      b("cr:1829844") != null &&
        (S = k.jsx(b("cr:1829844"), { name: "feed_unit", children: S }));
      return k.jsx(c("CometFeedUnitErrorBoundary.react"), {
        category: f,
        feedUnit: w,
        onError: g,
        position: h,
        renderLocation: A,
        unitTypename: w.__typename,
        children: k.jsx(c("ActorHovercardContext").Provider, {
          value: e,
          children:
            E != null
              ? k.jsx(c("CometHovercardGroupContext").Provider, {
                  value: F,
                  children: S,
                })
              : S,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = k.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometFeedUnitSetDebugInfoContextProvider.react",
  ["CometFeedUnitDebugInfoState", "CometFeedUnitSetDebugInfoContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.children,
        e = a.location;
      a = i(
        function (a, b) {
          return d("CometFeedUnitDebugInfoState").addFeedUnitDebugInfo(e, a, b);
        },
        [e]
      );
      return h.jsx(c("CometFeedUnitSetDebugInfoContext").Provider, {
        value: a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "cometFeedUnitID",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return "CometFeedUnit_" + a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "useCometFeedKeyCommands",
  [
    "CometFeedUnitDebugInfoState",
    "FocusRegion.react",
    "GHLAriaLabelTracker",
    "cometFeedUnitID",
    "cometGetKeyCommandConfig",
    "react",
    "scrollTo",
    "useLayerKeyCommands",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useMemo,
      j = b.useState,
      k = 60 + 16,
      l = function (a, b) {
        return b.role === "article";
      };
    function m(a, b) {
      c("GHLAriaLabelTracker").set();
      a = d("FocusRegion.react").focusRegionById(
        c("cometFeedUnitID")(a),
        l,
        !0
      );
      var e = document.documentElement;
      if (a != null && e != null) {
        e = a.getBoundingClientRect();
        e = e.top + window.pageYOffset - k - ((a = b) != null ? a : 0);
        c("scrollTo")({ behavior: "smooth", top: e });
        return !0;
      }
      return !1;
    }
    function n(a, b) {
      var c = document.activeElement;
      c != null &&
        (c.blur(),
        window.requestAnimationFrame(function () {
          m(a, b);
        }));
    }
    function a(a, b, e) {
      var f = j(-1),
        g = f[0],
        k = f[1],
        l = h(
          function (a) {
            if (b == null) return g;
            var c = d("CometFeedUnitDebugInfoState").getStateSnapshot();
            c = c[b];
            if (c == null) return g;
            c = c.visibleUnits;
            if (
              c.some(function (a) {
                return a.visible && a.position === g;
              })
            )
              return g;
            a = a === "forward" ? c[0] : c[c.length - 1];
            if ((a == null ? void 0 : a.position) === 0) return -1;
            else {
              return (c = a == null ? void 0 : a.position) != null ? c : -1;
            }
          },
          [g, b]
        ),
        o = h(
          function () {
            var b = l("forward");
            if (b < a - 1) {
              var c = b + 1;
              m(c, e) && k(c);
            } else n(b, e);
          },
          [l, a, e]
        ),
        p = h(
          function () {
            var a = l("backward");
            if (a > 0) {
              var b = a - 1;
              m(b, e) && k(b);
            } else n(a, e);
          },
          [l, e]
        );
      f = i(
        function () {
          return [
            d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig(
              "newsfeed",
              "scrollNext",
              o
            ),
            d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig(
              "newsfeed",
              "scrollPrevious",
              p
            ),
          ];
        },
        [o, p]
      );
      c("useLayerKeyCommands")(f);
      return g;
    }
    g["default"] = a;
  },
  98
);
__d(
  "FeedModuleFeedBottomCollisionQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(655653);
    g["default"] = a;
  },
  98
);
