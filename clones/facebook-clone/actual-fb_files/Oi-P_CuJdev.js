if (self.CavalryLogger) {
  CavalryLogger.start_js(["/Sr/pR6"]);
}

__d(
  "CometFeedStoryInfoIconSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryInfoIconSection_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
          concreteType: "CometStorySections",
          kind: "LinkedField",
          name: "comet_sections",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Literal",
                  name: "supported",
                  value: [
                    "CometStoryPoliticalIconStrategy",
                    "CometStoryArticleContextIconStrategy",
                    "CometStoryBrandedContentIconStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "info_icon",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryInfoIconSection_story",
                      fragmentName:
                        "CometFeedStoryPoliticalIconStrategy_infoIcon",
                      fragmentPropName: "infoIcon",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryPoliticalIconStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryInfoIconSection_story",
                      fragmentName:
                        "CometFeedStoryArticleContextIconStrategy_infoIcon",
                      fragmentPropName: "infoIcon",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryArticleContextIconStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryInfoIconSection_story",
                      fragmentName:
                        "CometFeedStoryBrandedContentIconStrategy_infoIcon",
                      fragmentPropName: "infoIcon",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryBrandedContentIconStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'info_icon(supported:["CometStoryPoliticalIconStrategy","CometStoryArticleContextIconStrategy","CometStoryBrandedContentIconStrategy"])',
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryInfoIconSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryInfoIconSection_story.graphql",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useEffect,
      k =
        h !== void 0
          ? h
          : (h = b("CometFeedStoryInfoIconSection_story.graphql"));
    function a(a) {
      var b = a.onMatch_UNSTABLE_DO_NOT_USE,
        e = d("CometRelay").useFragment(k, a.story);
      j(function () {
        if (b != null) {
          var a;
          a =
            (e == null
              ? void 0
              : (a = e.comet_sections) == null
              ? void 0
              : a.info_icon) != null
              ? d("CometRelay").ModuleResource.getModuleId(
                  e == null
                    ? void 0
                    : (a = e.comet_sections) == null
                    ? void 0
                    : a.info_icon
                )
              : null;
          b((a = a) != null ? a : null);
        }
      }, []);
      return (e == null
        ? void 0
        : (a = e.comet_sections) == null
        ? void 0
        : a.info_icon) == null
        ? null
        : i.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 303,
            children: i.jsx(c("CometFeedMatchRenderer.react"), {
              match:
                e == null
                  ? void 0
                  : (a = e.comet_sections) == null
                  ? void 0
                  : a.info_icon,
              section: "info_icon",
              trackingData: e == null ? void 0 : e.encrypted_tracking,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = a;
    g["default"] = e;
  },
  98
);
__d(
  "composerScheduledPostsTransform",
  ["CometTime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c, e) {
      a = a.scheduledPostDate;
      a = (a = a) != null ? a : e == null ? void 0 : e.scheduledPublishTime;
      if (a == null) return c(b);
      c(
        babelHelpers["extends"]({}, b, {
          unpublished_content_data: {
            scheduled_publish_time: d("CometTime").toSeconds(a),
            unpublished_content_type: "SCHEDULED",
          },
        })
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometQuickPromotionMenuContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b;
  },
  98
);
__d(
  "CometAbstractButtonWrapper.react",
  ["BaseButtonOrLink_DEPRECATED.react", "react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = {
        root: {
          cursor: "nhd2j8a9",
          display: "q9uorilb",
          textDecoration: "esuyzwwr",
          whiteSpace: "g0qnabr5",
        },
      };
    function a(a, b) {
      var d;
      a.ajaxify;
      var e = a["aria-label"],
        f = a.className;
      a["data-ft"];
      a["data-hovercard"];
      var g = a["data-testid"];
      a.depressed;
      var k = a.href,
        l = a.image,
        m = a.imageRight,
        n = a.label,
        o = a.labelIsHidden,
        p = a.onClick,
        q = a.preventLocalNavigation,
        r = a.role;
      a.tabIndex;
      var s = a.target,
        t = a.testid,
        u = a.title,
        v = a.type,
        w = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "ajaxify",
        "aria-label",
        "className",
        "data-ft",
        "data-hovercard",
        "data-testid",
        "depressed",
        "href",
        "image",
        "imageRight",
        "label",
        "labelIsHidden",
        "onClick",
        "preventLocalNavigation",
        "role",
        "tabIndex",
        "target",
        "testid",
        "title",
        "type",
        "xstyle",
      ]);
      k = k;
      typeof k === "object" && (k = k.toString());
      t = t != null ? t : g;
      (l != null || m != null) &&
        c("recoverableViolation")(
          "CometAbstractButtonWrapper received image or imageRight prop, please pass these images as children",
          "ufi2"
        );
      o === !0 &&
        c("recoverableViolation")(
          "CometAbstractButtonWrapper received labelIsHidden prop, please pass these images as children or wrap as BaseAccessibleElement_DEPRECATED",
          "ufi2"
        );
      v != null &&
        c("recoverableViolation")(
          "CometAbstractButtonWrapper received type prop, please make sure to use idiomatic BaseAccessibleElement_DEPRECATED",
          "ufi2"
        );
      s != null &&
        c("recoverableViolation")(
          "CometAbstractButtonWrapper received target prop, this is currently unsupported, to make it supported please update tpyes for BaseButtonOrLink_DEPRECATED",
          "ufi2"
        );
      g = i(
        function () {
          return p == null
            ? null
            : function (a) {
                p(a);
              };
        },
        [p]
      );
      return h.jsx(
        c("BaseButtonOrLink_DEPRECATED.react"),
        babelHelpers["extends"]({}, a, {
          className_DEPRECATED: f,
          href: (t = k) != null ? t : void 0,
          label: (l = e) != null ? l : u,
          onClick: (m = g) != null ? m : void 0,
          preventLocalNavigation: q,
          ref: b,
          role: r,
          testid: void 0,
          xstyle: [j.root, w],
          children: n,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "GroupRoomType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      LIVE: "live",
      OPEN: "open",
      PRIVATE: "private",
      LIVE_AUDIO: "live_audio",
    });
    f["default"] = a;
  },
  66
);
