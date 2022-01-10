if (self.CavalryLogger) {
  CavalryLogger.start_js(["t10Yhi2"]);
}

__d(
  "CometFeedStoryLargeMessageRenderingStrategy_message$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometFeedStoryLargeMessageRenderingStrategy_message$normalization",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_prod_eligible",
              storageKey: null,
            },
          ],
          type: "ICometStorySection",
          abstractKey: "__isICometStorySection",
        },
        {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "story",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_text_only_story",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "message",
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
              name: "id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryLargeMessageRenderingStrategy_message.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryLargeMessageRenderingStrategy_message",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "useCometFeedStoryMatchDebugger_iCometStorySection",
        },
        {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "story",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_text_only_story",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "message",
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
          storageKey: null,
        },
      ],
      type: "CometFeedStoryLargeMessageRenderingStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryLargeMessageRenderingStrategy.react",
  [
    "CometEmojiTransform",
    "CometEmoticonTransform",
    "CometFeedARIAProperties.react",
    "CometFeedAggregatedStoriesContext",
    "CometFeedStoryLargeMessageRenderingStrategy_message.graphql",
    "CometFeedStoryMessageBodyRenderers",
    "CometLineBreakTransform",
    "CometRelay",
    "CometTextContext",
    "CometTextWithEntitiesRelay.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "react",
    "recoverableViolation",
    "stylex",
    "useCometFeedStandardAttachedStoryNestingLevel",
    "useCometFeedStoryMatchDebugger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext,
      k = [
        c("CometEmoticonTransform")({ size: 24 }),
        c("CometEmojiTransform")({ size: 24 }),
        c("CometLineBreakTransform"),
      ],
      l = [
        c("CometEmoticonTransform")(),
        c("CometEmojiTransform")(),
        c("CometLineBreakTransform"),
      ],
      m = { color: "primary", type: "body1" },
      n =
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryLargeMessageRenderingStrategy_message.graphql"
            ));
    function a(a) {
      var b,
        e = a.message;
      a = a.suffix;
      var f = j(c("CometFeedAggregatedStoriesContext")),
        g = c("useCometFeedStandardAttachedStoryNestingLevel")();
      e = d("CometRelay").useFragment(n, e);
      c("useCometFeedStoryMatchDebugger")(e);
      b = e == null ? void 0 : (b = e.story) == null ? void 0 : b.message;
      var h = j(c("CometFeedARIAProperties.react"));
      if (b == null)
        return c("recoverableViolation")(
          "storyMessage should not be null in CometFeedStoryLargeMessageRenderingStrategy",
          "comet_feed"
        );
      e =
        (e = (e = e.story) == null ? void 0 : e.is_text_only_story) != null
          ? e
          : !1;
      f = f.hasAggregateParent || g > 0;
      g = {
        className: c("stylex").dedupe(
          {
            "padding-bottom-1": "f10w8fjw",
            "padding-end-1": "hv4rvrfc",
            "padding-start-1": "dati1w0a",
            "padding-top-1": "jb3vyjys",
          },
          f
            ? { "padding-bottom-1": "ihqw7lf3", "padding-top-1": "ecm0bbzt" }
            : null,
          e ? { "padding-bottom-1": "qt6c0cv9" } : null,
          e && f ? { "padding-bottom-1": "e5nlhep0" } : null
        ),
        ref: h.contentTargetRef,
      };
      h.contentTargetProps != null &&
        (g = babelHelpers["extends"]({}, g, h.contentTargetProps));
      e = f ? l : k;
      h = f
        ? i.jsx(c("TetraTextPairing.react"), {
            body: i.jsx(c("CometTextWithEntitiesRelay.react"), {
              renderers: c("CometFeedStoryMessageBodyRenderers"),
              suffix: a,
              textWithEntities: b,
              transforms: e,
              withParagraphs: !0,
            }),
            bodyColor: "primary",
            level: 3,
          })
        : i.jsx("div", {
            className: "f530mmz5 b1v8xokw o0t2es00 oo9gr5id",
            children: i.jsx(c("CometTextWithEntitiesRelay.react"), {
              renderers: c("CometFeedStoryMessageBodyRenderers"),
              suffix:
                a &&
                i.jsx(c("TetraText.react"), { type: "body3", children: a }),
              textWithEntities: b,
              transforms: e,
              withParagraphs: !0,
            }),
          });
      return i.jsx(c("CometTextContext").Provider, {
        value: m,
        children: i.jsx(
          "div",
          babelHelpers["extends"]({ "data-testid": void 0 }, g, { children: h })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometFeedStandardAttachedStoryNestingLevel",
  ["CometFeedStandardAttachedStoryLevelContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometFeedStandardAttachedStoryLevelContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometPageContext.react",
  ["Actor", "CometRouteParams", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = h.createContext({
        isAdminView: !1,
        isAdminViewAsPublic_DO_NOT_USE: !1,
        pageID: void 0,
      });
    function a(a) {
      var b = a.children,
        c = a.pageID;
      a = d("Actor").useActor();
      a = a[0];
      var e = d("CometRouteParams").useRouteParams();
      e = e.view_public_for;
      var f = a === c,
        g = e === c;
      a = i(
        function () {
          return {
            isAdminView: f,
            isAdminViewAsPublic_DO_NOT_USE: g,
            pageID: c,
          };
        },
        [f, g, c]
      );
      return h.jsx(j.Provider, { value: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.PagesCometPageContext = j;
    g.PagesCometPageContextProvider = a;
  },
  98
);
