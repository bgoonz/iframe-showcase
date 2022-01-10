if (self.CavalryLogger) {
  CavalryLogger.start_js(["ZN2jqp3"]);
}

__d(
  "useMWChatSidebarStateSettingMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "ChatSidebarIsCollapsedResponsePayload",
            kind: "LinkedField",
            name: "chat_sidebar_is_collapsed",
            plural: !1,
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
                    args: null,
                    kind: "ScalarField",
                    name: "chat_sidebar_is_collapsed",
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
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useMWChatSidebarStateSettingMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useMWChatSidebarStateSettingMutation",
          selections: b,
        },
        params: {
          id: "2698613166903927",
          metadata: {},
          name: "useMWChatSidebarStateSettingMutation",
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
  "MWChatContact_profile.graphql",
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
        argumentDefinitions: [
          { kind: "RootArgument", name: "scale" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "shouldEnableMWStoriesEntrypoint",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "MWChatContact_profile",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                condition: "shouldEnableMWStoriesEntrypoint",
                kind: "Condition",
                passingValue: !0,
                selections: [
                  {
                    alias: null,
                    args: [{ kind: "Literal", name: "first", value: 1 }],
                    concreteType: "DirectInboxBroadcastBucketConnection",
                    kind: "LinkedField",
                    name: "story_bucket",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "DirectMessageThreadBucket",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [
                          a,
                          {
                            alias: null,
                            args: null,
                            concreteType: "Story",
                            kind: "LinkedField",
                            name: "first_story_to_show",
                            plural: !1,
                            selections: [
                              a,
                              {
                                alias: null,
                                args: null,
                                concreteType: "StoryCardSeenState",
                                kind: "LinkedField",
                                name: "story_card_seen_state",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "is_seen_by_viewer",
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
                    storageKey: "story_bucket(first:1)",
                  },
                ],
              },
              {
                kind: "ClientExtension",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "availability",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "last_active_time",
                    storageKey: null,
                  },
                ],
              },
            ],
            type: "User",
            abstractKey: null,
          },
          {
            alias: null,
            args: [
              { kind: "Literal", name: "height", value: 36 },
              { kind: "Variable", name: "scale", variableName: "scale" },
              { kind: "Literal", name: "width", value: 36 },
            ],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Profile",
        abstractKey: "__isProfile",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "MWChatContact_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MWChatContact_viewer",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "chat_visibility",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "PresenceViewerBasedSettings",
          kind: "LinkedField",
          name: "presence_view_side_settings",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_active_status_viewable",
              storageKey: null,
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
  "CometIconLogoFlat.react",
  ["cr:1242743", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        b("cr:1242743"),
        babelHelpers["extends"]({}, a, { color: "active-tab" })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHomeContactsPresenceAwareList.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("ul", {
        className: a.active ? "pedkr2u6" : "ggwglk7f",
        children: a.children,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWLSPreloadThreadForContact.bs",
  [
    "LS.bs",
    "LSDatabaseDeferred.bs",
    "LSMailboxIssueMessagesRangeQueryStoredProcedure",
    "LSMailboxMessagesRangeQueryDirection.bs",
    "LSMailboxVerifyThreadRowExistsStoredProcedure",
    "LSTransaction.bs",
    "ReQL.bs",
    "SkytaleDB",
    "bs_caml_format",
    "promiseDone",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      var c = b("LSDatabaseDeferred.bs").db.then(function (c) {
        return b("LSTransaction.bs").run(
          c,
          function (c) {
            var d = b("bs_caml_format").caml_int64_of_string(a);
            return b("ReQL.bs")
              .first(
                b("ReQL.bs").getKeyRange(
                  b("SkytaleDB").table(c, "messages_ranges_v2__generated").asc,
                  { hd: d, tl: 0 }
                )
              )
              .then(function (a) {
                if (a !== void 0)
                  if (a.c === a.e && a.c !== "")
                    return b("LSMailboxIssueMessagesRangeQueryStoredProcedure")(
                      d,
                      a.b,
                      b("LSMailboxMessagesRangeQueryDirection.bs").before,
                      b("LS.bs").make(c)
                    );
                  else return;
                else
                  return b("LSMailboxVerifyThreadRowExistsStoredProcedure")(
                    d,
                    void 0,
                    b("LS.bs").make(c)
                  );
              });
          },
          "readWrite"
        );
      });
      b("promiseDone")(c, void 0, void 0);
    }
    function a() {
      return g;
    }
    f.usePreloaderForUser = a;
  },
  null
);
__d(
  "MWLSPreloadThreadForContact.re",
  ["MWLSPreloadThreadForContact.bs"],
  function (a, b, c, d, e, f) {
    a = b("MWLSPreloadThreadForContact.bs").usePreloaderForUser;
    f.usePreloaderForUser = a;
  },
  null
);
__d(
  "LSThreadAttributionStore.re",
  ["LSThreadAttributionStore.bs", "bs_curry"],
  function (a, b, c, d, e, f) {
    a = function (a, c) {
      a = b("bs_curry")._2(b("LSThreadAttributionStore.bs").setSource, a, c);
      return a;
    };
    f.setSource = a;
  },
  null
);
__d(
  "useMWChatSidebarStateSettingMutation",
  [
    "createUseMutation_DEPRECATED",
    "useMWChatSidebarStateSettingMutation.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a =
      h !== void 0
        ? h
        : (h = b("useMWChatSidebarStateSettingMutation.graphql"));
    d = c("createUseMutation_DEPRECATED")(a, function (a) {
      a = a.is_collapsed;
      return {
        chat_sidebar_is_collapsed: { viewer: { chat_sidebar_is_collapsed: a } },
      };
    });
    g["default"] = d;
  },
  98
);
__d(
  "MWThreadAddOnPrimary.re",
  ["MWThreadAddOnPrimary.bs", "bs_curry"],
  function (a, b, c, d, e, f) {
    a = function (a) {
      a = b("bs_curry")._5(
        b("MWThreadAddOnPrimary.bs").get,
        a.threadImages,
        a.threadTitle == null ? void 0 : a.threadTitle,
        a.isThreadActive,
        a.size,
        a.lastActiveTime == null ? void 0 : a.lastActiveTime
      );
      return a;
    };
    f.get = a;
  },
  null
);
__d(
  "MWChatContact.react",
  [
    "CometRelay",
    "CurrentEnvironment",
    "JSResourceForInteraction",
    "JSScheduler",
    "LSThreadAttributionStore.re",
    "MWChatContact_profile.graphql",
    "MWChatContact_viewer.graphql",
    "MWLSPreloadThreadForContact.re",
    "MWThreadAddOnPrimary.re",
    "StoriesGating",
    "TetraListCell.react",
    "XCometMessengerControllerRouteBuilder",
    "XCometStoriesControllerRouteBuilder",
    "gkx",
    "qex",
    "react",
    "recoverableViolation",
    "useCometPreloader",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useCallback,
      l = c("JSResourceForInteraction")("MWChatTabContainer.bs").__setRef(
        "MWChatContact.react"
      );
    function a(a) {
      var e = a.lsEntryPoint,
        f = a.openTabForUser,
        g = a.preventLocalNavigation;
      g = g === void 0 ? !0 : g;
      var m = a.profile,
        n = a.selected;
      n = n === void 0 ? !1 : n;
      a = a.viewer;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("MWChatContact_viewer.graphql")),
        a
      );
      var o = c("qex")._("971346");
      o =
        o === !0
          ? (a == null
              ? void 0
              : (o = a.presence_view_side_settings) == null
              ? void 0
              : o.is_active_status_viewable) === !0
          : (a == null ? void 0 : a.chat_visibility) === !0;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("MWChatContact_profile.graphql")),
        m
      );
      m = a.availability;
      var p = a.id,
        q = a.last_active_time,
        r = a.name,
        s = a.profile_picture,
        t,
        u = "none";
      a = (a = a.story_bucket) == null ? void 0 : a.nodes;
      a = a ? a[0] : null;
      if (a != null) {
        var v,
          w = a.id;
        v = (v = a.first_story_to_show) == null ? void 0 : v.id;
        a =
          a == null
            ? void 0
            : (a = a.first_story_to_show) == null
            ? void 0
            : (a = a.story_card_seen_state) == null
            ? void 0
            : a.is_seen_by_viewer;
        a != null && (u = a ? "seen" : "unseen");
        if (u !== "none" && w != null && v != null) {
          a = c("XCometStoriesControllerRouteBuilder").buildURL({
            bucket_id: w,
            card_id: v,
            view_single: !0,
          });
          t = { prefetchQueries: !0, url: a };
        }
      }
      w = k(function () {
        c("gkx")("1512630") &&
          d("JSScheduler").scheduleSpeculativeCallback(function () {
            return l.preload();
          });
      }, []);
      var x = c("MWLSPreloadThreadForContact.re").usePreloaderForUser();
      v = k(
        function () {
          p != null && x(p);
        },
        [p, x]
      );
      a = c("useCometPreloader")("button", w, v);
      var y = a[0];
      w = a[1];
      var z = a[2],
        A = a[3];
      v = k(
        function (a) {
          z != null && z(a), p != null && f(p, !1);
        },
        [z, p, f]
      );
      a = k(
        function (a) {
          z != null && z(a),
            p != null && c("LSThreadAttributionStore.re").setSource(p, e);
        },
        [z, p, e]
      );
      var B = k(
        function (a) {
          y(a), A(!0);
        },
        [y, A]
      );
      s = s == null ? void 0 : s.uri;
      if (p == null)
        return c("recoverableViolation")(
          "Chat contact list cell is missing id",
          "comet_ui"
        );
      if (r == null)
        return c("recoverableViolation")(
          "Chat contact list cell is missing name",
          "comet_ui"
        );
      if (s == null)
        return c("recoverableViolation")(
          "Chat contact list cell is missing profileUri",
          "comet_ui"
        );
      m = m === "ACTIVE";
      o = o ? q : void 0;
      q = d("StoriesGating").shouldEnableMWStoriesEntrypoint()
        ? {
            addOn: m
              ? { type: "availabilityBadge" }
              : o != null
              ? { border: "web-wash", time: o, type: "lastActiveTimeBadge" }
              : void 0,
            linkProps: t != null ? t : void 0,
            shape: "circle",
            size: 36,
            source: { uri: s },
            storyStatus: u,
            type: "profile-photo",
          }
        : c("MWThreadAddOnPrimary.re").get({
            isThreadActive: m,
            lastActiveTime: o,
            size: 36,
            threadImages: [s],
            threadTitle: void 0,
          });
      u = c("CurrentEnvironment").facebookdotcom
        ? c("XCometMessengerControllerRouteBuilder").buildURL({ thread_key: p })
        : "/t/" + p + "/";
      return j.jsx(c("TetraListCell.react"), {
        addOnPrimary: q,
        disabled: !1,
        headline: r,
        level: 4,
        linkProps: { preventLocalNavigation: g, url: u },
        onHoverIn: B,
        onHoverOut: w,
        onPress: g ? v : a,
        selected: n,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useMWChatJoinVideoChat",
  [
    "fbt",
    "FBLogger",
    "RTWebPreCallContext",
    "VideoChatLinksUserActionsTypedLoggerLite",
    "cometPushToast",
    "getRequestConstUri",
    "isMessengerDotComURI",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useState,
      l = c("requireDeferred")("ZenonPreCallHookBuilderHelper").__setRef(
        "useMWChatJoinVideoChat"
      );
    function a(a) {
      var b = j(c("RTWebPreCallContext")),
        e = k(!1),
        f = e[0],
        g = e[1];
      e = i(
        function (e, f) {
          g(!0);
          var i = c("isMessengerDotComURI")(c("getRequestConstUri")())
            ? "messenger_dot_com"
            : "www_facebook_window";
          c("VideoChatLinksUserActionsTypedLoggerLite").log({
            component: "fb_feed_tofu_unit",
            event: "meetup_entry_point_clicked",
            surface: i,
          });
          var j =
            (i = f == null ? void 0 : f.startCallImmediately) != null ? i : !1;
          l.loadImmediately(function (f) {
            try {
              f.joinMeetup({ context: b, linkUrl: e, startCallImmediately: j }),
                a != null && a();
            } catch (a) {
              c("FBLogger")("comet")
                .catching(a)
                .mustfix("Unable to join video chat room"),
                d("cometPushToast").cometPushErrorToast({
                  message: h._("Unable to join room."),
                });
            } finally {
              g(!1);
            }
          });
        },
        [a, b]
      );
      return [e, f];
    }
    g["default"] = a;
  },
  98
);
__d(
  "LsMessageRequestsEntryPoint.bs",
  ["bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("bs_caml_int64").zero;
    c = b("bs_caml_int64").one;
    d = [0, 2];
    e = [0, 3];
    b = [0, 4];
    var g = [0, 5];
    f.settings = a;
    f.pendingRequests = c;
    f.notifications = d;
    f.chatTabSettings = e;
    f.chatTabPendingRequests = b;
    f.inboxFolderList = g;
  },
  null
);
__d(
  "MessengerCallInviteLinkLockStatus",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      OPEN: "open",
      LOCKED_BY_OWNER: "locked_by_owner",
      LOCKED_BY_OWNER_DISCONNECT: "locked_by_owner_disconnect",
    });
    f["default"] = a;
  },
  66
);
__d(
  "CometContextualMessage.react",
  [
    "fbt",
    "ix",
    "CometRow.react",
    "CometRowItem.react",
    "TetraIcon.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        closeButton: { marginEnd: "dlv3wnog", marginTop: "sv5sfqaa" },
        icon: { marginTop: "muag1w35" },
        root: {
          borderTopStartRadius: "ue3kfks5",
          borderTopEndRadius: "pw54ja7n",
          borderBottomEndRadius: "uo3d90p7",
          borderBottomStartRadius: "l82x9zwi",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          paddingTop: "ecm0bbzt",
          paddingEnd: "ph5uu5jm",
          paddingStart: "b3onmgus",
          paddingBottom: "ihqw7lf3",
        },
      },
      l = {
        highlight: { backgroundColor: "is6700om" },
        primary: { backgroundColor: "cwj9ozl2" },
        secondary: { backgroundColor: "i94ygzvd" },
      };
    function a(a) {
      var b = a.addOnPrimary,
        e = a.addOnSecondary,
        f = a.body,
        g = a.headline,
        m = a.icon,
        n = a.level;
      n = n === void 0 ? 3 : n;
      var o = a.meta,
        p = a.onClose,
        q = a.testid;
      q = a.type;
      a = q === void 0 ? "primary" : q;
      return j.jsxs("div", {
        className: c("stylex")(k.root, l[a]),
        "data-testid": void 0,
        children: [
          j.jsxs(c("CometRow.react"), {
            verticalAlign: "center",
            children: [
              m != null
                ? j.jsx(c("CometRowItem.react"), {
                    verticalAlign: "top",
                    children: j.jsx("div", {
                      className: c("stylex")(k.icon),
                      children: m,
                    }),
                  })
                : null,
              j.jsx(c("CometRowItem.react"), {
                expanding: !0,
                children: j.jsx(c("TetraTextPairing.react"), {
                  body: f,
                  bodyColor: a === "highlight" ? "white" : "secondary",
                  headline: g,
                  headlineColor: a === "highlight" ? "white" : "primary",
                  headlineLineLimit: 2,
                  level: n,
                }),
              }),
              p != null
                ? j.jsx(c("CometRowItem.react"), {
                    verticalAlign: "top",
                    children: j.jsx("div", {
                      className: c("stylex")(k.closeButton),
                      children: j.jsx(c("TetraIcon.react"), {
                        "aria-label": h._("Dismiss"),
                        color: a === "highlight" ? "white" : "secondary",
                        icon: d("fbicon")._(i("478232"), 16),
                        onPress: p,
                        size: 16,
                        testid: void 0,
                      }),
                    }),
                  })
                : null,
            ],
          }),
          b,
          e,
          o != null &&
            j.jsx(c("CometRow.react"), {
              paddingTop: 12,
              children: j.jsx(c("CometRowItem.react"), {
                children: j.jsx(c("TetraTextPairing.react"), {
                  level: n,
                  meta: o,
                }),
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
  "NullStateNoResults",
  ["IconSource", "bx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      dark: new (c("IconSource"))(
        "nullStateGlyphs",
        c("bx").getURL(c("bx")("1160064")),
        112
      ),
      default: new (c("IconSource"))(
        "nullStateGlyphs",
        c("bx").getURL(c("bx")("1160065")),
        112
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometTextInputStyles.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = {
        center: { textAlign: "oqcyycmt" },
        end: { textAlign: "ftzlm3b6" },
        inherit: { textAlign: "i1ao9s8h" },
        start: { textAlign: "hzawbc8m" },
      },
      i = {
        multi: {
          paddingTop: "cxgpxx05",
          paddingEnd: "d1544ag0",
          paddingBottom: "sj5x9vvc",
          paddingStart: "tw6a2znq",
          resize: "ieid39z1",
        },
        single: { height: "tv7at329" },
      },
      j = {
        disabled: { cursor: "rj84mg9z" },
        input: {
          backgroundColor: "b3i9ofy5",
          borderTop: "l6v480f0",
          borderEnd: "maa8sdkg",
          borderBottom: "s1tcr66n",
          borderStart: "aypy0576",
          borderTopStartRadius: "beltcj47",
          borderTopEndRadius: "p86d2i9g",
          borderBottomEndRadius: "aot14ch1",
          borderBottomStartRadius: "kzx2olss",
          boxSizing: "rq0escxv",
          color: "oo9gr5id",
          fontSize: "l94mrbxd",
          fontWeight: "ekzkrbhg",
          paddingTop: "cxgpxx05",
          paddingEnd: "d1544ag0",
          paddingBottom: "sj5x9vvc",
          paddingStart: "tw6a2znq",
          width: "k4urcfbm",
          "::placeholder": { color: "o8yuz56k" },
          ":hover": { backgroundImage: "ehryuci6" },
          ":focus": {
            backgroundColor: "duhwxc4d",
            borderTopColor: "bs68lrl8",
            borderEndColor: "f56r29tw",
            borderBottomColor: "e16z4an2",
            borderStartColor: "ei4baabg",
            boxShadow: "b4hei51z",
          },
        },
      };
    function a(a) {
      var b = a.align;
      b = b === void 0 ? "start" : b;
      var c = a.children,
        d = a.dimension;
      d = d === void 0 ? "single" : d;
      a = a.disabled;
      a = a === void 0 ? !1 : a;
      return c([j.input, a && j.disabled, h[b], i[d]]);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MarketplaceCometLocationUtils",
  ["MarketplaceLocations"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = c("MarketplaceLocations").data,
        d = Object.keys(b).find(function (c) {
          return b[c].toString() === a;
        });
      return (d = d) != null ? d : a;
    }
    g.idToVanityID = a;
  },
  98
);
__d(
  "createUseMutation_DEPRECATED",
  ["CometRelay", "Promise", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, c, e, f) {
      return function () {
        var g = d("CometRelay").useRelayEnvironment();
        return h(
          function (h, i, j) {
            return new (b("Promise"))(function (b, k) {
              return d("CometRelay").enqueueMutation(g, {
                mutation: a,
                onCompleted: function (a, c) {
                  c && c.length ? k(c) : b(a);
                },
                onError: function (a) {
                  return k([a]);
                },
                optimisticResponse: c ? c(h, i, j) : null,
                optimisticUpdater: e ? e(h, i, j) : null,
                updater: f ? f(h, i, j) : null,
                variables: babelHelpers["extends"]({ input: h }, i),
              });
            });
          },
          [g]
        );
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSaveLoggingContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      collectionID: null,
      referrer: null,
      surface: "dashboard",
      surfaceGraphQL: "DASHBOARD",
      surfaceGraphQL_legacy: "dashboard",
    });
    g["default"] = b;
  },
  98
);
__d(
  "useCometSaveLoggingContext",
  ["CometSaveLoggingContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometSaveLoggingContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSaveStoryMutationHelper",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      b &&
        b.forEach(function (b) {
          b = a.get(b);
          if (b != null) {
            b = b.getLinkedRecord("save_info");
            b != null && b.setValue(c, "viewer_save_state");
          }
        });
    }
    function b(a, b, c) {
      b &&
        b.forEach(function (b) {
          b = a.get(b);
          b != null && b.setValue(c, "viewer_saved_state");
        });
    }
    f.updateStoriesSaveState = a;
    f.updateSavablesSaveState = b;
  },
  66
);
__d(
  "useSaveMutation",
  [
    "JSResourceForInteraction",
    "promiseDone",
    "react",
    "unrecoverableViolation",
    "useCometSaveLoggingContext",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("JSResourceForInteraction")("CometSaveMutation").__setRef(
        "useSaveMutation"
      );
    function a(a, b) {
      var d = a.mechanism,
        e = a.savableID;
      a = a.surface;
      var f = c("useCometSaveLoggingContext")().surfaceGraphQL_legacy,
        g = (a = a) != null ? a : f;
      a = b || {};
      var j = a.onFailure,
        k = a.onSuccess;
      return h(
        function () {
          if (e == null)
            throw c("unrecoverableViolation")(
              "savableID not provided to save mutation",
              "saved_for_later"
            );
          c("promiseDone")(
            i.load().then(function (a) {
              a(
                { mechanism: d, node_id: e, surface: g },
                { onFailure: j, onSuccess: k }
              );
            })
          );
        },
        [d, e, g, k, j]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useUnsaveMutation",
  [
    "JSResourceForInteraction",
    "promiseDone",
    "react",
    "unrecoverableViolation",
    "useCometSaveLoggingContext",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("JSResourceForInteraction")("CometUnsaveMutation").__setRef(
        "useUnsaveMutation"
      );
    function a(a, b) {
      var d = a.mechanism,
        e = a.savableID;
      a = a.surface;
      var f = c("useCometSaveLoggingContext")().surfaceGraphQL_legacy,
        g = (a = a) != null ? a : f;
      a = b || {};
      var j = a.onFailure,
        k = a.onSuccess;
      return h(
        function () {
          if (e == null)
            throw c("unrecoverableViolation")(
              "savableID not provided to unsave mutation",
              "saved_for_later"
            );
          c("promiseDone")(
            i.load().then(function (a) {
              a(
                { mechanism: d, node_id: e, surface: g },
                { onFailure: j, onSuccess: k }
              );
            })
          );
        },
        [e, d, g, j, k]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "XCometSaveDashboardControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/saved/",
      Object.freeze({ unlisted_only: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometSaveToastUtil",
  [
    "fbt",
    "CometLink.react",
    "XCometSaveDashboardControllerRouteBuilder",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a, b, d) {
      d =
        (d = d) != null
          ? d
          : a !== null
          ? c("XCometSaveDashboardControllerRouteBuilder").buildURL({
              list_id: a,
            })
          : null;
      return b != null
        ? h._("Saved to {=[Name of collection]}", [
            h._param(
              "=[Name of collection]",
              i.jsx(c("CometLink.react"), {
                href: d,
                children: h._("{Name of collection}", [
                  h._param("Name of collection", i.jsx("b", { children: b })),
                ]),
              })
            ),
          ])
        : h._("Added to collection");
    }
    g.getAddToCollectionToast = a;
  },
  98
);
__d(
  "CometEntityScopedTypeaheadDialogTrigger.react",
  [
    "fbt",
    "ix",
    "TetraButton.react",
    "fbicon",
    "react",
    "useSearchCometResultsTypeaheadDialogTriggerClickHandler",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.buttonProps,
        e = a.dialogEntryPoint,
        f = a.entityID;
      a = a.entityType;
      e = c("useSearchCometResultsTypeaheadDialogTriggerClickHandler")(e, f, a);
      f = e[0];
      a = e[1];
      var g = e[2],
        k = e[3];
      e = e[4];
      return j.jsx(
        c("TetraButton.react"),
        babelHelpers["extends"](
          {
            icon: d("fbicon")._(i("491282"), 16),
            label: h._("Search"),
            labelIsHidden: !0,
            onHoverIn: g,
            onHoverOut: k,
            onPress: f,
            onPressIn: e,
            ref: a,
            testid: void 0,
            type: "secondary",
          },
          b
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometMarketplaceCartControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/marketplace/cart/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometMarketplacePermalinkControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/marketplace/item/{listing_id}/",
      Object.freeze({ hoisted: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "MWChatVisibilitySetMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "MessengerChatVisibilitySetResponsePayload",
            kind: "LinkedField",
            name: "messenger_chat_visibility_set",
            plural: !1,
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
                    args: null,
                    kind: "ScalarField",
                    name: "chat_visibility",
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
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "MWChatVisibilitySetMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "MWChatVisibilitySetMutation",
          selections: b,
        },
        params: {
          id: "3838961626173722",
          metadata: {},
          name: "MWChatVisibilitySetMutation",
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
  "useRTWebCallBlockedSettingDialog",
  ["JSResourceForInteraction", "react", "useCometLazyDialog"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = c("JSResourceForInteraction")(
        "RTWebCallBlockedSettingDialog.react"
      ).__setRef("useRTWebCallBlockedSettingDialog");
    function a() {
      var a = c("useCometLazyDialog")(i),
        b = a[0];
      return h(
        function (a) {
          a = a.setCallBlockedSetting;
          b({ setCallBlockedSetting: a });
        },
        [b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "RTWebCallBlockedSettingMenuItem.react",
  [
    "ix",
    "CometMenuItemSelectable.react",
    "CometToggle.react",
    "fbicon",
    "react",
    "useRTWebCallBlockedSettingDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.hasCallsBlocked,
        e = a.label,
        f = a.setCallBlockedSetting,
        g = c("useRTWebCallBlockedSettingDialog")();
      return i.jsx(c("CometMenuItemSelectable.react"), {
        aux: function (a) {
          return i.jsx(c("CometToggle.react"), {
            "aria-hidden": !0,
            size: "small",
            value: a,
            children: e,
          });
        },
        icon: d("fbicon")._(h("1160762"), 20),
        isSelected: !b,
        onClick: function () {
          b ? f(0) : g({ setCallBlockedSetting: f });
        },
        preventClosingMenuOnSelect: b ? !0 : void 0,
        primaryText: e,
        role: "menuitemcheckbox",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWChatVisibilitySetMutation",
  ["MWChatVisibilitySetMutation.graphql", "cr:1012418"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("MWChatVisibilitySetMutation.graphql"));
    function a(a) {
      var c = a.environment;
      a = a.input;
      return b("cr:1012418").commitMutation(c, {
        mutation: i,
        variables: { input: babelHelpers["extends"]({}, a) },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "XChatPrivacyDialogControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/ajax/chat/privacy/settings_dialog_compat/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useCometCompatPrivacyToggle",
  [
    "CometCompatModalDialogResource",
    "CometRelay",
    "MWChatVisibilitySetMutation",
    "XChatPrivacyDialogControllerRouteBuilder",
    "react",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = d("CometRelay").useRelayEnvironment(),
        e = c("useCometLazyDialog")(c("CometCompatModalDialogResource")),
        f = e[0];
      return h(
        function () {
          if (!a) {
            d("MWChatVisibilitySetMutation").commit({
              environment: b,
              input: { chat_visibility: !0 },
            });
            return;
          }
          f({
            customCompatEventHandler: function (a) {
              a = a.addListener("chat-visibility-change", function (a) {
                if (a != null) {
                  a = a.data;
                  if (typeof a === "object") {
                    var c = a == null ? void 0 : a.chatVisibility;
                    (c === !0 || c === !1) &&
                      b.commitUpdate(function (a) {
                        a = a.getRoot();
                        if (a == null) return;
                        a = a.getLinkedRecord("viewer");
                        if (a == null) return;
                        a.setValue(c, "chat_visibility");
                      });
                  }
                }
              });
              return a.remove;
            },
            params: {
              rel: "dialog",
              uri: c("XChatPrivacyDialogControllerRouteBuilder").buildURL({
                dialog_type: "turn_off_dialog",
              }),
            },
          });
        },
        [a, b, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "MWChatSidebarSettingsDropdown.react",
  [
    "fbt",
    "ix",
    "CometMenu.react",
    "CometMenuItem.react",
    "CometMenuItemSelectable.react",
    "CometSeparatorMenuItem.react",
    "CometToggle.react",
    "MessageRequestsViewThreadlistFalcoEvent",
    "ODS",
    "RTWebCallBlockedSettingMenuItem.react",
    "XCometSettingsControllerRouteBuilder",
    "cr:11136",
    "cr:9862",
    "fbicon",
    "gkx",
    "react",
    "useCometCompatPrivacyToggle",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = h._("Message sounds"),
      l = h._("Pop-up new messages"),
      m = h._("Incoming call sounds"),
      n = b("cr:9862") != null ? b("cr:9862").make : null;
    function a(a) {
      var e = a.activeStatusOn,
        f = a.chatSoundsOn,
        g = a.chatTabsTurnedOff,
        o = a.contextualMenuItem,
        p = a.hasCallsBlocked,
        q = a.onChangeSoundsSetting,
        r = a.onChangeTurnOffTabsSetting,
        s = a.onOpenMessageRequests,
        t = a.onOpenRestrictedAccountsList;
      a = a.setCallBlockedUntil;
      var u = c("useCometCompatPrivacyToggle")(e),
        v = c("gkx")("1411") && t != null;
      return j.jsxs(c("CometMenu.react"), {
        header: {
          meta: h._("Customize your Messenger experience."),
          title: h._("Chat Settings"),
        },
        withArrow: !0,
        children: [
          j.jsx(c("RTWebCallBlockedSettingMenuItem.react"), {
            hasCallsBlocked: p,
            label: m,
            setCallBlockedSetting: a,
          }),
          j.jsx(c("CometMenuItemSelectable.react"), {
            aux: function (a) {
              return j.jsx(c("CometToggle.react"), {
                "aria-hidden": !0,
                size: "small",
                value: a,
                children: k,
              });
            },
            icon: d("fbicon")._(i("1146252"), 20),
            isSelected: f !== !1,
            onClick: q,
            preventClosingMenuOnSelect: !0,
            primaryText: k,
            role: "menuitemcheckbox",
          }),
          j.jsx(c("CometMenuItemSelectable.react"), {
            aux: function (a) {
              return j.jsx(c("CometToggle.react"), {
                "aria-hidden": !0,
                size: "small",
                value: a,
                children: l,
              });
            },
            icon: d("fbicon")._(i("1111403"), 20),
            isSelected: !g,
            onClick: function () {
              g &&
                d("ODS").bumpEntityKey(
                  3185,
                  "messenger_settings",
                  "chat_tabs_enable"
                ),
                r();
            },
            preventClosingMenuOnSelect: !0,
            primaryText: l,
            role: "menuitemcheckbox",
            secondaryText: h._("Automatically open new messages."),
            testid: void 0,
          }),
          b("cr:11136") != null
            ? j.jsx(c("CometSeparatorMenuItem.react"), {})
            : null,
          b("cr:11136") != null ? j.jsx(b("cr:11136"), {}) : null,
          o != null ? j.jsx(c("CometSeparatorMenuItem.react"), {}) : null,
          o != null ? o : null,
          n != null
            ? j.jsx(n, {})
            : j.jsx(c("CometSeparatorMenuItem.react"), {}),
          c("gkx")("1064519")
            ? j.jsx(c("CometMenuItem.react"), {
                icon: d("fbicon")._(i("1146260"), 20),
                onClick: u,
                primaryText: e
                  ? h._("Turn Off Active Status")
                  : h._("Turn on Active Status"),
                role: "menuitemcheckbox",
              })
            : null,
          s
            ? j.jsx(c("CometMenuItem.react"), {
                icon: d("fbicon")._(i("610742"), 20),
                onClick: function () {
                  c("MessageRequestsViewThreadlistFalcoEvent").log(function () {
                    return {
                      action: 0,
                      actioned_thread_count: "0",
                      actioned_unread_thread_count: "0",
                      entry_point: 3,
                      folder: -1,
                    };
                  }),
                    s();
                },
                primaryText: h._("Message Requests"),
              })
            : null,
          c("gkx")("2297")
            ? j.jsx(c("CometMenuItem.react"), {
                href: c("XCometSettingsControllerRouteBuilder").buildURL({
                  tab: "privacy",
                }),
                icon: d("fbicon")._(i("788355"), 20),
                primaryText: h._("Message delivery settings"),
                testid: void 0,
              })
            : null,
          v ? j.jsx(c("CometSeparatorMenuItem.react"), {}) : null,
          v
            ? j.jsx(c("CometMenuItem.react"), {
                icon: d("fbicon")._(i("995804"), 20),
                onClick: t,
                primaryText: h._("Restricted Accounts"),
              })
            : null,
          j.jsx(c("CometMenuItem.react"), {
            href: c("XCometSettingsControllerRouteBuilder").buildURL({
              tab: "blocking",
            }),
            icon: d("fbicon")._(i("538079"), 20),
            primaryText: h._("Block settings"),
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
  "CometHomeChatSettings.react",
  [
    "fbt",
    "ix",
    "CometMenuItemSelectable.react",
    "CometToggle.react",
    "MWChatSidebarSettingsDropdown.react",
    "fbicon",
    "react",
    "useCometHomeChatSettings",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.props;
      a = a.queries;
      a = d("useCometHomeChatSettings").useCometHomeChatSettings(
        a.chatSettingsQueryReference
      );
      var e = a.activeStatusOn,
        f = a.callBlockedUntil,
        g = a.chatSidebarIsCollapsed,
        h = a.chatSoundsOn,
        i = a.chatTabsTurnedOff;
      a = d("useCometHomeChatSettings").useCometHomeChatSettingsMutations();
      var k = a.onChangeSidebarIsCollapsedSetting,
        m = a.onChangeSoundsSetting,
        n = a.onChangeTurnOffTabsSetting;
      a = a.setCallBlockedUntil;
      return j.jsx(c("MWChatSidebarSettingsDropdown.react"), {
        activeStatusOn: e,
        chatSoundsOn: h,
        chatTabsTurnedOff: i,
        contextualMenuItem:
          b.chatSettingsContextualSection === "contacts"
            ? j.jsx(l, {
                chatSidebarIsCollapsed: g,
                onChangeSidebarIsCollapsedSetting: function () {
                  k({ is_collapsed: !g });
                },
              })
            : null,
        hasCallsBlocked: f !== 0,
        onChangeSoundsSetting: function () {
          m(!h);
        },
        onChangeTurnOffTabsSetting: function () {
          n(!i);
        },
        onOpenMessageRequests: b.onOpenMessageRequests,
        onOpenRestrictedAccountsList: b.onOpenRestrictedAccountsList,
        setCallBlockedUntil: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var k = h._("Show contacts");
    function l(a) {
      return j.jsx(c("CometMenuItemSelectable.react"), {
        aux: function (a) {
          return j.jsx(c("CometToggle.react"), {
            "aria-hidden": !0,
            size: "small",
            value: a,
            children: k,
          });
        },
        icon: d("fbicon")._(i("509569"), 20),
        isSelected: !a.chatSidebarIsCollapsed,
        onClick: a.onChangeSidebarIsCollapsedSetting,
        primaryText: k,
        role: "menuitemcheckbox",
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
