if (self.CavalryLogger) {
  CavalryLogger.start_js(["myvjzIt"]);
}

__d(
  "FriendingCometPYMKCard_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "scale" },
        { defaultValue: 230, kind: "LocalArgument", name: "size" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "FriendingCometPYMKCard_user",
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
          name: "friendship_status",
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
          args: [
            { kind: "Variable", name: "height", variableName: "size" },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Variable", name: "width", variableName: "size" },
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
          args: [{ kind: "Literal", name: "iconSize", value: 16 }],
          kind: "FragmentSpread",
          name: "FriendingCometMutualFriendsSocialContext_user",
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
  "FriendingCometHScrollGlimmerCard.react",
  ["BaseGlimmer.react", "CometCard.react", "react", "useVisibilityObserver"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.onVisible;
      a = c("useVisibilityObserver")({
        onVisible: a,
        options: { rootMargin: 200 },
      });
      return h.jsx("div", {
        className: "k4urcfbm datstx6m j83agx80",
        ref: a,
        children: h.jsxs(c("CometCard.react"), {
          background: "white",
          border: "solid",
          dropShadow: 1,
          children: [
            h.jsx("div", {
              className: "k4urcfbm d5it6em2",
              children: h.jsx(c("BaseGlimmer.react"), {
                className:
                  "kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
                index: 0,
              }),
            }),
            h.jsxs("div", {
              className: "tw6a2znq f10w8fjw d1544ag0 pybr56ya hdvgg9ib",
              children: [
                h.jsx(c("BaseGlimmer.react"), {
                  className:
                    "r1eg49ei rs0gx3tq i4qgphn6 kv0toi1t j6sty90h jos75b7i t0qjyqq4",
                  index: 0,
                }),
                h.jsx(c("BaseGlimmer.react"), {
                  className:
                    "n99xedck ku2m03ct cyypbtt7 kv0toi1t j6sty90h jos75b7i t0qjyqq4",
                  index: 0,
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
  "CometRecommendationsUnitCard.react",
  [
    "fbt",
    "ix",
    "ActorHovercard.react",
    "CometAspectRatioContainer.react",
    "CometBackgroundImage.react",
    "CometCard.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometImage.react",
    "CometLink.react",
    "TetraButton.react",
    "TetraCircleButton.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
    "stylex",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    e = b.forwardRef;
    var k = b.useCallback,
      l = b.useRef,
      m = {
        cardContext: {
          alignItems: "bp9cbjyn",
          display: "j83agx80",
          height: "gl3lb2sf",
          width: "k4urcfbm",
        },
        container: { width: "k4urcfbm" },
        contentColumn: { maxWidth: "d2edcug0" },
        contentRoot: { display: "j83agx80" },
        contentRowShort: { height: "bq79dmyb" },
        contentRowStandard: { height: "fbzcu06b" },
        contentRowTall: { height: "lz9ov98a" },
        headlineRow: { display: "j83agx80", justifyContent: "i1fnvgqd" },
        image: { height: "datstx6m", objectFit: "bixrwtb6", width: "k4urcfbm" },
        imageContainer: {
          paddingBottom: "d5it6em2",
          position: "l9j0dhe7",
          width: "k4urcfbm",
        },
        imageLink: {
          bottom: "i09qtzwb",
          boxSizing: "rq0escxv",
          end: "n7fi1qx3",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          display: "a8c37x1j",
        },
        inset: {
          bottom: "i09qtzwb",
          boxShadow: "oaz4zybt",
          height: "ay7djpcl",
          position: "pmk7jnqg",
          width: "k4urcfbm",
        },
        xoutButton: { end: "swmj3c3o", position: "pmk7jnqg", top: "fcg2cn6m" },
      };
    function a(a, b) {
      var e = a.accessibilityLabel,
        f = a.actorID,
        g = a.badge,
        n = a.body,
        o = a.cardAction,
        p = a.cardContentHeightLevel,
        q = a.cardContext;
      q = q === void 0 ? null : q;
      var r = a.cardFooter;
      r = r === void 0 ? null : r;
      var s = a.dropShadow;
      s = s === void 0 ? 2 : s;
      var t = a.headline,
        u = a.imageAlt,
        v = a.imageAspectRatio,
        w = a.imageSrc,
        x = a.isCardContextHidden;
      x = x === void 0 ? !1 : x;
      var y = a.linkURI,
        z = a.messageIcon;
      z = z === void 0 ? null : z;
      var A = a.meta,
        B = a.onClick,
        C = a.onHeadlineClick,
        D = a.onImageClick,
        E = a.onImpression,
        F = a.onRemove;
      a = a.testid;
      var G = l(!1);
      a = k(
        function () {
          if (f == null) return;
          G.current || (E && E(), (G.current = !0));
        },
        [f, E]
      );
      a = c("useVisibilityObserver")({ onVisible: a });
      var H = function () {
          B && B(), D && D();
        },
        I = function () {
          B && B(), C && C();
        };
      return j.jsx("div", {
        className: c("stylex")(m.container),
        "data-testid": void 0,
        ref: a,
        children: j.jsx(c("CometCard.react"), {
          background: "white",
          border: "solid",
          dropShadow: s,
          ref: b,
          children: j.jsxs("div", {
            className: c("stylex")(m.contentRoot),
            children: [
              j.jsxs(c("CometColumn.react"), {
                expanding: !0,
                paddingTop: 0,
                paddingVertical: 12,
                spacing: 12,
                xstyle: m.contentColumn,
                children: [
                  j.jsx(c("CometColumnItem.react"), {
                    children:
                      v == null
                        ? j.jsxs("div", {
                            className: c("stylex")(m.imageContainer),
                            children: [
                              j.jsx(c("CometLink.react"), {
                                "aria-hidden": e == null,
                                "aria-label": e,
                                href: y,
                                onClick: H,
                                xstyle: m.imageLink,
                                children: j.jsx(c("CometImage.react"), {
                                  alt: u,
                                  src: w,
                                  xstyle: m.image,
                                }),
                              }),
                              j.jsx("div", { className: c("stylex")(m.inset) }),
                            ],
                          })
                        : j.jsx(c("CometLink.react"), {
                            href: y,
                            onClick: H,
                            children: j.jsx(
                              c("CometAspectRatioContainer.react"),
                              {
                                aspectRatio: v,
                                children: j.jsx(
                                  c("CometBackgroundImage.react"),
                                  { alt: u, src: w }
                                ),
                              }
                            ),
                          }),
                  }),
                  j.jsx(c("CometColumnItem.react"), {
                    paddingHorizontal: 12,
                    xstyle: [
                      p === 0 && m.contentRowShort,
                      p === 1 && m.contentRowStandard,
                      p === 2 && m.contentRowTall,
                    ],
                    children: j.jsxs("div", {
                      className: c("stylex")(m.headlineRow),
                      children: [
                        j.jsx(c("TetraTextPairing.react"), {
                          body: n,
                          bodyColor: "secondary",
                          headline: j.jsx(c("ActorHovercard.react"), {
                            actorID: f,
                            children: function (a) {
                              return j.jsxs(j.Fragment, {
                                children: [
                                  j.jsx(c("CometLink.react"), {
                                    "aria-hidden": !1,
                                    href: y,
                                    onClick: I,
                                    ref: a,
                                    children: t,
                                  }),
                                  g,
                                ],
                              });
                            },
                          }),
                          headlineLineLimit: p == null ? 1 : 2,
                          level: 3,
                          meta: A,
                        }),
                        z,
                      ],
                    }),
                  }),
                  !x &&
                    j.jsx(c("CometColumnItem.react"), {
                      paddingHorizontal: 12,
                      children: j.jsx("div", {
                        className: c("stylex")(m.cardContext),
                        children: q,
                      }),
                    }),
                  o != null &&
                    j.jsx(c("CometColumnItem.react"), {
                      expanding: !0,
                      paddingHorizontal: 12,
                      verticalAlign: "bottom",
                      children: j.jsx(
                        c("TetraButton.react"),
                        babelHelpers["extends"]({}, o, {
                          reduceEmphasis:
                            (a = o.reduceEmphasis) != null ? a : !0,
                        })
                      ),
                    }),
                  r &&
                    j.jsx(c("CometColumnItem.react"), {
                      paddingHorizontal: 12,
                      children: r,
                    }),
                ],
              }),
              F != null
                ? j.jsx("div", {
                    className: c("stylex")(m.xoutButton),
                    children: j.jsx(c("TetraCircleButton.react"), {
                      icon: d("fbicon")._(i("478233"), 20),
                      label: h._("Close"),
                      onPress: F,
                      size: 32,
                      type: "dark-overlay",
                    }),
                  })
                : null,
            ],
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e(a);
    g["default"] = b;
  },
  98
);
__d(
  "FriendingCometPYMKCard.react",
  [
    "fbt",
    "ix",
    "CometRecommendationsUnitCard.react",
    "CometRelay",
    "FriendingCometErrorHandler.react",
    "FriendingCometFriendRequestCancelMutation",
    "FriendingCometFriendRequestSendMutation",
    "FriendingCometMutualFriendsSocialContext.react",
    "FriendingCometPYMKCard_user.graphql",
    "FriendingCometTestIDHelper",
    "TetraButton.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useRef;
    function a(a) {
      var e = d("CometRelay").useFragment(
          j !== void 0 ? j : (j = b("FriendingCometPYMKCard_user.graphql")),
          a.user
        ),
        f = a.addFriendSource,
        g = a.cancelRequestSource,
        n = a.dropShadow;
      n = n === void 0 ? 2 : n;
      var o = a.hasButtonIcons;
      o = o === void 0 ? !0 : o;
      var p = a.hasRemoveTextButton;
      p = p === void 0 ? !1 : p;
      var q = a.logAddFriend,
        r = a.logClick,
        s = a.logImpression,
        t = a.onRemove,
        u = a.profileURI,
        v = a.pymkLocation;
      a = e.friendship_status;
      var w = e.id,
        x = e.name,
        y = e.profile_picture;
      y = y == null ? void 0 : y.uri;
      var z = d("CometRelay").useRelayEnvironment(),
        A = m(!1),
        B = m(a),
        C = B.current !== a;
      C && (B.current = a);
      var D = d("FriendingCometErrorHandler.react").useFriendingErrorHandler({
        addFriendId: (B = w) != null ? B : "0",
        addFriendSource: f,
      });
      B = l(
        function () {
          w != null &&
            (d("FriendingCometFriendRequestSendMutation").commit(z, w, f, D, v),
            q != null && q());
        },
        [f, z, D, w, q, v]
      );
      var E = l(
        function () {
          w != null &&
            ((A.current = !0),
            d("FriendingCometFriendRequestCancelMutation").commit(z, w, g, D));
        },
        [g, z, D, w]
      );
      if (w == null || y == null || x == null) return null;
      var F = void 0,
        G = null,
        H = null;
      switch (a) {
        case "CAN_REQUEST":
          F = {
            icon: o ? d("fbicon")._(i("497883"), 16) : null,
            label: h._("Add Friend"),
            onPress: B,
            testid: "add_button",
          };
          G = p
            ? k.jsx("div", {
                className: "k4urcfbm hddg9phg",
                children: k.jsx(c("TetraButton.react"), {
                  icon: o ? d("fbicon")._(i("664704"), 16) : null,
                  label: h._("Remove"),
                  onPress: t,
                  testid: void 0,
                  type: "secondary",
                }),
              })
            : null;
          H = A.current ? h._("Request canceled") : null;
          break;
        case "OUTGOING_REQUEST":
          F = p
            ? void 0
            : {
                icon: o ? d("fbicon")._(i("664704"), 16) : null,
                label: h._("Cancel"),
                onPress: E,
                reduceEmphasis: !1,
                testid: "cancel_request_button",
                type: "secondary",
              };
          G = p
            ? k.jsxs(k.Fragment, {
                children: [
                  k.jsx("div", { className: "k4urcfbm m7zwrmfr" }),
                  k.jsx("div", {
                    className: "k4urcfbm hddg9phg",
                    children: k.jsx(c("TetraButton.react"), {
                      icon: o ? d("fbicon")._(i("664704"), 16) : null,
                      label: h._("Cancel"),
                      onPress: E,
                      testid: void 0,
                      type: "secondary",
                    }),
                  }),
                ],
              })
            : null;
          H = h._("Request sent");
          break;
      }
      a = null;
      if (C && H != null)
        a = k.jsx(c("TetraText.react"), {
          color: "secondary",
          numberOfLines: 1,
          type: "body3",
          children: H,
        });
      else {
        E =
          (o = (B = e.social_context) == null ? void 0 : B.text) != null
            ? o
            : "";
        a =
          E !== ""
            ? k.jsx(c("FriendingCometMutualFriendsSocialContext.react"), {
                iconSize: 16,
                socialContextText: E,
                textType: "body3",
                truncateContextText: !0,
                user: e,
              })
            : null;
      }
      A.current = !1;
      return k.jsx(c("CometRecommendationsUnitCard.react"), {
        actorID: w,
        cardAction: F,
        cardContext: a,
        cardFooter: G,
        dropShadow: n,
        headline: x,
        imageAlt:
          x !== ""
            ? h._("Profile Photo of {name}", [h._param("name", x)])
            : h._("Profile photo"),
        imageSrc: y,
        linkURI: u,
        onClick: r,
        onImpression: s,
        onRemove: p ? void 0 : t,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XCometMeTabControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/me/{tab}/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
