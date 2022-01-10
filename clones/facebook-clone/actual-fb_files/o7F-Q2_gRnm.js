if (self.CavalryLogger) {
  CavalryLogger.start_js(["LTAvrVD"]);
}

__d(
  "StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      b = [
        {
          alias: null,
          args: [{ kind: "Variable", name: "data", variableName: "input" }],
          concreteType: "ArchivedStoryCardDeleteResponsePayload",
          kind: "LinkedField",
          name: "archived_story_card_delete",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "deleted_archived_story_card_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "original_story_ids",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "original_story_cache_ids",
              storageKey: null,
            },
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
                  concreteType: "StoriesData",
                  kind: "LinkedField",
                  name: "stories_data",
                  plural: !1,
                  selections: [
                    b,
                    {
                      alias: null,
                      args: null,
                      concreteType: "StoryHistoryContainer",
                      kind: "LinkedField",
                      name: "story_archive",
                      plural: !1,
                      selections: [
                        b,
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "StoryHistoryContainerToArchivedCardsConnection",
                          kind: "LinkedField",
                          name: "archived_cards",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "StoryHistoryContainerToArchivedCardsEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "Story",
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    b,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "cache_id",
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
          name: "StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation",
          selections: b,
        },
        params: {
          id: "2515920141820713",
          metadata: {},
          name: "StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation",
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
  "StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: !1,
          kind: "LocalArgument",
          name: "enable_profile_story_consumption",
        },
        b = { defaultValue: null, kind: "LocalArgument", name: "input" },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      c = [
        {
          alias: null,
          args: [{ kind: "Variable", name: "data", variableName: "input" }],
          concreteType: "StoriesDeleteResponsePayload",
          kind: "LinkedField",
          name: "stories_delete",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "deleted_story_thread_ids",
              storageKey: null,
            },
            {
              condition: "enable_profile_story_consumption",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "buckets",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    c,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_bucket_seen_by_viewer",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "Story",
                      kind: "LinkedField",
                      name: "first_story_to_show",
                      plural: !1,
                      selections: [
                        c,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "cache_id",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [a, b],
          kind: "Fragment",
          metadata: null,
          name: "StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",
          selections: c,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [b, a],
          kind: "Operation",
          name: "StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",
          selections: c,
        },
        params: {
          id: "3117967571639906",
          metadata: {},
          name: "StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",
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
  "StoriesMuteStoryOptionMenuItem_StoriesMuteMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "UserCameraPostStoryUnfollowResponsePayload",
            kind: "LinkedField",
            name: "user_camera_post_story_unfollow",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
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
          name: "StoriesMuteStoryOptionMenuItem_StoriesMuteMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "StoriesMuteStoryOptionMenuItem_StoriesMuteMutation",
          selections: b,
        },
        params: {
          id: "3908874212514053",
          metadata: {},
          name: "StoriesMuteStoryOptionMenuItem_StoriesMuteMutation",
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
  "StoriesUnfollowPageOptionMenuItem_unfollowPageMutation.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "PageUnlikeResponsePayload",
            kind: "LinkedField",
            name: "page_unlike",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
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
          name: "StoriesUnfollowPageOptionMenuItem_unfollowPageMutation",
          selections: b,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "StoriesUnfollowPageOptionMenuItem_unfollowPageMutation",
          selections: b,
        },
        params: {
          id: "3544048432349200",
          metadata: {},
          name: "StoriesUnfollowPageOptionMenuItem_unfollowPageMutation",
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
  "StoriesSuspenseCardOptionMenu_card.graphql",
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
        name: "StoriesSuspenseCardOptionMenu_card",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "via",
            plural: !1,
            selections: [a],
            storageKey: null,
          },
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
                args: null,
                kind: "ScalarField",
                name: "story_card_type",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
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
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "media",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Story",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesSuspenseCardOptionMenu_owner.graphql",
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
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "StoriesSuspenseCardOptionMenu_owner",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a],
            type: "Node",
            abstractKey: "__isNode",
          },
          {
            kind: "InlineFragment",
            selections: [b],
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [a, b],
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              b,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "viewer_profile_permissions",
                storageKey: null,
              },
            ],
            type: "Page",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              b,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_viewer_host",
                storageKey: null,
              },
            ],
            type: "Event",
            abstractKey: null,
          },
        ],
        type: "CameraPostBucketOwnerUnion",
        abstractKey: "__isCameraPostBucketOwnerUnion",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "StoriesArchiveCardStoreForBlue",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      DeletedStoryList: new Set(),
      SeenStoryList: new Set(),
      StoriesArchiveDataMap: new Map(),
    };
    f["default"] = a;
  },
  66
);
__d(
  "StoryDeleteCardDialogBox",
  ["fbt", "useCometConfirmationDialog"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b = a.mediaType,
        d = a.onDeleteConfirmClick,
        e = a.onHideConfirmationDialog,
        f = a.onOpenConfirmationDialog,
        g = a.storyOptionType;
      a = c("useCometConfirmationDialog")();
      var i = a[0];
      a[1];
      var j = function () {
          var a;
          switch (((a = b) != null ? a : "").toUpperCase()) {
            case "PHOTO":
              return h._("Delete this photo from your story?");
            case "VIDEO":
              return h._("Delete this video from your story?");
            default:
              return h._("Delete this from your story?");
          }
        },
        k = function () {
          var a;
          switch (((a = b) != null ? a : "").toUpperCase()) {
            case "PHOTO":
              return h._("Delete Photo?");
            case "VIDEO":
              return h._("Delete Video?");
            default:
              return h._("Delete?");
          }
        };
      a = function () {
        var a;
        switch (((a = b) != null ? a : "").toUpperCase()) {
          case "PHOTO":
            return h._("Delete photo");
          case "VIDEO":
            return h._("Delete video");
          default:
            return h._("Delete");
        }
      };
      var l = function () {
        i({ body: j(), confirm: h._("Delete"), title: k() }, d, function () {
          e && e();
        }),
          f(g);
      };
      return { handleDeleteClick: l, primaryText: a() };
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesArchiveDeleteCardOptionMenuItem.react",
  [
    "ix",
    "CometMenuItem.react",
    "CometRelay",
    "StoriesArchiveBucketDataContext",
    "StoriesArchiveCardStoreForBlue",
    "StoriesArchiveConstants",
    "StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation.graphql",
    "StoriesEnums",
    "StoriesLoggerContext",
    "StoriesSuspenseContuxActionsContext",
    "StoryDeleteCardDialogBox",
    "fbicon",
    "react",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useContext,
      l =
        i !== void 0
          ? i
          : (i = b(
              "StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation.graphql"
            ));
    function a(a) {
      var b = d("CometRelay").useRelayEnvironment(),
        e = k(c("StoriesSuspenseContuxActionsContext")),
        f = e.handleCardDeletion;
      e = k(c("StoriesLoggerContext"));
      var g = e.logger,
        i = a.cardID;
      e = a.mediaType;
      var m = a.onHideConfirmationDialog;
      a = a.onOpenConfirmationDialog;
      var n = k(c("StoriesArchiveBucketDataContext"));
      n = n.archiveBucketData;
      var o = n.lowerBoundTime,
        p = n.storyArchiveID,
        q = n.upperBoundTime;
      n = function () {
        g.deleteLog();
        m();
        var a = function (a) {
            a["delete"](i);
            a = a.get(p);
            if (a == null) return;
            a = d("relay-runtime").ConnectionHandler.getConnection(
              a,
              d("StoriesArchiveConstants").ARCHIVE.CONNECTION_NAME,
              {
                after_time: o,
                before_time: q,
                orderby: ["local_creation_time_asc"],
              }
            );
            if (a == null) return;
            d("relay-runtime").ConnectionHandler.deleteNode(a, i);
            var b = a.getLinkedRecords("edges") || [];
            a.setValue(b.length, "count");
          },
          e = function (b) {
            a(b);
          };
        d("CometRelay").commitMutation(b, {
          mutation: l,
          optimisticUpdater: e,
          updater: e,
          variables: { input: { archived_story_card_id: i } },
        });
        c("StoriesArchiveCardStoreForBlue").DeletedStoryList.add(i);
        f();
      };
      e = c("StoryDeleteCardDialogBox")({
        mediaType: e,
        onDeleteConfirmClick: n,
        onHideConfirmationDialog: m,
        onOpenConfirmationDialog: a,
        storyOptionType: d("StoriesEnums").STORIES_OPTION_TYPES.MUTE_CARD_OWNER,
      });
      n = e.handleDeleteClick;
      a = e.primaryText;
      return j.jsx(
        c("CometMenuItem.react"),
        { icon: d("fbicon")._(h("483829"), 20), onClick: n, primaryText: a },
        "delete"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesDeleteCardOptionMenuItem.react",
  [
    "ix",
    "CometMenuItem.react",
    "CometRelay",
    "StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql",
    "StoriesEnums",
    "StoriesLoggerContext",
    "StoriesSuspenseContuxActionsContext",
    "StoryDeleteCardDialogBox",
    "fbicon",
    "react",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useContext,
      l =
        i !== void 0
          ? i
          : (i = b(
              "StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql"
            ));
    function a(a) {
      var b = k(c("StoriesLoggerContext")),
        e = b.logger,
        f = d("CometRelay").useRelayEnvironment();
      b = k(c("StoriesSuspenseContuxActionsContext"));
      var g = b.handleCardDeletion,
        i = a.bucketID,
        m = a.cardID;
      b = a.mediaType;
      var n = a.onHideConfirmationDialog;
      a = a.onOpenConfirmationDialog;
      var o = function () {
        e.deleteLog();
        n();
        var a = function (a) {
            a = i != null ? a.get(i) : null;
            if (!a) return;
            var b = a.getLinkedRecord("unified_stories");
            if (b == null) return;
            d("relay-runtime").ConnectionHandler.deleteNode(b, m);
            var c = b.getLinkedRecords("edges") || [];
            b.setValue(c.length, "count");
            b.setValue(c.length === 0, "is_empty");
            c.length === 0 && a.setValue(null, "thumbnail_story_to_show");
          },
          b = function (b) {
            a(b);
          };
        d("CometRelay").commitMutation(f, {
          mutation: l,
          optimisticUpdater: b,
          updater: b,
          variables: { input: { story_ids: [m] } },
        });
        g();
      };
      b = c("StoryDeleteCardDialogBox")({
        mediaType: b,
        onDeleteConfirmClick: o,
        onHideConfirmationDialog: n,
        onOpenConfirmationDialog: a,
        storyOptionType: d("StoriesEnums").STORIES_OPTION_TYPES.MUTE_CARD_OWNER,
      });
      o = b.handleDeleteClick;
      a = b.primaryText;
      return j.jsx(
        c("CometMenuItem.react"),
        {
          icon: d("fbicon")._(h("483829"), 20),
          onClick: o,
          primaryText: a,
          testid: void 0,
        },
        "delete"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesReportBug",
  ["cr:1083606"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1083606");
  },
  98
);
__d(
  "StoriesFileBugOptionMenuItem.react",
  [
    "fbt",
    "ix",
    "CometMenuItem.react",
    "fbicon",
    "react",
    "useStoriesReportBug",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      a = c("useStoriesReportBug")(a);
      var b = a[0];
      a = a[1];
      return j.jsx(
        c("CometMenuItem.react"),
        {
          icon: d("fbicon")._(i("530512"), 20),
          onClick: b,
          primaryText: h._("Something isn't working"),
          ref: a,
        },
        "bug"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesInspectStoryOptionMenuItem.react",
  ["fbt", "ix", "CometMenuItem.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      return j.jsx(c("CometMenuItem.react"), {
        href:
          "https://our.intern.facebook.com/intern/fb_stories/inspector/?id=" +
          a.cardID,
        icon: d("fbicon")._(i("912341"), 20),
        primaryText: h._("[FB Only] Open in Stories Inspector Tool"),
        target: "_blank",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesBucketDelete",
  ["react", "relay-runtime", "useStoriesBucketsConnectionArguments"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b) {
      var e = c("useStoriesBucketsConnectionArguments")(),
        f = e.connectionArguments,
        g = e.connectionName,
        i = h(
          function (c) {
            if (b == null) return;
            if (a != null) {
              var e = c.get(a);
              if (e != null) {
                e = d("relay-runtime").ConnectionHandler.getConnection(e, g, f);
                e != null &&
                  d("relay-runtime").ConnectionHandler.deleteNode(e, b);
              }
            }
            c["delete"](b);
          },
          [a, b, f, g]
        );
      e = h(
        function (a) {
          i(a);
        },
        [i]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesMuteStoryOptionMenuItem.react",
  [
    "fbt",
    "ix",
    "CometMenuItem.react",
    "CometRelay",
    "StoriesEnums",
    "StoriesMuteStoryOptionMenuItem_StoriesMuteMutation.graphql",
    "fbicon",
    "react",
    "useCometConfirmationDialog",
    "useStoriesBucketDelete",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l =
        j !== void 0
          ? j
          : (j = b(
              "StoriesMuteStoryOptionMenuItem_StoriesMuteMutation.graphql"
            ));
    function a(a) {
      var b = d("CometRelay").useRelayEnvironment(),
        e = c("useCometConfirmationDialog")(),
        f = e[0];
      e[1];
      var g = h._("Mute {bucket_owner_name}?", [
          h._param("bucket_owner_name", a.ownerName),
        ]),
        j = function () {
          switch (a.storyCardType) {
            case d("StoriesEnums").STORY_CARD_TYPES.PAGE_STORY:
              return h._(
                "You'll stop seeing their story but can still see posts from this Page."
              );
            case d("StoriesEnums").STORY_CARD_TYPES.EVENT_STORY:
              return h._(
                "You'll stop seeing this story but can still see event updates."
              );
            case d("StoriesEnums").STORY_CARD_TYPES.GROUP_STORY:
              return h._(
                "You'll stop seeing this story but will stay in the group."
              );
          }
          return h._("You'll stop seeing their story but will remain friends.");
        },
        m = c("useStoriesBucketDelete")(a.actorID, a.bucketID),
        n = function () {
          a.onHideConfirmationDialog && a.onHideConfirmationDialog();
          var c = a.ownerID;
          if (c == null) return;
          d("CometRelay").commitMutation(b, {
            mutation: l,
            optimisticUpdater: m,
            updater: m,
            variables: {
              input: { should_unfollow_user_story: !0, user_id: c },
            },
          });
        };
      e = function () {
        f({ body: j(), confirm: h._("Mute"), title: g }, n, function () {
          a.onHideConfirmationDialog && a.onHideConfirmationDialog();
        }),
          a.onOpenConfirmationDialog(
            d("StoriesEnums").STORIES_OPTION_TYPES.MUTE_CARD_OWNER
          );
      };
      var o = function () {
        var b;
        b = (b = a.ownerName) != null ? b : "";
        return h._("Mute {bucket_owner_name}", [
          h._param("bucket_owner_name", b),
        ]);
      };
      return k.jsx(
        c("CometMenuItem.react"),
        { icon: d("fbicon")._(i("577043"), 20), onClick: e, primaryText: o() },
        "mute_bucket_owner"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesReportOptionMenuItem.react",
  [
    "fbt",
    "ix",
    "CometMenuItem.react",
    "ProfileCometFeaturedHighlightsStrings",
    "StoriesBehaviorHelpContext",
    "StoriesEnums",
    "StoriesPauseReasons",
    "StoriesUtils",
    "cr:764837",
    "cr:885544",
    "cr:885545",
    "cr:962207",
    "fbicon",
    "react",
    "setTimeout",
    "useLaunchFRXFlow",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useContext,
      m = e.useEffect,
      n = e.useRef,
      o = "direct_messaging",
      p = "DIRECT_MESSAGING";
    function a(a) {
      var e = a.cardID,
        f = a.setPause,
        g = n(),
        q = d("StoriesUtils").cardID2ThreadID(e);
      a = c("useLaunchFRXFlow")({
        content_id: q || "",
        entry_point: "REPORT_BUTTON",
        location: p,
        trigger_event_type: "REPORT_BUTTON_CLICKED",
      });
      var r = a[0];
      e = l(c("StoriesBehaviorHelpContext")).getBucketType();
      a =
        e === d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY
          ? d("ProfileCometFeaturedHighlightsStrings").REPORT_ITEM
          : h._("Give Feedback or Report Story");
      m(function () {
        if (b("cr:764837") === null) return;
        var a = [
          b("cr:764837").subscribe("lwf/frx/dialogClosed", function () {
            f(!1, d("StoriesPauseReasons").REPORT_DIALOG);
          }),
          b("cr:764837").subscribe("frx/search/dialogClosed", function () {
            f(!1, d("StoriesPauseReasons").REPORT_DIALOG);
          }),
        ];
        return function () {
          c("setTimeout")(function () {
            a.map(function (a) {
              return a.unsubscribe();
            }),
              (a = []);
          }, 10);
        };
      });
      e = k(
        function () {
          if (b("cr:885545") && b("cr:962207") && b("cr:885544")) {
            var a = b("cr:885545").withEntReportable({
              entry_point: "report_button",
              reportable_ent_token: q,
              story_location: o,
            });
            f(!0, d("StoriesPauseReasons").REPORT_DIALOG);
            a = new (b("cr:885544"))().setURI(a);
            a.setRelativeTo(g.current);
            b("cr:962207").send(a);
          }
        },
        [f, q]
      );
      var s = k(
        function () {
          f(!0, d("StoriesPauseReasons").REPORT_DIALOG),
            r({}, function () {
              f(!1, d("StoriesPauseReasons").REPORT_DIALOG);
            });
        },
        [r, f]
      );
      return j.jsx(
        c("CometMenuItem.react"),
        {
          icon: d("fbicon")._(i("490583"), 20),
          onClick: b("cr:885545") && b("cr:962207") && b("cr:885544") ? e : s,
          primaryText: a,
        },
        "report"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesUnfollowPageOptionMenuItem.react",
  [
    "fbt",
    "ix",
    "CometMenuItem.react",
    "CometRelay",
    "StoriesEnums",
    "StoriesUnfollowPageOptionMenuItem_unfollowPageMutation.graphql",
    "fbicon",
    "react",
    "useCometConfirmationDialog",
    "useStoriesBucketDelete",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l =
        j !== void 0
          ? j
          : (j = b(
              "StoriesUnfollowPageOptionMenuItem_unfollowPageMutation.graphql"
            ));
    function a(a) {
      var b = d("CometRelay").useRelayEnvironment(),
        e = c("useCometConfirmationDialog")(),
        f = e[0];
      e[1];
      var g = h._("Unfollow {bucket_owner_name}?", [
          h._param("bucket_owner_name", a.ownerName),
        ]),
        j = c("useStoriesBucketDelete")(a.actorID, a.bucketID),
        m = function () {
          a.onHideConfirmationDialog && a.onHideConfirmationDialog();
          var c = a.ownerID;
          if (c == null) return;
          d("CometRelay").commitMutation(b, {
            mutation: l,
            optimisticUpdater: j,
            updater: j,
            variables: { input: { page_id: c } },
          });
        };
      e = function () {
        f(
          {
            body: h._("You'll stop seeing stories and posts from this page."),
            confirm: h._("Unfollow"),
            title: g,
          },
          m,
          function () {
            a.onHideConfirmationDialog && a.onHideConfirmationDialog();
          }
        ),
          a.onOpenConfirmationDialog(
            d("StoriesEnums").STORIES_OPTION_TYPES.UNFOLLOW_PAGE
          );
      };
      var n = function () {
        var b;
        b = (b = a.ownerName) != null ? b : "";
        return h._("Unfollow {bucket_owner_name}", [
          h._param("bucket_owner_name", b),
        ]);
      };
      return k.jsx(
        c("CometMenuItem.react"),
        { icon: d("fbicon")._(i("578906"), 20), onClick: e, primaryText: n() },
        "unfollow_page"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useStoriesReportCometBug",
  ["StoriesPauseReasons", "react", "useCometReportBug"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var b = c("useCometReportBug")(),
        e = b[0];
      b = b[1];
      var f = h(
          function () {
            a.setPause(!0, d("StoriesPauseReasons").BUG_DIALOG),
              e({ initialProduct: "stories" }, function () {
                a.setPause(!1, d("StoriesPauseReasons").BUG_DIALOG);
              });
          },
          [a, e]
        ),
        g = h(
          function () {
            f();
          },
          [f]
        );
      return [g, b];
    }
    g["default"] = a;
  },
  98
);
__d(
  "StoriesArchiveStoryOptionMenuItem.react",
  [
    "fbt",
    "ix",
    "CometMenuItem.react",
    "ProfileTabConst",
    "StoriesArchiveModuleArchiveGridTtiWwwQPLEvent",
    "XCometProfileControllerRouteBuilder",
    "fbicon",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = c("requireDeferred")("FBStoriesQPLUtils").__setRef(
        "StoriesArchiveStoryOptionMenuItem.react"
      );
    function a(a) {
      a = a.actorID;
      a = c("XCometProfileControllerRouteBuilder").buildURL({
        id: (a = a) != null ? a : "",
        sk: c("ProfileTabConst").STORIES_ARCHIVE,
      });
      var b = function () {
        k.onReady(function (a) {
          a.start({
            navigationStart: !1,
            qplMarker: c("StoriesArchiveModuleArchiveGridTtiWwwQPLEvent"),
          });
        });
      };
      return j.jsx(
        c("CometMenuItem.react"),
        {
          href: a,
          icon: d("fbicon")._(i("689703"), 20),
          onClick: b,
          primaryText: h._("Story Archive"),
        },
        "archive"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSettingsOptionMenuItem.react",
  [
    "fbt",
    "ix",
    "CometLazyDialogTrigger.react",
    "CometMenuItem.react",
    "JSResourceForInteraction",
    "StoriesPauseReasons",
    "fbicon",
    "react",
    "storiesViewerSuspenseEmitter",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = c("JSResourceForInteraction")(
        "StoriesWebSettingsDialog.react"
      ).__setRef("StoriesSettingsOptionMenuItem.react");
    function a(a) {
      a = a.refetchNodes;
      return j.jsx(c("CometLazyDialogTrigger.react"), {
        dialogProps: {
          onBeforeDialogClose: a,
          setPause: c("storiesViewerSuspenseEmitter").requestPause,
        },
        dialogResource: k,
        onShow: function () {
          return c("storiesViewerSuspenseEmitter").requestPause(
            !0,
            d("StoriesPauseReasons").SETTINGS_DIALOG
          );
        },
        children: function (a, b) {
          return j.jsx(
            c("CometMenuItem.react"),
            {
              icon: d("fbicon")._(i("497570"), 20),
              onClick: a,
              primaryText: h._("Settings"),
              ref: b,
            },
            "setting"
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StoriesSuspenseCardOptionMenu.react",
  [
    "CometMenu.react",
    "CometRelay",
    "CometSeparatorMenuItem.react",
    "StoriesActorContext",
    "StoriesArchiveDeleteCardOptionMenuItem.react",
    "StoriesArchiveStoryOptionMenuItem.react",
    "StoriesBehaviorHelpContext",
    "StoriesDeleteCardOptionMenuItem.react",
    "StoriesEnums",
    "StoriesFileBugOptionMenuItem.react",
    "StoriesGating",
    "StoriesInspectStoryOptionMenuItem.react",
    "StoriesLoggerSession",
    "StoriesLoggingConstants",
    "StoriesMuteStoryOptionMenuItem.react",
    "StoriesReportOptionMenuItem.react",
    "StoriesSettingsOptionMenuItem.react",
    "StoriesSuspenseCardOptionMenu_card.graphql",
    "StoriesSuspenseCardOptionMenu_owner.graphql",
    "StoriesUnfollowPageOptionMenuItem.react",
    "gkx",
    "orEmptyArray",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("react"),
      k = d("react").useContext,
      l = (function () {
        function a() {
          this.$1 = [];
        }
        var b = a.prototype;
        b.add = function (a, b) {
          (b != null ? b : !0) && this.$1.push(a);
          return this;
        };
        b.done = function () {
          return c("orEmptyArray")(this.$1);
        };
        return a;
      })();
    function a(a) {
      var e = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("StoriesSuspenseCardOptionMenu_card.graphql")),
          a.card
        ),
        f = d("CometRelay").useFragment(
          i !== void 0
            ? i
            : (i = b("StoriesSuspenseCardOptionMenu_owner.graphql")),
          a.owner
        ),
        g = k(c("StoriesActorContext")),
        m = g.actorID,
        n = e == null ? void 0 : e.id;
      if (n == null) return null;
      function o() {
        var a = e == null ? void 0 : e.attachments;
        return a && (a == null ? void 0 : a.length) > 0
          ? (a = a[0].media) == null
            ? void 0
            : a.__typename
          : null;
      }
      function p() {
        var a;
        return e == null
          ? void 0
          : (a = e.story_card_info) == null
          ? void 0
          : a.story_card_type;
      }
      function q() {
        var a;
        if (f == null) return !1;
        a = e == null ? void 0 : (a = e.via) == null ? void 0 : a.id;
        return a === m || r();
      }
      function r() {
        if (f == null) return !1;
        var a =
          f.viewer_profile_permissions != null &&
          f.viewer_profile_permissions.includes("EDIT_PROFILE");
        return f.id === m || a || !!f.is_viewer_host;
      }
      function s() {
        var b = d("StoriesLoggerSession").getOpenViewerSource(),
          e = k(c("StoriesBehaviorHelpContext")).getBucketType(),
          g = null;
        b === c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE
          ? (g = c("StoriesArchiveDeleteCardOptionMenuItem.react"))
          : (g = c("StoriesDeleteCardOptionMenuItem.react"));
        return r() && e === d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY
          ? null
          : new l()
              .add(
                j.jsx(
                  c("StoriesMuteStoryOptionMenuItem.react"),
                  {
                    actorID: m,
                    bucketID: a.bucketID,
                    onHideConfirmationDialog: a.onHideOptionConfirmationDialog,
                    onOpenConfirmationDialog: a.onShowOptionConfirmationDialog,
                    ownerID: f == null ? void 0 : f.id,
                    ownerName: f == null ? void 0 : f.name,
                    storyCardType: p(),
                  },
                  "mute_owner"
                ),
                !r() &&
                  e !== d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY
              )
              .add(
                j.jsx(
                  c("StoriesUnfollowPageOptionMenuItem.react"),
                  {
                    actorID: m,
                    bucketID: a.bucketID,
                    onHideConfirmationDialog: a.onHideOptionConfirmationDialog,
                    onOpenConfirmationDialog: a.onShowOptionConfirmationDialog,
                    ownerID: f == null ? void 0 : f.id,
                    ownerName: f == null ? void 0 : f.name,
                  },
                  "unfollow_page"
                ),
                !r() && p() === d("StoriesEnums").STORY_CARD_TYPES.PAGE_STORY
              )
              .add(
                j.jsx(
                  c("StoriesReportOptionMenuItem.react"),
                  { cardID: n, setPause: a.setPause },
                  "report"
                ),
                !q()
              )
              .add(
                j.jsx(
                  g,
                  {
                    bucketID: a.bucketID,
                    cardID: n,
                    mediaType: o(),
                    onHideConfirmationDialog: a.onHideOptionConfirmationDialog,
                    onOpenConfirmationDialog: a.onShowOptionConfirmationDialog,
                  },
                  "delete"
                ),
                q()
              )
              .add(
                j.jsx(
                  c("StoriesFileBugOptionMenuItem.react"),
                  { setPause: a.setPause },
                  "bug"
                )
              )
              .add(
                j.jsx(
                  c("StoriesInspectStoryOptionMenuItem.react"),
                  { cardID: n },
                  "inspect"
                ),
                c("gkx")("807313")
              )
              .add(
                j.jsx(c("CometSeparatorMenuItem.react"), {}, "separator"),
                d("StoriesGating").shouldShowViewerV3()
              )
              .add(
                j.jsx(
                  c("StoriesArchiveStoryOptionMenuItem.react"),
                  { actorID: m },
                  "archive"
                ),
                m != null && d("StoriesGating").shouldShowViewerV3()
              )
              .add(
                j.jsx(
                  c("StoriesSettingsOptionMenuItem.react"),
                  { refetchNodes: a.refetchNodes },
                  "setting"
                ),
                d("StoriesGating").shouldShowViewerV3()
              )
              .done();
      }
      return j.jsx("div", {
        "data-testid": void 0,
        children: j.jsx(c("CometMenu.react"), { withArrow: !0, children: s() }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FBStoriesQPLUtils",
  ["QuickPerformanceLogger", "Run"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a.navigationStart
        ? c("QuickPerformanceLogger").markerStartFromNavStart(a.qplMarker)
        : c("QuickPerformanceLogger").markerStart(a.qplMarker, 0),
        d("Run").onUnload(function () {
          c("QuickPerformanceLogger").markerEnd(a.qplMarker, 4);
        });
    }
    function a(a) {
      h(a);
    }
    function b(a) {
      c("QuickPerformanceLogger").markerEnd(
        a.qplMarker,
        a.action ? a.action : 2
      );
    }
    g.start = a;
    g.end = b;
  },
  98
);
