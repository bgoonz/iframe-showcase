if (self.CavalryLogger) {
  CavalryLogger.start_js(["vcYXeir"]);
}

__d(
  "CometFeedStoryMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "4505258252851441",
        metadata: {},
        name: "CometFeedStoryMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "CometFeedStoryActorPhotoSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryActorPhotoSection_story",
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
                    "CometFeedStoryActorCommunityPromptIconStrategy",
                    "CometFeedStoryActorCommunityAttributionStrategy",
                    "CometFeedStoryActorVideoStrategy",
                    "CometFeedStoryActorPhotoStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "actor_photo",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryActorPhotoSection_story",
                      fragmentName:
                        "CometFeedStoryActorCommunityPromptIconStrategy_actorPhoto",
                      fragmentPropName: "actorPhoto",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryActorCommunityPromptIconStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryActorPhotoSection_story",
                      fragmentName:
                        "CometFeedStoryActorCommunityAttributionStrategy_actorPhoto",
                      fragmentPropName: "actorPhoto",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryActorCommunityAttributionStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryActorPhotoSection_story",
                      fragmentName:
                        "CometFeedStoryActorVideoStrategy_actorPhoto",
                      fragmentPropName: "actorPhoto",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryActorVideoStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryActorPhotoSection_story",
                      fragmentName:
                        "CometFeedStoryActorPhotoStrategy_actorPhoto",
                      fragmentPropName: "actorPhoto",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryActorPhotoStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'actor_photo(supported:["CometFeedStoryActorCommunityPromptIconStrategy","CometFeedStoryActorCommunityAttributionStrategy","CometFeedStoryActorVideoStrategy","CometFeedStoryActorPhotoStrategy"])',
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
  "CometFeedStoryMetadataSection_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryMetadataSection_story",
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
                    "CometStoryCommunityAttributionAuthorPostedStrategy",
                    "CometStoryCommunityAttributionGroupPostByStrategy",
                    "CometStoryUserSignalsStrategy",
                    "CometStoryIdentityBadgeStrategy",
                    "CometStorySponsoredLabelStrategy",
                    "CometStorySponsoredPoliticalLabelStrategy",
                    "CometStoryLocationTransparencyStrategy",
                    "CometStoryPostLevelAuthenticityStrategy",
                    "CometStoryAlertBadgeStrategy",
                    "CometStoryPageAdminAttributionStrategy",
                    "CometStoryPaidPartnershipLabelStrategy",
                    "CometFeedStoryBackdatedTimestampStrategy",
                    "CometFeedStoryScheduledTimestampStrategy",
                    "CometFeedStoryMinimizedTimestampStrategy",
                    "CometFeedStoryTimestampStrategy",
                    "GeminiStoryInternLiveEventStrategy",
                    "GeminiStoryInternQAQuestionStrategy",
                    "GeminiStoryInternTaskStrategy",
                    "CometFeedStoryLocationStrategy",
                    "CometFeedStoryApplicationLinkStrategy",
                    "CometFeedStoryPrivacySelectorStrategy",
                    "CometFeedStoryAudienceStrategy",
                    "CometStoryViewedCountStrategy",
                    "CometFeedStoryClassifierDogfoodingStrategy",
                    "CometFeedStoryPollEndtimeStrategy",
                  ],
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "metadata",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryCommunityAttributionAuthorPostedStrategy_strategy",
                      fragmentPropName: "strategy",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryCommunityAttributionAuthorPostedStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryCommunityAttributionGroupPostByStrategy_strategy",
                      fragmentPropName: "strategy",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryCommunityAttributionGroupPostByStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryUserSignalsStrategy_strategy",
                      fragmentPropName: "strategy",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryUserSignalsStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryIdentityBadgeStrategy_identityBadge",
                      fragmentPropName: "identityBadge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryIdentityBadgeStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStorySponsoredLabelStrategy_sponsoredLabel",
                      fragmentPropName: "sponsoredLabel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStorySponsoredLabelStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStorySponsoredPoliticalLabelStrategy_sponsoredLabel",
                      fragmentPropName: "sponsoredLabel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStorySponsoredPoliticalLabelStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryLocationTransparencyStrategy_locationTransparency",
                      fragmentPropName: "locationTransparency",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryLocationTransparencyStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryPostLevelAuthenticityStrategy_postLevelAuthenticity",
                      fragmentPropName: "postLevelAuthenticity",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryPostLevelAuthenticityStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryAlertBadgeStrategy_alertBadge",
                      fragmentPropName: "alertBadge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryAlertBadgeStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryPageAdminAttributionStrategy_adminAttribution",
                      fragmentPropName: "adminAttribution",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryPageAdminAttributionStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryPaidPartnershipLabelStrategy_paidPartnershipLabel",
                      fragmentPropName: "paidPartnershipLabel",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryPaidPartnershipLabelStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryBackdatedTimestampStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryBackdatedTimestampStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryScheduledTimestampStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryScheduledTimestampStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryMinimizedTimestampStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryMinimizedTimestampStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName: "CometFeedStoryTimestampStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryTimestampStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "GeminiFeedStoryInternLiveEventStrategy_internLiveEvent",
                      fragmentPropName: "internLiveEvent",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryInternLiveEventStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "GeminiFeedStoryInternQAQuestionStrategy_internQAQuestion",
                      fragmentPropName: "internQAQuestion",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryInternQAQuestionStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "GeminiFeedStoryInternTaskStrategy_internTask",
                      fragmentPropName: "internTask",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "GeminiStoryInternTaskStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName: "CometFeedStoryLocationStrategy_location",
                      fragmentPropName: "location",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryLocationStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryApplicationLinkStrategy_location",
                      fragmentPropName: "location",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryApplicationLinkStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryPrivacySelectorStrategy_audience",
                      fragmentPropName: "audience",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryPrivacySelectorStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName: "CometFeedStoryAudienceStrategy_audience",
                      fragmentPropName: "audience",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAudienceStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryViewedCountStrategy_viewedCount",
                      fragmentPropName: "viewedCount",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryViewedCountStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryClassifierDogfoodingStrategy_classifierDogfooding",
                      fragmentPropName: "classifierDogfooding",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryClassifierDogfoodingStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryMetadataSection_story",
                      fragmentName:
                        "CometFeedStoryPollEndtimeStrategy_timestamp",
                      fragmentPropName: "timestamp",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryPollEndtimeStrategy",
                  abstractKey: null,
                },
              ],
              storageKey:
                'metadata(supported:["CometStoryCommunityAttributionAuthorPostedStrategy","CometStoryCommunityAttributionGroupPostByStrategy","CometStoryUserSignalsStrategy","CometStoryIdentityBadgeStrategy","CometStorySponsoredLabelStrategy","CometStorySponsoredPoliticalLabelStrategy","CometStoryLocationTransparencyStrategy","CometStoryPostLevelAuthenticityStrategy","CometStoryAlertBadgeStrategy","CometStoryPageAdminAttributionStrategy","CometStoryPaidPartnershipLabelStrategy","CometFeedStoryBackdatedTimestampStrategy","CometFeedStoryScheduledTimestampStrategy","CometFeedStoryMinimizedTimestampStrategy","CometFeedStoryTimestampStrategy","GeminiStoryInternLiveEventStrategy","GeminiStoryInternQAQuestionStrategy","GeminiStoryInternTaskStrategy","CometFeedStoryLocationStrategy","CometFeedStoryApplicationLinkStrategy","CometFeedStoryPrivacySelectorStrategy","CometFeedStoryAudienceStrategy","CometStoryViewedCountStrategy","CometFeedStoryClassifierDogfoodingStrategy","CometFeedStoryPollEndtimeStrategy"])',
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
  "CometActivityLogDispatcherContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(function (a) {
      return void 0;
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometActivityLogContext",
  [
    "CometActivityLogContextBuilder",
    "CometActivityLogContextReducer",
    "CometActivityLogDispatcherContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useReducer,
      j = h.createContext(
        d("CometActivityLogContextBuilder").initialContextObj
      );
    function a(a) {
      a = a.children;
      var b = i(
          d("CometActivityLogContextReducer").CometActivityLogContextReducer,
          d("CometActivityLogContextBuilder").initialContextObj
        ),
        e = b[0];
      b = b[1];
      return h.jsx(j.Provider, {
        value: e,
        children: h.jsx(c("CometActivityLogDispatcherContext").Provider, {
          value: b,
          children: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CometActivityLogContext = j;
    g.CometActivityLogContextProvider = a;
  },
  98
);
__d(
  "PrivacySettingsStrings",
  ["fbt", "formatDate"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 86400;
    d = function () {
      return h._("Home");
    };
    e = function () {
      return h._("Activity Log");
    };
    f = function () {
      return h._("Archive");
    };
    function a(a) {
      return h._("Archived {date_archived}", [
        h._param("date_archived", c("formatDate")(a, "F j, Y")),
      ]);
    }
    var j = function () {
        return h._(
          "Remember, the people you follow can see that you're following them."
        );
      },
      k = function () {
        return h._(
          "Remember, your friends control who can see their friendships on their own timelines. If people can see your friendship on another timeline, they'll be able to see it in News Feed, search and other places on Facebook. If you set this to Only me, only you will be able to see your full friends list on your timeline. Other people will see only mutual friends."
        );
      };
    function b(a) {
      return a < i
        ? h._("Less than 1 day left")
        : h._({ "*": "{number} days left", _1: "1 day left" }, [
            h._plural(Math.trunc(a / i), "number"),
          ]);
    }
    var l = function () {
      return h._("Trash");
    };
    g.getActivityLogHomeString = d;
    g.getActivityLogString = e;
    g.getArchiveString = f;
    g.getArchivedDateLabel = a;
    g.getFriendReminderText = j;
    g.getSubscribedToPrivacySettingsText = k;
    g.getTrashNumDaysRemainingLabel = b;
    g.getTrashString = l;
  },
  98
);
__d(
  "CometActivityLogContextBuilder",
  ["CometActivityLogUtils", "PrivacySettingsStrings"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = [
      d("CometActivityLogUtils").ActivityLogStoreKey.ARCHIVE,
      d("CometActivityLogUtils").ActivityLogStoreKey.LOG,
      d("CometActivityLogUtils").ActivityLogStoreKey.TRASH,
    ];
    b = {
      areNewListItemsLoading: !1,
      isBulkActionInProgress: !1,
      isNavigationInProgress: !1,
    };
    var h = {
      hasNewItems: !1,
      lastRefreshTime: null,
      selectedCategoryKey: null,
      selectedItems: new Set(),
    };
    c = {
      accordionState: new Map(),
      activityHistory: !1,
      category: "ALL",
      categoryLabel: d("PrivacySettingsStrings")
        .getActivityLogString()
        .toLocaleString(),
      loadingState: b,
      manage_mode: !1,
      manageableCategoriesList: [],
      month: null,
      parentCategory: null,
      privacy: "NONE",
      selectedPersonID: null,
      selectedPersonName: null,
      shouldLoadLandingPage: !1,
      storeStates: new Map(
        a.map(function (a) {
          return [a, h];
        })
      ),
      userId: null,
      visibility: "ALL",
      year: null,
    };
    g.ActivityLogStoreKeys = a;
    g.initialStoreStateObj = h;
    g.initialContextObj = c;
  },
  98
);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d(
  "immer-5.3.6",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {},
      h = { exports: g };
    function i() {
      Object.defineProperty(g, "__esModule", { value: !0 });
      var a,
        b = typeof Symbol !== "undefined",
        c = typeof Map !== "undefined",
        d = typeof Set !== "undefined",
        e = b
          ? Symbol("immer-nothing")
          : ((a = {}), (a["immer-nothing"] = !0), a),
        f = b ? Symbol("immer-draftable") : "__$immer_draftable",
        h = b ? Symbol("immer-state") : "__$immer_state",
        i = b ? Symbol.iterator : "@@iterator",
        j = function (a, b) {
          j =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (a, b) {
                a.__proto__ = b;
              }) ||
            function (a, b) {
              for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            };
          return j(a, b);
        };
      function k(a, b) {
        j(a, b);
        function c() {
          this.constructor = a;
        }
        a.prototype = ((c.prototype = b.prototype), new c());
      }
      var l;
      (function (a) {
        (a[(a.Object = 0)] = "Object"),
          (a[(a.Array = 1)] = "Array"),
          (a[(a.Map = 2)] = "Map"),
          (a[(a.Set = 3)] = "Set");
      })(l || (l = {}));
      var m;
      (function (a) {
        (a[(a.ProxyObject = 0)] = "ProxyObject"),
          (a[(a.ProxyArray = 1)] = "ProxyArray"),
          (a[(a.ES5Object = 2)] = "ES5Object"),
          (a[(a.ES5Array = 3)] = "ES5Array"),
          (a[(a.Map = 4)] = "Map"),
          (a[(a.Set = 5)] = "Set");
      })(m || (m = {}));
      function n(a) {
        return !!a && !!a[h];
      }
      function o(a) {
        return !a
          ? !1
          : aa(a) ||
              Array.isArray(a) ||
              !!a[f] ||
              !!a.constructor[f] ||
              v(a) ||
              w(a);
      }
      function aa(a) {
        if (!a || typeof a !== "object") return !1;
        a = Object.getPrototypeOf(a);
        return !a || a === Object.prototype;
      }
      function ba(a) {
        if (a && a[h]) return a[h].base;
      }
      var p =
        typeof Reflect !== "undefined" && Reflect.ownKeys
          ? Reflect.ownKeys
          : typeof Object.getOwnPropertySymbols !== "undefined"
          ? function (a) {
              return Object.getOwnPropertyNames(a).concat(
                Object.getOwnPropertySymbols(a)
              );
            }
          : Object.getOwnPropertyNames;
      function q(a, b) {
        r(a) === l.Object
          ? p(a).forEach(function (c) {
              return b(c, a[c], a);
            })
          : a.forEach(function (c, d) {
              return b(d, c, a);
            });
      }
      function ca(a, b) {
        a = Object.getOwnPropertyDescriptor(a, b);
        return a && a.enumerable ? !0 : !1;
      }
      function r(a) {
        a || B();
        if (a[h])
          switch (a[h].type) {
            case m.ES5Object:
            case m.ProxyObject:
              return l.Object;
            case m.ES5Array:
            case m.ProxyArray:
              return l.Array;
            case m.Map:
              return l.Map;
            case m.Set:
              return l.Set;
          }
        return Array.isArray(a)
          ? l.Array
          : v(a)
          ? l.Map
          : w(a)
          ? l.Set
          : l.Object;
      }
      function s(a, b) {
        return r(a) === l.Map
          ? a.has(b)
          : Object.prototype.hasOwnProperty.call(a, b);
      }
      function t(a, b) {
        return r(a) === l.Map ? a.get(b) : a[b];
      }
      function da(a, b, c) {
        switch (r(a)) {
          case l.Map:
            a.set(b, c);
            break;
          case l.Set:
            a["delete"](b);
            a.add(c);
            break;
          default:
            a[b] = c;
        }
      }
      function u(a, b) {
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        else return a !== a && b !== b;
      }
      function v(a) {
        return c && a instanceof Map;
      }
      function w(a) {
        return d && a instanceof Set;
      }
      function x(a) {
        return a.copy || a.base;
      }
      function y(a, b) {
        b === void 0 && (b = !1);
        if (Array.isArray(a)) return a.slice();
        var c = Object.create(Object.getPrototypeOf(a));
        p(a).forEach(function (d) {
          if (d === h) return;
          var e = Object.getOwnPropertyDescriptor(a, d),
            f = e.value;
          if (e.get) {
            if (!b)
              throw new Error("Immer drafts cannot have computed properties");
            f = e.get.call(a);
          }
          e.enumerable
            ? (c[d] = f)
            : Object.defineProperty(c, d, {
                value: f,
                writable: !0,
                configurable: !0,
              });
        });
        return c;
      }
      function z(a, b) {
        if (!o(a) || n(a) || Object.isFrozen(a)) return;
        var c = r(a);
        c === l.Set
          ? (a.add = a.clear = a["delete"] = A)
          : c === l.Map && (a.set = a.clear = a["delete"] = A);
        Object.freeze(a);
        b &&
          q(a, function (a, b) {
            return z(b, !0);
          });
      }
      function A() {
        throw new Error(
          "This object has been frozen and should not be mutated"
        );
      }
      function ea(a, b, c) {
        Object.defineProperty(a, b, { value: c, enumerable: !1, writable: !0 });
      }
      function B() {
        throw new Error("Illegal state, please file a bug");
      }
      var C = (function () {
        function a(a, b) {
          (this.drafts = []),
            (this.parent = a),
            (this.immer = b),
            (this.canAutoFreeze = !0);
        }
        a.prototype.usePatches = function (a) {
          a &&
            ((this.patches = []),
            (this.inversePatches = []),
            (this.patchListener = a));
        };
        a.prototype.revoke = function () {
          this.leave(), this.drafts.forEach(fa), (this.drafts = null);
        };
        a.prototype.leave = function () {
          this === a.current && (a.current = this.parent);
        };
        a.enter = function (b) {
          b = new a(a.current, b);
          a.current = b;
          return b;
        };
        return a;
      })();
      function fa(a) {
        a = a[h];
        a.type === m.ProxyObject || a.type === m.ProxyArray
          ? a.revoke()
          : (a.revoked = !0);
      }
      function D(a, b, c) {
        var d = c.drafts[0],
          f = b !== void 0 && b !== d;
        a.willFinalize(c, b, f);
        if (f) {
          if (d[h].modified) {
            c.revoke();
            throw new Error(
              "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft."
            );
          }
          o(b) && ((b = E(a, b, c)), c.parent || H(a, b));
          c.patches &&
            (c.patches.push({ op: "replace", path: [], value: b }),
            c.inversePatches.push({
              op: "replace",
              path: [],
              value: d[h].base,
            }));
        } else b = E(a, d, c, []);
        c.revoke();
        c.patches && c.patchListener(c.patches, c.inversePatches);
        return b !== e ? b : void 0;
      }
      function E(a, b, c, d) {
        var e = b[h];
        if (!e) return Object.isFrozen(b) ? b : F(a, b, c);
        if (e.scope !== c) return b;
        if (!e.modified) {
          H(a, e.base, !0);
          return e.base;
        }
        if (!e.finalized) {
          e.finalized = !0;
          F(a, e.draft, c, d);
          if (a.onDelete && e.type !== m.Set)
            if (a.useProxies) {
              b = e.assigned;
              q(b, function (b, c) {
                c || a.onDelete(e, b);
              });
            } else {
              b = e.base;
              var f = e.copy;
              q(b, function (b) {
                s(f, b) || a.onDelete(e, b);
              });
            }
          a.onCopy && a.onCopy(e);
          a.autoFreeze && c.canAutoFreeze && z(e.copy, !1);
          d && c.patches && ra(e, d, c.patches, c.inversePatches);
        }
        return e.copy;
      }
      function F(a, b, c, d) {
        var e = b[h];
        e &&
          ((e.type === m.ES5Object || e.type === m.ES5Array) &&
            (e.copy = y(e.draft, !0)),
          (b = e.copy));
        q(b, function (f, g) {
          return G(a, c, b, e, b, f, g, d);
        });
        return b;
      }
      function G(a, b, c, d, e, f, g, h) {
        if (g === e) throw Error("Immer forbids circular references");
        var i = !!d && e === c,
          j = w(e);
        if (n(g)) {
          var k = h && i && !j && !s(d.assigned, f) ? h.concat(f) : void 0;
          g = E(a, g, b, k);
          da(e, f, g);
          n(g) && (b.canAutoFreeze = !1);
        } else if (i && u(g, t(d.base, f))) return;
        else
          o(g) &&
            (q(g, function (e, f) {
              return G(a, b, c, d, g, e, f, h);
            }),
            b.parent || H(a, g));
        i && a.onAssign && !j && a.onAssign(d, f, g);
      }
      function H(a, b, c) {
        c === void 0 && (c = !1), a.autoFreeze && !n(b) && z(b, c);
      }
      function ga(a, b) {
        var c = Array.isArray(a);
        b = {
          type: c ? m.ProxyArray : m.ProxyObject,
          scope: b ? b.scope : C.current,
          modified: !1,
          finalized: !1,
          assigned: {},
          parent: b,
          base: a,
          draft: null,
          drafts: {},
          copy: null,
          revoke: null,
          isManual: !1,
        };
        a = b;
        var d = I;
        c && ((a = [b]), (d = J));
        c = Proxy.revocable(a, d);
        a = c.revoke;
        d = c.proxy;
        b.draft = d;
        b.revoke = a;
        return d;
      }
      var I = {
          get: function (a, b) {
            if (b === h) return a;
            var c = a.drafts;
            if (!a.modified && s(c, b)) return c[b];
            var d = x(a)[b];
            if (a.finalized || !o(d)) return d;
            if (a.modified) {
              if (d !== K(a.base, b)) return d;
              c = a.copy;
            }
            return (c[b] = a.scope.immer.createProxy(d, a));
          },
          has: function (a, b) {
            return b in x(a);
          },
          ownKeys: function (a) {
            return Reflect.ownKeys(x(a));
          },
          set: function (a, b, c) {
            if (!a.modified) {
              var d = K(a.base, b);
              d = c ? u(d, c) || c === a.drafts[b] : u(d, c) && b in a.base;
              if (d) return !0;
              M(a);
              L(a);
            }
            a.assigned[b] = !0;
            a.copy[b] = c;
            return !0;
          },
          deleteProperty: function (a, b) {
            K(a.base, b) !== void 0 || b in a.base
              ? ((a.assigned[b] = !1), M(a), L(a))
              : a.assigned[b] && delete a.assigned[b];
            a.copy && delete a.copy[b];
            return !0;
          },
          getOwnPropertyDescriptor: function (a, b) {
            var c = x(a);
            c = Reflect.getOwnPropertyDescriptor(c, b);
            c &&
              ((c.writable = !0),
              (c.configurable = a.type !== m.ProxyArray || b !== "length"));
            return c;
          },
          defineProperty: function () {
            throw new Error(
              "Object.defineProperty() cannot be used on an Immer draft"
            );
          },
          getPrototypeOf: function (a) {
            return Object.getPrototypeOf(a.base);
          },
          setPrototypeOf: function () {
            throw new Error(
              "Object.setPrototypeOf() cannot be used on an Immer draft"
            );
          },
        },
        J = {};
      q(I, function (a, b) {
        J[a] = function () {
          arguments[0] = arguments[0][0];
          return b.apply(this, arguments);
        };
      });
      J.deleteProperty = function (a, b) {
        if (isNaN(parseInt(b)))
          throw new Error("Immer only supports deleting array indices");
        return I.deleteProperty.call(this, a[0], b);
      };
      J.set = function (a, b, c) {
        if (b !== "length" && isNaN(parseInt(b)))
          throw new Error(
            "Immer only supports setting array indices and the 'length' property"
          );
        return I.set.call(this, a[0], b, c, a[0]);
      };
      function K(a, b) {
        var c = a[h];
        c = Reflect.getOwnPropertyDescriptor(c ? x(c) : a, b);
        return c && c.value;
      }
      function L(a) {
        if (!a.modified) {
          a.modified = !0;
          if (a.type === m.ProxyObject || a.type === m.ProxyArray) {
            var b = (a.copy = y(a.base));
            q(a.drafts, function (a, c) {
              b[a] = c;
            });
            a.drafts = void 0;
          }
          a.parent && L(a.parent);
        }
      }
      function M(a) {
        a.copy || (a.copy = y(a.base));
      }
      function ha(a, b, c) {
        a.drafts.forEach(function (a) {
          a[h].finalizing = !0;
        }),
          !c
            ? (a.patches && U(a.drafts[0]), T(a.drafts))
            : n(b) && b[h].scope === a && T(a.drafts);
      }
      function ia(a, b) {
        var c = Array.isArray(a),
          d = Q(a);
        q(d, function (b) {
          la(d, b, c || ca(a, b));
        });
        b = {
          type: c ? m.ES5Array : m.ES5Object,
          scope: b ? b.scope : C.current,
          modified: !1,
          finalizing: !1,
          finalized: !1,
          assigned: {},
          parent: b,
          base: a,
          draft: d,
          copy: null,
          revoked: !1,
          isManual: !1,
        };
        ea(d, h, b);
        return d;
      }
      function N(a, b) {
        var c = a[h];
        if (c && !c.finalizing) {
          c.finalizing = !0;
          var d = a[b];
          c.finalizing = !1;
          return d;
        }
        return a[b];
      }
      function ja(a, b) {
        S(a);
        var c = N(x(a), b);
        if (a.finalizing) return c;
        if (c === N(a.base, b) && o(c)) {
          P(a);
          return (a.copy[b] = a.scope.immer.createProxy(c, a));
        }
        return c;
      }
      function ka(a, b, c) {
        S(a);
        a.assigned[b] = !0;
        if (!a.modified) {
          if (u(c, N(x(a), b))) return;
          O(a);
          P(a);
        }
        a.copy[b] = c;
      }
      function O(a) {
        a.modified || ((a.modified = !0), a.parent && O(a.parent));
      }
      function P(a) {
        a.copy || (a.copy = Q(a.base));
      }
      function Q(a) {
        var b = a && a[h];
        if (b) {
          b.finalizing = !0;
          var c = y(b.draft, !0);
          b.finalizing = !1;
          return c;
        }
        return y(a);
      }
      var R = {};
      function la(a, b, c) {
        var d = R[b];
        d
          ? (d.enumerable = c)
          : (R[b] = d =
              {
                configurable: !0,
                enumerable: c,
                get: function () {
                  return ja(this[h], b);
                },
                set: function (a) {
                  ka(this[h], b, a);
                },
              });
        Object.defineProperty(a, b, d);
      }
      function S(a) {
        if (a.revoked === !0)
          throw new Error(
            "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " +
              JSON.stringify(x(a))
          );
      }
      function T(a) {
        for (var b = a.length - 1; b >= 0; b--) {
          var c = a[b][h];
          if (!c.modified)
            switch (c.type) {
              case m.ES5Array:
                V(c) && O(c);
                break;
              case m.ES5Object:
                ma(c) && O(c);
                break;
            }
        }
      }
      function U(a) {
        if (!a || typeof a !== "object") return;
        var b = a[h];
        if (!b) return;
        var c = b.base,
          d = b.draft,
          e = b.assigned;
        a = b.type;
        if (a === m.ES5Object)
          q(d, function (a) {
            if (a === h) return;
            c[a] === void 0 && !s(c, a) ? ((e[a] = !0), O(b)) : e[a] || U(d[a]);
          }),
            q(c, function (a) {
              d[a] === void 0 && !s(d, a) && ((e[a] = !1), O(b));
            });
        else if (a === m.ES5Array) {
          V(b) && (O(b), (e.length = !0));
          if (d.length < c.length)
            for (var a = d.length; a < c.length; a++) e[a] = !1;
          else for (var a = c.length; a < d.length; a++) e[a] = !0;
          var f = Math.min(d.length, c.length);
          for (var a = 0; a < f; a++) e[a] === void 0 && U(d[a]);
        }
      }
      function ma(a) {
        var b = a.base;
        a = a.draft;
        var c = Object.keys(a);
        for (var d = c.length - 1; d >= 0; d--) {
          var e = c[d],
            f = b[e];
          if (f === void 0 && !s(b, e)) return !0;
          else {
            e = a[e];
            var g = e && e[h];
            if (g ? g.base !== f : !u(e, f)) return !0;
          }
        }
        return c.length !== Object.keys(b).length;
      }
      function V(a) {
        var b = a.draft;
        if (b.length !== a.base.length) return !0;
        a = Object.getOwnPropertyDescriptor(b, b.length - 1);
        return a && !a.get ? !0 : !1;
      }
      var na = (function (b) {
        if (!b) throw new Error("Map is not polyfilled");
        k(a, b);
        function a(a, b) {
          this[h] = {
            type: m.Map,
            parent: b,
            scope: b ? b.scope : C.current,
            modified: !1,
            finalized: !1,
            copy: void 0,
            assigned: void 0,
            base: a,
            draft: this,
            isManual: !1,
            revoked: !1,
          };
          return this;
        }
        b = a.prototype;
        Object.defineProperty(b, "size", {
          get: function () {
            return x(this[h]).size;
          },
          enumerable: !0,
          configurable: !0,
        });
        b.has = function (a) {
          return x(this[h]).has(a);
        };
        b.set = function (a, b) {
          var c = this[h];
          S(c);
          x(c).get(a) !== b &&
            (W(c),
            c.scope.immer.markChanged(c),
            c.assigned.set(a, !0),
            c.copy.set(a, b),
            c.assigned.set(a, !0));
          return this;
        };
        b["delete"] = function (a) {
          if (!this.has(a)) return !1;
          var b = this[h];
          S(b);
          W(b);
          b.scope.immer.markChanged(b);
          b.assigned.set(a, !1);
          b.copy["delete"](a);
          return !0;
        };
        b.clear = function () {
          var a = this[h];
          S(a);
          W(a);
          a.scope.immer.markChanged(a);
          a.assigned = new Map();
          return a.copy.clear();
        };
        b.forEach = function (a, b) {
          var c = this,
            d = this[h];
          x(d).forEach(function (d, e, f) {
            a.call(b, c.get(e), e, c);
          });
        };
        b.get = function (a) {
          var b = this[h];
          S(b);
          var c = x(b).get(a);
          if (b.finalized || !o(c)) return c;
          if (c !== b.base.get(a)) return c;
          c = b.scope.immer.createProxy(c, b);
          W(b);
          b.copy.set(a, c);
          return c;
        };
        b.keys = function () {
          return x(this[h]).keys();
        };
        b.values = function () {
          var a,
            b = this,
            c = this.keys();
          return (
            (a = {}),
            (a[i] = function () {
              return b.values();
            }),
            (a.next = function () {
              var a = c.next();
              if (a.done) return a;
              a = b.get(a.value);
              return { done: !1, value: a };
            }),
            a
          );
        };
        b.entries = function () {
          var a,
            b = this,
            c = this.keys();
          return (
            (a = {}),
            (a[i] = function () {
              return b.entries();
            }),
            (a.next = function () {
              var a = c.next();
              if (a.done) return a;
              var d = b.get(a.value);
              return { done: !1, value: [a.value, d] };
            }),
            a
          );
        };
        b[i] = function () {
          return this.entries();
        };
        return a;
      })(Map);
      function oa(a, b) {
        return new na(a, b);
      }
      function W(a) {
        a.copy || ((a.assigned = new Map()), (a.copy = new Map(a.base)));
      }
      var pa = (function (b) {
        if (!b) throw new Error("Set is not polyfilled");
        k(a, b);
        function a(a, b) {
          this[h] = {
            type: m.Set,
            parent: b,
            scope: b ? b.scope : C.current,
            modified: !1,
            finalized: !1,
            copy: void 0,
            base: a,
            draft: this,
            drafts: new Map(),
            revoked: !1,
            isManual: !1,
          };
          return this;
        }
        b = a.prototype;
        Object.defineProperty(b, "size", {
          get: function () {
            return x(this[h]).size;
          },
          enumerable: !0,
          configurable: !0,
        });
        b.has = function (a) {
          var b = this[h];
          S(b);
          if (!b.copy) return b.base.has(a);
          if (b.copy.has(a)) return !0;
          return b.drafts.has(a) && b.copy.has(b.drafts.get(a)) ? !0 : !1;
        };
        b.add = function (a) {
          var b = this[h];
          S(b);
          b.copy
            ? b.copy.add(a)
            : b.base.has(a) ||
              (X(b), b.scope.immer.markChanged(b), b.copy.add(a));
          return this;
        };
        b["delete"] = function (a) {
          if (!this.has(a)) return !1;
          var b = this[h];
          S(b);
          X(b);
          b.scope.immer.markChanged(b);
          return (
            b.copy["delete"](a) ||
            (b.drafts.has(a) ? b.copy["delete"](b.drafts.get(a)) : !1)
          );
        };
        b.clear = function () {
          var a = this[h];
          S(a);
          X(a);
          a.scope.immer.markChanged(a);
          return a.copy.clear();
        };
        b.values = function () {
          var a = this[h];
          S(a);
          X(a);
          return a.copy.values();
        };
        b.entries = function () {
          var a = this[h];
          S(a);
          X(a);
          return a.copy.entries();
        };
        b.keys = function () {
          return this.values();
        };
        b[i] = function () {
          return this.values();
        };
        b.forEach = function (a, b) {
          var c = this.values(),
            d = c.next();
          while (!d.done) a.call(b, d.value, d.value, this), (d = c.next());
        };
        return a;
      })(Set);
      function qa(a, b) {
        return new pa(a, b);
      }
      function X(a) {
        a.copy ||
          ((a.copy = new Set()),
          a.base.forEach(function (b) {
            if (o(b)) {
              var c = a.scope.immer.createProxy(b, a);
              a.drafts.set(b, c);
              a.copy.add(c);
            } else a.copy.add(b);
          }));
      }
      function ra(a, b, c, d) {
        switch (a.type) {
          case m.ProxyObject:
          case m.ES5Object:
          case m.Map:
            return ta(a, b, c, d);
          case m.ES5Array:
          case m.ProxyArray:
            return sa(a, b, c, d);
          case m.Set:
            return ua(a, b, c, d);
        }
      }
      function sa(b, c, d, e) {
        var a,
          f = b.base,
          g = b.assigned;
        b = b.copy;
        b || B();
        b.length < f.length &&
          (((a = [b, f]), (f = a[0]), (b = a[1])),
          ((a = [e, d]), (d = a[0]), (e = a[1])));
        a = b.length - f.length;
        var h = 0;
        while (f[h] === b[h] && h < f.length) ++h;
        var i = f.length;
        while (i > h && f[i - 1] === b[i + a - 1]) --i;
        for (var h = h; h < i; ++h)
          if (g[h] && b[h] !== f[h]) {
            var j = c.concat([h]);
            d.push({ op: "replace", path: j, value: b[h] });
            e.push({ op: "replace", path: j, value: f[h] });
          }
        g = d.length;
        for (var h = i + a - 1; h >= i; --h) {
          var j = c.concat([h]);
          d[g + h - i] = { op: "add", path: j, value: b[h] };
          e.push({ op: "remove", path: j });
        }
      }
      function ta(a, b, c, d) {
        var e = a.base,
          f = a.copy;
        q(a.assigned, function (a, g) {
          var h = t(e, a),
            i = t(f, a);
          g = g ? (s(e, a) ? "replace" : "add") : "remove";
          if (h === i && g === "replace") return;
          a = b.concat(a);
          c.push(
            g === "remove" ? { op: g, path: a } : { op: g, path: a, value: i }
          );
          d.push(
            g === "add"
              ? { op: "remove", path: a }
              : g === "remove"
              ? { op: "add", path: a, value: h }
              : { op: "replace", path: a, value: h }
          );
        });
      }
      function ua(a, b, c, d) {
        var e = a.base,
          f = a.copy,
          g = 0;
        e.forEach(function (a) {
          if (!f.has(a)) {
            var e = b.concat([g]);
            c.push({ op: "remove", path: e, value: a });
            d.unshift({ op: "add", path: e, value: a });
          }
          g++;
        });
        g = 0;
        f.forEach(function (a) {
          if (!e.has(a)) {
            var f = b.concat([g]);
            c.push({ op: "add", path: f, value: a });
            d.unshift({ op: "remove", path: f, value: a });
          }
          g++;
        });
      }
      function Y(a, b) {
        b.forEach(function (b) {
          var c = b.path,
            d = b.op;
          c.length || B();
          var e = a;
          for (var f = 0; f < c.length - 1; f++) {
            e = t(e, c[f]);
            if (!e || typeof e !== "object")
              throw new Error(
                "Cannot apply patch, path doesn't resolve: " + c.join("/")
              );
          }
          f = r(e);
          var g = Z(b.value);
          c = c[c.length - 1];
          switch (d) {
            case "replace":
              switch (f) {
                case l.Map:
                  return e.set(c, g);
                case l.Set:
                  throw new Error('Sets cannot have "replace" patches.');
                default:
                  return (e[c] = g);
              }
            case "add":
              switch (f) {
                case l.Array:
                  return e.splice(c, 0, g);
                case l.Map:
                  return e.set(c, g);
                case l.Set:
                  return e.add(g);
                default:
                  return (e[c] = g);
              }
            case "remove":
              switch (f) {
                case l.Array:
                  return e.splice(c, 1);
                case l.Map:
                  return e["delete"](c);
                case l.Set:
                  return e["delete"](b.value);
                default:
                  return delete e[c];
              }
            default:
              throw new Error("Unsupported patch operation: " + d);
          }
        });
        return a;
      }
      function Z(a) {
        if (!a || typeof a !== "object") return a;
        if (Array.isArray(a)) return a.map(Z);
        if (v(a))
          return new Map(
            Array.from(a.entries()).map(function (a) {
              var b = a[0];
              a = a[1];
              return [b, Z(a)];
            })
          );
        if (w(a)) return new Set(Array.from(a).map(Z));
        var b = Object.create(Object.getPrototypeOf(a));
        for (var c in a) b[c] = Z(a[c]);
        return b;
      }
      function va() {
        for (var a = 0, b = 0, c = arguments.length; b < c; b++)
          a += arguments[b].length;
        for (var d = Array(a), e = 0, b = 0; b < c; b++)
          for (var f = arguments[b], g = 0, h = f.length; g < h; g++, e++)
            d[e] = f[g];
        return d;
      }
      function $() {}
      var wa = {
        useProxies:
          typeof Proxy !== "undefined" &&
          typeof Proxy.revocable !== "undefined" &&
          typeof Reflect !== "undefined",
        autoFreeze:
          typeof process !== "undefined" ? !1 : $.name === "verifyMinified",
        onAssign: null,
        onDelete: null,
        onCopy: null,
      };
      a = (function () {
        function a(a) {
          var b = this;
          this.useProxies = !1;
          this.autoFreeze = !1;
          q(wa, function (d, e) {
            var c;
            b[d] =
              ((c = (c = a) === null || c === void 0 ? void 0 : c[d]),
              c !== null && c !== void 0 ? c : e);
          });
          this.setUseProxies(this.useProxies);
          this.produce = this.produce.bind(this);
          this.produceWithPatches = this.produceWithPatches.bind(this);
        }
        a.prototype.produce = function (a, b, c) {
          var d = this;
          if (typeof a === "function" && typeof b !== "function") {
            var f = b;
            b = a;
            var g = this;
            return function (a) {
              var d = arguments,
                c = this;
              a === void 0 && (a = f);
              var e = [];
              for (var h = 1; h < arguments.length; h++) e[h - 1] = d[h];
              return g.produce(a, function (a) {
                return b.call.apply(b, va([c, a], e));
              });
            };
          }
          if (typeof b !== "function")
            throw new Error(
              "The first or second argument to `produce` must be a function"
            );
          if (c !== void 0 && typeof c !== "function")
            throw new Error(
              "The third argument to `produce` must be a function or undefined"
            );
          if (o(a)) {
            var h = C.enter(this),
              i = this.createProxy(a, void 0),
              j = !0;
            try {
              (i = b(i)), (j = !1);
            } finally {
              j ? h.revoke() : h.leave();
            }
            if (typeof Promise !== "undefined" && i instanceof Promise)
              return i.then(
                function (a) {
                  h.usePatches(c);
                  return D(d, a, h);
                },
                function (a) {
                  h.revoke();
                  throw a;
                }
              );
            h.usePatches(c);
            return D(this, i, h);
          } else {
            i = b(a);
            if (i === e) return void 0;
            i === void 0 && (i = a);
            H(this, i, !0);
            return i;
          }
        };
        a.prototype.produceWithPatches = function (a, b, c) {
          var d = this;
          if (typeof a === "function")
            return function (b) {
              var c = arguments,
                e = [];
              for (var f = 1; f < arguments.length; f++) e[f - 1] = c[f];
              return d.produceWithPatches(b, function (b) {
                return a.apply(void 0, va([b], e));
              });
            };
          c && B();
          var e, f;
          c = this.produce(a, b, function (a, b) {
            (e = a), (f = b);
          });
          return [c, e, f];
        };
        a.prototype.createDraft = function (a) {
          if (!o(a))
            throw new Error(
              "First argument to `createDraft` must be a plain object, an array, or an immerable object"
            );
          var b = C.enter(this);
          a = this.createProxy(a, void 0);
          a[h].isManual = !0;
          b.leave();
          return a;
        };
        a.prototype.finishDraft = function (a, b) {
          a = a && a[h];
          if (!a || !a.isManual)
            throw new Error(
              "First argument to `finishDraft` must be a draft returned by `createDraft`"
            );
          if (a.finalized)
            throw new Error("The given draft is already finalized");
          a = a.scope;
          a.usePatches(b);
          return D(this, void 0, a);
        };
        a.prototype.setAutoFreeze = function (a) {
          this.autoFreeze = a;
        };
        a.prototype.setUseProxies = function (a) {
          this.useProxies = a;
        };
        a.prototype.applyPatches = function (a, b) {
          var c;
          for (c = b.length - 1; c >= 0; c--) {
            var d = b[c];
            if (d.path.length === 0 && d.op === "replace") {
              a = d.value;
              break;
            }
          }
          return n(a)
            ? Y(a, b)
            : this.produce(a, function (a) {
                return Y(a, b.slice(c + 1));
              });
        };
        a.prototype.createProxy = function (a, b) {
          a = v(a)
            ? oa(a, b)
            : w(a)
            ? qa(a, b)
            : this.useProxies
            ? ga(a, b)
            : ia(a, b);
          b = b ? b.scope : C.current;
          b.drafts.push(a);
          return a;
        };
        a.prototype.willFinalize = function (a, b, c) {
          this.useProxies || ha(a, b, c);
        };
        a.prototype.markChanged = function (a) {
          this.useProxies ? L(a) : O(a);
        };
        return a;
      })();
      b = new a();
      $ = b.produce;
      var xa = b.produceWithPatches.bind(b),
        ya = b.setAutoFreeze.bind(b),
        za = b.setUseProxies.bind(b),
        Aa = b.applyPatches.bind(b),
        Ba = b.createDraft.bind(b);
      b = b.finishDraft.bind(b);
      function Ca(a) {
        return a;
      }
      function Da(a) {
        return a;
      }
      g.Immer = a;
      g.applyPatches = Aa;
      g.castDraft = Ca;
      g.castImmutable = Da;
      g.createDraft = Ba;
      g["default"] = $;
      g.finishDraft = b;
      g.immerable = f;
      g.isDraft = n;
      g.isDraftable = o;
      g.nothing = e;
      g.original = ba;
      g.produce = $;
      g.produceWithPatches = xa;
      g.setAutoFreeze = ya;
      g.setUseProxies = za;
    }
    var j = !1;
    function k() {
      j || ((j = !0), i());
      return h.exports;
    }
    function a(a) {
      switch (a) {
        case void 0:
          return k();
      }
    }
    e.exports = a;
  },
  null
);
__d(
  "FBImmer",
  ["immer-5.3.6"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("immer-5.3.6")();
    b = a["default"];
    d = a.setAutoFreeze;
    e = a.immerable;
    d(!1);
    g.produce = b;
    g.immerable = e;
  },
  98
);
__d(
  "CometActivityLogContextReducer",
  ["CometActivityLogContextBuilder", "CometActivityLogUtils", "FBImmer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return d("FBImmer").produce(a, function (a) {
        switch (b.type) {
          case "add_selected_item":
            d("CometActivityLogUtils")
              .getStoreFromStoreKey(b.value.storeKey, a)
              .selectedItems.add(b.value.item);
            break;
          case "add_selected_items":
            var c = d("CometActivityLogUtils").getStoreFromStoreKey(
                b.value.storeKey,
                a
              ),
              e = c.selectedItems;
            b.value.items.forEach(function (a) {
              return e.add(a);
            });
            break;
          case "clear_selected_items":
            d("CometActivityLogUtils")
              .getStoreFromStoreKey(b.value, a)
              .selectedItems.clear();
            break;
          case "clear_store_for_routing":
            a.selectedPersonID = null;
            a.selectedPersonName = null;
            a.year = null;
            a.month = null;
            a.storeStates = new Map(
              d("CometActivityLogContextBuilder").ActivityLogStoreKeys.map(
                function (a) {
                  return [
                    a,
                    d("CometActivityLogContextBuilder").initialStoreStateObj,
                  ];
                }
              )
            );
            break;
          case "remove_selected_item":
            d("CometActivityLogUtils")
              .getStoreFromStoreKey(b.value.storeKey, a)
              .selectedItems["delete"](b.value.item);
            break;
          case "set_filters":
            Object.assign(a, babelHelpers["extends"]({}, a, b.value));
            break;
          case "set_category":
            a.category = b.value;
            break;
          case "set_parent_category":
            a.parentCategory = b.value;
            break;
          case "set_category_label":
            a.categoryLabel = b.value;
            break;
          case "set_manage_mode":
            a.manage_mode = (c = b.value) != null ? c : !1;
            break;
          case "set_selected_person_id":
            a.selectedPersonID = b.value;
            break;
          case "set_selected_person_name":
            a.selectedPersonName = b.value;
            break;
          case "set_selected_parent_category_key":
            d("CometActivityLogUtils").getStoreFromStoreKey(
              b.value.storeKey,
              a
            ).selectedCategoryKey = b.value.selectedCategoryKey;
            break;
          case "set_has_new_items":
            d("CometActivityLogUtils").getStoreFromStoreKey(
              b.value.storeKey,
              a
            ).hasNewItems = b.value.hasNewItems;
            d("CometActivityLogUtils").getStoreFromStoreKey(
              b.value.storeKey,
              a
            ).lastRefreshTime = Date.now().toString();
            break;
          case "set_are_new_list_items_loading":
            a.loadingState.areNewListItemsLoading = b.value;
            break;
          case "set_is_bulk_action_in_progress":
            a.loadingState.isBulkActionInProgress = b.value;
            break;
          case "set_is_navigation_in_progress":
            a.loadingState.isNavigationInProgress = b.value;
            break;
          case "set_year":
            a.year = b.value;
            break;
          case "set_month":
            a.month = b.value;
            break;
          case "set_should_load_landing_page":
            a.shouldLoadLandingPage = b.value;
            break;
          case "set_manageable_categories_list":
            a.manageableCategoriesList = b.value;
            break;
          case "set_activity_history":
            a.activityHistory = b.value;
            break;
          case "set_accordion_is_open":
            b.value.categoryKey != null &&
              (a.accordionState.clear(),
              a.accordionState.set(b.value.categoryKey, b.value.isOpen));
            break;
          case "clear_accordion_state":
            a.accordionState.clear();
        }
      });
    }
    g.CometActivityLogContextReducer = a;
  },
  98
);
__d(
  "ContentAccessAndControlFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743465");
    c = b("FalcoLoggerInternal").create("content_access_and_control", a);
    e.exports = c;
  },
  null
);
__d(
  "CometActivityLogUtils",
  [
    "$InternalEnum",
    "CometActivityLogContext",
    "CometActivityLogContextBuilder",
    "CometActivityLogDispatcherContext",
    "ContentAccessAndControlFalcoEvent",
    "gkx",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext,
      i = b("$InternalEnum").Mirrored(["ARCHIVE", "TRASH", "LOG", "MANAGE"]);
    function j() {
      return h(d("CometActivityLogContext").CometActivityLogContext);
    }
    function a() {
      return h(c("CometActivityLogDispatcherContext"));
    }
    function k(a, b) {
      return (b = b.storeStates.get(a !== i.MANAGE ? a : i.LOG)) != null
        ? b
        : d("CometActivityLogContextBuilder").initialStoreStateObj;
    }
    function e(a) {
      return a.loadingState.isBulkActionInProgress ||
        a.loadingState.isNavigationInProgress
        ? !0
        : !1;
    }
    function f(a) {
      return a !== y() && a !== C() ? !1 : !0;
    }
    function l(a) {
      if (a != null)
        switch (a) {
          case y():
            return !0;
          case C():
            return !0;
          case z():
            return !0;
          case B():
            return !0;
          case A():
            return !0;
          default:
            return !1;
        }
      return !1;
    }
    function m(a, b) {
      return a.some(function (a) {
        return a.filter_key === b;
      });
    }
    function n(a) {
      switch (a) {
        case y():
          return i.ARCHIVE;
        case C():
          return i.TRASH;
        default:
          return i.LOG;
      }
    }
    function o(a, b) {
      a = n(a);
      return k(a, b);
    }
    function p(a) {
      var b = j();
      return k(a, b).selectedItems;
    }
    function q(a, b, c, d) {
      return function () {
        a > 0 &&
        b != null &&
        b.cancel_label != null &&
        b.confirm_label != null &&
        b.title != null
          ? d(
              {
                body: b.description,
                cancel: b.cancel_label,
                confirm: b.confirm_label,
                title: b.title,
              },
              c
            )
          : c();
      };
    }
    function r() {
      return "CATEGORY";
    }
    function s() {
      return "PERSON";
    }
    function t() {
      return "DATE";
    }
    function u() {
      return i.ARCHIVE;
    }
    function v() {
      return i.TRASH;
    }
    function w() {
      return i.LOG;
    }
    function x() {
      return i.MANAGE;
    }
    function y() {
      return "ARCHIVED";
    }
    function z() {
      return "MANAGEYOURPOSTS";
    }
    function A() {
      return "MANAGEINTERACTIONS";
    }
    function B() {
      return "MANAGEYOURTAGS";
    }
    function C() {
      return "TRASH";
    }
    function D() {
      return "ALL";
    }
    function E() {
      return "review";
    }
    function F() {
      return "tagreview";
    }
    function G() {
      return "facealerts";
    }
    function H() {
      return "HIDDENSTORIES";
    }
    function I() {
      return "TAGSBYOTHERSCLUSTER";
    }
    function J() {
      return "FRIENDS";
    }
    function K() {
      return "FOLLOWCLUSTER";
    }
    function L() {
      return "SEARCH";
    }
    function M() {
      return "timeline";
    }
    function N() {
      return "homepage_stream";
    }
    function O() {
      return "HIDE_FROM_TIMELINE";
    }
    function P() {
      return [y(), C(), z(), B(), A()];
    }
    function Q(a, b, d) {
      a != null &&
        (a === M() || a === N()) &&
        c("ContentAccessAndControlFalcoEvent").log(function () {
          return {
            control: d,
            event: b,
            is_access: !1,
            is_bulk: !1,
            is_control: !0,
            surface: R(a),
          };
        });
    }
    function R(a) {
      return a === M()
        ? "post_chevron_menu_timeline"
        : "post_chevron_menu_news_feed";
    }
    function S(a) {
      return a === y();
    }
    function T(a) {
      return a === C();
    }
    function U(a) {
      var b,
        d = j(),
        e = P(),
        f = c("gkx")("1639147");
      b = (b = c("qex")._("415")) != null ? b : !1;
      return (
        (f && e.includes(a)) ||
        (b && !d.activityHistory && d.manageableCategoriesList.includes(a))
      );
    }
    function V(a) {
      switch (a) {
        case "DELETE":
          return "DELETE";
        case "MOVE_TO_ARCHIVE":
          return "ARCHIVE";
        case "MOVE_TO_TRASH":
          return "MOVE_TO_TRASH";
        case "UNTAG":
          return "REMOVE_TAG";
        case "RESTORE_FROM_ARCHIVE":
          return "RESTORE_FROM_ARCHIVE";
        case "RESTORE_FROM_TRASH":
          return "RESTORE_FROM_TRASH";
        case "REMOVE_INTERACTION":
          return "DELETE";
        default:
          return null;
      }
    }
    function W(a) {
      return "category_" + a.toLowerCase();
    }
    function X(a) {
      return "landing_page_category_" + a.toLowerCase();
    }
    function Y(a) {
      switch (a) {
        case "UNTAG":
          return "bulk_manage_tags";
        case "REMOVE_INTERACTION":
          return "bulk_manage_interactions";
        default:
          return null;
      }
    }
    g.ActivityLogStoreKey = i;
    g.useCometActivityLogStore = j;
    g.useCometActivityLogDispatcher = a;
    g.getStoreFromStoreKey = k;
    g.isCometActivityLogLoading = e;
    g.isCategoryKeyArchiveOrTrash = f;
    g.isOnManageMode = l;
    g.shouldShowManageActivityFilter = m;
    g.getStoreKeyForCategory = n;
    g.currentActivityLogStore = o;
    g.useStoreSelectedItems = p;
    g.showNumItemsConfirmationDialog = q;
    g.getFilterKeyForCategory = r;
    g.getFilterKeyForPerson = s;
    g.getFilterKeyForDate = t;
    g.getStoreKeyForArchive = u;
    g.getStoreKeyForTrash = v;
    g.getStoreKeyForLog = w;
    g.getStoreKeyForManage = x;
    g.getCategoryKeyForArchive = y;
    g.getCategoryKeyForManage = z;
    g.getCategoryKeyForManageInteractions = A;
    g.getCategoryKeyForManageTags = B;
    g.getCategoryKeyForTrash = C;
    g.getCategoryKeyForAll = D;
    g.getCategoryKeyForTimelineReview = E;
    g.getCategoryKeyForTagReview = F;
    g.getCategoryKeyForPhotoReview = G;
    g.getCategoryKeyForHiddenFromProfile = H;
    g.getCategoryKeyForTagsByOthersCluster = I;
    g.getCategoryKeyForFriends = J;
    g.getCategoryKeyForFollowCluster = K;
    g.getCategoryKeyForSearch = L;
    g.getStoryRenderLocationKeyForTimeline = M;
    g.getStoryRenderLocationKeyForHomepage = N;
    g.getActionTypeForHideFromTimeline = O;
    g.getManageableCategories = P;
    g.maybeLogControl = Q;
    g.getPrivacyLoggingSourceFromStoryRenderLocation = R;
    g.onArchivePage = S;
    g.onTrashPage = T;
    g.useIsManageMode = U;
    g.getSingleMenuOptionFromBulkAction = V;
    g.getSubCategoryNameForLogging = W;
    g.getLandingPageCategoryNameForLogging = X;
    g.getSourceNameForBulkActionKey = Y;
  },
  98
);
__d(
  "ProductTagPostClickFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744228");
    c = b("FalcoLoggerInternal").create("product_tag_post_click", a);
    e.exports = c;
  },
  null
);
__d(
  "CometProductTagLoggingUtils",
  ["ProductTagPostClickFalcoEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a, b, d, e, f, g) {
      c("ProductTagPostClickFalcoEvent").log(function () {
        return {
          ad_id: a,
          component: b,
          funnel_id: d,
          marketplace_surface: e,
          post_id: f,
          referral_code: g,
        };
      });
    };
    b = function (a) {
      var b;
      a === "AYMTNotificationChannel"
        ? (b = "aymt_retro_tag_jewel")
        : a === "AYMTEmailChannel"
        ? (b = "aymt_retro_tag_email")
        : a === "AYMTPageAdminMegaphoneV2Channel" ||
          a === "AYMTPageAdminMegaphoneChannel"
        ? (b = "aymt_retro_tag_megaphone")
        : a === "AYMTUnknownChannel" && (b = "aymt_unknown_channel");
      return b;
    };
    g.logProductTagPostClick = a;
    g.getAYMTChannelName = b;
  },
  98
);
__d(
  "CometFeedStoryMenu.entrypoint",
  [
    "CometFeedStoryMenuQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var c = a.feedLocation,
          e = a.id,
          f = a.serializedFRTPIdentifiers;
        a = a.storyDebugInfo;
        return {
          queries: {
            menuQueryReference: {
              parameters: b("CometFeedStoryMenuQuery$Parameters"),
              variables: {
                feed_location: c,
                id: e,
                scale: d("WebPixelRatio").get(),
                serialized_frtp_identifiers: f,
                story_debug_info: a,
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")("CometFeedStoryMenu.react").__setRef(
        "CometFeedStoryMenu.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryActorPhotoSection.react",
  [
    "CometFeedMatchRenderer.react",
    "CometFeedStoryActorPhotoSection_story.graphql",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "react",
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
          : (h = b("CometFeedStoryActorPhotoSection_story.graphql")),
        a.story
      );
      return i.jsx("div", {
        className: "oi9244e8 do00u71z j83agx80",
        children: i.jsx(c("CometTrackingNodeProvider.react"), {
          trackingNode: 3,
          children: i.jsx(c("CometFeedMatchRenderer.react"), {
            match: (e = a.comet_sections) == null ? void 0 : e.actor_photo,
            section: "actor_photo",
            trackingData: a == null ? void 0 : a.encrypted_tracking,
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
  "CometFeedStoryMenuSectionBase.react",
  [
    "CometActivityLogUtils",
    "CometEntryPointPopoverTrigger.react",
    "CometFeedStoryMenu.entrypoint",
    "CometStoryRenderLocationContext.react",
    "CometTrackingNodeProvider.react",
    "ProfileCometContext",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = c("requireDeferred")("ContentAccessAndControlEventType").__setRef(
        "CometFeedStoryMenuSectionBase.react"
      ),
      k = c("requireDeferred")("ContentAccessAndControlFalcoEvent").__setRef(
        "CometFeedStoryMenuSectionBase.react"
      );
    function a(a) {
      var b = a.feedLocation,
        e = a.id,
        f = a.outerWrapperRenderer,
        g = a.popoverPosition,
        l = a.serializedFRTPIdentifiers,
        m = a.storyDebugInfo,
        n = a.triggerChildRenderer;
      a = a.variables;
      var o = i(c("ProfileCometContext"));
      o = o.isInViewAs;
      var p = i(c("CometStoryRenderLocationContext.react"));
      if (e == null) return null;
      if (b === "GROUP_ADMIN_TO_MEMBER_FEEDBACK") return null;
      if (b === "ACTOR_GATEWAY") return null;
      if (o) return null;
      l = h.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 55,
        children: h.jsx(c("CometEntryPointPopoverTrigger.react"), {
          align: "end",
          entryPointParams: {
            feedLocation: b,
            id: e,
            serializedFRTPIdentifiers: l,
            storyDebugInfo: m,
          },
          otherProps: { feedLocation: b, variables: a },
          popoverEntryPoint: c("CometFeedStoryMenu.entrypoint"),
          popoverType: "menu",
          position: (o = g) != null ? o : "below",
          preloadTrigger: "button",
          tracePolicy: "comet.feed.story.menu",
          children: function (a, b, c, f, g, h) {
            return n({
              contextRef: a,
              id: e,
              onHoverInPrerenderer: f,
              onHoverOutPrerenderer: g,
              onPress: function () {
                (p ===
                  d(
                    "CometActivityLogUtils"
                  ).getStoryRenderLocationKeyForTimeline() ||
                  p ===
                    d(
                      "CometActivityLogUtils"
                    ).getStoryRenderLocationKeyForHomepage()) &&
                  k.onReady(function (a) {
                    var b = j.getModuleIfRequireable();
                    if (b == null) return;
                    a.log(function () {
                      return {
                        event: b.IMPRESSION,
                        is_access: !0,
                        is_bulk: !1,
                        is_control: !1,
                        surface: d(
                          "CometActivityLogUtils"
                        ).getPrivacyLoggingSourceFromStoryRenderLocation(p),
                      };
                    });
                  }),
                  b();
              },
              onPressInPrerenderer: h,
            });
          },
        }),
      });
      return f != null ? f({ contents: l }) : l;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMenuSection.react",
  [
    "fbt",
    "ix",
    "CometFeedStoryMenuSectionBase.react",
    "TetraIcon.react",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback,
      l = {
        root: {
          alignSelf: "nqmvxvec",
          display: "j83agx80",
          height: "jnigpg78",
          paddingTop: "cxgpxx05",
          paddingEnd: "dflh9lhu",
          paddingBottom: "sj5x9vvc",
          paddingStart: "scb9dxdr",
          width: "odw8uiq3",
        },
      },
      m = j.forwardRef(function (a, b) {
        var d = a.additionalOnPressHandler,
          e = a.onPress;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "additionalOnPressHandler",
          "onPress",
        ]);
        var f = k(
          function (a) {
            d && d(), e && e(a);
          },
          [d, e]
        );
        return j.jsx(
          c("TetraIcon.react"),
          babelHelpers["extends"]({}, a, { onPress: f, ref: b })
        );
      });
    function a(a) {
      var b = a.additionalOnPressHandler,
        e = a.color,
        f = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "additionalOnPressHandler",
        "color",
        "xstyle",
      ]);
      var g = k(
          function (a) {
            var c,
              f = a.contextRef,
              g = a.id;
            g = a.onHoverInPrerenderer;
            var k = a.onHoverOutPrerenderer,
              l = a.onPress;
            a = a.onPressInPrerenderer;
            return j.jsx(m, {
              additionalOnPressHandler: b,
              "aria-label": h._("Actions for this post"),
              color: (c = e) != null ? c : "secondary",
              icon: d("fbicon")._(i("484387"), 20),
              onHoverIn: g,
              onHoverOut: k,
              onPress: l,
              onPressIn: a,
              ref: f,
              testid: void 0,
            });
          },
          [b, e]
        ),
        n = k(
          function (a) {
            a = a.contents;
            return j.jsx("div", {
              className: c("stylex")(l.root, f),
              children: a,
            });
          },
          [f]
        );
      return j.jsx(
        c("CometFeedStoryMenuSectionBase.react"),
        babelHelpers["extends"](
          { outerWrapperRenderer: n, triggerChildRenderer: g },
          a
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMetadataSection.react",
  [
    "CometFeedARIAProperties.react",
    "CometFeedStoryMetadataSection_story.graphql",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext;
    function a(a) {
      var e,
        f = a.privacySelectorRenderLocation;
      a = a.story;
      var g = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometFeedStoryMetadataSection_story.graphql")),
        a
      );
      a = j(c("CometFeedARIAProperties.react"));
      e = (e = g.comet_sections) == null ? void 0 : e.metadata;
      return i.jsx(
        "span",
        babelHelpers["extends"]({}, a.metaTargetProps, {
          ref: a.metaTargetRef,
          children:
            e == null
              ? void 0
              : e.map(function (a, b) {
                  return i.jsx(
                    d("CometRelay").MatchContainer,
                    {
                      match: a,
                      props: {
                        privacySelectorRenderLocation: f,
                        tracking: g.encrypted_tracking,
                      },
                    },
                    b
                  );
                }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ContentAccessAndControlEventType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CLICK_BEGIN: "content_access_and_control_click_begin",
      CLICK_CANCEL: "content_access_and_control_click_cancel",
      CLICK_CONFIRM: "content_access_and_control_click_confirm",
      IMPRESSION: "content_access_and_control_impression",
      ENT_STORY_ACTION: "content_access_and_control_ent_story_action",
      SERVER_MUTATION_BEGIN: "content_access_and_control_mutation_begin",
      SERVER_MUTATION_FAILURE: "content_access_and_control_mutation_failure",
      SERVER_MUTATION_SUCCESS: "content_access_and_control_mutation_success",
    });
    f["default"] = a;
  },
  66
);
