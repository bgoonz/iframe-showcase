if (self.CavalryLogger) {
  CavalryLogger.start_js(["BcrfF+3"]);
}

__d(
  "FriendingCometFriendRequestSendMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        e = [
          { kind: "Literal", name: "action_type", value: "FRIEND" },
          {
            kind: "Literal",
            name: "render_location",
            value: "WWW_COMET_PROFILE",
          },
        ],
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "FriendingCometFriendRequestSendMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "FriendRequestSendResponsePayload",
              kind: "LinkedField",
              name: "friend_request_send",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "friend_requestees",
                  plural: !0,
                  selections: [
                    c,
                    d,
                    {
                      alias: null,
                      args: e,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "ProfileActionMutationUtils_action",
                        },
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "ProfileCometTimelineTabTopBanner_user",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "FriendingCometFriendRequestSendMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "FriendRequestSendResponsePayload",
              kind: "LinkedField",
              name: "friend_request_send",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "friend_requestees",
                  plural: !0,
                  selections: [
                    c,
                    d,
                    {
                      alias: null,
                      args: e,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "profile_action",
                      plural: !1,
                      selections: [
                        f,
                        {
                          kind: "TypeDiscriminator",
                          abstractKey: "__isProfileAction",
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "icon_color",
                              value: "fds-black",
                            },
                            { kind: "Literal", name: "icon_size", value: "16" },
                            {
                              kind: "Literal",
                              name: "icon_variant",
                              value: "filled",
                            },
                            {
                              kind: "Variable",
                              name: "scale",
                              variableName: "scale",
                            },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "icon_image",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "height",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "scale",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "uri",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "width",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        c,
                        {
                          alias: null,
                          args: null,
                          concreteType: "TextWithEntities",
                          kind: "LinkedField",
                          name: "title",
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
                          kind: "ClientExtension",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_optimistic_update",
                              storageKey: null,
                            },
                          ],
                        },
                      ],
                      storageKey:
                        'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")',
                    },
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "render_location",
                          value: "TIMELINE_TAB_TOP",
                        },
                        {
                          kind: "Literal",
                          name: "supported",
                          value: [
                            "ProfilePlusAdminNotice",
                            "ProfileAppealBanner",
                            "ProfileBanner",
                            "ProfileEscapeHatch",
                            "ProfilePYMKBanner",
                          ],
                        },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "comet_profile_banner",
                      plural: !1,
                      selections: [
                        f,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometTimelineTabTopBanner_user",
                              fragmentName:
                                "ProfilePlusCometAdminNotice_cometProfileBanner",
                              fragmentPropName: "cometProfileBanner",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfilePlusAdminNotice",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometTimelineTabTopBanner_user",
                              fragmentName:
                                "ProfileCometAppealBanner_cometProfileBanner",
                              fragmentPropName: "cometProfileBanner",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfileAppealBanner",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometTimelineTabTopBanner_user",
                              fragmentName:
                                "ProfileCometBannerGeneric_cometProfileBanner",
                              fragmentPropName: "cometProfileBanner",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfileBanner",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometTimelineTabTopBanner_user",
                              fragmentName:
                                "ProfileCometEscapeHatch_cometProfileBanner",
                              fragmentPropName: "cometProfileBanner",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfileEscapeHatch",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName:
                                "ProfileCometTimelineTabTopBanner_user",
                              fragmentName:
                                "FriendingCometProfilePYMKHScroll_cometProfileBanner",
                              fragmentPropName: "cometProfileBanner",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "ProfilePYMKBanner",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [c],
                          type: "Node",
                          abstractKey: "__isNode",
                        },
                      ],
                      storageKey:
                        'comet_profile_banner(render_location:"TIMELINE_TAB_TOP",supported:["ProfilePlusAdminNotice","ProfileAppealBanner","ProfileBanner","ProfileEscapeHatch","ProfilePYMKBanner"])',
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3843759712397115",
          metadata: {},
          name: "FriendingCometFriendRequestSendMutation",
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
  "ProfileCometActionFriendRequestHandler_handler$normalization.graphql",
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
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        e = [b];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "ProfileCometActionFriendRequestHandler_handler$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "profile_action",
            plural: !1,
            selections: [
              a,
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "restrictable_profile_owner",
                    plural: !1,
                    selections: [
                      a,
                      {
                        kind: "InlineFragment",
                        selections: [
                          b,
                          c,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "gender",
                            storageKey: null,
                          },
                          d,
                        ],
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [b, c, d],
                        type: "RestrictedUser",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: e,
                        type: "Node",
                        abstractKey: "__isNode",
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "profile_owner",
                    plural: !1,
                    selections: e,
                    storageKey: null,
                  },
                ],
                type: "ProfileActionFriendRequest",
                abstractKey: null,
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
  "ProfileCometActionFriendRequestHandler_handler.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
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
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometActionFriendRequestHandler_handler",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "profile_action",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "restrictable_profile_owner",
                    plural: !1,
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: a,
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: a,
                        type: "RestrictedUser",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "ProfileActionFriendRequest",
                abstractKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometActiveFriendMenu_action",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometIncomingFriendRequestMenu_action",
              },
            ],
            storageKey: null,
          },
        ],
        type: "ProfileActionFriendRequestHandler",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "FriendRequestError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      SELF_OVER_FRIEND_LIMIT: 1431006,
      SELF_OVER_FRIEND_LIMIT_SUBSCRIBED: 1431016,
      SIGMA_WARN: 1407026,
    });
    f["default"] = a;
  },
  66
);
__d(
  "FriendingCometErrorHandler.react",
  [
    "fbt",
    "CometRelayErrorHandling",
    "FriendRequestError",
    "JSResourceForInteraction",
    "SilenceableErrorMessageUtils",
    "cometPushToast",
    "react",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useCallback,
      j = c("JSResourceForInteraction")(
        "FriendingCometErrorDialog.react"
      ).__setRef("FriendingCometErrorHandler.react");
    function a(a) {
      var b = c("useCometLazyDialog")(j),
        e = b[0],
        f = i(
          function (b) {
            var g = d("SilenceableErrorMessageUtils").getMetadataFromError(b);
            if (d("SilenceableErrorMessageUtils").shouldHideErrorMessage(g))
              return;
            b.name === "NetworkTransportError"
              ? d("cometPushToast").cometPushErrorToast(
                  {
                    message: h._(
                      "Connection error. Please check your Internet connection."
                    ),
                  },
                  5e3
                )
              : (b.code === c("FriendRequestError").SELF_OVER_FRIEND_LIMIT ||
                  b.code ===
                    c("FriendRequestError").SELF_OVER_FRIEND_LIMIT_SUBSCRIBED ||
                  b.code === c("FriendRequestError").SIGMA_WARN) &&
                (d("CometRelayErrorHandling").markErrorAsHandled(b),
                e({
                  addFriendErrorHandler: f,
                  addFriendId: a.addFriendId,
                  addFriendSource: a.addFriendSource,
                  error: b,
                }));
          },
          [a.addFriendId, a.addFriendSource, e]
        );
      return f;
    }
    g.useFriendingErrorHandler = a;
  },
  98
);
__d(
  "ProfileActionFriendingMutationUtils",
  ["fbt", "ProfileActionMutationUtils", "WebPixelRatio"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b) {
      var c = "";
      switch (a) {
        case "ARE_FRIENDS":
          c = h._("Friends").toString();
          break;
        case "CAN_REQUEST":
          c = h._("Add Friend").toString();
          break;
        case "INCOMING_REQUEST":
          c = h._("Respond").toString();
          break;
        case "OUTGOING_REQUEST":
          c = h._("Cancel Request").toString();
          break;
      }
      return {
        __typename: "ProfileActionFriendRequest",
        icon_image: {
          height: 16 * d("WebPixelRatio").get(),
          scale: d("WebPixelRatio").get(),
          uri: null,
          width: 16 * d("WebPixelRatio").get(),
        },
        id: d("ProfileActionMutationUtils").getProfileActionID(b, 1),
        is_optimistic_update: !0,
        title: { text: c },
      };
    }
    g.getOptimisticActionForFriendshipStatus = a;
  },
  98
);
__d(
  "FriendingCometFriendRequestSendMutation",
  [
    "CometRelay",
    "FriendingCometFriendRequestSendMutation.graphql",
    "ProfileActionFriendingMutationUtils",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("FriendingCometFriendRequestSendMutation.graphql"));
    function a(a, b, c, e, f, g, h) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onError: e,
        optimisticResponse: {
          friend_request_send: {
            friend_requestees: [
              {
                comet_profile_banner: null,
                friendship_status: "OUTGOING_REQUEST",
                id: b,
                profile_action: d(
                  "ProfileActionFriendingMutationUtils"
                ).getOptimisticActionForFriendshipStatus("OUTGOING_REQUEST", b),
              },
            ],
          },
        },
        variables: {
          input: {
            friend_requestee_ids: [b],
            people_you_may_know_location: f,
            refs: [g],
            source: c,
            warn_ack_for_ids: h === !0 ? [b] : [],
          },
          scale: d("WebPixelRatio").get(),
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "ProfileCometActionFriendRequestHandler.react",
  [
    "CometLazyPopoverTrigger.react",
    "CometRelay",
    "FriendingCometErrorHandler.react",
    "FriendingCometFriendRequestSendMutation",
    "JSResourceForInteraction",
    "ProfileCometActionFriendRequestHandler_handler.graphql",
    "promiseDone",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback,
      k = c("JSResourceForInteraction")(
        "ProfileCometActiveFriendMenu.react"
      ).__setRef("ProfileCometActionFriendRequestHandler.react"),
      l = c("JSResourceForInteraction")(
        "ProfileCometIncomingFriendRequestMenu.react"
      ).__setRef("ProfileCometActionFriendRequestHandler.react"),
      m = c("JSResourceForInteraction")(
        "FriendingCometFriendRequestCancelMutation"
      ).__setRef("ProfileCometActionFriendRequestHandler.react");
    function a(a) {
      var e,
        f,
        g = a.children,
        n = a.handler,
        o = a.popoverPosition;
      a = a.source;
      var p = d("CometRelay").useRelayEnvironment();
      n = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("ProfileCometActionFriendRequestHandler_handler.graphql")),
        n
      );
      n = n.profile_action;
      var q =
        (n == null
          ? void 0
          : (e = n.restrictable_profile_owner) == null
          ? void 0
          : e.id) || "0";
      q === "0" &&
        c("recoverableViolation")("Missing profile ID", "profile_comet");
      var r;
      switch (a) {
        case "WWW_COMET_HOVERCARD":
          r = "hovercard";
          break;
        case "WWW_COMET_PROFILE_FRIENDS_TAB":
          r = "profile_friends";
          break;
        default:
          r = "profile_button";
          break;
      }
      var s = d("FriendingCometErrorHandler.react").useFriendingErrorHandler({
        addFriendId: q,
        addFriendSource: "profile_button",
      });
      e = j(
        function () {
          d("FriendingCometFriendRequestSendMutation").commit(p, q, r, s);
        },
        [p, s, r, q]
      );
      a = j(
        function () {
          c("promiseDone")(
            m.load().then(function (a) {
              a = a.commit;
              a(p, q, "profile", s);
            })
          );
        },
        [p, s, q]
      );
      f =
        n == null
          ? void 0
          : (f = n.restrictable_profile_owner) == null
          ? void 0
          : f.friendship_status;
      if (f == null) {
        c("recoverableViolation")(
          "Failed to fetch friendship status for profile " + q,
          "profile_comet"
        );
        return null;
      }
      var t = null;
      switch (f) {
        case "ARE_FRIENDS":
          t = k;
          break;
        case "CAN_REQUEST":
          return g({ onPress: e });
        case "INCOMING_REQUEST":
          t = l;
          break;
        case "OUTGOING_REQUEST":
          return g({ onPress: a });
        case "CANNOT_REQUEST":
          return null;
        default:
          c("recoverableViolation")(
            "Unknown friendship status " + f + " for profile " + q,
            "profile_comet"
          );
          return null;
      }
      return !t || !n
        ? g({})
        : i.jsx(c("CometLazyPopoverTrigger.react"), {
            popoverProps: { action: n },
            popoverResource: t,
            position: o,
            preloadTrigger: "button",
            children: function (a, b, c, d, e, f) {
              return g({
                onHoverIn: d,
                onHoverOut: e,
                onPress: b,
                onPressIn: f,
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
