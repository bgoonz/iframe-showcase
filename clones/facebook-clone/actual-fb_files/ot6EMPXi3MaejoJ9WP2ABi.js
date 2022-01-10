if (self.CavalryLogger) {
  CavalryLogger.start_js(["McffEgG"]);
}

__d(
  "CometArticleContextIcon_actionLink.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometArticleContextIcon_actionLink",
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
          name: "object_id",
          storageKey: null,
        },
      ],
      type: "ArticleContextActionLink",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryArticleContextIconStrategy_infoIcon$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "__typename",
        storageKey: null,
      };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryArticleContextIconStrategy_infoIcon$normalization",
        selections: [
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
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "attachments",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Variable",
                        name: "render_location",
                        variableName: "renderLocation",
                      },
                      {
                        kind: "Literal",
                        name: "supported",
                        value: [
                          "StoryAttachmentSharePortraitStyleRenderer",
                          "StoryAttachmentShareStyleRenderer",
                          "StoryAttachmentShareMediumStyleRenderer",
                          "StoryAttachmentShareSevereStyleRenderer",
                        ],
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "style_type_renderer",
                    plural: !1,
                    selections: [a],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "action_links",
                    plural: !0,
                    selections: [
                      a,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "object_id",
                            storageKey: null,
                          },
                        ],
                        type: "ArticleContextActionLink",
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
              a,
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
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryArticleContextIconStrategy_infoIcon.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "__typename",
        storageKey: null,
      };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryArticleContextIconStrategy_infoIcon",
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
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "attachments",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Variable",
                        name: "render_location",
                        variableName: "renderLocation",
                      },
                      {
                        kind: "Literal",
                        name: "supported",
                        value: [
                          "StoryAttachmentSharePortraitStyleRenderer",
                          "StoryAttachmentShareStyleRenderer",
                          "StoryAttachmentShareMediumStyleRenderer",
                          "StoryAttachmentShareSevereStyleRenderer",
                        ],
                      },
                    ],
                    concreteType: null,
                    kind: "LinkedField",
                    name: "style_type_renderer",
                    plural: !1,
                    selections: [a],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "action_links",
                    plural: !0,
                    selections: [
                      a,
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometArticleContextIcon_actionLink",
                          },
                        ],
                        type: "ArticleContextActionLink",
                        abstractKey: null,
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
        type: "CometStoryArticleContextIconStrategy",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometArticleContextIcon.react",
  [
    "fbt",
    "ix",
    "CometArticleContextIcon_actionLink.graphql",
    "CometCompatModalDialogResource",
    "CometLazyDialogTrigger.react",
    "CometLink.react",
    "CometRelay",
    "CometTooltip.react",
    "TetraIcon.react",
    "XArticleContextMainDialogControllerRouteBuilder",
    "emptyFunction",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = {
        mediaIntegrityContextLink: {
          alignItems: "bp9cbjyn",
          backgroundColor: "cwj9ozl2",
          borderTop: "opwvks06",
          borderEnd: "hop1g133",
          borderBottom: "linmgsc8",
          borderStart: "t63ysoy8",
          borderTopStartRadius: "cmek9o9a",
          borderTopEndRadius: "p7f4f6cj",
          borderBottomEndRadius: "c8oo3d72",
          borderBottomStartRadius: "r15kkdkt",
          color: "oo9gr5id",
          display: "j83agx80",
          height: "mudddibn",
          justifyContent: "taijpn5t",
          width: "ciadx1gn",
        },
        mediaIntegrityContextWrapper: {
          end: "o0s42vec",
          position: "pmk7jnqg",
          zIndex: "ehxjyohh",
        },
        mediaIntegrityContextWrapperBottom: { bottom: "b4oskaiq" },
        mediaIntegrityContextWrapperTop: { top: "nezaghv5" },
      };
    function a(a) {
      var e = a.actionLink$key,
        f = a.position;
      f = f === void 0 ? "bottom" : f;
      a = a.xstyle;
      e = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("CometArticleContextIcon_actionLink.graphql")),
        e
      );
      e = e.object_id;
      if (e == null) return null;
      e = c("XArticleContextMainDialogControllerRouteBuilder").buildURL({
        entry_type: "news_feed_learn_more",
        share_id: e,
      });
      return k.jsx("div", {
        className: c("stylex")(
          l.mediaIntegrityContextWrapper,
          f === "top" && l.mediaIntegrityContextWrapperTop,
          f === "bottom" && l.mediaIntegrityContextWrapperBottom,
          a
        ),
        children: k.jsx(c("CometLazyDialogTrigger.react"), {
          dialogProps: {
            onClose: c("emptyFunction"),
            params: { rel: "dialog-post", uri: e },
          },
          dialogResource: c("CometCompatModalDialogResource"),
          children: function (a, b) {
            return k.jsx(c("CometLink.react"), {
              "aria-label": h._("More"),
              href: "#",
              onClick: a,
              ref: b,
              children: k.jsx("div", {
                className: c("stylex")(l.mediaIntegrityContextLink),
                children: k.jsx(c("CometTooltip.react"), {
                  position: "above",
                  tooltip: h._("Show more information about this link"),
                  children: k.jsx(c("TetraIcon.react"), {
                    icon: d("fbicon")._(i("721633"), 20),
                  }),
                }),
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
  "CometFeedStoryArticleContextIconStrategy.react",
  [
    "CometArticleContextIcon.react",
    "CometFeedStoryArticleContextIconStrategy_infoIcon.graphql",
    "CometRelay",
    "react",
    "unrecoverableViolation",
    "useCometFeedStoryMatchDebugger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "CometFeedStoryArticleContextIconStrategy_infoIcon.graphql"
            )),
        a.infoIcon
      );
      c("useCometFeedStoryMatchDebugger")(a);
      e =
        (e = a.story) == null
          ? void 0
          : (e = e.attachments[0]) == null
          ? void 0
          : e.action_links;
      if (e == null)
        throw c("unrecoverableViolation")(
          "Cannot render ArticleContextIcon with null action_links",
          "comet_feed"
        );
      e = e.find(function (a) {
        return a.__typename === "ArticleContextActionLink";
      });
      if (e == null || e.__typename !== "ArticleContextActionLink")
        throw c("unrecoverableViolation")(
          "Cannot render ArticleContextIcon without an ArticleContextActionLink in its action_links",
          "comet_feed"
        );
      var f =
        (a = a.story) == null
          ? void 0
          : (a = a.attachments) == null
          ? void 0
          : (a = a[0]) == null
          ? void 0
          : (a = a.style_type_renderer) == null
          ? void 0
          : a.__typename;
      a = (function () {
        switch (f) {
          case "StoryAttachmentShareStyleRenderer":
            return "bottom";
          case "StoryAttachmentSharePortraitStyleRenderer":
          case "StoryAttachmentShareMediumStyleRenderer":
          case "StoryAttachmentShareSevereStyleRenderer":
          default:
            return "top";
        }
      })();
      return i.jsx(c("CometArticleContextIcon.react"), {
        actionLink$key: e,
        position: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryGenericLink_story$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        b = {
          alias: null,
          args: [{ kind: "Literal", name: "site", value: "www" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"www")',
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryGenericLink_story$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "attachment",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "web_link",
                plural: !1,
                selections: [
                  a,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "url",
                    storageKey: null,
                  },
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
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "action_links",
                plural: !0,
                selections: [a, b],
                storageKey: null,
              },
              b,
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
  "CometFeedStoryGenericLink_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryGenericLink_story",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "attachment",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "web_link",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "url",
                  storageKey: null,
                },
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
            {
              args: null,
              kind: "FragmentSpread",
              name: "useURLFromAttachment_attachment",
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryAttachmentGenericLinkRenderer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useURLFromAttachment_attachment.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: [{ kind: "Literal", name: "site", value: "www" }],
        kind: "ScalarField",
        name: "url",
        storageKey: 'url(site:"www")',
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useURLFromAttachment_attachment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "action_links",
            plural: !0,
            selections: [a],
            storageKey: null,
          },
          a,
        ],
        type: "StoryAttachment",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedPageVerifiedBadgeStrategy_badge$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedPageVerifiedBadgeStrategy_badge$normalization",
        selections: [
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
                concreteType: null,
                kind: "LinkedField",
                name: "actors",
                plural: !0,
                selections: [
                  a,
                  b,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_verified",
                        storageKey: null,
                      },
                    ],
                    type: "Page",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              b,
            ],
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              a,
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
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFeedPageVerifiedBadgeStrategy_badge.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedPageVerifiedBadgeStrategy_badge",
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
              concreteType: null,
              kind: "LinkedField",
              name: "actors",
              plural: !0,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometPageVerificationBadge_page",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "CometFeedPageVerifiedBadgeStrategy",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useURLFromAttachment",
  ["CometRelay", "useURLFromAttachment_attachment.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var c;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useURLFromAttachment_attachment.graphql")),
        a
      );
      return (c =
        (c =
          a == null
            ? void 0
            : (c = a.action_links) == null
            ? void 0
            : (c = c[0]) == null
            ? void 0
            : c.url) != null
          ? c
          : a == null
          ? void 0
          : a.url) != null
        ? c
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryGenericLink.react",
  [
    "CometFeedStoryGenericLink_story.graphql",
    "CometLink.react",
    "CometRelay",
    "gkx",
    "react",
    "recoverableViolation",
    "useURLFromAttachment",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useEffect,
      k = h !== void 0 ? h : (h = b("CometFeedStoryGenericLink_story.graphql"));
    function a(a, b) {
      b = a["aria-label"];
      var e = a["aria-labelledby"],
        f = a.children,
        g = a.story;
      a = a.xstyle;
      g = d("CometRelay").useFragment(k, g);
      var h = g.attachment;
      g = c("useURLFromAttachment")(h);
      j(
        function () {
          (h == null ? void 0 : h.web_link) == null
            ? c("recoverableViolation")(
                "attachment web_link must not be null in CometFeedStoryGenericLink.react.js",
                "comet_infra"
              )
            : (h == null ? void 0 : h.web_link.url) == null &&
              c("recoverableViolation")(
                "web_link url must not be null in CometFeedStoryGenericLink.react.js",
                "comet_infra"
              );
        },
        [h]
      );
      var l = h == null ? void 0 : h.web_link;
      g = l != null && c("gkx")("1616314") ? l.url : g;
      var m = l == null ? void 0 : l.fbclid;
      l = l == null ? void 0 : l.lynx_mode;
      return h == null
        ? null
        : i.jsx(c("CometLink.react"), {
            "aria-label": b,
            "aria-labelledby": e,
            fbclid: m,
            href: g,
            lynxMode: l,
            suppressHydrationWarning: !0,
            xstyle: a,
            children: f,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometFeedPageVerifiedBadgeStrategy.react",
  [
    "CometFeedPageVerifiedBadgeStrategy_badge.graphql",
    "CometPageVerificationBadge.react",
    "CometRelay",
    "react",
    "unrecoverableViolation",
    "useCometFeedStoryMatchDebugger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("CometFeedPageVerifiedBadgeStrategy_badge.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(j, a.badge);
      c("useCometFeedStoryMatchDebugger")(a);
      a = a == null ? void 0 : (a = a.story) == null ? void 0 : a.actors;
      a = a || [];
      a = a[0];
      a = a === void 0 ? null : a;
      if (a == null)
        throw c("unrecoverableViolation")(
          "Can't render a verified badge without at least one story actor",
          "comet_feed"
        );
      return i.jsxs("span", {
        className: "l9j0dhe7 h3qc4492",
        children: [
          "\xa0",
          i.jsx(c("CometPageVerificationBadge.react"), {
            page: a,
            size: "small",
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
  "XArticleContextMainDialogControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/feed/article_context/dialog/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
