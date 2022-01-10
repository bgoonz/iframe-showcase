if (self.CavalryLogger) {
  CavalryLogger.start_js(["KmmLTfw"]);
}

__d(
  "ProfileCometTimelineListViewRoot_composer_info$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "ProfileCometTimelineListViewRoot_composer_info$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometAccountStatusNotice_data$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "ProfileCometAccountStatusNotice_data$normalization",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "IXAccountStatusProfileEntrypointModel",
          kind: "LinkedField",
          name: "profile_entrypoint",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status_value",
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
  "ProfileCometAccountStatusNotice_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometAccountStatusNotice_data",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "IXAccountStatusProfileEntrypointModel",
          kind: "LinkedField",
          name: "profile_entrypoint",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status_value",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "IXAccountStatus",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometComposerRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4244208935673475",
        metadata: {},
        name: "ProfileCometComposerRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometInlineComposerWOYM_profile.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometInlineComposerWOYM_profile",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometInlineComposerWrapper_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometInlineComposerWrapper_user",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_viewer_post",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "ProfileCometInlineComposer_user",
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometInlineComposerWrapper_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometInlineComposerWrapper_viewer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "ProfileCometInlineComposer_viewer",
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometInlineComposer_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometInlineComposer_user",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "ProfileCometInlineComposerWOYM_profile",
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBProfilePlusContinuityModeInfo",
          kind: "LinkedField",
          name: "profile_plus_continuity_mode_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_acting_as_profile_plus",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "User",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "ProfileCometInlineComposer_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometInlineComposer_viewer",
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
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_professional_features_for_watch",
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFeedInlineComposerPressableProfilePic_profile",
                },
              ],
              type: "User",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Viewer",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "CixAccountStatusVpvdFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743357");
    c = b("FalcoLoggerInternal").create("cix_account_status_vpvd", a);
    e.exports = c;
  },
  null
);
__d(
  "XCometAccountStatusRootControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/account_status/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ProfileCometAccountStatusNotice.react",
  [
    "fbt",
    "ix",
    "CixAccountStatusVpvdFalcoEvent",
    "CometCard.react",
    "CometLink.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "ProfileCometAccountStatusNotice_data.graphql",
    "TetraIcon.react",
    "TetraTextPairing.react",
    "XCometAccountStatusRootControllerRouteBuilder",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useEffect,
      m = e.useRef,
      n = {
        chevronIcon: { marginTop: "aahdfvyu" },
        redirect: { ":hover": { backgroundColor: "lni25nh1" } },
        redirectLink: { ":hover": { textDecoration: "p8dawk7l" } },
        restrictedBackground: { backgroundColor: "s36lcszj" },
        root: { marginBottom: "sjgh65i0" },
        statusIndicator: {
          borderTopStartRadius: "jk6sbkaj",
          borderTopEndRadius: "kdgqqoy6",
          borderBottomEndRadius: "ihh4hy1g",
          borderBottomStartRadius: "qttc61fc",
          display: "j83agx80",
          paddingTop: "cxgpxx05",
          paddingEnd: "dflh9lhu",
          paddingBottom: "sj5x9vvc",
          paddingStart: "scb9dxdr",
          width: "hhz5lgdu",
        },
        warningBackground: { backgroundColor: "ljqcmsvz" },
      };
    function o(a) {
      if (a === null) return null;
      var b, e;
      switch (a) {
        case "WARNING":
          b = k.jsx(c("TetraIcon.react"), {
            icon: d("fbicon")._(i("502061"), 16),
            size: 16,
          });
          e = n.warningBackground;
          break;
        default:
          (b = k.jsx(c("TetraIcon.react"), {
            color: "white",
            icon: d("fbicon")._(i("538075"), 16),
            size: 16,
          })),
            (e = n.restrictedBackground);
      }
      return k.jsx("div", {
        className: c("stylex")(n.statusIndicator, e),
        children: b,
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("ProfileCometAccountStatusNotice_data.graphql")),
        a.data
      );
      var e = m(null);
      l(function () {
        if (e.current === !0) return;
        if (g !== "WARNING" && g !== "RESTRICTED") return;
        e.current = !0;
        c("CixAccountStatusVpvdFalcoEvent").log(function () {
          return {
            event: "render",
            location: "profile_self",
            poi: "EP_PROFILE",
          };
        });
      });
      a = a == null ? void 0 : a.profile_entrypoint;
      if (a === null) return null;
      var f = a == null ? void 0 : a.status,
        g = a == null ? void 0 : a.status_value;
      if (g !== "WARNING" && g !== "RESTRICTED") return null;
      a = o(g);
      return k.jsx("div", {
        className: c("stylex")(n.root),
        children: k.jsx(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: k.jsx("div", {
            className: c("stylex")(n.redirect),
            children: k.jsx(c("CometLink.react"), {
              href: c("XCometAccountStatusRootControllerRouteBuilder").buildURL(
                { location: "profile_self" }
              ),
              onClick: function () {
                c("CixAccountStatusVpvdFalcoEvent").log(function () {
                  return {
                    event: "click",
                    location: "profile_self",
                    poi: "EP_PROFILE",
                  };
                });
              },
              target: "_blank",
              xstyle: n.redirectLink,
              children: k.jsxs(c("CometRow.react"), {
                align: "start",
                paddingHorizontal: 16,
                paddingTop: 16,
                paddingVertical: 16,
                children: [
                  k.jsx(c("CometRowItem.react"), { children: a }),
                  k.jsx(c("CometRowItem.react"), {
                    expanding: !0,
                    children: k.jsx(c("TetraTextPairing.react"), {
                      headline: f,
                      level: 4,
                      meta: h._("Only you can see this"),
                    }),
                  }),
                  k.jsx(c("CometRowItem.react"), {
                    children: k.jsx("div", {
                      className: c("stylex")(n.chevronIcon),
                      children: k.jsx(c("TetraIcon.react"), {
                        "aria-label": h._("Account Status"),
                        color: "disabled",
                        icon: d("fbicon")._(i("492539"), 24),
                        size: 24,
                      }),
                    }),
                  }),
                ],
              }),
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
  "ProfileCometComposerDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometComposerRootQuery$Parameters",
    "WebPixelRatio",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        a = a.profileID;
        return {
          queries: {
            composerQueryReference: {
              options: { fetchPolicy: "store-or-network" },
              parameters: c("ProfileCometComposerRootQuery$Parameters"),
              variables: {
                privacySelectorRenderLocation: "COMET_COMPOSER",
                profile_id: a,
                scale: d("WebPixelRatio").get(),
                show_gemini_composer_audience_information: c("gkx")("1593908"),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "ProfileCometComposerDialog.react"
      ).__setRef("ProfileCometComposerDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "useGatedInlineProfileSproutInteractionEventHandlers",
  ["QE2Logger", "gkx", "useLifeEventsComposerDialog"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b,
        e = (b = c("gkx")("2120")) != null ? b : !1;
      b = c("useLifeEventsComposerDialog")("COMPOSER");
      var f = b[0],
        g = b[1],
        h = b[2],
        i = b[3];
      b = b[4];
      var j = function () {
        d("QE2Logger").logExposureForUser("comet_mle_sprout_integration"),
          e ? a.showComposerDialog({ pushedPageOnLoad: "mle" }) : f();
      };
      if (e)
        return {
          onHoverIn: a.onHoverIn,
          onHoverOut: a.onHoverOut,
          onPressIn: a.onPressIn,
          showComposerDialog: j,
          triggerRef: a.triggerRef,
        };
      else
        return {
          onHoverIn: h,
          onHoverOut: i,
          onPressIn: b,
          showComposerDialog: j,
          triggerRef: g,
        };
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometInlineComposerLifeEventsSproutGated.react",
  [
    "fbt",
    "ix",
    "CometFeedInlineComposerSprout.react",
    "react",
    "useGatedInlineProfileSproutInteractionEventHandlers",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      a = a.profileComposerEventHandlers;
      a = c("useGatedInlineProfileSproutInteractionEventHandlers")(a);
      var b = a.onHoverIn,
        d = a.onHoverOut,
        e = a.onPressIn,
        f = a.showComposerDialog;
      a = a.triggerRef;
      return j.jsx(c("CometFeedInlineComposerSprout.react"), {
        imageSrc: i("1166458"),
        label: h._("Life Event"),
        onHoverIn: b,
        onHoverOut: d,
        onPress: f,
        onPressIn: e,
        testid: void 0,
        triggerRef: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometInlineComposerSproutsList.react",
  [
    "FeedInlineComposerFeelingSprout.react",
    "FeedInlineComposerMediaSprout.react",
    "ProfileCometContext",
    "ProfileCometInlineComposerLifeEventsSproutGated.react",
    "cr:1454274",
    "cr:1482340",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = 3;
    function a(a) {
      var d = a.isActingAsProfilePlusInContinuityMode,
        e = a.launchBlueVideoComposer,
        f = a.onHoverInPrerenderer,
        g = a.onHoverOutPrerenderer,
        k = a.onPressInPrerenderer,
        l = a.showProfileComposerDialog;
      a = a.triggerRef;
      var m = i(c("ProfileCometContext")),
        n = m.profileID;
      m = m.viewerID;
      n = n === m;
      m = n && b("cr:1482340") != null && !d;
      var o = [];
      m &&
        b("cr:1482340") != null &&
        o.push(
          h.jsx(
            b("cr:1482340"),
            { triggerRef: a },
            "InlineComposerLiveProducerSprout"
          )
        );
      o.push(
        h.jsx(
          c("FeedInlineComposerMediaSprout.react"),
          {
            isViewingSelf: n,
            launchBlueVideoComposer: e,
            onHoverIn: f,
            onHoverOut: g,
            onPressIn: k,
            showComposerDialog: l,
            triggerRef: a,
          },
          "FeedInlineComposerMediaSprout"
        )
      );
      !m &&
        !d &&
        o.push(
          h.jsx(
            b("cr:1454274"),
            {
              onHoverIn: f,
              onHoverOut: g,
              onPressIn: k,
              showComposerDialog: l,
              triggerRef: a,
            },
            "FeedInlineComposerTaggingOrLocationTaggingSprout"
          )
        );
      n && !c("gkx")("1224637")
        ? o.push(
            h.jsx(
              c("ProfileCometInlineComposerLifeEventsSproutGated.react"),
              {
                profileComposerEventHandlers: {
                  onHoverIn: f,
                  onHoverOut: g,
                  onPressIn: k,
                  showComposerDialog: l,
                  triggerRef: a,
                },
              },
              "ProfileCometInlineComposerLifeEventsInComposerSprout"
            )
          )
        : o.push(
            h.jsx(
              c("FeedInlineComposerFeelingSprout.react"),
              {
                onHoverIn: f,
                onHoverOut: g,
                onPressIn: k,
                showComposerDialog: l,
                triggerRef: a,
              },
              "FeedInlineComposerFeelingSprout"
            )
          );
      return h.jsx("div", {
        className:
          "cxgpxx05 stjgntxs ni8dbmo4 n1l5q3vz kwzhilbh qypqp5cg lhclo0ds j83agx80 bo76ibdq",
        children: o.slice(0, j),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometInlineComposerWOYM.react",
  [
    "fbt",
    "CometRefineRef",
    "CometRelay",
    "ProfileCometInlineComposerWOYM_profile.graphql",
    "TextInputButton.react",
    "cr:1654458",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = function () {
        return c("gkx")("1224637")
          ? h._("What are you working on?")
          : h._("What's on your mind?");
      },
      l = function (a) {
        if ((a == null ? void 0 : a.short_name) == null)
          return h._("Write something...");
        return b("cr:1654458") != null
          ? b("cr:1654458")(a.short_name)
          : h._("Write something to {short name}...", [
              h._param("short name", a.short_name),
            ]);
      };
    function a(a) {
      var e = a.isSelfProfile,
        f = a.onHoverInPrerenderer,
        g = a.onHoverOutPrerenderer,
        h = a.onPress,
        m = a.onPressInPrerenderer,
        n = a.overridePlaceholderText,
        o = a.postPlainText,
        p = a.triggerRef;
      a = a.user;
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("ProfileCometInlineComposerWOYM_profile.graphql")),
        a
      );
      var q = o;
      (q == null || q.trim() === "") &&
        (n != null ? (q = n) : (q = e ? k() : l(a)));
      return j.jsx(c("TextInputButton.react"), {
        isUserEnteredPreviewText: q === o,
        label: q,
        onHoverIn: f,
        onHoverOut: g,
        onPress: h,
        onPressIn: m,
        ref: c("CometRefineRef")(p),
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometInteractionTracingModuleProfileComposerDialogOpenQPLEvent",
  ["cr:9742"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:9742");
  },
  98
);
__d(
  "useProfileCometComposerDialog",
  [
    "ProfileCometComposerDialog.entrypoint",
    "requireDeferred",
    "useCometComposerEntryPointDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("requireDeferred")("ProfileCometComposerDialog.react").__setRef(
      "useProfileCometComposerDialog"
    );
    function a(a) {
      return c("useCometComposerEntryPointDialog")(
        babelHelpers["extends"]({}, a, {
          composerDialogEntryPoint: c("ProfileCometComposerDialog.entrypoint"),
        })
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useProfileCometComposerTrigger",
  [
    "CometInteractionTracingModuleProfileComposerDialogOpenQPLEvent",
    "JSResourceForInteraction",
    "cr:1587767",
    "getComposerUnsavedChangesAlert",
    "qex",
    "react",
    "useCometInteractionTracing",
    "useComposerTerminalEventLog",
    "useOnBeforeUnload",
    "usePostInProgress",
    "useProfileCometComposerDialog",
    "useResumableComposerViewState",
    "useVideoComposerDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useRef,
      j = c("JSResourceForInteraction")(
        "ProfileCometComposerDialog.react"
      ).__setRef("useProfileCometComposerTrigger"),
      k = b("cr:1587767") != null ? b("cr:1587767") : function (a, b) {};
    function a(a, b, d, e) {
      var f = i(!1),
        g = c("useResumableComposerViewState")(),
        l = g.clearResumableViewState,
        m = g.getResumableViewState,
        n = g.saveResumableViewState;
      g = c("usePostInProgress")();
      var o = g.postPlainText,
        p = g.updatePostPlainText;
      k(a, b);
      var q = i(!1);
      c("useOnBeforeUnload")(function () {
        return c("getComposerUnsavedChangesAlert")(q.current);
      });
      c("useComposerTerminalEventLog")(
        function () {
          return q.current;
        },
        function () {
          return m().creationSessionID;
        }
      );
      g = h(
        function (a) {
          if (f.current === !0) (q.current = !1), l(), p(m());
          else {
            var b;
            q.current = (b = a == null ? void 0 : a.isDirty) != null ? b : !1;
            n(a);
            p(m());
          }
        },
        [l, m, n, p]
      );
      a = function () {
        f.current = !1;
      };
      var r = function () {
          (q.current = !0), (f.current = !1);
        },
        s = function () {
          f.current = !0;
        };
      g = c("useProfileCometComposerDialog")({
        composerEntryPointName: "inline_composer",
        composerSourceSurface: "timeline",
        onBeforeClose: g,
        onSave: a,
        onSaveError: r,
        onSubmit: s,
        profileID: b,
        title: d,
        tracePolicy: "comet.composer.profile",
      });
      var t = g[0];
      a = g[1];
      r = g[2];
      s = g[3];
      d = g[4];
      var u = c("useCometInteractionTracing")(
          c("CometInteractionTracingModuleProfileComposerDialogOpenQPLEvent"),
          "responsive",
          "INTERACTION"
        ),
        v = c("useVideoComposerDialog")({
          composerEntryPointRef: "pages_feed_video_composer",
          targetID: b,
        });
      g = h(
        function (a) {
          q.current = !1;
          var d = c("qex")._("322") === !0,
            f = m(a == null ? void 0 : a.additionalMediaAttachmentItems, {
              startWithHeaderTextStyle: d,
            });
          f = babelHelpers["extends"]({}, f, {
            videoComposerData: {
              launchBlueVideoComposer: v,
              shouldOpenVideoSpecificComposer: e,
              targetID: b,
            },
          });
          var g = j.getModuleIfRequireable() != null;
          u(function (b) {
            b.onComplete(function (a) {
              g && b.addMetadata("revisit", 1);
            }),
              t({
                beginningViewState: f,
                pushedPageOnLoad: a == null ? void 0 : a.pushedPageOnLoad,
              });
          });
        },
        [m, v, b, e, t, u]
      );
      return [g, a, r, s, d, o];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useProfileCometInlineComposer",
  ["fbt", "CometRouteParams", "gkx", "react", "useProfileCometComposerTrigger"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    b = d("react");
    var i = b.startTransition,
      j = b.useEffect,
      k = b.useRef;
    function a(a) {
      var b = a.actorID,
        e = a.profileID;
      a = a.shouldOpenVideoSpecificComposer;
      var f = h._("Create Post");
      b = c("useProfileCometComposerTrigger")(b, e, f, a);
      var g = b[0];
      f = b[1];
      a = b[2];
      var l = b[3],
        m = b[4];
      b = b[5];
      var n = d("CometRouteParams").useRouteParams(),
        o = k(null),
        p = String(n == null ? void 0 : n.modal);
      j(function () {
        if (o.current === e) return;
        p !== "null" && (o.current = e);
        p === "composer" &&
          c("gkx")("1231") &&
          i(function () {
            return g();
          });
      });
      return [g, f, a, l, m, b];
    }
    g["default"] = a;
  },
  98
);
__d(
  "ProfileCometInlineComposer.react",
  [
    "Actor",
    "CometCard.react",
    "CometFeatureKillswitch.react",
    "CometFeedInlineComposerPressableProfilePic.react",
    "CometRelay",
    "ProfileCometContext",
    "ProfileCometInlineComposerSproutsList.react",
    "ProfileCometInlineComposerWOYM.react",
    "ProfileCometInlineComposer_user.graphql",
    "ProfileCometInlineComposer_viewer.graphql",
    "emptyFunction",
    "gkx",
    "react",
    "useProfileCometInlineComposer",
    "useVideoComposerDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useContext,
      l = { current: null };
    function a(a) {
      var e,
        f = a.composerButtonText,
        g = a.header,
        m = a.user;
      a = a.viewer;
      var n = d("Actor").useActor();
      n = n[0];
      var o = k(c("ProfileCometContext")),
        p = o.profileID;
      o = o.viewerID;
      m = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("ProfileCometInlineComposer_user.graphql")),
        m
      );
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("ProfileCometInlineComposer_viewer.graphql")),
        a
      );
      e =
        (a == null
          ? void 0
          : (e = a.actor) == null
          ? void 0
          : e.has_professional_features_for_watch) === !0;
      e = e && c("gkx")("1430759");
      n = c("useProfileCometInlineComposer")({
        actorID: n,
        profileID: p,
        shouldOpenVideoSpecificComposer: e,
      });
      var q = n[0],
        r = n[1],
        s = n[2],
        t = n[3],
        u = n[4];
      n = n[5];
      var v = c("useVideoComposerDialog")({
        composerEntryPointRef: "pages_feed_video_composer",
        targetID: p,
      });
      return j.jsx(c("CometFeatureKillswitch.react"), {
        enableFeature: c("gkx")("970962"),
        fallback: j.jsx(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: j.jsx("div", {
            className:
              "pybr56ya dati1w0a hv4rvrfc osnr6wyh cbu4d94t j83agx80 gs1a9yip",
            children: j.jsxs("div", {
              className: "k4urcfbm buofh1pr j83agx80 ll8tlv6m",
              children: [
                j.jsx(c("CometFeedInlineComposerPressableProfilePic.react"), {
                  profile$key: a == null ? void 0 : a.actor,
                }),
                j.jsx(c("ProfileCometInlineComposerWOYM.react"), {
                  isSelfProfile: o === p,
                  onPress: c("emptyFunction"),
                  overridePlaceholderText: f,
                  triggerRef: l,
                  user: m,
                }),
              ],
            }),
          }),
        }),
        children: j.jsxs(c("CometCard.react"), {
          background: "white",
          dropShadow: 1,
          children: [
            g,
            j.jsxs("div", {
              className:
                "pybr56ya dati1w0a hv4rvrfc osnr6wyh cbu4d94t j83agx80 gs1a9yip",
              children: [
                j.jsxs("div", {
                  className: "k4urcfbm buofh1pr j83agx80 ll8tlv6m",
                  children: [
                    j.jsx(
                      c("CometFeedInlineComposerPressableProfilePic.react"),
                      { profile$key: a == null ? void 0 : a.actor }
                    ),
                    j.jsx(c("ProfileCometInlineComposerWOYM.react"), {
                      isSelfProfile: o === p,
                      onHoverInPrerenderer: s,
                      onHoverOutPrerenderer: t,
                      onPress: function (a) {
                        return q();
                      },
                      onPressInPrerenderer: u,
                      overridePlaceholderText: f,
                      postPlainText: n,
                      triggerRef: r,
                      user: m,
                    }),
                  ],
                }),
                j.jsx(c("ProfileCometInlineComposerSproutsList.react"), {
                  isActingAsProfilePlusInContinuityMode:
                    ((g = m.profile_plus_continuity_mode_info) == null
                      ? void 0
                      : g.is_acting_as_profile_plus) === !0,
                  launchBlueVideoComposer: e ? v : null,
                  onHoverInPrerenderer: s,
                  onHoverOutPrerenderer: t,
                  onPressInPrerenderer: u,
                  showProfileComposerDialog: q,
                  triggerRef: r,
                }),
              ],
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
  "ProfileCometInlineComposerWrapper.react",
  [
    "CometPagelet.react",
    "CometRelay",
    "FeedInlineComposerGlimmer.react",
    "ProfileCometInlineComposerWrapper_user.graphql",
    "ProfileCometInlineComposerWrapper_viewer.graphql",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "ProfileCometInlineComposer.react"
        ).__setRef("ProfileCometInlineComposerWrapper.react")
      );
    function l(a) {
      var c = a.hideBottomMargin;
      c = c === void 0 ? !1 : c;
      var e = a.user;
      a = a.viewer;
      e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("ProfileCometInlineComposerWrapper_user.graphql")),
        e
      );
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("ProfileCometInlineComposerWrapper_viewer.graphql")),
        a
      );
      return !(e == null ? void 0 : e.can_viewer_post)
        ? null
        : j.jsx("div", {
            className: c ? void 0 : "sjgh65i0",
            "data-testid": void 0,
            children: j.jsx(k, { user: e, viewer: a }),
          });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.hideBottomMargin;
      b = b === void 0 ? !1 : b;
      var e = a.user;
      a = a.viewer;
      return j.jsx(d("CometPagelet.react").Placeholder, {
        fallback: j.jsx("div", {
          className: b ? void 0 : "sjgh65i0",
          children: j.jsx(c("FeedInlineComposerGlimmer.react"), {}),
        }),
        name: "ProfileComposer",
        unstable_expectedLoadTime: 500,
        children: j.jsx(l, { hideBottomMargin: b, user: e, viewer: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometInteractionTracingModuleProfileComposerDialogOpenQPLEvent.legacy",
  ["createLegacyQPLEvent_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLegacyQPLEvent_DO_NOT_USE")(30605360);
    g["default"] = a;
  },
  98
);
