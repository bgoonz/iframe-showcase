if (self.CavalryLogger) {
  CavalryLogger.start_js(["PUiqUSS"]);
}

__d(
  "FriendingCometFriendRequestsListItemMenuButton_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "FriendingCometFriendRequestsListItemMenuButton_user",
      selections: [
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
          name: "FriendingCometFriendRequestsListItemMoreMenu_user",
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
  "FriendingCometFriendRequestsListItem_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "FriendingCometFriendRequestsListItem_user",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 60 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 60 },
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
        {
          args: null,
          kind: "FragmentSpread",
          name: "FriendingCometListItemWithButtons_user",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "FriendingCometFriendRequestsListItemMenuButton_user",
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
  "FriendingCometListItemWithButtons_user.graphql",
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
        name: "FriendingCometListItemWithButtons_user",
        selections: [
          {
            kind: "InlineFragment",
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "social_context",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "text",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                args: [{ kind: "Literal", name: "iconSize", value: 20 }],
                kind: "FragmentSpread",
                name: "FriendingCometMutualFriendsSocialContext_user",
              },
            ],
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a],
            type: "RestrictedUser",
            abstractKey: null,
          },
        ],
        type: "FriendNode",
        abstractKey: "__isFriendNode",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "NullStatePeople",
  ["IconSource"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      dark: new (c("IconSource"))(
        "nullStateGlyphs",
        "/images/comet/empty_states_icons/people/null_states_people_dark_mode.svg",
        112
      ),
      default: new (c("IconSource"))(
        "nullStateGlyphs",
        "/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg",
        112
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "FriendingCometFriendRequestsListItemMenuButton.react",
  [
    "fbt",
    "ix",
    "CometLazyPopoverTrigger.react",
    "CometRelay",
    "FriendingCometFriendRequestsListItemMenuButton_user.graphql",
    "JSResourceForInteraction",
    "TetraIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = c("JSResourceForInteraction")(
        "FriendingCometFriendRequestsListItemMoreMenu.react"
      ).__setRef("FriendingCometFriendRequestsListItemMenuButton.react");
    function a(a) {
      a = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b(
              "FriendingCometFriendRequestsListItemMenuButton_user.graphql"
            )),
        a.user
      );
      return a.id == null
        ? null
        : k.jsx(c("CometLazyPopoverTrigger.react"), {
            popoverProps: { user: a },
            popoverResource: l,
            children: function (a, b) {
              return k.jsx(c("TetraIcon.react"), {
                "aria-label": h._("More"),
                color: "secondary",
                icon: d("fbicon")._(i("484386"), 16),
                onPress: b,
                ref: a,
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
  "FriendingCometListItemWithButtons.react",
  [
    "fbt",
    "CometBadge.react",
    "CometRelativeTimestamp.react",
    "CometRelay",
    "CometRouteMatch",
    "ConstUriUtils",
    "FriendingCometFriendRequestStrings",
    "FriendingCometListItemWithButtons_user.graphql",
    "FriendingCometMutualFriendsSocialContext.react",
    "TetraButtonGroup.react",
    "TetraListCell.react",
    "TetraText.react",
    "gkx",
    "react",
    "useCurrentRoute",
    "useHostedRoute",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e,
        f = a.href,
        g = a.iconSrc,
        k = a.menu,
        l = a.message,
        m = a.onAddFriend,
        n = a.onCancelRequest,
        o = a.onClick,
        p = a.onConfirm,
        q = a.onDelete,
        r = a.onUnfriend,
        s = a.paddingHorizontal,
        t = a.reduceEmphasisPrimary;
      t = t === void 0 ? !1 : t;
      var u = a.routeTarget,
        v = a.shouldShowFacepile;
      v = v === void 0 ? !0 : v;
      var w = a.target,
        x = a.title,
        y = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("FriendingCometListItemWithButtons_user.graphql")),
          a.user
        );
      e = (e = a.isRequestSeen) != null ? e : !0;
      a = (a = a.timeReceived) != null ? a : 0;
      var z = 1e3,
        A = null;
      if (l != null) {
        A = j.jsx("div", {
          className: "m0hv1tm6 dco85op0",
          children: j.jsx(c("TetraText.react"), {
            color: "secondary",
            type: "body4",
            children: (l = l) != null ? l : "",
          }),
        });
      } else {
        l =
          (l = (l = y.social_context) == null ? void 0 : l.text) != null
            ? l
            : "";
        A =
          l !== ""
            ? j.jsx("div", {
                className: "jwdofwj8 scwd0bx6",
                children: j.jsx(
                  c("FriendingCometMutualFriendsSocialContext.react"),
                  {
                    iconSize: 16,
                    shouldShowFacepile: v,
                    socialContextText: l,
                    textType: "body4",
                    user: y,
                  }
                ),
              })
            : null;
      }
      v = null;
      p != null && q != null
        ? (v = {
            component: j.jsx(c("TetraButtonGroup.react"), {
              paddingTop: 0,
              primary: {
                label: h._("Confirm"),
                onPress: p,
                testid: "confirm_button",
              },
              secondary: {
                label: d("FriendingCometFriendRequestStrings").reject(),
                onPress: q,
                testid: "ignore_button",
              },
              size: "medium",
              wrap: "forward",
            }),
            type: "buttons",
          })
        : m != null && q != null
        ? (v = {
            component: j.jsx(c("TetraButtonGroup.react"), {
              paddingTop: 0,
              primary: {
                label: h._("Add Friend"),
                onPress: m,
                reduceEmphasis: t,
                testid: "add_button",
              },
              secondary: {
                label: h._("Remove"),
                onPress: q,
                testid: "remove_suggestion",
              },
              size: "medium",
              wrap: "forward",
            }),
            type: "buttons",
          })
        : n != null
        ? (v = {
            component: j.jsx(c("TetraButtonGroup.react"), {
              paddingTop: 0,
              primary: {
                label: h._("Cancel Request"),
                onPress: n,
                testid: "cancel_request_button",
                type: "secondary",
              },
              size: "medium",
              wrap: "forward",
            }),
            type: "buttons",
          })
        : r != null &&
          (v = {
            component: j.jsx(c("TetraButtonGroup.react"), {
              paddingTop: 0,
              primary: {
                label: h._("Unfriend"),
                onPress: r,
                testid: "unfriend",
                type: "secondary",
              },
              size: "medium",
              wrap: "forward",
            }),
            type: "buttons",
          });
      l = d("CometRouteMatch").useHostedRouteMatcher(
        d("CometRouteMatch").MatchFunctions.urlMatchFunction
      );
      p = c("useCurrentRoute")();
      m = c("useHostedRoute")();
      q =
        m == null &&
        p != null &&
        p.tabKey === "friends" &&
        y.id != null &&
        ((t = d("ConstUriUtils").getUri(p.url)) == null
          ? void 0
          : t.getQueryParam("profile_id")) === y.id;
      n = q || (f != null ? l(f) : !1);
      r = {
        alt: x,
        shape: "circle",
        size: 60,
        source: { uri: g },
        type: "profile-photo",
      };
      m = null;
      if (a !== 0) {
        p = new Date(a * z);
        m = e
          ? j.jsx("div", {
              className: "tmqn73lw j83agx80 bp9cbjyn",
              children: j.jsx(c("TetraText.react"), {
                color: "secondary",
                type: "body4",
                children: j.jsx(c("CometRelativeTimestamp.react"), {
                  date: p,
                  format: "minimized",
                }),
              }),
            })
          : j.jsxs("div", {
              className: "tmqn73lw j83agx80 bp9cbjyn",
              children: [
                j.jsx(c("TetraText.react"), {
                  color: "highlight",
                  type: "body4",
                  children: j.jsx(c("CometRelativeTimestamp.react"), {
                    date: p,
                    format: "minimized",
                  }),
                }),
                j.jsx("div", {
                  className: "b3onmgus r8blr3vg b5q2rw42",
                  children: j.jsx(c("CometBadge.react"), { color: "blue" }),
                }),
              ],
            });
      }
      return j.jsx(c("TetraListCell.react"), {
        addOnBottom: v,
        addOnPrimary: r,
        addOnSecondary: k ? { addOn: k, type: "body" } : null,
        body: A,
        headline: j.jsx(c("TetraText.react"), {
          type: "headlineEmphasized4",
          children: x,
        }),
        headlineAddOn: m,
        headlineLineLimit: 1,
        level: 4,
        linkProps: f != null ? { routeTarget: u, target: w, url: f } : void 0,
        onPress: o,
        paddingHorizontal: s,
        selected: n,
        selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RequestClickFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744261");
    c = b("FalcoLoggerInternal").create("request_click", a);
    e.exports = c;
  },
  null
);
__d(
  "FriendingCometFriendRequestsListItem.react",
  [
    "fbt",
    "CometRelay",
    "FriendingCometErrorHandler.react",
    "FriendingCometFriendRequestConfirmMutation",
    "FriendingCometFriendRequestDeleteMutation",
    "FriendingCometFriendRequestsListItemMenuButton.react",
    "FriendingCometFriendRequestsListItem_user.graphql",
    "FriendingCometListItemWithButtons.react",
    "FriendingCometTestIDHelper",
    "RequestClickFalcoEvent",
    "RequestSeenFalcoEvent",
    "react",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useRef;
    function a(a) {
      var e,
        f,
        g,
        m = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("FriendingCometFriendRequestsListItem_user.graphql")),
          a.user
        ),
        n = a.actionLoggingCallback,
        o = a.hideMenu,
        p = a.isSeen,
        q = a.paddingHorizontal,
        r = a.position,
        s = a.timeReceived,
        t = m.friendship_status,
        u = m.id,
        v = m.name,
        w = m.profile_picture;
      e = (e = a.href) != null ? e : m.url;
      w = w == null ? void 0 : w.uri;
      var x = (f = a.loggingSource) != null ? f : "friends_tab";
      f = (f = a.routeTarget) != null ? f : "content";
      var y = d("CometRelay").useRelayEnvironment(),
        z = l(!1),
        A = d("FriendingCometErrorHandler.react").useFriendingErrorHandler({
          addFriendId: (g = u) != null ? g : "0",
          addFriendSource: "friend_other",
        });
      g = k(
        function () {
          u != null &&
            (d("FriendingCometFriendRequestConfirmMutation").commit(
              y,
              u,
              x,
              void 0,
              A
            ),
            n && n());
        },
        [n, y, A, u, x]
      );
      var B = k(
          function () {
            u != null &&
              (d("FriendingCometFriendRequestDeleteMutation").commit(
                y,
                u,
                x,
                void 0,
                A
              ),
              n && n());
          },
          [n, y, A, u, x]
        ),
        C = k(
          function () {
            u != null &&
              (c("RequestClickFalcoEvent").log(function () {
                return { request_id: u, request_surface: x };
              }),
              n && n());
          },
          [n, u, x]
        ),
        D = k(
          function () {
            u != null &&
              !z.current &&
              (c("RequestSeenFalcoEvent").log(function () {
                return {
                  request_id: u,
                  request_position: r,
                  request_surface: x,
                };
              }),
              (z.current = !0));
            var b = a.onImpression;
            b != null && b();
          },
          [u, x, r, a.onImpression]
        );
      D = c("useVisibilityObserver")({ onVisible: D });
      if (u == null || e == null || w == null || v == null || t == null)
        return null;
      var E = null,
        F = null,
        G = null;
      switch (t) {
        case "ARE_FRIENDS":
          G = h._("Request accepted");
          F = c(
            "FriendingCometTestIDHelper"
          ).getFriendsTabFriendRequestsConfirmedTestID(u);
          break;
        case "INCOMING_REQUEST":
          return j.jsx("div", {
            "data-testid": void 0,
            ref: D,
            children: j.jsx(
              c("FriendingCometListItemWithButtons.react"),
              {
                href: e,
                iconSrc: w,
                isRequestSeen: p,
                onClick: C,
                onConfirm: g,
                onDelete: B,
                paddingHorizontal: q,
                routeTarget: f,
                timeReceived: s,
                title: v,
                user: m,
              },
              u
            ),
          });
        case "CAN_REQUEST":
          G = h._("Request removed");
          F = c(
            "FriendingCometTestIDHelper"
          ).getFriendsTabFriendRequestsDeletedTestID(u);
          o !== !0 &&
            (E = j.jsx(
              c("FriendingCometFriendRequestsListItemMenuButton.react"),
              { user: m }
            ));
          break;
        default:
          F = c("FriendingCometTestIDHelper").getFriendsTabFriendRequestsTestID(
            u
          );
          break;
      }
      return j.jsx("div", {
        "data-testid": void 0,
        ref: D,
        children: j.jsx(
          c("FriendingCometListItemWithButtons.react"),
          {
            href: e,
            iconSrc: w,
            isRequestSeen: p,
            menu: E,
            message: G,
            onClick: C,
            onConfirm: null,
            onDelete: null,
            routeTarget: f,
            title: v,
            user: m,
          },
          u
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RhcFriendRequestSeenFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744267");
    c = b("FalcoLoggerInternal").create("rhc_friend_request_seen", a);
    e.exports = c;
  },
  null
);
