if (self.CavalryLogger) {
  CavalryLogger.start_js(["Ld03M+t"]);
}

__d(
  "CometUFIFeedbackReactMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "useDefaultActor",
          },
        ],
        b = [{ kind: "Variable", name: "data", variableName: "input" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "detection_analytics_enabled",
          storageKey: null,
        },
        d = [
          {
            kind: "Variable",
            name: "use_default_actor",
            variableName: "useDefaultActor",
          },
        ],
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        i = {
          alias: "i18n_reaction_count",
          args: null,
          kind: "ScalarField",
          name: "reaction_count_reduced",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "count",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometUFIFeedbackReactMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "FeedbackReactResponsePayload",
              kind: "LinkedField",
              name: "feedback_react",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Feedback",
                  kind: "LinkedField",
                  name: "feedback",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "UFI2ReactionActionLink_feedback",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "UFI2ReactionsCount_feedback",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "UFI2CommentTopReactions_feedback",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "UFI2CommentTopReactionsWrapper_feedback",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "UFI2TopReactions_feedback",
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "CometUFIFeedbackReactMutation_feedback",
                    },
                  ],
                  storageKey: null,
                },
                c,
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
          name: "CometUFIFeedbackReactMutation",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "FeedbackReactResponsePayload",
              kind: "LinkedField",
              name: "feedback_react",
              plural: !1,
              selections: [
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
                      args: d,
                      kind: "ScalarField",
                      name: "can_viewer_react",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: d,
                      concreteType: "FeedbackReactionInfo",
                      kind: "LinkedField",
                      name: "viewer_feedback_reaction_info",
                      plural: !1,
                      selections: [e, f, g],
                      storageKey: null,
                    },
                    f,
                    {
                      alias: null,
                      args: d,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "viewer_actor",
                      plural: !1,
                      selections: [g, f, h],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "FeedbackReaction",
                      kind: "LinkedField",
                      name: "supported_reactions",
                      plural: !0,
                      selections: [e, f],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Video",
                      kind: "LinkedField",
                      name: "associated_video",
                      plural: !1,
                      selections: [f],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "orderby",
                          value: ["COUNT_DESC", "REACTION_TYPE"],
                        },
                      ],
                      concreteType: "TopReactionsConnection",
                      kind: "LinkedField",
                      name: "top_reactions",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "TopReactionsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "reaction_count",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "FeedbackReactionInfo",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                e,
                                f,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "reaction_type",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "svg_image",
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
                                  kind: "ScalarField",
                                  name: "localized_name",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            i,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "ReactorsOfContentConnection",
                      kind: "LinkedField",
                      name: "reactors",
                      plural: !1,
                      selections: [
                        j,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_empty",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "count_reduced",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    i,
                    {
                      alias: null,
                      args: [{ kind: "Literal", name: "first", value: 2 }],
                      concreteType: "ImportantReactorsConnection",
                      kind: "LinkedField",
                      name: "important_reactors",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [g, h, f],
                          storageKey: null,
                        },
                      ],
                      storageKey: "important_reactors(first:2)",
                    },
                    {
                      alias: "reaction_count",
                      args: null,
                      concreteType: "ReactorsOfContentConnection",
                      kind: "LinkedField",
                      name: "reactors",
                      plural: !1,
                      selections: [j],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "ReactionDisplayConfig",
                      kind: "LinkedField",
                      name: "reaction_display_config",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "reaction_display_strategy",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "should_show_top_reactions",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                c,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "3928142190617090",
          metadata: {},
          name: "CometUFIFeedbackReactMutation",
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
  "CometUFIFeedbackReactMutation_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: { mask: !1 },
        name: "CometUFIFeedbackReactMutation_feedback",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "associated_video",
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
            alias: null,
            args: [
              {
                kind: "Literal",
                name: "orderby",
                value: ["COUNT_DESC", "REACTION_TYPE"],
              },
            ],
            concreteType: "TopReactionsConnection",
            kind: "LinkedField",
            name: "top_reactions",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TopReactionsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "reaction_count",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "FeedbackReactionInfo",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: a,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: 'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',
          },
          {
            alias: null,
            args: null,
            concreteType: "ReactorsOfContentConnection",
            kind: "LinkedField",
            name: "reactors",
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
                kind: "ScalarField",
                name: "is_empty",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "use_default_actor",
                variableName: "useDefaultActor",
              },
            ],
            concreteType: "FeedbackReactionInfo",
            kind: "LinkedField",
            name: "viewer_feedback_reaction_info",
            plural: !1,
            selections: a,
            storageKey: null,
          },
        ],
        type: "Feedback",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "HoveredProductIDContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      hoveredProductID: null,
      setHoveredProductID: c("emptyFunction"),
    });
    g["default"] = b;
  },
  98
);
__d(
  "FeedbackSourceType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      PROFILE: 0,
      NEWS_FEED: 1,
      OBJECT: 2,
      MOBILE: 3,
      EMAIL: 4,
      PROFILE_APPROVAL: 10,
      TICKER: 12,
      NONE: 13,
      INTERN: 14,
      ADS: 15,
      EVENT_GOING_FLYOUT: 16,
      PHOTOS_SNOWLIFT: 17,
      PHOTOS_SNOWFLAKE: 20,
      USER_TIMELINE: 21,
      PAGE_TIMELINE: 22,
      SEARCH: 23,
      PAGE_TAB: 24,
      TIMELINE_COLLECTION: 25,
      ON_THIS_DAY: 27,
      INLINE_COMMENT: 28,
      VIDEOS_CHANNEL: 29,
      PRODUCT_DETAILS: 30,
      NEWSFEED_GROUP_TOP_STORIES: 31,
      LIVE_MAP: 32,
      REDSPACE: 33,
      EVENT_MALL: 34,
      LIVE_VIDEO: 35,
      QUICKSILVER_SPOTLIGHT: 36,
      GROUP_COMMERCE_BOOKMARK: 37,
      WATCH_AND_SCROLL: 38,
      LIVE_WWW_BROADCASTING: 39,
      COMPACT_SEARCH: 40,
      TAHOE: 41,
      GOV_DIGEST: 42,
      GAMEROOM_FEED: 43,
      PAGE_VIDEO_TAB: 44,
      VIDEO_HOME_AFTER_PARTY: 45,
      LIVE_VIDEO_STORIES: 46,
      GAME_HUB_FEED: 47,
      EMBEDED_VIDEO: 48,
      LIVING_ROOM: 49,
      CONSTITUENT_TOP_COMMENTS: 50,
      GAMES_VIDEO_DESTINATION: 51,
      INSTANT_GAMES_LIST: 52,
      INLINE_VIDEO_ENDSCREEN: 53,
      GAMESHOW_DASH: 54,
      PINNED_CONVERSATION: 55,
      MARKETPLACE_MEGAMALL: 56,
      BELL_MESSENGER_LINK: 57,
      SAVE_DASHBOARD: 58,
      BUSINESS_FEED: 59,
      VIDEO_HOME_FEED: 60,
      WORKPLACE_DISCOVERY_FEED: 61,
      MARKETPLACE_YOU_FEED: 62,
      PAGE_INBOX: 63,
      PRODUCT_QUESTION: 64,
      MEDIA_VIEWER: 65,
      PAGE_INBOX_POST_VIEW: 66,
      PHOTO_ALBUM: 67,
      GAMES_VIDEO_CLIPS_HOME_IMMERSIVE_PLAYER: 68,
      GROUPS_TARGETED_TAB: 69,
      LIVE_PRODUCER: 70,
      CREATOR_STUDIO_INBOX: 71,
      CHANNEL_TAB_LIVE_CARD: 72,
      LINEAR_CHANNEL: 73,
      WORKPLACE_KNOWLEDGE: 74,
      CHANNEL_TAB: 75,
      PAGE_LIVE_TAB: 76,
      COMMENT_REPLIES: 77,
      NOTIFICATIONS_TAB: 78,
      NOTIFICATIONS_PREFETCH: 79,
      PHOTO_PERMALINK: 80,
      EXTERNAL_URL: 81,
      STORIES: 82,
      AMA_POST: 83,
      BIZ_WEB_POST_TAB_UFI: 84,
      BIZ_WEB_POST_TAB_FEED_VIEW: 85,
      PROFILE_PLUS_LIVE_CARD: 86,
      STORY_PERMALINK: 87,
      ROOMS_LIVE_VIDEO: 88,
      LIVE_EVENT: 89,
      WORKPLACE_HELPDESK: 90,
      CONTINUOUS_CLOSE: 91,
      WORKPLACE_GARDEN: 92,
      DISCOVERY_HUB: 93,
      GROUP_CONTEXTUAL_PROFILE: 94,
      ACTIVITY_AND_FEEDBACK_TEST: 95,
      WORKSTREAM_STEP_FEED: 96,
      WORKPLACE_KNOWLEDGE_NOTES: 97,
      WORKPLACE_QA: 98,
      LOCPLAT_FBCAT: 99,
      WORKPLACE_PLUGIN: 100,
      WORKPLACE_ADMIN_REPORTED_CONTENT: 101,
      LIVE_ENGAGE_PANEL: 102,
      BULLETIN: 103,
      FB_NOTES: 104,
      SHOP_AND_DISCOVER_SURFACE: 105,
      BIZWEB_RECENT_POSTS_FEED_CARD: 106,
      BUSINESS_COMMENT_INBOX_TAB: 107,
    });
    f["default"] = a;
  },
  66
);
__d(
  "JSEnumValueToGraphQLKey",
  ["flipObject"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h =
      typeof WeakMap === "function"
        ? new WeakMap()
        : {
            get: function (a) {
              return null;
            },
            set: function (a, b) {},
          };
    function i(a) {
      var b = h.get(a);
      if (b != null) return b;
      b = c("flipObject")(a);
      h.set(a, b);
      return b;
    }
    function a(a, b) {
      a = i(a);
      return a[b];
    }
    g["default"] = a;
  },
  98
);
__d(
  "arrayStableSort",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      return a
        .map(function (a, b) {
          return { data: a, index: b };
        })
        .sort(function (a, c) {
          return b(a.data, c.data) || a.index - c.index;
        })
        .map(function (a) {
          return a.data;
        });
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometUFIFeedbackReactMutation",
  [
    "ChannelClientID",
    "CometRelay",
    "CometUFIFeedbackReactMutation.graphql",
    "CometUFIFeedbackReactMutation_feedback.graphql",
    "FBLogger",
    "FeedbackSourceType",
    "JSEnumValueToGraphQLKey",
    "UFIODSLogger",
    "UFIReactionTypes",
    "arrayStableSort",
    "cr:1088250",
    "setTimeout",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = 2,
      k = 3e3,
      l = c("JSEnumValueToGraphQLKey")(c("FeedbackSourceType"), 1);
    h !== void 0
      ? h
      : (h = b("CometUFIFeedbackReactMutation_feedback.graphql"));
    var m = i !== void 0 ? i : (i = b("CometUFIFeedbackReactMutation.graphql"));
    function a(a) {
      var b = a.environment,
        e = a.input,
        f = a.useDefaultActor,
        g = e.feedback_reaction,
        h = e.feedback_source;
      h = {
        input: babelHelpers["extends"]({}, e, {
          feedback_source:
            h != null
              ? c("JSEnumValueToGraphQLKey")(c("FeedbackSourceType"), h)
              : void 0,
          session_id: d("ChannelClientID").getID(),
        }),
        useDefaultActor: f,
      };
      var i = function (a) {
        var b = a.get(e.feedback_id);
        if (b == null) {
          c("FBLogger")("ufi2")
            .addMetadata("UFI", "FEEDBACK_TARGET_ID", e.feedback_id)
            .warn(
              "CometUFIFeedbackReactMutation: Could not find feedback in Relay store."
            );
          return;
        }
        b.setValue(!0, "should_show_top_reactions");
        var d = o(a, e.feedback_id, b),
          h = b.getLinkedRecord("viewer_feedback_reaction_info", {
            use_default_actor: f,
          }),
          i = h ? h.getValue("key") || 0 : 0;
        if (typeof i !== "number")
          throw c("unrecoverableViolation")(
            "Type Error: currentReactionKey must not be of type 'number'. ",
            "ufi2"
          );
        var j = b.getLinkedRecord("top_reactions", {
          orderby: ["COUNT_DESC", "REACTION_TYPE"],
        });
        if (!j) {
          var k = "client:top_reactions:" + e.feedback_id;
          j = a.create(k, "TopReactionsConnection");
        }
        q(a, j, g, i);
        var l;
        if (g === 0) {
          if (h !== null) {
            k = d.getValue("count");
            j = typeof k === "number" ? k : 1;
            l = j - 1;
          }
          b.setValue(null, "viewer_feedback_reaction_info", {
            use_default_actor: f,
          });
        } else {
          if (h === null) {
            i = d.getValue("count");
            k = typeof i === "number" ? i : 0;
            l = k + 1;
          }
          h = p(a, g);
          b.setLinkedRecord(h, "viewer_feedback_reaction_info", {
            use_default_actor: f,
          });
        }
        l != null && (d.setValue(l, "count"), d.setValue(l === 0, "is_empty"));
        j = d.getValue("count_reduced");
        if (parseInt(j, 10).toString() === j) {
          i = d.getValue("count");
          typeof i === "number" &&
            !Number.isNaN(i) &&
            d.setValue(i.toString(), "count_reduced");
        }
      };
      h = { mutation: m, optimisticUpdater: i, variables: h };
      return n(b, h, i, 0, e, a.onError);
    }
    function n(a, e, f, g, h, i) {
      var m = d("CometRelay").commitMutation(
        a,
        babelHelpers["extends"]({}, e, {
          onCompleted: function (a) {
            a =
              e == null
                ? void 0
                : (a = e.variables) == null
                ? void 0
                : (a = a.input) == null
                ? void 0
                : a.feedback_source;
            var c = Math.min(g + 1, 3);
            c = "" + c + (g >= c ? "+" : "");
            a === l &&
              d("UFIODSLogger").bump(
                "reaction.newsfeed.mutation.attempt." + c,
                "relay"
              );
            d("UFIODSLogger").bump("reaction.mutation.attempt." + c, "relay");
            b("cr:1088250") && b("cr:1088250")(h);
          },
          onError: function (b) {
            if (b.name === "GraphQLError") return i(b);
            m = d("CometRelay").applyOptimisticMutation(
              a,
              babelHelpers["extends"]({}, e, { optimisticUpdater: f })
            );
            if (g >= j) return i(b);
            c("setTimeout")(function () {
              m && m.dispose(), (m = n(a, e, f, g + 1, h, i));
            }, k);
          },
        })
      );
      return {
        dispose: function () {
          m && m.dispose(), (m = null);
        },
      };
    }
    function o(a, b, d) {
      var e = d.getLinkedRecord("reactors");
      if (!e) {
        c("FBLogger")("ufi2")
          .addMetadata("UFI", "FEEDBACK_TARGET_ID", b)
          .warn("Expected Feedback record proxy to have a reactors connection");
        b = "client:reactors:" + b;
        e = a.get(b) || a.create(b, "ReactorsOfContentConnection");
        e.setValue(0, "count");
        e.setValue("0", "count_reduced");
        e.setValue(!0, "is_empty");
        d.setLinkedRecord(e, "reactors");
      }
      return e;
    }
    function p(a, b) {
      if (b === 0)
        throw c("unrecoverableViolation")(
          "ReactionInfo cannot be created for NONE",
          "ufi2"
        );
      var d = "client:reaction_info:" + b,
        e = a.get(d);
      if (!e) {
        e = a.create(d, "FeedbackReactionInfo");
        e.setValue(b, "key");
        a = c("UFIReactionTypes").reactions[b];
        if (!a)
          throw c("unrecoverableViolation")(
            "No reaction for reaction key: " + b,
            "ufi2"
          );
        e.setValue(a.display_name, "localized_name");
        e.setValue(a.name.toUpperCase(), "reaction_type");
      }
      return e;
    }
    function q(a, b, e, f) {
      var g = (b.getLinkedRecords("edges") || [])
        .map(function (a) {
          if (!a) return null;
          var b = a.getLinkedRecord("node"),
            d = a.getValue("reaction_count") || 0,
            e = (b && b.getValue("key")) || 0;
          if (typeof d === "number" && typeof e === "number")
            return b && d !== 0 && e !== 0
              ? { count: d, edge: a, key: e }
              : null;
          else
            throw c("unrecoverableViolation")(
              "Type Error: LinkedRecord (node) and reaction_count (count) must be of type 'number'. ",
              "ufi2"
            );
        })
        .filter(Boolean);
      if (f) {
        var h = g.find(function (a) {
          a = a.key;
          return a === f;
        });
        h && h.count--;
      }
      if (e) {
        h = g.find(function (a) {
          return a.key === e;
        });
        if (!h) {
          var i = p(a, e);
          a = d("CometRelay").ConnectionHandler.createEdge(
            a,
            b,
            i,
            "TopReactionsEdge"
          );
          h = { count: 0, edge: a, key: e };
          g.push(h);
        }
        h.count++;
      }
      i = c("arrayStableSort")(g, function (a, b) {
        return (
          b.count - a.count ||
          c("UFIReactionTypes").ordering.indexOf(a.key) -
            c("UFIReactionTypes").ordering.indexOf(b.key)
        );
      })
        .filter(function (a) {
          a = a.count;
          return a !== 0;
        })
        .map(function (a) {
          var b = a.count;
          a = a.edge;
          a.setValue(b, "reaction_count");
          a.setValue(
            (b = a.getValue("reaction_count_reduced")) != null ? b : "",
            "reaction_count_reduced"
          );
          return a;
        });
      b.setLinkedRecords(i, "edges");
    }
    g.commit = a;
  },
  98
);
__d(
  "ShareFunnelEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1876820");
    c = b("FalcoLoggerInternal").create("share_funnel_event", a);
    e.exports = c;
  },
  null
);
__d(
  "FBFeedLocations",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      NEWSFEED: 1,
      GROUP: 2,
      GROUP_PERMALINK: 3,
      COMMUNITY: 4,
      PERMALINK: 5,
      SHARE_OVERLAY: 6,
      PERMALINK_STREAM: 7,
      GROUP_PINNED: 8,
      FRIEND_LIST: 9,
      TIMELINE: 10,
      HASHTAG_FEED: 11,
      TOPIC_FEED: 12,
      PAGE: 13,
      NOTIFICATION_FEED: 14,
      GROUP_REPORTED: 15,
      GROUP_PENDING: 16,
      PAGES_FEED_IN_PAGES_MANAGER: 17,
      TICKER_CLASSIC: 18,
      PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER: 19,
      SEARCH: 20,
      GROUP_SEARCH: 21,
      NO_ATTACHMENT: 22,
      EMBED: 23,
      EMBED_FEED: 24,
      ATTACHMENT_PREVIEW: 25,
      STORIES_TO_SHARE: 26,
      PROMPT_PERMALINK: 27,
      TREND_HOVERCARD: 28,
      OPEN_GRAPH_PREVIEW: 30,
      HOTPOST_IN_PAGES_FEED: 31,
      SCHEDULED_POSTS: 32,
      TIMELINE_NOTES: 33,
      PAGE_INSIGHTS: 34,
      COMMENT_ATTACHMENT: 35,
      PAGE_TIMELINE: 36,
      GOODWILL_THROWBACK_PERMALINK: 37,
      LIKE_CONFIRM: 39,
      GOODWILL_THROWBACK_PROMOTION: 40,
      BROWSE_CONSOLE: 42,
      GROUP_FOR_SALE_COMPACT: 43,
      ENTITY_FEED: 44,
      GROUP_FOR_SALE_DISCUSSION: 45,
      PAGES_CONTENT_TAB_PREVIEW: 46,
      GOODWILL_THROWBACK_SHARE: 47,
      TIMELINE_VIDEO_SHARES: 48,
      EVENT: 49,
      PAGE_PLUGIN: 50,
      SRT: 51,
      PAGES_CONTENT_TAB_INSIGHTS: 52,
      ADS_PE_CONTENT_TAB_INSIGHTS: 53,
      PAGE_ACTIVITY_FEED: 54,
      VIDEO_CHANNEL: 55,
      POST_TO_PAGE: 56,
      GROUPS_GSYM_HOVERCARD: 57,
      FEED_SURVEY: 59,
      PAGES_MODERATION: 60,
      SAVED_DASHBOARD: 61,
      PULSE_SEARCH: 62,
      GROUP_NUX: 63,
      GROUP_NUX_POST_VIEW: 64,
      EVENT_PERMALINK: 65,
      FUNDRAISER_PAGE: 66,
      EXPLORE_FEED: 67,
      CRT: 68,
      REVIEWS_FEED: 69,
      VIDEO_HOME_CHANNEL: 70,
      NEWS: 71,
      TIMELINE_FRIENDSHIP: 72,
      SAVED_REMINDERS: 73,
      PSYM: 74,
      ADMIN_FEED: 75,
      CAMPFIRE_NOTE: 76,
      PAGES_CONTEXT_CARD: 77,
      ACTIVITY_LOG: 78,
      WALL_POST_REPORT: 79,
      TIMELINE_BREAKUP: 80,
      TOWN_HALL: 81,
      PRODUCT_DETAILS: 82,
      SPORTS_PLAY_FEED: 83,
      GROUP_TOP_STORIES: 84,
      PAGE_TIMELINE_PERMALINK: 86,
      OFFERS_WALLET: 87,
      INSTREAM_VIDEO_IN_LIVE: 88,
      SPOTLIGHT: 89,
      SEARCH_DERP: 90,
      SOCIAL_BALLOT: 91,
      GROUP_SUGGESTIONS_WITH_STORY: 92,
      SOCIAL_BALLOT_PERMALINK: 93,
      LOCAL_SERP: 94,
      FUNDRAISER_SELF_DONATION_FEED: 95,
      CONVERSATION_NUB: 97,
      GROUP_TOP_SALE_STORIES: 98,
      GROUP_LEARNING_COURSE_UNIT_FEED: 99,
      SUPPORT_INBOX_READ_TIME_BLOCK: 100,
      PAGE_POSTS_CARD: 101,
      CRISIS_POST: 102,
      SUPPORT_INBOX_GROUP_RESPONSIBLE: 103,
      PAGE_POST_DIALOG: 104,
      CRISIS_DIALOG_POST: 105,
      PAGE_LIVE_VIDEOS_CARD: 106,
      PAGE_POSTS_CARD_COMPACT: 107,
      GROUP_MEMBER_BIO_FEED: 108,
      LIVE_COMMENT_ATTACHMENT: 109,
      GROUP_COMPOSER: 110,
      GROUP_INBOX_GROUP: 111,
      GROUP_INBOX_AGGREGATED: 112,
      EVENTS_DASHBOARD: 114,
      CURATED_COLLECTIONS_PAGE: 115,
      OYML: 116,
      COLLEGE_HOMEPAGE: 117,
      GROUP_LIVE_VIDEOS_CARD: 118,
      COLLEGE_HIGHLIGHTS: 119,
      VIDEO_PERMALINK: 120,
      JOB_CAROUSEL_NETEGO: 121,
      TOPIC_PAGE: 122,
      USER_SCHEDULED_POSTS: 123,
      GOODWILL_THROWBACK_ATTACHMENT_PREVIEW: 124,
      INSTREAM_VIDEO_IN_WASLIVE: 125,
      INSTREAM_VIDEO_IN_NONLIVE: 126,
      SIGNAL_APP: 127,
      ALBUM_FEED: 128,
      TOP_MARKETPLACE_STORIES: 129,
      CE_PII_STRIPPED_FEED: 130,
      TAHOE: 131,
      SAVE_COUNT_DIALOG: 132,
      GROUP_POST_TAG_FEED: 133,
      GOV_DIGEST: 134,
      GROUP_SCHEDULED: 135,
      GAMEROOM_FEED: 136,
      WORKPLACE_HUB_PREVIEW: 137,
      BRANDED_CONTENT_TRENDING_POSTS: 138,
      GROUP_ANNOUNCEMENTS: 139,
      GROUP_ANNOUNCEMENTS_FEED: 140,
      EXTERN_CE_PII_STRIPPED_FEED: 141,
      CRISIS_HUB_DESKTOP: 142,
      GROUP_DRAFT_POSTS: 143,
      TRENDING_ISSUES: 144,
      GAME_HUB_FEED: 145,
      LUMOS_POST_PREVIEW: 146,
      BRANDED_CONTENT_PAGE_SETTINGS: 147,
      BC_MULTI_POST_REVIEW: 149,
      ADS_TRANSPARENCY_SHOW_ADS: 150,
      POLITICAL_POST_FEED: 151,
      RECOMMENDATIONS_DASHBOARD: 152,
      SEEN_CONTENT: 153,
      AGGREGATED_FEED: 154,
      GROUP_HOISTED: 155,
      GROUP_MENTORSHIP_OVERVIEW_FEED: 156,
      GROUP_MENTORSHIP_CURRICULUM_FEED: 157,
      PAGE_SURFACE_RECOMMENDATIONS: 158,
      SURVEY_GALLERY: 159,
      GAMING_VIDEO_STREAMER_HUB: 160,
      GROUP_MEETUP_FEED: 161,
      GROUP_FLAGGED_FEED: 162,
      PAGE_RECOMMENDATIONS_TOOL: 163,
      MEDIA_MANAGER_HOME: 164,
      WOODHENGE_EXCLUSIVE_FEED: 165,
      PAGE_RECOMMENDATIONS_TAB_FEED: 166,
      GROUP_ANNOUNCEMENTS_WITH_UFI: 167,
      GROUP_ADMIN_TO_MEMBER_FEEDBACK: 168,
      MEDIA_MANAGER_POST_INSIGHTS: 169,
      MISINFORMATION_FACT_CHECKER_APP: 170,
      WORKPLACE_TEAM_FEED: 171,
      NEWS_STORYLINE_FEED: 172,
      PAGE_RECOMMENDATIONS_VERTEX_TAB_FEED: 173,
      MONTHLY_ACTIVITY_DIGEST: 174,
      ACTOR_EXPERIENCE_APPEALS: 175,
      WORKPLACE_NEWSFEED_PROMOTED_POST: 176,
      ASSET3D_PHOTO_FULLSCREEN: 177,
      MARKETPLACE_MEGAMALL: 178,
      WORKPLACE_DISCOVERY_FEED: 180,
      CE_PII_AND_ATTACHMENTS_STRIPPED_FEED: 182,
      SOURCERY_PII_STRIPPED: 183,
      ACTOR_GATEWAY: 191,
      FBR: 192,
      NEWS_STORYLINE_NEWSFEED_QP: 193,
      JOBS_SINGLE_GROUP_BROWSER: 194,
      JOBS_MULTI_GROUP_BROWSER: 195,
      ACTION_EXPERIENCE: 196,
      GROUP_ALERTED_FEED: 197,
      CANDIDATE_PACKET_REVIEW: 198,
      BUSINESS_FEED: 199,
      NEWS_OCT_DRAFT_POST_PREVIEW: 200,
      CENTRA_INVESTIGATION_FEED: 201,
      TOP_GROUP_POSTS_TOOL: 202,
      VIDEO_HOME_FEED: 203,
      WORKPLACE_SHORTCUTS_FEED: 204,
      NEXT_TOOL: 205,
      CLIPS_LIBRARY: 206,
      GRAMMAR_SEARCH: 207,
      NEWSFEED_INJECTED_STORY_FROM_EMAIL_NOTIFICATION: 208,
      GROUP_QUALITY: 209,
      WORKPLACE_FOLLOWEES_FEED: 210,
      MARKETPLACE_YOU_FEED: 211,
      WORKPLACE_ADMIN_REPORTED_CONTENT: 212,
      PAGE_INBOX: 213,
      OFFERS_TAB: 214,
      PRODUCT_QUESTION: 215,
      PAGE_QUALITY: 216,
      PUBLISHER_TRANSPARENCY: 217,
      PROFESSIONAL_BUYER_PROGRAM: 218,
      WORKPLACE_APPROVALS: 219,
      UX_RESEARCH_FEEDS_TOOL: 220,
      PAGE_INBOX_POST_VIEW: 221,
      COMET_MEDIA_VIEWER: 222,
      GAMES_VIDEO_CLIPS_HOME_IMMERSIVE_PLAYER: 223,
      SOURCERY_EXTERN_PII_STRIPPED: 224,
      GAMING_FEED: 225,
      PARTNER_ASSESSMENT: 226,
      WORK_SIMILAR_POSTS: 227,
      LIVE_PRODUCER: 228,
      SUPPLIER_CONNECT: 229,
      WORK_GROUP_LEARNING: 230,
      GROUP_WATCH_PARTIES_FEED: 231,
      SRT_PROCUREMENT: 232,
      PROCUREMENT_REQUEST: 233,
      WORKPLACE_GROUP_NOTIFICATION: 234,
      LIVING_ROOM_DASHBOARD: 235,
      LINEAR_CHANNEL: 236,
      WORKPLACE_HELPDESK: 237,
      BCM_HOME: 238,
      WORKPLACE_SERP: 239,
      WORK_CHAT_STORY_PREVIEW: 240,
      WORKPLACE_SERP_OVERLAY: 241,
      WORKPLACE_KNOWLEDGE: 242,
      WORKPLACE_ESM: 243,
      WORK_DRAFTED_FOR: 244,
      WORK_DRAFTED_FOR_OTHERS: 245,
      EVENT_COMPOSER: 246,
      COMET_CORONAVIRUS_HUB_FEED: 247,
      FEED_COMPOSER: 248,
      GENERAL_SEARCH_DESKTOP_ADS: 249,
      COMET_CORONAVIRUS_HUB_WYSSH: 250,
      LOCAL_COMMUNITY_FEED: 251,
      LOCAL_COMMUNITY_PROMPTS_FEED: 252,
      SERVICES_LOCAL_BUSINESS_DISCOVERY: 253,
      GROUP_COMMUNITY_HELP_FEED: 254,
      WORKPLACE_PLUGIN: 255,
      COMET_PAYCHECK_PROTECTION_PROGRAM: 256,
      GROUP_COMMUNITY_VIEW: 257,
      EVENT_PENDING: 258,
      AGGREGATED_NOTIFICATIONS_PERMALINK: 259,
      VIDEO_HOME_LIVE_TAB: 260,
      WORKPLACE_PLUGIN_GROUP_FEED: 261,
      COMET_RACIAL_JUSTICE_HUB_FEED: 262,
      CM_ORGANIC_CONTENT_PREVIEW_UFI: 263,
      CM_FEED_VIEW: 264,
      COMET_RACIAL_JUSTICE_HUB_POST_CAROUSEL: 265,
      GROUP_SCHEDULED_PENDING: 266,
      CIVIL_RIGHTS_HUB: 267,
      PHOTO_REVIEW: 269,
      PROFILE_PLUS_TIMELINE: 270,
      GROUPS_TARGETED_TAB: 271,
      LIVE_EVENT: 272,
      SRT_GESTALT_PII_STRIPPED_FEED: 273,
      CONTINUOUS_CLOSE: 274,
      GROUP_VOICE: 275,
      GROUPS_VIEWER_CONTENT_DELETED_POSTS: 276,
      GROUPS_VIEWER_CONTENT_PENDING_POSTS: 277,
      GROUPS_VIEWER_CONTENT_PUBLISHED_POSTS: 278,
      GROUPS_VIEWER_CONTENT_SCHEDULED_POSTS: 279,
      DISCOVERY_HUB_CLIMATE_CHANGE_HUB: 280,
      WORK_SHIFT_COVER: 281,
      ACTIVITY_AND_FEEDBACK_TEST: 282,
      WORKSTREAM_STEP_FEED: 283,
      COMMENT_INSIGHTS_FEED: 284,
      GROUP_CONFLICTS: 285,
      WORK_GARDEN: 286,
      EVENT_SCHEDULED: 287,
      WORK_GROUP_PENDING: 288,
      WORKPLACE_KNOWLEDGE_NOTES: 289,
      WORKPLACE_QA: 290,
      COMET_PAGE_CARDS: 291,
      WORKPLACE_EMAIL_LANDING: 292,
      UNKNOWN_DO_NOT_USE: 293,
      GROUP_MODERATION_ALERT_QUEUE: 294,
      COMET_SURVEY_GALLERY: 295,
      MEDIA_MANAGER_INSIGHTS_BENCHMARKING_TRENDING_POSTS: 296,
      GRATITUDE_LIBRARY: 297,
      WORKPLACE_QA_SEARCH: 298,
      BIZWEB_HOME_CARDS: 299,
      GROUP_ADMIN_AUTONOMY_QUEUE: 300,
      BULLETIN: 301,
      GROUPS_MODMIN_REVIEW_FOLDER: 302,
      COMMUNITY_HELP_DRIVE: 303,
      GROUP_QUESTIONS_FEED: 304,
      FB_NOTES: 305,
      ORION_PLAYER: 306,
      SHOP_AND_DISCOVER_SURFACE: 307,
      SUBGROUP: 308,
      GROUPS_VIEWER_CONTENT_FLAGGED: 309,
      BUSINESS_COMMENT_INBOX_TAB: 310,
      FUNDRAISER_HUB: 311,
      GROUPS_SURFACE_HIGHLIGHTS: 312,
      BIZWEB_HOME_AD_PREVIEW: 313,
    });
    f["default"] = a;
  },
  66
);
__d(
  "ShareMenuTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:ShareMenuLoggerConfig");
  },
  null
);
__d(
  "calculateShareSignificance",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 5;
    a = function (a) {
      if (!a) return "no_text";
      var b = new Set();
      (a || "")
        .toLowerCase()
        .split(" ")
        .forEach(function (a) {
          return b.add(a);
        });
      return b.size > g ? "significant" : "not_significant";
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "getShareAudienceFromPrivacyString",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      switch (a) {
        case null:
        case void 0:
        case "unknown":
          return "unknown";
        case "286958161406148":
          return "self";
        case "300645083384735":
          return "everyone";
        case "368493386561757":
        case "275425949243301":
          return "fof";
        case "123780391104836":
        case "291667064279714":
          return "friends";
        default:
          return "custom";
      }
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "ShareMetricsLoggingController",
  [
    "FBFeedLocations",
    "FBLogger",
    "ShareFunnelEventFalcoEvent",
    "ShareMenuTypedLoggerLite",
    "calculateShareSignificance",
    "getJSEnumSafe",
    "getShareAudienceFromPrivacyString",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { appid: 2220391788200892, name: "feed_share_action" },
      i = "5008544042549901";
    function a(a) {
      if (!a) return;
      var b;
      a.audience === "own"
        ? (b = a.privacy)
        : a === "friend"
        ? (b = "friend_timeline")
        : (b = a.audience);
      a = a.add_to_story ? "add_to_story_now" : "share_now";
      k("share_created", a, b, "no_text");
    }
    function b(a) {
      if (!a) return;
      a =
        a.responseURL && a.responseURL.includes("add_to_story")
          ? "add_to_story_now"
          : "share_now";
      k("share_failure", a, null, "no_text");
    }
    function d(a, b, d, e, f) {
      var g = "unknown";
      switch (b) {
        case "self":
          g = c("getShareAudienceFromPrivacyString")(f);
          break;
        case "friend":
          g = "friend_timeline";
          break;
        case "message":
          g = "messenger";
          break;
        case "group":
          g = "group";
          break;
        case "page":
          g = "page";
          break;
      }
      var h;
      switch (e) {
        case "share_now_menu/share_to_page":
          h = "share_to_page";
          break;
        case "share_now_menu/post_to_group":
          h = "share_to_group";
          break;
        case "share_now_menu/send_message":
          h = "send_in_message";
          break;
        case "share_now_menu/share_friend_timeline":
          h = "share_to_friend_timeline";
          break;
        case "share_now_menu/write_post":
          h = "write_post";
          break;
        case "share_now_menu/add_to_story":
          h = "add_to_story";
          break;
        case "living_room_sprout":
          h = "start_living_room";
          break;
        default:
          h = "unknown";
          break;
      }
      b = c("calculateShareSignificance")(d);
      k(a, h, g, b);
    }
    function e(a, b) {
      if (!c("gkx")("1876822")) {
        c("ShareMenuTypedLoggerLite").log(
          babelHelpers["extends"]({}, h, {
            fb_share_type: "share_flow_started",
            shareable_id: a,
          })
        );
        return;
      }
      var d = c("getJSEnumSafe")(c("FBFeedLocations"), b);
      d == null &&
        c("FBLogger")("comet_reshares").warn(
          "Failed to produce fb feed location mapping for share logging"
        );
      var e = (b = a) != null ? b : i;
      a == null &&
        c("FBLogger")("comet_reshares").warn("Shareable ID provided is null");
      c("ShareFunnelEventFalcoEvent").logImmediately(function () {
        var a;
        return {
          fb_feed_location: (a = d) != null ? a : 293,
          fb_share_type: "share_flow_started",
          shareable_id: e,
        };
      });
    }
    function f(a, b) {
      if (!c("gkx")("1876822")) {
        c("ShareMenuTypedLoggerLite").log(
          babelHelpers["extends"]({}, h, {
            fb_share_type: "share_abandoned",
            shareable_id: a,
          })
        );
        return;
      }
      var d = c("getJSEnumSafe")(c("FBFeedLocations"), b);
      d == null &&
        c("FBLogger")("comet_reshares").warn(
          "Failed to produce fb feed location mapping for share logging"
        );
      var e = (b = a) != null ? b : i;
      a == null &&
        c("FBLogger")("comet_reshares").warn("Shareable ID provided is null");
      c("ShareFunnelEventFalcoEvent").logImmediately(function () {
        var a;
        return {
          fb_feed_location: (a = d) != null ? a : 293,
          fb_share_type: "share_abandoned",
          shareable_id: e,
        };
      });
    }
    function j(a) {
      var b = a.fb_feed_location,
        d = babelHelpers.objectWithoutPropertiesLoose(a, ["fb_feed_location"]);
      if (!c("gkx")("1876822")) {
        c("ShareMenuTypedLoggerLite").log(babelHelpers["extends"]({}, h, d));
        return;
      }
      var e = c("getJSEnumSafe")(c("FBFeedLocations"), b);
      e == null &&
        c("FBLogger")("comet_reshares").warn(
          "Failed to produce fb feed location mapping for share logging"
        );
      var f = (d = a.shareable_id) != null ? d : i;
      a.shareable_id == null &&
        c("FBLogger")("comet_reshares").warn("Shareable ID provided is null");
      c("ShareFunnelEventFalcoEvent").logImmediately(function () {
        var b;
        return {
          fb_feed_location: (b = e) != null ? b : 293,
          fb_share_type: a.fb_share_type,
          fb_entry_point: a.fb_entry_point,
          shareable_id: f,
        };
      });
    }
    function k(a, b, d, e) {
      !c("gkx")("1954641")
        ? c("ShareMenuTypedLoggerLite").log({
            fb_share_type: a,
            fb_entry_point: b,
            fb_audience: d,
            fb_significance: e,
            name: "feed_share_action",
          })
        : c("ShareFunnelEventFalcoEvent").logImmediately(function () {
            var c;
            return {
              fb_feed_location: 293,
              fb_share_type: a,
              fb_entry_point: (c = b) != null ? c : void 0,
              shareable_id: i,
              fb_audience: (c = d) != null ? c : void 0,
              fb_significance: (c = e) != null ? c : void 0,
            };
          });
    }
    g.logShareNowResponsePayload = a;
    g.logShareNowFailure = b;
    g.logReactComposerEvent = d;
    g.logShareFlowStarted = e;
    g.logShareFlowAbandoned = f;
    g.logShareFunnelEvent = j;
    g.log = k;
  },
  98
);
