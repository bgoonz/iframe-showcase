if (self.CavalryLogger) {
  CavalryLogger.start_js(["NyyapQm"]);
}

__d(
  "useLWRKeyframes_viewer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: "www", kind: "LocalArgument", name: "variant" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "useLWRKeyframes_viewer",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Variable", name: "variant", variableName: "variant" },
          ],
          concreteType: "ViewerToStoriesLWRAnimationsConnection",
          kind: "LinkedField",
          name: "stories_lwr_animations",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ViewerToStoriesLWRAnimationsEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "StoryCardLWRAnimationConfig",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "feedback_reaction_identifier",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "InspirationsStickerAnimationAsset",
                      kind: "LinkedField",
                      name: "tap_animation_asset",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "keyframe_uri",
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
  "useStoriesLWR_animations.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: "www", kind: "LocalArgument", name: "variant" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "useStoriesLWR_animations",
      selections: [
        {
          args: [
            { kind: "Variable", name: "variant", variableName: "variant" },
          ],
          kind: "FragmentSpread",
          name: "useLWRKeyframes_viewer",
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
  "useStoriesSendReplyMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "client_mutation_id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useStoriesSendReplyMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "DirectMessageReplyResponsePayload",
              kind: "LinkedField",
              name: "direct_message_reply",
              plural: !1,
              selections: [
                c,
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
                      concreteType: "StoryCardStoryInfo",
                      kind: "LinkedField",
                      name: "story_card_info",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "StoriesCardReactionSent_cardInfo",
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
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useStoriesSendReplyMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "DirectMessageReplyResponsePayload",
              kind: "LinkedField",
              name: "direct_message_reply",
              plural: !1,
              selections: [
                c,
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
                      concreteType: "StoryCardStoryInfo",
                      kind: "LinkedField",
                      name: "story_card_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: [{ kind: "Literal", name: "first", value: 10 }],
                          concreteType: "StoryCardReactionsConnection",
                          kind: "LinkedField",
                          name: "story_card_reactions",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "StoryCardReactionsEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "MessengerMontageMessageReaction",
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "messaging_actor",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "__typename",
                                          storageKey: null,
                                        },
                                        d,
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "MessengerMontageMessageActionsOfReactionConnection",
                                      kind: "LinkedField",
                                      name: "messaging_actions",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "count",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "MessengerMontageMessageActionsOfReactionEdge",
                                          kind: "LinkedField",
                                          name: "edges",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "MessengerMontageMessageAction",
                                              kind: "LinkedField",
                                              name: "node",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: "ScalarField",
                                                  name: "reaction",
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
                                    d,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: "story_card_reactions(first:10)",
                        },
                      ],
                      storageKey: null,
                    },
                    d,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3769885849805751",
          metadata: {},
          name: "useStoriesSendReplyMutation",
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
  "StoriesCTAButton.react",
  ["CometPressable.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.link,
        d = a.onClick;
      a = a.title;
      a = h.jsx("div", {
        className:
          "j1l0snac lce52004 mlh77y73 g0qnabr5 ltmttdrg a3bd9o3v qypqp5cg lrazzd5p jq4qci2q j83agx80 ljqsnud1 m2scej7v bp9cbjyn",
        children: a,
      });
      return h.jsx("div", {
        className:
          "j1l0snac lce52004 mlh77y73 tkr6xdv7 d6emx29t ife1yexw stjgntxs ni8dbmo4 rq0escxv jze8crwl fzsosmu5 tkdtxxdq nvi9zq2q ddn55etz todgtsvd mher9iwd okr6w53f cft5xzfc",
        children:
          b != null
            ? h.jsx(c("CometPressable.react"), {
                hideHoverOverlay: !0,
                linkProps: { target: "_blank", url: b },
                onPress: d,
                children: a,
              })
            : a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesGradientBackground.react",
  ["StoriesEnums", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a) {
      var b = a.direction,
        c = a.from,
        e = a.onLoad;
      a = a.to;
      i(
        function () {
          e && e();
        },
        [e]
      );
      a = a;
      c = c;
      if (!(a != null && c != null)) return null;
      a = a != null ? a : c;
      c = c != null ? c : a;
      var f = "";
      switch (b) {
        case d("StoriesEnums").GRADIENT_DIRECTION.BL_TR:
        case d("StoriesEnums").GRADIENT_DIRECTION.TR_BL:
          f = "45deg";
          break;
        case d("StoriesEnums").GRADIENT_DIRECTION.LEFT_RIGHT:
        case d("StoriesEnums").GRADIENT_DIRECTION.RIGHT_LEFT:
          f = "to right";
          break;
        case d("StoriesEnums").GRADIENT_DIRECTION.TL_BR:
        case d("StoriesEnums").GRADIENT_DIRECTION.BR_TL:
          f = "135deg";
          break;
        case d("StoriesEnums").GRADIENT_DIRECTION.TOP_BOTTOM:
        case d("StoriesEnums").GRADIENT_DIRECTION.BOTTOM_TOP:
          f = "to bottom";
          break;
        default:
          f = "0deg";
      }
      b = {
        backgroundImage:
          "linear-gradient(" + f + "," + c + " 0%," + a + " 100%)",
      };
      return h.jsx("div", { className: "k4urcfbm datstx6m", style: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesLWRKeyframe.react",
  ["ViewportAwareKeyframes.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 47,
      j = 30,
      k = 0,
      l = 190,
      m = 400,
      n = 1;
    function a(a) {
      var b = a.containerWidth,
        d = a.kf,
        e = a.kfHOffset;
      e = e === void 0 ? j : e;
      var f = a.kfVOffset;
      f = f === void 0 ? k : f;
      var g = a.kfWidth;
      g = g === void 0 ? l : g;
      var o = a.kfHeight;
      o = o === void 0 ? m : o;
      a = a.reactionWidth;
      a = a === void 0 ? i : a;
      var p = d.assetName,
        q = d.index,
        r = d.onRepeatEnd,
        s = d.random,
        t = d.scale;
      t = t === void 0 ? 1 : t;
      d = d.uri;
      s != null && s >= 0 && b != null
        ? (s = Math.floor(e + s * (b - e)))
        : (s = e + q * a);
      b = { bottom: f + "px", left: s + "px", position: "absolute" };
      return h.jsx(c("ViewportAwareKeyframes.react"), {
        assetName: p,
        className: "cj5g2342 pmk7jnqg hzruof5a i09qtzwb",
        height: o * t,
        onRepeatEnd: r,
        playing: "always",
        projectName: "facebook_stories",
        repeatCount: n,
        source: d,
        style: b,
        width: g * t,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useLWRKeyframes",
  [
    "CometRelay",
    "StoriesUniqueID",
    "UFIReactionTypes",
    "orEmptyArray",
    "react",
    "useLWRKeyframes_viewer.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useCallback,
      j = e.useRef,
      k = e.useState,
      l =
        ((f = {}),
        (f[1] = "LIKE"),
        (f[2] = "LOVE"),
        (f[4] = "HAHA"),
        (f[3] = "WOW"),
        (f[7] = "SORRY"),
        (f[8] = "ANGER"),
        (f[16] = "SUPPORT"),
        f),
      m = h !== void 0 ? h : (h = b("useLWRKeyframes_viewer.graphql"));
    function a(a) {
      var b = a.initializeVisualAttributes,
        e = a.onKeyframesRemoved,
        f = a.onKeyframesSelected;
      a = a.viewer;
      var g = j(null),
        h = k([]),
        n = h[0],
        o = h[1],
        p = d("CometRelay").useFragment(m, a);
      a = i(
        function (a) {
          d = d();
          if (d == null) return;
          f != null && f();
          g.current = [].concat(c("orEmptyArray")(g.current), [d]);
          o(g.current);
          function d() {
            var d;
            d =
              p == null
                ? void 0
                : (d = p.stories_lwr_animations) == null
                ? void 0
                : d.edges;
            if (d == null) return null;
            var f = null,
              h = l[a];
            for (var i = 0; i < d.length; ++i) {
              var j,
                k = d == null ? void 0 : (j = d[i]) == null ? void 0 : j.node;
              if ((k == null ? void 0 : k.feedback_reaction_identifier) === h) {
                j = (function () {
                  var d,
                    i = c("StoriesUniqueID")();
                  d =
                    k == null
                      ? void 0
                      : (d = k.tap_animation_asset) == null
                      ? void 0
                      : d.keyframe_uri;
                  if (d == null) return "break";
                  var j = b == null ? { random: -1, scale: 1 } : b();
                  d += "&" + i;
                  f = babelHelpers["extends"](
                    {
                      assetName: h,
                      index: c("UFIReactionTypes").ordering.indexOf(a),
                      key: i,
                      onRepeatEnd: function () {
                        var a = c("orEmptyArray")(g.current).slice();
                        for (var b = 0; b < a.length; b++)
                          if (a[b].key === i) {
                            a.splice(b, 1);
                            break;
                          }
                        e != null && e(a);
                        g.current = a;
                        o(a);
                      },
                      uri: d,
                    },
                    j
                  );
                  return "break";
                })();
                if (j === "break") break;
              }
            }
            return f;
          }
        },
        [
          p == null
            ? void 0
            : (h = p.stories_lwr_animations) == null
            ? void 0
            : h.edges,
          b,
          e,
          f,
        ]
      );
      h = i(
        function () {
          e != null && e([]), (g.current = []), o(g.current);
        },
        [e]
      );
      return [n, a, h];
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoryReplyType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      UNKNOWN: "unknown",
      TEXT: "text",
      LIGHT_WEIGHT: "light_weight",
      MEDIA: "media",
      STICKER: "sticker",
      GIF: "gif",
      PHOTO: "photo",
      VIDEO: "video",
      POLL_VOTE: "poll_vote",
      QUIZ_VOTE: "quiz_vote",
      SLIDER_VOTE: "slider_vote",
      REACTION_STICKER_REACT: "reaction_sticker_react",
      CONTEXTUAL_REPLY: "contextual_reply",
      AUDIO: "audio",
      PREDICTION_STICKER_VOTE: "prediction_sticker_vote",
    });
    f["default"] = a;
  },
  66
);
__d(
  "useStoriesShowSentTextToast",
  [
    "fbt",
    "ix",
    "TetraIcon.react",
    "cometPushToast",
    "fbicon",
    "react",
    "useToasterStateManager",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a, b) {
      var e = c("useToasterStateManager")(),
        f = j.jsx(c("TetraIcon.react"), {
          color: "highlight",
          icon: d("fbicon")._(i("498146"), 20),
          size: 20,
        }),
        g =
          b === !0
            ? h._("Reply Sent to {Story's Page's name}", [
                h._param("Story's Page's name", a),
              ])
            : h._("Reply Sent to {Story's owner's name}", [
                h._param("Story's owner's name", a),
              ]);
      return function () {
        d("cometPushToast").cometPushToast({ icon: f, message: g }, void 0, e);
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesSendReply",
  [
    "CometRelay",
    "StoriesActorContext",
    "StoriesGating",
    "StoriesLoggingConstants",
    "StoryReplyType",
    "cometPushToast",
    "react",
    "useStoriesSendReplyMutation.graphql",
    "useStoriesShowSentTextToast",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useContext,
      j = e.useMemo,
      k = function (a, b, d) {
        var e = a.get(b.storyID);
        e = e && e.getLinkedRecord("story_card_info");
        e = e && e.getLinkedRecord("story_card_reactions", { first: 10 });
        if (e == null) return;
        var f = null,
          g = null,
          h = null,
          i = e.getLinkedRecords("edges");
        if (i == null || i.length === 0) {
          var j = a.create("client:newNode:" + c("uuid")(), "MessagingActor");
          j.setValue(d, "id");
          j.setValue("User", "__typename");
          d = a.create(
            "client:newNode:" + c("uuid")(),
            "MessengerMontageMessageActionsOfReactionConnection"
          );
          h = [];
          d.setLinkedRecords(h, "edges");
          g = d;
          var k = a.create(
            "client:newNode:" + c("uuid")(),
            "MessengerMontageMessageReaction"
          );
          k.setLinkedRecord(j, "messaging_actor");
          k.setLinkedRecord(d, "messaging_actions");
          f = k;
          j = a.create(
            "client:newNode:" + c("uuid")(),
            "StoryCardReactionsEdge"
          );
          j.setLinkedRecord(k, "node");
          i = [j];
          e.setLinkedRecords(i, "edges");
        } else
          (f = i[0] && i[0].getLinkedRecord("node")),
            (g = f && f.getLinkedRecord("messaging_actions")),
            (h = g && g.getLinkedRecords("edges"));
        if (g == null || h == null || f == null) return;
        d = a.create(
          "client:newNode:" + c("uuid")(),
          "MessengerMontageMessageAction"
        );
        d.setValue(b.unicode, "reaction");
        k = a.create(
          "client:newNode:" + c("uuid")(),
          "MessengerMontageMessageActionsOfReactionEdge"
        );
        k.setLinkedRecord(d, "node");
        h.push(k);
        g.setLinkedRecords(h, "edges");
        g.setValue(h.length, "count");
      },
      l = h !== void 0 ? h : (h = b("useStoriesSendReplyMutation.graphql"));
    function m(a) {
      var b;
      return (b = Object.keys(c("StoryReplyType")).find(function (b) {
        return c("StoryReplyType")[b] === a;
      })) != null
        ? b
        : "UNKNOWN";
    }
    function a(a, b) {
      var e = d("CometRelay").useRelayEnvironment(),
        f = i(c("StoriesActorContext")),
        g = f.actorID,
        h = c("useStoriesShowSentTextToast")(a, b);
      return j(
        function () {
          var a = function (a, b) {
              return d("CometRelay").commitMutation(e, {
                mutation: l,
                onCompleted: function (a, d) {
                  h(),
                    b.replyAttemptCompletedLog(
                      c("StoryReplyType").GIF,
                      d == null ? null : d[0]
                    );
                },
                onError: function (a) {
                  b.replyAttemptCompletedLog(c("StoryReplyType").GIF, a);
                },
                variables: {
                  input: {
                    gif_url: a.gifUrl,
                    story_id: a.storyID,
                    story_reply_type: m(c("StoryReplyType").GIF),
                  },
                },
              });
            },
            b = function (a, b) {
              return d("CometRelay").commitMutation(e, {
                mutation: l,
                onCompleted: function (a, d) {
                  b.replyAttemptCompletedLog(
                    c("StoryReplyType").LIGHT_WEIGHT,
                    d == null ? null : d[0]
                  );
                },
                onError: function (a) {
                  b.replyAttemptCompletedLog(
                    c("StoryReplyType").LIGHT_WEIGHT,
                    a
                  );
                },
                optimisticUpdater: function (b) {
                  return k(b, a, g);
                },
                variables: {
                  input: {
                    lightweight_reaction_actions: {
                      offsets: [a.timeOffset || 0],
                      reaction: a.unicode,
                    },
                    message: a.unicode,
                    story_id: a.storyID,
                    story_reply_type: m(c("StoryReplyType").LIGHT_WEIGHT),
                  },
                },
              });
            },
            f = function (a, b) {
              var f =
                a.isContextualReply === !0
                  ? c("StoryReplyType").CONTEXTUAL_REPLY
                  : c("StoryReplyType").STICKER;
              return d("CometRelay").commitMutation(e, {
                mutation: l,
                onCompleted: function (a, c) {
                  h(), b.replyAttemptCompletedLog(f, c == null ? null : c[0]);
                },
                onError: function (a) {
                  b.replyAttemptCompletedLog(f, a);
                },
                variables: {
                  input: {
                    sticker_id: a.stickerID,
                    story_id: a.storyID,
                    story_reply_type: m(f),
                  },
                },
              });
            },
            i = function (a, b, f, g) {
              f.replyLog(
                c("StoriesLoggingConstants").ACTION_TYPE.SEND_REPLY_ATTEMPT
              );
              var i =
                b === !0
                  ? c("StoryReplyType").CONTEXTUAL_REPLY
                  : c("StoryReplyType").TEXT;
              return d("CometRelay").commitMutation(e, {
                mutation: l,
                onCompleted: (function (b) {
                  function a(a, c) {
                    return b.apply(this, arguments);
                  }
                  a.toString = function () {
                    return b.toString();
                  };
                  return a;
                })(function (a, b) {
                  h();
                  f.replyAttemptCompletedLog(i, b == null ? null : b[0]);
                  g && g(b);
                  a = b == null;
                  d("StoriesGating").isTest() &&
                    a &&
                    d("cometPushToast").cometPushSimpleToast(
                      "text reply successful"
                    );
                }),
                onError: function (a) {
                  f.replyAttemptCompletedLog(i, a);
                },
                variables: {
                  input: {
                    message: a.message,
                    story_id: a.storyID,
                    story_reply_type: m(i),
                  },
                },
              });
            };
          return { sendGif: a, sendLWR: b, sendSticker: f, sendText: i };
        },
        [g, e, h]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesLWR.react",
  [
    "CometRelay",
    "Random",
    "StoriesEnums",
    "StoriesLoggerContext",
    "StoriesPauseReasons",
    "react",
    "useLWRKeyframes",
    "useStoriesLWR_animations.graphql",
    "useStoriesSendReply",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = 0.55,
      l =
        ((f = {}),
        (f[1] = d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.LIKE),
        (f[2] = d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.LOVE),
        (f[4] = d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.HAHA),
        (f[3] = d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.WOW),
        (f[7] = d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.SORRY),
        (f[8] = d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.ANGER),
        (f[16] = d("StoriesEnums").LIGHTWEIGHT_REACTION_UNICODES.SUPPORT),
        f),
      m = h !== void 0 ? h : (h = b("useStoriesLWR_animations.graphql"));
    function a(a) {
      var b = a.animations,
        e = a.cardID,
        f = a.isClicked,
        g = f === void 0 ? !1 : f,
        h = a.setPause;
      f = d("CometRelay").useFragment(m, b);
      a = j(c("StoriesLoggerContext"));
      var n = a.logger;
      b = c("useStoriesSendReply")();
      var o = b.sendLWR;
      a = i(
        function () {
          g && h(!0, d("StoriesPauseReasons").LWR_PLAYBACK);
        },
        [g, h]
      );
      b = i(
        function (a) {
          g && a.length === 0 && h(!1, d("StoriesPauseReasons").LWR_PLAYBACK);
        },
        [g, h]
      );
      var p = i(
        function () {
          return g
            ? { random: -1, scale: 1 }
            : {
                random: d("Random").random(),
                scale: 1 + d("Random").random() * k,
              };
        },
        [g]
      );
      p = c("useLWRKeyframes")({
        initializeVisualAttributes: p,
        onKeyframesRemoved: b,
        onKeyframesSelected: a,
        viewer: f,
      });
      b = p[0];
      var q = p[1];
      a = i(
        function (a) {
          e != null && g && o({ storyID: e, unicode: l[a] }, n), q(a);
        },
        [q, e, g, n, o]
      );
      return [b, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseCardModalContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      isMuted: !1,
      isOpen: !1,
      onMuteChanged: function (a) {},
      setOpenModal: function (a) {},
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "useStoriesSuspensePause",
  [
    "StoriesLoggerContext",
    "StoriesPauseReasons",
    "Visibility",
    "cr:809608",
    "react",
    "storiesViewerSuspenseEmitter",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useContext,
      j = e.useEffect,
      k = e.useRef,
      l = e.useState;
    function a() {
      var a = l(!1),
        e = a[0],
        f = a[1];
      a = i(c("StoriesLoggerContext"));
      var g = a.logger,
        m = k({}),
        n = h(
          function (a, b) {
            if (a) (m.current[b] = !0), f(a), g.pauseLog(!0, b);
            else {
              if (
                b === d("StoriesPauseReasons").CARD_CHANGE &&
                m.current[d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY] === !0
              ) {
                m.current =
                  ((a = {}),
                  (a[d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY] = !0),
                  a);
              } else
                b === d("StoriesPauseReasons").CLICK_PAUSE_ICON ||
                b === d("StoriesPauseReasons").KEYBOARD ||
                b === d("StoriesPauseReasons").BUCKET_TRANSITION ||
                b === d("StoriesPauseReasons").CARD_CHANGE ||
                b === d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY ||
                b === d("StoriesPauseReasons").BUCKET_REFRESH
                  ? (m.current = {})
                  : delete m.current[b];
              Object.keys(m.current).length === 0 && (f(!1), g.pauseLog(!1, b));
            }
          },
          [g]
        );
      j(
        function () {
          return c("storiesViewerSuspenseEmitter").listenToPauseRequest(
            function () {
              return n.apply(void 0, arguments);
            }
          );
        },
        [n]
      );
      j(
        function () {
          if (b("cr:809608") == null) return;
          var a = b("cr:809608")({
            onJewelHidden: function () {
              n(!1, d("StoriesPauseReasons").JEWEL);
            },
            onJewelShown: function () {
              n(!0, d("StoriesPauseReasons").JEWEL);
            },
          });
          return a;
        },
        [n]
      );
      j(
        function () {
          var a = [
            c("Visibility").addListener(c("Visibility").HIDDEN, function () {
              return n(!0, d("StoriesPauseReasons").VISIBILITY_CHANGE);
            }),
            c("Visibility").addListener(c("Visibility").VISIBLE, function () {
              return n(!1, d("StoriesPauseReasons").VISIBILITY_CHANGE);
            }),
          ];
          return function () {
            a.forEach(function (a) {
              return a.remove();
            });
          };
        },
        [n]
      );
      return [e, n];
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspensePauseContextProvider.react",
  ["StoriesSuspensePauseContext", "react", "useStoriesSuspensePause"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      a = a.children;
      var b = c("useStoriesSuspensePause")(),
        d = b[0],
        e = b[1];
      b = i(
        function () {
          return { isPaused: d, setPause: e };
        },
        [d, e]
      );
      return h.jsx(c("StoriesSuspensePauseContext").Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
